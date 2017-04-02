$(document).ready(function() {
    submittedcurrent();
    $(".currentresult").hide()
})

function submittedcurrent() {
	$(".half-circle").click(function(event) {
	event.preventDefault();
    var name=$('#name').val();
    var language=$('#language').val();
    var html_url=$('#html_url').val();
    var updated_at= $("#updated_at").val();
    var fork= $("#fork").val();
    $('div').removeClass('half-circle');
    $(this).addClass('half-circle2')
    getAjax(name,language,html_url,updated_at,fork);
		event.stopPropagation();
	})
}

function getAjax(name,language,html_url,updated_at,fork) {
		event.preventDefault();
	var url="https://api.github.com/users/Mohammad-Daylaki/repos?sort=updated&per_page=5"

	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		success: function(response){
			$(".currentresult").fadeIn("slow", showResult(response));
		}
	})

}

function showResult(response) {
				$.each(response, function(index,repo){
var linkName= $('<a>').attr('href', repo.html_url).attr('id', 'reponame').text(repo.name);
var repoLang = $('<h5>').text(repo.language).attr('id', 'language')
var repoUpdate = $('<h5>').text(repo.updated_at).attr('id', 'updated')
	$(".currentresult").append(linkName ,repoLang ,repoUpdate);
	// $(".currentresult").append('<br>');
			})
}
