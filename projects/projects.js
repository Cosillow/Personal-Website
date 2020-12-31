$(document).ready(function() {
  document.getElementById("infobox").checked = false;
  var response = '';
  // puts all project cards on the page and stores project info in var response
  $.ajax({
    type: "GET",
    url: "projects.json",
    dataType: "json",
    success: function(responseData, status){
      response = responseData;
      output = '';
      $.each(responseData.projects, function(i, project) {
        output += '<div class="project"> <img alt="project thumbnail" src="' + project.thumbnail + '"> \
        <p>' + project.name + '</p><div class="tags">';
        $.each(project.tags, function(i, tag) {
          output += '<div class="tag">' + tag + '</div>'
        });
        output += '</div>'

        output += '</div>'
        $(".projects").html(output);

      });
    }, error: function(msg) {
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
  });
  currentproj = ''
  $(document).on("click", "div.project", function() {
    currentproj = $(this).html().split('</p>')[0].split('<p>')[1]
    $.each(response.projects, function(i, project) {
      if (project.name == currentproj) {
        output = '<label id="info-back" name="info-back" for="infobox">&#8593;</label><h1>' + project.name + '</h1>';
        output += '<img src="' + project.image + '" alt="project image">';
        output += '<p>' + project.description + '</p>';
        output += '<a href="' + project.link + '" class="visit">visit</a>';
        $(".info").html(output);
        document.getElementById("infobox").checked = true;
      }
    });
  });
});