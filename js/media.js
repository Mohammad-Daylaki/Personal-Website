$(document).ready(function() {
	showList();
	$("#videosection").hide();
})

function showList() {
	var vidName= $('#vidName').val();
	var vidDescrip= $("#vidDescrip").val();
	var vidPublished= $("#vidPublished").val();
	getVidAjax(vidName,vidDescrip,vidPublished);
}

function getVidAjax(argument) {
	var channelName= "TheEllenShow"
	var key = 'AIzaSyDAALaHjQi-I3La5fOd5gCL-_MOXr3FNyU';
	var playlistID = "";

	$.ajax({
		url: "https://www.googleapis.com/youtube/v3/playlistItems?key=" + key + "&playlistId=" + playlistID,
			type: "GET",
			part: 'contentDetails',
			forUsername: channelName,
			success: function(data){
				$.each(data.items, function(index,item){
					console.log(item);
				})
			}
		})

}