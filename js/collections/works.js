/*global Backbone */
var app = app || {};

(function () {
    'use strict';

    var breakpointSmall = 480; // taken from CSS
    var doodleCto = {
        id: "doodle-cto",
        "title": "CTO",
        "company": "Doodle AG, Zurich",
        "startDate": new Date(2016, 1, 1),
        "finishDate": new Date(2017, 8, 1),
        "description": ""
    };

    var Works = Backbone.Collection.extend({
        model: app.WorkModel,

        initialize: function () {
            this.add(new app.WorkModel(doodleCto));
        },

        // render the collection by calling the render() for all models it contains
        render: function () {
            _.each(this.models, function (model) {
                var view = new app.WorkView({model: model});
                view.render();
            });
        }
    });

    app.WorkCollection = new Works(); // global collection of "works"
})();