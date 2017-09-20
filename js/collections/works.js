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
        finishDate: moment(new Date(2017, 7, 1)),
        description: "Key responsibilities: team lead and recruiting, platform roadmap, service availability and architecture, technological strategy and vision, representation of engineering in Doodle’s upper management and board.",
        backDescription: "Team lead, recruiting, roadmaps, strategy & vision"
    };
    var doodleDev = {
        id: "doodle-dev",
        title: "Software Engineer",
        company: "Doodle AG",
        link: "https://www.doodle.com",
        location: "Zurich",
        startDate: moment(new Date(2013, 8, 1)),
        finishDate: moment(new Date(2016, 0, 1)),
        description: "Full stack engineer with focus on the back-end. Additional responsibilities: scrum-master, recruiting/onboarding of new engineers, setting up and maintaining Doodle’s documentation."
    };
    var dacuda = {
        id: "dacuda",
        title: "Software Engineer",
        company: "Dacuda AG",
        link: "https://www.dacuda.com",
        location: "Zurich",
        startDate: moment(new Date(2012, 11, 1)),
        finishDate: moment(new Date(2013, 6, 1)),
        description: "Dacuda develops smart scanning technologies for consumer electronics. I worked on a dashboard for critical business metrics and a demo proposal for the European Internet of Things project."
    };

    var modelJson = [doodleCto, doodleDev, dacuda];


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