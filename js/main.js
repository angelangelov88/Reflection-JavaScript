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
      
      //replace 52 with the height of your header in px

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
  }
  else  if(localStorage.getItem("popupWasShown") == null) {
      localStorage.setItem("popupWasShown",1);
      document.getElementById('ac-wrapper').removeAttribute('style');
  }
}
window.onload = function () {
  setTimeout(function () {
      PopUp('show');
  }, 0);
}





