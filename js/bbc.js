//Event listner when DOM is loaded
function getNews(){
	// URL from Yahoo Query Language, which gives JSON data for RSS-FEED
	var url = "https://query.yahooapis.com/v1/public/yql?q=select*%20from%20rss%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.bbci.co.uk%2Fnepali%2Frss.xml'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=?"

	$.getJSON(url, function(news){
		console.log(news);
		var count = 0;
		$.each(news.query.results.item, function(index, news){
			
			var card = $("<div style='width: 14rem;'>");
			var imgLink = news.thumbnail.url;
			var date = new Date(news.pubDate)
				.toLocaleString()
			
			var pDate = new Date(news.pubDate);
			var now = new Date();
			var x = Math.abs(pDate - now)/36e5; //36e5 is the scientific notation for 60*60*1000, dividing by which converts the milliseconds difference into hours
			
			//Filter recent news within 24 hrs
			if(x <= 48){
				count ++; //For number of news counting - debugging purpose
				$("<img src='" + imgLink + "'>")
					.appendTo(card)
					.addClass("card-img-top");

				var cardBody = $("<div>")
					.appendTo(card)
					.addClass("card-body px-2 pt-0");

				$("<div>")
					.text(date)
					.addClass("date")
					.appendTo(cardBody);

				$("<h6>")
					.text(news.title)
					.appendTo(cardBody)
					.addClass("card-title title");

				$("<p>")
					.text(news.description)
					.appendTo(cardBody)
					.addClass("card-text text");

				$("<a href='" + news.link + "'>Read More &gt&gt&gt</a>")
					.addClass("btn btn-primary btn-block")
					.appendTo(cardBody);

				$(card)
					.appendTo("#cardColumns")
					.addClass("card m-1");
				//$(card).slideDown(5000);
				//target="_blank"
				//var httpsLink = news.link.replace("http", "https");
				//toggle
				//css cursor pointer 
			}
			
		});
		console.log(count);
		$("cardColumns").appendTo("body").addClass("card-columns");
	});
}
