const burger = document.querySelector(".header__btn")
const menu = document.querySelector(".header__menu")
const container = document.querySelector(".custom-container");
const headerAccordionItems = document.querySelectorAll(".js-accordion-header")
const header = document.querySelector(".header");
const btnUp = document.querySelector('.button-up');

burger.addEventListener("click", () => {
  const windowWidth = window.innerWidth
  const containerWidth = container.scrollWidth;

  if (windowWidth > containerWidth) {

    const widthForMenu = (windowWidth - containerWidth) / 2
    menu.style.width = 725 + widthForMenu + 'px';
  } else {
    menu.style.width = '';
  }

  burger.classList.toggle('active');
  menu.classList.toggle('active');
})

headerAccordionItems.forEach(elem => {
  elem.addEventListener("click", () => {
    elem.parentElement.classList.contains("is-show") ? accordionNotActive(elem) : accordionActive(elem)
    headerAccordionItems.forEach(el => {
      if (el.parentElement !== elem.parentElement) accordionNotActive(el)
    })
  })
})

document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !burger.contains(e.target)) {
    menu.style.width = '';
    burger.classList.remove('active');
    menu.classList.remove('active');
  }
})

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY

  if (scrollPosition >= 100) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
})

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight) {
    btnUp.classList.remove('is-hidden')
  } else {
    btnUp.classList.add('is-hidden')
  }
})

if (window.scrollY > window.innerHeight) {
  btnUp.classList.remove('is-hidden')
} else {
  btnUp.classList.add('is-hidden')
}

btnUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

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
    },
  })

  new Swiper(".hero__right-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".hero__right-swiper-pagination",
      clickable: true
    },
  })

  const items = document.querySelectorAll(".after-hero__box")
  const btn = document.querySelector(".after-hero__btn")
  console.log(window.innerWidth)
  if (window.innerWidth < 768) {
    afterHeroMore(3, btn, items)
  } else if (window.innerWidth < 991) {
    afterHeroMore(5, btn, items)
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      if (!btn.classList.contains("d-none")) {
        afterHeroMore(3, btn, items)
      }
    } else if (window.innerWidth < 991) {
      if (!btn.classList.contains("d-none")) {
        afterHeroMore(5, btn, items)
      }
    } else {
      items.forEach(item => item.classList.remove("d-none"))

    }
  })

  let swiper2 = new Swiper(".customers__swiper", {
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
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1110: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    }
  })
}

if (document.getElementById("work")) {
  const tabButtons = Array.from(document.querySelectorAll(".work__tab-head-btn"));
  const elements = Array.from(document.querySelectorAll(".work__tab-item"));
  const accordionItems = document.querySelectorAll('.vacancies__accordion-item-head');
  const form = document.querySelector('.internship__form-js')
  const myModalOk = new bootstrap.Modal(document.querySelector(".js-modal-ok"));
  tabActive(tabButtons[0], 0, tabButtons, elements)

  tabButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {tabActive(btn, index,tabButtons, elements)})
  })

  accordionItems.forEach(elem => {
    elem.addEventListener("click", () => {
      elem.parentElement.classList.contains("is-show") ? accordionNotActive(elem) : accordionActive(elem)
      accordionItems.forEach(el => {
        if (el.parentElement !== elem.parentElement) accordionNotActive(el)
      })
    })
  })

  let swiperLive = new Swiper(".live__swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".live__pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".live__swiper-next",
      prevEl: ".live__swiper-prev"
    },
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    myModalOk.show();
  })
}

if (document.getElementById("qp")) {
  const modal = document.querySelector(".js-submit-modal");
  const btns = document.querySelectorAll(".qp__button");
  const myModal = new bootstrap.Modal(modal);
  const form = document.querySelector(".qp__modal-form")
  const myModalOk = new bootstrap.Modal(document.querySelector(".js-modal-ok"));

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      myModal.show();
    })
  })

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    myModal.hide();
    myModalOk.show();
  })

  if (document.querySelectorAll(".qp__swiper")) {
    document.querySelectorAll(".qp__swiper").forEach(elem => {
      let swiperQP = new Swiper(".qp__swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".qp__pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".qp__swiper-next",
          prevEl: ".qp__swiper-prev"
        },
      })
    })
  }


  if (document.querySelectorAll('.qp__swiper-slide') && document.querySelectorAll('.qp__swiper-slide').length < 2) {
    document.querySelectorAll(".qp__swiper-navigation").forEach(elem => {
      elem.classList.add('d-none')
    })
  }

}

