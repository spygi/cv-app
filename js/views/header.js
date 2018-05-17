/*global Backbone, jQuery, _ */
var app = app || {};

(function ($) {
    'use strict';

    app.HeaderView = Backbone.View.extend({
        render: function () {
            var options = {
                stringsElement: ".typed-strings",
                typeSpeed: 30,
                backDelay: 1000,
                smartBackspace: true,
                cursorChar: "_",
                onStringTyped: function () {
                    $('.typed-cursor').addClass("blink-me");
                },
                onComplete: function () {
                    app.Dispatcher.trigger(app.Dispatcher.HELLO);
                }
            };

            var typed = new Typed(".other-stuff", options);
            return this;
        }
    });

    app.HeaderView = new app.HeaderView();
})(jQuery);
