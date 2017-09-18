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

        initialize: function (options) {
            this.el.id = options.model.get("id") ? options.model.get("id") : "";

            if (window.innerWidth > breakpointSmall) {
                options.model.set("dates", options.model.get("startDate").format(longDatesFormat) + " - " + options.model.get("finishDate").format(longDatesFormat));
            } else {
                options.model.set("shortMeta", options.model.get("title") + ", " + options.model.get("company"));
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
