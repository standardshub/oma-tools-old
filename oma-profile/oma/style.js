
// Module oma/style
define(
    ["core/utils", "text!oma/css/oma.css"],
    function (utils, css) {
        return {
            run:    function (conf, doc, cb, msg) {
                msg.pub("start", "oma/style");
                if (!conf.noReSpecCSS) {
                    $("<style/>").appendTo($("head", $(doc)))
                                 .text(css);
                }


                // core/highlight expects there to be a link tag to append
                // highlight specific css to.
                $("<link />").appendTo("head");
                
                $("body").addClass(conf.specStatus);
                msg.pub("end", "oma/style");
                cb();
            }
        };
    }
);
