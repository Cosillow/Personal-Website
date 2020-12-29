$(document).ready(function() {
  document.getElementById("infobox").checked = false;
  var response = '';
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
        output = '<label id="info-back" name="info-back" for="infobox">back</label><h3>' + project.name + '</h3>';
        console.log(Math.max(project.descriptions.length, project.images.length));
        for (var i = 0; i < Math.max(project.descriptions.length, project.images.length); i++) { 
          console.log(i);
          if (i < project.descriptions.length) {
            output += '<p>' + project.descriptions[i] + '</p>';
          }
          if (i < project.images.length) {
            output += '<img src="' + project.images[i] + '" alt="project image"';
          }
        }
        $(".info").html(output);
        document.getElementById("infobox").checked = true;
      }
    });
    setTimeout(function(){document.getElementById("content").style.display = "none";}, 200);
  });
  $(document).on("click", ".info label", function() {
    document.getElementById("content").style.display = "block";
    setTimeout(function(){$('.info').html('');;}, 200);
  });
});