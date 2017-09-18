/*global Backbone */
var app = app || {};

(function () {
    'use strict';

    var doodleCto = {
        id: "doodle-cto",
        title: "CTO",
        company: "Doodle AG",
        link: "https://www.doodle.com",
        location: "Zurich",
        startDate: moment(new Date(2016, 1, 1)),
        finishDate: moment(new Date(2017, 7, 1))
    };
    var doodleDev = {
        id: "doodle-dev",
        title: "Software Engineer",
        company: "Doodle AG",
        link: "https://www.doodle.com",
        location: "Zurich",
        startDate: moment(new Date(2016, 1, 1)),
        finishDate: moment(new Date(2017, 7, 1))
    };

    var modelJson = [doodleCto, doodleDev];


    var Works = Backbone.Collection.extend({
        model: app.WorkModel,

        initialize: function () {
            _.each(modelJson, function (model) {
                this.add(new app.WorkModel(model));
            }, this);
        },

        // render the collection by calling the render() for all models it contains
        render: function () {
            _.each(this.models, function (model) {
                var view = new app.WorkView({model: model});
                $('.work').append(view.render().el);
            });
        }
    });

    app.WorkCollection = new Works(); // global collection of "works"
})();