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

btnUp.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

if (document.getElementById("index")) {
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
    }
  });
  var items = document.querySelectorAll(".after-hero__box");
  var btn = document.querySelector(".after-hero__btn");
  console.log(window.innerWidth);

  if (window.innerWidth < 768) {
    afterHeroMore(3, btn, items);
  } else if (window.innerWidth < 991) {
    afterHeroMore(5, btn, items);
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth < 768) {
      if (!btn.classList.contains("d-none")) {
        afterHeroMore(3, btn, items);
      }
    } else if (window.innerWidth < 991) {
      if (!btn.classList.contains("d-none")) {
        afterHeroMore(5, btn, items);
      }
    } else {
      items.forEach(function (item) {
        return item.classList.remove("d-none");
      });
    }
  });
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
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1110: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
}

if (document.getElementById("work")) {
  var tabButtons = Array.from(document.querySelectorAll(".work__tab-head-btn"));
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

  if (document.querySelectorAll(".qp__swiper")) {
    document.querySelectorAll(".qp__swiper").forEach(function (elem) {
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

  if (window.innerWidth < 768) {}
}

if (document.getElementById("licenses")) {
  var checkbox = document.querySelectorAll(".licenses__filter-input");
  var checkedAll = document.querySelector(".licenses__filter-btn-all");
  var checkedReset = document.querySelector(".licenses__filter-btn-reset");

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
    return el.parentElement.classList.remove("active");
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
  btn.parentElement.classList.add("active");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYnVyZ2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImNvbnRhaW5lciIsImhlYWRlckFjY29yZGlvbkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImhlYWRlciIsImJ0blVwIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNvbnRhaW5lcldpZHRoIiwic2Nyb2xsV2lkdGgiLCJ3aWR0aEZvck1lbnUiLCJzdHlsZSIsIndpZHRoIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZm9yRWFjaCIsImVsZW0iLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbnMiLCJhY2NvcmRpb25Ob3RBY3RpdmUiLCJhY2NvcmRpb25BY3RpdmUiLCJlbCIsImUiLCJ0YXJnZXQiLCJyZW1vdmUiLCJzY3JvbGxQb3NpdGlvbiIsInNjcm9sbFkiLCJhZGQiLCJpbm5lckhlaWdodCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJnZXRFbGVtZW50QnlJZCIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwicGFnaW5hdGlvbiIsImNsaWNrYWJsZSIsIml0ZW1zIiwiYnRuIiwiY29uc29sZSIsImxvZyIsImFmdGVySGVyb01vcmUiLCJpdGVtIiwic3dpcGVyMiIsImJyZWFrcG9pbnRzIiwidGFiQnV0dG9ucyIsIkFycmF5IiwiZnJvbSIsImVsZW1lbnRzIiwiYWNjb3JkaW9uSXRlbXMiLCJmb3JtIiwibXlNb2RhbE9rIiwiYm9vdHN0cmFwIiwiTW9kYWwiLCJ0YWJBY3RpdmUiLCJpbmRleCIsInN3aXBlckxpdmUiLCJwcmV2ZW50RGVmYXVsdCIsInNob3ciLCJtb2RhbCIsImJ0bnMiLCJteU1vZGFsIiwiaGlkZSIsInN3aXBlclFQIiwibGVuZ3RoIiwiYmxvY2siLCJoaXN0b3J5U3RyaXAiLCJoaXN0b3J5VGltZWxpbmUiLCJtb3JlIiwiYnRuTW9yZSIsIm1heEhlaWdodCIsImJvdHRvbUFic29sdXRlIiwiaGVpZ2h0QmxvY2tGb3JXaW5kb3ciLCJoZWlnaHRCbG9jayIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGVja2JveCIsImNoZWNrZWRBbGwiLCJjaGVja2VkUmVzZXQiLCJhcmVBbGxDaGVja2VkIiwiZXZlcnkiLCJjaGVja2VkIiwiYXJlQ2hlY2tlZE9uZSIsInNvbWUiLCJkaXNhYmxlZCIsImluaXRNYXBDb250YWN0cyIsIm15TWFwIiwieW1hcHMiLCJNYXAiLCJjZW50ZXIiLCJ6b29tIiwibWluWm9vbSIsImNvbnRyb2xzIiwicGxhY2VtYXJrRGl2IiwidGVtcGxhdGVMYXlvdXRGYWN0b3J5IiwiY3JlYXRlQ2xhc3MiLCJjaXJjbGVQbGFjZW1hcmsiLCJQbGFjZW1hcmsiLCJpY29uTGF5b3V0IiwiaWNvblNoYXBlIiwidHlwZSIsImNvb3JkaW5hdGVzIiwicmFkaXVzIiwiZ2VvT2JqZWN0cyIsImluaXRNYXBDb250YWN0c01vc2NvdyIsInJlYWR5IiwiY291bnQiLCJnYXAiLCJoZWlnaHQiLCJpIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGltZWxpbmVzIiwibGFzdFRpbWVsaW5lIiwib2Zmc2V0SGVpZ2h0IiwiYm90dG9tIiwic2V0VGltZW91dCIsImRpc3BsYXkiLCJwYW5lbCIsIm5leHRFbGVtZW50U2libGluZyIsInNjcm9sbEhlaWdodCIsInJlc2l6ZUZvckhlcm9MZWZ0IiwibWFyZ2luTGVmdCIsImluaXRNYXAiLCJpbml0TWFwTW9zY293Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWY7QUFDQSxJQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFiO0FBQ0EsSUFBTUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWxCO0FB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LENBQUMsQ0FBRCxFQUFJLENBQUosQ0FGSjtNQUdUQyxNQUFNLEVBQUU7SUFIQztFQUZzRSxDQUE3RCxDQUF0QjtFQVFBaEIsS0FBSyxDQUFDaUIsVUFBTixDQUFpQi9FLEdBQWpCLENBQXFCd0UsZUFBckI7RUFDQVYsS0FBSyxDQUFDTSxRQUFOLENBQWV2RSxNQUFmLENBQXNCLGVBQXRCO0VBQ0FpRSxLQUFLLENBQUNNLFFBQU4sQ0FBZXZFLE1BQWYsQ0FBc0IsZ0JBQXRCO0VBQ0FpRSxLQUFLLENBQUNNLFFBQU4sQ0FBZXZFLE1BQWYsQ0FBc0IsY0FBdEI7RUFDQWlFLEtBQUssQ0FBQ00sUUFBTixDQUFldkUsTUFBZixDQUFzQixtQkFBdEI7RUFDQWlFLEtBQUssQ0FBQ00sUUFBTixDQUFldkUsTUFBZixDQUFzQixjQUF0QjtBQUNEOztBQUVEa0UsS0FBSyxDQUFDa0IsS0FBTixDQUFZa0IsYUFBWiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2J0blwiKVxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51XCIpXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1c3RvbS1jb250YWluZXJcIik7XG5jb25zdCBoZWFkZXJBY2NvcmRpb25JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtYWNjb3JkaW9uLWhlYWRlclwiKVxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG5jb25zdCBidG5VcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tdXAnKTtcblxuYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgY29uc3QgY29udGFpbmVyV2lkdGggPSBjb250YWluZXIuc2Nyb2xsV2lkdGg7XG5cbiAgaWYgKHdpbmRvd1dpZHRoID4gY29udGFpbmVyV2lkdGgpIHtcblxuICAgIGNvbnN0IHdpZHRoRm9yTWVudSA9ICh3aW5kb3dXaWR0aCAtIGNvbnRhaW5lcldpZHRoKSAvIDJcbiAgICBtZW51LnN0eWxlLndpZHRoID0gNzI1ICsgd2lkdGhGb3JNZW51ICsgJ3B4JztcbiAgfSBlbHNlIHtcbiAgICBtZW51LnN0eWxlLndpZHRoID0gJyc7XG4gIH1cblxuICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG59KVxuXG5oZWFkZXJBY2NvcmRpb25JdGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZWxlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImlzLXNob3dcIikgPyBhY2NvcmRpb25Ob3RBY3RpdmUoZWxlbSkgOiBhY2NvcmRpb25BY3RpdmUoZWxlbSlcbiAgICBoZWFkZXJBY2NvcmRpb25JdGVtcy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGlmIChlbC5wYXJlbnRFbGVtZW50ICE9PSBlbGVtLnBhcmVudEVsZW1lbnQpIGFjY29yZGlvbk5vdEFjdGl2ZShlbClcbiAgICB9KVxuICB9KVxufSlcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoIW1lbnUuY29udGFpbnMoZS50YXJnZXQpICYmICFidXJnZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgbWVudS5zdHlsZS53aWR0aCA9ICcnO1xuICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9XG59KVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFlcblxuICBpZiAoc2Nyb2xsUG9zaXRpb24gPj0gMTAwKSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gIH0gZWxzZSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gIH1cbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gIGlmICh3aW5kb3cuc2Nyb2xsWSA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgIGJ0blVwLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpXG4gIH0gZWxzZSB7XG4gICAgYnRuVXAuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJylcbiAgfVxufSlcblxuaWYgKHdpbmRvdy5zY3JvbGxZID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gIGJ0blVwLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpXG59IGVsc2Uge1xuICBidG5VcC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKVxufVxuXG5idG5VcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgd2luZG93LnNjcm9sbFRvKHtcbiAgICB0b3A6IDAsXG4gICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gIH0pXG59KVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmRleFwiKSkge1xuICBuZXcgU3dpcGVyKFwiLmhlcm9fX2xlZnQtc3dpcGVyXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IFwiLmhlcm9fX2xlZnQtc3dpcGVyLW5leHRcIixcbiAgICAgIHByZXZFbDogXCIuaGVyb19fbGVmdC1zd2lwZXItcHJldlwiXG4gICAgfSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogXCIuaGVyb19fbGVmdC1zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgfSlcblxuICBuZXcgU3dpcGVyKFwiLmhlcm9fX3JpZ2h0LXN3aXBlclwiLCB7XG4gICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLmhlcm9fX3JpZ2h0LXN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICB9KVxuXG4gIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hZnRlci1oZXJvX19ib3hcIilcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZnRlci1oZXJvX19idG5cIilcbiAgY29uc29sZS5sb2cod2luZG93LmlubmVyV2lkdGgpXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgIGFmdGVySGVyb01vcmUoMywgYnRuLCBpdGVtcylcbiAgfSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MSkge1xuICAgIGFmdGVySGVyb01vcmUoNSwgYnRuLCBpdGVtcylcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcbiAgICAgIGlmICghYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImQtbm9uZVwiKSkge1xuICAgICAgICBhZnRlckhlcm9Nb3JlKDMsIGJ0biwgaXRlbXMpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MSkge1xuICAgICAgaWYgKCFidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZC1ub25lXCIpKSB7XG4gICAgICAgIGFmdGVySGVyb01vcmUoNSwgYnRuLCBpdGVtcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKSlcblxuICAgIH1cbiAgfSlcblxuICBsZXQgc3dpcGVyMiA9IG5ldyBTd2lwZXIoXCIuY3VzdG9tZXJzX19zd2lwZXJcIiwge1xuICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogXCIuY3VzdG9tZXJzX19wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIuY3VzdG9tZXJzX19zd2lwZXItbmV4dFwiLFxuICAgICAgcHJldkVsOiBcIi5jdXN0b21lcnNfX3N3aXBlci1wcmV2XCJcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA1Njc6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgIH0sXG4gICAgICA5OTI6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgIH0sXG4gICAgICAxMTEwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrXCIpKSB7XG4gIGNvbnN0IHRhYkJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29ya19fdGFiLWhlYWQtYnRuXCIpKTtcbiAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29ya19fdGFiLWl0ZW1cIikpO1xuICBjb25zdCBhY2NvcmRpb25JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52YWNhbmNpZXNfX2FjY29yZGlvbi1pdGVtLWhlYWQnKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRlcm5zaGlwX19mb3JtLWpzJylcbiAgY29uc3QgbXlNb2RhbE9rID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1vZGFsLW9rXCIpKTtcbiAgdGFiQWN0aXZlKHRhYkJ1dHRvbnNbMF0sIDAsIHRhYkJ1dHRvbnMsIGVsZW1lbnRzKVxuXG4gIHRhYkJ1dHRvbnMuZm9yRWFjaCgoYnRuLCBpbmRleCkgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge3RhYkFjdGl2ZShidG4sIGluZGV4LHRhYkJ1dHRvbnMsIGVsZW1lbnRzKX0pXG4gIH0pXG5cbiAgYWNjb3JkaW9uSXRlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBlbGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtc2hvd1wiKSA/IGFjY29yZGlvbk5vdEFjdGl2ZShlbGVtKSA6IGFjY29yZGlvbkFjdGl2ZShlbGVtKVxuICAgICAgYWNjb3JkaW9uSXRlbXMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGlmIChlbC5wYXJlbnRFbGVtZW50ICE9PSBlbGVtLnBhcmVudEVsZW1lbnQpIGFjY29yZGlvbk5vdEFjdGl2ZShlbClcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcblxuICBsZXQgc3dpcGVyTGl2ZSA9IG5ldyBTd2lwZXIoXCIubGl2ZV9fc3dpcGVyXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLmxpdmVfX3BhZ2luYXRpb25cIixcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiBcIi5saXZlX19zd2lwZXItbmV4dFwiLFxuICAgICAgcHJldkVsOiBcIi5saXZlX19zd2lwZXItcHJldlwiXG4gICAgfSxcbiAgfSlcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG15TW9kYWxPay5zaG93KCk7XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInFwXCIpKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1zdWJtaXQtbW9kYWxcIik7XG4gIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnFwX19idXR0b25cIik7XG4gIGNvbnN0IG15TW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKG1vZGFsKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXBfX21vZGFsLWZvcm1cIilcbiAgY29uc3QgbXlNb2RhbE9rID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1vZGFsLW9rXCIpKTtcblxuICBidG5zLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG15TW9kYWwuc2hvdygpO1xuICAgIH0pXG4gIH0pXG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG15TW9kYWwuaGlkZSgpO1xuICAgIG15TW9kYWxPay5zaG93KCk7XG4gIH0pXG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXBfX3N3aXBlclwiKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXBfX3N3aXBlclwiKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgbGV0IHN3aXBlclFQID0gbmV3IFN3aXBlcihcIi5xcF9fc3dpcGVyXCIsIHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIGVsOiBcIi5xcF9fcGFnaW5hdGlvblwiLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgbmV4dEVsOiBcIi5xcF9fc3dpcGVyLW5leHRcIixcbiAgICAgICAgICBwcmV2RWw6IFwiLnFwX19zd2lwZXItcHJldlwiXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucXBfX3N3aXBlci1zbGlkZScpICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5xcF9fc3dpcGVyLXNsaWRlJykubGVuZ3RoIDwgMikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXBfX3N3aXBlci1uYXZpZ2F0aW9uXCIpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpXG4gICAgfSlcbiAgfVxuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpc3RvcnlcIikpIHtcbiAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpc3RvcnlfX2Jsb2NrXCIpO1xuICBjb25zdCBoaXN0b3J5U3RyaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpc3RvcnlfX3N0cmlwXCIpXG4gIGNvbnN0IGhpc3RvcnlUaW1lbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGlzdG9yeV9fdGltZWxpbmVcIilcbiAgY29uc3QgbW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlzdG9yeV9fbW9yZVwiKVxuICBjb25zdCBidG5Nb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaXN0b3J5X19tb3JlLWJ0blwiKVxuXG4gIGlmIChoaXN0b3J5VGltZWxpbmUubGVuZ3RoIDwgNSkge1xuICAgIG1vcmUuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgIGJsb2NrLnN0eWxlLm1heEhlaWdodCA9IFwibm9uZVwiXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XG4gICAgICBib3R0b21BYnNvbHV0ZShoaXN0b3J5VGltZWxpbmUsIGhpc3RvcnlTdHJpcCwgMTgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJvdHRvbUFic29sdXRlKGhpc3RvcnlUaW1lbGluZSwgaGlzdG9yeVN0cmlwLCA0MClcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcbiAgICAgICAgYm90dG9tQWJzb2x1dGUoaGlzdG9yeVRpbWVsaW5lLCBoaXN0b3J5U3RyaXAsIDE4KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm90dG9tQWJzb2x1dGUoaGlzdG9yeVRpbWVsaW5lLCBoaXN0b3J5U3RyaXAsIDQwKVxuICAgICAgfVxuICAgIH0pXG5cbiAgfSBlbHNlIHtcbiAgICBmdW5jdGlvbiBoZWlnaHRCbG9ja0ZvcldpbmRvdyAoKSB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcbiAgICAgICAgaGVpZ2h0QmxvY2soYmxvY2ssIGhpc3RvcnlUaW1lbGluZSwgNCwgNTgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWlnaHRCbG9jayhibG9jaywgaGlzdG9yeVRpbWVsaW5lLCA0LCA4MClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoZWlnaHRCbG9ja0ZvcldpbmRvdygpXG5cbiAgICBtb3JlLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiBoZWlnaHRCbG9ja0ZvcldpbmRvdylcblxuICAgIGJ0bk1vcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IGhlaWdodEJsb2NrRm9yV2luZG93KVxuICAgICAgbW9yZS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG4gICAgICBibG9jay5zdHlsZS5tYXhIZWlnaHQgPSBcIm5vbmVcIlxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XG4gICAgICAgIGJvdHRvbUFic29sdXRlKGhpc3RvcnlUaW1lbGluZSwgaGlzdG9yeVN0cmlwLCAxOClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvdHRvbUFic29sdXRlKGhpc3RvcnlUaW1lbGluZSwgaGlzdG9yeVN0cmlwLCA0MClcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XG4gICAgICAgICAgYm90dG9tQWJzb2x1dGUoaGlzdG9yeVRpbWVsaW5lLCBoaXN0b3J5U3RyaXAsIDE4KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJvdHRvbUFic29sdXRlKGhpc3RvcnlUaW1lbGluZSwgaGlzdG9yeVN0cmlwLCA0MClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XG5cbiAgfVxuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpY2Vuc2VzXCIpKSB7XG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saWNlbnNlc19fZmlsdGVyLWlucHV0XCIpXG4gIGNvbnN0IGNoZWNrZWRBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpY2Vuc2VzX19maWx0ZXItYnRuLWFsbFwiKVxuICBjb25zdCBjaGVja2VkUmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpY2Vuc2VzX19maWx0ZXItYnRuLXJlc2V0XCIpXG5cbiAgY29uc3QgYXJlQWxsQ2hlY2tlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShjaGVja2JveCkuZXZlcnkoZWxlbSA9PiBlbGVtLmNoZWNrZWQpXG4gIH1cblxuICBjb25zdCBhcmVDaGVja2VkT25lID0gKCkgPT4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGNoZWNrYm94KS5zb21lKGVsZW0gPT4gZWxlbS5jaGVja2VkKVxuICB9XG5cbiAgY2hlY2tlZEFsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNoZWNrYm94LmZvckVhY2goZWxlbSA9PiBlbGVtLmNoZWNrZWQgPSB0cnVlKVxuICAgIGNoZWNrZWRSZXNldC5kaXNhYmxlZCA9IGZhbHNlXG4gICAgY2hlY2tlZEFsbC5kaXNhYmxlZCA9IHRydWVcbiAgfSlcblxuICBjaGVja2VkUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGVja2JveC5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jaGVja2VkID0gZmFsc2UpXG4gICAgY2hlY2tlZFJlc2V0LmRpc2FibGVkID0gdHJ1ZVxuICAgIGNoZWNrZWRBbGwuZGlzYWJsZWQgPSBmYWxzZVxuICB9KVxuXG4gIGNoZWNrYm94LmZvckVhY2goZWxlbSA9PiB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGNoZWNrZWRBbGwuZGlzYWJsZWQgPSBhcmVBbGxDaGVja2VkKClcbiAgICAgIGNoZWNrZWRSZXNldC5kaXNhYmxlZCA9ICFhcmVDaGVja2VkT25lKClcbiAgICB9KVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0c1wiKSkge1xuICBmdW5jdGlvbiBpbml0TWFwQ29udGFjdHMoKSB7XG4gICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcImNvbnRhY3RzX19tYXAtcGVuemFcIiwge1xuICAgICAgY2VudGVyOiBbNTMuMTg0NDUxMDcxMjMzMTM0LDQ1LjAwNzAxNDk5OTk5OTkyNF0sXG4gICAgICB6b29tOiAxMyxcbiAgICAgIG1pblpvb206IDEzLFxuICAgICAgY29udHJvbHM6IFtdXG4gICAgfSwge1xuICAgICAgbWluWm9vbTogMTMsXG4gICAgfSlcblxuXG4gICAgdmFyIHBsYWNlbWFya0RpdiA9IHltYXBzLnRlbXBsYXRlTGF5b3V0RmFjdG9yeS5jcmVhdGVDbGFzcyhgXG4gIDxkaXYgY2xhc3M9XCJwbGFjZW1hcmstY3VzdG9tXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJwbGFjZW1hcmtfX2xheW91dFwiPlxuICAgICAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTUuNjQ1IDcuNTQ3NDFDMTUuNjQ1IDguOTMxMTcgMTQuODI4MiAxMC44NTQ4IDEzLjYzODYgMTIuODQ5N0MxMi41ODI5IDE0LjYyMDMgMTEuMjc4OCAxNi4zNzQgMTAuMTQyNyAxNy43MzExQzguOTQ2OTYgMTYuMzE5NyA3LjYzNzU2IDE0LjU1OTkgNi41OTQ1MiAxMi43OTc4QzUuNDI2NTQgMTAuODI0NiA0LjY0NTAyIDguOTM0MjIgNC42NDUwMiA3LjU0NzQxQzQuNjQ1MDIgNC43OTYwMSA3LjA2OTgxIDIuNSAxMC4xNDUgMi41QzEzLjIyMDIgMi41IDE1LjY0NSA0Ljc5NjAxIDE1LjY0NSA3LjU0NzQxWlwiIGZpbGw9XCIjMDA5QTZEXCIgc3Ryb2tlPVwiIzAwOUE2RFwiLz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjEwLjE0NVwiIGN5PVwiOFwiIHI9XCIyLjVcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCIjMDA5QTZEXCIvPlxuICAgICAgPC9zdmc+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbiAgYClcblxuICAgIHZhciBjaXJjbGVQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1My4xODQ0NTEwNzEyMzMxMzQsNDUuMDA3MDE0OTk5OTk5OTI0XSx7fSwge1xuICAgICAgaWNvbkxheW91dDogcGxhY2VtYXJrRGl2LFxuICAgICAgaWNvblNoYXBlOiB7XG4gICAgICAgIHR5cGU6ICdDaXJjbGUnLFxuICAgICAgICBjb29yZGluYXRlczogWzAsIDBdLFxuICAgICAgICByYWRpdXM6IDMwXG4gICAgICB9XG4gICAgfSlcbiAgICBteU1hcC5nZW9PYmplY3RzLmFkZChjaXJjbGVQbGFjZW1hcmspO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHJhZmZpY0NvbnRyb2wnKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3R5cGVTZWxlY3RvcicpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnZnVsbHNjcmVlbkNvbnRyb2wnKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xuICB9XG4gIGZ1bmN0aW9uIGluaXRNYXBDb250YWN0c01vc2NvdygpIHtcbiAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwiY29udGFjdHNfX21hcC1tb3Njb3dcIiwge1xuICAgICAgY2VudGVyOiBbNTUuNzg2OTA1MDY4OTM3NSwzNy42NzE4NzU0OTk5OTk5N10sXG4gICAgICB6b29tOiAxMyxcbiAgICAgIG1pblpvb206IDEzLFxuICAgICAgY29udHJvbHM6IFtdXG4gICAgfSwge1xuICAgICAgbWluWm9vbTogMTMsXG4gICAgfSlcblxuXG4gICAgdmFyIHBsYWNlbWFya0RpdiA9IHltYXBzLnRlbXBsYXRlTGF5b3V0RmFjdG9yeS5jcmVhdGVDbGFzcyhgXG4gIDxkaXYgY2xhc3M9XCJwbGFjZW1hcmstY3VzdG9tXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJwbGFjZW1hcmtfX2xheW91dFwiPlxuICAgICAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTUuNjQ1IDcuNTQ3NDFDMTUuNjQ1IDguOTMxMTcgMTQuODI4MiAxMC44NTQ4IDEzLjYzODYgMTIuODQ5N0MxMi41ODI5IDE0LjYyMDMgMTEuMjc4OCAxNi4zNzQgMTAuMTQyNyAxNy43MzExQzguOTQ2OTYgMTYuMzE5NyA3LjYzNzU2IDE0LjU1OTkgNi41OTQ1MiAxMi43OTc4QzUuNDI2NTQgMTAuODI0NiA0LjY0NTAyIDguOTM0MjIgNC42NDUwMiA3LjU0NzQxQzQuNjQ1MDIgNC43OTYwMSA3LjA2OTgxIDIuNSAxMC4xNDUgMi41QzEzLjIyMDIgMi41IDE1LjY0NSA0Ljc5NjAxIDE1LjY0NSA3LjU0NzQxWlwiIGZpbGw9XCIjMDA5QTZEXCIgc3Ryb2tlPVwiIzAwOUE2RFwiLz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjEwLjE0NVwiIGN5PVwiOFwiIHI9XCIyLjVcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCIjMDA5QTZEXCIvPlxuICAgICAgPC9zdmc+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbiAgYClcblxuICAgIHZhciBjaXJjbGVQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS43ODY5MDUwNjg5Mzc1LDM3LjY3MTg3NTQ5OTk5OTk3XSx7fSwge1xuICAgICAgaWNvbkxheW91dDogcGxhY2VtYXJrRGl2LFxuICAgICAgaWNvblNoYXBlOiB7XG4gICAgICAgIHR5cGU6ICdDaXJjbGUnLFxuICAgICAgICBjb29yZGluYXRlczogWzAsIDBdLFxuICAgICAgICByYWRpdXM6IDMwXG4gICAgICB9XG4gICAgfSlcbiAgICBteU1hcC5nZW9PYmplY3RzLmFkZChjaXJjbGVQbGFjZW1hcmspO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHJhZmZpY0NvbnRyb2wnKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3R5cGVTZWxlY3RvcicpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnZnVsbHNjcmVlbkNvbnRyb2wnKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xuICB9XG4gIHltYXBzLnJlYWR5KGluaXRNYXBDb250YWN0cylcbiAgeW1hcHMucmVhZHkoaW5pdE1hcENvbnRhY3RzTW9zY293KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJldmVudHNcIikpIHtcbiAgY29uc3QgYWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlbnRzX19hY2NvcmRpb24taXRlbS1oZWFkJyk7XG4gIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZWxlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImlzLXNob3dcIikgPyBhY2NvcmRpb25Ob3RBY3RpdmUoZWxlbSkgOiBhY2NvcmRpb25BY3RpdmUoZWxlbSlcbiAgICAgIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBpZiAoZWwucGFyZW50RWxlbWVudCAhPT0gZWxlbS5wYXJlbnRFbGVtZW50KSBhY2NvcmRpb25Ob3RBY3RpdmUoZWwpXG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGhlaWdodEJsb2NrIChibG9jaywgaXRlbXMsIGNvdW50LCBnYXApIHtcbiAgbGV0IGhlaWdodCA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgaGVpZ2h0ICs9IGl0ZW1zW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICB9XG5cbiAgYmxvY2suc3R5bGUubWF4SGVpZ2h0ID0gKGhlaWdodCArIChnYXAgKiAoY291bnQgLSAxKSkpICsgXCJweFwiO1xufVxuXG5mdW5jdGlvbiBib3R0b21BYnNvbHV0ZSh0aW1lbGluZXMsIGJsb2NrLCBnYXApIHtcblxuICBpZiAodGltZWxpbmVzKSB7XG4gICAgY29uc3QgbGFzdFRpbWVsaW5lID0gdGltZWxpbmVzW3RpbWVsaW5lcy5sZW5ndGggLSAxXS5vZmZzZXRIZWlnaHRcblxuICAgIGJsb2NrLnN0eWxlLmJvdHRvbSA9IGAke2xhc3RUaW1lbGluZSAtIGdhcH1weGBcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHRhYkFjdGl2ZShidG4sIGluZGV4LCBidG5zLCBlbGVtZW50cykge1xuICBidG5zLmZvckVhY2goKGVsKSA9PiBlbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIilcbiAgICBlbGVtZW50c1tpbmRleF0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZWxlbWVudHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gIH0sIDMwMClcblxuICBidG4ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBhY2NvcmRpb25BY3RpdmUoaXRlbSkge1xuICBpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImlzLXNob3dcIik7XG4gIGxldCBwYW5lbCA9IGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBpZiAoIXBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IHBhbmVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBhY2NvcmRpb25Ob3RBY3RpdmUoaXRlbSkge1xuICBpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImlzLXNob3dcIik7XG4gIGxldCBwYW5lbCA9IGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBpZiAocGFuZWwuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZUZvckhlcm9MZWZ0IChibG9jaykge1xuICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLnNjcm9sbFdpZHRoXG5cbiAgaWYgKHdpbmRvd1dpZHRoID4gY29udGFpbmVyV2lkdGgpIHtcbiAgICBjb25zdCB3aWR0aEZvck1lbnUgPSAod2luZG93V2lkdGggLSBjb250YWluZXJXaWR0aCkgLyAyXG4gICAgYmxvY2suc3R5bGUubWFyZ2luTGVmdCA9IHdpZHRoRm9yTWVudSArICdweCdcbiAgICBjb25zb2xlLmxvZyh3aWR0aEZvck1lbnUpXG4gIH0gZWxzZSB7XG4gICAgYmxvY2suc3R5bGUubWFyZ2luTGVmdCA9ICcwJ1xuICB9XG59XG5cbmZ1bmN0aW9uIGFmdGVySGVyb01vcmUgKGNvdW50LCBidG4sIGl0ZW1zKSB7XG4gIGlmIChpdGVtcy5sZW5ndGggPiBjb3VudCkge1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPiBjb3VudCkge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XG4gICAgICB9KVxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRNYXAoKSB7XG4gIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJqcy1tYXAtcGVuemFcIiwge1xuICAgIGNlbnRlcjogWzUzLjE4NDQ1MTA3MTIzMzEzNCw0NS4wMDcwMTQ5OTk5OTk5MjRdLFxuICAgIHpvb206IDEzLFxuICAgIG1pblpvb206IDEzLFxuICAgIGNvbnRyb2xzOiBbXVxuICB9LCB7XG4gICAgbWluWm9vbTogMTMsXG4gIH0pXG5cblxuICB2YXIgcGxhY2VtYXJrRGl2ID0geW1hcHMudGVtcGxhdGVMYXlvdXRGYWN0b3J5LmNyZWF0ZUNsYXNzKGBcbiAgPGRpdiBjbGFzcz1cInBsYWNlbWFyay1jdXN0b21cIj5cbiAgICA8c3BhbiBjbGFzcz1cInBsYWNlbWFya19fbGF5b3V0XCI+XG4gICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPHBhdGggZD1cIk0xNS42NDUgNy41NDc0MUMxNS42NDUgOC45MzExNyAxNC44MjgyIDEwLjg1NDggMTMuNjM4NiAxMi44NDk3QzEyLjU4MjkgMTQuNjIwMyAxMS4yNzg4IDE2LjM3NCAxMC4xNDI3IDE3LjczMTFDOC45NDY5NiAxNi4zMTk3IDcuNjM3NTYgMTQuNTU5OSA2LjU5NDUyIDEyLjc5NzhDNS40MjY1NCAxMC44MjQ2IDQuNjQ1MDIgOC45MzQyMiA0LjY0NTAyIDcuNTQ3NDFDNC42NDUwMiA0Ljc5NjAxIDcuMDY5ODEgMi41IDEwLjE0NSAyLjVDMTMuMjIwMiAyLjUgMTUuNjQ1IDQuNzk2MDEgMTUuNjQ1IDcuNTQ3NDFaXCIgZmlsbD1cIiMwMDlBNkRcIiBzdHJva2U9XCIjMDA5QTZEXCIvPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTAuMTQ1XCIgY3k9XCI4XCIgcj1cIjIuNVwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIiMwMDlBNkRcIi8+XG4gICAgICA8L3N2Zz5cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuICBgKVxuXG4gIHZhciBjaXJjbGVQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1My4xODQ0NTEwNzEyMzMxMzQsNDUuMDA3MDE0OTk5OTk5OTI0XSx7fSwge1xuICAgIGljb25MYXlvdXQ6IHBsYWNlbWFya0RpdixcbiAgICBpY29uU2hhcGU6IHtcbiAgICAgIHR5cGU6ICdDaXJjbGUnLFxuICAgICAgY29vcmRpbmF0ZXM6IFswLCAwXSxcbiAgICAgIHJhZGl1czogMzBcbiAgICB9XG4gIH0pXG4gIG15TWFwLmdlb09iamVjdHMuYWRkKGNpcmNsZVBsYWNlbWFyayk7XG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpO1xuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3RyYWZmaWNDb250cm9sJyk7XG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHlwZVNlbGVjdG9yJyk7XG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnZnVsbHNjcmVlbkNvbnRyb2wnKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdydWxlckNvbnRyb2wnKTtcbn1cblxueW1hcHMucmVhZHkoaW5pdE1hcClcblxuZnVuY3Rpb24gaW5pdE1hcE1vc2NvdygpIHtcbiAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcImpzLW1hcC1tb3Njb3dcIiwge1xuICAgIGNlbnRlcjogWzU1Ljc4NjkwNTA2ODkzNzUsMzcuNjcxODc1NDk5OTk5OTddLFxuICAgIHpvb206IDEzLFxuICAgIG1pblpvb206IDEzLFxuICAgIGNvbnRyb2xzOiBbXVxuICB9LCB7XG4gICAgbWluWm9vbTogMTMsXG4gIH0pXG5cblxuICB2YXIgcGxhY2VtYXJrRGl2ID0geW1hcHMudGVtcGxhdGVMYXlvdXRGYWN0b3J5LmNyZWF0ZUNsYXNzKGBcbiAgPGRpdiBjbGFzcz1cInBsYWNlbWFyay1jdXN0b21cIj5cbiAgICA8c3BhbiBjbGFzcz1cInBsYWNlbWFya19fbGF5b3V0XCI+XG4gICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPHBhdGggZD1cIk0xNS42NDUgNy41NDc0MUMxNS42NDUgOC45MzExNyAxNC44MjgyIDEwLjg1NDggMTMuNjM4NiAxMi44NDk3QzEyLjU4MjkgMTQuNjIwMyAxMS4yNzg4IDE2LjM3NCAxMC4xNDI3IDE3LjczMTFDOC45NDY5NiAxNi4zMTk3IDcuNjM3NTYgMTQuNTU5OSA2LjU5NDUyIDEyLjc5NzhDNS40MjY1NCAxMC44MjQ2IDQuNjQ1MDIgOC45MzQyMiA0LjY0NTAyIDcuNTQ3NDFDNC42NDUwMiA0Ljc5NjAxIDcuMDY5ODEgMi41IDEwLjE0NSAyLjVDMTMuMjIwMiAyLjUgMTUuNjQ1IDQuNzk2MDEgMTUuNjQ1IDcuNTQ3NDFaXCIgZmlsbD1cIiMwMDlBNkRcIiBzdHJva2U9XCIjMDA5QTZEXCIvPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTAuMTQ1XCIgY3k9XCI4XCIgcj1cIjIuNVwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIiMwMDlBNkRcIi8+XG4gICAgICA8L3N2Zz5cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuICBgKVxuXG4gIHZhciBjaXJjbGVQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS43ODY5MDUwNjg5Mzc1LDM3LjY3MTg3NTQ5OTk5OTk3XSx7fSwge1xuICAgIGljb25MYXlvdXQ6IHBsYWNlbWFya0RpdixcbiAgICBpY29uU2hhcGU6IHtcbiAgICAgIHR5cGU6ICdDaXJjbGUnLFxuICAgICAgY29vcmRpbmF0ZXM6IFswLCAwXSxcbiAgICAgIHJhZGl1czogMzBcbiAgICB9XG4gIH0pXG4gIG15TWFwLmdlb09iamVjdHMuYWRkKGNpcmNsZVBsYWNlbWFyayk7XG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpO1xuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3RyYWZmaWNDb250cm9sJyk7XG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHlwZVNlbGVjdG9yJyk7XG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnZnVsbHNjcmVlbkNvbnRyb2wnKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdydWxlckNvbnRyb2wnKTtcbn1cblxueW1hcHMucmVhZHkoaW5pdE1hcE1vc2NvdykiXX0=
