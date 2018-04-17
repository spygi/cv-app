/*global $ */
/*jshint unused:false */
var app = app || {};

var properties = {
    breakpointSmall: "480"
};

$(function () {
    'use strict';

    var appView = new app.AppView(properties);

    // act as a mediator
    app.Dispatcher = _.extend({
        HELLO: 'interstitial:loaded'
    }, Backbone.Events);

    appView.render();
});
