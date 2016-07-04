
# HAIKU BOT

import twitter
import requests
import nltk

import random
import os
import json

from datetime import date
from nltk.corpus import cmudict

from local_settings import *

WORDNIK_URL      =   "http://api.wordnik.com:80/v4/"
WORDNIK_API_KEY  =   "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"

RETRY_THRESHOLD = 10
MEMO = [None] * 10

CMU_DICT = None
NATURE_DICT = json.load(open('words/nature_syllables'))


### TWITTER FUNCTIONS


def connect():

    #print api.VerifyCredentials()

    return api


def construct_tweet():

    while True:
        haiku = ""
        haiku += construct_line(5) + "\n"
        haiku += construct_line(7) + "\n"
        haiku += construct_line(5) + "\n"
        if len(haiku) < 140:
            break

    print ""
    print haiku
    print ""

    if not DEBUG:

        api = twitter.Api(consumer_key=MY_CONSUMER_KEY,
                          consumer_secret=MY_CONSUMER_SECRET,
                          access_token_key=MY_ACCESS_TOKEN_KEY,
                          access_token_secret=MY_ACCESS_TOKEN_SECRET)

        print "POSTING TWEET..."
        status = api.PostUpdate(haiku)
        print "posted tweet. status: " + str(status)


### LANGUAGE FUNCTIONS


def construct_line(num_syllables):
    
    current_line = ""
    syls_left = num_syllables

    while syls_left != 0:
        line, syls = random.choice(NATURE_DICT.items())
        if int(syls) < 1:
            print "WTF: line '" + line + "' has < 1 syls"
            continue
        if int(syls) > syls_left:
            continue
        current_line += line + ". "
        syls_left -= int(syls)
        #print "current line is '" + current_line + "'"
        #print "(" + str(syls_left) + " syls left)"
    return current_line


def line_syllables(line):
    total = 0
    for x in line.split():
        syls = syllables(x)
        if syls == 0:
            print "ERROR: could not retrieve syllables for line: '" + line + "'"
            return 0
        total += syls
    print str(total) + " syllables for line: '" + line + "'"
    return total


def syllables(word):

    if not word:
        return 0

    syls = syllables_wordnik_algo(word)

    if not syls:
        syls = syllables_cmu_algo(word)
        print "cmu algo returned " + str(syls) + " syllables for word: '" + word + "'"

    if not syls:
        print "ERROR: could not retrieve syllables for word: '" + word + "'"

    return syls


def syllables_wordnik_algo(word):
    """
    lookup word from wordnik's hyphenation api
    often faulty because wordnik doesn't have hyphenation for all words?
    """
    result = requests.get(WORDNIK_URL + "word.json/" + word + "/hyphenation?useCanonical=false&limit=50&api_key=" + WORDNIK_API_KEY).json()
    syls = len(result)
    #print "wordnik algo returned " + str(syls) + " syllables for " + word
    return syls


def syllables_cmu_algo(word):
    """
    clever algorithm from https://groups.google.com/d/msg/nltk-users/mCOh_u7V8_I/HsBNcLYM54EJ
    uses pronunciation dictionary from cmu
    only used if wordnik fails

    actually finds a list of valid pronunciations... right now we just return the first
    """
    global CMU_DICT

    if not CMU_DICT:
        nltk.data.path[0] = os.getcwd() + '/nltk_data/'
        CMU_DICT = cmudict.dict()

    try:
        syls = [len(list(y for y in x if isdigit(y[-1]))) for x in CMU_DICT[word.lower()]]
        #print "cmu algo returned " + str(syls) + " syllables for word: '" + word + "'"
        return syls[0]
    except:
        #print "ERROR: cmu algo could not find word: '" + word + "'"
        return 0


def wotd():
    return requests.get(WORDNIK_URL + "words.json/wordOfTheDay?date=" + date.today().isoformat() + "&api_key=" + WORDNIK_API_KEY).json()['word']


def random_word(num_syllables):

    global MEMO

    min_len = num_syllables + 3

    #try retrieving from storage
    word = MEMO[num_syllables]
    if word != None:
        MEMO[num_syllables] = None
        #print "retrieved from storage"
        return word

    #brute force this I guess
    retries = 0
    while retries < RETRY_THRESHOLD:
        word = requests.get(WORDNIK_URL + "words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=9000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=" + str(min_len) + "&maxLength=-1&api_key=" + WORDNIK_API_KEY).json()['word']
        syls = syllables(word)
        #print "got word " + word + " with " + str(syls) + " syllables"
        if syls == 0:
            continue
        if syls != num_syllables:
            # memoize
            if MEMO[syls] == None:
                MEMO[syls] = word
                #print "stored"
        else:
            #print "woots"
            return word
        #print "trying again"
        retries += 1

    #print "FAILED, FALLING BACK"
    return random.choice(open('words/' + str(num_syllables)).readlines()).strip('\n')


### UTIL FUNCTIONS


def isdigit(a):
    return a in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
                u'0',u'1',u'2',u'3',u'4',u'5',u'6',u'7',u'8',u'9']


def test():
    got = [""] * 10
    print got
    for i in range(1, 7):
        print "want " + str(i) + " syllable word: "
        word = random_word(i)
        print "have " + str(i) + " syllable word: '" + word + "'"
        print "------------------------------------"
        got[i] = word


def syllablize_file(file):
    d = {}
    for line in open(file).readlines():
        line = line.strip()
        syls = line_syllables(line)
        if syls == 0:
            syls = line_syllables(line.replace('-', ' '))
        d[line] = syls
    print d
    json.dump(d, open(file + "_syllables", 'w'), sort_keys=True, indent=4)


if __name__=="__main__":
    
    construct_tweet()