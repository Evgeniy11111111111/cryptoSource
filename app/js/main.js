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
  var checkbox = document.querySelectorAll(".licenses__filter-input");
  var checkedAll = document.querySelector(".licenses__filter-btn-all");
  var checkedReset = document.querySelector(".licenses__filter-btn-reset");

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

  var areAllChecked = function areAllChecked() {
    return Array.from(checkbox).every(function (elem) {
      return elem.checked;
    });
  };

  var areCheckedOne = function areCheckedOne() {
    return Array.from(checkbox).some(function (elem) {
      return elem.checked;
    });
  };

  checkedAll.addEventListener("click", function () {
    checkbox.forEach(function (elem) {
      return elem.checked = true;
    });
    checkedReset.disabled = false;
    checkedAll.disabled = true;
  });
  checkedReset.addEventListener("click", function () {
    checkbox.forEach(function (elem) {
      return elem.checked = false;
    });
    checkedReset.disabled = true;
    checkedAll.disabled = false;
  });
  checkbox.forEach(function (elem) {
    elem.addEventListener("change", function () {
      checkedAll.disabled = areAllChecked();
      checkedReset.disabled = !areCheckedOne();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYnVyZ2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImNvbnRhaW5lciIsImhlYWRlckFjY29yZGlvbkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImhlYWRlciIsImJ0blVwIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNvbnRhaW5lcldpZHRoIiwic2Nyb2xsV2lkdGgiLCJ3aWR0aEZvck1lbnUiLCJzdHlsZSIsIndpZHRoIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZm9yRWFjaCIsImVsZW0iLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbnMiLCJhY2NvcmRpb25Ob3RBY3RpdmUiLCJhY2NvcmRpb25BY3RpdmUiLCJlbCIsImUiLCJ0YXJnZXQiLCJyZW1vdmUiLCJzY3JvbGxQb3NpdGlvbiIsInNjcm9sbFkiLCJhZGQiLCJpbm5lckhlaWdodCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJnZXRFbGVtZW50QnlJZCIsInRvZ2dsZVN3aXBlckJhc2VkT25XaWR0aCIsInNjcmVlbldpZHRoIiwic3dpcGVyQ29udGFpbmVyIiwic3dpcGVyMiIsImRlc3Ryb3kiLCJzd2lwZXJXcmFwcGVyIiwic3dpcGVyU2xpZGVzIiwic2xpZGUiLCJjb25zb2xlIiwibG9nIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJpdGVtcyIsImJ0biIsImFmdGVySGVyb01vcmUiLCJpdGVtIiwidGFiQnV0dG9ucyIsIkFycmF5IiwiZnJvbSIsImVsZW1lbnRzIiwiYWNjb3JkaW9uSXRlbXMiLCJmb3JtIiwibXlNb2RhbE9rIiwiYm9vdHN0cmFwIiwiTW9kYWwiLCJ0YWJBY3RpdmUiLCJpbmRleCIsInN3aXBlckxpdmUiLCJwcmV2ZW50RGVmYXVsdCIsInNob3ciLCJtb2RhbCIsImJ0bnMiLCJteU1vZGFsIiwibW9kYWxTd2lwZXIiLCJoaWRlIiwic3dpcGVyUVAiLCJ6b29tIiwidGh1bWJzIiwic3dpcGVyIiwibGVuZ3RoIiwiYmxvY2siLCJoaXN0b3J5U3RyaXAiLCJoaXN0b3J5VGltZWxpbmUiLCJtb3JlIiwiYnRuTW9yZSIsIm1heEhlaWdodCIsImJvdHRvbUFic29sdXRlIiwiaGVpZ2h0QmxvY2tGb3JXaW5kb3ciLCJoZWlnaHRCbG9jayIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGVja2JveCIsImNoZWNrZWRBbGwiLCJjaGVja2VkUmVzZXQiLCJpdGVtc09wZW4iLCJhcmVBbGxDaGVja2VkIiwiZXZlcnkiLCJjaGVja2VkIiwiYXJlQ2hlY2tlZE9uZSIsInNvbWUiLCJkaXNhYmxlZCIsImluaXRNYXBDb250YWN0cyIsIm15TWFwIiwieW1hcHMiLCJNYXAiLCJjZW50ZXIiLCJtaW5ab29tIiwiY29udHJvbHMiLCJwbGFjZW1hcmtEaXYiLCJ0ZW1wbGF0ZUxheW91dEZhY3RvcnkiLCJjcmVhdGVDbGFzcyIsImNpcmNsZVBsYWNlbWFyayIsIlBsYWNlbWFyayIsImljb25MYXlvdXQiLCJpY29uU2hhcGUiLCJ0eXBlIiwiY29vcmRpbmF0ZXMiLCJyYWRpdXMiLCJnZW9PYmplY3RzIiwiaW5pdE1hcENvbnRhY3RzTW9zY293IiwicmVhZHkiLCJjb3VudCIsImdhcCIsImhlaWdodCIsImkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0aW1lbGluZXMiLCJsYXN0VGltZWxpbmUiLCJvZmZzZXRIZWlnaHQiLCJib3R0b20iLCJzZXRUaW1lb3V0IiwiZGlzcGxheSIsInBhbmVsIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwic2Nyb2xsSGVpZ2h0IiwicmVzaXplRm9ySGVyb0xlZnQiLCJtYXJnaW5MZWZ0IiwiaW5pdE1hcCIsImluaXRNYXBNb3Njb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBZjtBQUNBLElBQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQWI7QUFDQSxJQUFNRSxTQUFTLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBbEI7QUFDQSxJQUFNRyxvQkFBb0IsR0FBR0osUUFBUSxDQUFDSyxnQkFBVCxDQUEwQixzQkFBMUIsQ0FBN0I7QUFDQSxJQUFNQyxNQUFNLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0EsSUFBTU0sS0FBSyxHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZDtBQUVBRixNQUFNLENBQUNTLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07RUFDckMsSUFBTUMsV0FBVyxHQUFHQyxNQUFNLENBQUNDLFVBQTNCO0VBQ0EsSUFBTUMsY0FBYyxHQUFHVCxTQUFTLENBQUNVLFdBQWpDOztFQUVBLElBQUlKLFdBQVcsR0FBR0csY0FBbEIsRUFBa0M7SUFFaEMsSUFBTUUsWUFBWSxHQUFHLENBQUNMLFdBQVcsR0FBR0csY0FBZixJQUFpQyxDQUF0RDtJQUNBVixJQUFJLENBQUNhLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixNQUFNRixZQUFOLEdBQXFCLElBQXhDO0VBQ0QsQ0FKRCxNQUlPO0lBQ0xaLElBQUksQ0FBQ2EsS0FBTCxDQUFXQyxLQUFYLEdBQW1CLEVBQW5CO0VBQ0Q7O0VBRURqQixNQUFNLENBQUNrQixTQUFQLENBQWlCQyxNQUFqQixDQUF3QixRQUF4QjtFQUNBaEIsSUFBSSxDQUFDZSxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsUUFBdEI7QUFDRCxDQWREO0FBZ0JBZCxvQkFBb0IsQ0FBQ2UsT0FBckIsQ0FBNkIsVUFBQUMsSUFBSSxFQUFJO0VBQ25DQSxJQUFJLENBQUNaLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQU07SUFDbkNZLElBQUksQ0FBQ0MsYUFBTCxDQUFtQkosU0FBbkIsQ0FBNkJLLFFBQTdCLENBQXNDLFNBQXRDLElBQW1EQyxrQkFBa0IsQ0FBQ0gsSUFBRCxDQUFyRSxHQUE4RUksZUFBZSxDQUFDSixJQUFELENBQTdGO0lBQ0FoQixvQkFBb0IsQ0FBQ2UsT0FBckIsQ0FBNkIsVUFBQU0sRUFBRSxFQUFJO01BQ2pDLElBQUlBLEVBQUUsQ0FBQ0osYUFBSCxLQUFxQkQsSUFBSSxDQUFDQyxhQUE5QixFQUE2Q0Usa0JBQWtCLENBQUNFLEVBQUQsQ0FBbEI7SUFDOUMsQ0FGRDtFQUdELENBTEQ7QUFNRCxDQVBEO0FBU0F6QixRQUFRLENBQUNRLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUNrQixDQUFELEVBQU87RUFDeEMsSUFBSSxDQUFDeEIsSUFBSSxDQUFDb0IsUUFBTCxDQUFjSSxDQUFDLENBQUNDLE1BQWhCLENBQUQsSUFBNEIsQ0FBQzVCLE1BQU0sQ0FBQ3VCLFFBQVAsQ0FBZ0JJLENBQUMsQ0FBQ0MsTUFBbEIsQ0FBakMsRUFBNEQ7SUFDMUR6QixJQUFJLENBQUNhLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixFQUFuQjtJQUNBakIsTUFBTSxDQUFDa0IsU0FBUCxDQUFpQlcsTUFBakIsQ0FBd0IsUUFBeEI7SUFDQTFCLElBQUksQ0FBQ2UsU0FBTCxDQUFlVyxNQUFmLENBQXNCLFFBQXRCO0VBQ0Q7QUFDRixDQU5EO0FBUUFsQixNQUFNLENBQUNGLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07RUFDdEMsSUFBTXFCLGNBQWMsR0FBR25CLE1BQU0sQ0FBQ29CLE9BQTlCOztFQUVBLElBQUlELGNBQWMsSUFBSSxHQUF0QixFQUEyQjtJQUN6QnZCLE1BQU0sQ0FBQ1csU0FBUCxDQUFpQmMsR0FBakIsQ0FBcUIsUUFBckI7RUFDRCxDQUZELE1BRU87SUFDTHpCLE1BQU0sQ0FBQ1csU0FBUCxDQUFpQlcsTUFBakIsQ0FBd0IsUUFBeEI7RUFDRDtBQUNGLENBUkQ7QUFVQWxCLE1BQU0sQ0FBQ0YsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtFQUN0QyxJQUFJRSxNQUFNLENBQUNvQixPQUFQLEdBQWlCcEIsTUFBTSxDQUFDc0IsV0FBNUIsRUFBeUM7SUFDdkN6QixLQUFLLENBQUNVLFNBQU4sQ0FBZ0JXLE1BQWhCLENBQXVCLFdBQXZCO0VBQ0QsQ0FGRCxNQUVPO0lBQ0xyQixLQUFLLENBQUNVLFNBQU4sQ0FBZ0JjLEdBQWhCLENBQW9CLFdBQXBCO0VBQ0Q7QUFDRixDQU5EOztBQVFBLElBQUlyQixNQUFNLENBQUNvQixPQUFQLEdBQWlCcEIsTUFBTSxDQUFDc0IsV0FBNUIsRUFBeUM7RUFDdkN6QixLQUFLLENBQUNVLFNBQU4sQ0FBZ0JXLE1BQWhCLENBQXVCLFdBQXZCO0FBQ0QsQ0FGRCxNQUVPO0VBQ0xyQixLQUFLLENBQUNVLFNBQU4sQ0FBZ0JjLEdBQWhCLENBQW9CLFdBQXBCO0FBQ0Q7O0FBRURyQixNQUFNLENBQUNGLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07RUFDdEMsSUFBSUUsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLEdBQXBCLElBQTJCVCxJQUFJLENBQUNlLFNBQUwsQ0FBZUssUUFBZixDQUF3QixRQUF4QixDQUEvQixFQUFrRTtJQUNoRXZCLE1BQU0sQ0FBQ2tCLFNBQVAsQ0FBaUJXLE1BQWpCLENBQXdCLFFBQXhCO0lBQ0ExQixJQUFJLENBQUNlLFNBQUwsQ0FBZVcsTUFBZixDQUFzQixRQUF0QjtFQUNEO0FBQ0YsQ0FMRDtBQU9BckIsS0FBSyxDQUFDQyxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxZQUFNO0VBQ3BDRSxNQUFNLENBQUN1QixRQUFQLENBQWdCO0lBQ2RDLEdBQUcsRUFBRSxDQURTO0lBRWRDLFFBQVEsRUFBRTtFQUZJLENBQWhCO0FBSUQsQ0FMRDs7QUFPQSxJQUFJbkMsUUFBUSxDQUFDb0MsY0FBVCxDQUF3QixPQUF4QixDQUFKLEVBQXNDO0VBQUEsSUFnRjNCQyx3QkFoRjJCLEdBZ0ZwQyxTQUFTQSx3QkFBVCxHQUFvQztJQUNsQyxJQUFNQyxXQUFXLEdBQUc1QixNQUFNLENBQUNDLFVBQTNCOztJQUNBLElBQUkyQixXQUFXLEdBQUcsR0FBbEIsRUFBdUI7TUFDckI7TUFDQSxJQUFJQyxlQUFlLENBQUN0QixTQUFoQixDQUEwQkssUUFBMUIsQ0FBbUMsb0JBQW5DLENBQUosRUFBOEQ7UUFDNURpQixlQUFlLENBQUN0QixTQUFoQixDQUEwQlcsTUFBMUIsQ0FBaUMsb0JBQWpDO1FBQ0FZLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixJQUFoQixFQUFzQixJQUF0QixFQUY0RCxDQUc1RDtNQUNEOztNQUVERixlQUFlLENBQUN0QixTQUFoQixDQUEwQlcsTUFBMUIsQ0FBaUMsUUFBakM7TUFDQWMsYUFBYSxDQUFDekIsU0FBZCxDQUF3QlcsTUFBeEIsQ0FBK0IsZ0JBQS9CO01BQ0FjLGFBQWEsQ0FBQ3pCLFNBQWQsQ0FBd0JjLEdBQXhCLENBQTRCLHlCQUE1QjtNQUNBWSxZQUFZLENBQUN4QixPQUFiLENBQXFCLFVBQUF5QixLQUFLLEVBQUk7UUFDNUJBLEtBQUssQ0FBQzNCLFNBQU4sQ0FBZ0JjLEdBQWhCLENBQW9CLHVCQUFwQjtRQUNBYSxLQUFLLENBQUM3QixLQUFOLENBQVlDLEtBQVosR0FBb0IsRUFBcEIsQ0FGNEIsQ0FFSjtNQUN6QixDQUhEO0lBS0QsQ0FoQkQsTUFnQk87TUFDTDtNQUNBLElBQUksQ0FBQ3VCLGVBQWUsQ0FBQ3RCLFNBQWhCLENBQTBCSyxRQUExQixDQUFtQyxvQkFBbkMsQ0FBTCxFQUErRDtRQUU3RGlCLGVBQWUsQ0FBQ3RCLFNBQWhCLENBQTBCYyxHQUExQixDQUE4QixRQUE5QjtRQUNBVyxhQUFhLENBQUN6QixTQUFkLENBQXdCYyxHQUF4QixDQUE0QixnQkFBNUI7UUFDQVcsYUFBYSxDQUFDekIsU0FBZCxDQUF3QlcsTUFBeEIsQ0FBK0IseUJBQS9CO1FBQ0FlLFlBQVksQ0FBQ3hCLE9BQWIsQ0FBcUIsVUFBQXlCLEtBQUssRUFBSTtVQUM1QkEsS0FBSyxDQUFDM0IsU0FBTixDQUFnQlcsTUFBaEIsQ0FBdUIsdUJBQXZCO1VBQ0FnQixLQUFLLENBQUM3QixLQUFOLENBQVlDLEtBQVosR0FBb0IsRUFBcEIsQ0FGNEIsQ0FFSjtRQUN6QixDQUhEO1FBSUE2QixPQUFPLENBQUNDLEdBQVIsQ0FBWU4sT0FBWjtRQUNBQSxPQUFPLEdBQUcsSUFBSU8sTUFBSixDQUFXLG9CQUFYLEVBQWlDO1VBQ3pDQyxhQUFhLEVBQUUsQ0FEMEI7VUFFekNDLFlBQVksRUFBRSxFQUYyQjtVQUd6Q0MsVUFBVSxFQUFFO1lBQ1Z6QixFQUFFLEVBQUUsd0JBRE07WUFFVjBCLFNBQVMsRUFBRTtVQUZELENBSDZCO1VBT3pDQyxVQUFVLEVBQUU7WUFDVkMsTUFBTSxFQUFFLHlCQURFO1lBRVZDLE1BQU0sRUFBRTtVQUZFLENBUDZCO1VBV3pDQyxXQUFXLEVBQUU7WUFDWCxLQUFLO2NBQ0hQLGFBQWEsRUFBRSxDQURaO2NBRUhDLFlBQVksRUFBRTtZQUZYLENBRE07WUFLWCxLQUFLO2NBQ0hELGFBQWEsRUFBRSxDQURaO2NBRUhDLFlBQVksRUFBRTtZQUZYO1VBTE07UUFYNEIsQ0FBakMsQ0FBVjtNQXNCRDtJQUNGO0VBQ0YsQ0F0SW1DLEVBd0l0Qzs7O0VBdklFLElBQUlGLE1BQUosQ0FBVyxvQkFBWCxFQUFpQztJQUMvQkMsYUFBYSxFQUFFLENBRGdCO0lBRS9CQyxZQUFZLEVBQUUsQ0FGaUI7SUFHL0JHLFVBQVUsRUFBRTtNQUNWQyxNQUFNLEVBQUUseUJBREU7TUFFVkMsTUFBTSxFQUFFO0lBRkUsQ0FIbUI7SUFPL0JKLFVBQVUsRUFBRTtNQUNWekIsRUFBRSxFQUFFLCtCQURNO01BRVYwQixTQUFTLEVBQUU7SUFGRDtFQVBtQixDQUFqQztFQWFBLElBQUlKLE1BQUosQ0FBVyxxQkFBWCxFQUFrQztJQUNoQ0MsYUFBYSxFQUFFLENBRGlCO0lBRWhDQyxZQUFZLEVBQUUsQ0FGa0I7SUFHaENDLFVBQVUsRUFBRTtNQUNWekIsRUFBRSxFQUFFLGdDQURNO01BRVYwQixTQUFTLEVBQUU7SUFGRCxDQUhvQjtJQU9oQ0MsVUFBVSxFQUFFO01BQ1ZDLE1BQU0sRUFBRSwwQkFERTtNQUVWQyxNQUFNLEVBQUU7SUFGRTtFQVBvQixDQUFsQztFQWFBLElBQU1FLEtBQUssR0FBR3hELFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQWQ7RUFDQSxJQUFNb0QsR0FBRyxHQUFHekQsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUFaO0VBQ0E0QyxPQUFPLENBQUNDLEdBQVIsQ0FBWXBDLE1BQU0sQ0FBQ0MsVUFBbkI7O0VBQ0EsSUFBSUQsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLEdBQXhCLEVBQTZCO0lBQzNCK0MsYUFBYSxDQUFDLENBQUQsRUFBSUQsR0FBSixFQUFTRCxLQUFULENBQWI7RUFDRCxDQUZELE1BRU8sSUFBSTlDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixJQUF4QixFQUE4QjtJQUNuQytDLGFBQWEsQ0FBQyxDQUFELEVBQUlELEdBQUosRUFBU0QsS0FBVCxDQUFiO0VBQ0Q7O0VBRUQ5QyxNQUFNLENBQUNGLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07SUFDdEMsSUFBSUUsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLEdBQXhCLEVBQTZCO01BQzNCLElBQUksQ0FBQzhDLEdBQUcsQ0FBQ3hDLFNBQUosQ0FBY0ssUUFBZCxDQUF1QixRQUF2QixDQUFMLEVBQXVDO1FBQ3JDb0MsYUFBYSxDQUFDLENBQUQsRUFBSUQsR0FBSixFQUFTRCxLQUFULENBQWI7TUFDRDtJQUNGLENBSkQsTUFJTyxJQUFJOUMsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLElBQXhCLEVBQThCO01BQ25DLElBQUksQ0FBQzhDLEdBQUcsQ0FBQ3hDLFNBQUosQ0FBY0ssUUFBZCxDQUF1QixRQUF2QixDQUFMLEVBQXVDO1FBQ3JDb0MsYUFBYSxDQUFDLENBQUQsRUFBSUQsR0FBSixFQUFTRCxLQUFULENBQWI7TUFDRDtJQUNGLENBSk0sTUFJQTtNQUNMQSxLQUFLLENBQUNyQyxPQUFOLENBQWMsVUFBQXdDLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUMxQyxTQUFMLENBQWVXLE1BQWYsQ0FBc0IsUUFBdEIsQ0FBSjtNQUFBLENBQWxCO0lBRUQ7RUFDRixDQWJEO0VBZUEsSUFBTVcsZUFBZSxHQUFHdkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixDQUF4QjtFQUNBLElBQU0wQyxZQUFZLEdBQUczQyxRQUFRLENBQUNLLGdCQUFULENBQTBCLG1CQUExQixDQUFyQjtFQUNBLElBQU1xQyxhQUFhLEdBQUcxQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQXRCO0VBRUEsSUFBSXVDLE9BQU8sR0FBRyxJQUFJTyxNQUFKLENBQVcsb0JBQVgsRUFBaUM7SUFDN0NDLGFBQWEsRUFBRSxDQUQ4QjtJQUU3Q0MsWUFBWSxFQUFFLEVBRitCO0lBRzdDQyxVQUFVLEVBQUU7TUFDVnpCLEVBQUUsRUFBRSx3QkFETTtNQUVWMEIsU0FBUyxFQUFFO0lBRkQsQ0FIaUM7SUFPN0NDLFVBQVUsRUFBRTtNQUNWQyxNQUFNLEVBQUUseUJBREU7TUFFVkMsTUFBTSxFQUFFO0lBRkUsQ0FQaUM7SUFXN0NDLFdBQVcsRUFBRTtNQUNYLEtBQUs7UUFDSFAsYUFBYSxFQUFFLENBRFo7UUFFSEMsWUFBWSxFQUFFO01BRlgsQ0FETTtNQUtYLEtBQUs7UUFDSEQsYUFBYSxFQUFFLENBRFo7UUFFSEMsWUFBWSxFQUFFO01BRlg7SUFMTTtFQVhnQyxDQUFqQyxDQUFkO0VBa0ZBdkMsTUFBTSxDQUFDRixnQkFBUCxDQUF3QixRQUF4QixFQUFrQzZCLHdCQUFsQztFQUNBM0IsTUFBTSxDQUFDRixnQkFBUCxDQUF3QixNQUF4QixFQUFnQzZCLHdCQUFoQztBQUVEOztBQUVELElBQUlyQyxRQUFRLENBQUNvQyxjQUFULENBQXdCLE1BQXhCLENBQUosRUFBcUM7RUFDbkMsSUFBTXdCLFVBQVUsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVc5RCxRQUFRLENBQUNLLGdCQUFULENBQTBCLG1CQUExQixDQUFYLENBQW5CO0VBQ0EsSUFBTTBELFFBQVEsR0FBR0YsS0FBSyxDQUFDQyxJQUFOLENBQVc5RCxRQUFRLENBQUNLLGdCQUFULENBQTBCLGlCQUExQixDQUFYLENBQWpCO0VBQ0EsSUFBTTJELGNBQWMsR0FBR2hFLFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEIsaUNBQTFCLENBQXZCO0VBQ0EsSUFBTTRELElBQUksR0FBR2pFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixzQkFBdkIsQ0FBYjtFQUNBLElBQU1pRSxTQUFTLEdBQUcsSUFBSUMsU0FBUyxDQUFDQyxLQUFkLENBQW9CcEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQXBCLENBQWxCO0VBQ0FvRSxTQUFTLENBQUNULFVBQVUsQ0FBQyxDQUFELENBQVgsRUFBZ0IsQ0FBaEIsRUFBbUJBLFVBQW5CLEVBQStCRyxRQUEvQixDQUFUO0VBRUFILFVBQVUsQ0FBQ3pDLE9BQVgsQ0FBbUIsVUFBQ3NDLEdBQUQsRUFBTWEsS0FBTixFQUFnQjtJQUNqQ2IsR0FBRyxDQUFDakQsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBTTtNQUFDNkQsU0FBUyxDQUFDWixHQUFELEVBQU1hLEtBQU4sRUFBWVYsVUFBWixFQUF3QkcsUUFBeEIsQ0FBVDtJQUEyQyxDQUFoRjtFQUNELENBRkQ7RUFJQUMsY0FBYyxDQUFDN0MsT0FBZixDQUF1QixVQUFBQyxJQUFJLEVBQUk7SUFDN0JBLElBQUksQ0FBQ1osZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtNQUNuQ1ksSUFBSSxDQUFDQyxhQUFMLENBQW1CSixTQUFuQixDQUE2QkssUUFBN0IsQ0FBc0MsU0FBdEMsSUFBbURDLGtCQUFrQixDQUFDSCxJQUFELENBQXJFLEdBQThFSSxlQUFlLENBQUNKLElBQUQsQ0FBN0Y7TUFDQTRDLGNBQWMsQ0FBQzdDLE9BQWYsQ0FBdUIsVUFBQU0sRUFBRSxFQUFJO1FBQzNCLElBQUlBLEVBQUUsQ0FBQ0osYUFBSCxLQUFxQkQsSUFBSSxDQUFDQyxhQUE5QixFQUE2Q0Usa0JBQWtCLENBQUNFLEVBQUQsQ0FBbEI7TUFDOUMsQ0FGRDtJQUdELENBTEQ7RUFNRCxDQVBEO0VBU0EsSUFBSThDLFVBQVUsR0FBRyxJQUFJeEIsTUFBSixDQUFXLGVBQVgsRUFBNEI7SUFDM0NDLGFBQWEsRUFBRSxDQUQ0QjtJQUUzQ0MsWUFBWSxFQUFFLEVBRjZCO0lBRzNDQyxVQUFVLEVBQUU7TUFDVnpCLEVBQUUsRUFBRSxtQkFETTtNQUVWMEIsU0FBUyxFQUFFO0lBRkQsQ0FIK0I7SUFPM0NDLFVBQVUsRUFBRTtNQUNWQyxNQUFNLEVBQUUsb0JBREU7TUFFVkMsTUFBTSxFQUFFO0lBRkU7RUFQK0IsQ0FBNUIsQ0FBakI7RUFhQVcsSUFBSSxDQUFDekQsZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBZ0MsVUFBQ2tCLENBQUQsRUFBTztJQUNyQ0EsQ0FBQyxDQUFDOEMsY0FBRjtJQUNBTixTQUFTLENBQUNPLElBQVY7RUFDRCxDQUhEO0FBSUQ7O0FBRUQsSUFBSXpFLFFBQVEsQ0FBQ29DLGNBQVQsQ0FBd0IsSUFBeEIsQ0FBSixFQUFtQztFQUNqQyxJQUFNc0MsS0FBSyxHQUFHMUUsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUFkO0VBQ0EsSUFBTTBFLElBQUksR0FBRzNFLFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEIsYUFBMUIsQ0FBYjtFQUNBLElBQU11RSxPQUFPLEdBQUcsSUFBSVQsU0FBUyxDQUFDQyxLQUFkLENBQW9CTSxLQUFwQixDQUFoQjs7RUFDQSxJQUFNVCxLQUFJLEdBQUdqRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWI7O0VBQ0EsSUFBTWlFLFVBQVMsR0FBRyxJQUFJQyxTQUFTLENBQUNDLEtBQWQsQ0FBb0JwRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBcEIsQ0FBbEI7O0VBQ0EsSUFBTXVELE1BQUssR0FBR3hELFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEIsbUJBQTFCLENBQWQ7O0VBRUEsSUFBTXdFLFdBQVcsR0FBRyxJQUFJVixTQUFTLENBQUNDLEtBQWQsQ0FBb0JwRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQXBCLENBQXBCO0VBRUEwRSxJQUFJLENBQUN4RCxPQUFMLENBQWEsVUFBQXNDLEdBQUcsRUFBSTtJQUNsQkEsR0FBRyxDQUFDakQsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBTTtNQUNsQ29FLE9BQU8sQ0FBQ0gsSUFBUjtJQUNELENBRkQ7RUFHRCxDQUpEOztFQU1BUixLQUFJLENBQUN6RCxnQkFBTCxDQUFzQixRQUF0QixFQUFnQyxVQUFDa0IsQ0FBRCxFQUFPO0lBQ3JDQSxDQUFDLENBQUM4QyxjQUFGO0lBQ0FJLE9BQU8sQ0FBQ0UsSUFBUjs7SUFDQVosVUFBUyxDQUFDTyxJQUFWO0VBQ0QsQ0FKRDs7RUFNQWpCLE1BQUssQ0FBQ3JDLE9BQU4sQ0FBYyxVQUFBQyxJQUFJLEVBQUk7SUFDcEJBLElBQUksQ0FBQ1osZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtNQUNuQ3FFLFdBQVcsQ0FBQ0osSUFBWjtJQUNELENBRkQ7RUFHRCxDQUpEOztFQU1BLElBQUl6RSxRQUFRLENBQUNLLGdCQUFULENBQTBCLGFBQTFCLENBQUosRUFBOEM7SUFDNUMsSUFBSTBFLFFBQVEsR0FBRyxJQUFJaEMsTUFBSixDQUFXLGFBQVgsRUFBMEI7TUFDdkNDLGFBQWEsRUFBRSxDQUR3QjtNQUV2Q0MsWUFBWSxFQUFFLEVBRnlCO01BR3ZDQyxVQUFVLEVBQUU7UUFDVnpCLEVBQUUsRUFBRSxpQkFETTtRQUVWMEIsU0FBUyxFQUFFO01BRkQsQ0FIMkI7TUFPdkNDLFVBQVUsRUFBRTtRQUNWQyxNQUFNLEVBQUUsa0JBREU7UUFFVkMsTUFBTSxFQUFFO01BRkU7SUFQMkIsQ0FBMUIsQ0FBZjs7SUFhQSxJQUFJdUIsWUFBVyxHQUFHLElBQUk5QixNQUFKLENBQVcsbUJBQVgsRUFBZ0M7TUFDaERpQyxJQUFJLEVBQUUsSUFEMEM7TUFFaERoQyxhQUFhLEVBQUUsQ0FGaUM7TUFHaERDLFlBQVksRUFBRSxFQUhrQztNQUloREcsVUFBVSxFQUFFO1FBQ1ZFLE1BQU0sRUFBRSx3QkFERTtRQUVWRCxNQUFNLEVBQUU7TUFGRSxDQUpvQztNQVFoRDRCLE1BQU0sRUFBRTtRQUNOQyxNQUFNLEVBQUVIO01BREY7SUFSd0MsQ0FBaEMsQ0FBbEI7RUFZRDs7RUFHRCxJQUFJL0UsUUFBUSxDQUFDSyxnQkFBVCxDQUEwQixtQkFBMUIsS0FBa0RMLFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEIsbUJBQTFCLEVBQStDOEUsTUFBL0MsR0FBd0QsQ0FBOUcsRUFBaUg7SUFDL0duRixRQUFRLENBQUNLLGdCQUFULENBQTBCLHdCQUExQixFQUFvRGMsT0FBcEQsQ0FBNEQsVUFBQUMsSUFBSSxFQUFJO01BQ2xFQSxJQUFJLENBQUNILFNBQUwsQ0FBZWMsR0FBZixDQUFtQixRQUFuQjtJQUNELENBRkQ7RUFHRDtBQUVGOztBQUVELElBQUkvQixRQUFRLENBQUNvQyxjQUFULENBQXdCLFNBQXhCLENBQUosRUFBd0M7RUFDdEMsSUFBTWdELEtBQUssR0FBR3BGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBZDtFQUNBLElBQU1vRixZQUFZLEdBQUdyRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXJCO0VBQ0EsSUFBTXFGLGVBQWUsR0FBR3RGLFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEIsb0JBQTFCLENBQXhCO0VBQ0EsSUFBTWtGLElBQUksR0FBR3ZGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBYjtFQUNBLElBQU11RixPQUFPLEdBQUd4RixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWhCOztFQUVBLElBQUlxRixlQUFlLENBQUNILE1BQWhCLEdBQXlCLENBQTdCLEVBQWdDO0lBQzlCSSxJQUFJLENBQUN0RSxTQUFMLENBQWVjLEdBQWYsQ0FBbUIsUUFBbkI7SUFDQXFELEtBQUssQ0FBQ3JFLEtBQU4sQ0FBWTBFLFNBQVosR0FBd0IsTUFBeEI7O0lBQ0EsSUFBSS9FLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixHQUF4QixFQUE2QjtNQUMzQitFLGNBQWMsQ0FBQ0osZUFBRCxFQUFrQkQsWUFBbEIsRUFBZ0MsRUFBaEMsQ0FBZDtJQUNELENBRkQsTUFFTztNQUNMSyxjQUFjLENBQUNKLGVBQUQsRUFBa0JELFlBQWxCLEVBQWdDLEVBQWhDLENBQWQ7SUFDRDs7SUFFRDNFLE1BQU0sQ0FBQ0YsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtNQUN0QyxJQUFJRSxNQUFNLENBQUNDLFVBQVAsR0FBb0IsR0FBeEIsRUFBNkI7UUFDM0IrRSxjQUFjLENBQUNKLGVBQUQsRUFBa0JELFlBQWxCLEVBQWdDLEVBQWhDLENBQWQ7TUFDRCxDQUZELE1BRU87UUFDTEssY0FBYyxDQUFDSixlQUFELEVBQWtCRCxZQUFsQixFQUFnQyxFQUFoQyxDQUFkO01BQ0Q7SUFDRixDQU5EO0VBUUQsQ0FqQkQsTUFpQk87SUFBQSxJQUNJTSxvQkFESixHQUNMLFNBQVNBLG9CQUFULEdBQWlDO01BQy9CLElBQUlqRixNQUFNLENBQUNDLFVBQVAsR0FBb0IsR0FBeEIsRUFBNkI7UUFDM0JpRixXQUFXLENBQUNSLEtBQUQsRUFBUUUsZUFBUixFQUF5QixDQUF6QixFQUE0QixFQUE1QixDQUFYO01BQ0QsQ0FGRCxNQUVPO1FBQ0xNLFdBQVcsQ0FBQ1IsS0FBRCxFQUFRRSxlQUFSLEVBQXlCLENBQXpCLEVBQTRCLEVBQTVCLENBQVg7TUFDRDtJQUNGLENBUEk7O0lBU0xLLG9CQUFvQjtJQUVwQkosSUFBSSxDQUFDdEUsU0FBTCxDQUFlVyxNQUFmLENBQXNCLFFBQXRCO0lBQ0FsQixNQUFNLENBQUNGLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDO01BQUEsT0FBTW1GLG9CQUFOO0lBQUEsQ0FBbEM7SUFFQUgsT0FBTyxDQUFDaEYsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBTTtNQUN0Q0UsTUFBTSxDQUFDbUYsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUM7UUFBQSxPQUFNRixvQkFBTjtNQUFBLENBQXJDO01BQ0FKLElBQUksQ0FBQ3RFLFNBQUwsQ0FBZWMsR0FBZixDQUFtQixRQUFuQjtNQUNBcUQsS0FBSyxDQUFDckUsS0FBTixDQUFZMEUsU0FBWixHQUF3QixNQUF4Qjs7TUFDQSxJQUFJL0UsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLEdBQXhCLEVBQTZCO1FBQzNCK0UsY0FBYyxDQUFDSixlQUFELEVBQWtCRCxZQUFsQixFQUFnQyxFQUFoQyxDQUFkO01BQ0QsQ0FGRCxNQUVPO1FBQ0xLLGNBQWMsQ0FBQ0osZUFBRCxFQUFrQkQsWUFBbEIsRUFBZ0MsRUFBaEMsQ0FBZDtNQUNEOztNQUNEM0UsTUFBTSxDQUFDRixnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO1FBQ3RDLElBQUlFLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixHQUF4QixFQUE2QjtVQUMzQitFLGNBQWMsQ0FBQ0osZUFBRCxFQUFrQkQsWUFBbEIsRUFBZ0MsRUFBaEMsQ0FBZDtRQUNELENBRkQsTUFFTztVQUNMSyxjQUFjLENBQUNKLGVBQUQsRUFBa0JELFlBQWxCLEVBQWdDLEVBQWhDLENBQWQ7UUFDRDtNQUNGLENBTkQ7SUFPRCxDQWhCRDtFQWlCRDtBQUlGOztBQUVELElBQUlyRixRQUFRLENBQUNvQyxjQUFULENBQXdCLFVBQXhCLENBQUosRUFBeUM7RUFDdkMsSUFBTTBELFFBQVEsR0FBRzlGLFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEIseUJBQTFCLENBQWpCO0VBQ0EsSUFBTTBGLFVBQVUsR0FBRy9GLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QiwyQkFBdkIsQ0FBbkI7RUFDQSxJQUFNK0YsWUFBWSxHQUFHaEcsUUFBUSxDQUFDQyxhQUFULENBQXVCLDZCQUF2QixDQUFyQjs7RUFDQSxJQUFNeUUsTUFBSyxHQUFHLElBQUlQLFNBQVMsQ0FBQ0MsS0FBZCxDQUFvQnBFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBcEIsQ0FBZDs7RUFDQSxJQUFNdUQsT0FBSyxHQUFHeEQsUUFBUSxDQUFDSyxnQkFBVCxDQUEwQiwwQkFBMUIsQ0FBZDs7RUFDQSxJQUFNNEYsU0FBUyxHQUFHakcsUUFBUSxDQUFDSyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBbEI7O0VBRUFtRCxPQUFLLENBQUNyQyxPQUFOLENBQWMsVUFBQXdDLElBQUksRUFBSTtJQUNwQkEsSUFBSSxDQUFDbkQsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtNQUNuQ2tFLE1BQUssQ0FBQ0QsSUFBTjtJQUNELENBRkQ7RUFHRCxDQUpEOztFQU1Bd0IsU0FBUyxDQUFDOUUsT0FBVixDQUFrQixVQUFBd0MsSUFBSTtJQUFBLE9BQ3BCQSxJQUFJLENBQUNuRCxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFNO01BQ25Da0UsTUFBSyxDQUFDRCxJQUFOO0lBQ0QsQ0FGRCxDQURvQjtFQUFBLENBQXRCOztFQU1BLElBQU15QixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07SUFDMUIsT0FBT3JDLEtBQUssQ0FBQ0MsSUFBTixDQUFXZ0MsUUFBWCxFQUFxQkssS0FBckIsQ0FBMkIsVUFBQS9FLElBQUk7TUFBQSxPQUFJQSxJQUFJLENBQUNnRixPQUFUO0lBQUEsQ0FBL0IsQ0FBUDtFQUNELENBRkQ7O0VBSUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0lBQzFCLE9BQU94QyxLQUFLLENBQUNDLElBQU4sQ0FBV2dDLFFBQVgsRUFBcUJRLElBQXJCLENBQTBCLFVBQUFsRixJQUFJO01BQUEsT0FBSUEsSUFBSSxDQUFDZ0YsT0FBVDtJQUFBLENBQTlCLENBQVA7RUFDRCxDQUZEOztFQUlBTCxVQUFVLENBQUN2RixnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFNO0lBQ3pDc0YsUUFBUSxDQUFDM0UsT0FBVCxDQUFpQixVQUFBQyxJQUFJO01BQUEsT0FBSUEsSUFBSSxDQUFDZ0YsT0FBTCxHQUFlLElBQW5CO0lBQUEsQ0FBckI7SUFDQUosWUFBWSxDQUFDTyxRQUFiLEdBQXdCLEtBQXhCO0lBQ0FSLFVBQVUsQ0FBQ1EsUUFBWCxHQUFzQixJQUF0QjtFQUNELENBSkQ7RUFNQVAsWUFBWSxDQUFDeEYsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBTTtJQUMzQ3NGLFFBQVEsQ0FBQzNFLE9BQVQsQ0FBaUIsVUFBQUMsSUFBSTtNQUFBLE9BQUlBLElBQUksQ0FBQ2dGLE9BQUwsR0FBZSxLQUFuQjtJQUFBLENBQXJCO0lBQ0FKLFlBQVksQ0FBQ08sUUFBYixHQUF3QixJQUF4QjtJQUNBUixVQUFVLENBQUNRLFFBQVgsR0FBc0IsS0FBdEI7RUFDRCxDQUpEO0VBTUFULFFBQVEsQ0FBQzNFLE9BQVQsQ0FBaUIsVUFBQUMsSUFBSSxFQUFJO0lBQ3ZCQSxJQUFJLENBQUNaLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLFlBQU07TUFDcEN1RixVQUFVLENBQUNRLFFBQVgsR0FBc0JMLGFBQWEsRUFBbkM7TUFDQUYsWUFBWSxDQUFDTyxRQUFiLEdBQXdCLENBQUNGLGFBQWEsRUFBdEM7SUFDRCxDQUhEO0VBSUQsQ0FMRDtBQU1EOztBQUVELElBQUlyRyxRQUFRLENBQUNvQyxjQUFULENBQXdCLFVBQXhCLENBQUosRUFBeUM7RUFBQSxJQUM5Qm9FLGVBRDhCLEdBQ3ZDLFNBQVNBLGVBQVQsR0FBMkI7SUFDekIsSUFBSUMsS0FBSyxHQUFHLElBQUlDLEtBQUssQ0FBQ0MsR0FBVixDQUFjLHFCQUFkLEVBQXFDO01BQy9DQyxNQUFNLEVBQUUsQ0FBQyxrQkFBRCxFQUFvQixrQkFBcEIsQ0FEdUM7TUFFL0M1QixJQUFJLEVBQUUsRUFGeUM7TUFHL0M2QixPQUFPLEVBQUUsRUFIc0M7TUFJL0NDLFFBQVEsRUFBRTtJQUpxQyxDQUFyQyxFQUtUO01BQ0RELE9BQU8sRUFBRTtJQURSLENBTFMsQ0FBWjtJQVVBLElBQUlFLFlBQVksR0FBR0wsS0FBSyxDQUFDTSxxQkFBTixDQUE0QkMsV0FBNUIsMnBCQUFuQjtJQVdBLElBQUlDLGVBQWUsR0FBRyxJQUFJUixLQUFLLENBQUNTLFNBQVYsQ0FBb0IsQ0FBQyxrQkFBRCxFQUFvQixrQkFBcEIsQ0FBcEIsRUFBNEQsRUFBNUQsRUFBZ0U7TUFDcEZDLFVBQVUsRUFBRUwsWUFEd0U7TUFFcEZNLFNBQVMsRUFBRTtRQUNUQyxJQUFJLEVBQUUsUUFERztRQUVUQyxXQUFXLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUZKO1FBR1RDLE1BQU0sRUFBRTtNQUhDO0lBRnlFLENBQWhFLENBQXRCO0lBUUFmLEtBQUssQ0FBQ2dCLFVBQU4sQ0FBaUIxRixHQUFqQixDQUFxQm1GLGVBQXJCO0lBQ0FULEtBQUssQ0FBQ0ssUUFBTixDQUFlbEYsTUFBZixDQUFzQixlQUF0QjtJQUNBNkUsS0FBSyxDQUFDSyxRQUFOLENBQWVsRixNQUFmLENBQXNCLGdCQUF0QjtJQUNBNkUsS0FBSyxDQUFDSyxRQUFOLENBQWVsRixNQUFmLENBQXNCLGNBQXRCO0lBQ0E2RSxLQUFLLENBQUNLLFFBQU4sQ0FBZWxGLE1BQWYsQ0FBc0IsbUJBQXRCO0lBQ0E2RSxLQUFLLENBQUNLLFFBQU4sQ0FBZWxGLE1BQWYsQ0FBc0IsY0FBdEI7RUFDRCxDQXJDc0M7O0VBQUEsSUFzQzlCOEYscUJBdEM4QixHQXNDdkMsU0FBU0EscUJBQVQsR0FBaUM7SUFDL0IsSUFBSWpCLEtBQUssR0FBRyxJQUFJQyxLQUFLLENBQUNDLEdBQVYsQ0FBYyxzQkFBZCxFQUFzQztNQUNoREMsTUFBTSxFQUFFLENBQUMsZ0JBQUQsRUFBa0IsaUJBQWxCLENBRHdDO01BRWhENUIsSUFBSSxFQUFFLEVBRjBDO01BR2hENkIsT0FBTyxFQUFFLEVBSHVDO01BSWhEQyxRQUFRLEVBQUU7SUFKc0MsQ0FBdEMsRUFLVDtNQUNERCxPQUFPLEVBQUU7SUFEUixDQUxTLENBQVo7SUFVQSxJQUFJRSxZQUFZLEdBQUdMLEtBQUssQ0FBQ00scUJBQU4sQ0FBNEJDLFdBQTVCLDJwQkFBbkI7SUFXQSxJQUFJQyxlQUFlLEdBQUcsSUFBSVIsS0FBSyxDQUFDUyxTQUFWLENBQW9CLENBQUMsZ0JBQUQsRUFBa0IsaUJBQWxCLENBQXBCLEVBQXlELEVBQXpELEVBQTZEO01BQ2pGQyxVQUFVLEVBQUVMLFlBRHFFO01BRWpGTSxTQUFTLEVBQUU7UUFDVEMsSUFBSSxFQUFFLFFBREc7UUFFVEMsV0FBVyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FGSjtRQUdUQyxNQUFNLEVBQUU7TUFIQztJQUZzRSxDQUE3RCxDQUF0QjtJQVFBZixLQUFLLENBQUNnQixVQUFOLENBQWlCMUYsR0FBakIsQ0FBcUJtRixlQUFyQjtJQUNBVCxLQUFLLENBQUNLLFFBQU4sQ0FBZWxGLE1BQWYsQ0FBc0IsZUFBdEI7SUFDQTZFLEtBQUssQ0FBQ0ssUUFBTixDQUFlbEYsTUFBZixDQUFzQixnQkFBdEI7SUFDQTZFLEtBQUssQ0FBQ0ssUUFBTixDQUFlbEYsTUFBZixDQUFzQixjQUF0QjtJQUNBNkUsS0FBSyxDQUFDSyxRQUFOLENBQWVsRixNQUFmLENBQXNCLG1CQUF0QjtJQUNBNkUsS0FBSyxDQUFDSyxRQUFOLENBQWVsRixNQUFmLENBQXNCLGNBQXRCO0VBQ0QsQ0ExRXNDOztFQTJFdkM4RSxLQUFLLENBQUNpQixLQUFOLENBQVluQixlQUFaO0VBQ0FFLEtBQUssQ0FBQ2lCLEtBQU4sQ0FBWUQscUJBQVo7QUFDRDs7QUFFRCxJQUFJMUgsUUFBUSxDQUFDb0MsY0FBVCxDQUF3QixRQUF4QixDQUFKLEVBQXVDO0VBQ3JDLElBQU00QixlQUFjLEdBQUdoRSxRQUFRLENBQUNLLGdCQUFULENBQTBCLDhCQUExQixDQUF2Qjs7RUFDQTJELGVBQWMsQ0FBQzdDLE9BQWYsQ0FBdUIsVUFBQUMsSUFBSSxFQUFJO0lBQzdCQSxJQUFJLENBQUNaLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQU07TUFDbkNZLElBQUksQ0FBQ0MsYUFBTCxDQUFtQkosU0FBbkIsQ0FBNkJLLFFBQTdCLENBQXNDLFNBQXRDLElBQW1EQyxrQkFBa0IsQ0FBQ0gsSUFBRCxDQUFyRSxHQUE4RUksZUFBZSxDQUFDSixJQUFELENBQTdGOztNQUNBNEMsZUFBYyxDQUFDN0MsT0FBZixDQUF1QixVQUFBTSxFQUFFLEVBQUk7UUFDM0IsSUFBSUEsRUFBRSxDQUFDSixhQUFILEtBQXFCRCxJQUFJLENBQUNDLGFBQTlCLEVBQTZDRSxrQkFBa0IsQ0FBQ0UsRUFBRCxDQUFsQjtNQUM5QyxDQUZEO0lBR0QsQ0FMRDtFQU1ELENBUEQ7QUFRRDs7QUFFRCxTQUFTbUUsV0FBVCxDQUFzQlIsS0FBdEIsRUFBNkI1QixLQUE3QixFQUFvQ29FLEtBQXBDLEVBQTJDQyxHQUEzQyxFQUFnRDtFQUM5QyxJQUFJQyxNQUFNLEdBQUcsQ0FBYjs7RUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILEtBQXBCLEVBQTJCRyxDQUFDLEVBQTVCLEVBQWdDO0lBQzlCRCxNQUFNLElBQUl0RSxLQUFLLENBQUN1RSxDQUFELENBQUwsQ0FBU0MscUJBQVQsR0FBaUNGLE1BQTNDO0VBQ0Q7O0VBRUQxQyxLQUFLLENBQUNyRSxLQUFOLENBQVkwRSxTQUFaLEdBQXlCcUMsTUFBTSxHQUFJRCxHQUFHLElBQUlELEtBQUssR0FBRyxDQUFaLENBQWQsR0FBaUMsSUFBekQ7QUFDRDs7QUFFRCxTQUFTbEMsY0FBVCxDQUF3QnVDLFNBQXhCLEVBQW1DN0MsS0FBbkMsRUFBMEN5QyxHQUExQyxFQUErQztFQUU3QyxJQUFJSSxTQUFKLEVBQWU7SUFDYixJQUFNQyxZQUFZLEdBQUdELFNBQVMsQ0FBQ0EsU0FBUyxDQUFDOUMsTUFBVixHQUFtQixDQUFwQixDQUFULENBQWdDZ0QsWUFBckQ7SUFFQS9DLEtBQUssQ0FBQ3JFLEtBQU4sQ0FBWXFILE1BQVosYUFBd0JGLFlBQVksR0FBR0wsR0FBdkM7RUFDRDtBQUVGOztBQUVELFNBQVN4RCxTQUFULENBQW1CWixHQUFuQixFQUF3QmEsS0FBeEIsRUFBK0JLLElBQS9CLEVBQXFDWixRQUFyQyxFQUErQztFQUM3Q1ksSUFBSSxDQUFDeEQsT0FBTCxDQUFhLFVBQUNNLEVBQUQ7SUFBQSxPQUFRQSxFQUFFLENBQUNSLFNBQUgsQ0FBYVcsTUFBYixDQUFvQixRQUFwQixDQUFSO0VBQUEsQ0FBYjtFQUNBbUMsUUFBUSxDQUFDNUMsT0FBVCxDQUFpQixVQUFBTSxFQUFFO0lBQUEsT0FBSUEsRUFBRSxDQUFDUixTQUFILENBQWFXLE1BQWIsQ0FBb0IsUUFBcEIsQ0FBSjtFQUFBLENBQW5CO0VBQ0F5RyxVQUFVLENBQUMsWUFBTTtJQUNmdEUsUUFBUSxDQUFDNUMsT0FBVCxDQUFpQixVQUFBTSxFQUFFO01BQUEsT0FBSUEsRUFBRSxDQUFDVixLQUFILENBQVN1SCxPQUFULEdBQW1CLE1BQXZCO0lBQUEsQ0FBbkI7SUFDQXZFLFFBQVEsQ0FBQ08sS0FBRCxDQUFSLENBQWdCdkQsS0FBaEIsQ0FBc0J1SCxPQUF0QixHQUFnQyxPQUFoQztJQUNBdkUsUUFBUSxDQUFDTyxLQUFELENBQVIsQ0FBZ0JyRCxTQUFoQixDQUEwQmMsR0FBMUIsQ0FBOEIsUUFBOUI7RUFFRCxDQUxTLEVBS1AsR0FMTyxDQUFWO0VBT0EwQixHQUFHLENBQUN4QyxTQUFKLENBQWNjLEdBQWQsQ0FBa0IsUUFBbEI7QUFDRDs7QUFFRCxTQUFTUCxlQUFULENBQXlCbUMsSUFBekIsRUFBK0I7RUFDN0JBLElBQUksQ0FBQ3RDLGFBQUwsQ0FBbUJKLFNBQW5CLENBQTZCYyxHQUE3QixDQUFpQyxTQUFqQztFQUNBLElBQUl3RyxLQUFLLEdBQUc1RSxJQUFJLENBQUM2RSxrQkFBakI7O0VBQ0EsSUFBSSxDQUFDRCxLQUFLLENBQUN4SCxLQUFOLENBQVkwRSxTQUFqQixFQUE0QjtJQUMxQjhDLEtBQUssQ0FBQ3hILEtBQU4sQ0FBWTBFLFNBQVosR0FBd0I4QyxLQUFLLENBQUNFLFlBQU4sR0FBcUIsSUFBN0M7RUFDRDtBQUNGOztBQUVELFNBQVNsSCxrQkFBVCxDQUE0Qm9DLElBQTVCLEVBQWtDO0VBQ2hDQSxJQUFJLENBQUN0QyxhQUFMLENBQW1CSixTQUFuQixDQUE2QlcsTUFBN0IsQ0FBb0MsU0FBcEM7RUFDQSxJQUFJMkcsS0FBSyxHQUFHNUUsSUFBSSxDQUFDNkUsa0JBQWpCOztFQUNBLElBQUlELEtBQUssQ0FBQ3hILEtBQU4sQ0FBWTBFLFNBQWhCLEVBQTJCO0lBQ3pCOEMsS0FBSyxDQUFDeEgsS0FBTixDQUFZMEUsU0FBWixHQUF3QixJQUF4QjtFQUNEO0FBQ0Y7O0FBRUQsU0FBU2lELGlCQUFULENBQTRCdEQsS0FBNUIsRUFBbUM7RUFDakMsSUFBTTNFLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxVQUEzQjtFQUNBLElBQU1DLGNBQWMsR0FBR1QsU0FBUyxDQUFDVSxXQUFqQzs7RUFFQSxJQUFJSixXQUFXLEdBQUdHLGNBQWxCLEVBQWtDO0lBQ2hDLElBQU1FLFlBQVksR0FBRyxDQUFDTCxXQUFXLEdBQUdHLGNBQWYsSUFBaUMsQ0FBdEQ7SUFDQXdFLEtBQUssQ0FBQ3JFLEtBQU4sQ0FBWTRILFVBQVosR0FBeUI3SCxZQUFZLEdBQUcsSUFBeEM7SUFDQStCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZaEMsWUFBWjtFQUNELENBSkQsTUFJTztJQUNMc0UsS0FBSyxDQUFDckUsS0FBTixDQUFZNEgsVUFBWixHQUF5QixHQUF6QjtFQUNEO0FBQ0Y7O0FBRUQsU0FBU2pGLGFBQVQsQ0FBd0JrRSxLQUF4QixFQUErQm5FLEdBQS9CLEVBQW9DRCxLQUFwQyxFQUEyQztFQUN6QyxJQUFJQSxLQUFLLENBQUMyQixNQUFOLEdBQWV5QyxLQUFuQixFQUEwQjtJQUN4QnBFLEtBQUssQ0FBQ3JDLE9BQU4sQ0FBYyxVQUFDd0MsSUFBRCxFQUFPVyxLQUFQLEVBQWlCO01BQzdCLElBQUlBLEtBQUssR0FBR3NELEtBQVosRUFBbUI7UUFDakJqRSxJQUFJLENBQUMxQyxTQUFMLENBQWVjLEdBQWYsQ0FBbUIsUUFBbkI7TUFDRDtJQUNGLENBSkQ7SUFNQTBCLEdBQUcsQ0FBQ2pELGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07TUFDbENnRCxLQUFLLENBQUNyQyxPQUFOLENBQWMsVUFBQ3dDLElBQUQsRUFBT1csS0FBUCxFQUFpQjtRQUM3QlgsSUFBSSxDQUFDMUMsU0FBTCxDQUFlVyxNQUFmLENBQXNCLFFBQXRCO01BQ0QsQ0FGRDtNQUdBNkIsR0FBRyxDQUFDeEMsU0FBSixDQUFjYyxHQUFkLENBQWtCLFFBQWxCO0lBQ0QsQ0FMRDtFQU1EO0FBQ0Y7O0FBRUQsU0FBUzZHLE9BQVQsR0FBbUI7RUFDakIsSUFBSW5DLEtBQUssR0FBRyxJQUFJQyxLQUFLLENBQUNDLEdBQVYsQ0FBYyxjQUFkLEVBQThCO0lBQ3hDQyxNQUFNLEVBQUUsQ0FBQyxrQkFBRCxFQUFvQixrQkFBcEIsQ0FEZ0M7SUFFeEM1QixJQUFJLEVBQUUsRUFGa0M7SUFHeEM2QixPQUFPLEVBQUUsRUFIK0I7SUFJeENDLFFBQVEsRUFBRTtFQUo4QixDQUE5QixFQUtUO0lBQ0RELE9BQU8sRUFBRTtFQURSLENBTFMsQ0FBWjtFQVVBLElBQUlFLFlBQVksR0FBR0wsS0FBSyxDQUFDTSxxQkFBTixDQUE0QkMsV0FBNUIsMnBCQUFuQjtFQVdBLElBQUlDLGVBQWUsR0FBRyxJQUFJUixLQUFLLENBQUNTLFNBQVYsQ0FBb0IsQ0FBQyxrQkFBRCxFQUFvQixrQkFBcEIsQ0FBcEIsRUFBNEQsRUFBNUQsRUFBZ0U7SUFDcEZDLFVBQVUsRUFBRUwsWUFEd0U7SUFFcEZNLFNBQVMsRUFBRTtNQUNUQyxJQUFJLEVBQUUsUUFERztNQUVUQyxXQUFXLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUZKO01BR1RDLE1BQU0sRUFBRTtJQUhDO0VBRnlFLENBQWhFLENBQXRCO0VBUUFmLEtBQUssQ0FBQ2dCLFVBQU4sQ0FBaUIxRixHQUFqQixDQUFxQm1GLGVBQXJCO0VBQ0FULEtBQUssQ0FBQ0ssUUFBTixDQUFlbEYsTUFBZixDQUFzQixlQUF0QjtFQUNBNkUsS0FBSyxDQUFDSyxRQUFOLENBQWVsRixNQUFmLENBQXNCLGdCQUF0QjtFQUNBNkUsS0FBSyxDQUFDSyxRQUFOLENBQWVsRixNQUFmLENBQXNCLGNBQXRCO0VBQ0E2RSxLQUFLLENBQUNLLFFBQU4sQ0FBZWxGLE1BQWYsQ0FBc0IsbUJBQXRCO0VBQ0E2RSxLQUFLLENBQUNLLFFBQU4sQ0FBZWxGLE1BQWYsQ0FBc0IsY0FBdEI7QUFDRDs7QUFFRDhFLEtBQUssQ0FBQ2lCLEtBQU4sQ0FBWWlCLE9BQVo7O0FBRUEsU0FBU0MsYUFBVCxHQUF5QjtFQUN2QixJQUFJcEMsS0FBSyxHQUFHLElBQUlDLEtBQUssQ0FBQ0MsR0FBVixDQUFjLGVBQWQsRUFBK0I7SUFDekNDLE1BQU0sRUFBRSxDQUFDLGdCQUFELEVBQWtCLGlCQUFsQixDQURpQztJQUV6QzVCLElBQUksRUFBRSxFQUZtQztJQUd6QzZCLE9BQU8sRUFBRSxFQUhnQztJQUl6Q0MsUUFBUSxFQUFFO0VBSitCLENBQS9CLEVBS1Q7SUFDREQsT0FBTyxFQUFFO0VBRFIsQ0FMUyxDQUFaO0VBVUEsSUFBSUUsWUFBWSxHQUFHTCxLQUFLLENBQUNNLHFCQUFOLENBQTRCQyxXQUE1QiwycEJBQW5CO0VBV0EsSUFBSUMsZUFBZSxHQUFHLElBQUlSLEtBQUssQ0FBQ1MsU0FBVixDQUFvQixDQUFDLGdCQUFELEVBQWtCLGlCQUFsQixDQUFwQixFQUF5RCxFQUF6RCxFQUE2RDtJQUNqRkMsVUFBVSxFQUFFTCxZQURxRTtJQUVqRk0sU0FBUyxFQUFFO01BQ1RDLElBQUksRUFBRSxRQURHO01BRVRDLFdBQVcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBRko7TUFHVEMsTUFBTSxFQUFFO0lBSEM7RUFGc0UsQ0FBN0QsQ0FBdEI7RUFRQWYsS0FBSyxDQUFDZ0IsVUFBTixDQUFpQjFGLEdBQWpCLENBQXFCbUYsZUFBckI7RUFDQVQsS0FBSyxDQUFDSyxRQUFOLENBQWVsRixNQUFmLENBQXNCLGVBQXRCO0VBQ0E2RSxLQUFLLENBQUNLLFFBQU4sQ0FBZWxGLE1BQWYsQ0FBc0IsZ0JBQXRCO0VBQ0E2RSxLQUFLLENBQUNLLFFBQU4sQ0FBZWxGLE1BQWYsQ0FBc0IsY0FBdEI7RUFDQTZFLEtBQUssQ0FBQ0ssUUFBTixDQUFlbEYsTUFBZixDQUFzQixtQkFBdEI7RUFDQTZFLEtBQUssQ0FBQ0ssUUFBTixDQUFlbEYsTUFBZixDQUFzQixjQUF0QjtBQUNEOztBQUVEOEUsS0FBSyxDQUFDaUIsS0FBTixDQUFZa0IsYUFBWiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2J0blwiKVxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51XCIpXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1c3RvbS1jb250YWluZXJcIik7XG5jb25zdCBoZWFkZXJBY2NvcmRpb25JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtYWNjb3JkaW9uLWhlYWRlclwiKVxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG5jb25zdCBidG5VcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tdXAnKTtcblxuYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgY29uc3QgY29udGFpbmVyV2lkdGggPSBjb250YWluZXIuc2Nyb2xsV2lkdGg7XG5cbiAgaWYgKHdpbmRvd1dpZHRoID4gY29udGFpbmVyV2lkdGgpIHtcblxuICAgIGNvbnN0IHdpZHRoRm9yTWVudSA9ICh3aW5kb3dXaWR0aCAtIGNvbnRhaW5lcldpZHRoKSAvIDJcbiAgICBtZW51LnN0eWxlLndpZHRoID0gNzI1ICsgd2lkdGhGb3JNZW51ICsgJ3B4JztcbiAgfSBlbHNlIHtcbiAgICBtZW51LnN0eWxlLndpZHRoID0gJyc7XG4gIH1cblxuICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG59KVxuXG5oZWFkZXJBY2NvcmRpb25JdGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZWxlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImlzLXNob3dcIikgPyBhY2NvcmRpb25Ob3RBY3RpdmUoZWxlbSkgOiBhY2NvcmRpb25BY3RpdmUoZWxlbSlcbiAgICBoZWFkZXJBY2NvcmRpb25JdGVtcy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGlmIChlbC5wYXJlbnRFbGVtZW50ICE9PSBlbGVtLnBhcmVudEVsZW1lbnQpIGFjY29yZGlvbk5vdEFjdGl2ZShlbClcbiAgICB9KVxuICB9KVxufSlcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoIW1lbnUuY29udGFpbnMoZS50YXJnZXQpICYmICFidXJnZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgbWVudS5zdHlsZS53aWR0aCA9ICcnO1xuICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9XG59KVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFlcblxuICBpZiAoc2Nyb2xsUG9zaXRpb24gPj0gMTAwKSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gIH0gZWxzZSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gIH1cbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gIGlmICh3aW5kb3cuc2Nyb2xsWSA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgIGJ0blVwLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpXG4gIH0gZWxzZSB7XG4gICAgYnRuVXAuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJylcbiAgfVxufSlcblxuaWYgKHdpbmRvdy5zY3JvbGxZID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gIGJ0blVwLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpXG59IGVsc2Uge1xuICBidG5VcC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjcgJiYgbWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gIH1cbn0pXG5cbmJ0blVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgIHRvcDogMCxcbiAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgfSlcbn0pXG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZGV4XCIpKSB7XG4gIG5ldyBTd2lwZXIoXCIuaGVyb19fbGVmdC1zd2lwZXJcIiwge1xuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIuaGVyb19fbGVmdC1zd2lwZXItbmV4dFwiLFxuICAgICAgcHJldkVsOiBcIi5oZXJvX19sZWZ0LXN3aXBlci1wcmV2XCJcbiAgICB9LFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiBcIi5oZXJvX19sZWZ0LXN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICB9KVxuXG4gIG5ldyBTd2lwZXIoXCIuaGVyb19fcmlnaHQtc3dpcGVyXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogXCIuaGVyb19fcmlnaHQtc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiBcIi5oZXJvX19yaWdodC1zd2lwZXItbmV4dFwiLFxuICAgICAgcHJldkVsOiBcIi5oZXJvX19yaWdodC1zd2lwZXItcHJldlwiXG4gICAgfSxcbiAgfSlcblxuICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWZ0ZXItaGVyb19fYm94XCIpXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWZ0ZXItaGVyb19fYnRuXCIpXG4gIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKVxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA4MjcpIHtcbiAgICBhZnRlckhlcm9Nb3JlKDMsIGJ0biwgaXRlbXMpXG4gIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMTQwKSB7XG4gICAgYWZ0ZXJIZXJvTW9yZSg1LCBidG4sIGl0ZW1zKVxuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDgyNykge1xuICAgICAgaWYgKCFidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZC1ub25lXCIpKSB7XG4gICAgICAgIGFmdGVySGVyb01vcmUoMywgYnRuLCBpdGVtcylcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTE0MCkge1xuICAgICAgaWYgKCFidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZC1ub25lXCIpKSB7XG4gICAgICAgIGFmdGVySGVyb01vcmUoNSwgYnRuLCBpdGVtcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKSlcblxuICAgIH1cbiAgfSlcblxuICBjb25zdCBzd2lwZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tZXJzX19zd2lwZXInKTtcbiAgY29uc3Qgc3dpcGVyU2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbWVyc19fc2xpZGUnKTtcbiAgY29uc3Qgc3dpcGVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21lcnNfX3dyYXBwZXInKTtcblxuICBsZXQgc3dpcGVyMiA9IG5ldyBTd2lwZXIoXCIuY3VzdG9tZXJzX19zd2lwZXJcIiwge1xuICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogXCIuY3VzdG9tZXJzX19wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIuY3VzdG9tZXJzX19zd2lwZXItbmV4dFwiLFxuICAgICAgcHJldkVsOiBcIi5jdXN0b21lcnNfX3N3aXBlci1wcmV2XCJcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA1Njc6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgIH0sXG4gICAgICA3Njg6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgIH0sXG5cbiAgICB9XG4gIH0pO1xuXG5cbiAgZnVuY3Rpb24gdG9nZ2xlU3dpcGVyQmFzZWRPbldpZHRoKCkge1xuICAgIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgICBpZiAoc2NyZWVuV2lkdGggPiA3NjcpIHtcbiAgICAgIC8vINCj0LTQsNC70Y/QtdC8IFN3aXBlciDQuCDQtNC10LvQsNC10Lwg0L7QsdGL0YfQvdGD0Y4g0YHQtdGC0LrRg1xuICAgICAgaWYgKHN3aXBlckNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgIHN3aXBlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic3dpcGVyLWluaXRpYWxpemVkXCIpO1xuICAgICAgICBzd2lwZXIyLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIC8vINCj0L3QuNGH0YLQvtC20LDQtdC8IFN3aXBlclxuICAgICAgfVxuXG4gICAgICBzd2lwZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3dpcGVyJyk7XG4gICAgICBzd2lwZXJXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzd2lwZXItd3JhcHBlclwiKVxuICAgICAgc3dpcGVyV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tZXJzX193cmFwcGVyLWdyaWRcIilcbiAgICAgIHN3aXBlclNsaWRlcy5mb3JFYWNoKHNsaWRlID0+IHtcbiAgICAgICAgc2xpZGUuY2xhc3NMaXN0LmFkZChcImN1c3RvbWVyc19fc2xpZGUtZ3JpZFwiKVxuICAgICAgICBzbGlkZS5zdHlsZS53aWR0aCA9ICcnOyAvLyDQodCx0YDQsNGB0YvQstCw0LXQvCDRiNC40YDQuNC90YMg0YHQu9Cw0LnQtNC+0LJcbiAgICAgIH0pO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vINCS0L7RgdGB0YLQsNC90LDQstC70LjQstCw0LXQvCBTd2lwZXJcbiAgICAgIGlmICghc3dpcGVyQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWluaXRpYWxpemVkJykpIHtcblxuICAgICAgICBzd2lwZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3dpcGVyJyk7XG4gICAgICAgIHN3aXBlcldyYXBwZXIuY2xhc3NMaXN0LmFkZChcInN3aXBlci13cmFwcGVyXCIpXG4gICAgICAgIHN3aXBlcldyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImN1c3RvbWVyc19fd3JhcHBlci1ncmlkXCIpXG4gICAgICAgIHN3aXBlclNsaWRlcy5mb3JFYWNoKHNsaWRlID0+IHtcbiAgICAgICAgICBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKFwiY3VzdG9tZXJzX19zbGlkZS1ncmlkXCIpXG4gICAgICAgICAgc2xpZGUuc3R5bGUud2lkdGggPSAnJzsgLy8g0KHQsdGA0LDRgdGL0LLQsNC10Lwg0YjQuNGA0LjQvdGDINGB0LvQsNC50LTQvtCyINC90LAg0YHQu9GD0YfQsNC5INC40LfQvNC10L3QtdC90LjQuVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coc3dpcGVyMilcbiAgICAgICAgc3dpcGVyMiA9IG5ldyBTd2lwZXIoXCIuY3VzdG9tZXJzX19zd2lwZXJcIiwge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICBlbDogXCIuY3VzdG9tZXJzX19wYWdpbmF0aW9uXCIsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgIG5leHRFbDogXCIuY3VzdG9tZXJzX19zd2lwZXItbmV4dFwiLFxuICAgICAgICAgICAgcHJldkVsOiBcIi5jdXN0b21lcnNfX3N3aXBlci1wcmV2XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgICAgICA1Njc6IHtcbiAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA5OTI6IHtcbiAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuLy8g0JfQsNC/0YPRgdC60LDQtdC8INGE0YPQvdC60YbQuNGOINC/0YDQuCDQuNC30LzQtdC90LXQvdC40Lgg0YDQsNC30LzQtdGA0LAg0L7QutC90LAg0Lgg0L/RgNC4INC30LDQs9GA0YPQt9C60LUg0YHRgtGA0LDQvdC40YbRi1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdG9nZ2xlU3dpcGVyQmFzZWRPbldpZHRoKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0b2dnbGVTd2lwZXJCYXNlZE9uV2lkdGgpO1xuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtcIikpIHtcbiAgY29uc3QgdGFiQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYWdlcy1saW5rcy1saW5rXCIpKTtcbiAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29ya19fdGFiLWl0ZW1cIikpO1xuICBjb25zdCBhY2NvcmRpb25JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52YWNhbmNpZXNfX2FjY29yZGlvbi1pdGVtLWhlYWQnKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRlcm5zaGlwX19mb3JtLWpzJylcbiAgY29uc3QgbXlNb2RhbE9rID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1vZGFsLW9rXCIpKTtcbiAgdGFiQWN0aXZlKHRhYkJ1dHRvbnNbMF0sIDAsIHRhYkJ1dHRvbnMsIGVsZW1lbnRzKVxuXG4gIHRhYkJ1dHRvbnMuZm9yRWFjaCgoYnRuLCBpbmRleCkgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge3RhYkFjdGl2ZShidG4sIGluZGV4LHRhYkJ1dHRvbnMsIGVsZW1lbnRzKX0pXG4gIH0pXG5cbiAgYWNjb3JkaW9uSXRlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBlbGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtc2hvd1wiKSA/IGFjY29yZGlvbk5vdEFjdGl2ZShlbGVtKSA6IGFjY29yZGlvbkFjdGl2ZShlbGVtKVxuICAgICAgYWNjb3JkaW9uSXRlbXMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGlmIChlbC5wYXJlbnRFbGVtZW50ICE9PSBlbGVtLnBhcmVudEVsZW1lbnQpIGFjY29yZGlvbk5vdEFjdGl2ZShlbClcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcblxuICBsZXQgc3dpcGVyTGl2ZSA9IG5ldyBTd2lwZXIoXCIubGl2ZV9fc3dpcGVyXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLmxpdmVfX3BhZ2luYXRpb25cIixcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiBcIi5saXZlX19zd2lwZXItbmV4dFwiLFxuICAgICAgcHJldkVsOiBcIi5saXZlX19zd2lwZXItcHJldlwiXG4gICAgfSxcbiAgfSlcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG15TW9kYWxPay5zaG93KCk7XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInFwXCIpKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1zdWJtaXQtbW9kYWxcIik7XG4gIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnFwX19idXR0b25cIik7XG4gIGNvbnN0IG15TW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKG1vZGFsKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXBfX21vZGFsLWZvcm1cIilcbiAgY29uc3QgbXlNb2RhbE9rID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1vZGFsLW9rXCIpKTtcbiAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnFwX19zd2lwZXItc2xpZGVcIik7XG5cbiAgY29uc3QgbW9kYWxTd2lwZXIgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtbW9kYWwtc3dpcGVyLXFwXCIpKTtcblxuICBidG5zLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG15TW9kYWwuc2hvdygpO1xuICAgIH0pXG4gIH0pXG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG15TW9kYWwuaGlkZSgpO1xuICAgIG15TW9kYWxPay5zaG93KCk7XG4gIH0pXG5cbiAgaXRlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBtb2RhbFN3aXBlci5zaG93KClcbiAgICB9KVxuICB9KVxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnFwX19zd2lwZXJcIikpIHtcbiAgICBsZXQgc3dpcGVyUVAgPSBuZXcgU3dpcGVyKFwiLnFwX19zd2lwZXJcIiwge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiBcIi5xcF9fcGFnaW5hdGlvblwiLFxuICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgIH0sXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogXCIucXBfX3N3aXBlci1uZXh0XCIsXG4gICAgICAgIHByZXZFbDogXCIucXBfX3N3aXBlci1wcmV2XCJcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIGxldCBtb2RhbFN3aXBlciA9IG5ldyBTd2lwZXIoXCIucXBfX21vZGFsLXN3aXBlclwiLCB7XG4gICAgICB6b29tOiB0cnVlLFxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIHByZXZFbDogXCIucXBfX21vZGFsLXN3aXBlci1wcmV2XCIsXG4gICAgICAgIG5leHRFbDogXCIucXBfX21vZGFsLXN3aXBlci1uZXh0XCIsXG4gICAgICB9LFxuICAgICAgdGh1bWJzOiB7XG4gICAgICAgIHN3aXBlcjogc3dpcGVyUVBcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnFwX19zd2lwZXItc2xpZGUnKSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucXBfX3N3aXBlci1zbGlkZScpLmxlbmd0aCA8IDIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnFwX19zd2lwZXItbmF2aWdhdGlvblwiKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKVxuICAgIH0pXG4gIH1cblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaXN0b3J5XCIpKSB7XG4gIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaXN0b3J5X19ibG9ja1wiKTtcbiAgY29uc3QgaGlzdG9yeVN0cmlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaXN0b3J5X19zdHJpcFwiKVxuICBjb25zdCBoaXN0b3J5VGltZWxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhpc3RvcnlfX3RpbWVsaW5lXCIpXG4gIGNvbnN0IG1vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpc3RvcnlfX21vcmVcIilcbiAgY29uc3QgYnRuTW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlzdG9yeV9fbW9yZS1idG5cIilcblxuICBpZiAoaGlzdG9yeVRpbWVsaW5lLmxlbmd0aCA8IDUpIHtcbiAgICBtb3JlLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICBibG9jay5zdHlsZS5tYXhIZWlnaHQgPSBcIm5vbmVcIlxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgICAgYm90dG9tQWJzb2x1dGUoaGlzdG9yeVRpbWVsaW5lLCBoaXN0b3J5U3RyaXAsIDE4KVxuICAgIH0gZWxzZSB7XG4gICAgICBib3R0b21BYnNvbHV0ZShoaXN0b3J5VGltZWxpbmUsIGhpc3RvcnlTdHJpcCwgNDApXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XG4gICAgICAgIGJvdHRvbUFic29sdXRlKGhpc3RvcnlUaW1lbGluZSwgaGlzdG9yeVN0cmlwLCAxOClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvdHRvbUFic29sdXRlKGhpc3RvcnlUaW1lbGluZSwgaGlzdG9yeVN0cmlwLCA0MClcbiAgICAgIH1cbiAgICB9KVxuXG4gIH0gZWxzZSB7XG4gICAgZnVuY3Rpb24gaGVpZ2h0QmxvY2tGb3JXaW5kb3cgKCkge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XG4gICAgICAgIGhlaWdodEJsb2NrKGJsb2NrLCBoaXN0b3J5VGltZWxpbmUsIDQsIDU4KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVpZ2h0QmxvY2soYmxvY2ssIGhpc3RvcnlUaW1lbGluZSwgNCwgODApXG4gICAgICB9XG4gICAgfVxuXG4gICAgaGVpZ2h0QmxvY2tGb3JXaW5kb3coKVxuXG4gICAgbW9yZS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4gaGVpZ2h0QmxvY2tGb3JXaW5kb3cpXG5cbiAgICBidG5Nb3JlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiBoZWlnaHRCbG9ja0ZvcldpbmRvdylcbiAgICAgIG1vcmUuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgICAgYmxvY2suc3R5bGUubWF4SGVpZ2h0ID0gXCJub25lXCJcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgICAgICBib3R0b21BYnNvbHV0ZShoaXN0b3J5VGltZWxpbmUsIGhpc3RvcnlTdHJpcCwgMTgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib3R0b21BYnNvbHV0ZShoaXN0b3J5VGltZWxpbmUsIGhpc3RvcnlTdHJpcCwgNDApXG4gICAgICB9XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgICAgICAgIGJvdHRvbUFic29sdXRlKGhpc3RvcnlUaW1lbGluZSwgaGlzdG9yeVN0cmlwLCAxOClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib3R0b21BYnNvbHV0ZShoaXN0b3J5VGltZWxpbmUsIGhpc3RvcnlTdHJpcCwgNDApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG5cblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaWNlbnNlc1wiKSkge1xuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGljZW5zZXNfX2ZpbHRlci1pbnB1dFwiKVxuICBjb25zdCBjaGVja2VkQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saWNlbnNlc19fZmlsdGVyLWJ0bi1hbGxcIilcbiAgY29uc3QgY2hlY2tlZFJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saWNlbnNlc19fZmlsdGVyLWJ0bi1yZXNldFwiKVxuICBjb25zdCBtb2RhbCA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1saWNlbnNlLW1vZGFsXCIpKVxuICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGljZW5zZXNfX2l0ZW0taW5jcmVhc2VcIilcbiAgY29uc3QgaXRlbXNPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saWNlbnNlc19fb3BlblwiKVxuXG4gIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbW9kYWwuc2hvdygpXG4gICAgfSlcbiAgfSlcblxuICBpdGVtc09wZW4uZm9yRWFjaChpdGVtID0+IChcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBtb2RhbC5zaG93KClcbiAgICB9KVxuICApKVxuXG4gIGNvbnN0IGFyZUFsbENoZWNrZWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oY2hlY2tib3gpLmV2ZXJ5KGVsZW0gPT4gZWxlbS5jaGVja2VkKVxuICB9XG5cbiAgY29uc3QgYXJlQ2hlY2tlZE9uZSA9ICgpID0+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShjaGVja2JveCkuc29tZShlbGVtID0+IGVsZW0uY2hlY2tlZClcbiAgfVxuXG4gIGNoZWNrZWRBbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGVja2JveC5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jaGVja2VkID0gdHJ1ZSlcbiAgICBjaGVja2VkUmVzZXQuZGlzYWJsZWQgPSBmYWxzZVxuICAgIGNoZWNrZWRBbGwuZGlzYWJsZWQgPSB0cnVlXG4gIH0pXG5cbiAgY2hlY2tlZFJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2hlY2tib3guZm9yRWFjaChlbGVtID0+IGVsZW0uY2hlY2tlZCA9IGZhbHNlKVxuICAgIGNoZWNrZWRSZXNldC5kaXNhYmxlZCA9IHRydWVcbiAgICBjaGVja2VkQWxsLmRpc2FibGVkID0gZmFsc2VcbiAgfSlcblxuICBjaGVja2JveC5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBjaGVja2VkQWxsLmRpc2FibGVkID0gYXJlQWxsQ2hlY2tlZCgpXG4gICAgICBjaGVja2VkUmVzZXQuZGlzYWJsZWQgPSAhYXJlQ2hlY2tlZE9uZSgpXG4gICAgfSlcbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdHNcIikpIHtcbiAgZnVuY3Rpb24gaW5pdE1hcENvbnRhY3RzKCkge1xuICAgIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJjb250YWN0c19fbWFwLXBlbnphXCIsIHtcbiAgICAgIGNlbnRlcjogWzUzLjE4NDQ1MTA3MTIzMzEzNCw0NS4wMDcwMTQ5OTk5OTk5MjRdLFxuICAgICAgem9vbTogMTMsXG4gICAgICBtaW5ab29tOiAxMyxcbiAgICAgIGNvbnRyb2xzOiBbXVxuICAgIH0sIHtcbiAgICAgIG1pblpvb206IDEzLFxuICAgIH0pXG5cblxuICAgIHZhciBwbGFjZW1hcmtEaXYgPSB5bWFwcy50ZW1wbGF0ZUxheW91dEZhY3RvcnkuY3JlYXRlQ2xhc3MoYFxuICA8ZGl2IGNsYXNzPVwicGxhY2VtYXJrLWN1c3RvbVwiPlxuICAgIDxzcGFuIGNsYXNzPVwicGxhY2VtYXJrX19sYXlvdXRcIj5cbiAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBkPVwiTTE1LjY0NSA3LjU0NzQxQzE1LjY0NSA4LjkzMTE3IDE0LjgyODIgMTAuODU0OCAxMy42Mzg2IDEyLjg0OTdDMTIuNTgyOSAxNC42MjAzIDExLjI3ODggMTYuMzc0IDEwLjE0MjcgMTcuNzMxMUM4Ljk0Njk2IDE2LjMxOTcgNy42Mzc1NiAxNC41NTk5IDYuNTk0NTIgMTIuNzk3OEM1LjQyNjU0IDEwLjgyNDYgNC42NDUwMiA4LjkzNDIyIDQuNjQ1MDIgNy41NDc0MUM0LjY0NTAyIDQuNzk2MDEgNy4wNjk4MSAyLjUgMTAuMTQ1IDIuNUMxMy4yMjAyIDIuNSAxNS42NDUgNC43OTYwMSAxNS42NDUgNy41NDc0MVpcIiBmaWxsPVwiIzAwOUE2RFwiIHN0cm9rZT1cIiMwMDlBNkRcIi8+XG4gICAgICAgIDxjaXJjbGUgY3g9XCIxMC4xNDVcIiBjeT1cIjhcIiByPVwiMi41XCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiIzAwOUE2RFwiLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG4gIGApXG5cbiAgICB2YXIgY2lyY2xlUGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTMuMTg0NDUxMDcxMjMzMTM0LDQ1LjAwNzAxNDk5OTk5OTkyNF0se30sIHtcbiAgICAgIGljb25MYXlvdXQ6IHBsYWNlbWFya0RpdixcbiAgICAgIGljb25TaGFwZToge1xuICAgICAgICB0eXBlOiAnQ2lyY2xlJyxcbiAgICAgICAgY29vcmRpbmF0ZXM6IFswLCAwXSxcbiAgICAgICAgcmFkaXVzOiAzMFxuICAgICAgfVxuICAgIH0pXG4gICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQoY2lyY2xlUGxhY2VtYXJrKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3NlYXJjaENvbnRyb2wnKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3RyYWZmaWNDb250cm9sJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0eXBlU2VsZWN0b3InKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ2Z1bGxzY3JlZW5Db250cm9sJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdydWxlckNvbnRyb2wnKTtcbiAgfVxuICBmdW5jdGlvbiBpbml0TWFwQ29udGFjdHNNb3Njb3coKSB7XG4gICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcImNvbnRhY3RzX19tYXAtbW9zY293XCIsIHtcbiAgICAgIGNlbnRlcjogWzU1Ljc4NjkwNTA2ODkzNzUsMzcuNjcxODc1NDk5OTk5OTddLFxuICAgICAgem9vbTogMTMsXG4gICAgICBtaW5ab29tOiAxMyxcbiAgICAgIGNvbnRyb2xzOiBbXVxuICAgIH0sIHtcbiAgICAgIG1pblpvb206IDEzLFxuICAgIH0pXG5cblxuICAgIHZhciBwbGFjZW1hcmtEaXYgPSB5bWFwcy50ZW1wbGF0ZUxheW91dEZhY3RvcnkuY3JlYXRlQ2xhc3MoYFxuICA8ZGl2IGNsYXNzPVwicGxhY2VtYXJrLWN1c3RvbVwiPlxuICAgIDxzcGFuIGNsYXNzPVwicGxhY2VtYXJrX19sYXlvdXRcIj5cbiAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBkPVwiTTE1LjY0NSA3LjU0NzQxQzE1LjY0NSA4LjkzMTE3IDE0LjgyODIgMTAuODU0OCAxMy42Mzg2IDEyLjg0OTdDMTIuNTgyOSAxNC42MjAzIDExLjI3ODggMTYuMzc0IDEwLjE0MjcgMTcuNzMxMUM4Ljk0Njk2IDE2LjMxOTcgNy42Mzc1NiAxNC41NTk5IDYuNTk0NTIgMTIuNzk3OEM1LjQyNjU0IDEwLjgyNDYgNC42NDUwMiA4LjkzNDIyIDQuNjQ1MDIgNy41NDc0MUM0LjY0NTAyIDQuNzk2MDEgNy4wNjk4MSAyLjUgMTAuMTQ1IDIuNUMxMy4yMjAyIDIuNSAxNS42NDUgNC43OTYwMSAxNS42NDUgNy41NDc0MVpcIiBmaWxsPVwiIzAwOUE2RFwiIHN0cm9rZT1cIiMwMDlBNkRcIi8+XG4gICAgICAgIDxjaXJjbGUgY3g9XCIxMC4xNDVcIiBjeT1cIjhcIiByPVwiMi41XCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiIzAwOUE2RFwiLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG4gIGApXG5cbiAgICB2YXIgY2lyY2xlUGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTUuNzg2OTA1MDY4OTM3NSwzNy42NzE4NzU0OTk5OTk5N10se30sIHtcbiAgICAgIGljb25MYXlvdXQ6IHBsYWNlbWFya0RpdixcbiAgICAgIGljb25TaGFwZToge1xuICAgICAgICB0eXBlOiAnQ2lyY2xlJyxcbiAgICAgICAgY29vcmRpbmF0ZXM6IFswLCAwXSxcbiAgICAgICAgcmFkaXVzOiAzMFxuICAgICAgfVxuICAgIH0pXG4gICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQoY2lyY2xlUGxhY2VtYXJrKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3NlYXJjaENvbnRyb2wnKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3RyYWZmaWNDb250cm9sJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0eXBlU2VsZWN0b3InKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ2Z1bGxzY3JlZW5Db250cm9sJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdydWxlckNvbnRyb2wnKTtcbiAgfVxuICB5bWFwcy5yZWFkeShpbml0TWFwQ29udGFjdHMpXG4gIHltYXBzLnJlYWR5KGluaXRNYXBDb250YWN0c01vc2Nvdylcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXZlbnRzXCIpKSB7XG4gIGNvbnN0IGFjY29yZGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZW50c19fYWNjb3JkaW9uLWl0ZW0taGVhZCcpO1xuICBhY2NvcmRpb25JdGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGVsZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1zaG93XCIpID8gYWNjb3JkaW9uTm90QWN0aXZlKGVsZW0pIDogYWNjb3JkaW9uQWN0aXZlKGVsZW0pXG4gICAgICBhY2NvcmRpb25JdGVtcy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgaWYgKGVsLnBhcmVudEVsZW1lbnQgIT09IGVsZW0ucGFyZW50RWxlbWVudCkgYWNjb3JkaW9uTm90QWN0aXZlKGVsKVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiBoZWlnaHRCbG9jayAoYmxvY2ssIGl0ZW1zLCBjb3VudCwgZ2FwKSB7XG4gIGxldCBoZWlnaHQgPSAwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIGhlaWdodCArPSBpdGVtc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbiAgfVxuXG4gIGJsb2NrLnN0eWxlLm1heEhlaWdodCA9IChoZWlnaHQgKyAoZ2FwICogKGNvdW50IC0gMSkpKSArIFwicHhcIjtcbn1cblxuZnVuY3Rpb24gYm90dG9tQWJzb2x1dGUodGltZWxpbmVzLCBibG9jaywgZ2FwKSB7XG5cbiAgaWYgKHRpbWVsaW5lcykge1xuICAgIGNvbnN0IGxhc3RUaW1lbGluZSA9IHRpbWVsaW5lc1t0aW1lbGluZXMubGVuZ3RoIC0gMV0ub2Zmc2V0SGVpZ2h0XG5cbiAgICBibG9jay5zdHlsZS5ib3R0b20gPSBgJHtsYXN0VGltZWxpbmUgLSBnYXB9cHhgXG4gIH1cblxufVxuXG5mdW5jdGlvbiB0YWJBY3RpdmUoYnRuLCBpbmRleCwgYnRucywgZWxlbWVudHMpIHtcbiAgYnRucy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gIGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiKVxuICAgIGVsZW1lbnRzW2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBlbGVtZW50c1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgfSwgMzAwKVxuXG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBhY2NvcmRpb25BY3RpdmUoaXRlbSkge1xuICBpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImlzLXNob3dcIik7XG4gIGxldCBwYW5lbCA9IGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBpZiAoIXBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IHBhbmVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBhY2NvcmRpb25Ob3RBY3RpdmUoaXRlbSkge1xuICBpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImlzLXNob3dcIik7XG4gIGxldCBwYW5lbCA9IGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBpZiAocGFuZWwuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZUZvckhlcm9MZWZ0IChibG9jaykge1xuICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLnNjcm9sbFdpZHRoXG5cbiAgaWYgKHdpbmRvd1dpZHRoID4gY29udGFpbmVyV2lkdGgpIHtcbiAgICBjb25zdCB3aWR0aEZvck1lbnUgPSAod2luZG93V2lkdGggLSBjb250YWluZXJXaWR0aCkgLyAyXG4gICAgYmxvY2suc3R5bGUubWFyZ2luTGVmdCA9IHdpZHRoRm9yTWVudSArICdweCdcbiAgICBjb25zb2xlLmxvZyh3aWR0aEZvck1lbnUpXG4gIH0gZWxzZSB7XG4gICAgYmxvY2suc3R5bGUubWFyZ2luTGVmdCA9ICcwJ1xuICB9XG59XG5cbmZ1bmN0aW9uIGFmdGVySGVyb01vcmUgKGNvdW50LCBidG4sIGl0ZW1zKSB7XG4gIGlmIChpdGVtcy5sZW5ndGggPiBjb3VudCkge1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPiBjb3VudCkge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XG4gICAgICB9KVxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRNYXAoKSB7XG4gIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJqcy1tYXAtcGVuemFcIiwge1xuICAgIGNlbnRlcjogWzUzLjE4NDQ1MTA3MTIzMzEzNCw0NS4wMDcwMTQ5OTk5OTk5MjRdLFxuICAgIHpvb206IDEzLFxuICAgIG1pblpvb206IDEzLFxuICAgIGNvbnRyb2xzOiBbXVxuICB9LCB7XG4gICAgbWluWm9vbTogMTMsXG4gIH0pXG5cblxuICB2YXIgcGxhY2VtYXJrRGl2ID0geW1hcHMudGVtcGxhdGVMYXlvdXRGYWN0b3J5LmNyZWF0ZUNsYXNzKGBcbiAgPGRpdiBjbGFzcz1cInBsYWNlbWFyay1jdXN0b21cIj5cbiAgICA8c3BhbiBjbGFzcz1cInBsYWNlbWFya19fbGF5b3V0XCI+XG4gICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPHBhdGggZD1cIk0xNS42NDUgNy41NDc0MUMxNS42NDUgOC45MzExNyAxNC44MjgyIDEwLjg1NDggMTMuNjM4NiAxMi44NDk3QzEyLjU4MjkgMTQuNjIwMyAxMS4yNzg4IDE2LjM3NCAxMC4xNDI3IDE3LjczMTFDOC45NDY5NiAxNi4zMTk3IDcuNjM3NTYgMTQuNTU5OSA2LjU5NDUyIDEyLjc5NzhDNS40MjY1NCAxMC44MjQ2IDQuNjQ1MDIgOC45MzQyMiA0LjY0NTAyIDcuNTQ3NDFDNC42NDUwMiA0Ljc5NjAxIDcuMDY5ODEgMi41IDEwLjE0NSAyLjVDMTMuMjIwMiAyLjUgMTUuNjQ1IDQuNzk2MDEgMTUuNjQ1IDcuNTQ3NDFaXCIgZmlsbD1cIiMwMDlBNkRcIiBzdHJva2U9XCIjMDA5QTZEXCIvPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTAuMTQ1XCIgY3k9XCI4XCIgcj1cIjIuNVwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIiMwMDlBNkRcIi8+XG4gICAgICA8L3N2Zz5cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuICBgKVxuXG4gIHZhciBjaXJjbGVQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1My4xODQ0NTEwNzEyMzMxMzQsNDUuMDA3MDE0OTk5OTk5OTI0XSx7fSwge1xuICAgIGljb25MYXlvdXQ6IHBsYWNlbWFya0RpdixcbiAgICBpY29uU2hhcGU6IHtcbiAgICAgIHR5cGU6ICdDaXJjbGUnLFxuICAgICAgY29vcmRpbmF0ZXM6IFswLCAwXSxcbiAgICAgIHJhZGl1czogMzBcbiAgICB9XG4gIH0pXG4gIG15TWFwLmdlb09iamVjdHMuYWRkKGNpcmNsZVBsYWNlbWFyayk7XG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpO1xuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3RyYWZmaWNDb250cm9sJyk7XG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHlwZVNlbGVjdG9yJyk7XG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnZnVsbHNjcmVlbkNvbnRyb2wnKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdydWxlckNvbnRyb2wnKTtcbn1cblxueW1hcHMucmVhZHkoaW5pdE1hcClcblxuZnVuY3Rpb24gaW5pdE1hcE1vc2NvdygpIHtcbiAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcImpzLW1hcC1tb3Njb3dcIiwge1xuICAgIGNlbnRlcjogWzU1Ljc4NjkwNTA2ODkzNzUsMzcuNjcxODc1NDk5OTk5OTddLFxuICAgIHpvb206IDEzLFxuICAgIG1pblpvb206IDEzLFxuICAgIGNvbnRyb2xzOiBbXVxuICB9LCB7XG4gICAgbWluWm9vbTogMTMsXG4gIH0pXG5cblxuICB2YXIgcGxhY2VtYXJrRGl2ID0geW1hcHMudGVtcGxhdGVMYXlvdXRGYWN0b3J5LmNyZWF0ZUNsYXNzKGBcbiAgPGRpdiBjbGFzcz1cInBsYWNlbWFyay1jdXN0b21cIj5cbiAgICA8c3BhbiBjbGFzcz1cInBsYWNlbWFya19fbGF5b3V0XCI+XG4gICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPHBhdGggZD1cIk0xNS42NDUgNy41NDc0MUMxNS42NDUgOC45MzExNyAxNC44MjgyIDEwLjg1NDggMTMuNjM4NiAxMi44NDk3QzEyLjU4MjkgMTQuNjIwMyAxMS4yNzg4IDE2LjM3NCAxMC4xNDI3IDE3LjczMTFDOC45NDY5NiAxNi4zMTk3IDcuNjM3NTYgMTQuNTU5OSA2LjU5NDUyIDEyLjc5NzhDNS40MjY1NCAxMC44MjQ2IDQuNjQ1MDIgOC45MzQyMiA0LjY0NTAyIDcuNTQ3NDFDNC42NDUwMiA0Ljc5NjAxIDcuMDY5ODEgMi41IDEwLjE0NSAyLjVDMTMuMjIwMiAyLjUgMTUuNjQ1IDQuNzk2MDEgMTUuNjQ1IDcuNTQ3NDFaXCIgZmlsbD1cIiMwMDlBNkRcIiBzdHJva2U9XCIjMDA5QTZEXCIvPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTAuMTQ1XCIgY3k9XCI4XCIgcj1cIjIuNVwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIiMwMDlBNkRcIi8+XG4gICAgICA8L3N2Zz5cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuICBgKVxuXG4gIHZhciBjaXJjbGVQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS43ODY5MDUwNjg5Mzc1LDM3LjY3MTg3NTQ5OTk5OTk3XSx7fSwge1xuICAgIGljb25MYXlvdXQ6IHBsYWNlbWFya0RpdixcbiAgICBpY29uU2hhcGU6IHtcbiAgICAgIHR5cGU6ICdDaXJjbGUnLFxuICAgICAgY29vcmRpbmF0ZXM6IFswLCAwXSxcbiAgICAgIHJhZGl1czogMzBcbiAgICB9XG4gIH0pXG4gIG15TWFwLmdlb09iamVjdHMuYWRkKGNpcmNsZVBsYWNlbWFyayk7XG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpO1xuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3RyYWZmaWNDb250cm9sJyk7XG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHlwZVNlbGVjdG9yJyk7XG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnZnVsbHNjcmVlbkNvbnRyb2wnKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdydWxlckNvbnRyb2wnKTtcbn1cblxueW1hcHMucmVhZHkoaW5pdE1hcE1vc2NvdykiXX0=
