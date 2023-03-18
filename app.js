// Add smooth scrolling to all links
$("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
  
      var hash = this.hash;
  
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
  

// Toggle navigation menu on mobile devices
$(".menu-toggle").click(function() {
$("nav ul").toggleClass("showing");
});

// Close navigation menu when clicking outside of it
$(document).on("click", function(e) {
if ($(e.target).is("nav ul") === false && $(e.target).is(".menu-toggle") === false && $("nav ul").hasClass("showing")) {
$("nav ul").toggleClass("showing");
}
});

$(document).ready(function() {
    let url = "https://api.github.com/users/joshshipton/repos?type=public";
    $.getJSON(url, function(data) {
      let repos = "";
      $.each(data, function(index, value) {
        let name = value.name;
        let description = value.description;
        let url = value.html_url;
        let language = value.language;
        repos += "<div class='col-md-4 repo-container'><div class='card repo-card'><div class='card-body'><h2 class='card-title repo-name'>" + name + "</h2><p class='card-text repo-description'>" + description + "</p><a href='" + url + "' class='card-link repo-url' target='_blank'>" + url + "</a><p class='card-text repo-language'><small class='text-muted'>" + language + "</small></p></div></div></div>";
      });
      $("#repositories").html(repos);
    });
  });
  