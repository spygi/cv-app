/*global Backbone, jQuery, _ */
var app = app || {};

(function ($) {
    'use strict';

    app.AppView = Backbone.View.extend({
        el: '#cv-app',

        initialize: function (properties) {
            this.techView = new app.TechView(properties);
        },

        render: function () {
            app.HeaderView.render();
            app.TimelineView.render();
            this.techView.render();
            app.ProjectCollection.render();

            this.listenTo(app.Dispatcher, app.Dispatcher.HELLO, app.TimelineView.show);

            return this;
        }
    });
})(jQuery);
