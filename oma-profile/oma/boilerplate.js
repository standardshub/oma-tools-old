
// Module beryl/boilerplate
// Header and footers

define(
    ["tmpl!oma/templates/header.html"
    ,"tmpl!oma/templates/footer.html"
    ],
    function (headersTmpl, footerTmpl) {
        return {
            run:    function (conf, doc, cb, msg) {
                msg.pub("start", "oma/boilerplate");
                conf.title = doc.title || "No Title";
                console.log("hey");
                
                $("body", doc).prepend(headersTmpl(conf));
                $("body", doc).append(footerTmpl(conf));
                msg.pub("end", "oma/boilerplate");
                cb();
            }
        };
    }
);
