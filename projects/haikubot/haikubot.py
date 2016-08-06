# coding: utf-8

# HAIKU BOT

import twitter
import requests
import nltk
import yweather

import random
import os
import json
import re

from datetime import date
from nltk.corpus import cmudict

from local_settings import *

WORDNIK_URL      =   "http://api.wordnik.com:80/v4/"
WORDNIK_API_KEY  =   "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"

RETRY_THRESHOLD = 10
MEMO = [None] * 10

CMU_DICT = None
NATURE_DICT = json.load(open('words/nature_syllables'))

TWITTER_API = None

# use a giant web url matching regex bc why not
# https://gist.github.com/gruber/8891611
URL_REGEX = re.compile(r"""(?i)\b((?:https?:(?:/{1,3}|[a-z0-9%])|[a-z0-9.\-]+[.](?:com|net|org|edu|gov|mil|aero|asia|biz|cat|coop|info|int|jobs|mobi|museum|name|post|pro|tel|travel|xxx|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|Ja|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)/)(?:[^\s()<>{}\[\]]+|\([^\s()]*?\([^\s()]+\)[^\s()]*?\)|\([^\s]+?\))+(?:\([^\s()]*?\([^\s()]+\)[^\s()]*?\)|\([^\s]+?\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’])|(?:(?<!@)[a-z0-9]+(?:[.\-][a-z0-9]+)*[.](?:com|net|org|edu|gov|mil|aero|asia|biz|cat|coop|info|int|jobs|mobi|museum|name|post|pro|tel|travel|xxx|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|Ja|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)\b/?(?!@)))""")

# strip twitter handles and emails
HANDLE_REGEX = re.compile(r'([A-Za-z0-9_\.]*)@([A-Za-z0-9_\.]+)')


### TWITTER FUNCTIONS


def connect():

    global TWITTER_API

    TWITTER_API = twitter.Api(consumer_key=MY_CONSUMER_KEY,
                              consumer_secret=MY_CONSUMER_SECRET,
                              access_token_key=MY_ACCESS_TOKEN_KEY,
                              access_token_secret=MY_ACCESS_TOKEN_SECRET)

    #print TWITTER_API.VerifyCredentials()


def print_hashtags():

    client = yweather.Client()
    where = client.fetch_woeid('USA')
    try:
        trends = TWITTER_API.GetTrendsWoeid(where)
    except:
        trends = TWITTER_API.GetTrends()
        print "no trends found? yikes"

    for trend in trends[:10]:
        print trend.AsDict()['name']


def construct_tweet(hashtag=None):

    if hashtag:
        current_dict = construct_dict(hashtag)
    
    # covers no hashtag case and construct_dict failure case
    if not current_dict:
        current_dict = NATURE_DICT

    while True:
        haiku = ""
        haiku += construct_line(5, current_dict) + "\n"
        haiku += construct_line(7, current_dict) + "\n"
        haiku += construct_line(5, current_dict) + "\n"
        if len(haiku) < 140:
            break

    print ""
    print haiku
    print ""


def post_tweet(tweet):
    if not DEBUG:
        print "POSTING TWEET..."
        status = TWITTER_API.PostUpdate(tweet)
        print "posted tweet. status: " + str(status)


### LANGUAGE FUNCTIONS


def construct_dict(hashtag):

    hashtag = hashtag.lower().replace("#", "")

    with open('words/' + hashtag, 'w') as f:

        # get tweets with hashtag
        results = TWITTER_API.GetSearch(term=hashtag)
        
        
        #print results

        #extract and sanitize lines
        lines = [x.AsDict()['text'] for x in results]
        for line in lines:
            """
            TODO:
            replace 4th with fourth (could happen in syllablize_file)??
            """
            print "before: '" + line + "'"
            # remove twitter handles and email addresses
            line = re.sub(HANDLE_REGEX, "", line)
            # remove links
            line = re.sub(URL_REGEX, "", line)
            # break hashtags into parseable words
            line = split_hashtags(line)
            print "after:  '" + line + "'"
            print "---------------"

            line += "\n"
            f.write(line.encode('utf8'))

    with open('words/' + hashtag, 'r') as f:
        print
        print "the dict for hashtag " + hashtag + " so far:"
        print f.read().decode('utf8')

        # syllablize file

    return {}


def construct_line(num_syllables, current_dict=NATURE_DICT):
    
    current_line = ""
    syls_left = num_syllables

    while syls_left != 0:
        line, syls = random.choice(current_dict.items())
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

    line = split_hashtags(line)

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

    word = word.replace('#', '')

    if not word:
        return 0

    syls = syllables_wordnik_algo(word)

    if not syls:
        syls = syllables_cmu_algo(word)
        print "cmu algo returned " + str(syls) + " syllables for word: '" + word + "'"

    if not syls:
        print "ERROR: could not retrieve syllables for word: '" + word + "'"

    return syls


def split_hashtags(line):

    result = []
    for word in line.replace("#", "").split():
        if not word[0].isupper() or len(word) == 1:
            result.append(word)
            continue
        for chunk in re.findall('[A-Z][^A-Z]*', word):
            if len(chunk) == 1:
                return line
            result.append(chunk)

    for chunk in result:
        if not syllables(chunk):
            return line
    return " ".join(result)


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


if __name__=="__main__":
    
    connect()

    # print_hashtags()

    construct_dict("July")

    #tweet = construct_tweet(hashtag)

    #post_tweet()