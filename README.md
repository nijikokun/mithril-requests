# Mithril Requests

Creates sugar http methods for [Mithril.js][mithril] existing request library

[![version][npm-version]][npm-url]
[![License][npm-license]][license-url]
[![Build Status][travis-image]][travis-url]
[![Downloads][npm-downloads]][npm-url]
[![Code Climate][codeclimate-quality]][codeclimate-url]
[![Coverage Status][codeclimate-coverage]][codeclimate-url]
[![Dependencies][david-image]][david-url]

## Install

- Download [the latest package][download]
- NPM: `npm install mithril-requests`

## Setup

```js
var m = require('mithril')
var requests = require('mithril-requests')

m = requests(m)
```

## Documentation

### m.request.verb(url[, options])

Sugar method to invoke an XHR request on the underlying [`m.request`][mithril-request] method, fully supporting
[all options][mithril-request-signature] with no difference in api other than seperating out the `url` and `method` values.

#### Example

```js
m.request.get('mockbin.com/request').then(function (value) {
  console.log(value)
})
```

#### Verbs

This is an array of lowercased method names that are supported.

- `get`
- `post`
- `put`
- `head`
- `delete`
- `options`
- `trace`
- `copy`
- `lock`
- `mkcol`
- `move`
- `purge`
- `propfind`
- `proppatch`
- `unlock`
- `report`
- `mkactivity`
- `checkout`
- `merge`
- `notify`
- `subscribe`
- `unsubscribe`
- `patch`
- `search`
- `connect`

## License

Licensed under [The MIT License](LICENSE).

[license-url]: https://github.com/Nijikokun/mithril-requests/blob/master/LICENSE

[travis-url]: https://travis-ci.org/Nijikokun/mithril-requests
[travis-image]: https://img.shields.io/travis/Nijikokun/mithril-requests.svg?style=flat

[npm-url]: https://www.npmjs.com/package/mithril-requests
[npm-license]: https://img.shields.io/npm/l/mithril-requests.svg?style=flat
[npm-version]: https://img.shields.io/npm/v/mithril-requests.svg?style=flat
[npm-downloads]: https://img.shields.io/npm/dm/mithril-requests.svg?style=flat

[coveralls-url]: https://coveralls.io/r/Nijikokun/mithril-requests
[coveralls-coverage]: https://img.shields.io/coveralls/jekyll/jekyll.svg

[codeclimate-url]: https://codeclimate.com/github/Nijikokun/mithril-requests
[codeclimate-quality]: https://img.shields.io/codeclimate/github/Nijikokun/mithril-requests.svg?style=flat
[codeclimate-coverage]: https://img.shields.io/codeclimate/coverage/github/Nijikokun/mithril-requests.svg?style=flat

[david-url]: https://david-dm.org/Nijikokun/mithril-requests
[david-image]: https://img.shields.io/david/Nijikokun/mithril-requests.svg?style=flat

[download]: https://github.com/Nijikokun/mithril-requests/archive/v1.2.0.zip
[mithril]: https://github.com/lhorie/mithril.js
[mithril-request]: http://lhorie.github.io/mithril/mithril.request.html
[mithril-request-signature]: http://lhorie.github.io/mithril/mithril.request.html#signature