"use strict";

var burger = document.querySelector(".header__btn");
var menu = document.querySelector(".header__menu");
var container = document.querySelector(".custom-container");
var headerAccordionItems = document.querySelectorAll(".js-accordion-header");
var header = document.querySelector(".header");
var btnUp = document.querySelector('.button-up');
burger.addEventListener("click", function () {
  var windowWidth = window.innerWidth;
  var containerWidth = container.scrollWidth;

  if (windowWidth > containerWidth) {
    var widthForMenu = (windowWidth - containerWidth) / 2;
    menu.style.width = 725 + widthForMenu + 'px';
  } else {
    menu.style.width = '';
  }

  burger.classList.toggle('active');
  menu.classList.toggle('active');
});
headerAccordionItems.forEach(function (elem) {
  elem.addEventListener("click", function () {
    elem.parentElement.classList.contains("is-show") ? accordionNotActive(elem) : accordionActive(elem);
    headerAccordionItems.forEach(function (el) {
      if (el.parentElement !== elem.parentElement) accordionNotActive(el);
    });
  });
});
document.addEventListener('click', function (e) {
  if (!menu.contains(e.target) && !burger.contains(e.target)) {
    menu.style.width = '';
    burger.classList.remove('active');
    menu.classList.remove('active');
  }
});
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  if (scrollPosition >= 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});
window.addEventListener('scroll', function () {
  if (window.scrollY > window.innerHeight) {
    btnUp.classList.remove('is-hidden');
  } else {
    btnUp.classList.add('is-hidden');
  }
});

if (window.scrollY > window.innerHeight) {
  btnUp.classList.remove('is-hidden');
} else {
  btnUp.classList.add('is-hidden');
}

window.addEventListener('resize', function () {
  if (window.innerWidth > 767 && menu.classList.contains("active")) {
    burger.classList.remove('active');
    menu.classList.remove('active');
  }
});
btnUp.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

if (document.getElementById("index")) {
  var toggleSwiperBasedOnWidth = function toggleSwiperBasedOnWidth() {
    var screenWidth = window.innerWidth;

    if (screenWidth > 767) {
      // Удаляем Swiper и делаем обычную сетку
      if (swiperContainer.classList.contains('swiper-initialized')) {
        swiperContainer.classList.remove("swiper-initialized");
        swiper2.destroy(true, true); // Уничтожаем Swiper
      }

      swiperContainer.classList.remove('swiper');
      swiperWrapper.classList.remove("swiper-wrapper");
      swiperWrapper.classList.add("customers__wrapper-grid");
      swiperSlides.forEach(function (slide) {
        slide.classList.add("customers__slide-grid");
        slide.style.width = ''; // Сбрасываем ширину слайдов
      });
    } else {
      // Восстанавливаем Swiper
      if (!swiperContainer.classList.contains('swiper-initialized')) {
        swiperContainer.classList.add('swiper');
        swiperWrapper.classList.add("swiper-wrapper");
        swiperWrapper.classList.remove("customers__wrapper-grid");
        swiperSlides.forEach(function (slide) {
          slide.classList.remove("customers__slide-grid");
          slide.style.width = ''; // Сбрасываем ширину слайдов на случай изменений
        });
        console.log(swiper2);
        swiper2 = new Swiper(".customers__swiper", {
          slidesPerView: 2,
          spaceBetween: 10,
          pagination: {
            el: ".customers__pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".customers__swiper-next",
            prevEl: ".customers__swiper-prev"
          },
          breakpoints: {
            567: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }
        });
      }
    }
  }; // Запускаем функцию при изменении размера окна и при загрузке страницы


  new Swiper(".hero__left-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".hero__left-swiper-next",
      prevEl: ".hero__left-swiper-prev"
    },
    pagination: {
      el: ".hero__left-swiper-pagination",
      clickable: true
    }
  });
  new Swiper(".hero__right-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".hero__right-swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".hero__right-swiper-next",
      prevEl: ".hero__right-swiper-prev"
    }
  });
  var items = document.querySelectorAll(".after-hero__box");
  var btn = document.querySelector(".after-hero__btn");
  console.log(window.innerWidth);

  if (window.innerWidth < 827) {
    afterHeroMore(3, btn, items);
  } else if (window.innerWidth < 1140) {
    afterHeroMore(5, btn, items);
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth < 827) {
      if (!btn.classList.contains("d-none")) {
        afterHeroMore(3, btn, items);
      }
    } else if (window.innerWidth < 1140) {
      if (!btn.classList.contains("d-none")) {
        afterHeroMore(5, btn, items);
      }
    } else {
      items.forEach(function (item) {
        return item.classList.remove("d-none");
      });
    }
  });
  var swiperContainer = document.querySelector('.customers__swiper');
  var swiperSlides = document.querySelectorAll('.customers__slide');
  var swiperWrapper = document.querySelector('.customers__wrapper');
  var swiper2 = new Swiper(".customers__swiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".customers__pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".customers__swiper-next",
      prevEl: ".customers__swiper-prev"
    },
    breakpoints: {
      567: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
  window.addEventListener('resize', toggleSwiperBasedOnWidth);
  window.addEventListener('load', toggleSwiperBasedOnWidth);
}

if (document.getElementById("work")) {
  var tabButtons = Array.from(document.querySelectorAll(".pages-links-link"));
  var elements = Array.from(document.querySelectorAll(".work__tab-item"));
  var accordionItems = document.querySelectorAll('.vacancies__accordion-item-head');
  var form = document.querySelector('.internship__form-js');
  var myModalOk = new bootstrap.Modal(document.querySelector(".js-modal-ok"));
  tabActive(tabButtons[0], 0, tabButtons, elements);
  tabButtons.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      tabActive(btn, index, tabButtons, elements);
    });
  });
  accordionItems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      elem.parentElement.classList.contains("is-show") ? accordionNotActive(elem) : accordionActive(elem);
      accordionItems.forEach(function (el) {
        if (el.parentElement !== elem.parentElement) accordionNotActive(el);
      });
    });
  });
  var swiperLive = new Swiper(".live__swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".live__pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".live__swiper-next",
      prevEl: ".live__swiper-prev"
    }
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    myModalOk.show();
  });
}

if (document.getElementById("qp")) {
  var modal = document.querySelector(".js-submit-modal");
  var btns = document.querySelectorAll(".qp__button");
  var myModal = new bootstrap.Modal(modal);

  var _form = document.querySelector(".qp__modal-form");

  var _myModalOk = new bootstrap.Modal(document.querySelector(".js-modal-ok"));

  var _items = document.querySelectorAll(".qp__swiper-slide");

  var modalSwiper = new bootstrap.Modal(document.querySelector(".js-modal-swiper-qp"));
  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      myModal.show();
    });
  });

  _form.addEventListener("submit", function (e) {
    e.preventDefault();
    myModal.hide();

    _myModalOk.show();
  });

  _items.forEach(function (elem) {
    elem.addEventListener("click", function () {
      modalSwiper.show();
    });
  });

  if (document.querySelectorAll(".qp__swiper")) {
    var swiperQP = new Swiper(".qp__swiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".qp__pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".qp__swiper-next",
        prevEl: ".qp__swiper-prev"
      }
    });

    var _modalSwiper = new Swiper(".qp__modal-swiper", {
      zoom: true,
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        prevEl: ".qp__modal-swiper-prev",
        nextEl: ".qp__modal-swiper-next"
      },
      thumbs: {
        swiper: swiperQP
      }
    });
  }

  if (document.querySelectorAll('.qp__swiper-slide') && document.querySelectorAll('.qp__swiper-slide').length < 2) {
    document.querySelectorAll(".qp__swiper-navigation").forEach(function (elem) {
      elem.classList.add('d-none');
    });
  }
}

