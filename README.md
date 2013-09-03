WebApp Modules Grunt Plugin.
============================

v0.1.0

**Originally forked from [grunt-contrib-requirejs](), and now differs in many
ways.**

Where the former plugin strives to simply pass along options to the RequireJS
Optimizer, this project attempts to converge development and provide sane
defaults.  The core has been extracted into [webapp-modules]() which is a
reusable module suitable for integration into a non-Grunt build environment.

## Features ##

The intention of this project is to make it painless to build JavaScript
projects using a variety of popular module formats.  Many configuration options
have already been decided for you, but may be overwritten at your convenience.

* Author your modules in ES6, CJS, or AMD.  (Always compiles down to
  AMD).
* Source Maps and recursive dependency management.  (Courtesy of the RequireJS
  optimizer.)

## Installation ##

The preferred method of installation is through the Node Package Manager (NPM).

``` bash
# Will augment the package.json and install quietly.
npm install --save-dev --q grunt-webapp-modules
```

To load this plugin in your Gruntfile, simply add the following line anywhere
within the `module.exports` function:

``` javascript
grunt.loadNpmTasks("grunt-webapp-modules");
```

## Configuration ##

Once you have this plugin installed, configuration is straightforward.  To
start, add a configuration section within the `initConfig` call to your
Gruntfile that resembles somethinglike this:

``` javascript
grunt.initConfig({
  modules: {
    // Add options here.
  }
});
```

**This is a mutlitask which is useful when you would like to create varying
builds.  Refer to the Grunt documentation for more information on how to use
multitasks.**

### Source module format ###

To ensure output correctness, only one format may be specified to author in.

#### Available options ####

* "amd" (Asynchronous Module Definition) **Default**
* "es6" (Upcoming ECMAScript standard)
* "cjs" (CommonJS standard)

#### Example ####

``` javascript
modules: {
  options: {
    sourceFormat: "es6"
  }
}
```

### RequireJS Optimizer ###

You can override any options passed to the optimizer by specifying them in the
`optimizer` configuration object.  This object is broken out from the main
options to ensure no naming conflicts occur.

#### Available options ####

Refer to the [RequireJS documentation]()

#### Example ####

``` javascript
modules: {
  options: {
    optimizer: {
      out: "dist/my-library.js"
    }
  }
}
```

## License ##

MIT.
