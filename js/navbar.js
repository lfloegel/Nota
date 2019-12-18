$(document).ready(() => {
  document.getElementById('mySidenav').innerHTML = ' <a href="javascript:void(0)" id="closebtn" onclick="closeNav()">&times;</a> <a id="home" class="nav-link" href="index.html">Home</a> <a id="browse" class="nav-link" href="selection.html">Browse Notes</a> <a class="nav-link" href="about.html">Help</a> <a id="login-status" class="nav-link" href="login(typeII).html">Log In</a>';
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      $("#home").after('<a class="nav-link" href="upload.html">Upload</a>');
      $("#home").after('<a class="nav-link" href="mynotes.html">My Notes</a>');
      document.getElementById("login-status").innerHTML = "Log Out";
      document.getElementById("login-status").onclick = signOut;
    }
    var elem = document.body.querySelector('a[href="'+window.location.pathname.substring(1)+'"]');
    if (elem != null) {
      elem.classList.add('active');
    } else {
      document.getElementById('browse').classList.add('active');
    }
  });
});
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  document.body.style.backgroundColor = "#f1f1f1";
}

function updateNavWidth(x) {
  closeNav();
  if(x.matches) {
    document.getElementsByClassName('sidenav')[0].style.width = "100%";
  }
}

var x = window.matchMedia("(min-width: 715px)");
updateNavWidth(x);
x.addListener(updateNavWidth);
