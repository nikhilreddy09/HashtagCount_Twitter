//npm module to count number of hashtags
var HashtagCount = require("hashtag-count")
const express = require('express')
var bodyParser = require('body-parser');

require('dotenv').config();

var hc = new HashtagCount({
  'consumer_key': process.env.CONSUMER_KEY,
  'consumer_secret': process.env.CONSUMER_SECRET,
  'access_token': process.env.ACCESS_TOKEN,
  'access_token_secret': process.env.ACCESS_TOKEN_SECRET
});

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', function (req, res, next) {
  res.sendfile('./home.html');
});

app.post('/submit-form' , (req,res) => {
  const name1 = req.body.name1
  const name2 = req.body.name2
  const name3 = req.body.name3
  
  console.log(name1 , name2 , name3)

  count(name1,name2,name3)

  res.end()
})

var count = function(name1,name2,name3) {
//giving the hashtags for which we want to see the count
 var hashtags = [name1,name2,name3];
// //time interval
 var interval = '15 seconds'
//time limit for the program
var limit = '15 seconds'
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
      console.log(final)
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

}
app.listen(port , () => {
  console.log("server is up on " + port)
 })
 



