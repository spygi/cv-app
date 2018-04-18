/*global $ */
/*jshint unused:false */
var app = app || {};

var properties = {
    breakpointSmall: "480",
    devEnvironment: document.location.href.match("localhost") !== false
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
