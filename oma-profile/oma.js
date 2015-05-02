
/*global respecVersion */

// this is only set in a build, not at all in the dev environment
var requireConfig = {
    shim:   {
        "shortcut": {
            exports:    "shortcut"
        }
    },
    paths: {
      domReady:   "../node_modules/respec/js/domReady",
      core:       "../node_modules/respec/js/core/",
      text:       "../node_modules/respec/js/text",
      tmpl:       "../node_modules/respec/js/tmpl",
      handlebars: "../node_modules/respec/js/handlebars",
      shortcut:   "../node_modules/respec/js/shortcut",
      webidl2:    "../node_modules/respec/js/webidl2",
      w3c:        "../node_modules/respec/js/w3c"
    }
};
if ("respecVersion" in window && respecVersion) {
    requireConfig.paths = {
        "ui":   "https://w3c.github.io/respec/js/ui"
    };
}
require.config(requireConfig);


define([

  "domReady"
,   "core/base-runner"
,   "core/ui"
,   "core/override-configuration"
,   "core/default-root-attr"
,   "core/markdown"
,   "core/style"
//,   "w3c/style"
,   "oma/style"
,   "core/data-transform"
,   "core/data-include"
,   "core/inlines"
,   "core/dfn"
,   "core/examples"
,   "core/issues-notes"
,   "core/requirements"
,   "core/highlight"
,   "core/best-practices"
,   "core/figures"
,   "core/biblio"
,   "core/webidl-contiguous"
,   "core/webidl-oldschool"
,   "core/link-to-dfn"
,   "core/fix-headers"
,   "core/structure"

,   "core/id-headers"
,   "core/rdfa"
,   "core/shiv"
,   "core/remove-respec"
,   "core/location-hash"
,   "oma/container"

,   "oma/headers"
,   "oma/legal"

  /*




  "domReady"
,   "core/base-runner"
,   "core/ui"
,   "core/override-configuration"
,   "core/default-root-attr"
,   "core/markdown"
,   "core/style"
,   "core/data-transform"
,   "core/data-include"
,   "core/inlines"
,   "core/dfn"
,   "w3c/rfc2119"
,   "core/examples"
,   "core/issues-notes"
,   "core/requirements"
,   "core/highlight"
,   "core/best-practices"
,   "core/figures"
,   "core/biblio"
,   "core/webidl-contiguous"
,   "core/webidl-oldschool"
,   "core/link-to-dfn"
,   "core/fix-headers"
,   "core/structure"
,   "w3c/informative"
,   "w3c/permalinks"
,   "core/id-headers"
,   "core/rdfa"
,   "w3c/aria"
,   "core/shiv"
,   "core/remove-respec"
,   "core/location-hash"
,   "oma/headers"
,   "oma/container"
,   "oma/style" */
        ],
        function (domReady, runner, ui) {
            var args = Array.prototype.slice.call(arguments);
            domReady(function () {
                ui.addCommand("Save Snapshot", "ui/save-html", "Ctrl+Shift+Alt+S");
                ui.addCommand("About ReSpec", "ui/about-respec", "Ctrl+Shift+Alt+A");
                ui.addCommand("Search Specref DB", "ui/search-specref", "Ctrl+Shift+Alt+space");
                runner.runAll(args);
            });
        }
);
