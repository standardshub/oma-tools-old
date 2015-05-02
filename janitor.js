var beautify        = require('js-beautify').js_beautify,
    beautify_html   = require('js-beautify').html
    fs              = require('fs'),
    tidy            = require('htmltidy').tidy;

function clean(opts, cb) {
  fs.readFile(opts.file, 'utf8', function (err, data) {
      if (err) {
          throw err;
      }
      fs.writeFile(opts.file + ".clean",
        beautify_html(data, {
          indent_size: 4,
          wrap_line_length: 90
      }));
  });
};

exports.clean = clean;

clean({file: '/Users/dnewberry/Workspace/oma/OMA-LwM2M/TS/out.html'},
function() {
  console.log("clean");
});