if (document.getElementById("history")) {
  const block = document.querySelector(".history__block");
  const historyStrip = document.querySelector(".history__strip")
  const historyTimeline = document.querySelectorAll(".history__timeline")
  const more = document.querySelector(".history__more")
  const btnMore = document.querySelector(".history__more-btn")

  if (historyTimeline.length < 5) {
    more.classList.add("d-none")
    block.style.maxHeight = "none"
    if (window.innerWidth < 768) {
      bottomAbsolute(historyTimeline, historyStrip, 18)
    } else {
      bottomAbsolute(historyTimeline, historyStrip, 40)
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        bottomAbsolute(historyTimeline, historyStrip, 18)
      } else {
        bottomAbsolute(historyTimeline, historyStrip, 40)
      }
    })

  } else {
    function heightBlockForWindow () {
      if (window.innerWidth < 768) {
        heightBlock(block, historyTimeline, 4, 58)
      } else {
        heightBlock(block, historyTimeline, 4, 80)
      }
    }

    heightBlockForWindow()

    more.classList.remove("d-none")
    window.addEventListener("resize", () => heightBlockForWindow)

    btnMore.addEventListener("click", () => {
      window.removeEventListener("resize", () => heightBlockForWindow)
      more.classList.add("d-none")
      block.style.maxHeight = "none"
      if (window.innerWidth < 768) {
        bottomAbsolute(historyTimeline, historyStrip, 18)
      } else {
        bottomAbsolute(historyTimeline, historyStrip, 40)
      }
      window.addEventListener("resize", () => {
        if (window.innerWidth < 768) {
          bottomAbsolute(historyTimeline, historyStrip, 18)
        } else {
          bottomAbsolute(historyTimeline, historyStrip, 40)
        }
      })
    })
  }

  if (window.innerWidth < 768) {

  }

}

if (document.getElementById("licenses")) {
  const checkbox = document.querySelectorAll(".licenses__filter-input")
  const checkedAll = document.querySelector(".licenses__filter-btn-all")
  const checkedReset = document.querySelector(".licenses__filter-btn-reset")

  const areAllChecked = () => {
    return Array.from(checkbox).every(elem => elem.checked)
  }

  const areCheckedOne = () => {
    return Array.from(checkbox).some(elem => elem.checked)
  }

  checkedAll.addEventListener("click", () => {
    checkbox.forEach(elem => elem.checked = true)
    checkedReset.disabled = false
    checkedAll.disabled = true
  })

  checkedReset.addEventListener("click", () => {
    checkbox.forEach(elem => elem.checked = false)
    checkedReset.disabled = true
    checkedAll.disabled = false
  })

  checkbox.forEach(elem => {
    elem.addEventListener("change", () => {
      checkedAll.disabled = areAllChecked()
      checkedReset.disabled = !areCheckedOne()
    })
  })
}

if (document.getElementById("contacts")) {
  function initMapContacts() {
    var myMap = new ymaps.Map("contacts__map-penza", {
      center: [53.184451071233134,45.007014999999924],
      zoom: 13,
      minZoom: 13,
      controls: []
    }, {
      minZoom: 13,
    })


    var placemarkDiv = ymaps.templateLayoutFactory.createClass(`
  <div class="placemark-custom">
    <span class="placemark__layout">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.645 7.54741C15.645 8.93117 14.8282 10.8548 13.6386 12.8497C12.5829 14.6203 11.2788 16.374 10.1427 17.7311C8.94696 16.3197 7.63756 14.5599 6.59452 12.7978C5.42654 10.8246 4.64502 8.93422 4.64502 7.54741C4.64502 4.79601 7.06981 2.5 10.145 2.5C13.2202 2.5 15.645 4.79601 15.645 7.54741Z" fill="#009A6D" stroke="#009A6D"/>
        <circle cx="10.145" cy="8" r="2.5" fill="white" stroke="#009A6D"/>
      </svg>
    </span>
  </div>
  `)

    var circlePlacemark = new ymaps.Placemark([53.184451071233134,45.007014999999924],{}, {
      iconLayout: placemarkDiv,
      iconShape: {
        type: 'Circle',
        coordinates: [0, 0],
        radius: 30
      }
    })
    myMap.geoObjects.add(circlePlacemark);
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');
  }
  function initMapContactsMoscow() {
    var myMap = new ymaps.Map("contacts__map-moscow", {
      center: [55.7869050689375,37.67187549999997],
      zoom: 13,
      minZoom: 13,
      controls: []
    }, {
      minZoom: 13,
    })


    var placemarkDiv = ymaps.templateLayoutFactory.createClass(`
  <div class="placemark-custom">
    <span class="placemark__layout">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.645 7.54741C15.645 8.93117 14.8282 10.8548 13.6386 12.8497C12.5829 14.6203 11.2788 16.374 10.1427 17.7311C8.94696 16.3197 7.63756 14.5599 6.59452 12.7978C5.42654 10.8246 4.64502 8.93422 4.64502 7.54741C4.64502 4.79601 7.06981 2.5 10.145 2.5C13.2202 2.5 15.645 4.79601 15.645 7.54741Z" fill="#009A6D" stroke="#009A6D"/>
        <circle cx="10.145" cy="8" r="2.5" fill="white" stroke="#009A6D"/>
      </svg>
    </span>
  </div>
  `)

    var circlePlacemark = new ymaps.Placemark([55.7869050689375,37.67187549999997],{}, {
      iconLayout: placemarkDiv,
      iconShape: {
        type: 'Circle',
        coordinates: [0, 0],
        radius: 30
      }
    })
    myMap.geoObjects.add(circlePlacemark);
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');
  }
  ymaps.ready(initMapContacts)
  ymaps.ready(initMapContactsMoscow)
}

