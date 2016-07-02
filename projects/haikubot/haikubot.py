import twitter
from local_settings import *

def connect():
    api = twitter.Api(consumer_key=MY_CONSUMER_KEY,
                      consumer_secret=MY_CONSUMER_SECRET,
                      access_token_key=MY_ACCESS_TOKEN_KEY,
                      access_token_secret=MY_ACCESS_TOKEN_SECRET)

    #print api.VerifyCredentials()

    return api
    


def create_tweet():
    return "wow, my first automated tweet! #heroku #testing #myFirstTweet #camelCase"



                                                    
if __name__=="__main__":
    
    api = connect()
    tweet = create_tweet()

    print "posting tweet: " + tweet

    if DEBUG==False:
        status = api.PostUpdate(tweet)
    else:
        print "jk"