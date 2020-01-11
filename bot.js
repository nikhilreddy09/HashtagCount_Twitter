//npm module to count number of hashtags
var HashtagCount = require("hashtag-count")
require('dotenv').config();

var hc = new HashtagCount({
  'consumer_key': process.env.CONSUMER_KEY,
  'consumer_secret': process.env.CONSUMER_SECRET,
  'access_token': process.env.ACCESS_TOKEN,
  'access_token_secret': process.env.ACCESS_TOKEN_SECRET
});

// //giving the hashtags for which we want to see the count
 var hashtags = ['obama', 'trump', 'modi'];
// //time interval
 var interval = '15 seconds';
//time limit for the program
var limit = '15 seconds';
var finishedCb = function (err, results) {
  if (err) {
    console.error(err);
  } else {
      //give the result set to obj
      console.log(results)
      let obj = results
      //get the values of the object into answer
      let answer = Object.values(obj)
      //get the object from the final array
      let final = answer[0]
      //get individual elements from the object
      console.log(final.obama)
      //get the total object values.
      console.log(Object.values(obj));
  }
};
//initializing.
hc.start({
  hashtags: hashtags,       
  interval: interval,       
  limit: limit,             
  finishedCb: finishedCb,   
});


