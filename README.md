# Preact-Motion

[![Build Status](https://travis-ci.org/BenoitZugmeyer/preact-motion.svg?branch=master)](https://travis-ci.org/BenoitZugmeyer/preact-motion)

This is a fork of the well known [React-Motion](https://github.com/chenglou/react-motion) library
customized to support [Preact](http://developit.github.io/preact/) out of the box.

Please see the the React-Motion documentation for usage instructions.

## About this fork

### Goals

* Be compatible out of the box with Preact 8 and upper.  No preact-compat requirement.  No react
  dependency.

* Stay as close as possible to React-Motion, including:
  * Same API ;
  * Same developpers tools (flow, prop-types) ;
  * Same tests and demos.

* Better, smaller packaging:
  * Expose a `jsnext:main` entry point (WIP).
  * Use Rollup to provide smaller packages (WIP).
  * Other tweaks to make production bundles smaller (WIP).

### Versioning

Due to semver limitations, this package won't follow the React-Motion versioning, so it can make
major version bumps without waiting for a major version bump upstream.  See
[CHANGELOG.md](./CHANGELOG.md) for informations about supported React-Motion version.

### Install

* Npm: `npm install --save preact-motion`

* 1998 Script Tag:
```html
<script src="https://unpkg.com/preact-motion/build/preact-motion.js"></script>
(Module exposed as `PreactMotion`)
```

### Demos
- [Simple Transition](http://benoitzugmeyer.github.io/preact-motion/demos/demo0-simple-transition)
- [Chat Heads](http://benoitzugmeyer.github.io/preact-motion/demos/demo1-chat-heads)
- [Draggable Balls](http://benoitzugmeyer.github.io/preact-motion/demos/demo2-draggable-balls)
- [TodoMVC List Transition](http://benoitzugmeyer.github.io/preact-motion/demos/demo3-todomvc-list-transition)
- [Photo Gallery](http://benoitzugmeyer.github.io/preact-motion/demos/demo4-photo-gallery)
- [Spring Parameters Chooser](http://benoitzugmeyer.github.io/preact-motion/demos/demo5-spring-parameters-chooser)
- [Water Ripples](http://benoitzugmeyer.github.io/preact-motion/demos/demo7-water-ripples)
- [Draggable List](http://benoitzugmeyer.github.io/preact-motion/demos/demo8-draggable-list)
