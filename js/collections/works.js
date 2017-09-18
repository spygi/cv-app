/*global Backbone */
var app = app || {};

(function () {
    'use strict';

    var breakpointSmall = 480; // taken from CSS
    var shortDatesFormat = "MM/YY";
    var longDatesFormat = "MMMM YYYY";
    var doodleCto = {
        id: "doodle-cto",
        title: "CTO",
        company: "Doodle AG",
        location: "Zurich",
        startDate: moment(new Date(2016, 1, 1)),
        finishDate: moment(new Date(2017, 7, 1))
    };

    var Works = Backbone.Collection.extend({
        model: app.WorkModel,

        initialize: function () {
            if (window.innerWidth < breakpointSmall) {
                doodleCto.dates = doodleCto.startDate.format(shortDatesFormat) + " - " + doodleCto.finishDate.format(shortDatesFormat);
            } else {
                doodleCto.dates = doodleCto.startDate.format(longDatesFormat) + " - " + doodleCto.finishDate.format(longDatesFormat);
            }
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