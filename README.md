WebApp Modules Grunt Plugin.
----------------------------

> transpile es6, cjs, and amd modules with grunt

#### Installation ####

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

#### Configuration ####

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

_This is a multitask which is useful when you would like to create varying
builds.  Refer to the Grunt documentation for more information on how to use
multitasks._

##### Available options #####

* `sourceFormat`
  - "amd" (Asynchronous Module Definition)
  - "es6" (Upcoming ECMAScript standard)
  - "cjs" (CommonJS)
  - Defaults to autodetection.

* `src`
  - Glob pattern to locate your source code.

* `dest`
  - Folder path to output `amd/` and `cjs/` builds.

##### Example #####

``` javascript
modules: {
  options: {
    sourceFormat: "es6"
  },

  transpile: {
    src: "src/**/*.js",
    dest: "dist/"
  }
}
```

#### License ####

MIT.
