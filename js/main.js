// This function has been added to make the header and navbar sticky. They disappear when srolling down and appear again on scroll up 
(function(){

  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var header = document.querySelector('.header-container');
  var navbarHeader = document.querySelector('.main-navigation');

  var checkScroll = function() {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) { 
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) { 
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }
    
    prevScroll = curScroll;
  };

  var toggleHeader = function(direction, curScroll) {
    if (direction === 2 && curScroll > 205) { 
      
      //replace 205 with the height of your header in px

      header.classList.add('hide');
      navbarHeader.classList.add('hide');
      prevDirection = direction;
    }
    else if (direction === 1) {
      header.classList.remove('hide');
      navbarHeader.classList.remove('hide');

      prevDirection = direction;
    }
  };

  window.addEventListener('scroll', checkScroll);

})();




//Slider jQuery 

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({

    items: 1,
    center: true,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true
  
  });
});


//Cookies

function PopUp(hideOrshow) {
  if (hideOrshow == 'hide') {
      document.getElementById('ac-wrapper').style.display = "none";
      document.body.style.overflow = 'visible';
  }
  else  if(localStorage.getItem("popupWasShown") == null) {
      localStorage.setItem("popupWasShown",1);
      document.getElementById('ac-wrapper').removeAttribute('style');
      document.body.style.overflow = 'hidden'; //disables the scroll when the cookie message appear
}
}
window.onload = function () {
  setTimeout(function () {
      PopUp('show');
  }, 0);
}


//Side navbar
//I added variables for all the elements in order to make the code readable
const sidebarContainer = document.getElementById("sidebar-container");
const headerContainer = document.getElementsByClassName('header-container')[0];
const mainNav = document.getElementsByClassName('main-navigation')[0];
const hamburger = document.getElementsByClassName('hamburger')[0];
const hamburgerXs = document.getElementsByClassName('hamburger-xs')[0];
const body = document.body;

//This is the function that is triggered on click on burger menu button. I also added if statements for the responsiveness of the screen 
function openNav() {
  if ( $(window).width() > 992) {
    body.style.position = 'relative';
    body.style.right = '317px';
    body.style.transition = 'all 1s';
    mainNav.style.right = '317px';
    mainNav.style.transition = 'all 1s';
    headerContainer.style.right = '317px';
    headerContainer.style.transition = 'all 1s';
    sidebarContainer.style.display = 'block';
    document.getElementById('ul-sidebar').style.transitionProperty = 'display';
    document.getElementById('ul-sidebar').style.transitionDuration = '2s';

    body.style.overflow = 'hidden';
    hamburger.classList.add("is-active");
    hamburgerXs.classList.add("is-active");
    document.getElementsByClassName('blocker')[0].style.overflowY = 'scroll';

} else if ($(window).width() > 768) {
    body.style.position = 'relative';
    body.style.right = '242px';
    body.style.transition = 'all 1s';
    mainNav.style.right = '242px';
    mainNav.style.transition = 'all 1s';
    headerContainer.style.right = '242px';
    headerContainer.style.transition = 'all 1s';
    sidebarContainer.style.display = 'block';
    body.style.overflow = 'hidden';
    hamburger.classList.add("is-active");
    hamburgerXs.classList.add("is-active");
    document.getElementsByClassName('blocker')[0].style.overflowY = 'scroll';

} else {
    body.style.position = 'relative';
    body.style.right = '255px';
    body.style.transition = 'all 1s';
    mainNav.style.right = '255px';
    mainNav.style.transition = 'all 1s';
    headerContainer.style.right = '255px';
    headerContainer.style.transition = 'all 1s';
    sidebarContainer.style.display = 'block';
    body.style.overflow = 'hidden';
    hamburger.classList.add("is-active");
    hamburgerXs.classList.add("is-active");
    document.getElementsByClassName('blocker')[0].style.overflowY = 'scroll';
}
}

//This is the function that closes the sidebar on clicking anywhere on the page but the sidebar
function closeNav() {
    sidebarContainer.style.display = 'none';
    body.style.overflow = 'auto';
    body.style.right = '0';
    //body.style.position = 'unset';
    mainNav.style.right = '0';
    headerContainer.style.right = '0';
    hamburger.classList.remove("is-active");
    hamburgerXs.classList.remove("is-active");
}

