WebApp Modules Grunt Plugin.
----------------------------

> automate transpiling source modules

#### Features ####

The intention of this project is to make it painless to build JavaScript
projects using a variety of popular module formats.

* Author your modules in ES6, CJS, or AMD.

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

**This is a multitask which is useful when you would like to create varying
builds.  Refer to the Grunt documentation for more information on how to use
multitasks.**

##### Available options #####

* "amd" (Asynchronous Module Definition) **Default**
* "es6" (Upcoming ECMAScript standard)
* "cjs" (CommonJS standard)

##### Example #####

``` javascript
modules: {
  options: {
    sourceFormat: "es6"
  }
}
```

#### License ####

MIT.
