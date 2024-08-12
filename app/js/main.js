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

  var _modal = new bootstrap.Modal(document.querySelector(".js-license-modal"));

  var _items = document.querySelectorAll(".licenses__item");

  _items.forEach(function (item) {
    item.addEventListener("click", function () {
      _modal.show();
    });
  });

  new Swiper(".licenses__swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".licenses__pagination",
      clickable: true
    }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYnVyZ2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImNvbnRhaW5lciIsImhlYWRlckFjY29yZGlvbkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImhlYWRlciIsImJ0blVwIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNvbnRhaW5lcldpZHRoIiwic2Nyb2xsV2lkdGgiLCJ3aWR0aEZvck1lbnUiLCJzdHlsZSIsIndpZHRoIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZm9yRWFjaCIsImVsZW0iLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbnMiLCJhY2NvcmRpb25Ob3RBY3RpdmUiLCJhY2NvcmRpb25BY3RpdmUiLCJlbCIsImUiLCJ0YXJnZXQiLCJyZW1vdmUiLCJzY3JvbGxQb3NpdGlvbiIsInNjcm9sbFkiLCJhZGQiLCJpbm5lckhlaWdodCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJnZXRFbGVtZW50QnlJZCIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwicGFnaW5hdGlvbiIsImNsaWNrYWJsZSIsIml0ZW1zIiwiYnRuIiwiY29uc29sZSIsImxvZyIsImFmdGVySGVyb01vcmUiLCJpdGVtIiwic3dpcGVyMiIsImJyZWFrcG9pbnRzIiwidGFiQnV0dG9ucyIsIkFycmF5IiwiZnJvbSIsImVsZW1lbnRzIiwiYWNjb3JkaW9uSXRlbXMiLCJmb3JtIiwibXlNb2RhbE9rIiwiYm9vdHN0cmFwIiwiTW9kYWwiLCJ0YWJBY3RpdmUiLCJpbmRleCIsInN3aXBlckxpdmUiLCJwcmV2ZW50RGVmYXVsdCIsInNob3ciLCJtb2RhbCIsImJ0bnMiLCJteU1vZGFsIiwiaGlkZSIsInN3aXBlclFQIiwibGVuZ3RoIiwiYmxvY2siLCJoaXN0b3J5U3RyaXAiLCJoaXN0b3J5VGltZWxpbmUiLCJtb3JlIiwiYnRuTW9yZSIsIm1heEhlaWdodCIsImJvdHRvbUFic29sdXRlIiwiaGVpZ2h0QmxvY2tGb3JXaW5kb3ciLCJoZWlnaHRCbG9jayIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGVja2JveCIsImNoZWNrZWRBbGwiLCJjaGVja2VkUmVzZXQiLCJhcmVBbGxDaGVja2VkIiwiZXZlcnkiLCJjaGVja2VkIiwiYXJlQ2hlY2tlZE9uZSIsInNvbWUiLCJkaXNhYmxlZCIsImluaXRNYXBDb250YWN0cyIsIm15TWFwIiwieW1hcHMiLCJNYXAiLCJjZW50ZXIiLCJ6b29tIiwibWluWm9vbSIsImNvbnRyb2xzIiwicGxhY2VtYXJrRGl2IiwidGVtcGxhdGVMYXlvdXRGYWN0b3J5IiwiY3JlYXRlQ2xhc3MiLCJjaXJjbGVQbGFjZW1hcmsiLCJQbGFjZW1hcmsiLCJpY29uTGF5b3V0IiwiaWNvblNoYXBlIiwidHlwZSIsImNvb3JkaW5hdGVzIiwicmFkaXVzIiwiZ2VvT2JqZWN0cyIsImluaXRNYXBDb250YWN0c01vc2NvdyIsInJlYWR5IiwiY291bnQiLCJnYXAiLCJoZWlnaHQiLCJpIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGltZWxpbmVzIiwibGFzdFRpbWVsaW5lIiwib2Zmc2V0SGVpZ2h0IiwiYm90dG9tIiwic2V0VGltZW91dCIsImRpc3BsYXkiLCJwYW5lbCIsIm5leHRFbGVtZW50U2libGluZyIsInNjcm9sbEhlaWdodCIsInJlc2l6ZUZvckhlcm9MZWZ0IiwibWFyZ2luTGVmdCIsImluaXRNYXAiLCJpbml0TWFwTW9zY293Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWY7QUFDQSxJQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFiO0FBQ0EsSUFBTUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWxCO0FB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O0VBQ0FpRSxLQUFLLENBQUNNLFFBQU4sQ0FBZXZFLE1BQWYsQ0FBc0IsZ0JBQXRCO0VBQ0FpRSxLQUFLLENBQUNNLFFBQU4sQ0FBZXZFLE1BQWYsQ0FBc0IsY0FBdEI7RUFDQWlFLEtBQUssQ0FBQ00sUUFBTixDQUFldkUsTUFBZixDQUFzQixtQkFBdEI7RUFDQWlFLEtBQUssQ0FBQ00sUUFBTixDQUFldkUsTUFBZixDQUFzQixjQUF0QjtBQUNEOztBQUVEa0UsS0FBSyxDQUFDa0IsS0FBTixDQUFZa0IsYUFBWiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2J0blwiKVxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51XCIpXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1c3RvbS1jb250YWluZXJcIik7XG5jb25zdCBoZWFkZXJBY2NvcmRpb25JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtYWNjb3JkaW9uLWhlYWRlclwiKVxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG5jb25zdCBidG5VcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tdXAnKTtcblxuYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgY29uc3QgY29udGFpbmVyV2lkdGggPSBjb250YWluZXIuc2Nyb2xsV2lkdGg7XG5cbiAgaWYgKHdpbmRvd1dpZHRoID4gY29udGFpbmVyV2lkdGgpIHtcblxuICAgIGNvbnN0IHdpZHRoRm9yTWVudSA9ICh3aW5kb3dXaWR0aCAtIGNvbnRhaW5lcldpZHRoKSAvIDJcbiAgICBtZW51LnN0eWxlLndpZHRoID0gNzI1ICsgd2lkdGhGb3JNZW51ICsgJ3B4JztcbiAgfSBlbHNlIHtcbiAgICBtZW51LnN0eWxlLndpZHRoID0gJyc7XG4gIH1cblxuICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG59KVxuXG5oZWFkZXJBY2NvcmRpb25JdGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZWxlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImlzLXNob3dcIikgPyBhY2NvcmRpb25Ob3RBY3RpdmUoZWxlbSkgOiBhY2NvcmRpb25BY3RpdmUoZWxlbSlcbiAgICBoZWFkZXJBY2NvcmRpb25JdGVtcy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGlmIChlbC5wYXJlbnRFbGVtZW50ICE9PSBlbGVtLnBhcmVudEVsZW1lbnQpIGFjY29yZGlvbk5vdEFjdGl2ZShlbClcbiAgICB9KVxuICB9KVxufSlcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoIW1lbnUuY29udGFpbnMoZS50YXJnZXQpICYmICFidXJnZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgbWVudS5zdHlsZS53aWR0aCA9ICcnO1xuICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9XG59KVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFlcblxuICBpZiAoc2Nyb2xsUG9zaXRpb24gPj0gMTAwKSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gIH0gZWxzZSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gIH1cbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gIGlmICh3aW5kb3cuc2Nyb2xsWSA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgIGJ0blVwLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpXG4gIH0gZWxzZSB7XG4gICAgYnRuVXAuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJylcbiAgfVxufSlcblxuaWYgKHdpbmRvdy5zY3JvbGxZID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gIGJ0blVwLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpXG59IGVsc2Uge1xuICBidG5VcC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjcgJiYgbWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gIH1cbn0pXG5cbmJ0blVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgIHRvcDogMCxcbiAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgfSlcbn0pXG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZGV4XCIpKSB7XG4gIG5ldyBTd2lwZXIoXCIuaGVyb19fbGVmdC1zd2lwZXJcIiwge1xuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIuaGVyb19fbGVmdC1zd2lwZXItbmV4dFwiLFxuICAgICAgcHJldkVsOiBcIi5oZXJvX19sZWZ0LXN3aXBlci1wcmV2XCJcbiAgICB9LFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiBcIi5oZXJvX19sZWZ0LXN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICB9KVxuXG4gIG5ldyBTd2lwZXIoXCIuaGVyb19fcmlnaHQtc3dpcGVyXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogXCIuaGVyb19fcmlnaHQtc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiBcIi5oZXJvX19yaWdodC1zd2lwZXItbmV4dFwiLFxuICAgICAgcHJldkVsOiBcIi5oZXJvX19yaWdodC1zd2lwZXItcHJldlwiXG4gICAgfSxcbiAgfSlcblxuICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWZ0ZXItaGVyb19fYm94XCIpXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWZ0ZXItaGVyb19fYnRuXCIpXG4gIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKVxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA4MjcpIHtcbiAgICBhZnRlckhlcm9Nb3JlKDMsIGJ0biwgaXRlbXMpXG4gIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMTQwKSB7XG4gICAgYWZ0ZXJIZXJvTW9yZSg1LCBidG4sIGl0ZW1zKVxuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDgyNykge1xuICAgICAgaWYgKCFidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZC1ub25lXCIpKSB7XG4gICAgICAgIGFmdGVySGVyb01vcmUoMywgYnRuLCBpdGVtcylcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTE0MCkge1xuICAgICAgaWYgKCFidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZC1ub25lXCIpKSB7XG4gICAgICAgIGFmdGVySGVyb01vcmUoNSwgYnRuLCBpdGVtcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKSlcblxuICAgIH1cbiAgfSlcblxuICBsZXQgc3dpcGVyMiA9IG5ldyBTd2lwZXIoXCIuY3VzdG9tZXJzX19zd2lwZXJcIiwge1xuICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogXCIuY3VzdG9tZXJzX19wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIuY3VzdG9tZXJzX19zd2lwZXItbmV4dFwiLFxuICAgICAgcHJldkVsOiBcIi5jdXN0b21lcnNfX3N3aXBlci1wcmV2XCJcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA1Njc6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgIH0sXG4gICAgICA5OTI6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgIH0sXG4gICAgICAxMTEwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrXCIpKSB7XG4gIGNvbnN0IHRhYkJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFnZXMtbGlua3MtbGlua1wiKSk7XG4gIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvcmtfX3RhYi1pdGVtXCIpKTtcbiAgY29uc3QgYWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmFjYW5jaWVzX19hY2NvcmRpb24taXRlbS1oZWFkJyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50ZXJuc2hpcF9fZm9ybS1qcycpXG4gIGNvbnN0IG15TW9kYWxPayA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1tb2RhbC1va1wiKSk7XG4gIHRhYkFjdGl2ZSh0YWJCdXR0b25zWzBdLCAwLCB0YWJCdXR0b25zLCBlbGVtZW50cylcblxuICB0YWJCdXR0b25zLmZvckVhY2goKGJ0biwgaW5kZXgpID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHt0YWJBY3RpdmUoYnRuLCBpbmRleCx0YWJCdXR0b25zLCBlbGVtZW50cyl9KVxuICB9KVxuXG4gIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZWxlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImlzLXNob3dcIikgPyBhY2NvcmRpb25Ob3RBY3RpdmUoZWxlbSkgOiBhY2NvcmRpb25BY3RpdmUoZWxlbSlcbiAgICAgIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBpZiAoZWwucGFyZW50RWxlbWVudCAhPT0gZWxlbS5wYXJlbnRFbGVtZW50KSBhY2NvcmRpb25Ob3RBY3RpdmUoZWwpXG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG5cbiAgbGV0IHN3aXBlckxpdmUgPSBuZXcgU3dpcGVyKFwiLmxpdmVfX3N3aXBlclwiLCB7XG4gICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiBcIi5saXZlX19wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIubGl2ZV9fc3dpcGVyLW5leHRcIixcbiAgICAgIHByZXZFbDogXCIubGl2ZV9fc3dpcGVyLXByZXZcIlxuICAgIH0sXG4gIH0pXG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBteU1vZGFsT2suc2hvdygpO1xuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxcFwiKSkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc3VibWl0LW1vZGFsXCIpO1xuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xcF9fYnV0dG9uXCIpO1xuICBjb25zdCBteU1vZGFsID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChtb2RhbCk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnFwX19tb2RhbC1mb3JtXCIpXG4gIGNvbnN0IG15TW9kYWxPayA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1tb2RhbC1va1wiKSk7XG5cbiAgYnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBteU1vZGFsLnNob3coKTtcbiAgICB9KVxuICB9KVxuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBteU1vZGFsLmhpZGUoKTtcbiAgICBteU1vZGFsT2suc2hvdygpO1xuICB9KVxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnFwX19zd2lwZXJcIikpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnFwX19zd2lwZXJcIikuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIGxldCBzd2lwZXJRUCA9IG5ldyBTd2lwZXIoXCIucXBfX3N3aXBlclwiLCB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICBlbDogXCIucXBfX3BhZ2luYXRpb25cIixcbiAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgIG5leHRFbDogXCIucXBfX3N3aXBlci1uZXh0XCIsXG4gICAgICAgICAgcHJldkVsOiBcIi5xcF9fc3dpcGVyLXByZXZcIlxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnFwX19zd2lwZXItc2xpZGUnKSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucXBfX3N3aXBlci1zbGlkZScpLmxlbmd0aCA8IDIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnFwX19zd2lwZXItbmF2aWdhdGlvblwiKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKVxuICAgIH0pXG4gIH1cblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaXN0b3J5XCIpKSB7XG4gIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaXN0b3J5X19ibG9ja1wiKTtcbiAgY29uc3QgaGlzdG9yeVN0cmlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaXN0b3J5X19zdHJpcFwiKVxuICBjb25zdCBoaXN0b3J5VGltZWxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhpc3RvcnlfX3RpbWVsaW5lXCIpXG4gIGNvbnN0IG1vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpc3RvcnlfX21vcmVcIilcbiAgY29uc3QgYnRuTW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlzdG9yeV9fbW9yZS1idG5cIilcblxuICBpZiAoaGlzdG9yeVRpbWVsaW5lLmxlbmd0aCA8IDUpIHtcbiAgICBtb3JlLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICBibG9jay5zdHlsZS5tYXhIZWlnaHQgPSBcIm5vbmVcIlxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgICAgYm90dG9tQWJzb2x1dGUoaGlzdG9yeVRpbWVsaW5lLCBoaXN0b3J5U3RyaXAsIDE4KVxuICAgIH0gZWxzZSB7XG4gICAgICBib3R0b21BYnNvbHV0ZShoaXN0b3J5VGltZWxpbmUsIGhpc3RvcnlTdHJpcCwgNDApXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XG4gICAgICAgIGJvdHRvbUFic29sdXRlKGhpc3RvcnlUaW1lbGluZSwgaGlzdG9yeVN0cmlwLCAxOClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvdHRvbUFic29sdXRlKGhpc3RvcnlUaW1lbGluZSwgaGlzdG9yeVN0cmlwLCA0MClcbiAgICAgIH1cbiAgICB9KVxuXG4gIH0gZWxzZSB7XG4gICAgZnVuY3Rpb24gaGVpZ2h0QmxvY2tGb3JXaW5kb3cgKCkge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XG4gICAgICAgIGhlaWdodEJsb2NrKGJsb2NrLCBoaXN0b3J5VGltZWxpbmUsIDQsIDU4KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVpZ2h0QmxvY2soYmxvY2ssIGhpc3RvcnlUaW1lbGluZSwgNCwgODApXG4gICAgICB9XG4gICAgfVxuXG4gICAgaGVpZ2h0QmxvY2tGb3JXaW5kb3coKVxuXG4gICAgbW9yZS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4gaGVpZ2h0QmxvY2tGb3JXaW5kb3cpXG5cbiAgICBidG5Nb3JlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiBoZWlnaHRCbG9ja0ZvcldpbmRvdylcbiAgICAgIG1vcmUuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgICAgYmxvY2suc3R5bGUubWF4SGVpZ2h0ID0gXCJub25lXCJcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgICAgICBib3R0b21BYnNvbHV0ZShoaXN0b3J5VGltZWxpbmUsIGhpc3RvcnlTdHJpcCwgMTgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib3R0b21BYnNvbHV0ZShoaXN0b3J5VGltZWxpbmUsIGhpc3RvcnlTdHJpcCwgNDApXG4gICAgICB9XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgICAgICAgIGJvdHRvbUFic29sdXRlKGhpc3RvcnlUaW1lbGluZSwgaGlzdG9yeVN0cmlwLCAxOClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib3R0b21BYnNvbHV0ZShoaXN0b3J5VGltZWxpbmUsIGhpc3RvcnlTdHJpcCwgNDApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuXG4gIH1cblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaWNlbnNlc1wiKSkge1xuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGljZW5zZXNfX2ZpbHRlci1pbnB1dFwiKVxuICBjb25zdCBjaGVja2VkQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saWNlbnNlc19fZmlsdGVyLWJ0bi1hbGxcIilcbiAgY29uc3QgY2hlY2tlZFJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saWNlbnNlc19fZmlsdGVyLWJ0bi1yZXNldFwiKVxuICBjb25zdCBtb2RhbCA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1saWNlbnNlLW1vZGFsXCIpKVxuICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGljZW5zZXNfX2l0ZW1cIilcblxuICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG1vZGFsLnNob3coKVxuICAgIH0pXG4gIH0pXG5cbiAgbmV3IFN3aXBlcihcIi5saWNlbnNlc19fc3dpcGVyXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLmxpY2Vuc2VzX19wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgYXJlQWxsQ2hlY2tlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShjaGVja2JveCkuZXZlcnkoZWxlbSA9PiBlbGVtLmNoZWNrZWQpXG4gIH1cblxuICBjb25zdCBhcmVDaGVja2VkT25lID0gKCkgPT4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGNoZWNrYm94KS5zb21lKGVsZW0gPT4gZWxlbS5jaGVja2VkKVxuICB9XG5cbiAgY2hlY2tlZEFsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNoZWNrYm94LmZvckVhY2goZWxlbSA9PiBlbGVtLmNoZWNrZWQgPSB0cnVlKVxuICAgIGNoZWNrZWRSZXNldC5kaXNhYmxlZCA9IGZhbHNlXG4gICAgY2hlY2tlZEFsbC5kaXNhYmxlZCA9IHRydWVcbiAgfSlcblxuICBjaGVja2VkUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGVja2JveC5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jaGVja2VkID0gZmFsc2UpXG4gICAgY2hlY2tlZFJlc2V0LmRpc2FibGVkID0gdHJ1ZVxuICAgIGNoZWNrZWRBbGwuZGlzYWJsZWQgPSBmYWxzZVxuICB9KVxuXG4gIGNoZWNrYm94LmZvckVhY2goZWxlbSA9PiB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGNoZWNrZWRBbGwuZGlzYWJsZWQgPSBhcmVBbGxDaGVja2VkKClcbiAgICAgIGNoZWNrZWRSZXNldC5kaXNhYmxlZCA9ICFhcmVDaGVja2VkT25lKClcbiAgICB9KVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0c1wiKSkge1xuICBmdW5jdGlvbiBpbml0TWFwQ29udGFjdHMoKSB7XG4gICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcImNvbnRhY3RzX19tYXAtcGVuemFcIiwge1xuICAgICAgY2VudGVyOiBbNTMuMTg0NDUxMDcxMjMzMTM0LDQ1LjAwNzAxNDk5OTk5OTkyNF0sXG4gICAgICB6b29tOiAxMyxcbiAgICAgIG1pblpvb206IDEzLFxuICAgICAgY29udHJvbHM6IFtdXG4gICAgfSwge1xuICAgICAgbWluWm9vbTogMTMsXG4gICAgfSlcblxuXG4gICAgdmFyIHBsYWNlbWFya0RpdiA9IHltYXBzLnRlbXBsYXRlTGF5b3V0RmFjdG9yeS5jcmVhdGVDbGFzcyhgXG4gIDxkaXYgY2xhc3M9XCJwbGFjZW1hcmstY3VzdG9tXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJwbGFjZW1hcmtfX2xheW91dFwiPlxuICAgICAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTUuNjQ1IDcuNTQ3NDFDMTUuNjQ1IDguOTMxMTcgMTQuODI4MiAxMC44NTQ4IDEzLjYzODYgMTIuODQ5N0MxMi41ODI5IDE0LjYyMDMgMTEuMjc4OCAxNi4zNzQgMTAuMTQyNyAxNy43MzExQzguOTQ2OTYgMTYuMzE5NyA3LjYzNzU2IDE0LjU1OTkgNi41OTQ1MiAxMi43OTc4QzUuNDI2NTQgMTAuODI0NiA0LjY0NTAyIDguOTM0MjIgNC42NDUwMiA3LjU0NzQxQzQuNjQ1MDIgNC43OTYwMSA3LjA2OTgxIDIuNSAxMC4xNDUgMi41QzEzLjIyMDIgMi41IDE1LjY0NSA0Ljc5NjAxIDE1LjY0NSA3LjU0NzQxWlwiIGZpbGw9XCIjMDA5QTZEXCIgc3Ryb2tlPVwiIzAwOUE2RFwiLz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjEwLjE0NVwiIGN5PVwiOFwiIHI9XCIyLjVcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCIjMDA5QTZEXCIvPlxuICAgICAgPC9zdmc+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbiAgYClcblxuICAgIHZhciBjaXJjbGVQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1My4xODQ0NTEwNzEyMzMxMzQsNDUuMDA3MDE0OTk5OTk5OTI0XSx7fSwge1xuICAgICAgaWNvbkxheW91dDogcGxhY2VtYXJrRGl2LFxuICAgICAgaWNvblNoYXBlOiB7XG4gICAgICAgIHR5cGU6ICdDaXJjbGUnLFxuICAgICAgICBjb29yZGluYXRlczogWzAsIDBdLFxuICAgICAgICByYWRpdXM6IDMwXG4gICAgICB9XG4gICAgfSlcbiAgICBteU1hcC5nZW9PYmplY3RzLmFkZChjaXJjbGVQbGFjZW1hcmspO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHJhZmZpY0NvbnRyb2wnKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3R5cGVTZWxlY3RvcicpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnZnVsbHNjcmVlbkNvbnRyb2wnKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xuICB9XG4gIGZ1bmN0aW9uIGluaXRNYXBDb250YWN0c01vc2NvdygpIHtcbiAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwiY29udGFjdHNfX21hcC1tb3Njb3dcIiwge1xuICAgICAgY2VudGVyOiBbNTUuNzg2OTA1MDY4OTM3NSwzNy42NzE4NzU0OTk5OTk5N10sXG4gICAgICB6b29tOiAxMyxcbiAgICAgIG1pblpvb206IDEzLFxuICAgICAgY29udHJvbHM6IFtdXG4gICAgfSwge1xuICAgICAgbWluWm9vbTogMTMsXG4gICAgfSlcblxuXG4gICAgdmFyIHBsYWNlbWFya0RpdiA9IHltYXBzLnRlbXBsYXRlTGF5b3V0RmFjdG9yeS5jcmVhdGVDbGFzcyhgXG4gIDxkaXYgY2xhc3M9XCJwbGFjZW1hcmstY3VzdG9tXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJwbGFjZW1hcmtfX2xheW91dFwiPlxuICAgICAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTUuNjQ1IDcuNTQ3NDFDMTUuNjQ1IDguOTMxMTcgMTQuODI4MiAxMC44NTQ4IDEzLjYzODYgMTIuODQ5N0MxMi41ODI5IDE0LjYyMDMgMTEuMjc4OCAxNi4zNzQgMTAuMTQyNyAxNy43MzExQzguOTQ2OTYgMTYuMzE5NyA3LjYzNzU2IDE0LjU1OTkgNi41OTQ1MiAxMi43OTc4QzUuNDI2NTQgMTAuODI0NiA0LjY0NTAyIDguOTM0MjIgNC42NDUwMiA3LjU0NzQxQzQuNjQ1MDIgNC43OTYwMSA3LjA2OTgxIDIuNSAxMC4xNDUgMi41QzEzLjIyMDIgMi41IDE1LjY0NSA0Ljc5NjAxIDE1LjY0NSA3LjU0NzQxWlwiIGZpbGw9XCIjMDA5QTZEXCIgc3Ryb2tlPVwiIzAwOUE2RFwiLz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjEwLjE0NVwiIGN5PVwiOFwiIHI9XCIyLjVcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCIjMDA5QTZEXCIvPlxuICAgICAgPC9zdmc+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbiAgYClcblxuICAgIHZhciBjaXJjbGVQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS43ODY5MDUwNjg5Mzc1LDM3LjY3MTg3NTQ5OTk5OTk3XSx7fSwge1xuICAgICAgaWNvbkxheW91dDogcGxhY2VtYXJrRGl2LFxuICAgICAgaWNvblNoYXBlOiB7XG4gICAgICAgIHR5cGU6ICdDaXJjbGUnLFxuICAgICAgICBjb29yZGluYXRlczogWzAsIDBdLFxuICAgICAgICByYWRpdXM6IDMwXG4gICAgICB9XG4gICAgfSlcbiAgICBteU1hcC5nZW9PYmplY3RzLmFkZChjaXJjbGVQbGFjZW1hcmspO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHJhZmZpY0NvbnRyb2wnKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3R5cGVTZWxlY3RvcicpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnZnVsbHNjcmVlbkNvbnRyb2wnKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xuICB9XG4gIHltYXBzLnJlYWR5KGluaXRNYXBDb250YWN0cylcbiAgeW1hcHMucmVhZHkoaW5pdE1hcENvbnRhY3RzTW9zY293KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJldmVudHNcIikpIHtcbiAgY29uc3QgYWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlbnRzX19hY2NvcmRpb24taXRlbS1oZWFkJyk7XG4gIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZWxlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImlzLXNob3dcIikgPyBhY2NvcmRpb25Ob3RBY3RpdmUoZWxlbSkgOiBhY2NvcmRpb25BY3RpdmUoZWxlbSlcbiAgICAgIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBpZiAoZWwucGFyZW50RWxlbWVudCAhPT0gZWxlbS5wYXJlbnRFbGVtZW50KSBhY2NvcmRpb25Ob3RBY3RpdmUoZWwpXG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGhlaWdodEJsb2NrIChibG9jaywgaXRlbXMsIGNvdW50LCBnYXApIHtcbiAgbGV0IGhlaWdodCA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgaGVpZ2h0ICs9IGl0ZW1zW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICB9XG5cbiAgYmxvY2suc3R5bGUubWF4SGVpZ2h0ID0gKGhlaWdodCArIChnYXAgKiAoY291bnQgLSAxKSkpICsgXCJweFwiO1xufVxuXG5mdW5jdGlvbiBib3R0b21BYnNvbHV0ZSh0aW1lbGluZXMsIGJsb2NrLCBnYXApIHtcblxuICBpZiAodGltZWxpbmVzKSB7XG4gICAgY29uc3QgbGFzdFRpbWVsaW5lID0gdGltZWxpbmVzW3RpbWVsaW5lcy5sZW5ndGggLSAxXS5vZmZzZXRIZWlnaHRcblxuICAgIGJsb2NrLnN0eWxlLmJvdHRvbSA9IGAke2xhc3RUaW1lbGluZSAtIGdhcH1weGBcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHRhYkFjdGl2ZShidG4sIGluZGV4LCBidG5zLCBlbGVtZW50cykge1xuICBidG5zLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpXG4gICAgZWxlbWVudHNbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGVsZW1lbnRzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICB9LCAzMDApXG5cbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIGFjY29yZGlvbkFjdGl2ZShpdGVtKSB7XG4gIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaXMtc2hvd1wiKTtcbiAgbGV0IHBhbmVsID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGlmICghcGFuZWwuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFjY29yZGlvbk5vdEFjdGl2ZShpdGVtKSB7XG4gIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtc2hvd1wiKTtcbiAgbGV0IHBhbmVsID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzaXplRm9ySGVyb0xlZnQgKGJsb2NrKSB7XG4gIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgY29uc3QgY29udGFpbmVyV2lkdGggPSBjb250YWluZXIuc2Nyb2xsV2lkdGhcblxuICBpZiAod2luZG93V2lkdGggPiBjb250YWluZXJXaWR0aCkge1xuICAgIGNvbnN0IHdpZHRoRm9yTWVudSA9ICh3aW5kb3dXaWR0aCAtIGNvbnRhaW5lcldpZHRoKSAvIDJcbiAgICBibG9jay5zdHlsZS5tYXJnaW5MZWZ0ID0gd2lkdGhGb3JNZW51ICsgJ3B4J1xuICAgIGNvbnNvbGUubG9nKHdpZHRoRm9yTWVudSlcbiAgfSBlbHNlIHtcbiAgICBibG9jay5zdHlsZS5tYXJnaW5MZWZ0ID0gJzAnXG4gIH1cbn1cblxuZnVuY3Rpb24gYWZ0ZXJIZXJvTW9yZSAoY291bnQsIGJ0biwgaXRlbXMpIHtcbiAgaWYgKGl0ZW1zLmxlbmd0aCA+IGNvdW50KSB7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA+IGNvdW50KSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcbiAgICAgIH0pXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcbiAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcImpzLW1hcC1wZW56YVwiLCB7XG4gICAgY2VudGVyOiBbNTMuMTg0NDUxMDcxMjMzMTM0LDQ1LjAwNzAxNDk5OTk5OTkyNF0sXG4gICAgem9vbTogMTMsXG4gICAgbWluWm9vbTogMTMsXG4gICAgY29udHJvbHM6IFtdXG4gIH0sIHtcbiAgICBtaW5ab29tOiAxMyxcbiAgfSlcblxuXG4gIHZhciBwbGFjZW1hcmtEaXYgPSB5bWFwcy50ZW1wbGF0ZUxheW91dEZhY3RvcnkuY3JlYXRlQ2xhc3MoYFxuICA8ZGl2IGNsYXNzPVwicGxhY2VtYXJrLWN1c3RvbVwiPlxuICAgIDxzcGFuIGNsYXNzPVwicGxhY2VtYXJrX19sYXlvdXRcIj5cbiAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBkPVwiTTE1LjY0NSA3LjU0NzQxQzE1LjY0NSA4LjkzMTE3IDE0LjgyODIgMTAuODU0OCAxMy42Mzg2IDEyLjg0OTdDMTIuNTgyOSAxNC42MjAzIDExLjI3ODggMTYuMzc0IDEwLjE0MjcgMTcuNzMxMUM4Ljk0Njk2IDE2LjMxOTcgNy42Mzc1NiAxNC41NTk5IDYuNTk0NTIgMTIuNzk3OEM1LjQyNjU0IDEwLjgyNDYgNC42NDUwMiA4LjkzNDIyIDQuNjQ1MDIgNy41NDc0MUM0LjY0NTAyIDQuNzk2MDEgNy4wNjk4MSAyLjUgMTAuMTQ1IDIuNUMxMy4yMjAyIDIuNSAxNS42NDUgNC43OTYwMSAxNS42NDUgNy41NDc0MVpcIiBmaWxsPVwiIzAwOUE2RFwiIHN0cm9rZT1cIiMwMDlBNkRcIi8+XG4gICAgICAgIDxjaXJjbGUgY3g9XCIxMC4xNDVcIiBjeT1cIjhcIiByPVwiMi41XCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiIzAwOUE2RFwiLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG4gIGApXG5cbiAgdmFyIGNpcmNsZVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzUzLjE4NDQ1MTA3MTIzMzEzNCw0NS4wMDcwMTQ5OTk5OTk5MjRdLHt9LCB7XG4gICAgaWNvbkxheW91dDogcGxhY2VtYXJrRGl2LFxuICAgIGljb25TaGFwZToge1xuICAgICAgdHlwZTogJ0NpcmNsZScsXG4gICAgICBjb29yZGluYXRlczogWzAsIDBdLFxuICAgICAgcmFkaXVzOiAzMFxuICAgIH1cbiAgfSlcbiAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQoY2lyY2xlUGxhY2VtYXJrKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdzZWFyY2hDb250cm9sJyk7XG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHJhZmZpY0NvbnRyb2wnKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0eXBlU2VsZWN0b3InKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdmdWxsc2NyZWVuQ29udHJvbCcpO1xuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xufVxuXG55bWFwcy5yZWFkeShpbml0TWFwKVxuXG5mdW5jdGlvbiBpbml0TWFwTW9zY293KCkge1xuICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwianMtbWFwLW1vc2Nvd1wiLCB7XG4gICAgY2VudGVyOiBbNTUuNzg2OTA1MDY4OTM3NSwzNy42NzE4NzU0OTk5OTk5N10sXG4gICAgem9vbTogMTMsXG4gICAgbWluWm9vbTogMTMsXG4gICAgY29udHJvbHM6IFtdXG4gIH0sIHtcbiAgICBtaW5ab29tOiAxMyxcbiAgfSlcblxuXG4gIHZhciBwbGFjZW1hcmtEaXYgPSB5bWFwcy50ZW1wbGF0ZUxheW91dEZhY3RvcnkuY3JlYXRlQ2xhc3MoYFxuICA8ZGl2IGNsYXNzPVwicGxhY2VtYXJrLWN1c3RvbVwiPlxuICAgIDxzcGFuIGNsYXNzPVwicGxhY2VtYXJrX19sYXlvdXRcIj5cbiAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBkPVwiTTE1LjY0NSA3LjU0NzQxQzE1LjY0NSA4LjkzMTE3IDE0LjgyODIgMTAuODU0OCAxMy42Mzg2IDEyLjg0OTdDMTIuNTgyOSAxNC42MjAzIDExLjI3ODggMTYuMzc0IDEwLjE0MjcgMTcuNzMxMUM4Ljk0Njk2IDE2LjMxOTcgNy42Mzc1NiAxNC41NTk5IDYuNTk0NTIgMTIuNzk3OEM1LjQyNjU0IDEwLjgyNDYgNC42NDUwMiA4LjkzNDIyIDQuNjQ1MDIgNy41NDc0MUM0LjY0NTAyIDQuNzk2MDEgNy4wNjk4MSAyLjUgMTAuMTQ1IDIuNUMxMy4yMjAyIDIuNSAxNS42NDUgNC43OTYwMSAxNS42NDUgNy41NDc0MVpcIiBmaWxsPVwiIzAwOUE2RFwiIHN0cm9rZT1cIiMwMDlBNkRcIi8+XG4gICAgICAgIDxjaXJjbGUgY3g9XCIxMC4xNDVcIiBjeT1cIjhcIiByPVwiMi41XCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiIzAwOUE2RFwiLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG4gIGApXG5cbiAgdmFyIGNpcmNsZVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1Ljc4NjkwNTA2ODkzNzUsMzcuNjcxODc1NDk5OTk5OTddLHt9LCB7XG4gICAgaWNvbkxheW91dDogcGxhY2VtYXJrRGl2LFxuICAgIGljb25TaGFwZToge1xuICAgICAgdHlwZTogJ0NpcmNsZScsXG4gICAgICBjb29yZGluYXRlczogWzAsIDBdLFxuICAgICAgcmFkaXVzOiAzMFxuICAgIH1cbiAgfSlcbiAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQoY2lyY2xlUGxhY2VtYXJrKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdzZWFyY2hDb250cm9sJyk7XG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHJhZmZpY0NvbnRyb2wnKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0eXBlU2VsZWN0b3InKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdmdWxsc2NyZWVuQ29udHJvbCcpO1xuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xufVxuXG55bWFwcy5yZWFkeShpbml0TWFwTW9zY293KSJdfQ==
