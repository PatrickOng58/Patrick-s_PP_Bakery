// JavaScript to toggle the navbar
document.getElementById('menuIcon').addEventListener('click', function() {
  var navbarCollapse = document.getElementById('ftco-nav');
  navbarCollapse.classList.toggle('show');
});


// Animation on scroll

AOS.init({
    duration: 800,
    easing: "slide",
  });
  
  (function ($) {
    "use strict";
    $(window).stellar({
      responsive: true,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: "scroll",
    });
  
    //   full height
    var fullHeight = function () {
      $(".js-fullheight").css("height", $(window).height());
      $(window).resize(function () {
        $(".js-fullheight").css("height", $(window).height());
      });
    };
    fullHeight(); //call that function
  
   // navbar scroll
   var scrollWindow = function () {
    $(window).scroll(function () {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $(".ftco_navbar"),
        sd = $(".js-scroll-wrap");
      if (st > 150) {
        if (!navbar.hasClass("scrolled")) {
          navbar.addClass("scrolled");
        }
      }
      if (st < 400) {
        if (navbar.hasClass("scrolled")) {
          navbar.removeClass("scrolled sleep");
        }
      }

      if (st > 350) {
        if (!navbar.hasClass("awake")) {
          navbar.addClass("awake");
        }
        if (sd.length > 0) {
          sd.addClass("sleep");
        }
      }

      if (st < 350) {
        if (navbar.hasClass("awake")) {
          navbar.removeClass("awake");
          navbar.addClass("sleep");
        }
        if (sd.length > 0) {
          sd.removeClass("sleep");
        }
      }
    });
  };
  scrollWindow();

  $.Scrollax();

    //   carousel
    var carousel = function () {
      $(".home-slider").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,

        margin: 0,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        nav: true,
        dots: false,
        autoplayHoverPause: false,
        items: 1,
        navText: [
          "<span class = 'ion-ios-arrow-back'></span>",
          "<span class = 'ion-ios-arrow-forward'></span>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });
      $(".carousel-testimony").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        center: true,
        margin: 30,
        nav: false,
        stagePadding: 0,
        items: 1,
        navText: [
          "<span class = 'ion-ios-arrow-back'></span>",
          "<span class = 'ion-ios-arrow-forward'></span>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
      });
    };
    carousel();
  
    var counter = function () {
      $("#section-counter").waypoint(
        function (direction) {
          if (
            direction === "down" &&
            !$(this.element).hasClass("ftco-animated")
          ) {
            var comma_seperator_number_step = $.animateNumber.numberStepFactories.separator(
              ","
            );
            $(".number").each(function () {
              var $this = $(this),
                num = $this.data("number");
              console.log(num);
              $this.animateNumber(
                {
                  number: num,
                  numberStep: comma_seperator_number_step,
                },
                7000
              );
            });
          }
        },
        { offset: "95%" }
      );
    };
    counter();
  
    var contentWayPoint = function () {
      var i = 0;
      $(".ftco-animate").waypoint(
        function (direction) {
          if (
            direction === "down" &&
            !$(this.element).hasClass("ftco-animated")
          ) {
            i++;
            $(this.element).addClass("item-animate");
            setTimeout(function () {
              $("body .ftco-animate.item-animate").each(function (k) {
                var el = $(this);
                setTimeout(
                  function () {
                    var effect = el.data("animate-effect");
                    if (effect === "fadeIn") {
                      el.addClass("fadeIn ftco-animated");
                    } else if (effect === "fadeInLeft") {
                      el.addClass("fadeInLeft ftco-animated");
                    } else if (effect === "fadeInRight") {
                      el.addClass("fadeInRight ftco-animated");
                    } else {
                      el.addClass("fadeInUp ftco-animated");
                    }
                    el.removeClass("item-animate");
                  },
                  k * 50,
                  "easeInOutExpo"
                );
              });
            }, 100);
          }
        },
        { offset: "95%" }
      );
    };
    contentWayPoint();
  
    $("#book_date").datepicker({
      format: "m/d/yyyy",
      autoclose: true,
    });
    $("#book_time").timepicker();
    

  })(jQuery);


function showCustomQuantity() {
    var select = document.getElementById("quantity");
    var customInput = document.getElementById("custom-quantity");
    customInput.style.display = select.value === "custom" ? "block" : "none";
}

//contact page
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

//For Menu Pop Up discription
function showPopup(title, description, imageUrl) {
  document.getElementById('popup-title').innerText = title;
  document.getElementById('popup-description').innerText = description;
    // Set the image source for the popup
    const popupImage = document.getElementById('popup-image');
    popupImage.src = imageUrl; 
  // Display the popup
  const popup = document.getElementById('popup');
  popup.style.display = 'flex'; 
  setTimeout(() => {
    popup.classList.add('show'); 
  }, 10); 
}

function closePopup() {
  const popup = document.getElementById('popup');
  
  popup.classList.remove('show'); 
  setTimeout(() => {
    popup.style.display = 'none'; 
  }, 300); 
}


  
  