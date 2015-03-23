var assert = require('assert')
var m

var verbs = [
  'get',
  'post',
  'put',
  'head',
  'delete',
  'options',
  'trace',
  'copy',
  'lock',
  'mkcol',
  'move',
  'purge',
  'propfind',
  'proppatch',
  'unlock',
  'report',
  'mkactivity',
  'checkout',
  'merge',
  'notify',
  'subscribe',
  'unsubscribe',
  'patch',
  'search',
  'connect'
]

function mockRequest (m, verb, method) {
  var _request = m.request

  m.request = method
  m.request[verb] = _request[verb]
}

beforeEach(function () {
  m = require('../mithril.requests.js')(require('mithril'))
})

for (var index in verbs) {
  if (verbs[index] === 'get') {
    continue
  }

  describe('m.' + verbs[index], function () {
    it('should exist', function () {
      assert(m.request[verbs[index]])
    })
  })
}

describe('m.get', function () {
  it('should exist', function () {
    assert(m.request.get)
  })

  it('should properly associate GET as the verb', function (done) {
    mockRequest(m, 'get', function (options) {
      assert(options.method === 'GET')
      done()
    })

    m.request.get('http://example.com', {
      query: {
        hello: 'world'
      }
    })
  })

  it('should properly pass option data', function (done) {
    mockRequest(m, 'get', function (options) {
      assert(options.query)
      done()
    })

    m.request.get('http://example.com', {
      query: {
        hello: 'world'
      }
    })
  })
})
