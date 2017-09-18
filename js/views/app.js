/*global Backbone, jQuery, _ */
var app = app || {};

(function ($) {
    'use strict';

    app.AppView = Backbone.View.extend({
        el: '#cv-app',

        initialize: function () {
            app.WorkCollection.render();
        },

        render: function () {
            return this;
        }
    });
})(jQuery);