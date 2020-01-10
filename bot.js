


var HashtagCount = require("hashtag-count")
require('dotenv').config();

var hc = new HashtagCount({
  'consumer_key': process.env.CONSUMER_KEY,
  'consumer_secret': process.env.CONSUMER_SECRET,
  'access_token': process.env.ACCESS_TOKEN,
  'access_token_secret': process.env.ACCESS_TOKEN_SECRET
});

var hashtags = ['worldwar3', 'trump', 'iran'];
var interval = '10 seconds';
var limit = '30 seconds';
var finishedCb = function (err, results) {
  if (err) {
    console.error(err);
  } else {
    console.log(results);
  }
};
hc.start({
  hashtags: hashtags,       
  interval: interval,       
  limit: limit,             
  finishedCb: finishedCb,   
});