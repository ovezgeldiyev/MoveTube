// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
  }
};
// menu end
// scroll start
let header = document.getElementById("header");
const buttonRow = document.getElementById("buttonRow");

const modalInners = document.querySelectorAll(".modal");
modalInners.forEach((modalInner) => {
  function scrollFunc() {
    if (modalInner.scrollTop >= 170) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
    if (modalInner.scrollTop >= 600) {
      modalInner.querySelector(".introMBody").classList.add("sticky");
      buttonRow.classList.add("sticky");
    } else {
      modalInner.querySelector(".introMBody").classList.remove("sticky");
      buttonRow.classList.remove("sticky");
    }
  }
  modalInner.addEventListener("scroll", (e) => {
    scrollFunc();
  });
});

// scroll end
// faq start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      console.log("now active");
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// faq end
/*mobile slider */
function mobileOnlySlider() {
  $(".slider").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1.8,
    adaptiveHeight: false,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 1.4,
        },
      },
      {
        breakpoint: 441,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}
if (window.innerWidth < 769) {
  mobileOnlySlider();
}
function resizeListener(e) {
  if (window.innerWidth < 769) {
    $(".slider").addClass("sliderMob");
    if (!$(".slider").hasClass("slick-initialized")) {
      mobileOnlySlider();
    }
  } else {
    $(".slider").removeClass("sliderMob");
    if ($(".slider").hasClass("slick-initialized")) {
      $(".slider").slick("unslick");
    }
  }
}
resizeListener();
$(window).resize(resizeListener);

// showMore start
const showMoreBtns = document.querySelectorAll(".showMoreBtn");
showMoreBtns.forEach((showMoreBtn) => {
  showMoreBtn.onclick = () => {
    const parentElement = showMoreBtn.parentNode;
    const showMore = parentElement.querySelector(".showMore");
    showMore.classList.toggle("active");
    showMoreBtn.classList.toggle("active");
    if (showMoreBtn.classList.contains("active")) {
      showMoreBtn.innerHTML = "Hide";
    } else {
      showMoreBtn.innerHTML = "Show more";
    }
  };
});
// showMore end
