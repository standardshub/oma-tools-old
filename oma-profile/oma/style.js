
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

                // don't add an index to the tof
                $("#tof").addClass("introductory");

                // core/highlight expects there to be a link tag to append
                // highlight specific css to.
                $("<link />").appendTo("head");

                $("body").addClass(conf.specStatus);

                $(".web-content").wrapInner("<div class=\"content-inner\"></div>");
                $(".code-content").wrapInner("<pre class=\"highlight\"></pre>");

                $(".web-content").each(function(index, elem) {
                    $elem = $(elem);
                    $elem.prepend("<div class=\"web-content-title\">Web Content</div>");
                });

                $(".code-content").each(function(index, elem) {
                    $elem = $(elem);
                    $elem.prepend("<div class=\"code-content-title\">Code Content</div>");
                });

                msg.pub("end", "oma/style");
                cb();
            }
        };
    }
);
