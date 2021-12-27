//Nav transform on scrolling //Scroll to top button
let nav = document.querySelector(".navbar");
let scroller = document.querySelector(".scroller i");

window.onscroll = function () {
    if (window.scrollY >= 30) {
        nav.style.transform = "translateY(-20px)"
    }
    if (window.scrollY < 30) {
      nav.style.transform = "translateY(0)"
  }
    if (window.scrollY >= 300) {
      scroller.style.opacity = .5;
      scroller.style.display = "block";
  }
  if (window.scrollY < 300) {
    scroller.style.opacity = 0
    scroller.style.display = "none";
}
  
}



$(scroller).on('click' , function() {
  window.scrollTo(0 , 0 )
});
//Responsive nav
let respIcon = document.querySelector(".responsive .icon");
let respMenu = document.querySelector(".responsive .icon ul");
let overlay = document.querySelector(".overlayy");

overlay.onclick = function () {
  respMenu.classList.remove("active");
    overlay.style.display = "none"
}

respIcon.onclick =function() {
  if (respMenu.classList.contains("active") == false) {
    respMenu.classList.add("active");
    overlay.style.display = "block"
  }
  else {
    respMenu.classList.remove("active");
    overlay.style.display = "none"
  }
}

//Search icon disappear on input focus
let input = document.querySelector(".searchbar");
let icon = document.querySelector(".navbar .search i");

input.onfocus = function () {
    icon.style.opacity = 0;
}
input.onblur = function () {
    icon.style.opacity = 1;
}
  










