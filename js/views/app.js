/*global Backbone, jQuery, _ */
var app = app || {};

(function ($) {
    'use strict';

    app.AppView = Backbone.View.extend({
        el: '#cv-app',

        initialize: function (properties) {
            app.TimelineView.render();
            var techView = new app.TechView(properties);
            techView.render();
            app.ProjectCollection.render();
        },

        render: function () {
            return this;
        }
    });
})(jQuery);
