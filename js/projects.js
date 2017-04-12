$(document).ready(function() {
    submittedcurrent();
    $(".currentresult").hide()
})


function submittedcurrent() {
	$(".circle").click(function(event) {
	event.preventDefault();
	$(".circle").hide()
	$("#current").hide();

    var name=$('#name').val();
    var language=$('#language').val();
    var html_url=$('#html_url').val();
    var updated_at= $("#updated_at").val();
    getAjax(name,language,html_url,updated_at);
		event.stopPropagation();
	})
}

function getAjax(name,language,html_url,updated_at) {
		event.preventDefault();
	var url="https://api.github.com/users/Mohammad-Daylaki/repos?sort=updated&per_page=5"

	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		success: function(response){
			$(".currentresult").html('');
			$(".currentresult").fadeIn("slow", showResult(response));
			var	pageClose = $('<img>').attr('src','http://www.vw-automotores.com.mx/img/exit.png')
                           .attr('id', 'closed')
                           .attr('width', '30')
			$(".currentresult").append(pageClose)
			paggeClosed();
		}
	})

}

function paggeClosed() {
	$('#closed').click(function(){
		console.log("hg")
		$(".currentresult").fadeOut("slow");
		$(".circle").fadeIn("slow");
	    $("#current").fadeIn("slow");

	})
}

function showResult(response) {
				$.each(response, function(index,repo){
var linkName= $('<a>').attr('href', repo.html_url)
                      .attr('id', 'reponame')
                      .text(repo.name)
                      .attr('target', '_blank');
var repoLang = $('<h5>').text(repo.language)
                        .attr('id', 'language')
var repoUpdate = $('<h5>').text(repo.updated_at)
                          .attr('id', 'updated')
	$(".currentresult").append(linkName ,repoLang ,repoUpdate);
	// $(".currentresult").append('<br>');
			})
}

// -------------------------------------------------------------------------

