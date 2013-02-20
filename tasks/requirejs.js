/*
 * grunt-bbb-requirejs
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 Tim Branyen, Tyler Kellen, contributors
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  "use strict";

  var fs = require("fs");
  var requirejs = require("requirejs");
  var _ = grunt.util._;

  // TODO: extend this to send build log to grunt.log.ok / grunt.log.error by
  // overriding the r.js logger (or submit issue to r.js to expand logging
  // support)
  requirejs.define("node/print", [], function() {
    return function print(msg) {
      if (msg.substring(0, 5) === "Error") {
        grunt.log.errorlns(msg);
        grunt.fail.warn("RequireJS failed.");
      } else {
        grunt.log.oklns(msg);
      }
    };
  });

  grunt.registerMultiTask("requirejs", "Build with r.js.", function() {
    var done = this.async();

    var options = this.options({
      // Include the main configuration file.
      mainConfigFile: "app/config.js",

      // Output file.
      out: "dist/debug/source.js",

      // Root application module.
      name: "config",

      // Leave optimization to our UglifyJS task.
      optimize: "none",

      // Show warnings
      logLevel: 2,

      // Ensure modules are inserted
      skipModuleInsertion: false,

      // Do not wrap everything in an IIFE.
      wrap: false,

      // Default main module.
      deps: ["main"],

      // Jam configuration path.
      jamConfig: "vendor/jam/require.config.js"
    });

    // Merge in the Jam configuration.
    if (grunt.file.exists(options.jamConfig)) {
      _.extend(options, require(process.cwd() + "/" + options.jamConfig));
    }

    grunt.verbose.writeflags(options, "Options");

    requirejs.optimize(options, function(response) {
      done();
    });
  });
};
