/*global Backbone, jQuery, _ */
var app = app || {};

(function ($) {
    'use strict';

    var breakpointSmall = 480; // taken from CSS
    var shortDatesFormat = "MM/YY";
    var longDatesFormat = "MMM. 'YY";

    app.WorkView = Backbone.View.extend({
        shortTemplate: _.template($('#short-work-template').html()),
        longTemplate: _.template($('#long-work-template').html()),

        // From Backbone comments:
        // If `this.el` is a string, pass it through `$()`, take the first
        // matching element, and re-assign it to `el`. Otherwise, create
        // an element from the `id`, `className` and `tagName` properties.
        className: 'custom-card',

        events: {
            "click": function () {
                // From Backbone docs: Omitting the selector binds the event to `this.el`.
                this.el.classList.toggle("clicked");
            }
        },

        initialize: function (options) {
            this.el.id = options.model.get("id") ? options.model.get("id") : "";

            if (window.innerWidth > breakpointSmall) {
                options.model.set("dates", options.model.get("startDate").format(longDatesFormat) + " - " + options.model.get("finishDate").format(longDatesFormat));
            } else {
                options.model.set("dates", options.model.get("startDate").format(shortDatesFormat) + " - " + options.model.get("finishDate").format(shortDatesFormat));
            }
        },

        render: function () {
            if (window.innerWidth > breakpointSmall) {
                this.$el.html(this.longTemplate(this.model.toJSON()));
            } else {
                this.$el.html(this.shortTemplate(this.model.toJSON()));
            }
            return this;
        }
    });
})(jQuery);
