//npm module to count number of hashtags
var HashtagCount = require("hashtag-count")
require('dotenv').config();

var hc = new HashtagCount({
  'consumer_key': process.env.CONSUMER_KEY,
  'consumer_secret': process.env.CONSUMER_SECRET,
  'access_token': process.env.ACCESS_TOKEN,
  'access_token_secret': process.env.ACCESS_TOKEN_SECRET
});

//giving the hashtags for which we want to see the count
var hashtags = ['worldwar3', 'trump', 'iran'];
//time interval
var interval = '10 seconds';
//time limit for the program
var limit = '30 seconds';
var finishedCb = function (err, results) {
  if (err) {
    console.error(err);
  } else {
    console.log(results);
  }
};
//initializing.
hc.start({
  hashtags: hashtags,       
  interval: interval,       
  limit: limit,             
  finishedCb: finishedCb,   
});