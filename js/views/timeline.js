/*global Backbone, jQuery, _ */
var app = app || {};

(function ($) {
    'use strict';

    app.TimelineView = Backbone.View.extend({
        render: function () {
            // can't use JQuery for the following due to browsers filtering out <head> elements,
            // see https://stackoverflow.com/questions/6417157/jquery-selector-for-link-elements-in-head
            var link = document.querySelector('link[rel="import"]');
            $('.timeline').append(link.import.documentElement.getElementsByTagName('svg'));

            window.setTimeout(function () {
                $('.first').toggleClass('visible');
            }, 1000);
            window.setTimeout(function () {
                $('.second').toggleClass('visible');
            }, 2000);
            window.setTimeout(function () {
                $('.third').toggleClass('visible');
            }, 3000);
            window.setTimeout(function () {
                $('.fourth').toggleClass('visible');
            }, 3500);
            window.setTimeout(function () {
                $('.fifth').toggleClass('visible');
            }, 4500);

            return this;
        }
    });

    app.TimelineView = new app.TimelineView();
})(jQuery);
