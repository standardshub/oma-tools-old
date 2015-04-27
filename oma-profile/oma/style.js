
// Module oma/style
define(
    ["text!oma/css/oma.css"],
    function (css) {
        return {
            run:    function (conf, doc, cb, msg) {
                msg.pub("start", "oma/style");
                if (!conf.noReSpecCSS) {
                    $("<style/>").appendTo($("head", $(doc)))
                                 .text(css);
                }
                msg.pub("end", "oma/style");
                cb();
            }
        };
    }
);
