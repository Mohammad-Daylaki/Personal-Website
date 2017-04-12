	var geoAuthor=$('#geoAuthor').val();
    var geoTitle=$('#geoTitle').val();
    var geoDescription=$('#geoDescription').val();
    var geoUrl= $("#geoUrl").val();
    var geoPublishedAt= $("#geoPublishedAt").val();
    var geoUrlToImage= $("#geoUrlToImage").val();
$(document).ready(function() {
  nationalClicked();
})

function nationalClicked() {
  $("#nationalGeo").click(function(event){
    event.preventDefault();
      getAjax(geoAuthor,geoTitle,geoDescription,geoUrl,geoUrlToImage,geoPublishedAt);
    event.stopPropagation();
  })
  }

function getAjax(geoAuthor,geoTitle,geoDescription,geoUrl,geoUrlToImage,geoPublishedAt) {
		event.preventDefault();
	var url="https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=694f9cb68f354797900c18785918c61e"

	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		success: function(response){
      $(".captionGeo").html('');
	                showResult(response);
		}
	})

}

function showResult(response) {
				$.each(response.articles, function(index,repo){
var nationalTitle = $('<h3>').text(repo.title)
                        .attr('id', 'nationalTitle');

var nationalAuthor = $('<h4>').text(repo.author)
                        .attr('id', 'nationalAuthor');

var nationalPublishedAt = $('<h5>').text('published at : ' + repo.publishedAt)
                        .attr('id', 'nationalPublishedAt');

var nationalDescription = $('<h5>').text(repo.description)
                        .attr('id', 'nationalDescription ');
var nationalImage = $('<img>').attr('src', repo.urlToImage)
                              .attr('id', 'nationalImage')

var nationalUrl= $('<a>').attr('href', repo.url)
                      .attr('id', 'nationalUrl')
                      .attr('target', '_blank')
                      .attr('class', 'btn btn-primary')
                      .attr('role', 'button')
                      .text('See whole artice ...');
if (index<6) {
    $(".captionGeo").append(nationalTitle,nationalAuthor,nationalImage,nationalPublishedAt,nationalDescription,"<br>","<br>",nationalUrl,"<br>","<br>","<hr id='newhr'>");

} else {
  return false;
}
			})
}

// -------------------------------------------------------------------------

