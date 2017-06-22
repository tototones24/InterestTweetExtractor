//@author Antonio Contreras
//credit to https://www.youtube.com/watch?v=7-nX3YOC4OA for the awesome tutorials 
//on the twit api

var Twit = require('twit');
var prompt = require('prompt');

prompt.start();
console.log("What are you interested in?")
prompt.get([{
    name: 'Interest',
    required: true,
    type: 'string'
}], function (err, result) {

console.log('Command-line input received:');
console.log('Interest: ' + result.Interest);


var T = new Twit({
  consumer_key:         'XXX',
  consumer_secret:      'XXX',
  access_token:         'XXX',
  access_token_secret:  'XXX',
  
});


var answer = result.Interest

var params = {
	q: answer,
	count: 8
};

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
	var tweets = data.statuses[0].text;
	console.log(tweets);
}

});
 

	


