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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYnVyZ2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImNvbnRhaW5lciIsImhlYWRlckFjY29yZGlvbkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImhlYWRlciIsImJ0blVwIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNvbnRhaW5lcldpZHRoIiwic2Nyb2xsV2lkdGgiLCJ3aWR0aEZvck1lbnUiLCJzdHlsZSIsIndpZHRoIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZm9yRWFjaCIsImVsZW0iLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbnMiLCJhY2NvcmRpb25Ob3RBY3RpdmUiLCJhY2NvcmRpb25BY3RpdmUiLCJlbCIsImUiLCJ0YXJnZXQiLCJyZW1vdmUiLCJzY3JvbGxQb3NpdGlvbiIsInNjcm9sbFkiLCJhZGQiLCJpbm5lckhlaWdodCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJnZXRFbGVtZW50QnlJZCIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwicGFnaW5hdGlvbiIsImNsaWNrYWJsZSIsIml0ZW1zIiwiYnRuIiwiY29uc29sZSIsImxvZyIsImFmdGVySGVyb01vcmUiLCJpdGVtIiwic3dpcGVyMiIsImJyZWFrcG9pbnRzIiwidGFiQnV0dG9ucyIsIkFycmF5IiwiZnJvbSIsImVsZW1lbnRzIiwiYWNjb3JkaW9uSXRlbXMiLCJmb3JtIiwibXlNb2RhbE9rIiwiYm9vdHN0cmFwIiwiTW9kYWwiLCJ0YWJBY3RpdmUiLCJpbmRleCIsInN3aXBlckxpdmUiLCJwcmV2ZW50RGVmYXVsdCIsInNob3ciLCJtb2RhbCIsImJ0bnMiLCJteU1vZGFsIiwiaGlkZSIsInN3aXBlclFQIiwibGVuZ3RoIiwiYmxvY2siLCJoaXN0b3J5U3RyaXAiLCJoaXN0b3J5VGltZWxpbmUiLCJtb3JlIiwiYnRuTW9yZSIsIm1heEhlaWdodCIsImJvdHRvbUFic29sdXRlIiwiaGVpZ2h0QmxvY2tGb3JXaW5kb3ciLCJoZWlnaHRCbG9jayIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGVja2JveCIsImNoZWNrZWRBbGwiLCJjaGVja2VkUmVzZXQiLCJhcmVBbGxDaGVja2VkIiwiZXZlcnkiLCJjaGVja2VkIiwiYXJlQ2hlY2tlZE9uZSIsInNvbWUiLCJkaXNhYmxlZCIsImluaXRNYXBDb250YWN0cyIsIm15TWFwIiwieW1hcHMiLCJNYXAiLCJjZW50ZXIiLCJ6b29tIiwibWluWm9vbSIsImNvbnRyb2xzIiwicGxhY2VtYXJrRGl2IiwidGVtcGxhdGVMYXlvdXRGYWN0b3J5IiwiY3JlYXRlQ2xhc3MiLCJjaXJjbGVQbGFjZW1hcmsiLCJQbGFjZW1hcmsiLCJpY29uTGF5b3V0IiwiaWNvblNoYXBlIiwidHlwZSIsImNvb3JkaW5hdGVzIiwicmFkaXVzIiwiZ2VvT2JqZWN0cyIsImluaXRNYXBDb250YWN0c01vc2NvdyIsInJlYWR5IiwiY291bnQiLCJnYXAiLCJoZWlnaHQiLCJpIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGltZWxpbmVzIiwibGFzdFRpbWVsaW5lIiwib2Zmc2V0SGVpZ2h0IiwiYm90dG9tIiwic2V0VGltZW91dCIsImRpc3BsYXkiLCJwYW5lbCIsIm5leHRFbGVtZW50U2libGluZyIsInNjcm9sbEhlaWdodCIsInJlc2l6ZUZvckhlcm9MZWZ0IiwibWFyZ2luTGVmdCIsImluaXRNYXAiLCJpbml0TWFwTW9zY293Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWY7QUFDQSxJQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFiO0FBQ0EsSUFBTUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWxCO0FB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TyxFQUFFO0VBRFIsQ0FMUyxDQUFaO0VBVUEsSUFBSUUsWUFBWSxHQUFHTixLQUFLLENBQUNPLHFCQUFOLENBQTRCQyxXQUE1QiwycEJBQW5CO0VBV0EsSUFBSUMsZUFBZSxHQUFHLElBQUlULEtBQUssQ0FBQ1UsU0FBVixDQUFvQixDQUFDLGdCQUFELEVBQWtCLGlCQUFsQixDQUFwQixFQUF5RCxFQUF6RCxFQUE2RDtJQUNqRkMsVUFBVSxFQUFFTCxZQURxRTtJQUVqRk0sU0FBUyxFQUFFO01BQ1RDLElBQUksRUFBRSxRQURHO01BRVRDLFdBQVcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBRko7TUFHVEMsTUFBTSxFQUFFO0lBSEM7RUFGc0UsQ0FBN0QsQ0FBdEI7RUFRQWhCLEtBQUssQ0FBQ2lCLFVBQU4sQ0FBaUIvRSxHQUFqQixDQUFxQndFLGVBQXJCO0VBQ0FWLEtBQUssQ0FBQ00sUUFBTixDQUFldkUsTUFBZixDQUFzQixlQUF0QjtFQUNBaUUsS0FBSyxDQUFDTSxRQUFOLENBQWV2RSxNQUFmLENBQXNCLGdCQUF0QjtFQUNBaUUsS0FBSyxDQUFDTSxRQUFOLENBQWV2RSxNQUFmLENBQXNCLGNBQXRCO0VBQ0FpRSxLQUFLLENBQUNNLFFBQU4sQ0FBZXZFLE1BQWYsQ0FBc0IsbUJBQXRCO0VBQ0FpRSxLQUFLLENBQUNNLFFBQU4sQ0FBZXZFLE1BQWYsQ0FBc0IsY0FBdEI7QUFDRDs7QUFFRGtFLEtBQUssQ0FBQ2tCLEtBQU4sQ0FBWWtCLGFBQVoiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19idG5cIilcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudVwiKVxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXN0b20tY29udGFpbmVyXCIpO1xuY29uc3QgaGVhZGVyQWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWFjY29yZGlvbi1oZWFkZXJcIilcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xuY29uc3QgYnRuVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXVwJyk7XG5cbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLnNjcm9sbFdpZHRoO1xuXG4gIGlmICh3aW5kb3dXaWR0aCA+IGNvbnRhaW5lcldpZHRoKSB7XG5cbiAgICBjb25zdCB3aWR0aEZvck1lbnUgPSAod2luZG93V2lkdGggLSBjb250YWluZXJXaWR0aCkgLyAyXG4gICAgbWVudS5zdHlsZS53aWR0aCA9IDcyNSArIHdpZHRoRm9yTWVudSArICdweCc7XG4gIH0gZWxzZSB7XG4gICAgbWVudS5zdHlsZS53aWR0aCA9ICcnO1xuICB9XG5cbiAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xufSlcblxuaGVhZGVyQWNjb3JkaW9uSXRlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGVsZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1zaG93XCIpID8gYWNjb3JkaW9uTm90QWN0aXZlKGVsZW0pIDogYWNjb3JkaW9uQWN0aXZlKGVsZW0pXG4gICAgaGVhZGVyQWNjb3JkaW9uSXRlbXMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBpZiAoZWwucGFyZW50RWxlbWVudCAhPT0gZWxlbS5wYXJlbnRFbGVtZW50KSBhY2NvcmRpb25Ob3RBY3RpdmUoZWwpXG4gICAgfSlcbiAgfSlcbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKCFtZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnVyZ2VyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgIG1lbnUuc3R5bGUud2lkdGggPSAnJztcbiAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfVxufSlcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZXG5cbiAgaWYgKHNjcm9sbFBvc2l0aW9uID49IDEwMCkge1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICB9IGVsc2Uge1xuICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICB9XG59KVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICBpZiAod2luZG93LnNjcm9sbFkgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICBidG5VcC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKVxuICB9IGVsc2Uge1xuICAgIGJ0blVwLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpXG4gIH1cbn0pXG5cbmlmICh3aW5kb3cuc2Nyb2xsWSA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICBidG5VcC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKVxufSBlbHNlIHtcbiAgYnRuVXAuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJylcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY3ICYmIG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICB9XG59KVxuXG5idG5VcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgd2luZG93LnNjcm9sbFRvKHtcbiAgICB0b3A6IDAsXG4gICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gIH0pXG59KVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmRleFwiKSkge1xuICBuZXcgU3dpcGVyKFwiLmhlcm9fX2xlZnQtc3dpcGVyXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IFwiLmhlcm9fX2xlZnQtc3dpcGVyLW5leHRcIixcbiAgICAgIHByZXZFbDogXCIuaGVyb19fbGVmdC1zd2lwZXItcHJldlwiXG4gICAgfSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogXCIuaGVyb19fbGVmdC1zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgfSlcblxuICBuZXcgU3dpcGVyKFwiLmhlcm9fX3JpZ2h0LXN3aXBlclwiLCB7XG4gICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLmhlcm9fX3JpZ2h0LXN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICB9KVxuXG4gIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hZnRlci1oZXJvX19ib3hcIilcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZnRlci1oZXJvX19idG5cIilcbiAgY29uc29sZS5sb2cod2luZG93LmlubmVyV2lkdGgpXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDgyNykge1xuICAgIGFmdGVySGVyb01vcmUoMywgYnRuLCBpdGVtcylcbiAgfSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDExNDApIHtcbiAgICBhZnRlckhlcm9Nb3JlKDUsIGJ0biwgaXRlbXMpXG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgODI3KSB7XG4gICAgICBpZiAoIWJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJkLW5vbmVcIikpIHtcbiAgICAgICAgYWZ0ZXJIZXJvTW9yZSgzLCBidG4sIGl0ZW1zKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMTQwKSB7XG4gICAgICBpZiAoIWJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJkLW5vbmVcIikpIHtcbiAgICAgICAgYWZ0ZXJIZXJvTW9yZSg1LCBidG4sIGl0ZW1zKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpKVxuXG4gICAgfVxuICB9KVxuXG4gIGxldCBzd2lwZXIyID0gbmV3IFN3aXBlcihcIi5jdXN0b21lcnNfX3N3aXBlclwiLCB7XG4gICAgc2xpZGVzUGVyVmlldzogMixcbiAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiBcIi5jdXN0b21lcnNfX3BhZ2luYXRpb25cIixcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiBcIi5jdXN0b21lcnNfX3N3aXBlci1uZXh0XCIsXG4gICAgICBwcmV2RWw6IFwiLmN1c3RvbWVyc19fc3dpcGVyLXByZXZcIlxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDU2Nzoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgICAgfSxcbiAgICAgIDk5Mjoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgICAgfSxcbiAgICAgIDExMTA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtcIikpIHtcbiAgY29uc3QgdGFiQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53b3JrX190YWItaGVhZC1idG5cIikpO1xuICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53b3JrX190YWItaXRlbVwiKSk7XG4gIGNvbnN0IGFjY29yZGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZhY2FuY2llc19fYWNjb3JkaW9uLWl0ZW0taGVhZCcpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludGVybnNoaXBfX2Zvcm0tanMnKVxuICBjb25zdCBteU1vZGFsT2sgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtbW9kYWwtb2tcIikpO1xuICB0YWJBY3RpdmUodGFiQnV0dG9uc1swXSwgMCwgdGFiQnV0dG9ucywgZWxlbWVudHMpXG5cbiAgdGFiQnV0dG9ucy5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7dGFiQWN0aXZlKGJ0biwgaW5kZXgsdGFiQnV0dG9ucywgZWxlbWVudHMpfSlcbiAgfSlcblxuICBhY2NvcmRpb25JdGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGVsZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1zaG93XCIpID8gYWNjb3JkaW9uTm90QWN0aXZlKGVsZW0pIDogYWNjb3JkaW9uQWN0aXZlKGVsZW0pXG4gICAgICBhY2NvcmRpb25JdGVtcy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgaWYgKGVsLnBhcmVudEVsZW1lbnQgIT09IGVsZW0ucGFyZW50RWxlbWVudCkgYWNjb3JkaW9uTm90QWN0aXZlKGVsKVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG4gIGxldCBzd2lwZXJMaXZlID0gbmV3IFN3aXBlcihcIi5saXZlX19zd2lwZXJcIiwge1xuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogXCIubGl2ZV9fcGFnaW5hdGlvblwiLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IFwiLmxpdmVfX3N3aXBlci1uZXh0XCIsXG4gICAgICBwcmV2RWw6IFwiLmxpdmVfX3N3aXBlci1wcmV2XCJcbiAgICB9LFxuICB9KVxuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbXlNb2RhbE9rLnNob3coKTtcbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXBcIikpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXN1Ym1pdC1tb2RhbFwiKTtcbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXBfX2J1dHRvblwiKTtcbiAgY29uc3QgbXlNb2RhbCA9IG5ldyBib290c3RyYXAuTW9kYWwobW9kYWwpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xcF9fbW9kYWwtZm9ybVwiKVxuICBjb25zdCBteU1vZGFsT2sgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtbW9kYWwtb2tcIikpO1xuXG4gIGJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbXlNb2RhbC5zaG93KCk7XG4gICAgfSlcbiAgfSlcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbXlNb2RhbC5oaWRlKCk7XG4gICAgbXlNb2RhbE9rLnNob3coKTtcbiAgfSlcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xcF9fc3dpcGVyXCIpKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xcF9fc3dpcGVyXCIpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBsZXQgc3dpcGVyUVAgPSBuZXcgU3dpcGVyKFwiLnFwX19zd2lwZXJcIiwge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgZWw6IFwiLnFwX19wYWdpbmF0aW9uXCIsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICBuZXh0RWw6IFwiLnFwX19zd2lwZXItbmV4dFwiLFxuICAgICAgICAgIHByZXZFbDogXCIucXBfX3N3aXBlci1wcmV2XCJcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5xcF9fc3dpcGVyLXNsaWRlJykgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnFwX19zd2lwZXItc2xpZGUnKS5sZW5ndGggPCAyKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xcF9fc3dpcGVyLW5hdmlnYXRpb25cIikuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnZC1ub25lJylcbiAgICB9KVxuICB9XG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlzdG9yeVwiKSkge1xuICBjb25zdCBibG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlzdG9yeV9fYmxvY2tcIik7XG4gIGNvbnN0IGhpc3RvcnlTdHJpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlzdG9yeV9fc3RyaXBcIilcbiAgY29uc3QgaGlzdG9yeVRpbWVsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oaXN0b3J5X190aW1lbGluZVwiKVxuICBjb25zdCBtb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaXN0b3J5X19tb3JlXCIpXG4gIGNvbnN0IGJ0bk1vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpc3RvcnlfX21vcmUtYnRuXCIpXG5cbiAgaWYgKGhpc3RvcnlUaW1lbGluZS5sZW5ndGggPCA1KSB7XG4gICAgbW9yZS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG4gICAgYmxvY2suc3R5bGUubWF4SGVpZ2h0ID0gXCJub25lXCJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcbiAgICAgIGJvdHRvbUFic29sdXRlKGhpc3RvcnlUaW1lbGluZSwgaGlzdG9yeVN0cmlwLCAxOClcbiAgICB9IGVsc2Uge1xuICAgICAgYm90dG9tQWJzb2x1dGUoaGlzdG9yeVRpbWVsaW5lLCBoaXN0b3J5U3RyaXAsIDQwKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgICAgICBib3R0b21BYnNvbHV0ZShoaXN0b3J5VGltZWxpbmUsIGhpc3RvcnlTdHJpcCwgMTgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib3R0b21BYnNvbHV0ZShoaXN0b3J5VGltZWxpbmUsIGhpc3RvcnlTdHJpcCwgNDApXG4gICAgICB9XG4gICAgfSlcblxuICB9IGVsc2Uge1xuICAgIGZ1bmN0aW9uIGhlaWdodEJsb2NrRm9yV2luZG93ICgpIHtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgICAgICBoZWlnaHRCbG9jayhibG9jaywgaGlzdG9yeVRpbWVsaW5lLCA0LCA1OClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlaWdodEJsb2NrKGJsb2NrLCBoaXN0b3J5VGltZWxpbmUsIDQsIDgwKVxuICAgICAgfVxuICAgIH1cblxuICAgIGhlaWdodEJsb2NrRm9yV2luZG93KClcblxuICAgIG1vcmUuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IGhlaWdodEJsb2NrRm9yV2luZG93KVxuXG4gICAgYnRuTW9yZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4gaGVpZ2h0QmxvY2tGb3JXaW5kb3cpXG4gICAgICBtb3JlLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICAgIGJsb2NrLnN0eWxlLm1heEhlaWdodCA9IFwibm9uZVwiXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcbiAgICAgICAgYm90dG9tQWJzb2x1dGUoaGlzdG9yeVRpbWVsaW5lLCBoaXN0b3J5U3RyaXAsIDE4KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm90dG9tQWJzb2x1dGUoaGlzdG9yeVRpbWVsaW5lLCBoaXN0b3J5U3RyaXAsIDQwKVxuICAgICAgfVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcbiAgICAgICAgICBib3R0b21BYnNvbHV0ZShoaXN0b3J5VGltZWxpbmUsIGhpc3RvcnlTdHJpcCwgMTgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYm90dG9tQWJzb2x1dGUoaGlzdG9yeVRpbWVsaW5lLCBoaXN0b3J5U3RyaXAsIDQwKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcblxuICB9XG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGljZW5zZXNcIikpIHtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpY2Vuc2VzX19maWx0ZXItaW5wdXRcIilcbiAgY29uc3QgY2hlY2tlZEFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGljZW5zZXNfX2ZpbHRlci1idG4tYWxsXCIpXG4gIGNvbnN0IGNoZWNrZWRSZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGljZW5zZXNfX2ZpbHRlci1idG4tcmVzZXRcIilcblxuICBjb25zdCBhcmVBbGxDaGVja2VkID0gKCkgPT4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGNoZWNrYm94KS5ldmVyeShlbGVtID0+IGVsZW0uY2hlY2tlZClcbiAgfVxuXG4gIGNvbnN0IGFyZUNoZWNrZWRPbmUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oY2hlY2tib3gpLnNvbWUoZWxlbSA9PiBlbGVtLmNoZWNrZWQpXG4gIH1cblxuICBjaGVja2VkQWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2hlY2tib3guZm9yRWFjaChlbGVtID0+IGVsZW0uY2hlY2tlZCA9IHRydWUpXG4gICAgY2hlY2tlZFJlc2V0LmRpc2FibGVkID0gZmFsc2VcbiAgICBjaGVja2VkQWxsLmRpc2FibGVkID0gdHJ1ZVxuICB9KVxuXG4gIGNoZWNrZWRSZXNldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNoZWNrYm94LmZvckVhY2goZWxlbSA9PiBlbGVtLmNoZWNrZWQgPSBmYWxzZSlcbiAgICBjaGVja2VkUmVzZXQuZGlzYWJsZWQgPSB0cnVlXG4gICAgY2hlY2tlZEFsbC5kaXNhYmxlZCA9IGZhbHNlXG4gIH0pXG5cbiAgY2hlY2tib3guZm9yRWFjaChlbGVtID0+IHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgY2hlY2tlZEFsbC5kaXNhYmxlZCA9IGFyZUFsbENoZWNrZWQoKVxuICAgICAgY2hlY2tlZFJlc2V0LmRpc2FibGVkID0gIWFyZUNoZWNrZWRPbmUoKVxuICAgIH0pXG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RzXCIpKSB7XG4gIGZ1bmN0aW9uIGluaXRNYXBDb250YWN0cygpIHtcbiAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwiY29udGFjdHNfX21hcC1wZW56YVwiLCB7XG4gICAgICBjZW50ZXI6IFs1My4xODQ0NTEwNzEyMzMxMzQsNDUuMDA3MDE0OTk5OTk5OTI0XSxcbiAgICAgIHpvb206IDEzLFxuICAgICAgbWluWm9vbTogMTMsXG4gICAgICBjb250cm9sczogW11cbiAgICB9LCB7XG4gICAgICBtaW5ab29tOiAxMyxcbiAgICB9KVxuXG5cbiAgICB2YXIgcGxhY2VtYXJrRGl2ID0geW1hcHMudGVtcGxhdGVMYXlvdXRGYWN0b3J5LmNyZWF0ZUNsYXNzKGBcbiAgPGRpdiBjbGFzcz1cInBsYWNlbWFyay1jdXN0b21cIj5cbiAgICA8c3BhbiBjbGFzcz1cInBsYWNlbWFya19fbGF5b3V0XCI+XG4gICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPHBhdGggZD1cIk0xNS42NDUgNy41NDc0MUMxNS42NDUgOC45MzExNyAxNC44MjgyIDEwLjg1NDggMTMuNjM4NiAxMi44NDk3QzEyLjU4MjkgMTQuNjIwMyAxMS4yNzg4IDE2LjM3NCAxMC4xNDI3IDE3LjczMTFDOC45NDY5NiAxNi4zMTk3IDcuNjM3NTYgMTQuNTU5OSA2LjU5NDUyIDEyLjc5NzhDNS40MjY1NCAxMC44MjQ2IDQuNjQ1MDIgOC45MzQyMiA0LjY0NTAyIDcuNTQ3NDFDNC42NDUwMiA0Ljc5NjAxIDcuMDY5ODEgMi41IDEwLjE0NSAyLjVDMTMuMjIwMiAyLjUgMTUuNjQ1IDQuNzk2MDEgMTUuNjQ1IDcuNTQ3NDFaXCIgZmlsbD1cIiMwMDlBNkRcIiBzdHJva2U9XCIjMDA5QTZEXCIvPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTAuMTQ1XCIgY3k9XCI4XCIgcj1cIjIuNVwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIiMwMDlBNkRcIi8+XG4gICAgICA8L3N2Zz5cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuICBgKVxuXG4gICAgdmFyIGNpcmNsZVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzUzLjE4NDQ1MTA3MTIzMzEzNCw0NS4wMDcwMTQ5OTk5OTk5MjRdLHt9LCB7XG4gICAgICBpY29uTGF5b3V0OiBwbGFjZW1hcmtEaXYsXG4gICAgICBpY29uU2hhcGU6IHtcbiAgICAgICAgdHlwZTogJ0NpcmNsZScsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBbMCwgMF0sXG4gICAgICAgIHJhZGl1czogMzBcbiAgICAgIH1cbiAgICB9KVxuICAgIG15TWFwLmdlb09iamVjdHMuYWRkKGNpcmNsZVBsYWNlbWFyayk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdzZWFyY2hDb250cm9sJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0cmFmZmljQ29udHJvbCcpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHlwZVNlbGVjdG9yJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdmdWxsc2NyZWVuQ29udHJvbCcpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgncnVsZXJDb250cm9sJyk7XG4gIH1cbiAgZnVuY3Rpb24gaW5pdE1hcENvbnRhY3RzTW9zY293KCkge1xuICAgIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJjb250YWN0c19fbWFwLW1vc2Nvd1wiLCB7XG4gICAgICBjZW50ZXI6IFs1NS43ODY5MDUwNjg5Mzc1LDM3LjY3MTg3NTQ5OTk5OTk3XSxcbiAgICAgIHpvb206IDEzLFxuICAgICAgbWluWm9vbTogMTMsXG4gICAgICBjb250cm9sczogW11cbiAgICB9LCB7XG4gICAgICBtaW5ab29tOiAxMyxcbiAgICB9KVxuXG5cbiAgICB2YXIgcGxhY2VtYXJrRGl2ID0geW1hcHMudGVtcGxhdGVMYXlvdXRGYWN0b3J5LmNyZWF0ZUNsYXNzKGBcbiAgPGRpdiBjbGFzcz1cInBsYWNlbWFyay1jdXN0b21cIj5cbiAgICA8c3BhbiBjbGFzcz1cInBsYWNlbWFya19fbGF5b3V0XCI+XG4gICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPHBhdGggZD1cIk0xNS42NDUgNy41NDc0MUMxNS42NDUgOC45MzExNyAxNC44MjgyIDEwLjg1NDggMTMuNjM4NiAxMi44NDk3QzEyLjU4MjkgMTQuNjIwMyAxMS4yNzg4IDE2LjM3NCAxMC4xNDI3IDE3LjczMTFDOC45NDY5NiAxNi4zMTk3IDcuNjM3NTYgMTQuNTU5OSA2LjU5NDUyIDEyLjc5NzhDNS40MjY1NCAxMC44MjQ2IDQuNjQ1MDIgOC45MzQyMiA0LjY0NTAyIDcuNTQ3NDFDNC42NDUwMiA0Ljc5NjAxIDcuMDY5ODEgMi41IDEwLjE0NSAyLjVDMTMuMjIwMiAyLjUgMTUuNjQ1IDQuNzk2MDEgMTUuNjQ1IDcuNTQ3NDFaXCIgZmlsbD1cIiMwMDlBNkRcIiBzdHJva2U9XCIjMDA5QTZEXCIvPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTAuMTQ1XCIgY3k9XCI4XCIgcj1cIjIuNVwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIiMwMDlBNkRcIi8+XG4gICAgICA8L3N2Zz5cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuICBgKVxuXG4gICAgdmFyIGNpcmNsZVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1Ljc4NjkwNTA2ODkzNzUsMzcuNjcxODc1NDk5OTk5OTddLHt9LCB7XG4gICAgICBpY29uTGF5b3V0OiBwbGFjZW1hcmtEaXYsXG4gICAgICBpY29uU2hhcGU6IHtcbiAgICAgICAgdHlwZTogJ0NpcmNsZScsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBbMCwgMF0sXG4gICAgICAgIHJhZGl1czogMzBcbiAgICAgIH1cbiAgICB9KVxuICAgIG15TWFwLmdlb09iamVjdHMuYWRkKGNpcmNsZVBsYWNlbWFyayk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdzZWFyY2hDb250cm9sJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0cmFmZmljQ29udHJvbCcpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHlwZVNlbGVjdG9yJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdmdWxsc2NyZWVuQ29udHJvbCcpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgncnVsZXJDb250cm9sJyk7XG4gIH1cbiAgeW1hcHMucmVhZHkoaW5pdE1hcENvbnRhY3RzKVxuICB5bWFwcy5yZWFkeShpbml0TWFwQ29udGFjdHNNb3Njb3cpXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV2ZW50c1wiKSkge1xuICBjb25zdCBhY2NvcmRpb25JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldmVudHNfX2FjY29yZGlvbi1pdGVtLWhlYWQnKTtcbiAgYWNjb3JkaW9uSXRlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBlbGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtc2hvd1wiKSA/IGFjY29yZGlvbk5vdEFjdGl2ZShlbGVtKSA6IGFjY29yZGlvbkFjdGl2ZShlbGVtKVxuICAgICAgYWNjb3JkaW9uSXRlbXMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGlmIChlbC5wYXJlbnRFbGVtZW50ICE9PSBlbGVtLnBhcmVudEVsZW1lbnQpIGFjY29yZGlvbk5vdEFjdGl2ZShlbClcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gaGVpZ2h0QmxvY2sgKGJsb2NrLCBpdGVtcywgY291bnQsIGdhcCkge1xuICBsZXQgaGVpZ2h0ID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICBoZWlnaHQgKz0gaXRlbXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gIH1cblxuICBibG9jay5zdHlsZS5tYXhIZWlnaHQgPSAoaGVpZ2h0ICsgKGdhcCAqIChjb3VudCAtIDEpKSkgKyBcInB4XCI7XG59XG5cbmZ1bmN0aW9uIGJvdHRvbUFic29sdXRlKHRpbWVsaW5lcywgYmxvY2ssIGdhcCkge1xuXG4gIGlmICh0aW1lbGluZXMpIHtcbiAgICBjb25zdCBsYXN0VGltZWxpbmUgPSB0aW1lbGluZXNbdGltZWxpbmVzLmxlbmd0aCAtIDFdLm9mZnNldEhlaWdodFxuXG4gICAgYmxvY2suc3R5bGUuYm90dG9tID0gYCR7bGFzdFRpbWVsaW5lIC0gZ2FwfXB4YFxuICB9XG5cbn1cblxuZnVuY3Rpb24gdGFiQWN0aXZlKGJ0biwgaW5kZXgsIGJ0bnMsIGVsZW1lbnRzKSB7XG4gIGJ0bnMuZm9yRWFjaCgoZWwpID0+IGVsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gIGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiKVxuICAgIGVsZW1lbnRzW2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBlbGVtZW50c1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgfSwgMzAwKVxuXG4gIGJ0bi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIGFjY29yZGlvbkFjdGl2ZShpdGVtKSB7XG4gIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaXMtc2hvd1wiKTtcbiAgbGV0IHBhbmVsID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGlmICghcGFuZWwuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFjY29yZGlvbk5vdEFjdGl2ZShpdGVtKSB7XG4gIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtc2hvd1wiKTtcbiAgbGV0IHBhbmVsID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzaXplRm9ySGVyb0xlZnQgKGJsb2NrKSB7XG4gIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgY29uc3QgY29udGFpbmVyV2lkdGggPSBjb250YWluZXIuc2Nyb2xsV2lkdGhcblxuICBpZiAod2luZG93V2lkdGggPiBjb250YWluZXJXaWR0aCkge1xuICAgIGNvbnN0IHdpZHRoRm9yTWVudSA9ICh3aW5kb3dXaWR0aCAtIGNvbnRhaW5lcldpZHRoKSAvIDJcbiAgICBibG9jay5zdHlsZS5tYXJnaW5MZWZ0ID0gd2lkdGhGb3JNZW51ICsgJ3B4J1xuICAgIGNvbnNvbGUubG9nKHdpZHRoRm9yTWVudSlcbiAgfSBlbHNlIHtcbiAgICBibG9jay5zdHlsZS5tYXJnaW5MZWZ0ID0gJzAnXG4gIH1cbn1cblxuZnVuY3Rpb24gYWZ0ZXJIZXJvTW9yZSAoY291bnQsIGJ0biwgaXRlbXMpIHtcbiAgaWYgKGl0ZW1zLmxlbmd0aCA+IGNvdW50KSB7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA+IGNvdW50KSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcbiAgICAgIH0pXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcbiAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcImpzLW1hcC1wZW56YVwiLCB7XG4gICAgY2VudGVyOiBbNTMuMTg0NDUxMDcxMjMzMTM0LDQ1LjAwNzAxNDk5OTk5OTkyNF0sXG4gICAgem9vbTogMTMsXG4gICAgbWluWm9vbTogMTMsXG4gICAgY29udHJvbHM6IFtdXG4gIH0sIHtcbiAgICBtaW5ab29tOiAxMyxcbiAgfSlcblxuXG4gIHZhciBwbGFjZW1hcmtEaXYgPSB5bWFwcy50ZW1wbGF0ZUxheW91dEZhY3RvcnkuY3JlYXRlQ2xhc3MoYFxuICA8ZGl2IGNsYXNzPVwicGxhY2VtYXJrLWN1c3RvbVwiPlxuICAgIDxzcGFuIGNsYXNzPVwicGxhY2VtYXJrX19sYXlvdXRcIj5cbiAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBkPVwiTTE1LjY0NSA3LjU0NzQxQzE1LjY0NSA4LjkzMTE3IDE0LjgyODIgMTAuODU0OCAxMy42Mzg2IDEyLjg0OTdDMTIuNTgyOSAxNC42MjAzIDExLjI3ODggMTYuMzc0IDEwLjE0MjcgMTcuNzMxMUM4Ljk0Njk2IDE2LjMxOTcgNy42Mzc1NiAxNC41NTk5IDYuNTk0NTIgMTIuNzk3OEM1LjQyNjU0IDEwLjgyNDYgNC42NDUwMiA4LjkzNDIyIDQuNjQ1MDIgNy41NDc0MUM0LjY0NTAyIDQuNzk2MDEgNy4wNjk4MSAyLjUgMTAuMTQ1IDIuNUMxMy4yMjAyIDIuNSAxNS42NDUgNC43OTYwMSAxNS42NDUgNy41NDc0MVpcIiBmaWxsPVwiIzAwOUE2RFwiIHN0cm9rZT1cIiMwMDlBNkRcIi8+XG4gICAgICAgIDxjaXJjbGUgY3g9XCIxMC4xNDVcIiBjeT1cIjhcIiByPVwiMi41XCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiIzAwOUE2RFwiLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG4gIGApXG5cbiAgdmFyIGNpcmNsZVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzUzLjE4NDQ1MTA3MTIzMzEzNCw0NS4wMDcwMTQ5OTk5OTk5MjRdLHt9LCB7XG4gICAgaWNvbkxheW91dDogcGxhY2VtYXJrRGl2LFxuICAgIGljb25TaGFwZToge1xuICAgICAgdHlwZTogJ0NpcmNsZScsXG4gICAgICBjb29yZGluYXRlczogWzAsIDBdLFxuICAgICAgcmFkaXVzOiAzMFxuICAgIH1cbiAgfSlcbiAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQoY2lyY2xlUGxhY2VtYXJrKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdzZWFyY2hDb250cm9sJyk7XG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHJhZmZpY0NvbnRyb2wnKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0eXBlU2VsZWN0b3InKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdmdWxsc2NyZWVuQ29udHJvbCcpO1xuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xufVxuXG55bWFwcy5yZWFkeShpbml0TWFwKVxuXG5mdW5jdGlvbiBpbml0TWFwTW9zY293KCkge1xuICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwianMtbWFwLW1vc2Nvd1wiLCB7XG4gICAgY2VudGVyOiBbNTUuNzg2OTA1MDY4OTM3NSwzNy42NzE4NzU0OTk5OTk5N10sXG4gICAgem9vbTogMTMsXG4gICAgbWluWm9vbTogMTMsXG4gICAgY29udHJvbHM6IFtdXG4gIH0sIHtcbiAgICBtaW5ab29tOiAxMyxcbiAgfSlcblxuXG4gIHZhciBwbGFjZW1hcmtEaXYgPSB5bWFwcy50ZW1wbGF0ZUxheW91dEZhY3RvcnkuY3JlYXRlQ2xhc3MoYFxuICA8ZGl2IGNsYXNzPVwicGxhY2VtYXJrLWN1c3RvbVwiPlxuICAgIDxzcGFuIGNsYXNzPVwicGxhY2VtYXJrX19sYXlvdXRcIj5cbiAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBkPVwiTTE1LjY0NSA3LjU0NzQxQzE1LjY0NSA4LjkzMTE3IDE0LjgyODIgMTAuODU0OCAxMy42Mzg2IDEyLjg0OTdDMTIuNTgyOSAxNC42MjAzIDExLjI3ODggMTYuMzc0IDEwLjE0MjcgMTcuNzMxMUM4Ljk0Njk2IDE2LjMxOTcgNy42Mzc1NiAxNC41NTk5IDYuNTk0NTIgMTIuNzk3OEM1LjQyNjU0IDEwLjgyNDYgNC42NDUwMiA4LjkzNDIyIDQuNjQ1MDIgNy41NDc0MUM0LjY0NTAyIDQuNzk2MDEgNy4wNjk4MSAyLjUgMTAuMTQ1IDIuNUMxMy4yMjAyIDIuNSAxNS42NDUgNC43OTYwMSAxNS42NDUgNy41NDc0MVpcIiBmaWxsPVwiIzAwOUE2RFwiIHN0cm9rZT1cIiMwMDlBNkRcIi8+XG4gICAgICAgIDxjaXJjbGUgY3g9XCIxMC4xNDVcIiBjeT1cIjhcIiByPVwiMi41XCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiIzAwOUE2RFwiLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG4gIGApXG5cbiAgdmFyIGNpcmNsZVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1Ljc4NjkwNTA2ODkzNzUsMzcuNjcxODc1NDk5OTk5OTddLHt9LCB7XG4gICAgaWNvbkxheW91dDogcGxhY2VtYXJrRGl2LFxuICAgIGljb25TaGFwZToge1xuICAgICAgdHlwZTogJ0NpcmNsZScsXG4gICAgICBjb29yZGluYXRlczogWzAsIDBdLFxuICAgICAgcmFkaXVzOiAzMFxuICAgIH1cbiAgfSlcbiAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQoY2lyY2xlUGxhY2VtYXJrKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdzZWFyY2hDb250cm9sJyk7XG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHJhZmZpY0NvbnRyb2wnKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0eXBlU2VsZWN0b3InKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdmdWxsc2NyZWVuQ29udHJvbCcpO1xuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xufVxuXG55bWFwcy5yZWFkeShpbml0TWFwTW9zY293KSJdfQ==
