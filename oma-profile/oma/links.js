define(["core/utils"], function(core) {
    return {
        run: function (conf, doc, cb, msg) {
            msg.pub("start", "oma/links");
            
            $("a").each(function(index, link) {
                var link = $(link);
                if(!link.attr("href").startsWith("#")) {
                    link.attr("target", "_blank");
                }
            });
            
            msg.pub("end", "oma/links");
            cb();
        }
    };
});
