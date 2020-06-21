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

