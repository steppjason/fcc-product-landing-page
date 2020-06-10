document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onscroll = function() {
  updateNav();
}

window.onresize = function(){
  updateNav();
}

function updateNav(){
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos > 20 && window.innerWidth > 800) {
    document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("header-wrapper").style.maxWidth = "100%";
  } else {
    document.getElementById("header").style.backgroundColor = "rgba(0,0,0,1)";
    document.getElementById("header-wrapper").style.maxWidth = "800px";
  }
}
