var query = window.location.search;
if (query) {
	var branch = query.replace("?", "");
} else {
	var branch = "master";
}

$.ajax({
	url: "https://rawgit.com/opensanca/recommended_books/"+branch+"/README.md",
	dataType: 'text',
	success: function(data) {
		$(".main-content").html(markdown.toHTML(data));
	}
});
