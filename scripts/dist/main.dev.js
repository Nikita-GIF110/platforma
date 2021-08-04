"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var mask = document.querySelector('.mask');
  window.addEventListener('load', function () {
    mask.classList.add('hide');
    setTimeout(function () {
      mask.remove();
    }, 500);
  });
  var anchorLinks = document.querySelectorAll('.header_navigation_list_link a');

  for (var i = 0; i < anchorLinks.length; i++) {
    anchorLinks[i].addEventListener('click', function (e) {
      var blockId = e.target.getAttribute('href').substr(1);

      if (window.innerWidth > 992) {
        document.getElementById(blockId).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      } else {
        header.classList.remove('show');
        menuBtn.classList.toggle('show');
        document.getElementById(blockId).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }

  var menuBtn = document.querySelector('.m-menu-btn');
  var header = document.querySelector('.header');
  menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    menuBtn.classList.toggle('show');
    header.classList.toggle('show');
  });
  var contentLinks = document.querySelectorAll('.navigation_link');
  var contentTabs = document.querySelectorAll('.block');
  contentLinks.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      var currentLink = item;
      var linkId = currentLink.getAttribute('data-tab');
      var currentTab = document.querySelector(linkId);

      if (!currentLink.classList.contains('active')) {
        contentLinks.forEach(function (item) {
          item.classList.remove('active');
        });
        contentTabs.forEach(function (item) {
          item.classList.remove('active');
        });
        currentLink.classList.add('active');
        currentTab.classList.add('active');
      }
    });
  });
  var accordionLinks = document.querySelectorAll('.accordion_item_link');

  var _loop = function _loop(_i) {
    accordionLinks[_i].addEventListener('click', function (e) {
      e.preventDefault();

      if (!accordionLinks[_i].classList.contains('active')) {
        for (var _i2 = 0; _i2 < accordionLinks.length; _i2++) {
          accordionLinks[_i2].parentElement.classList.remove('active');
        }

        accordionLinks[_i].parentElement.classList.add('active');
      }
    });
  };

  for (var _i = 0; _i < accordionLinks.length; _i++) {
    _loop(_i);
  }

  document.querySelector('.accordion_item_link').click();
});