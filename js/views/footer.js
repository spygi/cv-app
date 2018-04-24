/*global Backbone, jQuery, _ */
var app = app || {};

(function ($) {
    'use strict';

    app.FooterView = Backbone.View.extend({
        render: function () {
            $.post({
                url: "https://api.soundoftext.com/sounds",
                contentType: "application/json",
                cache: true,
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

            return this;
        }
    });

    app.FooterView = new app.FooterView();
})(jQuery);
