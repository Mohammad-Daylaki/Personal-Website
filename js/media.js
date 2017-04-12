	var videoTitle = $("#title").val();
	var videoPublishedAt = $("#publishedAt").val();
	var videoDescription = $("#description").val();
	var videoChannelTitle = $("#channelTitle").val();
	var videoId = $("#videoId").val();
	var videoImage = $("#videoImage").val();
	var key ="AIzaSyDgDxWfZ_Ppj11Pqf5NVdHriVqeLOhPk3M"

$(document).ready(function() {
   getYoutubeAjax(videoTitle,videoPublishedAt,videoDescription,videoChannelTitle,videoId,videoImage);
})

function getYoutubeAjax(videoTitle,videoPublishedAt,videoDescription,videoChannelTitle,videoId,videoImage) {
	var url="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDgDxWfZ_Ppj11Pqf5NVdHriVqeLOhPk3M&playlistId=PL4Z5Ddwawz1AsCOactK9tvhxLaixdB_Eu"

	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		success: function(response){
			  showYoutubeResult(response);
			  videoClicked(response);
		}
	})
}

function showYoutubeResult(response){
				$.each(response.items, function(index,repo){
var vidTitle = $('<h3>').text(repo.snippet.title)
                        .attr('id', 'vidTitle');
var vidPublishedAt = $('<h5>').text(repo.snippet.publishedAt)
                              .attr('id', 'vidPublishedAt');

var vidImage = $('<img>').attr('src', repo.snippet.thumbnails.standard.url)
                         .attr('target', '_blank')
                         .attr('id', 'vidImage')

$('.youtubeVid').append(vidTitle,vidPublishedAt,"<br>","<br>",vidImage,"<hr>","<br>")

			})
}




function videoClicked(response) {
$('img#vidImage').click(function(event){
	// event.preventDefault();
	$('.showVideo').html('')
$.each(response.items, function(index,repo){
var vidId = $('<iframe>').attr('src', "//www.youtube.com/embed/"+repo.snippet.resourceId.videoId)
                         .attr('id', 'vidFrame')
                         .attr('width', '550')
                         .attr('height', '400');
var vidTitle = $('<h4>').text(repo.snippet.title)
                        .attr('id', 'vidTitle');
// .text(repo.snippet.description).attr('id', 'vidDescription');
$('.showVideo').append(vidId[index],vidTitle[index]);
})
})
}