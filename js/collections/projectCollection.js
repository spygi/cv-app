/*global Backbone */
var app = app || {};

(function () {
    'use strict';

    var modelJson = [{
        id: "timetrckr",
        title: "Timetrckr",
        link: "https://spygi.github.io/timetrckr",
        platform: "github",
        description: "Track your working hours automagically",
        tech: "Bash, Mac plist"
    }, {
        id: "oceania",
        title: "Oceania",
        link: "https://github.com/spygi/oceania",
        platform: "github",
        description: "Put your photos in a map",
        tech: "Vanilla JS, Google Maps API, Github pages"
    }, {
        id: "personal-site",
        title: "Personal site",
        link: "https://github.com/spygi/cv-app",
        platform: "github",
        description: "This site right here",
        tech: "SCSS, BackboneJS, TravisCI, Heroku"
    }, {
        id: "personal-blog",
        title: "Tech blog",
        link: "https://tech.spygi.me",
        platform: "github",
        description: "Tech blog",
        tech: "Jekyll, TravisCI, Github pages"
    }];

    var ProjectCollection = Backbone.Collection.extend({
        model: app.ProjectModel,

        initialize: function () {
            _.each(modelJson, function (model) {
                this.add(new app.ProjectModel(model));
            }, this);
        },

        // render the collection by calling the render() for all models it contains
        render: function () {
            _.each(this.models, function (model) {
                var view = new app.ProjectView({
                    model: model
                });
                $('.examples').append(view.render().el);
            });
        }
    });

    app.ProjectCollection = new ProjectCollection();
})();