	var author=$('#author').val();
    var title=$('#title').val();
    var description=$('#newsDescription').val();
    var url= $("#newsUrl").val();
    var publishedAt= $("#publishedAt").val();
    var urlToImage= $("#urlToImage").val();
$(document).ready(function() {
     gaurdianClicked();

})

function gaurdianClicked() {
  $("#theGaurdian").click(function(event){
    event.preventDefault();
    getGaurdianAjax(author,title,description,url,urlToImage,publishedAt);
    event.stopPropagation();
  })
  }

function getGaurdianAjax(author,title,description,url,urlToImage,publishedAt) {
		event.preventDefault();
	var url="https://newsapi.org/v1/articles?source=the-guardian-uk&sortBy=top&apiKey=694f9cb68f354797900c18785918c61e"

	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		success: function(response){
      $(".caption").html('');
	                showGaurdianResult(response);
		}
	})

}

function showGaurdianResult(response) {

				$.each(response.articles, function(index,repo){
var gaurdianTitle = $('<h3>').text(repo.title)
                        .attr('id', 'newstitle');

var gaurdianAuthor = $('<h4>').text(repo.author)
                        .attr('id', 'author');

var gaurdianPublishedAt = $('<h5>').text('published at : ' + repo.publishedAt)
                        .attr('id', 'publishedAt');

var gaurdianDescription = $('<h5>').text(repo.description)
                        .attr('id', 'newDescription');
var gaurdianImage = $('<img>').attr('src', repo.urlToImage)
                              .attr('id', 'newsImage')
                              

var gaurdianUrl= $('<a>').attr('href', repo.url)
                      .attr('id', 'newUrl')
                      .attr('target', '_blank')
                      .attr('class', 'btn btn-primary')
                      .attr('role', 'button')
                      .text('See whole artice ...');

	$(".caption").append(gaurdianTitle,gaurdianAuthor,gaurdianImage,gaurdianPublishedAt,"<br>",gaurdianDescription,"<br>",gaurdianUrl,"<br>","<br>","<hr id='newhr'>");
			})
}

// -------------------------------------------------------------------------

