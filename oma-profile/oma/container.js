
// Module beryl/container
// Wrap the body's content in div.container

define(
    [],
    function () {
        return {
            run:    function (conf, doc, cb, msg) {
                msg.pub("start", "oma/container");
                $("body > *", doc).wrapAll("<div class='container'></div>");
                msg.pub("end", "oma/container");
                cb();
            }
        };
    }
);
