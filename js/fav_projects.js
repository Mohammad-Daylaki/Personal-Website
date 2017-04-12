
$(document).ready(function() {
    submittedFav();
    $(".favresult").hide();
})

function submittedFav() {
	$(".circle2").click(function(event) {
	event.preventDefault();
	$(".circle2").hide();
	$("#favorite").hide();

    var fav_name=$('#fav_name').val();
    var fav_language=$('#fav_language').val();
    var fav_url=$('#fav_url').val();
    getFavAjax(fav_name,fav_language,fav_url);
		event.stopPropagation();
	})
}

function getFavAjax(fav_name,fav_language,fav_url) {
		event.preventDefault();
	var url= "./json/fav.json"

	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		success: function(response){
			$(".favresult").html('');
			$(".favresult").fadeIn("slow", showFavResult(response));
			var	pagefavClose = $('<img>').attr('src','http://www.vw-automotores.com.mx/img/exit.png')
                           .attr('id', 'fav_closed')
                           .attr('width', '30')
			$(".favresult").append(pagefavClose)
			paeClosed();
		}
	})

}

function paeClosed() {
	$('#fav_closed').click(function(){
		$(".favresult").fadeOut("slow");
		$(".circle2").fadeIn("slow");
	    $("#favorite").fadeIn("slow");
	})
}

function showFavResult(response) {
				$.each(response, function(index,repo){
var linkName= $('<a>').attr('href', repo.fav_url)
                      .attr('id', 'repoFavname')
                      .text(repo.fav_name)
                      .attr('target', '_blank');
var repoLang = $('<h5>').text(repo.fav_language)
                        .attr('id', 'favLanguage')
	$(".favresult").append("<br>",linkName ,repoLang, "<br>");
	// $(".currentresult").append('<br>');
			})
}