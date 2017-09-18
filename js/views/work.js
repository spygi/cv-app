/*global Backbone, jQuery, _ */
var app = app || {};

(function ($) {
    'use strict';

    app.WorkView = Backbone.View.extend({
        el: '.work',

        template: _.template($('#work-template').html()),

        initialize: function (options) {
            this.$el[0].id = options.model.get("id") ? options.model.get("id") : "";
        },

        render: function () {
            debugger;
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
})(jQuery);
