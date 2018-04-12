/*global Backbone, jQuery, _ */
var app = app || {};

(function ($) {
    'use strict';

    app.TimelineView = Backbone.View.extend({
        render: function () {
            // can't use JQuery for the following due to browsers filtering out <head> elements,
            // see https://stackoverflow.com/questions/6417157/jquery-selector-for-link-elements-in-head
            var link = document.querySelector('link[rel="import"]');
            $('.timeline').prepend(link.import.documentElement.getElementsByTagName('svg'));

            window.setTimeout(function () {
                $('.first').toggleClass('visible');
            }, 500);
            window.setTimeout(function () {
                $('.second').toggleClass('visible');
            }, 1500);
            window.setTimeout(function () {
                $('.third').toggleClass('visible');
            }, 2500);
            window.setTimeout(function () {
                $('.fourth').toggleClass('visible');
            }, 3000);
            window.setTimeout(function () {
                $('.fifth').toggleClass('visible');
            }, 4000);
            window.setTimeout(function () {
                $('.timeline-more').toggleClass('visible');
            }, 4000);

            return this;
        }
    });

    app.TimelineView = new app.TimelineView();
})(jQuery);
