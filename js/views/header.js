/*global Backbone, jQuery, _ */
var app = app || {};

(function ($) {
    'use strict';

    app.HeaderView = Backbone.View.extend({
        render: function () {
            $.post({
                url: "https://api.soundoftext.com/sounds",
                contentType: "application/json",
                data: JSON.stringify({
                    "engine": "Google",
                    "data": {
                        "text": "Σπύρος",
                        "voice": "el-GR"
                    }
                }),
                processData: false
            }).done(function (result) {
                $.get("https://api.soundoftext.com/sounds/" + result.id).done(function (result) {
                    $(".pronunciation").click(function () {
                        new Audio(result.location).play();
                    }).show();
                });
            });

            var options = {
                stringsElement: ".typed-strings",
                typeSpeed: 50,
                backDelay: 400,
                smartBackspace: true,
                onStringTyped: function () {
                    $('.typed-cursor').addClass("blink-me");
                }
            };

            var typed = new Typed(".other-stuff", options);
            return this;
        }
    });

    app.HeaderView = new app.HeaderView();
})(jQuery);
