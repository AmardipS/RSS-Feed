$(document).ready(function(){
	//getNews();		// Calls main function

	// Event listner/handler the click event in news elements
	/*
	$("document").on("click","#bbc", function(event){
		console.log( $(this).text() );
		$(this)
		.children("news-text", "news-img")
		.slideToggle();	
	});
	*/
	
	$("#bbc").click(function(){
		console.log(this);
		getNews();
	});

	

});

