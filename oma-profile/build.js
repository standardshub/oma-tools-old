#!/usr/local/bin/node

var fs   = require("fs")
,   pth  = require("path")
,   r    = require("requirejs")
,   version = JSON.parse(fs.readFileSync(pth.join(__dirname, "../package.json"), "utf-8")).version
,   versioned = pth.join("./", "respec-w3c-common-" + version + ".js")
;

function build (options, cb) {
    var config = {
        baseUrl:    pth.join(__dirname, "./")
    ,   optimize:   options.optimize || "uglify2"
    ,   paths:  {
            requireLib: "../node_modules/requirejs/require",
            domReady:   "../node_modules/respec/js/domReady",
            core:       "../node_modules/respec/js/core/",
            text:       "../node_modules/respec/js/text",
            tmpl:       "../node_modules/respec/js/tmpl",
            handlebars: "../node_modules/respec/js/handlebars",
            shortcut:   "../node_modules/respec/js/shortcut",
            webidl2:    "../node_modules/respec/js/webidl2",
            w3c:         "../node_modules/respec/js/w3c"
        }
    ,   shim:   {
            "shortcut": {
                exports:    "shortcut"
            }
        }
    ,   name:       "oma"
    ,   include:    "requireLib".split(" ")
    ,   out:        options.out
    ,   inlineText: true
    ,   preserveLicenseComments:    false
    };
    r.optimize(config, function () {
      console.log("writing " + config.out)
        // add header
        try {
            fs.writeFileSync(config.out,
                            fs.readFileSync(config.out, "utf8") + "\nrequire(['oma']);\n");
        }
        catch (e) {
            console.log("ERROR", e);
        }
        cb();
    });
}

exports.build = build;

build({
  out: "builds/respec-oma-common.js"
}, function () {
    console.log("DONE");
});