if (document.getElementById("events")) {
  const accordionItems = document.querySelectorAll('.events__accordion-item-head');
  accordionItems.forEach(elem => {
    elem.addEventListener("click", () => {
      elem.parentElement.classList.contains("is-show") ? accordionNotActive(elem) : accordionActive(elem)
      accordionItems.forEach(el => {
        if (el.parentElement !== elem.parentElement) accordionNotActive(el)
      })
    })
  })
}

function heightBlock (block, items, count, gap) {
  let height = 0
  for (let i = 0; i < count; i++) {
    height += items[i].getBoundingClientRect().height
  }

  block.style.maxHeight = (height + (gap * (count - 1))) + "px";
}

function bottomAbsolute(timelines, block, gap) {

  if (timelines) {
    const lastTimeline = timelines[timelines.length - 1].offsetHeight

    block.style.bottom = `${lastTimeline - gap}px`
  }

}

function tabActive(btn, index, btns, elements) {
  btns.forEach((el) => el.parentElement.classList.remove("active"));
  elements.forEach(el => el.classList.remove("active"));
  setTimeout(() => {
    elements.forEach(el => el.style.display = "none")
    elements[index].style.display = 'block';
    elements[index].classList.add('active');

  }, 300)

  btn.parentElement.classList.add("active");
}

function accordionActive(item) {
  item.parentElement.classList.add("is-show");
  let panel = item.nextElementSibling;
  if (!panel.style.maxHeight) {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

function accordionNotActive(item) {
  item.parentElement.classList.remove("is-show");
  let panel = item.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null
  }
}

function resizeForHeroLeft (block) {
  const windowWidth = window.innerWidth
  const containerWidth = container.scrollWidth

  if (windowWidth > containerWidth) {
    const widthForMenu = (windowWidth - containerWidth) / 2
    block.style.marginLeft = widthForMenu + 'px'
    console.log(widthForMenu)
  } else {
    block.style.marginLeft = '0'
  }
}

function afterHeroMore (count, btn, items) {
  if (items.length > count) {
    items.forEach((item, index) => {
      if (index > count) {
        item.classList.add("d-none")
      }
    })

    btn.addEventListener("click", () => {
      items.forEach((item, index) => {
        item.classList.remove("d-none");
      })
      btn.classList.add("d-none")
    })
  }
}

function initMap() {
  var myMap = new ymaps.Map("js-map-penza", {
    center: [53.184451071233134,45.007014999999924],
    zoom: 13,
    minZoom: 13,
    controls: []
  }, {
    minZoom: 13,
  })


  var placemarkDiv = ymaps.templateLayoutFactory.createClass(`
  <div class="placemark-custom">
    <span class="placemark__layout">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.645 7.54741C15.645 8.93117 14.8282 10.8548 13.6386 12.8497C12.5829 14.6203 11.2788 16.374 10.1427 17.7311C8.94696 16.3197 7.63756 14.5599 6.59452 12.7978C5.42654 10.8246 4.64502 8.93422 4.64502 7.54741C4.64502 4.79601 7.06981 2.5 10.145 2.5C13.2202 2.5 15.645 4.79601 15.645 7.54741Z" fill="#009A6D" stroke="#009A6D"/>
        <circle cx="10.145" cy="8" r="2.5" fill="white" stroke="#009A6D"/>
      </svg>
    </span>
  </div>
  `)

  var circlePlacemark = new ymaps.Placemark([53.184451071233134,45.007014999999924],{}, {
    iconLayout: placemarkDiv,
    iconShape: {
      type: 'Circle',
      coordinates: [0, 0],
      radius: 30
    }
  })
  myMap.geoObjects.add(circlePlacemark);
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('rulerControl');
}

ymaps.ready(initMap)

function initMapMoscow() {
  var myMap = new ymaps.Map("js-map-moscow", {
    center: [55.7869050689375,37.67187549999997],
    zoom: 13,
    minZoom: 13,
    controls: []
  }, {
    minZoom: 13,
  })


  var placemarkDiv = ymaps.templateLayoutFactory.createClass(`
  <div class="placemark-custom">
    <span class="placemark__layout">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.645 7.54741C15.645 8.93117 14.8282 10.8548 13.6386 12.8497C12.5829 14.6203 11.2788 16.374 10.1427 17.7311C8.94696 16.3197 7.63756 14.5599 6.59452 12.7978C5.42654 10.8246 4.64502 8.93422 4.64502 7.54741C4.64502 4.79601 7.06981 2.5 10.145 2.5C13.2202 2.5 15.645 4.79601 15.645 7.54741Z" fill="#009A6D" stroke="#009A6D"/>
        <circle cx="10.145" cy="8" r="2.5" fill="white" stroke="#009A6D"/>
      </svg>
    </span>
  </div>
  `)

  var circlePlacemark = new ymaps.Placemark([55.7869050689375,37.67187549999997],{}, {
    iconLayout: placemarkDiv,
    iconShape: {
      type: 'Circle',
      coordinates: [0, 0],
      radius: 30
    }
  })
  myMap.geoObjects.add(circlePlacemark);
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('rulerControl');
}

ymaps.ready(initMapMoscow)