if (document.getElementById("history")) {
  var block = document.querySelector(".history__block");
  var historyStrip = document.querySelector(".history__strip");
  var historyTimeline = document.querySelectorAll(".history__timeline");
  var more = document.querySelector(".history__more");
  var btnMore = document.querySelector(".history__more-btn");

  if (historyTimeline.length < 5) {
    more.classList.add("d-none");
    block.style.maxHeight = "none";

    if (window.innerWidth < 768) {
      bottomAbsolute(historyTimeline, historyStrip, 18);
    } else {
      bottomAbsolute(historyTimeline, historyStrip, 40);
    }

    window.addEventListener("resize", function () {
      if (window.innerWidth < 768) {
        bottomAbsolute(historyTimeline, historyStrip, 18);
      } else {
        bottomAbsolute(historyTimeline, historyStrip, 40);
      }
    });
  } else {
    var heightBlockForWindow = function heightBlockForWindow() {
      if (window.innerWidth < 768) {
        heightBlock(block, historyTimeline, 4, 58);
      } else {
        heightBlock(block, historyTimeline, 4, 80);
      }
    };

    heightBlockForWindow();
    more.classList.remove("d-none");
    window.addEventListener("resize", function () {
      return heightBlockForWindow;
    });
    btnMore.addEventListener("click", function () {
      window.removeEventListener("resize", function () {
        return heightBlockForWindow;
      });
      more.classList.add("d-none");
      block.style.maxHeight = "none";

      if (window.innerWidth < 768) {
        bottomAbsolute(historyTimeline, historyStrip, 18);
      } else {
        bottomAbsolute(historyTimeline, historyStrip, 40);
      }

      window.addEventListener("resize", function () {
        if (window.innerWidth < 768) {
          bottomAbsolute(historyTimeline, historyStrip, 18);
        } else {
          bottomAbsolute(historyTimeline, historyStrip, 40);
        }
      });
    });
  }
}

if (document.getElementById("licenses")) {
  var _modal = new bootstrap.Modal(document.querySelector(".js-license-modal"));

  var _items2 = document.querySelectorAll(".licenses__item-increase");

  var itemsOpen = document.querySelectorAll(".licenses__open");

  _items2.forEach(function (item) {
    item.addEventListener("click", function () {
      _modal.show();
    });
  });

  itemsOpen.forEach(function (item) {
    return item.addEventListener("click", function () {
      _modal.show();
    });
  });
}

if (document.getElementById("contacts")) {
  var initMapContacts = function initMapContacts() {
    var myMap = new ymaps.Map("contacts__map-penza", {
      center: [53.184451071233134, 45.007014999999924],
      zoom: 13,
      minZoom: 13,
      controls: []
    }, {
      minZoom: 13
    });
    var placemarkDiv = ymaps.templateLayoutFactory.createClass("\n  <div class=\"placemark-custom\">\n    <span class=\"placemark__layout\">\n      <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M15.645 7.54741C15.645 8.93117 14.8282 10.8548 13.6386 12.8497C12.5829 14.6203 11.2788 16.374 10.1427 17.7311C8.94696 16.3197 7.63756 14.5599 6.59452 12.7978C5.42654 10.8246 4.64502 8.93422 4.64502 7.54741C4.64502 4.79601 7.06981 2.5 10.145 2.5C13.2202 2.5 15.645 4.79601 15.645 7.54741Z\" fill=\"#009A6D\" stroke=\"#009A6D\"/>\n        <circle cx=\"10.145\" cy=\"8\" r=\"2.5\" fill=\"white\" stroke=\"#009A6D\"/>\n      </svg>\n    </span>\n  </div>\n  ");
    var circlePlacemark = new ymaps.Placemark([53.184451071233134, 45.007014999999924], {}, {
      iconLayout: placemarkDiv,
      iconShape: {
        type: 'Circle',
        coordinates: [0, 0],
        radius: 30
      }
    });
    myMap.geoObjects.add(circlePlacemark);
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');
  };

  var initMapContactsMoscow = function initMapContactsMoscow() {
    var myMap = new ymaps.Map("contacts__map-moscow", {
      center: [55.7869050689375, 37.67187549999997],
      zoom: 13,
      minZoom: 13,
      controls: []
    }, {
      minZoom: 13
    });
    var placemarkDiv = ymaps.templateLayoutFactory.createClass("\n  <div class=\"placemark-custom\">\n    <span class=\"placemark__layout\">\n      <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M15.645 7.54741C15.645 8.93117 14.8282 10.8548 13.6386 12.8497C12.5829 14.6203 11.2788 16.374 10.1427 17.7311C8.94696 16.3197 7.63756 14.5599 6.59452 12.7978C5.42654 10.8246 4.64502 8.93422 4.64502 7.54741C4.64502 4.79601 7.06981 2.5 10.145 2.5C13.2202 2.5 15.645 4.79601 15.645 7.54741Z\" fill=\"#009A6D\" stroke=\"#009A6D\"/>\n        <circle cx=\"10.145\" cy=\"8\" r=\"2.5\" fill=\"white\" stroke=\"#009A6D\"/>\n      </svg>\n    </span>\n  </div>\n  ");
    var circlePlacemark = new ymaps.Placemark([55.7869050689375, 37.67187549999997], {}, {
      iconLayout: placemarkDiv,
      iconShape: {
        type: 'Circle',
        coordinates: [0, 0],
        radius: 30
      }
    });
    myMap.geoObjects.add(circlePlacemark);
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');
  };

  ymaps.ready(initMapContacts);
  ymaps.ready(initMapContactsMoscow);
}

if (document.getElementById("events")) {
  var _accordionItems = document.querySelectorAll('.events__accordion-item-head');

  _accordionItems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      elem.parentElement.classList.contains("is-show") ? accordionNotActive(elem) : accordionActive(elem);

      _accordionItems.forEach(function (el) {
        if (el.parentElement !== elem.parentElement) accordionNotActive(el);
      });
    });
  });
}

function heightBlock(block, items, count, gap) {
  var height = 0;

  for (var i = 0; i < count; i++) {
    height += items[i].getBoundingClientRect().height;
  }

  block.style.maxHeight = height + gap * (count - 1) + "px";
}

function bottomAbsolute(timelines, block, gap) {
  if (timelines) {
    var lastTimeline = timelines[timelines.length - 1].offsetHeight;
    block.style.bottom = "".concat(lastTimeline - gap, "px");
  }
}

function tabActive(btn, index, btns, elements) {
  btns.forEach(function (el) {
    return el.classList.remove("active");
  });
  elements.forEach(function (el) {
    return el.classList.remove("active");
  });
  setTimeout(function () {
    elements.forEach(function (el) {
      return el.style.display = "none";
    });
    elements[index].style.display = 'block';
    elements[index].classList.add('active');
  }, 300);
  btn.classList.add("active");
}

