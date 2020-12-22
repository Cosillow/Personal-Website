$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "projects.json",
    dataType: "json",
    success: function(responseData, status){
      $.each(responseData.projects, function(i, project){
        $(".projects").html('<div class="project">'  + '</div>');

      });



    }, error: function(msg) {
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
  });
});