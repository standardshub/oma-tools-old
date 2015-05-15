// Module ui/scr-export

define(
    ["jquery"],
    function ($) {
        return {
            show:   function (ui, conf) {
                var $export = "",
                    $pars = $(".container").find("p");
                
                this.terms = Object.getOwnPropertyNames(conf.respecRFC2119).sort();
                this.keywords = [];

                $pars.each(function(index, paragraph) {
                    this.words = paragraph.innerText.split(" ");
                    this.paragraph = paragraph;
                    $.each(this.words, function(index, word) {
                        if($.inArray(word.toUpperCase(), this.terms) > 0) {

                            var header = $(this.paragraph.parentElement).find(":header");
                            var paragraph = this.paragraph;                            
                            
                            $export += "['" + header.text() + "',";
                            $export += "'"+ paragraph.textContent  + "'],\n";
                            
                            var kw = [header, paragraph];
                            this.keywords.push(kw);
                        }
                    }.bind(this));
                }.bind(this));

                // remove trailing newline and comma
                $export = $export.slice(0,-2);

                var $exp = $("<textarea id=\"scrExport\" style='width: 100%;height: 350px;'>" + $export + "</textarea>");
                ui.freshModal("SCR Export", $exp);
            }
        };
    }
);
