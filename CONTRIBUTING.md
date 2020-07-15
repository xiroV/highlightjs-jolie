# Contributing

## Building the distribution

To generate the dist file, the `highlight.js` repository is needed:

```
$ git clone https://github.com/highlightjs/highlight.js
$ cd highlight.js
```

Then, install the dependencies:

```
$ npm i
```

Create an `extra` directory and clone the `highlightjs-jolie` repository into it:

```
$ mkdir extra
$ cd extra
$ git clone https://github.com/highlightjs/highlightjs-jolie
$ cd ..
```

To generate the dist file:

```
$ node --stack-size=65500  ./tools/build.js -t cdn
```

The generated file will be available in both `build/languages/jolie.min.js` and `extra/highlightjs-jolie/dist/jolie.min.js`.
