define(["core/utils"], function(core) {
    return {
        run: function (conf, doc, cb, msg) {
            msg.pub("start", "oma/tables");

            // process all tables
            var tableMap = {}, tot = [], num = 0;
            $("table").each(function () {
                var $table = $(this),
                    $cap = $table.find("caption"),
                    tit = $table.text(),
                    id = $table.makeID("table", tit);
                if (!$cap.length) msg.pub("warn", "A <table> should contain a <caption>.");


                num++;
                $cap.wrapInner($("<span class='table-title'/>"))
                    .prepend(doc.createTextNode(" "))
                    .prepend($("<span class='tableno'>" + num + "</span>"))
                    .prepend(doc.createTextNode("Table. "))
                ;

                tableMap[id] = $cap.contents().clone();
                var $totCap = $cap.clone();
                $totCap.find("a").renameElement("span").removeAttr("href");
                tot.push($("<li class='totline'><a class='tocxref' href='#" + id + "'></a></li>")
                         .find(".tocxref")
                         .append($totCap.contents())
                         .end());
            });

            // Update all anchors with empty content that reference a table ID
            $("a[href]", doc).each(function () {
                var $a = $(this),
                    id = $a.attr("href");
                if (!id) return;
                id = id.substring(1);
                if (tableMap[id]) {
                    $a.addClass("table-ref");
                    if ($a.html() === "") $a.append(tableMap[id]);
                }
            });

            // Create a Table of Tables if a section with id 'tot' exists.
            var $tot = $("#tot", doc);
            if (tot.length && $tot.length) {
                $tot.append($("<h2>Table of Tables</h2>"));
                $tot.append($("<ul class='tot'/>"));
                var $ul = $tot.find("ul");
                while (tot.length) $ul.append(tot.shift());
            }
            
            msg.pub("end", "oma/tables");
            cb();
        }
    };
});

