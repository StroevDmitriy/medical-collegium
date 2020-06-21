/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.sass":
/*!****************************!*\
  !*** ./src/css/style.sass ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(document).ready( function(){
  jQuery('.discount-slider').slick({
    arrows: true,
    slidesToShow: 3,
    margin: 10,
    navText : ["",""],
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });

  jQuery('.photo-slider').slick({
    arrows: true,
    slidesToShow: 3,
    infinite: true,
    margin: 0,
    navText : ["",""],
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });

  jQuery('.doctors-slider').slick({
    arrows: true,
    slidesToShow: 2,
    margin: 10,
    navText : ["",""],
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  jQuery('.equipment-slider').slick({
    arrows: true,
    slidesToShow: 3,
    margin: 10,
    navText : ["",""],
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });

  jQuery('.review-slider').slick({
    arrows: true,
    slidesToShow: 3,
    navText : ["",""],
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });


  //Burger buttonclick
  document.getElementById('burger-button').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementsByClassName('main-nav')[0].classList.toggle('active');
    document.getElementsByTagName('body')[0].classList.toggle('ovh');
  })

  // Header constriction on scroll
  window.addEventListener('scroll', function() {
    let body = $('body');
    let bodyTop = $('html').offset().top+40;
    let topOfWindow = $(window).scrollTop();

    if (bodyTop < topOfWindow) {
      $('.header').addClass('active');
    }
    else{
      $('.header').removeClass('active');
    }
  });

  //Submenu opening
  {
    function removeActiveClass(item) {
      item.classList.remove('active');
    }

    function toggleActiveClass() {
      this.classList.toggle('active');
    }

    function activateSubmenu() {
      for (let item of document.querySelectorAll('nav > ul > li.submenu')) {
        removeActiveClass(item);
      }

      if (window.matchMedia("(max-width: 991px)").matches) {
        screenSmall = true;
        
        for (let item of document.querySelectorAll('nav > ul > li.submenu')) {
          item.addEventListener('click', toggleActiveClass);
        }
      } else {
        screenSmall = false;

        for (let item of document.querySelectorAll('nav > ul > li.submenu')) {
          item.removeEventListener('click', toggleActiveClass);
        }
      }
    }

    let screenSmall = window.matchMedia("(max-width: 991px)").matches;

    activateSubmenu();

    window.onresize = function () {
      if (!window.matchMedia("(max-width: 991px)").matches == screenSmall)
      { activateSubmenu(); }
    };
  }

  //Main screen services list show/hide
  {
    function displayList(classes) {
      classes.add('display');
    };
    function hideList(classes) {
      classes.remove('display');
    };
    function shiftList(classes) {
      classes.add('shift');
    }
    function unshiftList(classes) {
      classes.remove('shift');
    }

    for (let item of document.querySelectorAll('.index .main-screen .service-block')) {
      item.addEventListener('mouseenter', function() {
        let listClasses = this.querySelector('.services-list').classList;

        displayList(listClasses);

        setTimeout(shiftList, 300, listClasses);
      });

      item.addEventListener('mouseleave', function() {
        let listClasses = this.querySelector('.services-list').classList;

        setTimeout(unshiftList, 300, listClasses);

        hideList(listClasses);
      })
    }
  }
  
  //Anchors scroll
  {
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        if (anchor.getAttribute('href')[0] == '#'){
          e.preventDefault()
          
          const blockID = anchor.getAttribute('href').substr(1);
        
          document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    }
  }

  //Tab tumblers
  {
    let tmblrs = Array.from( document.getElementsByClassName('tmblr-item') );

    tmblrs.forEach( function(item) {
      item.addEventListener('click', function() {
        let itemNum = this.getAttribute("data-num");
        let tabItems = jQuery('.tab-item');

        tmblrs.forEach( function(item) {
          if (item.classList.contains('active'))
            item.classList.remove('active');
        });

        this.classList.toggle('active');

        for (item of tabItems) {
          item.getAttribute("data-num") == itemNum ?
            jQuery(item).slideDown():
            jQuery(item).slideUp();
        }

      })
    });
  }

  //Choose doctor to reg
  {
    let btns = Array.from( document.querySelectorAll('.doctor-card .reg-btn') );

    btns.forEach( function(btn) {
      btn.addEventListener('click', function() {
        let name = btn.getAttribute('data-name');
        let defaultOption = document.querySelector('#reg-form select option');
        let optionToSelect = document.querySelector('#reg-form select option[data-name="'+name+'"]');

        if (optionToSelect) optionToSelect.selected = true;
        else defaultOption.selected = true;
      });
    })
  }

});



/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/main.js ./src/css/style.sass ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! ./src/css/style.sass */"./src/css/style.sass");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map