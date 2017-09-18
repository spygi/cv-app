/*global Backbone */
var app = app || {};

(function () {
    'use strict';

    app.WorkModel = Backbone.Model.extend({
        defaults: {
            title: "Position",
            company: "Company name, City",
            dates: "01/16 - 01/17",
            description: "",
            shortMeta: ""
        }
    });
})();
