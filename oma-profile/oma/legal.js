define(["core/utils", "tmpl!oma/templates/legal.html"],
  function(core, legalContent) {

    return {
      run: function(conf, doc, cb, msg) {
        var $legal = $("#legal").html(legalContent);
      }
    }


});
