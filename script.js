

$(document).ready(function() {
	var quotes = new Array (
		
		"Protection and power are overrated. I think you are very wise to choose happiness and love. There are reasons each of us are born. We have to find those reasons.",
							
		"Sometimes life is like this dark tunnel, you can’t always see the light at the end of the tunnel, but if you just keep moving, you will come to a better place.", 
											
		"It is important to draw wisdom from different places. If you take it from only one place it become rigid and stale.",
		
		"While it is always best to believe in one’s self, a little help from others can be a great blessing.",
	
		"You have light and peace inside of you. If you let it out, you can change the world around you",
		
		"Sometimes the best way to solve your own problems is to help someone else"
	);
	$("#button").click(function() {
		$("#quote").text(quotes[Math.floor(Math.random() * quotes.length)])

	});
});

/* tweet link */ 

function tweetLink() {
	var url="https://twitter.com/intent/tweet?text=" + $('#quote').text();
	return window.open(url);
}

$("#click-to-tweet").click(tweetLink);



/* quotes source :: https://anuradhaedirisuriya.wordpress.com/2011/03/06/irohs-inspirational-quotes/
*/



