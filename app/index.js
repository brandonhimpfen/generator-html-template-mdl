'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');

var HTMLTemplateGenerator = yeoman.generators.Base.extend({

    prompting: function() {
        var done = this.async();

        var prompts = [{
            name: 'appName',
            message: 'What is your site\'s name?'
        }];

        this.prompt(prompts, function(props) {
            this.appName = props.appName;

            done();
        }.bind(this));

    },

    structure: function() {
        this.mkdir('app');
        this.mkdir('app/css');
        this.mkdir('app/images');
        this.mkdir('app/js');
    },

    files: function() {
        var context = {
            site_name: this.appName
        };

        this.template("_403.html", "app/403.html", context);
        this.template("_404.html", "app/404.html", context);
        this.template("_500.html", "app/500.html", context);
        this.template("_index.html", "app/index.html", context);

        this.copy(".htaccess", "app/.htaccess");

        this.copy("browserconfig.xml", "app/browserconfig.xml");
        this.copy("crossdomain.xml", "app/crossdomain.xml");
        this.copy("sitemap.xml", "app/sitemap.xml");

        this.copy("favicon.ico", "app/favicon.ico");
        this.copy("humans.txt", "app/humans.txt");
        this.copy("robots.txt", "app/robots.txt");

        this.copy("css/main.css", "app/css/main.css");
        this.copy("css/main.css.map", "app/css/main.css.map");
        this.copy("css/main.min.css", "app/css/main.min.css");

        this.copy("js/html5shim.min.js", "app/js/html5shim.min.js");
        this.copy("js/jquery.min.js", "app/js/jquery.min.js");
        this.copy("js/modernizr.min.js", "app/js/modernizr.min.js");

        this.copy("LICENSE", "app/LICENSE");
        this.copy("README.md", "app/README.md");

    },

    end: function () {

    }

});

module.exports = HTMLTemplateGenerator;
