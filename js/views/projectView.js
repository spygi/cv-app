/*global Backbone, jQuery, _ */
var app = app || {};

(function ($) {
    'use strict';

    var breakpointSmall = 480; // taken from CSS

    app.ProjectView = Backbone.View.extend({
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

        mapIcons: {
            "github": '<i class="fab fa-github"></i>'
        },

        initialize: function (options) {
            this.shortTemplate = $.Deferred();
            var _this = this;
            $.get("../../templates/projects.html", function (data) {
                _this.shortTemplate.resolve(_.template($(data).html()));
            });

            this.el.id = options.model.get("id") ? options.model.get("id") : "";
        },

        render: function () {
            var _this = this;
            if (window.innerWidth > breakpointSmall) {
                this.$el.html(this.longTemplate(this.model.toJSON()));
            } else {
                this.shortTemplate.done(function (template) {
                    _this.model.set("icon", _this.mapIcons[_this.model.get("platform")]);
                    _this.$el.html(template(_this.model.toJSON()));
                });
            }
            return this;
        }
    });
})(jQuery);
