/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(588);


/***/ },

/***/ 296:
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(302);


/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule React
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(303);
	
	var ReactChildren = __webpack_require__(304);
	var ReactComponent = __webpack_require__(315);
	var ReactClass = __webpack_require__(326);
	var ReactDOMFactories = __webpack_require__(331);
	var ReactElement = __webpack_require__(307);
	var ReactElementValidator = __webpack_require__(332);
	var ReactPropTypes = __webpack_require__(334);
	var ReactVersion = __webpack_require__(335);
	
	var onlyChild = __webpack_require__(336);
	var warning = __webpack_require__(309);
	
	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;
	
	if (process.env.NODE_ENV !== 'production') {
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}
	
	var __spread = _assign;
	
	if (process.env.NODE_ENV !== 'production') {
	  var warned = false;
	  __spread = function () {
	    process.env.NODE_ENV !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
	    warned = true;
	    return _assign.apply(null, arguments);
	  };
	}
	
	var React = {
	
	  // Modern
	
	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },
	
	  Component: ReactComponent,
	
	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,
	
	  // Classic
	
	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function (mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },
	
	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,
	
	  version: ReactVersion,
	
	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};
	
	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(296)))

/***/ },

/***/ 303:
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildren
	 */
	
	'use strict';
	
	var PooledClass = __webpack_require__(305);
	var ReactElement = __webpack_require__(307);
	
	var emptyFunction = __webpack_require__(310);
	var traverseAllChildren = __webpack_require__(312);
	
	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;
	
	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}
	
	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);
	
	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;
	
	  func.call(context, child, bookKeeping.count++);
	}
	
	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}
	
	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);
	
	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result;
	  var keyPrefix = bookKeeping.keyPrefix;
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;
	
	
	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}
	
	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}
	
	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}
	
	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}
	
	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}
	
	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}
	
	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};
	
	module.exports = ReactChildren;

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PooledClass
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(306);
	
	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};
	
	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};
	
	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};
	
	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};
	
	var fiveArgumentPooler = function (a1, a2, a3, a4, a5) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4, a5);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4, a5);
	  }
	};
	
	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : invariant(false) : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};
	
	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;
	
	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances (optional).
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};
	
	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler,
	  fiveArgumentPooler: fiveArgumentPooler
	};
	
	module.exports = PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(296)))

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(296)))

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElement
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(303);
	
	var ReactCurrentOwner = __webpack_require__(308);
	
	var warning = __webpack_require__(309);
	var canDefineProperty = __webpack_require__(311);
	
	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;
	
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	
	var specialPropKeyWarningShown, specialPropRefWarningShown;
	
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };
	
	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};
	
	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }
	
	  return element;
	};
	
	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;
	
	  // Reserved names are extracted
	  var props = {};
	
	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;
	
	  if (config != null) {
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(
	      /* eslint-disable no-proto */
	      config.__proto__ == null || config.__proto__ === Object.prototype,
	      /* eslint-enable no-proto */
	      'React.createElement(...): Expected props argument to be a plain object. ' + 'Properties defined in its prototype chain will be ignored.') : void 0;
	      ref = !config.hasOwnProperty('ref') || Object.getOwnPropertyDescriptor(config, 'ref').get ? null : config.ref;
	      key = !config.hasOwnProperty('key') || Object.getOwnPropertyDescriptor(config, 'key').get ? null : '' + config.key;
	    } else {
	      ref = config.ref === undefined ? null : config.ref;
	      key = config.key === undefined ? null : '' + config.key;
	    }
	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }
	
	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }
	
	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    // Create dummy `key` and `ref` property to `props` to warn users
	    // against its use
	    if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	      if (!props.hasOwnProperty('key')) {
	        Object.defineProperty(props, 'key', {
	          get: function () {
	            if (!specialPropKeyWarningShown) {
	              specialPropKeyWarningShown = true;
	              process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', typeof type === 'function' && 'displayName' in type ? type.displayName : 'Element') : void 0;
	            }
	            return undefined;
	          },
	          configurable: true
	        });
	      }
	      if (!props.hasOwnProperty('ref')) {
	        Object.defineProperty(props, 'ref', {
	          get: function () {
	            if (!specialPropRefWarningShown) {
	              specialPropRefWarningShown = true;
	              process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', typeof type === 'function' && 'displayName' in type ? type.displayName : 'Element') : void 0;
	            }
	            return undefined;
	          },
	          configurable: true
	        });
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};
	
	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};
	
	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
	
	  return newElement;
	};
	
	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;
	
	  // Original props are copied
	  var props = _assign({}, element.props);
	
	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;
	
	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;
	
	  if (config != null) {
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(
	      /* eslint-disable no-proto */
	      config.__proto__ == null || config.__proto__ === Object.prototype,
	      /* eslint-enable no-proto */
	      'React.cloneElement(...): Expected props argument to be a plain object. ' + 'Properties defined in its prototype chain will be ignored.') : void 0;
	    }
	    if (config.ref !== undefined) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (config.key !== undefined) {
	      key = '' + config.key;
	    }
	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }
	
	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }
	
	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};
	
	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};
	
	module.exports = ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(296)))

/***/ },

/***/ 308:
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 */
	
	'use strict';
	
	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	
	var ReactCurrentOwner = {
	
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	
	};
	
	module.exports = ReactCurrentOwner;

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(310);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function warning(condition, format) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }
	
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    }
	  };
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(296)))

/***/ },

/***/ 310:
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule canDefineProperty
	 */
	
	'use strict';
	
	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}
	
	module.exports = canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(296)))

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule traverseAllChildren
	 */
	
	'use strict';
	
	var ReactCurrentOwner = __webpack_require__(308);
	var ReactElement = __webpack_require__(307);
	
	var getIteratorFn = __webpack_require__(313);
	var invariant = __webpack_require__(306);
	var KeyEscapeUtils = __webpack_require__(314);
	var warning = __webpack_require__(309);
	
	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';
	
	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */
	
	var didWarnAboutMaps = false;
	
	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}
	
	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;
	
	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }
	
	  if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }
	
	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
	
	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.') : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : invariant(false) : void 0;
	    }
	  }
	
	  return subtreeCount;
	}
	
	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }
	
	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}
	
	module.exports = traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(296)))

/***/ },

/***/ 313:
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getIteratorFn
	 */
	
	'use strict';
	
	/* global Symbol */
	
	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}
	
	module.exports = getIteratorFn;

/***/ },

/***/ 314:
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule KeyEscapeUtils
	 */
	
	'use strict';
	
	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {*} key to be escaped.
	 * @return {string} the escaped key.
	 */
	
	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });
	
	  return '$' + escapedString;
	}
	
	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);
	
	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}
	
	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};
	
	module.exports = KeyEscapeUtils;

/***/ },

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponent
	 */
	
	'use strict';
	
	var ReactNoopUpdateQueue = __webpack_require__(316);
	var ReactInstrumentation = __webpack_require__(317);
	
	var canDefineProperty = __webpack_require__(311);
	var emptyObject = __webpack_require__(325);
	var invariant = __webpack_require__(306);
	var warning = __webpack_require__(309);
	
	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	
	ReactComponent.prototype.isReactComponent = {};
	
	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.') : invariant(false) : void 0;
	  if (process.env.NODE_ENV !== 'production') {
	    ReactInstrumentation.debugTool.onSetState();
	    process.env.NODE_ENV !== 'production' ? warning(partialState != null, 'setState(...): You passed an undefined or null state object; ' + 'instead, use forceUpdate().') : void 0;
	  }
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};
	
	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};
	
	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}
	
	module.exports = ReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(296)))

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNoopUpdateQueue
	 */
	
	'use strict';
	
	var warning = __webpack_require__(309);
	
	function warnTDZ(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, publicInstance.constructor && publicInstance.constructor.displayName || '') : void 0;
	  }
	}
	
	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {
	
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },
	
	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},
	
	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnTDZ(publicInstance, 'forceUpdate');
	  },
	
	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnTDZ(publicInstance, 'replaceState');
	  },
	
	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnTDZ(publicInstance, 'setState');
	  }
	};
	
	module.exports = ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(296)))

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstrumentation
	 */
	
	'use strict';
	
	var ReactDebugTool = __webpack_require__(318);
	
	module.exports = { debugTool: ReactDebugTool };

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDebugTool
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(319);
	
	var performanceNow = __webpack_require__(320);
	var warning = __webpack_require__(309);
	
	var eventHandlers = [];
	var handlerDoesThrowForEvent = {};
	
	function emitEvent(handlerFunctionName, arg1, arg2, arg3, arg4, arg5) {
	  if (process.env.NODE_ENV !== 'production') {
	    eventHandlers.forEach(function (handler) {
	      try {
	        if (handler[handlerFunctionName]) {
	          handler[handlerFunctionName](arg1, arg2, arg3, arg4, arg5);
	        }
	      } catch (e) {
	        process.env.NODE_ENV !== 'production' ? warning(!handlerDoesThrowForEvent[handlerFunctionName], 'exception thrown by devtool while handling %s: %s', handlerFunctionName, e.message) : void 0;
	        handlerDoesThrowForEvent[handlerFunctionName] = true;
	      }
	    });
	  }
	}
	
	var isProfiling = false;
	var flushHistory = [];
	var currentFlushNesting = 0;
	var currentFlushMeasurements = null;
	var currentFlushStartTime = null;
	var currentTimerDebugID = null;
	var currentTimerStartTime = null;
	var currentTimerType = null;
	
	function clearHistory() {
	  ReactComponentTreeDevtool.purgeUnmountedComponents();
	  ReactNativeOperationHistoryDevtool.clearHistory();
	}
	
	function getTreeSnapshot(registeredIDs) {
	  return registeredIDs.reduce(function (tree, id) {
	    var ownerID = ReactComponentTreeDevtool.getOwnerID(id);
	    var parentID = ReactComponentTreeDevtool.getParentID(id);
	    tree[id] = {
	      displayName: ReactComponentTreeDevtool.getDisplayName(id),
	      text: ReactComponentTreeDevtool.getText(id),
	      updateCount: ReactComponentTreeDevtool.getUpdateCount(id),
	      childIDs: ReactComponentTreeDevtool.getChildIDs(id),
	      // Text nodes don't have owners but this is close enough.
	      ownerID: ownerID || ReactComponentTreeDevtool.getOwnerID(parentID),
	      parentID: parentID
	    };
	    return tree;
	  }, {});
	}
	
	function resetMeasurements() {
	  if (process.env.NODE_ENV !== 'production') {
	    var previousStartTime = currentFlushStartTime;
	    var previousMeasurements = currentFlushMeasurements || [];
	    var previousOperations = ReactNativeOperationHistoryDevtool.getHistory();
	
	    if (!isProfiling || currentFlushNesting === 0) {
	      currentFlushStartTime = null;
	      currentFlushMeasurements = null;
	      clearHistory();
	      return;
	    }
	
	    if (previousMeasurements.length || previousOperations.length) {
	      var registeredIDs = ReactComponentTreeDevtool.getRegisteredIDs();
	      flushHistory.push({
	        duration: performanceNow() - previousStartTime,
	        measurements: previousMeasurements || [],
	        operations: previousOperations || [],
	        treeSnapshot: getTreeSnapshot(registeredIDs)
	      });
	    }
	
	    clearHistory();
	    currentFlushStartTime = performanceNow();
	    currentFlushMeasurements = [];
	  }
	}
	
	function checkDebugID(debugID) {
	  process.env.NODE_ENV !== 'production' ? warning(debugID, 'ReactDebugTool: debugID may not be empty.') : void 0;
	}
	
	var ReactDebugTool = {
	  addDevtool: function (devtool) {
	    eventHandlers.push(devtool);
	  },
	  removeDevtool: function (devtool) {
	    for (var i = 0; i < eventHandlers.length; i++) {
	      if (eventHandlers[i] === devtool) {
	        eventHandlers.splice(i, 1);
	        i--;
	      }
	    }
	  },
	  beginProfiling: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      if (isProfiling) {
	        return;
	      }
	
	      isProfiling = true;
	      flushHistory.length = 0;
	      resetMeasurements();
	    }
	  },
	  endProfiling: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!isProfiling) {
	        return;
	      }
	
	      isProfiling = false;
	      resetMeasurements();
	    }
	  },
	  getFlushHistory: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      return flushHistory;
	    }
	  },
	  onBeginFlush: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      currentFlushNesting++;
	      resetMeasurements();
	    }
	    emitEvent('onBeginFlush');
	  },
	  onEndFlush: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      resetMeasurements();
	      currentFlushNesting--;
	    }
	    emitEvent('onEndFlush');
	  },
	  onBeginLifeCycleTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    emitEvent('onBeginLifeCycleTimer', debugID, timerType);
	    if (process.env.NODE_ENV !== 'production') {
	      if (isProfiling && currentFlushNesting > 0) {
	        process.env.NODE_ENV !== 'production' ? warning(!currentTimerType, 'There is an internal error in the React performance measurement code. ' + 'Did not expect %s timer to start while %s timer is still in ' + 'progress for %s instance.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
	        currentTimerStartTime = performanceNow();
	        currentTimerDebugID = debugID;
	        currentTimerType = timerType;
	      }
	    }
	  },
	  onEndLifeCycleTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    if (process.env.NODE_ENV !== 'production') {
	      if (isProfiling && currentFlushNesting > 0) {
	        process.env.NODE_ENV !== 'production' ? warning(currentTimerType === timerType, 'There is an internal error in the React performance measurement code. ' + 'We did not expect %s timer to stop while %s timer is still in ' + 'progress for %s instance. Please report this as a bug in React.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
	        currentFlushMeasurements.push({
	          timerType: timerType,
	          instanceID: debugID,
	          duration: performanceNow() - currentTimerStartTime
	        });
	        currentTimerStartTime = null;
	        currentTimerDebugID = null;
	        currentTimerType = null;
	      }
	    }
	    emitEvent('onEndLifeCycleTimer', debugID, timerType);
	  },
	  onBeginReconcilerTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    emitEvent('onBeginReconcilerTimer', debugID, timerType);
	  },
	  onEndReconcilerTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    emitEvent('onEndReconcilerTimer', debugID, timerType);
	  },
	  onBeginProcessingChildContext: function () {
	    emitEvent('onBeginProcessingChildContext');
	  },
	  onEndProcessingChildContext: function () {
	    emitEvent('onEndProcessingChildContext');
	  },
	  onNativeOperation: function (debugID, type, payload) {
	    checkDebugID(debugID);
	    emitEvent('onNativeOperation', debugID, type, payload);
	  },
	  onSetState: function () {
	    emitEvent('onSetState');
	  },
	  onSetDisplayName: function (debugID, displayName) {
	    checkDebugID(debugID);
	    emitEvent('onSetDisplayName', debugID, displayName);
	  },
	  onSetChildren: function (debugID, childDebugIDs) {
	    checkDebugID(debugID);
	    emitEvent('onSetChildren', debugID, childDebugIDs);
	  },
	  onSetOwner: function (debugID, ownerDebugID) {
	    checkDebugID(debugID);
	    emitEvent('onSetOwner', debugID, ownerDebugID);
	  },
	  onSetText: function (debugID, text) {
	    checkDebugID(debugID);
	    emitEvent('onSetText', debugID, text);
	  },
	  onMountRootComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onMountRootComponent', debugID);
	  },
	  onMountComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onMountComponent', debugID);
	  },
	  onUpdateComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onUpdateComponent', debugID);
	  },
	  onUnmountComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onUnmountComponent', debugID);
	  }
	};
	
	if (process.env.NODE_ENV !== 'production') {
	  var ReactInvalidSetStateWarningDevTool = __webpack_require__(322);
	  var ReactNativeOperationHistoryDevtool = __webpack_require__(323);
	  var ReactComponentTreeDevtool = __webpack_require__(324);
	  ReactDebugTool.addDevtool(ReactInvalidSetStateWarningDevTool);
	  ReactDebugTool.addDevtool(ReactComponentTreeDevtool);
	  ReactDebugTool.addDevtool(ReactNativeOperationHistoryDevtool);
	  var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
	  if (/[?&]react_perf\b/.test(url)) {
	    ReactDebugTool.beginProfiling();
	  }
	}
	
	module.exports = ReactDebugTool;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(296)))

/***/ },

/***/ 319:
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {
	
	  canUseDOM: canUseDOM,
	
	  canUseWorkers: typeof Worker !== 'undefined',
	
	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
	
	  canUseViewport: canUseDOM && !!window.screen,
	
	  isInWorker: !canUseDOM // For now, this is true - might change in the future.
	
	};
	
	module.exports = ExecutionEnvironment;

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	var performance = __webpack_require__(321);
	
	var performanceNow;
	
	/**
	 * Detect if we can use `window.performance.now()` and gracefully fallback to
	 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	 * because of Facebook's testing infrastructure.
	 */
	if (performance.now) {
	  performanceNow = function performanceNow() {
	    return performance.now();
	  };
	} else {
	  performanceNow = function performanceNow() {
	    return Date.now();
	  };
	}
	
	module.exports = performanceNow;

/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(319);
	
	var performance;
	
	if (ExecutionEnvironment.canUseDOM) {
	  performance = window.performance || window.msPerformance || window.webkitPerformance;
	}
	
	module.exports = performance || {};

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInvalidSetStateWarningDevTool
	 */
	
	'use strict';
	
	var warning = __webpack_require__(309);
	
	if (process.env.NODE_ENV !== 'production') {
	  var processingChildContext = false;
	
	  var warnInvalidSetState = function () {
	    process.env.NODE_ENV !== 'production' ? warning(!processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()') : void 0;
	  };
	}
	
	var ReactInvalidSetStateWarningDevTool = {
	  onBeginProcessingChildContext: function () {
	    processingChildContext = true;
	  },
	  onEndProcessingChildContext: function () {
	    processingChildContext = false;
	  },
	  onSetState: function () {
	    warnInvalidSetState();
	  }
	};
	
	module.exports = ReactInvalidSetStateWarningDevTool;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(296)))

/***/ },

/***/ 323:
/***/ function(module, exports) {

	/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNativeOperationHistoryDevtool
	 */
	
	'use strict';
	
	var history = [];
	
	var ReactNativeOperationHistoryDevtool = {
	  onNativeOperation: function (debugID, type, payload) {
	    history.push({
	      instanceID: debugID,
	      type: type,
	      payload: payload
	    });
	  },
	  clearHistory: function () {
	    if (ReactNativeOperationHistoryDevtool._preventClearing) {
	      // Should only be used for tests.
	      return;
	    }
	
	    history = [];
	  },
	  getHistory: function () {
	    return history;
	  }
	};
	
	module.exports = ReactNativeOperationHistoryDevtool;

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentTreeDevtool
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(306);
	
	var tree = {};
	var rootIDs = [];
	
	function updateTree(id, update) {
	  if (!tree[id]) {
	    tree[id] = {
	      parentID: null,
	      ownerID: null,
	      text: null,
	      childIDs: [],
	      displayName: 'Unknown',
	      isMounted: false,
	      updateCount: 0
	    };
	  }
	  update(tree[id]);
	}
	
	function purgeDeep(id) {
	  var item = tree[id];
	  if (item) {
	    var childIDs = item.childIDs;
	
	    delete tree[id];
	    childIDs.forEach(purgeDeep);
	  }
	}
	
	var ReactComponentTreeDevtool = {
	  onSetDisplayName: function (id, displayName) {
	    updateTree(id, function (item) {
	      return item.displayName = displayName;
	    });
	  },
	  onSetChildren: function (id, nextChildIDs) {
	    updateTree(id, function (item) {
	      var prevChildIDs = item.childIDs;
	      item.childIDs = nextChildIDs;
	
	      nextChildIDs.forEach(function (nextChildID) {
	        var nextChild = tree[nextChildID];
	        !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected devtool events to fire for the child ' + 'before its parent includes it in onSetChildren().') : invariant(false) : void 0;
	        !(nextChild.displayName != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetDisplayName() to fire for the child ' + 'before its parent includes it in onSetChildren().') : invariant(false) : void 0;
	        !(nextChild.childIDs != null || nextChild.text != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() or onSetText() to fire for the child ' + 'before its parent includes it in onSetChildren().') : invariant(false) : void 0;
	        !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child ' + 'before its parent includes it in onSetChildren().') : invariant(false) : void 0;
	
	        if (prevChildIDs.indexOf(nextChildID) === -1) {
	          nextChild.parentID = id;
	        }
	      });
	    });
	  },
	  onSetOwner: function (id, ownerID) {
	    updateTree(id, function (item) {
	      return item.ownerID = ownerID;
	    });
	  },
	  onSetText: function (id, text) {
	    updateTree(id, function (item) {
	      return item.text = text;
	    });
	  },
	  onMountComponent: function (id) {
	    updateTree(id, function (item) {
	      return item.isMounted = true;
	    });
	  },
	  onMountRootComponent: function (id) {
	    rootIDs.push(id);
	  },
	  onUpdateComponent: function (id) {
	    updateTree(id, function (item) {
	      return item.updateCount++;
	    });
	  },
	  onUnmountComponent: function (id) {
	    updateTree(id, function (item) {
	      return item.isMounted = false;
	    });
	    rootIDs = rootIDs.filter(function (rootID) {
	      return rootID !== id;
	    });
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeDevtool._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }
	
	    Object.keys(tree).filter(function (id) {
	      return !tree[id].isMounted;
	    }).forEach(purgeDeep);
	  },
	  isMounted: function (id) {
	    var item = tree[id];
	    return item ? item.isMounted : false;
	  },
	  getChildIDs: function (id) {
	    var item = tree[id];
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var item = tree[id];
	    return item ? item.displayName : 'Unknown';
	  },
	  getOwnerID: function (id) {
	    var item = tree[id];
	    return item ? item.ownerID : null;
	  },
	  getParentID: function (id) {
	    var item = tree[id];
	    return item ? item.parentID : null;
	  },
	  getText: function (id) {
	    var item = tree[id];
	    return item ? item.text : null;
	  },
	  getUpdateCount: function (id) {
	    var item = tree[id];
	    return item ? item.updateCount : 0;
	  },
	  getRootIDs: function () {
	    return rootIDs;
	  },
	  getRegisteredIDs: function () {
	    return Object.keys(tree);
	  }
	};
	
	module.exports = ReactComponentTreeDevtool;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(296)))

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyObject = {};
	
	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}
	
	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(296)))

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactClass
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(303);
	
	var ReactComponent = __webpack_require__(315);
	var ReactElement = __webpack_require__(307);
	var ReactPropTypeLocations = __webpack_require__(327);
	var ReactPropTypeLocationNames = __webpack_require__(329);
	var ReactNoopUpdateQueue = __webpack_require__(316);
	
	var emptyObject = __webpack_require__(325);
	var invariant = __webpack_require__(306);
	var keyMirror = __webpack_require__(328);
	var keyOf = __webpack_require__(330);
	var warning = __webpack_require__(309);
	
	var MIXINS_KEY = keyOf({ mixins: null });
	
	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */
	var SpecPolicy = keyMirror({
	  /**
	   * These methods may be defined only once by the class specification or mixin.
	   */
	  DEFINE_ONCE: null,
	  /**
	   * These methods may be defined by both the class specification and mixins.
	   * Subsequent definitions will be chained. These methods must return void.
	   */
	  DEFINE_MANY: null,
	  /**
	   * These methods are overriding the base class.
	   */
	  OVERRIDE_BASE: null,
	  /**
	   * These methods are similar to DEFINE_MANY, except we assume they return
	   * objects. We try to merge the keys of the return values of all the mixed in
	   * functions. If there is a key conflict we throw.
	   */
	  DEFINE_MANY_MERGED: null
	});
	
	var injectedMixins = [];
	
	/**
	 * Composite components are higher-level components that compose other composite
	 * or native components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {
	
	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: SpecPolicy.DEFINE_MANY,
	
	  // ==== Definition methods ====
	
	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,
	
	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: SpecPolicy.DEFINE_MANY_MERGED,
	
	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: SpecPolicy.DEFINE_MANY_MERGED,
	
	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: SpecPolicy.DEFINE_ONCE,
	
	  // ==== Delegate methods ====
	
	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,
	
	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: SpecPolicy.DEFINE_MANY,
	
	  // ==== Advanced methods ====
	
	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: SpecPolicy.OVERRIDE_BASE
	
	};
	
	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function (Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function (Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function (Constructor, childContextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, childContextTypes, ReactPropTypeLocations.childContext);
	    }
	    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
	  },
	  contextTypes: function (Constructor, contextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, contextTypes, ReactPropTypeLocations.context);
	    }
	    Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function (Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function (Constructor, propTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, propTypes, ReactPropTypeLocations.prop);
	    }
	    Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	  },
	  statics: function (Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  },
	  autobind: function () {} };
	
	// noop
	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but only in __DEV__
	      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
	    }
	  }
	}
	
	function validateMethodOverride(isAlreadyDefined, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;
	
	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === SpecPolicy.OVERRIDE_BASE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override ' + '`%s` from your class specification. Ensure that your method names ' + 'do not overlap with React methods.', name) : invariant(false) : void 0;
	  }
	
	  // Disallow defining methods more than once unless explicitly allowed.
	  if (isAlreadyDefined) {
	    !(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define ' + '`%s` on your component more than once. This conflict may be due ' + 'to a mixin.', name) : invariant(false) : void 0;
	  }
	}
	
	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classes.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    return;
	  }
	
	  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component class or function as a mixin. Instead, just use a ' + 'regular object.') : invariant(false) : void 0;
	  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component as a mixin. Instead, just use a regular object.') : invariant(false) : void 0;
	
	  var proto = Constructor.prototype;
	  var autoBindPairs = proto.__reactAutoBindPairs;
	
	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }
	
	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }
	
	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }
	
	    var property = spec[name];
	    var isAlreadyDefined = proto.hasOwnProperty(name);
	    validateMethodOverride(isAlreadyDefined, name);
	
	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;
	
	      if (shouldAutoBind) {
	        autoBindPairs.push(name, property);
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];
	
	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s ' + 'when mixing in component specs.', specPolicy, name) : invariant(false) : void 0;
	
	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (process.env.NODE_ENV !== 'production') {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}
	
	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }
	
	    var isReserved = name in RESERVED_SPEC_KEYS;
	    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved ' + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 'as an instance property instead; it will still be accessible on the ' + 'constructor.', name) : invariant(false) : void 0;
	
	    var isInherited = name in Constructor;
	    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define ' + '`%s` on your component more than once. This conflict may be ' + 'due to a mixin.', name) : invariant(false) : void 0;
	    Constructor[name] = property;
	  }
	}
	
	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && typeof one === 'object' && typeof two === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : invariant(false) : void 0;
	
	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): ' + 'Tried to merge two objects with the same key: `%s`. This conflict ' + 'may be due to a mixin; in particular, this may be caused by two ' + 'getInitialState() or getDefaultProps() methods returning objects ' + 'with clashing keys.', key) : invariant(false) : void 0;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}
	
	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}
	
	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}
	
	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (process.env.NODE_ENV !== 'production') {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
	      } else if (!args.length) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	    };
	  }
	  return boundMethod;
	}
	
	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  var pairs = component.__reactAutoBindPairs;
	  for (var i = 0; i < pairs.length; i += 2) {
	    var autoBindKey = pairs[i];
	    var method = pairs[i + 1];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}
	
	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {
	
	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function (newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback, 'replaceState');
	    }
	  },
	
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function () {
	    return this.updater.isMounted(this);
	  }
	};
	
	var ReactClassComponent = function () {};
	_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);
	
	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {
	
	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function (spec) {
	    var Constructor = function (props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.
	
	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
	      }
	
	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }
	
	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;
	
	      this.state = null;
	
	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.
	
	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (initialState === undefined && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : invariant(false) : void 0;
	
	      this.state = initialState;
	    };
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];
	
	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
	
	    mixSpecIntoComponent(Constructor, spec);
	
	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }
	
	    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : invariant(false) : void 0;
	
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
	    }
	
	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }
	
	    return Constructor;
	  },
	
	  injection: {
	    injectMixin: function (mixin) {
	      injectedMixins.push(mixin);
	    }
	  }
	
	};
	
	module.exports = ReactClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(296)))

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocations
	 */
	
	'use strict';
	
	var keyMirror = __webpack_require__(328);
	
	var ReactPropTypeLocations = keyMirror({
	  prop: null,
	  context: null,
	  childContext: null
	});
	
	module.exports = ReactPropTypeLocations;

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(306);
	
	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function keyMirror(obj) {
	  var ret = {};
	  var key;
	  !(obj instanceof Object && !Array.isArray(obj)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : void 0;
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};
	
	module.exports = keyMirror;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(296)))

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocationNames
	 */
	
	'use strict';
	
	var ReactPropTypeLocationNames = {};
	
	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}
	
	module.exports = ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(296)))

/***/ },

/***/ 330:
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function keyOf(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};
	
	module.exports = keyOf;

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMFactories
	 */
	
	'use strict';
	
	var ReactElement = __webpack_require__(307);
	var ReactElementValidator = __webpack_require__(332);
	
	var mapObject = __webpack_require__(333);
	
	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @param {string} tag Tag name (e.g. `div`).
	 * @private
	 */
	function createDOMFactory(tag) {
	  if (process.env.NODE_ENV !== 'production') {
	    return ReactElementValidator.createFactory(tag);
	  }
	  return ReactElement.createFactory(tag);
	}
	
	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = mapObject({
	  a: 'a',
	  abbr: 'abbr',
	  address: 'address',
	  area: 'area',
	  article: 'article',
	  aside: 'aside',
	  audio: 'audio',
	  b: 'b',
	  base: 'base',
	  bdi: 'bdi',
	  bdo: 'bdo',
	  big: 'big',
	  blockquote: 'blockquote',
	  body: 'body',
	  br: 'br',
	  button: 'button',
	  canvas: 'canvas',
	  caption: 'caption',
	  cite: 'cite',
	  code: 'code',
	  col: 'col',
	  colgroup: 'colgroup',
	  data: 'data',
	  datalist: 'datalist',
	  dd: 'dd',
	  del: 'del',
	  details: 'details',
	  dfn: 'dfn',
	  dialog: 'dialog',
	  div: 'div',
	  dl: 'dl',
	  dt: 'dt',
	  em: 'em',
	  embed: 'embed',
	  fieldset: 'fieldset',
	  figcaption: 'figcaption',
	  figure: 'figure',
	  footer: 'footer',
	  form: 'form',
	  h1: 'h1',
	  h2: 'h2',
	  h3: 'h3',
	  h4: 'h4',
	  h5: 'h5',
	  h6: 'h6',
	  head: 'head',
	  header: 'header',
	  hgroup: 'hgroup',
	  hr: 'hr',
	  html: 'html',
	  i: 'i',
	  iframe: 'iframe',
	  img: 'img',
	  input: 'input',
	  ins: 'ins',
	  kbd: 'kbd',
	  keygen: 'keygen',
	  label: 'label',
	  legend: 'legend',
	  li: 'li',
	  link: 'link',
	  main: 'main',
	  map: 'map',
	  mark: 'mark',
	  menu: 'menu',
	  menuitem: 'menuitem',
	  meta: 'meta',
	  meter: 'meter',
	  nav: 'nav',
	  noscript: 'noscript',
	  object: 'object',
	  ol: 'ol',
	  optgroup: 'optgroup',
	  option: 'option',
	  output: 'output',
	  p: 'p',
	  param: 'param',
	  picture: 'picture',
	  pre: 'pre',
	  progress: 'progress',
	  q: 'q',
	  rp: 'rp',
	  rt: 'rt',
	  ruby: 'ruby',
	  s: 's',
	  samp: 'samp',
	  script: 'script',
	  section: 'section',
	  select: 'select',
	  small: 'small',
	  source: 'source',
	  span: 'span',
	  strong: 'strong',
	  style: 'style',
	  sub: 'sub',
	  summary: 'summary',
	  sup: 'sup',
	  table: 'table',
	  tbody: 'tbody',
	  td: 'td',
	  textarea: 'textarea',
	  tfoot: 'tfoot',
	  th: 'th',
	  thead: 'thead',
	  time: 'time',
	  title: 'title',
	  tr: 'tr',
	  track: 'track',
	  u: 'u',
	  ul: 'ul',
	  'var': 'var',
	  video: 'video',
	  wbr: 'wbr',
	
	  // SVG
	  circle: 'circle',
	  clipPath: 'clipPath',
	  defs: 'defs',
	  ellipse: 'ellipse',
	  g: 'g',
	  image: 'image',
	  line: 'line',
	  linearGradient: 'linearGradient',
	  mask: 'mask',
	  path: 'path',
	  pattern: 'pattern',
	  polygon: 'polygon',
	  polyline: 'polyline',
	  radialGradient: 'radialGradient',
	  rect: 'rect',
	  stop: 'stop',
	  svg: 'svg',
	  text: 'text',
	  tspan: 'tspan'
	
	}, createDOMFactory);
	
	module.exports = ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(296)))

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElementValidator
	 */
	
	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */
	
	'use strict';
	
	var ReactElement = __webpack_require__(307);
	var ReactPropTypeLocations = __webpack_require__(327);
	var ReactPropTypeLocationNames = __webpack_require__(329);
	var ReactCurrentOwner = __webpack_require__(308);
	
	var canDefineProperty = __webpack_require__(311);
	var getIteratorFn = __webpack_require__(313);
	var invariant = __webpack_require__(306);
	var warning = __webpack_require__(309);
	
	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}
	
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};
	
	var loggedTypeFailures = {};
	
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;
	
	  var addenda = getAddendaForKeyUse('uniqueKey', element, parentType);
	  if (addenda === null) {
	    // we already showed the warning
	    return;
	  }
	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s%s', addenda.parentOrOwner || '', addenda.childOwner || '', addenda.url || '') : void 0;
	}
	
	/**
	 * Shared warning and monitoring code for the key warnings.
	 *
	 * @internal
	 * @param {string} messageType A key used for de-duping warnings.
	 * @param {ReactElement} element Component that requires a key.
	 * @param {*} parentType element's parent's type.
	 * @returns {?object} A set of addenda to use in the warning message, or null
	 * if the warning has already been shown before (and shouldn't be shown again).
	 */
	function getAddendaForKeyUse(messageType, element, parentType) {
	  var addendum = getDeclarationErrorAddendum();
	  if (!addendum) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      addendum = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }
	
	  var memoizer = ownerHasKeyUseWarning[messageType] || (ownerHasKeyUseWarning[messageType] = {});
	  if (memoizer[addendum]) {
	    return null;
	  }
	  memoizer[addendum] = true;
	
	  var addenda = {
	    parentOrOwner: addendum,
	    url: ' See https://fb.me/react-warning-keys for more information.',
	    childOwner: null
	  };
	
	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    addenda.childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }
	
	  return addenda;
	}
	
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}
	
	/**
	 * Assert that the props are valid
	 *
	 * @param {string} componentName Name of the component for error messages.
	 * @param {object} propTypes Map of prop name to a ReactPropType
	 * @param {object} props
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @private
	 */
	function checkPropTypes(componentName, propTypes, props, location) {
	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof propTypes[propName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(false) : void 0;
	        error = propTypes[propName](props, propName, componentName, location);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], propName, typeof error) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;
	
	        var addendum = getDeclarationErrorAddendum();
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed propType: %s%s', error.message, addendum) : void 0;
	      }
	    }
	  }
	}
	
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkPropTypes(name, componentClass.propTypes, element.props, ReactPropTypeLocations.prop);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}
	
	var ReactElementValidator = {
	
	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    process.env.NODE_ENV !== 'production' ? warning(validType, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : void 0;
	
	    var element = ReactElement.createElement.apply(this, arguments);
	
	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }
	
	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }
	
	    validatePropTypes(element);
	
	    return element;
	  },
	
	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;
	
	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }
	
	    return validatedFactory;
	  },
	
	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }
	
	};
	
	module.exports = ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(296)))

/***/ },

/***/ 333:
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * Executes the provided `callback` once for each enumerable own property in the
	 * object and constructs a new object from the results. The `callback` is
	 * invoked with three arguments:
	 *
	 *  - the property value
	 *  - the property name
	 *  - the object being traversed
	 *
	 * Properties that are added after the call to `mapObject` will not be visited
	 * by `callback`. If the values of existing properties are changed, the value
	 * passed to `callback` will be the value at the time `mapObject` visits them.
	 * Properties that are deleted before being visited are not visited.
	 *
	 * @grep function objectMap()
	 * @grep function objMap()
	 *
	 * @param {?object} object
	 * @param {function} callback
	 * @param {*} context
	 * @return {?object}
	 */
	function mapObject(object, callback, context) {
	  if (!object) {
	    return null;
	  }
	  var result = {};
	  for (var name in object) {
	    if (hasOwnProperty.call(object, name)) {
	      result[name] = callback.call(context, object[name], name, object);
	    }
	  }
	  return result;
	}
	
	module.exports = mapObject;

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypes
	 */
	
	'use strict';
	
	var ReactElement = __webpack_require__(307);
	var ReactPropTypeLocationNames = __webpack_require__(329);
	
	var emptyFunction = __webpack_require__(310);
	var getIteratorFn = __webpack_require__(313);
	
	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */
	
	var ANONYMOUS = '<<anonymous>>';
	
	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),
	
	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: createElementTypeChecker(),
	  instanceOf: createInstanceTypeChecker,
	  node: createNodeChecker(),
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
	};
	
	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	/*eslint-disable no-self-compare*/
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	/*eslint-enable no-self-compare*/
	
	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    componentName = componentName || ANONYMOUS;
	    propFullName = propFullName || propName;
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location, propFullName);
	    }
	  }
	
	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);
	
	  return chainedCheckType;
	}
	
	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);
	
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}
	
	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new Error('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	    }
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!ReactElement.isValidElement(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createEnumTypeChecker(expectedValues) {
	  if (!Array.isArray(expectedValues)) {
	    return createChainableTypeChecker(function () {
	      return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
	    });
	  }
	
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (is(propValue, expectedValues[i])) {
	        return null;
	      }
	    }
	
	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new Error('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	    }
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  if (!Array.isArray(arrayOfTypeCheckers)) {
	    return createChainableTypeChecker(function () {
	      return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
	    });
	  }
	
	  function validate(props, propName, componentName, location, propFullName) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location, propFullName) == null) {
	        return null;
	      }
	    }
	
	    var locationName = ReactPropTypeLocationNames[location];
	    return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createNodeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function isNode(propValue) {
	  switch (typeof propValue) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
	        return true;
	      }
	
	      var iteratorFn = getIteratorFn(propValue);
	      if (iteratorFn) {
	        var iterator = iteratorFn.call(propValue);
	        var step;
	        if (iteratorFn !== propValue.entries) {
	          while (!(step = iterator.next()).done) {
	            if (!isNode(step.value)) {
	              return false;
	            }
	          }
	        } else {
	          // Iterator will provide entry [k,v] tuples rather than values.
	          while (!(step = iterator.next()).done) {
	            var entry = step.value;
	            if (entry) {
	              if (!isNode(entry[1])) {
	                return false;
	              }
	            }
	          }
	        }
	      } else {
	        return false;
	      }
	
	      return true;
	    default:
	      return false;
	  }
	}
	
	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue;
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  return propType;
	}
	
	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}
	
	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return ANONYMOUS;
	  }
	  return propValue.constructor.name;
	}
	
	module.exports = ReactPropTypes;

/***/ },

/***/ 335:
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactVersion
	 */
	
	'use strict';
	
	module.exports = '15.1.0';

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule onlyChild
	 */
	'use strict';
	
	var ReactElement = __webpack_require__(307);
	
	var invariant = __webpack_require__(306);
	
	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'onlyChild must be passed a children with exactly one child.') : invariant(false) : void 0;
	  return children;
	}
	
	module.exports = onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(296)))

/***/ },

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){if(true)module.exports=e(__webpack_require__(301));else if("function"==typeof define&&define.amd)define(["react"],e);else{var r=e("object"==typeof exports?require("react"):t.react);for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(this,function(t){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){t.exports=r(8)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.STORAGE_KEY="oidc.expired",e.USER_EXPIRED="redux-oidc/USER_EXPIRED",e.REDIRECT_SUCCESS="redux-oidc/REDIRECT_SUCCESS",e.USER_LOADED="redux-oidc/USER_LOADED",e.SILENT_RENEW_ERROR="redux-oidc/SILENT_RENEW_ERROR",e.SESSION_TERMINATED="redux-oidc/SESSION_TERMINATED",e.USER_EXPIRING="redux-oidc/USER_EXPIRING",e.USER_FOUND="redux-oidc/USER_FOUND"},function(t,e,r){"use strict";function n(){return{type:h.USER_EXPIRED}}function i(t){return{type:h.REDIRECT_SUCCESS,payload:t}}function s(t){return{type:h.USER_FOUND,payload:t}}function o(t){return{type:h.SILENT_RENEW_ERROR,payload:t}}function a(){return{type:h.SESSION_TERMINATED}}function u(){return{type:h.USER_EXPIRING}}Object.defineProperty(e,"__esModule",{value:!0}),e.userExpired=n,e.redirectSuccess=i,e.userFound=s,e.silentRenewError=o,e.sessionTerminated=a,e.userExpiring=u;var h=r(1)},function(t,e,r){"use strict";function n(t){return new i.UserManager(t)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n;var i=r(13)},function(e,r){e.exports=t},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=r(4),h=n(u),c=r(1),f=(r(2),function(t){function e(){var t,r,n,o;i(this,e);for(var a=arguments.length,u=Array(a),h=0;a>h;h++)u[h]=arguments[h];return r=n=s(this,(t=Object.getPrototypeOf(e)).call.apply(t,[this].concat(u))),n.onRedirectSuccess=function(t){localStorage.removeItem(c.STORAGE_KEY),n.props.successCallback(t)},n.onRedirectError=function(t){throw localStorage.removeItem(c.STORAGE_KEY),new Error("Error handling redirect callback: "+t.message)},o=r,s(n,o)}return o(e,t),a(e,[{key:"componentDidMount",value:function(){var t=this;this.context.userManager.signinRedirectCallback().then(function(e){return t.onRedirectSuccess(e)})["catch"](function(e){return t.onRedirectError(e)})}},{key:"render",value:function(){return h["default"].createElement("div",null,this.props.children||this.defaultContent)}},{key:"defaultContent",get:function(){return h["default"].createElement("div",null,"Redirecting...")}}]),e}(h["default"].Component));f.propTypes={successCallback:u.PropTypes.func.isRequired},f.contextTypes={userManager:u.PropTypes.object},e["default"]=f},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=r(4),h=n(u),c=r(2),f=function(t){function e(t){i(this,e);var r=s(this,Object.getPrototypeOf(e).call(this,t));return r.onUserLoaded=function(t){r.props.store.dispatch((0,c.userFound)(t))},r.onSilentRenewError=function(t){r.props.store.dispatch((0,c.silentRenewError)(t))},r.onAccessTokenExpired=function(){r.props.store.dispatch((0,c.userExpired)())},r.onUserUnloaded=function(){r.props.store.dispatch((0,c.sessionTerminated)())},r.onAccessTokenExpiring=function(){r.props.store.dispatch((0,c.userExpiring)())},r.userManager=t.userManager,r}return o(e,t),a(e,[{key:"getChildContext",value:function(){return{userManager:this.userManager}}},{key:"componentWillMount",value:function(){this.userManager.events.addUserLoaded(this.onUserLoaded),this.userManager.events.addSilentRenewError(this.onSilentRenewError),this.userManager.events.addAccessTokenExpired(this.onAccessTokenExpired),this.userManager.events.addAccessTokenExpiring(this.onAccessTokenExpiring),this.userManager.events.addUserUnloaded(this.onUserUnloaded)}},{key:"componentWillUnmount",value:function(){this.userManager.events.removeUserLoaded(this.onUserLoaded),this.userManager.events.removeSilentRenewError(this.onSilentRenewError),this.userManager.events.removeAccessTokenExpired(this.onAccessTokenExpired),this.userManager.events.removeAccessTokenExpiring(this.onAccessTokenExpiring),this.userManager.events.removeUserUnloaded(this.onUserUnloaded)}},{key:"render",value:function(){return h["default"].Children.only(this.props.children)}}]),e}(h["default"].Component);f.propTypes={userManager:u.PropTypes.object.isRequired,store:u.PropTypes.object.isRequired},f.childContextTypes={userManager:u.PropTypes.object},e["default"]=f},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(){var t=(0,o["default"])();t.signinSilentCallback()}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i;var s=r(3),o=n(s)},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.userExpiring=e.sessionTerminated=e.silentRenewError=e.userFound=e.redirectSuccess=e.userExpired=e.USER_EXPIRING=e.SESSION_TERMINATED=e.SILENT_RENEW_ERROR=e.USER_FOUND=e.REDIRECT_SUCCESS=e.USER_EXPIRED=e.OidcProvider=e.reducer=e.immutableReducer=e.CallbackComponent=e.processSilentRenew=e.createUserManager=void 0;var i=r(9),s=n(i);e.createUserManager=r(3)["default"],e.processSilentRenew=r(7)["default"],e.CallbackComponent=r(5)["default"],e.immutableReducer=r(10)["default"],e.reducer=r(11)["default"],e.OidcProvider=r(6)["default"],e.USER_EXPIRED=r(1).USER_EXPIRED,e.REDIRECT_SUCCESS=r(1).REDIRECT_SUCCESS,e.USER_FOUND=r(1).USER_FOUND,e.SILENT_RENEW_ERROR=r(1).SILENT_RENEW_ERROR,e.SESSION_TERMINATED=r(1).SESSION_TERMINATED,e.USER_EXPIRING=r(1).USER_EXPIRING,e.userExpired=r(2).userExpired,e.redirectSuccess=r(2).redirectSuccess,e.userFound=r(2).userFound,e.silentRenewError=r(2).silentRenewError,e.sessionTerminated=r(2).sessionTerminated,e.userExpiring=r(2).userExpiring,e["default"]=s["default"]},function(t,e,r){"use strict";function n(t){e.storedUser=c=t}function i(){e.storedUser=c=null}function s(t,r,n,i,s){return n&&!n.expired?(localStorage.removeItem(u.STORAGE_KEY),e.storedUser=c=n,t(s)):(t((0,h.userExpired)()),i?void r.signinRedirect({data:{redirectUrl:window.location.href}}):t(s))}function o(t){throw localStorage.removeItem(u.STORAGE_KEY),new Error("Error loading user: "+t.message)}function a(t,e){var r=arguments.length<=2||void 0===arguments[2]?!0:arguments[2];if(!t)throw new Error("You must provide a user manager!");return e&&"function"==typeof e||(e=function(t,e){return!0}),function(n){return function(i){return function(a){return!e(n.getState(),a)||localStorage.getItem(u.STORAGE_KEY)?i(a):c&&!c.expired?i(a):(localStorage.setItem(u.STORAGE_KEY,!0),void t.getUser().then(function(e){return s(i,t,e,r,a)})["catch"](o))}}}}Object.defineProperty(e,"__esModule",{value:!0}),e.storedUser=void 0,e.setStoredUser=n,e.removeStoredUser=i,e.getUserSuccessCallback=s,e.getUserErrorCallback=o,e["default"]=a;var u=r(1),h=r(2),c=e.storedUser=null},function(t,e,r){"use strict";function n(){var t=arguments.length<=0||void 0===arguments[0]?o:arguments[0],e=arguments[1];switch(e.type){case s.USER_EXPIRED:case s.SILENT_RENEW_ERROR:case s.SESSION_TERMINATED:return t.set("user",null);case s.REDIRECT_SUCCESS:case s.USER_FOUND:return(0,i.fromJS)({user:e.payload});default:return t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n;var i=r(12),s=r(1),o=(0,i.fromJS)({user:null})},function(t,e,r){"use strict";function n(){var t=arguments.length<=0||void 0===arguments[0]?o:arguments[0],e=arguments[1];switch(e.type){case s.USER_EXPIRED:case s.SILENT_RENEW_ERROR:case s.SESSION_TERMINATED:return Object.assign({},i({},t),{user:null});case s.REDIRECT_SUCCESS:case s.USER_FOUND:return Object.assign({},i({},t),{user:e.payload});default:return t}}Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e["default"]=n;var s=r(1),o={user:null}},function(t,e,r){!function(e,r){t.exports=r()}(this,function(){"use strict";function t(t,e){e&&(t.prototype=Object.create(e.prototype)),t.prototype.constructor=t}function e(t){return s(t)?t:U(t)}function r(t){return o(t)?t:O(t)}function n(t){return a(t)?t:P(t)}function i(t){return s(t)&&!u(t)?t:I(t)}function s(t){return!(!t||!t[ur])}function o(t){return!(!t||!t[hr])}function a(t){return!(!t||!t[cr])}function u(t){return o(t)||a(t)}function h(t){return!(!t||!t[fr])}function c(t){return t.value=!1,t}function f(t){t&&(t.value=!0)}function l(){}function d(t,e){e=e||0;for(var r=Math.max(0,t.length-e),n=new Array(r),i=0;r>i;i++)n[i]=t[i+e];return n}function p(t){return void 0===t.size&&(t.size=t.__iterate(y)),t.size}function g(t,e){if("number"!=typeof e){var r=e>>>0;if(""+r!==e||4294967295===r)return NaN;e=r}return 0>e?p(t)+e:e}function y(){return!0}function v(t,e,r){return(0===t||void 0!==r&&-r>=t)&&(void 0===e||void 0!==r&&e>=r)}function m(t,e){return _(t,e,0)}function S(t,e){return _(t,e,e)}function _(t,e,r){return void 0===t?r:0>t?Math.max(0,e+t):void 0===e?t:Math.min(e,t)}function E(t){this.next=t}function b(t,e,r,n){var i=0===t?e:1===t?r:[e,r];return n?n.value=i:n={value:i,done:!1},n}function w(){return{value:void 0,done:!0}}function R(t){return!!F(t)}function x(t){return t&&"function"==typeof t.next}function A(t){var e=F(t);return e&&e.call(t)}function F(t){var e=t&&(br&&t[br]||t[wr]);return"function"==typeof e?e:void 0}function K(t){return t&&"number"==typeof t.length}function U(t){return null===t||void 0===t?H():s(t)?t.toSeq():N(t)}function O(t){return null===t||void 0===t?H().toKeyedSeq():s(t)?o(t)?t.toSeq():t.fromEntrySeq():B(t)}function P(t){return null===t||void 0===t?H():s(t)?o(t)?t.entrySeq():t.toIndexedSeq():k(t)}function I(t){return(null===t||void 0===t?H():s(t)?o(t)?t.entrySeq():t:k(t)).toSetSeq()}function D(t){this._array=t,this.size=t.length}function C(t){var e=Object.keys(t);this._object=t,this._keys=e,this.size=e.length}function T(t){this._iterable=t,this.size=t.length||t.size}function j(t){this._iterator=t,this._iteratorCache=[]}function J(t){return!(!t||!t[xr])}function H(){return Ar||(Ar=new D([]))}function B(t){var e=Array.isArray(t)?new D(t).fromEntrySeq():x(t)?new j(t).fromEntrySeq():R(t)?new T(t).fromEntrySeq():"object"==typeof t?new C(t):void 0;if(!e)throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: "+t);return e}function k(t){var e=M(t);if(!e)throw new TypeError("Expected Array or iterable object of values: "+t);return e}function N(t){var e=M(t)||"object"==typeof t&&new C(t);if(!e)throw new TypeError("Expected Array or iterable object of values, or keyed object: "+t);return e}function M(t){return K(t)?new D(t):x(t)?new j(t):R(t)?new T(t):void 0}function V(t,e,r,n){var i=t._cache;if(i){for(var s=i.length-1,o=0;s>=o;o++){var a=i[r?s-o:o];if(e(a[1],n?a[0]:o,t)===!1)return o+1}return o}return t.__iterateUncached(e,r)}function L(t,e,r,n){var i=t._cache;if(i){var s=i.length-1,o=0;return new E(function(){var t=i[r?s-o:o];return o++>s?w():b(e,n?t[0]:o-1,t[1])})}return t.__iteratorUncached(e,r)}function q(t,e){return e?z(e,t,"",{"":t}):W(t)}function z(t,e,r,n){return Array.isArray(e)?t.call(n,r,P(e).map(function(r,n){return z(t,r,n,e)})):Y(e)?t.call(n,r,O(e).map(function(r,n){return z(t,r,n,e)})):e}function W(t){return Array.isArray(t)?P(t).map(W).toList():Y(t)?O(t).map(W).toMap():t}function Y(t){return t&&(t.constructor===Object||void 0===t.constructor)}function G(t,e){if(t===e||t!==t&&e!==e)return!0;if(!t||!e)return!1;if("function"==typeof t.valueOf&&"function"==typeof e.valueOf){if(t=t.valueOf(),e=e.valueOf(),t===e||t!==t&&e!==e)return!0;if(!t||!e)return!1}return!("function"!=typeof t.equals||"function"!=typeof e.equals||!t.equals(e))}function X(t,e){if(t===e)return!0;if(!s(e)||void 0!==t.size&&void 0!==e.size&&t.size!==e.size||void 0!==t.__hash&&void 0!==e.__hash&&t.__hash!==e.__hash||o(t)!==o(e)||a(t)!==a(e)||h(t)!==h(e))return!1;if(0===t.size&&0===e.size)return!0;var r=!u(t);if(h(t)){var n=t.entries();return e.every(function(t,e){var i=n.next().value;return i&&G(i[1],t)&&(r||G(i[0],e))})&&n.next().done}var i=!1;if(void 0===t.size)if(void 0===e.size)"function"==typeof t.cacheResult&&t.cacheResult();else{i=!0;var c=t;t=e,e=c}var f=!0,l=e.__iterate(function(e,n){return(r?t.has(e):i?G(e,t.get(n,yr)):G(t.get(n,yr),e))?void 0:(f=!1,!1)});return f&&t.size===l}function $(t,e){if(!(this instanceof $))return new $(t,e);if(this._value=t,this.size=void 0===e?1/0:Math.max(0,e),0===this.size){if(Fr)return Fr;Fr=this}}function Z(t,e){if(!t)throw new Error(e)}function Q(t,e,r){if(!(this instanceof Q))return new Q(t,e,r);if(Z(0!==r,"Cannot step a Range by 0"),t=t||0,void 0===e&&(e=1/0),r=void 0===r?1:Math.abs(r),t>e&&(r=-r),this._start=t,this._end=e,this._step=r,this.size=Math.max(0,Math.ceil((e-t)/r-1)+1),0===this.size){if(Kr)return Kr;Kr=this}}function tt(){throw TypeError("Abstract")}function et(){}function rt(){}function nt(){}function it(t){return t>>>1&1073741824|3221225471&t}function st(t){if(t===!1||null===t||void 0===t)return 0;if("function"==typeof t.valueOf&&(t=t.valueOf(),t===!1||null===t||void 0===t))return 0;if(t===!0)return 1;var e=typeof t;if("number"===e){if(t!==t||t===1/0)return 0;var r=0|t;for(r!==t&&(r^=4294967295*t);t>4294967295;)t/=4294967295,r^=t;return it(r)}if("string"===e)return t.length>jr?ot(t):at(t);if("function"==typeof t.hashCode)return t.hashCode();if("object"===e)return ut(t);if("function"==typeof t.toString)return at(t.toString());throw new Error("Value type "+e+" cannot be hashed.")}function ot(t){var e=Br[t];return void 0===e&&(e=at(t),Hr===Jr&&(Hr=0,Br={}),Hr++,Br[t]=e),e}function at(t){for(var e=0,r=0;r<t.length;r++)e=31*e+t.charCodeAt(r)|0;return it(e)}function ut(t){var e;if(Dr&&(e=Ur.get(t),void 0!==e))return e;if(e=t[Tr],void 0!==e)return e;if(!Ir){if(e=t.propertyIsEnumerable&&t.propertyIsEnumerable[Tr],void 0!==e)return e;if(e=ht(t),void 0!==e)return e}if(e=++Cr,1073741824&Cr&&(Cr=0),Dr)Ur.set(t,e);else{if(void 0!==Pr&&Pr(t)===!1)throw new Error("Non-extensible objects are not allowed as keys.");if(Ir)Object.defineProperty(t,Tr,{enumerable:!1,configurable:!1,writable:!1,value:e});else if(void 0!==t.propertyIsEnumerable&&t.propertyIsEnumerable===t.constructor.prototype.propertyIsEnumerable)t.propertyIsEnumerable=function(){return this.constructor.prototype.propertyIsEnumerable.apply(this,arguments)},t.propertyIsEnumerable[Tr]=e;else{if(void 0===t.nodeType)throw new Error("Unable to set a non-enumerable property on object.");t[Tr]=e}}return e}function ht(t){if(t&&t.nodeType>0)switch(t.nodeType){case 1:return t.uniqueID;case 9:return t.documentElement&&t.documentElement.uniqueID}}function ct(t){Z(t!==1/0,"Cannot perform this action with an infinite size.")}function ft(t){return null===t||void 0===t?bt():lt(t)&&!h(t)?t:bt().withMutations(function(e){var n=r(t);ct(n.size),n.forEach(function(t,r){return e.set(r,t)})})}function lt(t){return!(!t||!t[kr])}function dt(t,e){this.ownerID=t,this.entries=e}function pt(t,e,r){this.ownerID=t,this.bitmap=e,this.nodes=r}function gt(t,e,r){this.ownerID=t,this.count=e,this.nodes=r}function yt(t,e,r){this.ownerID=t,this.keyHash=e,this.entries=r}function vt(t,e,r){this.ownerID=t,this.keyHash=e,this.entry=r}function mt(t,e,r){this._type=e,this._reverse=r,this._stack=t._root&&_t(t._root)}function St(t,e){return b(t,e[0],e[1])}function _t(t,e){return{node:t,index:0,__prev:e}}function Et(t,e,r,n){var i=Object.create(Nr);return i.size=t,i._root=e,i.__ownerID=r,i.__hash=n,i.__altered=!1,i}function bt(){return Mr||(Mr=Et(0))}function wt(t,e,r){var n,i;if(t._root){var s=c(vr),o=c(mr);if(n=Rt(t._root,t.__ownerID,0,void 0,e,r,s,o),!o.value)return t;i=t.size+(s.value?r===yr?-1:1:0)}else{if(r===yr)return t;i=1,n=new dt(t.__ownerID,[[e,r]])}return t.__ownerID?(t.size=i,t._root=n,t.__hash=void 0,t.__altered=!0,t):n?Et(i,n):bt()}function Rt(t,e,r,n,i,s,o,a){return t?t.update(e,r,n,i,s,o,a):s===yr?t:(f(a),f(o),new vt(e,n,[i,s]))}function xt(t){return t.constructor===vt||t.constructor===yt}function At(t,e,r,n,i){if(t.keyHash===n)return new yt(e,n,[t.entry,i]);var s,o=(0===r?t.keyHash:t.keyHash>>>r)&gr,a=(0===r?n:n>>>r)&gr,u=o===a?[At(t,e,r+dr,n,i)]:(s=new vt(e,n,i),a>o?[t,s]:[s,t]);return new pt(e,1<<o|1<<a,u)}function Ft(t,e,r,n){t||(t=new l);for(var i=new vt(t,st(r),[r,n]),s=0;s<e.length;s++){var o=e[s];i=i.update(t,0,void 0,o[0],o[1])}return i}function Kt(t,e,r,n){for(var i=0,s=0,o=new Array(r),a=0,u=1,h=e.length;h>a;a++,u<<=1){var c=e[a];void 0!==c&&a!==n&&(i|=u,o[s++]=c)}return new pt(t,i,o)}function Ut(t,e,r,n,i){for(var s=0,o=new Array(pr),a=0;0!==r;a++,r>>>=1)o[a]=1&r?e[s++]:void 0;return o[n]=i,new gt(t,s+1,o)}function Ot(t,e,n){for(var i=[],o=0;o<n.length;o++){var a=n[o],u=r(a);s(a)||(u=u.map(function(t){return q(t)})),i.push(u)}return Dt(t,e,i)}function Pt(t,e,r){return t&&t.mergeDeep&&s(e)?t.mergeDeep(e):G(t,e)?t:e}function It(t){return function(e,r,n){if(e&&e.mergeDeepWith&&s(r))return e.mergeDeepWith(t,r);var i=t(e,r,n);return G(e,i)?e:i}}function Dt(t,e,r){return r=r.filter(function(t){return 0!==t.size}),0===r.length?t:0!==t.size||t.__ownerID||1!==r.length?t.withMutations(function(t){for(var n=e?function(r,n){t.update(n,yr,function(t){return t===yr?r:e(t,r,n)})}:function(e,r){t.set(r,e)},i=0;i<r.length;i++)r[i].forEach(n)}):t.constructor(r[0])}function Ct(t,e,r,n){var i=t===yr,s=e.next();if(s.done){var o=i?r:t,a=n(o);return a===o?t:a}Z(i||t&&t.set,"invalid keyPath");var u=s.value,h=i?yr:t.get(u,yr),c=Ct(h,e,r,n);return c===h?t:c===yr?t.remove(u):(i?bt():t).set(u,c)}function Tt(t){return t-=t>>1&1431655765,t=(858993459&t)+(t>>2&858993459),t=t+(t>>4)&252645135,t+=t>>8,t+=t>>16,127&t}function jt(t,e,r,n){var i=n?t:d(t);return i[e]=r,i}function Jt(t,e,r,n){var i=t.length+1;if(n&&e+1===i)return t[e]=r,t;for(var s=new Array(i),o=0,a=0;i>a;a++)a===e?(s[a]=r,o=-1):s[a]=t[a+o];return s}function Ht(t,e,r){var n=t.length-1;if(r&&e===n)return t.pop(),t;for(var i=new Array(n),s=0,o=0;n>o;o++)o===e&&(s=1),i[o]=t[o+s];return i}function Bt(t){var e=Lt();if(null===t||void 0===t)return e;if(kt(t))return t;var r=n(t),i=r.size;return 0===i?e:(ct(i),i>0&&pr>i?Vt(0,i,dr,null,new Nt(r.toArray())):e.withMutations(function(t){t.setSize(i),r.forEach(function(e,r){return t.set(r,e)})}))}function kt(t){return!(!t||!t[zr])}function Nt(t,e){this.array=t,this.ownerID=e}function Mt(t,e){function r(t,e,r){return 0===e?n(t,r):i(t,e,r)}function n(t,r){var n=r===a?u&&u.array:t&&t.array,i=r>s?0:s-r,h=o-r;return h>pr&&(h=pr),function(){if(i===h)return Gr;var t=e?--h:i++;return n&&n[t]}}function i(t,n,i){var a,u=t&&t.array,h=i>s?0:s-i>>n,c=(o-i>>n)+1;return c>pr&&(c=pr),function(){for(;;){if(a){var t=a();if(t!==Gr)return t;a=null}if(h===c)return Gr;var s=e?--c:h++;a=r(u&&u[s],n-dr,i+(s<<n))}}}var s=t._origin,o=t._capacity,a=$t(o),u=t._tail;return r(t._root,t._level,0)}function Vt(t,e,r,n,i,s,o){var a=Object.create(Wr);return a.size=e-t,a._origin=t,a._capacity=e,a._level=r,a._root=n,a._tail=i,a.__ownerID=s,a.__hash=o,a.__altered=!1,a}function Lt(){return Yr||(Yr=Vt(0,0,dr))}function qt(t,e,r){if(e=g(t,e),e!==e)return t;if(e>=t.size||0>e)return t.withMutations(function(t){0>e?Gt(t,e).set(0,r):Gt(t,0,e+1).set(e,r)});e+=t._origin;var n=t._tail,i=t._root,s=c(mr);return e>=$t(t._capacity)?n=zt(n,t.__ownerID,0,e,r,s):i=zt(i,t.__ownerID,t._level,e,r,s),s.value?t.__ownerID?(t._root=i,t._tail=n,t.__hash=void 0,t.__altered=!0,t):Vt(t._origin,t._capacity,t._level,i,n):t}function zt(t,e,r,n,i,s){var o=n>>>r&gr,a=t&&o<t.array.length;if(!a&&void 0===i)return t;var u;if(r>0){var h=t&&t.array[o],c=zt(h,e,r-dr,n,i,s);return c===h?t:(u=Wt(t,e),u.array[o]=c,u)}return a&&t.array[o]===i?t:(f(s),u=Wt(t,e),void 0===i&&o===u.array.length-1?u.array.pop():u.array[o]=i,u)}function Wt(t,e){return e&&t&&e===t.ownerID?t:new Nt(t?t.array.slice():[],e)}function Yt(t,e){if(e>=$t(t._capacity))return t._tail;if(e<1<<t._level+dr){for(var r=t._root,n=t._level;r&&n>0;)r=r.array[e>>>n&gr],n-=dr;return r}}function Gt(t,e,r){void 0!==e&&(e=0|e),void 0!==r&&(r=0|r);var n=t.__ownerID||new l,i=t._origin,s=t._capacity,o=i+e,a=void 0===r?s:0>r?s+r:i+r;if(o===i&&a===s)return t;if(o>=a)return t.clear();for(var u=t._level,h=t._root,c=0;0>o+c;)h=new Nt(h&&h.array.length?[void 0,h]:[],n),u+=dr,c+=1<<u;c&&(o+=c,i+=c,a+=c,s+=c);for(var f=$t(s),d=$t(a);d>=1<<u+dr;)h=new Nt(h&&h.array.length?[h]:[],n),u+=dr;var p=t._tail,g=f>d?Yt(t,a-1):d>f?new Nt([],n):p;if(p&&d>f&&s>o&&p.array.length){h=Wt(h,n);for(var y=h,v=u;v>dr;v-=dr){var m=f>>>v&gr;y=y.array[m]=Wt(y.array[m],n)}y.array[f>>>dr&gr]=p}if(s>a&&(g=g&&g.removeAfter(n,0,a)),o>=d)o-=d,a-=d,u=dr,h=null,g=g&&g.removeBefore(n,0,o);else if(o>i||f>d){for(c=0;h;){var S=o>>>u&gr;if(S!==d>>>u&gr)break;S&&(c+=(1<<u)*S),u-=dr,h=h.array[S]}h&&o>i&&(h=h.removeBefore(n,u,o-c)),h&&f>d&&(h=h.removeAfter(n,u,d-c)),c&&(o-=c,a-=c)}return t.__ownerID?(t.size=a-o,t._origin=o,t._capacity=a,t._level=u,t._root=h,t._tail=g,t.__hash=void 0,t.__altered=!0,t):Vt(o,a,u,h,g)}function Xt(t,e,r){for(var i=[],o=0,a=0;a<r.length;a++){var u=r[a],h=n(u);h.size>o&&(o=h.size),s(u)||(h=h.map(function(t){return q(t)})),i.push(h)}return o>t.size&&(t=t.setSize(o)),Dt(t,e,i)}function $t(t){return pr>t?0:t-1>>>dr<<dr}function Zt(t){return null===t||void 0===t?ee():Qt(t)?t:ee().withMutations(function(e){var n=r(t);ct(n.size),n.forEach(function(t,r){return e.set(r,t)})})}function Qt(t){return lt(t)&&h(t)}function te(t,e,r,n){var i=Object.create(Zt.prototype);return i.size=t?t.size:0,i._map=t,i._list=e,i.__ownerID=r,i.__hash=n,i}function ee(){return Xr||(Xr=te(bt(),Lt()))}function re(t,e,r){var n,i,s=t._map,o=t._list,a=s.get(e),u=void 0!==a;if(r===yr){if(!u)return t;o.size>=pr&&o.size>=2*s.size?(i=o.filter(function(t,e){return void 0!==t&&a!==e}),n=i.toKeyedSeq().map(function(t){return t[0]}).flip().toMap(),t.__ownerID&&(n.__ownerID=i.__ownerID=t.__ownerID)):(n=s.remove(e),i=a===o.size-1?o.pop():o.set(a,void 0))}else if(u){if(r===o.get(a)[1])return t;n=s,i=o.set(a,[e,r])}else n=s.set(e,o.size),i=o.set(o.size,[e,r]);return t.__ownerID?(t.size=n.size,t._map=n,t._list=i,t.__hash=void 0,t):te(n,i)}function ne(t,e){this._iter=t,this._useKeys=e,this.size=t.size}function ie(t){this._iter=t,this.size=t.size}function se(t){this._iter=t,this.size=t.size}function oe(t){this._iter=t,this.size=t.size}function ae(t){var e=Ke(t);return e._iter=t,e.size=t.size,e.flip=function(){return t},e.reverse=function(){var e=t.reverse.apply(this);return e.flip=function(){return t.reverse()},e},e.has=function(e){return t.includes(e)},e.includes=function(e){return t.has(e)},e.cacheResult=Ue,e.__iterateUncached=function(e,r){var n=this;return t.__iterate(function(t,r){return e(r,t,n)!==!1},r)},e.__iteratorUncached=function(e,r){if(e===Er){var n=t.__iterator(e,r);return new E(function(){var t=n.next();if(!t.done){var e=t.value[0];t.value[0]=t.value[1],t.value[1]=e}return t})}return t.__iterator(e===_r?Sr:_r,r)},e}function ue(t,e,r){var n=Ke(t);return n.size=t.size,n.has=function(e){return t.has(e)},n.get=function(n,i){var s=t.get(n,yr);return s===yr?i:e.call(r,s,n,t)},n.__iterateUncached=function(n,i){var s=this;return t.__iterate(function(t,i,o){return n(e.call(r,t,i,o),i,s)!==!1},i)},n.__iteratorUncached=function(n,i){var s=t.__iterator(Er,i);return new E(function(){var i=s.next();if(i.done)return i;var o=i.value,a=o[0];return b(n,a,e.call(r,o[1],a,t),i)})},n}function he(t,e){var r=Ke(t);return r._iter=t,r.size=t.size,r.reverse=function(){return t},t.flip&&(r.flip=function(){var e=ae(t);return e.reverse=function(){return t.flip()},e}),r.get=function(r,n){return t.get(e?r:-1-r,n)},r.has=function(r){return t.has(e?r:-1-r)},r.includes=function(e){return t.includes(e)},r.cacheResult=Ue,r.__iterate=function(e,r){var n=this;return t.__iterate(function(t,r){return e(t,r,n)},!r)},r.__iterator=function(e,r){return t.__iterator(e,!r)},r}function ce(t,e,r,n){var i=Ke(t);return n&&(i.has=function(n){var i=t.get(n,yr);return i!==yr&&!!e.call(r,i,n,t)},i.get=function(n,i){var s=t.get(n,yr);return s!==yr&&e.call(r,s,n,t)?s:i}),i.__iterateUncached=function(i,s){var o=this,a=0;return t.__iterate(function(t,s,u){return e.call(r,t,s,u)?(a++,i(t,n?s:a-1,o)):void 0},s),a},i.__iteratorUncached=function(i,s){var o=t.__iterator(Er,s),a=0;return new E(function(){for(;;){var s=o.next();if(s.done)return s;var u=s.value,h=u[0],c=u[1];if(e.call(r,c,h,t))return b(i,n?h:a++,c,s)}})},i}function fe(t,e,r){var n=ft().asMutable();return t.__iterate(function(i,s){n.update(e.call(r,i,s,t),0,function(t){return t+1})}),n.asImmutable()}function le(t,e,r){var n=o(t),i=(h(t)?Zt():ft()).asMutable();t.__iterate(function(s,o){i.update(e.call(r,s,o,t),function(t){return t=t||[],t.push(n?[o,s]:s),t})});var s=Fe(t);return i.map(function(e){return Re(t,s(e))})}function de(t,e,r,n){var i=t.size;if(void 0!==e&&(e=0|e),void 0!==r&&(r=r===1/0?i:0|r),v(e,r,i))return t;var s=m(e,i),o=S(r,i);if(s!==s||o!==o)return de(t.toSeq().cacheResult(),e,r,n);var a,u=o-s;u===u&&(a=0>u?0:u);var h=Ke(t);return h.size=0===a?a:t.size&&a||void 0,!n&&J(t)&&a>=0&&(h.get=function(e,r){return e=g(this,e),e>=0&&a>e?t.get(e+s,r):r}),h.__iterateUncached=function(e,r){var i=this;if(0===a)return 0;if(r)return this.cacheResult().__iterate(e,r);var o=0,u=!0,h=0;return t.__iterate(function(t,r){return u&&(u=o++<s)?void 0:(h++,e(t,n?r:h-1,i)!==!1&&h!==a)}),h},h.__iteratorUncached=function(e,r){if(0!==a&&r)return this.cacheResult().__iterator(e,r);var i=0!==a&&t.__iterator(e,r),o=0,u=0;return new E(function(){for(;o++<s;)i.next();if(++u>a)return w();var t=i.next();return n||e===_r?t:e===Sr?b(e,u-1,void 0,t):b(e,u-1,t.value[1],t)})},h}function pe(t,e,r){var n=Ke(t);return n.__iterateUncached=function(n,i){var s=this;if(i)return this.cacheResult().__iterate(n,i);var o=0;return t.__iterate(function(t,i,a){return e.call(r,t,i,a)&&++o&&n(t,i,s)}),o},n.__iteratorUncached=function(n,i){var s=this;if(i)return this.cacheResult().__iterator(n,i);var o=t.__iterator(Er,i),a=!0;return new E(function(){if(!a)return w();var t=o.next();if(t.done)return t;var i=t.value,u=i[0],h=i[1];return e.call(r,h,u,s)?n===Er?t:b(n,u,h,t):(a=!1,w())})},n}function ge(t,e,r,n){var i=Ke(t);return i.__iterateUncached=function(i,s){var o=this;if(s)return this.cacheResult().__iterate(i,s);var a=!0,u=0;return t.__iterate(function(t,s,h){return a&&(a=e.call(r,t,s,h))?void 0:(u++,i(t,n?s:u-1,o))}),u},i.__iteratorUncached=function(i,s){var o=this;if(s)return this.cacheResult().__iterator(i,s);var a=t.__iterator(Er,s),u=!0,h=0;return new E(function(){var t,s,c;do{if(t=a.next(),t.done)return n||i===_r?t:i===Sr?b(i,h++,void 0,t):b(i,h++,t.value[1],t);var f=t.value;s=f[0],c=f[1],u&&(u=e.call(r,c,s,o))}while(u);return i===Er?t:b(i,s,c,t)})},i}function ye(t,e){var n=o(t),i=[t].concat(e).map(function(t){return s(t)?n&&(t=r(t)):t=n?B(t):k(Array.isArray(t)?t:[t]),t}).filter(function(t){return 0!==t.size});if(0===i.length)return t;if(1===i.length){var u=i[0];if(u===t||n&&o(u)||a(t)&&a(u))return u}var h=new D(i);return n?h=h.toKeyedSeq():a(t)||(h=h.toSetSeq()),h=h.flatten(!0),h.size=i.reduce(function(t,e){if(void 0!==t){var r=e.size;if(void 0!==r)return t+r}},0),h}function ve(t,e,r){var n=Ke(t);return n.__iterateUncached=function(n,i){function o(t,h){var c=this;t.__iterate(function(t,i){return(!e||e>h)&&s(t)?o(t,h+1):n(t,r?i:a++,c)===!1&&(u=!0),!u},i)}var a=0,u=!1;return o(t,0),a},n.__iteratorUncached=function(n,i){var o=t.__iterator(n,i),a=[],u=0;return new E(function(){for(;o;){var t=o.next();if(t.done===!1){var h=t.value;if(n===Er&&(h=h[1]),e&&!(a.length<e)||!s(h))return r?t:b(n,u++,h,t);a.push(o),o=h.__iterator(n,i)}else o=a.pop()}return w()})},n}function me(t,e,r){var n=Fe(t);return t.toSeq().map(function(i,s){return n(e.call(r,i,s,t))}).flatten(!0)}function Se(t,e){var r=Ke(t);return r.size=t.size&&2*t.size-1,r.__iterateUncached=function(r,n){var i=this,s=0;return t.__iterate(function(t,n){return(!s||r(e,s++,i)!==!1)&&r(t,s++,i)!==!1},n),s},r.__iteratorUncached=function(r,n){var i,s=t.__iterator(_r,n),o=0;return new E(function(){return(!i||o%2)&&(i=s.next(),i.done)?i:o%2?b(r,o++,e):b(r,o++,i.value,i)})},r}function _e(t,e,r){e||(e=Oe);var n=o(t),i=0,s=t.toSeq().map(function(e,n){return[n,e,i++,r?r(e,n,t):e]}).toArray();return s.sort(function(t,r){return e(t[3],r[3])||t[2]-r[2]}).forEach(n?function(t,e){s[e].length=2}:function(t,e){s[e]=t[1]}),n?O(s):a(t)?P(s):I(s)}function Ee(t,e,r){if(e||(e=Oe),r){var n=t.toSeq().map(function(e,n){return[e,r(e,n,t)]}).reduce(function(t,r){return be(e,t[1],r[1])?r:t});return n&&n[0]}return t.reduce(function(t,r){return be(e,t,r)?r:t})}function be(t,e,r){var n=t(r,e);return 0===n&&r!==e&&(void 0===r||null===r||r!==r)||n>0}function we(t,r,n){var i=Ke(t);return i.size=new D(n).map(function(t){return t.size}).min(),i.__iterate=function(t,e){for(var r,n=this.__iterator(_r,e),i=0;!(r=n.next()).done&&t(r.value,i++,this)!==!1;);return i},i.__iteratorUncached=function(t,i){var s=n.map(function(t){return t=e(t),A(i?t.reverse():t)}),o=0,a=!1;return new E(function(){var e;return a||(e=s.map(function(t){return t.next()}),a=e.some(function(t){return t.done})),a?w():b(t,o++,r.apply(null,e.map(function(t){return t.value})))})},i}function Re(t,e){return J(t)?e:t.constructor(e)}function xe(t){if(t!==Object(t))throw new TypeError("Expected [K, V] tuple: "+t)}function Ae(t){return ct(t.size),p(t)}function Fe(t){return o(t)?r:a(t)?n:i}function Ke(t){return Object.create((o(t)?O:a(t)?P:I).prototype)}function Ue(){return this._iter.cacheResult?(this._iter.cacheResult(),this.size=this._iter.size,this):U.prototype.cacheResult.call(this)}function Oe(t,e){return t>e?1:e>t?-1:0}function Pe(t){var r=A(t);if(!r){if(!K(t))throw new TypeError("Expected iterable or array-like: "+t);r=A(e(t))}return r}function Ie(t,e){var r,n=function(s){if(s instanceof n)return s;if(!(this instanceof n))return new n(s);if(!r){r=!0;var o=Object.keys(t);Te(i,o),i.size=o.length,i._name=e,i._keys=o,i._defaultValues=t}this._map=ft(s)},i=n.prototype=Object.create($r);return i.constructor=n,n}function De(t,e,r){var n=Object.create(Object.getPrototypeOf(t));return n._map=e,n.__ownerID=r,n}function Ce(t){return t._name||t.constructor.name||"Record"}function Te(t,e){try{e.forEach(je.bind(void 0,t))}catch(r){}}function je(t,e){Object.defineProperty(t,e,{
	get:function(){return this.get(e)},set:function(t){Z(this.__ownerID,"Cannot set on an immutable record."),this.set(e,t)}})}function Je(t){return null===t||void 0===t?Ne():He(t)&&!h(t)?t:Ne().withMutations(function(e){var r=i(t);ct(r.size),r.forEach(function(t){return e.add(t)})})}function He(t){return!(!t||!t[Zr])}function Be(t,e){return t.__ownerID?(t.size=e.size,t._map=e,t):e===t._map?t:0===e.size?t.__empty():t.__make(e)}function ke(t,e){var r=Object.create(Qr);return r.size=t?t.size:0,r._map=t,r.__ownerID=e,r}function Ne(){return tn||(tn=ke(bt()))}function Me(t){return null===t||void 0===t?qe():Ve(t)?t:qe().withMutations(function(e){var r=i(t);ct(r.size),r.forEach(function(t){return e.add(t)})})}function Ve(t){return He(t)&&h(t)}function Le(t,e){var r=Object.create(en);return r.size=t?t.size:0,r._map=t,r.__ownerID=e,r}function qe(){return rn||(rn=Le(ee()))}function ze(t){return null===t||void 0===t?Ge():We(t)?t:Ge().unshiftAll(t)}function We(t){return!(!t||!t[nn])}function Ye(t,e,r,n){var i=Object.create(sn);return i.size=t,i._head=e,i.__ownerID=r,i.__hash=n,i.__altered=!1,i}function Ge(){return on||(on=Ye(0))}function Xe(t,e){var r=function(r){t.prototype[r]=e[r]};return Object.keys(e).forEach(r),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(e).forEach(r),t}function $e(t,e){return e}function Ze(t,e){return[e,t]}function Qe(t){return function(){return!t.apply(this,arguments)}}function tr(t){return function(){return-t.apply(this,arguments)}}function er(t){return"string"==typeof t?JSON.stringify(t):String(t)}function rr(){return d(arguments)}function nr(t,e){return e>t?1:t>e?-1:0}function ir(t){if(t.size===1/0)return 0;var e=h(t),r=o(t),n=e?1:0,i=t.__iterate(r?e?function(t,e){n=31*n+or(st(t),st(e))|0}:function(t,e){n=n+or(st(t),st(e))|0}:e?function(t){n=31*n+st(t)|0}:function(t){n=n+st(t)|0});return sr(i,n)}function sr(t,e){return e=Or(e,3432918353),e=Or(e<<15|e>>>-15,461845907),e=Or(e<<13|e>>>-13,5),e=(e+3864292196|0)^t,e=Or(e^e>>>16,2246822507),e=Or(e^e>>>13,3266489909),e=it(e^e>>>16)}function or(t,e){return t^e+2654435769+(t<<6)+(t>>2)|0}var ar=Array.prototype.slice;t(r,e),t(n,e),t(i,e),e.isIterable=s,e.isKeyed=o,e.isIndexed=a,e.isAssociative=u,e.isOrdered=h,e.Keyed=r,e.Indexed=n,e.Set=i;var ur="@@__IMMUTABLE_ITERABLE__@@",hr="@@__IMMUTABLE_KEYED__@@",cr="@@__IMMUTABLE_INDEXED__@@",fr="@@__IMMUTABLE_ORDERED__@@",lr="delete",dr=5,pr=1<<dr,gr=pr-1,yr={},vr={value:!1},mr={value:!1},Sr=0,_r=1,Er=2,br="function"==typeof Symbol&&Symbol.iterator,wr="@@iterator",Rr=br||wr;E.prototype.toString=function(){return"[Iterator]"},E.KEYS=Sr,E.VALUES=_r,E.ENTRIES=Er,E.prototype.inspect=E.prototype.toSource=function(){return this.toString()},E.prototype[Rr]=function(){return this},t(U,e),U.of=function(){return U(arguments)},U.prototype.toSeq=function(){return this},U.prototype.toString=function(){return this.__toString("Seq {","}")},U.prototype.cacheResult=function(){return!this._cache&&this.__iterateUncached&&(this._cache=this.entrySeq().toArray(),this.size=this._cache.length),this},U.prototype.__iterate=function(t,e){return V(this,t,e,!0)},U.prototype.__iterator=function(t,e){return L(this,t,e,!0)},t(O,U),O.prototype.toKeyedSeq=function(){return this},t(P,U),P.of=function(){return P(arguments)},P.prototype.toIndexedSeq=function(){return this},P.prototype.toString=function(){return this.__toString("Seq [","]")},P.prototype.__iterate=function(t,e){return V(this,t,e,!1)},P.prototype.__iterator=function(t,e){return L(this,t,e,!1)},t(I,U),I.of=function(){return I(arguments)},I.prototype.toSetSeq=function(){return this},U.isSeq=J,U.Keyed=O,U.Set=I,U.Indexed=P;var xr="@@__IMMUTABLE_SEQ__@@";U.prototype[xr]=!0,t(D,P),D.prototype.get=function(t,e){return this.has(t)?this._array[g(this,t)]:e},D.prototype.__iterate=function(t,e){for(var r=this._array,n=r.length-1,i=0;n>=i;i++)if(t(r[e?n-i:i],i,this)===!1)return i+1;return i},D.prototype.__iterator=function(t,e){var r=this._array,n=r.length-1,i=0;return new E(function(){return i>n?w():b(t,i,r[e?n-i++:i++])})},t(C,O),C.prototype.get=function(t,e){return void 0===e||this.has(t)?this._object[t]:e},C.prototype.has=function(t){return this._object.hasOwnProperty(t)},C.prototype.__iterate=function(t,e){for(var r=this._object,n=this._keys,i=n.length-1,s=0;i>=s;s++){var o=n[e?i-s:s];if(t(r[o],o,this)===!1)return s+1}return s},C.prototype.__iterator=function(t,e){var r=this._object,n=this._keys,i=n.length-1,s=0;return new E(function(){var o=n[e?i-s:s];return s++>i?w():b(t,o,r[o])})},C.prototype[fr]=!0,t(T,P),T.prototype.__iterateUncached=function(t,e){if(e)return this.cacheResult().__iterate(t,e);var r=this._iterable,n=A(r),i=0;if(x(n))for(var s;!(s=n.next()).done&&t(s.value,i++,this)!==!1;);return i},T.prototype.__iteratorUncached=function(t,e){if(e)return this.cacheResult().__iterator(t,e);var r=this._iterable,n=A(r);if(!x(n))return new E(w);var i=0;return new E(function(){var e=n.next();return e.done?e:b(t,i++,e.value)})},t(j,P),j.prototype.__iterateUncached=function(t,e){if(e)return this.cacheResult().__iterate(t,e);for(var r=this._iterator,n=this._iteratorCache,i=0;i<n.length;)if(t(n[i],i++,this)===!1)return i;for(var s;!(s=r.next()).done;){var o=s.value;if(n[i]=o,t(o,i++,this)===!1)break}return i},j.prototype.__iteratorUncached=function(t,e){if(e)return this.cacheResult().__iterator(t,e);var r=this._iterator,n=this._iteratorCache,i=0;return new E(function(){if(i>=n.length){var e=r.next();if(e.done)return e;n[i]=e.value}return b(t,i,n[i++])})};var Ar;t($,P),$.prototype.toString=function(){return 0===this.size?"Repeat []":"Repeat [ "+this._value+" "+this.size+" times ]"},$.prototype.get=function(t,e){return this.has(t)?this._value:e},$.prototype.includes=function(t){return G(this._value,t)},$.prototype.slice=function(t,e){var r=this.size;return v(t,e,r)?this:new $(this._value,S(e,r)-m(t,r))},$.prototype.reverse=function(){return this},$.prototype.indexOf=function(t){return G(this._value,t)?0:-1},$.prototype.lastIndexOf=function(t){return G(this._value,t)?this.size:-1},$.prototype.__iterate=function(t,e){for(var r=0;r<this.size;r++)if(t(this._value,r,this)===!1)return r+1;return r},$.prototype.__iterator=function(t,e){var r=this,n=0;return new E(function(){return n<r.size?b(t,n++,r._value):w()})},$.prototype.equals=function(t){return t instanceof $?G(this._value,t._value):X(t)};var Fr;t(Q,P),Q.prototype.toString=function(){return 0===this.size?"Range []":"Range [ "+this._start+"..."+this._end+(1!==this._step?" by "+this._step:"")+" ]"},Q.prototype.get=function(t,e){return this.has(t)?this._start+g(this,t)*this._step:e},Q.prototype.includes=function(t){var e=(t-this._start)/this._step;return e>=0&&e<this.size&&e===Math.floor(e)},Q.prototype.slice=function(t,e){return v(t,e,this.size)?this:(t=m(t,this.size),e=S(e,this.size),t>=e?new Q(0,0):new Q(this.get(t,this._end),this.get(e,this._end),this._step))},Q.prototype.indexOf=function(t){var e=t-this._start;if(e%this._step===0){var r=e/this._step;if(r>=0&&r<this.size)return r}return-1},Q.prototype.lastIndexOf=function(t){return this.indexOf(t)},Q.prototype.__iterate=function(t,e){for(var r=this.size-1,n=this._step,i=e?this._start+r*n:this._start,s=0;r>=s;s++){if(t(i,s,this)===!1)return s+1;i+=e?-n:n}return s},Q.prototype.__iterator=function(t,e){var r=this.size-1,n=this._step,i=e?this._start+r*n:this._start,s=0;return new E(function(){var o=i;return i+=e?-n:n,s>r?w():b(t,s++,o)})},Q.prototype.equals=function(t){return t instanceof Q?this._start===t._start&&this._end===t._end&&this._step===t._step:X(this,t)};var Kr;t(tt,e),t(et,tt),t(rt,tt),t(nt,tt),tt.Keyed=et,tt.Indexed=rt,tt.Set=nt;var Ur,Or="function"==typeof Math.imul&&-2===Math.imul(4294967295,2)?Math.imul:function(t,e){t=0|t,e=0|e;var r=65535&t,n=65535&e;return r*n+((t>>>16)*n+r*(e>>>16)<<16>>>0)|0},Pr=Object.isExtensible,Ir=function(){try{return Object.defineProperty({},"@",{}),!0}catch(t){return!1}}(),Dr="function"==typeof WeakMap;Dr&&(Ur=new WeakMap);var Cr=0,Tr="__immutablehash__";"function"==typeof Symbol&&(Tr=Symbol(Tr));var jr=16,Jr=255,Hr=0,Br={};t(ft,et),ft.of=function(){var t=ar.call(arguments,0);return bt().withMutations(function(e){for(var r=0;r<t.length;r+=2){if(r+1>=t.length)throw new Error("Missing value for key: "+t[r]);e.set(t[r],t[r+1])}})},ft.prototype.toString=function(){return this.__toString("Map {","}")},ft.prototype.get=function(t,e){return this._root?this._root.get(0,void 0,t,e):e},ft.prototype.set=function(t,e){return wt(this,t,e)},ft.prototype.setIn=function(t,e){return this.updateIn(t,yr,function(){return e})},ft.prototype.remove=function(t){return wt(this,t,yr)},ft.prototype.deleteIn=function(t){return this.updateIn(t,function(){return yr})},ft.prototype.update=function(t,e,r){return 1===arguments.length?t(this):this.updateIn([t],e,r)},ft.prototype.updateIn=function(t,e,r){r||(r=e,e=void 0);var n=Ct(this,Pe(t),e,r);return n===yr?void 0:n},ft.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._root=null,this.__hash=void 0,this.__altered=!0,this):bt()},ft.prototype.merge=function(){return Ot(this,void 0,arguments)},ft.prototype.mergeWith=function(t){var e=ar.call(arguments,1);return Ot(this,t,e)},ft.prototype.mergeIn=function(t){var e=ar.call(arguments,1);return this.updateIn(t,bt(),function(t){return"function"==typeof t.merge?t.merge.apply(t,e):e[e.length-1]})},ft.prototype.mergeDeep=function(){return Ot(this,Pt,arguments)},ft.prototype.mergeDeepWith=function(t){var e=ar.call(arguments,1);return Ot(this,It(t),e)},ft.prototype.mergeDeepIn=function(t){var e=ar.call(arguments,1);return this.updateIn(t,bt(),function(t){return"function"==typeof t.mergeDeep?t.mergeDeep.apply(t,e):e[e.length-1]})},ft.prototype.sort=function(t){return Zt(_e(this,t))},ft.prototype.sortBy=function(t,e){return Zt(_e(this,e,t))},ft.prototype.withMutations=function(t){var e=this.asMutable();return t(e),e.wasAltered()?e.__ensureOwner(this.__ownerID):this},ft.prototype.asMutable=function(){return this.__ownerID?this:this.__ensureOwner(new l)},ft.prototype.asImmutable=function(){return this.__ensureOwner()},ft.prototype.wasAltered=function(){return this.__altered},ft.prototype.__iterator=function(t,e){return new mt(this,t,e)},ft.prototype.__iterate=function(t,e){var r=this,n=0;return this._root&&this._root.iterate(function(e){return n++,t(e[1],e[0],r)},e),n},ft.prototype.__ensureOwner=function(t){return t===this.__ownerID?this:t?Et(this.size,this._root,t,this.__hash):(this.__ownerID=t,this.__altered=!1,this)},ft.isMap=lt;var kr="@@__IMMUTABLE_MAP__@@",Nr=ft.prototype;Nr[kr]=!0,Nr[lr]=Nr.remove,Nr.removeIn=Nr.deleteIn,dt.prototype.get=function(t,e,r,n){for(var i=this.entries,s=0,o=i.length;o>s;s++)if(G(r,i[s][0]))return i[s][1];return n},dt.prototype.update=function(t,e,r,n,i,s,o){for(var a=i===yr,u=this.entries,h=0,c=u.length;c>h&&!G(n,u[h][0]);h++);var l=c>h;if(l?u[h][1]===i:a)return this;if(f(o),(a||!l)&&f(s),!a||1!==u.length){if(!l&&!a&&u.length>=Vr)return Ft(t,u,n,i);var p=t&&t===this.ownerID,g=p?u:d(u);return l?a?h===c-1?g.pop():g[h]=g.pop():g[h]=[n,i]:g.push([n,i]),p?(this.entries=g,this):new dt(t,g)}},pt.prototype.get=function(t,e,r,n){void 0===e&&(e=st(r));var i=1<<((0===t?e:e>>>t)&gr),s=this.bitmap;return 0===(s&i)?n:this.nodes[Tt(s&i-1)].get(t+dr,e,r,n)},pt.prototype.update=function(t,e,r,n,i,s,o){void 0===r&&(r=st(n));var a=(0===e?r:r>>>e)&gr,u=1<<a,h=this.bitmap,c=0!==(h&u);if(!c&&i===yr)return this;var f=Tt(h&u-1),l=this.nodes,d=c?l[f]:void 0,p=Rt(d,t,e+dr,r,n,i,s,o);if(p===d)return this;if(!c&&p&&l.length>=Lr)return Ut(t,l,h,a,p);if(c&&!p&&2===l.length&&xt(l[1^f]))return l[1^f];if(c&&p&&1===l.length&&xt(p))return p;var g=t&&t===this.ownerID,y=c?p?h:h^u:h|u,v=c?p?jt(l,f,p,g):Ht(l,f,g):Jt(l,f,p,g);return g?(this.bitmap=y,this.nodes=v,this):new pt(t,y,v)},gt.prototype.get=function(t,e,r,n){void 0===e&&(e=st(r));var i=(0===t?e:e>>>t)&gr,s=this.nodes[i];return s?s.get(t+dr,e,r,n):n},gt.prototype.update=function(t,e,r,n,i,s,o){void 0===r&&(r=st(n));var a=(0===e?r:r>>>e)&gr,u=i===yr,h=this.nodes,c=h[a];if(u&&!c)return this;var f=Rt(c,t,e+dr,r,n,i,s,o);if(f===c)return this;var l=this.count;if(c){if(!f&&(l--,qr>l))return Kt(t,h,l,a)}else l++;var d=t&&t===this.ownerID,p=jt(h,a,f,d);return d?(this.count=l,this.nodes=p,this):new gt(t,l,p)},yt.prototype.get=function(t,e,r,n){for(var i=this.entries,s=0,o=i.length;o>s;s++)if(G(r,i[s][0]))return i[s][1];return n},yt.prototype.update=function(t,e,r,n,i,s,o){void 0===r&&(r=st(n));var a=i===yr;if(r!==this.keyHash)return a?this:(f(o),f(s),At(this,t,e,r,[n,i]));for(var u=this.entries,h=0,c=u.length;c>h&&!G(n,u[h][0]);h++);var l=c>h;if(l?u[h][1]===i:a)return this;if(f(o),(a||!l)&&f(s),a&&2===c)return new vt(t,this.keyHash,u[1^h]);var p=t&&t===this.ownerID,g=p?u:d(u);return l?a?h===c-1?g.pop():g[h]=g.pop():g[h]=[n,i]:g.push([n,i]),p?(this.entries=g,this):new yt(t,this.keyHash,g)},vt.prototype.get=function(t,e,r,n){return G(r,this.entry[0])?this.entry[1]:n},vt.prototype.update=function(t,e,r,n,i,s,o){var a=i===yr,u=G(n,this.entry[0]);return(u?i===this.entry[1]:a)?this:(f(o),a?void f(s):u?t&&t===this.ownerID?(this.entry[1]=i,this):new vt(t,this.keyHash,[n,i]):(f(s),At(this,t,e,st(n),[n,i])))},dt.prototype.iterate=yt.prototype.iterate=function(t,e){for(var r=this.entries,n=0,i=r.length-1;i>=n;n++)if(t(r[e?i-n:n])===!1)return!1},pt.prototype.iterate=gt.prototype.iterate=function(t,e){for(var r=this.nodes,n=0,i=r.length-1;i>=n;n++){var s=r[e?i-n:n];if(s&&s.iterate(t,e)===!1)return!1}},vt.prototype.iterate=function(t,e){return t(this.entry)},t(mt,E),mt.prototype.next=function(){for(var t=this._type,e=this._stack;e;){var r,n=e.node,i=e.index++;if(n.entry){if(0===i)return St(t,n.entry)}else if(n.entries){if(r=n.entries.length-1,r>=i)return St(t,n.entries[this._reverse?r-i:i])}else if(r=n.nodes.length-1,r>=i){var s=n.nodes[this._reverse?r-i:i];if(s){if(s.entry)return St(t,s.entry);e=this._stack=_t(s,e)}continue}e=this._stack=this._stack.__prev}return w()};var Mr,Vr=pr/4,Lr=pr/2,qr=pr/4;t(Bt,rt),Bt.of=function(){return this(arguments)},Bt.prototype.toString=function(){return this.__toString("List [","]")},Bt.prototype.get=function(t,e){if(t=g(this,t),t>=0&&t<this.size){t+=this._origin;var r=Yt(this,t);return r&&r.array[t&gr]}return e},Bt.prototype.set=function(t,e){return qt(this,t,e)},Bt.prototype.remove=function(t){return this.has(t)?0===t?this.shift():t===this.size-1?this.pop():this.splice(t,1):this},Bt.prototype.insert=function(t,e){return this.splice(t,0,e)},Bt.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=this._origin=this._capacity=0,this._level=dr,this._root=this._tail=null,this.__hash=void 0,this.__altered=!0,this):Lt()},Bt.prototype.push=function(){var t=arguments,e=this.size;return this.withMutations(function(r){Gt(r,0,e+t.length);for(var n=0;n<t.length;n++)r.set(e+n,t[n])})},Bt.prototype.pop=function(){return Gt(this,0,-1)},Bt.prototype.unshift=function(){var t=arguments;return this.withMutations(function(e){Gt(e,-t.length);for(var r=0;r<t.length;r++)e.set(r,t[r])})},Bt.prototype.shift=function(){return Gt(this,1)},Bt.prototype.merge=function(){return Xt(this,void 0,arguments)},Bt.prototype.mergeWith=function(t){var e=ar.call(arguments,1);return Xt(this,t,e)},Bt.prototype.mergeDeep=function(){return Xt(this,Pt,arguments)},Bt.prototype.mergeDeepWith=function(t){var e=ar.call(arguments,1);return Xt(this,It(t),e)},Bt.prototype.setSize=function(t){return Gt(this,0,t)},Bt.prototype.slice=function(t,e){var r=this.size;return v(t,e,r)?this:Gt(this,m(t,r),S(e,r))},Bt.prototype.__iterator=function(t,e){var r=0,n=Mt(this,e);return new E(function(){var e=n();return e===Gr?w():b(t,r++,e)})},Bt.prototype.__iterate=function(t,e){for(var r,n=0,i=Mt(this,e);(r=i())!==Gr&&t(r,n++,this)!==!1;);return n},Bt.prototype.__ensureOwner=function(t){return t===this.__ownerID?this:t?Vt(this._origin,this._capacity,this._level,this._root,this._tail,t,this.__hash):(this.__ownerID=t,this)},Bt.isList=kt;var zr="@@__IMMUTABLE_LIST__@@",Wr=Bt.prototype;Wr[zr]=!0,Wr[lr]=Wr.remove,Wr.setIn=Nr.setIn,Wr.deleteIn=Wr.removeIn=Nr.removeIn,Wr.update=Nr.update,Wr.updateIn=Nr.updateIn,Wr.mergeIn=Nr.mergeIn,Wr.mergeDeepIn=Nr.mergeDeepIn,Wr.withMutations=Nr.withMutations,Wr.asMutable=Nr.asMutable,Wr.asImmutable=Nr.asImmutable,Wr.wasAltered=Nr.wasAltered,Nt.prototype.removeBefore=function(t,e,r){if(r===e?1<<e:0===this.array.length)return this;var n=r>>>e&gr;if(n>=this.array.length)return new Nt([],t);var i,s=0===n;if(e>0){var o=this.array[n];if(i=o&&o.removeBefore(t,e-dr,r),i===o&&s)return this}if(s&&!i)return this;var a=Wt(this,t);if(!s)for(var u=0;n>u;u++)a.array[u]=void 0;return i&&(a.array[n]=i),a},Nt.prototype.removeAfter=function(t,e,r){if(r===(e?1<<e:0)||0===this.array.length)return this;var n=r-1>>>e&gr;if(n>=this.array.length)return this;var i;if(e>0){var s=this.array[n];if(i=s&&s.removeAfter(t,e-dr,r),i===s&&n===this.array.length-1)return this}var o=Wt(this,t);return o.array.splice(n+1),i&&(o.array[n]=i),o};var Yr,Gr={};t(Zt,ft),Zt.of=function(){return this(arguments)},Zt.prototype.toString=function(){return this.__toString("OrderedMap {","}")},Zt.prototype.get=function(t,e){var r=this._map.get(t);return void 0!==r?this._list.get(r)[1]:e},Zt.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._map.clear(),this._list.clear(),this):ee()},Zt.prototype.set=function(t,e){return re(this,t,e)},Zt.prototype.remove=function(t){return re(this,t,yr)},Zt.prototype.wasAltered=function(){return this._map.wasAltered()||this._list.wasAltered()},Zt.prototype.__iterate=function(t,e){var r=this;return this._list.__iterate(function(e){return e&&t(e[1],e[0],r)},e)},Zt.prototype.__iterator=function(t,e){return this._list.fromEntrySeq().__iterator(t,e)},Zt.prototype.__ensureOwner=function(t){if(t===this.__ownerID)return this;var e=this._map.__ensureOwner(t),r=this._list.__ensureOwner(t);return t?te(e,r,t,this.__hash):(this.__ownerID=t,this._map=e,this._list=r,this)},Zt.isOrderedMap=Qt,Zt.prototype[fr]=!0,Zt.prototype[lr]=Zt.prototype.remove;var Xr;t(ne,O),ne.prototype.get=function(t,e){return this._iter.get(t,e)},ne.prototype.has=function(t){return this._iter.has(t)},ne.prototype.valueSeq=function(){return this._iter.valueSeq()},ne.prototype.reverse=function(){var t=this,e=he(this,!0);return this._useKeys||(e.valueSeq=function(){return t._iter.toSeq().reverse()}),e},ne.prototype.map=function(t,e){var r=this,n=ue(this,t,e);return this._useKeys||(n.valueSeq=function(){return r._iter.toSeq().map(t,e)}),n},ne.prototype.__iterate=function(t,e){var r,n=this;return this._iter.__iterate(this._useKeys?function(e,r){return t(e,r,n)}:(r=e?Ae(this):0,function(i){return t(i,e?--r:r++,n)}),e)},ne.prototype.__iterator=function(t,e){if(this._useKeys)return this._iter.__iterator(t,e);var r=this._iter.__iterator(_r,e),n=e?Ae(this):0;return new E(function(){var i=r.next();return i.done?i:b(t,e?--n:n++,i.value,i)})},ne.prototype[fr]=!0,t(ie,P),ie.prototype.includes=function(t){return this._iter.includes(t)},ie.prototype.__iterate=function(t,e){var r=this,n=0;return this._iter.__iterate(function(e){return t(e,n++,r)},e)},ie.prototype.__iterator=function(t,e){var r=this._iter.__iterator(_r,e),n=0;return new E(function(){var e=r.next();return e.done?e:b(t,n++,e.value,e)})},t(se,I),se.prototype.has=function(t){return this._iter.includes(t)},se.prototype.__iterate=function(t,e){var r=this;return this._iter.__iterate(function(e){return t(e,e,r)},e)},se.prototype.__iterator=function(t,e){var r=this._iter.__iterator(_r,e);return new E(function(){var e=r.next();return e.done?e:b(t,e.value,e.value,e)})},t(oe,O),oe.prototype.entrySeq=function(){return this._iter.toSeq()},oe.prototype.__iterate=function(t,e){var r=this;return this._iter.__iterate(function(e){if(e){xe(e);var n=s(e);return t(n?e.get(1):e[1],n?e.get(0):e[0],r)}},e)},oe.prototype.__iterator=function(t,e){var r=this._iter.__iterator(_r,e);return new E(function(){for(;;){var e=r.next();if(e.done)return e;var n=e.value;if(n){xe(n);var i=s(n);return b(t,i?n.get(0):n[0],i?n.get(1):n[1],e)}}})},ie.prototype.cacheResult=ne.prototype.cacheResult=se.prototype.cacheResult=oe.prototype.cacheResult=Ue,t(Ie,et),Ie.prototype.toString=function(){return this.__toString(Ce(this)+" {","}")},Ie.prototype.has=function(t){return this._defaultValues.hasOwnProperty(t)},Ie.prototype.get=function(t,e){if(!this.has(t))return e;var r=this._defaultValues[t];return this._map?this._map.get(t,r):r},Ie.prototype.clear=function(){if(this.__ownerID)return this._map&&this._map.clear(),this;var t=this.constructor;return t._empty||(t._empty=De(this,bt()))},Ie.prototype.set=function(t,e){if(!this.has(t))throw new Error('Cannot set unknown key "'+t+'" on '+Ce(this));if(this._map&&!this._map.has(t)){var r=this._defaultValues[t];if(e===r)return this}var n=this._map&&this._map.set(t,e);return this.__ownerID||n===this._map?this:De(this,n)},Ie.prototype.remove=function(t){if(!this.has(t))return this;var e=this._map&&this._map.remove(t);return this.__ownerID||e===this._map?this:De(this,e)},Ie.prototype.wasAltered=function(){return this._map.wasAltered()},Ie.prototype.__iterator=function(t,e){var n=this;return r(this._defaultValues).map(function(t,e){return n.get(e)}).__iterator(t,e)},Ie.prototype.__iterate=function(t,e){var n=this;return r(this._defaultValues).map(function(t,e){return n.get(e)}).__iterate(t,e)},Ie.prototype.__ensureOwner=function(t){if(t===this.__ownerID)return this;var e=this._map&&this._map.__ensureOwner(t);return t?De(this,e,t):(this.__ownerID=t,this._map=e,this)};var $r=Ie.prototype;$r[lr]=$r.remove,$r.deleteIn=$r.removeIn=Nr.removeIn,$r.merge=Nr.merge,$r.mergeWith=Nr.mergeWith,$r.mergeIn=Nr.mergeIn,$r.mergeDeep=Nr.mergeDeep,$r.mergeDeepWith=Nr.mergeDeepWith,$r.mergeDeepIn=Nr.mergeDeepIn,$r.setIn=Nr.setIn,$r.update=Nr.update,$r.updateIn=Nr.updateIn,$r.withMutations=Nr.withMutations,$r.asMutable=Nr.asMutable,$r.asImmutable=Nr.asImmutable,t(Je,nt),Je.of=function(){return this(arguments)},Je.fromKeys=function(t){return this(r(t).keySeq())},Je.prototype.toString=function(){return this.__toString("Set {","}")},Je.prototype.has=function(t){return this._map.has(t)},Je.prototype.add=function(t){return Be(this,this._map.set(t,!0))},Je.prototype.remove=function(t){return Be(this,this._map.remove(t))},Je.prototype.clear=function(){return Be(this,this._map.clear())},Je.prototype.union=function(){var t=ar.call(arguments,0);return t=t.filter(function(t){return 0!==t.size}),0===t.length?this:0!==this.size||this.__ownerID||1!==t.length?this.withMutations(function(e){for(var r=0;r<t.length;r++)i(t[r]).forEach(function(t){return e.add(t)})}):this.constructor(t[0])},Je.prototype.intersect=function(){var t=ar.call(arguments,0);if(0===t.length)return this;t=t.map(function(t){return i(t)});var e=this;return this.withMutations(function(r){e.forEach(function(e){t.every(function(t){return t.includes(e)})||r.remove(e)})})},Je.prototype.subtract=function(){var t=ar.call(arguments,0);if(0===t.length)return this;t=t.map(function(t){return i(t)});var e=this;return this.withMutations(function(r){e.forEach(function(e){t.some(function(t){return t.includes(e)})&&r.remove(e)})})},Je.prototype.merge=function(){return this.union.apply(this,arguments)},Je.prototype.mergeWith=function(t){var e=ar.call(arguments,1);return this.union.apply(this,e)},Je.prototype.sort=function(t){return Me(_e(this,t))},Je.prototype.sortBy=function(t,e){return Me(_e(this,e,t))},Je.prototype.wasAltered=function(){return this._map.wasAltered()},Je.prototype.__iterate=function(t,e){var r=this;return this._map.__iterate(function(e,n){return t(n,n,r)},e)},Je.prototype.__iterator=function(t,e){return this._map.map(function(t,e){return e}).__iterator(t,e)},Je.prototype.__ensureOwner=function(t){if(t===this.__ownerID)return this;var e=this._map.__ensureOwner(t);return t?this.__make(e,t):(this.__ownerID=t,this._map=e,this)},Je.isSet=He;var Zr="@@__IMMUTABLE_SET__@@",Qr=Je.prototype;Qr[Zr]=!0,Qr[lr]=Qr.remove,Qr.mergeDeep=Qr.merge,Qr.mergeDeepWith=Qr.mergeWith,Qr.withMutations=Nr.withMutations,Qr.asMutable=Nr.asMutable,Qr.asImmutable=Nr.asImmutable,Qr.__empty=Ne,Qr.__make=ke;var tn;t(Me,Je),Me.of=function(){return this(arguments)},Me.fromKeys=function(t){return this(r(t).keySeq())},Me.prototype.toString=function(){return this.__toString("OrderedSet {","}")},Me.isOrderedSet=Ve;var en=Me.prototype;en[fr]=!0,en.__empty=qe,en.__make=Le;var rn;t(ze,rt),ze.of=function(){return this(arguments)},ze.prototype.toString=function(){return this.__toString("Stack [","]")},ze.prototype.get=function(t,e){var r=this._head;for(t=g(this,t);r&&t--;)r=r.next;return r?r.value:e},ze.prototype.peek=function(){return this._head&&this._head.value},ze.prototype.push=function(){if(0===arguments.length)return this;for(var t=this.size+arguments.length,e=this._head,r=arguments.length-1;r>=0;r--)e={value:arguments[r],next:e};return this.__ownerID?(this.size=t,this._head=e,this.__hash=void 0,this.__altered=!0,this):Ye(t,e)},ze.prototype.pushAll=function(t){if(t=n(t),0===t.size)return this;ct(t.size);var e=this.size,r=this._head;return t.reverse().forEach(function(t){e++,r={value:t,next:r}}),this.__ownerID?(this.size=e,this._head=r,this.__hash=void 0,this.__altered=!0,this):Ye(e,r)},ze.prototype.pop=function(){return this.slice(1)},ze.prototype.unshift=function(){return this.push.apply(this,arguments)},ze.prototype.unshiftAll=function(t){return this.pushAll(t)},ze.prototype.shift=function(){return this.pop.apply(this,arguments)},ze.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._head=void 0,this.__hash=void 0,this.__altered=!0,this):Ge()},ze.prototype.slice=function(t,e){if(v(t,e,this.size))return this;var r=m(t,this.size),n=S(e,this.size);if(n!==this.size)return rt.prototype.slice.call(this,t,e);for(var i=this.size-r,s=this._head;r--;)s=s.next;return this.__ownerID?(this.size=i,this._head=s,this.__hash=void 0,this.__altered=!0,this):Ye(i,s)},ze.prototype.__ensureOwner=function(t){return t===this.__ownerID?this:t?Ye(this.size,this._head,t,this.__hash):(this.__ownerID=t,this.__altered=!1,this)},ze.prototype.__iterate=function(t,e){if(e)return this.reverse().__iterate(t);for(var r=0,n=this._head;n&&t(n.value,r++,this)!==!1;)n=n.next;return r},ze.prototype.__iterator=function(t,e){if(e)return this.reverse().__iterator(t);var r=0,n=this._head;return new E(function(){if(n){var e=n.value;return n=n.next,b(t,r++,e)}return w()})},ze.isStack=We;var nn="@@__IMMUTABLE_STACK__@@",sn=ze.prototype;sn[nn]=!0,sn.withMutations=Nr.withMutations,sn.asMutable=Nr.asMutable,sn.asImmutable=Nr.asImmutable,sn.wasAltered=Nr.wasAltered;var on;e.Iterator=E,Xe(e,{toArray:function(){ct(this.size);var t=new Array(this.size||0);return this.valueSeq().__iterate(function(e,r){t[r]=e}),t},toIndexedSeq:function(){return new ie(this)},toJS:function(){return this.toSeq().map(function(t){return t&&"function"==typeof t.toJS?t.toJS():t}).__toJS()},toJSON:function(){return this.toSeq().map(function(t){return t&&"function"==typeof t.toJSON?t.toJSON():t}).__toJS()},toKeyedSeq:function(){return new ne(this,!0)},toMap:function(){return ft(this.toKeyedSeq())},toObject:function(){ct(this.size);var t={};return this.__iterate(function(e,r){t[r]=e}),t},toOrderedMap:function(){return Zt(this.toKeyedSeq())},toOrderedSet:function(){return Me(o(this)?this.valueSeq():this)},toSet:function(){return Je(o(this)?this.valueSeq():this)},toSetSeq:function(){return new se(this)},toSeq:function(){return a(this)?this.toIndexedSeq():o(this)?this.toKeyedSeq():this.toSetSeq()},toStack:function(){return ze(o(this)?this.valueSeq():this)},toList:function(){return Bt(o(this)?this.valueSeq():this)},toString:function(){return"[Iterable]"},__toString:function(t,e){return 0===this.size?t+e:t+" "+this.toSeq().map(this.__toStringMapper).join(", ")+" "+e},concat:function(){var t=ar.call(arguments,0);return Re(this,ye(this,t))},includes:function(t){return this.some(function(e){return G(e,t)})},entries:function(){return this.__iterator(Er)},every:function(t,e){ct(this.size);var r=!0;return this.__iterate(function(n,i,s){return t.call(e,n,i,s)?void 0:(r=!1,!1)}),r},filter:function(t,e){return Re(this,ce(this,t,e,!0))},find:function(t,e,r){var n=this.findEntry(t,e);return n?n[1]:r},forEach:function(t,e){return ct(this.size),this.__iterate(e?t.bind(e):t)},join:function(t){ct(this.size),t=void 0!==t?""+t:",";var e="",r=!0;return this.__iterate(function(n){r?r=!1:e+=t,e+=null!==n&&void 0!==n?n.toString():""}),e},keys:function(){return this.__iterator(Sr)},map:function(t,e){return Re(this,ue(this,t,e))},reduce:function(t,e,r){ct(this.size);var n,i;return arguments.length<2?i=!0:n=e,this.__iterate(function(e,s,o){i?(i=!1,n=e):n=t.call(r,n,e,s,o)}),n},reduceRight:function(t,e,r){var n=this.toKeyedSeq().reverse();return n.reduce.apply(n,arguments)},reverse:function(){return Re(this,he(this,!0))},slice:function(t,e){return Re(this,de(this,t,e,!0))},some:function(t,e){return!this.every(Qe(t),e)},sort:function(t){return Re(this,_e(this,t))},values:function(){return this.__iterator(_r)},butLast:function(){return this.slice(0,-1)},isEmpty:function(){return void 0!==this.size?0===this.size:!this.some(function(){return!0})},count:function(t,e){return p(t?this.toSeq().filter(t,e):this)},countBy:function(t,e){return fe(this,t,e)},equals:function(t){return X(this,t)},entrySeq:function(){var t=this;if(t._cache)return new D(t._cache);var e=t.toSeq().map(Ze).toIndexedSeq();return e.fromEntrySeq=function(){return t.toSeq()},e},filterNot:function(t,e){return this.filter(Qe(t),e)},findEntry:function(t,e,r){var n=r;return this.__iterate(function(r,i,s){return t.call(e,r,i,s)?(n=[i,r],!1):void 0}),n},findKey:function(t,e){var r=this.findEntry(t,e);return r&&r[0]},findLast:function(t,e,r){return this.toKeyedSeq().reverse().find(t,e,r)},findLastEntry:function(t,e,r){return this.toKeyedSeq().reverse().findEntry(t,e,r)},findLastKey:function(t,e){return this.toKeyedSeq().reverse().findKey(t,e)},first:function(){return this.find(y)},flatMap:function(t,e){return Re(this,me(this,t,e))},flatten:function(t){return Re(this,ve(this,t,!0))},fromEntrySeq:function(){return new oe(this)},get:function(t,e){return this.find(function(e,r){return G(r,t)},void 0,e)},getIn:function(t,e){for(var r,n=this,i=Pe(t);!(r=i.next()).done;){var s=r.value;if(n=n&&n.get?n.get(s,yr):yr,n===yr)return e}return n},groupBy:function(t,e){return le(this,t,e)},has:function(t){return this.get(t,yr)!==yr},hasIn:function(t){return this.getIn(t,yr)!==yr},isSubset:function(t){return t="function"==typeof t.includes?t:e(t),this.every(function(e){return t.includes(e)})},isSuperset:function(t){return t="function"==typeof t.isSubset?t:e(t),t.isSubset(this)},keyOf:function(t){return this.findKey(function(e){return G(e,t)})},keySeq:function(){return this.toSeq().map($e).toIndexedSeq()},last:function(){return this.toSeq().reverse().first()},lastKeyOf:function(t){return this.toKeyedSeq().reverse().keyOf(t)},max:function(t){return Ee(this,t)},maxBy:function(t,e){return Ee(this,e,t)},min:function(t){return Ee(this,t?tr(t):nr)},minBy:function(t,e){return Ee(this,e?tr(e):nr,t)},rest:function(){return this.slice(1)},skip:function(t){return this.slice(Math.max(0,t))},skipLast:function(t){return Re(this,this.toSeq().reverse().skip(t).reverse())},skipWhile:function(t,e){return Re(this,ge(this,t,e,!0))},skipUntil:function(t,e){return this.skipWhile(Qe(t),e)},sortBy:function(t,e){return Re(this,_e(this,e,t))},take:function(t){return this.slice(0,Math.max(0,t))},takeLast:function(t){return Re(this,this.toSeq().reverse().take(t).reverse())},takeWhile:function(t,e){return Re(this,pe(this,t,e))},takeUntil:function(t,e){return this.takeWhile(Qe(t),e)},valueSeq:function(){return this.toIndexedSeq()},hashCode:function(){return this.__hash||(this.__hash=ir(this))}});var an=e.prototype;an[ur]=!0,an[Rr]=an.values,an.__toJS=an.toArray,an.__toStringMapper=er,an.inspect=an.toSource=function(){return this.toString()},an.chain=an.flatMap,an.contains=an.includes,Xe(r,{flip:function(){return Re(this,ae(this))},
	mapEntries:function(t,e){var r=this,n=0;return Re(this,this.toSeq().map(function(i,s){return t.call(e,[s,i],n++,r)}).fromEntrySeq())},mapKeys:function(t,e){var r=this;return Re(this,this.toSeq().flip().map(function(n,i){return t.call(e,n,i,r)}).flip())}});var un=r.prototype;un[hr]=!0,un[Rr]=an.entries,un.__toJS=an.toObject,un.__toStringMapper=function(t,e){return JSON.stringify(e)+": "+er(t)},Xe(n,{toKeyedSeq:function(){return new ne(this,!1)},filter:function(t,e){return Re(this,ce(this,t,e,!1))},findIndex:function(t,e){var r=this.findEntry(t,e);return r?r[0]:-1},indexOf:function(t){var e=this.keyOf(t);return void 0===e?-1:e},lastIndexOf:function(t){var e=this.lastKeyOf(t);return void 0===e?-1:e},reverse:function(){return Re(this,he(this,!1))},slice:function(t,e){return Re(this,de(this,t,e,!1))},splice:function(t,e){var r=arguments.length;if(e=Math.max(0|e,0),0===r||2===r&&!e)return this;t=m(t,0>t?this.count():this.size);var n=this.slice(0,t);return Re(this,1===r?n:n.concat(d(arguments,2),this.slice(t+e)))},findLastIndex:function(t,e){var r=this.findLastEntry(t,e);return r?r[0]:-1},first:function(){return this.get(0)},flatten:function(t){return Re(this,ve(this,t,!1))},get:function(t,e){return t=g(this,t),0>t||this.size===1/0||void 0!==this.size&&t>this.size?e:this.find(function(e,r){return r===t},void 0,e)},has:function(t){return t=g(this,t),t>=0&&(void 0!==this.size?this.size===1/0||t<this.size:-1!==this.indexOf(t))},interpose:function(t){return Re(this,Se(this,t))},interleave:function(){var t=[this].concat(d(arguments)),e=we(this.toSeq(),P.of,t),r=e.flatten(!0);return e.size&&(r.size=e.size*t.length),Re(this,r)},keySeq:function(){return Q(0,this.size)},last:function(){return this.get(-1)},skipWhile:function(t,e){return Re(this,ge(this,t,e,!1))},zip:function(){var t=[this].concat(d(arguments));return Re(this,we(this,rr,t))},zipWith:function(t){var e=d(arguments);return e[0]=this,Re(this,we(this,t,e))}}),n.prototype[cr]=!0,n.prototype[fr]=!0,Xe(i,{get:function(t,e){return this.has(t)?t:e},includes:function(t){return this.has(t)},keySeq:function(){return this.valueSeq()}}),i.prototype.has=an.includes,i.prototype.contains=i.prototype.includes,Xe(O,r.prototype),Xe(P,n.prototype),Xe(I,i.prototype),Xe(et,r.prototype),Xe(rt,n.prototype),Xe(nt,i.prototype);var hn={Iterable:e,Seq:U,Collection:tt,Map:ft,OrderedMap:Zt,List:Bt,Stack:ze,Set:Je,OrderedSet:Me,Record:Ie,Range:Q,Repeat:$,is:G,fromJS:q};return hn})},function(t,e,r){!function(e,r){t.exports=r()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){t.exports=r(18)},function(t,e){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i={info:function(){},warn:function(){},error:function(){}},s=0,o=1,a=2,u=3,h=void 0,c=void 0,f=function(){function t(){r(this,t)}return t.reset=function(){c=u,h=i},t.info=function(){if(c>=u){for(var t=arguments.length,e=Array(t),r=0;t>r;r++)e[r]=arguments[r];h.info.apply(h,Array.from(e))}},t.warn=function(){if(c>=a){for(var t=arguments.length,e=Array(t),r=0;t>r;r++)e[r]=arguments[r];h.warn.apply(h,Array.from(e))}},t.error=function(){if(c>=o){for(var t=arguments.length,e=Array(t),r=0;t>r;r++)e[r]=arguments[r];h.error.apply(h,Array.from(e))}},n(t,null,[{key:"NONE",get:function(){return s}},{key:"ERROR",get:function(){return o}},{key:"WARN",get:function(){return a}},{key:"INFO",get:function(){return u}},{key:"level",get:function(){return c},set:function(t){if(!(t>=s&&u>=t))throw new Error("Invalid log level");c=t}},{key:"logger",get:function(){return h},set:function(t){if(!(t.info&&t.warn&&t.error))throw new Error("Invalid logger");h=t}}]),t}();e["default"]=f,f.reset(),t.exports=e["default"]},function(t,e){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i={setTimeout:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t,e){return setTimeout(t,e)}),clearTimeout:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){return clearTimeout(t)})},s=!1,o=function(){function t(){r(this,t)}return t._testing=function(){s=!0},n(t,null,[{key:"location",get:function(){return s?void 0:location}},{key:"localStorage",get:function(){return s?void 0:localStorage}},{key:"sessionStorage",get:function(){return s?void 0:sessionStorage}},{key:"XMLHttpRequest",get:function(){return s?void 0:XMLHttpRequest}},{key:"timer",get:function(){return s?void 0:i}}]),t}();e["default"]=o,t.exports=e["default"]},function(t,e){},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=r(1),o=n(s),a=r(12),u=n(a),h=function(){function t(e){var r=arguments.length<=1||void 0===arguments[1]?u["default"]:arguments[1];if(i(this,t),!e)throw o["default"].error("No settings passed to MetadataService"),new Error("settings");this._settings=e,this._jsonService=new r}return t.prototype.getMetadata=function(){var t=this;return o["default"].info("MetadataService.getMetadata"),this._settings.metadata?(o["default"].info("Returning metadata from settings"),Promise.resolve(this._settings.metadata)):this._settings.metadataUrl?(o["default"].info("getting metadata from",this._settings.metadataUrl),this._jsonService.getJson(this._settings.metadataUrl).then(function(e){return o["default"].info("json received"),t._settings.metadata=e,e})):(o["default"].error("No metadataUrl configured on settings"),Promise.reject(new Error("No metadataUrl configured on settings")))},t.prototype.getIssuer=function(){return o["default"].info("MetadataService.getIssuer"),this._getMetadataProperty("issuer")},t.prototype.getAuthorizationEndpoint=function(){return o["default"].info("MetadataService.getAuthorizationEndpoint"),this._getMetadataProperty("authorization_endpoint")},t.prototype.getUserInfoEndpoint=function(){return o["default"].info("MetadataService.getUserInfoEndpoint"),this._getMetadataProperty("userinfo_endpoint")},t.prototype.getCheckSessionIframe=function(){return o["default"].info("MetadataService.getCheckSessionIframe"),this._getMetadataProperty("check_session_iframe")},t.prototype.getEndSessionEndpoint=function(){return o["default"].info("MetadataService.getEndSessionEndpoint"),this._getMetadataProperty("end_session_endpoint")},t.prototype._getMetadataProperty=function(t){return o["default"].info("MetadataService._getMetadataProperty",t),this.getMetadata().then(function(e){if(o["default"].info("metadata recieved"),void 0===e[t])throw o["default"].error("Metadata does not contain property "+t),new Error("Metadata does not contain property "+t);return e[t]})},t.prototype.getSigningKeys=function(){var t=this;return o["default"].info("MetadataService.getSigningKeys"),this._settings.signingKeys?(o["default"].info("Returning signingKeys from settings"),Promise.resolve(this._settings.signingKeys)):this._getMetadataProperty("jwks_uri").then(function(e){return o["default"].info("jwks_uri received",e),t._jsonService.getJson(e).then(function(e){if(o["default"].info("key set received",e),!e.keys)throw o["default"].error("Missing keys on keyset"),new Error("Missing keys on keyset");var r=t._filterSigningKeys(e.keys);return o["default"].info("filtered keys",r),t._settings.signingKeys=r,t._settings.signingKeys})})},t.prototype._filterSigningKeys=function(t){return o["default"].info("MetadataService._filterSigningKeys",t),t.filter(function(t){return"sig"===t.use})},t}();e["default"]=h,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=r(1),o=n(s),a=r(2),u=n(a),h=function(){function t(){i(this,t)}return t.addQueryParam=function(t,e,r){return t.indexOf("?")<0&&(t+="?"),"?"!==t[t.length-1]&&(t+="&"),t+=encodeURIComponent(e),t+="=",t+=encodeURIComponent(r)},t.parseUrlFragment=function(t){var e=arguments.length<=1||void 0===arguments[1]?"#":arguments[1],r=arguments.length<=2||void 0===arguments[2]?u["default"]:arguments[2];o["default"].info("UrlUtility.parseUrlFragment"),"string"!=typeof t&&(t=r.location.href);var n=t.lastIndexOf(e);n>=0&&(t=t.substr(n+1));for(var i,s={},a=/([^&=]+)=([^&]*)/g,h=0;i=a.exec(t);)if(s[decodeURIComponent(i[1])]=decodeURIComponent(i[2]),h++>50)return o["default"].error("response exceeded expected number of parameters",t),{error:"Response exceeded expected number of parameters"};for(var c in s)return s;return{}},t}();e["default"]=h,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(1),a=n(o),u=r(16),h=n(u),c=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=e.id,n=e.data,s=e.created;i(this,t),this._id=r||(0,h["default"])(),this._data=n,"number"==typeof s&&s>0?this._created=s:this._created=parseInt(Date.now()/1e3)}return t.prototype.toStorageString=function(){return a["default"].info("State.toStorageString"),JSON.stringify({id:this.id,data:this.data,created:this.created})},t.fromStorageString=function(e){return a["default"].info("State.fromStorageString"),new t(JSON.parse(e))},t.clearStaleState=function(e,r){a["default"].info("State.clearStaleState");var n=Date.now()/1e3-r;return e.getAllKeys().then(function(r){a["default"].info("got keys",r);var i=[],s=!0,o=!1,u=void 0;try{for(var h,c=function(){var r=h.value;l=e.get(r).then(function(i){var s=!1;if(i)try{var o=t.fromStorageString(i);a["default"].info("got item from key: ",r,o.created),o.created<=n&&(s=!0)}catch(u){a["default"].error("Error parsing state for key",r,u.message),s=!0}else a["default"].info("no item in storage for key: ",r),s=!0;return s?(a["default"].info("removed item for key: ",r),e.remove(r)):void 0}),i.push(l)},f=r[Symbol.iterator]();!(s=(h=f.next()).done);s=!0){var l;c()}}catch(d){o=!0,u=d}finally{try{!s&&f["return"]&&f["return"]()}finally{if(o)throw u}}return a["default"].info("waiting on promise count:",i.length),Promise.all(i)})},s(t,[{key:"id",get:function(){return this._id}},{key:"data",get:function(){return this._data}},{key:"created",get:function(){return this._created}}]),t}();e["default"]=c,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=r(1),o=n(s),a=r(2),u=n(a),h=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=e.prefix,n=void 0===r?"oidc.":r,s=e.store,o=void 0===s?u["default"].localStorage:s;i(this,t),this._store=o,this._prefix=n}return t.prototype.set=function(t,e){return o["default"].info("WebStorageStateStore.set",t),t=this._prefix+t,this._store.setItem(t,e),Promise.resolve()},t.prototype.get=function(t){o["default"].info("WebStorageStateStore.get",t),t=this._prefix+t;var e=this._store.getItem(t);return Promise.resolve(e)},t.prototype.remove=function(t){o["default"].info("WebStorageStateStore.remove",t),t=this._prefix+t;var e=this._store.getItem(t);return this._store.removeItem(t),Promise.resolve(e)},t.prototype.getAllKeys=function(){o["default"].info("WebStorageStateStore.getAllKeys");for(var t=[],e=0;e<this._store.length;e++){var r=this._store.key(e);0===r.indexOf(this._prefix)&&t.push(r.substr(this._prefix.length))}return Promise.resolve(t)},t}();e["default"]=h,t.exports=e["default"]},function(t,e,r){(function(t){function n(t){var e,r,n="";for(e=0;e+3<=t.length;e+=3)r=parseInt(t.substring(e,e+3),16),n+=an.charAt(r>>6)+an.charAt(63&r);if(e+1==t.length?(r=parseInt(t.substring(e,e+1),16),n+=an.charAt(r<<2)):e+2==t.length&&(r=parseInt(t.substring(e,e+2),16),n+=an.charAt(r>>2)+an.charAt((3&r)<<4)),un)for(;(3&n.length)>0;)n+=un;return n}function i(t){var e,r,n,i="",s=0;for(e=0;e<t.length&&t.charAt(e)!=un;++e)n=an.indexOf(t.charAt(e)),0>n||(0==s?(i+=f(n>>2),r=3&n,s=1):1==s?(i+=f(r<<2|n>>4),r=15&n,s=2):2==s?(i+=f(r),i+=f(n>>2),r=3&n,s=3):(i+=f(r<<2|n>>4),i+=f(15&n),s=0));return 1==s&&(i+=f(r<<2)),i}function s(t){var e,r=i(t),n=new Array;for(e=0;2*e<r.length;++e)n[e]=parseInt(r.substring(2*e,2*e+2),16);return n}function o(t,e,r){null!=t&&("number"==typeof t?this.fromNumber(t,e,r):null==e&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,e))}function a(){return new o(null)}function u(t,e,r,n,i,s){for(;--s>=0;){var o=e*this[t++]+r[n]+i;i=Math.floor(o/67108864),r[n++]=67108863&o}return i}function h(t,e,r,n,i,s){for(var o=32767&e,a=e>>15;--s>=0;){var u=32767&this[t],h=this[t++]>>15,c=a*u+h*o;u=o*u+((32767&c)<<15)+r[n]+(1073741823&i),i=(u>>>30)+(c>>>15)+a*h+(i>>>30),r[n++]=1073741823&u}return i}function c(t,e,r,n,i,s){for(var o=16383&e,a=e>>14;--s>=0;){var u=16383&this[t],h=this[t++]>>14,c=a*u+h*o;u=o*u+((16383&c)<<14)+r[n]+i,i=(u>>28)+(c>>14)+a*h,r[n++]=268435455&u}return i}function f(t){return pn.charAt(t)}function l(t,e){var r=gn[t.charCodeAt(e)];return null==r?-1:r}function d(t){for(var e=this.t-1;e>=0;--e)t[e]=this[e];t.t=this.t,t.s=this.s}function p(t){this.t=1,this.s=0>t?-1:0,t>0?this[0]=t:-1>t?this[0]=t+this.DV:this.t=0}function g(t){var e=a();return e.fromInt(t),e}function y(t,e){var r;if(16==e)r=4;else if(8==e)r=3;else if(256==e)r=8;else if(2==e)r=1;else if(32==e)r=5;else{if(4!=e)return void this.fromRadix(t,e);r=2}this.t=0,this.s=0;for(var n=t.length,i=!1,s=0;--n>=0;){var a=8==r?255&t[n]:l(t,n);0>a?"-"==t.charAt(n)&&(i=!0):(i=!1,0==s?this[this.t++]=a:s+r>this.DB?(this[this.t-1]|=(a&(1<<this.DB-s)-1)<<s,this[this.t++]=a>>this.DB-s):this[this.t-1]|=a<<s,s+=r,s>=this.DB&&(s-=this.DB))}8==r&&0!=(128&t[0])&&(this.s=-1,s>0&&(this[this.t-1]|=(1<<this.DB-s)-1<<s)),this.clamp(),i&&o.ZERO.subTo(this,this)}function v(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t}function m(t){if(this.s<0)return"-"+this.negate().toString(t);var e;if(16==t)e=4;else if(8==t)e=3;else if(2==t)e=1;else if(32==t)e=5;else{if(4!=t)return this.toRadix(t);e=2}var r,n=(1<<e)-1,i=!1,s="",o=this.t,a=this.DB-o*this.DB%e;if(o-- >0)for(a<this.DB&&(r=this[o]>>a)>0&&(i=!0,s=f(r));o>=0;)e>a?(r=(this[o]&(1<<a)-1)<<e-a,r|=this[--o]>>(a+=this.DB-e)):(r=this[o]>>(a-=e)&n,0>=a&&(a+=this.DB,--o)),r>0&&(i=!0),i&&(s+=f(r));return i?s:"0"}function S(){var t=a();return o.ZERO.subTo(this,t),t}function _(){return this.s<0?this.negate():this}function E(t){var e=this.s-t.s;if(0!=e)return e;var r=this.t;if(e=r-t.t,0!=e)return this.s<0?-e:e;for(;--r>=0;)if(0!=(e=this[r]-t[r]))return e;return 0}function b(t){var e,r=1;return 0!=(e=t>>>16)&&(t=e,r+=16),0!=(e=t>>8)&&(t=e,r+=8),0!=(e=t>>4)&&(t=e,r+=4),0!=(e=t>>2)&&(t=e,r+=2),0!=(e=t>>1)&&(t=e,r+=1),r}function w(){return this.t<=0?0:this.DB*(this.t-1)+b(this[this.t-1]^this.s&this.DM)}function R(t,e){var r;for(r=this.t-1;r>=0;--r)e[r+t]=this[r];for(r=t-1;r>=0;--r)e[r]=0;e.t=this.t+t,e.s=this.s}function x(t,e){for(var r=t;r<this.t;++r)e[r-t]=this[r];e.t=Math.max(this.t-t,0),e.s=this.s}function A(t,e){var r,n=t%this.DB,i=this.DB-n,s=(1<<i)-1,o=Math.floor(t/this.DB),a=this.s<<n&this.DM;for(r=this.t-1;r>=0;--r)e[r+o+1]=this[r]>>i|a,a=(this[r]&s)<<n;for(r=o-1;r>=0;--r)e[r]=0;e[o]=a,e.t=this.t+o+1,e.s=this.s,e.clamp()}function F(t,e){e.s=this.s;var r=Math.floor(t/this.DB);if(r>=this.t)return void(e.t=0);var n=t%this.DB,i=this.DB-n,s=(1<<n)-1;e[0]=this[r]>>n;for(var o=r+1;o<this.t;++o)e[o-r-1]|=(this[o]&s)<<i,e[o-r]=this[o]>>n;n>0&&(e[this.t-r-1]|=(this.s&s)<<i),e.t=this.t-r,e.clamp()}function K(t,e){for(var r=0,n=0,i=Math.min(t.t,this.t);i>r;)n+=this[r]-t[r],e[r++]=n&this.DM,n>>=this.DB;if(t.t<this.t){for(n-=t.s;r<this.t;)n+=this[r],e[r++]=n&this.DM,n>>=this.DB;n+=this.s}else{for(n+=this.s;r<t.t;)n-=t[r],e[r++]=n&this.DM,n>>=this.DB;n-=t.s}e.s=0>n?-1:0,-1>n?e[r++]=this.DV+n:n>0&&(e[r++]=n),e.t=r,e.clamp()}function U(t,e){var r=this.abs(),n=t.abs(),i=r.t;for(e.t=i+n.t;--i>=0;)e[i]=0;for(i=0;i<n.t;++i)e[i+r.t]=r.am(0,n[i],e,i,0,r.t);e.s=0,e.clamp(),this.s!=t.s&&o.ZERO.subTo(e,e)}function O(t){for(var e=this.abs(),r=t.t=2*e.t;--r>=0;)t[r]=0;for(r=0;r<e.t-1;++r){var n=e.am(r,e[r],t,2*r,0,1);(t[r+e.t]+=e.am(r+1,2*e[r],t,2*r+1,n,e.t-r-1))>=e.DV&&(t[r+e.t]-=e.DV,t[r+e.t+1]=1)}t.t>0&&(t[t.t-1]+=e.am(r,e[r],t,2*r,0,1)),t.s=0,t.clamp()}function P(t,e,r){var n=t.abs();if(!(n.t<=0)){var i=this.abs();if(i.t<n.t)return null!=e&&e.fromInt(0),void(null!=r&&this.copyTo(r));null==r&&(r=a());var s=a(),u=this.s,h=t.s,c=this.DB-b(n[n.t-1]);c>0?(n.lShiftTo(c,s),i.lShiftTo(c,r)):(n.copyTo(s),i.copyTo(r));var f=s.t,l=s[f-1];if(0!=l){var d=l*(1<<this.F1)+(f>1?s[f-2]>>this.F2:0),p=this.FV/d,g=(1<<this.F1)/d,y=1<<this.F2,v=r.t,m=v-f,S=null==e?a():e;for(s.dlShiftTo(m,S),r.compareTo(S)>=0&&(r[r.t++]=1,r.subTo(S,r)),o.ONE.dlShiftTo(f,S),S.subTo(s,s);s.t<f;)s[s.t++]=0;for(;--m>=0;){var _=r[--v]==l?this.DM:Math.floor(r[v]*p+(r[v-1]+y)*g);if((r[v]+=s.am(0,_,r,m,0,f))<_)for(s.dlShiftTo(m,S),r.subTo(S,r);r[v]<--_;)r.subTo(S,r)}null!=e&&(r.drShiftTo(f,e),u!=h&&o.ZERO.subTo(e,e)),r.t=f,r.clamp(),c>0&&r.rShiftTo(c,r),0>u&&o.ZERO.subTo(r,r)}}}function I(t){var e=a();return this.abs().divRemTo(t,null,e),this.s<0&&e.compareTo(o.ZERO)>0&&t.subTo(e,e),e}function D(t){this.m=t}function C(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t}function T(t){return t}function j(t){t.divRemTo(this.m,null,t)}function J(t,e,r){t.multiplyTo(e,r),this.reduce(r)}function H(t,e){t.squareTo(e),this.reduce(e)}function B(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var e=3&t;return e=e*(2-(15&t)*e)&15,e=e*(2-(255&t)*e)&255,e=e*(2-((65535&t)*e&65535))&65535,e=e*(2-t*e%this.DV)%this.DV,e>0?this.DV-e:-e}function k(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function N(t){var e=a();return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),t.s<0&&e.compareTo(o.ZERO)>0&&this.m.subTo(e,e),e}function M(t){var e=a();return t.copyTo(e),this.reduce(e),e}function V(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var e=0;e<this.m.t;++e){var r=32767&t[e],n=r*this.mpl+((r*this.mph+(t[e]>>15)*this.mpl&this.um)<<15)&t.DM;for(r=e+this.m.t,t[r]+=this.m.am(0,n,t,e,0,this.m.t);t[r]>=t.DV;)t[r]-=t.DV,t[++r]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)}function L(t,e){t.squareTo(e),this.reduce(e)}function q(t,e,r){t.multiplyTo(e,r),this.reduce(r)}function z(){return 0==(this.t>0?1&this[0]:this.s)}function W(t,e){if(t>4294967295||1>t)return o.ONE;var r=a(),n=a(),i=e.convert(this),s=b(t)-1;for(i.copyTo(r);--s>=0;)if(e.sqrTo(r,n),(t&1<<s)>0)e.mulTo(n,i,r);else{var u=r;r=n,n=u}return e.revert(r)}function Y(t,e){var r;return r=256>t||e.isEven()?new D(e):new k(e),this.exp(t,r)}function G(){var t=a();return this.copyTo(t),t}function X(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function $(){return 0==this.t?this.s:this[0]<<24>>24}function Z(){return 0==this.t?this.s:this[0]<<16>>16}function Q(t){return Math.floor(Math.LN2*this.DB/Math.log(t))}function tt(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1}function et(t){if(null==t&&(t=10),0==this.signum()||2>t||t>36)return"0";var e=this.chunkSize(t),r=Math.pow(t,e),n=g(r),i=a(),s=a(),o="";for(this.divRemTo(n,i,s);i.signum()>0;)o=(r+s.intValue()).toString(t).substr(1)+o,i.divRemTo(n,i,s);return s.intValue().toString(t)+o}function rt(t,e){this.fromInt(0),null==e&&(e=10);for(var r=this.chunkSize(e),n=Math.pow(e,r),i=!1,s=0,a=0,u=0;u<t.length;++u){var h=l(t,u);0>h?"-"==t.charAt(u)&&0==this.signum()&&(i=!0):(a=e*a+h,++s>=r&&(this.dMultiply(n),this.dAddOffset(a,0),s=0,a=0))}s>0&&(this.dMultiply(Math.pow(e,s)),this.dAddOffset(a,0)),i&&o.ZERO.subTo(this,this)}function nt(t,e,r){if("number"==typeof e)if(2>t)this.fromInt(1);else for(this.fromNumber(t,r),this.testBit(t-1)||this.bitwiseTo(o.ONE.shiftLeft(t-1),ft,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(e);)this.dAddOffset(2,0),this.bitLength()>t&&this.subTo(o.ONE.shiftLeft(t-1),this);else{var n=new Array,i=7&t;n.length=(t>>3)+1,e.nextBytes(n),i>0?n[0]&=(1<<i)-1:n[0]=0,this.fromString(n,256)}}function it(){var t=this.t,e=new Array;e[0]=this.s;var r,n=this.DB-t*this.DB%8,i=0;if(t-- >0)for(n<this.DB&&(r=this[t]>>n)!=(this.s&this.DM)>>n&&(e[i++]=r|this.s<<this.DB-n);t>=0;)8>n?(r=(this[t]&(1<<n)-1)<<8-n,r|=this[--t]>>(n+=this.DB-8)):(r=this[t]>>(n-=8)&255,0>=n&&(n+=this.DB,--t)),0!=(128&r)&&(r|=-256),0==i&&(128&this.s)!=(128&r)&&++i,(i>0||r!=this.s)&&(e[i++]=r);return e}function st(t){return 0==this.compareTo(t)}function ot(t){return this.compareTo(t)<0?this:t}function at(t){return this.compareTo(t)>0?this:t}function ut(t,e,r){var n,i,s=Math.min(t.t,this.t);for(n=0;s>n;++n)r[n]=e(this[n],t[n]);if(t.t<this.t){for(i=t.s&this.DM,n=s;n<this.t;++n)r[n]=e(this[n],i);r.t=this.t}else{for(i=this.s&this.DM,n=s;n<t.t;++n)r[n]=e(i,t[n]);r.t=t.t}r.s=e(this.s,t.s),r.clamp()}function ht(t,e){return t&e}function ct(t){var e=a();return this.bitwiseTo(t,ht,e),e}function ft(t,e){return t|e}function lt(t){var e=a();return this.bitwiseTo(t,ft,e),e}function dt(t,e){return t^e}function pt(t){var e=a();return this.bitwiseTo(t,dt,e),e}function gt(t,e){return t&~e}function yt(t){var e=a();return this.bitwiseTo(t,gt,e),e}function vt(){for(var t=a(),e=0;e<this.t;++e)t[e]=this.DM&~this[e];return t.t=this.t,t.s=~this.s,t}function mt(t){var e=a();return 0>t?this.rShiftTo(-t,e):this.lShiftTo(t,e),e}function St(t){var e=a();return 0>t?this.lShiftTo(-t,e):this.rShiftTo(t,e),e}function _t(t){if(0==t)return-1;var e=0;return 0==(65535&t)&&(t>>=16,e+=16),0==(255&t)&&(t>>=8,e+=8),0==(15&t)&&(t>>=4,e+=4),0==(3&t)&&(t>>=2,e+=2),0==(1&t)&&++e,e}function Et(){for(var t=0;t<this.t;++t)if(0!=this[t])return t*this.DB+_t(this[t]);return this.s<0?this.t*this.DB:-1}function bt(t){for(var e=0;0!=t;)t&=t-1,++e;return e}function wt(){for(var t=0,e=this.s&this.DM,r=0;r<this.t;++r)t+=bt(this[r]^e);return t}function Rt(t){var e=Math.floor(t/this.DB);return e>=this.t?0!=this.s:0!=(this[e]&1<<t%this.DB)}function xt(t,e){var r=o.ONE.shiftLeft(t);return this.bitwiseTo(r,e,r),r}function At(t){return this.changeBit(t,ft)}function Ft(t){return this.changeBit(t,gt)}function Kt(t){return this.changeBit(t,dt)}function Ut(t,e){for(var r=0,n=0,i=Math.min(t.t,this.t);i>r;)n+=this[r]+t[r],e[r++]=n&this.DM,n>>=this.DB;if(t.t<this.t){for(n+=t.s;r<this.t;)n+=this[r],e[r++]=n&this.DM,n>>=this.DB;n+=this.s}else{for(n+=this.s;r<t.t;)n+=t[r],e[r++]=n&this.DM,n>>=this.DB;n+=t.s}e.s=0>n?-1:0,n>0?e[r++]=n:-1>n&&(e[r++]=this.DV+n),e.t=r,e.clamp()}function Ot(t){var e=a();return this.addTo(t,e),e}function Pt(t){var e=a();return this.subTo(t,e),e}function It(t){var e=a();return this.multiplyTo(t,e),e}function Dt(){var t=a();return this.squareTo(t),t}function Ct(t){var e=a();return this.divRemTo(t,e,null),e}function Tt(t){var e=a();return this.divRemTo(t,null,e),e}function jt(t){var e=a(),r=a();return this.divRemTo(t,e,r),new Array(e,r)}function Jt(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()}function Ht(t,e){if(0!=t){for(;this.t<=e;)this[this.t++]=0;for(this[e]+=t;this[e]>=this.DV;)this[e]-=this.DV,++e>=this.t&&(this[this.t++]=0),++this[e]}}function Bt(){}function kt(t){return t}function Nt(t,e,r){t.multiplyTo(e,r)}function Mt(t,e){t.squareTo(e)}function Vt(t){return this.exp(t,new Bt)}function Lt(t,e,r){var n=Math.min(this.t+t.t,e);for(r.s=0,r.t=n;n>0;)r[--n]=0;var i;for(i=r.t-this.t;i>n;++n)r[n+this.t]=this.am(0,t[n],r,n,0,this.t);for(i=Math.min(t.t,e);i>n;++n)this.am(0,t[n],r,n,0,e-n);r.clamp()}function qt(t,e,r){--e;var n=r.t=this.t+t.t-e;for(r.s=0;--n>=0;)r[n]=0;for(n=Math.max(e-this.t,0);n<t.t;++n)r[this.t+n-e]=this.am(e-n,t[n],r,0,0,this.t+n-e);r.clamp(),r.drShiftTo(1,r)}function zt(t){this.r2=a(),this.q3=a(),o.ONE.dlShiftTo(2*t.t,this.r2),this.mu=this.r2.divide(t),this.m=t}function Wt(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);if(t.compareTo(this.m)<0)return t;var e=a();return t.copyTo(e),this.reduce(e),e}function Yt(t){return t}function Gt(t){for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);t.compareTo(this.r2)<0;)t.dAddOffset(1,this.m.t+1);for(t.subTo(this.r2,t);t.compareTo(this.m)>=0;)t.subTo(this.m,t)}function Xt(t,e){t.squareTo(e),this.reduce(e)}function $t(t,e,r){t.multiplyTo(e,r),this.reduce(r)}function Zt(t,e){var r,n,i=t.bitLength(),s=g(1);if(0>=i)return s;r=18>i?1:48>i?3:144>i?4:768>i?5:6,n=8>i?new D(e):e.isEven()?new zt(e):new k(e);var o=new Array,u=3,h=r-1,c=(1<<r)-1;if(o[1]=n.convert(this),r>1){var f=a();for(n.sqrTo(o[1],f);c>=u;)o[u]=a(),n.mulTo(f,o[u-2],o[u]),u+=2}var l,d,p=t.t-1,y=!0,v=a();for(i=b(t[p])-1;p>=0;){for(i>=h?l=t[p]>>i-h&c:(l=(t[p]&(1<<i+1)-1)<<h-i,p>0&&(l|=t[p-1]>>this.DB+i-h)),u=r;0==(1&l);)l>>=1,--u;if((i-=u)<0&&(i+=this.DB,--p),y)o[l].copyTo(s),y=!1;else{for(;u>1;)n.sqrTo(s,v),n.sqrTo(v,s),u-=2;u>0?n.sqrTo(s,v):(d=s,s=v,v=d),n.mulTo(v,o[l],s)}for(;p>=0&&0==(t[p]&1<<i);)n.sqrTo(s,v),d=s,s=v,v=d,--i<0&&(i=this.DB-1,--p)}return n.revert(s)}function Qt(t){var e=this.s<0?this.negate():this.clone(),r=t.s<0?t.negate():t.clone();if(e.compareTo(r)<0){var n=e;e=r,r=n}var i=e.getLowestSetBit(),s=r.getLowestSetBit();if(0>s)return e;for(s>i&&(s=i),s>0&&(e.rShiftTo(s,e),r.rShiftTo(s,r));e.signum()>0;)(i=e.getLowestSetBit())>0&&e.rShiftTo(i,e),(i=r.getLowestSetBit())>0&&r.rShiftTo(i,r),e.compareTo(r)>=0?(e.subTo(r,e),e.rShiftTo(1,e)):(r.subTo(e,r),r.rShiftTo(1,r));return s>0&&r.lShiftTo(s,r),r}function te(t){if(0>=t)return 0;var e=this.DV%t,r=this.s<0?t-1:0;if(this.t>0)if(0==e)r=this[0]%t;else for(var n=this.t-1;n>=0;--n)r=(e*r+this[n])%t;return r}function ee(t){var e=t.isEven();if(this.isEven()&&e||0==t.signum())return o.ZERO;for(var r=t.clone(),n=this.clone(),i=g(1),s=g(0),a=g(0),u=g(1);0!=r.signum();){for(;r.isEven();)r.rShiftTo(1,r),e?(i.isEven()&&s.isEven()||(i.addTo(this,i),s.subTo(t,s)),i.rShiftTo(1,i)):s.isEven()||s.subTo(t,s),s.rShiftTo(1,s);for(;n.isEven();)n.rShiftTo(1,n),e?(a.isEven()&&u.isEven()||(a.addTo(this,a),u.subTo(t,u)),a.rShiftTo(1,a)):u.isEven()||u.subTo(t,u),u.rShiftTo(1,u);r.compareTo(n)>=0?(r.subTo(n,r),e&&i.subTo(a,i),s.subTo(u,s)):(n.subTo(r,n),e&&a.subTo(i,a),u.subTo(s,u))}return 0!=n.compareTo(o.ONE)?o.ZERO:u.compareTo(t)>=0?u.subtract(t):u.signum()<0?(u.addTo(t,u),u.signum()<0?u.add(t):u):u}function re(t){var e,r=this.abs();if(1==r.t&&r[0]<=yn[yn.length-1]){for(e=0;e<yn.length;++e)if(r[0]==yn[e])return!0;return!1}if(r.isEven())return!1;for(e=1;e<yn.length;){for(var n=yn[e],i=e+1;i<yn.length&&vn>n;)n*=yn[i++];for(n=r.modInt(n);i>e;)if(n%yn[e++]==0)return!1}return r.millerRabin(t)}function ne(t){var e=this.subtract(o.ONE),r=e.getLowestSetBit();if(0>=r)return!1;var n=e.shiftRight(r);t=t+1>>1,t>yn.length&&(t=yn.length);for(var i=a(),s=0;t>s;++s){i.fromInt(yn[Math.floor(Math.random()*yn.length)]);var u=i.modPow(n,this);if(0!=u.compareTo(o.ONE)&&0!=u.compareTo(e)){for(var h=1;h++<r&&0!=u.compareTo(e);)if(u=u.modPowInt(2,this),0==u.compareTo(o.ONE))return!1;if(0!=u.compareTo(e))return!1}}return!0}function ie(){this.i=0,this.j=0,this.S=new Array}function se(t){var e,r,n;for(e=0;256>e;++e)this.S[e]=e;for(r=0,e=0;256>e;++e)r=r+this.S[e]+t[e%t.length]&255,n=this.S[e],this.S[e]=this.S[r],this.S[r]=n;this.i=0,this.j=0}function oe(){var t;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,t=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=t,this.S[t+this.S[this.i]&255]}function ae(){return new ie}function ue(t){Sn[_n++]^=255&t,Sn[_n++]^=t>>8&255,Sn[_n++]^=t>>16&255,Sn[_n++]^=t>>24&255,_n>=En&&(_n-=En)}function he(){ue((new Date).getTime())}function ce(){if(null==mn){for(he(),mn=ae(),mn.init(Sn),_n=0;_n<Sn.length;++_n)Sn[_n]=0;_n=0}return mn.next()}function fe(t){var e;for(e=0;e<t.length;++e)t[e]=ce()}function le(){}function de(t,e){return new o(t,e)}function pe(t,e){if(e<t.length+11)return alert("Message too long for RSA"),null;for(var r=new Array,n=t.length-1;n>=0&&e>0;){var i=t.charCodeAt(n--);128>i?r[--e]=i:i>127&&2048>i?(r[--e]=63&i|128,r[--e]=i>>6|192):(r[--e]=63&i|128,r[--e]=i>>6&63|128,r[--e]=i>>12|224)}r[--e]=0;for(var s=new le,a=new Array;e>2;){for(a[0]=0;0==a[0];)s.nextBytes(a);r[--e]=a[0]}return r[--e]=2,r[--e]=0,new o(r)}function ge(t,e,r){for(var n="",i=0;n.length<e;)n+=r(String.fromCharCode.apply(String,t.concat([(4278190080&i)>>24,(16711680&i)>>16,(65280&i)>>8,255&i]))),i+=1;return n}function ye(t,e,r){if(t.length+2*xn+2>e)throw"Message too long for RSA";var n,i="";for(n=0;n<e-t.length-2*xn-2;n+=1)i+="\x00";var s=rstr_sha1("")+i+""+t,a=new Array(xn);(new le).nextBytes(a);var u=ge(a,s.length,r||rstr_sha1),h=[];for(n=0;n<s.length;n+=1)h[n]=s.charCodeAt(n)^u.charCodeAt(n);var c=ge(h,a.length,rstr_sha1),f=[0];for(n=0;n<a.length;n+=1)f[n+1]=a[n]^c.charCodeAt(n);return new o(f.concat(h))}function ve(){this.n=null,this.e=0,this.d=null,this.p=null,this.q=null,this.dmp1=null,this.dmq1=null,this.coeff=null}function me(t,e){this.isPublic=!0,"string"!=typeof t?(this.n=t,this.e=e):null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=de(t,16),this.e=parseInt(e,16)):alert("Invalid RSA public key")}function Se(t){return t.modPowInt(this.e,this.n)}function _e(t){var e=pe(t,this.n.bitLength()+7>>3);if(null==e)return null;var r=this.doPublic(e);if(null==r)return null;var n=r.toString(16);return 0==(1&n.length)?n:"0"+n}function Ee(t,e){var r=ye(t,this.n.bitLength()+7>>3,e);if(null==r)return null;var n=this.doPublic(r);if(null==n)return null;var i=n.toString(16);return 0==(1&i.length)?i:"0"+i}function be(t,e){for(var r=t.toByteArray(),n=0;n<r.length&&0==r[n];)++n;if(r.length-n!=e-1||2!=r[n])return null;for(++n;0!=r[n];)if(++n>=r.length)return null;for(var i="";++n<r.length;){var s=255&r[n];128>s?i+=String.fromCharCode(s):s>191&&224>s?(i+=String.fromCharCode((31&s)<<6|63&r[n+1]),++n):(i+=String.fromCharCode((15&s)<<12|(63&r[n+1])<<6|63&r[n+2]),n+=2)}return i}function we(t,e,r){for(var n="",i=0;n.length<e;)n+=r(t+String.fromCharCode.apply(String,[(4278190080&i)>>24,(16711680&i)>>16,(65280&i)>>8,255&i])),i+=1;return n}function Re(t,e,r){t=t.toByteArray();var n;for(n=0;n<t.length;n+=1)t[n]&=255;for(;t.length<e;)t.unshift(0);if(t=String.fromCharCode.apply(String,t),t.length<2*xn+2)throw"Cipher too short";var n,i=t.substr(1,xn),s=t.substr(xn+1),o=we(s,xn,r||rstr_sha1),a=[];for(n=0;n<i.length;n+=1)a[n]=i.charCodeAt(n)^o.charCodeAt(n);var u=we(String.fromCharCode.apply(String,a),t.length-xn,rstr_sha1),h=[];for(n=0;n<s.length;n+=1)h[n]=s.charCodeAt(n)^u.charCodeAt(n);if(h=String.fromCharCode.apply(String,h),h.substr(0,xn)!==rstr_sha1(""))throw"Hash mismatch";h=h.substr(xn);var c=h.indexOf(""),f=-1!=c?h.substr(0,c).lastIndexOf("\x00"):-1;
	if(f+1!=c)throw"Malformed data";return h.substr(c+1)}function xe(t,e,r){this.isPrivate=!0,"string"!=typeof t?(this.n=t,this.e=e,this.d=r):null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=de(t,16),this.e=parseInt(e,16),this.d=de(r,16)):alert("Invalid RSA private key")}function Ae(t,e,r,n,i,s,o,a){if(this.isPrivate=!0,null==t)throw"RSASetPrivateEx N == null";if(null==e)throw"RSASetPrivateEx E == null";if(0==t.length)throw"RSASetPrivateEx N.length == 0";if(0==e.length)throw"RSASetPrivateEx E.length == 0";null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=de(t,16),this.e=parseInt(e,16),this.d=de(r,16),this.p=de(n,16),this.q=de(i,16),this.dmp1=de(s,16),this.dmq1=de(o,16),this.coeff=de(a,16)):alert("Invalid RSA private key in RSASetPrivateEx")}function Fe(t,e){var r=new le,n=t>>1;this.e=parseInt(e,16);for(var i=new o(e,16);;){for(;this.p=new o(t-n,1,r),0!=this.p.subtract(o.ONE).gcd(i).compareTo(o.ONE)||!this.p.isProbablePrime(10););for(;this.q=new o(n,1,r),0!=this.q.subtract(o.ONE).gcd(i).compareTo(o.ONE)||!this.q.isProbablePrime(10););if(this.p.compareTo(this.q)<=0){var s=this.p;this.p=this.q,this.q=s}var a=this.p.subtract(o.ONE),u=this.q.subtract(o.ONE),h=a.multiply(u);if(0==h.gcd(i).compareTo(o.ONE)){this.n=this.p.multiply(this.q),this.d=i.modInverse(h),this.dmp1=this.d.mod(a),this.dmq1=this.d.mod(u),this.coeff=this.q.modInverse(this.p);break}}}function Ke(t){if(null==this.p||null==this.q)return t.modPow(this.d,this.n);for(var e=t.mod(this.p).modPow(this.dmp1,this.p),r=t.mod(this.q).modPow(this.dmq1,this.q);e.compareTo(r)<0;)e=e.add(this.p);return e.subtract(r).multiply(this.coeff).mod(this.p).multiply(this.q).add(r)}function Ue(t){var e=de(t,16),r=this.doPrivate(e);return null==r?null:be(r,this.n.bitLength()+7>>3)}function Oe(t,e){var r=de(t,16),n=this.doPrivate(r);return null==n?null:Re(n,this.n.bitLength()+7>>3,e)}function Pe(t,e){this.x=e,this.q=t}function Ie(t){return t==this?!0:this.q.equals(t.q)&&this.x.equals(t.x)}function De(){return this.x}function Ce(){return new Pe(this.q,this.x.negate().mod(this.q))}function Te(t){return new Pe(this.q,this.x.add(t.toBigInteger()).mod(this.q))}function je(t){return new Pe(this.q,this.x.subtract(t.toBigInteger()).mod(this.q))}function Je(t){return new Pe(this.q,this.x.multiply(t.toBigInteger()).mod(this.q))}function He(){return new Pe(this.q,this.x.square().mod(this.q))}function Be(t){return new Pe(this.q,this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q))}function ke(t,e,r,n){this.curve=t,this.x=e,this.y=r,null==n?this.z=o.ONE:this.z=n,this.zinv=null}function Ne(){return null==this.zinv&&(this.zinv=this.z.modInverse(this.curve.q)),this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))}function Me(){return null==this.zinv&&(this.zinv=this.z.modInverse(this.curve.q)),this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))}function Ve(t){if(t==this)return!0;if(this.isInfinity())return t.isInfinity();if(t.isInfinity())return this.isInfinity();var e,r;return e=t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q),e.equals(o.ZERO)?(r=t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q),r.equals(o.ZERO)):!1}function Le(){return null==this.x&&null==this.y?!0:this.z.equals(o.ZERO)&&!this.y.toBigInteger().equals(o.ZERO)}function qe(){return new ke(this.curve,this.x,this.y.negate(),this.z)}function ze(t){if(this.isInfinity())return t;if(t.isInfinity())return this;var e=t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q),r=t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q);if(o.ZERO.equals(r))return o.ZERO.equals(e)?this.twice():this.curve.getInfinity();var n=new o("3"),i=this.x.toBigInteger(),s=this.y.toBigInteger(),a=(t.x.toBigInteger(),t.y.toBigInteger(),r.square()),u=a.multiply(r),h=i.multiply(a),c=e.square().multiply(this.z),f=c.subtract(h.shiftLeft(1)).multiply(t.z).subtract(u).multiply(r).mod(this.curve.q),l=h.multiply(n).multiply(e).subtract(s.multiply(u)).subtract(c.multiply(e)).multiply(t.z).add(e.multiply(u)).mod(this.curve.q),d=u.multiply(this.z).multiply(t.z).mod(this.curve.q);return new ke(this.curve,this.curve.fromBigInteger(f),this.curve.fromBigInteger(l),d)}function We(){if(this.isInfinity())return this;if(0==this.y.toBigInteger().signum())return this.curve.getInfinity();var t=new o("3"),e=this.x.toBigInteger(),r=this.y.toBigInteger(),n=r.multiply(this.z),i=n.multiply(r).mod(this.curve.q),s=this.curve.a.toBigInteger(),a=e.square().multiply(t);o.ZERO.equals(s)||(a=a.add(this.z.square().multiply(s))),a=a.mod(this.curve.q);var u=a.square().subtract(e.shiftLeft(3).multiply(i)).shiftLeft(1).multiply(n).mod(this.curve.q),h=a.multiply(t).multiply(e).subtract(i.shiftLeft(1)).shiftLeft(2).multiply(i).subtract(a.square().multiply(a)).mod(this.curve.q),c=n.square().multiply(n).shiftLeft(3).mod(this.curve.q);return new ke(this.curve,this.curve.fromBigInteger(u),this.curve.fromBigInteger(h),c)}function Ye(t){if(this.isInfinity())return this;if(0==t.signum())return this.curve.getInfinity();var e,r=t,n=r.multiply(new o("3")),i=this.negate(),s=this;for(e=n.bitLength()-2;e>0;--e){s=s.twice();var a=n.testBit(e),u=r.testBit(e);a!=u&&(s=s.add(a?this:i))}return s}function Ge(t,e,r){var n;n=t.bitLength()>r.bitLength()?t.bitLength()-1:r.bitLength()-1;for(var i=this.curve.getInfinity(),s=this.add(e);n>=0;)i=i.twice(),t.testBit(n)?i=r.testBit(n)?i.add(s):i.add(this):r.testBit(n)&&(i=i.add(e)),--n;return i}function Xe(t,e,r){this.q=t,this.a=this.fromBigInteger(e),this.b=this.fromBigInteger(r),this.infinity=new ke(this,null,null)}function $e(){return this.q}function Ze(){return this.a}function Qe(){return this.b}function tr(t){return t==this?!0:this.q.equals(t.q)&&this.a.equals(t.a)&&this.b.equals(t.b)}function er(){return this.infinity}function rr(t){return new Pe(this.q,t)}function nr(t){switch(parseInt(t.substr(0,2),16)){case 0:return this.infinity;case 2:case 3:return null;case 4:case 6:case 7:var e=(t.length-2)/2,r=t.substr(2,e),n=t.substr(e+2,e);return new ke(this,this.fromBigInteger(new o(r,16)),this.fromBigInteger(new o(n,16)));default:return null}}function ir(t){for(var e=new Array,r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e}function sr(t){for(var e="",r=0;r<t.length;r++)e+=String.fromCharCode(t[r]);return e}function or(t){for(var e="",r=0;r<t.length;r++){var n=t[r].toString(16);1==n.length&&(n="0"+n),e+=n}return e}function ar(t){return or(ir(t))}function ur(t){return n(ar(t))}function hr(t){return fr(n(ar(t)))}function cr(t){return sr(s(lr(t)))}function fr(t){return t=t.replace(/\=/g,""),t=t.replace(/\+/g,"-"),t=t.replace(/\//g,"_")}function lr(t){return t.length%4==2?t+="==":t.length%4==3&&(t+="="),t=t.replace(/-/g,"+"),t=t.replace(/_/g,"/")}function dr(t){return t.length%2==1&&(t="0"+t),fr(n(t))}function pr(t){return i(lr(t))}function gr(t){return n(Er(wr(t)))}function yr(t){return decodeURIComponent(br(i(t)))}function vr(t){return Er(wr(t))}function mr(t){return decodeURIComponent(br(t))}function Sr(t){for(var e="",r=0;r<t.length-1;r+=2)e+=String.fromCharCode(parseInt(t.substr(r,2),16));return e}function _r(t){for(var e="",r=0;r<t.length;r++)e+=("0"+t.charCodeAt(r).toString(16)).slice(-2);return e}function Er(t){return t.replace(/%/g,"")}function br(t){return t.replace(/(..)/g,"%$1")}function wr(t){for(var e=encodeURIComponent(t),r="",n=0;n<e.length;n++)"%"==e[n]?(r+=e.substr(n,3),n+=2):r=r+"%"+ar(e[n]);return r}function Rr(t){return t=t.replace(/\r\n/gm,"\n")}function xr(t){return t=t.replace(/\r\n/gm,"\n"),t=t.replace(/\n/gm,"\r\n")}function Ar(t){t=t.replace(/^\s*\[\s*/,""),t=t.replace(/\s*\]\s*$/,""),t=t.replace(/\s*/g,"");try{var e=t.split(/,/).map(function(t,e,r){var n=parseInt(t);if(0>n||n>255)throw"integer not in range 0-255";var i=("00"+n.toString(16)).slice(-2);return i}).join("");return e}catch(r){throw"malformed integer array string: "+r}}function Fr(t){var e=t;return e=e.replace("-----BEGIN RSA PRIVATE KEY-----",""),e=e.replace("-----END RSA PRIVATE KEY-----",""),e=e.replace(/[ \n]+/g,"")}function Kr(t){var e=new Array,r=Fn.getStartPosOfV_AtObj(t,0),n=Fn.getPosOfNextSibling_AtObj(t,r),i=Fn.getPosOfNextSibling_AtObj(t,n),s=Fn.getPosOfNextSibling_AtObj(t,i),o=Fn.getPosOfNextSibling_AtObj(t,s),a=Fn.getPosOfNextSibling_AtObj(t,o),u=Fn.getPosOfNextSibling_AtObj(t,a),h=Fn.getPosOfNextSibling_AtObj(t,u),c=Fn.getPosOfNextSibling_AtObj(t,h);return e.push(r,n,i,s,o,a,u,h,c),e}function Ur(t){var e=Kr(t),r=Fn.getHexOfV_AtObj(t,e[0]),n=Fn.getHexOfV_AtObj(t,e[1]),i=Fn.getHexOfV_AtObj(t,e[2]),s=Fn.getHexOfV_AtObj(t,e[3]),o=Fn.getHexOfV_AtObj(t,e[4]),a=Fn.getHexOfV_AtObj(t,e[5]),u=Fn.getHexOfV_AtObj(t,e[6]),h=Fn.getHexOfV_AtObj(t,e[7]),c=Fn.getHexOfV_AtObj(t,e[8]),f=new Array;return f.push(r,n,i,s,o,a,u,h,c),f}function Or(t){var e=Ur(t);this.setPrivateEx(e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8])}function Pr(t){var e=Fr(t),r=i(e),n=Ur(r);this.setPrivateEx(n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8])}function Ir(t,e){for(var r="",n=e/4-t.length,i=0;n>i;i++)r+="0";return r+t}function Dr(t,e){var r=function(t){return KJUR.crypto.Util.hashString(t,e)},n=r(t);return this.signWithMessageHash(n,e)}function Cr(t,e){var r=KJUR.crypto.Util.getPaddedDigestInfoHex(t,e,this.n.bitLength()),n=de(r,16),i=this.doPrivate(n),s=i.toString(16);return Ir(s,this.n.bitLength())}function Tr(t){return Dr.call(this,t,"sha1")}function jr(t){return Dr.call(this,t,"sha256")}function Jr(t,e,r){for(var n="",i=0;n.length<e;)n+=Sr(r(_r(t+String.fromCharCode.apply(String,[(4278190080&i)>>24,(16711680&i)>>16,(65280&i)>>8,255&i])))),i+=1;return n}function Hr(t,e,r){var n=function(t){return KJUR.crypto.Util.hashHex(t,e)},i=n(_r(t));return void 0===r&&(r=-1),this.signWithMessageHashPSS(i,e,r)}function Br(t,e,r){var n,i=Sr(t),s=i.length,a=this.n.bitLength()-1,u=Math.ceil(a/8),h=function(t){return KJUR.crypto.Util.hashHex(t,e)};if(-1===r||void 0===r)r=s;else if(-2===r)r=u-s-2;else if(-2>r)throw"invalid salt length";if(s+r+2>u)throw"data too long";var c="";r>0&&(c=new Array(r),(new le).nextBytes(c),c=String.fromCharCode.apply(String,c));var f=Sr(h(_r("\x00\x00\x00\x00\x00\x00\x00\x00"+i+c))),l=[];for(n=0;u-r-s-2>n;n+=1)l[n]=0;var d=String.fromCharCode.apply(String,l)+""+c,p=Jr(f,d.length,h),g=[];for(n=0;n<d.length;n+=1)g[n]=d.charCodeAt(n)^p.charCodeAt(n);var y=65280>>8*u-a&255;for(g[0]&=~y,n=0;s>n;n++)g.push(f.charCodeAt(n));return g.push(188),Ir(this.doPrivate(new o(g)).toString(16),this.n.bitLength())}function kr(t,e,r){var n=new ve;n.setPublic(e,r);var i=n.doPublic(t);return i}function Nr(t,e,r){var n=kr(t,e,r),i=n.toString(16).replace(/^1f+00/,"");return i}function Mr(t){for(var e in KJUR.crypto.Util.DIGESTINFOHEAD){var r=KJUR.crypto.Util.DIGESTINFOHEAD[e],n=r.length;if(t.substring(0,n)==r){var i=[e,t.substring(n)];return i}}return[]}function Vr(t,e,r,n){var i=Nr(e,r,n),s=Mr(i);if(0==s.length)return!1;var o=s[0],a=s[1],u=function(t){return KJUR.crypto.Util.hashString(t,o)},h=u(t);return a==h}function Lr(t,e){var r=de(t,16),n=Vr(e,r,this.n.toString(16),this.e.toString(16));return n}function qr(t,e){e=e.replace(Dn,""),e=e.replace(/[ \n]+/g,"");var r=de(e,16);if(r.bitLength()>this.n.bitLength())return 0;var n=this.doPublic(r),i=n.toString(16).replace(/^1f+00/,""),s=Mr(i);if(0==s.length)return!1;var o=s[0],a=s[1],u=function(t){return KJUR.crypto.Util.hashString(t,o)},h=u(t);return a==h}function zr(t,e){e=e.replace(Dn,""),e=e.replace(/[ \n]+/g,"");var r=de(e,16);if(r.bitLength()>this.n.bitLength())return 0;var n=this.doPublic(r),i=n.toString(16).replace(/^1f+00/,""),s=Mr(i);if(0==s.length)return!1;var o=(s[0],s[1]);return o==t}function Wr(t,e,r,n){var i=function(t){return KJUR.crypto.Util.hashHex(t,r)},s=i(_r(t));return void 0===n&&(n=-1),this.verifyWithMessageHashPSS(s,e,r,n)}function Yr(t,e,r,n){var i=new o(e,16);if(i.bitLength()>this.n.bitLength())return!1;var s,a=function(t){return KJUR.crypto.Util.hashHex(t,r)},u=Sr(t),h=u.length,c=this.n.bitLength()-1,f=Math.ceil(c/8);if(-1===n||void 0===n)n=h;else if(-2===n)n=f-h-2;else if(-2>n)throw"invalid salt length";if(h+n+2>f)throw"data too long";var l=this.doPublic(i).toByteArray();for(s=0;s<l.length;s+=1)l[s]&=255;for(;l.length<f;)l.unshift(0);if(188!==l[f-1])throw"encoded message does not end in 0xbc";l=String.fromCharCode.apply(String,l);var d=l.substr(0,f-h-1),p=l.substr(d.length,h),g=65280>>8*f-c&255;if(0!==(d.charCodeAt(0)&g))throw"bits beyond keysize not zero";var y=Jr(p,d.length,a),v=[];for(s=0;s<d.length;s+=1)v[s]=d.charCodeAt(s)^y.charCodeAt(s);v[0]&=~g;var m=f-h-n-2;for(s=0;m>s;s+=1)if(0!==v[s])throw"leftmost octets not zero";if(1!==v[m])throw"0x01 marker not found";return p===Sr(a(_r("\x00\x00\x00\x00\x00\x00\x00\x00"+u+String.fromCharCode.apply(String,v.slice(-n)))))}function Gr(){this.subjectPublicKeyRSA=null,this.subjectPublicKeyRSA_hN=null,this.subjectPublicKeyRSA_hE=null,this.hex=null,this.getSerialNumberHex=function(){return Fn.getDecendantHexVByNthList(this.hex,0,[0,1])},this.getSignatureAlgorithmField=function(){var t=Fn.getDecendantHexVByNthList(this.hex,0,[0,2,0]),e=KJUR.asn1.ASN1Util.oidHexToInt(t),r=KJUR.asn1.x509.OID.oid2name(e);return r},this.getIssuerHex=function(){return Fn.getDecendantHexTLVByNthList(this.hex,0,[0,3])},this.getIssuerString=function(){return Gr.hex2dn(Fn.getDecendantHexTLVByNthList(this.hex,0,[0,3]))},this.getSubjectHex=function(){return Fn.getDecendantHexTLVByNthList(this.hex,0,[0,5])},this.getSubjectString=function(){return Gr.hex2dn(Fn.getDecendantHexTLVByNthList(this.hex,0,[0,5]))},this.getNotBefore=function(){var t=Fn.getDecendantHexVByNthList(this.hex,0,[0,4,0]);return t=t.replace(/(..)/g,"%$1"),t=decodeURIComponent(t)},this.getNotAfter=function(){var t=Fn.getDecendantHexVByNthList(this.hex,0,[0,4,1]);return t=t.replace(/(..)/g,"%$1"),t=decodeURIComponent(t)},this.readCertPEM=function(t){var e=Gr.pemToHex(t),r=Gr.getPublicKeyHexArrayFromCertHex(e),n=new ve;n.setPublic(r[0],r[1]),this.subjectPublicKeyRSA=n,this.subjectPublicKeyRSA_hN=r[0],this.subjectPublicKeyRSA_hE=r[1],this.hex=e},this.readCertPEMWithoutRSAInit=function(t){var e=Gr.pemToHex(t),r=Gr.getPublicKeyHexArrayFromCertHex(e);this.subjectPublicKeyRSA.setPublic(r[0],r[1]),this.subjectPublicKeyRSA_hN=r[0],this.subjectPublicKeyRSA_hE=r[1],this.hex=e},this.getInfo=function(){var t="Basic Fields\n";t+="  serial number: "+this.getSerialNumberHex()+"\n",t+="  signature algorithm: "+this.getSignatureAlgorithmField()+"\n",t+="  issuer: "+this.getIssuerString()+"\n",t+="  notBefore: "+this.getNotBefore()+"\n",t+="  notAfter: "+this.getNotAfter()+"\n",t+="  subject: "+this.getSubjectString()+"\n",t+="  subject public key info: \n";var e=Gr.getSubjectPublicKeyInfoPosFromCertHex(this.hex),r=Fn.getHexOfTLV_AtObj(this.hex,e),n=In.getKey(r,null,"pkcs8pub");n instanceof ve&&(t+="    key algorithm: RSA\n",t+="    n="+n.n.toString(16).substr(0,16)+"...\n",t+="    e="+n.e.toString(16)+"\n"),t+="X509v3 Extensions:\n";for(var i=Gr.getV3ExtInfoListOfCertHex(this.hex),s=0;s<i.length;s++){var o=i[s],a=KJUR.asn1.x509.OID.oid2name(o.oid);""===a&&(a=o.oid);var u="";if(o.critical===!0&&(u="CRITICAL"),t+="  "+a+" "+u+":\n","basicConstraints"===a){var h=Gr.getExtBasicConstraints(this.hex);void 0===h.cA?t+="    {}\n":(t+="    cA=true",void 0!==h.pathLen&&(t+=", pathLen="+h.pathLen),t+="\n")}else if("keyUsage"===a)t+="    "+Gr.getExtKeyUsageString(this.hex)+"\n";else if("subjectKeyIdentifier"===a)t+="    "+Gr.getExtSubjectKeyIdentifier(this.hex)+"\n";else if("authorityKeyIdentifier"===a){var c=Gr.getExtAuthorityKeyIdentifier(this.hex);void 0!==c.kid&&(t+="    kid="+c.kid+"\n")}else if("extKeyUsage"===a){var f=Gr.getExtExtKeyUsageName(this.hex);t+="    "+f.join(", ")+"\n"}else if("subjectAltName"===a){var l=Gr.getExtSubjectAltName(this.hex);t+="    "+l.join(", ")+"\n"}else if("cRLDistributionPoints"===a){var d=Gr.getExtCRLDistributionPointsURI(this.hex);t+="    "+d+"\n"}else if("authorityInfoAccess"===a){var p=Gr.getExtAIAInfo(this.hex);void 0!==p.ocsp&&(t+="    ocsp: "+p.ocsp.join(",")+"\n"),void 0!==p.caissuer&&(t+="    caissuer: "+p.caissuer.join(",")+"\n")}}return t+="signature algorithm: "+Gr.getSignatureAlgorithmName(this.hex)+"\n",t+="signature: "+Gr.getSignatureValueHex(this.hex).substr(0,16)+"...\n"}}function Xr(t){return r(3).readFileSync(t,"utf8")}function $r(t){var e=r(8),n=r(3);return e.rstrtohex(n.readFileSync(t,"binary"))}function Zr(t){var e=r(3);return e.readFileSync(t,"binary")}function Qr(t,e){var n=r(3);n.writeFileSync(t,e,"binary")}function tn(t,e){var n=r(3),i=r(8),s=i.hextorstr(e);n.writeFileSync(t,s,"binary")}var en={};en.userAgent=!1;var rn={};if("undefined"==typeof nn||!nn)var nn={};nn.namespace=function(){var t,e,r,n=arguments,i=null;for(t=0;t<n.length;t+=1)for(r=(""+n[t]).split("."),i=nn,e="YAHOO"==r[0]?1:0;e<r.length;e+=1)i[r[e]]=i[r[e]]||{},i=i[r[e]];return i},nn.log=function(t,e,r){var n=nn.widget.Logger;return n&&n.log?n.log(t,e,r):!1},nn.register=function(t,e,r){var n,i,s,o,a,u=nn.env.modules;for(u[t]||(u[t]={versions:[],builds:[]}),n=u[t],i=r.version,s=r.build,o=nn.env.listeners,n.name=t,n.version=i,n.build=s,n.versions.push(i),n.builds.push(s),n.mainClass=e,a=0;a<o.length;a+=1)o[a](n);e?(e.VERSION=i,e.BUILD=s):nn.log("mainClass is undefined for module "+t,"warn")},nn.env=nn.env||{modules:[],listeners:[]},nn.env.getVersion=function(t){return nn.env.modules[t]||null},nn.env.parseUA=function(t){var e,r=function(t){var e=0;return parseFloat(t.replace(/\./g,function(){return 1==e++?"":"."}))},n=en,i={ie:0,opera:0,gecko:0,webkit:0,chrome:0,mobile:null,air:0,ipad:0,iphone:0,ipod:0,ios:null,android:0,webos:0,caja:n&&n.cajaVersion,secure:!1,os:null},s=t||en&&en.userAgent,o=rn&&rn.location,a=o&&o.href;return i.secure=a&&0===a.toLowerCase().indexOf("https"),s&&(/windows|win32/i.test(s)?i.os="windows":/macintosh/i.test(s)?i.os="macintosh":/rhino/i.test(s)&&(i.os="rhino"),/KHTML/.test(s)&&(i.webkit=1),e=s.match(/AppleWebKit\/([^\s]*)/),e&&e[1]&&(i.webkit=r(e[1]),/ Mobile\//.test(s)?(i.mobile="Apple",e=s.match(/OS ([^\s]*)/),e&&e[1]&&(e=r(e[1].replace("_","."))),i.ios=e,i.ipad=i.ipod=i.iphone=0,e=s.match(/iPad|iPod|iPhone/),e&&e[0]&&(i[e[0].toLowerCase()]=i.ios)):(e=s.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/),e&&(i.mobile=e[0]),/webOS/.test(s)&&(i.mobile="WebOS",e=s.match(/webOS\/([^\s]*);/),e&&e[1]&&(i.webos=r(e[1]))),/ Android/.test(s)&&(i.mobile="Android",e=s.match(/Android ([^\s]*);/),e&&e[1]&&(i.android=r(e[1])))),e=s.match(/Chrome\/([^\s]*)/),e&&e[1]?i.chrome=r(e[1]):(e=s.match(/AdobeAIR\/([^\s]*)/),e&&(i.air=e[0]))),i.webkit||(e=s.match(/Opera[\s\/]([^\s]*)/),e&&e[1]?(i.opera=r(e[1]),e=s.match(/Version\/([^\s]*)/),e&&e[1]&&(i.opera=r(e[1])),e=s.match(/Opera Mini[^;]*/),e&&(i.mobile=e[0])):(e=s.match(/MSIE\s([^;]*)/),e&&e[1]?i.ie=r(e[1]):(e=s.match(/Gecko\/([^\s]*)/),e&&(i.gecko=1,e=s.match(/rv:([^\s\)]*)/),e&&e[1]&&(i.gecko=r(e[1]))))))),i},nn.env.ua=nn.env.parseUA(),function(){if(nn.namespace("util","widget","example"),"undefined"!=typeof YAHOO_config){var t,e=YAHOO_config.listener,r=nn.env.listeners,n=!0;if(e){for(t=0;t<r.length;t++)if(r[t]==e){n=!1;break}n&&r.push(e)}}}(),nn.lang=nn.lang||{},function(){var t=nn.lang,e=Object.prototype,r="[object Array]",n="[object Function]",i="[object Object]",s=[],o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;","`":"&#x60;"},a=["toString","valueOf"],u={isArray:function(t){return e.toString.apply(t)===r},isBoolean:function(t){return"boolean"==typeof t},isFunction:function(t){return"function"==typeof t||e.toString.apply(t)===n},isNull:function(t){return null===t},isNumber:function(t){return"number"==typeof t&&isFinite(t)},isObject:function(e){return e&&("object"==typeof e||t.isFunction(e))||!1},isString:function(t){return"string"==typeof t},isUndefined:function(t){return"undefined"==typeof t},_IEEnumFix:nn.env.ua.ie?function(r,n){var i,s,o;for(i=0;i<a.length;i+=1)s=a[i],o=n[s],t.isFunction(o)&&o!=e[s]&&(r[s]=o)}:function(){},escapeHTML:function(t){return t.replace(/[&<>"'\/`]/g,function(t){return o[t]})},extend:function(r,n,i){if(!n||!r)throw new Error("extend failed, please check that all dependencies are included.");var s,o=function(){};if(o.prototype=n.prototype,r.prototype=new o,r.prototype.constructor=r,r.superclass=n.prototype,n.prototype.constructor==e.constructor&&(n.prototype.constructor=n),i){for(s in i)t.hasOwnProperty(i,s)&&(r.prototype[s]=i[s]);t._IEEnumFix(r.prototype,i)}},augmentObject:function(e,r){if(!r||!e)throw new Error("Absorb failed, verify dependencies.");var n,i,s=arguments,o=s[2];if(o&&o!==!0)for(n=2;n<s.length;n+=1)e[s[n]]=r[s[n]];else{for(i in r)!o&&i in e||(e[i]=r[i]);t._IEEnumFix(e,r)}return e},augmentProto:function(e,r){if(!r||!e)throw new Error("Augment failed, verify dependencies.");var n,i=[e.prototype,r.prototype];for(n=2;n<arguments.length;n+=1)i.push(arguments[n]);return t.augmentObject.apply(this,i),e},dump:function(e,r){var n,i,s=[],o="{...}",a="f(){...}",u=", ",h=" => ";if(!t.isObject(e))return e+"";if(e instanceof Date||"nodeType"in e&&"tagName"in e)return e;if(t.isFunction(e))return a;if(r=t.isNumber(r)?r:3,t.isArray(e)){for(s.push("["),n=0,i=e.length;i>n;n+=1)t.isObject(e[n])?s.push(r>0?t.dump(e[n],r-1):o):s.push(e[n]),s.push(u);s.length>1&&s.pop(),s.push("]")}else{s.push("{");for(n in e)t.hasOwnProperty(e,n)&&(s.push(n+h),t.isObject(e[n])?s.push(r>0?t.dump(e[n],r-1):o):s.push(e[n]),s.push(u));s.length>1&&s.pop(),s.push("}")}return s.join("")},substitute:function(e,r,n,s){for(var o,a,u,h,c,f,l,d,p,g=[],y=e.length,v="dump",m=" ",S="{",_="}";o=e.lastIndexOf(S,y),!(0>o||(a=e.indexOf(_,o),o+1>a));)l=e.substring(o+1,a),h=l,f=null,u=h.indexOf(m),u>-1&&(f=h.substring(u+1),h=h.substring(0,u)),c=r[h],n&&(c=n(h,c,f)),t.isObject(c)?t.isArray(c)?c=t.dump(c,parseInt(f,10)):(f=f||"",d=f.indexOf(v),d>-1&&(f=f.substring(4)),p=c.toString(),c=p===i||d>-1?t.dump(c,parseInt(f,10)):p):t.isString(c)||t.isNumber(c)||(c="~-"+g.length+"-~",g[g.length]=l),e=e.substring(0,o)+c+e.substring(a+1),s===!1&&(y=o-1);for(o=g.length-1;o>=0;o-=1)e=e.replace(new RegExp("~-"+o+"-~"),"{"+g[o]+"}","g");return e},trim:function(t){try{return t.replace(/^\s+|\s+$/g,"")}catch(e){return t}},merge:function(){var e,r={},n=arguments,i=n.length;for(e=0;i>e;e+=1)t.augmentObject(r,n[e],!0);return r},later:function(e,r,n,i,o){e=e||0,r=r||{};var a,u,h=n,c=i;if(t.isString(n)&&(h=r[n]),!h)throw new TypeError("method undefined");return t.isUndefined(i)||t.isArray(c)||(c=[i]),a=function(){h.apply(r,c||s)},u=o?setInterval(a,e):setTimeout(a,e),{interval:o,cancel:function(){this.interval?clearInterval(u):clearTimeout(u)}}},isValue:function(e){return t.isObject(e)||t.isString(e)||t.isNumber(e)||t.isBoolean(e)}};t.hasOwnProperty=e.hasOwnProperty?function(t,e){return t&&t.hasOwnProperty&&t.hasOwnProperty(e)}:function(e,r){return!t.isUndefined(e[r])&&e.constructor.prototype[r]!==e[r]},u.augmentObject(t,u,!0),nn.util.Lang=t,t.augment=t.augmentProto,nn.augment=t.augmentProto,nn.extend=t.extend}(),nn.register("yahoo",nn,{version:"2.9.0",build:"2800"});var sn=sn||function(t,e){var r={},n=r.lib={},i=n.Base=function(){function t(){}return{extend:function(e){t.prototype=this;var r=new t;return e&&r.mixIn(e),r.hasOwnProperty("init")||(r.init=function(){r.$super.init.apply(this,arguments)}),r.init.prototype=r,r.$super=this,r},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),s=n.WordArray=i.extend({init:function(t,r){t=this.words=t||[],r!=e?this.sigBytes=r:this.sigBytes=4*t.length},toString:function(t){return(t||a).stringify(this)},concat:function(t){var e=this.words,r=t.words,n=this.sigBytes,i=t.sigBytes;if(this.clamp(),n%4)for(var s=0;i>s;s++){var o=r[s>>>2]>>>24-s%4*8&255;e[n+s>>>2]|=o<<24-(n+s)%4*8}else for(var s=0;i>s;s+=4)e[n+s>>>2]=r[s>>>2];return this.sigBytes+=i,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=i.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var r=[],n=0;e>n;n+=4)r.push(4294967296*t.random()|0);return new s.init(r,e)}}),o=r.enc={},a=o.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],i=0;r>i;i++){var s=e[i>>>2]>>>24-i%4*8&255;n.push((s>>>4).toString(16)),n.push((15&s).toString(16))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;e>n;n+=2)r[n>>>3]|=parseInt(t.substr(n,2),16)<<24-n%8*4;return new s.init(r,e/2)}},u=o.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],i=0;r>i;i++){var s=e[i>>>2]>>>24-i%4*8&255;n.push(String.fromCharCode(s))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;e>n;n++)r[n>>>2]|=(255&t.charCodeAt(n))<<24-n%4*8;return new s.init(r,e)}},h=o.Utf8={stringify:function(t){try{return decodeURIComponent(escape(u.stringify(t)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(t){return u.parse(unescape(encodeURIComponent(t)))}},c=n.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=h.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r=this._data,n=r.words,i=r.sigBytes,o=this.blockSize,a=4*o,u=i/a;u=e?t.ceil(u):t.max((0|u)-this._minBufferSize,0);var h=u*o,c=t.min(4*h,i);if(h){for(var f=0;h>f;f+=o)this._doProcessBlock(n,f);var l=n.splice(0,h);r.sigBytes-=c}return new s.init(l,c)},clone:function(){var t=i.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),f=(n.Hasher=c.extend({cfg:i.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){c.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new f.HMAC.init(t,r).finalize(e)}}}),r.algo={});return r}(Math);!function(t){var e=sn,r=e.lib,n=r.Base,i=r.WordArray,e=e.x64={};e.Word=n.extend({init:function(t,e){this.high=t,this.low=e}}),e.WordArray=n.extend({init:function(e,r){e=this.words=e||[],this.sigBytes=r!=t?r:8*e.length},toX32:function(){for(var t=this.words,e=t.length,r=[],n=0;e>n;n++){var s=t[n];r.push(s.high),r.push(s.low)}return i.create(r,this.sigBytes)},clone:function(){for(var t=n.clone.call(this),e=t.words=this.words.slice(0),r=e.length,i=0;r>i;i++)e[i]=e[i].clone();return t}})}(),sn.lib.Cipher||function(t){var e=sn,r=e.lib,n=r.Base,i=r.WordArray,s=r.BufferedBlockAlgorithm,o=e.enc.Base64,a=e.algo.EvpKDF,u=r.Cipher=s.extend({cfg:n.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,r){this.cfg=this.cfg.extend(r),this._xformMode=t,this._key=e,this.reset()},reset:function(){s.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(t){return{encrypt:function(e,r,n){return("string"==typeof r?p:d).encrypt(t,e,r,n)},decrypt:function(e,r,n){return("string"==typeof r?p:d).decrypt(t,e,r,n)}}}});r.StreamCipher=u.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var h=e.mode={},c=function(e,r,n){var i=this._iv;i?this._iv=t:i=this._prevBlock;for(var s=0;n>s;s++)e[r+s]^=i[s]},f=(r.BlockCipherMode=n.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}})).extend();f.Encryptor=f.extend({processBlock:function(t,e){var r=this._cipher,n=r.blockSize;c.call(this,t,e,n),r.encryptBlock(t,e),this._prevBlock=t.slice(e,e+n)}}),f.Decryptor=f.extend({processBlock:function(t,e){var r=this._cipher,n=r.blockSize,i=t.slice(e,e+n);r.decryptBlock(t,e),c.call(this,t,e,n),this._prevBlock=i}}),h=h.CBC=f,f=(e.pad={}).Pkcs7={pad:function(t,e){for(var r=4*e,r=r-t.sigBytes%r,n=r<<24|r<<16|r<<8|r,s=[],o=0;r>o;o+=4)s.push(n);r=i.create(s,r),t.concat(r)},unpad:function(t){t.sigBytes-=255&t.words[t.sigBytes-1>>>2]}},r.BlockCipher=u.extend({cfg:u.cfg.extend({mode:h,padding:f}),reset:function(){u.reset.call(this);var t=this.cfg,e=t.iv,t=t.mode;if(this._xformMode==this._ENC_XFORM_MODE)var r=t.createEncryptor;else r=t.createDecryptor,this._minBufferSize=1;this._mode=r.call(t,this,e&&e.words)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){t.pad(this._data,this.blockSize);var e=this._process(!0)}else e=this._process(!0),t.unpad(e);return e},blockSize:4});var l=r.CipherParams=n.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}}),h=(e.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext;return t=t.salt,(t?i.create([1398893684,1701076831]).concat(t).concat(e):e).toString(o)},parse:function(t){t=o.parse(t);var e=t.words;if(1398893684==e[0]&&1701076831==e[1]){var r=i.create(e.slice(2,4));e.splice(0,4),t.sigBytes-=16}return l.create({ciphertext:t,salt:r})}},d=r.SerializableCipher=n.extend({cfg:n.extend({format:h}),encrypt:function(t,e,r,n){n=this.cfg.extend(n);var i=t.createEncryptor(r,n);return e=i.finalize(e),i=i.cfg,l.create({ciphertext:e,key:r,iv:i.iv,algorithm:t,mode:i.mode,padding:i.padding,blockSize:t.blockSize,formatter:n.format})},decrypt:function(t,e,r,n){return n=this.cfg.extend(n),e=this._parse(e,n.format),t.createDecryptor(r,n).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),e=(e.kdf={}).OpenSSL={execute:function(t,e,r,n){return n||(n=i.random(8)),t=a.create({keySize:e+r}).compute(t,n),r=i.create(t.words.slice(e),4*r),t.sigBytes=4*e,l.create({key:t,iv:r,salt:n})}},p=r.PasswordBasedCipher=d.extend({cfg:d.cfg.extend({kdf:e}),encrypt:function(t,e,r,n){return n=this.cfg.extend(n),r=n.kdf.execute(r,t.keySize,t.ivSize),n.iv=r.iv,t=d.encrypt.call(this,t,e,r.key,n),t.mixIn(r),t},decrypt:function(t,e,r,n){return n=this.cfg.extend(n),e=this._parse(e,n.format),r=n.kdf.execute(r,t.keySize,t.ivSize,e.salt),n.iv=r.iv,d.decrypt.call(this,t,e,r.key,n)}})}(),function(){for(var t=sn,e=t.lib.BlockCipher,r=t.algo,n=[],i=[],s=[],o=[],a=[],u=[],h=[],c=[],f=[],l=[],d=[],p=0;256>p;p++)d[p]=128>p?p<<1:p<<1^283;for(var g=0,y=0,p=0;256>p;p++){var v=y^y<<1^y<<2^y<<3^y<<4,v=v>>>8^255&v^99;n[g]=v,i[v]=g;var m=d[g],S=d[m],_=d[S],E=257*d[v]^16843008*v;s[g]=E<<24|E>>>8,o[g]=E<<16|E>>>16,a[g]=E<<8|E>>>24,u[g]=E,E=16843009*_^65537*S^257*m^16843008*g,h[v]=E<<24|E>>>8,c[v]=E<<16|E>>>16,f[v]=E<<8|E>>>24,l[v]=E,g?(g=m^d[d[d[_^m]]],y^=d[d[y]]):g=y=1}var b=[0,1,2,4,8,16,32,64,128,27,54],r=r.AES=e.extend({_doReset:function(){for(var t=this._key,e=t.words,r=t.sigBytes/4,t=4*((this._nRounds=r+6)+1),i=this._keySchedule=[],s=0;t>s;s++)if(r>s)i[s]=e[s];else{var o=i[s-1];s%r?r>6&&4==s%r&&(o=n[o>>>24]<<24|n[o>>>16&255]<<16|n[o>>>8&255]<<8|n[255&o]):(o=o<<8|o>>>24,o=n[o>>>24]<<24|n[o>>>16&255]<<16|n[o>>>8&255]<<8|n[255&o],o^=b[s/r|0]<<24),i[s]=i[s-r]^o}for(e=this._invKeySchedule=[],r=0;t>r;r++)s=t-r,o=r%4?i[s]:i[s-4],e[r]=4>r||4>=s?o:h[n[o>>>24]]^c[n[o>>>16&255]]^f[n[o>>>8&255]]^l[n[255&o]]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,s,o,a,u,n)},decryptBlock:function(t,e){var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r,this._doCryptBlock(t,e,this._invKeySchedule,h,c,f,l,i),r=t[e+1],t[e+1]=t[e+3],t[e+3]=r},_doCryptBlock:function(t,e,r,n,i,s,o,a){for(var u=this._nRounds,h=t[e]^r[0],c=t[e+1]^r[1],f=t[e+2]^r[2],l=t[e+3]^r[3],d=4,p=1;u>p;p++)var g=n[h>>>24]^i[c>>>16&255]^s[f>>>8&255]^o[255&l]^r[d++],y=n[c>>>24]^i[f>>>16&255]^s[l>>>8&255]^o[255&h]^r[d++],v=n[f>>>24]^i[l>>>16&255]^s[h>>>8&255]^o[255&c]^r[d++],l=n[l>>>24]^i[h>>>16&255]^s[c>>>8&255]^o[255&f]^r[d++],h=g,c=y,f=v;
	g=(a[h>>>24]<<24|a[c>>>16&255]<<16|a[f>>>8&255]<<8|a[255&l])^r[d++],y=(a[c>>>24]<<24|a[f>>>16&255]<<16|a[l>>>8&255]<<8|a[255&h])^r[d++],v=(a[f>>>24]<<24|a[l>>>16&255]<<16|a[h>>>8&255]<<8|a[255&c])^r[d++],l=(a[l>>>24]<<24|a[h>>>16&255]<<16|a[c>>>8&255]<<8|a[255&f])^r[d++],t[e]=g,t[e+1]=y,t[e+2]=v,t[e+3]=l},keySize:8});t.AES=e._createHelper(r)}(),function(){function t(t,e){var r=(this._lBlock>>>t^this._rBlock)&e;this._rBlock^=r,this._lBlock^=r<<t}function e(t,e){var r=(this._rBlock>>>t^this._lBlock)&e;this._lBlock^=r,this._rBlock^=r<<t}var r=sn,n=r.lib,i=n.WordArray,n=n.BlockCipher,s=r.algo,o=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],a=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],u=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],h=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],c=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],f=s.DES=n.extend({_doReset:function(){for(var t=this._key.words,e=[],r=0;56>r;r++){var n=o[r]-1;e[r]=t[n>>>5]>>>31-n%32&1}for(t=this._subKeys=[],n=0;16>n;n++){for(var i=t[n]=[],s=u[n],r=0;24>r;r++)i[r/6|0]|=e[(a[r]-1+s)%28]<<31-r%6,i[4+(r/6|0)]|=e[28+(a[r+24]-1+s)%28]<<31-r%6;for(i[0]=i[0]<<1|i[0]>>>31,r=1;7>r;r++)i[r]>>>=4*(r-1)+3;i[7]=i[7]<<5|i[7]>>>27}for(e=this._invSubKeys=[],r=0;16>r;r++)e[r]=t[15-r]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._subKeys)},decryptBlock:function(t,e){this._doCryptBlock(t,e,this._invSubKeys)},_doCryptBlock:function(r,n,i){this._lBlock=r[n],this._rBlock=r[n+1],t.call(this,4,252645135),t.call(this,16,65535),e.call(this,2,858993459),e.call(this,8,16711935),t.call(this,1,1431655765);for(var s=0;16>s;s++){for(var o=i[s],a=this._lBlock,u=this._rBlock,f=0,l=0;8>l;l++)f|=h[l][((u^o[l])&c[l])>>>0];this._lBlock=u,this._rBlock=a^f}i=this._lBlock,this._lBlock=this._rBlock,this._rBlock=i,t.call(this,1,1431655765),e.call(this,8,16711935),e.call(this,2,858993459),t.call(this,16,65535),t.call(this,4,252645135),r[n]=this._lBlock,r[n+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});r.DES=n._createHelper(f),s=s.TripleDES=n.extend({_doReset:function(){var t=this._key.words;this._des1=f.createEncryptor(i.create(t.slice(0,2))),this._des2=f.createEncryptor(i.create(t.slice(2,4))),this._des3=f.createEncryptor(i.create(t.slice(4,6)))},encryptBlock:function(t,e){this._des1.encryptBlock(t,e),this._des2.decryptBlock(t,e),this._des3.encryptBlock(t,e)},decryptBlock:function(t,e){this._des3.decryptBlock(t,e),this._des2.encryptBlock(t,e),this._des1.decryptBlock(t,e)},keySize:6,ivSize:2,blockSize:2}),r.TripleDES=n._createHelper(s)}(),function(){var t=sn,e=t.lib.WordArray;t.enc.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,n=this._map;t.clamp(),t=[];for(var i=0;r>i;i+=3)for(var s=(e[i>>>2]>>>24-8*(i%4)&255)<<16|(e[i+1>>>2]>>>24-8*((i+1)%4)&255)<<8|e[i+2>>>2]>>>24-8*((i+2)%4)&255,o=0;4>o&&r>i+.75*o;o++)t.push(n.charAt(s>>>6*(3-o)&63));if(e=n.charAt(64))for(;t.length%4;)t.push(e);return t.join("")},parse:function(t){var r=t.length,n=this._map,i=n.charAt(64);i&&(i=t.indexOf(i),-1!=i&&(r=i));for(var i=[],s=0,o=0;r>o;o++)if(o%4){var a=n.indexOf(t.charAt(o-1))<<2*(o%4),u=n.indexOf(t.charAt(o))>>>6-2*(o%4);i[s>>>2]|=(a|u)<<24-8*(s%4),s++}return e.create(i,s)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),function(t){function e(t,e,r,n,i,s,o){return t=t+(e&r|~e&n)+i+o,(t<<s|t>>>32-s)+e}function r(t,e,r,n,i,s,o){return t=t+(e&n|r&~n)+i+o,(t<<s|t>>>32-s)+e}function n(t,e,r,n,i,s,o){return t=t+(e^r^n)+i+o,(t<<s|t>>>32-s)+e}function i(t,e,r,n,i,s,o){return t=t+(r^(e|~n))+i+o,(t<<s|t>>>32-s)+e}for(var s=sn,o=s.lib,a=o.WordArray,u=o.Hasher,o=s.algo,h=[],c=0;64>c;c++)h[c]=4294967296*t.abs(t.sin(c+1))|0;o=o.MD5=u.extend({_doReset:function(){this._hash=new a.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,s){for(var o=0;16>o;o++){var a=s+o,u=t[a];t[a]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8)}var o=this._hash.words,a=t[s+0],u=t[s+1],c=t[s+2],f=t[s+3],l=t[s+4],d=t[s+5],p=t[s+6],g=t[s+7],y=t[s+8],v=t[s+9],m=t[s+10],S=t[s+11],_=t[s+12],E=t[s+13],b=t[s+14],w=t[s+15],R=o[0],x=o[1],A=o[2],F=o[3],R=e(R,x,A,F,a,7,h[0]),F=e(F,R,x,A,u,12,h[1]),A=e(A,F,R,x,c,17,h[2]),x=e(x,A,F,R,f,22,h[3]),R=e(R,x,A,F,l,7,h[4]),F=e(F,R,x,A,d,12,h[5]),A=e(A,F,R,x,p,17,h[6]),x=e(x,A,F,R,g,22,h[7]),R=e(R,x,A,F,y,7,h[8]),F=e(F,R,x,A,v,12,h[9]),A=e(A,F,R,x,m,17,h[10]),x=e(x,A,F,R,S,22,h[11]),R=e(R,x,A,F,_,7,h[12]),F=e(F,R,x,A,E,12,h[13]),A=e(A,F,R,x,b,17,h[14]),x=e(x,A,F,R,w,22,h[15]),R=r(R,x,A,F,u,5,h[16]),F=r(F,R,x,A,p,9,h[17]),A=r(A,F,R,x,S,14,h[18]),x=r(x,A,F,R,a,20,h[19]),R=r(R,x,A,F,d,5,h[20]),F=r(F,R,x,A,m,9,h[21]),A=r(A,F,R,x,w,14,h[22]),x=r(x,A,F,R,l,20,h[23]),R=r(R,x,A,F,v,5,h[24]),F=r(F,R,x,A,b,9,h[25]),A=r(A,F,R,x,f,14,h[26]),x=r(x,A,F,R,y,20,h[27]),R=r(R,x,A,F,E,5,h[28]),F=r(F,R,x,A,c,9,h[29]),A=r(A,F,R,x,g,14,h[30]),x=r(x,A,F,R,_,20,h[31]),R=n(R,x,A,F,d,4,h[32]),F=n(F,R,x,A,y,11,h[33]),A=n(A,F,R,x,S,16,h[34]),x=n(x,A,F,R,b,23,h[35]),R=n(R,x,A,F,u,4,h[36]),F=n(F,R,x,A,l,11,h[37]),A=n(A,F,R,x,g,16,h[38]),x=n(x,A,F,R,m,23,h[39]),R=n(R,x,A,F,E,4,h[40]),F=n(F,R,x,A,a,11,h[41]),A=n(A,F,R,x,f,16,h[42]),x=n(x,A,F,R,p,23,h[43]),R=n(R,x,A,F,v,4,h[44]),F=n(F,R,x,A,_,11,h[45]),A=n(A,F,R,x,w,16,h[46]),x=n(x,A,F,R,c,23,h[47]),R=i(R,x,A,F,a,6,h[48]),F=i(F,R,x,A,g,10,h[49]),A=i(A,F,R,x,b,15,h[50]),x=i(x,A,F,R,d,21,h[51]),R=i(R,x,A,F,_,6,h[52]),F=i(F,R,x,A,f,10,h[53]),A=i(A,F,R,x,m,15,h[54]),x=i(x,A,F,R,u,21,h[55]),R=i(R,x,A,F,y,6,h[56]),F=i(F,R,x,A,w,10,h[57]),A=i(A,F,R,x,p,15,h[58]),x=i(x,A,F,R,E,21,h[59]),R=i(R,x,A,F,l,6,h[60]),F=i(F,R,x,A,S,10,h[61]),A=i(A,F,R,x,c,15,h[62]),x=i(x,A,F,R,v,21,h[63]);o[0]=o[0]+R|0,o[1]=o[1]+x|0,o[2]=o[2]+A|0,o[3]=o[3]+F|0},_doFinalize:function(){var e=this._data,r=e.words,n=8*this._nDataBytes,i=8*e.sigBytes;r[i>>>5]|=128<<24-i%32;var s=t.floor(n/4294967296);for(r[(i+64>>>9<<4)+15]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),r[(i+64>>>9<<4)+14]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),e.sigBytes=4*(r.length+1),this._process(),e=this._hash,r=e.words,n=0;4>n;n++)i=r[n],r[n]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8);return e},clone:function(){var t=u.clone.call(this);return t._hash=this._hash.clone(),t}}),s.MD5=u._createHelper(o),s.HmacMD5=u._createHmacHelper(o)}(Math),function(){var t=sn,e=t.lib,r=e.WordArray,n=e.Hasher,i=[],e=t.algo.SHA1=n.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var r=this._hash.words,n=r[0],s=r[1],o=r[2],a=r[3],u=r[4],h=0;80>h;h++){if(16>h)i[h]=0|t[e+h];else{var c=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=c<<1|c>>>31}c=(n<<5|n>>>27)+u+i[h],c=20>h?c+((s&o|~s&a)+1518500249):40>h?c+((s^o^a)+1859775393):60>h?c+((s&o|s&a|o&a)-1894007588):c+((s^o^a)-899497514),u=a,a=o,o=s<<30|s>>>2,s=n,n=c}r[0]=r[0]+n|0,r[1]=r[1]+s|0,r[2]=r[2]+o|0,r[3]=r[3]+a|0,r[4]=r[4]+u|0},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,n=8*t.sigBytes;return e[n>>>5]|=128<<24-n%32,e[(n+64>>>9<<4)+14]=Math.floor(r/4294967296),e[(n+64>>>9<<4)+15]=r,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=n.clone.call(this);return t._hash=this._hash.clone(),t}});t.SHA1=n._createHelper(e),t.HmacSHA1=n._createHmacHelper(e)}(),function(t){for(var e=sn,r=e.lib,n=r.WordArray,i=r.Hasher,r=e.algo,s=[],o=[],a=function(t){return 4294967296*(t-(0|t))|0},u=2,h=0;64>h;){var c;t:{c=u;for(var f=t.sqrt(c),l=2;f>=l;l++)if(!(c%l)){c=!1;break t}c=!0}c&&(8>h&&(s[h]=a(t.pow(u,.5))),o[h]=a(t.pow(u,1/3)),h++),u++}var d=[],r=r.SHA256=i.extend({_doReset:function(){this._hash=new n.init(s.slice(0))},_doProcessBlock:function(t,e){for(var r=this._hash.words,n=r[0],i=r[1],s=r[2],a=r[3],u=r[4],h=r[5],c=r[6],f=r[7],l=0;64>l;l++){if(16>l)d[l]=0|t[e+l];else{var p=d[l-15],g=d[l-2];d[l]=((p<<25|p>>>7)^(p<<14|p>>>18)^p>>>3)+d[l-7]+((g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10)+d[l-16]}p=f+((u<<26|u>>>6)^(u<<21|u>>>11)^(u<<7|u>>>25))+(u&h^~u&c)+o[l]+d[l],g=((n<<30|n>>>2)^(n<<19|n>>>13)^(n<<10|n>>>22))+(n&i^n&s^i&s),f=c,c=h,h=u,u=a+p|0,a=s,s=i,i=n,n=p+g|0}r[0]=r[0]+n|0,r[1]=r[1]+i|0,r[2]=r[2]+s|0,r[3]=r[3]+a|0,r[4]=r[4]+u|0,r[5]=r[5]+h|0,r[6]=r[6]+c|0,r[7]=r[7]+f|0},_doFinalize:function(){var e=this._data,r=e.words,n=8*this._nDataBytes,i=8*e.sigBytes;return r[i>>>5]|=128<<24-i%32,r[(i+64>>>9<<4)+14]=t.floor(n/4294967296),r[(i+64>>>9<<4)+15]=n,e.sigBytes=4*r.length,this._process(),this._hash},clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}});e.SHA256=i._createHelper(r),e.HmacSHA256=i._createHmacHelper(r)}(Math),function(){var t=sn,e=t.lib.WordArray,r=t.algo,n=r.SHA256,r=r.SHA224=n.extend({_doReset:function(){this._hash=new e.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var t=n._doFinalize.call(this);return t.sigBytes-=4,t}});t.SHA224=n._createHelper(r),t.HmacSHA224=n._createHmacHelper(r)}(),function(){function t(){return i.create.apply(i,arguments)}for(var e=sn,r=e.lib.Hasher,n=e.x64,i=n.Word,s=n.WordArray,n=e.algo,o=[t(1116352408,3609767458),t(1899447441,602891725),t(3049323471,3964484399),t(3921009573,2173295548),t(961987163,4081628472),t(1508970993,3053834265),t(2453635748,2937671579),t(2870763221,3664609560),t(3624381080,2734883394),t(310598401,1164996542),t(607225278,1323610764),t(1426881987,3590304994),t(1925078388,4068182383),t(2162078206,991336113),t(2614888103,633803317),t(3248222580,3479774868),t(3835390401,2666613458),t(4022224774,944711139),t(264347078,2341262773),t(604807628,2007800933),t(770255983,1495990901),t(1249150122,1856431235),t(1555081692,3175218132),t(1996064986,2198950837),t(2554220882,3999719339),t(2821834349,766784016),t(2952996808,2566594879),t(3210313671,3203337956),t(3336571891,1034457026),t(3584528711,2466948901),t(113926993,3758326383),t(338241895,168717936),t(666307205,1188179964),t(773529912,1546045734),t(1294757372,1522805485),t(1396182291,2643833823),t(1695183700,2343527390),t(1986661051,1014477480),t(2177026350,1206759142),t(2456956037,344077627),t(2730485921,1290863460),t(2820302411,3158454273),t(3259730800,3505952657),t(3345764771,106217008),t(3516065817,3606008344),t(3600352804,1432725776),t(4094571909,1467031594),t(275423344,851169720),t(430227734,3100823752),t(506948616,1363258195),t(659060556,3750685593),t(883997877,3785050280),t(958139571,3318307427),t(1322822218,3812723403),t(1537002063,2003034995),t(1747873779,3602036899),t(1955562222,1575990012),t(2024104815,1125592928),t(2227730452,2716904306),t(2361852424,442776044),t(2428436474,593698344),t(2756734187,3733110249),t(3204031479,2999351573),t(3329325298,3815920427),t(3391569614,3928383900),t(3515267271,566280711),t(3940187606,3454069534),t(4118630271,4000239992),t(116418474,1914138554),t(174292421,2731055270),t(289380356,3203993006),t(460393269,320620315),t(685471733,587496836),t(852142971,1086792851),t(1017036298,365543100),t(1126000580,2618297676),t(1288033470,3409855158),t(1501505948,4234509866),t(1607167915,987167468),t(1816402316,1246189591)],a=[],u=0;80>u;u++)a[u]=t();n=n.SHA512=r.extend({_doReset:function(){this._hash=new s.init([new i.init(1779033703,4089235720),new i.init(3144134277,2227873595),new i.init(1013904242,4271175723),new i.init(2773480762,1595750129),new i.init(1359893119,2917565137),new i.init(2600822924,725511199),new i.init(528734635,4215389547),new i.init(1541459225,327033209)])},_doProcessBlock:function(t,e){for(var r=this._hash.words,n=r[0],i=r[1],s=r[2],u=r[3],h=r[4],c=r[5],f=r[6],r=r[7],l=n.high,d=n.low,p=i.high,g=i.low,y=s.high,v=s.low,m=u.high,S=u.low,_=h.high,E=h.low,b=c.high,w=c.low,R=f.high,x=f.low,A=r.high,F=r.low,K=l,U=d,O=p,P=g,I=y,D=v,C=m,T=S,j=_,J=E,H=b,B=w,k=R,N=x,M=A,V=F,L=0;80>L;L++){var q=a[L];if(16>L)var z=q.high=0|t[e+2*L],W=q.low=0|t[e+2*L+1];else{var z=a[L-15],W=z.high,Y=z.low,z=(W>>>1|Y<<31)^(W>>>8|Y<<24)^W>>>7,Y=(Y>>>1|W<<31)^(Y>>>8|W<<24)^(Y>>>7|W<<25),G=a[L-2],W=G.high,X=G.low,G=(W>>>19|X<<13)^(W<<3|X>>>29)^W>>>6,X=(X>>>19|W<<13)^(X<<3|W>>>29)^(X>>>6|W<<26),W=a[L-7],$=W.high,Z=a[L-16],Q=Z.high,Z=Z.low,W=Y+W.low,z=z+$+(Y>>>0>W>>>0?1:0),W=W+X,z=z+G+(X>>>0>W>>>0?1:0),W=W+Z,z=z+Q+(Z>>>0>W>>>0?1:0);q.high=z,q.low=W}var $=j&H^~j&k,Z=J&B^~J&N,q=K&O^K&I^O&I,tt=U&P^U&D^P&D,Y=(K>>>28|U<<4)^(K<<30|U>>>2)^(K<<25|U>>>7),G=(U>>>28|K<<4)^(U<<30|K>>>2)^(U<<25|K>>>7),X=o[L],et=X.high,rt=X.low,X=V+((J>>>14|j<<18)^(J>>>18|j<<14)^(J<<23|j>>>9)),Q=M+((j>>>14|J<<18)^(j>>>18|J<<14)^(j<<23|J>>>9))+(V>>>0>X>>>0?1:0),X=X+Z,Q=Q+$+(Z>>>0>X>>>0?1:0),X=X+rt,Q=Q+et+(rt>>>0>X>>>0?1:0),X=X+W,Q=Q+z+(W>>>0>X>>>0?1:0),W=G+tt,q=Y+q+(G>>>0>W>>>0?1:0),M=k,V=N,k=H,N=B,H=j,B=J,J=T+X|0,j=C+Q+(T>>>0>J>>>0?1:0)|0,C=I,T=D,I=O,D=P,O=K,P=U,U=X+W|0,K=Q+q+(X>>>0>U>>>0?1:0)|0}d=n.low=d+U,n.high=l+K+(U>>>0>d>>>0?1:0),g=i.low=g+P,i.high=p+O+(P>>>0>g>>>0?1:0),v=s.low=v+D,s.high=y+I+(D>>>0>v>>>0?1:0),S=u.low=S+T,u.high=m+C+(T>>>0>S>>>0?1:0),E=h.low=E+J,h.high=_+j+(J>>>0>E>>>0?1:0),w=c.low=w+B,c.high=b+H+(B>>>0>w>>>0?1:0),x=f.low=x+N,f.high=R+k+(N>>>0>x>>>0?1:0),F=r.low=F+V,r.high=A+M+(V>>>0>F>>>0?1:0)},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,n=8*t.sigBytes;return e[n>>>5]|=128<<24-n%32,e[(n+128>>>10<<5)+30]=Math.floor(r/4294967296),e[(n+128>>>10<<5)+31]=r,t.sigBytes=4*e.length,this._process(),this._hash.toX32()},clone:function(){var t=r.clone.call(this);return t._hash=this._hash.clone(),t},blockSize:32}),e.SHA512=r._createHelper(n),e.HmacSHA512=r._createHmacHelper(n)}(),function(){var t=sn,e=t.x64,r=e.Word,n=e.WordArray,e=t.algo,i=e.SHA512,e=e.SHA384=i.extend({_doReset:function(){this._hash=new n.init([new r.init(3418070365,3238371032),new r.init(1654270250,914150663),new r.init(2438529370,812702999),new r.init(355462360,4144912697),new r.init(1731405415,4290775857),new r.init(2394180231,1750603025),new r.init(3675008525,1694076839),new r.init(1203062813,3204075428)])},_doFinalize:function(){var t=i._doFinalize.call(this);return t.sigBytes-=16,t}});t.SHA384=i._createHelper(e),t.HmacSHA384=i._createHmacHelper(e)}(),function(){var t=sn,e=t.lib,r=e.WordArray,n=e.Hasher,e=t.algo,i=r.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),s=r.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),o=r.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),a=r.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),u=r.create([0,1518500249,1859775393,2400959708,2840853838]),h=r.create([1352829926,1548603684,1836072691,2053994217,0]),e=e.RIPEMD160=n.extend({_doReset:function(){this._hash=r.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var r=0;16>r;r++){var n=e+r,c=t[n];t[n]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}var f,l,d,p,g,y,v,m,S,_,n=this._hash.words,c=u.words,E=h.words,b=i.words,w=s.words,R=o.words,x=a.words;y=f=n[0],v=l=n[1],m=d=n[2],S=p=n[3],_=g=n[4];for(var A,r=0;80>r;r+=1)A=f+t[e+b[r]]|0,A=16>r?A+((l^d^p)+c[0]):32>r?A+((l&d|~l&p)+c[1]):48>r?A+(((l|~d)^p)+c[2]):64>r?A+((l&p|d&~p)+c[3]):A+((l^(d|~p))+c[4]),A|=0,A=A<<R[r]|A>>>32-R[r],A=A+g|0,f=g,g=p,p=d<<10|d>>>22,d=l,l=A,A=y+t[e+w[r]]|0,A=16>r?A+((v^(m|~S))+E[0]):32>r?A+((v&S|m&~S)+E[1]):48>r?A+(((v|~m)^S)+E[2]):64>r?A+((v&m|~v&S)+E[3]):A+((v^m^S)+E[4]),A|=0,A=A<<x[r]|A>>>32-x[r],A=A+_|0,y=_,_=S,S=m<<10|m>>>22,m=v,v=A;A=n[1]+d+S|0,n[1]=n[2]+p+_|0,n[2]=n[3]+g+y|0,n[3]=n[4]+f+v|0,n[4]=n[0]+l+m|0,n[0]=A},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,n=8*t.sigBytes;for(e[n>>>5]|=128<<24-n%32,e[(n+64>>>9<<4)+14]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),t.sigBytes=4*(e.length+1),this._process(),t=this._hash,e=t.words,r=0;5>r;r++)n=e[r],e[r]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8);return t},clone:function(){var t=n.clone.call(this);return t._hash=this._hash.clone(),t}});t.RIPEMD160=n._createHelper(e),t.HmacRIPEMD160=n._createHmacHelper(e)}(Math),function(){var t=sn,e=t.enc.Utf8;t.algo.HMAC=t.lib.Base.extend({init:function(t,r){t=this._hasher=new t.init,"string"==typeof r&&(r=e.parse(r));var n=t.blockSize,i=4*n;r.sigBytes>i&&(r=t.finalize(r)),r.clamp();for(var s=this._oKey=r.clone(),o=this._iKey=r.clone(),a=s.words,u=o.words,h=0;n>h;h++)a[h]^=1549556828,u[h]^=909522486;s.sigBytes=o.sigBytes=i,this.reset()},reset:function(){var t=this._hasher;t.reset(),t.update(this._iKey)},update:function(t){return this._hasher.update(t),this},finalize:function(t){var e=this._hasher;return t=e.finalize(t),e.reset(),e.finalize(this._oKey.clone().concat(t))}})}(),function(){var t=sn,e=t.lib,r=e.Base,n=e.WordArray,e=t.algo,i=e.HMAC,s=e.PBKDF2=r.extend({cfg:r.extend({keySize:4,hasher:e.SHA1,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r=this.cfg,s=i.create(r.hasher,t),o=n.create(),a=n.create([1]),u=o.words,h=a.words,c=r.keySize,r=r.iterations;u.length<c;){var f=s.update(e).finalize(a);s.reset();for(var l=f.words,d=l.length,p=f,g=1;r>g;g++){p=s.finalize(p),s.reset();for(var y=p.words,v=0;d>v;v++)l[v]^=y[v]}o.concat(f),h[0]++}return o.sigBytes=4*c,o}});t.PBKDF2=function(t,e,r){return s.create(r).compute(t,e)}}();var on,an="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",un="=",hn=0xdeadbeefcafe,cn=15715070==(16777215&hn);cn&&"Microsoft Internet Explorer"==en.appName?(o.prototype.am=h,on=30):cn&&"Netscape"!=en.appName?(o.prototype.am=u,on=26):(o.prototype.am=c,on=28),o.prototype.DB=on,o.prototype.DM=(1<<on)-1,o.prototype.DV=1<<on;var fn=52;o.prototype.FV=Math.pow(2,fn),o.prototype.F1=fn-on,o.prototype.F2=2*on-fn;var ln,dn,pn="0123456789abcdefghijklmnopqrstuvwxyz",gn=new Array;for(ln="0".charCodeAt(0),dn=0;9>=dn;++dn)gn[ln++]=dn;for(ln="a".charCodeAt(0),dn=10;36>dn;++dn)gn[ln++]=dn;for(ln="A".charCodeAt(0),dn=10;36>dn;++dn)gn[ln++]=dn;D.prototype.convert=C,D.prototype.revert=T,D.prototype.reduce=j,D.prototype.mulTo=J,D.prototype.sqrTo=H,k.prototype.convert=N,k.prototype.revert=M,k.prototype.reduce=V,k.prototype.mulTo=q,k.prototype.sqrTo=L,o.prototype.copyTo=d,o.prototype.fromInt=p,o.prototype.fromString=y,o.prototype.clamp=v,o.prototype.dlShiftTo=R,o.prototype.drShiftTo=x,o.prototype.lShiftTo=A,o.prototype.rShiftTo=F,o.prototype.subTo=K,o.prototype.multiplyTo=U,o.prototype.squareTo=O,o.prototype.divRemTo=P,o.prototype.invDigit=B,o.prototype.isEven=z,o.prototype.exp=W,o.prototype.toString=m,o.prototype.negate=S,o.prototype.abs=_,o.prototype.compareTo=E,o.prototype.bitLength=w,o.prototype.mod=I,o.prototype.modPowInt=Y,o.ZERO=g(0),o.ONE=g(1),Bt.prototype.convert=kt,Bt.prototype.revert=kt,Bt.prototype.mulTo=Nt,Bt.prototype.sqrTo=Mt,zt.prototype.convert=Wt,zt.prototype.revert=Yt,zt.prototype.reduce=Gt,zt.prototype.mulTo=$t,zt.prototype.sqrTo=Xt;var yn=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],vn=(1<<26)/yn[yn.length-1];o.prototype.chunkSize=Q,o.prototype.toRadix=et,o.prototype.fromRadix=rt,o.prototype.fromNumber=nt,o.prototype.bitwiseTo=ut,o.prototype.changeBit=xt,o.prototype.addTo=Ut,o.prototype.dMultiply=Jt,o.prototype.dAddOffset=Ht,o.prototype.multiplyLowerTo=Lt,o.prototype.multiplyUpperTo=qt,o.prototype.modInt=te,o.prototype.millerRabin=ne,o.prototype.clone=G,o.prototype.intValue=X,o.prototype.byteValue=$,o.prototype.shortValue=Z,o.prototype.signum=tt,o.prototype.toByteArray=it,o.prototype.equals=st,o.prototype.min=ot,o.prototype.max=at,o.prototype.and=ct,o.prototype.or=lt,o.prototype.xor=pt,o.prototype.andNot=yt,o.prototype.not=vt,o.prototype.shiftLeft=mt,o.prototype.shiftRight=St,o.prototype.getLowestSetBit=Et,o.prototype.bitCount=wt,o.prototype.testBit=Rt,o.prototype.setBit=At,o.prototype.clearBit=Ft,o.prototype.flipBit=Kt,o.prototype.add=Ot,o.prototype.subtract=Pt,o.prototype.multiply=It,o.prototype.divide=Ct,o.prototype.remainder=Tt,o.prototype.divideAndRemainder=jt,o.prototype.modPow=Zt,o.prototype.modInverse=ee,o.prototype.pow=Vt,o.prototype.gcd=Qt,o.prototype.isProbablePrime=re,o.prototype.square=Dt,ie.prototype.init=se,ie.prototype.next=oe;var mn,Sn,_n,En=256;if(null==Sn){Sn=new Array,_n=0;var bn;if(rn.crypto&&rn.crypto.getRandomValues){var wn=new Uint8Array(32);for(rn.crypto.getRandomValues(wn),bn=0;32>bn;++bn)Sn[_n++]=wn[bn]}if("Netscape"==en.appName&&en.appVersion<"5"&&rn.crypto){var Rn=rn.crypto.random(32);for(bn=0;bn<Rn.length;++bn)Sn[_n++]=255&Rn.charCodeAt(bn)}for(;En>_n;)bn=Math.floor(65536*Math.random()),Sn[_n++]=bn>>>8,Sn[_n++]=255&bn;_n=0,he()}le.prototype.nextBytes=fe;var xn=20;ve.prototype.doPublic=Se,ve.prototype.setPublic=me,ve.prototype.encrypt=_e,ve.prototype.encryptOAEP=Ee,ve.prototype.type="RSA";var xn=20;ve.prototype.doPrivate=Ke,ve.prototype.setPrivate=xe,ve.prototype.setPrivateEx=Ae,ve.prototype.generate=Fe,ve.prototype.decrypt=Ue,ve.prototype.decryptOAEP=Oe,Pe.prototype.equals=Ie,Pe.prototype.toBigInteger=De,Pe.prototype.negate=Ce,Pe.prototype.add=Te,Pe.prototype.subtract=je,Pe.prototype.multiply=Je,Pe.prototype.square=He,Pe.prototype.divide=Be,ke.prototype.getX=Ne,ke.prototype.getY=Me,ke.prototype.equals=Ve,ke.prototype.isInfinity=Le,ke.prototype.negate=qe,ke.prototype.add=ze,ke.prototype.twice=We,ke.prototype.multiply=Ye,ke.prototype.multiplyTwo=Ge,Xe.prototype.getQ=$e,Xe.prototype.getA=Ze,Xe.prototype.getB=Qe,Xe.prototype.equals=tr,Xe.prototype.getInfinity=er,Xe.prototype.fromBigInteger=rr,Xe.prototype.decodePointHex=nr,Pe.prototype.getByteLength=function(){return Math.floor((this.toBigInteger().bitLength()+7)/8)},ke.prototype.getEncoded=function(t){var e=function(t,e){var r=t.toByteArrayUnsigned();if(e<r.length)r=r.slice(r.length-e);else for(;e>r.length;)r.unshift(0);return r},r=this.getX().toBigInteger(),n=this.getY().toBigInteger(),i=e(r,32);return t?n.isEven()?i.unshift(2):i.unshift(3):(i.unshift(4),i=i.concat(e(n,32))),i},ke.decodeFrom=function(t,e){var r=(e[0],e.length-1),n=e.slice(1,1+r/2),i=e.slice(1+r/2,1+r);n.unshift(0),i.unshift(0);var s=new o(n),a=new o(i);return new ke(t,t.fromBigInteger(s),t.fromBigInteger(a))},ke.decodeFromHex=function(t,e){var r=(e.substr(0,2),e.length-2),n=e.substr(2,r/2),i=e.substr(2+r/2,r/2),s=new o(n,16),a=new o(i,16);return new ke(t,t.fromBigInteger(s),t.fromBigInteger(a))},ke.prototype.add2D=function(t){if(this.isInfinity())return t;if(t.isInfinity())return this;if(this.x.equals(t.x))return this.y.equals(t.y)?this.twice():this.curve.getInfinity();var e=t.x.subtract(this.x),r=t.y.subtract(this.y),n=r.divide(e),i=n.square().subtract(this.x).subtract(t.x),s=n.multiply(this.x.subtract(i)).subtract(this.y);return new ke(this.curve,i,s)},ke.prototype.twice2D=function(){if(this.isInfinity())return this;if(0==this.y.toBigInteger().signum())return this.curve.getInfinity();var t=this.curve.fromBigInteger(o.valueOf(2)),e=this.curve.fromBigInteger(o.valueOf(3)),r=this.x.square().multiply(e).add(this.curve.a).divide(this.y.multiply(t)),n=r.square().subtract(this.x.multiply(t)),i=r.multiply(this.x.subtract(n)).subtract(this.y);return new ke(this.curve,n,i)},ke.prototype.multiply2D=function(t){if(this.isInfinity())return this;if(0==t.signum())return this.curve.getInfinity();var e,r=t,n=r.multiply(new o("3")),i=this.negate(),s=this;for(e=n.bitLength()-2;e>0;--e){s=s.twice();var a=n.testBit(e),u=r.testBit(e);a!=u&&(s=s.add2D(a?this:i))}return s},ke.prototype.isOnCurve=function(){var t=this.getX().toBigInteger(),e=this.getY().toBigInteger(),r=this.curve.getA().toBigInteger(),n=this.curve.getB().toBigInteger(),i=this.curve.getQ(),s=e.multiply(e).mod(i),o=t.multiply(t).multiply(t).add(r.multiply(t)).add(n).mod(i);
	return s.equals(o)},ke.prototype.toString=function(){return"("+this.getX().toBigInteger().toString()+","+this.getY().toBigInteger().toString()+")"},ke.prototype.validate=function(){var t=this.curve.getQ();if(this.isInfinity())throw new Error("Point is at infinity.");var e=this.getX().toBigInteger(),r=this.getY().toBigInteger();if(e.compareTo(o.ONE)<0||e.compareTo(t.subtract(o.ONE))>0)throw new Error("x coordinate out of bounds");if(r.compareTo(o.ONE)<0||r.compareTo(t.subtract(o.ONE))>0)throw new Error("y coordinate out of bounds");if(!this.isOnCurve())throw new Error("Point is not on the curve.");if(this.multiply(t).isInfinity())throw new Error("Point is not a scalar multiple of G.");return!0};var An=function(){function t(t,e,r){return e?o[e]:String.fromCharCode(parseInt(r,16))}var e="(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)",r='(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))',n='(?:"'+r+'*")',i=new RegExp("(?:false|true|null|[\\{\\}\\[\\]]|"+e+"|"+n+")","g"),s=new RegExp("\\\\(?:([^u])|u(.{4}))","g"),o={'"':'"',"/":"/","\\":"\\",b:"\b",f:"\f",n:"\n",r:"\r",t:"	"},a=new String(""),u="\\",h=({"{":Object,"[":Array},Object.hasOwnProperty);return function(e,r){var n,o=e.match(i),c=o[0],f=!1;"{"===c?n={}:"["===c?n=[]:(n=[],f=!0);for(var l,d=[n],p=1-f,g=o.length;g>p;++p){c=o[p];var y;switch(c.charCodeAt(0)){default:y=d[0],y[l||y.length]=+c,l=void 0;break;case 34:if(c=c.substring(1,c.length-1),-1!==c.indexOf(u)&&(c=c.replace(s,t)),y=d[0],!l){if(!(y instanceof Array)){l=c||a;break}l=y.length}y[l]=c,l=void 0;break;case 91:y=d[0],d.unshift(y[l||y.length]=[]),l=void 0;break;case 93:d.shift();break;case 102:y=d[0],y[l||y.length]=!1,l=void 0;break;case 110:y=d[0],y[l||y.length]=null,l=void 0;break;case 116:y=d[0],y[l||y.length]=!0,l=void 0;break;case 123:y=d[0],d.unshift(y[l||y.length]={}),l=void 0;break;case 125:d.shift()}}if(f){if(1!==d.length)throw new Error;n=n[0]}else if(d.length)throw new Error;if(r){var v=function(t,e){var n=t[e];if(n&&"object"==typeof n){var i=null;for(var s in n)if(h.call(n,s)&&n!==t){var o=v(n,s);void 0!==o?n[s]=o:(i||(i=[]),i.push(s))}if(i)for(var a=i.length;--a>=0;)delete n[i[a]]}return r.call(t,e,n)};n=v({"":n},"")}return n}}();"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.asn1&&KJUR.asn1||(KJUR.asn1={}),KJUR.asn1.ASN1Util=new function(){this.integerToByteHex=function(t){var e=t.toString(16);return e.length%2==1&&(e="0"+e),e},this.bigIntToMinTwosComplementsHex=function(t){var e=t.toString(16);if("-"!=e.substr(0,1))e.length%2==1?e="0"+e:e.match(/^[0-7]/)||(e="00"+e);else{var r=e.substr(1),n=r.length;n%2==1?n+=1:e.match(/^[0-7]/)||(n+=2);for(var i="",s=0;n>s;s++)i+="f";var a=new o(i,16),u=a.xor(t).add(o.ONE);e=u.toString(16).replace(/^-/,"")}return e},this.getPEMStringFromHex=function(t,e){var r=(KJUR.asn1,sn.enc.Hex.parse(t)),n=sn.enc.Base64.stringify(r),i=n.replace(/(.{64})/g,"$1\r\n");return i=i.replace(/\r\n$/,""),"-----BEGIN "+e+"-----\r\n"+i+"\r\n-----END "+e+"-----\r\n"},this.newObject=function(t){var e=KJUR.asn1,r=Object.keys(t);if(1!=r.length)throw"key of param shall be only one.";var n=r[0];if(-1==":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":"+n+":"))throw"undefined key: "+n;if("bool"==n)return new e.DERBoolean(t[n]);if("int"==n)return new e.DERInteger(t[n]);if("bitstr"==n)return new e.DERBitString(t[n]);if("octstr"==n)return new e.DEROctetString(t[n]);if("null"==n)return new e.DERNull(t[n]);if("oid"==n)return new e.DERObjectIdentifier(t[n]);if("enum"==n)return new e.DEREnumerated(t[n]);if("utf8str"==n)return new e.DERUTF8String(t[n]);if("numstr"==n)return new e.DERNumericString(t[n]);if("prnstr"==n)return new e.DERPrintableString(t[n]);if("telstr"==n)return new e.DERTeletexString(t[n]);if("ia5str"==n)return new e.DERIA5String(t[n]);if("utctime"==n)return new e.DERUTCTime(t[n]);if("gentime"==n)return new e.DERGeneralizedTime(t[n]);if("seq"==n){for(var i=t[n],s=[],o=0;o<i.length;o++){var a=e.ASN1Util.newObject(i[o]);s.push(a)}return new e.DERSequence({array:s})}if("set"==n){for(var i=t[n],s=[],o=0;o<i.length;o++){var a=e.ASN1Util.newObject(i[o]);s.push(a)}return new e.DERSet({array:s})}if("tag"==n){var u=t[n];if("[object Array]"===Object.prototype.toString.call(u)&&3==u.length){var h=e.ASN1Util.newObject(u[2]);return new e.DERTaggedObject({tag:u[0],explicit:u[1],obj:h})}var c={};if(void 0!==u.explicit&&(c.explicit=u.explicit),void 0!==u.tag&&(c.tag=u.tag),void 0===u.obj)throw"obj shall be specified for 'tag'.";return c.obj=e.ASN1Util.newObject(u.obj),new e.DERTaggedObject(c)}},this.jsonToASN1HEX=function(t){var e=this.newObject(t);return e.getEncodedHex()}},KJUR.asn1.ASN1Util.oidHexToInt=function(t){for(var e="",r=parseInt(t.substr(0,2),16),n=Math.floor(r/40),i=r%40,e=n+"."+i,s="",a=2;a<t.length;a+=2){var u=parseInt(t.substr(a,2),16),h=("00000000"+u.toString(2)).slice(-8);if(s+=h.substr(1,7),"0"==h.substr(0,1)){var c=new o(s,2);e=e+"."+c.toString(10),s=""}}return e},KJUR.asn1.ASN1Util.oidIntToHex=function(t){var e=function(t){var e=t.toString(16);return 1==e.length&&(e="0"+e),e},r=function(t){var r="",n=new o(t,10),i=n.toString(2),s=7-i.length%7;7==s&&(s=0);for(var a="",u=0;s>u;u++)a+="0";i=a+i;for(var u=0;u<i.length-1;u+=7){var h=i.substr(u,7);u!=i.length-7&&(h="1"+h),r+=e(parseInt(h,2))}return r};if(!t.match(/^[0-9.]+$/))throw"malformed oid string: "+t;var n="",i=t.split("."),s=40*parseInt(i[0])+parseInt(i[1]);n+=e(s),i.splice(0,2);for(var a=0;a<i.length;a++)n+=r(i[a]);return n},KJUR.asn1.ASN1Object=function(){var t="";this.getLengthHexFromValue=function(){if("undefined"==typeof this.hV||null==this.hV)throw"this.hV is null or undefined.";if(this.hV.length%2==1)throw"value hex must be even length: n="+t.length+",v="+this.hV;var e=this.hV.length/2,r=e.toString(16);if(r.length%2==1&&(r="0"+r),128>e)return r;var n=r.length/2;if(n>15)throw"ASN.1 length too long to represent by 8x: n = "+e.toString(16);var i=128+n;return i.toString(16)+r},this.getEncodedHex=function(){return(null==this.hTLV||this.isModified)&&(this.hV=this.getFreshValueHex(),this.hL=this.getLengthHexFromValue(),this.hTLV=this.hT+this.hL+this.hV,this.isModified=!1),this.hTLV},this.getValueHex=function(){return this.getEncodedHex(),this.hV},this.getFreshValueHex=function(){return""}},KJUR.asn1.DERAbstractString=function(t){KJUR.asn1.DERAbstractString.superclass.constructor.call(this),this.getString=function(){return this.s},this.setString=function(t){this.hTLV=null,this.isModified=!0,this.s=t,this.hV=ar(this.s)},this.setStringHex=function(t){this.hTLV=null,this.isModified=!0,this.s=null,this.hV=t},this.getFreshValueHex=function(){return this.hV},"undefined"!=typeof t&&("string"==typeof t?this.setString(t):"undefined"!=typeof t.str?this.setString(t.str):"undefined"!=typeof t.hex&&this.setStringHex(t.hex))},nn.lang.extend(KJUR.asn1.DERAbstractString,KJUR.asn1.ASN1Object),KJUR.asn1.DERAbstractTime=function(t){KJUR.asn1.DERAbstractTime.superclass.constructor.call(this),this.localDateToUTC=function(t){utc=t.getTime()+6e4*t.getTimezoneOffset();var e=new Date(utc);return e},this.formatDate=function(t,e,r){var n=this.zeroPadding,i=this.localDateToUTC(t),s=String(i.getFullYear());"utc"==e&&(s=s.substr(2,2));var o=n(String(i.getMonth()+1),2),a=n(String(i.getDate()),2),u=n(String(i.getHours()),2),h=n(String(i.getMinutes()),2),c=n(String(i.getSeconds()),2),f=s+o+a+u+h+c;if(r===!0){var l=i.getMilliseconds();if(0!=l){var d=n(String(l),3);d=d.replace(/[0]+$/,""),f=f+"."+d}}return f+"Z"},this.zeroPadding=function(t,e){return t.length>=e?t:new Array(e-t.length+1).join("0")+t},this.getString=function(){return this.s},this.setString=function(t){this.hTLV=null,this.isModified=!0,this.s=t,this.hV=ar(t)},this.setByDateValue=function(t,e,r,n,i,s){var o=new Date(Date.UTC(t,e-1,r,n,i,s,0));this.setByDate(o)},this.getFreshValueHex=function(){return this.hV}},nn.lang.extend(KJUR.asn1.DERAbstractTime,KJUR.asn1.ASN1Object),KJUR.asn1.DERAbstractStructured=function(t){KJUR.asn1.DERAbstractString.superclass.constructor.call(this),this.setByASN1ObjectArray=function(t){this.hTLV=null,this.isModified=!0,this.asn1Array=t},this.appendASN1Object=function(t){this.hTLV=null,this.isModified=!0,this.asn1Array.push(t)},this.asn1Array=new Array,"undefined"!=typeof t&&"undefined"!=typeof t.array&&(this.asn1Array=t.array)},nn.lang.extend(KJUR.asn1.DERAbstractStructured,KJUR.asn1.ASN1Object),KJUR.asn1.DERBoolean=function(){KJUR.asn1.DERBoolean.superclass.constructor.call(this),this.hT="01",this.hTLV="0101ff"},nn.lang.extend(KJUR.asn1.DERBoolean,KJUR.asn1.ASN1Object),KJUR.asn1.DERInteger=function(t){KJUR.asn1.DERInteger.superclass.constructor.call(this),this.hT="02",this.setByBigInteger=function(t){this.hTLV=null,this.isModified=!0,this.hV=KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)},this.setByInteger=function(t){var e=new o(String(t),10);this.setByBigInteger(e)},this.setValueHex=function(t){this.hV=t},this.getFreshValueHex=function(){return this.hV},"undefined"!=typeof t&&("undefined"!=typeof t.bigint?this.setByBigInteger(t.bigint):"undefined"!=typeof t["int"]?this.setByInteger(t["int"]):"number"==typeof t?this.setByInteger(t):"undefined"!=typeof t.hex&&this.setValueHex(t.hex))},nn.lang.extend(KJUR.asn1.DERInteger,KJUR.asn1.ASN1Object),KJUR.asn1.DERBitString=function(t){KJUR.asn1.DERBitString.superclass.constructor.call(this),this.hT="03",this.setHexValueIncludingUnusedBits=function(t){this.hTLV=null,this.isModified=!0,this.hV=t},this.setUnusedBitsAndHexValue=function(t,e){if(0>t||t>7)throw"unused bits shall be from 0 to 7: u = "+t;var r="0"+t;this.hTLV=null,this.isModified=!0,this.hV=r+e},this.setByBinaryString=function(t){t=t.replace(/0+$/,"");var e=8-t.length%8;8==e&&(e=0);for(var r=0;e>=r;r++)t+="0";for(var n="",r=0;r<t.length-1;r+=8){var i=t.substr(r,8),s=parseInt(i,2).toString(16);1==s.length&&(s="0"+s),n+=s}this.hTLV=null,this.isModified=!0,this.hV="0"+e+n},this.setByBooleanArray=function(t){for(var e="",r=0;r<t.length;r++)e+=1==t[r]?"1":"0";this.setByBinaryString(e)},this.newFalseArray=function(t){for(var e=new Array(t),r=0;t>r;r++)e[r]=!1;return e},this.getFreshValueHex=function(){return this.hV},"undefined"!=typeof t&&("string"==typeof t&&t.toLowerCase().match(/^[0-9a-f]+$/)?this.setHexValueIncludingUnusedBits(t):"undefined"!=typeof t.hex?this.setHexValueIncludingUnusedBits(t.hex):"undefined"!=typeof t.bin?this.setByBinaryString(t.bin):"undefined"!=typeof t.array&&this.setByBooleanArray(t.array))},nn.lang.extend(KJUR.asn1.DERBitString,KJUR.asn1.ASN1Object),KJUR.asn1.DEROctetString=function(t){KJUR.asn1.DEROctetString.superclass.constructor.call(this,t),this.hT="04"},nn.lang.extend(KJUR.asn1.DEROctetString,KJUR.asn1.DERAbstractString),KJUR.asn1.DERNull=function(){KJUR.asn1.DERNull.superclass.constructor.call(this),this.hT="05",this.hTLV="0500"},nn.lang.extend(KJUR.asn1.DERNull,KJUR.asn1.ASN1Object),KJUR.asn1.DERObjectIdentifier=function(t){var e=function(t){var e=t.toString(16);return 1==e.length&&(e="0"+e),e},r=function(t){var r="",n=new o(t,10),i=n.toString(2),s=7-i.length%7;7==s&&(s=0);for(var a="",u=0;s>u;u++)a+="0";i=a+i;for(var u=0;u<i.length-1;u+=7){var h=i.substr(u,7);u!=i.length-7&&(h="1"+h),r+=e(parseInt(h,2))}return r};KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this),this.hT="06",this.setValueHex=function(t){this.hTLV=null,this.isModified=!0,this.s=null,this.hV=t},this.setValueOidString=function(t){if(!t.match(/^[0-9.]+$/))throw"malformed oid string: "+t;var n="",i=t.split("."),s=40*parseInt(i[0])+parseInt(i[1]);n+=e(s),i.splice(0,2);for(var o=0;o<i.length;o++)n+=r(i[o]);this.hTLV=null,this.isModified=!0,this.s=null,this.hV=n},this.setValueName=function(t){if("undefined"==typeof KJUR.asn1.x509.OID.name2oidList[t])throw"DERObjectIdentifier oidName undefined: "+t;var e=KJUR.asn1.x509.OID.name2oidList[t];this.setValueOidString(e)},this.getFreshValueHex=function(){return this.hV},"undefined"!=typeof t&&("string"==typeof t&&t.match(/^[0-2].[0-9.]+$/)?this.setValueOidString(t):void 0!==KJUR.asn1.x509.OID.name2oidList[t]?this.setValueOidString(KJUR.asn1.x509.OID.name2oidList[t]):"undefined"!=typeof t.oid?this.setValueOidString(t.oid):"undefined"!=typeof t.hex?this.setValueHex(t.hex):"undefined"!=typeof t.name&&this.setValueName(t.name))},nn.lang.extend(KJUR.asn1.DERObjectIdentifier,KJUR.asn1.ASN1Object),KJUR.asn1.DEREnumerated=function(t){KJUR.asn1.DEREnumerated.superclass.constructor.call(this),this.hT="0a",this.setByBigInteger=function(t){this.hTLV=null,this.isModified=!0,this.hV=KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)},this.setByInteger=function(t){var e=new o(String(t),10);this.setByBigInteger(e)},this.setValueHex=function(t){this.hV=t},this.getFreshValueHex=function(){return this.hV},"undefined"!=typeof t&&("undefined"!=typeof t["int"]?this.setByInteger(t["int"]):"number"==typeof t?this.setByInteger(t):"undefined"!=typeof t.hex&&this.setValueHex(t.hex))},nn.lang.extend(KJUR.asn1.DEREnumerated,KJUR.asn1.ASN1Object),KJUR.asn1.DERUTF8String=function(t){KJUR.asn1.DERUTF8String.superclass.constructor.call(this,t),this.hT="0c"},nn.lang.extend(KJUR.asn1.DERUTF8String,KJUR.asn1.DERAbstractString),KJUR.asn1.DERNumericString=function(t){KJUR.asn1.DERNumericString.superclass.constructor.call(this,t),this.hT="12"},nn.lang.extend(KJUR.asn1.DERNumericString,KJUR.asn1.DERAbstractString),KJUR.asn1.DERPrintableString=function(t){KJUR.asn1.DERPrintableString.superclass.constructor.call(this,t),this.hT="13"},nn.lang.extend(KJUR.asn1.DERPrintableString,KJUR.asn1.DERAbstractString),KJUR.asn1.DERTeletexString=function(t){KJUR.asn1.DERTeletexString.superclass.constructor.call(this,t),this.hT="14"},nn.lang.extend(KJUR.asn1.DERTeletexString,KJUR.asn1.DERAbstractString),KJUR.asn1.DERIA5String=function(t){KJUR.asn1.DERIA5String.superclass.constructor.call(this,t),this.hT="16"},nn.lang.extend(KJUR.asn1.DERIA5String,KJUR.asn1.DERAbstractString),KJUR.asn1.DERUTCTime=function(t){KJUR.asn1.DERUTCTime.superclass.constructor.call(this,t),this.hT="17",this.setByDate=function(t){this.hTLV=null,this.isModified=!0,this.date=t,this.s=this.formatDate(this.date,"utc"),this.hV=ar(this.s)},this.getFreshValueHex=function(){return"undefined"==typeof this.date&&"undefined"==typeof this.s&&(this.date=new Date,this.s=this.formatDate(this.date,"utc"),this.hV=ar(this.s)),this.hV},void 0!==t&&(void 0!==t.str?this.setString(t.str):"string"==typeof t&&t.match(/^[0-9]{12}Z$/)?this.setString(t):void 0!==t.hex?this.setStringHex(t.hex):void 0!==t.date&&this.setByDate(t.date))},nn.lang.extend(KJUR.asn1.DERUTCTime,KJUR.asn1.DERAbstractTime),KJUR.asn1.DERGeneralizedTime=function(t){KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this,t),this.hT="18",this.withMillis=!1,this.setByDate=function(t){this.hTLV=null,this.isModified=!0,this.date=t,this.s=this.formatDate(this.date,"gen",this.withMillis),this.hV=ar(this.s)},this.getFreshValueHex=function(){return void 0===this.date&&void 0===this.s&&(this.date=new Date,this.s=this.formatDate(this.date,"gen",this.withMillis),this.hV=ar(this.s)),this.hV},void 0!==t&&(void 0!==t.str?this.setString(t.str):"string"==typeof t&&t.match(/^[0-9]{14}Z$/)?this.setString(t):void 0!==t.hex?this.setStringHex(t.hex):void 0!==t.date&&this.setByDate(t.date),t.millis===!0&&(this.withMillis=!0))},nn.lang.extend(KJUR.asn1.DERGeneralizedTime,KJUR.asn1.DERAbstractTime),KJUR.asn1.DERSequence=function(t){KJUR.asn1.DERSequence.superclass.constructor.call(this,t),this.hT="30",this.getFreshValueHex=function(){for(var t="",e=0;e<this.asn1Array.length;e++){var r=this.asn1Array[e];t+=r.getEncodedHex()}return this.hV=t,this.hV}},nn.lang.extend(KJUR.asn1.DERSequence,KJUR.asn1.DERAbstractStructured),KJUR.asn1.DERSet=function(t){KJUR.asn1.DERSet.superclass.constructor.call(this,t),this.hT="31",this.sortFlag=!0,this.getFreshValueHex=function(){for(var t=new Array,e=0;e<this.asn1Array.length;e++){var r=this.asn1Array[e];t.push(r.getEncodedHex())}return 1==this.sortFlag&&t.sort(),this.hV=t.join(""),this.hV},"undefined"!=typeof t&&"undefined"!=typeof t.sortflag&&0==t.sortflag&&(this.sortFlag=!1)},nn.lang.extend(KJUR.asn1.DERSet,KJUR.asn1.DERAbstractStructured),KJUR.asn1.DERTaggedObject=function(t){KJUR.asn1.DERTaggedObject.superclass.constructor.call(this),this.hT="a0",this.hV="",this.isExplicit=!0,this.asn1Object=null,this.setASN1Object=function(t,e,r){this.hT=e,this.isExplicit=t,this.asn1Object=r,this.isExplicit?(this.hV=this.asn1Object.getEncodedHex(),this.hTLV=null,this.isModified=!0):(this.hV=null,this.hTLV=r.getEncodedHex(),this.hTLV=this.hTLV.replace(/^../,e),this.isModified=!1)},this.getFreshValueHex=function(){return this.hV},"undefined"!=typeof t&&("undefined"!=typeof t.tag&&(this.hT=t.tag),"undefined"!=typeof t.explicit&&(this.isExplicit=t.explicit),"undefined"!=typeof t.obj&&(this.asn1Object=t.obj,this.setASN1Object(this.isExplicit,this.hT,this.asn1Object)))},nn.lang.extend(KJUR.asn1.DERTaggedObject,KJUR.asn1.ASN1Object);var Fn=new function(){this.getByteLengthOfL_AtObj=function(t,e){if("8"!=t.substring(e+2,e+3))return 1;var r=parseInt(t.substring(e+3,e+4));return 0==r?-1:r>0&&10>r?r+1:-2},this.getHexOfL_AtObj=function(t,e){var r=this.getByteLengthOfL_AtObj(t,e);return 1>r?"":t.substring(e+2,e+2+2*r)},this.getIntOfL_AtObj=function(t,e){var r=this.getHexOfL_AtObj(t,e);if(""==r)return-1;var n;return n=parseInt(r.substring(0,1))<8?new o(r,16):new o(r.substring(2),16),n.intValue()},this.getStartPosOfV_AtObj=function(t,e){var r=this.getByteLengthOfL_AtObj(t,e);return 0>r?r:e+2*(r+1)},this.getHexOfV_AtObj=function(t,e){var r=this.getStartPosOfV_AtObj(t,e),n=this.getIntOfL_AtObj(t,e);return t.substring(r,r+2*n)},this.getHexOfTLV_AtObj=function(t,e){var r=t.substr(e,2),n=this.getHexOfL_AtObj(t,e),i=this.getHexOfV_AtObj(t,e);return r+n+i},this.getPosOfNextSibling_AtObj=function(t,e){var r=this.getStartPosOfV_AtObj(t,e),n=this.getIntOfL_AtObj(t,e);return r+2*n},this.getPosArrayOfChildren_AtObj=function(t,e){var r=new Array,n=this.getStartPosOfV_AtObj(t,e);r.push(n);for(var i=this.getIntOfL_AtObj(t,e),s=n,o=0;;){var a=this.getPosOfNextSibling_AtObj(t,s);if(null==a||a-n>=2*i)break;if(o>=200)break;r.push(a),s=a,o++}return r},this.getNthChildIndex_AtObj=function(t,e,r){var n=this.getPosArrayOfChildren_AtObj(t,e);return n[r]},this.getDecendantIndexByNthList=function(t,e,r){if(0==r.length)return e;var n=r.shift(),i=this.getPosArrayOfChildren_AtObj(t,e);return this.getDecendantIndexByNthList(t,i[n],r)},this.getDecendantHexTLVByNthList=function(t,e,r){var n=this.getDecendantIndexByNthList(t,e,r);return this.getHexOfTLV_AtObj(t,n)},this.getDecendantHexVByNthList=function(t,e,r){var n=this.getDecendantIndexByNthList(t,e,r);return this.getHexOfV_AtObj(t,n)}};Fn.getVbyList=function(t,e,r,n){var i=this.getDecendantIndexByNthList(t,e,r);if(void 0===i)throw"can't find nthList object";if(void 0!==n&&t.substr(i,2)!=n)throw"checking tag doesn't match: "+t.substr(i,2)+"!="+n;return this.getHexOfV_AtObj(t,i)},Fn.hextooidstr=function(t){var e=function(t,e){return t.length>=e?t:new Array(e-t.length+1).join("0")+t},r=[],n=t.substr(0,2),i=parseInt(n,16);r[0]=new String(Math.floor(i/40)),r[1]=new String(i%40);for(var s=t.substr(2),o=[],a=0;a<s.length/2;a++)o.push(parseInt(s.substr(2*a,2),16));for(var u=[],h="",a=0;a<o.length;a++)128&o[a]?h+=e((127&o[a]).toString(2),7):(h+=e((127&o[a]).toString(2),7),u.push(new String(parseInt(h,2))),h="");var c=r.join(".");return u.length>0&&(c=c+"."+u.join(".")),c},Fn.dump=function(t,e,r,n){var i=function(t,e){if(t.length<=2*e)return t;var r=t.substr(0,e)+"..(total "+t.length/2+"bytes).."+t.substr(t.length-e,e);return r};void 0===e&&(e={ommit_long_octet:32}),void 0===r&&(r=0),void 0===n&&(n="");var s=e.ommit_long_octet;if("01"==t.substr(r,2)){var o=Fn.getHexOfV_AtObj(t,r);return"00"==o?n+"BOOLEAN FALSE\n":n+"BOOLEAN TRUE\n"}if("02"==t.substr(r,2)){var o=Fn.getHexOfV_AtObj(t,r);return n+"INTEGER "+i(o,s)+"\n"}if("03"==t.substr(r,2)){var o=Fn.getHexOfV_AtObj(t,r);return n+"BITSTRING "+i(o,s)+"\n"}if("04"==t.substr(r,2)){var o=Fn.getHexOfV_AtObj(t,r);if(Fn.isASN1HEX(o)){var a=n+"OCTETSTRING, encapsulates\n";return a+=Fn.dump(o,e,0,n+"  ")}return n+"OCTETSTRING "+i(o,s)+"\n"}if("05"==t.substr(r,2))return n+"NULL\n";if("06"==t.substr(r,2)){var u=Fn.getHexOfV_AtObj(t,r),h=KJUR.asn1.ASN1Util.oidHexToInt(u),c=KJUR.asn1.x509.OID.oid2name(h),f=h.replace(/\./g," ");return""!=c?n+"ObjectIdentifier "+c+" ("+f+")\n":n+"ObjectIdentifier ("+f+")\n"}if("0c"==t.substr(r,2))return n+"UTF8String '"+mr(Fn.getHexOfV_AtObj(t,r))+"'\n";if("13"==t.substr(r,2))return n+"PrintableString '"+mr(Fn.getHexOfV_AtObj(t,r))+"'\n";if("14"==t.substr(r,2))return n+"TeletexString '"+mr(Fn.getHexOfV_AtObj(t,r))+"'\n";if("16"==t.substr(r,2))return n+"IA5String '"+mr(Fn.getHexOfV_AtObj(t,r))+"'\n";if("17"==t.substr(r,2))return n+"UTCTime "+mr(Fn.getHexOfV_AtObj(t,r))+"\n";if("18"==t.substr(r,2))return n+"GeneralizedTime "+mr(Fn.getHexOfV_AtObj(t,r))+"\n";if("30"==t.substr(r,2)){if("3000"==t.substr(r,4))return n+"SEQUENCE {}\n";var a=n+"SEQUENCE\n",l=Fn.getPosArrayOfChildren_AtObj(t,r),d=e;if((2==l.length||3==l.length)&&"06"==t.substr(l[0],2)&&"04"==t.substr(l[l.length-1],2)){var p=Fn.getHexOfV_AtObj(t,l[0]),h=KJUR.asn1.ASN1Util.oidHexToInt(p),c=KJUR.asn1.x509.OID.oid2name(h),g=JSON.parse(JSON.stringify(e));g.x509ExtName=c,d=g}for(var y=0;y<l.length;y++)a+=Fn.dump(t,d,l[y],n+"  ");return a}if("31"==t.substr(r,2)){for(var a=n+"SET\n",l=Fn.getPosArrayOfChildren_AtObj(t,r),y=0;y<l.length;y++)a+=Fn.dump(t,e,l[y],n+"  ");return a}var v=parseInt(t.substr(r,2),16);if(0!=(128&v)){var m=31&v;if(0!=(32&v)){for(var a=n+"["+m+"]\n",l=Fn.getPosArrayOfChildren_AtObj(t,r),y=0;y<l.length;y++)a+=Fn.dump(t,e,l[y],n+"  ");return a}var o=Fn.getHexOfV_AtObj(t,r);"68747470"==o.substr(0,8)&&(o=mr(o)),"subjectAltName"===e.x509ExtName&&2==m&&(o=mr(o));var a=n+"["+m+"] "+o+"\n";return a}return n+"UNKNOWN("+t.substr(r,2)+") "+Fn.getHexOfV_AtObj(t,r)+"\n"},Fn.isASN1HEX=function(t){if(t.length%2==1)return!1;var e=Fn.getIntOfL_AtObj(t,0),r=t.substr(0,2),n=Fn.getHexOfL_AtObj(t,0),i=t.length-r.length-n.length;return i==2*e},"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.asn1&&KJUR.asn1||(KJUR.asn1={}),"undefined"!=typeof KJUR.asn1.x509&&KJUR.asn1.x509||(KJUR.asn1.x509={}),KJUR.asn1.x509.Certificate=function(t){KJUR.asn1.x509.Certificate.superclass.constructor.call(this),this.setRsaPrvKeyByPEMandPass=function(t,e){var r=Pn.getDecryptedKeyHex(t,e),n=new ve;n.readPrivateKeyFromASN1HexString(r),this.prvKey=n},this.sign=function(){this.asn1SignatureAlg=this.asn1TBSCert.asn1SignatureAlg,sig=new KJUR.crypto.Signature({alg:"SHA1withRSA"}),sig.init(this.prvKey),sig.updateHex(this.asn1TBSCert.getEncodedHex()),this.hexSig=sig.sign(),this.asn1Sig=new KJUR.asn1.DERBitString({hex:"00"+this.hexSig});var t=new KJUR.asn1.DERSequence({array:[this.asn1TBSCert,this.asn1SignatureAlg,this.asn1Sig]});this.hTLV=t.getEncodedHex(),this.isModified=!1},this.setSignatureHex=function(t){this.asn1SignatureAlg=this.asn1TBSCert.asn1SignatureAlg,this.hexSig=t,this.asn1Sig=new KJUR.asn1.DERBitString({hex:"00"+this.hexSig});var e=new KJUR.asn1.DERSequence({array:[this.asn1TBSCert,this.asn1SignatureAlg,this.asn1Sig]});this.hTLV=e.getEncodedHex(),this.isModified=!1},this.getEncodedHex=function(){if(0==this.isModified&&null!=this.hTLV)return this.hTLV;throw"not signed yet"},this.getPEMString=function(){var t=this.getEncodedHex(),e=sn.enc.Hex.parse(t),r=sn.enc.Base64.stringify(e),n=r.replace(/(.{64})/g,"$1\r\n");return"-----BEGIN CERTIFICATE-----\r\n"+n+"\r\n-----END CERTIFICATE-----\r\n"},"undefined"!=typeof t&&("undefined"!=typeof t.tbscertobj&&(this.asn1TBSCert=t.tbscertobj),"undefined"!=typeof t.prvkeyobj?this.prvKey=t.prvkeyobj:"undefined"!=typeof t.rsaprvkey?this.prvKey=t.rsaprvkey:"undefined"!=typeof t.rsaprvpem&&"undefined"!=typeof t.rsaprvpas&&this.setRsaPrvKeyByPEMandPass(t.rsaprvpem,t.rsaprvpas))},nn.lang.extend(KJUR.asn1.x509.Certificate,KJUR.asn1.ASN1Object),KJUR.asn1.x509.TBSCertificate=function(t){KJUR.asn1.x509.TBSCertificate.superclass.constructor.call(this),this._initialize=function(){this.asn1Array=new Array,this.asn1Version=new KJUR.asn1.DERTaggedObject({obj:new KJUR.asn1.DERInteger({"int":2})}),this.asn1SerialNumber=null,this.asn1SignatureAlg=null,this.asn1Issuer=null,this.asn1NotBefore=null,this.asn1NotAfter=null,this.asn1Subject=null,this.asn1SubjPKey=null,this.extensionsArray=new Array},this.setSerialNumberByParam=function(t){this.asn1SerialNumber=new KJUR.asn1.DERInteger(t)},this.setSignatureAlgByParam=function(t){this.asn1SignatureAlg=new KJUR.asn1.x509.AlgorithmIdentifier(t)},this.setIssuerByParam=function(t){this.asn1Issuer=new KJUR.asn1.x509.X500Name(t)},this.setNotBeforeByParam=function(t){this.asn1NotBefore=new KJUR.asn1.x509.Time(t)},this.setNotAfterByParam=function(t){this.asn1NotAfter=new KJUR.asn1.x509.Time(t)},this.setSubjectByParam=function(t){this.asn1Subject=new KJUR.asn1.x509.X500Name(t)},this.setSubjectPublicKeyByParam=function(t){this.asn1SubjPKey=new KJUR.asn1.x509.SubjectPublicKeyInfo(t)},this.setSubjectPublicKeyByGetKey=function(t){var e=In.getKey(t);this.asn1SubjPKey=new KJUR.asn1.x509.SubjectPublicKeyInfo(e)},this.appendExtension=function(t){this.extensionsArray.push(t)},this.appendExtensionByName=function(t,e){if("basicconstraints"==t.toLowerCase()){var r=new KJUR.asn1.x509.BasicConstraints(e);this.appendExtension(r)}else if("keyusage"==t.toLowerCase()){var r=new KJUR.asn1.x509.KeyUsage(e);this.appendExtension(r)}else if("crldistributionpoints"==t.toLowerCase()){var r=new KJUR.asn1.x509.CRLDistributionPoints(e);this.appendExtension(r)}else if("extkeyusage"==t.toLowerCase()){var r=new KJUR.asn1.x509.ExtKeyUsage(e);this.appendExtension(r)}else{if("authoritykeyidentifier"!=t.toLowerCase())throw"unsupported extension name: "+t;var r=new KJUR.asn1.x509.AuthorityKeyIdentifier(e);this.appendExtension(r)}},this.getEncodedHex=function(){if(null==this.asn1NotBefore||null==this.asn1NotAfter)throw"notBefore and/or notAfter not set";var t=new KJUR.asn1.DERSequence({array:[this.asn1NotBefore,this.asn1NotAfter]});if(this.asn1Array=new Array,this.asn1Array.push(this.asn1Version),this.asn1Array.push(this.asn1SerialNumber),this.asn1Array.push(this.asn1SignatureAlg),this.asn1Array.push(this.asn1Issuer),this.asn1Array.push(t),this.asn1Array.push(this.asn1Subject),this.asn1Array.push(this.asn1SubjPKey),this.extensionsArray.length>0){var e=new KJUR.asn1.DERSequence({array:this.extensionsArray}),r=new KJUR.asn1.DERTaggedObject({explicit:!0,tag:"a3",obj:e});this.asn1Array.push(r)}var n=new KJUR.asn1.DERSequence({array:this.asn1Array});return this.hTLV=n.getEncodedHex(),this.isModified=!1,this.hTLV},this._initialize()},nn.lang.extend(KJUR.asn1.x509.TBSCertificate,KJUR.asn1.ASN1Object),KJUR.asn1.x509.Extension=function(t){KJUR.asn1.x509.Extension.superclass.constructor.call(this),this.getEncodedHex=function(){var t=new KJUR.asn1.DERObjectIdentifier({oid:this.oid}),e=new KJUR.asn1.DEROctetString({hex:this.getExtnValueHex()}),r=new Array;r.push(t),this.critical&&r.push(new KJUR.asn1.DERBoolean),r.push(e);var n=new KJUR.asn1.DERSequence({array:r});return n.getEncodedHex()},this.critical=!1,"undefined"!=typeof t&&"undefined"!=typeof t.critical&&(this.critical=t.critical)},nn.lang.extend(KJUR.asn1.x509.Extension,KJUR.asn1.ASN1Object),KJUR.asn1.x509.KeyUsage=function(t){KJUR.asn1.x509.KeyUsage.superclass.constructor.call(this,t),this.getExtnValueHex=function(){return this.asn1ExtnValue.getEncodedHex()},this.oid="2.5.29.15","undefined"!=typeof t&&"undefined"!=typeof t.bin&&(this.asn1ExtnValue=new KJUR.asn1.DERBitString(t))},nn.lang.extend(KJUR.asn1.x509.KeyUsage,KJUR.asn1.x509.Extension),KJUR.asn1.x509.BasicConstraints=function(t){KJUR.asn1.x509.BasicConstraints.superclass.constructor.call(this,t),this.getExtnValueHex=function(){var t=new Array;this.cA&&t.push(new KJUR.asn1.DERBoolean),this.pathLen>-1&&t.push(new KJUR.asn1.DERInteger({"int":this.pathLen}));var e=new KJUR.asn1.DERSequence({array:t});return this.asn1ExtnValue=e,this.asn1ExtnValue.getEncodedHex()},this.oid="2.5.29.19",this.cA=!1,this.pathLen=-1,"undefined"!=typeof t&&("undefined"!=typeof t.cA&&(this.cA=t.cA),"undefined"!=typeof t.pathLen&&(this.pathLen=t.pathLen))},nn.lang.extend(KJUR.asn1.x509.BasicConstraints,KJUR.asn1.x509.Extension),KJUR.asn1.x509.CRLDistributionPoints=function(t){KJUR.asn1.x509.CRLDistributionPoints.superclass.constructor.call(this,t),this.getExtnValueHex=function(){return this.asn1ExtnValue.getEncodedHex()},this.setByDPArray=function(t){this.asn1ExtnValue=new KJUR.asn1.DERSequence({array:t})},this.setByOneURI=function(t){var e=new KJUR.asn1.x509.GeneralNames([{uri:t}]),r=new KJUR.asn1.x509.DistributionPointName(e),n=new KJUR.asn1.x509.DistributionPoint({dpobj:r});this.setByDPArray([n])},this.oid="2.5.29.31","undefined"!=typeof t&&("undefined"!=typeof t.array?this.setByDPArray(t.array):"undefined"!=typeof t.uri&&this.setByOneURI(t.uri))},nn.lang.extend(KJUR.asn1.x509.CRLDistributionPoints,KJUR.asn1.x509.Extension),KJUR.asn1.x509.ExtKeyUsage=function(t){KJUR.asn1.x509.ExtKeyUsage.superclass.constructor.call(this,t),this.setPurposeArray=function(t){this.asn1ExtnValue=new KJUR.asn1.DERSequence;for(var e=0;e<t.length;e++){var r=new KJUR.asn1.DERObjectIdentifier(t[e]);this.asn1ExtnValue.appendASN1Object(r)}},this.getExtnValueHex=function(){return this.asn1ExtnValue.getEncodedHex()},this.oid="2.5.29.37","undefined"!=typeof t&&"undefined"!=typeof t.array&&this.setPurposeArray(t.array)},nn.lang.extend(KJUR.asn1.x509.ExtKeyUsage,KJUR.asn1.x509.Extension),KJUR.asn1.x509.AuthorityKeyIdentifier=function(t){KJUR.asn1.x509.AuthorityKeyIdentifier.superclass.constructor.call(this,t),this.asn1KID=null,this.asn1CertIssuer=null,this.asn1CertSN=null,this.getExtnValueHex=function(){var t=new Array;this.asn1KID&&t.push(new KJUR.asn1.DERTaggedObject({explicit:!1,tag:"80",obj:this.asn1KID})),this.asn1CertIssuer&&t.push(new KJUR.asn1.DERTaggedObject({explicit:!1,tag:"a1",obj:this.asn1CertIssuer})),this.asn1CertSN&&t.push(new KJUR.asn1.DERTaggedObject({explicit:!1,tag:"82",obj:this.asn1CertSN}));var e=new KJUR.asn1.DERSequence({array:t});return this.asn1ExtnValue=e,this.asn1ExtnValue.getEncodedHex()},this.setKIDByParam=function(t){this.asn1KID=new KJUR.asn1.DEROctetString(t)},this.setCertIssuerByParam=function(t){this.asn1CertIssuer=new KJUR.asn1.x509.X500Name(t)},this.setCertSNByParam=function(t){this.asn1CertSN=new KJUR.asn1.DERInteger(t)},this.oid="2.5.29.35","undefined"!=typeof t&&("undefined"!=typeof t.kid&&this.setKIDByParam(t.kid),"undefined"!=typeof t.issuer&&this.setCertIssuerByParam(t.issuer),"undefined"!=typeof t.sn&&this.setCertSNByParam(t.sn))},nn.lang.extend(KJUR.asn1.x509.AuthorityKeyIdentifier,KJUR.asn1.x509.Extension),KJUR.asn1.x509.CRL=function(t){KJUR.asn1.x509.CRL.superclass.constructor.call(this),this.setRsaPrvKeyByPEMandPass=function(t,e){var r=Pn.getDecryptedKeyHex(t,e),n=new ve;n.readPrivateKeyFromASN1HexString(r),this.rsaPrvKey=n},this.sign=function(){this.asn1SignatureAlg=this.asn1TBSCertList.asn1SignatureAlg,sig=new KJUR.crypto.Signature({alg:"SHA1withRSA",prov:"cryptojs/jsrsa"}),sig.initSign(this.rsaPrvKey),sig.updateHex(this.asn1TBSCertList.getEncodedHex()),this.hexSig=sig.sign(),this.asn1Sig=new KJUR.asn1.DERBitString({hex:"00"+this.hexSig});var t=new KJUR.asn1.DERSequence({array:[this.asn1TBSCertList,this.asn1SignatureAlg,this.asn1Sig]});this.hTLV=t.getEncodedHex(),this.isModified=!1},this.getEncodedHex=function(){if(0==this.isModified&&null!=this.hTLV)return this.hTLV;throw"not signed yet"},this.getPEMString=function(){var t=this.getEncodedHex(),e=sn.enc.Hex.parse(t),r=sn.enc.Base64.stringify(e),n=r.replace(/(.{64})/g,"$1\r\n");return"-----BEGIN X509 CRL-----\r\n"+n+"\r\n-----END X509 CRL-----\r\n"},"undefined"!=typeof t&&("undefined"!=typeof t.tbsobj&&(this.asn1TBSCertList=t.tbsobj),"undefined"!=typeof t.rsaprvkey&&(this.rsaPrvKey=t.rsaprvkey),"undefined"!=typeof t.rsaprvpem&&"undefined"!=typeof t.rsaprvpas&&this.setRsaPrvKeyByPEMandPass(t.rsaprvpem,t.rsaprvpas))},nn.lang.extend(KJUR.asn1.x509.CRL,KJUR.asn1.ASN1Object),
	KJUR.asn1.x509.TBSCertList=function(t){KJUR.asn1.x509.TBSCertList.superclass.constructor.call(this),this.setSignatureAlgByParam=function(t){this.asn1SignatureAlg=new KJUR.asn1.x509.AlgorithmIdentifier(t)},this.setIssuerByParam=function(t){this.asn1Issuer=new KJUR.asn1.x509.X500Name(t)},this.setThisUpdateByParam=function(t){this.asn1ThisUpdate=new KJUR.asn1.x509.Time(t)},this.setNextUpdateByParam=function(t){this.asn1NextUpdate=new KJUR.asn1.x509.Time(t)},this.addRevokedCert=function(t,e){var r={};void 0!=t&&null!=t&&(r.sn=t),void 0!=e&&null!=e&&(r.time=e);var n=new KJUR.asn1.x509.CRLEntry(r);this.aRevokedCert.push(n)},this.getEncodedHex=function(){if(this.asn1Array=new Array,null!=this.asn1Version&&this.asn1Array.push(this.asn1Version),this.asn1Array.push(this.asn1SignatureAlg),this.asn1Array.push(this.asn1Issuer),this.asn1Array.push(this.asn1ThisUpdate),null!=this.asn1NextUpdate&&this.asn1Array.push(this.asn1NextUpdate),this.aRevokedCert.length>0){var t=new KJUR.asn1.DERSequence({array:this.aRevokedCert});this.asn1Array.push(t)}var e=new KJUR.asn1.DERSequence({array:this.asn1Array});return this.hTLV=e.getEncodedHex(),this.isModified=!1,this.hTLV},this._initialize=function(){this.asn1Version=null,this.asn1SignatureAlg=null,this.asn1Issuer=null,this.asn1ThisUpdate=null,this.asn1NextUpdate=null,this.aRevokedCert=new Array},this._initialize()},nn.lang.extend(KJUR.asn1.x509.TBSCertList,KJUR.asn1.ASN1Object),KJUR.asn1.x509.CRLEntry=function(t){KJUR.asn1.x509.CRLEntry.superclass.constructor.call(this),this.setCertSerial=function(t){this.sn=new KJUR.asn1.DERInteger(t)},this.setRevocationDate=function(t){this.time=new KJUR.asn1.x509.Time(t)},this.getEncodedHex=function(){var t=new KJUR.asn1.DERSequence({array:[this.sn,this.time]});return this.TLV=t.getEncodedHex(),this.TLV},"undefined"!=typeof t&&("undefined"!=typeof t.time&&this.setRevocationDate(t.time),"undefined"!=typeof t.sn&&this.setCertSerial(t.sn))},nn.lang.extend(KJUR.asn1.x509.CRLEntry,KJUR.asn1.ASN1Object),KJUR.asn1.x509.X500Name=function(t){if(KJUR.asn1.x509.X500Name.superclass.constructor.call(this),this.asn1Array=new Array,this.setByString=function(t){var e=t.split("/");e.shift();for(var r=0;r<e.length;r++)this.asn1Array.push(new KJUR.asn1.x509.RDN({str:e[r]}))},this.setByObject=function(t){for(var e in t)if(t.hasOwnProperty(e)){var r=new KJUR.asn1.x509.RDN({str:e+"="+t[e]});this.asn1Array?this.asn1Array.push(r):this.asn1Array=[r]}},this.getEncodedHex=function(){if("string"==typeof this.hTLV)return this.hTLV;var t=new KJUR.asn1.DERSequence({array:this.asn1Array});return this.hTLV=t.getEncodedHex(),this.hTLV},"undefined"!=typeof t){if("undefined"!=typeof t.str?this.setByString(t.str):"object"==typeof t&&this.setByObject(t),"undefined"!=typeof t.certissuer){var e=new Gr;e.hex=Gr.pemToHex(t.certissuer),this.hTLV=e.getIssuerHex()}if("undefined"!=typeof t.certsubject){var e=new Gr;e.hex=Gr.pemToHex(t.certsubject),this.hTLV=e.getSubjectHex()}}},nn.lang.extend(KJUR.asn1.x509.X500Name,KJUR.asn1.ASN1Object),KJUR.asn1.x509.RDN=function(t){KJUR.asn1.x509.RDN.superclass.constructor.call(this),this.asn1Array=new Array,this.addByString=function(t){this.asn1Array.push(new KJUR.asn1.x509.AttributeTypeAndValue({str:t}))},this.getEncodedHex=function(){var t=new KJUR.asn1.DERSet({array:this.asn1Array});return this.TLV=t.getEncodedHex(),this.TLV},"undefined"!=typeof t&&"undefined"!=typeof t.str&&this.addByString(t.str)},nn.lang.extend(KJUR.asn1.x509.RDN,KJUR.asn1.ASN1Object),KJUR.asn1.x509.AttributeTypeAndValue=function(t){KJUR.asn1.x509.AttributeTypeAndValue.superclass.constructor.call(this);var e="utf8";this.setByString=function(t){if(!t.match(/^([^=]+)=(.+)$/))throw"malformed attrTypeAndValueStr: "+t;this.setByAttrTypeAndValueStr(RegExp.$1,RegExp.$2)},this.setByAttrTypeAndValueStr=function(t,r){this.typeObj=KJUR.asn1.x509.OID.atype2obj(t);var n=e;"C"==t&&(n="prn"),this.valueObj=this.getValueObj(n,r)},this.getValueObj=function(t,e){if("utf8"==t)return new KJUR.asn1.DERUTF8String({str:e});if("prn"==t)return new KJUR.asn1.DERPrintableString({str:e});if("tel"==t)return new KJUR.asn1.DERTeletexString({str:e});if("ia5"==t)return new KJUR.asn1.DERIA5String({str:e});throw"unsupported directory string type: type="+t+" value="+e},this.getEncodedHex=function(){var t=new KJUR.asn1.DERSequence({array:[this.typeObj,this.valueObj]});return this.TLV=t.getEncodedHex(),this.TLV},"undefined"!=typeof t&&"undefined"!=typeof t.str&&this.setByString(t.str)},nn.lang.extend(KJUR.asn1.x509.AttributeTypeAndValue,KJUR.asn1.ASN1Object),KJUR.asn1.x509.SubjectPublicKeyInfo=function(t){KJUR.asn1.x509.SubjectPublicKeyInfo.superclass.constructor.call(this),this.setRSAKey=function(t){if(!ve.prototype.isPrototypeOf(t))throw"argument is not RSAKey instance";this.rsaKey=t;var e=new KJUR.asn1.DERInteger({bigint:t.n}),r=new KJUR.asn1.DERInteger({"int":t.e}),n=new KJUR.asn1.DERSequence({array:[e,r]}),i=n.getEncodedHex();this.asn1AlgId=new KJUR.asn1.x509.AlgorithmIdentifier({name:"rsaEncryption"}),this.asn1SubjPKey=new KJUR.asn1.DERBitString({hex:"00"+i})},this.setRSAPEM=function(t){if(!t.match(/-----BEGIN PUBLIC KEY-----/))throw"key not supported";var e=t;e=e.replace(/^-----[^-]+-----/,""),e=e.replace(/-----[^-]+-----\s*$/,"");var r=e.replace(/\s+/g,""),n=sn.enc.Base64.parse(r),i=sn.enc.Hex.stringify(n),s=Ur(i),o=s[1],a=o.substr(2),u=Ur(a),h=new ve;h.setPublic(u[0],u[1]),this.setRSAKey(h)},this.getASN1Object=function(){if(null==this.asn1AlgId||null==this.asn1SubjPKey)throw"algId and/or subjPubKey not set";var t=new KJUR.asn1.DERSequence({array:[this.asn1AlgId,this.asn1SubjPKey]});return t},this.getEncodedHex=function(){var t=this.getASN1Object();return this.hTLV=t.getEncodedHex(),this.hTLV},this._setRSAKey=function(t){var e=KJUR.asn1.ASN1Util.newObject({seq:[{"int":{bigint:t.n}},{"int":{"int":t.e}}]}),r=e.getEncodedHex();this.asn1AlgId=new KJUR.asn1.x509.AlgorithmIdentifier({name:"rsaEncryption"}),this.asn1SubjPKey=new KJUR.asn1.DERBitString({hex:"00"+r})},this._setEC=function(t){var e=new KJUR.asn1.DERObjectIdentifier({name:t.curveName});this.asn1AlgId=new KJUR.asn1.x509.AlgorithmIdentifier({name:"ecPublicKey",asn1params:e}),this.asn1SubjPKey=new KJUR.asn1.DERBitString({hex:"00"+t.pubKeyHex})},this._setDSA=function(t){var e=new KJUR.asn1.ASN1Util.newObject({seq:[{"int":{bigint:t.p}},{"int":{bigint:t.q}},{"int":{bigint:t.g}}]});this.asn1AlgId=new KJUR.asn1.x509.AlgorithmIdentifier({name:"dsa",asn1params:e});var r=new KJUR.asn1.DERInteger({bigint:t.y});this.asn1SubjPKey=new KJUR.asn1.DERBitString({hex:"00"+r.getEncodedHex()})},"undefined"!=typeof t&&("undefined"!=typeof ve&&t instanceof ve?this._setRSAKey(t):"undefined"!=typeof KJUR.crypto.ECDSA&&t instanceof KJUR.crypto.ECDSA?this._setEC(t):"undefined"!=typeof KJUR.crypto.DSA&&t instanceof KJUR.crypto.DSA?this._setDSA(t):"undefined"!=typeof t.rsakey?this.setRSAKey(t.rsakey):"undefined"!=typeof t.rsapem&&this.setRSAPEM(t.rsapem))},nn.lang.extend(KJUR.asn1.x509.SubjectPublicKeyInfo,KJUR.asn1.ASN1Object),KJUR.asn1.x509.Time=function(t){KJUR.asn1.x509.Time.superclass.constructor.call(this),this.setTimeParams=function(t){this.timeParams=t},this.getEncodedHex=function(){var t=null;return t=null!=this.timeParams?"utc"==this.type?new KJUR.asn1.DERUTCTime(this.timeParams):new KJUR.asn1.DERGeneralizedTime(this.timeParams):"utc"==this.type?new KJUR.asn1.DERUTCTime:new KJUR.asn1.DERGeneralizedTime,this.TLV=t.getEncodedHex(),this.TLV},this.type="utc","undefined"!=typeof t&&("undefined"!=typeof t.type?this.type=t.type:"undefined"!=typeof t.str&&(t.str.match(/^[0-9]{12}Z$/)&&(this.type="utc"),t.str.match(/^[0-9]{14}Z$/)&&(this.type="gen")),this.timeParams=t)},nn.lang.extend(KJUR.asn1.x509.Time,KJUR.asn1.ASN1Object),KJUR.asn1.x509.AlgorithmIdentifier=function(t){KJUR.asn1.x509.AlgorithmIdentifier.superclass.constructor.call(this),this.getEncodedHex=function(){if(null==this.nameAlg&&null==this.asn1Alg)throw"algorithm not specified";null!=this.nameAlg&&null==this.asn1Alg&&(this.asn1Alg=KJUR.asn1.x509.OID.name2obj(this.nameAlg));var t=[this.asn1Alg];this.paramEmpty||t.push(this.asn1Params);var e=new KJUR.asn1.DERSequence({array:t});return this.hTLV=e.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&("undefined"!=typeof t.name&&(this.nameAlg=t.name),"undefined"!=typeof t.asn1params&&(this.asn1Params=t.asn1params),"undefined"!=typeof t.paramempty&&(this.paramEmpty=t.paramempty)),null==this.asn1Params&&(this.asn1Params=new KJUR.asn1.DERNull)},nn.lang.extend(KJUR.asn1.x509.AlgorithmIdentifier,KJUR.asn1.ASN1Object),KJUR.asn1.x509.GeneralName=function(t){KJUR.asn1.x509.GeneralName.superclass.constructor.call(this);var e={rfc822:"81",dns:"82",dn:"a4",uri:"86"};this.explicit=!1,this.setByParam=function(t){var r=null;if("undefined"!=typeof t){if("undefined"!=typeof t.rfc822&&(this.type="rfc822",r=new KJUR.asn1.DERIA5String({str:t[this.type]})),"undefined"!=typeof t.dns&&(this.type="dns",r=new KJUR.asn1.DERIA5String({str:t[this.type]})),"undefined"!=typeof t.uri&&(this.type="uri",r=new KJUR.asn1.DERIA5String({str:t[this.type]})),"undefined"!=typeof t.certissuer){this.type="dn",this.explicit=!0;var n=t.certissuer,i=null;if(n.match(/^[0-9A-Fa-f]+$/),-1!=n.indexOf("-----BEGIN ")&&(i=Gr.pemToHex(n)),null==i)throw"certissuer param not cert";var s=new Gr;s.hex=i;var o=s.getIssuerHex();r=new KJUR.asn1.ASN1Object,r.hTLV=o}if("undefined"!=typeof t.certsubj){this.type="dn",this.explicit=!0;var n=t.certsubj,i=null;if(n.match(/^[0-9A-Fa-f]+$/),-1!=n.indexOf("-----BEGIN ")&&(i=Gr.pemToHex(n)),null==i)throw"certsubj param not cert";var s=new Gr;s.hex=i;var o=s.getSubjectHex();r=new KJUR.asn1.ASN1Object,r.hTLV=o}if(null==this.type)throw"unsupported type in params="+t;this.asn1Obj=new KJUR.asn1.DERTaggedObject({explicit:this.explicit,tag:e[this.type],obj:r})}},this.getEncodedHex=function(){return this.asn1Obj.getEncodedHex()},"undefined"!=typeof t&&this.setByParam(t)},nn.lang.extend(KJUR.asn1.x509.GeneralName,KJUR.asn1.ASN1Object),KJUR.asn1.x509.GeneralNames=function(t){KJUR.asn1.x509.GeneralNames.superclass.constructor.call(this),this.setByParamArray=function(t){for(var e=0;e<t.length;e++){var r=new KJUR.asn1.x509.GeneralName(t[e]);this.asn1Array.push(r)}},this.getEncodedHex=function(){var t=new KJUR.asn1.DERSequence({array:this.asn1Array});return t.getEncodedHex()},this.asn1Array=new Array,"undefined"!=typeof t&&this.setByParamArray(t)},nn.lang.extend(KJUR.asn1.x509.GeneralNames,KJUR.asn1.ASN1Object),KJUR.asn1.x509.DistributionPointName=function(t){if(KJUR.asn1.x509.DistributionPointName.superclass.constructor.call(this),this.getEncodedHex=function(){if("full"!=this.type)throw"currently type shall be 'full': "+this.type;return this.asn1Obj=new KJUR.asn1.DERTaggedObject({explicit:!1,tag:this.tag,obj:this.asn1V}),this.hTLV=this.asn1Obj.getEncodedHex(),this.hTLV},"undefined"!=typeof t){if(!KJUR.asn1.x509.GeneralNames.prototype.isPrototypeOf(t))throw"This class supports GeneralNames only as argument";this.type="full",this.tag="a0",this.asn1V=t}},nn.lang.extend(KJUR.asn1.x509.DistributionPointName,KJUR.asn1.ASN1Object),KJUR.asn1.x509.DistributionPoint=function(t){KJUR.asn1.x509.DistributionPoint.superclass.constructor.call(this),this.getEncodedHex=function(){var t=new KJUR.asn1.DERSequence;if(null!=this.asn1DP){var e=new KJUR.asn1.DERTaggedObject({explicit:!0,tag:"a0",obj:this.asn1DP});t.appendASN1Object(e)}return this.hTLV=t.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&"undefined"!=typeof t.dpobj&&(this.asn1DP=t.dpobj)},nn.lang.extend(KJUR.asn1.x509.DistributionPoint,KJUR.asn1.ASN1Object),KJUR.asn1.x509.OID=new function(t){this.atype2oidList={C:"2.5.4.6",O:"2.5.4.10",OU:"2.5.4.11",ST:"2.5.4.8",L:"2.5.4.7",CN:"2.5.4.3",DN:"2.5.4.49",DC:"0.9.2342.19200300.100.1.25"},this.name2oidList={sha1:"1.3.14.3.2.26",sha256:"2.16.840.1.101.3.4.2.1",sha384:"2.16.840.1.101.3.4.2.2",sha512:"2.16.840.1.101.3.4.2.3",sha224:"2.16.840.1.101.3.4.2.4",md5:"1.2.840.113549.2.5",md2:"1.3.14.7.2.2.1",ripemd160:"1.3.36.3.2.1",MD2withRSA:"1.2.840.113549.1.1.2",MD4withRSA:"1.2.840.113549.1.1.3",MD5withRSA:"1.2.840.113549.1.1.4",SHA1withRSA:"1.2.840.113549.1.1.5",SHA224withRSA:"1.2.840.113549.1.1.14",SHA256withRSA:"1.2.840.113549.1.1.11",SHA384withRSA:"1.2.840.113549.1.1.12",SHA512withRSA:"1.2.840.113549.1.1.13",SHA1withECDSA:"1.2.840.10045.4.1",SHA224withECDSA:"1.2.840.10045.4.3.1",SHA256withECDSA:"1.2.840.10045.4.3.2",SHA384withECDSA:"1.2.840.10045.4.3.3",SHA512withECDSA:"1.2.840.10045.4.3.4",dsa:"1.2.840.10040.4.1",SHA1withDSA:"1.2.840.10040.4.3",SHA224withDSA:"2.16.840.1.101.3.4.3.1",SHA256withDSA:"2.16.840.1.101.3.4.3.2",rsaEncryption:"1.2.840.113549.1.1.1",countryName:"2.5.4.6",organization:"2.5.4.10",organizationalUnit:"2.5.4.11",stateOrProvinceName:"2.5.4.8",locality:"2.5.4.7",commonName:"2.5.4.3",subjectKeyIdentifier:"2.5.29.14",keyUsage:"2.5.29.15",subjectAltName:"2.5.29.17",basicConstraints:"2.5.29.19",nameConstraints:"2.5.29.30",cRLDistributionPoints:"2.5.29.31",certificatePolicies:"2.5.29.32",authorityKeyIdentifier:"2.5.29.35",policyConstraints:"2.5.29.36",extKeyUsage:"2.5.29.37",authorityInfoAccess:"1.3.6.1.5.5.7.1.1",anyExtendedKeyUsage:"2.5.29.37.0",serverAuth:"1.3.6.1.5.5.7.3.1",clientAuth:"1.3.6.1.5.5.7.3.2",codeSigning:"1.3.6.1.5.5.7.3.3",emailProtection:"1.3.6.1.5.5.7.3.4",timeStamping:"1.3.6.1.5.5.7.3.8",ocspSigning:"1.3.6.1.5.5.7.3.9",ecPublicKey:"1.2.840.10045.2.1",secp256r1:"1.2.840.10045.3.1.7",secp256k1:"1.3.132.0.10",secp384r1:"1.3.132.0.34",pkcs5PBES2:"1.2.840.113549.1.5.13",pkcs5PBKDF2:"1.2.840.113549.1.5.12","des-EDE3-CBC":"1.2.840.113549.3.7",data:"1.2.840.113549.1.7.1","signed-data":"1.2.840.113549.1.7.2","enveloped-data":"1.2.840.113549.1.7.3","digested-data":"1.2.840.113549.1.7.5","encrypted-data":"1.2.840.113549.1.7.6","authenticated-data":"1.2.840.113549.1.9.16.1.2",tstinfo:"1.2.840.113549.1.9.16.1.4"},this.objCache={},this.name2obj=function(t){if("undefined"!=typeof this.objCache[t])return this.objCache[t];if("undefined"==typeof this.name2oidList[t])throw"Name of ObjectIdentifier not defined: "+t;var e=this.name2oidList[t],r=new KJUR.asn1.DERObjectIdentifier({oid:e});return this.objCache[t]=r,r},this.atype2obj=function(t){if("undefined"!=typeof this.objCache[t])return this.objCache[t];if("undefined"==typeof this.atype2oidList[t])throw"AttributeType name undefined: "+t;var e=this.atype2oidList[t],r=new KJUR.asn1.DERObjectIdentifier({oid:e});return this.objCache[t]=r,r}},KJUR.asn1.x509.OID.oid2name=function(t){var e=KJUR.asn1.x509.OID.name2oidList;for(var r in e)if(e[r]==t)return r;return""},KJUR.asn1.x509.OID.name2oid=function(t){var e=KJUR.asn1.x509.OID.name2oidList;return void 0===e[t]?"":e[t]},KJUR.asn1.x509.X509Util=new function(){this.getPKCS8PubKeyPEMfromRSAKey=function(t){var e=null,r=KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t.n),n=KJUR.asn1.ASN1Util.integerToByteHex(t.e),i=new KJUR.asn1.DERInteger({hex:r}),s=new KJUR.asn1.DERInteger({hex:n}),o=new KJUR.asn1.DERSequence({array:[i,s]}),a=o.getEncodedHex(),u=new KJUR.asn1.x509.AlgorithmIdentifier({name:"rsaEncryption"}),h=new KJUR.asn1.DERBitString({hex:"00"+a}),c=new KJUR.asn1.DERSequence({array:[u,h]}),f=c.getEncodedHex(),e=KJUR.asn1.ASN1Util.getPEMStringFromHex(f,"PUBLIC KEY");return e}},KJUR.asn1.x509.X509Util.newCertPEM=function(t){var e=KJUR.asn1.x509,r=new e.TBSCertificate;if(void 0===t.serial)throw"serial number undefined.";if(r.setSerialNumberByParam(t.serial),"string"!=typeof t.sigalg.name)throw"unproper signature algorithm name";if(r.setSignatureAlgByParam(t.sigalg),void 0===t.issuer)throw"issuer name undefined.";if(r.setIssuerByParam(t.issuer),void 0===t.notbefore)throw"notbefore undefined.";if(r.setNotBeforeByParam(t.notbefore),void 0===t.notafter)throw"notafter undefined.";if(r.setNotAfterByParam(t.notafter),void 0===t.subject)throw"subject name undefined.";if(r.setSubjectByParam(t.subject),void 0===t.sbjpubkey)throw"subject public key undefined.";if(r.setSubjectPublicKeyByGetKey(t.sbjpubkey),void 0!==t.ext&&void 0!==t.ext.length)for(var n=0;n<t.ext.length;n++)for(key in t.ext[n])r.appendExtensionByName(key,t.ext[n][key]);if(void 0===t.cakey&&void 0===t.sighex)throw"param cakey and sighex undefined.";var i=null,s=null;return t.cakey&&(i=In.getKey.apply(null,t.cakey),s=new e.Certificate({tbscertobj:r,prvkeyobj:i}),s.sign()),t.sighex&&(s=new e.Certificate({tbscertobj:r}),s.setSignatureHex(t.sighex)),s.getPEMString()},"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.asn1&&KJUR.asn1||(KJUR.asn1={}),"undefined"!=typeof KJUR.asn1.cms&&KJUR.asn1.cms||(KJUR.asn1.cms={}),KJUR.asn1.cms.Attribute=function(t){KJUR.asn1.cms.Attribute.superclass.constructor.call(this),this.getEncodedHex=function(){var t,e,r;t=new KJUR.asn1.DERObjectIdentifier({oid:this.attrTypeOid}),e=new KJUR.asn1.DERSet({array:this.valueList});try{e.getEncodedHex()}catch(n){throw"fail valueSet.getEncodedHex in Attribute(1)/"+n}r=new KJUR.asn1.DERSequence({array:[t,e]});try{this.hTLV=r.getEncodedHex()}catch(n){throw"failed seq.getEncodedHex in Attribute(2)/"+n}return this.hTLV}},nn.lang.extend(KJUR.asn1.cms.Attribute,KJUR.asn1.ASN1Object),KJUR.asn1.cms.ContentType=function(t){KJUR.asn1.cms.ContentType.superclass.constructor.call(this),this.attrTypeOid="1.2.840.113549.1.9.3";var e=null;if("undefined"!=typeof t){var e=new KJUR.asn1.DERObjectIdentifier(t);this.valueList=[e]}},nn.lang.extend(KJUR.asn1.cms.ContentType,KJUR.asn1.cms.Attribute),KJUR.asn1.cms.MessageDigest=function(t){if(KJUR.asn1.cms.MessageDigest.superclass.constructor.call(this),this.attrTypeOid="1.2.840.113549.1.9.4","undefined"!=typeof t)if(t.eciObj instanceof KJUR.asn1.cms.EncapsulatedContentInfo&&"string"==typeof t.hashAlg){var e=t.eciObj.eContentValueHex,r=t.hashAlg,n=KJUR.crypto.Util.hashHex(e,r),i=new KJUR.asn1.DEROctetString({hex:n});i.getEncodedHex(),this.valueList=[i]}else{var i=new KJUR.asn1.DEROctetString(t);i.getEncodedHex(),this.valueList=[i]}},nn.lang.extend(KJUR.asn1.cms.MessageDigest,KJUR.asn1.cms.Attribute),KJUR.asn1.cms.SigningTime=function(t){if(KJUR.asn1.cms.SigningTime.superclass.constructor.call(this),this.attrTypeOid="1.2.840.113549.1.9.5","undefined"!=typeof t){var e=new KJUR.asn1.x509.Time(t);try{e.getEncodedHex()}catch(r){throw"SigningTime.getEncodedHex() failed/"+r}this.valueList=[e]}},nn.lang.extend(KJUR.asn1.cms.SigningTime,KJUR.asn1.cms.Attribute),KJUR.asn1.cms.SigningCertificate=function(t){KJUR.asn1.cms.SigningCertificate.superclass.constructor.call(this),this.attrTypeOid="1.2.840.113549.1.9.16.2.12";var e=KJUR.asn1,r=KJUR.asn1.cms,n=KJUR.crypto;this.setCerts=function(t){for(var i=[],s=0;s<t.length;s++){var o=In.getHexFromPEM(t[s]),a=n.Util.hashHex(o,"sha1"),u=new e.DEROctetString({hex:a});u.getEncodedHex();var h=new r.IssuerAndSerialNumber({cert:t[s]});h.getEncodedHex();var c=new e.DERSequence({array:[u,h]});c.getEncodedHex(),i.push(c)}var f=new e.DERSequence({array:i});f.getEncodedHex(),this.valueList=[f]},"undefined"!=typeof t&&"object"==typeof t.array&&this.setCerts(t.array)},nn.lang.extend(KJUR.asn1.cms.SigningCertificate,KJUR.asn1.cms.Attribute),KJUR.asn1.cms.SigningCertificateV2=function(t){KJUR.asn1.cms.SigningCertificateV2.superclass.constructor.call(this),this.attrTypeOid="1.2.840.113549.1.9.16.2.47";var e=KJUR.asn1,r=KJUR.asn1.x509,n=KJUR.asn1.cms,i=KJUR.crypto;if(this.setCerts=function(t,s){for(var o=[],a=0;a<t.length;a++){var u=In.getHexFromPEM(t[a]),h=[];"sha256"!=s&&h.push(new r.AlgorithmIdentifier({name:s}));var c=i.Util.hashHex(u,s),f=new e.DEROctetString({hex:c});f.getEncodedHex(),h.push(f);var l=new n.IssuerAndSerialNumber({cert:t[a]});l.getEncodedHex(),h.push(l);var d=new e.DERSequence({array:h});d.getEncodedHex(),o.push(d)}var p=new e.DERSequence({array:o});p.getEncodedHex(),this.valueList=[p]},"undefined"!=typeof t&&"object"==typeof t.array){var s="sha256";"string"==typeof t.hashAlg&&(s=t.hashAlg),this.setCerts(t.array,s)}},nn.lang.extend(KJUR.asn1.cms.SigningCertificateV2,KJUR.asn1.cms.Attribute),KJUR.asn1.cms.IssuerAndSerialNumber=function(t){KJUR.asn1.cms.IssuerAndSerialNumber.superclass.constructor.call(this);var e=KJUR.asn1,r=e.x509;this.setByCertPEM=function(t){var n=In.getHexFromPEM(t),i=new Gr;i.hex=n;var s=i.getIssuerHex();this.dIssuer=new r.X500Name,this.dIssuer.hTLV=s;var o=i.getSerialNumberHex();this.dSerial=new e.DERInteger({hex:o})},this.getEncodedHex=function(){var t=new KJUR.asn1.DERSequence({array:[this.dIssuer,this.dSerial]});return this.hTLV=t.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&("string"==typeof t&&-1!=t.indexOf("-----BEGIN ")&&this.setByCertPEM(t),t.issuer&&t.serial&&(t.issuer instanceof KJUR.asn1.x509.X500Name?this.dIssuer=t.issuer:this.dIssuer=new KJUR.asn1.x509.X500Name(t.issuer),t.serial instanceof KJUR.asn1.DERInteger?this.dSerial=t.serial:this.dSerial=new KJUR.asn1.DERInteger(t.serial)),"string"==typeof t.cert&&this.setByCertPEM(t.cert))},nn.lang.extend(KJUR.asn1.cms.IssuerAndSerialNumber,KJUR.asn1.ASN1Object),KJUR.asn1.cms.AttributeList=function(t){KJUR.asn1.cms.AttributeList.superclass.constructor.call(this),this.list=new Array,this.sortFlag=!0,this.add=function(t){t instanceof KJUR.asn1.cms.Attribute&&this.list.push(t)},this.length=function(){return this.list.length},this.clear=function(){this.list=new Array,this.hTLV=null,this.hV=null},this.getEncodedHex=function(){if("string"==typeof this.hTLV)return this.hTLV;var t=new KJUR.asn1.DERSet({array:this.list,sortflag:this.sortFlag});return this.hTLV=t.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&"undefined"!=typeof t.sortflag&&0==t.sortflag&&(this.sortFlag=!1)},nn.lang.extend(KJUR.asn1.cms.AttributeList,KJUR.asn1.ASN1Object),KJUR.asn1.cms.SignerInfo=function(t){KJUR.asn1.cms.SignerInfo.superclass.constructor.call(this);var e=KJUR.asn1,r=KJUR.asn1.cms,n=KJUR.asn1.x509;this.dCMSVersion=new e.DERInteger({"int":1}),this.dSignerIdentifier=null,this.dDigestAlgorithm=null,this.dSignedAttrs=new r.AttributeList,this.dSigAlg=null,this.dSig=null,this.dUnsignedAttrs=new r.AttributeList,this.setSignerIdentifier=function(t){"string"==typeof t&&-1!=t.indexOf("CERTIFICATE")&&-1!=t.indexOf("BEGIN")&&-1!=t.indexOf("END")&&(this.dSignerIdentifier=new r.IssuerAndSerialNumber({cert:t}))},this.setForContentAndHash=function(t){"undefined"!=typeof t&&(t.eciObj instanceof KJUR.asn1.cms.EncapsulatedContentInfo&&(this.dSignedAttrs.add(new r.ContentType({oid:"1.2.840.113549.1.7.1"})),this.dSignedAttrs.add(new r.MessageDigest({eciObj:t.eciObj,hashAlg:t.hashAlg}))),"undefined"!=typeof t.sdObj&&t.sdObj instanceof KJUR.asn1.cms.SignedData&&-1==t.sdObj.digestAlgNameList.join(":").indexOf(t.hashAlg)&&t.sdObj.digestAlgNameList.push(t.hashAlg),"string"==typeof t.hashAlg&&(this.dDigestAlgorithm=new n.AlgorithmIdentifier({name:t.hashAlg})))},this.sign=function(t,r){this.dSigAlg=new n.AlgorithmIdentifier({name:r});var i=this.dSignedAttrs.getEncodedHex(),s=In.getKey(t),o=new KJUR.crypto.Signature({alg:r});o.init(s),o.updateHex(i);var a=o.sign();this.dSig=new e.DEROctetString({hex:a})},this.addUnsigned=function(t){this.hTLV=null,this.dUnsignedAttrs.hTLV=null,this.dUnsignedAttrs.add(t)},this.getEncodedHex=function(){if(this.dSignedAttrs instanceof KJUR.asn1.cms.AttributeList&&0==this.dSignedAttrs.length())throw"SignedAttrs length = 0 (empty)";var t=new e.DERTaggedObject({obj:this.dSignedAttrs,tag:"a0",explicit:!1}),r=null;this.dUnsignedAttrs.length()>0&&(r=new e.DERTaggedObject({obj:this.dUnsignedAttrs,tag:"a1",explicit:!1}));var n=[this.dCMSVersion,this.dSignerIdentifier,this.dDigestAlgorithm,t,this.dSigAlg,this.dSig];null!=r&&n.push(r);var i=new e.DERSequence({array:n});return this.hTLV=i.getEncodedHex(),this.hTLV}},nn.lang.extend(KJUR.asn1.cms.SignerInfo,KJUR.asn1.ASN1Object),KJUR.asn1.cms.EncapsulatedContentInfo=function(t){KJUR.asn1.cms.EncapsulatedContentInfo.superclass.constructor.call(this);var e=KJUR.asn1;KJUR.asn1.cms,KJUR.asn1.x509,this.dEContentType=new e.DERObjectIdentifier({name:"data"}),this.dEContent=null,this.isDetached=!1,this.eContentValueHex=null,this.setContentType=function(t){t.match(/^[0-2][.][0-9.]+$/)?this.dEContentType=new e.DERObjectIdentifier({oid:t}):this.dEContentType=new e.DERObjectIdentifier({name:t})},this.setContentValue=function(t){"undefined"!=typeof t&&("string"==typeof t.hex?this.eContentValueHex=t.hex:"string"==typeof t.str&&(this.eContentValueHex=vr(t.str)))},this.setContentValueHex=function(t){this.eContentValueHex=t},this.setContentValueStr=function(t){this.eContentValueHex=vr(t)},this.getEncodedHex=function(){if("string"!=typeof this.eContentValueHex)throw"eContentValue not yet set";var t=new e.DEROctetString({hex:this.eContentValueHex});this.dEContent=new e.DERTaggedObject({obj:t,tag:"a0",explicit:!0});var r=[this.dEContentType];this.isDetached||r.push(this.dEContent);var n=new e.DERSequence({array:r});return this.hTLV=n.getEncodedHex(),this.hTLV}},nn.lang.extend(KJUR.asn1.cms.EncapsulatedContentInfo,KJUR.asn1.ASN1Object),KJUR.asn1.cms.ContentInfo=function(t){KJUR.asn1.cms.ContentInfo.superclass.constructor.call(this);var e=KJUR.asn1,r=(KJUR.asn1.cms,KJUR.asn1.x509);this.dContentType=null,this.dContent=null,this.setContentType=function(t){"string"==typeof t&&(this.dContentType=r.OID.name2obj(t))},this.getEncodedHex=function(){var t=new e.DERTaggedObject({obj:this.dContent,tag:"a0",explicit:!0}),r=new e.DERSequence({array:[this.dContentType,t]});return this.hTLV=r.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&(t.type&&this.setContentType(t.type),t.obj&&t.obj instanceof e.ASN1Object&&(this.dContent=t.obj))},nn.lang.extend(KJUR.asn1.cms.ContentInfo,KJUR.asn1.ASN1Object),KJUR.asn1.cms.SignedData=function(t){KJUR.asn1.cms.SignedData.superclass.constructor.call(this);var e=KJUR.asn1,r=KJUR.asn1.cms,n=KJUR.asn1.x509;this.dCMSVersion=new e.DERInteger({"int":1}),this.dDigestAlgs=null,this.digestAlgNameList=[],this.dEncapContentInfo=new r.EncapsulatedContentInfo,this.dCerts=null,this.certificateList=[],this.crlList=[],this.signerInfoList=[new r.SignerInfo],this.addCertificatesByPEM=function(t){var r=In.getHexFromPEM(t),n=new e.ASN1Object;n.hTLV=r,this.certificateList.push(n)},this.getEncodedHex=function(){if("string"==typeof this.hTLV)return this.hTLV;if(null==this.dDigestAlgs){for(var t=[],r=0;r<this.digestAlgNameList.length;r++){var i=this.digestAlgNameList[r],s=new n.AlgorithmIdentifier({name:i});t.push(s)}this.dDigestAlgs=new e.DERSet({array:t})}var o=[this.dCMSVersion,this.dDigestAlgs,this.dEncapContentInfo];if(null==this.dCerts&&this.certificateList.length>0){var a=new e.DERSet({array:this.certificateList});this.dCerts=new e.DERTaggedObject({obj:a,tag:"a0",explicit:!1})}null!=this.dCerts&&o.push(this.dCerts);var u=new e.DERSet({array:this.signerInfoList});o.push(u);var h=new e.DERSequence({array:o});return this.hTLV=h.getEncodedHex(),this.hTLV},this.getContentInfo=function(){this.getEncodedHex();var t=new r.ContentInfo({type:"signed-data",obj:this});return t},this.getContentInfoEncodedHex=function(){var t=this.getContentInfo(),e=t.getEncodedHex();return e},this.getPEM=function(){var t=this.getContentInfoEncodedHex(),r=e.ASN1Util.getPEMStringFromHex(t,"CMS");return r}},nn.lang.extend(KJUR.asn1.cms.SignedData,KJUR.asn1.ASN1Object),KJUR.asn1.cms.CMSUtil=new function(){},KJUR.asn1.cms.CMSUtil.newSignedData=function(t){var e=KJUR.asn1.cms,r=KJUR.asn1.cades,n=new e.SignedData;if(n.dEncapContentInfo.setContentValue(t.content),"object"==typeof t.certs)for(var i=0;i<t.certs.length;i++)n.addCertificatesByPEM(t.certs[i]);n.signerInfoList=[];for(var i=0;i<t.signerInfos.length;i++){var s=t.signerInfos[i],o=new e.SignerInfo;o.setSignerIdentifier(s.signerCert),o.setForContentAndHash({sdObj:n,eciObj:n.dEncapContentInfo,hashAlg:s.hashAlg});for(attrName in s.sAttr){var a=s.sAttr[attrName];if("SigningTime"==attrName){var u=new e.SigningTime(a);o.dSignedAttrs.add(u)}if("SigningCertificate"==attrName){var u=new e.SigningCertificate(a);o.dSignedAttrs.add(u)}if("SigningCertificateV2"==attrName){var u=new e.SigningCertificateV2(a);o.dSignedAttrs.add(u)}if("SignaturePolicyIdentifier"==attrName){var u=new r.SignaturePolicyIdentifier(a);o.dSignedAttrs.add(u)}}o.sign(s.signerPrvKey,s.sigAlg),n.signerInfoList.push(o)}return n},"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.asn1&&KJUR.asn1||(KJUR.asn1={}),"undefined"!=typeof KJUR.asn1.tsp&&KJUR.asn1.tsp||(KJUR.asn1.tsp={}),KJUR.asn1.tsp.Accuracy=function(t){KJUR.asn1.tsp.Accuracy.superclass.constructor.call(this);var e=KJUR.asn1;this.seconds=null,this.millis=null,this.micros=null,this.getEncodedHex=function(){var t=null,r=null,n=null,i=[];if(null!=this.seconds&&(t=new e.DERInteger({"int":this.seconds}),i.push(t)),null!=this.millis){var s=new e.DERInteger({"int":this.millis});r=new e.DERTaggedObject({obj:s,tag:"80",explicit:!1}),i.push(r)}if(null!=this.micros){var o=new e.DERInteger({"int":this.micros});n=new e.DERTaggedObject({obj:o,tag:"81",explicit:!1}),i.push(n)}var a=new e.DERSequence({array:i});return this.hTLV=a.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&("number"==typeof t.seconds&&(this.seconds=t.seconds),"number"==typeof t.millis&&(this.millis=t.millis),"number"==typeof t.micros&&(this.micros=t.micros))},nn.lang.extend(KJUR.asn1.tsp.Accuracy,KJUR.asn1.ASN1Object),KJUR.asn1.tsp.MessageImprint=function(t){KJUR.asn1.tsp.MessageImprint.superclass.constructor.call(this);var e=KJUR.asn1,r=KJUR.asn1.x509;this.dHashAlg=null,this.dHashValue=null,this.getEncodedHex=function(){if("string"==typeof this.hTLV)return this.hTLV;var t=new e.DERSequence({array:[this.dHashAlg,this.dHashValue]});return t.getEncodedHex()},"undefined"!=typeof t&&("string"==typeof t.hashAlg&&(this.dHashAlg=new r.AlgorithmIdentifier({name:t.hashAlg})),"string"==typeof t.hashValue&&(this.dHashValue=new e.DEROctetString({hex:t.hashValue})))},nn.lang.extend(KJUR.asn1.tsp.MessageImprint,KJUR.asn1.ASN1Object),KJUR.asn1.tsp.TimeStampReq=function(t){KJUR.asn1.tsp.TimeStampReq.superclass.constructor.call(this);var e=KJUR.asn1,r=KJUR.asn1.tsp;this.dVersion=new e.DERInteger({"int":1}),this.dMessageImprint=null,this.dPolicy=null,this.dNonce=null,this.certReq=!0,this.setMessageImprint=function(t){return t instanceof KJUR.asn1.tsp.MessageImprint?void(this.dMessageImprint=t):void("object"==typeof t&&(this.dMessageImprint=new r.MessageImprint(t)))},this.getEncodedHex=function(){if(null==this.dMessageImprint)throw"messageImprint shall be specified";var t=[this.dVersion,this.dMessageImprint];null!=this.dPolicy&&t.push(this.dPolicy),null!=this.dNonce&&t.push(this.dNonce),this.certReq&&t.push(new e.DERBoolean);var r=new e.DERSequence({array:t});return this.hTLV=r.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&("object"==typeof t.mi&&this.setMessageImprint(t.mi),"object"==typeof t.policy&&(this.dPolicy=new e.DERObjectIdentifier(t.policy)),"object"==typeof t.nonce&&(this.dNonce=new e.DERInteger(t.nonce)),"boolean"==typeof t.certreq&&(this.certReq=t.certreq))},nn.lang.extend(KJUR.asn1.tsp.TimeStampReq,KJUR.asn1.ASN1Object),KJUR.asn1.tsp.TSTInfo=function(t){KJUR.asn1.tsp.TSTInfo.superclass.constructor.call(this);var e=KJUR.asn1,r=KJUR.asn1.x509,n=KJUR.asn1.tsp;if(this.dVersion=new e.DERInteger({"int":1}),this.dPolicy=null,this.dMessageImprint=null,this.dSerialNumber=null,this.dGenTime=null,this.dAccuracy=null,this.dOrdering=null,this.dNonce=null,this.dTsa=null,this.getEncodedHex=function(){var t=[this.dVersion];if(null==this.dPolicy)throw"policy shall be specified.";if(t.push(this.dPolicy),null==this.dMessageImprint)throw"messageImprint shall be specified.";if(t.push(this.dMessageImprint),null==this.dSerialNumber)throw"serialNumber shall be specified.";if(t.push(this.dSerialNumber),null==this.dGenTime)throw"genTime shall be specified.";t.push(this.dGenTime),null!=this.dAccuracy&&t.push(this.dAccuracy),null!=this.dOrdering&&t.push(this.dOrdering),null!=this.dNonce&&t.push(this.dNonce),null!=this.dTsa&&t.push(this.dTsa);var r=new e.DERSequence({array:t});return this.hTLV=r.getEncodedHex(),this.hTLV},"undefined"!=typeof t){if("string"==typeof t.policy){if(!t.policy.match(/^[0-9.]+$/))throw"policy shall be oid like 0.1.4.134";this.dPolicy=new e.DERObjectIdentifier({oid:t.policy})}"undefined"!=typeof t.messageImprint&&(this.dMessageImprint=new n.MessageImprint(t.messageImprint)),
	"undefined"!=typeof t.serialNumber&&(this.dSerialNumber=new e.DERInteger(t.serialNumber)),"undefined"!=typeof t.genTime&&(this.dGenTime=new e.DERGeneralizedTime(t.genTime)),"undefind"!=typeof t.accuracy&&(this.dAccuracy=new n.Accuracy(t.accuracy)),"undefined"!=typeof t.ordering&&1==t.ordering&&(this.dOrdering=new e.DERBoolean),"undefined"!=typeof t.nonce&&(this.dNonce=new e.DERInteger(t.nonce)),"undefined"!=typeof t.tsa&&(this.dTsa=new r.X500Name(t.tsa))}},nn.lang.extend(KJUR.asn1.tsp.TSTInfo,KJUR.asn1.ASN1Object),KJUR.asn1.tsp.TimeStampResp=function(t){KJUR.asn1.tsp.TimeStampResp.superclass.constructor.call(this);var e=KJUR.asn1,r=KJUR.asn1.tsp;this.dStatus=null,this.dTST=null,this.getEncodedHex=function(){if(null==this.dStatus)throw"status shall be specified";var t=[this.dStatus];null!=this.dTST&&t.push(this.dTST);var r=new e.DERSequence({array:t});return this.hTLV=r.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&("object"==typeof t.status&&(this.dStatus=new r.PKIStatusInfo(t.status)),"undefined"!=typeof t.tst&&t.tst instanceof KJUR.asn1.ASN1Object&&(this.dTST=t.tst.getContentInfo()))},nn.lang.extend(KJUR.asn1.tsp.TimeStampResp,KJUR.asn1.ASN1Object),KJUR.asn1.tsp.PKIStatusInfo=function(t){KJUR.asn1.tsp.PKIStatusInfo.superclass.constructor.call(this);var e=KJUR.asn1,r=KJUR.asn1.tsp;this.dStatus=null,this.dStatusString=null,this.dFailureInfo=null,this.getEncodedHex=function(){if(null==this.dStatus)throw"status shall be specified";var t=[this.dStatus];null!=this.dStatusString&&t.push(this.dStatusString),null!=this.dFailureInfo&&t.push(this.dFailureInfo);var r=new e.DERSequence({array:t});return this.hTLV=r.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&("object"==typeof t.status&&(this.dStatus=new r.PKIStatus(t.status)),"object"==typeof t.statstr&&(this.dStatusString=new r.PKIFreeText({array:t.statstr})),"object"==typeof t.failinfo&&(this.dFailureInfo=new r.PKIFailureInfo(t.failinfo)))},nn.lang.extend(KJUR.asn1.tsp.PKIStatusInfo,KJUR.asn1.ASN1Object),KJUR.asn1.tsp.PKIStatus=function(t){KJUR.asn1.tsp.PKIStatus.superclass.constructor.call(this);var e=KJUR.asn1,r=KJUR.asn1.tsp;if(this.getEncodedHex=function(){return this.hTLV=this.dStatus.getEncodedHex(),this.hTLV},"undefined"!=typeof t)if("undefined"!=typeof t.name){var n=r.PKIStatus.valueList;if("undefined"==typeof n[t.name])throw"name undefined: "+t.name;this.dStatus=new e.DERInteger({"int":n[t.name]})}else this.dStatus=new e.DERInteger(t)},nn.lang.extend(KJUR.asn1.tsp.PKIStatus,KJUR.asn1.ASN1Object),KJUR.asn1.tsp.PKIStatus.valueList={granted:0,grantedWithMods:1,rejection:2,waiting:3,revocationWarning:4,revocationNotification:5},KJUR.asn1.tsp.PKIFreeText=function(t){KJUR.asn1.tsp.PKIFreeText.superclass.constructor.call(this);var e=KJUR.asn1;this.textList=[],this.getEncodedHex=function(){for(var t=[],r=0;r<this.textList.length;r++)t.push(new e.DERUTF8String({str:this.textList[r]}));var n=new e.DERSequence({array:t});return this.hTLV=n.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&"object"==typeof t.array&&(this.textList=t.array)},nn.lang.extend(KJUR.asn1.tsp.PKIFreeText,KJUR.asn1.ASN1Object),KJUR.asn1.tsp.PKIFailureInfo=function(t){KJUR.asn1.tsp.PKIFailureInfo.superclass.constructor.call(this);var e=KJUR.asn1,r=KJUR.asn1.tsp;if(this.value=null,this.getEncodedHex=function(){if(null==this.value)throw"value shall be specified";var t=new Number(this.value).toString(2),r=new e.DERBitString;return r.setByBinaryString(t),this.hTLV=r.getEncodedHex(),this.hTLV},"undefined"!=typeof t)if("string"==typeof t.name){var n=r.PKIFailureInfo.valueList;if("undefined"==typeof n[t.name])throw"name undefined: "+t.name;this.value=n[t.name]}else"number"==typeof t["int"]&&(this.value=t["int"])},nn.lang.extend(KJUR.asn1.tsp.PKIFailureInfo,KJUR.asn1.ASN1Object),KJUR.asn1.tsp.PKIFailureInfo.valueList={badAlg:0,badRequest:2,badDataFormat:5,timeNotAvailable:14,unacceptedPolicy:15,unacceptedExtension:16,addInfoNotAvailable:17,systemFailure:25},KJUR.asn1.tsp.AbstractTSAAdapter=function(t){this.getTSTHex=function(t,e){throw"not implemented yet"}},KJUR.asn1.tsp.SimpleTSAAdapter=function(t){KJUR.asn1.tsp.SimpleTSAAdapter.superclass.constructor.call(this),this.params=null,this.serial=0,this.getTSTHex=function(t,e){var r=KJUR.crypto.Util.hashHex(t,e);this.params.tstInfo.messageImprint={hashAlg:e,hashValue:r},this.params.tstInfo.serialNumber={"int":this.serial++};var n=Math.floor(1e9*Math.random());this.params.tstInfo.nonce={"int":n};var i=KJUR.asn1.tsp.TSPUtil.newTimeStampToken(this.params);return i.getContentInfoEncodedHex()},"undefined"!=typeof t&&(this.params=t)},nn.lang.extend(KJUR.asn1.tsp.SimpleTSAAdapter,KJUR.asn1.tsp.AbstractTSAAdapter),KJUR.asn1.tsp.FixedTSAAdapter=function(t){KJUR.asn1.tsp.FixedTSAAdapter.superclass.constructor.call(this),this.params=null,this.getTSTHex=function(t,e){var r=KJUR.crypto.Util.hashHex(t,e);this.params.tstInfo.messageImprint={hashAlg:e,hashValue:r};var n=KJUR.asn1.tsp.TSPUtil.newTimeStampToken(this.params);return n.getContentInfoEncodedHex()},"undefined"!=typeof t&&(this.params=t)},nn.lang.extend(KJUR.asn1.tsp.FixedTSAAdapter,KJUR.asn1.tsp.AbstractTSAAdapter),KJUR.asn1.tsp.TSPUtil=new function(){},KJUR.asn1.tsp.TSPUtil.newTimeStampToken=function(t){var e=KJUR.asn1.cms,r=KJUR.asn1.tsp,n=new e.SignedData,i=new r.TSTInfo(t.tstInfo),s=i.getEncodedHex();if(n.dEncapContentInfo.setContentValue({hex:s}),n.dEncapContentInfo.setContentType("tstinfo"),"object"==typeof t.certs)for(var o=0;o<t.certs.length;o++)n.addCertificatesByPEM(t.certs[o]);var a=n.signerInfoList[0];a.setSignerIdentifier(t.signerCert),a.setForContentAndHash({sdObj:n,eciObj:n.dEncapContentInfo,hashAlg:t.hashAlg});var u=new e.SigningCertificate({array:[t.signerCert]});return a.dSignedAttrs.add(u),a.sign(t.signerPrvKey,t.sigAlg),n},KJUR.asn1.tsp.TSPUtil.parseTimeStampReq=function(t){var e={};e.certreq=!1;var r=Fn.getPosArrayOfChildren_AtObj(t,0);if(r.length<2)throw"TimeStampReq must have at least 2 items";var n=Fn.getHexOfTLV_AtObj(t,r[1]);e.mi=KJUR.asn1.tsp.TSPUtil.parseMessageImprint(n);for(var i=2;i<r.length;i++){var s=r[i],o=t.substr(s,2);if("06"==o){var a=Fn.getHexOfV_AtObj(t,s);e.policy=Fn.hextooidstr(a)}"02"==o&&(e.nonce=Fn.getHexOfV_AtObj(t,s)),"01"==o&&(e.certreq=!0)}return e},KJUR.asn1.tsp.TSPUtil.parseMessageImprint=function(t){var e={};if("30"!=t.substr(0,2))throw"head of messageImprint hex shall be '30'";var r=(Fn.getPosArrayOfChildren_AtObj(t,0),Fn.getDecendantIndexByNthList(t,0,[0,0])),n=Fn.getHexOfV_AtObj(t,r),i=Fn.hextooidstr(n),s=KJUR.asn1.x509.OID.oid2name(i);if(""==s)throw"hashAlg name undefined: "+i;var o=s,a=Fn.getDecendantIndexByNthList(t,0,[1]);return e.hashAlg=o,e.hashValue=Fn.getHexOfV_AtObj(t,a),e},"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.asn1&&KJUR.asn1||(KJUR.asn1={}),"undefined"!=typeof KJUR.asn1.cades&&KJUR.asn1.cades||(KJUR.asn1.cades={}),KJUR.asn1.cades.SignaturePolicyIdentifier=function(t){KJUR.asn1.cades.SignaturePolicyIdentifier.superclass.constructor.call(this),this.attrTypeOid="1.2.840.113549.1.9.16.2.15";var e=KJUR.asn1,r=KJUR.asn1.cades;if("undefined"!=typeof t&&"string"==typeof t.oid&&"object"==typeof t.hash){var n=new e.DERObjectIdentifier({oid:t.oid}),i=new r.OtherHashAlgAndValue(t.hash),s=new e.DERSequence({array:[n,i]});this.valueList=[s]}},nn.lang.extend(KJUR.asn1.cades.SignaturePolicyIdentifier,KJUR.asn1.cms.Attribute),KJUR.asn1.cades.OtherHashAlgAndValue=function(t){KJUR.asn1.cades.OtherHashAlgAndValue.superclass.constructor.call(this);var e=KJUR.asn1,r=KJUR.asn1.x509;this.dAlg=null,this.dHash=null,this.getEncodedHex=function(){var t=new e.DERSequence({array:[this.dAlg,this.dHash]});return this.hTLV=t.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&"string"==typeof t.alg&&"string"==typeof t.hash&&(this.dAlg=new r.AlgorithmIdentifier({name:t.alg}),this.dHash=new e.DEROctetString({hex:t.hash}))},nn.lang.extend(KJUR.asn1.cades.OtherHashAlgAndValue,KJUR.asn1.ASN1Object),KJUR.asn1.cades.SignatureTimeStamp=function(t){KJUR.asn1.cades.SignatureTimeStamp.superclass.constructor.call(this),this.attrTypeOid="1.2.840.113549.1.9.16.2.14",this.tstHex=null;var e=KJUR.asn1;if("undefined"!=typeof t){if("undefined"!=typeof t.res)if("string"==typeof t.res&&t.res.match(/^[0-9A-Fa-f]+$/));else if(!(t.res instanceof KJUR.asn1.ASN1Object))throw"res param shall be ASN1Object or hex string";if("undefined"!=typeof t.tst)if("string"==typeof t.tst&&t.tst.match(/^[0-9A-Fa-f]+$/)){var r=new e.ASN1Object;this.tstHex=t.tst,r.hTLV=this.tstHex,r.getEncodedHex(),this.valueList=[r]}else if(!(t.tst instanceof KJUR.asn1.ASN1Object))throw"tst param shall be ASN1Object or hex string"}},nn.lang.extend(KJUR.asn1.cades.SignatureTimeStamp,KJUR.asn1.cms.Attribute),KJUR.asn1.cades.CompleteCertificateRefs=function(t){KJUR.asn1.cades.CompleteCertificateRefs.superclass.constructor.call(this),this.attrTypeOid="1.2.840.113549.1.9.16.2.21";var e=(KJUR.asn1,KJUR.asn1.cades);this.setByArray=function(t){this.valueList=[];for(var r=0;r<t.length;r++){var n=new e.OtherCertID(t[r]);this.valueList.push(n)}},"undefined"!=typeof t&&"object"==typeof t&&"number"==typeof t.length&&this.setByArray(t)},nn.lang.extend(KJUR.asn1.cades.CompleteCertificateRefs,KJUR.asn1.cms.Attribute),KJUR.asn1.cades.OtherCertID=function(t){KJUR.asn1.cades.OtherCertID.superclass.constructor.call(this);var e=KJUR.asn1,r=KJUR.asn1.cms,n=KJUR.asn1.cades;this.hasIssuerSerial=!0,this.dOtherCertHash=null,this.dIssuerSerial=null,this.setByCertPEM=function(t){this.dOtherCertHash=new n.OtherHash(t),this.hasIssuerSerial&&(this.dIssuerSerial=new r.IssuerAndSerialNumber(t))},this.getEncodedHex=function(){if(null!=this.hTLV)return this.hTLV;if(null==this.dOtherCertHash)throw"otherCertHash not set";var t=[this.dOtherCertHash];null!=this.dIssuerSerial&&t.push(this.dIssuerSerial);var r=new e.DERSequence({array:t});return this.hTLV=r.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&("string"==typeof t&&-1!=t.indexOf("-----BEGIN ")&&this.setByCertPEM(t),"object"==typeof t&&(t.hasis===!1&&(this.hasIssuerSerial=!1),"string"==typeof t.cert&&this.setByCertPEM(t.cert)))},nn.lang.extend(KJUR.asn1.cades.OtherCertID,KJUR.asn1.ASN1Object),KJUR.asn1.cades.OtherHash=function(t){KJUR.asn1.cades.OtherHash.superclass.constructor.call(this);var e=KJUR.asn1,r=KJUR.asn1.cades;if(this.alg="sha256",this.dOtherHash=null,this.setByCertPEM=function(t){if(-1==t.indexOf("-----BEGIN "))throw"certPEM not to seem PEM format";var e=Gr.pemToHex(t),n=KJUR.crypto.Util.hashHex(e,this.alg);this.dOtherHash=new r.OtherHashAlgAndValue({alg:this.alg,hash:n})},this.getEncodedHex=function(){if(null==this.dOtherHash)throw"OtherHash not set";return this.dOtherHash.getEncodedHex()},"undefined"!=typeof t)if("string"==typeof t)if(-1!=t.indexOf("-----BEGIN "))this.setByCertPEM(t);else{if(!t.match(/^[0-9A-Fa-f]+$/))throw"unsupported string value for params";this.dOtherHash=new e.DEROctetString({hex:t})}else"object"==typeof t&&("string"==typeof t.cert?("string"==typeof t.alg&&(this.alg=t.alg),this.setByCertPEM(t.cert)):this.dOtherHash=new r.OtherHashAlgAndValue(t))},nn.lang.extend(KJUR.asn1.cades.OtherHash,KJUR.asn1.ASN1Object),KJUR.asn1.cades.CAdESUtil=new function(){},KJUR.asn1.cades.CAdESUtil.addSigTS=function(t,e,r){},KJUR.asn1.cades.CAdESUtil.parseSignedDataForAddingUnsigned=function(t){var e=KJUR.asn1,r=KJUR.asn1.cms,n=KJUR.asn1.cades.CAdESUtil,i={};if("06092a864886f70d010702"!=Fn.getDecendantHexTLVByNthList(t,0,[0]))throw"hex is not CMS SignedData";var s=Fn.getDecendantIndexByNthList(t,0,[1,0]),o=Fn.getPosArrayOfChildren_AtObj(t,s);if(o.length<4)throw"num of SignedData elem shall be 4 at least";var a=o.shift();i.version=Fn.getHexOfTLV_AtObj(t,a);var u=o.shift();i.algs=Fn.getHexOfTLV_AtObj(t,u);var h=o.shift();i.encapcontent=Fn.getHexOfTLV_AtObj(t,h),i.certs=null,i.revs=null,i.si=[];var c=o.shift();"a0"==t.substr(c,2)&&(i.certs=Fn.getHexOfTLV_AtObj(t,c),c=o.shift()),"a1"==t.substr(c,2)&&(i.revs=Fn.getHexOfTLV_AtObj(t,c),c=o.shift());var f=c;if("31"!=t.substr(f,2))throw"Can't find signerInfos";for(var l=Fn.getPosArrayOfChildren_AtObj(t,f),d=0;d<l.length;d++){var p=l[d],g=n.parseSignerInfoForAddingUnsigned(t,p,d);i.si[d]=g}var y=null;i.obj=new r.SignedData,y=new e.ASN1Object,y.hTLV=i.version,i.obj.dCMSVersion=y,y=new e.ASN1Object,y.hTLV=i.algs,i.obj.dDigestAlgs=y,y=new e.ASN1Object,y.hTLV=i.encapcontent,i.obj.dEncapContentInfo=y,y=new e.ASN1Object,y.hTLV=i.certs,i.obj.dCerts=y,i.obj.signerInfoList=[];for(var d=0;d<i.si.length;d++)i.obj.signerInfoList.push(i.si[d].obj);return i},KJUR.asn1.cades.CAdESUtil.parseSignerInfoForAddingUnsigned=function(t,e,r){var n=KJUR.asn1,i=KJUR.asn1.cms,s={},o=Fn.getPosArrayOfChildren_AtObj(t,e);if(6!=o.length)throw"not supported items for SignerInfo (!=6)";var a=o.shift();s.version=Fn.getHexOfTLV_AtObj(t,a);var u=o.shift();s.si=Fn.getHexOfTLV_AtObj(t,u);var h=o.shift();s.digalg=Fn.getHexOfTLV_AtObj(t,h);var c=o.shift();s.sattrs=Fn.getHexOfTLV_AtObj(t,c);var f=o.shift();s.sigalg=Fn.getHexOfTLV_AtObj(t,f);var l=o.shift();s.sig=Fn.getHexOfTLV_AtObj(t,l),s.sigval=Fn.getHexOfV_AtObj(t,l);var d=null;return s.obj=new i.SignerInfo,d=new n.ASN1Object,d.hTLV=s.version,s.obj.dCMSVersion=d,d=new n.ASN1Object,d.hTLV=s.si,s.obj.dSignerIdentifier=d,d=new n.ASN1Object,d.hTLV=s.digalg,s.obj.dDigestAlgorithm=d,d=new n.ASN1Object,d.hTLV=s.sattrs,s.obj.dSignedAttrs=d,d=new n.ASN1Object,d.hTLV=s.sigalg,s.obj.dSigAlg=d,d=new n.ASN1Object,d.hTLV=s.sig,s.obj.dSig=d,s.obj.dUnsignedAttrs=new i.AttributeList,s},"undefined"!=typeof KJUR.asn1.csr&&KJUR.asn1.csr||(KJUR.asn1.csr={}),KJUR.asn1.csr.CertificationRequest=function(t){KJUR.asn1.csr.CertificationRequest.superclass.constructor.call(this),this.sign=function(t,e){null==this.prvKey&&(this.prvKey=e),this.asn1SignatureAlg=new KJUR.asn1.x509.AlgorithmIdentifier({name:t}),sig=new KJUR.crypto.Signature({alg:t}),sig.initSign(this.prvKey),sig.updateHex(this.asn1CSRInfo.getEncodedHex()),this.hexSig=sig.sign(),this.asn1Sig=new KJUR.asn1.DERBitString({hex:"00"+this.hexSig});var r=new KJUR.asn1.DERSequence({array:[this.asn1CSRInfo,this.asn1SignatureAlg,this.asn1Sig]});this.hTLV=r.getEncodedHex(),this.isModified=!1},this.getPEMString=function(){var t=KJUR.asn1.ASN1Util.getPEMStringFromHex(this.getEncodedHex(),"CERTIFICATE REQUEST");return t},this.getEncodedHex=function(){if(0==this.isModified&&null!=this.hTLV)return this.hTLV;throw"not signed yet"},"undefined"!=typeof t&&"undefined"!=typeof t.csrinfo&&(this.asn1CSRInfo=t.csrinfo)},nn.lang.extend(KJUR.asn1.csr.CertificationRequest,KJUR.asn1.ASN1Object),KJUR.asn1.csr.CertificationRequestInfo=function(t){KJUR.asn1.csr.CertificationRequestInfo.superclass.constructor.call(this),this._initialize=function(){this.asn1Array=new Array,this.asn1Version=new KJUR.asn1.DERInteger({"int":0}),this.asn1Subject=null,this.asn1SubjPKey=null,this.extensionsArray=new Array},this.setSubjectByParam=function(t){this.asn1Subject=new KJUR.asn1.x509.X500Name(t)},this.setSubjectPublicKeyByGetKey=function(t){var e=In.getKey(t);this.asn1SubjPKey=new KJUR.asn1.x509.SubjectPublicKeyInfo(e)},this.getEncodedHex=function(){this.asn1Array=new Array,this.asn1Array.push(this.asn1Version),this.asn1Array.push(this.asn1Subject),this.asn1Array.push(this.asn1SubjPKey);var t=new KJUR.asn1.DERSequence({array:this.extensionsArray}),e=new KJUR.asn1.DERTaggedObject({explicit:!1,tag:"a0",obj:t});this.asn1Array.push(e);var r=new KJUR.asn1.DERSequence({array:this.asn1Array});return this.hTLV=r.getEncodedHex(),this.isModified=!1,this.hTLV},this._initialize()},nn.lang.extend(KJUR.asn1.csr.CertificationRequestInfo,KJUR.asn1.ASN1Object),KJUR.asn1.csr.CSRUtil=new function(){},KJUR.asn1.csr.CSRUtil.newCSRPEM=function(t){var e=KJUR.asn1.csr;if(void 0===t.subject)throw"parameter subject undefined";if(void 0===t.sbjpubkey)throw"parameter sbjpubkey undefined";if(void 0===t.sigalg)throw"parameter sigalg undefined";if(void 0===t.sbjprvkey)throw"parameter sbjpubkey undefined";var r=new e.CertificationRequestInfo;r.setSubjectByParam(t.subject),r.setSubjectPublicKeyByGetKey(t.sbjpubkey);var n=new e.CertificationRequest({csrinfo:r}),i=In.getKey(t.sbjprvkey);n.sign(t.sigalg,i);var s=n.getPEMString();return s};var Kn,Un;"function"==typeof t?(Kn=function(e){return fr(new t(e,"utf8").toString("base64"))},Un=function(e){return new t(lr(e),"base64").toString("utf8")}):(Kn=function(t){return dr(Er(wr(t)))},Un=function(t){return decodeURIComponent(br(pr(t)))});var On=function(t,e){var r=t.length;t.length>e.length&&(r=e.length);for(var n=0;r>n;n++)if(t.charCodeAt(n)!=e.charCodeAt(n))return n;return t.length!=e.length?r:-1};"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.crypto&&KJUR.crypto||(KJUR.crypto={}),KJUR.crypto.Util=new function(){this.DIGESTINFOHEAD={sha1:"3021300906052b0e03021a05000414",sha224:"302d300d06096086480165030402040500041c",sha256:"3031300d060960864801650304020105000420",sha384:"3041300d060960864801650304020205000430",sha512:"3051300d060960864801650304020305000440",md2:"3020300c06082a864886f70d020205000410",md5:"3020300c06082a864886f70d020505000410",ripemd160:"3021300906052b2403020105000414"},this.DEFAULTPROVIDER={md5:"cryptojs",sha1:"cryptojs",sha224:"cryptojs",sha256:"cryptojs",sha384:"cryptojs",sha512:"cryptojs",ripemd160:"cryptojs",hmacmd5:"cryptojs",hmacsha1:"cryptojs",hmacsha224:"cryptojs",hmacsha256:"cryptojs",hmacsha384:"cryptojs",hmacsha512:"cryptojs",hmacripemd160:"cryptojs",MD5withRSA:"cryptojs/jsrsa",SHA1withRSA:"cryptojs/jsrsa",SHA224withRSA:"cryptojs/jsrsa",SHA256withRSA:"cryptojs/jsrsa",SHA384withRSA:"cryptojs/jsrsa",SHA512withRSA:"cryptojs/jsrsa",RIPEMD160withRSA:"cryptojs/jsrsa",MD5withECDSA:"cryptojs/jsrsa",SHA1withECDSA:"cryptojs/jsrsa",SHA224withECDSA:"cryptojs/jsrsa",SHA256withECDSA:"cryptojs/jsrsa",SHA384withECDSA:"cryptojs/jsrsa",SHA512withECDSA:"cryptojs/jsrsa",RIPEMD160withECDSA:"cryptojs/jsrsa",SHA1withDSA:"cryptojs/jsrsa",SHA224withDSA:"cryptojs/jsrsa",SHA256withDSA:"cryptojs/jsrsa",MD5withRSAandMGF1:"cryptojs/jsrsa",SHA1withRSAandMGF1:"cryptojs/jsrsa",SHA224withRSAandMGF1:"cryptojs/jsrsa",SHA256withRSAandMGF1:"cryptojs/jsrsa",SHA384withRSAandMGF1:"cryptojs/jsrsa",SHA512withRSAandMGF1:"cryptojs/jsrsa",RIPEMD160withRSAandMGF1:"cryptojs/jsrsa"},this.CRYPTOJSMESSAGEDIGESTNAME={md5:sn.algo.MD5,sha1:sn.algo.SHA1,sha224:sn.algo.SHA224,sha256:sn.algo.SHA256,sha384:sn.algo.SHA384,sha512:sn.algo.SHA512,ripemd160:sn.algo.RIPEMD160},this.getDigestInfoHex=function(t,e){if("undefined"==typeof this.DIGESTINFOHEAD[e])throw"alg not supported in Util.DIGESTINFOHEAD: "+e;return this.DIGESTINFOHEAD[e]+t},this.getPaddedDigestInfoHex=function(t,e,r){var n=this.getDigestInfoHex(t,e),i=r/4;if(n.length+22>i)throw"key is too short for SigAlg: keylen="+r+","+e;for(var s="0001",o="00"+n,a="",u=i-s.length-o.length,h=0;u>h;h+=2)a+="ff";var c=s+a+o;return c},this.hashString=function(t,e){var r=new KJUR.crypto.MessageDigest({alg:e});return r.digestString(t)},this.hashHex=function(t,e){var r=new KJUR.crypto.MessageDigest({alg:e});return r.digestHex(t)},this.sha1=function(t){var e=new KJUR.crypto.MessageDigest({alg:"sha1",prov:"cryptojs"});return e.digestString(t)},this.sha256=function(t){var e=new KJUR.crypto.MessageDigest({alg:"sha256",prov:"cryptojs"});return e.digestString(t)},this.sha256Hex=function(t){var e=new KJUR.crypto.MessageDigest({alg:"sha256",prov:"cryptojs"});return e.digestHex(t)},this.sha512=function(t){var e=new KJUR.crypto.MessageDigest({alg:"sha512",prov:"cryptojs"});return e.digestString(t)},this.sha512Hex=function(t){var e=new KJUR.crypto.MessageDigest({alg:"sha512",prov:"cryptojs"});return e.digestHex(t)},this.md5=function(t){var e=new KJUR.crypto.MessageDigest({alg:"md5",prov:"cryptojs"});return e.digestString(t)},this.ripemd160=function(t){var e=new KJUR.crypto.MessageDigest({alg:"ripemd160",prov:"cryptojs"});return e.digestString(t)},this.getCryptoJSMDByName=function(t){}},KJUR.crypto.MessageDigest=function(t){this.setAlgAndProvider=function(t,e){if(null!=t&&void 0===e&&(e=KJUR.crypto.Util.DEFAULTPROVIDER[t]),-1!=":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(t)&&"cryptojs"==e){try{this.md=KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[t].create()}catch(r){throw"setAlgAndProvider hash alg set fail alg="+t+"/"+r}this.updateString=function(t){this.md.update(t)},this.updateHex=function(t){var e=sn.enc.Hex.parse(t);this.md.update(e)},this.digest=function(){var t=this.md.finalize();return t.toString(sn.enc.Hex)},this.digestString=function(t){return this.updateString(t),this.digest()},this.digestHex=function(t){return this.updateHex(t),this.digest()}}if(-1!=":sha256:".indexOf(t)&&"sjcl"==e){try{this.md=new sjcl.hash.sha256}catch(r){throw"setAlgAndProvider hash alg set fail alg="+t+"/"+r}this.updateString=function(t){this.md.update(t)},this.updateHex=function(t){var e=sjcl.codec.hex.toBits(t);this.md.update(e)},this.digest=function(){var t=this.md.finalize();return sjcl.codec.hex.fromBits(t)},this.digestString=function(t){return this.updateString(t),this.digest()},this.digestHex=function(t){return this.updateHex(t),this.digest()}}},this.updateString=function(t){throw"updateString(str) not supported for this alg/prov: "+this.algName+"/"+this.provName},this.updateHex=function(t){throw"updateHex(hex) not supported for this alg/prov: "+this.algName+"/"+this.provName},this.digest=function(){throw"digest() not supported for this alg/prov: "+this.algName+"/"+this.provName},this.digestString=function(t){throw"digestString(str) not supported for this alg/prov: "+this.algName+"/"+this.provName},this.digestHex=function(t){throw"digestHex(hex) not supported for this alg/prov: "+this.algName+"/"+this.provName},void 0!==t&&void 0!==t.alg&&(this.algName=t.alg,void 0===t.prov&&(this.provName=KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]),this.setAlgAndProvider(this.algName,this.provName))},KJUR.crypto.Mac=function(t){this.setAlgAndProvider=function(t,e){if(t=t.toLowerCase(),null==t&&(t="hmacsha1"),t=t.toLowerCase(),"hmac"!=t.substr(0,4))throw"setAlgAndProvider unsupported HMAC alg: "+t;void 0===e&&(e=KJUR.crypto.Util.DEFAULTPROVIDER[t]),this.algProv=t+"/"+e;var r=t.substr(4);if(-1!=":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(r)&&"cryptojs"==e){try{var n=KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[r];this.mac=sn.algo.HMAC.create(n,this.pass)}catch(i){throw"setAlgAndProvider hash alg set fail hashAlg="+r+"/"+i}this.updateString=function(t){this.mac.update(t)},this.updateHex=function(t){var e=sn.enc.Hex.parse(t);this.mac.update(e)},this.doFinal=function(){var t=this.mac.finalize();return t.toString(sn.enc.Hex)},this.doFinalString=function(t){return this.updateString(t),this.doFinal()},this.doFinalHex=function(t){return this.updateHex(t),this.doFinal()}}},this.updateString=function(t){throw"updateString(str) not supported for this alg/prov: "+this.algProv},this.updateHex=function(t){throw"updateHex(hex) not supported for this alg/prov: "+this.algProv},this.doFinal=function(){throw"digest() not supported for this alg/prov: "+this.algProv},this.doFinalString=function(t){throw"digestString(str) not supported for this alg/prov: "+this.algProv},this.doFinalHex=function(t){throw"digestHex(hex) not supported for this alg/prov: "+this.algProv},this.setPassword=function(t){if("string"==typeof t){var e=t;return t.length%2!=1&&t.match(/^[0-9A-Fa-f]+$/)||(e=_r(t)),void(this.pass=sn.enc.Hex.parse(e))}if("object"!=typeof t)throw"KJUR.crypto.Mac unsupported password type: "+t;var e=null;if(void 0!==t.hex){if(t.hex.length%2!=0||!t.hex.match(/^[0-9A-Fa-f]+$/))throw"Mac: wrong hex password: "+t.hex;e=t.hex}if(void 0!==t.utf8&&(e=vr(t.utf8)),void 0!==t.rstr&&(e=_r(t.rstr)),void 0!==t.b64&&(e=i(t.b64)),void 0!==t.b64u&&(e=pr(t.b64u)),null==e)throw"KJUR.crypto.Mac unsupported password type: "+t;this.pass=sn.enc.Hex.parse(e)},void 0!==t&&(void 0!==t.pass&&this.setPassword(t.pass),void 0!==t.alg&&(this.algName=t.alg,void 0===t.prov&&(this.provName=KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]),this.setAlgAndProvider(this.algName,this.provName)))},KJUR.crypto.Signature=function(t){var e=null;if(this._setAlgNames=function(){this.algName.match(/^(.+)with(.+)$/)&&(this.mdAlgName=RegExp.$1.toLowerCase(),this.pubkeyAlgName=RegExp.$2.toLowerCase())},this._zeroPaddingOfSignature=function(t,e){for(var r="",n=e/4-t.length,i=0;n>i;i++)r+="0";return r+t},this.setAlgAndProvider=function(t,e){if(this._setAlgNames(),"cryptojs/jsrsa"!=e)throw"provider not supported: "+e;if(-1!=":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(this.mdAlgName)){try{this.md=new KJUR.crypto.MessageDigest({alg:this.mdAlgName})}catch(r){throw"setAlgAndProvider hash alg set fail alg="+this.mdAlgName+"/"+r}this.init=function(t,e){var r=null;try{r=void 0===e?In.getKey(t):In.getKey(t,e)}catch(n){throw"init failed:"+n}if(r.isPrivate===!0)this.prvKey=r,this.state="SIGN";else{if(r.isPublic!==!0)throw"init failed.:"+r;this.pubKey=r,this.state="VERIFY"}},this.initSign=function(t){"string"==typeof t.ecprvhex&&"string"==typeof t.eccurvename?(this.ecprvhex=t.ecprvhex,this.eccurvename=t.eccurvename):this.prvKey=t,this.state="SIGN"},this.initVerifyByPublicKey=function(t){"string"==typeof t.ecpubhex&&"string"==typeof t.eccurvename?(this.ecpubhex=t.ecpubhex,this.eccurvename=t.eccurvename):t instanceof KJUR.crypto.ECDSA?this.pubKey=t:t instanceof ve&&(this.pubKey=t),this.state="VERIFY"},this.initVerifyByCertificatePEM=function(t){var e=new Gr;e.readCertPEM(t),this.pubKey=e.subjectPublicKeyRSA,this.state="VERIFY"},this.updateString=function(t){this.md.updateString(t)},this.updateHex=function(t){this.md.updateHex(t)},this.sign=function(){if(this.sHashHex=this.md.digest(),"undefined"!=typeof this.ecprvhex&&"undefined"!=typeof this.eccurvename){var t=new KJUR.crypto.ECDSA({curve:this.eccurvename});this.hSign=t.signHex(this.sHashHex,this.ecprvhex)}else if(this.prvKey instanceof ve&&"rsaandmgf1"==this.pubkeyAlgName)this.hSign=this.prvKey.signWithMessageHashPSS(this.sHashHex,this.mdAlgName,this.pssSaltLen);else if(this.prvKey instanceof ve&&"rsa"==this.pubkeyAlgName)this.hSign=this.prvKey.signWithMessageHash(this.sHashHex,this.mdAlgName);else if(this.prvKey instanceof KJUR.crypto.ECDSA)this.hSign=this.prvKey.signWithMessageHash(this.sHashHex);else{if(!(this.prvKey instanceof KJUR.crypto.DSA))throw"Signature: unsupported public key alg: "+this.pubkeyAlgName;this.hSign=this.prvKey.signWithMessageHash(this.sHashHex)}return this.hSign},this.signString=function(t){return this.updateString(t),this.sign()},this.signHex=function(t){return this.updateHex(t),this.sign()},this.verify=function(t){if(this.sHashHex=this.md.digest(),"undefined"!=typeof this.ecpubhex&&"undefined"!=typeof this.eccurvename){var e=new KJUR.crypto.ECDSA({curve:this.eccurvename});return e.verifyHex(this.sHashHex,t,this.ecpubhex)}if(this.pubKey instanceof ve&&"rsaandmgf1"==this.pubkeyAlgName)return this.pubKey.verifyWithMessageHashPSS(this.sHashHex,t,this.mdAlgName,this.pssSaltLen);if(this.pubKey instanceof ve&&"rsa"==this.pubkeyAlgName)return this.pubKey.verifyWithMessageHash(this.sHashHex,t);if(this.pubKey instanceof KJUR.crypto.ECDSA)return this.pubKey.verifyWithMessageHash(this.sHashHex,t);if(this.pubKey instanceof KJUR.crypto.DSA)return this.pubKey.verifyWithMessageHash(this.sHashHex,t);throw"Signature: unsupported public key alg: "+this.pubkeyAlgName}}},this.init=function(t,e){throw"init(key, pass) not supported for this alg:prov="+this.algProvName},this.initVerifyByPublicKey=function(t){throw"initVerifyByPublicKey(rsaPubKeyy) not supported for this alg:prov="+this.algProvName},this.initVerifyByCertificatePEM=function(t){throw"initVerifyByCertificatePEM(certPEM) not supported for this alg:prov="+this.algProvName},this.initSign=function(t){throw"initSign(prvKey) not supported for this alg:prov="+this.algProvName},this.updateString=function(t){throw"updateString(str) not supported for this alg:prov="+this.algProvName},this.updateHex=function(t){throw"updateHex(hex) not supported for this alg:prov="+this.algProvName},this.sign=function(){throw"sign() not supported for this alg:prov="+this.algProvName},this.signString=function(t){throw"digestString(str) not supported for this alg:prov="+this.algProvName},this.signHex=function(t){throw"digestHex(hex) not supported for this alg:prov="+this.algProvName},this.verify=function(t){throw"verify(hSigVal) not supported for this alg:prov="+this.algProvName},this.initParams=t,void 0!==t&&(void 0!==t.alg&&(this.algName=t.alg,void 0===t.prov?this.provName=KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]:this.provName=t.prov,this.algProvName=this.algName+":"+this.provName,this.setAlgAndProvider(this.algName,this.provName),this._setAlgNames()),void 0!==t.psssaltlen&&(this.pssSaltLen=t.psssaltlen),void 0!==t.prvkeypem)){if(void 0!==t.prvkeypas)throw"both prvkeypem and prvkeypas parameters not supported";try{var e=new ve;e.readPrivateKeyFromPEMString(t.prvkeypem),this.initSign(e)}catch(r){throw"fatal error to load pem private key: "+r}}},KJUR.crypto.OID=new function(){this.oidhex2name={"2a864886f70d010101":"rsaEncryption","2a8648ce3d0201":"ecPublicKey","2a8648ce380401":"dsa","2a8648ce3d030107":"secp256r1","2b8104001f":"secp192k1","2b81040021":"secp224r1","2b8104000a":"secp256k1","2b81040023":"secp521r1","2b81040022":"secp384r1","2a8648ce380403":"SHA1withDSA","608648016503040301":"SHA224withDSA","608648016503040302":"SHA256withDSA"}},"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.crypto&&KJUR.crypto||(KJUR.crypto={}),KJUR.crypto.ECDSA=function(t){var e="secp256r1",r=new le;this.type="EC",this.getBigRandom=function(t){return new o(t.bitLength(),r).mod(t.subtract(o.ONE)).add(o.ONE)},this.setNamedCurve=function(t){this.ecparams=KJUR.crypto.ECParameterDB.getByName(t),this.prvKeyHex=null,this.pubKeyHex=null,this.curveName=t},this.setPrivateKeyHex=function(t){this.isPrivate=!0,this.prvKeyHex=t},this.setPublicKeyHex=function(t){this.isPublic=!0,this.pubKeyHex=t},this.generateKeyPairHex=function(){var t=this.ecparams.n,e=this.getBigRandom(t),r=this.ecparams.G.multiply(e),n=r.getX().toBigInteger(),i=r.getY().toBigInteger(),s=this.ecparams.keylen/4,o=("0000000000"+e.toString(16)).slice(-s),a=("0000000000"+n.toString(16)).slice(-s),u=("0000000000"+i.toString(16)).slice(-s),h="04"+a+u;return this.setPrivateKeyHex(o),this.setPublicKeyHex(h),{ecprvhex:o,ecpubhex:h}},this.signWithMessageHash=function(t){return this.signHex(t,this.prvKeyHex)},this.signHex=function(t,e){var r=new o(e,16),n=this.ecparams.n,i=new o(t,16);do var s=this.getBigRandom(n),a=this.ecparams.G,u=a.multiply(s),h=u.getX().toBigInteger().mod(n);while(h.compareTo(o.ZERO)<=0);var c=s.modInverse(n).multiply(i.add(r.multiply(h))).mod(n);return KJUR.crypto.ECDSA.biRSSigToASN1Sig(h,c)},this.sign=function(t,e){var r=e,n=this.ecparams.n,i=o.fromByteArrayUnsigned(t);do var s=this.getBigRandom(n),a=this.ecparams.G,u=a.multiply(s),h=u.getX().toBigInteger().mod(n);while(h.compareTo(o.ZERO)<=0);var c=s.modInverse(n).multiply(i.add(r.multiply(h))).mod(n);return this.serializeSig(h,c)},this.verifyWithMessageHash=function(t,e){return this.verifyHex(t,e,this.pubKeyHex)},this.verifyHex=function(t,e,r){var n,i,s=KJUR.crypto.ECDSA.parseSigHex(e);n=s.r,i=s.s;var a;a=ke.decodeFromHex(this.ecparams.curve,r);var u=new o(t,16);return this.verifyRaw(u,n,i,a)},this.verify=function(t,e,r){var n,i;if(Bitcoin.Util.isArray(e)){var s=this.parseSig(e);n=s.r,i=s.s}else{if("object"!=typeof e||!e.r||!e.s)throw"Invalid value for signature";n=e.r,i=e.s}var a;if(r instanceof ke)a=r;else{if(!Bitcoin.Util.isArray(r))throw"Invalid format for pubkey value, must be byte array or ECPointFp";a=ke.decodeFrom(this.ecparams.curve,r)}var u=o.fromByteArrayUnsigned(t);return this.verifyRaw(u,n,i,a)},this.verifyRaw=function(t,e,r,n){var i=this.ecparams.n,s=this.ecparams.G;if(e.compareTo(o.ONE)<0||e.compareTo(i)>=0)return!1;if(r.compareTo(o.ONE)<0||r.compareTo(i)>=0)return!1;var a=r.modInverse(i),u=t.multiply(a).mod(i),h=e.multiply(a).mod(i),c=s.multiply(u).add(n.multiply(h)),f=c.getX().toBigInteger().mod(i);return f.equals(e)},this.serializeSig=function(t,e){var r=t.toByteArraySigned(),n=e.toByteArraySigned(),i=[];return i.push(2),
	i.push(r.length),i=i.concat(r),i.push(2),i.push(n.length),i=i.concat(n),i.unshift(i.length),i.unshift(48),i},this.parseSig=function(t){var e;if(48!=t[0])throw new Error("Signature not a valid DERSequence");if(e=2,2!=t[e])throw new Error("First element in signature must be a DERInteger");var r=t.slice(e+2,e+2+t[e+1]);if(e+=2+t[e+1],2!=t[e])throw new Error("Second element in signature must be a DERInteger");var n=t.slice(e+2,e+2+t[e+1]);e+=2+t[e+1];var i=o.fromByteArrayUnsigned(r),s=o.fromByteArrayUnsigned(n);return{r:i,s:s}},this.parseSigCompact=function(t){if(65!==t.length)throw"Signature has the wrong length";var e=t[0]-27;if(0>e||e>7)throw"Invalid signature type";var r=this.ecparams.n,n=o.fromByteArrayUnsigned(t.slice(1,33)).mod(r),i=o.fromByteArrayUnsigned(t.slice(33,65)).mod(r);return{r:n,s:i,i:e}},void 0!==t&&void 0!==t.curve&&(this.curveName=t.curve),void 0===this.curveName&&(this.curveName=e),this.setNamedCurve(this.curveName),void 0!==t&&(void 0!==t.prv&&this.setPrivateKeyHex(t.prv),void 0!==t.pub&&this.setPublicKeyHex(t.pub))},KJUR.crypto.ECDSA.parseSigHex=function(t){var e=KJUR.crypto.ECDSA.parseSigHexInHexRS(t),r=new o(e.r,16),n=new o(e.s,16);return{r:r,s:n}},KJUR.crypto.ECDSA.parseSigHexInHexRS=function(t){if("30"!=t.substr(0,2))throw"signature is not a ASN.1 sequence";var e=Fn.getPosArrayOfChildren_AtObj(t,0);if(2!=e.length)throw"number of signature ASN.1 sequence elements seem wrong";var r=e[0],n=e[1];if("02"!=t.substr(r,2))throw"1st item of sequene of signature is not ASN.1 integer";if("02"!=t.substr(n,2))throw"2nd item of sequene of signature is not ASN.1 integer";var i=Fn.getHexOfV_AtObj(t,r),s=Fn.getHexOfV_AtObj(t,n);return{r:i,s:s}},KJUR.crypto.ECDSA.asn1SigToConcatSig=function(t){var e=KJUR.crypto.ECDSA.parseSigHexInHexRS(t),r=e.r,n=e.s;if("00"==r.substr(0,2)&&r.length/2*8%128==8&&(r=r.substr(2)),"00"==n.substr(0,2)&&n.length/2*8%128==8&&(n=n.substr(2)),r.length/2*8%128!=0)throw"unknown ECDSA sig r length error";if(n.length/2*8%128!=0)throw"unknown ECDSA sig s length error";return r+n},KJUR.crypto.ECDSA.concatSigToASN1Sig=function(t){if(t.length/2*8%128!=0)throw"unknown ECDSA concatinated r-s sig  length error";var e=t.substr(0,t.length/2),r=t.substr(t.length/2);return KJUR.crypto.ECDSA.hexRSSigToASN1Sig(e,r)},KJUR.crypto.ECDSA.hexRSSigToASN1Sig=function(t,e){var r=new o(t,16),n=new o(e,16);return KJUR.crypto.ECDSA.biRSSigToASN1Sig(r,n)},KJUR.crypto.ECDSA.biRSSigToASN1Sig=function(t,e){var r=new KJUR.asn1.DERInteger({bigint:t}),n=new KJUR.asn1.DERInteger({bigint:e}),i=new KJUR.asn1.DERSequence({array:[r,n]});return i.getEncodedHex()},"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.crypto&&KJUR.crypto||(KJUR.crypto={}),KJUR.crypto.ECParameterDB=new function(){function t(t){return new o(t,16)}var e={},r={};this.getByName=function(t){var n=t;if("undefined"!=typeof r[n]&&(n=r[t]),"undefined"!=typeof e[n])return e[n];throw"unregistered EC curve name: "+n},this.regist=function(n,i,s,o,a,u,h,c,f,l,d,p){e[n]={};var g=t(s),y=t(o),v=t(a),m=t(u),S=t(h),_=new Xe(g,y,v),E=_.decodePointHex("04"+c+f);e[n].name=n,e[n].keylen=i,e[n].curve=_,e[n].G=E,e[n].n=m,e[n].h=S,e[n].oid=d,e[n].info=p;for(var b=0;b<l.length;b++)r[l[b]]=n}},KJUR.crypto.ECParameterDB.regist("secp128r1",128,"FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF","FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC","E87579C11079F43DD824993C2CEE5ED3","FFFFFFFE0000000075A30D1B9038A115","1","161FF7528B899B2D0C28607CA52C5B86","CF5AC8395BAFEB13C02DA292DDED7A83",[],"","secp128r1 : SECG curve over a 128 bit prime field"),KJUR.crypto.ECParameterDB.regist("secp160k1",160,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73","0","7","0100000000000000000001B8FA16DFAB9ACA16B6B3","1","3B4C382CE37AA192A4019E763036F4F5DD4D7EBB","938CF935318FDCED6BC28286531733C3F03C4FEE",[],"","secp160k1 : SECG curve over a 160 bit prime field"),KJUR.crypto.ECParameterDB.regist("secp160r1",160,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC","1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45","0100000000000000000001F4C8F927AED3CA752257","1","4A96B5688EF573284664698968C38BB913CBFC82","23A628553168947D59DCC912042351377AC5FB32",[],"","secp160r1 : SECG curve over a 160 bit prime field"),KJUR.crypto.ECParameterDB.regist("secp192k1",192,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37","0","3","FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D","1","DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D","9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D",[]),KJUR.crypto.ECParameterDB.regist("secp192r1",192,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC","64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1","FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831","1","188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012","07192B95FFC8DA78631011ED6B24CDD573F977A11E794811",[]),KJUR.crypto.ECParameterDB.regist("secp224r1",224,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE","B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4","FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D","1","B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21","BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34",[]),KJUR.crypto.ECParameterDB.regist("secp256k1",256,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F","0","7","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141","1","79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798","483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8",[]),KJUR.crypto.ECParameterDB.regist("secp256r1",256,"FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF","FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC","5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B","FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551","1","6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296","4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5",["NIST P-256","P-256","prime256v1"]),KJUR.crypto.ECParameterDB.regist("secp384r1",384,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC","B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973","1","AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7","3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f",["NIST P-384","P-384"]),KJUR.crypto.ECParameterDB.regist("secp521r1",521,"1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF","1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC","051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00","1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409","1","C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66","011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650",["NIST P-521","P-521"]),"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.crypto&&KJUR.crypto||(KJUR.crypto={}),KJUR.crypto.DSA=function(){function t(t,e,r,i,s,a){var u=KJUR.crypto.Util.hashString(e,t.toLowerCase()),u=u.substr(0,s.bitLength()/4),h=new o(u,16),c=n(o.ONE.add(o.ONE),s.subtract(o.ONE)),f=r.modPow(c,i).mod(s),l=c.modInverse(s).multiply(h.add(a.multiply(f))).mod(s),d=new Array;return d[0]=f,d[1]=l,d}function e(t){var e=openpgp.config.config.prefer_hash_algorithm;switch(Math.round(t.bitLength()/8)){case 20:return 2!=e&&e>11&&10!=e&&8>e?2:e;case 28:return e>11&&8>e?11:e;case 32:return e>10&&8>e?8:e;default:return util.print_debug("DSA select hash algorithm: returning null for an unknown length of q"),null}}function r(t,e,r,n,i,s,a,u){var h=KJUR.crypto.Util.hashString(n,t.toLowerCase()),h=h.substr(0,s.bitLength()/4),c=new o(h,16);if(o.ZERO.compareTo(e)>0||e.compareTo(s)>0||o.ZERO.compareTo(r)>0||r.compareTo(s)>0)return util.print_error("invalid DSA Signature"),null;var f=r.modInverse(s),l=c.multiply(f).mod(s),d=e.multiply(f).mod(s),p=a.modPow(l,i).multiply(u.modPow(d,i)).mod(i).mod(s);return 0==p.compareTo(e)}function n(t,e){if(!(e.compareTo(t)<=0)){for(var r=e.subtract(t),n=i(r.bitLength());n>r;)n=i(r.bitLength());return t.add(n)}}function i(t){if(0>t)return null;var e=Math.floor((t+7)/8),r=s(e);return t%8>0&&(r=String.fromCharCode(Math.pow(2,t%8)-1&r.charCodeAt(0))+r.substring(1)),new o(u(r),16)}function s(t){for(var e="",r=0;t>r;r++)e+=String.fromCharCode(a());return e}function a(){var t=new Uint32Array(1);return rn.crypto.getRandomValues(t),255&t[0]}function u(t){if(null==t)return"";for(var e,r=[],n=t.length,i=0;n>i;){for(e=t[i++].charCodeAt().toString(16);e.length<2;)e="0"+e;r.push(""+e)}return r.join("")}this.p=null,this.q=null,this.g=null,this.y=null,this.x=null,this.type="DSA",this.setPrivate=function(t,e,r,n,i){this.isPrivate=!0,this.p=t,this.q=e,this.g=r,this.y=n,this.x=i},this.setPublic=function(t,e,r,n){this.isPublic=!0,this.p=t,this.q=e,this.g=r,this.y=n,this.x=null},this.signWithMessageHash=function(t){var e=this.p,r=this.q,i=this.g,s=(this.y,this.x),a=(t.substr(0,r.bitLength()/4),new o(t,16)),u=n(o.ONE.add(o.ONE),r.subtract(o.ONE)),h=i.modPow(u,e).mod(r),c=u.modInverse(r).multiply(a.add(s.multiply(h))).mod(r),f=KJUR.asn1.ASN1Util.jsonToASN1HEX({seq:[{"int":{bigint:h}},{"int":{bigint:c}}]});return f},this.verifyWithMessageHash=function(t,e){var r=this.p,n=this.q,i=this.g,s=this.y,a=this.parseASN1Signature(e),u=a[0],h=a[1],t=t.substr(0,n.bitLength()/4),c=new o(t,16);if(o.ZERO.compareTo(u)>0||u.compareTo(n)>0||o.ZERO.compareTo(h)>0||h.compareTo(n)>0)throw"invalid DSA signature";var f=h.modInverse(n),l=c.multiply(f).mod(n),d=u.multiply(f).mod(n),p=i.modPow(l,r).multiply(s.modPow(d,r)).mod(r).mod(n);return 0==p.compareTo(u)},this.parseASN1Signature=function(t){try{var e=new o(Fn.getVbyList(t,0,[0],"02"),16),r=new o(Fn.getVbyList(t,0,[1],"02"),16);return[e,r]}catch(n){throw"malformed DSA signature"}},this.select_hash_algorithm=e,this.sign=t,this.verify=r,this.getRandomBigIntegerInRange=n,this.getRandomBigInteger=i,this.getRandomBytes=s};var Pn=function(){var t=function(t,e,n){return r(sn.AES,t,e,n)},e=function(t,e,n){return r(sn.TripleDES,t,e,n)},r=function(t,e,r,n){var i=sn.enc.Hex.parse(e),s=sn.enc.Hex.parse(r),o=sn.enc.Hex.parse(n),a={};a.key=s,a.iv=o,a.ciphertext=i;var u=t.decrypt(a,s,{iv:o});return sn.enc.Hex.stringify(u)},n=function(t,e,r){return o(sn.AES,t,e,r)},s=function(t,e,r){return o(sn.TripleDES,t,e,r)},o=function(t,e,r,n){var i=sn.enc.Hex.parse(e),s=sn.enc.Hex.parse(r),o=sn.enc.Hex.parse(n),a=t.encrypt(i,s,{iv:o}),u=sn.enc.Hex.parse(a.toString()),h=sn.enc.Base64.stringify(u);return h},a={"AES-256-CBC":{proc:t,eproc:n,keylen:32,ivlen:16},"AES-192-CBC":{proc:t,eproc:n,keylen:24,ivlen:16},"AES-128-CBC":{proc:t,eproc:n,keylen:16,ivlen:16},"DES-EDE3-CBC":{proc:e,eproc:s,keylen:24,ivlen:8}},u=function(t){return a[t].proc},h=function(t){var e=sn.lib.WordArray.random(t),r=sn.enc.Hex.stringify(e);return r},c=function(t){var e={};t.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)","m"))&&(e.cipher=RegExp.$1,e.ivsalt=RegExp.$2),t.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"))&&(e.type=RegExp.$1);var r=-1,n=0;-1!=t.indexOf("\r\n\r\n")&&(r=t.indexOf("\r\n\r\n"),n=2),-1!=t.indexOf("\n\n")&&(r=t.indexOf("\n\n"),n=1);var i=t.indexOf("-----END");if(-1!=r&&-1!=i){var s=t.substring(r+2*n,i-n);s=s.replace(/\s+/g,""),e.data=s}return e},f=function(t,e,r){for(var n=r.substring(0,16),i=sn.enc.Hex.parse(n),s=sn.enc.Utf8.parse(e),o=a[t].keylen+a[t].ivlen,u="",h=null;;){var c=sn.algo.MD5.create();if(null!=h&&c.update(h),c.update(s),c.update(i),h=c.finalize(),u+=sn.enc.Hex.stringify(h),u.length>=2*o)break}var f={};return f.keyhex=u.substr(0,2*a[t].keylen),f.ivhex=u.substr(2*a[t].keylen,2*a[t].ivlen),f},l=function(t,e,r,n){var i=sn.enc.Base64.parse(t),s=sn.enc.Hex.stringify(i),o=a[e].proc,u=o(s,r,n);return u},d=function(t,e,r,n){var i=a[e].eproc,s=i(t,r,n);return s};return{version:"1.0.5",getHexFromPEM:function(t,e){var r=t;if(-1==r.indexOf("BEGIN "+e))throw"can't find PEM header: "+e;r=r.replace("-----BEGIN "+e+"-----",""),r=r.replace("-----END "+e+"-----","");var n=r.replace(/\s+/g,""),s=i(n);return s},getDecryptedKeyHexByKeyIV:function(t,e,r,n){var i=u(e);return i(t,r,n)},parsePKCS5PEM:function(t){return c(t)},getKeyAndUnusedIvByPasscodeAndIvsalt:function(t,e,r){return f(t,e,r)},decryptKeyB64:function(t,e,r,n){return l(t,e,r,n)},getDecryptedKeyHex:function(t,e){var r=c(t),n=(r.type,r.cipher),i=r.ivsalt,s=r.data,o=f(n,e,i),a=o.keyhex,u=l(s,n,a,i);return u},getRSAKeyFromEncryptedPKCS5PEM:function(t,e){var r=this.getDecryptedKeyHex(t,e),n=new ve;return n.readPrivateKeyFromASN1HexString(r),n},getEryptedPKCS5PEMFromPrvKeyHex:function(t,e,r,n){var i="";if("undefined"!=typeof r&&null!=r||(r="AES-256-CBC"),"undefined"==typeof a[r])throw"PKCS5PKEY unsupported algorithm: "+r;if("undefined"==typeof n||null==n){var s=a[r].ivlen,o=h(s);n=o.toUpperCase()}var u=f(r,e,n),c=u.keyhex,l=d(t,r,c,n),p=l.replace(/(.{64})/g,"$1\r\n"),i="-----BEGIN RSA PRIVATE KEY-----\r\n";return i+="Proc-Type: 4,ENCRYPTED\r\n",i+="DEK-Info: "+r+","+n+"\r\n",i+="\r\n",i+=p,i+="\r\n-----END RSA PRIVATE KEY-----\r\n"},getEryptedPKCS5PEMFromRSAKey:function(t,e,r,n){var i=new KJUR.asn1.DERInteger({"int":0}),s=new KJUR.asn1.DERInteger({bigint:t.n}),o=new KJUR.asn1.DERInteger({"int":t.e}),a=new KJUR.asn1.DERInteger({bigint:t.d}),u=new KJUR.asn1.DERInteger({bigint:t.p}),h=new KJUR.asn1.DERInteger({bigint:t.q}),c=new KJUR.asn1.DERInteger({bigint:t.dmp1}),f=new KJUR.asn1.DERInteger({bigint:t.dmq1}),l=new KJUR.asn1.DERInteger({bigint:t.coeff}),d=new KJUR.asn1.DERSequence({array:[i,s,o,a,u,h,c,f,l]}),p=d.getEncodedHex();return this.getEryptedPKCS5PEMFromPrvKeyHex(p,e,r,n)},newEncryptedPKCS5PEM:function(t,e,r,n){"undefined"!=typeof e&&null!=e||(e=1024),"undefined"!=typeof r&&null!=r||(r="10001");var i=new ve;i.generate(e,r);var s=null;return s="undefined"==typeof n||null==n?this.getEncryptedPKCS5PEMFromRSAKey(pkey,t):this.getEncryptedPKCS5PEMFromRSAKey(pkey,t,n)},getRSAKeyFromPlainPKCS8PEM:function(t){if(t.match(/ENCRYPTED/))throw"pem shall be not ENCRYPTED";var e=this.getHexFromPEM(t,"PRIVATE KEY"),r=this.getRSAKeyFromPlainPKCS8Hex(e);return r},getRSAKeyFromPlainPKCS8Hex:function(t){var e=Fn.getPosArrayOfChildren_AtObj(t,0);if(3!=e.length)throw"outer DERSequence shall have 3 elements: "+e.length;var r=Fn.getHexOfTLV_AtObj(t,e[1]);if("300d06092a864886f70d0101010500"!=r)throw"PKCS8 AlgorithmIdentifier is not rsaEnc: "+r;var r=Fn.getHexOfTLV_AtObj(t,e[1]),n=Fn.getHexOfTLV_AtObj(t,e[2]),i=Fn.getHexOfV_AtObj(n,0),s=new ve;return s.readPrivateKeyFromASN1HexString(i),s},parseHexOfEncryptedPKCS8:function(t){var e={},r=Fn.getPosArrayOfChildren_AtObj(t,0);if(2!=r.length)throw"malformed format: SEQUENCE(0).items != 2: "+r.length;e.ciphertext=Fn.getHexOfV_AtObj(t,r[1]);var n=Fn.getPosArrayOfChildren_AtObj(t,r[0]);if(2!=n.length)throw"malformed format: SEQUENCE(0.0).items != 2: "+n.length;if("2a864886f70d01050d"!=Fn.getHexOfV_AtObj(t,n[0]))throw"this only supports pkcs5PBES2";var i=Fn.getPosArrayOfChildren_AtObj(t,n[1]);if(2!=n.length)throw"malformed format: SEQUENCE(0.0.1).items != 2: "+i.length;var s=Fn.getPosArrayOfChildren_AtObj(t,i[1]);if(2!=s.length)throw"malformed format: SEQUENCE(0.0.1.1).items != 2: "+s.length;if("2a864886f70d0307"!=Fn.getHexOfV_AtObj(t,s[0]))throw"this only supports TripleDES";e.encryptionSchemeAlg="TripleDES",e.encryptionSchemeIV=Fn.getHexOfV_AtObj(t,s[1]);var o=Fn.getPosArrayOfChildren_AtObj(t,i[0]);if(2!=o.length)throw"malformed format: SEQUENCE(0.0.1.0).items != 2: "+o.length;if("2a864886f70d01050c"!=Fn.getHexOfV_AtObj(t,o[0]))throw"this only supports pkcs5PBKDF2";var a=Fn.getPosArrayOfChildren_AtObj(t,o[1]);if(a.length<2)throw"malformed format: SEQUENCE(0.0.1.0.1).items < 2: "+a.length;e.pbkdf2Salt=Fn.getHexOfV_AtObj(t,a[0]);var u=Fn.getHexOfV_AtObj(t,a[1]);try{e.pbkdf2Iter=parseInt(u,16)}catch(h){throw"malformed format pbkdf2Iter: "+u}return e},getPBKDF2KeyHexFromParam:function(t,e){var r=sn.enc.Hex.parse(t.pbkdf2Salt),n=t.pbkdf2Iter,i=sn.PBKDF2(e,r,{keySize:6,iterations:n}),s=sn.enc.Hex.stringify(i);return s},getPlainPKCS8HexFromEncryptedPKCS8PEM:function(t,e){var r=this.getHexFromPEM(t,"ENCRYPTED PRIVATE KEY"),n=this.parseHexOfEncryptedPKCS8(r),i=Pn.getPBKDF2KeyHexFromParam(n,e),s={};s.ciphertext=sn.enc.Hex.parse(n.ciphertext);var o=sn.enc.Hex.parse(i),a=sn.enc.Hex.parse(n.encryptionSchemeIV),u=sn.TripleDES.decrypt(s,o,{iv:a}),h=sn.enc.Hex.stringify(u);return h},getRSAKeyFromEncryptedPKCS8PEM:function(t,e){var r=this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t,e),n=this.getRSAKeyFromPlainPKCS8Hex(r);return n},getKeyFromEncryptedPKCS8PEM:function(t,e){var r=this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t,e),n=this.getKeyFromPlainPrivatePKCS8Hex(r);return n},parsePlainPrivatePKCS8Hex:function(t){var e={};if(e.algparam=null,"30"!=t.substr(0,2))throw"malformed plain PKCS8 private key(code:001)";var r=Fn.getPosArrayOfChildren_AtObj(t,0);if(3!=r.length)throw"malformed plain PKCS8 private key(code:002)";if("30"!=t.substr(r[1],2))throw"malformed PKCS8 private key(code:003)";var n=Fn.getPosArrayOfChildren_AtObj(t,r[1]);if(2!=n.length)throw"malformed PKCS8 private key(code:004)";if("06"!=t.substr(n[0],2))throw"malformed PKCS8 private key(code:005)";if(e.algoid=Fn.getHexOfV_AtObj(t,n[0]),"06"==t.substr(n[1],2)&&(e.algparam=Fn.getHexOfV_AtObj(t,n[1])),"04"!=t.substr(r[2],2))throw"malformed PKCS8 private key(code:006)";return e.keyidx=Fn.getStartPosOfV_AtObj(t,r[2]),e},getKeyFromPlainPrivatePKCS8PEM:function(t){var e=this.getHexFromPEM(t,"PRIVATE KEY"),r=this.getKeyFromPlainPrivatePKCS8Hex(e);return r},getKeyFromPlainPrivatePKCS8Hex:function(t){var e=this.parsePlainPrivatePKCS8Hex(t);if("2a864886f70d010101"==e.algoid){this.parsePrivateRawRSAKeyHexAtObj(t,e);var r=e.key,n=new ve;return n.setPrivateEx(r.n,r.e,r.d,r.p,r.q,r.dp,r.dq,r.co),n}if("2a8648ce3d0201"==e.algoid){if(this.parsePrivateRawECKeyHexAtObj(t,e),void 0===KJUR.crypto.OID.oidhex2name[e.algparam])throw"KJUR.crypto.OID.oidhex2name undefined: "+e.algparam;var i=KJUR.crypto.OID.oidhex2name[e.algparam],n=new KJUR.crypto.ECDSA({curve:i,prv:e.key});return n}throw"unsupported private key algorithm"},getRSAKeyFromPublicPKCS8PEM:function(t){var e=this.getHexFromPEM(t,"PUBLIC KEY"),r=this.getRSAKeyFromPublicPKCS8Hex(e);return r},getKeyFromPublicPKCS8PEM:function(t){var e=this.getHexFromPEM(t,"PUBLIC KEY"),r=this.getKeyFromPublicPKCS8Hex(e);return r},getKeyFromPublicPKCS8Hex:function(t){var e=this.parsePublicPKCS8Hex(t);if("2a864886f70d010101"==e.algoid){var r=this.parsePublicRawRSAKeyHex(e.key),n=new ve;return n.setPublic(r.n,r.e),n}if("2a8648ce3d0201"==e.algoid){if(void 0===KJUR.crypto.OID.oidhex2name[e.algparam])throw"KJUR.crypto.OID.oidhex2name undefined: "+e.algparam;var i=KJUR.crypto.OID.oidhex2name[e.algparam],n=new KJUR.crypto.ECDSA({curve:i,pub:e.key});return n}throw"unsupported public key algorithm"},parsePublicRawRSAKeyHex:function(t){var e={};if("30"!=t.substr(0,2))throw"malformed RSA key(code:001)";var r=Fn.getPosArrayOfChildren_AtObj(t,0);if(2!=r.length)throw"malformed RSA key(code:002)";if("02"!=t.substr(r[0],2))throw"malformed RSA key(code:003)";if(e.n=Fn.getHexOfV_AtObj(t,r[0]),"02"!=t.substr(r[1],2))throw"malformed RSA key(code:004)";return e.e=Fn.getHexOfV_AtObj(t,r[1]),e},parsePrivateRawRSAKeyHexAtObj:function(t,e){var r=e.keyidx;if("30"!=t.substr(r,2))throw"malformed RSA private key(code:001)";var n=Fn.getPosArrayOfChildren_AtObj(t,r);if(9!=n.length)throw"malformed RSA private key(code:002)";e.key={},e.key.n=Fn.getHexOfV_AtObj(t,n[1]),e.key.e=Fn.getHexOfV_AtObj(t,n[2]),e.key.d=Fn.getHexOfV_AtObj(t,n[3]),e.key.p=Fn.getHexOfV_AtObj(t,n[4]),e.key.q=Fn.getHexOfV_AtObj(t,n[5]),e.key.dp=Fn.getHexOfV_AtObj(t,n[6]),e.key.dq=Fn.getHexOfV_AtObj(t,n[7]),e.key.co=Fn.getHexOfV_AtObj(t,n[8])},parsePrivateRawECKeyHexAtObj:function(t,e){var r=e.keyidx;if("30"!=t.substr(r,2))throw"malformed ECC private key(code:001)";var n=Fn.getPosArrayOfChildren_AtObj(t,r);if(3!=n.length)throw"malformed ECC private key(code:002)";if("04"!=t.substr(n[1],2))throw"malformed ECC private key(code:003)";e.key=Fn.getHexOfV_AtObj(t,n[1])},parsePublicPKCS8Hex:function(t){var e={};e.algparam=null;var r=Fn.getPosArrayOfChildren_AtObj(t,0);if(2!=r.length)throw"outer DERSequence shall have 2 elements: "+r.length;var n=r[0];if("30"!=t.substr(n,2))throw"malformed PKCS8 public key(code:001)";var i=Fn.getPosArrayOfChildren_AtObj(t,n);if(2!=i.length)throw"malformed PKCS8 public key(code:002)";if("06"!=t.substr(i[0],2))throw"malformed PKCS8 public key(code:003)";if(e.algoid=Fn.getHexOfV_AtObj(t,i[0]),"06"==t.substr(i[1],2)&&(e.algparam=Fn.getHexOfV_AtObj(t,i[1])),"03"!=t.substr(r[1],2))throw"malformed PKCS8 public key(code:004)";return e.key=Fn.getHexOfV_AtObj(t,r[1]).substr(2),e},getRSAKeyFromPublicPKCS8Hex:function(t){var e=Fn.getPosArrayOfChildren_AtObj(t,0);if(2!=e.length)throw"outer DERSequence shall have 2 elements: "+e.length;var r=Fn.getHexOfTLV_AtObj(t,e[0]);if("300d06092a864886f70d0101010500"!=r)throw"PKCS8 AlgorithmId is not rsaEncryption";if("03"!=t.substr(e[1],2))throw"PKCS8 Public Key is not BITSTRING encapslated.";var n=Fn.getStartPosOfV_AtObj(t,e[1])+2;if("30"!=t.substr(n,2))throw"PKCS8 Public Key is not SEQUENCE.";var i=Fn.getPosArrayOfChildren_AtObj(t,n);if(2!=i.length)throw"inner DERSequence shall have 2 elements: "+i.length;if("02"!=t.substr(i[0],2))throw"N is not ASN.1 INTEGER";if("02"!=t.substr(i[1],2))throw"E is not ASN.1 INTEGER";var s=Fn.getHexOfV_AtObj(t,i[0]),o=Fn.getHexOfV_AtObj(t,i[1]),a=new ve;return a.setPublic(s,o),a}}}(),In=function(){var t=function(t,e,r){return n(sn.AES,t,e,r)},e=function(t,e,r){return n(sn.TripleDES,t,e,r)},r=function(t,e,r){return n(sn.DES,t,e,r)},n=function(t,e,r,n){var i=sn.enc.Hex.parse(e),s=sn.enc.Hex.parse(r),o=sn.enc.Hex.parse(n),a={};a.key=s,a.iv=o,a.ciphertext=i;var u=t.decrypt(a,s,{iv:o});return sn.enc.Hex.stringify(u)},s=function(t,e,r){return h(sn.AES,t,e,r)},a=function(t,e,r){return h(sn.TripleDES,t,e,r)},u=function(t,e,r){return h(sn.DES,t,e,r)},h=function(t,e,r,n){var i=sn.enc.Hex.parse(e),s=sn.enc.Hex.parse(r),o=sn.enc.Hex.parse(n),a=t.encrypt(i,s,{iv:o}),u=sn.enc.Hex.parse(a.toString()),h=sn.enc.Base64.stringify(u);return h},c={"AES-256-CBC":{proc:t,eproc:s,keylen:32,ivlen:16},"AES-192-CBC":{proc:t,eproc:s,keylen:24,ivlen:16},"AES-128-CBC":{proc:t,eproc:s,keylen:16,ivlen:16},"DES-EDE3-CBC":{proc:e,eproc:a,keylen:24,ivlen:8},"DES-CBC":{proc:r,eproc:u,keylen:8,ivlen:8}},f=function(t){return c[t].proc},l=function(t){var e=sn.lib.WordArray.random(t),r=sn.enc.Hex.stringify(e);return r},d=function(t){var e={};t.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)","m"))&&(e.cipher=RegExp.$1,e.ivsalt=RegExp.$2),t.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"))&&(e.type=RegExp.$1);var r=-1,n=0;-1!=t.indexOf("\r\n\r\n")&&(r=t.indexOf("\r\n\r\n"),n=2),-1!=t.indexOf("\n\n")&&(r=t.indexOf("\n\n"),n=1);var i=t.indexOf("-----END");if(-1!=r&&-1!=i){var s=t.substring(r+2*n,i-n);s=s.replace(/\s+/g,""),e.data=s}return e},p=function(t,e,r){for(var n=r.substring(0,16),i=sn.enc.Hex.parse(n),s=sn.enc.Utf8.parse(e),o=c[t].keylen+c[t].ivlen,a="",u=null;;){var h=sn.algo.MD5.create();if(null!=u&&h.update(u),h.update(s),h.update(i),u=h.finalize(),a+=sn.enc.Hex.stringify(u),a.length>=2*o)break}var f={};return f.keyhex=a.substr(0,2*c[t].keylen),f.ivhex=a.substr(2*c[t].keylen,2*c[t].ivlen),f},g=function(t,e,r,n){var i=sn.enc.Base64.parse(t),s=sn.enc.Hex.stringify(i),o=c[e].proc,a=o(s,r,n);return a},y=function(t,e,r,n){var i=c[e].eproc,s=i(t,r,n);return s};return{version:"1.0.0",getHexFromPEM:function(t,e){var r=t;if(-1==r.indexOf("-----BEGIN "))throw"can't find PEM header: "+e;"string"==typeof e&&""!=e?(r=r.replace("-----BEGIN "+e+"-----",""),r=r.replace("-----END "+e+"-----","")):(r=r.replace(/-----BEGIN [^-]+-----/,""),r=r.replace(/-----END [^-]+-----/,""));var n=r.replace(/\s+/g,""),s=i(n);return s},getDecryptedKeyHexByKeyIV:function(t,e,r,n){var i=f(e);return i(t,r,n)},parsePKCS5PEM:function(t){return d(t)},getKeyAndUnusedIvByPasscodeAndIvsalt:function(t,e,r){return p(t,e,r)},decryptKeyB64:function(t,e,r,n){return g(t,e,r,n)},getDecryptedKeyHex:function(t,e){var r=d(t),n=(r.type,r.cipher),i=r.ivsalt,s=r.data,o=p(n,e,i),a=o.keyhex,u=g(s,n,a,i);return u},getRSAKeyFromEncryptedPKCS5PEM:function(t,e){var r=this.getDecryptedKeyHex(t,e),n=new ve;return n.readPrivateKeyFromASN1HexString(r),n},getEncryptedPKCS5PEMFromPrvKeyHex:function(t,e,r,n,i){var s="";if("undefined"!=typeof n&&null!=n||(n="AES-256-CBC"),"undefined"==typeof c[n])throw"KEYUTIL unsupported algorithm: "+n;if("undefined"==typeof i||null==i){var o=c[n].ivlen,a=l(o);i=a.toUpperCase()}var u=p(n,r,i),h=u.keyhex,f=y(e,n,h,i),d=f.replace(/(.{64})/g,"$1\r\n"),s="-----BEGIN "+t+" PRIVATE KEY-----\r\n";return s+="Proc-Type: 4,ENCRYPTED\r\n",s+="DEK-Info: "+n+","+i+"\r\n",s+="\r\n",s+=d,s+="\r\n-----END "+t+" PRIVATE KEY-----\r\n"},getEncryptedPKCS5PEMFromRSAKey:function(t,e,r,n){var i=new KJUR.asn1.DERInteger({"int":0}),s=new KJUR.asn1.DERInteger({bigint:t.n}),o=new KJUR.asn1.DERInteger({"int":t.e}),a=new KJUR.asn1.DERInteger({bigint:t.d}),u=new KJUR.asn1.DERInteger({bigint:t.p}),h=new KJUR.asn1.DERInteger({bigint:t.q}),c=new KJUR.asn1.DERInteger({bigint:t.dmp1}),f=new KJUR.asn1.DERInteger({bigint:t.dmq1}),l=new KJUR.asn1.DERInteger({bigint:t.coeff}),d=new KJUR.asn1.DERSequence({array:[i,s,o,a,u,h,c,f,l]}),p=d.getEncodedHex();return this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA",p,e,r,n)},newEncryptedPKCS5PEM:function(t,e,r,n){"undefined"!=typeof e&&null!=e||(e=1024),"undefined"!=typeof r&&null!=r||(r="10001");var i=new ve;i.generate(e,r);var s=null;return s="undefined"==typeof n||null==n?this.getEncryptedPKCS5PEMFromRSAKey(i,t):this.getEncryptedPKCS5PEMFromRSAKey(i,t,n)},getRSAKeyFromPlainPKCS8PEM:function(t){if(t.match(/ENCRYPTED/))throw"pem shall be not ENCRYPTED";var e=this.getHexFromPEM(t,"PRIVATE KEY"),r=this.getRSAKeyFromPlainPKCS8Hex(e);return r},getRSAKeyFromPlainPKCS8Hex:function(t){var e=Fn.getPosArrayOfChildren_AtObj(t,0);if(3!=e.length)throw"outer DERSequence shall have 3 elements: "+e.length;var r=Fn.getHexOfTLV_AtObj(t,e[1]);if("300d06092a864886f70d0101010500"!=r)throw"PKCS8 AlgorithmIdentifier is not rsaEnc: "+r;var r=Fn.getHexOfTLV_AtObj(t,e[1]),n=Fn.getHexOfTLV_AtObj(t,e[2]),i=Fn.getHexOfV_AtObj(n,0),s=new ve;return s.readPrivateKeyFromASN1HexString(i),s},parseHexOfEncryptedPKCS8:function(t){var e={},r=Fn.getPosArrayOfChildren_AtObj(t,0);if(2!=r.length)throw"malformed format: SEQUENCE(0).items != 2: "+r.length;e.ciphertext=Fn.getHexOfV_AtObj(t,r[1]);var n=Fn.getPosArrayOfChildren_AtObj(t,r[0]);if(2!=n.length)throw"malformed format: SEQUENCE(0.0).items != 2: "+n.length;if("2a864886f70d01050d"!=Fn.getHexOfV_AtObj(t,n[0]))throw"this only supports pkcs5PBES2";var i=Fn.getPosArrayOfChildren_AtObj(t,n[1]);if(2!=n.length)throw"malformed format: SEQUENCE(0.0.1).items != 2: "+i.length;var s=Fn.getPosArrayOfChildren_AtObj(t,i[1]);if(2!=s.length)throw"malformed format: SEQUENCE(0.0.1.1).items != 2: "+s.length;if("2a864886f70d0307"!=Fn.getHexOfV_AtObj(t,s[0]))throw"this only supports TripleDES";e.encryptionSchemeAlg="TripleDES",e.encryptionSchemeIV=Fn.getHexOfV_AtObj(t,s[1]);var o=Fn.getPosArrayOfChildren_AtObj(t,i[0]);if(2!=o.length)throw"malformed format: SEQUENCE(0.0.1.0).items != 2: "+o.length;if("2a864886f70d01050c"!=Fn.getHexOfV_AtObj(t,o[0]))throw"this only supports pkcs5PBKDF2";var a=Fn.getPosArrayOfChildren_AtObj(t,o[1]);if(a.length<2)throw"malformed format: SEQUENCE(0.0.1.0.1).items < 2: "+a.length;e.pbkdf2Salt=Fn.getHexOfV_AtObj(t,a[0]);var u=Fn.getHexOfV_AtObj(t,a[1]);try{e.pbkdf2Iter=parseInt(u,16)}catch(h){throw"malformed format pbkdf2Iter: "+u}return e},getPBKDF2KeyHexFromParam:function(t,e){var r=sn.enc.Hex.parse(t.pbkdf2Salt),n=t.pbkdf2Iter,i=sn.PBKDF2(e,r,{keySize:6,iterations:n}),s=sn.enc.Hex.stringify(i);return s},getPlainPKCS8HexFromEncryptedPKCS8PEM:function(t,e){var r=this.getHexFromPEM(t,"ENCRYPTED PRIVATE KEY"),n=this.parseHexOfEncryptedPKCS8(r),i=In.getPBKDF2KeyHexFromParam(n,e),s={};s.ciphertext=sn.enc.Hex.parse(n.ciphertext);var o=sn.enc.Hex.parse(i),a=sn.enc.Hex.parse(n.encryptionSchemeIV),u=sn.TripleDES.decrypt(s,o,{iv:a}),h=sn.enc.Hex.stringify(u);return h},getRSAKeyFromEncryptedPKCS8PEM:function(t,e){var r=this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t,e),n=this.getRSAKeyFromPlainPKCS8Hex(r);return n},getKeyFromEncryptedPKCS8PEM:function(t,e){var r=this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t,e),n=this.getKeyFromPlainPrivatePKCS8Hex(r);return n},parsePlainPrivatePKCS8Hex:function(t){var e={};if(e.algparam=null,"30"!=t.substr(0,2))throw"malformed plain PKCS8 private key(code:001)";var r=Fn.getPosArrayOfChildren_AtObj(t,0);if(3!=r.length)throw"malformed plain PKCS8 private key(code:002)";if("30"!=t.substr(r[1],2))throw"malformed PKCS8 private key(code:003)";var n=Fn.getPosArrayOfChildren_AtObj(t,r[1]);if(2!=n.length)throw"malformed PKCS8 private key(code:004)";if("06"!=t.substr(n[0],2))throw"malformed PKCS8 private key(code:005)";if(e.algoid=Fn.getHexOfV_AtObj(t,n[0]),"06"==t.substr(n[1],2)&&(e.algparam=Fn.getHexOfV_AtObj(t,n[1])),"04"!=t.substr(r[2],2))throw"malformed PKCS8 private key(code:006)";return e.keyidx=Fn.getStartPosOfV_AtObj(t,r[2]),e},getKeyFromPlainPrivatePKCS8PEM:function(t){var e=this.getHexFromPEM(t,"PRIVATE KEY"),r=this.getKeyFromPlainPrivatePKCS8Hex(e);return r},getKeyFromPlainPrivatePKCS8Hex:function(t){var e=this.parsePlainPrivatePKCS8Hex(t);if("2a864886f70d010101"==e.algoid){this.parsePrivateRawRSAKeyHexAtObj(t,e);var r=e.key,n=new ve;return n.setPrivateEx(r.n,r.e,r.d,r.p,r.q,r.dp,r.dq,r.co),n}if("2a8648ce3d0201"==e.algoid){if(this.parsePrivateRawECKeyHexAtObj(t,e),void 0===KJUR.crypto.OID.oidhex2name[e.algparam])throw"KJUR.crypto.OID.oidhex2name undefined: "+e.algparam;var i=KJUR.crypto.OID.oidhex2name[e.algparam],n=new KJUR.crypto.ECDSA({curve:i});return n.setPublicKeyHex(e.pubkey),n.setPrivateKeyHex(e.key),n.isPublic=!1,n}if("2a8648ce380401"==e.algoid){var s=Fn.getVbyList(t,0,[1,1,0],"02"),a=Fn.getVbyList(t,0,[1,1,1],"02"),u=Fn.getVbyList(t,0,[1,1,2],"02"),h=Fn.getVbyList(t,0,[2,0],"02"),c=new o(s,16),f=new o(a,16),l=new o(u,16),d=new o(h,16),n=new KJUR.crypto.DSA;return n.setPrivate(c,f,l,null,d),n}throw"unsupported private key algorithm"},getRSAKeyFromPublicPKCS8PEM:function(t){var e=this.getHexFromPEM(t,"PUBLIC KEY"),r=this.getRSAKeyFromPublicPKCS8Hex(e);return r},getKeyFromPublicPKCS8PEM:function(t){var e=this.getHexFromPEM(t,"PUBLIC KEY"),r=this.getKeyFromPublicPKCS8Hex(e);return r},getKeyFromPublicPKCS8Hex:function(t){var e=this.parsePublicPKCS8Hex(t);if("2a864886f70d010101"==e.algoid){var r=this.parsePublicRawRSAKeyHex(e.key),n=new ve;return n.setPublic(r.n,r.e),n}if("2a8648ce3d0201"==e.algoid){if(void 0===KJUR.crypto.OID.oidhex2name[e.algparam])throw"KJUR.crypto.OID.oidhex2name undefined: "+e.algparam;var i=KJUR.crypto.OID.oidhex2name[e.algparam],n=new KJUR.crypto.ECDSA({curve:i,pub:e.key});return n}if("2a8648ce380401"==e.algoid){var s=e.algparam,a=Fn.getHexOfV_AtObj(e.key,0),n=new KJUR.crypto.DSA;return n.setPublic(new o(s.p,16),new o(s.q,16),new o(s.g,16),new o(a,16)),n}throw"unsupported public key algorithm"},parsePublicRawRSAKeyHex:function(t){var e={};if("30"!=t.substr(0,2))throw"malformed RSA key(code:001)";var r=Fn.getPosArrayOfChildren_AtObj(t,0);if(2!=r.length)throw"malformed RSA key(code:002)";
	if("02"!=t.substr(r[0],2))throw"malformed RSA key(code:003)";if(e.n=Fn.getHexOfV_AtObj(t,r[0]),"02"!=t.substr(r[1],2))throw"malformed RSA key(code:004)";return e.e=Fn.getHexOfV_AtObj(t,r[1]),e},parsePrivateRawRSAKeyHexAtObj:function(t,e){var r=e.keyidx;if("30"!=t.substr(r,2))throw"malformed RSA private key(code:001)";var n=Fn.getPosArrayOfChildren_AtObj(t,r);if(9!=n.length)throw"malformed RSA private key(code:002)";e.key={},e.key.n=Fn.getHexOfV_AtObj(t,n[1]),e.key.e=Fn.getHexOfV_AtObj(t,n[2]),e.key.d=Fn.getHexOfV_AtObj(t,n[3]),e.key.p=Fn.getHexOfV_AtObj(t,n[4]),e.key.q=Fn.getHexOfV_AtObj(t,n[5]),e.key.dp=Fn.getHexOfV_AtObj(t,n[6]),e.key.dq=Fn.getHexOfV_AtObj(t,n[7]),e.key.co=Fn.getHexOfV_AtObj(t,n[8])},parsePrivateRawECKeyHexAtObj:function(t,e){var r=e.keyidx,n=Fn.getVbyList(t,r,[1],"04"),i=Fn.getVbyList(t,r,[2,0],"03").substr(2);e.key=n,e.pubkey=i},parsePublicPKCS8Hex:function(t){var e={};e.algparam=null;var r=Fn.getPosArrayOfChildren_AtObj(t,0);if(2!=r.length)throw"outer DERSequence shall have 2 elements: "+r.length;var n=r[0];if("30"!=t.substr(n,2))throw"malformed PKCS8 public key(code:001)";var i=Fn.getPosArrayOfChildren_AtObj(t,n);if(2!=i.length)throw"malformed PKCS8 public key(code:002)";if("06"!=t.substr(i[0],2))throw"malformed PKCS8 public key(code:003)";if(e.algoid=Fn.getHexOfV_AtObj(t,i[0]),"06"==t.substr(i[1],2)?e.algparam=Fn.getHexOfV_AtObj(t,i[1]):"30"==t.substr(i[1],2)&&(e.algparam={},e.algparam.p=Fn.getVbyList(t,i[1],[0],"02"),e.algparam.q=Fn.getVbyList(t,i[1],[1],"02"),e.algparam.g=Fn.getVbyList(t,i[1],[2],"02")),"03"!=t.substr(r[1],2))throw"malformed PKCS8 public key(code:004)";return e.key=Fn.getHexOfV_AtObj(t,r[1]).substr(2),e},getRSAKeyFromPublicPKCS8Hex:function(t){var e=Fn.getPosArrayOfChildren_AtObj(t,0);if(2!=e.length)throw"outer DERSequence shall have 2 elements: "+e.length;var r=Fn.getHexOfTLV_AtObj(t,e[0]);if("300d06092a864886f70d0101010500"!=r)throw"PKCS8 AlgorithmId is not rsaEncryption";if("03"!=t.substr(e[1],2))throw"PKCS8 Public Key is not BITSTRING encapslated.";var n=Fn.getStartPosOfV_AtObj(t,e[1])+2;if("30"!=t.substr(n,2))throw"PKCS8 Public Key is not SEQUENCE.";var i=Fn.getPosArrayOfChildren_AtObj(t,n);if(2!=i.length)throw"inner DERSequence shall have 2 elements: "+i.length;if("02"!=t.substr(i[0],2))throw"N is not ASN.1 INTEGER";if("02"!=t.substr(i[1],2))throw"E is not ASN.1 INTEGER";var s=Fn.getHexOfV_AtObj(t,i[0]),o=Fn.getHexOfV_AtObj(t,i[1]),a=new ve;return a.setPublic(s,o),a}}}();In.getKey=function(t,e,r){if("undefined"!=typeof ve&&t instanceof ve)return t;if("undefined"!=typeof KJUR.crypto.ECDSA&&t instanceof KJUR.crypto.ECDSA)return t;if("undefined"!=typeof KJUR.crypto.DSA&&t instanceof KJUR.crypto.DSA)return t;if(void 0!==t.curve&&void 0!==t.xy&&void 0===t.d)return new KJUR.crypto.ECDSA({pub:t.xy,curve:t.curve});if(void 0!==t.curve&&void 0!==t.d)return new KJUR.crypto.ECDSA({prv:t.d,curve:t.curve});if(void 0===t.kty&&void 0!==t.n&&void 0!==t.e&&void 0===t.d){var n=new ve;return n.setPublic(t.n,t.e),n}if(void 0===t.kty&&void 0!==t.n&&void 0!==t.e&&void 0!==t.d&&void 0!==t.p&&void 0!==t.q&&void 0!==t.dp&&void 0!==t.dq&&void 0!==t.co&&void 0===t.qi){var n=new ve;return n.setPrivateEx(t.n,t.e,t.d,t.p,t.q,t.dp,t.dq,t.co),n}if(void 0===t.kty&&void 0!==t.n&&void 0!==t.e&&void 0!==t.d&&void 0===t.p){var n=new ve;return n.setPrivate(t.n,t.e,t.d),n}if(void 0!==t.p&&void 0!==t.q&&void 0!==t.g&&void 0!==t.y&&void 0===t.x){var n=new KJUR.crypto.DSA;return n.setPublic(t.p,t.q,t.g,t.y),n}if(void 0!==t.p&&void 0!==t.q&&void 0!==t.g&&void 0!==t.y&&void 0!==t.x){var n=new KJUR.crypto.DSA;return n.setPrivate(t.p,t.q,t.g,t.y,t.x),n}if("RSA"===t.kty&&void 0!==t.n&&void 0!==t.e&&void 0===t.d){var n=new ve;return n.setPublic(pr(t.n),pr(t.e)),n}if("RSA"===t.kty&&void 0!==t.n&&void 0!==t.e&&void 0!==t.d&&void 0!==t.p&&void 0!==t.q&&void 0!==t.dp&&void 0!==t.dq&&void 0!==t.qi){var n=new ve;return n.setPrivateEx(pr(t.n),pr(t.e),pr(t.d),pr(t.p),pr(t.q),pr(t.dp),pr(t.dq),pr(t.qi)),n}if("RSA"===t.kty&&void 0!==t.n&&void 0!==t.e&&void 0!==t.d){var n=new ve;return n.setPrivate(pr(t.n),pr(t.e),pr(t.d)),n}if("EC"===t.kty&&void 0!==t.crv&&void 0!==t.x&&void 0!==t.y&&void 0===t.d){var i=new KJUR.crypto.ECDSA({curve:t.crv}),s=i.ecparams.keylen/4,a=("0000000000"+pr(t.x)).slice(-s),u=("0000000000"+pr(t.y)).slice(-s),h="04"+a+u;return i.setPublicKeyHex(h),i}if("EC"===t.kty&&void 0!==t.crv&&void 0!==t.x&&void 0!==t.y&&void 0!==t.d){var i=new KJUR.crypto.ECDSA({curve:t.crv}),s=i.ecparams.keylen/4,c=("0000000000"+pr(t.d)).slice(-s);return i.setPrivateKeyHex(c),i}if(-1!=t.indexOf("-END CERTIFICATE-",0)||-1!=t.indexOf("-END X509 CERTIFICATE-",0)||-1!=t.indexOf("-END TRUSTED CERTIFICATE-",0))return Gr.getPublicKeyFromCertPEM(t);if("pkcs8pub"===r)return In.getKeyFromPublicPKCS8Hex(t);if(-1!=t.indexOf("-END PUBLIC KEY-"))return In.getKeyFromPublicPKCS8PEM(t);if("pkcs5prv"===r){var n=new ve;return n.readPrivateKeyFromASN1HexString(t),n}if("pkcs5prv"===r){var n=new ve;return n.readPrivateKeyFromASN1HexString(t),n}if(-1!=t.indexOf("-END RSA PRIVATE KEY-")&&-1==t.indexOf("4,ENCRYPTED")){var f=In.getHexFromPEM(t,"RSA PRIVATE KEY");return In.getKey(f,null,"pkcs5prv")}if(-1!=t.indexOf("-END DSA PRIVATE KEY-")&&-1==t.indexOf("4,ENCRYPTED")){var l=this.getHexFromPEM(t,"DSA PRIVATE KEY"),d=Fn.getVbyList(l,0,[1],"02"),p=Fn.getVbyList(l,0,[2],"02"),g=Fn.getVbyList(l,0,[3],"02"),y=Fn.getVbyList(l,0,[4],"02"),v=Fn.getVbyList(l,0,[5],"02"),n=new KJUR.crypto.DSA;return n.setPrivate(new o(d,16),new o(p,16),new o(g,16),new o(y,16),new o(v,16)),n}if(-1!=t.indexOf("-END PRIVATE KEY-"))return In.getKeyFromPlainPrivatePKCS8PEM(t);if(-1!=t.indexOf("-END RSA PRIVATE KEY-")&&-1!=t.indexOf("4,ENCRYPTED"))return In.getRSAKeyFromEncryptedPKCS5PEM(t,e);if(-1!=t.indexOf("-END EC PRIVATE KEY-")&&-1!=t.indexOf("4,ENCRYPTED")){var l=In.getDecryptedKeyHex(t,e),n=Fn.getVbyList(l,0,[1],"04"),m=Fn.getVbyList(l,0,[2,0],"06"),S=Fn.getVbyList(l,0,[3,0],"03").substr(2),_="";if(void 0===KJUR.crypto.OID.oidhex2name[m])throw"undefined OID(hex) in KJUR.crypto.OID: "+m;_=KJUR.crypto.OID.oidhex2name[m];var i=new KJUR.crypto.ECDSA({name:_});return i.setPublicKeyHex(S),i.setPrivateKeyHex(n),i.isPublic=!1,i}if(-1!=t.indexOf("-END DSA PRIVATE KEY-")&&-1!=t.indexOf("4,ENCRYPTED")){var l=In.getDecryptedKeyHex(t,e),d=Fn.getVbyList(l,0,[1],"02"),p=Fn.getVbyList(l,0,[2],"02"),g=Fn.getVbyList(l,0,[3],"02"),y=Fn.getVbyList(l,0,[4],"02"),v=Fn.getVbyList(l,0,[5],"02"),n=new KJUR.crypto.DSA;return n.setPrivate(new o(d,16),new o(p,16),new o(g,16),new o(y,16),new o(v,16)),n}if(-1!=t.indexOf("-END ENCRYPTED PRIVATE KEY-"))return In.getKeyFromEncryptedPKCS8PEM(t,e);throw"not supported argument"},In.generateKeypair=function(t,e){if("RSA"==t){var r=e,n=new ve;n.generate(r,"10001"),n.isPrivate=!0,n.isPublic=!0;var i=new ve,s=n.n.toString(16),o=n.e.toString(16);i.setPublic(s,o),i.isPrivate=!1,i.isPublic=!0;var a={};return a.prvKeyObj=n,a.pubKeyObj=i,a}if("EC"==t){var u=e,h=new KJUR.crypto.ECDSA({curve:u}),c=h.generateKeyPairHex(),n=new KJUR.crypto.ECDSA({curve:u});n.setPrivateKeyHex(c.ecprvhex),n.isPrivate=!0,n.isPublic=!1;var i=new KJUR.crypto.ECDSA({curve:u});i.setPublicKeyHex(c.ecpubhex),i.isPrivate=!1,i.isPublic=!0;var a={};return a.prvKeyObj=n,a.pubKeyObj=i,a}throw"unknown algorithm: "+t},In.getPEM=function(t,e,r,n,i){function s(t){var e=KJUR.asn1.ASN1Util.newObject({seq:[{"int":0},{"int":{bigint:t.n}},{"int":t.e},{"int":{bigint:t.d}},{"int":{bigint:t.p}},{"int":{bigint:t.q}},{"int":{bigint:t.dmp1}},{"int":{bigint:t.dmq1}},{"int":{bigint:t.coeff}}]});return e}function o(t){var e=KJUR.asn1.ASN1Util.newObject({seq:[{"int":1},{octstr:{hex:t.prvKeyHex}},{tag:["a0",!0,{oid:{name:t.curveName}}]},{tag:["a1",!0,{bitstr:{hex:"00"+t.pubKeyHex}}]}]});return e}function a(t){var e=KJUR.asn1.ASN1Util.newObject({seq:[{"int":0},{"int":{bigint:t.p}},{"int":{bigint:t.q}},{"int":{bigint:t.g}},{"int":{bigint:t.y}},{"int":{bigint:t.x}}]});return e}var u=KJUR.asn1,h=KJUR.crypto;if(("undefined"!=typeof ve&&t instanceof ve||"undefined"!=typeof h.DSA&&t instanceof h.DSA||"undefined"!=typeof h.ECDSA&&t instanceof h.ECDSA)&&1==t.isPublic&&(void 0===e||"PKCS8PUB"==e)){var c=new KJUR.asn1.x509.SubjectPublicKeyInfo(t),f=c.getEncodedHex();return u.ASN1Util.getPEMStringFromHex(f,"PUBLIC KEY")}if("PKCS1PRV"==e&&"undefined"!=typeof ve&&t instanceof ve&&(void 0===r||null==r)&&1==t.isPrivate){var c=s(t),f=c.getEncodedHex();return u.ASN1Util.getPEMStringFromHex(f,"RSA PRIVATE KEY")}if("PKCS1PRV"==e&&"undefined"!=typeof ve&&t instanceof KJUR.crypto.ECDSA&&(void 0===r||null==r)&&1==t.isPrivate){var l=new KJUR.asn1.DERObjectIdentifier({name:t.curveName}),d=l.getEncodedHex(),p=o(t),g=p.getEncodedHex(),y="";return y+=u.ASN1Util.getPEMStringFromHex(d,"EC PARAMETERS"),y+=u.ASN1Util.getPEMStringFromHex(g,"EC PRIVATE KEY")}if("PKCS1PRV"==e&&"undefined"!=typeof KJUR.crypto.DSA&&t instanceof KJUR.crypto.DSA&&(void 0===r||null==r)&&1==t.isPrivate){var c=a(t),f=c.getEncodedHex();return u.ASN1Util.getPEMStringFromHex(f,"DSA PRIVATE KEY")}if("PKCS5PRV"==e&&"undefined"!=typeof ve&&t instanceof ve&&void 0!==r&&null!=r&&1==t.isPrivate){var c=s(t),f=c.getEncodedHex();return void 0===n&&(n="DES-EDE3-CBC"),this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA",f,r,n)}if("PKCS5PRV"==e&&"undefined"!=typeof KJUR.crypto.ECDSA&&t instanceof KJUR.crypto.ECDSA&&void 0!==r&&null!=r&&1==t.isPrivate){var c=o(t),f=c.getEncodedHex();return void 0===n&&(n="DES-EDE3-CBC"),this.getEncryptedPKCS5PEMFromPrvKeyHex("EC",f,r,n)}if("PKCS5PRV"==e&&"undefined"!=typeof KJUR.crypto.DSA&&t instanceof KJUR.crypto.DSA&&void 0!==r&&null!=r&&1==t.isPrivate){var c=a(t),f=c.getEncodedHex();return void 0===n&&(n="DES-EDE3-CBC"),this.getEncryptedPKCS5PEMFromPrvKeyHex("DSA",f,r,n)}var v=function(t,e){var r=m(t,e),n=new KJUR.asn1.ASN1Util.newObject({seq:[{seq:[{oid:{name:"pkcs5PBES2"}},{seq:[{seq:[{oid:{name:"pkcs5PBKDF2"}},{seq:[{octstr:{hex:r.pbkdf2Salt}},{"int":r.pbkdf2Iter}]}]},{seq:[{oid:{name:"des-EDE3-CBC"}},{octstr:{hex:r.encryptionSchemeIV}}]}]}]},{octstr:{hex:r.ciphertext}}]});return n.getEncodedHex()},m=function(t,e){var r=100,n=sn.lib.WordArray.random(8),i="DES-EDE3-CBC",s=sn.lib.WordArray.random(8),o=sn.PBKDF2(e,n,{keySize:6,iterations:r}),a=sn.enc.Hex.parse(t),u=sn.TripleDES.encrypt(a,o,{iv:s})+"",h={};return h.ciphertext=u,h.pbkdf2Salt=sn.enc.Hex.stringify(n),h.pbkdf2Iter=r,h.encryptionSchemeAlg=i,h.encryptionSchemeIV=sn.enc.Hex.stringify(s),h};if("PKCS8PRV"==e&&"undefined"!=typeof ve&&t instanceof ve&&1==t.isPrivate){var S=s(t),_=S.getEncodedHex(),c=KJUR.asn1.ASN1Util.newObject({seq:[{"int":0},{seq:[{oid:{name:"rsaEncryption"}},{"null":!0}]},{octstr:{hex:_}}]}),f=c.getEncodedHex();if(void 0===r||null==r)return u.ASN1Util.getPEMStringFromHex(f,"PRIVATE KEY");var g=v(f,r);return u.ASN1Util.getPEMStringFromHex(g,"ENCRYPTED PRIVATE KEY")}if("PKCS8PRV"==e&&"undefined"!=typeof KJUR.crypto.ECDSA&&t instanceof KJUR.crypto.ECDSA&&1==t.isPrivate){var S=new KJUR.asn1.ASN1Util.newObject({seq:[{"int":1},{octstr:{hex:t.prvKeyHex}},{tag:["a1",!0,{bitstr:{hex:"00"+t.pubKeyHex}}]}]}),_=S.getEncodedHex(),c=KJUR.asn1.ASN1Util.newObject({seq:[{"int":0},{seq:[{oid:{name:"ecPublicKey"}},{oid:{name:t.curveName}}]},{octstr:{hex:_}}]}),f=c.getEncodedHex();if(void 0===r||null==r)return u.ASN1Util.getPEMStringFromHex(f,"PRIVATE KEY");var g=v(f,r);return u.ASN1Util.getPEMStringFromHex(g,"ENCRYPTED PRIVATE KEY")}if("PKCS8PRV"==e&&"undefined"!=typeof KJUR.crypto.DSA&&t instanceof KJUR.crypto.DSA&&1==t.isPrivate){var S=new KJUR.asn1.DERInteger({bigint:t.x}),_=S.getEncodedHex(),c=KJUR.asn1.ASN1Util.newObject({seq:[{"int":0},{seq:[{oid:{name:"dsa"}},{seq:[{"int":{bigint:t.p}},{"int":{bigint:t.q}},{"int":{bigint:t.g}}]}]},{octstr:{hex:_}}]}),f=c.getEncodedHex();if(void 0===r||null==r)return u.ASN1Util.getPEMStringFromHex(f,"PRIVATE KEY");var g=v(f,r);return u.ASN1Util.getPEMStringFromHex(g,"ENCRYPTED PRIVATE KEY")}throw"unsupported object nor format"},In.getKeyFromCSRPEM=function(t){var e=In.getHexFromPEM(t,"CERTIFICATE REQUEST"),r=In.getKeyFromCSRHex(e);return r},In.getKeyFromCSRHex=function(t){var e=In.parseCSRHex(t),r=In.getKey(e.p8pubkeyhex,null,"pkcs8pub");return r},In.parseCSRHex=function(t){var e={},r=t;if("30"!=r.substr(0,2))throw"malformed CSR(code:001)";var n=Fn.getPosArrayOfChildren_AtObj(r,0);if(n.length<1)throw"malformed CSR(code:002)";if("30"!=r.substr(n[0],2))throw"malformed CSR(code:003)";var i=Fn.getPosArrayOfChildren_AtObj(r,n[0]);if(i.length<3)throw"malformed CSR(code:004)";return e.p8pubkeyhex=Fn.getHexOfTLV_AtObj(r,i[2]),e},ve.prototype.readPrivateKeyFromPEMString=Pr,ve.prototype.readPrivateKeyFromASN1HexString=Or;var Dn=new RegExp("");Dn.compile("[^0-9a-f]","gi"),ve.prototype.signWithMessageHash=Cr,ve.prototype.signString=Dr,ve.prototype.signStringWithSHA1=Tr,ve.prototype.signStringWithSHA256=jr,ve.prototype.sign=Dr,ve.prototype.signWithSHA1=Tr,ve.prototype.signWithSHA256=jr,ve.prototype.signWithMessageHashPSS=Br,ve.prototype.signStringPSS=Hr,ve.prototype.signPSS=Hr,ve.SALT_LEN_HLEN=-1,ve.SALT_LEN_MAX=-2,ve.prototype.verifyWithMessageHash=zr,ve.prototype.verifyString=qr,ve.prototype.verifyHexSignatureForMessage=Lr,ve.prototype.verify=qr,ve.prototype.verifyHexSignatureForByteArrayMessage=Lr,ve.prototype.verifyWithMessageHashPSS=Yr,ve.prototype.verifyStringPSS=Wr,ve.prototype.verifyPSS=Wr,ve.SALT_LEN_RECOVER=-2,Gr.pemToBase64=function(t){var e=t;return e=e.replace("-----BEGIN CERTIFICATE-----",""),e=e.replace("-----END CERTIFICATE-----",""),e=e.replace(/[ \n]+/g,"")},Gr.pemToHex=function(t){var e=Gr.pemToBase64(t),r=i(e);return r},Gr.getSubjectPublicKeyPosFromCertHex=function(t){var e=Gr.getSubjectPublicKeyInfoPosFromCertHex(t);if(-1==e)return-1;var r=Fn.getPosArrayOfChildren_AtObj(t,e);if(2!=r.length)return-1;var n=r[1];if("03"!=t.substring(n,n+2))return-1;var i=Fn.getStartPosOfV_AtObj(t,n);return"00"!=t.substring(i,i+2)?-1:i+2},Gr.getSubjectPublicKeyInfoPosFromCertHex=function(t){var e=Fn.getStartPosOfV_AtObj(t,0),r=Fn.getPosArrayOfChildren_AtObj(t,e);return r.length<1?-1:"a003020102"==t.substring(r[0],r[0]+10)?r.length<6?-1:r[6]:r.length<5?-1:r[5]},Gr.getPublicKeyHexArrayFromCertHex=function(t){var e=Gr.getSubjectPublicKeyPosFromCertHex(t),r=Fn.getPosArrayOfChildren_AtObj(t,e);if(2!=r.length)return[];var n=Fn.getHexOfV_AtObj(t,r[0]),i=Fn.getHexOfV_AtObj(t,r[1]);return null!=n&&null!=i?[n,i]:[]},Gr.getHexTbsCertificateFromCert=function(t){var e=Fn.getStartPosOfV_AtObj(t,0);return e},Gr.getPublicKeyHexArrayFromCertPEM=function(t){var e=Gr.pemToHex(t),r=Gr.getPublicKeyHexArrayFromCertHex(e);return r},Gr.hex2dn=function(t){for(var e="",r=Fn.getPosArrayOfChildren_AtObj(t,0),n=0;n<r.length;n++){var i=Fn.getHexOfTLV_AtObj(t,r[n]);e=e+"/"+Gr.hex2rdn(i)}return e},Gr.hex2rdn=function(t){var e=Fn.getDecendantHexTLVByNthList(t,0,[0,0]),r=Fn.getDecendantHexVByNthList(t,0,[0,1]),n="";try{n=Gr.DN_ATTRHEX[e]}catch(i){n=e}r=r.replace(/(..)/g,"%$1");var s=decodeURIComponent(r);return n+"="+s},Gr.DN_ATTRHEX={"0603550406":"C","060355040a":"O","060355040b":"OU","0603550403":"CN","0603550405":"SN","0603550408":"ST","0603550407":"L"},Gr.getPublicKeyFromCertPEM=function(t){var e=Gr.getPublicKeyInfoPropOfCertPEM(t);if("2a864886f70d010101"==e.algoid){var r=In.parsePublicRawRSAKeyHex(e.keyhex),n=new ve;return n.setPublic(r.n,r.e),n}if("2a8648ce3d0201"==e.algoid){var i=KJUR.crypto.OID.oidhex2name[e.algparam],n=new KJUR.crypto.ECDSA({curve:i,info:e.keyhex});return n.setPublicKeyHex(e.keyhex),n}if("2a8648ce380401"==e.algoid){var s=Fn.getVbyList(e.algparam,0,[0],"02"),a=Fn.getVbyList(e.algparam,0,[1],"02"),u=Fn.getVbyList(e.algparam,0,[2],"02"),h=Fn.getHexOfV_AtObj(e.keyhex,0);h=h.substr(2);var n=new KJUR.crypto.DSA;return n.setPublic(new o(s,16),new o(a,16),new o(u,16),new o(h,16)),n}throw"unsupported key"},Gr.getPublicKeyInfoPropOfCertPEM=function(t){var e={};e.algparam=null;var r=Gr.pemToHex(t),n=Fn.getPosArrayOfChildren_AtObj(r,0);if(3!=n.length)throw"malformed X.509 certificate PEM (code:001)";if("30"!=r.substr(n[0],2))throw"malformed X.509 certificate PEM (code:002)";var i=Fn.getPosArrayOfChildren_AtObj(r,n[0]);if(i.length<7)throw"malformed X.509 certificate PEM (code:003)";var s=Fn.getPosArrayOfChildren_AtObj(r,i[6]);if(2!=s.length)throw"malformed X.509 certificate PEM (code:004)";var o=Fn.getPosArrayOfChildren_AtObj(r,s[0]);if(2!=o.length)throw"malformed X.509 certificate PEM (code:005)";if(e.algoid=Fn.getHexOfV_AtObj(r,o[0]),"06"==r.substr(o[1],2)?e.algparam=Fn.getHexOfV_AtObj(r,o[1]):"30"==r.substr(o[1],2)&&(e.algparam=Fn.getHexOfTLV_AtObj(r,o[1])),"03"!=r.substr(s[1],2))throw"malformed X.509 certificate PEM (code:006)";var a=Fn.getHexOfV_AtObj(r,s[1]);return e.keyhex=a.substr(2),e},Gr.getPublicKeyInfoPosOfCertHEX=function(t){var e=Fn.getPosArrayOfChildren_AtObj(t,0);if(3!=e.length)throw"malformed X.509 certificate PEM (code:001)";if("30"!=t.substr(e[0],2))throw"malformed X.509 certificate PEM (code:002)";var r=Fn.getPosArrayOfChildren_AtObj(t,e[0]);if(r.length<7)throw"malformed X.509 certificate PEM (code:003)";return r[6]},Gr.getV3ExtInfoListOfCertHex=function(t){var e=Fn.getPosArrayOfChildren_AtObj(t,0);if(3!=e.length)throw"malformed X.509 certificate PEM (code:001)";if("30"!=t.substr(e[0],2))throw"malformed X.509 certificate PEM (code:002)";var r=Fn.getPosArrayOfChildren_AtObj(t,e[0]);if(r.length<8)throw"malformed X.509 certificate PEM (code:003)";if("a3"!=t.substr(r[7],2))throw"malformed X.509 certificate PEM (code:004)";var n=Fn.getPosArrayOfChildren_AtObj(t,r[7]);if(1!=n.length)throw"malformed X.509 certificate PEM (code:005)";if("30"!=t.substr(n[0],2))throw"malformed X.509 certificate PEM (code:006)";for(var i=Fn.getPosArrayOfChildren_AtObj(t,n[0]),s=i.length,o=new Array(s),a=0;s>a;a++)o[a]=Gr.getV3ExtItemInfo_AtObj(t,i[a]);return o},Gr.getV3ExtItemInfo_AtObj=function(t,e){var r={};r.posTLV=e;var n=Fn.getPosArrayOfChildren_AtObj(t,e);if(2!=n.length&&3!=n.length)throw"malformed X.509v3 Ext (code:001)";if("06"!=t.substr(n[0],2))throw"malformed X.509v3 Ext (code:002)";var i=Fn.getHexOfV_AtObj(t,n[0]);r.oid=Fn.hextooidstr(i),r.critical=!1,3==n.length&&(r.critical=!0);var s=n[n.length-1];if("04"!=t.substr(s,2))throw"malformed X.509v3 Ext (code:003)";return r.posV=Fn.getStartPosOfV_AtObj(t,s),r},Gr.getHexOfTLV_V3ExtValue=function(t,e){var r=Gr.getPosOfTLV_V3ExtValue(t,e);return-1==r?null:Fn.getHexOfTLV_AtObj(t,r)},Gr.getHexOfV_V3ExtValue=function(t,e){var r=Gr.getPosOfTLV_V3ExtValue(t,e);return-1==r?null:Fn.getHexOfV_AtObj(t,r)},Gr.getPosOfTLV_V3ExtValue=function(t,e){var r=e;if(e.match(/^[0-9.]+$/)||(r=KJUR.asn1.x509.OID.name2oid(e)),""==r)return-1;for(var n=Gr.getV3ExtInfoListOfCertHex(t),i=0;i<n.length;i++){var s=n[i];if(s.oid==r)return s.posV}return-1},Gr.getExtBasicConstraints=function(t){var e=Gr.getHexOfV_V3ExtValue(t,"basicConstraints");if(null===e)return null;if(""===e)return{};if("0101ff"===e)return{cA:!0};if("0101ff02"===e.substr(0,8)){var r=Fn.getHexOfV_AtObj(e,6),n=parseInt(r,16);return{cA:!0,pathLen:n}}throw"unknown error"},Gr.KEYUSAGE_NAME=["digitalSignature","nonRepudiation","keyEncipherment","dataEncipherment","keyAgreement","keyCertSign","cRLSign","encipherOnly","decipherOnly"],Gr.getExtKeyUsageBin=function(t){var e=Gr.getHexOfV_V3ExtValue(t,"keyUsage");if(""==e)return"";if(e.length%2!=0||e.length<=2)throw"malformed key usage value";var r=parseInt(e.substr(0,2)),n=parseInt(e.substr(2),16).toString(2);return n.substr(0,n.length-r)},Gr.getExtKeyUsageString=function(t){for(var e=Gr.getExtKeyUsageBin(t),r=new Array,n=0;n<e.length;n++)"1"==e.substr(n,1)&&r.push(Gr.KEYUSAGE_NAME[n]);return r.join(",")},Gr.getExtSubjectKeyIdentifier=function(t){var e=Gr.getHexOfV_V3ExtValue(t,"subjectKeyIdentifier");return e},Gr.getExtAuthorityKeyIdentifier=function(t){var e={},r=Gr.getHexOfTLV_V3ExtValue(t,"authorityKeyIdentifier");if(null===r)return null;for(var n=Fn.getPosArrayOfChildren_AtObj(r,0),i=0;i<n.length;i++)"80"===r.substr(n[i],2)&&(e.kid=Fn.getHexOfV_AtObj(r,n[i]));return e},Gr.getExtExtKeyUsageName=function(t){var e=new Array,r=Gr.getHexOfTLV_V3ExtValue(t,"extKeyUsage");if(null===r)return null;for(var n=Fn.getPosArrayOfChildren_AtObj(r,0),i=0;i<n.length;i++){var s=Fn.getHexOfV_AtObj(r,n[i]),o=KJUR.asn1.ASN1Util.oidHexToInt(s),a=KJUR.asn1.x509.OID.oid2name(o);e.push(a)}return e},Gr.getExtSubjectAltName=function(t){for(var e=new Array,r=Gr.getHexOfTLV_V3ExtValue(t,"subjectAltName"),n=Fn.getPosArrayOfChildren_AtObj(r,0),i=0;i<n.length;i++)if("82"===r.substr(n[i],2)){var s=mr(Fn.getHexOfV_AtObj(r,n[i]));e.push(s)}return e},Gr.getExtCRLDistributionPointsURI=function(t){for(var e=new Array,r=Gr.getHexOfTLV_V3ExtValue(t,"cRLDistributionPoints"),n=Fn.getPosArrayOfChildren_AtObj(r,0),i=0;i<n.length;i++)for(var s=Fn.getHexOfTLV_AtObj(r,n[i]),o=Fn.getPosArrayOfChildren_AtObj(s,0),a=0;a<o.length;a++)if("a0"===s.substr(o[a],2)){var u=Fn.getHexOfV_AtObj(s,o[a]);if("a0"===u.substr(0,2)){var h=Fn.getHexOfV_AtObj(u,0);if("86"===h.substr(0,2)){var c=Fn.getHexOfV_AtObj(h,0),f=mr(c);e.push(f)}}}return e},Gr.getExtAIAInfo=function(t){var e={};e.ocsp=[],e.caissuer=[];var r=Gr.getPosOfTLV_V3ExtValue(t,"authorityInfoAccess");if(-1==r)return null;if("30"!=t.substr(r,2))throw"malformed AIA Extn Value";for(var n=Fn.getPosArrayOfChildren_AtObj(t,r),i=0;i<n.length;i++){var s=n[i],o=Fn.getPosArrayOfChildren_AtObj(t,s);if(2!=o.length)throw"malformed AccessDescription of AIA Extn";var a=o[0],u=o[1];"2b06010505073001"==Fn.getHexOfV_AtObj(t,a)&&"86"==t.substr(u,2)&&e.ocsp.push(mr(Fn.getHexOfV_AtObj(t,u))),"2b06010505073002"==Fn.getHexOfV_AtObj(t,a)&&"86"==t.substr(u,2)&&e.caissuer.push(mr(Fn.getHexOfV_AtObj(t,u)))}return e},Gr.getSignatureAlgorithmName=function(t){var e=Fn.getDecendantHexVByNthList(t,0,[1,0]),r=KJUR.asn1.ASN1Util.oidHexToInt(e),n=KJUR.asn1.x509.OID.oid2name(r);return n},Gr.getSignatureValueHex=function(t){var e=Fn.getDecendantHexVByNthList(t,0,[2]);if("00"!==e.substr(0,2))throw"can't get signature value";return e.substr(2)},Gr.getSerialNumberHex=function(t){return Fn.getDecendantHexVByNthList(t,0,[0,1])},"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.jws&&KJUR.jws||(KJUR.jws={}),KJUR.jws.JWS=function(){var t=KJUR.jws.JWS;this.parseJWS=function(e,r){if(void 0===this.parsedJWS||!r&&void 0===this.parsedJWS.sigvalH){if(null==e.match(/^([^.]+)\.([^.]+)\.([^.]+)$/))throw"JWS signature is not a form of 'Head.Payload.SigValue'.";var n=RegExp.$1,i=RegExp.$2,s=RegExp.$3,o=n+"."+i;if(this.parsedJWS={},this.parsedJWS.headB64U=n,this.parsedJWS.payloadB64U=i,this.parsedJWS.sigvalB64U=s,this.parsedJWS.si=o,!r){var a=pr(s),u=de(a,16);this.parsedJWS.sigvalH=a,this.parsedJWS.sigvalBI=u}var h=Un(n),c=Un(i);if(this.parsedJWS.headS=h,this.parsedJWS.payloadS=c,!t.isSafeJSONString(h,this.parsedJWS,"headP"))throw"malformed JSON string for JWS Head: "+h}}},KJUR.jws.JWS.sign=function(t,e,r,n,i){var s,o,a,u=KJUR.jws.JWS;if("string"!=typeof e&&"object"!=typeof e)throw"spHeader must be JSON string or object: "+e;if("object"==typeof e&&(o=e,s=JSON.stringify(o)),"string"==typeof e){if(s=e,!u.isSafeJSONString(s))throw"JWS Head is not safe JSON string: "+s;o=u.readSafeJSONString(s)}if(a=r,"object"==typeof r&&(a=JSON.stringify(r)),""!=t&&null!=t||void 0===o.alg||(t=o.alg),""!=t&&null!=t&&void 0===o.alg&&(o.alg=t,s=JSON.stringify(o)),t!==o.alg)throw"alg and sHeader.alg doesn't match: "+t+"!="+o.alg;var h=null;if(void 0===u.jwsalg2sigalg[t])throw"unsupported alg name: "+t;h=u.jwsalg2sigalg[t];var c=Kn(s),f=Kn(a),l=c+"."+f,d="";if("Hmac"==h.substr(0,4)){if(void 0===n)throw"mac key shall be specified for HS* alg";var p=new KJUR.crypto.Mac({alg:h,prov:"cryptojs",pass:n});p.updateString(l),d=p.doFinal()}else if(-1!=h.indexOf("withECDSA")){var g=new KJUR.crypto.Signature({alg:h});g.init(n,i),g.updateString(l),hASN1Sig=g.sign(),d=KJUR.crypto.ECDSA.asn1SigToConcatSig(hASN1Sig)}else if("none"!=h){var g=new KJUR.crypto.Signature({alg:h});g.init(n,i),g.updateString(l),d=g.sign()}var y=dr(d);return l+"."+y},KJUR.jws.JWS.verify=function(t,e,r){var n=KJUR.jws.JWS,i=t.split("."),s=i[0],o=i[1],a=s+"."+o,u=pr(i[2]),h=n.readSafeJSONString(Un(i[0])),c=null,f=null;if(void 0===h.alg)throw"algorithm not specified in header";if(c=h.alg,f=c.substr(0,2),null!=r&&"[object Array]"===Object.prototype.toString.call(r)&&r.length>0){var l=":"+r.join(":")+":";if(-1==l.indexOf(":"+c+":"))throw"algorithm '"+c+"' not accepted in the list"}if("none"!=c&&null===e)throw"key shall be specified to verify.";if("string"==typeof e&&-1!=e.indexOf("-----BEGIN ")&&(e=In.getKey(e)),!("RS"!=f&&"PS"!=f||e instanceof ve))throw"key shall be a RSAKey obj for RS* and PS* algs";if("ES"==f&&!(e instanceof KJUR.crypto.ECDSA))throw"key shall be a ECDSA obj for ES* algs";var d=null;if(void 0===n.jwsalg2sigalg[h.alg])throw"unsupported alg name: "+c;if(d=n.jwsalg2sigalg[c],"none"==d)throw"not supported";if("Hmac"==d.substr(0,4)){var p=null;if(void 0===e)throw"hexadecimal key shall be specified for HMAC";var g=new KJUR.crypto.Mac({alg:d,pass:e});return g.updateString(a),p=g.doFinal(),u==p}if(-1!=d.indexOf("withECDSA")){var y=null;try{y=KJUR.crypto.ECDSA.concatSigToASN1Sig(u)}catch(v){return!1}var m=new KJUR.crypto.Signature({alg:d});return m.init(e),m.updateString(a),m.verify(y)}var m=new KJUR.crypto.Signature({alg:d});return m.init(e),m.updateString(a),m.verify(u)},KJUR.jws.JWS.parse=function(t){var e,r,n,i=t.split("."),s={};if(2!=i.length&&3!=i.length)throw"malformed sJWS: wrong number of '.' splitted elements";return e=i[0],r=i[1],3==i.length&&(n=i[2]),s.headerObj=KJUR.jws.JWS.readSafeJSONString(Un(e)),s.payloadObj=KJUR.jws.JWS.readSafeJSONString(Un(r)),s.headerPP=JSON.stringify(s.headerObj,null,"  "),null==s.payloadObj?s.payloadPP=Un(r):s.payloadPP=JSON.stringify(s.payloadObj,null,"  "),void 0!==n&&(s.sigHex=pr(n)),s},KJUR.jws.JWS.verifyJWT=function(t,e,r){var n=KJUR.jws.JWS,i=t.split("."),s=i[0],o=i[1],a=(pr(i[2]),n.readSafeJSONString(Un(s))),u=n.readSafeJSONString(Un(o));if(void 0===a.alg)return!1;if(void 0===r.alg)throw"acceptField.alg shall be specified";if(!n.inArray(a.alg,r.alg))return!1;if(void 0!==u.iss&&"object"==typeof r.iss&&!n.inArray(u.iss,r.iss))return!1;if(void 0!==u.sub&&"object"==typeof r.sub&&!n.inArray(u.sub,r.sub))return!1;if(void 0!==u.aud&&"object"==typeof r.aud)if("string"==typeof u.aud){if(!n.inArray(u.aud,r.aud))return!1}else if("object"==typeof u.aud&&!n.includedArray(u.aud,r.aud))return!1;var h=KJUR.jws.IntDate.getNow();return void 0!==r.verifyAt&&"number"==typeof r.verifyAt&&(h=r.verifyAt),void 0!==u.exp&&"number"==typeof u.exp&&u.exp<h?!1:void 0!==u.nbf&&"number"==typeof u.nbf&&h<u.nbf?!1:void 0!==u.iat&&"number"==typeof u.iat&&h<u.iat?!1:void 0!==u.jti&&void 0!==r.jti&&u.jti!==r.jti?!1:!!KJUR.jws.JWS.verify(t,e,r.alg)},KJUR.jws.JWS.includedArray=function(t,e){var r=KJUR.jws.JWS.inArray;if(null===t)return!1;if("object"!=typeof t)return!1;if("number"!=typeof t.length)return!1;for(var n=0;n<t.length;n++)if(!r(t[n],e))return!1;return!0},KJUR.jws.JWS.inArray=function(t,e){if(null===e)return!1;if("object"!=typeof e)return!1;if("number"!=typeof e.length)return!1;for(var r=0;r<e.length;r++)if(e[r]==t)return!0;return!1},KJUR.jws.JWS.jwsalg2sigalg={HS256:"HmacSHA256",HS384:"HmacSHA384",HS512:"HmacSHA512",RS256:"SHA256withRSA",RS384:"SHA384withRSA",RS512:"SHA512withRSA",ES256:"SHA256withECDSA",ES384:"SHA384withECDSA",PS256:"SHA256withRSAandMGF1",PS384:"SHA384withRSAandMGF1",PS512:"SHA512withRSAandMGF1",none:"none"},KJUR.jws.JWS.isSafeJSONString=function(t,e,r){var n=null;try{return n=An(t),"object"!=typeof n?0:n.constructor===Array?0:(e&&(e[r]=n),1)}catch(i){return 0}},KJUR.jws.JWS.readSafeJSONString=function(t){var e=null;try{return e=An(t),"object"!=typeof e?null:e.constructor===Array?null:e}catch(r){return null}},KJUR.jws.JWS.getEncodedSignatureValueFromJWS=function(t){if(null==t.match(/^[^.]+\.[^.]+\.([^.]+)$/))throw"JWS signature is not a form of 'Head.Payload.SigValue'.";return RegExp.$1},KJUR.jws.JWS.getJWKthumbprint=function(t){if("RSA"!==t.kty&&"EC"!==t.kty&&"oct"!==t.kty)throw"unsupported algorithm for JWK Thumprint";var e="{";if("RSA"===t.kty){if("string"!=typeof t.n||"string"!=typeof t.e)throw"wrong n and e value for RSA key";e+='"e":"'+t.e+'",',e+='"kty":"'+t.kty+'",',e+='"n":"'+t.n+'"}'}else if("EC"===t.kty){if("string"!=typeof t.crv||"string"!=typeof t.x||"string"!=typeof t.y)throw"wrong crv, x and y value for EC key";e+='"crv":"'+t.crv+'",',e+='"kty":"'+t.kty+'",',e+='"x":"'+t.x+'",',e+='"y":"'+t.y+'"}'}else if("oct"===t.kty){if("string"!=typeof t.k)throw"wrong k value for oct(symmetric) key";e+='"kty":"'+t.kty+'",',e+='"k":"'+t.k+'"}'}var r=_r(e),n=KJUR.crypto.Util.hashHex(r,"sha256"),i=dr(n);return i},KJUR.jws.IntDate={},KJUR.jws.IntDate.get=function(t){if("now"==t)return KJUR.jws.IntDate.getNow();if("now + 1hour"==t)return KJUR.jws.IntDate.getNow()+3600;if("now + 1day"==t)return KJUR.jws.IntDate.getNow()+86400;if("now + 1month"==t)return KJUR.jws.IntDate.getNow()+2592e3;if("now + 1year"==t)return KJUR.jws.IntDate.getNow()+31536e3;if(t.match(/Z$/))return KJUR.jws.IntDate.getZulu(t);if(t.match(/^[0-9]+$/))return parseInt(t);throw"unsupported format: "+t},KJUR.jws.IntDate.getZulu=function(t){var e;if(e=t.match(/(\d+)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)Z/)){var r=RegExp.$1,n=parseInt(r);if(4==r.length);else{if(2!=r.length)throw"malformed year string";if(n>=50&&100>n)n=1900+n;else{if(!(n>=0&&50>n))throw"malformed year string for UTCTime";n=2e3+n}}var i=parseInt(RegExp.$2)-1,s=parseInt(RegExp.$3),o=parseInt(RegExp.$4),a=parseInt(RegExp.$5),u=parseInt(RegExp.$6),h=new Date(Date.UTC(n,i,s,o,a,u));return~~(h/1e3)}throw"unsupported format: "+t},KJUR.jws.IntDate.getNow=function(){var t=~~(new Date/1e3);return t},KJUR.jws.IntDate.intDate2UTCString=function(t){var e=new Date(1e3*t);return e.toUTCString()},KJUR.jws.IntDate.intDate2Zulu=function(t){var e=new Date(1e3*t),r=("0000"+e.getUTCFullYear()).slice(-4),n=("00"+(e.getUTCMonth()+1)).slice(-2),i=("00"+e.getUTCDate()).slice(-2),s=("00"+e.getUTCHours()).slice(-2),o=("00"+e.getUTCMinutes()).slice(-2),a=("00"+e.getUTCSeconds()).slice(-2);return r+n+i+s+o+a+"Z"},"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.jws&&KJUR.jws||(KJUR.jws={}),KJUR.jws.JWSJS=function(){var t=KJUR.jws.JWS;this.aHeader=[],this.sPayload="",this.aSignature=[],this.init=function(){this.aHeader=[],this.sPayload="",this.aSignature=[]},this.initWithJWS=function(t){this.init();var e=new KJUR.jws.JWS;e.parseJWS(t),this.aHeader.push(e.parsedJWS.headB64U),this.sPayload=e.parsedJWS.payloadB64U,this.aSignature.push(e.parsedJWS.sigvalB64U)},this.addSignatureByHeaderKey=function(t,e){var r=Un(this.sPayload),n=new KJUR.jws.JWS;n.generateJWSByP1PrvKey(t,r,e),this.aHeader.push(n.parsedJWS.headB64U),this.aSignature.push(n.parsedJWS.sigvalB64U)},this.addSignatureByHeaderPayloadKey=function(t,e,r){var n=new KJUR.jws.JWS;n.generateJWSByP1PrvKey(t,e,r),this.aHeader.push(n.parsedJWS.headB64U),this.sPayload=n.parsedJWS.payloadB64U,this.aSignature.push(n.parsedJWS.sigvalB64U)},this.verifyWithCerts=function(t){if(this.aHeader.length!=t.length)throw"num headers does not match with num certs";if(this.aSignature.length!=t.length)throw"num signatures does not match with num certs";for(var e=this.sPayload,r="",n=0;n<t.length;n++){var i=t[n],s=this.aHeader[n],o=this.aSignature[n],a=s+"."+e+"."+o,u=new KJUR.jws.JWS;try{var h=u.verifyJWSByPemX509Cert(a,i);1!=h&&(r+=n+1+"th signature unmatch. ")}catch(c){r+=n+1+"th signature fail("+c+"). "}}if(""==r)return 1;throw r},this.readJWSJS=function(e){var r=t.readSafeJSONString(e);if(null==r)throw"argument is not JSON string: "+e;this.aHeader=r.headers,this.sPayload=r.payload,this.aSignature=r.signatures},this.getJSON=function(){return{headers:this.aHeader,payload:this.sPayload,signatures:this.aSignature}},this.isEmpty=function(){return 0==this.aHeader.length?1:0}},e.SecureRandom=le,e.rng_seed_time=he,e.BigInteger=o,e.RSAKey=ve,e.ECDSA=KJUR.crypto.ECDSA,e.DSA=KJUR.crypto.DSA,e.Signature=KJUR.crypto.Signature,e.MessageDigest=KJUR.crypto.MessageDigest,e.Mac=KJUR.crypto.Mac,e.KEYUTIL=In,e.ASN1HEX=Fn,e.X509=Gr,e.CryptoJS=sn,e.b64tohex=i,e.b64toBA=s,e.stoBA=ir,e.BAtos=sr,e.BAtohex=or,
	e.stohex=ar,e.stob64=ur,e.stob64u=hr,e.b64utos=cr,e.b64tob64u=fr,e.b64utob64=lr,e.hex2b64=n,e.hextob64u=dr,e.b64utohex=pr,e.b64tohex=i,e.utf8tob64u=Kn,e.b64utoutf8=Un,e.utf8tob64=gr,e.b64toutf8=yr,e.utf8tohex=vr,e.hextoutf8=mr,e.hextorstr=Sr,e.rstrtohex=_r,e.newline_toUnix=Rr,e.newline_toDos=xr,e.intarystrtohex=Ar,e.strdiffidx=On,e.crypto=KJUR.crypto,e.asn1=KJUR.asn1,e.jws=KJUR.jws,e.readFileUTF8=Xr,e.readFileHexByBin=$r,e.readFile=Zr,e.saveFile=Qr,e.saveFileBinByHex=tn}).call(e,r(17).Buffer)},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=r(1),o=n(s),a=r(32),u=n(a),h=60,c=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=e.accessTokenExpiringNotificationTime,n=void 0===r?h:r,s=e.accessTokenExpiringTimer,o=void 0===s?new u["default"]("Access token expiring"):s,a=e.accessTokenExpiredTimer,c=void 0===a?new u["default"]("Access token expired"):a;i(this,t),this._accessTokenExpiringNotificationTime=n,this._accessTokenExpiring=o,this._accessTokenExpired=c}return t.prototype.load=function(t){if(o["default"].info("AccessTokenEvents.load"),this._cancelTimers(),t.access_token){var e=t.expires_in;if(o["default"].info("access token present, remaining duration:",e),e>0){var r=e-this._accessTokenExpiringNotificationTime;0>=r&&(r=1),o["default"].info("registering expiring timer in:",r),this._accessTokenExpiring.init(r)}var n=e+1;o["default"].info("registering expired timer in:",n),this._accessTokenExpired.init(n)}},t.prototype.unload=function(){o["default"].info("AccessTokenEvents.unload"),this._cancelTimers()},t.prototype._cancelTimers=function(){o["default"].info("canceling existing access token timers"),this._accessTokenExpiring.cancel(),this._accessTokenExpired.cancel()},t.prototype.addAccessTokenExpiring=function(t){this._accessTokenExpiring.addHandler(t)},t.prototype.removeAccessTokenExpiring=function(t){this._accessTokenExpiring.removeHandler(t)},t.prototype.addAccessTokenExpired=function(t){this._accessTokenExpired.addHandler(t)},t.prototype.removeAccessTokenExpired=function(t){this._accessTokenExpired.removeHandler(t)},t}();e["default"]=c,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=r(1),u=n(a),h=function(t){function e(){var r=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=r.error,o=r.error_description,a=r.error_uri,h=r.state;if(i(this,e),!n)throw u["default"].error("No error passed to ErrorResponse"),new Error("error");var c=s(this,t.call(this,o||n));return c.name="ErrorResponse",c.error=n,c.error_description=o,c.error_uri=a,c.state=h,c}return o(e,t),e}(Error);e["default"]=h,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=r(1),o=n(s),a=function(){function t(e){i(this,t),this._name=e,this._callbacks=[]}return t.prototype.addHandler=function(t){this._callbacks.push(t)},t.prototype.removeHandler=function(t){var e=this._callbacks.findIndex(function(e){return e===t});e>=0&&this._callbacks.splice(e,1)},t.prototype.raise=function(){o["default"].info("Raising event: "+this._name);var t=!0,e=!1,r=void 0;try{for(var n,i=this._callbacks[Symbol.iterator]();!(t=(n=i.next()).done);t=!0){var s=n.value;s.apply(void 0,arguments)}}catch(a){e=!0,r=a}finally{try{!t&&i["return"]&&i["return"]()}finally{if(e)throw r}}},t}();e["default"]=a,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=r(1),o=n(s),a=r(2),u=n(a),h=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?u["default"].XMLHttpRequest:arguments[0];i(this,t),this._XMLHttpRequest=e}return t.prototype.getJson=function(t,e){var r=this;if(o["default"].info("JsonService.getJson",t),!t)throw o["default"].error("No url passed"),new Error("url");return new Promise(function(n,i){var s=new r._XMLHttpRequest;s.open("GET",t),s.onload=function(){o["default"].info("HTTP response received, status",s.status),200===s.status?n(JSON.parse(s.responseText)):i(Error(s.statusText+" ("+s.status+")"))},s.onerror=function(){o["default"].error("network error"),i(Error("Network Error"))},e&&(o["default"].info("token passed, setting Authorization header"),s.setRequestHeader("Authorization","Bearer "+e)),s.send()})},t}();e["default"]=h,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(1),a=n(o),u=r(14),h=n(u),c=r(10),f=n(c),l=r(27),d=n(l),p=r(28),g=n(p),y=r(29),v=n(y),m=r(30),S=n(m),_=r(15),E=n(_),b=r(6),w=n(b),R=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];i(this,t),e instanceof h["default"]?this._settings=e:this._settings=new h["default"](e)}return t.prototype.createSigninRequest=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=e.response_type,n=e.scope,i=e.redirect_uri,s=e.data,o=e.prompt,u=e.display,h=e.max_age,c=e.ui_locales,f=e.id_token_hint,l=e.login_hint,p=e.acr_values,g=arguments[1];a["default"].info("OidcClient.createSigninRequest");var y=this._settings.client_id;r=r||this._settings.response_type,n=n||this._settings.scope,i=i||this._settings.redirect_uri,o=o||this._settings.prompt,u=u||this._settings.display,h=h||this._settings.max_age,c=c||this._settings.ui_locales,p=p||this._settings.acr_values;var v=this._settings.authority;return this._metadataService.getAuthorizationEndpoint().then(function(e){a["default"].info("Received authorization endpoint",e);var m=new d["default"]({url:e,client_id:y,redirect_uri:i,response_type:r,scope:n,data:s,authority:v,prompt:o,display:u,max_age:h,ui_locales:c,id_token_hint:f,login_hint:l,acr_values:p}),S=m.state;return g=g||t._stateStore,g.set(S.id,S.toStorageString()).then(function(){return m})})},t.prototype.processSigninResponse=function(t,e){var r=this;a["default"].info("OidcClient.processSigninResponse");var n=new g["default"](t);return n.state?(e=e||this._stateStore,e.remove(n.state).then(function(t){if(!t)throw a["default"].error("No matching state found in storage"),new Error("No matching state found in storage");var e=E["default"].fromStorageString(t);return a["default"].info("Received state from storage; validating response"),r._validator.validateSigninResponse(e,n)})):(a["default"].error("No state in response"),Promise.reject(new Error("No state in response")))},t.prototype.createSignoutRequest=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=e.id_token_hint,n=e.data,i=e.post_logout_redirect_uri,s=arguments[1];return a["default"].info("OidcClient.createSignoutRequest"),i=i||this._settings.post_logout_redirect_uri,this._metadataService.getEndSessionEndpoint().then(function(e){a["default"].info("Received end session endpoint",e);var o=new v["default"]({url:e,id_token_hint:r,post_logout_redirect_uri:i,data:n}),u=o.state;return u&&(a["default"].info("Signout request has state to persist"),s=s||t._stateStore,s.set(u.id,u.toStorageString())),o})},t.prototype.processSignoutResponse=function(t,e){var r=this;a["default"].info("OidcClient.processSignoutResponse");var n=new S["default"](t);if(!n.state)return a["default"].info("No state in response"),n.error?(a["default"].warn("Response was error",n.error),Promise.reject(new f["default"](n))):Promise.resolve(n);var i=n.state;return e=e||this._stateStore,e.remove(i).then(function(t){if(!t)throw a["default"].error("No matching state found in storage"),new Error("No matching state found in storage");var e=w["default"].fromStorageString(t);return a["default"].info("Received state from storage; validating response"),r._validator.validateSignoutResponse(e,n)})},t.prototype.clearStaleState=function(t){return a["default"].info("OidcClient.clearStaleState"),t=t||this._stateStore,w["default"].clearStaleState(t,this.settings.staleStateAge)},s(t,[{key:"_stateStore",get:function(){return this.settings.stateStore}},{key:"_validator",get:function(){return this.settings.validator}},{key:"_metadataService",get:function(){return this.settings.metadataService}},{key:"settings",get:function(){return this._settings}},{key:"metadataService",get:function(){return this._metadataService}}]),t}();e["default"]=R,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(1),a=n(o),u=r(7),h=n(u),c=r(26),f=n(c),l=r(4),d=n(l),p=".well-known/openid-configuration",g="id_token",y="openid",v=60,m=300,S=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=e.authority,n=e.metadataUrl,s=e.metadata,o=e.signingKeys,a=e.client_id,u=e.response_type,c=void 0===u?g:u,l=e.scope,p=void 0===l?y:l,S=e.redirect_uri,_=e.post_logout_redirect_uri,E=e.prompt,b=e.display,w=e.max_age,R=e.ui_locales,x=e.acr_values,A=e.filterProtocolClaims,F=void 0===A?!0:A,K=e.loadUserInfo,U=void 0===K?!0:K,O=e.staleStateAge,P=void 0===O?v:O,I=e.clockSkew,D=void 0===I?m:I,C=e.stateStore,T=void 0===C?new h["default"]:C,j=e.ResponseValidatorCtor,J=void 0===j?f["default"]:j,H=e.MetadataServiceCtor,B=void 0===H?d["default"]:H;i(this,t),this._authority=r,this._metadataUrl=n,this._metadata=s,this._signingKeys=o,this._client_id=a,this._response_type=c,this._scope=p,this._redirect_uri=S,this._post_logout_redirect_uri=_,this._prompt=E,this._display=b,this._max_age=w,this._ui_locales=R,this._acr_values=x,this._filterProtocolClaims=!!F,this._loadUserInfo=!!U,this._staleStateAge=P,this._clockSkew=D,this._stateStore=T,this._validator=new J(this),this._metadataService=new B(this)}return s(t,[{key:"client_id",get:function(){return this._client_id},set:function(t){if(this._client_id)throw a["default"].error("client_id has already been assigned."),new Error("client_id has already been assigned.");this._client_id=t}},{key:"response_type",get:function(){return this._response_type}},{key:"scope",get:function(){return this._scope}},{key:"redirect_uri",get:function(){return this._redirect_uri}},{key:"post_logout_redirect_uri",get:function(){return this._post_logout_redirect_uri}},{key:"prompt",get:function(){return this._prompt}},{key:"display",get:function(){return this._display}},{key:"max_age",get:function(){return this._max_age}},{key:"ui_locales",get:function(){return this._ui_locales}},{key:"acr_values",get:function(){return this._acr_values}},{key:"authority",get:function(){return this._authority},set:function(t){if(this._authority)throw a["default"].error("authority has already been assigned."),new Error("authority has already been assigned.");this._authority=t}},{key:"metadataUrl",get:function(){return this._metadataUrl||(this._metadataUrl=this.authority,this._metadataUrl&&this._metadataUrl.indexOf(p)<0&&("/"!==this._metadataUrl[this._metadataUrl.length-1]&&(this._metadataUrl+="/"),this._metadataUrl+=p)),this._metadataUrl}},{key:"metadata",get:function(){return this._metadata},set:function(t){this._metadata=t}},{key:"signingKeys",get:function(){return this._signingKeys},set:function(t){this._signingKeys=t}},{key:"filterProtocolClaims",get:function(){return this._filterProtocolClaims}},{key:"loadUserInfo",get:function(){return this._loadUserInfo}},{key:"staleStateAge",get:function(){return this._staleStateAge}},{key:"clockSkew",get:function(){return this._clockSkew}},{key:"stateStore",get:function(){return this._stateStore}},{key:"validator",get:function(){return this._validator}},{key:"metadataService",get:function(){return this._metadataService}}]),t}();e["default"]=S,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=r(1),h=n(u),c=r(6),f=n(c),l=r(16),d=n(l),p=function(t){function e(){var r=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=r.nonce,o=r.authority,a=r.client_id;i(this,e);var u=s(this,t.call(this,arguments[0]));return n===!0?u._nonce=(0,d["default"])():n&&(u._nonce=n),u._authority=o,u._client_id=a,u}return o(e,t),e.prototype.toStorageString=function(){return h["default"].info("SigninState.toStorageString"),JSON.stringify({id:this.id,data:this.data,created:this.created,nonce:this.nonce,authority:this.authority,client_id:this.client_id})},e.fromStorageString=function(t){h["default"].info("SigninState.fromStorageString");var r=JSON.parse(t);return new e(r)},a(e,[{key:"nonce",get:function(){return this._nonce}},{key:"authority",get:function(){return this._authority}},{key:"client_id",get:function(){return this._client_id}}]),e}(f["default"]);e["default"]=p,t.exports=e["default"]},function(t,e){"use strict";function r(){for(var t="xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx",e="0123456789abcdef",r=0,n="",i=0;i<t.length;i++)"-"!==t[i]&&"4"!==t[i]&&(r=16*Math.random()|0),"x"===t[i]?n+=e[r]:"y"===t[i]?(r&=3,r|=8,n+=e[r]):n+=t[i];return n}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r,t.exports=e["default"]},function(t,e,r){(function(t,n){"use strict";function i(){function t(){}try{var e=new Uint8Array(1);return e.foo=function(){return 42},e.constructor=t,42===e.foo()&&e.constructor===t&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(r){return!1}}function s(){return t.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function t(e){return this instanceof t?(t.TYPED_ARRAY_SUPPORT||(this.length=0,this.parent=void 0),"number"==typeof e?o(this,e):"string"==typeof e?a(this,e,arguments.length>1?arguments[1]:"utf8"):u(this,e)):arguments.length>1?new t(e,arguments[1]):new t(e)}function o(e,r){if(e=g(e,0>r?0:0|y(r)),!t.TYPED_ARRAY_SUPPORT)for(var n=0;r>n;n++)e[n]=0;return e}function a(t,e,r){"string"==typeof r&&""!==r||(r="utf8");var n=0|m(e,r);return t=g(t,n),t.write(e,r),t}function u(e,r){if(t.isBuffer(r))return h(e,r);if(X(r))return c(e,r);if(null==r)throw new TypeError("must start with number, buffer, array or string");if("undefined"!=typeof ArrayBuffer){if(r.buffer instanceof ArrayBuffer)return f(e,r);if(r instanceof ArrayBuffer)return l(e,r)}return r.length?d(e,r):p(e,r)}function h(t,e){var r=0|y(e.length);return t=g(t,r),e.copy(t,0,0,r),t}function c(t,e){var r=0|y(e.length);t=g(t,r);for(var n=0;r>n;n+=1)t[n]=255&e[n];return t}function f(t,e){var r=0|y(e.length);t=g(t,r);for(var n=0;r>n;n+=1)t[n]=255&e[n];return t}function l(e,r){return t.TYPED_ARRAY_SUPPORT?(r.byteLength,e=t._augment(new Uint8Array(r))):e=f(e,new Uint8Array(r)),e}function d(t,e){var r=0|y(e.length);t=g(t,r);for(var n=0;r>n;n+=1)t[n]=255&e[n];return t}function p(t,e){var r,n=0;"Buffer"===e.type&&X(e.data)&&(r=e.data,n=0|y(r.length)),t=g(t,n);for(var i=0;n>i;i+=1)t[i]=255&r[i];return t}function g(e,r){t.TYPED_ARRAY_SUPPORT?(e=t._augment(new Uint8Array(r)),e.__proto__=t.prototype):(e.length=r,e._isBuffer=!0);var n=0!==r&&r<=t.poolSize>>>1;return n&&(e.parent=$),e}function y(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|t}function v(e,r){if(!(this instanceof v))return new v(e,r);var n=new t(e,r);return delete n.parent,n}function m(t,e){"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"binary":case"raw":case"raws":return r;case"utf8":case"utf-8":return V(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return z(t).length;default:if(n)return V(t).length;e=(""+e).toLowerCase(),n=!0}}function S(t,e,r){var n=!1;if(e=0|e,r=void 0===r||r===1/0?this.length:0|r,t||(t="utf8"),0>e&&(e=0),r>this.length&&(r=this.length),e>=r)return"";for(;;)switch(t){case"hex":return P(this,e,r);case"utf8":case"utf-8":return F(this,e,r);case"ascii":return U(this,e,r);case"binary":return O(this,e,r);case"base64":return A(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function _(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n),n>i&&(n=i)):n=i;var s=e.length;if(s%2!==0)throw new Error("Invalid hex string");n>s/2&&(n=s/2);for(var o=0;n>o;o++){var a=parseInt(e.substr(2*o,2),16);if(isNaN(a))throw new Error("Invalid hex string");t[r+o]=a}return o}function E(t,e,r,n){return W(V(e,t.length-r),t,r,n)}function b(t,e,r,n){return W(L(e),t,r,n)}function w(t,e,r,n){return b(t,e,r,n)}function R(t,e,r,n){return W(z(e),t,r,n)}function x(t,e,r,n){return W(q(e,t.length-r),t,r,n)}function A(t,e,r){return 0===e&&r===t.length?Y.fromByteArray(t):Y.fromByteArray(t.slice(e,r))}function F(t,e,r){r=Math.min(t.length,r);for(var n=[],i=e;r>i;){var s=t[i],o=null,a=s>239?4:s>223?3:s>191?2:1;if(r>=i+a){var u,h,c,f;switch(a){case 1:128>s&&(o=s);break;case 2:u=t[i+1],128===(192&u)&&(f=(31&s)<<6|63&u,f>127&&(o=f));break;case 3:u=t[i+1],h=t[i+2],128===(192&u)&&128===(192&h)&&(f=(15&s)<<12|(63&u)<<6|63&h,f>2047&&(55296>f||f>57343)&&(o=f));break;case 4:u=t[i+1],h=t[i+2],c=t[i+3],128===(192&u)&&128===(192&h)&&128===(192&c)&&(f=(15&s)<<18|(63&u)<<12|(63&h)<<6|63&c,f>65535&&1114112>f&&(o=f))}}null===o?(o=65533,a=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=a}return K(n)}function K(t){var e=t.length;if(Z>=e)return String.fromCharCode.apply(String,t);for(var r="",n=0;e>n;)r+=String.fromCharCode.apply(String,t.slice(n,n+=Z));return r}function U(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;r>i;i++)n+=String.fromCharCode(127&t[i]);return n}function O(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;r>i;i++)n+=String.fromCharCode(t[i]);return n}function P(t,e,r){var n=t.length;(!e||0>e)&&(e=0),(!r||0>r||r>n)&&(r=n);for(var i="",s=e;r>s;s++)i+=M(t[s]);return i}function I(t,e,r){for(var n=t.slice(e,r),i="",s=0;s<n.length;s+=2)i+=String.fromCharCode(n[s]+256*n[s+1]);return i}function D(t,e,r){if(t%1!==0||0>t)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function C(e,r,n,i,s,o){if(!t.isBuffer(e))throw new TypeError("buffer must be a Buffer instance");if(r>s||o>r)throw new RangeError("value is out of bounds");if(n+i>e.length)throw new RangeError("index out of range")}function T(t,e,r,n){0>e&&(e=65535+e+1);for(var i=0,s=Math.min(t.length-r,2);s>i;i++)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function j(t,e,r,n){0>e&&(e=4294967295+e+1);for(var i=0,s=Math.min(t.length-r,4);s>i;i++)t[r+i]=e>>>8*(n?i:3-i)&255}function J(t,e,r,n,i,s){if(e>i||s>e)throw new RangeError("value is out of bounds");if(r+n>t.length)throw new RangeError("index out of range");if(0>r)throw new RangeError("index out of range")}function H(t,e,r,n,i){return i||J(t,e,r,4,3.4028234663852886e38,-3.4028234663852886e38),G.write(t,e,r,n,23,4),r+4}function B(t,e,r,n,i){return i||J(t,e,r,8,1.7976931348623157e308,-1.7976931348623157e308),G.write(t,e,r,n,52,8),r+8}function k(t){if(t=N(t).replace(tt,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function N(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function M(t){return 16>t?"0"+t.toString(16):t.toString(16)}function V(t,e){e=e||1/0;for(var r,n=t.length,i=null,s=[],o=0;n>o;o++){if(r=t.charCodeAt(o),r>55295&&57344>r){if(!i){if(r>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===n){(e-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(56320>r){(e-=3)>-1&&s.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,128>r){if((e-=1)<0)break;s.push(r)}else if(2048>r){if((e-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(65536>r){if((e-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(1114112>r))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return s}function L(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e}function q(t,e){for(var r,n,i,s=[],o=0;o<t.length&&!((e-=2)<0);o++)r=t.charCodeAt(o),n=r>>8,i=r%256,s.push(i),s.push(n);return s}function z(t){return Y.toByteArray(k(t))}function W(t,e,r,n){for(var i=0;n>i&&!(i+r>=e.length||i>=t.length);i++)e[i+r]=t[i];return i}var Y=r(38),G=r(39),X=r(40);e.Buffer=t,e.SlowBuffer=v,e.INSPECT_MAX_BYTES=50,t.poolSize=8192;var $={};t.TYPED_ARRAY_SUPPORT=void 0!==n.TYPED_ARRAY_SUPPORT?n.TYPED_ARRAY_SUPPORT:i(),t.TYPED_ARRAY_SUPPORT?(t.prototype.__proto__=Uint8Array.prototype,t.__proto__=Uint8Array):(t.prototype.length=void 0,t.prototype.parent=void 0),t.isBuffer=function(t){return!(null==t||!t._isBuffer)},t.compare=function(e,r){if(!t.isBuffer(e)||!t.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(e===r)return 0;for(var n=e.length,i=r.length,s=0,o=Math.min(n,i);o>s&&e[s]===r[s];)++s;return s!==o&&(n=e[s],i=r[s]),i>n?-1:n>i?1:0},t.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},t.concat=function(e,r){if(!X(e))throw new TypeError("list argument must be an Array of Buffers.");if(0===e.length)return new t(0);var n;if(void 0===r)for(r=0,n=0;n<e.length;n++)r+=e[n].length;var i=new t(r),s=0;for(n=0;n<e.length;n++){var o=e[n];o.copy(i,s),s+=o.length}return i},t.byteLength=m,t.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?F(this,0,t):S.apply(this,arguments)},t.prototype.equals=function(e){if(!t.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:0===t.compare(this,e)},t.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},t.prototype.compare=function(e){if(!t.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?0:t.compare(this,e)},t.prototype.indexOf=function(e,r){function n(t,e,r){for(var n=-1,i=0;r+i<t.length;i++)if(t[r+i]===e[-1===n?0:i-n]){if(-1===n&&(n=i),i-n+1===e.length)return r+n}else n=-1;return-1}if(r>2147483647?r=2147483647:-2147483648>r&&(r=-2147483648),r>>=0,0===this.length)return-1;if(r>=this.length)return-1;if(0>r&&(r=Math.max(this.length+r,0)),"string"==typeof e)return 0===e.length?-1:String.prototype.indexOf.call(this,e,r);if(t.isBuffer(e))return n(this,e,r);if("number"==typeof e)return t.TYPED_ARRAY_SUPPORT&&"function"===Uint8Array.prototype.indexOf?Uint8Array.prototype.indexOf.call(this,e,r):n(this,[e],r);throw new TypeError("val must be string, number or Buffer")},t.prototype.get=function(t){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(t)},t.prototype.set=function(t,e){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(t,e)},t.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e=0|e,isFinite(r)?(r=0|r,void 0===n&&(n="utf8")):(n=r,r=void 0);else{var i=n;n=e,e=0|r,r=i}var s=this.length-e;if((void 0===r||r>s)&&(r=s),t.length>0&&(0>r||0>e)||e>this.length)throw new RangeError("attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return _(this,t,e,r);case"utf8":case"utf-8":return E(this,t,e,r);case"ascii":return b(this,t,e,r);case"binary":return w(this,t,e,r);case"base64":return R(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},t.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var Z=4096;t.prototype.slice=function(e,r){var n=this.length;e=~~e,r=void 0===r?n:~~r,0>e?(e+=n,0>e&&(e=0)):e>n&&(e=n),0>r?(r+=n,0>r&&(r=0)):r>n&&(r=n),e>r&&(r=e);var i;if(t.TYPED_ARRAY_SUPPORT)i=t._augment(this.subarray(e,r));else{var s=r-e;i=new t(s,void 0);for(var o=0;s>o;o++)i[o]=this[o+e]}return i.length&&(i.parent=this.parent||this),i},t.prototype.readUIntLE=function(t,e,r){t=0|t,e=0|e,r||D(t,e,this.length);for(var n=this[t],i=1,s=0;++s<e&&(i*=256);)n+=this[t+s]*i;return n},t.prototype.readUIntBE=function(t,e,r){t=0|t,e=0|e,r||D(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},t.prototype.readUInt8=function(t,e){return e||D(t,1,this.length),this[t]},t.prototype.readUInt16LE=function(t,e){return e||D(t,2,this.length),this[t]|this[t+1]<<8},t.prototype.readUInt16BE=function(t,e){return e||D(t,2,this.length),this[t]<<8|this[t+1]},t.prototype.readUInt32LE=function(t,e){return e||D(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},t.prototype.readUInt32BE=function(t,e){return e||D(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},t.prototype.readIntLE=function(t,e,r){t=0|t,e=0|e,r||D(t,e,this.length);for(var n=this[t],i=1,s=0;++s<e&&(i*=256);)n+=this[t+s]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*e)),n},t.prototype.readIntBE=function(t,e,r){t=0|t,e=0|e,r||D(t,e,this.length);for(var n=e,i=1,s=this[t+--n];n>0&&(i*=256);)s+=this[t+--n]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*e)),s},t.prototype.readInt8=function(t,e){return e||D(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},t.prototype.readInt16LE=function(t,e){e||D(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},t.prototype.readInt16BE=function(t,e){e||D(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},t.prototype.readInt32LE=function(t,e){return e||D(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},t.prototype.readInt32BE=function(t,e){return e||D(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},t.prototype.readFloatLE=function(t,e){return e||D(t,4,this.length),G.read(this,t,!0,23,4)},t.prototype.readFloatBE=function(t,e){return e||D(t,4,this.length),G.read(this,t,!1,23,4)},t.prototype.readDoubleLE=function(t,e){return e||D(t,8,this.length),G.read(this,t,!0,52,8)},t.prototype.readDoubleBE=function(t,e){return e||D(t,8,this.length),G.read(this,t,!1,52,8)},t.prototype.writeUIntLE=function(t,e,r,n){t=+t,e=0|e,r=0|r,n||C(this,t,e,r,Math.pow(2,8*r),0);var i=1,s=0;for(this[e]=255&t;++s<r&&(i*=256);)this[e+s]=t/i&255;return e+r},t.prototype.writeUIntBE=function(t,e,r,n){t=+t,e=0|e,r=0|r,n||C(this,t,e,r,Math.pow(2,8*r),0);var i=r-1,s=1;for(this[e+i]=255&t;--i>=0&&(s*=256);)this[e+i]=t/s&255;return e+r},t.prototype.writeUInt8=function(e,r,n){return e=+e,r=0|r,n||C(this,e,r,1,255,0),t.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[r]=255&e,r+1},t.prototype.writeUInt16LE=function(e,r,n){return e=+e,r=0|r,n||C(this,e,r,2,65535,0),t.TYPED_ARRAY_SUPPORT?(this[r]=255&e,this[r+1]=e>>>8):T(this,e,r,!0),r+2},t.prototype.writeUInt16BE=function(e,r,n){return e=+e,r=0|r,n||C(this,e,r,2,65535,0),t.TYPED_ARRAY_SUPPORT?(this[r]=e>>>8,this[r+1]=255&e):T(this,e,r,!1),r+2},t.prototype.writeUInt32LE=function(e,r,n){return e=+e,r=0|r,n||C(this,e,r,4,4294967295,0),t.TYPED_ARRAY_SUPPORT?(this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=255&e):j(this,e,r,!0),r+4},t.prototype.writeUInt32BE=function(e,r,n){return e=+e,r=0|r,n||C(this,e,r,4,4294967295,0),t.TYPED_ARRAY_SUPPORT?(this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=255&e):j(this,e,r,!1),r+4},t.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e=0|e,!n){var i=Math.pow(2,8*r-1);C(this,t,e,r,i-1,-i)}var s=0,o=1,a=0>t?1:0;for(this[e]=255&t;++s<r&&(o*=256);)this[e+s]=(t/o>>0)-a&255;return e+r},t.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e=0|e,!n){var i=Math.pow(2,8*r-1);C(this,t,e,r,i-1,-i)}var s=r-1,o=1,a=0>t?1:0;for(this[e+s]=255&t;--s>=0&&(o*=256);)this[e+s]=(t/o>>0)-a&255;return e+r},t.prototype.writeInt8=function(e,r,n){return e=+e,r=0|r,n||C(this,e,r,1,127,-128),t.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),0>e&&(e=255+e+1),this[r]=255&e,r+1},t.prototype.writeInt16LE=function(e,r,n){return e=+e,r=0|r,n||C(this,e,r,2,32767,-32768),t.TYPED_ARRAY_SUPPORT?(this[r]=255&e,this[r+1]=e>>>8):T(this,e,r,!0),r+2},t.prototype.writeInt16BE=function(e,r,n){return e=+e,r=0|r,n||C(this,e,r,2,32767,-32768),t.TYPED_ARRAY_SUPPORT?(this[r]=e>>>8,this[r+1]=255&e):T(this,e,r,!1),r+2},t.prototype.writeInt32LE=function(e,r,n){return e=+e,r=0|r,n||C(this,e,r,4,2147483647,-2147483648),t.TYPED_ARRAY_SUPPORT?(this[r]=255&e,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24):j(this,e,r,!0),r+4},t.prototype.writeInt32BE=function(e,r,n){return e=+e,r=0|r,n||C(this,e,r,4,2147483647,-2147483648),0>e&&(e=4294967295+e+1),t.TYPED_ARRAY_SUPPORT?(this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=255&e):j(this,e,r,!1),r+4},t.prototype.writeFloatLE=function(t,e,r){return H(this,t,e,!0,r)},t.prototype.writeFloatBE=function(t,e,r){return H(this,t,e,!1,r)},t.prototype.writeDoubleLE=function(t,e,r){return B(this,t,e,!0,r)},t.prototype.writeDoubleBE=function(t,e,r){return B(this,t,e,!1,r)},t.prototype.copy=function(e,r,n,i){if(n||(n=0),i||0===i||(i=this.length),r>=e.length&&(r=e.length),r||(r=0),i>0&&n>i&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(0>r)throw new RangeError("targetStart out of bounds");if(0>n||n>=this.length)throw new RangeError("sourceStart out of bounds");if(0>i)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-r<i-n&&(i=e.length-r+n);var s,o=i-n;if(this===e&&r>n&&i>r)for(s=o-1;s>=0;s--)e[s+r]=this[s+n];else if(1e3>o||!t.TYPED_ARRAY_SUPPORT)for(s=0;o>s;s++)e[s+r]=this[s+n];else e._set(this.subarray(n,n+o),r);return o},t.prototype.fill=function(t,e,r){if(t||(t=0),e||(e=0),r||(r=this.length),
	e>r)throw new RangeError("end < start");if(r!==e&&0!==this.length){if(0>e||e>=this.length)throw new RangeError("start out of bounds");if(0>r||r>this.length)throw new RangeError("end out of bounds");var n;if("number"==typeof t)for(n=e;r>n;n++)this[n]=t;else{var i=V(t.toString()),s=i.length;for(n=e;r>n;n++)this[n]=i[n%s]}return this}},t.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(t.TYPED_ARRAY_SUPPORT)return new t(this).buffer;for(var e=new Uint8Array(this.length),r=0,n=e.length;n>r;r+=1)e[r]=this[r];return e.buffer}throw new TypeError("Buffer.toArrayBuffer not supported in this browser")};var Q=t.prototype;t._augment=function(e){return e.constructor=t,e._isBuffer=!0,e._set=e.set,e.get=Q.get,e.set=Q.set,e.write=Q.write,e.toString=Q.toString,e.toLocaleString=Q.toString,e.toJSON=Q.toJSON,e.equals=Q.equals,e.compare=Q.compare,e.indexOf=Q.indexOf,e.copy=Q.copy,e.slice=Q.slice,e.readUIntLE=Q.readUIntLE,e.readUIntBE=Q.readUIntBE,e.readUInt8=Q.readUInt8,e.readUInt16LE=Q.readUInt16LE,e.readUInt16BE=Q.readUInt16BE,e.readUInt32LE=Q.readUInt32LE,e.readUInt32BE=Q.readUInt32BE,e.readIntLE=Q.readIntLE,e.readIntBE=Q.readIntBE,e.readInt8=Q.readInt8,e.readInt16LE=Q.readInt16LE,e.readInt16BE=Q.readInt16BE,e.readInt32LE=Q.readInt32LE,e.readInt32BE=Q.readInt32BE,e.readFloatLE=Q.readFloatLE,e.readFloatBE=Q.readFloatBE,e.readDoubleLE=Q.readDoubleLE,e.readDoubleBE=Q.readDoubleBE,e.writeUInt8=Q.writeUInt8,e.writeUIntLE=Q.writeUIntLE,e.writeUIntBE=Q.writeUIntBE,e.writeUInt16LE=Q.writeUInt16LE,e.writeUInt16BE=Q.writeUInt16BE,e.writeUInt32LE=Q.writeUInt32LE,e.writeUInt32BE=Q.writeUInt32BE,e.writeIntLE=Q.writeIntLE,e.writeIntBE=Q.writeIntBE,e.writeInt8=Q.writeInt8,e.writeInt16LE=Q.writeInt16LE,e.writeInt16BE=Q.writeInt16BE,e.writeInt32LE=Q.writeInt32LE,e.writeInt32BE=Q.writeInt32BE,e.writeFloatLE=Q.writeFloatLE,e.writeFloatBE=Q.writeFloatBE,e.writeDoubleLE=Q.writeDoubleLE,e.writeDoubleBE=Q.writeDoubleBE,e.fill=Q.fill,e.inspect=Q.inspect,e.toArrayBuffer=Q.toArrayBuffer,e};var tt=/[^+\/0-9A-Za-z-_]/g}).call(e,r(17).Buffer,function(){return this}())},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=e.Log=r(1),i=e.OidcClient=r(13),s=e.WebStorageStateStore=r(7),o=e.InMemoryWebStorage=r(21),a=e.UserManager=r(35),u=e.AccessTokenEvents=r(9),h=e.MetadataService=r(4);e["default"]={Log:n,OidcClient:i,WebStorageStateStore:s,InMemoryWebStorage:o,UserManager:a,AccessTokenEvents:u,MetadataService:h}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=r(1),o=n(s),a=r(20),u=n(a),h=function(){function t(){i(this,t)}return t.prototype.prepare=function(){var t=new u["default"];return Promise.resolve(t)},t.prototype.callback=function(t){o["default"].info("IFrameNavigator.callback");try{return u["default"].notifyParent(t),Promise.resolve()}catch(e){return Promise.reject(e)}},t}();e["default"]=h,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(1),a=n(o),u=5e3,h=function(){function t(){var e=this;i(this,t),a["default"].info("IFrameWindow.ctor"),this._promise=new Promise(function(t,r){e._resolve=t,e._reject=r}),this._boundMessageEvent=this._message.bind(this),window.addEventListener("message",this._boundMessageEvent,!1),this._frame=window.document.createElement("iframe"),this._frame.style.display="none",window.document.body.appendChild(this._frame)}return t.prototype.navigate=function(t){return a["default"].info("IFrameWindow.navigate"),t&&t.url?(this._timer=window.setTimeout(this._timeout.bind(this),u),this._frame.src=t.url):this._error("No url provided"),this.promise},t.prototype._success=function(t){this._cleanup(),a["default"].info("Successful response from frame window"),this._resolve(t)},t.prototype._error=function(t){this._cleanup(),a["default"].error(t),this._reject(new Error(t))},t.prototype._cleanup=function(){a["default"].info("IFrameWindow._cleanup"),window.removeEventListener("message",this._boundMessageEvent,!1),window.clearTimeout(this._timer),window.document.body.removeChild(this._frame),this._timer=null,this._frame=null,this._boundMessageEventssage=null},t.prototype._timeout=function(){a["default"].info("IFrameWindow._timeout"),this._error("Frame window timed out")},t.prototype._message=function(t){if(a["default"].info("IFrameWindow._message"),this._timer&&t.origin===this._origin&&t.source===this._frame.contentWindow){var e=t.data;e?this._success({url:e}):this._error("Invalid response from frame")}},t.notifyParent=function(t){a["default"].info("IFrameWindow.notifyParent"),window.parent&&window!==window.parent&&(t=t||window.location.href,t&&(a["default"].info("posting url message to parent"),window.parent.postMessage(t,location.protocol+"//"+location.host)))},s(t,[{key:"promise",get:function(){return this._promise}},{key:"_origin",get:function(){return location.protocol+"//"+location.host}}]),t}();e["default"]=h,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(1),a=n(o),u=function(){function t(){i(this,t),this._data={}}return t.prototype.getItem=function(t){return a["default"].info("InMemoryWebStorage.getItem",t),this._data[t]},t.prototype.setItem=function(t,e){a["default"].info("InMemoryWebStorage.setItem",t),this._data[t]=e},t.prototype.removeItem=function(t){a["default"].info("InMemoryWebStorage.removeItem",t),delete this._data[t]},t.prototype.key=function(t){return Object.getOwnPropertyNames(this._data)[t]},s(t,[{key:"length",get:function(){return Object.getOwnPropertyNames(this._data).length}}]),t}();e["default"]=u,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=r(8),o=r(1),a=n(o),u=["RS256","RS384","RS512","PS256","PS384","PS512","ES256","ES384","ES512"],h=function(){function t(){i(this,t)}return t.parseJwt=function(t){a["default"].info("JoseUtil.parseJwt");try{var e=s.jws.JWS.parse(t);return{header:e.headerObj,payload:e.payloadObj}}catch(r){a["default"].error(r)}},t.validateJwt=function(e,r,n,i,o,u){a["default"].info("JoseUtil.validateJwt");try{if("RSA"===r.kty)if(r.e&&r.n)r=s.KEYUTIL.getKey(r);else{if(!r.x5c||!r.x5c.length)return a["default"].error("RSA key missing key material",r),Promise.reject(new Error("RSA key missing key material"));r=s.KEYUTIL.getKey(s.X509.getPublicKeyFromCertPEM(r.x5c[0]))}else{if("EC"!==r.kty)return a["default"].error("Unsupported key type",r&&r.kty),Promise.reject(new Error("Unsupported key type: "+r&&r.kty));if(!(r.crv&&r.x&&r.y))return a["default"].error("EC key missing key material",r),Promise.reject(new Error("EC key missing key material"));r=s.KEYUTIL.getKey(r)}return t._validateJwt(e,r,n,i,o,u)}catch(h){return a["default"].error(h&&h.message||h),Promise.reject("JWT validation failed")}},t._validateJwt=function(e,r,n,i,o,h){a["default"].info("JoseUtil._validateJwt"),o||(o=0),h||(h=parseInt(Date.now()/1e3));var c=t.parseJwt(e).payload;if(c.iss!==n)return a["default"].error("Invalid issuer in token",c.iss),Promise.reject(new Error("Invalid issuer in token: "+c.iss));if(c.aud!==i)return a["default"].error("Invalid audience in token",c.aud),Promise.reject(new Error("Invalid audience in token: "+c.aud));var f=h+o,l=h-o;if(f<c.iat)return a["default"].error("iat is in the future",c.iat),Promise.reject(new Error("iat is in the future: "+c.iat));if(f<c.nbf)return a["default"].error("nbf is in the future",c.nbf),Promise.reject(new Error("nbf is in the future: "+c.nbf));if(c.exp<l)return a["default"].error("exp is in the past",c.exp),Promise.reject(new Error("exp is in the past:"+c.exp));try{if(!s.jws.JWS.verify(e,r,u))return a["default"].error("signature validation failed"),Promise.reject(new Error("signature validation failed"))}catch(d){return a["default"].error(d&&d.message||d),Promise.reject(new Error("signature validation failed"))}return Promise.resolve()},t.hashString=function(t,e){a["default"].info("JoseUtil.hashString",t,e);try{return s.crypto.Util.hashString(t,e)}catch(r){a["default"].error(r)}},t.hexToBase64Url=function(t){a["default"].info("JoseUtil.hexToBase64Url",t);try{return(0,s.hextob64u)(t)}catch(e){a["default"].error(e)}},t}();e["default"]=h,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=r(1),o=n(s),a=r(24),u=n(a),h=function(){function t(){i(this,t)}return t.prototype.prepare=function(t){var e=new u["default"](t);return Promise.resolve(e)},t.prototype.callback=function(t){o["default"].info("PopupNavigator.callback");try{return u["default"].notifyOpener(t),Promise.resolve()}catch(e){return Promise.reject(e)}},t}();e["default"]=h,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(1),a=n(o),u=500,h="location=no,toolbar=no,width=500,height=500,left=100,top=100",c="_blank",f=function(){function t(e){var r=this;i(this,t),a["default"].info("PopupWindow.ctor"),this._promise=new Promise(function(t,e){r._resolve=t,r._reject=e}),this._boundMessageEvent=this._message.bind(this),window.addEventListener("message",this._boundMessageEvent,!1);var n=e.popupWindowFeatures||h,s=e.popupWindowTarget||c;this._popup=window.open("",s,n),this._popup&&(a["default"].info("popup successfully created"),this._checkForPopupClosedTimer=window.setInterval(this._checkForPopupClosed.bind(this),u))}return t.prototype.navigate=function(t){return a["default"].info("PopupWindow.navigate"),this._popup?t&&t.url?(a["default"].info("Setting URL in popup"),this._popup.focus(),this._popup.window.location=t.url):this._error("No url provided"):this._error("Error opening popup window"),this.promise},t.prototype._success=function(t){this._cleanup(),a["default"].info("Successful response from popup window"),this._resolve(t)},t.prototype._error=function(t){this._cleanup(),a["default"].error(t),this._reject(new Error(t))},t.prototype._cleanup=function(){a["default"].info("PopupWindow._cleanup"),window.removeEventListener("message",this._boundMessageEvent,!1),window.clearInterval(this._checkForPopupClosedTimer),this._checkForPopupClosedTimer=null,this._boundMessageEventssage=null,this._popup&&this._popup.close(),this._popup=null},t.prototype._checkForPopupClosed=function(){a["default"].info("PopupWindow._checkForPopupClosed"),this._popup&&!this._popup.closed||this._error("Popup window closed")},t.prototype._message=function(t){if(a["default"].info("PopupWindow._message"),t.origin===this._origin&&t.source===this._popup.window){a["default"].info("processing message");var e=t.data||t.source.location.href;this._cleanup(),e?this._success({url:e}):this._error("Invalid response from popup")}},t.notifyOpener=function(t){a["default"].info("PopupWindow.notifyOpener"),window.opener&&(t=t||window.location.href,t&&(a["default"].info("posting url message to opener"),window.opener.postMessage(t,location.protocol+"//"+location.host)))},s(t,[{key:"promise",get:function(){return this._promise}},{key:"_origin",get:function(){return location.protocol+"//"+location.host}}]),t}();e["default"]=f,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(1),a=n(o),u=function(){function t(){i(this,t)}return t.prototype.prepare=function(){return Promise.resolve(this)},t.prototype.navigate=function(t){return a["default"].info("RedirectNavigator.navigate"),t&&t.url?(window.location=t.url,Promise.resolve()):(a["default"].error("No url provided"),Promise.reject(new Error("No url provided")))},s(t,[{key:"url",get:function(){return a["default"].info("RedirectNavigator.url"),window.location.href}}]),t}();e["default"]=u,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=r(1),o=n(s),a=r(4),u=n(a),h=r(34),c=n(h),f=r(10),l=n(f),d=r(22),p=n(d),g=["nonce","at_hash","iat","nbf","exp","aud","iss","c_hash"],y=function(){function t(e){var r=arguments.length<=1||void 0===arguments[1]?u["default"]:arguments[1],n=arguments.length<=2||void 0===arguments[2]?c["default"]:arguments[2],s=arguments.length<=3||void 0===arguments[3]?p["default"]:arguments[3];if(i(this,t),!e)throw o["default"].error("No settings passed to ResponseValidator"),new Error("settings");this._settings=e,this._metadataService=new r(this._settings),this._userInfoService=new n(this._settings),this._joseUtil=s}return t.prototype.validateSigninResponse=function(t,e){var r=this;return o["default"].info("ResponseValidator.validateSigninResponse"),this._processSigninParams(t,e).then(function(e){return o["default"].info("state processed"),r._validateTokens(t,e).then(function(t){return o["default"].info("tokens validated"),r._processClaims(t).then(function(t){return o["default"].info("claims processed"),t})})})},t.prototype.validateSignoutResponse=function(t,e){return o["default"].info("ResponseValidator.validateSignoutResponse"),t.id!==e.state?(o["default"].error("State does not match"),Promise.reject(new Error("State does not match"))):(o["default"].info("state validated"),e.state=t.data,e.error?(o["default"].warn("Response was error",e.error),Promise.reject(new l["default"](e))):Promise.resolve(e))},t.prototype._processSigninParams=function(t,e){if(o["default"].info("ResponseValidator._processSigninParams"),t.id!==e.state)return o["default"].error("State does not match"),Promise.reject(new Error("State does not match"));if(!t.client_id)return o["default"].error("No client_id on state"),Promise.reject(new Error("No client_id on state"));if(!t.authority)return o["default"].error("No authority on state"),Promise.reject(new Error("No authority on state"));if(this._settings.authority){if(this._settings.authority&&this._settings.authority!==t.authority)return o["default"].error("authority mismatch on settings vs. signin state"),Promise.reject(new Error("authority mismatch on settings vs. signin state"))}else this._settings.authority=t.authority;if(this._settings.client_id){if(this._settings.client_id&&this._settings.client_id!==t.client_id)return o["default"].error("client_id mismatch on settings vs. signin state"),Promise.reject(new Error("client_id mismatch on settings vs. signin state"))}else this._settings.client_id=t.client_id;return o["default"].info("state validated"),e.state=t.data,e.error?(o["default"].warn("Response was error",e.error),Promise.reject(new l["default"](e))):t.nonce&&!e.id_token?(o["default"].error("Expecting id_token in response"),Promise.reject(new Error("No id_token in response"))):!t.nonce&&e.id_token?(o["default"].error("Not expecting id_token in response"),Promise.reject(new Error("Unexpected id_token in response"))):Promise.resolve(e)},t.prototype._processClaims=function(t){var e=this;if(o["default"].info("ResponseValidator._processClaims"),t.isOpenIdConnect){if(o["default"].info("response is OIDC, processing claims"),t.profile=this._filterProtocolClaims(t.profile),this._settings.loadUserInfo&&t.access_token)return o["default"].info("loading user info"),this._userInfoService.getClaims(t.access_token).then(function(r){return t.profile=e._mergeClaims(t.profile,r),o["default"].info("user info claims received, updated profile:",t.profile),t});o["default"].info("not loading user info")}else o["default"].info("response is not OIDC, not processing claims");return Promise.resolve(t)},t.prototype._mergeClaims=function(t,e){var r=Object.assign({},t);for(var n in e){var i=e[n];Array.isArray(i)||(i=[i]);var s=!0,o=!1,a=void 0;try{for(var u,h=i[Symbol.iterator]();!(s=(u=h.next()).done);s=!0){var c=u.value;r[n]?Array.isArray(r[n])?r[n].indexOf(c)<0&&r[n].push(c):r[n]!==c&&(r[n]=[r[n],c]):r[n]=c}}catch(f){o=!0,a=f}finally{try{!s&&h["return"]&&h["return"]()}finally{if(o)throw a}}}return r},t.prototype._filterProtocolClaims=function(t){o["default"].info("ResponseValidator._filterProtocolClaims, incoming claims:",t);var e=Object.assign({},t);return this._settings._filterProtocolClaims?(g.forEach(function(t){delete e[t]}),o["default"].info("protocol claims filtered",e)):o["default"].info("protocol claims not filtered"),e},t.prototype._validateTokens=function(t,e){return o["default"].info("ResponseValidator._validateTokens"),e.id_token?e.access_token?(o["default"].info("Validating id_token and access_token"),this._validateIdTokenAndAccessToken(t,e)):(o["default"].info("Validating id_token"),this._validateIdToken(t,e)):(o["default"].info("No id_token to validate"),Promise.resolve(e))},t.prototype._validateIdTokenAndAccessToken=function(t,e){var r=this;return o["default"].info("ResponseValidator._validateIdTokenAndAccessToken"),this._validateIdToken(t,e).then(function(t){return r._validateAccessToken(t)})},t.prototype._validateIdToken=function(t,e){var r=this;if(o["default"].info("ResponseValidator._validateIdToken"),!t.nonce)return o["default"].error("No nonce on state"),Promise.reject(new Error("No nonce on state"));var n=this._joseUtil.parseJwt(e.id_token);if(!n||!n.header||!n.payload)return o["default"].error("Failed to parse id_token",n),Promise.reject(new Error("Failed to parse id_token"));if(t.nonce!==n.payload.nonce)return o["default"].error("Invalid nonce in id_token"),Promise.reject(new Error("Invalid nonce in id_token"));var i=n.header.kid;return i?this._metadataService.getIssuer().then(function(s){return o["default"].info("Received issuer"),r._metadataService.getSigningKeys().then(function(a){if(!a)return o["default"].error("No signing keys from metadata"),Promise.reject(new Error("No signing keys from metadata"));o["default"].info("Received signing keys");var u=a.filter(function(t){return t.kid===i})[0];if(!u)return o["default"].error("No key matching kid found in signing keys"),Promise.reject(new Error("No key matching kid found in signing keys"));var h=t.client_id,c=r._settings.clockSkew;return o["default"].info("Validaing JWT; using clock skew (in seconds) of: ",c),r._joseUtil.validateJwt(e.id_token,u,s,h,c).then(function(){return o["default"].info("JWT validation successful"),e.profile=n.payload,e})})}):(o["default"].error("No kid found in id_token"),Promise.reject(new Error("No kid found in id_token")))},t.prototype._validateAccessToken=function(t){if(o["default"].info("ResponseValidator._validateAccessToken"),!t.profile)return o["default"].error("No profile loaded from id_token"),Promise.reject(new Error("No profile loaded from id_token"));if(!t.profile.at_hash)return o["default"].error("No at_hash in id_token"),Promise.reject(new Error("No at_hash in id_token"));if(!t.id_token)return o["default"].error("No id_token"),Promise.reject(new Error("No id_token"));var e=this._joseUtil.parseJwt(t.id_token);if(!e||!e.header)return o["default"].error("Failed to parse id_token",e),Promise.reject(new Error("Failed to parse id_token"));var r=e.header.alg;if(!r||5!==r.length)return o["default"].error("Unsupported alg:",r),Promise.reject(new Error("Unsupported alg: "+r));var n=r.substr(2,3);if(!n)return o["default"].error("Unsupported alg:",r,n),Promise.reject(new Error("Unsupported alg: "+r));if(n=parseInt(n),256!==n&&384!==n&&512!==n)return o["default"].error("Unsupported alg:",r,n),Promise.reject(new Error("Unsupported alg: "+r));var i="sha"+n,s=this._joseUtil.hashString(t.access_token,i);if(!s)return o["default"].error("access_token hash failed:",i),Promise.reject(new Error("Failed to validate at_hash"));var a=s.substr(0,s.length/2),u=this._joseUtil.hexToBase64Url(a);return u!==t.profile.at_hash?(o["default"].error("Failed to validate at_hash",u,t.profile.at_hash),Promise.reject(new Error("Failed to validate at_hash"))):Promise.resolve(t)},t}();e["default"]=y,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=r(1),o=n(s),a=r(5),u=n(a),h=r(15),c=n(h),f=function(){function t(e){var r=e.url,n=e.client_id,s=e.redirect_uri,a=e.response_type,h=e.scope,f=e.authority,l=e.data,d=e.prompt,p=e.display,g=e.max_age,y=e.ui_locales,v=e.id_token_hint,m=e.login_hint,S=e.acr_values;if(i(this,t),!r)throw o["default"].error("No url passed to SigninRequest"),new Error("url");if(!n)throw o["default"].error("No client_id passed to SigninRequest"),new Error("client_id");if(!s)throw o["default"].error("No redirect_uri passed to SigninRequest"),new Error("redirect_uri");if(!a)throw o["default"].error("No response_type passed to SigninRequest"),new Error("response_type");if(!h)throw o["default"].error("No scope passed to SigninRequest"),new Error("scope");if(!f)throw o["default"].error("No authority passed to SigninRequest"),new Error("authority");var _=t.isOidc(a);this.state=new c["default"]({nonce:_,data:l,client_id:n,authority:f}),r=u["default"].addQueryParam(r,"client_id",n),r=u["default"].addQueryParam(r,"redirect_uri",s),r=u["default"].addQueryParam(r,"response_type",a),r=u["default"].addQueryParam(r,"scope",h),r=u["default"].addQueryParam(r,"state",this.state.id),_&&(r=u["default"].addQueryParam(r,"nonce",this.state.nonce));var E={prompt:d,display:p,max_age:g,ui_locales:y,id_token_hint:v,login_hint:m,acr_values:S};for(var b in E)E[b]&&(r=u["default"].addQueryParam(r,b,E[b]));this.url=r}return t.isOidc=function(t){var e=t.split(/\s+/g).filter(function(t){return"id_token"===t});return!!e[0]},t.isOAuth=function(t){var e=t.split(/\s+/g).filter(function(t){return"token"===t});return!!e[0]},t}();e["default"]=f,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(5),a=n(o),u="openid",h=function(){function t(e){i(this,t);var r=a["default"].parseUrlFragment(e,"#");this.error=r.error,this.error_description=r.error_description,this.error_uri=r.error_uri,this.state=r.state,this.id_token=r.id_token,this.session_state=r.session_state,this.access_token=r.access_token,this.token_type=r.token_type,this.scope=r.scope,this.profile=void 0;var n=parseInt(r.expires_in);if("number"==typeof n&&n>0){var s=parseInt(Date.now()/1e3);this.expires_at=s+n}}return s(t,[{key:"expires_in",get:function(){if(this.expires_at){var t=parseInt(Date.now()/1e3);return this.expires_at-t}}},{key:"expired",get:function(){var t=this.expires_in;return void 0!==t?0>=t:void 0}},{key:"scopes",get:function(){return(this.scope||"").split(" ")}},{key:"isOpenIdConnect",get:function(){return this.scopes.indexOf(u)>=0}}]),t}();e["default"]=h,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=r(1),o=n(s),a=r(5),u=n(a),h=r(6),c=n(h),f=function l(t){var e=t.url,r=t.id_token_hint,n=t.post_logout_redirect_uri,s=t.data;if(i(this,l),!e)throw o["default"].error("No url passed to SignoutRequest"),new Error("url");r&&(e=u["default"].addQueryParam(e,"id_token_hint",r),n&&(e=u["default"].addQueryParam(e,"post_logout_redirect_uri",n),s&&(this.state=new c["default"]({data:s}),e=u["default"].addQueryParam(e,"state",this.state.id)))),this.url=e};e["default"]=f,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=r(5),o=n(s),a=function u(t){i(this,u);var e=o["default"].parseUrlFragment(t,"?");this.error=e.error,this.error_description=e.error_description,this.error_uri=e.error_uri,this.state=e.state};e["default"]=a,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=r(1),o=n(s),a=function(){function t(e){i(this,t),this._userManager=e,this._userManager.events.addAccessTokenExpiring(this._tokenExpiring.bind(this))}return t.prototype._tokenExpiring=function(){var t=this;o["default"].info("SilentRenewService automatically renewing access token"),this._userManager.signinSilent().then(function(t){o["default"].info("Silent token renewal successful")},function(e){o["default"].error("Error from signinSilent:",e.message),t._userManager.events._raiseSilentRenewError(e)})},t}();e["default"]=a,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=r(1),u=(n(a),r(2)),h=n(u),c=r(11),f=n(c),l=function(t){function e(r){var n=arguments.length<=1||void 0===arguments[1]?h["default"].timer:arguments[1];i(this,e);var o=s(this,t.call(this,r));return o._timer=n,o}return o(e,t),e.prototype.init=function(t){this.cancel(),0>=t&&(t=1),this._timerHandle=this._timer.setTimeout(this._callback.bind(this),1e3*t)},e.prototype.cancel=function(){this._timerHandle&&(this._timer.clearTimeout(this._timerHandle),this._timerHandle=null)},e.prototype._callback=function(){this._timerHandle=null,t.prototype.raise.call(this)},e}(f["default"]);e["default"]=l,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(1),a=n(o),u=function(){function t(e){var r=e.id_token,n=e.session_state,s=e.access_token,o=e.token_type,a=e.scope,u=e.profile,h=e.expires_at,c=e.state;i(this,t),this.id_token=r,this.session_state=n,this.access_token=s,this.token_type=o,this.scope=a,this.profile=u,this.expires_at=h,this.state=c}return t.prototype.toStorageString=function(){return a["default"].info("User.toStorageString"),JSON.stringify({id_token:this.id_token,session_state:this.session_state,access_token:this.access_token,token_type:this.token_type,scope:this.scope,profile:this.profile,expires_at:this.expires_at})},t.fromStorageString=function(e){return a["default"].info("User.fromStorageString"),new t(JSON.parse(e))},s(t,[{key:"expires_in",get:function(){if(this.expires_at){var t=parseInt(Date.now()/1e3);return this.expires_at-t}}},{key:"expired",get:function(){var t=this.expires_in;return void 0!==t?0>=t:void 0}},{key:"scopes",get:function(){return(this.scope||"").split(" ")}}]),t}();e["default"]=u,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=r(12),o=n(s),a=r(4),u=n(a),h=r(1),c=n(h),f=function(){function t(e){var r=arguments.length<=1||void 0===arguments[1]?o["default"]:arguments[1],n=arguments.length<=2||void 0===arguments[2]?u["default"]:arguments[2];if(i(this,t),!e)throw c["default"].error("No settings passed to UserInfoService"),new Error("settings");this._settings=e,this._jsonService=new r,this._metadataService=new n(this._settings)}return t.prototype.getClaims=function(t){var e=this;return c["default"].info("UserInfoService.getClaims"),t?this._metadataService.getUserInfoEndpoint().then(function(r){return c["default"].info("received userinfo url",r),e._jsonService.getJson(r,t).then(function(t){return c["default"].info("claims received",t),t})}):(c["default"].error("No token passed"),Promise.reject(new Error("A token is required")))},t}();e["default"]=f,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=r(1),h=n(u),c=r(13),f=n(c),l=r(37),d=n(l),p=r(33),g=n(p),y=r(36),v=n(y),m=r(31),S=n(m),_=function(t){function e(){var r=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];i(this,e),r instanceof d["default"]||(r=new d["default"](r));var n=s(this,t.call(this,r));return n._events=new v["default"](r),
	n.settings.automaticSilentRenew&&(h["default"].info("automaticSilentRenew is configured, setting up silent renew"),n._silentRenewService=new S["default"](n)),n}return o(e,t),e.prototype.getUser=function(){var t=this;return h["default"].info("UserManager.getUser"),this._loadUser().then(function(e){return e?(h["default"].info("user loaded"),t._events.load(e),e):(h["default"].info("user not found in storage"),null)})},e.prototype.removeUser=function(){var t=this;return h["default"].info("UserManager.removeUser"),this._storeUser(null).then(function(){h["default"].info("user removed from storage"),t._events.unload()})},e.prototype.signinPopup=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];h["default"].info("UserManager.signinPopup");var e=t.redirect_uri||this.settings.popup_redirect_uri||this.settings.redirect_uri;return e?(t.redirect_uri=e,t.display="popup",this._signin(t,this._popupNavigator,{startUrl:e,popupWindowFeatures:t.popupWindowFeatures||this.settings.popupWindowFeatures,popupWindowTarget:t.popupWindowTarget||this.settings.popupWindowTarget})):(h["default"].error("No popup_redirect_uri or redirect_uri configured"),Promise.reject(new Error("No popup_redirect_uri or redirect_uri configured")))},e.prototype.signinPopupCallback=function(t){return h["default"].info("UserManager.signinPopupCallback"),this._signinCallback(t,this._popupNavigator)},e.prototype.signinSilent=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];h["default"].info("UserManager.signinSilent");var e=t.redirect_uri||this.settings.silent_redirect_uri;return e?(t.redirect_uri=e,t.prompt="none",this._signin(t,this._iframeNavigator)):(h["default"].error("No silent_redirect_uri configured"),Promise.reject(new Error("No silent_redirect_uri configured")))},e.prototype.signinSilentCallback=function(t){return h["default"].info("UserManager.signinSilentCallback"),this._signinCallback(t,this._iframeNavigator)},e.prototype._signin=function(t,e){var r=this,n=arguments.length<=2||void 0===arguments[2]?{}:arguments[2];return h["default"].info("_signin"),this._signinStart(t,e,n).then(function(t){return r._signinEnd(t.url)})},e.prototype._signinCallback=function(t,e){return h["default"].info("_signinCallback"),e.callback(t)},e.prototype._signout=function(t,e){var r=this,n=arguments.length<=2||void 0===arguments[2]?{}:arguments[2];return h["default"].info("_signout"),this._signoutStart(t,e,n).then(function(t){return r._signoutEnd(t.url)})},e.prototype._signoutCallback=function(t,e){return h["default"].info("_signoutCallback"),e.callback(t)},e.prototype.signinRedirect=function(t){return h["default"].info("UserManager.signinRedirect"),this._signinStart(t,this._redirectNavigator)},e.prototype.signinRedirectCallback=function(t){return h["default"].info("UserManager.signinRedirectCallback"),this._signinEnd(t||this._redirectNavigator.url)},e.prototype.signoutRedirect=function(t){return h["default"].info("UserManager.signoutRedirect"),this._signoutStart(t,this._redirectNavigator)},e.prototype.signoutRedirectCallback=function(t){return h["default"].info("UserManager.signoutRedirectCallback"),this._signoutEnd(t||this._redirectNavigator.url)},e.prototype._signinStart=function(t,e){var r=this,n=arguments.length<=2||void 0===arguments[2]?{}:arguments[2];return h["default"].info("_signinStart"),e.prepare(n).then(function(e){return h["default"].info("got navigator window handle"),r.createSigninRequest(t).then(function(t){return h["default"].info("got signin request"),n.url=t.url,e.navigate(n)})})},e.prototype._signinEnd=function(t){var e=this;return h["default"].info("_signinEnd"),this.processSigninResponse(t).then(function(t){h["default"].info("got signin response");var r=new g["default"](t);return e._storeUser(r).then(function(){return h["default"].info("user stored"),e._events.load(r),r})})},e.prototype._signoutStart=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=this,r=arguments[1],n=arguments.length<=2||void 0===arguments[2]?{}:arguments[2];return h["default"].info("_signoutStart"),r.prepare(n).then(function(r){return h["default"].info("got navigator window handle"),e.getUser().then(function(i){h["default"].info("loaded current user from storage");var s=t.id_token_hint||i&&i.id_token;return s&&(h["default"].info("Setting id_token into signout request"),t.id_token_hint=s),e.removeUser().then(function(){return h["default"].info("user removed, creating signout request"),e.createSignoutRequest(t).then(function(t){return h["default"].info("got signout request"),n.url=t.url,r.navigate(n)})})})})},e.prototype._signoutEnd=function(t){return h["default"].info("_signoutEnd"),this.processSignoutResponse(t).then(function(t){return h["default"].info("got signout response"),t})},e.prototype._loadUser=function(){return h["default"].info("_loadUser"),this._userStore.get(this._userStoreKey).then(function(t){return t?(h["default"].info("user storageString loaded"),g["default"].fromStorageString(t)):(h["default"].info("no user storageString"),null)})},e.prototype._storeUser=function(t){if(t){h["default"].info("_storeUser storing user");var e=t.toStorageString();return this._userStore.set(this._userStoreKey,e)}return h["default"].info("_storeUser removing user storage"),this._userStore.remove(this._userStoreKey)},a(e,[{key:"_redirectNavigator",get:function(){return this.settings.redirectNavigator}},{key:"_popupNavigator",get:function(){return this.settings.popupNavigator}},{key:"_iframeNavigator",get:function(){return this.settings.iframeNavigator}},{key:"_userStore",get:function(){return this.settings.userStore}},{key:"events",get:function(){return this._events}},{key:"_userStoreKey",get:function(){return"user:"+this.settings.authority+":"+this.settings.client_id}}]),e}(f["default"]);e["default"]=_,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=r(1),u=n(a),h=r(9),c=n(h),f=r(11),l=n(f),d=function(t){function e(r){i(this,e);var n=s(this,t.call(this,r));return n._userLoaded=new l["default"]("User loaded"),n._userUnloaded=new l["default"]("User unloaded"),n._silentRenewError=new l["default"]("Silent renew error"),n}return o(e,t),e.prototype.load=function(e){u["default"].info("UserManagerEvents.load"),t.prototype.load.call(this,e),this._userLoaded.raise(e)},e.prototype.unload=function(){u["default"].info("UserManagerEvents.unload"),t.prototype.unload.call(this),this._userUnloaded.raise()},e.prototype.addUserLoaded=function(t){this._userLoaded.addHandler(t)},e.prototype.removeUserLoaded=function(t){this._userLoaded.removeHandler(t)},e.prototype.addUserUnloaded=function(t){this._userUnloaded.addHandler(t)},e.prototype.removeUserUnloaded=function(t){this._userUnloaded.removeHandler(t)},e.prototype.addSilentRenewError=function(t){this._silentRenewError.addHandler(t)},e.prototype.removeSilentRenewError=function(t){this._silentRenewError.removeHandler(t)},e.prototype._raiseSilentRenewError=function(t){u["default"].info("UserManagerEvents._raiseSilentRenewError",t.message),this._silentRenewError.raise(t)},e}(c["default"]);e["default"]=d,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=r(1),h=(n(u),r(14)),c=n(h),f=r(25),l=n(f),d=r(23),p=n(d),g=r(19),y=n(g),v=r(7),m=n(v),S=r(2),_=n(S),E=60,b=function(t){function e(){var r=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=r.popup_redirect_uri,o=r.popupWindowFeatures,a=r.popupWindowTarget,u=r.silent_redirect_uri,h=r.automaticSilentRenew,c=void 0===h?!1:h,f=r.accessTokenExpiringNotificationTime,d=void 0===f?E:f,g=r.redirectNavigator,v=void 0===g?new l["default"]:g,S=r.popupNavigator,b=void 0===S?new p["default"]:S,w=r.iframeNavigator,R=void 0===w?new y["default"]:w,x=r.userStore,A=void 0===x?new m["default"]({store:_["default"].sessionStorage}):x;i(this,e);var F=s(this,t.call(this,arguments[0]));return F._popup_redirect_uri=n,F._popupWindowFeatures=o,F._popupWindowTarget=a,F._silent_redirect_uri=u,F._automaticSilentRenew=!!c,F._accessTokenExpiringNotificationTime=d,F._redirectNavigator=v,F._popupNavigator=b,F._iframeNavigator=R,F._userStore=A,F}return o(e,t),a(e,[{key:"popup_redirect_uri",get:function(){return this._popup_redirect_uri}},{key:"popupWindowFeatures",get:function(){return this._popupWindowFeatures}},{key:"popupWindowTarget",get:function(){return this._popupWindowTarget}},{key:"silent_redirect_uri",get:function(){return this._silent_redirect_uri}},{key:"automaticSilentRenew",get:function(){return!(!this.silent_redirect_uri||!this._automaticSilentRenew)}},{key:"accessTokenExpiringNotificationTime",get:function(){return this._accessTokenExpiringNotificationTime}},{key:"redirectNavigator",get:function(){return this._redirectNavigator}},{key:"popupNavigator",get:function(){return this._popupNavigator}},{key:"iframeNavigator",get:function(){return this._iframeNavigator}},{key:"userStore",get:function(){return this._userStore}}]),e}(c["default"]);e["default"]=b,t.exports=e["default"]},function(t,e,r){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(t){"use strict";function e(t){var e=t.charCodeAt(0);return e===o||e===f?62:e===a||e===l?63:u>e?-1:u+10>e?e-u+26+26:c+26>e?e-c:h+26>e?e-h+26:void 0}function r(t){function r(t){h[f++]=t}var n,i,o,a,u,h;if(t.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var c=t.length;u="="===t.charAt(c-2)?2:"="===t.charAt(c-1)?1:0,h=new s(3*t.length/4-u),o=u>0?t.length-4:t.length;var f=0;for(n=0,i=0;o>n;n+=4,i+=3)a=e(t.charAt(n))<<18|e(t.charAt(n+1))<<12|e(t.charAt(n+2))<<6|e(t.charAt(n+3)),r((16711680&a)>>16),r((65280&a)>>8),r(255&a);return 2===u?(a=e(t.charAt(n))<<2|e(t.charAt(n+1))>>4,r(255&a)):1===u&&(a=e(t.charAt(n))<<10|e(t.charAt(n+1))<<4|e(t.charAt(n+2))>>2,r(a>>8&255),r(255&a)),h}function i(t){function e(t){return n.charAt(t)}function r(t){return e(t>>18&63)+e(t>>12&63)+e(t>>6&63)+e(63&t)}var i,s,o,a=t.length%3,u="";for(i=0,o=t.length-a;o>i;i+=3)s=(t[i]<<16)+(t[i+1]<<8)+t[i+2],u+=r(s);switch(a){case 1:s=t[t.length-1],u+=e(s>>2),u+=e(s<<4&63),u+="==";break;case 2:s=(t[t.length-2]<<8)+t[t.length-1],u+=e(s>>10),u+=e(s>>4&63),u+=e(s<<2&63),u+="="}return u}var s="undefined"!=typeof Uint8Array?Uint8Array:Array,o="+".charCodeAt(0),a="/".charCodeAt(0),u="0".charCodeAt(0),h="a".charCodeAt(0),c="A".charCodeAt(0),f="-".charCodeAt(0),l="_".charCodeAt(0);t.toByteArray=r,t.fromByteArray=i}(e)},function(t,e){e.read=function(t,e,r,n,i){var s,o,a=8*i-n-1,u=(1<<a)-1,h=u>>1,c=-7,f=r?i-1:0,l=r?-1:1,d=t[e+f];for(f+=l,s=d&(1<<-c)-1,d>>=-c,c+=a;c>0;s=256*s+t[e+f],f+=l,c-=8);for(o=s&(1<<-c)-1,s>>=-c,c+=n;c>0;o=256*o+t[e+f],f+=l,c-=8);if(0===s)s=1-h;else{if(s===u)return o?NaN:(d?-1:1)*(1/0);o+=Math.pow(2,n),s-=h}return(d?-1:1)*o*Math.pow(2,s-n)},e.write=function(t,e,r,n,i,s){var o,a,u,h=8*s-i-1,c=(1<<h)-1,f=c>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:s-1,p=n?1:-1,g=0>e||0===e&&0>1/e?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=c):(o=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-o))<1&&(o--,u*=2),e+=o+f>=1?l/u:l*Math.pow(2,1-f),e*u>=2&&(o++,u/=2),o+f>=c?(a=0,o=c):o+f>=1?(a=(e*u-1)*Math.pow(2,i),o+=f):(a=e*Math.pow(2,f-1)*Math.pow(2,i),o=0));i>=8;t[r+d]=255&a,d+=p,a/=256,i-=8);for(o=o<<i|a,h+=i;h>0;t[r+d]=255&o,d+=p,o/=256,h-=8);t[r+d-p]|=128*g}},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}}])})}])});

/***/ },

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reduxOidc = __webpack_require__(490);
	
	(0, _reduxOidc.processSilentRenew)();

/***/ }

/******/ });
//# sourceMappingURL=silentRenew.js.map