// oma/biblio
// This should be removed and references should be integrated with the
// specref database.

define(
    [],
    function () {
        return {
            run:    function (conf, doc, cb, msg) {
                msg.pub("start", "oma/biblio");

                $.ajax({
                    url: "http://oma-services.herokuapp.com/refdb.json",
                    dataType: "json",
                    success: function(data) {
                        conf.localBiblio = data;
                    },
                    error: function(xhr, status, error) {
                    }
                });
                
                msg.pub("end", "oma/biblio");
                cb();
            }
        };
    }
);
