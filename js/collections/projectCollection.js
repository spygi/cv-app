/*global Backbone */
var app = app || {};

(function () {
    'use strict';

    var modelJson = [{
        title: "Timetrckr",
        repoName: "timetrckr",
        link: "https://github.com/spygi/timetrckr"
    }, {
        title: "Your pics on a map",
        repoName: "oceania-2017",
        additional: "Google Maps API, Github pages",
        link: "https://github.com/spygi/oceania-2017"
    }, {
        title: "This site",
        repoName: "cv-app",
        additional: "BackboneJS, Github API, TravisCI, Heroku"
    }];

    var ProjectCollection = Backbone.Collection.extend({
        model: app.ProjectModel,
        deferredModels: [],

        initialize: function () {
            var _this = this;
            _.each(modelJson, function (model) {
                var deferredDescription = $.Deferred(), deferredLanguages = $.Deferred(), deferredModel = $.Deferred();

                $.get({
                    url: 'https://api.github.com/repos/spygi/' + model.repoName,
                    cache: true
                }).done(function (result, status, xhr) {
                    model.description = result.description || "";
                    deferredDescription.resolve(model);
                });

                $.get({
                    url: 'https://api.github.com/repos/spygi/' + model.repoName + '/languages',
                    cache: true
                }).done(function (result) {
                    model.tech = [];
                    for ( var language in result) {
                        model.tech.push(language);
                    }
                    if (model.additional) {
                        model.tech.push(model.additional);
                    }
                    model.tech = model.tech.join(", ");
                    deferredLanguages.resolve(model);
                });

                this.deferredModels.push(deferredModel.promise());
                $.when(deferredDescription, deferredLanguages).done(function (model) {
                    var m = new app.ProjectModel(model);
                    _this.add(m);
                    deferredModel.resolve(m);
                });
            }, this);
        },

        // render the collection by calling the render() for all models it contains
        render: function () {
            _.each(this.deferredModels, function (deferredModel) {
                deferredModel.done(function (m) {
                    var view = new app.ProjectView({
                        model: m
                    });
                    $('.examples').append(view.render().el);
                });
            });
        }
    });

    app.ProjectCollection = new ProjectCollection();
})();