/*global Backbone, jQuery, _ */
var app = app || {};

(function ($) {
    'use strict';

    app.AppView = Backbone.View.extend({
        el: '#cv-app',

        initialize: function (properties) {
            this.properties = properties;
            this.techView = new app.TechView(properties);
        },

        render: function () {
            app.HeaderView.render();
            app.TimelineView.render(this.properties);
            this.techView.render();
            app.ProjectCollection.render();

            if (!this.properties.devEnvironment) {
                this.listenToOnce(app.Dispatcher, app.Dispatcher.HELLO, app.TimelineView.show);
            }

            return this;
        }
    });
})(jQuery);