function accordionActive(item) {
  item.parentElement.classList.add("is-show");
  var panel = item.nextElementSibling;

  if (!panel.style.maxHeight) {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

function accordionNotActive(item) {
  item.parentElement.classList.remove("is-show");
  var panel = item.nextElementSibling;

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  }
}

function resizeForHeroLeft(block) {
  var windowWidth = window.innerWidth;
  var containerWidth = container.scrollWidth;

  if (windowWidth > containerWidth) {
    var widthForMenu = (windowWidth - containerWidth) / 2;
    block.style.marginLeft = widthForMenu + 'px';
    console.log(widthForMenu);
  } else {
    block.style.marginLeft = '0';
  }
}

function afterHeroMore(count, btn, items) {
  if (items.length > count) {
    items.forEach(function (item, index) {
      if (index > count) {
        item.classList.add("d-none");
      }
    });
    btn.addEventListener("click", function () {
      items.forEach(function (item, index) {
        item.classList.remove("d-none");
      });
      btn.classList.add("d-none");
    });
  }
}

function initMap() {
  var myMap = new ymaps.Map("js-map-penza", {
    center: [53.184451071233134, 45.007014999999924],
    zoom: 13,
    minZoom: 13,
    controls: []
  }, {
    minZoom: 13
  });
  var placemarkDiv = ymaps.templateLayoutFactory.createClass("\n  <div class=\"placemark-custom\">\n    <span class=\"placemark__layout\">\n      <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M15.645 7.54741C15.645 8.93117 14.8282 10.8548 13.6386 12.8497C12.5829 14.6203 11.2788 16.374 10.1427 17.7311C8.94696 16.3197 7.63756 14.5599 6.59452 12.7978C5.42654 10.8246 4.64502 8.93422 4.64502 7.54741C4.64502 4.79601 7.06981 2.5 10.145 2.5C13.2202 2.5 15.645 4.79601 15.645 7.54741Z\" fill=\"#009A6D\" stroke=\"#009A6D\"/>\n        <circle cx=\"10.145\" cy=\"8\" r=\"2.5\" fill=\"white\" stroke=\"#009A6D\"/>\n      </svg>\n    </span>\n  </div>\n  ");
  var circlePlacemark = new ymaps.Placemark([53.184451071233134, 45.007014999999924], {}, {
    iconLayout: placemarkDiv,
    iconShape: {
      type: 'Circle',
      coordinates: [0, 0],
      radius: 30
    }
  });
  myMap.geoObjects.add(circlePlacemark);
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('rulerControl');
}

ymaps.ready(initMap);

function initMapMoscow() {
  var myMap = new ymaps.Map("js-map-moscow", {
    center: [55.7869050689375, 37.67187549999997],
    zoom: 13,
    minZoom: 13,
    controls: []
  }, {
    minZoom: 13
  });
  var placemarkDiv = ymaps.templateLayoutFactory.createClass("\n  <div class=\"placemark-custom\">\n    <span class=\"placemark__layout\">\n      <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M15.645 7.54741C15.645 8.93117 14.8282 10.8548 13.6386 12.8497C12.5829 14.6203 11.2788 16.374 10.1427 17.7311C8.94696 16.3197 7.63756 14.5599 6.59452 12.7978C5.42654 10.8246 4.64502 8.93422 4.64502 7.54741C4.64502 4.79601 7.06981 2.5 10.145 2.5C13.2202 2.5 15.645 4.79601 15.645 7.54741Z\" fill=\"#009A6D\" stroke=\"#009A6D\"/>\n        <circle cx=\"10.145\" cy=\"8\" r=\"2.5\" fill=\"white\" stroke=\"#009A6D\"/>\n      </svg>\n    </span>\n  </div>\n  ");
  var circlePlacemark = new ymaps.Placemark([55.7869050689375, 37.67187549999997], {}, {
    iconLayout: placemarkDiv,
    iconShape: {
      type: 'Circle',
      coordinates: [0, 0],
      radius: 30
    }
  });
  myMap.geoObjects.add(circlePlacemark);
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('rulerControl');
}

ymaps.ready(initMapMoscow);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYnVyZ2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImNvbnRhaW5lciIsImhlYWRlckFjY29yZGlvbkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImhlYWRlciIsImJ0blVwIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNvbnRhaW5lcldpZHRoIiwic2Nyb2xsV2lkdGgiLCJ3aWR0aEZvck1lbnUiLCJzdHlsZSIsIndpZHRoIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZm9yRWFjaCIsImVsZW0iLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbnMiLCJhY2NvcmRpb25Ob3RBY3RpdmUiLCJhY2NvcmRpb25BY3RpdmUiLCJlbCIsImUiLCJ0YXJnZXQiLCJyZW1vdmUiLCJzY3JvbGxQb3NpdGlvbiIsInNjcm9sbFkiLCJhZGQiLCJpbm5lckhlaWdodCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJnZXRFbGVtZW50QnlJZCIsInRvZ2dsZVN3aXBlckJhc2VkT25XaWR0aCIsInNjcmVlbldpZHRoIiwic3dpcGVyQ29udGFpbmVyIiwic3dpcGVyMiIsImRlc3Ryb3kiLCJzd2lwZXJXcmFwcGVyIiwic3dpcGVyU2xpZGVzIiwic2xpZGUiLCJjb25zb2xlIiwibG9nIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJpdGVtcyIsImJ0biIsImFmdGVySGVyb01vcmUiLCJpdGVtIiwidGFiQnV0dG9ucyIsIkFycmF5IiwiZnJvbSIsImVsZW1lbnRzIiwiYWNjb3JkaW9uSXRlbXMiLCJmb3JtIiwibXlNb2RhbE9rIiwiYm9vdHN0cmFwIiwiTW9kYWwiLCJ0YWJBY3RpdmUiLCJpbmRleCIsInN3aXBlckxpdmUiLCJwcmV2ZW50RGVmYXVsdCIsInNob3ciLCJtb2RhbCIsImJ0bnMiLCJteU1vZGFsIiwibW9kYWxTd2lwZXIiLCJoaWRlIiwic3dpcGVyUVAiLCJ6b29tIiwidGh1bWJzIiwic3dpcGVyIiwibGVuZ3RoIiwiYmxvY2siLCJoaXN0b3J5U3RyaXAiLCJoaXN0b3J5VGltZWxpbmUiLCJtb3JlIiwiYnRuTW9yZSIsIm1heEhlaWdodCIsImJvdHRvbUFic29sdXRlIiwiaGVpZ2h0QmxvY2tGb3JXaW5kb3ciLCJoZWlnaHRCbG9jayIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpdGVtc09wZW4iLCJpbml0TWFwQ29udGFjdHMiLCJteU1hcCIsInltYXBzIiwiTWFwIiwiY2VudGVyIiwibWluWm9vbSIsImNvbnRyb2xzIiwicGxhY2VtYXJrRGl2IiwidGVtcGxhdGVMYXlvdXRGYWN0b3J5IiwiY3JlYXRlQ2xhc3MiLCJjaXJjbGVQbGFjZW1hcmsiLCJQbGFjZW1hcmsiLCJpY29uTGF5b3V0IiwiaWNvblNoYXBlIiwidHlwZSIsImNvb3JkaW5hdGVzIiwicmFkaXVzIiwiZ2VvT2JqZWN0cyIsImluaXRNYXBDb250YWN0c01vc2NvdyIsInJlYWR5IiwiY291bnQiLCJnYXAiLCJoZWlnaHQiLCJpIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGltZWxpbmVzIiwibGFzdFRpbWVsaW5lIiwib2Zmc2V0SGVpZ2h0IiwiYm90dG9tIiwic2V0VGltZW91dCIsImRpc3BsYXkiLCJwYW5lbCIsIm5leHRFbGVtZW50U2libGluZyIsInNjcm9sbEhlaWdodCIsInJlc2l6ZUZvckhlcm9MZWZ0IiwibWFyZ2luTGVmdCIsImluaXRNYXAiLCJpbml0TWFwTW9zY293Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWY7QUFDQSxJQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFiO0FBQ0EsSUFBTUUsU0FB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Q0FBSixDQUZKO01BR1RDLE1BQU0sRUFBRTtJQUhDO0VBRnNFLENBQTdELENBQXRCO0VBUUFmLEtBQUssQ0FBQ2dCLFVBQU4sQ0FBaUJqRixHQUFqQixDQUFxQjBFLGVBQXJCO0VBQ0FULEtBQUssQ0FBQ0ssUUFBTixDQUFlekUsTUFBZixDQUFzQixlQUF0QjtFQUNBb0UsS0FBSyxDQUFDSyxRQUFOLENBQWV6RSxNQUFmLENBQXNCLGdCQUF0QjtFQUNBb0UsS0FBSyxDQUFDSyxRQUFOLENBQWV6RSxNQUFmLENBQXNCLGNBQXRCO0VBQ0FvRSxLQUFLLENBQUNLLFFBQU4sQ0FBZXpFLE1BQWYsQ0FBc0IsbUJBQXRCO0VBQ0FvRSxLQUFLLENBQUNLLFFBQU4sQ0FBZXpFLE1BQWYsQ0FBc0IsY0FBdEI7QUFDRDs7QUFFRHFFLEtBQUssQ0FBQ2lCLEtBQU4sQ0FBWWtCLGFBQVoiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19idG5cIilcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudVwiKVxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXN0b20tY29udGFpbmVyXCIpO1xuY29uc3QgaGVhZGVyQWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWFjY29yZGlvbi1oZWFkZXJcIilcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xuY29uc3QgYnRuVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXVwJyk7XG5cbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLnNjcm9sbFdpZHRoO1xuXG4gIGlmICh3aW5kb3dXaWR0aCA+IGNvbnRhaW5lcldpZHRoKSB7XG5cbiAgICBjb25zdCB3aWR0aEZvck1lbnUgPSAod2luZG93V2lkdGggLSBjb250YWluZXJXaWR0aCkgLyAyXG4gICAgbWVudS5zdHlsZS53aWR0aCA9IDcyNSArIHdpZHRoRm9yTWVudSArICdweCc7XG4gIH0gZWxzZSB7XG4gICAgbWVudS5zdHlsZS53aWR0aCA9ICcnO1xuICB9XG5cbiAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xufSlcblxuaGVhZGVyQWNjb3JkaW9uSXRlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGVsZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1zaG93XCIpID8gYWNjb3JkaW9uTm90QWN0aXZlKGVsZW0pIDogYWNjb3JkaW9uQWN0aXZlKGVsZW0pXG4gICAgaGVhZGVyQWNjb3JkaW9uSXRlbXMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBpZiAoZWwucGFyZW50RWxlbWVudCAhPT0gZWxlbS5wYXJlbnRFbGVtZW50KSBhY2NvcmRpb25Ob3RBY3RpdmUoZWwpXG4gICAgfSlcbiAgfSlcbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKCFtZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnVyZ2VyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgIG1lbnUuc3R5bGUud2lkdGggPSAnJztcbiAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfVxufSlcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZXG5cbiAgaWYgKHNjcm9sbFBvc2l0aW9uID49IDEwMCkge1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICB9IGVsc2Uge1xuICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICB9XG59KVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICBpZiAod2luZG93LnNjcm9sbFkgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICBidG5VcC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKVxuICB9IGVsc2Uge1xuICAgIGJ0blVwLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpXG4gIH1cbn0pXG5cbmlmICh3aW5kb3cuc2Nyb2xsWSA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICBidG5VcC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKVxufSBlbHNlIHtcbiAgYnRuVXAuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJylcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY3ICYmIG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICB9XG59KVxuXG5idG5VcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgd2luZG93LnNjcm9sbFRvKHtcbiAgICB0b3A6IDAsXG4gICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gIH0pXG59KVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmRleFwiKSkge1xuICBuZXcgU3dpcGVyKFwiLmhlcm9fX2xlZnQtc3dpcGVyXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IFwiLmhlcm9fX2xlZnQtc3dpcGVyLW5leHRcIixcbiAgICAgIHByZXZFbDogXCIuaGVyb19fbGVmdC1zd2lwZXItcHJldlwiXG4gICAgfSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogXCIuaGVyb19fbGVmdC1zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgfSlcblxuICBuZXcgU3dpcGVyKFwiLmhlcm9fX3JpZ2h0LXN3aXBlclwiLCB7XG4gICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLmhlcm9fX3JpZ2h0LXN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIuaGVyb19fcmlnaHQtc3dpcGVyLW5leHRcIixcbiAgICAgIHByZXZFbDogXCIuaGVyb19fcmlnaHQtc3dpcGVyLXByZXZcIlxuICAgIH0sXG4gIH0pXG5cbiAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFmdGVyLWhlcm9fX2JveFwiKVxuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFmdGVyLWhlcm9fX2J0blwiKVxuICBjb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJXaWR0aClcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgODI3KSB7XG4gICAgYWZ0ZXJIZXJvTW9yZSgzLCBidG4sIGl0ZW1zKVxuICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTE0MCkge1xuICAgIGFmdGVySGVyb01vcmUoNSwgYnRuLCBpdGVtcylcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA4MjcpIHtcbiAgICAgIGlmICghYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImQtbm9uZVwiKSkge1xuICAgICAgICBhZnRlckhlcm9Nb3JlKDMsIGJ0biwgaXRlbXMpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDExNDApIHtcbiAgICAgIGlmICghYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImQtbm9uZVwiKSkge1xuICAgICAgICBhZnRlckhlcm9Nb3JlKDUsIGJ0biwgaXRlbXMpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIikpXG5cbiAgICB9XG4gIH0pXG5cbiAgY29uc3Qgc3dpcGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1c3RvbWVyc19fc3dpcGVyJyk7XG4gIGNvbnN0IHN3aXBlclNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b21lcnNfX3NsaWRlJyk7XG4gIGNvbnN0IHN3aXBlcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tZXJzX193cmFwcGVyJyk7XG5cbiAgbGV0IHN3aXBlcjIgPSBuZXcgU3dpcGVyKFwiLmN1c3RvbWVyc19fc3dpcGVyXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLmN1c3RvbWVyc19fcGFnaW5hdGlvblwiLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IFwiLmN1c3RvbWVyc19fc3dpcGVyLW5leHRcIixcbiAgICAgIHByZXZFbDogXCIuY3VzdG9tZXJzX19zd2lwZXItcHJldlwiXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgNTY3OiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICB9LFxuICAgICAgNzY4OiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICB9LFxuXG4gICAgfVxuICB9KTtcblxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVN3aXBlckJhc2VkT25XaWR0aCgpIHtcbiAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgaWYgKHNjcmVlbldpZHRoID4gNzY3KSB7XG4gICAgICAvLyDQo9C00LDQu9GP0LXQvCBTd2lwZXIg0Lgg0LTQtdC70LDQtdC8INC+0LHRi9GH0L3Rg9GOINGB0LXRgtC60YNcbiAgICAgIGlmIChzd2lwZXJDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItaW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICBzd2lwZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInN3aXBlci1pbml0aWFsaXplZFwiKTtcbiAgICAgICAgc3dpcGVyMi5kZXN0cm95KHRydWUsIHRydWUpO1xuICAgICAgICAvLyDQo9C90LjRh9GC0L7QttCw0LXQvCBTd2lwZXJcbiAgICAgIH1cblxuICAgICAgc3dpcGVyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3N3aXBlcicpO1xuICAgICAgc3dpcGVyV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwic3dpcGVyLXdyYXBwZXJcIilcbiAgICAgIHN3aXBlcldyYXBwZXIuY2xhc3NMaXN0LmFkZChcImN1c3RvbWVyc19fd3JhcHBlci1ncmlkXCIpXG4gICAgICBzd2lwZXJTbGlkZXMuZm9yRWFjaChzbGlkZSA9PiB7XG4gICAgICAgIHNsaWRlLmNsYXNzTGlzdC5hZGQoXCJjdXN0b21lcnNfX3NsaWRlLWdyaWRcIilcbiAgICAgICAgc2xpZGUuc3R5bGUud2lkdGggPSAnJzsgLy8g0KHQsdGA0LDRgdGL0LLQsNC10Lwg0YjQuNGA0LjQvdGDINGB0LvQsNC50LTQvtCyXG4gICAgICB9KTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDQktC+0YHRgdGC0LDQvdCw0LLQu9C40LLQsNC10LwgU3dpcGVyXG4gICAgICBpZiAoIXN3aXBlckNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1pbml0aWFsaXplZCcpKSB7XG5cbiAgICAgICAgc3dpcGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N3aXBlcicpO1xuICAgICAgICBzd2lwZXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJzd2lwZXItd3JhcHBlclwiKVxuICAgICAgICBzd2lwZXJXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXN0b21lcnNfX3dyYXBwZXItZ3JpZFwiKVxuICAgICAgICBzd2lwZXJTbGlkZXMuZm9yRWFjaChzbGlkZSA9PiB7XG4gICAgICAgICAgc2xpZGUuY2xhc3NMaXN0LnJlbW92ZShcImN1c3RvbWVyc19fc2xpZGUtZ3JpZFwiKVxuICAgICAgICAgIHNsaWRlLnN0eWxlLndpZHRoID0gJyc7IC8vINCh0LHRgNCw0YHRi9Cy0LDQtdC8INGI0LjRgNC40L3RgyDRgdC70LDQudC00L7QsiDQvdCwINGB0LvRg9GH0LDQuSDQuNC30LzQtdC90LXQvdC40LlcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHN3aXBlcjIpXG4gICAgICAgIHN3aXBlcjIgPSBuZXcgU3dpcGVyKFwiLmN1c3RvbWVyc19fc3dpcGVyXCIsIHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgZWw6IFwiLmN1c3RvbWVyc19fcGFnaW5hdGlvblwiLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICBuZXh0RWw6IFwiLmN1c3RvbWVyc19fc3dpcGVyLW5leHRcIixcbiAgICAgICAgICAgIHByZXZFbDogXCIuY3VzdG9tZXJzX19zd2lwZXItcHJldlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgNTY3OiB7XG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgOTkyOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbi8vINCX0LDQv9GD0YHQutCw0LXQvCDRhNGD0L3QutGG0LjRjiDQv9GA0Lgg0LjQt9C80LXQvdC10L3QuNC4INGA0LDQt9C80LXRgNCwINC+0LrQvdCwINC4INC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1INGB0YLRgNCw0L3QuNGG0YtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRvZ2dsZVN3aXBlckJhc2VkT25XaWR0aCk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgdG9nZ2xlU3dpcGVyQmFzZWRPbldpZHRoKTtcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrXCIpKSB7XG4gIGNvbnN0IHRhYkJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFnZXMtbGlua3MtbGlua1wiKSk7XG4gIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvcmtfX3RhYi1pdGVtXCIpKTtcbiAgY29uc3QgYWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmFjYW5jaWVzX19hY2NvcmRpb24taXRlbS1oZWFkJyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50ZXJuc2hpcF9fZm9ybS1qcycpXG4gIGNvbnN0IG15TW9kYWxPayA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1tb2RhbC1va1wiKSk7XG4gIHRhYkFjdGl2ZSh0YWJCdXR0b25zWzBdLCAwLCB0YWJCdXR0b25zLCBlbGVtZW50cylcblxuICB0YWJCdXR0b25zLmZvckVhY2goKGJ0biwgaW5kZXgpID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHt0YWJBY3RpdmUoYnRuLCBpbmRleCx0YWJCdXR0b25zLCBlbGVtZW50cyl9KVxuICB9KVxuXG4gIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZWxlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImlzLXNob3dcIikgPyBhY2NvcmRpb25Ob3RBY3RpdmUoZWxlbSkgOiBhY2NvcmRpb25BY3RpdmUoZWxlbSlcbiAgICAgIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBpZiAoZWwucGFyZW50RWxlbWVudCAhPT0gZWxlbS5wYXJlbnRFbGVtZW50KSBhY2NvcmRpb25Ob3RBY3RpdmUoZWwpXG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG5cbiAgbGV0IHN3aXBlckxpdmUgPSBuZXcgU3dpcGVyKFwiLmxpdmVfX3N3aXBlclwiLCB7XG4gICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiBcIi5saXZlX19wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIubGl2ZV9fc3dpcGVyLW5leHRcIixcbiAgICAgIHByZXZFbDogXCIubGl2ZV9fc3dpcGVyLXByZXZcIlxuICAgIH0sXG4gIH0pXG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBteU1vZGFsT2suc2hvdygpO1xuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxcFwiKSkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc3VibWl0LW1vZGFsXCIpO1xuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xcF9fYnV0dG9uXCIpO1xuICBjb25zdCBteU1vZGFsID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChtb2RhbCk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnFwX19tb2RhbC1mb3JtXCIpXG4gIGNvbnN0IG15TW9kYWxPayA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1tb2RhbC1va1wiKSk7XG4gIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xcF9fc3dpcGVyLXNsaWRlXCIpO1xuXG4gIGNvbnN0IG1vZGFsU3dpcGVyID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1vZGFsLXN3aXBlci1xcFwiKSk7XG5cbiAgYnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBteU1vZGFsLnNob3coKTtcbiAgICB9KVxuICB9KVxuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBteU1vZGFsLmhpZGUoKTtcbiAgICBteU1vZGFsT2suc2hvdygpO1xuICB9KVxuXG4gIGl0ZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbW9kYWxTd2lwZXIuc2hvdygpXG4gICAgfSlcbiAgfSlcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xcF9fc3dpcGVyXCIpKSB7XG4gICAgbGV0IHN3aXBlclFQID0gbmV3IFN3aXBlcihcIi5xcF9fc3dpcGVyXCIsIHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBlbDogXCIucXBfX3BhZ2luYXRpb25cIixcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICB9LFxuICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6IFwiLnFwX19zd2lwZXItbmV4dFwiLFxuICAgICAgICBwcmV2RWw6IFwiLnFwX19zd2lwZXItcHJldlwiXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICBsZXQgbW9kYWxTd2lwZXIgPSBuZXcgU3dpcGVyKFwiLnFwX19tb2RhbC1zd2lwZXJcIiwge1xuICAgICAgem9vbTogdHJ1ZSxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBwcmV2RWw6IFwiLnFwX19tb2RhbC1zd2lwZXItcHJldlwiLFxuICAgICAgICBuZXh0RWw6IFwiLnFwX19tb2RhbC1zd2lwZXItbmV4dFwiLFxuICAgICAgfSxcbiAgICAgIHRodW1iczoge1xuICAgICAgICBzd2lwZXI6IHN3aXBlclFQXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5xcF9fc3dpcGVyLXNsaWRlJykgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnFwX19zd2lwZXItc2xpZGUnKS5sZW5ndGggPCAyKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xcF9fc3dpcGVyLW5hdmlnYXRpb25cIikuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnZC1ub25lJylcbiAgICB9KVxuICB9XG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlzdG9yeVwiKSkge1xuICBjb25zdCBibG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlzdG9yeV9fYmxvY2tcIik7XG4gIGNvbnN0IGhpc3RvcnlTdHJpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlzdG9yeV9fc3RyaXBcIilcbiAgY29uc3QgaGlzdG9yeVRpbWVsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oaXN0b3J5X190aW1lbGluZVwiKVxuICBjb25zdCBtb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaXN0b3J5X19tb3JlXCIpXG4gIGNvbnN0IGJ0bk1vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpc3RvcnlfX21vcmUtYnRuXCIpXG5cbiAgaWYgKGhpc3RvcnlUaW1lbGluZS5sZW5ndGggPCA1KSB7XG4gICAgbW9yZS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG4gICAgYmxvY2suc3R5bGUubWF4SGVpZ2h0ID0gXCJub25lXCJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcbiAgICAgIGJvdHRvbUFic29sdXRlKGhpc3RvcnlUaW1lbGluZSwgaGlzdG9yeVN0cmlwLCAxOClcbiAgICB9IGVsc2Uge1xuICAgICAgYm90dG9tQWJzb2x1dGUoaGlzdG9yeVRpbWVsaW5lLCBoaXN0b3J5U3RyaXAsIDQwKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgICAgICBib3R0b21BYnNvbHV0ZShoaXN0b3J5VGltZWxpbmUsIGhpc3RvcnlTdHJpcCwgMTgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib3R0b21BYnNvbHV0ZShoaXN0b3J5VGltZWxpbmUsIGhpc3RvcnlTdHJpcCwgNDApXG4gICAgICB9XG4gICAgfSlcblxuICB9IGVsc2Uge1xuICAgIGZ1bmN0aW9uIGhlaWdodEJsb2NrRm9yV2luZG93ICgpIHtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgICAgICBoZWlnaHRCbG9jayhibG9jaywgaGlzdG9yeVRpbWVsaW5lLCA0LCA1OClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlaWdodEJsb2NrKGJsb2NrLCBoaXN0b3J5VGltZWxpbmUsIDQsIDgwKVxuICAgICAgfVxuICAgIH1cblxuICAgIGhlaWdodEJsb2NrRm9yV2luZG93KClcblxuICAgIG1vcmUuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IGhlaWdodEJsb2NrRm9yV2luZG93KVxuXG4gICAgYnRuTW9yZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4gaGVpZ2h0QmxvY2tGb3JXaW5kb3cpXG4gICAgICBtb3JlLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICAgIGJsb2NrLnN0eWxlLm1heEhlaWdodCA9IFwibm9uZVwiXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcbiAgICAgICAgYm90dG9tQWJzb2x1dGUoaGlzdG9yeVRpbWVsaW5lLCBoaXN0b3J5U3RyaXAsIDE4KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm90dG9tQWJzb2x1dGUoaGlzdG9yeVRpbWVsaW5lLCBoaXN0b3J5U3RyaXAsIDQwKVxuICAgICAgfVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcbiAgICAgICAgICBib3R0b21BYnNvbHV0ZShoaXN0b3J5VGltZWxpbmUsIGhpc3RvcnlTdHJpcCwgMTgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYm90dG9tQWJzb2x1dGUoaGlzdG9yeVRpbWVsaW5lLCBoaXN0b3J5U3RyaXAsIDQwKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuXG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGljZW5zZXNcIikpIHtcbiAgY29uc3QgbW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtbGljZW5zZS1tb2RhbFwiKSlcbiAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpY2Vuc2VzX19pdGVtLWluY3JlYXNlXCIpXG4gIGNvbnN0IGl0ZW1zT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGljZW5zZXNfX29wZW5cIilcblxuICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG1vZGFsLnNob3coKVxuICAgIH0pXG4gIH0pXG5cbiAgaXRlbXNPcGVuLmZvckVhY2goaXRlbSA9PiAoXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbW9kYWwuc2hvdygpXG4gICAgfSlcbiAgKSlcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0c1wiKSkge1xuICBmdW5jdGlvbiBpbml0TWFwQ29udGFjdHMoKSB7XG4gICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcImNvbnRhY3RzX19tYXAtcGVuemFcIiwge1xuICAgICAgY2VudGVyOiBbNTMuMTg0NDUxMDcxMjMzMTM0LDQ1LjAwNzAxNDk5OTk5OTkyNF0sXG4gICAgICB6b29tOiAxMyxcbiAgICAgIG1pblpvb206IDEzLFxuICAgICAgY29udHJvbHM6IFtdXG4gICAgfSwge1xuICAgICAgbWluWm9vbTogMTMsXG4gICAgfSlcblxuXG4gICAgdmFyIHBsYWNlbWFya0RpdiA9IHltYXBzLnRlbXBsYXRlTGF5b3V0RmFjdG9yeS5jcmVhdGVDbGFzcyhgXG4gIDxkaXYgY2xhc3M9XCJwbGFjZW1hcmstY3VzdG9tXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJwbGFjZW1hcmtfX2xheW91dFwiPlxuICAgICAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTUuNjQ1IDcuNTQ3NDFDMTUuNjQ1IDguOTMxMTcgMTQuODI4MiAxMC44NTQ4IDEzLjYzODYgMTIuODQ5N0MxMi41ODI5IDE0LjYyMDMgMTEuMjc4OCAxNi4zNzQgMTAuMTQyNyAxNy43MzExQzguOTQ2OTYgMTYuMzE5NyA3LjYzNzU2IDE0LjU1OTkgNi41OTQ1MiAxMi43OTc4QzUuNDI2NTQgMTAuODI0NiA0LjY0NTAyIDguOTM0MjIgNC42NDUwMiA3LjU0NzQxQzQuNjQ1MDIgNC43OTYwMSA3LjA2OTgxIDIuNSAxMC4xNDUgMi41QzEzLjIyMDIgMi41IDE1LjY0NSA0Ljc5NjAxIDE1LjY0NSA3LjU0NzQxWlwiIGZpbGw9XCIjMDA5QTZEXCIgc3Ryb2tlPVwiIzAwOUE2RFwiLz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjEwLjE0NVwiIGN5PVwiOFwiIHI9XCIyLjVcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCIjMDA5QTZEXCIvPlxuICAgICAgPC9zdmc+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbiAgYClcblxuICAgIHZhciBjaXJjbGVQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1My4xODQ0NTEwNzEyMzMxMzQsNDUuMDA3MDE0OTk5OTk5OTI0XSx7fSwge1xuICAgICAgaWNvbkxheW91dDogcGxhY2VtYXJrRGl2LFxuICAgICAgaWNvblNoYXBlOiB7XG4gICAgICAgIHR5cGU6ICdDaXJjbGUnLFxuICAgICAgICBjb29yZGluYXRlczogWzAsIDBdLFxuICAgICAgICByYWRpdXM6IDMwXG4gICAgICB9XG4gICAgfSlcbiAgICBteU1hcC5nZW9PYmplY3RzLmFkZChjaXJjbGVQbGFjZW1hcmspO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHJhZmZpY0NvbnRyb2wnKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3R5cGVTZWxlY3RvcicpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnZnVsbHNjcmVlbkNvbnRyb2wnKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xuICB9XG4gIGZ1bmN0aW9uIGluaXRNYXBDb250YWN0c01vc2NvdygpIHtcbiAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwiY29udGFjdHNfX21hcC1tb3Njb3dcIiwge1xuICAgICAgY2VudGVyOiBbNTUuNzg2OTA1MDY4OTM3NSwzNy42NzE4NzU0OTk5OTk5N10sXG4gICAgICB6b29tOiAxMyxcbiAgICAgIG1pblpvb206IDEzLFxuICAgICAgY29udHJvbHM6IFtdXG4gICAgfSwge1xuICAgICAgbWluWm9vbTogMTMsXG4gICAgfSlcblxuXG4gICAgdmFyIHBsYWNlbWFya0RpdiA9IHltYXBzLnRlbXBsYXRlTGF5b3V0RmFjdG9yeS5jcmVhdGVDbGFzcyhgXG4gIDxkaXYgY2xhc3M9XCJwbGFjZW1hcmstY3VzdG9tXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJwbGFjZW1hcmtfX2xheW91dFwiPlxuICAgICAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTUuNjQ1IDcuNTQ3NDFDMTUuNjQ1IDguOTMxMTcgMTQuODI4MiAxMC44NTQ4IDEzLjYzODYgMTIuODQ5N0MxMi41ODI5IDE0LjYyMDMgMTEuMjc4OCAxNi4zNzQgMTAuMTQyNyAxNy43MzExQzguOTQ2OTYgMTYuMzE5NyA3LjYzNzU2IDE0LjU1OTkgNi41OTQ1MiAxMi43OTc4QzUuNDI2NTQgMTAuODI0NiA0LjY0NTAyIDguOTM0MjIgNC42NDUwMiA3LjU0NzQxQzQuNjQ1MDIgNC43OTYwMSA3LjA2OTgxIDIuNSAxMC4xNDUgMi41QzEzLjIyMDIgMi41IDE1LjY0NSA0Ljc5NjAxIDE1LjY0NSA3LjU0NzQxWlwiIGZpbGw9XCIjMDA5QTZEXCIgc3Ryb2tlPVwiIzAwOUE2RFwiLz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjEwLjE0NVwiIGN5PVwiOFwiIHI9XCIyLjVcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCIjMDA5QTZEXCIvPlxuICAgICAgPC9zdmc+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbiAgYClcblxuICAgIHZhciBjaXJjbGVQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS43ODY5MDUwNjg5Mzc1LDM3LjY3MTg3NTQ5OTk5OTk3XSx7fSwge1xuICAgICAgaWNvbkxheW91dDogcGxhY2VtYXJrRGl2LFxuICAgICAgaWNvblNoYXBlOiB7XG4gICAgICAgIHR5cGU6ICdDaXJjbGUnLFxuICAgICAgICBjb29yZGluYXRlczogWzAsIDBdLFxuICAgICAgICByYWRpdXM6IDMwXG4gICAgICB9XG4gICAgfSlcbiAgICBteU1hcC5nZW9PYmplY3RzLmFkZChjaXJjbGVQbGFjZW1hcmspO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHJhZmZpY0NvbnRyb2wnKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3R5cGVTZWxlY3RvcicpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnZnVsbHNjcmVlbkNvbnRyb2wnKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xuICB9XG4gIHltYXBzLnJlYWR5KGluaXRNYXBDb250YWN0cylcbiAgeW1hcHMucmVhZHkoaW5pdE1hcENvbnRhY3RzTW9zY293KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJldmVudHNcIikpIHtcbiAgY29uc3QgYWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlbnRzX19hY2NvcmRpb24taXRlbS1oZWFkJyk7XG4gIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZWxlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImlzLXNob3dcIikgPyBhY2NvcmRpb25Ob3RBY3RpdmUoZWxlbSkgOiBhY2NvcmRpb25BY3RpdmUoZWxlbSlcbiAgICAgIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBpZiAoZWwucGFyZW50RWxlbWVudCAhPT0gZWxlbS5wYXJlbnRFbGVtZW50KSBhY2NvcmRpb25Ob3RBY3RpdmUoZWwpXG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGhlaWdodEJsb2NrIChibG9jaywgaXRlbXMsIGNvdW50LCBnYXApIHtcbiAgbGV0IGhlaWdodCA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgaGVpZ2h0ICs9IGl0ZW1zW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICB9XG5cbiAgYmxvY2suc3R5bGUubWF4SGVpZ2h0ID0gKGhlaWdodCArIChnYXAgKiAoY291bnQgLSAxKSkpICsgXCJweFwiO1xufVxuXG5mdW5jdGlvbiBib3R0b21BYnNvbHV0ZSh0aW1lbGluZXMsIGJsb2NrLCBnYXApIHtcblxuICBpZiAodGltZWxpbmVzKSB7XG4gICAgY29uc3QgbGFzdFRpbWVsaW5lID0gdGltZWxpbmVzW3RpbWVsaW5lcy5sZW5ndGggLSAxXS5vZmZzZXRIZWlnaHRcblxuICAgIGJsb2NrLnN0eWxlLmJvdHRvbSA9IGAke2xhc3RUaW1lbGluZSAtIGdhcH1weGBcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHRhYkFjdGl2ZShidG4sIGluZGV4LCBidG5zLCBlbGVtZW50cykge1xuICBidG5zLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpXG4gICAgZWxlbWVudHNbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGVsZW1lbnRzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICB9LCAzMDApXG5cbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIGFjY29yZGlvbkFjdGl2ZShpdGVtKSB7XG4gIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaXMtc2hvd1wiKTtcbiAgbGV0IHBhbmVsID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGlmICghcGFuZWwuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFjY29yZGlvbk5vdEFjdGl2ZShpdGVtKSB7XG4gIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtc2hvd1wiKTtcbiAgbGV0IHBhbmVsID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzaXplRm9ySGVyb0xlZnQgKGJsb2NrKSB7XG4gIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgY29uc3QgY29udGFpbmVyV2lkdGggPSBjb250YWluZXIuc2Nyb2xsV2lkdGhcblxuICBpZiAod2luZG93V2lkdGggPiBjb250YWluZXJXaWR0aCkge1xuICAgIGNvbnN0IHdpZHRoRm9yTWVudSA9ICh3aW5kb3dXaWR0aCAtIGNvbnRhaW5lcldpZHRoKSAvIDJcbiAgICBibG9jay5zdHlsZS5tYXJnaW5MZWZ0ID0gd2lkdGhGb3JNZW51ICsgJ3B4J1xuICAgIGNvbnNvbGUubG9nKHdpZHRoRm9yTWVudSlcbiAgfSBlbHNlIHtcbiAgICBibG9jay5zdHlsZS5tYXJnaW5MZWZ0ID0gJzAnXG4gIH1cbn1cblxuZnVuY3Rpb24gYWZ0ZXJIZXJvTW9yZSAoY291bnQsIGJ0biwgaXRlbXMpIHtcbiAgaWYgKGl0ZW1zLmxlbmd0aCA+IGNvdW50KSB7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA+IGNvdW50KSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcbiAgICAgIH0pXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcbiAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcImpzLW1hcC1wZW56YVwiLCB7XG4gICAgY2VudGVyOiBbNTMuMTg0NDUxMDcxMjMzMTM0LDQ1LjAwNzAxNDk5OTk5OTkyNF0sXG4gICAgem9vbTogMTMsXG4gICAgbWluWm9vbTogMTMsXG4gICAgY29udHJvbHM6IFtdXG4gIH0sIHtcbiAgICBtaW5ab29tOiAxMyxcbiAgfSlcblxuXG4gIHZhciBwbGFjZW1hcmtEaXYgPSB5bWFwcy50ZW1wbGF0ZUxheW91dEZhY3RvcnkuY3JlYXRlQ2xhc3MoYFxuICA8ZGl2IGNsYXNzPVwicGxhY2VtYXJrLWN1c3RvbVwiPlxuICAgIDxzcGFuIGNsYXNzPVwicGxhY2VtYXJrX19sYXlvdXRcIj5cbiAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBkPVwiTTE1LjY0NSA3LjU0NzQxQzE1LjY0NSA4LjkzMTE3IDE0LjgyODIgMTAuODU0OCAxMy42Mzg2IDEyLjg0OTdDMTIuNTgyOSAxNC42MjAzIDExLjI3ODggMTYuMzc0IDEwLjE0MjcgMTcuNzMxMUM4Ljk0Njk2IDE2LjMxOTcgNy42Mzc1NiAxNC41NTk5IDYuNTk0NTIgMTIuNzk3OEM1LjQyNjU0IDEwLjgyNDYgNC42NDUwMiA4LjkzNDIyIDQuNjQ1MDIgNy41NDc0MUM0LjY0NTAyIDQuNzk2MDEgNy4wNjk4MSAyLjUgMTAuMTQ1IDIuNUMxMy4yMjAyIDIuNSAxNS42NDUgNC43OTYwMSAxNS42NDUgNy41NDc0MVpcIiBmaWxsPVwiIzAwOUE2RFwiIHN0cm9rZT1cIiMwMDlBNkRcIi8+XG4gICAgICAgIDxjaXJjbGUgY3g9XCIxMC4xNDVcIiBjeT1cIjhcIiByPVwiMi41XCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiIzAwOUE2RFwiLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG4gIGApXG5cbiAgdmFyIGNpcmNsZVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzUzLjE4NDQ1MTA3MTIzMzEzNCw0NS4wMDcwMTQ5OTk5OTk5MjRdLHt9LCB7XG4gICAgaWNvbkxheW91dDogcGxhY2VtYXJrRGl2LFxuICAgIGljb25TaGFwZToge1xuICAgICAgdHlwZTogJ0NpcmNsZScsXG4gICAgICBjb29yZGluYXRlczogWzAsIDBdLFxuICAgICAgcmFkaXVzOiAzMFxuICAgIH1cbiAgfSlcbiAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQoY2lyY2xlUGxhY2VtYXJrKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdzZWFyY2hDb250cm9sJyk7XG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHJhZmZpY0NvbnRyb2wnKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0eXBlU2VsZWN0b3InKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdmdWxsc2NyZWVuQ29udHJvbCcpO1xuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xufVxuXG55bWFwcy5yZWFkeShpbml0TWFwKVxuXG5mdW5jdGlvbiBpbml0TWFwTW9zY293KCkge1xuICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwianMtbWFwLW1vc2Nvd1wiLCB7XG4gICAgY2VudGVyOiBbNTUuNzg2OTA1MDY4OTM3NSwzNy42NzE4NzU0OTk5OTk5N10sXG4gICAgem9vbTogMTMsXG4gICAgbWluWm9vbTogMTMsXG4gICAgY29udHJvbHM6IFtdXG4gIH0sIHtcbiAgICBtaW5ab29tOiAxMyxcbiAgfSlcblxuXG4gIHZhciBwbGFjZW1hcmtEaXYgPSB5bWFwcy50ZW1wbGF0ZUxheW91dEZhY3RvcnkuY3JlYXRlQ2xhc3MoYFxuICA8ZGl2IGNsYXNzPVwicGxhY2VtYXJrLWN1c3RvbVwiPlxuICAgIDxzcGFuIGNsYXNzPVwicGxhY2VtYXJrX19sYXlvdXRcIj5cbiAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBkPVwiTTE1LjY0NSA3LjU0NzQxQzE1LjY0NSA4LjkzMTE3IDE0LjgyODIgMTAuODU0OCAxMy42Mzg2IDEyLjg0OTdDMTIuNTgyOSAxNC42MjAzIDExLjI3ODggMTYuMzc0IDEwLjE0MjcgMTcuNzMxMUM4Ljk0Njk2IDE2LjMxOTcgNy42Mzc1NiAxNC41NTk5IDYuNTk0NTIgMTIuNzk3OEM1LjQyNjU0IDEwLjgyNDYgNC42NDUwMiA4LjkzNDIyIDQuNjQ1MDIgNy41NDc0MUM0LjY0NTAyIDQuNzk2MDEgNy4wNjk4MSAyLjUgMTAuMTQ1IDIuNUMxMy4yMjAyIDIuNSAxNS42NDUgNC43OTYwMSAxNS42NDUgNy41NDc0MVpcIiBmaWxsPVwiIzAwOUE2RFwiIHN0cm9rZT1cIiMwMDlBNkRcIi8+XG4gICAgICAgIDxjaXJjbGUgY3g9XCIxMC4xNDVcIiBjeT1cIjhcIiByPVwiMi41XCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiIzAwOUE2RFwiLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG4gIGApXG5cbiAgdmFyIGNpcmNsZVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1Ljc4NjkwNTA2ODkzNzUsMzcuNjcxODc1NDk5OTk5OTddLHt9LCB7XG4gICAgaWNvbkxheW91dDogcGxhY2VtYXJrRGl2LFxuICAgIGljb25TaGFwZToge1xuICAgICAgdHlwZTogJ0NpcmNsZScsXG4gICAgICBjb29yZGluYXRlczogWzAsIDBdLFxuICAgICAgcmFkaXVzOiAzMFxuICAgIH1cbiAgfSlcbiAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQoY2lyY2xlUGxhY2VtYXJrKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdzZWFyY2hDb250cm9sJyk7XG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHJhZmZpY0NvbnRyb2wnKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0eXBlU2VsZWN0b3InKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdmdWxsc2NyZWVuQ29udHJvbCcpO1xuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xufVxuXG55bWFwcy5yZWFkeShpbml0TWFwTW9zY293KSJdfQ==
