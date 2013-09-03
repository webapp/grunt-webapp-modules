# Please install `grunt` locally and install `grunt-cli` globally.
module.exports = ->

  # Configuration options.
  @initConfig
    # Linting.
    jshint:
      options:
        jshintrc: ".jshintrc"

      all: [
        "tasks/*.js"
        "<%= nodeunit.tests %>"
      ]

    # Remove temporary files.
    clean:
      test: ["test/out"]

    # Set tests location.
    nodeunit:
      tests: ["test/*.js"]

    # Configure modules.
    modules:
      # Test "es6" option.
      es6:
        options:
          format: "es6"

          optmizer:
            baseUrl: "test/in"
            out: "test/out/es6.amd.js"
            name: "es6"

  # The modules task.
  @loadTasks "tasks"

  # External tasks.
  @loadNpmTasks "grunt-contrib-clean"
  @loadNpmTasks "grunt-contrib-jshint"
  @loadNpmTasks "grunt-contrib-nodeunit"

  # Run tests.
  @registerTask "test", ["clean", "nodeunit"]

  # By default, lint and run all tests.
  @registerTask "default", ["jshint", "test"]
