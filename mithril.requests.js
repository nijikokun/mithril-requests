(function (definition) {
  /* istanbul ignore next: differing implementations */
  if (typeof module != 'undefined' && module.exports) module.exports = definition
  else if (typeof define == 'function' && define.amd) define(definition)
  else this.m = definition(this.m)
})(function Plugin (m) {
  /**
   * Verbs to be aliased to request facades.
   *
   * @type {Array}
   * @private
   */
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

  /**
   * Generates a helper function that passes the specified HTTP
   * verb to the underlying Mithril request method.
   *
   * Example
   *
   *     // Generate HTTP get helper
   *     var post = requestVerbGenerator('post')
   *
   *     // Request url with options
   *     post("http://mockbin.com/post", {
   *       data: {
   *         hello: 'world'
   *       }
   *     })
   *
   * @param  {String} verb HTTP Verb
   * @return {Function} Request facade
   * @private
   */
  function requestVerbGenerator (verb) {
    return function facade (uri, options) {
      var request = {
        // Allow verb to be of any casing
        method: verb.toUpperCase(),

        // Allow instance to be passed uncoerced
        url: uri.toString()
      }

      // Content is a part of options
      for (var key in options) {
        /* istanbul ignore else: we don't care */
        if (options.hasOwnProperty(key)) {
          request[key] = options[key]
        }
      }

      return m.request(request)
    }
  }

  // Generate exposed facades from verb list
  for (var index in verbs) {
    m.request[verbs[index]] = requestVerbGenerator(verbs[index])
  }

  return m
})