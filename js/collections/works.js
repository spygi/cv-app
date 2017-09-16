/*global Backbone */
var app = app || {};

(function () {
    'use strict';

    var Works= Backbone.Collection.extend({
        model: app.WorkModel,
        initialize: function(){
            this.add(new app.WorkModel());
        },

        // render a collection by calling the render() for all models it containts
        render: function() {
            debugger;

            _.each(this.models, function (model) {
                var view = new app.WorkView({model: model});
                view.render();
            });
        }
    });

    app.WorkCollection = new Works();
})();