/*
 * grunt-webapp-modules
 * http://webapp.org/
 *
 * Licensed under the MIT license.
 */
"use strict";

// Constants.
var ENV = process.env;
var CWD = process.cwd();

// Internal libs.
var fs = require("fs");
var path = require("path");

// External libs.
var modules = require("webapp-modules");

module.exports = function(grunt) {
  // Shorthand Lo-Dash and the Grunt logger.
  var _ = grunt.util._;
  var log = grunt.log;

  grunt.registerMultiTask(
    // Name.
    "modules",
    // Description.
    "Optimize ES6, CJS, and AMD modules with Grunt.",

    function() {

    // Make the current task reusable within the async callbacks below.
    var task = this;
    var transpiled = "";

    // Cache this function so that we can reuse it within RequireJS's
    // utilities.
    var options = task.options({
      formats: ["amd", "cjs"],
      root: ""
    });

    // Only log the options during verbose mode.
    grunt.verbose.writeflags(options, "Options");

    // Iterate over the source files.
    this.files.forEach(function(file) {
      file.src.forEach(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          return false;
        }

        // Read in the source code.
        var source = grunt.file.read(filepath);

        // Determine the source format.
        var sourceFormat = options.sourceFormat || modules.detect(source);

        // Use the filepath as the moduleName.
        filepath = filepath.slice(options.root.length);

        // Actually transpile.
        transpiled = modules.transpile(options.so, filepath, source);

        // Convert for all format types.
        options.formats.forEach(function(format) {
          var outputFile = path.join(file.dest, format, filepath);
          grunt.file.write(outputFile, transpiled[format]);
        });
      });
    });
  });
};
