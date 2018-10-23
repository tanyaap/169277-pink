'use strict'

  var mainMenu = document.querySelector('.main-menu');
  var menuButton = document.querySelector('.menu-header-styles__button');

  mainMenu.classList.remove('main-menu--nojs');

  menuButton.addEventListener('click', function() {
    if (mainMenu.classList.contains('main-menu--closed')) {
      mainMenu.classList.remove('main-menu--closed');
      mainMenu.classList.add('main-menu--opened');
    } else {
      mainMenu.classList.add('main-menu--closed');
      mainMenu.classList.remove('main-menu--opened');
    }
  });
