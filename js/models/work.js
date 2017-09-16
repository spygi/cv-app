/*global Backbone */
var app = app || {};

(function () {
    'use strict';
    var doodle_cto = {
        "title": "CTO",
        "company": "Doodle AG, Zurich",
        "startDate": new Date(2016, 1, 1),
        "finishDate": "",
        "description": ""
    };

    var extended_description = "Key responsibilities: people management of 11 app and web developers, recruiting and team building, platform roadmap, service availability and architecture, technological strategy and vision, representation of engineering in Doodle’s upper management and board.\n About engineering culture: I introduced regular 1-1s with all devs, sponsored education and workshop requests for developers, introduced a 360 review process (inspired by Google) which was eventually adopted by the rest of the company, advocated opening up Doodle’s API to external developers. Highlights on scaling the team: I proposed a new company structure (based on Spotify) which was accepted by the rest of management team, introduced a new hiring process, mentored team leads and proposed Doodle’s first career path for engineers. These enabled Doodle to double its web developers in a year while also integrating and instilling a healthy engineering culture across all remote offices (Zürich, Berlin, Tel Aviv).\n Highlights on technical work: introduced Scrum in the platform team, pushed further Doodle's move to the cloud, active monitoring of servers and better testing environments. These allowed Doodle to redesign its whole service and also experiment with new micro services and technologies, while maintaining a 99.999% availability level.";
    var short_description = "It was cool";

    app.WorkModel = Backbone.Model.extend({
        defaults: {
            title: "A title"
        }
    });
})();
