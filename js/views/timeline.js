/*global Backbone, jQuery, _ */
var app = app || {};

(function ($) {
    'use strict';

    app.TimelineView = Backbone.View.extend({
        show: function() {
            $('.first').toggleClass('visible');

            window.setTimeout(function () {
                $('.second').toggleClass('visible');
            }, 1000);
            window.setTimeout(function () {
                $('.third').toggleClass('visible');
            }, 2000);
            window.setTimeout(function () {
                $('.fourth').toggleClass('visible');
            }, 2500);
            window.setTimeout(function () {
                $('.fifth').toggleClass('visible');
            }, 3500);
            window.setTimeout(function () {
                $('.social').toggleClass('visible');
            }, 3500);
        },

        render: function (properties) {
            this.devEnvironment = properties.devEnvironment;

            // can't use JQuery for the following due to browsers filtering out <head> elements,
            // see https://stackoverflow.com/questions/6417157/jquery-selector-for-link-elements-in-head
            var link = document.querySelector('link[rel="import"]');
            $('.timeline .social').before(link.import.documentElement.getElementsByTagName('svg'));

            if (this.devEnvironment) {
                this.show();
            }

            return this;
        }
    });

    app.TimelineView = new app.TimelineView();
})(jQuery);
