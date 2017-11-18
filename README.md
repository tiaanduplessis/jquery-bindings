
<h1 align="center">jquery-bindings</h1>
<div align="center">
  <strong>Simple two-way data binding using proxies and requestIdleCallback (661 Bytes gzipped)</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/jquery-bindings">
    <img src="https://img.shields.io/npm/v/jquery-bindings.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/jquery-bindings">
  <img src="https://img.shields.io/npm/dm/jquery-bindings.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/jquery-bindings">
    <img src="https://img.shields.io/travis/tiaanduplessis/jquery-bindings.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/jquery-bindings/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/jquery-bindings.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/jquery-bindings/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/jquery-bindings.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/jquery-bindings/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/jquery-bindings.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20jquery-bindings!%20https://github.com/tiaanduplessis/jquery-bindings%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/jquery-bindings.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">tiaanduplessis</a> and <a href="https://github.com/tiaanduplessis/jquery-bindings/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#api">API</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## About

Inspired by [a pen](https://codepen.io/Garrett-/pen/pfEHF), simple data bindings that rely on [Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) (ensure this is [polyfilled](https://github.com/GoogleChrome/proxy-polyfill) for older browsers) and [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback) (Shimmed if not available).

## Install

- [Direct Download](http://github.com/tiaanduplessis/jquery-bindings/zipball/master/)

- Using cdn: 

```html
<script src="https://cdn.rawgit.com/tiaanduplessis/jquery-bindings/master/jquery-bindings.min.js"></script>
<!-- Or -->
<script src="https://unpkg.com/jquery-bindings/jquery-bindings.min.js"></script>
```

- Using package manager:

```sh
$ npm install jquery-bindings
# OR
$ yarn add jquery-bindings
```

## Usage

Create html with `data-bind` attributes:

```html
<p>
    <label>First Name:</label>
    <input type="text" data-bind="firstName" />
    <label>Last Name:<label/>
    <input type="text" data-bind="lastName" />
    <br> Age:
    <input type="number" data-bind="age">
</p>

```

create a initial object and initialize `$.bindings`

```js

var obj = {
  firstName: 'Tiaan',
  lastName: 'du Plessis'
}

var bindings = $.bindings(obj)

// bindings variable can be updated directly and trigger DOM updates
// DOM updates will trigger updates in the bindings variable 

bindings.firstName = 'Dupie'

// New properties can be added as long as the associated data-bind attribute exists
bindings.age = 24

```

## API

### `$.bindings(object, options)`

#### object

- Plain JS object

#### options

##### attribute

- Name of attribute to bind. defaults to `data-bind`

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/jquery-bindings/issues).

## License

Licensed under the MIT License.
