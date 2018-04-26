/*global Backbone, jQuery, _ */
var app = app || {};

(function ($) {
    'use strict';

    app.ProjectView = Backbone.View.extend({
        // From Backbone comments:
        // If `this.el` is a string, pass it through `$()`, take the first
        // matching element, and re-assign it to `el`. Otherwise, create
        // an element from the `id`, `className` and `tagName` properties.
        className: 'custom-card',
        tagName: 'a',

        initialize: function (options) {
            this.template = $.Deferred();
            var _this = this;
            $.get("../../templates/projects.html", function (data) {
                _this.template.resolve(_.template($(data).html()));
            });
            this.el.id = options.model.get("repoName") || "";
            this.el.href = "https://github.com/spygi/" + options.model.get("repoName");
            this.el.target = "_blank";
        },

        render: function () {
            var _this = this;
                this.template.done(function (template) {
                    _this.$el.html(template(_this.model.toJSON()));
                });
            return this;
        }
    });
})(jQuery);
