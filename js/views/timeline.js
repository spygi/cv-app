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

            var that = this;
            $('#timeline-placeholder').load('../../templates/timeline.html', function () {
                that.show();
                return that;
            });

            return this;
        }
    });

    app.TimelineView = new app.TimelineView();
})(jQuery);
