﻿function ScrollToTop () {

    var THRESHOLD = 500;
    var DIRECTION_UP = 'up';
    var DIRECTION_DOWN = 'down';
    var SCROLL_DELAY = 500;
    var SCROLL_EASE = 'swing';

    this.init = function () {
        this.$window = $(window);
        this.$container = $('html, body');
        this.$el = $('.js-scroll-top');
        this.direction = DIRECTION_DOWN;

        this.updateCurrentPosition();
        this.checkEdges();
        this.mapEvents();
    };

    this.mapEvents = function () {
        this.$window.on('scroll', this.onScroll.bind(this));
        this.$el.on('click', this.onClick.bind(this));
    };

    this.onScroll = function () {
        this.updateCurrentPosition();
        this.checkEdges();
    };

    this.onClick = function () {
        this.scrollTop();
    };

    this.updateCurrentPosition = function () {
        this.currentPosition = this.$window.scrollTop();
    };

    this.checkEdges = function () {
        if (this.direction === DIRECTION_DOWN && this.currentPosition > THRESHOLD) {
            this.direction = DIRECTION_UP;
            this.toggleVisibility(true);
            return;
        }

        if (this.direction === DIRECTION_UP && this.currentPosition < THRESHOLD) {
            this.direction = DIRECTION_DOWN;
            this.toggleVisibility(false);
        }
    };

    this.toggleVisibility = function (visible) {
        if (visible) {
            this.$el.fadeIn();
        } else {
            this.$el.stop(true, true).fadeOut();
        }
    };

    this.scrollTop = function () {
        this.$container.animate({
            scrollTop: 0
        }, SCROLL_DELAY, SCROLL_EASE);

        return false;
    }

}

var topScroll = new ScrollToTop();
topScroll.init();


function Anchorer () {

    var TEXT_TO_ID_REGEX = /(\W)/igm;
    var GO_TO_ANCHOR_DELAY = 100;
    var SCROLL_DELAY = 500;
    var SCROLL_EASE = 'swing';

    this.$container = $('html, body');
    this.$el = $('.js-anchorer');
    this.$targets = $('h1, h2, h3', this.$el);
    this.headerHeight = document.querySelector('.title-bar').clientHeight;

    this.init = function() {

        this.appendAnchors();
        this.mapEvents();
    };

    this.mapEvents = function() {
        this.$el.on('click', '.js-anchorer__trigger', this.onClick.bind(this));
    };

    this.onClick = function(e) {
        var that = this;
        var href = $(e.currentTarget).attr('href');

        this.scrollToAnchor(href, function () {
            that.setHash(href);
        });

        return false;
    };

    this.appendAnchors = function() {
        var that = this;

        this.$targets.each(function (index, element) {
            var $element = $(element);
            var text = $element.text().trim() || '';
            $element.contents().filter(function () {
                return this.nodeType === 3;
            }).remove();
            var id = that.normalize(text);

            $element.prepend(that.createAnchor(id, text));
        });
    };

    this.normalize = function(text) {
        if (!text) {
            return 'here';
        }

        return text
            .toLowerCase()
            .replace(TEXT_TO_ID_REGEX, '-');
    };

    this.createAnchor = function(id, text) {
        return `<a class="a-anchor js-anchorer__trigger" href="#${id}"><span class="a-anchor__target" id="${id}"></span>${text}</a>`;
    };

    this.scrollToAnchor = function(href, callback) {

        if (href.length < 2) {
            return;
        }

        var $anchor = $(href);

        if ($anchor.length < 1) {
            return;
        }

        var top = $anchor.offset().top - this.headerHeight;
        console.log(top);
        this.$container.animate({
            scrollTop: top
        }, SCROLL_DELAY, SCROLL_EASE, callback);
    };

    this.setHash = function(value) {
        window.location.hash = value;
    }

}

var anchorer = new Anchorer();
anchorer.init();


var menuItems;
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function(){
        menuItems = document.querySelectorAll('.navigation .has-children');

        menuItems.forEach(function (item) {
            item.addEventListener('mouseenter', function (e) {
                var menuItem = e.currentTarget;


                setTimeout(function () {
                    var container = menuItem.querySelector('.navigation .has-children > .sub-menu');

                    if(!container.classList.contains('ps') && container.clientHeight > window.innerHeight - 100){
                        var scrollbar = new PerfectScrollbar(container, {
                            useBothWheelAxes: false,
                            suppressScrollX: true
                        });
                    }
                },500)
            })
        });
        }, 500);
});

function AsideNavCloser(bodyOverlay, container) {
    this.bodyOverlay = document.querySelector(bodyOverlay);
    this.container = document.getElementById(container);

    this.init = function () {
        var closeButton = this.createButton();
        this.container.appendChild(closeButton);
        this.mapEvents(closeButton);
    };
    
    this.mapEvents = function (elem) {
        var self = this;
        elem.addEventListener('click', function (e) {
            if(self.bodyOverlay == null){
                var context = self;
                var int = setInterval(function () {
                    if(context.bodyOverlay == null){
                        context.bodyOverlay = document.querySelector('.js-off-canvas-exit');
                    } else {
                        context.bodyOverlay.click();
                        clearInterval(int);
                    }
                }, 100);
            } else {
                self.bodyOverlay.click();
            }
        })
    };
    
    this.createButton = function () {
        var closeButton = document.createElement('span');
        closeButton.classList.add('aside-close-button');
        return closeButton;
    }
}

var asideNavCloseButton = new AsideNavCloser('.js-off-canvas-exit', 'offCanvas');
document.addEventListener("DOMContentLoaded", asideNavCloseButton.init());


function ToggleSearch() {

    this.search = document.querySelector('.main-section .search');
    this.container = document.querySelector('.title-bar-section .menu-icon-container');
    this.toggleButton = document.createElement('span');
    this.toggleOverlay = document.createElement('div');

    this.init = function () {

        this.appendElements();
        this.mapEvents();
    };

    this.mapEvents = function () {
        this.toggleButton.addEventListener('click' , this.toggleButtonAction.bind(this));
        this.toggleOverlay.addEventListener('click', this.toggleButtonAction.bind(this));
    };

    this.toggleButtonAction = function (event) {
        event.stopPropagation();
        this.search.classList.toggle('is-visible');
        this.toggleOverlay.classList.toggle('active');

    }

    this.appendElements = function () {
        this.toggleButton.classList.add('search-toggle-button');
        this.toggleOverlay.classList.add('search-toggle-overlay');
        this.container.appendChild(this.toggleButton);
        this.search.parentNode.appendChild(this.toggleOverlay);
    }
}

var showSearchButton = new ToggleSearch();
document.addEventListener("DOMContentLoaded", showSearchButton.init());