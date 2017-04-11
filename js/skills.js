$(document).ready(function() {
    submittedFav(event);
})

function submittedFav(event) {
	event.preventDefault();
    var name=$('#skill_name').val();
    var category=$('#category').val();
    var description=$('#description').val();
    var courses=$('#courses').val();
    var coursesName=$('#coursesName').val();
    getFavAjax(name,category,description,courses,coursesName);
		event.stopPropagation();

}

function getFavAjax(name,category,description,courses,coursesName) {
		event.preventDefault();
	var url= "./json/skills.json"

	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		success: function(response){
			showFavResult(response);

		}
	})

}

function showFavResult(response) {
				$.each(response, function(index,repo){
var skillName = $('<h3>').text(repo.name)
                        .attr('id', 'skillName')

var skillCategory = $('<h4>').text(repo.category)
                        .attr('id', 'category')

var skillDescription = $('<h5>').text(repo.description)
                        .attr('id', 'description')
var coursesInfo = $('<h5>').text("More Courses : ")
                        .attr('id', 'courses')

var skillCourses= $('<a>').attr('href', repo.courses)
                      .attr('id', 'skillCourse')
                      .text(repo.coursesName)
                      .attr('target', '_blank');
	$("#skill").append(skillName,skillCategory,"<br>",skillDescription,coursesInfo,skillCourses,"<hr>");
	// $(".currentresult").append('<br>');
			})
}