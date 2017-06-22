// var Twit = require('twit');
 
// var T = new Twit({
//   consumer_key:         'NLIz3bKX4epxElBZuMWVWRVFd',
//   consumer_secret:      'JybJnjzlpXdYMeDMbajhyC5hON4p9Rx45ncrpcpNgBiUT2t8P4',
//   access_token:         '354560445-yORXyDHD6U3ZhxCgvfoqpe1eOhsGwNZmqTjblaCw',
//   access_token_secret:  'cQBm8WWoRkX6XrBtyziJfC4AMOUqF8PjPrnORwQfep1A8',
  
// });

// var params = {
// 	q: 'Lonzo Ball',
// 	count: 2
// };

// T.get('search/tweets', params, gotData);

// function gotData(err, data, response) {
// 	var tweets = data.statuses[0].text;
// 	console.log(tweets);
// }

var http = require('http'),
var fs = require('fs');


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});
