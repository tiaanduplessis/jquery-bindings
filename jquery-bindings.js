
/* eslint no-shadow-restricted-names: "off" */

;(function ($, window, undefined) {
  'use strict'
  var pluginName = 'bindings'

  // requestIdleCallback shim
  // https://developers.google.com/web/updates/2015/08/using-requestidlecallback
  window.requestIdleCallback =
    window.requestIdleCallback ||
    function (cb) {
      var start = Date.now()
      return setTimeout(function () {
        cb({ // eslint-disable-line standard/no-callback-literal
          didTimeout: false,
          timeRemaining: function () {
            return Math.max(0, 50 - (Date.now() - start))
          }
        })
      }, 1)
    }

  window.cancelIdleCallback =
    window.cancelIdleCallback ||
    function (id) {
      clearTimeout(id)
    }

  function performIdleCallback (cb) {
    return function () {
      window.requestIdleCallback(cb)
    }
  }

  function Plugin (bindings, opts) {
    var attribute = opts && opts.attribute ? opts.attribute : 'data-bind'
    var self = this

    var $elements
    var shouldListen = false

    this.bindings = new Proxy(bindings || {}, {
      set: function (obj, prop, newval) {
        $elements = $('[' + attribute + '=' + prop + ']')
        shouldListen = !obj[prop]

        $elements.each(function () {
          var $this = $(this)
          var hasVal = $this.is('select, options, input, textarea')
          var method = hasVal ? 'val' : 'html'

          window.requestIdleCallback(function () {
            $this[method](newval)
          })

          if (shouldListen) {
            var key = $this.attr('data-bind')
            $this.on(
              'keyup change',
              performIdleCallback(function () {
                self.bindings[key] = hasVal ? $this.val() : $this.html()
              })
            )
          }
        })

        obj[prop] = newval
        return true
      }
    })

    this._name = pluginName

    this.init(attribute)

    return this.bindings
  }

  Plugin.prototype.init = function (attribute) {
    var self = this
    var $elements = $('[' + attribute + ']')

    $elements.each(function () {
      var $this = $(this)
      var key = $this.attr('data-bind')

      var hasVal = $this.is('select, options, input, textarea')
      var method = hasVal ? 'val' : 'html'

      window.requestIdleCallback(function () {
        $this[method](self.bindings[key])
      })

      $this.on(
        'keyup change',
        performIdleCallback(function () {
          self.bindings[key] = hasVal ? $this.val() : $this.html()
        })
      )
    })
  }

  $[pluginName] = function (bindings) {
    var plugin = $.data(this, 'plugin_' + pluginName)
    if (!plugin) {
      plugin = new Plugin(bindings)
      $.data(this, 'plugin_' + pluginName, plugin)
    }

    return plugin
  }
})(jQuery, window)
