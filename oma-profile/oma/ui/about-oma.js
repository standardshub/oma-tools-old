// Module ui/about-oma
// A simple about dialogue with pointer to the help

define(
    ["jquery"],
    function ($) {
        return {
            show:   function (ui) {
                var $halp = $("");
                ui.freshModal("About The Open Mobile Alliance", $halp);
            }
        };
    }
);
