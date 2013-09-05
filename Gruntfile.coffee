module.exports = ->
  @initConfig

    jshint:
      options:
        jshintrc: ".jshintrc"

      all: [
        "tasks/*.js"
        "<%= nodeunit.tests %>"
      ]

    clean: ["test/out"]

    nodeunit:
      tests: ["test/*.js"]

    modules:
      es6:
        options:
          format: "es6"

          optmizer:
            baseUrl: "test/in"
            out: "test/out/es6.amd.js"
            name: "es6"

  # Load tasks.
  @loadTasks "tasks"
  @loadNpmTasks "grunt-contrib-clean"
  @loadNpmTasks "grunt-contrib-jshint"
  @loadNpmTasks "grunt-contrib-nodeunit"

  # Register tasks.
  @registerTask "test", ["clean", "nodeunit"]
  @registerTask "default", ["jshint", "test"]
