require('jsdom-global')();
const  VUE_TEST = require('@vue/test-utils');
const  mount = VUE_TEST.mount;
const Vue  = VUE_TEST.createLocalVue();
global['I18n'] = {keyToValue: {}};
//move here var _AppLocale

(function (modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
    }
  };
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  };
  __webpack_require__.t = function (value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, (function (key) {
      return value[key];
    }).bind(null, key));
    return ns;
  };
  __webpack_require__.n = function (module) {
    var getter = module && module.__esModule ? function getDefault() {
      return module["default"];
    } : function getModuleExports() {
      return module;
    };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.p = "";
  return __webpack_require__(__webpack_require__.s = "./test/test.ts");
})({
  "../../node_modules/vue/dist/vue.runtime.esm.js": function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    (function (global, setImmediate) {
      var emptyObject = Object.freeze({});
      function isUndef(v) {
        return v === undefined || v === null;
      }
      function isDef(v) {
        return v !== undefined && v !== null;
      }
      function isTrue(v) {
        return v === true;
      }
      function isFalse(v) {
        return v === false;
      }
      function isPrimitive(value) {
        return typeof value === "string" || typeof value === "number" || typeof value === "symbol" || typeof value === "boolean";
      }
      function isObject(obj) {
        return obj !== null && typeof obj === "object";
      }
      var _toString = Object.prototype.toString;
      function toRawType(value) {
        return _toString.call(value).slice(8, -1);
      }
      function isPlainObject(obj) {
        return _toString.call(obj) === "[object Object]";
      }
      function isRegExp(v) {
        return _toString.call(v) === "[object RegExp]";
      }
      function isValidArrayIndex(val) {
        var n = parseFloat(String(val));
        return n >= 0 && Math.floor(n) === n && isFinite(val);
      }
      function isPromise(val) {
        return isDef(val) && typeof val.then === "function" && typeof val.catch === "function";
      }
      function toString(val) {
        return val == null ? "" : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
      }
      function toNumber(val) {
        var n = parseFloat(val);
        return isNaN(n) ? val : n;
      }
      function makeMap(str, expectsLowerCase) {
        var map = Object.create(null);
        var list = str.split(",");
        for (var i = 0; i < list.length; i++) {
          map[list[i]] = true;
        }
        return expectsLowerCase ? function (val) {
          return map[val.toLowerCase()];
        } : function (val) {
          return map[val];
        };
      }
      var isBuiltInTag = makeMap("slot,component", true);
      var isReservedAttribute = makeMap("key,ref,slot,slot-scope,is");
      function remove(arr, item) {
        if (arr.length) {
          var index = arr.indexOf(item);
          if (index > -1) {
            return arr.splice(index, 1);
          }
        }
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      function hasOwn(obj, key) {
        return hasOwnProperty.call(obj, key);
      }
      function cached(fn) {
        var cache = Object.create(null);
        return function cachedFn(str) {
          var hit = cache[str];
          return hit || (cache[str] = fn(str));
        };
      }
      var camelizeRE = /-(\w)/g;
      var camelize = cached(function (str) {
        return str.replace(camelizeRE, function (_, c) {
          return c ? c.toUpperCase() : "";
        });
      });
      var capitalize = cached(function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      });
      var hyphenateRE = /\B([A-Z])/g;
      var hyphenate = cached(function (str) {
        return str.replace(hyphenateRE, "-$1").toLowerCase();
      });
      function polyfillBind(fn, ctx) {
        function boundFn(a) {
          var l = arguments.length;
          return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
        }
        boundFn._length = fn.length;
        return boundFn;
      }
      function nativeBind(fn, ctx) {
        return fn.bind(ctx);
      }
      var bind = Function.prototype.bind ? nativeBind : polyfillBind;
      function toArray(list, start) {
        start = start || 0;
        var i = list.length - start;
        var ret = new Array(i);
        while (i--) {
          ret[i] = list[i + start];
        }
        return ret;
      }
      function extend(to, _from) {
        for (var key in _from) {
          to[key] = _from[key];
        }
        return to;
      }
      function toObject(arr) {
        var res = {};
        for (var i = 0; i < arr.length; i++) {
          if (arr[i]) {
            extend(res, arr[i]);
          }
        }
        return res;
      }
      function noop(a, b, c) {}
      var no = function (a, b, c) {
        return false;
      };
      var identity = function (_) {
        return _;
      };
      function looseEqual(a, b) {
        if (a === b) {
          return true;
        }
        var isObjectA = isObject(a);
        var isObjectB = isObject(b);
        if (isObjectA && isObjectB) {
          try {
            var isArrayA = Array.isArray(a);
            var isArrayB = Array.isArray(b);
            if (isArrayA && isArrayB) {
              return a.length === b.length && a.every(function (e, i) {
                return looseEqual(e, b[i]);
              });
            } else if (a instanceof Date && b instanceof Date) {
              return a.getTime() === b.getTime();
            } else if (!isArrayA && !isArrayB) {
              var keysA = Object.keys(a);
              var keysB = Object.keys(b);
              return keysA.length === keysB.length && keysA.every(function (key) {
                return looseEqual(a[key], b[key]);
              });
            } else {
              return false;
            }
          } catch (e) {
            return false;
          }
        } else if (!isObjectA && !isObjectB) {
          return String(a) === String(b);
        } else {
          return false;
        }
      }
      function looseIndexOf(arr, val) {
        for (var i = 0; i < arr.length; i++) {
          if (looseEqual(arr[i], val)) {
            return i;
          }
        }
        return -1;
      }
      function once(fn) {
        var called = false;
        return function () {
          if (!called) {
            called = true;
            fn.apply(this, arguments);
          }
        };
      }
      var SSR_ATTR = "data-server-rendered";
      var ASSET_TYPES = ["component", "directive", "filter"];
      var LIFECYCLE_HOOKS = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"];
      var config = {
        optionMergeStrategies: Object.create(null),
        silent: false,
        productionTip: "development" !== "production",
        devtools: "development" !== "production",
        performance: false,
        errorHandler: null,
        warnHandler: null,
        ignoredElements: [],
        keyCodes: Object.create(null),
        isReservedTag: no,
        isReservedAttr: no,
        isUnknownElement: no,
        getTagNamespace: noop,
        parsePlatformTagName: identity,
        mustUseProp: no,
        async: true,
        _lifecycleHooks: LIFECYCLE_HOOKS
      };
      var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
      function isReserved(str) {
        var c = (str + "").charCodeAt(0);
        return c === 36 || c === 95;
      }
      function def(obj, key, val, enumerable) {
        Object.defineProperty(obj, key, {
          value: val,
          enumerable: !!enumerable,
          writable: true,
          configurable: true
        });
      }
      var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");
      function parsePath(path) {
        if (bailRE.test(path)) {
          return;
        }
        var segments = path.split(".");
        return function (obj) {
          for (var i = 0; i < segments.length; i++) {
            if (!obj) {
              return;
            }
            obj = obj[segments[i]];
          }
          return obj;
        };
      }
      var hasProto = ("__proto__" in ({}));
      var inBrowser = typeof window !== "undefined";
      var inWeex = typeof WXEnvironment !== "undefined" && !!WXEnvironment.platform;
      var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
      var UA = inBrowser && window.navigator.userAgent.toLowerCase();
      var isIE = UA && (/msie|trident/).test(UA);
      var isIE9 = UA && UA.indexOf("msie 9.0") > 0;
      var isEdge = UA && UA.indexOf("edge/") > 0;
      var isAndroid = UA && UA.indexOf("android") > 0 || weexPlatform === "android";
      var isIOS = UA && (/iphone|ipad|ipod|ios/).test(UA) || weexPlatform === "ios";
      var isChrome = UA && (/chrome\/\d+/).test(UA) && !isEdge;
      var isPhantomJS = UA && (/phantomjs/).test(UA);
      var isFF = UA && UA.match(/firefox\/(\d+)/);
      var nativeWatch = ({}).watch;
      var supportsPassive = false;
      if (inBrowser) {
        try {
          var opts = {};
          Object.defineProperty(opts, "passive", {
            get: function get() {
              supportsPassive = true;
            }
          });
          window.addEventListener("test-passive", null, opts);
        } catch (e) {}
      }
      var _isServer;
      var isServerRendering = function () {
        if (_isServer === undefined) {
          if (!inBrowser && !inWeex && typeof global !== "undefined") {
            _isServer = global["process"] && global["process"].env.VUE_ENV === "server";
          } else {
            _isServer = false;
          }
        }
        return _isServer;
      };
      var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
      function isNative(Ctor) {
        return typeof Ctor === "function" && (/native code/).test(Ctor.toString());
      }
      var hasSymbol = typeof Symbol !== "undefined" && isNative(Symbol) && typeof Reflect !== "undefined" && isNative(Reflect.ownKeys);
      var _Set;
      if (typeof Set !== "undefined" && isNative(Set)) {
        _Set = Set;
      } else {
        _Set = (function () {
          function Set() {
            this.set = Object.create(null);
          }
          Set.prototype.has = function has(key) {
            return this.set[key] === true;
          };
          Set.prototype.add = function add(key) {
            this.set[key] = true;
          };
          Set.prototype.clear = function clear() {
            this.set = Object.create(null);
          };
          return Set;
        })();
      }
      var warn = noop;
      var tip = noop;
      var generateComponentTrace = noop;
      var formatComponentName = noop;
      if (true) {
        var hasConsole = typeof console !== "undefined";
        var classifyRE = /(?:^|[-_])(\w)/g;
        var classify = function (str) {
          return str.replace(classifyRE, function (c) {
            return c.toUpperCase();
          }).replace(/[-_]/g, "");
        };
        warn = function (msg, vm) {
          var trace = vm ? generateComponentTrace(vm) : "";
          if (config.warnHandler) {
            config.warnHandler.call(null, msg, vm, trace);
          } else if (hasConsole && !config.silent) {
            console.error("[Vue warn]: " + msg + trace);
          }
        };
        tip = function (msg, vm) {
          if (hasConsole && !config.silent) {
            console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ""));
          }
        };
        formatComponentName = function (vm, includeFile) {
          if (vm.$root === vm) {
            return "<Root>";
          }
          var options = typeof vm === "function" && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
          var name = options.name || options._componentTag;
          var file = options.__file;
          if (!name && file) {
            var match = file.match(/([^/\\]+)\.vue$/);
            name = match && match[1];
          }
          return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : "");
        };
        var repeat = function (str, n) {
          var res = "";
          while (n) {
            if (n % 2 === 1) {
              res += str;
            }
            if (n > 1) {
              str += str;
            }
            n >>= 1;
          }
          return res;
        };
        generateComponentTrace = function (vm) {
          if (vm._isVue && vm.$parent) {
            var tree = [];
            var currentRecursiveSequence = 0;
            while (vm) {
              if (tree.length > 0) {
                var last = tree[tree.length - 1];
                if (last.constructor === vm.constructor) {
                  currentRecursiveSequence++;
                  vm = vm.$parent;
                  continue;
                } else if (currentRecursiveSequence > 0) {
                  tree[tree.length - 1] = [last, currentRecursiveSequence];
                  currentRecursiveSequence = 0;
                }
              }
              tree.push(vm);
              vm = vm.$parent;
            }
            return "\n\nfound in\n\n" + tree.map(function (vm, i) {
              return "" + (i === 0 ? "---> " : repeat(" ", 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
            }).join("\n");
          } else {
            return "\n\n(found in " + formatComponentName(vm) + ")";
          }
        };
      }
      var uid = 0;
      var Dep = function Dep() {
        this.id = uid++;
        this.subs = [];
      };
      Dep.prototype.addSub = function addSub(sub) {
        this.subs.push(sub);
      };
      Dep.prototype.removeSub = function removeSub(sub) {
        remove(this.subs, sub);
      };
      Dep.prototype.depend = function depend() {
        if (Dep.target) {
          Dep.target.addDep(this);
        }
      };
      Dep.prototype.notify = function notify() {
        var subs = this.subs.slice();
        if (true && !config.async) {
          subs.sort(function (a, b) {
            return a.id - b.id;
          });
        }
        for (var i = 0, l = subs.length; i < l; i++) {
          subs[i].update();
        }
      };
      Dep.target = null;
      var targetStack = [];
      function pushTarget(target) {
        targetStack.push(target);
        Dep.target = target;
      }
      function popTarget() {
        targetStack.pop();
        Dep.target = targetStack[targetStack.length - 1];
      }
      var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
        this.tag = tag;
        this.data = data;
        this.children = children;
        this.text = text;
        this.elm = elm;
        this.ns = undefined;
        this.context = context;
        this.fnContext = undefined;
        this.fnOptions = undefined;
        this.fnScopeId = undefined;
        this.key = data && data.key;
        this.componentOptions = componentOptions;
        this.componentInstance = undefined;
        this.parent = undefined;
        this.raw = false;
        this.isStatic = false;
        this.isRootInsert = true;
        this.isComment = false;
        this.isCloned = false;
        this.isOnce = false;
        this.asyncFactory = asyncFactory;
        this.asyncMeta = undefined;
        this.isAsyncPlaceholder = false;
      };
      var prototypeAccessors = {
        child: {
          configurable: true
        }
      };
      prototypeAccessors.child.get = function () {
        return this.componentInstance;
      };
      Object.defineProperties(VNode.prototype, prototypeAccessors);
      var createEmptyVNode = function (text) {
        if (text === void 0) text = "";
        var node = new VNode();
        node.text = text;
        node.isComment = true;
        return node;
      };
      function createTextVNode(val) {
        return new VNode(undefined, undefined, undefined, String(val));
      }
      function cloneVNode(vnode) {
        var cloned = new VNode(vnode.tag, vnode.data, vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
        cloned.ns = vnode.ns;
        cloned.isStatic = vnode.isStatic;
        cloned.key = vnode.key;
        cloned.isComment = vnode.isComment;
        cloned.fnContext = vnode.fnContext;
        cloned.fnOptions = vnode.fnOptions;
        cloned.fnScopeId = vnode.fnScopeId;
        cloned.asyncMeta = vnode.asyncMeta;
        cloned.isCloned = true;
        return cloned;
      }
      var arrayProto = Array.prototype;
      var arrayMethods = Object.create(arrayProto);
      var methodsToPatch = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
      methodsToPatch.forEach(function (method) {
        var original = arrayProto[method];
        def(arrayMethods, method, function mutator() {
          var args = [], len = arguments.length;
          while (len--) args[len] = arguments[len];
          var result = original.apply(this, args);
          var ob = this.__ob__;
          var inserted;
          switch (method) {
            case "push":
            case "unshift":
              inserted = args;
              break;
            case "splice":
              inserted = args.slice(2);
              break;
          }
          if (inserted) {
            ob.observeArray(inserted);
          }
          ob.dep.notify();
          return result;
        });
      });
      var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
      var shouldObserve = true;
      function toggleObserving(value) {
        shouldObserve = value;
      }
      var Observer = function Observer(value) {
        this.value = value;
        this.dep = new Dep();
        this.vmCount = 0;
        def(value, "__ob__", this);
        if (Array.isArray(value)) {
          if (hasProto) {
            protoAugment(value, arrayMethods);
          } else {
            copyAugment(value, arrayMethods, arrayKeys);
          }
          this.observeArray(value);
        } else {
          this.walk(value);
        }
      };
      Observer.prototype.walk = function walk(obj) {
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
          defineReactive$$1(obj, keys[i]);
        }
      };
      Observer.prototype.observeArray = function observeArray(items) {
        for (var i = 0, l = items.length; i < l; i++) {
          observe(items[i]);
        }
      };
      function protoAugment(target, src) {
        target.__proto__ = src;
      }
      function copyAugment(target, src, keys) {
        for (var i = 0, l = keys.length; i < l; i++) {
          var key = keys[i];
          def(target, key, src[key]);
        }
      }
      function observe(value, asRootData) {
        if (!isObject(value) || value instanceof VNode) {
          return;
        }
        var ob;
        if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
          ob = value.__ob__;
        } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
          ob = new Observer(value);
        }
        if (asRootData && ob) {
          ob.vmCount++;
        }
        return ob;
      }
      function defineReactive$$1(obj, key, val, customSetter, shallow) {
        var dep = new Dep();
        var property = Object.getOwnPropertyDescriptor(obj, key);
        if (property && property.configurable === false) {
          return;
        }
        var getter = property && property.get;
        var setter = property && property.set;
        if ((!getter || setter) && arguments.length === 2) {
          val = obj[key];
        }
        var childOb = !shallow && observe(val);
        Object.defineProperty(obj, key, {
          enumerable: true,
          configurable: true,
          get: function reactiveGetter() {
            var value = getter ? getter.call(obj) : val;
            if (Dep.target) {
              dep.depend();
              if (childOb) {
                childOb.dep.depend();
                if (Array.isArray(value)) {
                  dependArray(value);
                }
              }
            }
            return value;
          },
          set: function reactiveSetter(newVal) {
            var value = getter ? getter.call(obj) : val;
            if (newVal === value || newVal !== newVal && value !== value) {
              return;
            }
            if (true && customSetter) {
              customSetter();
            }
            if (getter && !setter) {
              return;
            }
            if (setter) {
              setter.call(obj, newVal);
            } else {
              val = newVal;
            }
            childOb = !shallow && observe(newVal);
            dep.notify();
          }
        });
      }
      function set(target, key, val) {
        if (true && (isUndef(target) || isPrimitive(target))) {
          warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
        }
        if (Array.isArray(target) && isValidArrayIndex(key)) {
          target.length = Math.max(target.length, key);
          target.splice(key, 1, val);
          return val;
        }
        if ((key in target) && !((key in Object.prototype))) {
          target[key] = val;
          return val;
        }
        var ob = target.__ob__;
        if (target._isVue || ob && ob.vmCount) {
          true && warn("Avoid adding reactive properties to a Vue instance or its root $data " + "at runtime - declare it upfront in the data option.");
          return val;
        }
        if (!ob) {
          target[key] = val;
          return val;
        }
        defineReactive$$1(ob.value, key, val);
        ob.dep.notify();
        return val;
      }
      function del(target, key) {
        if (true && (isUndef(target) || isPrimitive(target))) {
          warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
        }
        if (Array.isArray(target) && isValidArrayIndex(key)) {
          target.splice(key, 1);
          return;
        }
        var ob = target.__ob__;
        if (target._isVue || ob && ob.vmCount) {
          true && warn("Avoid deleting properties on a Vue instance or its root $data " + "- just set it to null.");
          return;
        }
        if (!hasOwn(target, key)) {
          return;
        }
        delete target[key];
        if (!ob) {
          return;
        }
        ob.dep.notify();
      }
      function dependArray(value) {
        for (var e = void 0, i = 0, l = value.length; i < l; i++) {
          e = value[i];
          e && e.__ob__ && e.__ob__.dep.depend();
          if (Array.isArray(e)) {
            dependArray(e);
          }
        }
      }
      var strats = config.optionMergeStrategies;
      if (true) {
        strats.el = strats.propsData = function (parent, child, vm, key) {
          if (!vm) {
            warn("option \"" + key + "\" can only be used during instance " + "creation with the `new` keyword.");
          }
          return defaultStrat(parent, child);
        };
      }
      function mergeData(to, from) {
        if (!from) {
          return to;
        }
        var key, toVal, fromVal;
        var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
        for (var i = 0; i < keys.length; i++) {
          key = keys[i];
          if (key === "__ob__") {
            continue;
          }
          toVal = to[key];
          fromVal = from[key];
          if (!hasOwn(to, key)) {
            set(to, key, fromVal);
          } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
            mergeData(toVal, fromVal);
          }
        }
        return to;
      }
      function mergeDataOrFn(parentVal, childVal, vm) {
        if (!vm) {
          if (!childVal) {
            return parentVal;
          }
          if (!parentVal) {
            return childVal;
          }
          return function mergedDataFn() {
            return mergeData(typeof childVal === "function" ? childVal.call(this, this) : childVal, typeof parentVal === "function" ? parentVal.call(this, this) : parentVal);
          };
        } else {
          return function mergedInstanceDataFn() {
            var instanceData = typeof childVal === "function" ? childVal.call(vm, vm) : childVal;
            var defaultData = typeof parentVal === "function" ? parentVal.call(vm, vm) : parentVal;
            if (instanceData) {
              return mergeData(instanceData, defaultData);
            } else {
              return defaultData;
            }
          };
        }
      }
      strats.data = function (parentVal, childVal, vm) {
        if (!vm) {
          if (childVal && typeof childVal !== "function") {
            true && warn("The \"data\" option should be a function " + "that returns a per-instance value in component " + "definitions.", vm);
            return parentVal;
          }
          return mergeDataOrFn(parentVal, childVal);
        }
        return mergeDataOrFn(parentVal, childVal, vm);
      };
      function mergeHook(parentVal, childVal) {
        var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
        return res ? dedupeHooks(res) : res;
      }
      function dedupeHooks(hooks) {
        var res = [];
        for (var i = 0; i < hooks.length; i++) {
          if (res.indexOf(hooks[i]) === -1) {
            res.push(hooks[i]);
          }
        }
        return res;
      }
      LIFECYCLE_HOOKS.forEach(function (hook) {
        strats[hook] = mergeHook;
      });
      function mergeAssets(parentVal, childVal, vm, key) {
        var res = Object.create(parentVal || null);
        if (childVal) {
          true && assertObjectType(key, childVal, vm);
          return extend(res, childVal);
        } else {
          return res;
        }
      }
      ASSET_TYPES.forEach(function (type) {
        strats[type + "s"] = mergeAssets;
      });
      strats.watch = function (parentVal, childVal, vm, key) {
        if (parentVal === nativeWatch) {
          parentVal = undefined;
        }
        if (childVal === nativeWatch) {
          childVal = undefined;
        }
        if (!childVal) {
          return Object.create(parentVal || null);
        }
        if (true) {
          assertObjectType(key, childVal, vm);
        }
        if (!parentVal) {
          return childVal;
        }
        var ret = {};
        extend(ret, parentVal);
        for (var key$1 in childVal) {
          var parent = ret[key$1];
          var child = childVal[key$1];
          if (parent && !Array.isArray(parent)) {
            parent = [parent];
          }
          ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
        }
        return ret;
      };
      strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
        if (childVal && "development" !== "production") {
          assertObjectType(key, childVal, vm);
        }
        if (!parentVal) {
          return childVal;
        }
        var ret = Object.create(null);
        extend(ret, parentVal);
        if (childVal) {
          extend(ret, childVal);
        }
        return ret;
      };
      strats.provide = mergeDataOrFn;
      var defaultStrat = function (parentVal, childVal) {
        return childVal === undefined ? parentVal : childVal;
      };
      function checkComponents(options) {
        for (var key in options.components) {
          validateComponentName(key);
        }
      }
      function validateComponentName(name) {
        if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
          warn("Invalid component name: \"" + name + "\". Component names " + "should conform to valid custom element name in html5 specification.");
        }
        if (isBuiltInTag(name) || config.isReservedTag(name)) {
          warn("Do not use built-in or reserved HTML elements as component " + "id: " + name);
        }
      }
      function normalizeProps(options, vm) {
        var props = options.props;
        if (!props) {
          return;
        }
        var res = {};
        var i, val, name;
        if (Array.isArray(props)) {
          i = props.length;
          while (i--) {
            val = props[i];
            if (typeof val === "string") {
              name = camelize(val);
              res[name] = {
                type: null
              };
            } else if (true) {
              warn("props must be strings when using array syntax.");
            }
          }
        } else if (isPlainObject(props)) {
          for (var key in props) {
            val = props[key];
            name = camelize(key);
            res[name] = isPlainObject(val) ? val : {
              type: val
            };
          }
        } else if (true) {
          warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
        }
        options.props = res;
      }
      function normalizeInject(options, vm) {
        var inject = options.inject;
        if (!inject) {
          return;
        }
        var normalized = options.inject = {};
        if (Array.isArray(inject)) {
          for (var i = 0; i < inject.length; i++) {
            normalized[inject[i]] = {
              from: inject[i]
            };
          }
        } else if (isPlainObject(inject)) {
          for (var key in inject) {
            var val = inject[key];
            normalized[key] = isPlainObject(val) ? extend({
              from: key
            }, val) : {
              from: val
            };
          }
        } else if (true) {
          warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
        }
      }
      function normalizeDirectives(options) {
        var dirs = options.directives;
        if (dirs) {
          for (var key in dirs) {
            var def$$1 = dirs[key];
            if (typeof def$$1 === "function") {
              dirs[key] = {
                bind: def$$1,
                update: def$$1
              };
            }
          }
        }
      }
      function assertObjectType(name, value, vm) {
        if (!isPlainObject(value)) {
          warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
        }
      }
      function mergeOptions(parent, child, vm) {
        if (true) {
          checkComponents(child);
        }
        if (typeof child === "function") {
          child = child.options;
        }
        normalizeProps(child, vm);
        normalizeInject(child, vm);
        normalizeDirectives(child);
        if (!child._base) {
          if (child.extends) {
            parent = mergeOptions(parent, child.extends, vm);
          }
          if (child.mixins) {
            for (var i = 0, l = child.mixins.length; i < l; i++) {
              parent = mergeOptions(parent, child.mixins[i], vm);
            }
          }
        }
        var options = {};
        var key;
        for (key in parent) {
          mergeField(key);
        }
        for (key in child) {
          if (!hasOwn(parent, key)) {
            mergeField(key);
          }
        }
        function mergeField(key) {
          var strat = strats[key] || defaultStrat;
          options[key] = strat(parent[key], child[key], vm, key);
        }
        return options;
      }
      function resolveAsset(options, type, id, warnMissing) {
        if (typeof id !== "string") {
          return;
        }
        var assets = options[type];
        if (hasOwn(assets, id)) {
          return assets[id];
        }
        var camelizedId = camelize(id);
        if (hasOwn(assets, camelizedId)) {
          return assets[camelizedId];
        }
        var PascalCaseId = capitalize(camelizedId);
        if (hasOwn(assets, PascalCaseId)) {
          return assets[PascalCaseId];
        }
        var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
        if (true && warnMissing && !res) {
          warn("Failed to resolve " + type.slice(0, -1) + ": " + id, options);
        }
        return res;
      }
      function validateProp(key, propOptions, propsData, vm) {
        var prop = propOptions[key];
        var absent = !hasOwn(propsData, key);
        var value = propsData[key];
        var booleanIndex = getTypeIndex(Boolean, prop.type);
        if (booleanIndex > -1) {
          if (absent && !hasOwn(prop, "default")) {
            value = false;
          } else if (value === "" || value === hyphenate(key)) {
            var stringIndex = getTypeIndex(String, prop.type);
            if (stringIndex < 0 || booleanIndex < stringIndex) {
              value = true;
            }
          }
        }
        if (value === undefined) {
          value = getPropDefaultValue(vm, prop, key);
          var prevShouldObserve = shouldObserve;
          toggleObserving(true);
          observe(value);
          toggleObserving(prevShouldObserve);
        }
        if (true) {
          assertProp(prop, key, value, vm, absent);
        }
        return value;
      }
      function getPropDefaultValue(vm, prop, key) {
        if (!hasOwn(prop, "default")) {
          return undefined;
        }
        var def = prop.default;
        if (true && isObject(def)) {
          warn("Invalid default value for prop \"" + key + "\": " + "Props with type Object/Array must use a factory function " + "to return the default value.", vm);
        }
        if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
          return vm._props[key];
        }
        return typeof def === "function" && getType(prop.type) !== "Function" ? def.call(vm) : def;
      }
      function assertProp(prop, name, value, vm, absent) {
        if (prop.required && absent) {
          warn("Missing required prop: \"" + name + "\"", vm);
          return;
        }
        if (value == null && !prop.required) {
          return;
        }
        var type = prop.type;
        var valid = !type || type === true;
        var expectedTypes = [];
        if (type) {
          if (!Array.isArray(type)) {
            type = [type];
          }
          for (var i = 0; i < type.length && !valid; i++) {
            var assertedType = assertType(value, type[i]);
            expectedTypes.push(assertedType.expectedType || "");
            valid = assertedType.valid;
          }
        }
        if (!valid) {
          warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
          return;
        }
        var validator = prop.validator;
        if (validator) {
          if (!validator(value)) {
            warn("Invalid prop: custom validator check failed for prop \"" + name + "\".", vm);
          }
        }
      }
      var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;
      function assertType(value, type) {
        var valid;
        var expectedType = getType(type);
        if (simpleCheckRE.test(expectedType)) {
          var t = typeof value;
          valid = t === expectedType.toLowerCase();
          if (!valid && t === "object") {
            valid = value instanceof type;
          }
        } else if (expectedType === "Object") {
          valid = isPlainObject(value);
        } else if (expectedType === "Array") {
          valid = Array.isArray(value);
        } else {
          valid = value instanceof type;
        }
        return {
          valid: valid,
          expectedType: expectedType
        };
      }
      function getType(fn) {
        var match = fn && fn.toString().match(/^\s*function (\w+)/);
        return match ? match[1] : "";
      }
      function isSameType(a, b) {
        return getType(a) === getType(b);
      }
      function getTypeIndex(type, expectedTypes) {
        if (!Array.isArray(expectedTypes)) {
          return isSameType(expectedTypes, type) ? 0 : -1;
        }
        for (var i = 0, len = expectedTypes.length; i < len; i++) {
          if (isSameType(expectedTypes[i], type)) {
            return i;
          }
        }
        return -1;
      }
      function getInvalidTypeMessage(name, value, expectedTypes) {
        var message = "Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(", ");
        var expectedType = expectedTypes[0];
        var receivedType = toRawType(value);
        var expectedValue = styleValue(value, expectedType);
        var receivedValue = styleValue(value, receivedType);
        if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
          message += " with value " + expectedValue;
        }
        message += ", got " + receivedType + " ";
        if (isExplicable(receivedType)) {
          message += "with value " + receivedValue + ".";
        }
        return message;
      }
      function styleValue(value, type) {
        if (type === "String") {
          return "\"" + value + "\"";
        } else if (type === "Number") {
          return "" + Number(value);
        } else {
          return "" + value;
        }
      }
      function isExplicable(value) {
        var explicitTypes = ["string", "number", "boolean"];
        return explicitTypes.some(function (elem) {
          return value.toLowerCase() === elem;
        });
      }
      function isBoolean() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        return args.some(function (elem) {
          return elem.toLowerCase() === "boolean";
        });
      }
      function handleError(err, vm, info) {
        pushTarget();
        try {
          if (vm) {
            var cur = vm;
            while (cur = cur.$parent) {
              var hooks = cur.$options.errorCaptured;
              if (hooks) {
                for (var i = 0; i < hooks.length; i++) {
                  try {
                    var capture = hooks[i].call(cur, err, vm, info) === false;
                    if (capture) {
                      return;
                    }
                  } catch (e) {
                    globalHandleError(e, cur, "errorCaptured hook");
                  }
                }
              }
            }
          }
          globalHandleError(err, vm, info);
        } finally {
          popTarget();
        }
      }
      function invokeWithErrorHandling(handler, context, args, vm, info) {
        var res;
        try {
          res = args ? handler.apply(context, args) : handler.call(context);
          if (res && !res._isVue && isPromise(res) && !res._handled) {
            res.catch(function (e) {
              return handleError(e, vm, info + " (Promise/async)");
            });
            res._handled = true;
          }
        } catch (e) {
          handleError(e, vm, info);
        }
        return res;
      }
      function globalHandleError(err, vm, info) {
        if (config.errorHandler) {
          try {
            return config.errorHandler.call(null, err, vm, info);
          } catch (e) {
            if (e !== err) {
              logError(e, null, "config.errorHandler");
            }
          }
        }
        logError(err, vm, info);
      }
      function logError(err, vm, info) {
        if (true) {
          warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
        }
        if ((inBrowser || inWeex) && typeof console !== "undefined") {
          console.error(err);
        } else {
          throw err;
        }
      }
      var isUsingMicroTask = false;
      var callbacks = [];
      var pending = false;
      function flushCallbacks() {
        pending = false;
        var copies = callbacks.slice(0);
        callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
          copies[i]();
        }
      }
      var timerFunc;
      if (typeof Promise !== "undefined" && isNative(Promise)) {
        var p = Promise.resolve();
        timerFunc = function () {
          p.then(flushCallbacks);
          if (isIOS) {
            setTimeout(noop);
          }
        };
        isUsingMicroTask = true;
      } else if (!isIE && typeof MutationObserver !== "undefined" && (isNative(MutationObserver) || MutationObserver.toString() === "[object MutationObserverConstructor]")) {
        var counter = 1;
        var observer = new MutationObserver(flushCallbacks);
        var textNode = document.createTextNode(String(counter));
        observer.observe(textNode, {
          characterData: true
        });
        timerFunc = function () {
          counter = (counter + 1) % 2;
          textNode.data = String(counter);
        };
        isUsingMicroTask = true;
      } else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
        timerFunc = function () {
          setImmediate(flushCallbacks);
        };
      } else {
        timerFunc = function () {
          setTimeout(flushCallbacks, 0);
        };
      }
      function nextTick(cb, ctx) {
        var _resolve;
        callbacks.push(function () {
          if (cb) {
            try {
              cb.call(ctx);
            } catch (e) {
              handleError(e, ctx, "nextTick");
            }
          } else if (_resolve) {
            _resolve(ctx);
          }
        });
        if (!pending) {
          pending = true;
          timerFunc();
        }
        if (!cb && typeof Promise !== "undefined") {
          return new Promise(function (resolve) {
            _resolve = resolve;
          });
        }
      }
      var initProxy;
      if (true) {
        var allowedGlobals = makeMap("Infinity,undefined,NaN,isFinite,isNaN," + "parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent," + "Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl," + "require");
        var warnNonPresent = function (target, key) {
          warn("Property or method \"" + key + "\" is not defined on the instance but " + "referenced during render. Make sure that this property is reactive, " + "either in the data option, or for class-based components, by " + "initializing the property. " + "See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.", target);
        };
        var warnReservedPrefix = function (target, key) {
          warn("Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " + "properties starting with \"$\" or \"_\" are not proxied in the Vue instance to " + "prevent conflicts with Vue internals" + "See: https://vuejs.org/v2/api/#data", target);
        };
        var hasProxy = typeof Proxy !== "undefined" && isNative(Proxy);
        if (hasProxy) {
          var isBuiltInModifier = makeMap("stop,prevent,self,ctrl,shift,alt,meta,exact");
          config.keyCodes = new Proxy(config.keyCodes, {
            set: function set(target, key, value) {
              if (isBuiltInModifier(key)) {
                warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
                return false;
              } else {
                target[key] = value;
                return true;
              }
            }
          });
        }
        var hasHandler = {
          has: function has(target, key) {
            var has = (key in target);
            var isAllowed = allowedGlobals(key) || typeof key === "string" && key.charAt(0) === "_" && !((key in target.$data));
            if (!has && !isAllowed) {
              if ((key in target.$data)) {
                warnReservedPrefix(target, key);
              } else {
                warnNonPresent(target, key);
              }
            }
            return has || !isAllowed;
          }
        };
        var getHandler = {
          get: function get(target, key) {
            if (typeof key === "string" && !((key in target))) {
              if ((key in target.$data)) {
                warnReservedPrefix(target, key);
              } else {
                warnNonPresent(target, key);
              }
            }
            return target[key];
          }
        };
        initProxy = function initProxy(vm) {
          if (hasProxy) {
            var options = vm.$options;
            var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
            vm._renderProxy = new Proxy(vm, handlers);
          } else {
            vm._renderProxy = vm;
          }
        };
      }
      var seenObjects = new _Set();
      function traverse(val) {
        _traverse(val, seenObjects);
        seenObjects.clear();
      }
      function _traverse(val, seen) {
        var i, keys;
        var isA = Array.isArray(val);
        if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
          return;
        }
        if (val.__ob__) {
          var depId = val.__ob__.dep.id;
          if (seen.has(depId)) {
            return;
          }
          seen.add(depId);
        }
        if (isA) {
          i = val.length;
          while (i--) {
            _traverse(val[i], seen);
          }
        } else {
          keys = Object.keys(val);
          i = keys.length;
          while (i--) {
            _traverse(val[keys[i]], seen);
          }
        }
      }
      var mark;
      var measure;
      if (true) {
        var perf = inBrowser && window.performance;
        if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
          mark = function (tag) {
            return perf.mark(tag);
          };
          measure = function (name, startTag, endTag) {
            perf.measure(name, startTag, endTag);
            perf.clearMarks(startTag);
            perf.clearMarks(endTag);
          };
        }
      }
      var normalizeEvent = cached(function (name) {
        var passive = name.charAt(0) === "&";
        name = passive ? name.slice(1) : name;
        var once$$1 = name.charAt(0) === "~";
        name = once$$1 ? name.slice(1) : name;
        var capture = name.charAt(0) === "!";
        name = capture ? name.slice(1) : name;
        return {
          name: name,
          once: once$$1,
          capture: capture,
          passive: passive
        };
      });
      function createFnInvoker(fns, vm) {
        function invoker() {
          var arguments$1 = arguments;
          var fns = invoker.fns;
          if (Array.isArray(fns)) {
            var cloned = fns.slice();
            for (var i = 0; i < cloned.length; i++) {
              invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
            }
          } else {
            return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
          }
        }
        invoker.fns = fns;
        return invoker;
      }
      function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
        var name, def$$1, cur, old, event;
        for (name in on) {
          def$$1 = cur = on[name];
          old = oldOn[name];
          event = normalizeEvent(name);
          if (isUndef(cur)) {
            true && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
          } else if (isUndef(old)) {
            if (isUndef(cur.fns)) {
              cur = on[name] = createFnInvoker(cur, vm);
            }
            if (isTrue(event.once)) {
              cur = on[name] = createOnceHandler(event.name, cur, event.capture);
            }
            add(event.name, cur, event.capture, event.passive, event.params);
          } else if (cur !== old) {
            old.fns = cur;
            on[name] = old;
          }
        }
        for (name in oldOn) {
          if (isUndef(on[name])) {
            event = normalizeEvent(name);
            remove$$1(event.name, oldOn[name], event.capture);
          }
        }
      }
      function mergeVNodeHook(def, hookKey, hook) {
        if (def instanceof VNode) {
          def = def.data.hook || (def.data.hook = {});
        }
        var invoker;
        var oldHook = def[hookKey];
        function wrappedHook() {
          hook.apply(this, arguments);
          remove(invoker.fns, wrappedHook);
        }
        if (isUndef(oldHook)) {
          invoker = createFnInvoker([wrappedHook]);
        } else {
          if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
            invoker = oldHook;
            invoker.fns.push(wrappedHook);
          } else {
            invoker = createFnInvoker([oldHook, wrappedHook]);
          }
        }
        invoker.merged = true;
        def[hookKey] = invoker;
      }
      function extractPropsFromVNodeData(data, Ctor, tag) {
        var propOptions = Ctor.options.props;
        if (isUndef(propOptions)) {
          return;
        }
        var res = {};
        var attrs = data.attrs;
        var props = data.props;
        if (isDef(attrs) || isDef(props)) {
          for (var key in propOptions) {
            var altKey = hyphenate(key);
            if (true) {
              var keyInLowerCase = key.toLowerCase();
              if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
                tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
              }
            }
            checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
          }
        }
        return res;
      }
      function checkProp(res, hash, key, altKey, preserve) {
        if (isDef(hash)) {
          if (hasOwn(hash, key)) {
            res[key] = hash[key];
            if (!preserve) {
              delete hash[key];
            }
            return true;
          } else if (hasOwn(hash, altKey)) {
            res[key] = hash[altKey];
            if (!preserve) {
              delete hash[altKey];
            }
            return true;
          }
        }
        return false;
      }
      function simpleNormalizeChildren(children) {
        for (var i = 0; i < children.length; i++) {
          if (Array.isArray(children[i])) {
            return Array.prototype.concat.apply([], children);
          }
        }
        return children;
      }
      function normalizeChildren(children) {
        return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
      }
      function isTextNode(node) {
        return isDef(node) && isDef(node.text) && isFalse(node.isComment);
      }
      function normalizeArrayChildren(children, nestedIndex) {
        var res = [];
        var i, c, lastIndex, last;
        for (i = 0; i < children.length; i++) {
          c = children[i];
          if (isUndef(c) || typeof c === "boolean") {
            continue;
          }
          lastIndex = res.length - 1;
          last = res[lastIndex];
          if (Array.isArray(c)) {
            if (c.length > 0) {
              c = normalizeArrayChildren(c, (nestedIndex || "") + "_" + i);
              if (isTextNode(c[0]) && isTextNode(last)) {
                res[lastIndex] = createTextVNode(last.text + c[0].text);
                c.shift();
              }
              res.push.apply(res, c);
            }
          } else if (isPrimitive(c)) {
            if (isTextNode(last)) {
              res[lastIndex] = createTextVNode(last.text + c);
            } else if (c !== "") {
              res.push(createTextVNode(c));
            }
          } else {
            if (isTextNode(c) && isTextNode(last)) {
              res[lastIndex] = createTextVNode(last.text + c.text);
            } else {
              if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
                c.key = "__vlist" + nestedIndex + "_" + i + "__";
              }
              res.push(c);
            }
          }
        }
        return res;
      }
      function initProvide(vm) {
        var provide = vm.$options.provide;
        if (provide) {
          vm._provided = typeof provide === "function" ? provide.call(vm) : provide;
        }
      }
      function initInjections(vm) {
        var result = resolveInject(vm.$options.inject, vm);
        if (result) {
          toggleObserving(false);
          Object.keys(result).forEach(function (key) {
            if (true) {
              defineReactive$$1(vm, key, result[key], function () {
                warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
              });
            } else {}
          });
          toggleObserving(true);
        }
      }
      function resolveInject(inject, vm) {
        if (inject) {
          var result = Object.create(null);
          var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (key === "__ob__") {
              continue;
            }
            var provideKey = inject[key].from;
            var source = vm;
            while (source) {
              if (source._provided && hasOwn(source._provided, provideKey)) {
                result[key] = source._provided[provideKey];
                break;
              }
              source = source.$parent;
            }
            if (!source) {
              if (("default" in inject[key])) {
                var provideDefault = inject[key].default;
                result[key] = typeof provideDefault === "function" ? provideDefault.call(vm) : provideDefault;
              } else if (true) {
                warn("Injection \"" + key + "\" not found", vm);
              }
            }
          }
          return result;
        }
      }
      function resolveSlots(children, context) {
        if (!children || !children.length) {
          return {};
        }
        var slots = {};
        for (var i = 0, l = children.length; i < l; i++) {
          var child = children[i];
          var data = child.data;
          if (data && data.attrs && data.attrs.slot) {
            delete data.attrs.slot;
          }
          if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
            var name = data.slot;
            var slot = slots[name] || (slots[name] = []);
            if (child.tag === "template") {
              slot.push.apply(slot, child.children || []);
            } else {
              slot.push(child);
            }
          } else {
            (slots.default || (slots.default = [])).push(child);
          }
        }
        for (var name$1 in slots) {
          if (slots[name$1].every(isWhitespace)) {
            delete slots[name$1];
          }
        }
        return slots;
      }
      function isWhitespace(node) {
        return node.isComment && !node.asyncFactory || node.text === " ";
      }
      function normalizeScopedSlots(slots, normalSlots, prevSlots) {
        var res;
        var hasNormalSlots = Object.keys(normalSlots).length > 0;
        var isStable = slots ? !!slots.$stable : !hasNormalSlots;
        var key = slots && slots.$key;
        if (!slots) {
          res = {};
        } else if (slots._normalized) {
          return slots._normalized;
        } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
          return prevSlots;
        } else {
          res = {};
          for (var key$1 in slots) {
            if (slots[key$1] && key$1[0] !== "$") {
              res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
            }
          }
        }
        for (var key$2 in normalSlots) {
          if (!((key$2 in res))) {
            res[key$2] = proxyNormalSlot(normalSlots, key$2);
          }
        }
        if (slots && Object.isExtensible(slots)) {
          slots._normalized = res;
        }
        def(res, "$stable", isStable);
        def(res, "$key", key);
        def(res, "$hasNormal", hasNormalSlots);
        return res;
      }
      function normalizeScopedSlot(normalSlots, key, fn) {
        var normalized = function () {
          var res = arguments.length ? fn.apply(null, arguments) : fn({});
          res = res && typeof res === "object" && !Array.isArray(res) ? [res] : normalizeChildren(res);
          return res && (res.length === 0 || res.length === 1 && res[0].isComment) ? undefined : res;
        };
        if (fn.proxy) {
          Object.defineProperty(normalSlots, key, {
            get: normalized,
            enumerable: true,
            configurable: true
          });
        }
        return normalized;
      }
      function proxyNormalSlot(slots, key) {
        return function () {
          return slots[key];
        };
      }
      function renderList(val, render) {
        var ret, i, l, keys, key;
        if (Array.isArray(val) || typeof val === "string") {
          ret = new Array(val.length);
          for ((i = 0, l = val.length); i < l; i++) {
            ret[i] = render(val[i], i);
          }
        } else if (typeof val === "number") {
          ret = new Array(val);
          for (i = 0; i < val; i++) {
            ret[i] = render(i + 1, i);
          }
        } else if (isObject(val)) {
          if (hasSymbol && val[Symbol.iterator]) {
            ret = [];
            var iterator = val[Symbol.iterator]();
            var result = iterator.next();
            while (!result.done) {
              ret.push(render(result.value, ret.length));
              result = iterator.next();
            }
          } else {
            keys = Object.keys(val);
            ret = new Array(keys.length);
            for ((i = 0, l = keys.length); i < l; i++) {
              key = keys[i];
              ret[i] = render(val[key], key, i);
            }
          }
        }
        if (!isDef(ret)) {
          ret = [];
        }
        ret._isVList = true;
        return ret;
      }
      function renderSlot(name, fallback, props, bindObject) {
        var scopedSlotFn = this.$scopedSlots[name];
        var nodes;
        if (scopedSlotFn) {
          props = props || ({});
          if (bindObject) {
            if (true && !isObject(bindObject)) {
              warn("slot v-bind without argument expects an Object", this);
            }
            props = extend(extend({}, bindObject), props);
          }
          nodes = scopedSlotFn(props) || fallback;
        } else {
          nodes = this.$slots[name] || fallback;
        }
        var target = props && props.slot;
        if (target) {
          return this.$createElement("template", {
            slot: target
          }, nodes);
        } else {
          return nodes;
        }
      }
      function resolveFilter(id) {
        return resolveAsset(this.$options, "filters", id, true) || identity;
      }
      function isKeyNotMatch(expect, actual) {
        if (Array.isArray(expect)) {
          return expect.indexOf(actual) === -1;
        } else {
          return expect !== actual;
        }
      }
      function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
        var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
        if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
          return isKeyNotMatch(builtInKeyName, eventKeyName);
        } else if (mappedKeyCode) {
          return isKeyNotMatch(mappedKeyCode, eventKeyCode);
        } else if (eventKeyName) {
          return hyphenate(eventKeyName) !== key;
        }
      }
      function bindObjectProps(data, tag, value, asProp, isSync) {
        if (value) {
          if (!isObject(value)) {
            true && warn("v-bind without argument expects an Object or Array value", this);
          } else {
            if (Array.isArray(value)) {
              value = toObject(value);
            }
            var hash;
            var loop = function (key) {
              if (key === "class" || key === "style" || isReservedAttribute(key)) {
                hash = data;
              } else {
                var type = data.attrs && data.attrs.type;
                hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
              }
              var camelizedKey = camelize(key);
              var hyphenatedKey = hyphenate(key);
              if (!((camelizedKey in hash)) && !((hyphenatedKey in hash))) {
                hash[key] = value[key];
                if (isSync) {
                  var on = data.on || (data.on = {});
                  on["update:" + key] = function ($event) {
                    value[key] = $event;
                  };
                }
              }
            };
            for (var key in value) loop(key);
          }
        }
        return data;
      }
      function renderStatic(index, isInFor) {
        var cached = this._staticTrees || (this._staticTrees = []);
        var tree = cached[index];
        if (tree && !isInFor) {
          return tree;
        }
        tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this);
        markStatic(tree, "__static__" + index, false);
        return tree;
      }
      function markOnce(tree, index, key) {
        markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
        return tree;
      }
      function markStatic(tree, key, isOnce) {
        if (Array.isArray(tree)) {
          for (var i = 0; i < tree.length; i++) {
            if (tree[i] && typeof tree[i] !== "string") {
              markStaticNode(tree[i], key + "_" + i, isOnce);
            }
          }
        } else {
          markStaticNode(tree, key, isOnce);
        }
      }
      function markStaticNode(node, key, isOnce) {
        node.isStatic = true;
        node.key = key;
        node.isOnce = isOnce;
      }
      function bindObjectListeners(data, value) {
        if (value) {
          if (!isPlainObject(value)) {
            true && warn("v-on without argument expects an Object value", this);
          } else {
            var on = data.on = data.on ? extend({}, data.on) : {};
            for (var key in value) {
              var existing = on[key];
              var ours = value[key];
              on[key] = existing ? [].concat(existing, ours) : ours;
            }
          }
        }
        return data;
      }
      function resolveScopedSlots(fns, res, hasDynamicKeys, contentHashKey) {
        res = res || ({
          $stable: !hasDynamicKeys
        });
        for (var i = 0; i < fns.length; i++) {
          var slot = fns[i];
          if (Array.isArray(slot)) {
            resolveScopedSlots(slot, res, hasDynamicKeys);
          } else if (slot) {
            if (slot.proxy) {
              slot.fn.proxy = true;
            }
            res[slot.key] = slot.fn;
          }
        }
        if (contentHashKey) {
          res.$key = contentHashKey;
        }
        return res;
      }
      function bindDynamicKeys(baseObj, values) {
        for (var i = 0; i < values.length; i += 2) {
          var key = values[i];
          if (typeof key === "string" && key) {
            baseObj[values[i]] = values[i + 1];
          } else if (true && key !== "" && key !== null) {
            warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
          }
        }
        return baseObj;
      }
      function prependModifier(value, symbol) {
        return typeof value === "string" ? symbol + value : value;
      }
      function installRenderHelpers(target) {
        target._o = markOnce;
        target._n = toNumber;
        target._s = toString;
        target._l = renderList;
        target._t = renderSlot;
        target._q = looseEqual;
        target._i = looseIndexOf;
        target._m = renderStatic;
        target._f = resolveFilter;
        target._k = checkKeyCodes;
        target._b = bindObjectProps;
        target._v = createTextVNode;
        target._e = createEmptyVNode;
        target._u = resolveScopedSlots;
        target._g = bindObjectListeners;
        target._d = bindDynamicKeys;
        target._p = prependModifier;
      }
      function FunctionalRenderContext(data, props, children, parent, Ctor) {
        var this$1 = this;
        var options = Ctor.options;
        var contextVm;
        if (hasOwn(parent, "_uid")) {
          contextVm = Object.create(parent);
          contextVm._original = parent;
        } else {
          contextVm = parent;
          parent = parent._original;
        }
        var isCompiled = isTrue(options._compiled);
        var needNormalization = !isCompiled;
        this.data = data;
        this.props = props;
        this.children = children;
        this.parent = parent;
        this.listeners = data.on || emptyObject;
        this.injections = resolveInject(options.inject, parent);
        this.slots = function () {
          if (!this$1.$slots) {
            normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
          }
          return this$1.$slots;
        };
        Object.defineProperty(this, "scopedSlots", {
          enumerable: true,
          get: function get() {
            return normalizeScopedSlots(data.scopedSlots, this.slots());
          }
        });
        if (isCompiled) {
          this.$options = options;
          this.$slots = this.slots();
          this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
        }
        if (options._scopeId) {
          this._c = function (a, b, c, d) {
            var vnode = createElement(contextVm, a, b, c, d, needNormalization);
            if (vnode && !Array.isArray(vnode)) {
              vnode.fnScopeId = options._scopeId;
              vnode.fnContext = parent;
            }
            return vnode;
          };
        } else {
          this._c = function (a, b, c, d) {
            return createElement(contextVm, a, b, c, d, needNormalization);
          };
        }
      }
      installRenderHelpers(FunctionalRenderContext.prototype);
      function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
        var options = Ctor.options;
        var props = {};
        var propOptions = options.props;
        if (isDef(propOptions)) {
          for (var key in propOptions) {
            props[key] = validateProp(key, propOptions, propsData || emptyObject);
          }
        } else {
          if (isDef(data.attrs)) {
            mergeProps(props, data.attrs);
          }
          if (isDef(data.props)) {
            mergeProps(props, data.props);
          }
        }
        var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
        var vnode = options.render.call(null, renderContext._c, renderContext);
        if (vnode instanceof VNode) {
          return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
        } else if (Array.isArray(vnode)) {
          var vnodes = normalizeChildren(vnode) || [];
          var res = new Array(vnodes.length);
          for (var i = 0; i < vnodes.length; i++) {
            res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
          }
          return res;
        }
      }
      function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
        var clone = cloneVNode(vnode);
        clone.fnContext = contextVm;
        clone.fnOptions = options;
        if (true) {
          (clone.devtoolsMeta = clone.devtoolsMeta || ({})).renderContext = renderContext;
        }
        if (data.slot) {
          (clone.data || (clone.data = {})).slot = data.slot;
        }
        return clone;
      }
      function mergeProps(to, from) {
        for (var key in from) {
          to[camelize(key)] = from[key];
        }
      }
      var componentVNodeHooks = {
        init: function init(vnode, hydrating) {
          if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
            var mountedNode = vnode;
            componentVNodeHooks.prepatch(mountedNode, mountedNode);
          } else {
            var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
            child.$mount(hydrating ? vnode.elm : undefined, hydrating);
          }
        },
        prepatch: function prepatch(oldVnode, vnode) {
          var options = vnode.componentOptions;
          var child = vnode.componentInstance = oldVnode.componentInstance;
          updateChildComponent(child, options.propsData, options.listeners, vnode, options.children);
        },
        insert: function insert(vnode) {
          var context = vnode.context;
          var componentInstance = vnode.componentInstance;
          if (!componentInstance._isMounted) {
            componentInstance._isMounted = true;
            callHook(componentInstance, "mounted");
          }
          if (vnode.data.keepAlive) {
            if (context._isMounted) {
              queueActivatedComponent(componentInstance);
            } else {
              activateChildComponent(componentInstance, true);
            }
          }
        },
        destroy: function destroy(vnode) {
          var componentInstance = vnode.componentInstance;
          if (!componentInstance._isDestroyed) {
            if (!vnode.data.keepAlive) {
              componentInstance.$destroy();
            } else {
              deactivateChildComponent(componentInstance, true);
            }
          }
        }
      };
      var hooksToMerge = Object.keys(componentVNodeHooks);
      function createComponent(Ctor, data, context, children, tag) {
        if (isUndef(Ctor)) {
          return;
        }
        var baseCtor = context.$options._base;
        if (isObject(Ctor)) {
          Ctor = baseCtor.extend(Ctor);
        }
        if (typeof Ctor !== "function") {
          if (true) {
            warn("Invalid Component definition: " + String(Ctor), context);
          }
          return;
        }
        var asyncFactory;
        if (isUndef(Ctor.cid)) {
          asyncFactory = Ctor;
          Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
          if (Ctor === undefined) {
            return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
          }
        }
        data = data || ({});
        resolveConstructorOptions(Ctor);
        if (isDef(data.model)) {
          transformModel(Ctor.options, data);
        }
        var propsData = extractPropsFromVNodeData(data, Ctor, tag);
        if (isTrue(Ctor.options.functional)) {
          return createFunctionalComponent(Ctor, propsData, data, context, children);
        }
        var listeners = data.on;
        data.on = data.nativeOn;
        if (isTrue(Ctor.options.abstract)) {
          var slot = data.slot;
          data = {};
          if (slot) {
            data.slot = slot;
          }
        }
        installComponentHooks(data);
        var name = Ctor.options.name || tag;
        var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ""), data, undefined, undefined, undefined, context, {
          Ctor: Ctor,
          propsData: propsData,
          listeners: listeners,
          tag: tag,
          children: children
        }, asyncFactory);
        return vnode;
      }
      function createComponentInstanceForVnode(vnode, parent) {
        var options = {
          _isComponent: true,
          _parentVnode: vnode,
          parent: parent
        };
        var inlineTemplate = vnode.data.inlineTemplate;
        if (isDef(inlineTemplate)) {
          options.render = inlineTemplate.render;
          options.staticRenderFns = inlineTemplate.staticRenderFns;
        }
        return new vnode.componentOptions.Ctor(options);
      }
      function installComponentHooks(data) {
        var hooks = data.hook || (data.hook = {});
        for (var i = 0; i < hooksToMerge.length; i++) {
          var key = hooksToMerge[i];
          var existing = hooks[key];
          var toMerge = componentVNodeHooks[key];
          if (existing !== toMerge && !(existing && existing._merged)) {
            hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
          }
        }
      }
      function mergeHook$1(f1, f2) {
        var merged = function (a, b) {
          f1(a, b);
          f2(a, b);
        };
        merged._merged = true;
        return merged;
      }
      function transformModel(options, data) {
        var prop = options.model && options.model.prop || "value";
        var event = options.model && options.model.event || "input";
        (data.attrs || (data.attrs = {}))[prop] = data.model.value;
        var on = data.on || (data.on = {});
        var existing = on[event];
        var callback = data.model.callback;
        if (isDef(existing)) {
          if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
            on[event] = [callback].concat(existing);
          }
        } else {
          on[event] = callback;
        }
      }
      var SIMPLE_NORMALIZE = 1;
      var ALWAYS_NORMALIZE = 2;
      function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
        if (Array.isArray(data) || isPrimitive(data)) {
          normalizationType = children;
          children = data;
          data = undefined;
        }
        if (isTrue(alwaysNormalize)) {
          normalizationType = ALWAYS_NORMALIZE;
        }
        return _createElement(context, tag, data, children, normalizationType);
      }
      function _createElement(context, tag, data, children, normalizationType) {
        if (isDef(data) && isDef(data.__ob__)) {
          true && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + "Always create fresh vnode data objects in each render!", context);
          return createEmptyVNode();
        }
        if (isDef(data) && isDef(data.is)) {
          tag = data.is;
        }
        if (!tag) {
          return createEmptyVNode();
        }
        if (true && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
          {
            warn("Avoid using non-primitive value as key, " + "use string/number value instead.", context);
          }
        }
        if (Array.isArray(children) && typeof children[0] === "function") {
          data = data || ({});
          data.scopedSlots = {
            default: children[0]
          };
          children.length = 0;
        }
        if (normalizationType === ALWAYS_NORMALIZE) {
          children = normalizeChildren(children);
        } else if (normalizationType === SIMPLE_NORMALIZE) {
          children = simpleNormalizeChildren(children);
        }
        var vnode, ns;
        if (typeof tag === "string") {
          var Ctor;
          ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
          if (config.isReservedTag(tag)) {
            vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
          } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, "components", tag))) {
            vnode = createComponent(Ctor, data, context, children, tag);
          } else {
            vnode = new VNode(tag, data, children, undefined, undefined, context);
          }
        } else {
          vnode = createComponent(tag, data, context, children);
        }
        if (Array.isArray(vnode)) {
          return vnode;
        } else if (isDef(vnode)) {
          if (isDef(ns)) {
            applyNS(vnode, ns);
          }
          if (isDef(data)) {
            registerDeepBindings(data);
          }
          return vnode;
        } else {
          return createEmptyVNode();
        }
      }
      function applyNS(vnode, ns, force) {
        vnode.ns = ns;
        if (vnode.tag === "foreignObject") {
          ns = undefined;
          force = true;
        }
        if (isDef(vnode.children)) {
          for (var i = 0, l = vnode.children.length; i < l; i++) {
            var child = vnode.children[i];
            if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== "svg")) {
              applyNS(child, ns, force);
            }
          }
        }
      }
      function registerDeepBindings(data) {
        if (isObject(data.style)) {
          traverse(data.style);
        }
        if (isObject(data.class)) {
          traverse(data.class);
        }
      }
      function initRender(vm) {
        vm._vnode = null;
        vm._staticTrees = null;
        var options = vm.$options;
        var parentVnode = vm.$vnode = options._parentVnode;
        var renderContext = parentVnode && parentVnode.context;
        vm.$slots = resolveSlots(options._renderChildren, renderContext);
        vm.$scopedSlots = emptyObject;
        vm._c = function (a, b, c, d) {
          return createElement(vm, a, b, c, d, false);
        };
        vm.$createElement = function (a, b, c, d) {
          return createElement(vm, a, b, c, d, true);
        };
        var parentData = parentVnode && parentVnode.data;
        if (true) {
          defineReactive$$1(vm, "$attrs", parentData && parentData.attrs || emptyObject, function () {
            !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
          }, true);
          defineReactive$$1(vm, "$listeners", options._parentListeners || emptyObject, function () {
            !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
          }, true);
        } else {}
      }
      var currentRenderingInstance = null;
      function renderMixin(Vue) {
        installRenderHelpers(Vue.prototype);
        Vue.prototype.$nextTick = function (fn) {
          return nextTick(fn, this);
        };
        Vue.prototype._render = function () {
          var vm = this;
          var ref = vm.$options;
          var render = ref.render;
          var _parentVnode = ref._parentVnode;
          if (_parentVnode) {
            vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
          }
          vm.$vnode = _parentVnode;
          var vnode;
          try {
            currentRenderingInstance = vm;
            vnode = render.call(vm._renderProxy, vm.$createElement);
          } catch (e) {
            handleError(e, vm, "render");
            if (true && vm.$options.renderError) {
              try {
                vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
              } catch (e) {
                handleError(e, vm, "renderError");
                vnode = vm._vnode;
              }
            } else {
              vnode = vm._vnode;
            }
          } finally {
            currentRenderingInstance = null;
          }
          if (Array.isArray(vnode) && vnode.length === 1) {
            vnode = vnode[0];
          }
          if (!(vnode instanceof VNode)) {
            if (true && Array.isArray(vnode)) {
              warn("Multiple root nodes returned from render function. Render function " + "should return a single root node.", vm);
            }
            vnode = createEmptyVNode();
          }
          vnode.parent = _parentVnode;
          return vnode;
        };
      }
      function ensureCtor(comp, base) {
        if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === "Module") {
          comp = comp.default;
        }
        return isObject(comp) ? base.extend(comp) : comp;
      }
      function createAsyncPlaceholder(factory, data, context, children, tag) {
        var node = createEmptyVNode();
        node.asyncFactory = factory;
        node.asyncMeta = {
          data: data,
          context: context,
          children: children,
          tag: tag
        };
        return node;
      }
      function resolveAsyncComponent(factory, baseCtor) {
        if (isTrue(factory.error) && isDef(factory.errorComp)) {
          return factory.errorComp;
        }
        if (isDef(factory.resolved)) {
          return factory.resolved;
        }
        var owner = currentRenderingInstance;
        if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
          factory.owners.push(owner);
        }
        if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
          return factory.loadingComp;
        }
        if (owner && !isDef(factory.owners)) {
          var owners = factory.owners = [owner];
          var sync = true;
          var timerLoading = null;
          var timerTimeout = null;
          owner.$on("hook:destroyed", function () {
            return remove(owners, owner);
          });
          var forceRender = function (renderCompleted) {
            for (var i = 0, l = owners.length; i < l; i++) {
              owners[i].$forceUpdate();
            }
            if (renderCompleted) {
              owners.length = 0;
              if (timerLoading !== null) {
                clearTimeout(timerLoading);
                timerLoading = null;
              }
              if (timerTimeout !== null) {
                clearTimeout(timerTimeout);
                timerTimeout = null;
              }
            }
          };
          var resolve = once(function (res) {
            factory.resolved = ensureCtor(res, baseCtor);
            if (!sync) {
              forceRender(true);
            } else {
              owners.length = 0;
            }
          });
          var reject = once(function (reason) {
            true && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ""));
            if (isDef(factory.errorComp)) {
              factory.error = true;
              forceRender(true);
            }
          });
          var res = factory(resolve, reject);
          if (isObject(res)) {
            if (isPromise(res)) {
              if (isUndef(factory.resolved)) {
                res.then(resolve, reject);
              }
            } else if (isPromise(res.component)) {
              res.component.then(resolve, reject);
              if (isDef(res.error)) {
                factory.errorComp = ensureCtor(res.error, baseCtor);
              }
              if (isDef(res.loading)) {
                factory.loadingComp = ensureCtor(res.loading, baseCtor);
                if (res.delay === 0) {
                  factory.loading = true;
                } else {
                  timerLoading = setTimeout(function () {
                    timerLoading = null;
                    if (isUndef(factory.resolved) && isUndef(factory.error)) {
                      factory.loading = true;
                      forceRender(false);
                    }
                  }, res.delay || 200);
                }
              }
              if (isDef(res.timeout)) {
                timerTimeout = setTimeout(function () {
                  timerTimeout = null;
                  if (isUndef(factory.resolved)) {
                    reject(true ? "timeout (" + res.timeout + "ms)" : undefined);
                  }
                }, res.timeout);
              }
            }
          }
          sync = false;
          return factory.loading ? factory.loadingComp : factory.resolved;
        }
      }
      function isAsyncPlaceholder(node) {
        return node.isComment && node.asyncFactory;
      }
      function getFirstComponentChild(children) {
        if (Array.isArray(children)) {
          for (var i = 0; i < children.length; i++) {
            var c = children[i];
            if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
              return c;
            }
          }
        }
      }
      function initEvents(vm) {
        vm._events = Object.create(null);
        vm._hasHookEvent = false;
        var listeners = vm.$options._parentListeners;
        if (listeners) {
          updateComponentListeners(vm, listeners);
        }
      }
      var target;
      function add(event, fn) {
        target.$on(event, fn);
      }
      function remove$1(event, fn) {
        target.$off(event, fn);
      }
      function createOnceHandler(event, fn) {
        var _target = target;
        return function onceHandler() {
          var res = fn.apply(null, arguments);
          if (res !== null) {
            _target.$off(event, onceHandler);
          }
        };
      }
      function updateComponentListeners(vm, listeners, oldListeners) {
        target = vm;
        updateListeners(listeners, oldListeners || ({}), add, remove$1, createOnceHandler, vm);
        target = undefined;
      }
      function eventsMixin(Vue) {
        var hookRE = /^hook:/;
        Vue.prototype.$on = function (event, fn) {
          var vm = this;
          if (Array.isArray(event)) {
            for (var i = 0, l = event.length; i < l; i++) {
              vm.$on(event[i], fn);
            }
          } else {
            (vm._events[event] || (vm._events[event] = [])).push(fn);
            if (hookRE.test(event)) {
              vm._hasHookEvent = true;
            }
          }
          return vm;
        };
        Vue.prototype.$once = function (event, fn) {
          var vm = this;
          function on() {
            vm.$off(event, on);
            fn.apply(vm, arguments);
          }
          on.fn = fn;
          vm.$on(event, on);
          return vm;
        };
        Vue.prototype.$off = function (event, fn) {
          var vm = this;
          if (!arguments.length) {
            vm._events = Object.create(null);
            return vm;
          }
          if (Array.isArray(event)) {
            for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
              vm.$off(event[i$1], fn);
            }
            return vm;
          }
          var cbs = vm._events[event];
          if (!cbs) {
            return vm;
          }
          if (!fn) {
            vm._events[event] = null;
            return vm;
          }
          var cb;
          var i = cbs.length;
          while (i--) {
            cb = cbs[i];
            if (cb === fn || cb.fn === fn) {
              cbs.splice(i, 1);
              break;
            }
          }
          return vm;
        };
        Vue.prototype.$emit = function (event) {
          var vm = this;
          if (true) {
            var lowerCaseEvent = event.toLowerCase();
            if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
              tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
            }
          }
          var cbs = vm._events[event];
          if (cbs) {
            cbs = cbs.length > 1 ? toArray(cbs) : cbs;
            var args = toArray(arguments, 1);
            var info = "event handler for \"" + event + "\"";
            for (var i = 0, l = cbs.length; i < l; i++) {
              invokeWithErrorHandling(cbs[i], vm, args, vm, info);
            }
          }
          return vm;
        };
      }
      var activeInstance = null;
      var isUpdatingChildComponent = false;
      function setActiveInstance(vm) {
        var prevActiveInstance = activeInstance;
        activeInstance = vm;
        return function () {
          activeInstance = prevActiveInstance;
        };
      }
      function initLifecycle(vm) {
        var options = vm.$options;
        var parent = options.parent;
        if (parent && !options.abstract) {
          while (parent.$options.abstract && parent.$parent) {
            parent = parent.$parent;
          }
          parent.$children.push(vm);
        }
        vm.$parent = parent;
        vm.$root = parent ? parent.$root : vm;
        vm.$children = [];
        vm.$refs = {};
        vm._watcher = null;
        vm._inactive = null;
        vm._directInactive = false;
        vm._isMounted = false;
        vm._isDestroyed = false;
        vm._isBeingDestroyed = false;
      }
      function lifecycleMixin(Vue) {
        Vue.prototype._update = function (vnode, hydrating) {
          var vm = this;
          var prevEl = vm.$el;
          var prevVnode = vm._vnode;
          var restoreActiveInstance = setActiveInstance(vm);
          vm._vnode = vnode;
          if (!prevVnode) {
            vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false);
          } else {
            vm.$el = vm.__patch__(prevVnode, vnode);
          }
          restoreActiveInstance();
          if (prevEl) {
            prevEl.__vue__ = null;
          }
          if (vm.$el) {
            vm.$el.__vue__ = vm;
          }
          if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
            vm.$parent.$el = vm.$el;
          }
        };
        Vue.prototype.$forceUpdate = function () {
          var vm = this;
          if (vm._watcher) {
            vm._watcher.update();
          }
        };
        Vue.prototype.$destroy = function () {
          var vm = this;
          if (vm._isBeingDestroyed) {
            return;
          }
          callHook(vm, "beforeDestroy");
          vm._isBeingDestroyed = true;
          var parent = vm.$parent;
          if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
            remove(parent.$children, vm);
          }
          if (vm._watcher) {
            vm._watcher.teardown();
          }
          var i = vm._watchers.length;
          while (i--) {
            vm._watchers[i].teardown();
          }
          if (vm._data.__ob__) {
            vm._data.__ob__.vmCount--;
          }
          vm._isDestroyed = true;
          vm.__patch__(vm._vnode, null);
          callHook(vm, "destroyed");
          vm.$off();
          if (vm.$el) {
            vm.$el.__vue__ = null;
          }
          if (vm.$vnode) {
            vm.$vnode.parent = null;
          }
        };
      }
      function mountComponent(vm, el, hydrating) {
        vm.$el = el;
        if (!vm.$options.render) {
          vm.$options.render = createEmptyVNode;
          if (true) {
            if (vm.$options.template && vm.$options.template.charAt(0) !== "#" || vm.$options.el || el) {
              warn("You are using the runtime-only build of Vue where the template " + "compiler is not available. Either pre-compile the templates into " + "render functions, or use the compiler-included build.", vm);
            } else {
              warn("Failed to mount component: template or render function not defined.", vm);
            }
          }
        }
        callHook(vm, "beforeMount");
        var updateComponent;
        if (true && config.performance && mark) {
          updateComponent = function () {
            var name = vm._name;
            var id = vm._uid;
            var startTag = "vue-perf-start:" + id;
            var endTag = "vue-perf-end:" + id;
            mark(startTag);
            var vnode = vm._render();
            mark(endTag);
            measure("vue " + name + " render", startTag, endTag);
            mark(startTag);
            vm._update(vnode, hydrating);
            mark(endTag);
            measure("vue " + name + " patch", startTag, endTag);
          };
        } else {
          updateComponent = function () {
            vm._update(vm._render(), hydrating);
          };
        }
        new Watcher(vm, updateComponent, noop, {
          before: function before() {
            if (vm._isMounted && !vm._isDestroyed) {
              callHook(vm, "beforeUpdate");
            }
          }
        }, true);
        hydrating = false;
        if (vm.$vnode == null) {
          vm._isMounted = true;
          callHook(vm, "mounted");
        }
        return vm;
      }
      function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
        if (true) {
          isUpdatingChildComponent = true;
        }
        var newScopedSlots = parentVnode.data.scopedSlots;
        var oldScopedSlots = vm.$scopedSlots;
        var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key);
        var needsForceUpdate = !!(renderChildren || vm.$options._renderChildren || hasDynamicScopedSlot);
        vm.$options._parentVnode = parentVnode;
        vm.$vnode = parentVnode;
        if (vm._vnode) {
          vm._vnode.parent = parentVnode;
        }
        vm.$options._renderChildren = renderChildren;
        vm.$attrs = parentVnode.data.attrs || emptyObject;
        vm.$listeners = listeners || emptyObject;
        if (propsData && vm.$options.props) {
          toggleObserving(false);
          var props = vm._props;
          var propKeys = vm.$options._propKeys || [];
          for (var i = 0; i < propKeys.length; i++) {
            var key = propKeys[i];
            var propOptions = vm.$options.props;
            props[key] = validateProp(key, propOptions, propsData, vm);
          }
          toggleObserving(true);
          vm.$options.propsData = propsData;
        }
        listeners = listeners || emptyObject;
        var oldListeners = vm.$options._parentListeners;
        vm.$options._parentListeners = listeners;
        updateComponentListeners(vm, listeners, oldListeners);
        if (needsForceUpdate) {
          vm.$slots = resolveSlots(renderChildren, parentVnode.context);
          vm.$forceUpdate();
        }
        if (true) {
          isUpdatingChildComponent = false;
        }
      }
      function isInInactiveTree(vm) {
        while (vm && (vm = vm.$parent)) {
          if (vm._inactive) {
            return true;
          }
        }
        return false;
      }
      function activateChildComponent(vm, direct) {
        if (direct) {
          vm._directInactive = false;
          if (isInInactiveTree(vm)) {
            return;
          }
        } else if (vm._directInactive) {
          return;
        }
        if (vm._inactive || vm._inactive === null) {
          vm._inactive = false;
          for (var i = 0; i < vm.$children.length; i++) {
            activateChildComponent(vm.$children[i]);
          }
          callHook(vm, "activated");
        }
      }
      function deactivateChildComponent(vm, direct) {
        if (direct) {
          vm._directInactive = true;
          if (isInInactiveTree(vm)) {
            return;
          }
        }
        if (!vm._inactive) {
          vm._inactive = true;
          for (var i = 0; i < vm.$children.length; i++) {
            deactivateChildComponent(vm.$children[i]);
          }
          callHook(vm, "deactivated");
        }
      }
      function callHook(vm, hook) {
        pushTarget();
        var handlers = vm.$options[hook];
        var info = hook + " hook";
        if (handlers) {
          for (var i = 0, j = handlers.length; i < j; i++) {
            invokeWithErrorHandling(handlers[i], vm, null, vm, info);
          }
        }
        if (vm._hasHookEvent) {
          vm.$emit("hook:" + hook);
        }
        popTarget();
      }
      var MAX_UPDATE_COUNT = 100;
      var queue = [];
      var activatedChildren = [];
      var has = {};
      var circular = {};
      var waiting = false;
      var flushing = false;
      var index = 0;
      function resetSchedulerState() {
        index = queue.length = activatedChildren.length = 0;
        has = {};
        if (true) {
          circular = {};
        }
        waiting = flushing = false;
      }
      var currentFlushTimestamp = 0;
      var getNow = Date.now;
      if (inBrowser && !isIE) {
        var performance = window.performance;
        if (performance && typeof performance.now === "function" && getNow() > document.createEvent("Event").timeStamp) {
          getNow = function () {
            return performance.now();
          };
        }
      }
      function flushSchedulerQueue() {
        currentFlushTimestamp = getNow();
        flushing = true;
        var watcher, id;
        queue.sort(function (a, b) {
          return a.id - b.id;
        });
        for (index = 0; index < queue.length; index++) {
          watcher = queue[index];
          if (watcher.before) {
            watcher.before();
          }
          id = watcher.id;
          has[id] = null;
          watcher.run();
          if (true && has[id] != null) {
            circular[id] = (circular[id] || 0) + 1;
            if (circular[id] > MAX_UPDATE_COUNT) {
              warn("You may have an infinite update loop " + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
              break;
            }
          }
        }
        var activatedQueue = activatedChildren.slice();
        var updatedQueue = queue.slice();
        resetSchedulerState();
        callActivatedHooks(activatedQueue);
        callUpdatedHooks(updatedQueue);
        if (devtools && config.devtools) {
          devtools.emit("flush");
        }
      }
      function callUpdatedHooks(queue) {
        var i = queue.length;
        while (i--) {
          var watcher = queue[i];
          var vm = watcher.vm;
          if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
            callHook(vm, "updated");
          }
        }
      }
      function queueActivatedComponent(vm) {
        vm._inactive = false;
        activatedChildren.push(vm);
      }
      function callActivatedHooks(queue) {
        for (var i = 0; i < queue.length; i++) {
          queue[i]._inactive = true;
          activateChildComponent(queue[i], true);
        }
      }
      function queueWatcher(watcher) {
        var id = watcher.id;
        if (has[id] == null) {
          has[id] = true;
          if (!flushing) {
            queue.push(watcher);
          } else {
            var i = queue.length - 1;
            while (i > index && queue[i].id > watcher.id) {
              i--;
            }
            queue.splice(i + 1, 0, watcher);
          }
          if (!waiting) {
            waiting = true;
            if (true && !config.async) {
              flushSchedulerQueue();
              return;
            }
            nextTick(flushSchedulerQueue);
          }
        }
      }
      var uid$2 = 0;
      var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
        this.vm = vm;
        if (isRenderWatcher) {
          vm._watcher = this;
        }
        vm._watchers.push(this);
        if (options) {
          this.deep = !!options.deep;
          this.user = !!options.user;
          this.lazy = !!options.lazy;
          this.sync = !!options.sync;
          this.before = options.before;
        } else {
          this.deep = this.user = this.lazy = this.sync = false;
        }
        this.cb = cb;
        this.id = ++uid$2;
        this.active = true;
        this.dirty = this.lazy;
        this.deps = [];
        this.newDeps = [];
        this.depIds = new _Set();
        this.newDepIds = new _Set();
        this.expression = true ? expOrFn.toString() : undefined;
        if (typeof expOrFn === "function") {
          this.getter = expOrFn;
        } else {
          this.getter = parsePath(expOrFn);
          if (!this.getter) {
            this.getter = noop;
            true && warn("Failed watching path: \"" + expOrFn + "\" " + "Watcher only accepts simple dot-delimited paths. " + "For full control, use a function instead.", vm);
          }
        }
        this.value = this.lazy ? undefined : this.get();
      };
      Watcher.prototype.get = function get() {
        pushTarget(this);
        var value;
        var vm = this.vm;
        try {
          value = this.getter.call(vm, vm);
        } catch (e) {
          if (this.user) {
            handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
          } else {
            throw e;
          }
        } finally {
          if (this.deep) {
            traverse(value);
          }
          popTarget();
          this.cleanupDeps();
        }
        return value;
      };
      Watcher.prototype.addDep = function addDep(dep) {
        var id = dep.id;
        if (!this.newDepIds.has(id)) {
          this.newDepIds.add(id);
          this.newDeps.push(dep);
          if (!this.depIds.has(id)) {
            dep.addSub(this);
          }
        }
      };
      Watcher.prototype.cleanupDeps = function cleanupDeps() {
        var i = this.deps.length;
        while (i--) {
          var dep = this.deps[i];
          if (!this.newDepIds.has(dep.id)) {
            dep.removeSub(this);
          }
        }
        var tmp = this.depIds;
        this.depIds = this.newDepIds;
        this.newDepIds = tmp;
        this.newDepIds.clear();
        tmp = this.deps;
        this.deps = this.newDeps;
        this.newDeps = tmp;
        this.newDeps.length = 0;
      };
      Watcher.prototype.update = function update() {
        if (this.lazy) {
          this.dirty = true;
        } else if (this.sync) {
          this.run();
        } else {
          queueWatcher(this);
        }
      };
      Watcher.prototype.run = function run() {
        if (this.active) {
          var value = this.get();
          if (value !== this.value || isObject(value) || this.deep) {
            var oldValue = this.value;
            this.value = value;
            if (this.user) {
              try {
                this.cb.call(this.vm, value, oldValue);
              } catch (e) {
                handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
              }
            } else {
              this.cb.call(this.vm, value, oldValue);
            }
          }
        }
      };
      Watcher.prototype.evaluate = function evaluate() {
        this.value = this.get();
        this.dirty = false;
      };
      Watcher.prototype.depend = function depend() {
        var i = this.deps.length;
        while (i--) {
          this.deps[i].depend();
        }
      };
      Watcher.prototype.teardown = function teardown() {
        if (this.active) {
          if (!this.vm._isBeingDestroyed) {
            remove(this.vm._watchers, this);
          }
          var i = this.deps.length;
          while (i--) {
            this.deps[i].removeSub(this);
          }
          this.active = false;
        }
      };
      var sharedPropertyDefinition = {
        enumerable: true,
        configurable: true,
        get: noop,
        set: noop
      };
      function proxy(target, sourceKey, key) {
        sharedPropertyDefinition.get = function proxyGetter() {
          return this[sourceKey][key];
        };
        sharedPropertyDefinition.set = function proxySetter(val) {
          this[sourceKey][key] = val;
        };
        Object.defineProperty(target, key, sharedPropertyDefinition);
      }
      function initState(vm) {
        vm._watchers = [];
        var opts = vm.$options;
        if (opts.props) {
          initProps(vm, opts.props);
        }
        if (opts.methods) {
          initMethods(vm, opts.methods);
        }
        if (opts.data) {
          initData(vm);
        } else {
          observe(vm._data = {}, true);
        }
        if (opts.computed) {
          initComputed(vm, opts.computed);
        }
        if (opts.watch && opts.watch !== nativeWatch) {
          initWatch(vm, opts.watch);
        }
      }
      function initProps(vm, propsOptions) {
        var propsData = vm.$options.propsData || ({});
        var props = vm._props = {};
        var keys = vm.$options._propKeys = [];
        var isRoot = !vm.$parent;
        if (!isRoot) {
          toggleObserving(false);
        }
        var loop = function (key) {
          keys.push(key);
          var value = validateProp(key, propsOptions, propsData, vm);
          if (true) {
            var hyphenatedKey = hyphenate(key);
            if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
              warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
            }
            defineReactive$$1(props, key, value, function () {
              if (!isRoot && !isUpdatingChildComponent) {
                warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
              }
            });
          } else {}
          if (!((key in vm))) {
            proxy(vm, "_props", key);
          }
        };
        for (var key in propsOptions) loop(key);
        toggleObserving(true);
      }
      function initData(vm) {
        var data = vm.$options.data;
        data = vm._data = typeof data === "function" ? getData(data, vm) : data || ({});
        if (!isPlainObject(data)) {
          data = {};
          true && warn("data functions should return an object:\n" + "https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", vm);
        }
        var keys = Object.keys(data);
        var props = vm.$options.props;
        var methods = vm.$options.methods;
        var i = keys.length;
        while (i--) {
          var key = keys[i];
          if (true) {
            if (methods && hasOwn(methods, key)) {
              warn("Method \"" + key + "\" has already been defined as a data property.", vm);
            }
          }
          if (props && hasOwn(props, key)) {
            true && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
          } else if (!isReserved(key)) {
            proxy(vm, "_data", key);
          }
        }
        observe(data, true);
      }
      function getData(data, vm) {
        pushTarget();
        try {
          return data.call(vm, vm);
        } catch (e) {
          handleError(e, vm, "data()");
          return {};
        } finally {
          popTarget();
        }
      }
      var computedWatcherOptions = {
        lazy: true
      };
      function initComputed(vm, computed) {
        var watchers = vm._computedWatchers = Object.create(null);
        var isSSR = isServerRendering();
        for (var key in computed) {
          var userDef = computed[key];
          var getter = typeof userDef === "function" ? userDef : userDef.get;
          if (true && getter == null) {
            warn("Getter is missing for computed property \"" + key + "\".", vm);
          }
          if (!isSSR) {
            watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
          }
          if (!((key in vm))) {
            defineComputed(vm, key, userDef);
          } else if (true) {
            if ((key in vm.$data)) {
              warn("The computed property \"" + key + "\" is already defined in data.", vm);
            } else if (vm.$options.props && (key in vm.$options.props)) {
              warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
            }
          }
        }
      }
      function defineComputed(target, key, userDef) {
        var shouldCache = !isServerRendering();
        if (typeof userDef === "function") {
          sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
          sharedPropertyDefinition.set = noop;
        } else {
          sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
          sharedPropertyDefinition.set = userDef.set || noop;
        }
        if (true && sharedPropertyDefinition.set === noop) {
          sharedPropertyDefinition.set = function () {
            warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
          };
        }
        Object.defineProperty(target, key, sharedPropertyDefinition);
      }
      function createComputedGetter(key) {
        return function computedGetter() {
          var watcher = this._computedWatchers && this._computedWatchers[key];
          if (watcher) {
            if (watcher.dirty) {
              watcher.evaluate();
            }
            if (Dep.target) {
              watcher.depend();
            }
            return watcher.value;
          }
        };
      }
      function createGetterInvoker(fn) {
        return function computedGetter() {
          return fn.call(this, this);
        };
      }
      function initMethods(vm, methods) {
        var props = vm.$options.props;
        for (var key in methods) {
          if (true) {
            if (typeof methods[key] !== "function") {
              warn("Method \"" + key + "\" has type \"" + typeof methods[key] + "\" in the component definition. " + "Did you reference the function correctly?", vm);
            }
            if (props && hasOwn(props, key)) {
              warn("Method \"" + key + "\" has already been defined as a prop.", vm);
            }
            if ((key in vm) && isReserved(key)) {
              warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
            }
          }
          vm[key] = typeof methods[key] !== "function" ? noop : bind(methods[key], vm);
        }
      }
      function initWatch(vm, watch) {
        for (var key in watch) {
          var handler = watch[key];
          if (Array.isArray(handler)) {
            for (var i = 0; i < handler.length; i++) {
              createWatcher(vm, key, handler[i]);
            }
          } else {
            createWatcher(vm, key, handler);
          }
        }
      }
      function createWatcher(vm, expOrFn, handler, options) {
        if (isPlainObject(handler)) {
          options = handler;
          handler = handler.handler;
        }
        if (typeof handler === "string") {
          handler = vm[handler];
        }
        return vm.$watch(expOrFn, handler, options);
      }
      function stateMixin(Vue) {
        var dataDef = {};
        dataDef.get = function () {
          return this._data;
        };
        var propsDef = {};
        propsDef.get = function () {
          return this._props;
        };
        if (true) {
          dataDef.set = function () {
            warn("Avoid replacing instance root $data. " + "Use nested data properties instead.", this);
          };
          propsDef.set = function () {
            warn("$props is readonly.", this);
          };
        }
        Object.defineProperty(Vue.prototype, "$data", dataDef);
        Object.defineProperty(Vue.prototype, "$props", propsDef);
        Vue.prototype.$set = set;
        Vue.prototype.$delete = del;
        Vue.prototype.$watch = function (expOrFn, cb, options) {
          var vm = this;
          if (isPlainObject(cb)) {
            return createWatcher(vm, expOrFn, cb, options);
          }
          options = options || ({});
          options.user = true;
          var watcher = new Watcher(vm, expOrFn, cb, options);
          if (options.immediate) {
            try {
              cb.call(vm, watcher.value);
            } catch (error) {
              handleError(error, vm, "callback for immediate watcher \"" + watcher.expression + "\"");
            }
          }
          return function unwatchFn() {
            watcher.teardown();
          };
        };
      }
      var uid$3 = 0;
      function initMixin(Vue) {
        Vue.prototype._init = function (options) {
          var vm = this;
          vm._uid = uid$3++;
          var startTag, endTag;
          if (true && config.performance && mark) {
            startTag = "vue-perf-start:" + vm._uid;
            endTag = "vue-perf-end:" + vm._uid;
            mark(startTag);
          }
          vm._isVue = true;
          if (options && options._isComponent) {
            initInternalComponent(vm, options);
          } else {
            vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || ({}), vm);
          }
          if (true) {
            initProxy(vm);
          } else {}
          vm._self = vm;
          initLifecycle(vm);
          initEvents(vm);
          initRender(vm);
          callHook(vm, "beforeCreate");
          initInjections(vm);
          initState(vm);
          initProvide(vm);
          callHook(vm, "created");
          if (true && config.performance && mark) {
            vm._name = formatComponentName(vm, false);
            mark(endTag);
            measure("vue " + vm._name + " init", startTag, endTag);
          }
          if (vm.$options.el) {
            vm.$mount(vm.$options.el);
          }
        };
      }
      function initInternalComponent(vm, options) {
        var opts = vm.$options = Object.create(vm.constructor.options);
        var parentVnode = options._parentVnode;
        opts.parent = options.parent;
        opts._parentVnode = parentVnode;
        var vnodeComponentOptions = parentVnode.componentOptions;
        opts.propsData = vnodeComponentOptions.propsData;
        opts._parentListeners = vnodeComponentOptions.listeners;
        opts._renderChildren = vnodeComponentOptions.children;
        opts._componentTag = vnodeComponentOptions.tag;
        if (options.render) {
          opts.render = options.render;
          opts.staticRenderFns = options.staticRenderFns;
        }
      }
      function resolveConstructorOptions(Ctor) {
        var options = Ctor.options;
        if (Ctor.super) {
          var superOptions = resolveConstructorOptions(Ctor.super);
          var cachedSuperOptions = Ctor.superOptions;
          if (superOptions !== cachedSuperOptions) {
            Ctor.superOptions = superOptions;
            var modifiedOptions = resolveModifiedOptions(Ctor);
            if (modifiedOptions) {
              extend(Ctor.extendOptions, modifiedOptions);
            }
            options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
            if (options.name) {
              options.components[options.name] = Ctor;
            }
          }
        }
        return options;
      }
      function resolveModifiedOptions(Ctor) {
        var modified;
        var latest = Ctor.options;
        var sealed = Ctor.sealedOptions;
        for (var key in latest) {
          if (latest[key] !== sealed[key]) {
            if (!modified) {
              modified = {};
            }
            modified[key] = latest[key];
          }
        }
        return modified;
      }
      function Vue(options) {
        if (true && !(this instanceof Vue)) {
          warn("Vue is a constructor and should be called with the `new` keyword");
        }
        this._init(options);
      }
      initMixin(Vue);
      stateMixin(Vue);
      eventsMixin(Vue);
      lifecycleMixin(Vue);
      renderMixin(Vue);
      function initUse(Vue) {
        Vue.use = function (plugin) {
          var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
          if (installedPlugins.indexOf(plugin) > -1) {
            return this;
          }
          var args = toArray(arguments, 1);
          args.unshift(this);
          if (typeof plugin.install === "function") {
            plugin.install.apply(plugin, args);
          } else if (typeof plugin === "function") {
            plugin.apply(null, args);
          }
          installedPlugins.push(plugin);
          return this;
        };
      }
      function initMixin$1(Vue) {
        Vue.mixin = function (mixin) {
          this.options = mergeOptions(this.options, mixin);
          return this;
        };
      }
      function initExtend(Vue) {
        Vue.cid = 0;
        var cid = 1;
        Vue.extend = function (extendOptions) {
          extendOptions = extendOptions || ({});
          var Super = this;
          var SuperId = Super.cid;
          var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
          if (cachedCtors[SuperId]) {
            return cachedCtors[SuperId];
          }
          var name = extendOptions.name || Super.options.name;
          if (true && name) {
            validateComponentName(name);
          }
          var Sub = function VueComponent(options) {
            this._init(options);
          };
          Sub.prototype = Object.create(Super.prototype);
          Sub.prototype.constructor = Sub;
          Sub.cid = cid++;
          Sub.options = mergeOptions(Super.options, extendOptions);
          Sub["super"] = Super;
          if (Sub.options.props) {
            initProps$1(Sub);
          }
          if (Sub.options.computed) {
            initComputed$1(Sub);
          }
          Sub.extend = Super.extend;
          Sub.mixin = Super.mixin;
          Sub.use = Super.use;
          ASSET_TYPES.forEach(function (type) {
            Sub[type] = Super[type];
          });
          if (name) {
            Sub.options.components[name] = Sub;
          }
          Sub.superOptions = Super.options;
          Sub.extendOptions = extendOptions;
          Sub.sealedOptions = extend({}, Sub.options);
          cachedCtors[SuperId] = Sub;
          return Sub;
        };
      }
      function initProps$1(Comp) {
        var props = Comp.options.props;
        for (var key in props) {
          proxy(Comp.prototype, "_props", key);
        }
      }
      function initComputed$1(Comp) {
        var computed = Comp.options.computed;
        for (var key in computed) {
          defineComputed(Comp.prototype, key, computed[key]);
        }
      }
      function initAssetRegisters(Vue) {
        ASSET_TYPES.forEach(function (type) {
          Vue[type] = function (id, definition) {
            if (!definition) {
              return this.options[type + "s"][id];
            } else {
              if (true && type === "component") {
                validateComponentName(id);
              }
              if (type === "component" && isPlainObject(definition)) {
                definition.name = definition.name || id;
                definition = this.options._base.extend(definition);
              }
              if (type === "directive" && typeof definition === "function") {
                definition = {
                  bind: definition,
                  update: definition
                };
              }
              this.options[type + "s"][id] = definition;
              return definition;
            }
          };
        });
      }
      function getComponentName(opts) {
        return opts && (opts.Ctor.options.name || opts.tag);
      }
      function matches(pattern, name) {
        if (Array.isArray(pattern)) {
          return pattern.indexOf(name) > -1;
        } else if (typeof pattern === "string") {
          return pattern.split(",").indexOf(name) > -1;
        } else if (isRegExp(pattern)) {
          return pattern.test(name);
        }
        return false;
      }
      function pruneCache(keepAliveInstance, filter) {
        var cache = keepAliveInstance.cache;
        var keys = keepAliveInstance.keys;
        var _vnode = keepAliveInstance._vnode;
        for (var key in cache) {
          var cachedNode = cache[key];
          if (cachedNode) {
            var name = getComponentName(cachedNode.componentOptions);
            if (name && !filter(name)) {
              pruneCacheEntry(cache, key, keys, _vnode);
            }
          }
        }
      }
      function pruneCacheEntry(cache, key, keys, current) {
        var cached$$1 = cache[key];
        if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
          cached$$1.componentInstance.$destroy();
        }
        cache[key] = null;
        remove(keys, key);
      }
      var patternTypes = [String, RegExp, Array];
      var KeepAlive = {
        name: "keep-alive",
        abstract: true,
        props: {
          include: patternTypes,
          exclude: patternTypes,
          max: [String, Number]
        },
        created: function created() {
          this.cache = Object.create(null);
          this.keys = [];
        },
        destroyed: function destroyed() {
          for (var key in this.cache) {
            pruneCacheEntry(this.cache, key, this.keys);
          }
        },
        mounted: function mounted() {
          var this$1 = this;
          this.$watch("include", function (val) {
            pruneCache(this$1, function (name) {
              return matches(val, name);
            });
          });
          this.$watch("exclude", function (val) {
            pruneCache(this$1, function (name) {
              return !matches(val, name);
            });
          });
        },
        render: function render() {
          var slot = this.$slots.default;
          var vnode = getFirstComponentChild(slot);
          var componentOptions = vnode && vnode.componentOptions;
          if (componentOptions) {
            var name = getComponentName(componentOptions);
            var ref = this;
            var include = ref.include;
            var exclude = ref.exclude;
            if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
              return vnode;
            }
            var ref$1 = this;
            var cache = ref$1.cache;
            var keys = ref$1.keys;
            var key = vnode.key == null ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : "") : vnode.key;
            if (cache[key]) {
              vnode.componentInstance = cache[key].componentInstance;
              remove(keys, key);
              keys.push(key);
            } else {
              cache[key] = vnode;
              keys.push(key);
              if (this.max && keys.length > parseInt(this.max)) {
                pruneCacheEntry(cache, keys[0], keys, this._vnode);
              }
            }
            vnode.data.keepAlive = true;
          }
          return vnode || slot && slot[0];
        }
      };
      var builtInComponents = {
        KeepAlive: KeepAlive
      };
      function initGlobalAPI(Vue) {
        var configDef = {};
        configDef.get = function () {
          return config;
        };
        if (true) {
          configDef.set = function () {
            warn("Do not replace the Vue.config object, set individual fields instead.");
          };
        }
        Object.defineProperty(Vue, "config", configDef);
        Vue.util = {
          warn: warn,
          extend: extend,
          mergeOptions: mergeOptions,
          defineReactive: defineReactive$$1
        };
        Vue.set = set;
        Vue.delete = del;
        Vue.nextTick = nextTick;
        Vue.observable = function (obj) {
          observe(obj);
          return obj;
        };
        Vue.options = Object.create(null);
        ASSET_TYPES.forEach(function (type) {
          Vue.options[type + "s"] = Object.create(null);
        });
        Vue.options._base = Vue;
        extend(Vue.options.components, builtInComponents);
        initUse(Vue);
        initMixin$1(Vue);
        initExtend(Vue);
        initAssetRegisters(Vue);
      }
      initGlobalAPI(Vue);
      Object.defineProperty(Vue.prototype, "$isServer", {
        get: isServerRendering
      });
      Object.defineProperty(Vue.prototype, "$ssrContext", {
        get: function get() {
          return this.$vnode && this.$vnode.ssrContext;
        }
      });
      Object.defineProperty(Vue, "FunctionalRenderContext", {
        value: FunctionalRenderContext
      });
      Vue.version = "2.6.10";
      var isReservedAttr = makeMap("style,class");
      var acceptValue = makeMap("input,textarea,option,select,progress");
      var mustUseProp = function (tag, type, attr) {
        return attr === "value" && acceptValue(tag) && type !== "button" || attr === "selected" && tag === "option" || attr === "checked" && tag === "input" || attr === "muted" && tag === "video";
      };
      var isEnumeratedAttr = makeMap("contenteditable,draggable,spellcheck");
      var isValidContentEditableValue = makeMap("events,caret,typing,plaintext-only");
      var convertEnumeratedValue = function (key, value) {
        return isFalsyAttrValue(value) || value === "false" ? "false" : key === "contenteditable" && isValidContentEditableValue(value) ? value : "true";
      };
      var isBooleanAttr = makeMap("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare," + "default,defaultchecked,defaultmuted,defaultselected,defer,disabled," + "enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple," + "muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly," + "required,reversed,scoped,seamless,selected,sortable,translate," + "truespeed,typemustmatch,visible");
      var xlinkNS = "http://www.w3.org/1999/xlink";
      var isXlink = function (name) {
        return name.charAt(5) === ":" && name.slice(0, 5) === "xlink";
      };
      var getXlinkProp = function (name) {
        return isXlink(name) ? name.slice(6, name.length) : "";
      };
      var isFalsyAttrValue = function (val) {
        return val == null || val === false;
      };
      function genClassForVnode(vnode) {
        var data = vnode.data;
        var parentNode = vnode;
        var childNode = vnode;
        while (isDef(childNode.componentInstance)) {
          childNode = childNode.componentInstance._vnode;
          if (childNode && childNode.data) {
            data = mergeClassData(childNode.data, data);
          }
        }
        while (isDef(parentNode = parentNode.parent)) {
          if (parentNode && parentNode.data) {
            data = mergeClassData(data, parentNode.data);
          }
        }
        return renderClass(data.staticClass, data.class);
      }
      function mergeClassData(child, parent) {
        return {
          staticClass: concat(child.staticClass, parent.staticClass),
          class: isDef(child.class) ? [child.class, parent.class] : parent.class
        };
      }
      function renderClass(staticClass, dynamicClass) {
        if (isDef(staticClass) || isDef(dynamicClass)) {
          return concat(staticClass, stringifyClass(dynamicClass));
        }
        return "";
      }
      function concat(a, b) {
        return a ? b ? a + " " + b : a : b || "";
      }
      function stringifyClass(value) {
        if (Array.isArray(value)) {
          return stringifyArray(value);
        }
        if (isObject(value)) {
          return stringifyObject(value);
        }
        if (typeof value === "string") {
          return value;
        }
        return "";
      }
      function stringifyArray(value) {
        var res = "";
        var stringified;
        for (var i = 0, l = value.length; i < l; i++) {
          if (isDef(stringified = stringifyClass(value[i])) && stringified !== "") {
            if (res) {
              res += " ";
            }
            res += stringified;
          }
        }
        return res;
      }
      function stringifyObject(value) {
        var res = "";
        for (var key in value) {
          if (value[key]) {
            if (res) {
              res += " ";
            }
            res += key;
          }
        }
        return res;
      }
      var namespaceMap = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML"
      };
      var isHTMLTag = makeMap("html,body,base,head,link,meta,style,title," + "address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section," + "div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul," + "a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby," + "s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video," + "embed,object,param,source,canvas,script,noscript,del,ins," + "caption,col,colgroup,table,thead,tbody,td,th,tr," + "button,datalist,fieldset,form,input,label,legend,meter,optgroup,option," + "output,progress,select,textarea," + "details,dialog,menu,menuitem,summary," + "content,element,shadow,template,blockquote,iframe,tfoot");
      var isSVG = makeMap("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face," + "foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern," + "polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", true);
      var isReservedTag = function (tag) {
        return isHTMLTag(tag) || isSVG(tag);
      };
      function getTagNamespace(tag) {
        if (isSVG(tag)) {
          return "svg";
        }
        if (tag === "math") {
          return "math";
        }
      }
      var unknownElementCache = Object.create(null);
      function isUnknownElement(tag) {
        if (!inBrowser) {
          return true;
        }
        if (isReservedTag(tag)) {
          return false;
        }
        tag = tag.toLowerCase();
        if (unknownElementCache[tag] != null) {
          return unknownElementCache[tag];
        }
        var el = document.createElement(tag);
        if (tag.indexOf("-") > -1) {
          return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
        } else {
          return unknownElementCache[tag] = (/HTMLUnknownElement/).test(el.toString());
        }
      }
      var isTextInputType = makeMap("text,number,password,search,email,tel,url");
      function query(el) {
        if (typeof el === "string") {
          var selected = document.querySelector(el);
          if (!selected) {
            true && warn("Cannot find element: " + el);
            return document.createElement("div");
          }
          return selected;
        } else {
          return el;
        }
      }
      function createElement$1(tagName, vnode) {
        var elm = document.createElement(tagName);
        if (tagName !== "select") {
          return elm;
        }
        if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
          elm.setAttribute("multiple", "multiple");
        }
        return elm;
      }
      function createElementNS(namespace, tagName) {
        return document.createElementNS(namespaceMap[namespace], tagName);
      }
      function createTextNode(text) {
        return document.createTextNode(text);
      }
      function createComment(text) {
        return document.createComment(text);
      }
      function insertBefore(parentNode, newNode, referenceNode) {
        parentNode.insertBefore(newNode, referenceNode);
      }
      function removeChild(node, child) {
        node.removeChild(child);
      }
      function appendChild(node, child) {
        node.appendChild(child);
      }
      function parentNode(node) {
        return node.parentNode;
      }
      function nextSibling(node) {
        return node.nextSibling;
      }
      function tagName(node) {
        return node.tagName;
      }
      function setTextContent(node, text) {
        node.textContent = text;
      }
      function setStyleScope(node, scopeId) {
        node.setAttribute(scopeId, "");
      }
      var nodeOps = Object.freeze({
        createElement: createElement$1,
        createElementNS: createElementNS,
        createTextNode: createTextNode,
        createComment: createComment,
        insertBefore: insertBefore,
        removeChild: removeChild,
        appendChild: appendChild,
        parentNode: parentNode,
        nextSibling: nextSibling,
        tagName: tagName,
        setTextContent: setTextContent,
        setStyleScope: setStyleScope
      });
      var ref = {
        create: function create(_, vnode) {
          registerRef(vnode);
        },
        update: function update(oldVnode, vnode) {
          if (oldVnode.data.ref !== vnode.data.ref) {
            registerRef(oldVnode, true);
            registerRef(vnode);
          }
        },
        destroy: function destroy(vnode) {
          registerRef(vnode, true);
        }
      };
      function registerRef(vnode, isRemoval) {
        var key = vnode.data.ref;
        if (!isDef(key)) {
          return;
        }
        var vm = vnode.context;
        var ref = vnode.componentInstance || vnode.elm;
        var refs = vm.$refs;
        if (isRemoval) {
          if (Array.isArray(refs[key])) {
            remove(refs[key], ref);
          } else if (refs[key] === ref) {
            refs[key] = undefined;
          }
        } else {
          if (vnode.data.refInFor) {
            if (!Array.isArray(refs[key])) {
              refs[key] = [ref];
            } else if (refs[key].indexOf(ref) < 0) {
              refs[key].push(ref);
            }
          } else {
            refs[key] = ref;
          }
        }
      }
      var emptyNode = new VNode("", {}, []);
      var hooks = ["create", "activate", "update", "remove", "destroy"];
      function sameVnode(a, b) {
        return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
      }
      function sameInputType(a, b) {
        if (a.tag !== "input") {
          return true;
        }
        var i;
        var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
        var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
        return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
      }
      function createKeyToOldIdx(children, beginIdx, endIdx) {
        var i, key;
        var map = {};
        for (i = beginIdx; i <= endIdx; ++i) {
          key = children[i].key;
          if (isDef(key)) {
            map[key] = i;
          }
        }
        return map;
      }
      function createPatchFunction(backend) {
        var i, j;
        var cbs = {};
        var modules = backend.modules;
        var nodeOps = backend.nodeOps;
        for (i = 0; i < hooks.length; ++i) {
          cbs[hooks[i]] = [];
          for (j = 0; j < modules.length; ++j) {
            if (isDef(modules[j][hooks[i]])) {
              cbs[hooks[i]].push(modules[j][hooks[i]]);
            }
          }
        }
        function emptyNodeAt(elm) {
          return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
        }
        function createRmCb(childElm, listeners) {
          function remove$$1() {
            if (--remove$$1.listeners === 0) {
              removeNode(childElm);
            }
          }
          remove$$1.listeners = listeners;
          return remove$$1;
        }
        function removeNode(el) {
          var parent = nodeOps.parentNode(el);
          if (isDef(parent)) {
            nodeOps.removeChild(parent, el);
          }
        }
        function isUnknownElement$$1(vnode, inVPre) {
          return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
            return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
          })) && config.isUnknownElement(vnode.tag);
        }
        var creatingElmInVPre = 0;
        function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
          if (isDef(vnode.elm) && isDef(ownerArray)) {
            vnode = ownerArray[index] = cloneVNode(vnode);
          }
          vnode.isRootInsert = !nested;
          if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
            return;
          }
          var data = vnode.data;
          var children = vnode.children;
          var tag = vnode.tag;
          if (isDef(tag)) {
            if (true) {
              if (data && data.pre) {
                creatingElmInVPre++;
              }
              if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
                warn("Unknown custom element: <" + tag + "> - did you " + "register the component correctly? For recursive components, " + "make sure to provide the \"name\" option.", vnode.context);
              }
            }
            vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
            setScope(vnode);
            {
              createChildren(vnode, children, insertedVnodeQueue);
              if (isDef(data)) {
                invokeCreateHooks(vnode, insertedVnodeQueue);
              }
              insert(parentElm, vnode.elm, refElm);
            }
            if (true && data && data.pre) {
              creatingElmInVPre--;
            }
          } else if (isTrue(vnode.isComment)) {
            vnode.elm = nodeOps.createComment(vnode.text);
            insert(parentElm, vnode.elm, refElm);
          } else {
            vnode.elm = nodeOps.createTextNode(vnode.text);
            insert(parentElm, vnode.elm, refElm);
          }
        }
        function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
          var i = vnode.data;
          if (isDef(i)) {
            var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
            if (isDef(i = i.hook) && isDef(i = i.init)) {
              i(vnode, false);
            }
            if (isDef(vnode.componentInstance)) {
              initComponent(vnode, insertedVnodeQueue);
              insert(parentElm, vnode.elm, refElm);
              if (isTrue(isReactivated)) {
                reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
              }
              return true;
            }
          }
        }
        function initComponent(vnode, insertedVnodeQueue) {
          if (isDef(vnode.data.pendingInsert)) {
            insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
            vnode.data.pendingInsert = null;
          }
          vnode.elm = vnode.componentInstance.$el;
          if (isPatchable(vnode)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            setScope(vnode);
          } else {
            registerRef(vnode);
            insertedVnodeQueue.push(vnode);
          }
        }
        function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
          var i;
          var innerNode = vnode;
          while (innerNode.componentInstance) {
            innerNode = innerNode.componentInstance._vnode;
            if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
              for (i = 0; i < cbs.activate.length; ++i) {
                cbs.activate[i](emptyNode, innerNode);
              }
              insertedVnodeQueue.push(innerNode);
              break;
            }
          }
          insert(parentElm, vnode.elm, refElm);
        }
        function insert(parent, elm, ref$$1) {
          if (isDef(parent)) {
            if (isDef(ref$$1)) {
              if (nodeOps.parentNode(ref$$1) === parent) {
                nodeOps.insertBefore(parent, elm, ref$$1);
              }
            } else {
              nodeOps.appendChild(parent, elm);
            }
          }
        }
        function createChildren(vnode, children, insertedVnodeQueue) {
          if (Array.isArray(children)) {
            if (true) {
              checkDuplicateKeys(children);
            }
            for (var i = 0; i < children.length; ++i) {
              createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
            }
          } else if (isPrimitive(vnode.text)) {
            nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
          }
        }
        function isPatchable(vnode) {
          while (vnode.componentInstance) {
            vnode = vnode.componentInstance._vnode;
          }
          return isDef(vnode.tag);
        }
        function invokeCreateHooks(vnode, insertedVnodeQueue) {
          for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
            cbs.create[i$1](emptyNode, vnode);
          }
          i = vnode.data.hook;
          if (isDef(i)) {
            if (isDef(i.create)) {
              i.create(emptyNode, vnode);
            }
            if (isDef(i.insert)) {
              insertedVnodeQueue.push(vnode);
            }
          }
        }
        function setScope(vnode) {
          var i;
          if (isDef(i = vnode.fnScopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          } else {
            var ancestor = vnode;
            while (ancestor) {
              if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
                nodeOps.setStyleScope(vnode.elm, i);
              }
              ancestor = ancestor.parent;
            }
          }
          if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }
        }
        function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
          for (; startIdx <= endIdx; ++startIdx) {
            createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
          }
        }
        function invokeDestroyHook(vnode) {
          var i, j;
          var data = vnode.data;
          if (isDef(data)) {
            if (isDef(i = data.hook) && isDef(i = i.destroy)) {
              i(vnode);
            }
            for (i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](vnode);
            }
          }
          if (isDef(i = vnode.children)) {
            for (j = 0; j < vnode.children.length; ++j) {
              invokeDestroyHook(vnode.children[j]);
            }
          }
        }
        function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
          for (; startIdx <= endIdx; ++startIdx) {
            var ch = vnodes[startIdx];
            if (isDef(ch)) {
              if (isDef(ch.tag)) {
                removeAndInvokeRemoveHook(ch);
                invokeDestroyHook(ch);
              } else {
                removeNode(ch.elm);
              }
            }
          }
        }
        function removeAndInvokeRemoveHook(vnode, rm) {
          if (isDef(rm) || isDef(vnode.data)) {
            var i;
            var listeners = cbs.remove.length + 1;
            if (isDef(rm)) {
              rm.listeners += listeners;
            } else {
              rm = createRmCb(vnode.elm, listeners);
            }
            if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
              removeAndInvokeRemoveHook(i, rm);
            }
            for (i = 0; i < cbs.remove.length; ++i) {
              cbs.remove[i](vnode, rm);
            }
            if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
              i(vnode, rm);
            } else {
              rm();
            }
          } else {
            removeNode(vnode.elm);
          }
        }
        function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
          var oldStartIdx = 0;
          var newStartIdx = 0;
          var oldEndIdx = oldCh.length - 1;
          var oldStartVnode = oldCh[0];
          var oldEndVnode = oldCh[oldEndIdx];
          var newEndIdx = newCh.length - 1;
          var newStartVnode = newCh[0];
          var newEndVnode = newCh[newEndIdx];
          var oldKeyToIdx, idxInOld, vnodeToMove, refElm;
          var canMove = !removeOnly;
          if (true) {
            checkDuplicateKeys(newCh);
          }
          while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (isUndef(oldStartVnode)) {
              oldStartVnode = oldCh[++oldStartIdx];
            } else if (isUndef(oldEndVnode)) {
              oldEndVnode = oldCh[--oldEndIdx];
            } else if (sameVnode(oldStartVnode, newStartVnode)) {
              patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldStartVnode = oldCh[++oldStartIdx];
              newStartVnode = newCh[++newStartIdx];
            } else if (sameVnode(oldEndVnode, newEndVnode)) {
              patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
              oldEndVnode = oldCh[--oldEndIdx];
              newEndVnode = newCh[--newEndIdx];
            } else if (sameVnode(oldStartVnode, newEndVnode)) {
              patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
              canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
              oldStartVnode = oldCh[++oldStartIdx];
              newEndVnode = newCh[--newEndIdx];
            } else if (sameVnode(oldEndVnode, newStartVnode)) {
              patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
              oldEndVnode = oldCh[--oldEndIdx];
              newStartVnode = newCh[++newStartIdx];
            } else {
              if (isUndef(oldKeyToIdx)) {
                oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
              }
              idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
              if (isUndef(idxInOld)) {
                createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
              } else {
                vnodeToMove = oldCh[idxInOld];
                if (sameVnode(vnodeToMove, newStartVnode)) {
                  patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                  oldCh[idxInOld] = undefined;
                  canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
                } else {
                  createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                }
              }
              newStartVnode = newCh[++newStartIdx];
            }
          }
          if (oldStartIdx > oldEndIdx) {
            refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
            addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
          } else if (newStartIdx > newEndIdx) {
            removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
          }
        }
        function checkDuplicateKeys(children) {
          var seenKeys = {};
          for (var i = 0; i < children.length; i++) {
            var vnode = children[i];
            var key = vnode.key;
            if (isDef(key)) {
              if (seenKeys[key]) {
                warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
              } else {
                seenKeys[key] = true;
              }
            }
          }
        }
        function findIdxInOld(node, oldCh, start, end) {
          for (var i = start; i < end; i++) {
            var c = oldCh[i];
            if (isDef(c) && sameVnode(node, c)) {
              return i;
            }
          }
        }
        function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
          if (oldVnode === vnode) {
            return;
          }
          if (isDef(vnode.elm) && isDef(ownerArray)) {
            vnode = ownerArray[index] = cloneVNode(vnode);
          }
          var elm = vnode.elm = oldVnode.elm;
          if (isTrue(oldVnode.isAsyncPlaceholder)) {
            if (isDef(vnode.asyncFactory.resolved)) {
              hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
            } else {
              vnode.isAsyncPlaceholder = true;
            }
            return;
          }
          if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
            vnode.componentInstance = oldVnode.componentInstance;
            return;
          }
          var i;
          var data = vnode.data;
          if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
            i(oldVnode, vnode);
          }
          var oldCh = oldVnode.children;
          var ch = vnode.children;
          if (isDef(data) && isPatchable(vnode)) {
            for (i = 0; i < cbs.update.length; ++i) {
              cbs.update[i](oldVnode, vnode);
            }
            if (isDef(i = data.hook) && isDef(i = i.update)) {
              i(oldVnode, vnode);
            }
          }
          if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
              if (oldCh !== ch) {
                updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
              }
            } else if (isDef(ch)) {
              if (true) {
                checkDuplicateKeys(ch);
              }
              if (isDef(oldVnode.text)) {
                nodeOps.setTextContent(elm, "");
              }
              addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
            } else if (isDef(oldCh)) {
              removeVnodes(elm, oldCh, 0, oldCh.length - 1);
            } else if (isDef(oldVnode.text)) {
              nodeOps.setTextContent(elm, "");
            }
          } else if (oldVnode.text !== vnode.text) {
            nodeOps.setTextContent(elm, vnode.text);
          }
          if (isDef(data)) {
            if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
              i(oldVnode, vnode);
            }
          }
        }
        function invokeInsertHook(vnode, queue, initial) {
          if (isTrue(initial) && isDef(vnode.parent)) {
            vnode.parent.data.pendingInsert = queue;
          } else {
            for (var i = 0; i < queue.length; ++i) {
              queue[i].data.hook.insert(queue[i]);
            }
          }
        }
        var hydrationBailed = false;
        var isRenderedModule = makeMap("attrs,class,staticClass,staticStyle,key");
        function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
          var i;
          var tag = vnode.tag;
          var data = vnode.data;
          var children = vnode.children;
          inVPre = inVPre || data && data.pre;
          vnode.elm = elm;
          if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
            vnode.isAsyncPlaceholder = true;
            return true;
          }
          if (true) {
            if (!assertNodeMatch(elm, vnode, inVPre)) {
              return false;
            }
          }
          if (isDef(data)) {
            if (isDef(i = data.hook) && isDef(i = i.init)) {
              i(vnode, true);
            }
            if (isDef(i = vnode.componentInstance)) {
              initComponent(vnode, insertedVnodeQueue);
              return true;
            }
          }
          if (isDef(tag)) {
            if (isDef(children)) {
              if (!elm.hasChildNodes()) {
                createChildren(vnode, children, insertedVnodeQueue);
              } else {
                if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
                  if (i !== elm.innerHTML) {
                    if (true && typeof console !== "undefined" && !hydrationBailed) {
                      hydrationBailed = true;
                      console.warn("Parent: ", elm);
                      console.warn("server innerHTML: ", i);
                      console.warn("client innerHTML: ", elm.innerHTML);
                    }
                    return false;
                  }
                } else {
                  var childrenMatch = true;
                  var childNode = elm.firstChild;
                  for (var i$1 = 0; i$1 < children.length; i$1++) {
                    if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                      childrenMatch = false;
                      break;
                    }
                    childNode = childNode.nextSibling;
                  }
                  if (!childrenMatch || childNode) {
                    if (true && typeof console !== "undefined" && !hydrationBailed) {
                      hydrationBailed = true;
                      console.warn("Parent: ", elm);
                      console.warn("Mismatching childNodes vs. VNodes: ", elm.childNodes, children);
                    }
                    return false;
                  }
                }
              }
            }
            if (isDef(data)) {
              var fullInvoke = false;
              for (var key in data) {
                if (!isRenderedModule(key)) {
                  fullInvoke = true;
                  invokeCreateHooks(vnode, insertedVnodeQueue);
                  break;
                }
              }
              if (!fullInvoke && data["class"]) {
                traverse(data["class"]);
              }
            }
          } else if (elm.data !== vnode.text) {
            elm.data = vnode.text;
          }
          return true;
        }
        function assertNodeMatch(node, vnode, inVPre) {
          if (isDef(vnode.tag)) {
            return vnode.tag.indexOf("vue-component") === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
          } else {
            return node.nodeType === (vnode.isComment ? 8 : 3);
          }
        }
        return function patch(oldVnode, vnode, hydrating, removeOnly) {
          if (isUndef(vnode)) {
            if (isDef(oldVnode)) {
              invokeDestroyHook(oldVnode);
            }
            return;
          }
          var isInitialPatch = false;
          var insertedVnodeQueue = [];
          if (isUndef(oldVnode)) {
            isInitialPatch = true;
            createElm(vnode, insertedVnodeQueue);
          } else {
            var isRealElement = isDef(oldVnode.nodeType);
            if (!isRealElement && sameVnode(oldVnode, vnode)) {
              patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
            } else {
              if (isRealElement) {
                if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                  oldVnode.removeAttribute(SSR_ATTR);
                  hydrating = true;
                }
                if (isTrue(hydrating)) {
                  if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                    invokeInsertHook(vnode, insertedVnodeQueue, true);
                    return oldVnode;
                  } else if (true) {
                    warn("The client-side rendered virtual DOM tree is not matching " + "server-rendered content. This is likely caused by incorrect " + "HTML markup, for example nesting block-level elements inside " + "<p>, or missing <tbody>. Bailing hydration and performing " + "full client-side render.");
                  }
                }
                oldVnode = emptyNodeAt(oldVnode);
              }
              var oldElm = oldVnode.elm;
              var parentElm = nodeOps.parentNode(oldElm);
              createElm(vnode, insertedVnodeQueue, oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm));
              if (isDef(vnode.parent)) {
                var ancestor = vnode.parent;
                var patchable = isPatchable(vnode);
                while (ancestor) {
                  for (var i = 0; i < cbs.destroy.length; ++i) {
                    cbs.destroy[i](ancestor);
                  }
                  ancestor.elm = vnode.elm;
                  if (patchable) {
                    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                      cbs.create[i$1](emptyNode, ancestor);
                    }
                    var insert = ancestor.data.hook.insert;
                    if (insert.merged) {
                      for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                        insert.fns[i$2]();
                      }
                    }
                  } else {
                    registerRef(ancestor);
                  }
                  ancestor = ancestor.parent;
                }
              }
              if (isDef(parentElm)) {
                removeVnodes(parentElm, [oldVnode], 0, 0);
              } else if (isDef(oldVnode.tag)) {
                invokeDestroyHook(oldVnode);
              }
            }
          }
          invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
          return vnode.elm;
        };
      }
      var directives = {
        create: updateDirectives,
        update: updateDirectives,
        destroy: function unbindDirectives(vnode) {
          updateDirectives(vnode, emptyNode);
        }
      };
      function updateDirectives(oldVnode, vnode) {
        if (oldVnode.data.directives || vnode.data.directives) {
          _update(oldVnode, vnode);
        }
      }
      function _update(oldVnode, vnode) {
        var isCreate = oldVnode === emptyNode;
        var isDestroy = vnode === emptyNode;
        var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
        var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
        var dirsWithInsert = [];
        var dirsWithPostpatch = [];
        var key, oldDir, dir;
        for (key in newDirs) {
          oldDir = oldDirs[key];
          dir = newDirs[key];
          if (!oldDir) {
            callHook$1(dir, "bind", vnode, oldVnode);
            if (dir.def && dir.def.inserted) {
              dirsWithInsert.push(dir);
            }
          } else {
            dir.oldValue = oldDir.value;
            dir.oldArg = oldDir.arg;
            callHook$1(dir, "update", vnode, oldVnode);
            if (dir.def && dir.def.componentUpdated) {
              dirsWithPostpatch.push(dir);
            }
          }
        }
        if (dirsWithInsert.length) {
          var callInsert = function () {
            for (var i = 0; i < dirsWithInsert.length; i++) {
              callHook$1(dirsWithInsert[i], "inserted", vnode, oldVnode);
            }
          };
          if (isCreate) {
            mergeVNodeHook(vnode, "insert", callInsert);
          } else {
            callInsert();
          }
        }
        if (dirsWithPostpatch.length) {
          mergeVNodeHook(vnode, "postpatch", function () {
            for (var i = 0; i < dirsWithPostpatch.length; i++) {
              callHook$1(dirsWithPostpatch[i], "componentUpdated", vnode, oldVnode);
            }
          });
        }
        if (!isCreate) {
          for (key in oldDirs) {
            if (!newDirs[key]) {
              callHook$1(oldDirs[key], "unbind", oldVnode, oldVnode, isDestroy);
            }
          }
        }
      }
      var emptyModifiers = Object.create(null);
      function normalizeDirectives$1(dirs, vm) {
        var res = Object.create(null);
        if (!dirs) {
          return res;
        }
        var i, dir;
        for (i = 0; i < dirs.length; i++) {
          dir = dirs[i];
          if (!dir.modifiers) {
            dir.modifiers = emptyModifiers;
          }
          res[getRawDirName(dir)] = dir;
          dir.def = resolveAsset(vm.$options, "directives", dir.name, true);
        }
        return res;
      }
      function getRawDirName(dir) {
        return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || ({})).join(".");
      }
      function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
        var fn = dir.def && dir.def[hook];
        if (fn) {
          try {
            fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
          } catch (e) {
            handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
          }
        }
      }
      var baseModules = [ref, directives];
      function updateAttrs(oldVnode, vnode) {
        var opts = vnode.componentOptions;
        if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
          return;
        }
        if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
          return;
        }
        var key, cur, old;
        var elm = vnode.elm;
        var oldAttrs = oldVnode.data.attrs || ({});
        var attrs = vnode.data.attrs || ({});
        if (isDef(attrs.__ob__)) {
          attrs = vnode.data.attrs = extend({}, attrs);
        }
        for (key in attrs) {
          cur = attrs[key];
          old = oldAttrs[key];
          if (old !== cur) {
            setAttr(elm, key, cur);
          }
        }
        if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
          setAttr(elm, "value", attrs.value);
        }
        for (key in oldAttrs) {
          if (isUndef(attrs[key])) {
            if (isXlink(key)) {
              elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
            } else if (!isEnumeratedAttr(key)) {
              elm.removeAttribute(key);
            }
          }
        }
      }
      function setAttr(el, key, value) {
        if (el.tagName.indexOf("-") > -1) {
          baseSetAttr(el, key, value);
        } else if (isBooleanAttr(key)) {
          if (isFalsyAttrValue(value)) {
            el.removeAttribute(key);
          } else {
            value = key === "allowfullscreen" && el.tagName === "EMBED" ? "true" : key;
            el.setAttribute(key, value);
          }
        } else if (isEnumeratedAttr(key)) {
          el.setAttribute(key, convertEnumeratedValue(key, value));
        } else if (isXlink(key)) {
          if (isFalsyAttrValue(value)) {
            el.removeAttributeNS(xlinkNS, getXlinkProp(key));
          } else {
            el.setAttributeNS(xlinkNS, key, value);
          }
        } else {
          baseSetAttr(el, key, value);
        }
      }
      function baseSetAttr(el, key, value) {
        if (isFalsyAttrValue(value)) {
          el.removeAttribute(key);
        } else {
          if (isIE && !isIE9 && el.tagName === "TEXTAREA" && key === "placeholder" && value !== "" && !el.__ieph) {
            var blocker = function (e) {
              e.stopImmediatePropagation();
              el.removeEventListener("input", blocker);
            };
            el.addEventListener("input", blocker);
            el.__ieph = true;
          }
          el.setAttribute(key, value);
        }
      }
      var attrs = {
        create: updateAttrs,
        update: updateAttrs
      };
      function updateClass(oldVnode, vnode) {
        var el = vnode.elm;
        var data = vnode.data;
        var oldData = oldVnode.data;
        if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
          return;
        }
        var cls = genClassForVnode(vnode);
        var transitionClass = el._transitionClasses;
        if (isDef(transitionClass)) {
          cls = concat(cls, stringifyClass(transitionClass));
        }
        if (cls !== el._prevClass) {
          el.setAttribute("class", cls);
          el._prevClass = cls;
        }
      }
      var klass = {
        create: updateClass,
        update: updateClass
      };
      var RANGE_TOKEN = "__r";
      var CHECKBOX_RADIO_TOKEN = "__c";
      function normalizeEvents(on) {
        if (isDef(on[RANGE_TOKEN])) {
          var event = isIE ? "change" : "input";
          on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
          delete on[RANGE_TOKEN];
        }
        if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
          on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
          delete on[CHECKBOX_RADIO_TOKEN];
        }
      }
      var target$1;
      function createOnceHandler$1(event, handler, capture) {
        var _target = target$1;
        return function onceHandler() {
          var res = handler.apply(null, arguments);
          if (res !== null) {
            remove$2(event, onceHandler, capture, _target);
          }
        };
      }
      var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);
      function add$1(name, handler, capture, passive) {
        if (useMicrotaskFix) {
          var attachedTimestamp = currentFlushTimestamp;
          var original = handler;
          handler = original._wrapper = function (e) {
            if (e.target === e.currentTarget || e.timeStamp >= attachedTimestamp || e.timeStamp <= 0 || e.target.ownerDocument !== document) {
              return original.apply(this, arguments);
            }
          };
        }
        target$1.addEventListener(name, handler, supportsPassive ? {
          capture: capture,
          passive: passive
        } : capture);
      }
      function remove$2(name, handler, capture, _target) {
        (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
      }
      function updateDOMListeners(oldVnode, vnode) {
        if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
          return;
        }
        var on = vnode.data.on || ({});
        var oldOn = oldVnode.data.on || ({});
        target$1 = vnode.elm;
        normalizeEvents(on);
        updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
        target$1 = undefined;
      }
      var events = {
        create: updateDOMListeners,
        update: updateDOMListeners
      };
      var svgContainer;
      function updateDOMProps(oldVnode, vnode) {
        if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
          return;
        }
        var key, cur;
        var elm = vnode.elm;
        var oldProps = oldVnode.data.domProps || ({});
        var props = vnode.data.domProps || ({});
        if (isDef(props.__ob__)) {
          props = vnode.data.domProps = extend({}, props);
        }
        for (key in oldProps) {
          if (!((key in props))) {
            elm[key] = "";
          }
        }
        for (key in props) {
          cur = props[key];
          if (key === "textContent" || key === "innerHTML") {
            if (vnode.children) {
              vnode.children.length = 0;
            }
            if (cur === oldProps[key]) {
              continue;
            }
            if (elm.childNodes.length === 1) {
              elm.removeChild(elm.childNodes[0]);
            }
          }
          if (key === "value" && elm.tagName !== "PROGRESS") {
            elm._value = cur;
            var strCur = isUndef(cur) ? "" : String(cur);
            if (shouldUpdateValue(elm, strCur)) {
              elm.value = strCur;
            }
          } else if (key === "innerHTML" && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
            svgContainer = svgContainer || document.createElement("div");
            svgContainer.innerHTML = "<svg>" + cur + "</svg>";
            var svg = svgContainer.firstChild;
            while (elm.firstChild) {
              elm.removeChild(elm.firstChild);
            }
            while (svg.firstChild) {
              elm.appendChild(svg.firstChild);
            }
          } else if (cur !== oldProps[key]) {
            try {
              elm[key] = cur;
            } catch (e) {}
          }
        }
      }
      function shouldUpdateValue(elm, checkVal) {
        return !elm.composing && (elm.tagName === "OPTION" || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
      }
      function isNotInFocusAndDirty(elm, checkVal) {
        var notInFocus = true;
        try {
          notInFocus = document.activeElement !== elm;
        } catch (e) {}
        return notInFocus && elm.value !== checkVal;
      }
      function isDirtyWithModifiers(elm, newVal) {
        var value = elm.value;
        var modifiers = elm._vModifiers;
        if (isDef(modifiers)) {
          if (modifiers.number) {
            return toNumber(value) !== toNumber(newVal);
          }
          if (modifiers.trim) {
            return value.trim() !== newVal.trim();
          }
        }
        return value !== newVal;
      }
      var domProps = {
        create: updateDOMProps,
        update: updateDOMProps
      };
      var parseStyleText = cached(function (cssText) {
        var res = {};
        var listDelimiter = /;(?![^(]*\))/g;
        var propertyDelimiter = /:(.+)/;
        cssText.split(listDelimiter).forEach(function (item) {
          if (item) {
            var tmp = item.split(propertyDelimiter);
            tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
          }
        });
        return res;
      });
      function normalizeStyleData(data) {
        var style = normalizeStyleBinding(data.style);
        return data.staticStyle ? extend(data.staticStyle, style) : style;
      }
      function normalizeStyleBinding(bindingStyle) {
        if (Array.isArray(bindingStyle)) {
          return toObject(bindingStyle);
        }
        if (typeof bindingStyle === "string") {
          return parseStyleText(bindingStyle);
        }
        return bindingStyle;
      }
      function getStyle(vnode, checkChild) {
        var res = {};
        var styleData;
        if (checkChild) {
          var childNode = vnode;
          while (childNode.componentInstance) {
            childNode = childNode.componentInstance._vnode;
            if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
              extend(res, styleData);
            }
          }
        }
        if (styleData = normalizeStyleData(vnode.data)) {
          extend(res, styleData);
        }
        var parentNode = vnode;
        while (parentNode = parentNode.parent) {
          if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
            extend(res, styleData);
          }
        }
        return res;
      }
      var cssVarRE = /^--/;
      var importantRE = /\s*!important$/;
      var setProp = function (el, name, val) {
        if (cssVarRE.test(name)) {
          el.style.setProperty(name, val);
        } else if (importantRE.test(val)) {
          el.style.setProperty(hyphenate(name), val.replace(importantRE, ""), "important");
        } else {
          var normalizedName = normalize(name);
          if (Array.isArray(val)) {
            for (var i = 0, len = val.length; i < len; i++) {
              el.style[normalizedName] = val[i];
            }
          } else {
            el.style[normalizedName] = val;
          }
        }
      };
      var vendorNames = ["Webkit", "Moz", "ms"];
      var emptyStyle;
      var normalize = cached(function (prop) {
        emptyStyle = emptyStyle || document.createElement("div").style;
        prop = camelize(prop);
        if (prop !== "filter" && (prop in emptyStyle)) {
          return prop;
        }
        var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
        for (var i = 0; i < vendorNames.length; i++) {
          var name = vendorNames[i] + capName;
          if ((name in emptyStyle)) {
            return name;
          }
        }
      });
      function updateStyle(oldVnode, vnode) {
        var data = vnode.data;
        var oldData = oldVnode.data;
        if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
          return;
        }
        var cur, name;
        var el = vnode.elm;
        var oldStaticStyle = oldData.staticStyle;
        var oldStyleBinding = oldData.normalizedStyle || oldData.style || ({});
        var oldStyle = oldStaticStyle || oldStyleBinding;
        var style = normalizeStyleBinding(vnode.data.style) || ({});
        vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
        var newStyle = getStyle(vnode, true);
        for (name in oldStyle) {
          if (isUndef(newStyle[name])) {
            setProp(el, name, "");
          }
        }
        for (name in newStyle) {
          cur = newStyle[name];
          if (cur !== oldStyle[name]) {
            setProp(el, name, cur == null ? "" : cur);
          }
        }
      }
      var style = {
        create: updateStyle,
        update: updateStyle
      };
      var whitespaceRE = /\s+/;
      function addClass(el, cls) {
        if (!cls || !(cls = cls.trim())) {
          return;
        }
        if (el.classList) {
          if (cls.indexOf(" ") > -1) {
            cls.split(whitespaceRE).forEach(function (c) {
              return el.classList.add(c);
            });
          } else {
            el.classList.add(cls);
          }
        } else {
          var cur = " " + (el.getAttribute("class") || "") + " ";
          if (cur.indexOf(" " + cls + " ") < 0) {
            el.setAttribute("class", (cur + cls).trim());
          }
        }
      }
      function removeClass(el, cls) {
        if (!cls || !(cls = cls.trim())) {
          return;
        }
        if (el.classList) {
          if (cls.indexOf(" ") > -1) {
            cls.split(whitespaceRE).forEach(function (c) {
              return el.classList.remove(c);
            });
          } else {
            el.classList.remove(cls);
          }
          if (!el.classList.length) {
            el.removeAttribute("class");
          }
        } else {
          var cur = " " + (el.getAttribute("class") || "") + " ";
          var tar = " " + cls + " ";
          while (cur.indexOf(tar) >= 0) {
            cur = cur.replace(tar, " ");
          }
          cur = cur.trim();
          if (cur) {
            el.setAttribute("class", cur);
          } else {
            el.removeAttribute("class");
          }
        }
      }
      function resolveTransition(def$$1) {
        if (!def$$1) {
          return;
        }
        if (typeof def$$1 === "object") {
          var res = {};
          if (def$$1.css !== false) {
            extend(res, autoCssTransition(def$$1.name || "v"));
          }
          extend(res, def$$1);
          return res;
        } else if (typeof def$$1 === "string") {
          return autoCssTransition(def$$1);
        }
      }
      var autoCssTransition = cached(function (name) {
        return {
          enterClass: name + "-enter",
          enterToClass: name + "-enter-to",
          enterActiveClass: name + "-enter-active",
          leaveClass: name + "-leave",
          leaveToClass: name + "-leave-to",
          leaveActiveClass: name + "-leave-active"
        };
      });
      var hasTransition = inBrowser && !isIE9;
      var TRANSITION = "transition";
      var ANIMATION = "animation";
      var transitionProp = "transition";
      var transitionEndEvent = "transitionend";
      var animationProp = "animation";
      var animationEndEvent = "animationend";
      if (hasTransition) {
        if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
          transitionProp = "WebkitTransition";
          transitionEndEvent = "webkitTransitionEnd";
        }
        if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
          animationProp = "WebkitAnimation";
          animationEndEvent = "webkitAnimationEnd";
        }
      }
      var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (fn) {
        return fn();
      };
      function nextFrame(fn) {
        raf(function () {
          raf(fn);
        });
      }
      function addTransitionClass(el, cls) {
        var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
        if (transitionClasses.indexOf(cls) < 0) {
          transitionClasses.push(cls);
          addClass(el, cls);
        }
      }
      function removeTransitionClass(el, cls) {
        if (el._transitionClasses) {
          remove(el._transitionClasses, cls);
        }
        removeClass(el, cls);
      }
      function whenTransitionEnds(el, expectedType, cb) {
        var ref = getTransitionInfo(el, expectedType);
        var type = ref.type;
        var timeout = ref.timeout;
        var propCount = ref.propCount;
        if (!type) {
          return cb();
        }
        var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
        var ended = 0;
        var end = function () {
          el.removeEventListener(event, onEnd);
          cb();
        };
        var onEnd = function (e) {
          if (e.target === el) {
            if (++ended >= propCount) {
              end();
            }
          }
        };
        setTimeout(function () {
          if (ended < propCount) {
            end();
          }
        }, timeout + 1);
        el.addEventListener(event, onEnd);
      }
      var transformRE = /\b(transform|all)(,|$)/;
      function getTransitionInfo(el, expectedType) {
        var styles = window.getComputedStyle(el);
        var transitionDelays = (styles[transitionProp + "Delay"] || "").split(", ");
        var transitionDurations = (styles[transitionProp + "Duration"] || "").split(", ");
        var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
        var animationDelays = (styles[animationProp + "Delay"] || "").split(", ");
        var animationDurations = (styles[animationProp + "Duration"] || "").split(", ");
        var animationTimeout = getTimeout(animationDelays, animationDurations);
        var type;
        var timeout = 0;
        var propCount = 0;
        if (expectedType === TRANSITION) {
          if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
          }
        } else if (expectedType === ANIMATION) {
          if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
          }
        } else {
          timeout = Math.max(transitionTimeout, animationTimeout);
          type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
          propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
        }
        var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + "Property"]);
        return {
          type: type,
          timeout: timeout,
          propCount: propCount,
          hasTransform: hasTransform
        };
      }
      function getTimeout(delays, durations) {
        while (delays.length < durations.length) {
          delays = delays.concat(delays);
        }
        return Math.max.apply(null, durations.map(function (d, i) {
          return toMs(d) + toMs(delays[i]);
        }));
      }
      function toMs(s) {
        return Number(s.slice(0, -1).replace(",", ".")) * 1000;
      }
      function enter(vnode, toggleDisplay) {
        var el = vnode.elm;
        if (isDef(el._leaveCb)) {
          el._leaveCb.cancelled = true;
          el._leaveCb();
        }
        var data = resolveTransition(vnode.data.transition);
        if (isUndef(data)) {
          return;
        }
        if (isDef(el._enterCb) || el.nodeType !== 1) {
          return;
        }
        var css = data.css;
        var type = data.type;
        var enterClass = data.enterClass;
        var enterToClass = data.enterToClass;
        var enterActiveClass = data.enterActiveClass;
        var appearClass = data.appearClass;
        var appearToClass = data.appearToClass;
        var appearActiveClass = data.appearActiveClass;
        var beforeEnter = data.beforeEnter;
        var enter = data.enter;
        var afterEnter = data.afterEnter;
        var enterCancelled = data.enterCancelled;
        var beforeAppear = data.beforeAppear;
        var appear = data.appear;
        var afterAppear = data.afterAppear;
        var appearCancelled = data.appearCancelled;
        var duration = data.duration;
        var context = activeInstance;
        var transitionNode = activeInstance.$vnode;
        while (transitionNode && transitionNode.parent) {
          context = transitionNode.context;
          transitionNode = transitionNode.parent;
        }
        var isAppear = !context._isMounted || !vnode.isRootInsert;
        if (isAppear && !appear && appear !== "") {
          return;
        }
        var startClass = isAppear && appearClass ? appearClass : enterClass;
        var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
        var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
        var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
        var enterHook = isAppear ? typeof appear === "function" ? appear : enter : enter;
        var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
        var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
        var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);
        if (true && explicitEnterDuration != null) {
          checkDuration(explicitEnterDuration, "enter", vnode);
        }
        var expectsCSS = css !== false && !isIE9;
        var userWantsControl = getHookArgumentsLength(enterHook);
        var cb = el._enterCb = once(function () {
          if (expectsCSS) {
            removeTransitionClass(el, toClass);
            removeTransitionClass(el, activeClass);
          }
          if (cb.cancelled) {
            if (expectsCSS) {
              removeTransitionClass(el, startClass);
            }
            enterCancelledHook && enterCancelledHook(el);
          } else {
            afterEnterHook && afterEnterHook(el);
          }
          el._enterCb = null;
        });
        if (!vnode.data.show) {
          mergeVNodeHook(vnode, "insert", function () {
            var parent = el.parentNode;
            var pendingNode = parent && parent._pending && parent._pending[vnode.key];
            if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
              pendingNode.elm._leaveCb();
            }
            enterHook && enterHook(el, cb);
          });
        }
        beforeEnterHook && beforeEnterHook(el);
        if (expectsCSS) {
          addTransitionClass(el, startClass);
          addTransitionClass(el, activeClass);
          nextFrame(function () {
            removeTransitionClass(el, startClass);
            if (!cb.cancelled) {
              addTransitionClass(el, toClass);
              if (!userWantsControl) {
                if (isValidDuration(explicitEnterDuration)) {
                  setTimeout(cb, explicitEnterDuration);
                } else {
                  whenTransitionEnds(el, type, cb);
                }
              }
            }
          });
        }
        if (vnode.data.show) {
          toggleDisplay && toggleDisplay();
          enterHook && enterHook(el, cb);
        }
        if (!expectsCSS && !userWantsControl) {
          cb();
        }
      }
      function leave(vnode, rm) {
        var el = vnode.elm;
        if (isDef(el._enterCb)) {
          el._enterCb.cancelled = true;
          el._enterCb();
        }
        var data = resolveTransition(vnode.data.transition);
        if (isUndef(data) || el.nodeType !== 1) {
          return rm();
        }
        if (isDef(el._leaveCb)) {
          return;
        }
        var css = data.css;
        var type = data.type;
        var leaveClass = data.leaveClass;
        var leaveToClass = data.leaveToClass;
        var leaveActiveClass = data.leaveActiveClass;
        var beforeLeave = data.beforeLeave;
        var leave = data.leave;
        var afterLeave = data.afterLeave;
        var leaveCancelled = data.leaveCancelled;
        var delayLeave = data.delayLeave;
        var duration = data.duration;
        var expectsCSS = css !== false && !isIE9;
        var userWantsControl = getHookArgumentsLength(leave);
        var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);
        if (true && isDef(explicitLeaveDuration)) {
          checkDuration(explicitLeaveDuration, "leave", vnode);
        }
        var cb = el._leaveCb = once(function () {
          if (el.parentNode && el.parentNode._pending) {
            el.parentNode._pending[vnode.key] = null;
          }
          if (expectsCSS) {
            removeTransitionClass(el, leaveToClass);
            removeTransitionClass(el, leaveActiveClass);
          }
          if (cb.cancelled) {
            if (expectsCSS) {
              removeTransitionClass(el, leaveClass);
            }
            leaveCancelled && leaveCancelled(el);
          } else {
            rm();
            afterLeave && afterLeave(el);
          }
          el._leaveCb = null;
        });
        if (delayLeave) {
          delayLeave(performLeave);
        } else {
          performLeave();
        }
        function performLeave() {
          if (cb.cancelled) {
            return;
          }
          if (!vnode.data.show && el.parentNode) {
            (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
          }
          beforeLeave && beforeLeave(el);
          if (expectsCSS) {
            addTransitionClass(el, leaveClass);
            addTransitionClass(el, leaveActiveClass);
            nextFrame(function () {
              removeTransitionClass(el, leaveClass);
              if (!cb.cancelled) {
                addTransitionClass(el, leaveToClass);
                if (!userWantsControl) {
                  if (isValidDuration(explicitLeaveDuration)) {
                    setTimeout(cb, explicitLeaveDuration);
                  } else {
                    whenTransitionEnds(el, type, cb);
                  }
                }
              }
            });
          }
          leave && leave(el, cb);
          if (!expectsCSS && !userWantsControl) {
            cb();
          }
        }
      }
      function checkDuration(val, name, vnode) {
        if (typeof val !== "number") {
          warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
        } else if (isNaN(val)) {
          warn("<transition> explicit " + name + " duration is NaN - " + "the duration expression might be incorrect.", vnode.context);
        }
      }
      function isValidDuration(val) {
        return typeof val === "number" && !isNaN(val);
      }
      function getHookArgumentsLength(fn) {
        if (isUndef(fn)) {
          return false;
        }
        var invokerFns = fn.fns;
        if (isDef(invokerFns)) {
          return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
        } else {
          return (fn._length || fn.length) > 1;
        }
      }
      function _enter(_, vnode) {
        if (vnode.data.show !== true) {
          enter(vnode);
        }
      }
      var transition = inBrowser ? {
        create: _enter,
        activate: _enter,
        remove: function remove$$1(vnode, rm) {
          if (vnode.data.show !== true) {
            leave(vnode, rm);
          } else {
            rm();
          }
        }
      } : {};
      var platformModules = [attrs, klass, events, domProps, style, transition];
      var modules = platformModules.concat(baseModules);
      var patch = createPatchFunction({
        nodeOps: nodeOps,
        modules: modules
      });
      if (isIE9) {
        document.addEventListener("selectionchange", function () {
          var el = document.activeElement;
          if (el && el.vmodel) {
            trigger(el, "input");
          }
        });
      }
      var directive = {
        inserted: function inserted(el, binding, vnode, oldVnode) {
          if (vnode.tag === "select") {
            if (oldVnode.elm && !oldVnode.elm._vOptions) {
              mergeVNodeHook(vnode, "postpatch", function () {
                directive.componentUpdated(el, binding, vnode);
              });
            } else {
              setSelected(el, binding, vnode.context);
            }
            el._vOptions = [].map.call(el.options, getValue);
          } else if (vnode.tag === "textarea" || isTextInputType(el.type)) {
            el._vModifiers = binding.modifiers;
            if (!binding.modifiers.lazy) {
              el.addEventListener("compositionstart", onCompositionStart);
              el.addEventListener("compositionend", onCompositionEnd);
              el.addEventListener("change", onCompositionEnd);
              if (isIE9) {
                el.vmodel = true;
              }
            }
          }
        },
        componentUpdated: function componentUpdated(el, binding, vnode) {
          if (vnode.tag === "select") {
            setSelected(el, binding, vnode.context);
            var prevOptions = el._vOptions;
            var curOptions = el._vOptions = [].map.call(el.options, getValue);
            if (curOptions.some(function (o, i) {
              return !looseEqual(o, prevOptions[i]);
            })) {
              var needReset = el.multiple ? binding.value.some(function (v) {
                return hasNoMatchingOption(v, curOptions);
              }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
              if (needReset) {
                trigger(el, "change");
              }
            }
          }
        }
      };
      function setSelected(el, binding, vm) {
        actuallySetSelected(el, binding, vm);
        if (isIE || isEdge) {
          setTimeout(function () {
            actuallySetSelected(el, binding, vm);
          }, 0);
        }
      }
      function actuallySetSelected(el, binding, vm) {
        var value = binding.value;
        var isMultiple = el.multiple;
        if (isMultiple && !Array.isArray(value)) {
          true && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
          return;
        }
        var selected, option;
        for (var i = 0, l = el.options.length; i < l; i++) {
          option = el.options[i];
          if (isMultiple) {
            selected = looseIndexOf(value, getValue(option)) > -1;
            if (option.selected !== selected) {
              option.selected = selected;
            }
          } else {
            if (looseEqual(getValue(option), value)) {
              if (el.selectedIndex !== i) {
                el.selectedIndex = i;
              }
              return;
            }
          }
        }
        if (!isMultiple) {
          el.selectedIndex = -1;
        }
      }
      function hasNoMatchingOption(value, options) {
        return options.every(function (o) {
          return !looseEqual(o, value);
        });
      }
      function getValue(option) {
        return ("_value" in option) ? option._value : option.value;
      }
      function onCompositionStart(e) {
        e.target.composing = true;
      }
      function onCompositionEnd(e) {
        if (!e.target.composing) {
          return;
        }
        e.target.composing = false;
        trigger(e.target, "input");
      }
      function trigger(el, type) {
        var e = document.createEvent("HTMLEvents");
        e.initEvent(type, true, true);
        el.dispatchEvent(e);
      }
      function locateNode(vnode) {
        return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
      }
      var show = {
        bind: function bind(el, ref, vnode) {
          var value = ref.value;
          vnode = locateNode(vnode);
          var transition$$1 = vnode.data && vnode.data.transition;
          var originalDisplay = el.__vOriginalDisplay = el.style.display === "none" ? "" : el.style.display;
          if (value && transition$$1) {
            vnode.data.show = true;
            enter(vnode, function () {
              el.style.display = originalDisplay;
            });
          } else {
            el.style.display = value ? originalDisplay : "none";
          }
        },
        update: function update(el, ref, vnode) {
          var value = ref.value;
          var oldValue = ref.oldValue;
          if (!value === !oldValue) {
            return;
          }
          vnode = locateNode(vnode);
          var transition$$1 = vnode.data && vnode.data.transition;
          if (transition$$1) {
            vnode.data.show = true;
            if (value) {
              enter(vnode, function () {
                el.style.display = el.__vOriginalDisplay;
              });
            } else {
              leave(vnode, function () {
                el.style.display = "none";
              });
            }
          } else {
            el.style.display = value ? el.__vOriginalDisplay : "none";
          }
        },
        unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
          if (!isDestroy) {
            el.style.display = el.__vOriginalDisplay;
          }
        }
      };
      var platformDirectives = {
        model: directive,
        show: show
      };
      var transitionProps = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [Number, String, Object]
      };
      function getRealChild(vnode) {
        var compOptions = vnode && vnode.componentOptions;
        if (compOptions && compOptions.Ctor.options.abstract) {
          return getRealChild(getFirstComponentChild(compOptions.children));
        } else {
          return vnode;
        }
      }
      function extractTransitionData(comp) {
        var data = {};
        var options = comp.$options;
        for (var key in options.propsData) {
          data[key] = comp[key];
        }
        var listeners = options._parentListeners;
        for (var key$1 in listeners) {
          data[camelize(key$1)] = listeners[key$1];
        }
        return data;
      }
      function placeholder(h, rawChild) {
        if ((/\d-keep-alive$/).test(rawChild.tag)) {
          return h("keep-alive", {
            props: rawChild.componentOptions.propsData
          });
        }
      }
      function hasParentTransition(vnode) {
        while (vnode = vnode.parent) {
          if (vnode.data.transition) {
            return true;
          }
        }
      }
      function isSameChild(child, oldChild) {
        return oldChild.key === child.key && oldChild.tag === child.tag;
      }
      var isNotTextNode = function (c) {
        return c.tag || isAsyncPlaceholder(c);
      };
      var isVShowDirective = function (d) {
        return d.name === "show";
      };
      var Transition = {
        name: "transition",
        props: transitionProps,
        abstract: true,
        render: function render(h) {
          var this$1 = this;
          var children = this.$slots.default;
          if (!children) {
            return;
          }
          children = children.filter(isNotTextNode);
          if (!children.length) {
            return;
          }
          if (true && children.length > 1) {
            warn("<transition> can only be used on a single element. Use " + "<transition-group> for lists.", this.$parent);
          }
          var mode = this.mode;
          if (true && mode && mode !== "in-out" && mode !== "out-in") {
            warn("invalid <transition> mode: " + mode, this.$parent);
          }
          var rawChild = children[0];
          if (hasParentTransition(this.$vnode)) {
            return rawChild;
          }
          var child = getRealChild(rawChild);
          if (!child) {
            return rawChild;
          }
          if (this._leaving) {
            return placeholder(h, rawChild);
          }
          var id = "__transition-" + this._uid + "-";
          child.key = child.key == null ? child.isComment ? id + "comment" : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
          var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
          var oldRawChild = this._vnode;
          var oldChild = getRealChild(oldRawChild);
          if (child.data.directives && child.data.directives.some(isVShowDirective)) {
            child.data.show = true;
          }
          if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
            var oldData = oldChild.data.transition = extend({}, data);
            if (mode === "out-in") {
              this._leaving = true;
              mergeVNodeHook(oldData, "afterLeave", function () {
                this$1._leaving = false;
                this$1.$forceUpdate();
              });
              return placeholder(h, rawChild);
            } else if (mode === "in-out") {
              if (isAsyncPlaceholder(child)) {
                return oldRawChild;
              }
              var delayedLeave;
              var performLeave = function () {
                delayedLeave();
              };
              mergeVNodeHook(data, "afterEnter", performLeave);
              mergeVNodeHook(data, "enterCancelled", performLeave);
              mergeVNodeHook(oldData, "delayLeave", function (leave) {
                delayedLeave = leave;
              });
            }
          }
          return rawChild;
        }
      };
      var props = extend({
        tag: String,
        moveClass: String
      }, transitionProps);
      delete props.mode;
      var TransitionGroup = {
        props: props,
        beforeMount: function beforeMount() {
          var this$1 = this;
          var update = this._update;
          this._update = function (vnode, hydrating) {
            var restoreActiveInstance = setActiveInstance(this$1);
            this$1.__patch__(this$1._vnode, this$1.kept, false, true);
            this$1._vnode = this$1.kept;
            restoreActiveInstance();
            update.call(this$1, vnode, hydrating);
          };
        },
        render: function render(h) {
          var tag = this.tag || this.$vnode.data.tag || "span";
          var map = Object.create(null);
          var prevChildren = this.prevChildren = this.children;
          var rawChildren = this.$slots.default || [];
          var children = this.children = [];
          var transitionData = extractTransitionData(this);
          for (var i = 0; i < rawChildren.length; i++) {
            var c = rawChildren[i];
            if (c.tag) {
              if (c.key != null && String(c.key).indexOf("__vlist") !== 0) {
                children.push(c);
                map[c.key] = c;
                (c.data || (c.data = {})).transition = transitionData;
              } else if (true) {
                var opts = c.componentOptions;
                var name = opts ? opts.Ctor.options.name || opts.tag || "" : c.tag;
                warn("<transition-group> children must be keyed: <" + name + ">");
              }
            }
          }
          if (prevChildren) {
            var kept = [];
            var removed = [];
            for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
              var c$1 = prevChildren[i$1];
              c$1.data.transition = transitionData;
              c$1.data.pos = c$1.elm.getBoundingClientRect();
              if (map[c$1.key]) {
                kept.push(c$1);
              } else {
                removed.push(c$1);
              }
            }
            this.kept = h(tag, null, kept);
            this.removed = removed;
          }
          return h(tag, null, children);
        },
        updated: function updated() {
          var children = this.prevChildren;
          var moveClass = this.moveClass || (this.name || "v") + "-move";
          if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
            return;
          }
          children.forEach(callPendingCbs);
          children.forEach(recordPosition);
          children.forEach(applyTranslation);
          this._reflow = document.body.offsetHeight;
          children.forEach(function (c) {
            if (c.data.moved) {
              var el = c.elm;
              var s = el.style;
              addTransitionClass(el, moveClass);
              s.transform = s.WebkitTransform = s.transitionDuration = "";
              el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
                if (e && e.target !== el) {
                  return;
                }
                if (!e || (/transform$/).test(e.propertyName)) {
                  el.removeEventListener(transitionEndEvent, cb);
                  el._moveCb = null;
                  removeTransitionClass(el, moveClass);
                }
              });
            }
          });
        },
        methods: {
          hasMove: function hasMove(el, moveClass) {
            if (!hasTransition) {
              return false;
            }
            if (this._hasMove) {
              return this._hasMove;
            }
            var clone = el.cloneNode();
            if (el._transitionClasses) {
              el._transitionClasses.forEach(function (cls) {
                removeClass(clone, cls);
              });
            }
            addClass(clone, moveClass);
            clone.style.display = "none";
            this.$el.appendChild(clone);
            var info = getTransitionInfo(clone);
            this.$el.removeChild(clone);
            return this._hasMove = info.hasTransform;
          }
        }
      };
      function callPendingCbs(c) {
        if (c.elm._moveCb) {
          c.elm._moveCb();
        }
        if (c.elm._enterCb) {
          c.elm._enterCb();
        }
      }
      function recordPosition(c) {
        c.data.newPos = c.elm.getBoundingClientRect();
      }
      function applyTranslation(c) {
        var oldPos = c.data.pos;
        var newPos = c.data.newPos;
        var dx = oldPos.left - newPos.left;
        var dy = oldPos.top - newPos.top;
        if (dx || dy) {
          c.data.moved = true;
          var s = c.elm.style;
          s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
          s.transitionDuration = "0s";
        }
      }
      var platformComponents = {
        Transition: Transition,
        TransitionGroup: TransitionGroup
      };
      Vue.config.mustUseProp = mustUseProp;
      Vue.config.isReservedTag = isReservedTag;
      Vue.config.isReservedAttr = isReservedAttr;
      Vue.config.getTagNamespace = getTagNamespace;
      Vue.config.isUnknownElement = isUnknownElement;
      extend(Vue.options.directives, platformDirectives);
      extend(Vue.options.components, platformComponents);
      Vue.prototype.__patch__ = inBrowser ? patch : noop;
      Vue.prototype.$mount = function (el, hydrating) {
        el = el && inBrowser ? query(el) : undefined;
        return mountComponent(this, el, hydrating);
      };
      if (inBrowser) {
        setTimeout(function () {
          if (config.devtools) {
            if (devtools) {
              devtools.emit("init", Vue);
            } else if (true) {
              console[console.info ? "info" : "log"]("Download the Vue Devtools extension for a better development experience:\n" + "https://github.com/vuejs/vue-devtools");
            }
          }
          if (true && config.productionTip !== false && typeof console !== "undefined") {
            console[console.info ? "info" : "log"]("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
          }
        }, 0);
      }
      __webpack_exports__["default"] = Vue;
    }).call(this, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/timers-browserify/main.js").setImmediate);
  },
  "./dropdown/Dropdown.ts": function (module, exports, __webpack_require__) {
    function $vue_templ(){return {r:function(_$, css$){let $pr=this.p||{},$cc=this.$cc,$cs=this.$cs,_c=this._c,_q=this._q,_k=this._k,_u=this._u,_e=this._e,_l=this._l,_t=this._t.bind(this),_s=this._s,_v=this._v,_m=this._m.bind(this);with(this.m){return _c('div',{staticClass:"Dropdown",class:( (isActive ? ('Dropdown_active '+ (isStraight? 'Dropdown_straight': 'Dropdown_reverse')): '') + (isSearchable? '': ' Dropdown_clickable') + (disabled? ' Dropdown_disabled': ''))+' '+(css$ != null? css$: ""),attrs:{"data-cn":"Dropdown"}},[(isLoading)?_c('i',{staticClass:"fas fa-spinner fa-spin Dropdown__load-icon"}):_e(),_v(" "),(!isLoading && (!hasAnySelected() || isRequired))?_c('i',{staticClass:"fas fa-caret-down Dropdown__icon",class:isSelfOptionEnable ? 'invisible' : ''}):_e(),_v(" "),(!isLoading && hasAnySelected() && !isRequired)?_c('i',{staticClass:"fas fa-times Dropdown__close-btn",on:{"click":function($event){$event.stopPropagation();return selectItem(null)}}}):_e(),_v(" "),(!isFiltered)?_c('div',{staticClass:"Dropdown__text",class:(!hasAnySelected() || isActive) ? 'text-secondary' : ''},[_v(_s(hasAnySelected() ? selectedOption.text: (!isSelfOptionEnable ? placeholder : '')))]):_e(),_v(" "),_c('input',{ref:"inputElement",staticClass:"Dropdown__search form-control",class:!isValueValid? 'is-invalid' : '',attrs:{"autocomplete":"off","readonly":!isSearchable || !isActive,"disabled":disabled},domProps:{"value":searchText},on:{"input":function($event){return filterOptions($event)},"focus":function($event){$event.preventDefault();return openOptions($event)},"blur":function($event){return onBlur($event)},"click":function($event){return openOptions($event)},"keydown":[function($event){if(!$event.type.indexOf('key')&&_k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"]))return null;$event.preventDefault();return prevItem($event)},function($event){if(!$event.type.indexOf('key')&&_k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"]))return null;$event.preventDefault();return nextItem($event)},function($event){if(!$event.type.indexOf('key')&&_k($event.keyCode,"enter",13,$event.key,"Enter"))return null;$event.preventDefault();}],"keyup":[function($event){if(!$event.type.indexOf('key')&&_k($event.keyCode,"enter",13,$event.key,"Enter"))return null;$event.preventDefault();return selectCurrentItem($event)},function($event){if(!$event.type.indexOf('key')&&_k($event.keyCode,"esc",27,$event.key,["Esc","Escape"]))return null;return onBlur($event)}]}}),_v(" "),(isActive)?_c('div',{ref:"menuElement",staticClass:"Dropdown__menu",style:('max-height:' +menuHeight+ 'px'),attrs:{"tabindex":"-1"},on:{"mousedown":function($event){$event.preventDefault();}}},[_l(($cs(1,filteredOptions)),function(option,iter){return [_v(_s(void( iter=option.s,option=option.v))+"\n            "),_c('div',{staticClass:"Dropdown__item",class:(iter.index == pointer ? 'Dropdown__item_flowable' : '') + (isOptionSelected(option)? ' Dropdown__item_selected': ''),on:{"click":function($event){$event.stopPropagation();return selectItem(option, $event)}}},[_c(option.app$.cn,{key:option.app$.id,tag:"component",attrs:{"m":$cc(option)}})],1)]})],2):_e()])}},s:[]}};;
    (function () {
      "use strict";
      eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n//# sourceURL=webpack:////home/bondarenko/IdeaProjects/plastique-components/dropdown/Dropdown.ts?");
      var DropdownOption_1 = __webpack_require__("./dropdown/DropdownOption.ts");
      var I18n_1 = __webpack_require__("./node_modules/@plastique/core/utils/I18n.ts");
      var FakeDropdownOption_1 = __webpack_require__("./dropdown/FakeDropdownOption.ts");
      var Dropdown = (function () {
        function Dropdown(options, selected, isSearchable, isRequired, isSelfOptionEnable, isReverse) {
          this.isSelfOptionEnable = isSelfOptionEnable;
          this.isReverse = isReverse;
          this.isActive = null;
          this.isFiltered = null;
          this.isLoading = null;
          this.pointer = null;
          this.menuHeight = null;
          this.optionHeight = 38;
          this.disabled = null;
          this.isValueValid = null;
          this.selectedOption = null;
          this.searchText = "";
          this.placeholder = I18n_1.default.text("select");
          this.filteredOptions = [];
          this.isRequired = isRequired;
          this.options = options;
          if (selected !== void 0) this.setSelected(selected); else this.verify();
          this.isSearchable = isSearchable;
          this.isStraight = !isReverse;
          _app.initComp("DROPDOWN", "{\"w\":{},\"ep\":[\"menuElement\",\"inputElement\"],\"ah\":null,\"dh\":null}", this, $vue_templ);
        }
        Dropdown.prototype.setReverse = function (isReverse) {
          this.isReverse = isReverse;
          this.isStraight = !isReverse;
        };
        Dropdown.prototype.filterOptions = function (event) {
          this.searchText = event.currentTarget.value;
          this.isFiltered = this.searchText.length > 0;
          var searchText = this.searchText.toLowerCase();
          this.filteredOptions = this.options.filter(function (o) {
            return o.text.toLowerCase().indexOf(searchText) >= 0;
          });
          this.pointer = this.filteredOptions.length > 0 ? 0 : -1;
        };
        Dropdown.prototype.focus = function () {
          this.inputElement.focus();
        };
        Dropdown.prototype.calcPositions = function () {
          this.menuHeight = this.optionHeight * (this.filteredOptions.length > Dropdown.ELEMENTS_IN_MENU ? Dropdown.ELEMENTS_IN_MENU : this.filteredOptions.length);
          if (!this.isReverse) this.isStraight = window.innerHeight >= this.inputElement.getBoundingClientRect().bottom + this.menuHeight;
        };
        Dropdown.prototype.openOptions = function () {
          if (this.isActive) return;
          this.isActive = true;
          this.isFiltered = false;
          this.searchText = this.isSelfOptionEnable && this.isSelected() ? this.selectedOption.text : "";
          this.pointer = -1;
          this.filteredOptions = this.options.slice();
          this.calcPositions();
        };
        Dropdown.prototype.onBlur = function () {
          if (this.isActive) {
            if (this.isSelfOptionEnable) {
              var text = this.searchText.trim();
              var selected = this.getSelected();
              if (selected != null && selected.value == null && selected.text == text) return this.closeOptions();
              var newOption = text.length != 0 ? new DropdownOption_1.default(null, text) : null;
              if (selected == null && newOption == null || selected != null && selected.value == null && selected.text == text) return this.closeOptions();
              this.selectOption(newOption);
              this.fireEventOnParents(Dropdown.SELECT_OPTION_EVENT, newOption);
            }
            this.closeOptions();
          }
        };
        Dropdown.prototype.closeOptions = function () {
          if (document.activeElement == this.inputElement) document.activeElement.blur();
          this.searchText = "";
          this.isFiltered = false;
          this.isActive = false;
          this.filteredOptions = [];
        };
        Dropdown.prototype.prevItem = function () {
          if (this.pointer < 0) return this.nextItem();
          if (this.pointer == 0) return;
          this.pointer -= 1;
          var prevIndexScrollTop = this.optionHeight * this.pointer;
          if (prevIndexScrollTop < this.menuElement.scrollTop) this.menuElement.scrollTop -= this.optionHeight;
        };
        Dropdown.prototype.nextItem = function () {
          if (this.pointer + 1 == this.filteredOptions.length) return;
          this.pointer += 1;
          var nextIndexScrollTop = this.optionHeight * this.pointer;
          if (nextIndexScrollTop >= this.menuElement.scrollTop + this.menuElement.clientHeight) this.menuElement.scrollTop += this.optionHeight;
        };
        Dropdown.prototype.selectCurrentItem = function (event, isSilent) {
          var option;
          if (this.pointer >= 0) {
            option = this.filteredOptions[this.pointer];
          } else if (this.isSelfOptionEnable && this.searchText.trim().length > 0) {
            option = new DropdownOption_1.default(null, this.searchText.trim());
          }
          if (option) this.selectItem(option, event, isSilent);
        };
        Dropdown.prototype.selectItem = function (option, event, isSilent) {
          if (this.selectedOption != option) {
            this.selectOption(option);
            if (!isSilent) this.fireEventOnParents(Dropdown.SELECT_OPTION_EVENT, option);
            this.searchText = "";
          }
          this.closeOptions();
        };
        Dropdown.prototype.getSelected = function () {
          return this.isSelected() ? this.selectedOption : null;
        };
        Dropdown.prototype.isOptionSelected = function (option) {
          return option.equals(this.selectedOption);
        };
        Dropdown.prototype.setSelected = function (value) {
          var options = this.options;
          var option = options.find(function (o) {
            return o.value === value;
          });
          if (option == null && value == null) this.removeSelected(); else this.selectOption(option || new FakeDropdownOption_1.default(String(value)));
        };
        Dropdown.prototype.selectOption = function (option) {
          this.selectedOption = option;
          this.verify();
        };
        Dropdown.prototype.removeSelected = function () {
          this.selectOption(null);
        };
        Dropdown.prototype.toJSON = function () {
          var selected = this.getSelected();
          return this.isSelected() ? selected.value == null ? selected.text : selected.value : null;
        };
        Dropdown.prototype.setRequired = function (isRequired) {
          if (this.isRequired !== isRequired) {
            this.isRequired = isRequired;
            this.verify();
          }
        };
        Dropdown.prototype.isValid = function () {
          return this.isValueValid;
        };
        Dropdown.prototype.verify = function () {
          return this.isValueValid = (!this.isRequired || this.isSelected()) && !this.isFakeSelected();
        };
        Dropdown.prototype.isSelected = function () {
          return this.hasAnySelected() && !this.isFakeSelected();
        };
        Dropdown.prototype.isEmpty = function () {
          return !this.isSelected();
        };
        Dropdown.prototype.hasAnySelected = function () {
          return this.selectedOption != null;
        };
        Dropdown.prototype.isFakeSelected = function () {
          return _app.instanceOf(this.selectedOption, FakeDropdownOption_1.default);
        };
        Dropdown.prototype.hasOptionValue = function (value) {
          return this.options.find(function (o) {
            return o.value == value;
          }) != null;
        };
        Dropdown.prototype.isDisabled = function () {
          return this.disabled;
        };
        Dropdown.prototype.setDisabled = function (isDisabled) {
          this.disabled = isDisabled;
        };
        Dropdown.prototype.getOptions = function () {
          return this.options;
        };
        Dropdown.prototype.refreshOptions = function (options) {
          this.options = options;
          if (this.selectedOption) this.setSelected(this.selectedOption.value);
        };
        Dropdown.prototype.addOption = function (newOption) {
          var opts = this.options.slice();
          opts.push(newOption);
          this.options = opts;
        };
        Dropdown.SELECT_OPTION_EVENT = "0";
        Dropdown.ELEMENTS_IN_MENU = 7;
        return Dropdown;
      })();
      _app.mixin(Dropdown);
      exports.default = Dropdown;
    })();
  },
  "./dropdown/DropdownOption.ts": function (module, exports, __webpack_require__) {
    function $vue_templ(){return {r:function(_$, css$){let $pr=this.p||{},$cc=this.$cc,$cs=this.$cs,_c=this._c,_q=this._q,_k=this._k,_u=this._u,_e=this._e,_l=this._l,_t=this._t.bind(this),_s=this._s,_v=this._v,_m=this._m.bind(this);with(this.m){return _c('div',{staticClass:"Dropdown__item-val",class:(withState? 'Dropdown__item-val_with-state': 'Dropdown__item-val_simple')+' '+(css$ != null? css$: ""),attrs:{"data-cn":"DropdownOption"}},[_v(_s(text))])}},s:[]}};;
    (function () {
      "use strict";
      eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n//# sourceURL=webpack:////home/bondarenko/IdeaProjects/plastique-components/dropdown/DropdownOption.ts?");
      var DropdownOption = (function () {
        function DropdownOption(value, text, withState) {
          this.value = value;
          this.text = text;
          this.withState = withState;
          _app.initComp("DROPDOWNOPTION", "{\"w\":{},\"ep\":[],\"ah\":null,\"dh\":null}", this, $vue_templ);
        }
        DropdownOption.prototype.equals = function (obj) {
          return _app.instanceOf(obj, DropdownOption) && obj.value.equals(this.value);
        };
        return DropdownOption;
      })();
      _app.mixin(DropdownOption);
      exports.default = DropdownOption;
    })();
  },
  "./dropdown/FakeDropdownOption.ts": function (module, exports, __webpack_require__) {
    "use strict";
    eval("(function (__extends) {\n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });\n  var DropdownOption_1 = __webpack_require__(\"./dropdown/DropdownOption.ts\");\n  var FakeDropdownOption = (function (_super) {\n    __extends(FakeDropdownOption, _super);\n    function FakeDropdownOption(text, withState) {\n      var _this = _super.call(this, void 0, text, withState) || this;\n      _app.initComp(\"FAKEDROPDOWNOPTION\", \"{\\\"w\\\":{},\\\"ep\\\":[],\\\"ah\\\":null,\\\"dh\\\":null}\", _this);\n      return _this;\n    }\n    FakeDropdownOption.prototype.equals = function (obj) {\n      return _app.instanceOf(obj, FakeDropdownOption) && obj.text == this.text;\n    };\n    return FakeDropdownOption;\n  })(DropdownOption_1.default);\n  exports.default = FakeDropdownOption;\n}).call(this, __webpack_require__(\"./node_modules/@plastique/core/compileUtils/extends.ts\"));\n//# sourceURL=webpack:////home/bondarenko/IdeaProjects/plastique-components/dropdown/FakeDropdownOption.ts?");
  },
  "./node_modules/@plastique/core/base/App.ts": function (module, exports, __webpack_require__) {
    "use strict";
    (function (__extends, __debugger) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var I18n_1 = __webpack_require__("./node_modules/@plastique/core/utils/I18n.ts");
      var CapturedComponent_1 = __webpack_require__("./node_modules/@plastique/core/component/CapturedComponent.ts");
      var SimpleSet_1 = __webpack_require__("./node_modules/@plastique/core/collection/set/SimpleSet.ts");
      var HashMap_1 = __webpack_require__("./node_modules/@plastique/core/collection/map/HashMap.ts");
      var SimpleMap_1 = __webpack_require__("./node_modules/@plastique/core/collection/map/SimpleMap.ts");
      var HashSet_1 = __webpack_require__("./node_modules/@plastique/core/collection/set/HashSet.ts");
      if (window["_AppLocale"]) {
        I18n_1.default.locale = _AppLocale.locale;
        I18n_1.default.keyToValue = _AppLocale.values;
      }
      var EventerImpl = (function () {
        function EventerImpl($caller) {
          this.$caller = $caller;
        }
        EventerImpl.addListener = function (eventIds, func) {
          eventIds.forEach(function (eventId) {
            if (EventerImpl.listeners[eventId] == null) EventerImpl.listeners[eventId] = [];
            EventerImpl.listeners[eventId].push(func);
          });
        };
        EventerImpl.prototype.fireEvent = function (eventName, eventObject) {
          eventName = eventName.toLowerCase();
          if (EventerImpl.listeners[eventName] == null) {
            console.log("No listeners for event: " + eventName);
            return Promise.resolve();
          }
          var caller = this.$caller ? this.$caller : this;
          var promise = Promise.resolve();
          for (var _i = 0, _a = EventerImpl.listeners[eventName]; _i < _a.length; _i++) {
            var listener = _a[_i];
            promise = (function (list) {
              return promise.then(function () {
                return Promise.all([list(eventObject, caller)]);
              });
            })(listener);
          }
          return promise;
        };
        EventerImpl.prototype.fireEventParallel = function (eventName, eventObject) {
          var _this = this;
          eventName = eventName.toLowerCase();
          if (EventerImpl.listeners[eventName] == null) {
            console.log("No listeners for event: " + eventName);
            return Promise.resolve();
          }
          return Promise.all(EventerImpl.listeners[eventName].map(function (func) {
            return func(eventObject, _this.$caller ? _this.$caller : _this);
          }));
        };
        EventerImpl.listeners = {};
        return EventerImpl;
      })();
      var ComponentImpl = (function (_super) {
        __extends(ComponentImpl, _super);
        function ComponentImpl() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        ComponentImpl.prototype.checkInit = function (checkForAttaching) {
          if (this.app$ == null) throw new Error("Component is not initialized!");
          if (checkForAttaching && this.app$.v$ == null) throw new Error("Component is not attached!");
        };
        ComponentImpl.prototype.isComponentAttached = function () {
          return this.app$ && this.app$.v$ != null;
        };
        ComponentImpl.prototype.getClosestComponent = function (types) {
          this.checkInit();
          var app$ = this.app$;
          if (app$.fp) {
            var closest = types && types.length != 0 ? app$.fp.find(function (parent) {
              return types.find(function (type) {
                return _app.instanceOf(parent, type);
              });
            }) : app$.fp[0];
            return new CapturedComponent_1.default(closest);
          } else {
            this.checkInit(true);
            return _app.getClosestComponent(app$.v$.$el.parentElement, null, types);
          }
        };
        ComponentImpl.prototype.fireEventOnParents = function (eventName, eventObject) {
          this.checkInit();
          var app$ = this.app$;
          var fakeParents;
          if (app$.fp) fakeParents = app$.fp.slice().reverse(); else this.checkInit(true);
          eventName = eventName.toLowerCase();
          var parent = fakeParents ? fakeParents.pop() : app$.v$.$parent._data;
          while (parent && parent.app$) {
            if (parent.app$.events[eventName]) return Promise.resolve(parent.app$.events[eventName][0](eventObject, this));
            parent = fakeParents ? fakeParents.pop() : parent.app$.v$.$parent._data;
          }
          return Promise.resolve();
        };
        ComponentImpl.prototype.runWithFakeParents = function (action) {
          var _this = this;
          var parents = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            parents[_i - 1] = arguments[_i];
          }
          this.app$.fp = parents;
          try {
            return Promise.resolve(action()).finally(function () {
              return _this.app$.fp = null;
            });
          } catch (e) {
            this.app$.fp = null;
            throw e;
          }
        };
        ComponentImpl.prototype.getElement = function () {
          this.checkInit(true);
          return this.app$.v$.$el;
        };
        ComponentImpl.prototype.hashCode = function () {
          this.checkInit();
          return String(this.app$.id);
        };
        ComponentImpl.prototype.whenAttached = function (callback) {
          this.checkInit();
          if (this.app$.v$ == null) {
            this.app$.ac = this.app$.ac || [];
            this.app$.ac.push(callback);
          } else {
            callback(this.app$.v$.$el);
          }
        };
        ComponentImpl.prototype.whenDetached = function (callback) {
          this.checkInit();
          if (this.app$.v$ == null) {
            this.app$.dc = this.app$.dc || [];
            this.app$.dc.push(callback);
          } else callback();
        };
        ComponentImpl.prototype.getSlots = function () {
          this.checkInit(true);
          return Object.keys(this.app$.v$.$slots);
        };
        return ComponentImpl;
      })(EventerImpl);
      var App = (function () {
        function App(element, contextPath) {
          if (typeof __debugger === "object") console.info("Plastique debugging is enabled");
          window.ObjectDefineProperty = Object.defineProperty;
          Object.defineProperty = function (a, b, c) {
            if (a._isVue) {
              if (b[0] != "$" && b[0] != "_" && b != "m") {
                if(a.$vnode && a.$vnode.componentOptions) {
                  var watch = a.$vnode.componentOptions.Ctor.options.watch || ({});
                  if (!watch[b]) return;
                }
              }
            }
            window.ObjectDefineProperty(a, b, c);
          };
          var $ = this.constructor["$"];
          contextPath = element;
          if (contextPath) {
            if (!contextPath.startsWith("/")) contextPath = "/" + contextPath;
            if (!contextPath.endsWith("/")) contextPath += "/";
          }
          App.contextPath = contextPath || "/";
          if ($) {
            var configurator = JSON.parse($);
            App.beanIdToName["0"] = "Eventer";
            var beansClasses = this.constructor["$beans"] || [];
            beansClasses.push(this);
            for (var i = 0; i < configurator.beans.length; i++) {
              var beanClassBeans = configurator.beans[i];
              var beanClass = beansClasses[i] != this ? new beansClasses[i]() : beansClasses[i];
              for (var bean in beanClassBeans) {
                var _a = bean.split(";"), beanId = _a[0], beanName = _a[1], isPrototype = _a[2];
                if (isPrototype) App.beanNameToProto[beanName] = true;
                App.beanIdToName[beanId] = beanName;
                App.beanNameToDef[beanName] = beanClass[configurator.beans[i][bean]].bind(beanClass);
              }
            }
            App.epName = configurator.name;
            App.ep = this;
          }
          _app.bean = App.getBean;
          _app.initComp = App.initComponent;
          _app.i18n = I18n_1.default.text;
          _app.listeners = App.addListeners;
          _app.routing = App.initRouting;
          _app.getClosestComponent = App.getClosestComponent;
          window["getComponentPath"] = function (elem) {
            var components = [];
            while (elem && (elem = elem.closest("[data-cn]"))) {
              components.push(elem.getAttribute("data-cn"));
              elem = elem.parentElement;
            }
            return components.join(" => ");
          };
          this.genVueMixins();
        }
        App.getClosestComponent = function (parent, topLimitElem, types) {
          if (parent) {
            var _loop_1 = function () {
              var marker;
              if (parent.hasAttribute("data-vcn")) {
                marker = parent.getAttribute("data-vcn");
                parent = parent.parentElement.closest("[data-cn]");
                if (types && types.find(function (type) {
                  return typeof type == "string" && type == marker;
                })) {
                  types = void 0;
                }
              }
              if ((marker || parent.hasAttribute("data-cn")) && parent.__vue__ != null) {
                if (types) {
                  for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
                    var type = types_1[_i];
                    if (typeof type !== "string" && _app.instanceOf(parent.__vue__._data, type)) return {
                      value: new CapturedComponent_1.default(parent.__vue__._data, marker)
                    };
                  }
                } else return {
                  value: new CapturedComponent_1.default(parent.__vue__._data, marker)
                };
              }
              parent = parent.parentElement && parent.parentElement.closest("[data-cn],[data-vcn]");
              if (parent == null || topLimitElem && !topLimitElem.contains(parent)) return "break";
            };
            while (true) {
              var state_1 = _loop_1();
              if (typeof state_1 === "object") return state_1.value;
              if (state_1 === "break") break;
            }
          }
          return new CapturedComponent_1.default();
        };
        App.getBean = function (id, componentObj) {
          if (id == -1 || id == App.epName) return App.ep;
          var beanName = typeof id == "number" ? App.beanIdToName[id] : id;
          if (beanName == "Eventer") {
            if (componentObj) return new EventerImpl(componentObj);
            throw new Error("You can get Eventer through Autowired only!");
          }
          var bean = App.beanNameToDef[beanName];
          if (bean instanceof Function) {
            bean = bean();
            if (!App.beanNameToProto[beanName]) App.beanNameToDef[beanName] = bean;
          }
          return bean;
        };
        App.prototype.getBean = function (beanName) {
          return App.getBean(beanName);
        };
        App.addListeners = function (methodNameToEventsIds, obj) {
          var _loop_2 = function (methodName) {
            var eventsIds = methodNameToEventsIds[methodName];
            var method = obj[methodName].bind(obj);
            if (obj.app$) {
              eventsIds.forEach(function (eventId) {
                var events = obj.app$.events[eventId] = obj.app$.events[eventId] || [];
                events.push(method);
              });
            }
            EventerImpl.addListener(eventsIds, method);
          };
          for (var methodName in methodNameToEventsIds) {
            _loop_2(methodName);
          }
        };
        App.initRouting = function (mappersContainers) {
          App.mappers = mappersContainers;
          mappersContainers.forEach(function (e, i, arr) {
            if (e != App.ep) arr[i] = new e();
          });
          App.route(location.pathname);
        };
        App.route = function (path) {
          if (!App.mappers) return;
          var contextPath = App.contextPath;
          if (contextPath && path.startsWith(contextPath)) path = path.substr(contextPath.length);
          for (var _i = 0, _a = App.mappers; _i < _a.length; _i++) {
            var mappersContainer = _a[_i];
            var mappers = mappersContainer.constructor["routing$"];
            var _loop_3 = function (mapper) {
              if (typeof mapper[0] === "string") {
                if (mapper[0] == path) mappersContainer[mapper[1]].call(mappersContainer);
              } else {
                var match_1 = path.match(mapper[0]);
                if (match_1 && match_1.index == 0 && match_1[0].length == path.length) {
                  var args = void 0;
                  if (mapper[2]) {
                    args = mapper[2].reduce(function (args, e, i) {
                      args[i] = match_1[e];
                      return args;
                    }, []);
                  } else args = match_1.slice(1);
                  mappersContainer[mapper[1]].apply(mappersContainer, args);
                }
              }
            };
            for (var _b = 0, mappers_1 = mappers; _b < mappers_1.length; _b++) {
              var mapper = mappers_1[_b];
              _loop_3(mapper);
            }
          }
        };
        App.initComponent = function (componentName, configuration, obj, templateGenerator, initParentTG) {
          var config = JSON.parse(configuration);
          var componentMethod = function (methodName) {
            return function () {
              return this._data.app$.clazz[methodName].apply(this._data, arguments);
            };
          };
          if (obj.app$) {
            var pc = obj.app$.pc;
            obj.app$.cn = componentName;
            Object.assign(pc.w, config.w);
            pc.ah = config.ah || pc.ah;
            pc.dh = config.dh || pc.dh;
            pc.ep = (pc.ep || []).concat(config.ep);
            if (initParentTG) obj.app$.ptg = obj.app$.tg().r;
            obj.app$.tg = templateGenerator ? templateGenerator : obj.app$.tg;
          } else {
            Object.defineProperty(obj, "app$", {
              value: {
                cn: componentName,
                id: ++App.componentId,
                clazz: obj,
                events: {},
                pc: config,
                tg: templateGenerator
              }
            });
          }
          if (obj.app$.tg == null) return;
          var configurator = obj.app$.pc;
          var memberNameToWatchMethodName = configurator.w;
          var memberNameToWatchMethod = {};
          for (var member in memberNameToWatchMethodName) {
            var methodName = memberNameToWatchMethodName[member];
            memberNameToWatchMethod[member] = componentMethod(methodName);
          }
          var render = obj.app$.tg();
          Vue.component(componentName, {
            props: ["m", "p"],
            data: (function (elementProps) {
              return function () {
                if (elementProps) {
                  var _loop_4 = function (prop) {
                    if (!((prop in this_1.m))) Object.defineProperty(this_1.m, prop, {
                      enumerable: true,
                      get: function () {
                        return this.app$.v$ ? this.app$.v$.$refs[prop] : null;
                      }
                    });
                  };
                  var this_1 = this;
                  for (var _i = 0, elementProps_1 = elementProps; _i < elementProps_1.length; _i++) {
                    var prop = elementProps_1[_i];
                    _loop_4(prop);
                  }
                }
                return this.m;
              };
            })(configurator.ep),
            watch: memberNameToWatchMethod,
            render: render.r,
            staticRenderFns: render.s,
            mounted: configurator.ah ? componentMethod(configurator.ah) : null,
            beforeDestroy: configurator.dh ? componentMethod(configurator.dh) : null
          });
        };
        App.initFragments = function (fragmentNameToRenderTemplate) {
          for (var fragmentName in fragmentNameToRenderTemplate) {
            var renderTemplate = fragmentNameToRenderTemplate[fragmentName]();
            Vue.component(fragmentName, {
              props: ["p"],
              render: renderTemplate.r,
              staticRenderFns: renderTemplate.s
            });
          }
        };
        App.prototype.genVueMixins = function () {
          Vue.mixin({
            mounted: function () {
              var _this = this;
              if (this._data.app$) this._data.app$.v$ = this;
              var callbacks = this._data.app$ ? this._data.app$.ac : null;
              if (callbacks) {
                this.$nextTick(function () {
                  callbacks.forEach(function (f) {
                    return f();
                  });
                  _this._data.app$.ac = null;
                });
              }
            },
            beforeDestroy: function () {
              var _this = this;
              var callbacks = this._data.app$ ? this._data.app$.dc : null;
              if (callbacks) {
                this.$nextTick(function () {
                  callbacks.forEach(function (f) {
                    return f();
                  });
                  _this._data.app$.dc = null;
                });
              }
            },
            methods: {
              $cs: function (isWithState, iterable) {
                var arr = [], size, values;
                if (iterable instanceof SimpleMap_1.default || iterable instanceof HashMap_1.default) {
                  size = iterable.size();
                  values = iterable.entries();
                } else if (iterable instanceof SimpleSet_1.default || iterable instanceof HashSet_1.default) {
                  size = iterable.size();
                  values = iterable.values();
                } else if (iterable instanceof Array) {
                  size = iterable.length;
                  values = iterable;
                } else throw new Error("You cant iterate simple object!");
                for (var i = 0; i < size; i++) {
                  var value = values[i];
                  if (isWithState) value = {
                    v: value,
                    s: {
                      index: i,
                      size: size,
                      last: i == size - 1,
                      first: i == 0
                    }
                  };
                  arr.push(value);
                }
                return arr;
              },
              $cc: function (component) {
                if (component.app$.pc) delete component.app$.pc;
                return component;
              }
            }
          });
        };
        App.attachComponent = function (element, component) {
          new Vue({
            el: element,
            data: {
              m: component
            },
            template: "<component :is=\"m.app$.cn\" :key=\"m.app$.id\" v-bind:m=\"m\"></component>"
          });
        };
        App.triggerDomReflow = function () {
          void window.innerHeight;
        };
        App.nextTick = function (action) {
          Vue.nextTick(action);
        };
        App.beanNameToDef = {};
        App.beanNameToProto = {};
        App.beanIdToName = {};
        App.componentId = 0;
        return App;
      })();
      if (!Object.values) {
        Object.values = function (obj) {
          return Object.keys(obj).map(function (e) {
            return obj[e];
          });
        };
      }
      Object.defineProperty(Object.prototype, "equals", {
        value: function (obj) {
          return this === obj;
        },
        writable: true,
        configurable: true
      });
      Array.prototype.remove = function (index) {
        if (("__ob__" in this)) Vue.delete(this, index); else this.splice(index, 1);
        return this;
      };
      Array.prototype.removeValue = function (value) {
        for (var i = 0; i < this.length; i++) {
          var elem = this[i];
          if (elem == null && value == null || elem != null && elem.equals(value)) {
            this.remove(i);
            return true;
          }
        }
      };
      Array.prototype.removeValues = function (values) {
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
          var val = values_1[_i];
          this.removeValue(val);
        }
      };
      Array.prototype.clear = function () {
        if (arguments.length > 0) {
          var args = [0, this.length];
          args.push.apply(args, arguments);
          this.splice.apply(this, args);
        } else this.splice(0, this.length);
      };
      Array.prototype.set = function (index, value) {
        if (("__ob__" in this)) Vue.set(this, index, value); else this[index] = value;
        return this;
      };
      Array.prototype.toMap = function (keyGenerator, valueGenerator) {
        return this.reduce(function (map, val) {
          map.set(keyGenerator(val), valueGenerator ? valueGenerator(val) : val);
          return map;
        }, new SimpleMap_1.default());
      };
      if (!Array.prototype.flat) Array.prototype.flat = function () {
        return this.concat.apply([], this);
      };
      Array.prototype.move = function (elementOnIndex, toIndex) {
        this.splice(toIndex, 0, this.splice(elementOnIndex, 1)[0]);
      };
      Array.prototype.has = function (searchElement) {
        for (var _i = 0, _a = this; _i < _a.length; _i++) {
          var elem = _a[_i];
          if (searchElement == null ? elem == null : searchElement.equals(elem)) return true;
        }
        return false;
      };
      Array.prototype.replace = function (from, to) {
        var index = this.indexOf(from);
        if (index >= 0) this.splice(index, 1, to);
      };
      Array.prototype.removeBy = function (action) {
        var _this = this;
        this.slice().forEach(function (v, i) {
          if (action(v, i)) _this.removeValue(v);
        });
      };
      Array.prototype.groupBy = function (keyGenerator) {
        return this.reduce(function (map, val) {
          var key = keyGenerator(val);
          var elements = map.get(key);
          if (elements == null) map.set(key, elements = []);
          elements.push(val);
          return map;
        }, new SimpleMap_1.default());
      };
      Element.prototype.getClosestComponent = function (types) {
        return _app.getClosestComponent(this, null, types);
      };
      Event.prototype.getClosestComponent = function (types) {
        function getElem(elem) {
          return elem == window || elem == document ? null : elem;
        }
        return _app.getClosestComponent(getElem(this.target), getElem(this.currentTarget), types);
      };
      window["_app"] = {
        instanceOf: function (obj, type) {
          if (obj == null) return false;
          if (typeof type == "number") {
            var proto = Object.getPrototypeOf(obj);
            while (proto != null) {
              var isImplements = (proto.constructor["$intf"] || []).indexOf(type) >= 0;
              if (isImplements) return true;
              proto = Object.getPrototypeOf(proto);
            }
            return false;
          }
          var typeOfType = typeof obj;
          if (typeOfType === "string") obj = String; else if (typeOfType === "number") obj = Number; else if (typeOfType === "boolean") obj = Boolean;
          return obj instanceof type;
        },
        mixin: function (clazz) {
          Object.getOwnPropertyNames(ComponentImpl.prototype).forEach(function (name) {
            if (name != "constructor" && !clazz.prototype[name]) Object.defineProperty(clazz.prototype, name, Object.getOwnPropertyDescriptor(ComponentImpl.prototype, name));
          });
          Object.defineProperty(clazz.prototype, "fireEvent", Object.getOwnPropertyDescriptor(EventerImpl.prototype, "fireEvent"));
          Object.defineProperty(clazz.prototype, "fireEventParallel", Object.getOwnPropertyDescriptor(EventerImpl.prototype, "fireEventParallel"));
        }
      };
      global['_app'] = window['_app'];
      exports.default = App;
    }).call(this, __webpack_require__("./node_modules/@plastique/core/compileUtils/extends.ts"), __webpack_require__("./node_modules/@plastique/core/compileUtils/debugger.ts"));
  },
  "./node_modules/@plastique/core/collection/map/HashMap.ts": function (module, exports, __webpack_require__) {
    "use strict";
    (function (__extends) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var SimpleMap_1 = __webpack_require__("./node_modules/@plastique/core/collection/map/SimpleMap.ts");
      var HashMap = (function (_super) {
        __extends(HashMap, _super);
        function HashMap(arg) {
          var _this = _super.call(this, arg) || this;
          _this.hashCodes = [];
          return _this;
        }
        HashMap.prototype.clear = function () {
          _super.prototype.clear.call(this);
          this.hashCodes.clear();
        };
        HashMap.prototype.deleteIndex = function (index) {
          if (_super.prototype.deleteIndex.call(this, index)) {
            this.hashCodes.remove(index);
            return true;
          }
        };
        HashMap.prototype.getKeyIndex = function (key, hashCode) {
          var hash = hashCode === void 0 ? key.hashCode() : hashCode;
          return this.hashCodes.indexOf(hash);
        };
        HashMap.prototype.set = function (key, value) {
          var hashCode = key.hashCode();
          var index = this.getKeyIndex(key, hashCode);
          if (index < 0) {
            this.k.push(key);
            this.v.push(value);
            this.hashCodes.push(hashCode);
          } else {
            this.v.set(index, value);
          }
          return this;
        };
        HashMap.of = function (k1, v1, k2, v2, k3, v3, k4, v4, k5, v5, k6, v6, k7, v7, k8, v8) {
          var map = new HashMap();
          for (var i = 0; i < arguments.length; i += 2) {
            map.set(arguments[i], arguments[i + 1]);
          }
          return map;
        };
        return HashMap;
      })(SimpleMap_1.default);
      exports.default = HashMap;
    }).call(this, __webpack_require__("./node_modules/@plastique/core/compileUtils/extends.ts"));
  },
  "./node_modules/@plastique/core/collection/map/SimpleMap.ts": function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SimpleMap = (function () {
      function SimpleMap(arg) {
        this.k = [];
        this.v = [];
        if (arg) this.merge(arg);
      }
      SimpleMap.prototype.size = function () {
        return this.k.length;
      };
      SimpleMap.prototype.clear = function () {
        this.v.clear();
        this.k.clear();
      };
      SimpleMap.prototype.delete = function (key) {
        return this.deleteIndex(this.getKeyIndex(key));
      };
      SimpleMap.prototype.deleteIndex = function (index) {
        if (index >= 0) {
          this.k.remove(index);
          this.v.remove(index);
          return true;
        }
      };
      SimpleMap.prototype.forEach = function (callback, thisArg) {
        var _this = this;
        var vals = this.v;
        return this.k.forEach(function (key, i) {
          return callback.call(thisArg, vals[i], key, _this);
        });
      };
      SimpleMap.prototype.get = function (key) {
        var keyIndex = this.getKeyIndex(key);
        return this.v[keyIndex];
      };
      SimpleMap.prototype.getOrDefault = function (key, defaultValue) {
        var val = this.get(key);
        return val === void 0 ? defaultValue : val;
      };
      SimpleMap.prototype.has = function (key) {
        return this.getKeyIndex(key) >= 0;
      };
      SimpleMap.prototype.getKeyIndex = function (key) {
        return this.k.findIndex(function (k) {
          return k.equals(key);
        });
      };
      SimpleMap.prototype.set = function (key, value) {
        var index = this.getKeyIndex(key);
        if (index < 0) {
          this.k.push(key);
          this.v.push(value);
        } else {
          this.v.set(index, value);
        }
        return this;
      };
      SimpleMap.prototype.addKey = function (key) {
        var index = this.getKeyIndex(key);
        if (index < 0) this.k.push(key);
      };
      SimpleMap.prototype.entries = function () {
        var vals = this.v;
        return this.k.map(function (key, i) {
          return {
            key: key,
            value: vals[i]
          };
        });
      };
      SimpleMap.prototype.keys = function () {
        return this.k.slice();
      };
      SimpleMap.prototype.values = function () {
        return this.v.slice();
      };
      SimpleMap.prototype.toJSON = function () {
        var obj = {};
        this.forEach(function (v, k) {
          return obj[k.toString()] = v;
        });
        return obj;
      };
      SimpleMap.prototype.mapValues = function (action) {
        var newMap = new SimpleMap();
        this.forEach(function (v, k) {
          return newMap.set(k, action(v));
        });
        return newMap;
      };
      SimpleMap.prototype.map = function (action) {
        var result = [];
        this.forEach(function (v, k) {
          return result.push(action(k, v));
        });
        return result;
      };
      SimpleMap.prototype.merge = function (arg) {
        var _this = this;
        if (Array.isArray(arg)) arg.forEach(function (e) {
          return _this.set(e.key, e.value);
        }); else arg.forEach(function (v, k) {
          return _this.set(k, v);
        });
      };
      SimpleMap.of = function (k1, v1, k2, v2, k3, v3, k4, v4, k5, v5, k6, v6, k7, v7, k8, v8) {
        var map = new SimpleMap();
        for (var i = 0; i < arguments.length; i += 2) {
          map.set(arguments[i], arguments[i + 1]);
        }
        return map;
      };
      return SimpleMap;
    })();
    exports.default = SimpleMap;
  },
  "./node_modules/@plastique/core/collection/set/HashSet.ts": function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var HashSet = (function () {
      function HashSet(set) {
        this.hashToVal = {};
        if (set) this.merge(set);
      }
      HashSet.prototype.size = function () {
        return this.s;
      };
      HashSet.prototype.clear = function () {
        this.hashToVal = {};
        this.s = 0;
      };
      HashSet.prototype.delete = function (value) {
        var hashCode = value.hashCode();
        if ((hashCode in this.hashToVal)) {
          Vue.delete(this.hashToVal, hashCode);
          this.s--;
          return true;
        }
      };
      HashSet.prototype.forEach = function (callback, thisArg) {
        var _this = this;
        return this.values().forEach(function (val) {
          return callback.call(thisArg, val, _this);
        });
      };
      HashSet.prototype.has = function (value) {
        return (value.hashCode() in this.hashToVal);
      };
      HashSet.prototype.add = function (value) {
        var hashCode = value.hashCode();
        if (!((hashCode in this.hashToVal))) {
          Vue.set(this.hashToVal, hashCode, value);
          this.s++;
        }
        return this;
      };
      HashSet.prototype.values = function () {
        var hashToVal = this.hashToVal;
        return Object.keys(hashToVal).map(function (hash) {
          return hashToVal[hash];
        });
      };
      HashSet.prototype.map = function (action) {
        return HashSet.of.apply(HashSet, this.values().map(action));
      };
      HashSet.prototype.toJSON = function () {
        return this.values();
      };
      HashSet.prototype.merge = function (set) {
        var _this = this;
        set.forEach(function (v) {
          return _this.add(v);
        });
      };
      HashSet.of = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          values[_i] = arguments[_i];
        }
        var set = new HashSet();
        values.forEach(function (v) {
          return set.add(v);
        });
        return set;
      };
      return HashSet;
    })();
    exports.default = HashSet;
  },
  "./node_modules/@plastique/core/collection/set/SimpleSet.ts": function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SimpleMap_1 = __webpack_require__("./node_modules/@plastique/core/collection/map/SimpleMap.ts");
    var SimpleSet = (function () {
      function SimpleSet(set) {
        this.m = new SimpleMap_1.default();
        if (set) this.merge(set);
      }
      SimpleSet.prototype.size = function () {
        return this.m.size();
      };
      SimpleSet.prototype.clear = function () {
        this.m.clear();
      };
      SimpleSet.prototype.delete = function (value) {
        return this.m.delete(value);
      };
      SimpleSet.prototype.forEach = function (callback, thisArg) {
        var _this = this;
        return this.m.keys().forEach(function (value) {
          return callback.call(thisArg, value, _this);
        });
      };
      SimpleSet.prototype.has = function (value) {
        return this.m.has(value);
      };
      SimpleSet.prototype.add = function (value) {
        this.m.addKey(value);
        return this;
      };
      SimpleSet.prototype.values = function () {
        return this.m.keys();
      };
      SimpleSet.prototype.map = function (action) {
        return SimpleSet.of.apply(SimpleSet, this.values().map(action));
      };
      SimpleSet.prototype.toJSON = function () {
        return this.m.keys();
      };
      SimpleSet.prototype.merge = function (set) {
        var _this = this;
        set.forEach(function (v) {
          return _this.add(v);
        });
      };
      SimpleSet.of = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          values[_i] = arguments[_i];
        }
        var set = new SimpleSet();
        for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
          var val = values_1[_a];
          set.m.addKey(val);
        }
        return set;
      };
      return SimpleSet;
    })();
    exports.default = SimpleSet;
  },
  "./node_modules/@plastique/core/compileUtils/debugger.ts": function (module, exports) {
    var BemInspector = (function () {
      function BemInspector() {}
      BemInspector.prototype.trace = function (elem, parentBlockClasses) {
        if (parentBlockClasses === void 0) {
          parentBlockClasses = [];
        }
        var allAppClasses = Array.prototype.slice.call(elem.classList).filter(function (c) {
          return BemInspector.APP_CLASS_PATTERN.test(c);
        });
        var blocksClasses = allAppClasses.filter(function (c) {
          return BemInspector.BLOCK_CLASS_PATTERN.test(c);
        });
        var blocksModifierClasses = allAppClasses.filter(function (c) {
          return BemInspector.BLOCK_MODIFIER_CLASS_PATTERN.test(c);
        });
        var elementClasses = allAppClasses.filter(function (c) {
          return BemInspector.ELEMENT_CLASS_PATTERN.test(c);
        });
        var elementModifierClasses = allAppClasses.filter(function (c) {
          return BemInspector.ELEMENT_MODIFIER_CLASS_PATTERN.test(c);
        });
        var invalidBlockModifier = this.findInvalidModifier(blocksClasses, blocksModifierClasses);
        if (invalidBlockModifier) {
          console.error(elem);
          throw new Error("Element with block modifier " + invalidBlockModifier + " has no corresponding block!");
        }
        var invalidElementModifier = this.findInvalidModifier(elementClasses, elementModifierClasses);
        if (invalidElementModifier) {
          console.error(elem);
          throw new Error("Element with element modifier " + invalidElementModifier + " has no corresponding element!");
        }
        var invalidElement = this.findInvalidElement(parentBlockClasses, elementClasses);
        if (invalidElement) {
          console.error(elem);
          throw new Error("Element with element " + invalidElement + " has no corresponding block!");
        }
        var children = Array.prototype.slice.call(elem.children);
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
          var child = children_1[_i];
          this.trace(child, blocksClasses.length == 0 ? parentBlockClasses : blocksClasses);
        }
      };
      BemInspector.prototype.findInvalidModifier = function (typeClasses, typeModifierClasses) {
        for (var _i = 0, typeModifierClasses_1 = typeModifierClasses; _i < typeModifierClasses_1.length; _i++) {
          var c = typeModifierClasses_1[_i];
          var blockClass = c.substring(0, c.lastIndexOf("_"));
          if (!typeClasses.includes(blockClass)) return c;
        }
      };
      BemInspector.prototype.findInvalidElement = function (blockClasses, elementClasses) {
        for (var _i = 0, elementClasses_1 = elementClasses; _i < elementClasses_1.length; _i++) {
          var c = elementClasses_1[_i];
          var blockClassOfElement = c.substring(0, c.lastIndexOf("__"));
          if (!blockClasses.includes(blockClassOfElement)) return c;
        }
      };
      BemInspector.APP_CLASS_PATTERN = /^[A-Z][a-z0-9-]*/;
      BemInspector.BLOCK_CLASS_PATTERN = /^[A-Z][a-z0-9-]*$/;
      BemInspector.BLOCK_MODIFIER_CLASS_PATTERN = /^[A-Z][a-z0-9-]*_[a-z0-9]+$/;
      BemInspector.ELEMENT_CLASS_PATTERN = /^[A-Z][a-z0-9-]*__[a-z0-9-]+$/;
      BemInspector.ELEMENT_MODIFIER_CLASS_PATTERN = /^[A-Z][a-z0-9-]*__[a-z0-9-]+_[a-z0-9-]+$/;
      return BemInspector;
    })();
    var inspector = new BemInspector();
    window["bem_trace"] = function (elem) {
      inspector.trace(elem || document.body);
    };
  },
  "./node_modules/@plastique/core/compileUtils/decorate.ts": function (module, exports, __webpack_require__) {
    "use strict";
    var __decorate = this && this.__decorate || (function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return (c > 3 && r && Object.defineProperty(target, key, r), r);
    });
    module.exports = __decorate;
  },
  "./node_modules/@plastique/core/compileUtils/empty.ts": function (module, exports) {},
  "./node_modules/@plastique/core/compileUtils/extends.ts": function (module, exports, __webpack_require__) {
    "use strict";
    var __extends = this && this.__extends || (function () {
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || ({
          __proto__: []
        }) instanceof Array && (function (d, b) {
          d.__proto__ = b;
        }) || (function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        });
        return extendStatics(d, b);
      };
      return function (d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    })();
    module.exports = __extends;
  },
  "./node_modules/@plastique/core/component/CapturedComponent.ts": function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CapturedComponent = (function () {
      function CapturedComponent(component, marker) {
        this.component = component;
        this.marker = marker;
      }
      CapturedComponent.prototype.is = function (type) {
        if (type == null) return this.component == null;
        if (this.component) {
          if (typeof type == "string" && type.startsWith("vc")) return type == this.marker;
          return _app.instanceOf(this.component, type);
        }
      };
      CapturedComponent.prototype.get = function () {
        return this.component;
      };
      CapturedComponent.prototype.getClosestComponent = function (types) {
        if (this.component == null) return this;
        return _app.getClosestComponent(this.component.app$.v$.$el.parentElement, null, types);
      };
      return CapturedComponent;
    })();
    exports.default = CapturedComponent;
  },
  "./node_modules/@plastique/core/utils/I18n.ts": function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var I18n = (function () {
      function I18n() {}
      I18n.text = function (key) {

        return 'TEST';
      };
      return I18n;
    })();
    exports.default = I18n;
  },
  "./node_modules/@vue/test-utils/dist/vue-test-utils.js": function (module, exports, __webpack_require__) {
    "use strict";
    (function (global, process) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var Vue = __webpack_require__("../../node_modules/vue/dist/vue.runtime.esm.js");
      var vueTemplateCompiler = __webpack_require__("./node_modules/vue-template-compiler/browser.js");
      function _interopDefaultLegacy(e) {
        return e && typeof e === "object" && ("default" in e) ? e : {
          "default": e
        };
      }
      var Vue__default = _interopDefaultLegacy(Vue);
      function createVNodes(vm, slotValue, name) {
        var el = vueTemplateCompiler.compileToFunctions("<div><template slot=" + name + ">" + slotValue + "</template></div>");
        var _staticRenderFns = vm._renderProxy.$options.staticRenderFns;
        var _staticTrees = vm._renderProxy._staticTrees;
        vm._renderProxy._staticTrees = [];
        vm._renderProxy.$options.staticRenderFns = el.staticRenderFns;
        var vnode = el.render.call(vm._renderProxy, vm.$createElement);
        vm._renderProxy.$options.staticRenderFns = _staticRenderFns;
        vm._renderProxy._staticTrees = _staticTrees;
        return vnode.children[0];
      }
      function createVNodesForSlot(vm, slotValue, name) {
        if (typeof slotValue === "string") {
          return createVNodes(vm, slotValue, name);
        }
        var vnode = vm.$createElement(slotValue);
        (vnode.data || (vnode.data = {})).slot = name;
        return vnode;
      }
      function createSlotVNodes(vm, slots) {
        return Object.keys(slots).reduce(function (acc, key) {
          var content = slots[key];
          if (Array.isArray(content)) {
            var nodes = content.map(function (slotDef) {
              return createVNodesForSlot(vm, slotDef, key);
            });
            return acc.concat(nodes);
          }
          return acc.concat(createVNodesForSlot(vm, content, key));
        }, []);
      }
      var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
      function createCommonjsModule(fn, basedir, module) {
        return (module = {
          path: basedir,
          exports: {},
          require: function (path, base) {
            return commonjsRequire(path, base === undefined || base === null ? module.path : base);
          }
        }, fn(module, module.exports), module.exports);
      }
      function getCjsExportFromNamespace(n) {
        return n && n["default"] || n;
      }
      function commonjsRequire() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }
      var semver = createCommonjsModule(function (module, exports) {
        exports = module.exports = SemVer;
        var debug;
        if (typeof process === "object" && process.env && process.env.NODE_DEBUG && (/\bsemver\b/i).test(process.env.NODE_DEBUG)) {
          debug = function () {
            var args = Array.prototype.slice.call(arguments, 0);
            args.unshift("SEMVER");
            console.log.apply(console, args);
          };
        } else {
          debug = function () {};
        }
        exports.SEMVER_SPEC_VERSION = "2.0.0";
        var MAX_LENGTH = 256;
        var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
        var MAX_SAFE_COMPONENT_LENGTH = 16;
        var re = exports.re = [];
        var src = exports.src = [];
        var t = exports.tokens = {};
        var R = 0;
        function tok(n) {
          t[n] = R++;
        }
        tok("NUMERICIDENTIFIER");
        src[t.NUMERICIDENTIFIER] = "0|[1-9]\\d*";
        tok("NUMERICIDENTIFIERLOOSE");
        src[t.NUMERICIDENTIFIERLOOSE] = "[0-9]+";
        tok("NONNUMERICIDENTIFIER");
        src[t.NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
        tok("MAINVERSION");
        src[t.MAINVERSION] = "(" + src[t.NUMERICIDENTIFIER] + ")\\." + "(" + src[t.NUMERICIDENTIFIER] + ")\\." + "(" + src[t.NUMERICIDENTIFIER] + ")";
        tok("MAINVERSIONLOOSE");
        src[t.MAINVERSIONLOOSE] = "(" + src[t.NUMERICIDENTIFIERLOOSE] + ")\\." + "(" + src[t.NUMERICIDENTIFIERLOOSE] + ")\\." + "(" + src[t.NUMERICIDENTIFIERLOOSE] + ")";
        tok("PRERELEASEIDENTIFIER");
        src[t.PRERELEASEIDENTIFIER] = "(?:" + src[t.NUMERICIDENTIFIER] + "|" + src[t.NONNUMERICIDENTIFIER] + ")";
        tok("PRERELEASEIDENTIFIERLOOSE");
        src[t.PRERELEASEIDENTIFIERLOOSE] = "(?:" + src[t.NUMERICIDENTIFIERLOOSE] + "|" + src[t.NONNUMERICIDENTIFIER] + ")";
        tok("PRERELEASE");
        src[t.PRERELEASE] = "(?:-(" + src[t.PRERELEASEIDENTIFIER] + "(?:\\." + src[t.PRERELEASEIDENTIFIER] + ")*))";
        tok("PRERELEASELOOSE");
        src[t.PRERELEASELOOSE] = "(?:-?(" + src[t.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + src[t.PRERELEASEIDENTIFIERLOOSE] + ")*))";
        tok("BUILDIDENTIFIER");
        src[t.BUILDIDENTIFIER] = "[0-9A-Za-z-]+";
        tok("BUILD");
        src[t.BUILD] = "(?:\\+(" + src[t.BUILDIDENTIFIER] + "(?:\\." + src[t.BUILDIDENTIFIER] + ")*))";
        tok("FULL");
        tok("FULLPLAIN");
        src[t.FULLPLAIN] = "v?" + src[t.MAINVERSION] + src[t.PRERELEASE] + "?" + src[t.BUILD] + "?";
        src[t.FULL] = "^" + src[t.FULLPLAIN] + "$";
        tok("LOOSEPLAIN");
        src[t.LOOSEPLAIN] = "[v=\\s]*" + src[t.MAINVERSIONLOOSE] + src[t.PRERELEASELOOSE] + "?" + src[t.BUILD] + "?";
        tok("LOOSE");
        src[t.LOOSE] = "^" + src[t.LOOSEPLAIN] + "$";
        tok("GTLT");
        src[t.GTLT] = "((?:<|>)?=?)";
        tok("XRANGEIDENTIFIERLOOSE");
        src[t.XRANGEIDENTIFIERLOOSE] = src[t.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*";
        tok("XRANGEIDENTIFIER");
        src[t.XRANGEIDENTIFIER] = src[t.NUMERICIDENTIFIER] + "|x|X|\\*";
        tok("XRANGEPLAIN");
        src[t.XRANGEPLAIN] = "[v=\\s]*(" + src[t.XRANGEIDENTIFIER] + ")" + "(?:\\.(" + src[t.XRANGEIDENTIFIER] + ")" + "(?:\\.(" + src[t.XRANGEIDENTIFIER] + ")" + "(?:" + src[t.PRERELEASE] + ")?" + src[t.BUILD] + "?" + ")?)?";
        tok("XRANGEPLAINLOOSE");
        src[t.XRANGEPLAINLOOSE] = "[v=\\s]*(" + src[t.XRANGEIDENTIFIERLOOSE] + ")" + "(?:\\.(" + src[t.XRANGEIDENTIFIERLOOSE] + ")" + "(?:\\.(" + src[t.XRANGEIDENTIFIERLOOSE] + ")" + "(?:" + src[t.PRERELEASELOOSE] + ")?" + src[t.BUILD] + "?" + ")?)?";
        tok("XRANGE");
        src[t.XRANGE] = "^" + src[t.GTLT] + "\\s*" + src[t.XRANGEPLAIN] + "$";
        tok("XRANGELOOSE");
        src[t.XRANGELOOSE] = "^" + src[t.GTLT] + "\\s*" + src[t.XRANGEPLAINLOOSE] + "$";
        tok("COERCE");
        src[t.COERCE] = "(^|[^\\d])" + "(\\d{1," + MAX_SAFE_COMPONENT_LENGTH + "})" + "(?:\\.(\\d{1," + MAX_SAFE_COMPONENT_LENGTH + "}))?" + "(?:\\.(\\d{1," + MAX_SAFE_COMPONENT_LENGTH + "}))?" + "(?:$|[^\\d])";
        tok("COERCERTL");
        re[t.COERCERTL] = new RegExp(src[t.COERCE], "g");
        tok("LONETILDE");
        src[t.LONETILDE] = "(?:~>?)";
        tok("TILDETRIM");
        src[t.TILDETRIM] = "(\\s*)" + src[t.LONETILDE] + "\\s+";
        re[t.TILDETRIM] = new RegExp(src[t.TILDETRIM], "g");
        var tildeTrimReplace = "$1~";
        tok("TILDE");
        src[t.TILDE] = "^" + src[t.LONETILDE] + src[t.XRANGEPLAIN] + "$";
        tok("TILDELOOSE");
        src[t.TILDELOOSE] = "^" + src[t.LONETILDE] + src[t.XRANGEPLAINLOOSE] + "$";
        tok("LONECARET");
        src[t.LONECARET] = "(?:\\^)";
        tok("CARETTRIM");
        src[t.CARETTRIM] = "(\\s*)" + src[t.LONECARET] + "\\s+";
        re[t.CARETTRIM] = new RegExp(src[t.CARETTRIM], "g");
        var caretTrimReplace = "$1^";
        tok("CARET");
        src[t.CARET] = "^" + src[t.LONECARET] + src[t.XRANGEPLAIN] + "$";
        tok("CARETLOOSE");
        src[t.CARETLOOSE] = "^" + src[t.LONECARET] + src[t.XRANGEPLAINLOOSE] + "$";
        tok("COMPARATORLOOSE");
        src[t.COMPARATORLOOSE] = "^" + src[t.GTLT] + "\\s*(" + src[t.LOOSEPLAIN] + ")$|^$";
        tok("COMPARATOR");
        src[t.COMPARATOR] = "^" + src[t.GTLT] + "\\s*(" + src[t.FULLPLAIN] + ")$|^$";
        tok("COMPARATORTRIM");
        src[t.COMPARATORTRIM] = "(\\s*)" + src[t.GTLT] + "\\s*(" + src[t.LOOSEPLAIN] + "|" + src[t.XRANGEPLAIN] + ")";
        re[t.COMPARATORTRIM] = new RegExp(src[t.COMPARATORTRIM], "g");
        var comparatorTrimReplace = "$1$2$3";
        tok("HYPHENRANGE");
        src[t.HYPHENRANGE] = "^\\s*(" + src[t.XRANGEPLAIN] + ")" + "\\s+-\\s+" + "(" + src[t.XRANGEPLAIN] + ")" + "\\s*$";
        tok("HYPHENRANGELOOSE");
        src[t.HYPHENRANGELOOSE] = "^\\s*(" + src[t.XRANGEPLAINLOOSE] + ")" + "\\s+-\\s+" + "(" + src[t.XRANGEPLAINLOOSE] + ")" + "\\s*$";
        tok("STAR");
        src[t.STAR] = "(<|>)?=?\\s*\\*";
        for (var i = 0; i < R; i++) {
          debug(i, src[i]);
          if (!re[i]) {
            re[i] = new RegExp(src[i]);
          }
        }
        exports.parse = parse;
        function parse(version, options) {
          if (!options || typeof options !== "object") {
            options = {
              loose: !!options,
              includePrerelease: false
            };
          }
          if (version instanceof SemVer) {
            return version;
          }
          if (typeof version !== "string") {
            return null;
          }
          if (version.length > MAX_LENGTH) {
            return null;
          }
          var r = options.loose ? re[t.LOOSE] : re[t.FULL];
          if (!r.test(version)) {
            return null;
          }
          try {
            return new SemVer(version, options);
          } catch (er) {
            return null;
          }
        }
        exports.valid = valid;
        function valid(version, options) {
          var v = parse(version, options);
          return v ? v.version : null;
        }
        exports.clean = clean;
        function clean(version, options) {
          var s = parse(version.trim().replace(/^[=v]+/, ""), options);
          return s ? s.version : null;
        }
        exports.SemVer = SemVer;
        function SemVer(version, options) {
          if (!options || typeof options !== "object") {
            options = {
              loose: !!options,
              includePrerelease: false
            };
          }
          if (version instanceof SemVer) {
            if (version.loose === options.loose) {
              return version;
            } else {
              version = version.version;
            }
          } else if (typeof version !== "string") {
            throw new TypeError("Invalid Version: " + version);
          }
          if (version.length > MAX_LENGTH) {
            throw new TypeError("version is longer than " + MAX_LENGTH + " characters");
          }
          if (!(this instanceof SemVer)) {
            return new SemVer(version, options);
          }
          debug("SemVer", version, options);
          this.options = options;
          this.loose = !!options.loose;
          var m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
          if (!m) {
            throw new TypeError("Invalid Version: " + version);
          }
          this.raw = version;
          this.major = +m[1];
          this.minor = +m[2];
          this.patch = +m[3];
          if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
            throw new TypeError("Invalid major version");
          }
          if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
            throw new TypeError("Invalid minor version");
          }
          if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
            throw new TypeError("Invalid patch version");
          }
          if (!m[4]) {
            this.prerelease = [];
          } else {
            this.prerelease = m[4].split(".").map(function (id) {
              if ((/^[0-9]+$/).test(id)) {
                var num = +id;
                if (num >= 0 && num < MAX_SAFE_INTEGER) {
                  return num;
                }
              }
              return id;
            });
          }
          this.build = m[5] ? m[5].split(".") : [];
          this.format();
        }
        SemVer.prototype.format = function () {
          this.version = this.major + "." + this.minor + "." + this.patch;
          if (this.prerelease.length) {
            this.version += "-" + this.prerelease.join(".");
          }
          return this.version;
        };
        SemVer.prototype.toString = function () {
          return this.version;
        };
        SemVer.prototype.compare = function (other) {
          debug("SemVer.compare", this.version, this.options, other);
          if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
          }
          return this.compareMain(other) || this.comparePre(other);
        };
        SemVer.prototype.compareMain = function (other) {
          if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
          }
          return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
        };
        SemVer.prototype.comparePre = function (other) {
          if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
          }
          if (this.prerelease.length && !other.prerelease.length) {
            return -1;
          } else if (!this.prerelease.length && other.prerelease.length) {
            return 1;
          } else if (!this.prerelease.length && !other.prerelease.length) {
            return 0;
          }
          var i = 0;
          do {
            var a = this.prerelease[i];
            var b = other.prerelease[i];
            debug("prerelease compare", i, a, b);
            if (a === undefined && b === undefined) {
              return 0;
            } else if (b === undefined) {
              return 1;
            } else if (a === undefined) {
              return -1;
            } else if (a === b) {
              continue;
            } else {
              return compareIdentifiers(a, b);
            }
          } while (++i);
        };
        SemVer.prototype.compareBuild = function (other) {
          if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
          }
          var i = 0;
          do {
            var a = this.build[i];
            var b = other.build[i];
            debug("prerelease compare", i, a, b);
            if (a === undefined && b === undefined) {
              return 0;
            } else if (b === undefined) {
              return 1;
            } else if (a === undefined) {
              return -1;
            } else if (a === b) {
              continue;
            } else {
              return compareIdentifiers(a, b);
            }
          } while (++i);
        };
        SemVer.prototype.inc = function (release, identifier) {
          switch (release) {
            case "premajor":
              this.prerelease.length = 0;
              this.patch = 0;
              this.minor = 0;
              this.major++;
              this.inc("pre", identifier);
              break;
            case "preminor":
              this.prerelease.length = 0;
              this.patch = 0;
              this.minor++;
              this.inc("pre", identifier);
              break;
            case "prepatch":
              this.prerelease.length = 0;
              this.inc("patch", identifier);
              this.inc("pre", identifier);
              break;
            case "prerelease":
              if (this.prerelease.length === 0) {
                this.inc("patch", identifier);
              }
              this.inc("pre", identifier);
              break;
            case "major":
              if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                this.major++;
              }
              this.minor = 0;
              this.patch = 0;
              this.prerelease = [];
              break;
            case "minor":
              if (this.patch !== 0 || this.prerelease.length === 0) {
                this.minor++;
              }
              this.patch = 0;
              this.prerelease = [];
              break;
            case "patch":
              if (this.prerelease.length === 0) {
                this.patch++;
              }
              this.prerelease = [];
              break;
            case "pre":
              if (this.prerelease.length === 0) {
                this.prerelease = [0];
              } else {
                var i = this.prerelease.length;
                while (--i >= 0) {
                  if (typeof this.prerelease[i] === "number") {
                    this.prerelease[i]++;
                    i = -2;
                  }
                }
                if (i === -1) {
                  this.prerelease.push(0);
                }
              }
              if (identifier) {
                if (this.prerelease[0] === identifier) {
                  if (isNaN(this.prerelease[1])) {
                    this.prerelease = [identifier, 0];
                  }
                } else {
                  this.prerelease = [identifier, 0];
                }
              }
              break;
            default:
              throw new Error("invalid increment argument: " + release);
          }
          this.format();
          this.raw = this.version;
          return this;
        };
        exports.inc = inc;
        function inc(version, release, loose, identifier) {
          if (typeof loose === "string") {
            identifier = loose;
            loose = undefined;
          }
          try {
            return new SemVer(version, loose).inc(release, identifier).version;
          } catch (er) {
            return null;
          }
        }
        exports.diff = diff;
        function diff(version1, version2) {
          if (eq(version1, version2)) {
            return null;
          } else {
            var v1 = parse(version1);
            var v2 = parse(version2);
            var prefix = "";
            if (v1.prerelease.length || v2.prerelease.length) {
              prefix = "pre";
              var defaultResult = "prerelease";
            }
            for (var key in v1) {
              if (key === "major" || key === "minor" || key === "patch") {
                if (v1[key] !== v2[key]) {
                  return prefix + key;
                }
              }
            }
            return defaultResult;
          }
        }
        exports.compareIdentifiers = compareIdentifiers;
        var numeric = /^[0-9]+$/;
        function compareIdentifiers(a, b) {
          var anum = numeric.test(a);
          var bnum = numeric.test(b);
          if (anum && bnum) {
            a = +a;
            b = +b;
          }
          return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
        }
        exports.rcompareIdentifiers = rcompareIdentifiers;
        function rcompareIdentifiers(a, b) {
          return compareIdentifiers(b, a);
        }
        exports.major = major;
        function major(a, loose) {
          return new SemVer(a, loose).major;
        }
        exports.minor = minor;
        function minor(a, loose) {
          return new SemVer(a, loose).minor;
        }
        exports.patch = patch;
        function patch(a, loose) {
          return new SemVer(a, loose).patch;
        }
        exports.compare = compare;
        function compare(a, b, loose) {
          return new SemVer(a, loose).compare(new SemVer(b, loose));
        }
        exports.compareLoose = compareLoose;
        function compareLoose(a, b) {
          return compare(a, b, true);
        }
        exports.compareBuild = compareBuild;
        function compareBuild(a, b, loose) {
          var versionA = new SemVer(a, loose);
          var versionB = new SemVer(b, loose);
          return versionA.compare(versionB) || versionA.compareBuild(versionB);
        }
        exports.rcompare = rcompare;
        function rcompare(a, b, loose) {
          return compare(b, a, loose);
        }
        exports.sort = sort;
        function sort(list, loose) {
          return list.sort(function (a, b) {
            return exports.compareBuild(a, b, loose);
          });
        }
        exports.rsort = rsort;
        function rsort(list, loose) {
          return list.sort(function (a, b) {
            return exports.compareBuild(b, a, loose);
          });
        }
        exports.gt = gt;
        function gt(a, b, loose) {
          return compare(a, b, loose) > 0;
        }
        exports.lt = lt;
        function lt(a, b, loose) {
          return compare(a, b, loose) < 0;
        }
        exports.eq = eq;
        function eq(a, b, loose) {
          return compare(a, b, loose) === 0;
        }
        exports.neq = neq;
        function neq(a, b, loose) {
          return compare(a, b, loose) !== 0;
        }
        exports.gte = gte;
        function gte(a, b, loose) {
          return compare(a, b, loose) >= 0;
        }
        exports.lte = lte;
        function lte(a, b, loose) {
          return compare(a, b, loose) <= 0;
        }
        exports.cmp = cmp;
        function cmp(a, op, b, loose) {
          switch (op) {
            case "===":
              if (typeof a === "object") {
                a = a.version;
              }
              if (typeof b === "object") {
                b = b.version;
              }
              return a === b;
            case "!==":
              if (typeof a === "object") {
                a = a.version;
              }
              if (typeof b === "object") {
                b = b.version;
              }
              return a !== b;
            case "":
            case "=":
            case "==":
              return eq(a, b, loose);
            case "!=":
              return neq(a, b, loose);
            case ">":
              return gt(a, b, loose);
            case ">=":
              return gte(a, b, loose);
            case "<":
              return lt(a, b, loose);
            case "<=":
              return lte(a, b, loose);
            default:
              throw new TypeError("Invalid operator: " + op);
          }
        }
        exports.Comparator = Comparator;
        function Comparator(comp, options) {
          if (!options || typeof options !== "object") {
            options = {
              loose: !!options,
              includePrerelease: false
            };
          }
          if (comp instanceof Comparator) {
            if (comp.loose === !!options.loose) {
              return comp;
            } else {
              comp = comp.value;
            }
          }
          if (!(this instanceof Comparator)) {
            return new Comparator(comp, options);
          }
          debug("comparator", comp, options);
          this.options = options;
          this.loose = !!options.loose;
          this.parse(comp);
          if (this.semver === ANY) {
            this.value = "";
          } else {
            this.value = this.operator + this.semver.version;
          }
          debug("comp", this);
        }
        var ANY = {};
        Comparator.prototype.parse = function (comp) {
          var r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
          var m = comp.match(r);
          if (!m) {
            throw new TypeError("Invalid comparator: " + comp);
          }
          this.operator = m[1] !== undefined ? m[1] : "";
          if (this.operator === "=") {
            this.operator = "";
          }
          if (!m[2]) {
            this.semver = ANY;
          } else {
            this.semver = new SemVer(m[2], this.options.loose);
          }
        };
        Comparator.prototype.toString = function () {
          return this.value;
        };
        Comparator.prototype.test = function (version) {
          debug("Comparator.test", version, this.options.loose);
          if (this.semver === ANY || version === ANY) {
            return true;
          }
          if (typeof version === "string") {
            try {
              version = new SemVer(version, this.options);
            } catch (er) {
              return false;
            }
          }
          return cmp(version, this.operator, this.semver, this.options);
        };
        Comparator.prototype.intersects = function (comp, options) {
          if (!(comp instanceof Comparator)) {
            throw new TypeError("a Comparator is required");
          }
          if (!options || typeof options !== "object") {
            options = {
              loose: !!options,
              includePrerelease: false
            };
          }
          var rangeTmp;
          if (this.operator === "") {
            if (this.value === "") {
              return true;
            }
            rangeTmp = new Range(comp.value, options);
            return satisfies(this.value, rangeTmp, options);
          } else if (comp.operator === "") {
            if (comp.value === "") {
              return true;
            }
            rangeTmp = new Range(this.value, options);
            return satisfies(comp.semver, rangeTmp, options);
          }
          var sameDirectionIncreasing = (this.operator === ">=" || this.operator === ">") && (comp.operator === ">=" || comp.operator === ">");
          var sameDirectionDecreasing = (this.operator === "<=" || this.operator === "<") && (comp.operator === "<=" || comp.operator === "<");
          var sameSemVer = this.semver.version === comp.semver.version;
          var differentDirectionsInclusive = (this.operator === ">=" || this.operator === "<=") && (comp.operator === ">=" || comp.operator === "<=");
          var oppositeDirectionsLessThan = cmp(this.semver, "<", comp.semver, options) && ((this.operator === ">=" || this.operator === ">") && (comp.operator === "<=" || comp.operator === "<"));
          var oppositeDirectionsGreaterThan = cmp(this.semver, ">", comp.semver, options) && ((this.operator === "<=" || this.operator === "<") && (comp.operator === ">=" || comp.operator === ">"));
          return sameDirectionIncreasing || sameDirectionDecreasing || sameSemVer && differentDirectionsInclusive || oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
        };
        exports.Range = Range;
        function Range(range, options) {
          if (!options || typeof options !== "object") {
            options = {
              loose: !!options,
              includePrerelease: false
            };
          }
          if (range instanceof Range) {
            if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
              return range;
            } else {
              return new Range(range.raw, options);
            }
          }
          if (range instanceof Comparator) {
            return new Range(range.value, options);
          }
          if (!(this instanceof Range)) {
            return new Range(range, options);
          }
          this.options = options;
          this.loose = !!options.loose;
          this.includePrerelease = !!options.includePrerelease;
          this.raw = range;
          this.set = range.split(/\s*\|\|\s*/).map(function (range) {
            return this.parseRange(range.trim());
          }, this).filter(function (c) {
            return c.length;
          });
          if (!this.set.length) {
            throw new TypeError("Invalid SemVer Range: " + range);
          }
          this.format();
        }
        Range.prototype.format = function () {
          this.range = this.set.map(function (comps) {
            return comps.join(" ").trim();
          }).join("||").trim();
          return this.range;
        };
        Range.prototype.toString = function () {
          return this.range;
        };
        Range.prototype.parseRange = function (range) {
          var loose = this.options.loose;
          range = range.trim();
          var hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
          range = range.replace(hr, hyphenReplace);
          debug("hyphen replace", range);
          range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
          debug("comparator trim", range, re[t.COMPARATORTRIM]);
          range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
          range = range.replace(re[t.CARETTRIM], caretTrimReplace);
          range = range.split(/\s+/).join(" ");
          var compRe = loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
          var set = range.split(" ").map(function (comp) {
            return parseComparator(comp, this.options);
          }, this).join(" ").split(/\s+/);
          if (this.options.loose) {
            set = set.filter(function (comp) {
              return !!comp.match(compRe);
            });
          }
          set = set.map(function (comp) {
            return new Comparator(comp, this.options);
          }, this);
          return set;
        };
        Range.prototype.intersects = function (range, options) {
          if (!(range instanceof Range)) {
            throw new TypeError("a Range is required");
          }
          return this.set.some(function (thisComparators) {
            return isSatisfiable(thisComparators, options) && range.set.some(function (rangeComparators) {
              return isSatisfiable(rangeComparators, options) && thisComparators.every(function (thisComparator) {
                return rangeComparators.every(function (rangeComparator) {
                  return thisComparator.intersects(rangeComparator, options);
                });
              });
            });
          });
        };
        function isSatisfiable(comparators, options) {
          var result = true;
          var remainingComparators = comparators.slice();
          var testComparator = remainingComparators.pop();
          while (result && remainingComparators.length) {
            result = remainingComparators.every(function (otherComparator) {
              return testComparator.intersects(otherComparator, options);
            });
            testComparator = remainingComparators.pop();
          }
          return result;
        }
        exports.toComparators = toComparators;
        function toComparators(range, options) {
          return new Range(range, options).set.map(function (comp) {
            return comp.map(function (c) {
              return c.value;
            }).join(" ").trim().split(" ");
          });
        }
        function parseComparator(comp, options) {
          debug("comp", comp, options);
          comp = replaceCarets(comp, options);
          debug("caret", comp);
          comp = replaceTildes(comp, options);
          debug("tildes", comp);
          comp = replaceXRanges(comp, options);
          debug("xrange", comp);
          comp = replaceStars(comp, options);
          debug("stars", comp);
          return comp;
        }
        function isX(id) {
          return !id || id.toLowerCase() === "x" || id === "*";
        }
        function replaceTildes(comp, options) {
          return comp.trim().split(/\s+/).map(function (comp) {
            return replaceTilde(comp, options);
          }).join(" ");
        }
        function replaceTilde(comp, options) {
          var r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
          return comp.replace(r, function (_, M, m, p, pr) {
            debug("tilde", comp, _, M, m, p, pr);
            var ret;
            if (isX(M)) {
              ret = "";
            } else if (isX(m)) {
              ret = ">=" + M + ".0.0 <" + (+M + 1) + ".0.0";
            } else if (isX(p)) {
              ret = ">=" + M + "." + m + ".0 <" + M + "." + (+m + 1) + ".0";
            } else if (pr) {
              debug("replaceTilde pr", pr);
              ret = ">=" + M + "." + m + "." + p + "-" + pr + " <" + M + "." + (+m + 1) + ".0";
            } else {
              ret = ">=" + M + "." + m + "." + p + " <" + M + "." + (+m + 1) + ".0";
            }
            debug("tilde return", ret);
            return ret;
          });
        }
        function replaceCarets(comp, options) {
          return comp.trim().split(/\s+/).map(function (comp) {
            return replaceCaret(comp, options);
          }).join(" ");
        }
        function replaceCaret(comp, options) {
          debug("caret", comp, options);
          var r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
          return comp.replace(r, function (_, M, m, p, pr) {
            debug("caret", comp, _, M, m, p, pr);
            var ret;
            if (isX(M)) {
              ret = "";
            } else if (isX(m)) {
              ret = ">=" + M + ".0.0 <" + (+M + 1) + ".0.0";
            } else if (isX(p)) {
              if (M === "0") {
                ret = ">=" + M + "." + m + ".0 <" + M + "." + (+m + 1) + ".0";
              } else {
                ret = ">=" + M + "." + m + ".0 <" + (+M + 1) + ".0.0";
              }
            } else if (pr) {
              debug("replaceCaret pr", pr);
              if (M === "0") {
                if (m === "0") {
                  ret = ">=" + M + "." + m + "." + p + "-" + pr + " <" + M + "." + m + "." + (+p + 1);
                } else {
                  ret = ">=" + M + "." + m + "." + p + "-" + pr + " <" + M + "." + (+m + 1) + ".0";
                }
              } else {
                ret = ">=" + M + "." + m + "." + p + "-" + pr + " <" + (+M + 1) + ".0.0";
              }
            } else {
              debug("no pr");
              if (M === "0") {
                if (m === "0") {
                  ret = ">=" + M + "." + m + "." + p + " <" + M + "." + m + "." + (+p + 1);
                } else {
                  ret = ">=" + M + "." + m + "." + p + " <" + M + "." + (+m + 1) + ".0";
                }
              } else {
                ret = ">=" + M + "." + m + "." + p + " <" + (+M + 1) + ".0.0";
              }
            }
            debug("caret return", ret);
            return ret;
          });
        }
        function replaceXRanges(comp, options) {
          debug("replaceXRanges", comp, options);
          return comp.split(/\s+/).map(function (comp) {
            return replaceXRange(comp, options);
          }).join(" ");
        }
        function replaceXRange(comp, options) {
          comp = comp.trim();
          var r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
          return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
            debug("xRange", comp, ret, gtlt, M, m, p, pr);
            var xM = isX(M);
            var xm = xM || isX(m);
            var xp = xm || isX(p);
            var anyX = xp;
            if (gtlt === "=" && anyX) {
              gtlt = "";
            }
            pr = options.includePrerelease ? "-0" : "";
            if (xM) {
              if (gtlt === ">" || gtlt === "<") {
                ret = "<0.0.0-0";
              } else {
                ret = "*";
              }
            } else if (gtlt && anyX) {
              if (xm) {
                m = 0;
              }
              p = 0;
              if (gtlt === ">") {
                gtlt = ">=";
                if (xm) {
                  M = +M + 1;
                  m = 0;
                  p = 0;
                } else {
                  m = +m + 1;
                  p = 0;
                }
              } else if (gtlt === "<=") {
                gtlt = "<";
                if (xm) {
                  M = +M + 1;
                } else {
                  m = +m + 1;
                }
              }
              ret = gtlt + M + "." + m + "." + p + pr;
            } else if (xm) {
              ret = ">=" + M + ".0.0" + pr + " <" + (+M + 1) + ".0.0" + pr;
            } else if (xp) {
              ret = ">=" + M + "." + m + ".0" + pr + " <" + M + "." + (+m + 1) + ".0" + pr;
            }
            debug("xRange return", ret);
            return ret;
          });
        }
        function replaceStars(comp, options) {
          debug("replaceStars", comp, options);
          return comp.trim().replace(re[t.STAR], "");
        }
        function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
          if (isX(fM)) {
            from = "";
          } else if (isX(fm)) {
            from = ">=" + fM + ".0.0";
          } else if (isX(fp)) {
            from = ">=" + fM + "." + fm + ".0";
          } else {
            from = ">=" + from;
          }
          if (isX(tM)) {
            to = "";
          } else if (isX(tm)) {
            to = "<" + (+tM + 1) + ".0.0";
          } else if (isX(tp)) {
            to = "<" + tM + "." + (+tm + 1) + ".0";
          } else if (tpr) {
            to = "<=" + tM + "." + tm + "." + tp + "-" + tpr;
          } else {
            to = "<=" + to;
          }
          return (from + " " + to).trim();
        }
        Range.prototype.test = function (version) {
          if (!version) {
            return false;
          }
          if (typeof version === "string") {
            try {
              version = new SemVer(version, this.options);
            } catch (er) {
              return false;
            }
          }
          for (var i = 0; i < this.set.length; i++) {
            if (testSet(this.set[i], version, this.options)) {
              return true;
            }
          }
          return false;
        };
        function testSet(set, version, options) {
          for (var i = 0; i < set.length; i++) {
            if (!set[i].test(version)) {
              return false;
            }
          }
          if (version.prerelease.length && !options.includePrerelease) {
            for (i = 0; i < set.length; i++) {
              debug(set[i].semver);
              if (set[i].semver === ANY) {
                continue;
              }
              if (set[i].semver.prerelease.length > 0) {
                var allowed = set[i].semver;
                if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
                  return true;
                }
              }
            }
            return false;
          }
          return true;
        }
        exports.satisfies = satisfies;
        function satisfies(version, range, options) {
          try {
            range = new Range(range, options);
          } catch (er) {
            return false;
          }
          return range.test(version);
        }
        exports.maxSatisfying = maxSatisfying;
        function maxSatisfying(versions, range, options) {
          var max = null;
          var maxSV = null;
          try {
            var rangeObj = new Range(range, options);
          } catch (er) {
            return null;
          }
          versions.forEach(function (v) {
            if (rangeObj.test(v)) {
              if (!max || maxSV.compare(v) === -1) {
                max = v;
                maxSV = new SemVer(max, options);
              }
            }
          });
          return max;
        }
        exports.minSatisfying = minSatisfying;
        function minSatisfying(versions, range, options) {
          var min = null;
          var minSV = null;
          try {
            var rangeObj = new Range(range, options);
          } catch (er) {
            return null;
          }
          versions.forEach(function (v) {
            if (rangeObj.test(v)) {
              if (!min || minSV.compare(v) === 1) {
                min = v;
                minSV = new SemVer(min, options);
              }
            }
          });
          return min;
        }
        exports.minVersion = minVersion;
        function minVersion(range, loose) {
          range = new Range(range, loose);
          var minver = new SemVer("0.0.0");
          if (range.test(minver)) {
            return minver;
          }
          minver = new SemVer("0.0.0-0");
          if (range.test(minver)) {
            return minver;
          }
          minver = null;
          for (var i = 0; i < range.set.length; ++i) {
            var comparators = range.set[i];
            comparators.forEach(function (comparator) {
              var compver = new SemVer(comparator.semver.version);
              switch (comparator.operator) {
                case ">":
                  if (compver.prerelease.length === 0) {
                    compver.patch++;
                  } else {
                    compver.prerelease.push(0);
                  }
                  compver.raw = compver.format();
                case "":
                case ">=":
                  if (!minver || gt(minver, compver)) {
                    minver = compver;
                  }
                  break;
                case "<":
                case "<=":
                  break;
                default:
                  throw new Error("Unexpected operation: " + comparator.operator);
              }
            });
          }
          if (minver && range.test(minver)) {
            return minver;
          }
          return null;
        }
        exports.validRange = validRange;
        function validRange(range, options) {
          try {
            return new Range(range, options).range || "*";
          } catch (er) {
            return null;
          }
        }
        exports.ltr = ltr;
        function ltr(version, range, options) {
          return outside(version, range, "<", options);
        }
        exports.gtr = gtr;
        function gtr(version, range, options) {
          return outside(version, range, ">", options);
        }
        exports.outside = outside;
        function outside(version, range, hilo, options) {
          version = new SemVer(version, options);
          range = new Range(range, options);
          var gtfn, ltefn, ltfn, comp, ecomp;
          switch (hilo) {
            case ">":
              gtfn = gt;
              ltefn = lte;
              ltfn = lt;
              comp = ">";
              ecomp = ">=";
              break;
            case "<":
              gtfn = lt;
              ltefn = gte;
              ltfn = gt;
              comp = "<";
              ecomp = "<=";
              break;
            default:
              throw new TypeError("Must provide a hilo val of \"<\" or \">\"");
          }
          if (satisfies(version, range, options)) {
            return false;
          }
          for (var i = 0; i < range.set.length; ++i) {
            var comparators = range.set[i];
            var high = null;
            var low = null;
            comparators.forEach(function (comparator) {
              if (comparator.semver === ANY) {
                comparator = new Comparator(">=0.0.0");
              }
              high = high || comparator;
              low = low || comparator;
              if (gtfn(comparator.semver, high.semver, options)) {
                high = comparator;
              } else if (ltfn(comparator.semver, low.semver, options)) {
                low = comparator;
              }
            });
            if (high.operator === comp || high.operator === ecomp) {
              return false;
            }
            if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
              return false;
            } else if (low.operator === ecomp && ltfn(version, low.semver)) {
              return false;
            }
          }
          return true;
        }
        exports.prerelease = prerelease;
        function prerelease(version, options) {
          var parsed = parse(version, options);
          return parsed && parsed.prerelease.length ? parsed.prerelease : null;
        }
        exports.intersects = intersects;
        function intersects(r1, r2, options) {
          r1 = new Range(r1, options);
          r2 = new Range(r2, options);
          return r1.intersects(r2);
        }
        exports.coerce = coerce;
        function coerce(version, options) {
          if (version instanceof SemVer) {
            return version;
          }
          if (typeof version === "number") {
            version = String(version);
          }
          if (typeof version !== "string") {
            return null;
          }
          options = options || ({});
          var match = null;
          if (!options.rtl) {
            match = version.match(re[t.COERCE]);
          } else {
            var next;
            while ((next = re[t.COERCERTL].exec(version)) && (!match || match.index + match[0].length !== version.length)) {
              if (!match || next.index + next[0].length !== match.index + match[0].length) {
                match = next;
              }
              re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
            }
            re[t.COERCERTL].lastIndex = -1;
          }
          if (match === null) {
            return null;
          }
          return parse(match[2] + "." + (match[3] || "0") + "." + (match[4] || "0"), options);
        }
      });
      var NAME_SELECTOR = "NAME_SELECTOR";
      var COMPONENT_SELECTOR = "COMPONENT_SELECTOR";
      var REF_SELECTOR = "REF_SELECTOR";
      var DOM_SELECTOR = "DOM_SELECTOR";
      var INVALID_SELECTOR = "INVALID_SELECTOR";
      var VUE_VERSION = Number(Vue__default["default"].version.split(".")[0] + "." + Vue__default["default"].version.split(".")[1]);
      var FUNCTIONAL_OPTIONS = VUE_VERSION >= 2.5 ? "fnOptions" : "functionalOptions";
      var BEFORE_RENDER_LIFECYCLE_HOOK = semver.gt(Vue__default["default"].version, "2.1.8") ? "beforeCreate" : "beforeMount";
      var CREATE_ELEMENT_ALIAS = semver.gt(Vue__default["default"].version, "2.1.5") ? "_c" : "_h";
      function throwError(msg) {
        throw new Error("[vue-test-utils]: " + msg);
      }
      function warn(msg) {
        console.error("[vue-test-utils]: " + msg);
      }
      var camelizeRE = /-(\w)/g;
      var camelize = function (str) {
        var camelizedStr = str.replace(camelizeRE, function (_, c) {
          return c ? c.toUpperCase() : "";
        });
        return camelizedStr.charAt(0).toLowerCase() + camelizedStr.slice(1);
      };
      var capitalize = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
      var hyphenateRE = /\B([A-Z])/g;
      var hyphenate = function (str) {
        return str.replace(hyphenateRE, "-$1").toLowerCase();
      };
      function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
      function keys(obj) {
        return Object.keys(obj);
      }
      function resolveComponent(id, components) {
        if (typeof id !== "string") {
          return;
        }
        if (hasOwnProperty(components, id)) {
          return components[id];
        }
        var camelizedId = camelize(id);
        if (hasOwnProperty(components, camelizedId)) {
          return components[camelizedId];
        }
        var PascalCaseId = capitalize(camelizedId);
        if (hasOwnProperty(components, PascalCaseId)) {
          return components[PascalCaseId];
        }
        return components[id] || components[camelizedId] || components[PascalCaseId];
      }
      var UA = typeof window !== "undefined" && ("navigator" in window) && navigator.userAgent.toLowerCase();
      var isPhantomJS = UA && UA.includes && UA.match(/phantomjs/i);
      var isEdge = UA && UA.indexOf("edge/") > 0;
      var isChrome = UA && (/chrome\/\d+/).test(UA) && !isEdge;
      function getCheckedEvent() {
        var version = Vue__default["default"].version;
        if (semver.satisfies(version, "2.1.9 - 2.1.10")) {
          return "click";
        }
        if (semver.satisfies(version, "2.2 - 2.4")) {
          return isChrome ? "click" : "change";
        }
        return "change";
      }
      function nextTick() {
        if (VUE_VERSION > 2) {
          return Vue__default["default"].nextTick();
        }
        return new Promise(function (resolve) {
          Vue__default["default"].nextTick(resolve);
        });
      }
      function warnDeprecated(method, fallback) {
        if (fallback === void 0) fallback = "";
        if (!config.showDeprecationWarnings) {
          return;
        }
        var msg = method + " is deprecated and will be removed in the next major version.";
        if (fallback) {
          msg += " " + fallback + ".";
        }
        if (config.deprecationWarningHandler) {
          config.deprecationWarningHandler(method, msg);
        } else {
          warn(msg);
        }
      }
      function addMocks(_Vue, mockedProperties) {
        if (mockedProperties === void 0) mockedProperties = {};
        if (mockedProperties === false) {
          return;
        }
        Object.keys(mockedProperties).forEach(function (key) {
          try {
            _Vue.prototype[key] = mockedProperties[key];
          } catch (e) {
            warn("could not overwrite property " + key + ", this is " + "usually caused by a plugin that has added " + "the property as a read-only value");
          }
          Vue__default["default"].util.defineReactive(_Vue, key, mockedProperties[key]);
        });
      }
      function logEvents(vm, emitted, emittedByOrder) {
        var emit = vm.$emit;
        vm.$emit = function (name) {
          var args = [], len = arguments.length - 1;
          while (len-- > 0) args[len] = arguments[len + 1];
          (emitted[name] || (emitted[name] = [])).push(args);
          emittedByOrder.push({
            name: name,
            args: args
          });
          return emit.call.apply(emit, [vm, name].concat(args));
        };
      }
      function addEventLogger(_Vue) {
        _Vue.mixin({
          beforeCreate: function () {
            this.__emitted = Object.create(null);
            this.__emittedByOrder = [];
            logEvents(this, this.__emitted, this.__emittedByOrder);
          }
        });
      }
      function addStubs(_Vue, stubComponents) {
        var obj;
        function addStubComponentsMixin() {
          Object.assign(this.$options.components, stubComponents);
        }
        _Vue.mixin((obj = {}, obj[BEFORE_RENDER_LIFECYCLE_HOOK] = addStubComponentsMixin, obj));
      }
      function isDomSelector(selector) {
        if (typeof selector !== "string") {
          return false;
        }
        try {
          if (typeof document === "undefined") {
            throwError("mount must be run in a browser environment like " + "PhantomJS, jsdom or chrome");
          }
        } catch (error) {
          throwError("mount must be run in a browser environment like " + "PhantomJS, jsdom or chrome");
        }
        try {
          document.querySelector(selector);
          return true;
        } catch (error$1) {
          return false;
        }
      }
      function isVueComponent(c) {
        if (isConstructor(c)) {
          return true;
        }
        if (c === null || typeof c !== "object") {
          return false;
        }
        if (c.extends || c._Ctor) {
          return true;
        }
        if (typeof c.template === "string") {
          return true;
        }
        if (typeof c.setup === "function" && !c.render) {
          return true;
        }
        return typeof c.render === "function";
      }
      function componentNeedsCompiling(component) {
        return component && !component.render && (component.template || component.extends || component.extendOptions) && !component.functional;
      }
      function isRefSelector(refOptionsObject) {
        if (typeof refOptionsObject !== "object" || Object.keys(refOptionsObject || ({})).length !== 1) {
          return false;
        }
        return typeof refOptionsObject.ref === "string";
      }
      function isNameSelector(nameOptionsObject) {
        if (typeof nameOptionsObject !== "object" || nameOptionsObject === null) {
          return false;
        }
        return !!nameOptionsObject.name;
      }
      function isConstructor(c) {
        return typeof c === "function" && c.cid;
      }
      function isDynamicComponent(c) {
        return typeof c === "function" && !c.cid;
      }
      function isComponentOptions(c) {
        return typeof c === "object" && (c.template || c.render);
      }
      function isFunctionalComponent(c) {
        if (!isVueComponent(c)) {
          return false;
        }
        if (isConstructor(c)) {
          return c.options.functional;
        }
        return c.functional;
      }
      function templateContainsComponent(template, name) {
        return [capitalize, camelize, hyphenate].some(function (format) {
          var re = new RegExp("<" + format(name) + "\\s*(\\s|>|(/>))", "g");
          return re.test(template);
        });
      }
      function isPlainObject(c) {
        return Object.prototype.toString.call(c) === "[object Object]";
      }
      function isHTMLElement(c) {
        if (typeof HTMLElement === "undefined") {
          return false;
        }
        return c instanceof HTMLElement;
      }
      function makeMap(str, expectsLowerCase) {
        var map = Object.create(null);
        var list = str.split(",");
        for (var i = 0; i < list.length; i++) {
          map[list[i]] = true;
        }
        return expectsLowerCase ? function (val) {
          return map[val.toLowerCase()];
        } : function (val) {
          return map[val];
        };
      }
      var isHTMLTag = makeMap("html,body,base,head,link,meta,style,title," + "address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section," + "div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul," + "a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby," + "s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track," + "embed,object,param,source,canvas,script,noscript,del,ins," + "caption,col,colgroup,table,thead,tbody,td,th,tr,video," + "button,datalist,fieldset,form,input,label,legend,meter,optgroup,option," + "output,progress,select,textarea," + "details,dialog,menu,menuitem,summary," + "content,element,shadow,template,blockquote,iframe,tfoot");
      var isSVG = makeMap("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face," + "foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern," + "polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", true);
      var isReservedTag = function (tag) {
        return isHTMLTag(tag) || isSVG(tag);
      };
      function compileTemplate(component) {
        if (component.template) {
          if (!vueTemplateCompiler.compileToFunctions) {
            throwError("vueTemplateCompiler is undefined, you must pass " + "precompiled components if vue-template-compiler is " + "undefined");
          }
          if (component.template.charAt("#") === "#") {
            var el = document.querySelector(component.template);
            if (!el) {
              throwError("Cannot find element" + component.template);
              el = document.createElement("div");
            }
            component.template = el.innerHTML;
          }
          Object.assign(component, Object.assign({}, vueTemplateCompiler.compileToFunctions(component.template), {
            name: component.name
          }));
        }
        if (component.components) {
          Object.keys(component.components).forEach(function (c) {
            var cmp = component.components[c];
            if (!cmp.render) {
              compileTemplate(cmp);
            }
          });
        }
        if (component.extends) {
          compileTemplate(component.extends);
        }
        if (component.extendOptions && !component.options.render) {
          compileTemplate(component.options);
        }
      }
      function compileTemplateForSlots(slots) {
        Object.keys(slots).forEach(function (key) {
          var slot = Array.isArray(slots[key]) ? slots[key] : [slots[key]];
          slot.forEach(function (slotValue) {
            if (componentNeedsCompiling(slotValue)) {
              compileTemplate(slotValue);
            }
          });
        });
      }
      var MOUNTING_OPTIONS = ["attachToDocument", "mocks", "slots", "localVue", "stubs", "context", "clone", "attrs", "listeners", "propsData", "shouldProxy"];
      function extractInstanceOptions(options) {
        var instanceOptions = Object.assign({}, options);
        MOUNTING_OPTIONS.forEach(function (mountingOption) {
          delete instanceOptions[mountingOption];
        });
        return instanceOptions;
      }
      function isDestructuringSlotScope(slotScope) {
        return (/^{.*}$/).test(slotScope);
      }
      function getVueTemplateCompilerHelpers(_Vue) {
        var vue = new _Vue();
        var helpers = {};
        var names = ["_c", "_o", "_n", "_s", "_l", "_t", "_q", "_i", "_m", "_f", "_k", "_b", "_v", "_e", "_u", "_g"];
        names.forEach(function (name) {
          helpers[name] = vue._renderProxy[name];
        });
        helpers.$createElement = vue._renderProxy.$createElement;
        helpers.$set = vue._renderProxy.$set;
        return helpers;
      }
      function validateEnvironment() {
        if (VUE_VERSION < 2.1) {
          throwError("the scopedSlots option is only supported in vue@2.1+.");
        }
      }
      function isScopedSlot(slot) {
        if (typeof slot === "function") {
          return {
            match: null,
            slot: slot
          };
        }
        var slotScopeRe = /<[^>]+ slot-scope="(.+)"/;
        var vSlotRe = /<template v-slot(?::.+)?="(.+)"/;
        var shortVSlotRe = /<template #.*="(.+)"/;
        var hasOldSlotScope = slot.match(slotScopeRe);
        var hasVSlotScopeAttr = slot.match(vSlotRe);
        var hasShortVSlotScopeAttr = slot.match(shortVSlotRe);
        if (hasOldSlotScope) {
          return {
            slot: slot,
            match: hasOldSlotScope
          };
        } else if (hasVSlotScopeAttr || hasShortVSlotScopeAttr) {
          var sanitizedSlot = slot.replace(/(<template)([^>]+)(>.+<\/template>)/, "$1$3");
          return {
            slot: sanitizedSlot,
            match: hasVSlotScopeAttr || hasShortVSlotScopeAttr
          };
        }
        return {
          slot: slot,
          match: null
        };
      }
      function customWarn(msg) {
        if (msg.indexOf("Cannot use <template> as component root element") === -1) {
          console.error(msg);
        }
      }
      function createScopedSlots(scopedSlotsOption, _Vue) {
        var scopedSlots = {};
        if (!scopedSlotsOption) {
          return scopedSlots;
        }
        validateEnvironment();
        var helpers = getVueTemplateCompilerHelpers(_Vue);
        var loop = function (scopedSlotName) {
          var slot = scopedSlotsOption[scopedSlotName];
          var isFn = typeof slot === "function";
          var scopedSlotMatches = isScopedSlot(slot);
          var renderFn = typeof slot === "function" ? slot : vueTemplateCompiler.compileToFunctions(scopedSlotMatches.slot, {
            warn: customWarn
          }).render;
          var slotScope = scopedSlotMatches.match && scopedSlotMatches.match[1];
          scopedSlots[scopedSlotName] = function (props) {
            var obj;
            var res;
            if (isFn) {
              res = renderFn.call(Object.assign({}, helpers), props);
            } else if (slotScope && !isDestructuringSlotScope(slotScope)) {
              res = renderFn.call(Object.assign({}, helpers, (obj = {}, obj[slotScope] = props, obj)));
            } else if (slotScope && isDestructuringSlotScope(slotScope)) {
              res = renderFn.call(Object.assign({}, helpers, props));
            } else {
              res = renderFn.call(Object.assign({}, helpers, {
                props: props
              }));
            }
            return Array.isArray(res) ? res[0] : res;
          };
        };
        for (var scopedSlotName in scopedSlotsOption) loop(scopedSlotName);
        return scopedSlots;
      }
      var FUNCTION_PLACEHOLDER = "[Function]";
      function isVueComponentStub(comp) {
        return comp && comp.template || isVueComponent(comp);
      }
      function isValidStub(stub) {
        return typeof stub === "boolean" || !!stub && typeof stub === "string" || isVueComponentStub(stub);
      }
      function resolveComponent$1(obj, component) {
        return obj[component] || obj[hyphenate(component)] || obj[camelize(component)] || obj[capitalize(camelize(component))] || obj[capitalize(component)] || ({});
      }
      function getCoreProperties(componentOptions) {
        return {
          attrs: componentOptions.attrs,
          name: componentOptions.name,
          model: componentOptions.model,
          props: componentOptions.props,
          on: componentOptions.on,
          key: componentOptions.key,
          domProps: componentOptions.domProps,
          class: componentOptions.class,
          staticClass: componentOptions.staticClass,
          staticStyle: componentOptions.staticStyle,
          style: componentOptions.style,
          normalizedStyle: componentOptions.normalizedStyle,
          nativeOn: componentOptions.nativeOn,
          functional: componentOptions.functional,
          abstract: componentOptions.abstract
        };
      }
      function resolveOptions(component, _Vue) {
        if (isDynamicComponent(component)) {
          return {};
        }
        return isConstructor(component) ? component.options : _Vue.extend(component).options;
      }
      function getScopedSlotRenderFunctions(ctx) {
        if (ctx && ctx.$options && ctx.$options.parent && ctx.$options.parent._vnode && ctx.$options.parent._vnode.data && ctx.$options.parent._vnode.data.scopedSlots) {
          var slotKeys = ctx.$options.parent._vnode.data.scopedSlots;
          return keys(slotKeys).filter(function (x) {
            return x !== "_normalized" && x !== "$stable" && x !== "$key";
          });
        }
        return [];
      }
      function createStubFromComponent(originalComponent, name, _Vue) {
        var componentOptions = resolveOptions(originalComponent, _Vue);
        var tagName = (name || "anonymous") + "-stub";
        if (Vue__default["default"].config.ignoredElements) {
          Vue__default["default"].config.ignoredElements.push(tagName);
        }
        return Object.assign({}, getCoreProperties(componentOptions), {
          $_vueTestUtils_original: originalComponent,
          $_doNotStubChildren: true,
          render: function render(h, context) {
            var this$1 = this;
            return h(tagName, componentOptions.functional ? Object.assign({}, context.data, {
              attrs: Object.assign({}, shapeStubProps(context.props), context.data.attrs)
            }) : {
              attrs: Object.assign({}, shapeStubProps(this.$props))
            }, context ? context.children : this.$options._renderChildren || getScopedSlotRenderFunctions(this).map(function (x) {
              return this$1.$options.parent._vnode.data.scopedSlots[x]({});
            }));
          }
        });
      }
      function shapeStubProps(props) {
        var shapedProps = {};
        for (var propName in props) {
          if (typeof props[propName] === "function") {
            shapedProps[propName] = FUNCTION_PLACEHOLDER;
            continue;
          }
          if (Array.isArray(props[propName])) {
            shapedProps[propName] = props[propName].map(function (value) {
              return typeof value === "function" ? FUNCTION_PLACEHOLDER : value;
            });
            continue;
          }
          shapedProps[propName] = props[propName];
        }
        return shapedProps;
      }
      function createStubFromString(templateString, name) {
        warnDeprecated("Using a string for stubs");
        if (templateContainsComponent(templateString, name)) {
          throwError("options.stub cannot contain a circular reference");
        }
        return {
          template: templateString,
          $_doNotStubChildren: true
        };
      }
      function setStubComponentName(stub, originalComponent, _Vue) {
        if (originalComponent === void 0) originalComponent = {};
        if (stub.name) {
          return;
        }
        var componentOptions = resolveOptions(originalComponent, _Vue);
        stub.name = getCoreProperties(componentOptions).name;
      }
      function validateStub(stub) {
        if (!isValidStub(stub)) {
          throwError("options.stub values must be passed a string or " + "component");
        }
      }
      function createStubsFromStubsObject(originalComponents, stubs, _Vue) {
        if (originalComponents === void 0) originalComponents = {};
        return Object.keys(stubs || ({})).reduce(function (acc, stubName) {
          var stub = stubs[stubName];
          validateStub(stub);
          if (stub === false) {
            return acc;
          }
          var component = resolveComponent$1(originalComponents, stubName);
          if (stub === true) {
            acc[stubName] = createStubFromComponent(component, stubName, _Vue);
            return acc;
          }
          if (typeof stub === "string") {
            stub = createStubFromString(stub, stubName);
            stubs[stubName];
          }
          setStubComponentName(stub, component, _Vue);
          if (componentNeedsCompiling(stub)) {
            compileTemplate(stub);
          }
          acc[stubName] = stub;
          stub._Ctor = {};
          return acc;
        }, {});
      }
      var isAllowlisted = function (el, allowlist) {
        return resolveComponent(el, allowlist);
      };
      var isAlreadyStubbed = function (el, stubs) {
        return stubs.has(el);
      };
      function shouldExtend(component, _Vue) {
        return isConstructor(component) || component && component.extends;
      }
      function extend(component, _Vue) {
        var componentOptions = component.options ? component.options : component;
        var stub = _Vue.extend(componentOptions);
        stub.options.$_vueTestUtils_original = component;
        stub.options._base = _Vue;
        return stub;
      }
      function createStubIfNeeded(shouldStub, component, _Vue, el) {
        if (shouldStub) {
          return createStubFromComponent(component || ({}), el, _Vue);
        }
        if (shouldExtend(component)) {
          return extend(component, _Vue);
        }
      }
      function shouldNotBeStubbed(el, allowlist, modifiedComponents) {
        return typeof el === "string" && isReservedTag(el) || isAllowlisted(el, allowlist) || isAlreadyStubbed(el, modifiedComponents);
      }
      function patchCreateElement(_Vue, stubs, stubAllComponents) {
        var obj;
        function patchCreateElementMixin() {
          var vm = this;
          if (vm.$options.$_doNotStubChildren || vm.$options._isFunctionalContainer) {
            return;
          }
          var modifiedComponents = new Set();
          var originalCreateElement = vm.$createElement;
          var originalComponents = vm.$options.components;
          var createElement = function (el) {
            var obj;
            var args = [], len = arguments.length - 1;
            while (len-- > 0) args[len] = arguments[len + 1];
            if (shouldNotBeStubbed(el, stubs, modifiedComponents)) {
              return originalCreateElement.apply(void 0, [el].concat(args));
            }
            if (isConstructor(el) || isComponentOptions(el)) {
              if (stubAllComponents) {
                var stub = createStubFromComponent(el, el.name || "anonymous", _Vue);
                return originalCreateElement.apply(void 0, [stub].concat(args));
              }
              var Constructor = shouldExtend(el) ? extend(el, _Vue) : el;
              return originalCreateElement.apply(void 0, [Constructor].concat(args));
            }
            if (typeof el === "string") {
              var original = resolveComponent(el, originalComponents);
              if (!original) {
                return originalCreateElement.apply(void 0, [el].concat(args));
              }
              if (isDynamicComponent(original)) {
                return originalCreateElement.apply(void 0, [el].concat(args));
              }
              var stub$1 = createStubIfNeeded(stubAllComponents, original, _Vue, el);
              if (stub$1) {
                Object.assign(vm.$options.components, (obj = {}, obj[el] = stub$1, obj));
                modifiedComponents.add(el);
              }
            }
            return originalCreateElement.apply(void 0, [el].concat(args));
          };
          vm[CREATE_ELEMENT_ALIAS] = createElement;
          vm.$createElement = createElement;
        }
        _Vue.mixin((obj = {}, obj[BEFORE_RENDER_LIFECYCLE_HOOK] = patchCreateElementMixin, obj));
      }
      function objectWithoutProperties(obj, exclude) {
        var target = {};
        for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];
        return target;
      }
      function createContext(options, scopedSlots, currentProps) {
        var on = Object.assign({}, options.context && options.context.on, options.listeners);
        return Object.assign({}, {
          attrs: Object.assign({}, options.attrs, currentProps)
        }, options.context || ({}), {
          on: on,
          scopedSlots: scopedSlots
        });
      }
      function createChildren(vm, h, ref) {
        var slots = ref.slots;
        var context = ref.context;
        var slotVNodes = slots ? createSlotVNodes(vm, slots) : undefined;
        return context && context.children && context.children.map(function (x) {
          return typeof x === "function" ? x(h) : x;
        }) || slotVNodes;
      }
      function getValuesFromCallableOption(optionValue) {
        if (typeof optionValue === "function") {
          return optionValue.call(this);
        }
        return optionValue;
      }
      function createInstance(component, options, _Vue) {
        var componentOptions = isConstructor(component) ? component.options : component;
        var instanceOptions = extractInstanceOptions(options);
        var globalComponents = _Vue.options.components || ({});
        var componentsToStub = Object.assign(Object.create(globalComponents), componentOptions.components);
        var stubComponentsObject = createStubsFromStubsObject(componentsToStub, options.stubs, _Vue);
        addEventLogger(_Vue);
        addMocks(_Vue, options.mocks);
        addStubs(_Vue, stubComponentsObject);
        patchCreateElement(_Vue, stubComponentsObject, options.shouldProxy);
        if (componentNeedsCompiling(componentOptions)) {
          compileTemplate(componentOptions);
        }
        componentOptions.$_vueTestUtils_original = component;
        if (componentOptions.watch && instanceOptions.watch) {
          var componentWatchers = Object.keys(componentOptions.watch);
          var instanceWatchers = Object.keys(instanceOptions.watch);
          for (var i = 0; i < instanceWatchers.length; i++) {
            var k = instanceWatchers[i];
            if (componentWatchers.includes(k)) {
              componentOptions.watch[k] = instanceOptions.watch[k];
            }
          }
        }
        var Constructor = _Vue.extend(componentOptions).extend(instanceOptions);
        Constructor.options._base = _Vue;
        var scopedSlots = createScopedSlots(options.scopedSlots, _Vue);
        var parentComponentOptions = options.parentComponent || ({});
        var originalParentComponentProvide = parentComponentOptions.provide;
        parentComponentOptions.provide = function () {
          return Object.assign({}, getValuesFromCallableOption.call(this, originalParentComponentProvide), getValuesFromCallableOption.call(this, options.provide));
        };
        var originalParentComponentData = parentComponentOptions.data;
        parentComponentOptions.data = function () {
          return Object.assign({}, getValuesFromCallableOption.call(this, originalParentComponentData), {
            vueTestUtils_childProps: Object.assign({}, options.propsData)
          });
        };
        parentComponentOptions.$_doNotStubChildren = true;
        parentComponentOptions.$_isWrapperParent = true;
        parentComponentOptions._isFunctionalContainer = componentOptions.functional;
        parentComponentOptions.render = function (h) {
          return h(Constructor, createContext(options, scopedSlots, this.vueTestUtils_childProps), createChildren(this, h, options));
        };
        var propsData = options.propsData;
        var data = options.data;
        var rest$1 = objectWithoutProperties(options, ["propsData", "data"]);
        var rest = rest$1;
        var Parent = _Vue.extend(Object.assign({}, rest, parentComponentOptions));
        return new Parent();
      }
      function createElement() {
        if (document) {
          var elem = document.createElement("div");
          if (document.body) {
            document.body.appendChild(elem);
          }
          return elem;
        }
      }
      function findDOMNodes(element, selector) {
        var nodes = [];
        if (!element || !element.querySelectorAll || !element.matches) {
          return nodes;
        }
        if (element.matches(selector)) {
          nodes.push(element);
        }
        return nodes.concat([].slice.call(element.querySelectorAll(selector)));
      }
      function vmMatchesName(vm, name) {
        var componentName = isFunctionalComponent(vm) ? vm.name : vm.$options && vm.$options.name;
        return !!name && !!componentName && (componentName === name || componentName === capitalize(name) || componentName === capitalize(camelize(name)) || capitalize(camelize(componentName)) === name);
      }
      function vmCtorMatches(vm, component) {
        if (vm.$options && vm.$options.$_vueTestUtils_original === component || vm.$_vueTestUtils_original === component) {
          return true;
        }
        var Ctor = isConstructor(component) ? component.options._Ctor : component._Ctor;
        if (!Ctor) {
          return false;
        }
        if (vm.constructor.extendOptions === component) {
          return true;
        }
        if (component.functional) {
          return Object.keys(vm._Ctor || ({})).some(function (c) {
            return component === vm._Ctor[c].extendOptions;
          });
        }
      }
      function matches(node, selector) {
        if (selector.type === DOM_SELECTOR) {
          var element = node instanceof Element ? node : node.elm;
          return element && element.matches && element.matches(selector.value);
        }
        var isFunctionalSelector = isConstructor(selector.value) ? selector.value.options.functional : selector.value.functional;
        var componentInstance = (isFunctionalSelector ? node[FUNCTIONAL_OPTIONS] : node.child) || node[FUNCTIONAL_OPTIONS] || node.child;
        if (!componentInstance) {
          return false;
        }
        if (selector.type === COMPONENT_SELECTOR) {
          if (vmCtorMatches(componentInstance, selector.value)) {
            return true;
          }
        }
        var nameSelector = isConstructor(selector.value) ? selector.value.extendOptions.name : selector.value.name;
        return vmMatchesName(componentInstance, nameSelector);
      }
      function findAllParentInstances(childVm) {
        var instances = [childVm];
        function getParent(_vm) {
          if (_vm && _vm.$parent) {
            instances.push(_vm.$parent);
            return getParent(_vm.$parent);
          }
          return _vm;
        }
        getParent(childVm);
        return instances;
      }
      function findAllInstances(rootVm) {
        var instances = [rootVm];
        var i = 0;
        while (i < instances.length) {
          var vm = instances[i];
          (vm.$children || []).forEach(function (child) {
            instances.push(child);
          });
          i++;
        }
        return instances;
      }
      function findAllVNodes(vnode, selector) {
        var matchingNodes = [];
        var nodes = [vnode];
        while (nodes.length) {
          var node = nodes.shift();
          if (node.children) {
            var children = [].concat(node.children).reverse();
            children.forEach(function (n) {
              nodes.unshift(n);
            });
          }
          if (node.child) {
            nodes.unshift(node.child._vnode);
          }
          if (matches(node, selector)) {
            matchingNodes.push(node);
          }
        }
        return matchingNodes;
      }
      function removeDuplicateNodes(vNodes) {
        var vNodeElms = vNodes.map(function (vNode) {
          return vNode.elm;
        });
        return vNodes.filter(function (vNode, index) {
          return index === vNodeElms.indexOf(vNode.elm);
        });
      }
      function find(root, vm, selector) {
        if (root instanceof Element && selector.type !== DOM_SELECTOR) {
          throwError("cannot find a Vue instance on a DOM node. The node " + "you are calling find on does not exist in the " + "VDom. Are you adding the node as innerHTML?");
        }
        if (selector.type === COMPONENT_SELECTOR && (selector.value.functional || selector.value.options && selector.value.options.functional) && VUE_VERSION < 2.3) {
          throwError("find for functional components is not supported " + "in Vue < 2.3");
        }
        if (root instanceof Element) {
          return findDOMNodes(root, selector.value);
        }
        if (!root && selector.type !== DOM_SELECTOR) {
          throwError("cannot find a Vue instance on a DOM node. The node " + "you are calling find on does not exist in the " + "VDom. Are you adding the node as innerHTML?");
        }
        if (!vm && selector.type === REF_SELECTOR) {
          throwError("$ref selectors can only be used on Vue component " + "wrappers");
        }
        if (vm && vm.$refs && (selector.value.ref in vm.$refs)) {
          var refs = vm.$refs[selector.value.ref];
          return Array.isArray(refs) ? refs : [refs];
        }
        var nodes = findAllVNodes(root, selector);
        var dedupedNodes = removeDuplicateNodes(nodes);
        if (nodes.length > 0 || selector.type !== DOM_SELECTOR) {
          return dedupedNodes;
        }
        return findDOMNodes(root.elm, selector.value);
      }
      function errorHandler(errorOrString, vm, info) {
        var error = typeof errorOrString === "object" ? errorOrString : new Error(errorOrString);
        var instancedErrorHandlers = findAllParentInstances(vm).filter(function (_vm) {
          return _vm && _vm.$options && _vm.$options.localVue && _vm.$options.localVue.config && _vm.$options.localVue.config.errorHandler;
        }).map(function (_vm) {
          return _vm.$options.localVue.config.errorHandler;
        });
        if (vm) {
          vm._error = error;
        }
        if (!instancedErrorHandlers.length) {
          throw error;
        }
        instancedErrorHandlers.forEach(function (instancedErrorHandler) {
          instancedErrorHandler(error, vm, info);
        });
      }
      function throwIfInstancesThrew(vm) {
        var instancesWithError = findAllInstances(vm).filter(function (_vm) {
          return _vm._error;
        });
        if (instancesWithError.length > 0) {
          throw instancesWithError[0]._error;
        }
      }
      var hasWarned = false;
      function addGlobalErrorHandler(_Vue) {
        var existingErrorHandler = _Vue.config.errorHandler;
        if (existingErrorHandler === errorHandler) {
          return;
        }
        if (_Vue.config.errorHandler && !hasWarned) {
          warn("Global error handler detected (Vue.config.errorHandler). \n" + "Vue Test Utils sets a custom error handler to throw errors " + "thrown by instances. If you want this behavior in " + "your tests, you must remove the global error handler.");
          hasWarned = true;
        } else {
          _Vue.config.errorHandler = errorHandler;
        }
      }
      function normalizeStubs(stubs) {
        if (stubs === void 0) stubs = {};
        if (stubs === false) {
          return false;
        }
        if (isPlainObject(stubs)) {
          return stubs;
        }
        if (Array.isArray(stubs)) {
          return stubs.reduce(function (acc, stub) {
            if (typeof stub !== "string") {
              throwError("each item in an options.stubs array must be a string");
            }
            acc[stub] = true;
            return acc;
          }, {});
        }
        throwError("options.stubs must be an object or an Array");
      }
      function normalizeProvide(provide) {
        if (typeof provide === "object" && VUE_VERSION < 2.5) {
          var obj = Object.assign({}, provide);
          return function () {
            return obj;
          };
        }
        return provide;
      }
      function getOption(option, config) {
        if (option === false) {
          return false;
        }
        if (option || config && Object.keys(config).length > 0) {
          if (option instanceof Function) {
            return option;
          }
          if (config instanceof Function) {
            throw new Error("Config can't be a Function.");
          }
          return Object.assign({}, config, option);
        }
      }
      function getStubs(stubs, configStubs) {
        var normalizedStubs = normalizeStubs(stubs);
        var normalizedConfigStubs = normalizeStubs(configStubs);
        return getOption(normalizedStubs, normalizedConfigStubs);
      }
      function mergeOptions(options, config) {
        var mocks = getOption(options.mocks, config.mocks);
        var methods = getOption(options.methods, config.methods);
        if (methods && Object.keys(methods).length) {
          warnDeprecated("overwriting methods via the `methods` property", "There is no clear migration path for the `methods` property - Vue does not support arbitrarily replacement of methods, nor should VTU. To stub a complex method extract it from the component and test it in isolation. Otherwise, the suggestion is to rethink those tests");
        }
        var provide = getOption(options.provide, config.provide);
        var stubs = getStubs(options.stubs, config.stubs);
        return Object.assign({}, options, {
          provide: normalizeProvide(provide),
          stubs: stubs,
          mocks: mocks,
          methods: methods
        });
      }
      var config = {
        stubs: {
          transition: true,
          "transition-group": true
        },
        mocks: {},
        methods: {},
        provide: {},
        showDeprecationWarnings: true
      };
      function warnIfNoWindow() {
        if (typeof window === "undefined") {
          throwError("window is undefined, vue-test-utils needs to be " + "run in a browser environment. \n" + "You can run the tests in node using jsdom \n" + "See https://vue-test-utils.vuejs.org/guides/#browser-environment " + "for more details.");
        }
      }
      function polyfill() {
        if (!Element.prototype.matches) {
          Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        }
      }
      function OutputLine(parent) {
        this.__parent = parent;
        this.__character_count = 0;
        this.__indent_count = -1;
        this.__alignment_count = 0;
        this.__wrap_point_index = 0;
        this.__wrap_point_character_count = 0;
        this.__wrap_point_indent_count = -1;
        this.__wrap_point_alignment_count = 0;
        this.__items = [];
      }
      OutputLine.prototype.clone_empty = function () {
        var line = new OutputLine(this.__parent);
        line.set_indent(this.__indent_count, this.__alignment_count);
        return line;
      };
      OutputLine.prototype.item = function (index) {
        if (index < 0) {
          return this.__items[this.__items.length + index];
        } else {
          return this.__items[index];
        }
      };
      OutputLine.prototype.has_match = function (pattern) {
        for (var lastCheckedOutput = this.__items.length - 1; lastCheckedOutput >= 0; lastCheckedOutput--) {
          if (this.__items[lastCheckedOutput].match(pattern)) {
            return true;
          }
        }
        return false;
      };
      OutputLine.prototype.set_indent = function (indent, alignment) {
        if (this.is_empty()) {
          this.__indent_count = indent || 0;
          this.__alignment_count = alignment || 0;
          this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count);
        }
      };
      OutputLine.prototype._set_wrap_point = function () {
        if (this.__parent.wrap_line_length) {
          this.__wrap_point_index = this.__items.length;
          this.__wrap_point_character_count = this.__character_count;
          this.__wrap_point_indent_count = this.__parent.next_line.__indent_count;
          this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count;
        }
      };
      OutputLine.prototype._should_wrap = function () {
        return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
      };
      OutputLine.prototype._allow_wrap = function () {
        if (this._should_wrap()) {
          this.__parent.add_new_line();
          var next = this.__parent.current_line;
          next.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count);
          next.__items = this.__items.slice(this.__wrap_point_index);
          this.__items = this.__items.slice(0, this.__wrap_point_index);
          next.__character_count += this.__character_count - this.__wrap_point_character_count;
          this.__character_count = this.__wrap_point_character_count;
          if (next.__items[0] === " ") {
            next.__items.splice(0, 1);
            next.__character_count -= 1;
          }
          return true;
        }
        return false;
      };
      OutputLine.prototype.is_empty = function () {
        return this.__items.length === 0;
      };
      OutputLine.prototype.last = function () {
        if (!this.is_empty()) {
          return this.__items[this.__items.length - 1];
        } else {
          return null;
        }
      };
      OutputLine.prototype.push = function (item) {
        this.__items.push(item);
        var last_newline_index = item.lastIndexOf("\n");
        if (last_newline_index !== -1) {
          this.__character_count = item.length - last_newline_index;
        } else {
          this.__character_count += item.length;
        }
      };
      OutputLine.prototype.pop = function () {
        var item = null;
        if (!this.is_empty()) {
          item = this.__items.pop();
          this.__character_count -= item.length;
        }
        return item;
      };
      OutputLine.prototype._remove_indent = function () {
        if (this.__indent_count > 0) {
          this.__indent_count -= 1;
          this.__character_count -= this.__parent.indent_size;
        }
      };
      OutputLine.prototype._remove_wrap_indent = function () {
        if (this.__wrap_point_indent_count > 0) {
          this.__wrap_point_indent_count -= 1;
        }
      };
      OutputLine.prototype.trim = function () {
        while (this.last() === " ") {
          this.__items.pop();
          this.__character_count -= 1;
        }
      };
      OutputLine.prototype.toString = function () {
        var result = "";
        if (this.is_empty()) {
          if (this.__parent.indent_empty_lines) {
            result = this.__parent.get_indent_string(this.__indent_count);
          }
        } else {
          result = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count);
          result += this.__items.join("");
        }
        return result;
      };
      function IndentStringCache(options, baseIndentString) {
        this.__cache = [""];
        this.__indent_size = options.indent_size;
        this.__indent_string = options.indent_char;
        if (!options.indent_with_tabs) {
          this.__indent_string = new Array(options.indent_size + 1).join(options.indent_char);
        }
        baseIndentString = baseIndentString || "";
        if (options.indent_level > 0) {
          baseIndentString = new Array(options.indent_level + 1).join(this.__indent_string);
        }
        this.__base_string = baseIndentString;
        this.__base_string_length = baseIndentString.length;
      }
      IndentStringCache.prototype.get_indent_size = function (indent, column) {
        var result = this.__base_string_length;
        column = column || 0;
        if (indent < 0) {
          result = 0;
        }
        result += indent * this.__indent_size;
        result += column;
        return result;
      };
      IndentStringCache.prototype.get_indent_string = function (indent_level, column) {
        var result = this.__base_string;
        column = column || 0;
        if (indent_level < 0) {
          indent_level = 0;
          result = "";
        }
        column += indent_level * this.__indent_size;
        this.__ensure_cache(column);
        result += this.__cache[column];
        return result;
      };
      IndentStringCache.prototype.__ensure_cache = function (column) {
        while (column >= this.__cache.length) {
          this.__add_column();
        }
      };
      IndentStringCache.prototype.__add_column = function () {
        var column = this.__cache.length;
        var indent = 0;
        var result = "";
        if (this.__indent_size && column >= this.__indent_size) {
          indent = Math.floor(column / this.__indent_size);
          column -= indent * this.__indent_size;
          result = new Array(indent + 1).join(this.__indent_string);
        }
        if (column) {
          result += new Array(column + 1).join(" ");
        }
        this.__cache.push(result);
      };
      function Output(options, baseIndentString) {
        this.__indent_cache = new IndentStringCache(options, baseIndentString);
        this.raw = false;
        this._end_with_newline = options.end_with_newline;
        this.indent_size = options.indent_size;
        this.wrap_line_length = options.wrap_line_length;
        this.indent_empty_lines = options.indent_empty_lines;
        this.__lines = [];
        this.previous_line = null;
        this.current_line = null;
        this.next_line = new OutputLine(this);
        this.space_before_token = false;
        this.non_breaking_space = false;
        this.previous_token_wrapped = false;
        this.__add_outputline();
      }
      Output.prototype.__add_outputline = function () {
        this.previous_line = this.current_line;
        this.current_line = this.next_line.clone_empty();
        this.__lines.push(this.current_line);
      };
      Output.prototype.get_line_number = function () {
        return this.__lines.length;
      };
      Output.prototype.get_indent_string = function (indent, column) {
        return this.__indent_cache.get_indent_string(indent, column);
      };
      Output.prototype.get_indent_size = function (indent, column) {
        return this.__indent_cache.get_indent_size(indent, column);
      };
      Output.prototype.is_empty = function () {
        return !this.previous_line && this.current_line.is_empty();
      };
      Output.prototype.add_new_line = function (force_newline) {
        if (this.is_empty() || !force_newline && this.just_added_newline()) {
          return false;
        }
        if (!this.raw) {
          this.__add_outputline();
        }
        return true;
      };
      Output.prototype.get_code = function (eol) {
        this.trim(true);
        var last_item = this.current_line.pop();
        if (last_item) {
          if (last_item[last_item.length - 1] === "\n") {
            last_item = last_item.replace(/\n+$/g, "");
          }
          this.current_line.push(last_item);
        }
        if (this._end_with_newline) {
          this.__add_outputline();
        }
        var sweet_code = this.__lines.join("\n");
        if (eol !== "\n") {
          sweet_code = sweet_code.replace(/[\n]/g, eol);
        }
        return sweet_code;
      };
      Output.prototype.set_wrap_point = function () {
        this.current_line._set_wrap_point();
      };
      Output.prototype.set_indent = function (indent, alignment) {
        indent = indent || 0;
        alignment = alignment || 0;
        this.next_line.set_indent(indent, alignment);
        if (this.__lines.length > 1) {
          this.current_line.set_indent(indent, alignment);
          return true;
        }
        this.current_line.set_indent();
        return false;
      };
      Output.prototype.add_raw_token = function (token) {
        for (var x = 0; x < token.newlines; x++) {
          this.__add_outputline();
        }
        this.current_line.set_indent(-1);
        this.current_line.push(token.whitespace_before);
        this.current_line.push(token.text);
        this.space_before_token = false;
        this.non_breaking_space = false;
        this.previous_token_wrapped = false;
      };
      Output.prototype.add_token = function (printable_token) {
        this.__add_space_before_token();
        this.current_line.push(printable_token);
        this.space_before_token = false;
        this.non_breaking_space = false;
        this.previous_token_wrapped = this.current_line._allow_wrap();
      };
      Output.prototype.__add_space_before_token = function () {
        if (this.space_before_token && !this.just_added_newline()) {
          if (!this.non_breaking_space) {
            this.set_wrap_point();
          }
          this.current_line.push(" ");
        }
      };
      Output.prototype.remove_indent = function (index) {
        var output_length = this.__lines.length;
        while (index < output_length) {
          this.__lines[index]._remove_indent();
          index++;
        }
        this.current_line._remove_wrap_indent();
      };
      Output.prototype.trim = function (eat_newlines) {
        eat_newlines = eat_newlines === undefined ? false : eat_newlines;
        this.current_line.trim();
        while (eat_newlines && this.__lines.length > 1 && this.current_line.is_empty()) {
          this.__lines.pop();
          this.current_line = this.__lines[this.__lines.length - 1];
          this.current_line.trim();
        }
        this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
      };
      Output.prototype.just_added_newline = function () {
        return this.current_line.is_empty();
      };
      Output.prototype.just_added_blankline = function () {
        return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
      };
      Output.prototype.ensure_empty_line_above = function (starts_with, ends_with) {
        var index = this.__lines.length - 2;
        while (index >= 0) {
          var potentialEmptyLine = this.__lines[index];
          if (potentialEmptyLine.is_empty()) {
            break;
          } else if (potentialEmptyLine.item(0).indexOf(starts_with) !== 0 && potentialEmptyLine.item(-1) !== ends_with) {
            this.__lines.splice(index + 1, 0, new OutputLine(this));
            this.previous_line = this.__lines[this.__lines.length - 2];
            break;
          }
          index--;
        }
      };
      var Output_1 = Output;
      var output = {
        Output: Output_1
      };
      function Token(type, text, newlines, whitespace_before) {
        this.type = type;
        this.text = text;
        this.comments_before = null;
        this.newlines = newlines || 0;
        this.whitespace_before = whitespace_before || "";
        this.parent = null;
        this.next = null;
        this.previous = null;
        this.opened = null;
        this.closed = null;
        this.directives = null;
      }
      var Token_1 = Token;
      var token = {
        Token: Token_1
      };
      var acorn = createCommonjsModule(function (module, exports) {
        var baseASCIIidentifierStartChars = "\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a";
        var baseASCIIidentifierChars = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a";
        var nonASCIIidentifierStartChars = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc";
        var nonASCIIidentifierChars = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f";
        var identifierStart = "(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierStartChars + nonASCIIidentifierStartChars + "])";
        var identifierChars = "(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])*";
        exports.identifier = new RegExp(identifierStart + identifierChars, "g");
        exports.identifierStart = new RegExp(identifierStart);
        exports.identifierMatch = new RegExp("(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])+");
        exports.newline = /[\n\r\u2028\u2029]/;
        exports.lineBreak = new RegExp("\r\n|" + exports.newline.source);
        exports.allLineBreaks = new RegExp(exports.lineBreak.source, "g");
      });
      function Options(options, merge_child_field) {
        this.raw_options = _mergeOpts(options, merge_child_field);
        this.disabled = this._get_boolean("disabled");
        this.eol = this._get_characters("eol", "auto");
        this.end_with_newline = this._get_boolean("end_with_newline");
        this.indent_size = this._get_number("indent_size", 4);
        this.indent_char = this._get_characters("indent_char", " ");
        this.indent_level = this._get_number("indent_level");
        this.preserve_newlines = this._get_boolean("preserve_newlines", true);
        this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786);
        if (!this.preserve_newlines) {
          this.max_preserve_newlines = 0;
        }
        this.indent_with_tabs = this._get_boolean("indent_with_tabs", this.indent_char === "\t");
        if (this.indent_with_tabs) {
          this.indent_char = "\t";
          if (this.indent_size === 1) {
            this.indent_size = 4;
          }
        }
        this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char"));
        this.indent_empty_lines = this._get_boolean("indent_empty_lines");
        this.templating = this._get_selection_list("templating", ["auto", "none", "django", "erb", "handlebars", "php"], ["auto"]);
      }
      Options.prototype._get_array = function (name, default_value) {
        var option_value = this.raw_options[name];
        var result = default_value || [];
        if (typeof option_value === "object") {
          if (option_value !== null && typeof option_value.concat === "function") {
            result = option_value.concat();
          }
        } else if (typeof option_value === "string") {
          result = option_value.split(/[^a-zA-Z0-9_\/\-]+/);
        }
        return result;
      };
      Options.prototype._get_boolean = function (name, default_value) {
        var option_value = this.raw_options[name];
        var result = option_value === undefined ? !!default_value : !!option_value;
        return result;
      };
      Options.prototype._get_characters = function (name, default_value) {
        var option_value = this.raw_options[name];
        var result = default_value || "";
        if (typeof option_value === "string") {
          result = option_value.replace(/\\r/, "\r").replace(/\\n/, "\n").replace(/\\t/, "\t");
        }
        return result;
      };
      Options.prototype._get_number = function (name, default_value) {
        var option_value = this.raw_options[name];
        default_value = parseInt(default_value, 10);
        if (isNaN(default_value)) {
          default_value = 0;
        }
        var result = parseInt(option_value, 10);
        if (isNaN(result)) {
          result = default_value;
        }
        return result;
      };
      Options.prototype._get_selection = function (name, selection_list, default_value) {
        var result = this._get_selection_list(name, selection_list, default_value);
        if (result.length !== 1) {
          throw new Error("Invalid Option Value: The option '" + name + "' can only be one of the following values:\n" + selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
        }
        return result[0];
      };
      Options.prototype._get_selection_list = function (name, selection_list, default_value) {
        if (!selection_list || selection_list.length === 0) {
          throw new Error("Selection list cannot be empty.");
        }
        default_value = default_value || [selection_list[0]];
        if (!this._is_valid_selection(default_value, selection_list)) {
          throw new Error("Invalid Default Value!");
        }
        var result = this._get_array(name, default_value);
        if (!this._is_valid_selection(result, selection_list)) {
          throw new Error("Invalid Option Value: The option '" + name + "' can contain only the following values:\n" + selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
        }
        return result;
      };
      Options.prototype._is_valid_selection = function (result, selection_list) {
        return result.length && selection_list.length && !result.some(function (item) {
          return selection_list.indexOf(item) === -1;
        });
      };
      function _mergeOpts(allOptions, childFieldName) {
        var finalOpts = {};
        allOptions = _normalizeOpts(allOptions);
        var name;
        for (name in allOptions) {
          if (name !== childFieldName) {
            finalOpts[name] = allOptions[name];
          }
        }
        if (childFieldName && allOptions[childFieldName]) {
          for (name in allOptions[childFieldName]) {
            finalOpts[name] = allOptions[childFieldName][name];
          }
        }
        return finalOpts;
      }
      function _normalizeOpts(options) {
        var convertedOpts = {};
        var key;
        for (key in options) {
          var newKey = key.replace(/-/g, "_");
          convertedOpts[newKey] = options[key];
        }
        return convertedOpts;
      }
      var Options_1 = Options;
      var normalizeOpts = _normalizeOpts;
      var mergeOpts = _mergeOpts;
      var options = {
        Options: Options_1,
        normalizeOpts: normalizeOpts,
        mergeOpts: mergeOpts
      };
      var BaseOptions = options.Options;
      var validPositionValues = ["before-newline", "after-newline", "preserve-newline"];
      function Options$1(options) {
        BaseOptions.call(this, options, "js");
        var raw_brace_style = this.raw_options.brace_style || null;
        if (raw_brace_style === "expand-strict") {
          this.raw_options.brace_style = "expand";
        } else if (raw_brace_style === "collapse-preserve-inline") {
          this.raw_options.brace_style = "collapse,preserve-inline";
        } else if (this.raw_options.braces_on_own_line !== undefined) {
          this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse";
        }
        var brace_style_split = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
        this.brace_preserve_inline = false;
        this.brace_style = "collapse";
        for (var bs = 0; bs < brace_style_split.length; bs++) {
          if (brace_style_split[bs] === "preserve-inline") {
            this.brace_preserve_inline = true;
          } else {
            this.brace_style = brace_style_split[bs];
          }
        }
        this.unindent_chained_methods = this._get_boolean("unindent_chained_methods");
        this.break_chained_methods = this._get_boolean("break_chained_methods");
        this.space_in_paren = this._get_boolean("space_in_paren");
        this.space_in_empty_paren = this._get_boolean("space_in_empty_paren");
        this.jslint_happy = this._get_boolean("jslint_happy");
        this.space_after_anon_function = this._get_boolean("space_after_anon_function");
        this.space_after_named_function = this._get_boolean("space_after_named_function");
        this.keep_array_indentation = this._get_boolean("keep_array_indentation");
        this.space_before_conditional = this._get_boolean("space_before_conditional", true);
        this.unescape_strings = this._get_boolean("unescape_strings");
        this.e4x = this._get_boolean("e4x");
        this.comma_first = this._get_boolean("comma_first");
        this.operator_position = this._get_selection("operator_position", validPositionValues);
        this.test_output_raw = this._get_boolean("test_output_raw");
        if (this.jslint_happy) {
          this.space_after_anon_function = true;
        }
      }
      Options$1.prototype = new BaseOptions();
      var Options_1$1 = Options$1;
      var options$1 = {
        Options: Options_1$1
      };
      var regexp_has_sticky = RegExp.prototype.hasOwnProperty("sticky");
      function InputScanner(input_string) {
        this.__input = input_string || "";
        this.__input_length = this.__input.length;
        this.__position = 0;
      }
      InputScanner.prototype.restart = function () {
        this.__position = 0;
      };
      InputScanner.prototype.back = function () {
        if (this.__position > 0) {
          this.__position -= 1;
        }
      };
      InputScanner.prototype.hasNext = function () {
        return this.__position < this.__input_length;
      };
      InputScanner.prototype.next = function () {
        var val = null;
        if (this.hasNext()) {
          val = this.__input.charAt(this.__position);
          this.__position += 1;
        }
        return val;
      };
      InputScanner.prototype.peek = function (index) {
        var val = null;
        index = index || 0;
        index += this.__position;
        if (index >= 0 && index < this.__input_length) {
          val = this.__input.charAt(index);
        }
        return val;
      };
      InputScanner.prototype.__match = function (pattern, index) {
        pattern.lastIndex = index;
        var pattern_match = pattern.exec(this.__input);
        if (pattern_match && !(regexp_has_sticky && pattern.sticky)) {
          if (pattern_match.index !== index) {
            pattern_match = null;
          }
        }
        return pattern_match;
      };
      InputScanner.prototype.test = function (pattern, index) {
        index = index || 0;
        index += this.__position;
        if (index >= 0 && index < this.__input_length) {
          return !!this.__match(pattern, index);
        } else {
          return false;
        }
      };
      InputScanner.prototype.testChar = function (pattern, index) {
        var val = this.peek(index);
        pattern.lastIndex = 0;
        return val !== null && pattern.test(val);
      };
      InputScanner.prototype.match = function (pattern) {
        var pattern_match = this.__match(pattern, this.__position);
        if (pattern_match) {
          this.__position += pattern_match[0].length;
        } else {
          pattern_match = null;
        }
        return pattern_match;
      };
      InputScanner.prototype.read = function (starting_pattern, until_pattern, until_after) {
        var val = "";
        var match;
        if (starting_pattern) {
          match = this.match(starting_pattern);
          if (match) {
            val += match[0];
          }
        }
        if (until_pattern && (match || !starting_pattern)) {
          val += this.readUntil(until_pattern, until_after);
        }
        return val;
      };
      InputScanner.prototype.readUntil = function (pattern, until_after) {
        var val = "";
        var match_index = this.__position;
        pattern.lastIndex = this.__position;
        var pattern_match = pattern.exec(this.__input);
        if (pattern_match) {
          match_index = pattern_match.index;
          if (until_after) {
            match_index += pattern_match[0].length;
          }
        } else {
          match_index = this.__input_length;
        }
        val = this.__input.substring(this.__position, match_index);
        this.__position = match_index;
        return val;
      };
      InputScanner.prototype.readUntilAfter = function (pattern) {
        return this.readUntil(pattern, true);
      };
      InputScanner.prototype.get_regexp = function (pattern, match_from) {
        var result = null;
        var flags = "g";
        if (match_from && regexp_has_sticky) {
          flags = "y";
        }
        if (typeof pattern === "string" && pattern !== "") {
          result = new RegExp(pattern, flags);
        } else if (pattern) {
          result = new RegExp(pattern.source, flags);
        }
        return result;
      };
      InputScanner.prototype.get_literal_regexp = function (literal_string) {
        return RegExp(literal_string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
      };
      InputScanner.prototype.peekUntilAfter = function (pattern) {
        var start = this.__position;
        var val = this.readUntilAfter(pattern);
        this.__position = start;
        return val;
      };
      InputScanner.prototype.lookBack = function (testVal) {
        var start = this.__position - 1;
        return start >= testVal.length && this.__input.substring(start - testVal.length, start).toLowerCase() === testVal;
      };
      var InputScanner_1 = InputScanner;
      var inputscanner = {
        InputScanner: InputScanner_1
      };
      function TokenStream(parent_token) {
        this.__tokens = [];
        this.__tokens_length = this.__tokens.length;
        this.__position = 0;
        this.__parent_token = parent_token;
      }
      TokenStream.prototype.restart = function () {
        this.__position = 0;
      };
      TokenStream.prototype.isEmpty = function () {
        return this.__tokens_length === 0;
      };
      TokenStream.prototype.hasNext = function () {
        return this.__position < this.__tokens_length;
      };
      TokenStream.prototype.next = function () {
        var val = null;
        if (this.hasNext()) {
          val = this.__tokens[this.__position];
          this.__position += 1;
        }
        return val;
      };
      TokenStream.prototype.peek = function (index) {
        var val = null;
        index = index || 0;
        index += this.__position;
        if (index >= 0 && index < this.__tokens_length) {
          val = this.__tokens[index];
        }
        return val;
      };
      TokenStream.prototype.add = function (token) {
        if (this.__parent_token) {
          token.parent = this.__parent_token;
        }
        this.__tokens.push(token);
        this.__tokens_length += 1;
      };
      var TokenStream_1 = TokenStream;
      var tokenstream = {
        TokenStream: TokenStream_1
      };
      function Pattern(input_scanner, parent) {
        this._input = input_scanner;
        this._starting_pattern = null;
        this._match_pattern = null;
        this._until_pattern = null;
        this._until_after = false;
        if (parent) {
          this._starting_pattern = this._input.get_regexp(parent._starting_pattern, true);
          this._match_pattern = this._input.get_regexp(parent._match_pattern, true);
          this._until_pattern = this._input.get_regexp(parent._until_pattern);
          this._until_after = parent._until_after;
        }
      }
      Pattern.prototype.read = function () {
        var result = this._input.read(this._starting_pattern);
        if (!this._starting_pattern || result) {
          result += this._input.read(this._match_pattern, this._until_pattern, this._until_after);
        }
        return result;
      };
      Pattern.prototype.read_match = function () {
        return this._input.match(this._match_pattern);
      };
      Pattern.prototype.until_after = function (pattern) {
        var result = this._create();
        result._until_after = true;
        result._until_pattern = this._input.get_regexp(pattern);
        result._update();
        return result;
      };
      Pattern.prototype.until = function (pattern) {
        var result = this._create();
        result._until_after = false;
        result._until_pattern = this._input.get_regexp(pattern);
        result._update();
        return result;
      };
      Pattern.prototype.starting_with = function (pattern) {
        var result = this._create();
        result._starting_pattern = this._input.get_regexp(pattern, true);
        result._update();
        return result;
      };
      Pattern.prototype.matching = function (pattern) {
        var result = this._create();
        result._match_pattern = this._input.get_regexp(pattern, true);
        result._update();
        return result;
      };
      Pattern.prototype._create = function () {
        return new Pattern(this._input, this);
      };
      Pattern.prototype._update = function () {};
      var Pattern_1 = Pattern;
      var pattern = {
        Pattern: Pattern_1
      };
      var Pattern$1 = pattern.Pattern;
      function WhitespacePattern(input_scanner, parent) {
        Pattern$1.call(this, input_scanner, parent);
        if (parent) {
          this._line_regexp = this._input.get_regexp(parent._line_regexp);
        } else {
          this.__set_whitespace_patterns("", "");
        }
        this.newline_count = 0;
        this.whitespace_before_token = "";
      }
      WhitespacePattern.prototype = new Pattern$1();
      WhitespacePattern.prototype.__set_whitespace_patterns = function (whitespace_chars, newline_chars) {
        whitespace_chars += "\\t ";
        newline_chars += "\\n\\r";
        this._match_pattern = this._input.get_regexp("[" + whitespace_chars + newline_chars + "]+", true);
        this._newline_regexp = this._input.get_regexp("\\r\\n|[" + newline_chars + "]");
      };
      WhitespacePattern.prototype.read = function () {
        this.newline_count = 0;
        this.whitespace_before_token = "";
        var resulting_string = this._input.read(this._match_pattern);
        if (resulting_string === " ") {
          this.whitespace_before_token = " ";
        } else if (resulting_string) {
          var matches = this.__split(this._newline_regexp, resulting_string);
          this.newline_count = matches.length - 1;
          this.whitespace_before_token = matches[this.newline_count];
        }
        return resulting_string;
      };
      WhitespacePattern.prototype.matching = function (whitespace_chars, newline_chars) {
        var result = this._create();
        result.__set_whitespace_patterns(whitespace_chars, newline_chars);
        result._update();
        return result;
      };
      WhitespacePattern.prototype._create = function () {
        return new WhitespacePattern(this._input, this);
      };
      WhitespacePattern.prototype.__split = function (regexp, input_string) {
        regexp.lastIndex = 0;
        var start_index = 0;
        var result = [];
        var next_match = regexp.exec(input_string);
        while (next_match) {
          result.push(input_string.substring(start_index, next_match.index));
          start_index = next_match.index + next_match[0].length;
          next_match = regexp.exec(input_string);
        }
        if (start_index < input_string.length) {
          result.push(input_string.substring(start_index, input_string.length));
        } else {
          result.push("");
        }
        return result;
      };
      var WhitespacePattern_1 = WhitespacePattern;
      var whitespacepattern = {
        WhitespacePattern: WhitespacePattern_1
      };
      var InputScanner$1 = inputscanner.InputScanner;
      var Token$1 = token.Token;
      var TokenStream$1 = tokenstream.TokenStream;
      var WhitespacePattern$1 = whitespacepattern.WhitespacePattern;
      var TOKEN = {
        START: "TK_START",
        RAW: "TK_RAW",
        EOF: "TK_EOF"
      };
      var Tokenizer = function (input_string, options) {
        this._input = new InputScanner$1(input_string);
        this._options = options || ({});
        this.__tokens = null;
        this._patterns = {};
        this._patterns.whitespace = new WhitespacePattern$1(this._input);
      };
      Tokenizer.prototype.tokenize = function () {
        this._input.restart();
        this.__tokens = new TokenStream$1();
        this._reset();
        var current;
        var previous = new Token$1(TOKEN.START, "");
        var open_token = null;
        var open_stack = [];
        var comments = new TokenStream$1();
        while (previous.type !== TOKEN.EOF) {
          current = this._get_next_token(previous, open_token);
          while (this._is_comment(current)) {
            comments.add(current);
            current = this._get_next_token(previous, open_token);
          }
          if (!comments.isEmpty()) {
            current.comments_before = comments;
            comments = new TokenStream$1();
          }
          current.parent = open_token;
          if (this._is_opening(current)) {
            open_stack.push(open_token);
            open_token = current;
          } else if (open_token && this._is_closing(current, open_token)) {
            current.opened = open_token;
            open_token.closed = current;
            open_token = open_stack.pop();
            current.parent = open_token;
          }
          current.previous = previous;
          previous.next = current;
          this.__tokens.add(current);
          previous = current;
        }
        return this.__tokens;
      };
      Tokenizer.prototype._is_first_token = function () {
        return this.__tokens.isEmpty();
      };
      Tokenizer.prototype._reset = function () {};
      Tokenizer.prototype._get_next_token = function (previous_token, open_token) {
        this._readWhitespace();
        var resulting_string = this._input.read(/.+/g);
        if (resulting_string) {
          return this._create_token(TOKEN.RAW, resulting_string);
        } else {
          return this._create_token(TOKEN.EOF, "");
        }
      };
      Tokenizer.prototype._is_comment = function (current_token) {
        return false;
      };
      Tokenizer.prototype._is_opening = function (current_token) {
        return false;
      };
      Tokenizer.prototype._is_closing = function (current_token, open_token) {
        return false;
      };
      Tokenizer.prototype._create_token = function (type, text) {
        var token = new Token$1(type, text, this._patterns.whitespace.newline_count, this._patterns.whitespace.whitespace_before_token);
        return token;
      };
      Tokenizer.prototype._readWhitespace = function () {
        return this._patterns.whitespace.read();
      };
      var Tokenizer_1 = Tokenizer;
      var TOKEN_1 = TOKEN;
      var tokenizer = {
        Tokenizer: Tokenizer_1,
        TOKEN: TOKEN_1
      };
      function Directives(start_block_pattern, end_block_pattern) {
        start_block_pattern = typeof start_block_pattern === "string" ? start_block_pattern : start_block_pattern.source;
        end_block_pattern = typeof end_block_pattern === "string" ? end_block_pattern : end_block_pattern.source;
        this.__directives_block_pattern = new RegExp(start_block_pattern + (/ beautify( \w+[:]\w+)+ /).source + end_block_pattern, "g");
        this.__directive_pattern = / (\w+)[:](\w+)/g;
        this.__directives_end_ignore_pattern = new RegExp(start_block_pattern + (/\sbeautify\signore:end\s/).source + end_block_pattern, "g");
      }
      Directives.prototype.get_directives = function (text) {
        if (!text.match(this.__directives_block_pattern)) {
          return null;
        }
        var directives = {};
        this.__directive_pattern.lastIndex = 0;
        var directive_match = this.__directive_pattern.exec(text);
        while (directive_match) {
          directives[directive_match[1]] = directive_match[2];
          directive_match = this.__directive_pattern.exec(text);
        }
        return directives;
      };
      Directives.prototype.readIgnored = function (input) {
        return input.readUntilAfter(this.__directives_end_ignore_pattern);
      };
      var Directives_1 = Directives;
      var directives = {
        Directives: Directives_1
      };
      var Pattern$2 = pattern.Pattern;
      var template_names = {
        django: false,
        erb: false,
        handlebars: false,
        php: false
      };
      function TemplatablePattern(input_scanner, parent) {
        Pattern$2.call(this, input_scanner, parent);
        this.__template_pattern = null;
        this._disabled = Object.assign({}, template_names);
        this._excluded = Object.assign({}, template_names);
        if (parent) {
          this.__template_pattern = this._input.get_regexp(parent.__template_pattern);
          this._excluded = Object.assign(this._excluded, parent._excluded);
          this._disabled = Object.assign(this._disabled, parent._disabled);
        }
        var pattern = new Pattern$2(input_scanner);
        this.__patterns = {
          handlebars_comment: pattern.starting_with(/{{!--/).until_after(/--}}/),
          handlebars: pattern.starting_with(/{{/).until_after(/}}/),
          php: pattern.starting_with(/<\?(?:[=]|php)/).until_after(/\?>/),
          erb: pattern.starting_with(/<%[^%]/).until_after(/[^%]%>/),
          django: pattern.starting_with(/{%/).until_after(/%}/),
          django_value: pattern.starting_with(/{{/).until_after(/}}/),
          django_comment: pattern.starting_with(/{#/).until_after(/#}/)
        };
      }
      TemplatablePattern.prototype = new Pattern$2();
      TemplatablePattern.prototype._create = function () {
        return new TemplatablePattern(this._input, this);
      };
      TemplatablePattern.prototype._update = function () {
        this.__set_templated_pattern();
      };
      TemplatablePattern.prototype.disable = function (language) {
        var result = this._create();
        result._disabled[language] = true;
        result._update();
        return result;
      };
      TemplatablePattern.prototype.read_options = function (options) {
        var result = this._create();
        for (var language in template_names) {
          result._disabled[language] = options.templating.indexOf(language) === -1;
        }
        result._update();
        return result;
      };
      TemplatablePattern.prototype.exclude = function (language) {
        var result = this._create();
        result._excluded[language] = true;
        result._update();
        return result;
      };
      TemplatablePattern.prototype.read = function () {
        var result = "";
        if (this._match_pattern) {
          result = this._input.read(this._starting_pattern);
        } else {
          result = this._input.read(this._starting_pattern, this.__template_pattern);
        }
        var next = this._read_template();
        while (next) {
          if (this._match_pattern) {
            next += this._input.read(this._match_pattern);
          } else {
            next += this._input.readUntil(this.__template_pattern);
          }
          result += next;
          next = this._read_template();
        }
        if (this._until_after) {
          result += this._input.readUntilAfter(this._until_pattern);
        }
        return result;
      };
      TemplatablePattern.prototype.__set_templated_pattern = function () {
        var items = [];
        if (!this._disabled.php) {
          items.push(this.__patterns.php._starting_pattern.source);
        }
        if (!this._disabled.handlebars) {
          items.push(this.__patterns.handlebars._starting_pattern.source);
        }
        if (!this._disabled.erb) {
          items.push(this.__patterns.erb._starting_pattern.source);
        }
        if (!this._disabled.django) {
          items.push(this.__patterns.django._starting_pattern.source);
          items.push(this.__patterns.django_value._starting_pattern.source);
          items.push(this.__patterns.django_comment._starting_pattern.source);
        }
        if (this._until_pattern) {
          items.push(this._until_pattern.source);
        }
        this.__template_pattern = this._input.get_regexp("(?:" + items.join("|") + ")");
      };
      TemplatablePattern.prototype._read_template = function () {
        var resulting_string = "";
        var c = this._input.peek();
        if (c === "<") {
          var peek1 = this._input.peek(1);
          if (!this._disabled.php && !this._excluded.php && peek1 === "?") {
            resulting_string = resulting_string || this.__patterns.php.read();
          }
          if (!this._disabled.erb && !this._excluded.erb && peek1 === "%") {
            resulting_string = resulting_string || this.__patterns.erb.read();
          }
        } else if (c === "{") {
          if (!this._disabled.handlebars && !this._excluded.handlebars) {
            resulting_string = resulting_string || this.__patterns.handlebars_comment.read();
            resulting_string = resulting_string || this.__patterns.handlebars.read();
          }
          if (!this._disabled.django) {
            if (!this._excluded.django && !this._excluded.handlebars) {
              resulting_string = resulting_string || this.__patterns.django_value.read();
            }
            if (!this._excluded.django) {
              resulting_string = resulting_string || this.__patterns.django_comment.read();
              resulting_string = resulting_string || this.__patterns.django.read();
            }
          }
        }
        return resulting_string;
      };
      var TemplatablePattern_1 = TemplatablePattern;
      var templatablepattern = {
        TemplatablePattern: TemplatablePattern_1
      };
      var InputScanner$2 = inputscanner.InputScanner;
      var BaseTokenizer = tokenizer.Tokenizer;
      var BASETOKEN = tokenizer.TOKEN;
      var Directives$1 = directives.Directives;
      var Pattern$3 = pattern.Pattern;
      var TemplatablePattern$1 = templatablepattern.TemplatablePattern;
      function in_array(what, arr) {
        return arr.indexOf(what) !== -1;
      }
      var TOKEN$1 = {
        START_EXPR: "TK_START_EXPR",
        END_EXPR: "TK_END_EXPR",
        START_BLOCK: "TK_START_BLOCK",
        END_BLOCK: "TK_END_BLOCK",
        WORD: "TK_WORD",
        RESERVED: "TK_RESERVED",
        SEMICOLON: "TK_SEMICOLON",
        STRING: "TK_STRING",
        EQUALS: "TK_EQUALS",
        OPERATOR: "TK_OPERATOR",
        COMMA: "TK_COMMA",
        BLOCK_COMMENT: "TK_BLOCK_COMMENT",
        COMMENT: "TK_COMMENT",
        DOT: "TK_DOT",
        UNKNOWN: "TK_UNKNOWN",
        START: BASETOKEN.START,
        RAW: BASETOKEN.RAW,
        EOF: BASETOKEN.EOF
      };
      var directives_core = new Directives$1(/\/\*/, /\*\//);
      var number_pattern = /0[xX][0123456789abcdefABCDEF]*|0[oO][01234567]*|0[bB][01]*|\d+n|(?:\.\d+|\d+\.?\d*)(?:[eE][+-]?\d+)?/;
      var digit = /[0-9]/;
      var dot_pattern = /[^\d\.]/;
      var positionable_operators = (">>> === !== " + "<< && >= ** != == <= >> || " + "< / - + > : & % ? ^ | *").split(" ");
      var punct = ">>>= " + "... >>= <<= === >>> !== **= " + "=> ^= :: /= << <= == && -= >= >> != -- += ** || ++ %= &= *= |= " + "= ! ? > < : / ^ - + * & % ~ |";
      punct = punct.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
      punct = punct.replace(/ /g, "|");
      var punct_pattern = new RegExp(punct);
      var line_starters = ("continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export").split(",");
      var reserved_words = line_starters.concat(["do", "in", "of", "else", "get", "set", "new", "catch", "finally", "typeof", "yield", "async", "await", "from", "as"]);
      var reserved_word_pattern = new RegExp("^(?:" + reserved_words.join("|") + ")$");
      var in_html_comment;
      var Tokenizer$1 = function (input_string, options) {
        BaseTokenizer.call(this, input_string, options);
        this._patterns.whitespace = this._patterns.whitespace.matching((/\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/).source, (/\u2028\u2029/).source);
        var pattern_reader = new Pattern$3(this._input);
        var templatable = new TemplatablePattern$1(this._input).read_options(this._options);
        this.__patterns = {
          template: templatable,
          identifier: templatable.starting_with(acorn.identifier).matching(acorn.identifierMatch),
          number: pattern_reader.matching(number_pattern),
          punct: pattern_reader.matching(punct_pattern),
          comment: pattern_reader.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
          block_comment: pattern_reader.starting_with(/\/\*/).until_after(/\*\//),
          html_comment_start: pattern_reader.matching(/<!--/),
          html_comment_end: pattern_reader.matching(/-->/),
          include: pattern_reader.starting_with(/#include/).until_after(acorn.lineBreak),
          shebang: pattern_reader.starting_with(/#!/).until_after(acorn.lineBreak),
          xml: pattern_reader.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/),
          single_quote: templatable.until(/['\\\n\r\u2028\u2029]/),
          double_quote: templatable.until(/["\\\n\r\u2028\u2029]/),
          template_text: templatable.until(/[`\\$]/),
          template_expression: templatable.until(/[`}\\]/)
        };
      };
      Tokenizer$1.prototype = new BaseTokenizer();
      Tokenizer$1.prototype._is_comment = function (current_token) {
        return current_token.type === TOKEN$1.COMMENT || current_token.type === TOKEN$1.BLOCK_COMMENT || current_token.type === TOKEN$1.UNKNOWN;
      };
      Tokenizer$1.prototype._is_opening = function (current_token) {
        return current_token.type === TOKEN$1.START_BLOCK || current_token.type === TOKEN$1.START_EXPR;
      };
      Tokenizer$1.prototype._is_closing = function (current_token, open_token) {
        return (current_token.type === TOKEN$1.END_BLOCK || current_token.type === TOKEN$1.END_EXPR) && (open_token && (current_token.text === "]" && open_token.text === "[" || current_token.text === ")" && open_token.text === "(" || current_token.text === "}" && open_token.text === "{"));
      };
      Tokenizer$1.prototype._reset = function () {
        in_html_comment = false;
      };
      Tokenizer$1.prototype._get_next_token = function (previous_token, open_token) {
        var token = null;
        this._readWhitespace();
        var c = this._input.peek();
        if (c === null) {
          return this._create_token(TOKEN$1.EOF, "");
        }
        token = token || this._read_string(c);
        token = token || this._read_word(previous_token);
        token = token || this._read_singles(c);
        token = token || this._read_comment(c);
        token = token || this._read_regexp(c, previous_token);
        token = token || this._read_xml(c, previous_token);
        token = token || this._read_non_javascript(c);
        token = token || this._read_punctuation();
        token = token || this._create_token(TOKEN$1.UNKNOWN, this._input.next());
        return token;
      };
      Tokenizer$1.prototype._read_word = function (previous_token) {
        var resulting_string;
        resulting_string = this.__patterns.identifier.read();
        if (resulting_string !== "") {
          resulting_string = resulting_string.replace(acorn.allLineBreaks, "\n");
          if (!(previous_token.type === TOKEN$1.DOT || previous_token.type === TOKEN$1.RESERVED && (previous_token.text === "set" || previous_token.text === "get")) && reserved_word_pattern.test(resulting_string)) {
            if (resulting_string === "in" || resulting_string === "of") {
              return this._create_token(TOKEN$1.OPERATOR, resulting_string);
            }
            return this._create_token(TOKEN$1.RESERVED, resulting_string);
          }
          return this._create_token(TOKEN$1.WORD, resulting_string);
        }
        resulting_string = this.__patterns.number.read();
        if (resulting_string !== "") {
          return this._create_token(TOKEN$1.WORD, resulting_string);
        }
      };
      Tokenizer$1.prototype._read_singles = function (c) {
        var token = null;
        if (c === "(" || c === "[") {
          token = this._create_token(TOKEN$1.START_EXPR, c);
        } else if (c === ")" || c === "]") {
          token = this._create_token(TOKEN$1.END_EXPR, c);
        } else if (c === "{") {
          token = this._create_token(TOKEN$1.START_BLOCK, c);
        } else if (c === "}") {
          token = this._create_token(TOKEN$1.END_BLOCK, c);
        } else if (c === ";") {
          token = this._create_token(TOKEN$1.SEMICOLON, c);
        } else if (c === "." && dot_pattern.test(this._input.peek(1))) {
          token = this._create_token(TOKEN$1.DOT, c);
        } else if (c === ",") {
          token = this._create_token(TOKEN$1.COMMA, c);
        }
        if (token) {
          this._input.next();
        }
        return token;
      };
      Tokenizer$1.prototype._read_punctuation = function () {
        var resulting_string = this.__patterns.punct.read();
        if (resulting_string !== "") {
          if (resulting_string === "=") {
            return this._create_token(TOKEN$1.EQUALS, resulting_string);
          } else {
            return this._create_token(TOKEN$1.OPERATOR, resulting_string);
          }
        }
      };
      Tokenizer$1.prototype._read_non_javascript = function (c) {
        var resulting_string = "";
        if (c === "#") {
          if (this._is_first_token()) {
            resulting_string = this.__patterns.shebang.read();
            if (resulting_string) {
              return this._create_token(TOKEN$1.UNKNOWN, resulting_string.trim() + "\n");
            }
          }
          resulting_string = this.__patterns.include.read();
          if (resulting_string) {
            return this._create_token(TOKEN$1.UNKNOWN, resulting_string.trim() + "\n");
          }
          c = this._input.next();
          var sharp = "#";
          if (this._input.hasNext() && this._input.testChar(digit)) {
            do {
              c = this._input.next();
              sharp += c;
            } while (this._input.hasNext() && c !== "#" && c !== "=");
            if (c === "#") ; else if (this._input.peek() === "[" && this._input.peek(1) === "]") {
              sharp += "[]";
              this._input.next();
              this._input.next();
            } else if (this._input.peek() === "{" && this._input.peek(1) === "}") {
              sharp += "{}";
              this._input.next();
              this._input.next();
            }
            return this._create_token(TOKEN$1.WORD, sharp);
          }
          this._input.back();
        } else if (c === "<" && this._is_first_token()) {
          resulting_string = this.__patterns.html_comment_start.read();
          if (resulting_string) {
            while (this._input.hasNext() && !this._input.testChar(acorn.newline)) {
              resulting_string += this._input.next();
            }
            in_html_comment = true;
            return this._create_token(TOKEN$1.COMMENT, resulting_string);
          }
        } else if (in_html_comment && c === "-") {
          resulting_string = this.__patterns.html_comment_end.read();
          if (resulting_string) {
            in_html_comment = false;
            return this._create_token(TOKEN$1.COMMENT, resulting_string);
          }
        }
        return null;
      };
      Tokenizer$1.prototype._read_comment = function (c) {
        var token = null;
        if (c === "/") {
          var comment = "";
          if (this._input.peek(1) === "*") {
            comment = this.__patterns.block_comment.read();
            var directives = directives_core.get_directives(comment);
            if (directives && directives.ignore === "start") {
              comment += directives_core.readIgnored(this._input);
            }
            comment = comment.replace(acorn.allLineBreaks, "\n");
            token = this._create_token(TOKEN$1.BLOCK_COMMENT, comment);
            token.directives = directives;
          } else if (this._input.peek(1) === "/") {
            comment = this.__patterns.comment.read();
            token = this._create_token(TOKEN$1.COMMENT, comment);
          }
        }
        return token;
      };
      Tokenizer$1.prototype._read_string = function (c) {
        if (c === "`" || c === "'" || c === "\"") {
          var resulting_string = this._input.next();
          this.has_char_escapes = false;
          if (c === "`") {
            resulting_string += this._read_string_recursive("`", true, "${");
          } else {
            resulting_string += this._read_string_recursive(c);
          }
          if (this.has_char_escapes && this._options.unescape_strings) {
            resulting_string = unescape_string(resulting_string);
          }
          if (this._input.peek() === c) {
            resulting_string += this._input.next();
          }
          resulting_string = resulting_string.replace(acorn.allLineBreaks, "\n");
          return this._create_token(TOKEN$1.STRING, resulting_string);
        }
        return null;
      };
      Tokenizer$1.prototype._allow_regexp_or_xml = function (previous_token) {
        return previous_token.type === TOKEN$1.RESERVED && in_array(previous_token.text, ["return", "case", "throw", "else", "do", "typeof", "yield"]) || previous_token.type === TOKEN$1.END_EXPR && previous_token.text === ")" && previous_token.opened.previous.type === TOKEN$1.RESERVED && in_array(previous_token.opened.previous.text, ["if", "while", "for"]) || in_array(previous_token.type, [TOKEN$1.COMMENT, TOKEN$1.START_EXPR, TOKEN$1.START_BLOCK, TOKEN$1.START, TOKEN$1.END_BLOCK, TOKEN$1.OPERATOR, TOKEN$1.EQUALS, TOKEN$1.EOF, TOKEN$1.SEMICOLON, TOKEN$1.COMMA]);
      };
      Tokenizer$1.prototype._read_regexp = function (c, previous_token) {
        if (c === "/" && this._allow_regexp_or_xml(previous_token)) {
          var resulting_string = this._input.next();
          var esc = false;
          var in_char_class = false;
          while (this._input.hasNext() && ((esc || in_char_class || this._input.peek() !== c) && !this._input.testChar(acorn.newline))) {
            resulting_string += this._input.peek();
            if (!esc) {
              esc = this._input.peek() === "\\";
              if (this._input.peek() === "[") {
                in_char_class = true;
              } else if (this._input.peek() === "]") {
                in_char_class = false;
              }
            } else {
              esc = false;
            }
            this._input.next();
          }
          if (this._input.peek() === c) {
            resulting_string += this._input.next();
            resulting_string += this._input.read(acorn.identifier);
          }
          return this._create_token(TOKEN$1.STRING, resulting_string);
        }
        return null;
      };
      Tokenizer$1.prototype._read_xml = function (c, previous_token) {
        if (this._options.e4x && c === "<" && this._allow_regexp_or_xml(previous_token)) {
          var xmlStr = "";
          var match = this.__patterns.xml.read_match();
          if (match) {
            var rootTag = match[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}");
            var isCurlyRoot = rootTag.indexOf("{") === 0;
            var depth = 0;
            while (match) {
              var isEndTag = !!match[1];
              var tagName = match[2];
              var isSingletonTag = !!match[match.length - 1] || tagName.slice(0, 8) === "![CDATA[";
              if (!isSingletonTag && (tagName === rootTag || isCurlyRoot && tagName.replace(/^{\s+/, "{").replace(/\s+}$/, "}"))) {
                if (isEndTag) {
                  --depth;
                } else {
                  ++depth;
                }
              }
              xmlStr += match[0];
              if (depth <= 0) {
                break;
              }
              match = this.__patterns.xml.read_match();
            }
            if (!match) {
              xmlStr += this._input.match(/[\s\S]*/g)[0];
            }
            xmlStr = xmlStr.replace(acorn.allLineBreaks, "\n");
            return this._create_token(TOKEN$1.STRING, xmlStr);
          }
        }
        return null;
      };
      function unescape_string(s) {
        var out = "", escaped = 0;
        var input_scan = new InputScanner$2(s);
        var matched = null;
        while (input_scan.hasNext()) {
          matched = input_scan.match(/([\s]|[^\\]|\\\\)+/g);
          if (matched) {
            out += matched[0];
          }
          if (input_scan.peek() === "\\") {
            input_scan.next();
            if (input_scan.peek() === "x") {
              matched = input_scan.match(/x([0-9A-Fa-f]{2})/g);
            } else if (input_scan.peek() === "u") {
              matched = input_scan.match(/u([0-9A-Fa-f]{4})/g);
            } else {
              out += "\\";
              if (input_scan.hasNext()) {
                out += input_scan.next();
              }
              continue;
            }
            if (!matched) {
              return s;
            }
            escaped = parseInt(matched[1], 16);
            if (escaped > 126 && escaped <= 255 && matched[0].indexOf("x") === 0) {
              return s;
            } else if (escaped >= 0 && escaped < 32) {
              out += "\\" + matched[0];
              continue;
            } else if (escaped === 34 || escaped === 39 || escaped === 92) {
              out += "\\" + String.fromCharCode(escaped);
            } else {
              out += String.fromCharCode(escaped);
            }
          }
        }
        return out;
      }
      Tokenizer$1.prototype._read_string_recursive = function (delimiter, allow_unescaped_newlines, start_sub) {
        var current_char;
        var pattern;
        if (delimiter === "'") {
          pattern = this.__patterns.single_quote;
        } else if (delimiter === "\"") {
          pattern = this.__patterns.double_quote;
        } else if (delimiter === "`") {
          pattern = this.__patterns.template_text;
        } else if (delimiter === "}") {
          pattern = this.__patterns.template_expression;
        }
        var resulting_string = pattern.read();
        var next = "";
        while (this._input.hasNext()) {
          next = this._input.next();
          if (next === delimiter || !allow_unescaped_newlines && acorn.newline.test(next)) {
            this._input.back();
            break;
          } else if (next === "\\" && this._input.hasNext()) {
            current_char = this._input.peek();
            if (current_char === "x" || current_char === "u") {
              this.has_char_escapes = true;
            } else if (current_char === "\r" && this._input.peek(1) === "\n") {
              this._input.next();
            }
            next += this._input.next();
          } else if (start_sub) {
            if (start_sub === "${" && next === "$" && this._input.peek() === "{") {
              next += this._input.next();
            }
            if (start_sub === next) {
              if (delimiter === "`") {
                next += this._read_string_recursive("}", allow_unescaped_newlines, "`");
              } else {
                next += this._read_string_recursive("`", allow_unescaped_newlines, "${");
              }
              if (this._input.hasNext()) {
                next += this._input.next();
              }
            }
          }
          next += pattern.read();
          resulting_string += next;
        }
        return resulting_string;
      };
      var Tokenizer_1$1 = Tokenizer$1;
      var TOKEN_1$1 = TOKEN$1;
      var positionable_operators_1 = positionable_operators.slice();
      var line_starters_1 = line_starters.slice();
      var tokenizer$1 = {
        Tokenizer: Tokenizer_1$1,
        TOKEN: TOKEN_1$1,
        positionable_operators: positionable_operators_1,
        line_starters: line_starters_1
      };
      var Output$1 = output.Output;
      var Token$2 = token.Token;
      var Options$2 = options$1.Options;
      var Tokenizer$2 = tokenizer$1.Tokenizer;
      var line_starters$1 = tokenizer$1.line_starters;
      var positionable_operators$1 = tokenizer$1.positionable_operators;
      var TOKEN$2 = tokenizer$1.TOKEN;
      function in_array$1(what, arr) {
        return arr.indexOf(what) !== -1;
      }
      function ltrim(s) {
        return s.replace(/^\s+/g, "");
      }
      function generateMapFromStrings(list) {
        var result = {};
        for (var x = 0; x < list.length; x++) {
          result[list[x].replace(/-/g, "_")] = list[x];
        }
        return result;
      }
      function reserved_word(token, word) {
        return token && token.type === TOKEN$2.RESERVED && token.text === word;
      }
      function reserved_array(token, words) {
        return token && token.type === TOKEN$2.RESERVED && in_array$1(token.text, words);
      }
      var special_words = ["case", "return", "do", "if", "throw", "else", "await", "break", "continue", "async"];
      var validPositionValues$1 = ["before-newline", "after-newline", "preserve-newline"];
      var OPERATOR_POSITION = generateMapFromStrings(validPositionValues$1);
      var OPERATOR_POSITION_BEFORE_OR_PRESERVE = [OPERATOR_POSITION.before_newline, OPERATOR_POSITION.preserve_newline];
      var MODE = {
        BlockStatement: "BlockStatement",
        Statement: "Statement",
        ObjectLiteral: "ObjectLiteral",
        ArrayLiteral: "ArrayLiteral",
        ForInitializer: "ForInitializer",
        Conditional: "Conditional",
        Expression: "Expression"
      };
      function remove_redundant_indentation(output, frame) {
        if (frame.multiline_frame || frame.mode === MODE.ForInitializer || frame.mode === MODE.Conditional) {
          return;
        }
        output.remove_indent(frame.start_line_index);
      }
      function split_linebreaks(s) {
        s = s.replace(acorn.allLineBreaks, "\n");
        var out = [], idx = s.indexOf("\n");
        while (idx !== -1) {
          out.push(s.substring(0, idx));
          s = s.substring(idx + 1);
          idx = s.indexOf("\n");
        }
        if (s.length) {
          out.push(s);
        }
        return out;
      }
      function is_array(mode) {
        return mode === MODE.ArrayLiteral;
      }
      function is_expression(mode) {
        return in_array$1(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
      }
      function all_lines_start_with(lines, c) {
        for (var i = 0; i < lines.length; i++) {
          var line = lines[i].trim();
          if (line.charAt(0) !== c) {
            return false;
          }
        }
        return true;
      }
      function each_line_matches_indent(lines, indent) {
        var i = 0, len = lines.length, line;
        for (; i < len; i++) {
          line = lines[i];
          if (line && line.indexOf(indent) !== 0) {
            return false;
          }
        }
        return true;
      }
      function Beautifier(source_text, options) {
        options = options || ({});
        this._source_text = source_text || "";
        this._output = null;
        this._tokens = null;
        this._last_last_text = null;
        this._flags = null;
        this._previous_flags = null;
        this._flag_store = null;
        this._options = new Options$2(options);
      }
      Beautifier.prototype.create_flags = function (flags_base, mode) {
        var next_indent_level = 0;
        if (flags_base) {
          next_indent_level = flags_base.indentation_level;
          if (!this._output.just_added_newline() && flags_base.line_indent_level > next_indent_level) {
            next_indent_level = flags_base.line_indent_level;
          }
        }
        var next_flags = {
          mode: mode,
          parent: flags_base,
          last_token: flags_base ? flags_base.last_token : new Token$2(TOKEN$2.START_BLOCK, ""),
          last_word: flags_base ? flags_base.last_word : "",
          declaration_statement: false,
          declaration_assignment: false,
          multiline_frame: false,
          inline_frame: false,
          if_block: false,
          else_block: false,
          do_block: false,
          do_while: false,
          import_block: false,
          in_case_statement: false,
          in_case: false,
          case_body: false,
          indentation_level: next_indent_level,
          alignment: 0,
          line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
          start_line_index: this._output.get_line_number(),
          ternary_depth: 0
        };
        return next_flags;
      };
      Beautifier.prototype._reset = function (source_text) {
        var baseIndentString = source_text.match(/^[\t ]*/)[0];
        this._last_last_text = "";
        this._output = new Output$1(this._options, baseIndentString);
        this._output.raw = this._options.test_output_raw;
        this._flag_store = [];
        this.set_mode(MODE.BlockStatement);
        var tokenizer = new Tokenizer$2(source_text, this._options);
        this._tokens = tokenizer.tokenize();
        return source_text;
      };
      Beautifier.prototype.beautify = function () {
        if (this._options.disabled) {
          return this._source_text;
        }
        var sweet_code;
        var source_text = this._reset(this._source_text);
        var eol = this._options.eol;
        if (this._options.eol === "auto") {
          eol = "\n";
          if (source_text && acorn.lineBreak.test(source_text || "")) {
            eol = source_text.match(acorn.lineBreak)[0];
          }
        }
        var current_token = this._tokens.next();
        while (current_token) {
          this.handle_token(current_token);
          this._last_last_text = this._flags.last_token.text;
          this._flags.last_token = current_token;
          current_token = this._tokens.next();
        }
        sweet_code = this._output.get_code(eol);
        return sweet_code;
      };
      Beautifier.prototype.handle_token = function (current_token, preserve_statement_flags) {
        if (current_token.type === TOKEN$2.START_EXPR) {
          this.handle_start_expr(current_token);
        } else if (current_token.type === TOKEN$2.END_EXPR) {
          this.handle_end_expr(current_token);
        } else if (current_token.type === TOKEN$2.START_BLOCK) {
          this.handle_start_block(current_token);
        } else if (current_token.type === TOKEN$2.END_BLOCK) {
          this.handle_end_block(current_token);
        } else if (current_token.type === TOKEN$2.WORD) {
          this.handle_word(current_token);
        } else if (current_token.type === TOKEN$2.RESERVED) {
          this.handle_word(current_token);
        } else if (current_token.type === TOKEN$2.SEMICOLON) {
          this.handle_semicolon(current_token);
        } else if (current_token.type === TOKEN$2.STRING) {
          this.handle_string(current_token);
        } else if (current_token.type === TOKEN$2.EQUALS) {
          this.handle_equals(current_token);
        } else if (current_token.type === TOKEN$2.OPERATOR) {
          this.handle_operator(current_token);
        } else if (current_token.type === TOKEN$2.COMMA) {
          this.handle_comma(current_token);
        } else if (current_token.type === TOKEN$2.BLOCK_COMMENT) {
          this.handle_block_comment(current_token, preserve_statement_flags);
        } else if (current_token.type === TOKEN$2.COMMENT) {
          this.handle_comment(current_token, preserve_statement_flags);
        } else if (current_token.type === TOKEN$2.DOT) {
          this.handle_dot(current_token);
        } else if (current_token.type === TOKEN$2.EOF) {
          this.handle_eof(current_token);
        } else if (current_token.type === TOKEN$2.UNKNOWN) {
          this.handle_unknown(current_token, preserve_statement_flags);
        } else {
          this.handle_unknown(current_token, preserve_statement_flags);
        }
      };
      Beautifier.prototype.handle_whitespace_and_comments = function (current_token, preserve_statement_flags) {
        var newlines = current_token.newlines;
        var keep_whitespace = this._options.keep_array_indentation && is_array(this._flags.mode);
        if (current_token.comments_before) {
          var comment_token = current_token.comments_before.next();
          while (comment_token) {
            this.handle_whitespace_and_comments(comment_token, preserve_statement_flags);
            this.handle_token(comment_token, preserve_statement_flags);
            comment_token = current_token.comments_before.next();
          }
        }
        if (keep_whitespace) {
          for (var i = 0; i < newlines; i += 1) {
            this.print_newline(i > 0, preserve_statement_flags);
          }
        } else {
          if (this._options.max_preserve_newlines && newlines > this._options.max_preserve_newlines) {
            newlines = this._options.max_preserve_newlines;
          }
          if (this._options.preserve_newlines) {
            if (newlines > 1) {
              this.print_newline(false, preserve_statement_flags);
              for (var j = 1; j < newlines; j += 1) {
                this.print_newline(true, preserve_statement_flags);
              }
            }
          }
        }
      };
      var newline_restricted_tokens = ["async", "break", "continue", "return", "throw", "yield"];
      Beautifier.prototype.allow_wrap_or_preserved_newline = function (current_token, force_linewrap) {
        force_linewrap = force_linewrap === undefined ? false : force_linewrap;
        if (this._output.just_added_newline()) {
          return;
        }
        var shouldPreserveOrForce = this._options.preserve_newlines && current_token.newlines || force_linewrap;
        var operatorLogicApplies = in_array$1(this._flags.last_token.text, positionable_operators$1) || in_array$1(current_token.text, positionable_operators$1);
        if (operatorLogicApplies) {
          var shouldPrintOperatorNewline = in_array$1(this._flags.last_token.text, positionable_operators$1) && in_array$1(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE) || in_array$1(current_token.text, positionable_operators$1);
          shouldPreserveOrForce = shouldPreserveOrForce && shouldPrintOperatorNewline;
        }
        if (shouldPreserveOrForce) {
          this.print_newline(false, true);
        } else if (this._options.wrap_line_length) {
          if (reserved_array(this._flags.last_token, newline_restricted_tokens)) {
            return;
          }
          this._output.set_wrap_point();
        }
      };
      Beautifier.prototype.print_newline = function (force_newline, preserve_statement_flags) {
        if (!preserve_statement_flags) {
          if (this._flags.last_token.text !== ";" && this._flags.last_token.text !== "," && this._flags.last_token.text !== "=" && (this._flags.last_token.type !== TOKEN$2.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++")) {
            var next_token = this._tokens.peek();
            while (this._flags.mode === MODE.Statement && !(this._flags.if_block && reserved_word(next_token, "else")) && !this._flags.do_block) {
              this.restore_mode();
            }
          }
        }
        if (this._output.add_new_line(force_newline)) {
          this._flags.multiline_frame = true;
        }
      };
      Beautifier.prototype.print_token_line_indentation = function (current_token) {
        if (this._output.just_added_newline()) {
          if (this._options.keep_array_indentation && current_token.newlines && (current_token.text === "[" || is_array(this._flags.mode))) {
            this._output.current_line.set_indent(-1);
            this._output.current_line.push(current_token.whitespace_before);
            this._output.space_before_token = false;
          } else if (this._output.set_indent(this._flags.indentation_level, this._flags.alignment)) {
            this._flags.line_indent_level = this._flags.indentation_level;
          }
        }
      };
      Beautifier.prototype.print_token = function (current_token) {
        if (this._output.raw) {
          this._output.add_raw_token(current_token);
          return;
        }
        if (this._options.comma_first && current_token.previous && current_token.previous.type === TOKEN$2.COMMA && this._output.just_added_newline()) {
          if (this._output.previous_line.last() === ",") {
            var popped = this._output.previous_line.pop();
            if (this._output.previous_line.is_empty()) {
              this._output.previous_line.push(popped);
              this._output.trim(true);
              this._output.current_line.pop();
              this._output.trim();
            }
            this.print_token_line_indentation(current_token);
            this._output.add_token(",");
            this._output.space_before_token = true;
          }
        }
        this.print_token_line_indentation(current_token);
        this._output.non_breaking_space = true;
        this._output.add_token(current_token.text);
        if (this._output.previous_token_wrapped) {
          this._flags.multiline_frame = true;
        }
      };
      Beautifier.prototype.indent = function () {
        this._flags.indentation_level += 1;
        this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
      };
      Beautifier.prototype.deindent = function () {
        if (this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level)) {
          this._flags.indentation_level -= 1;
          this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
        }
      };
      Beautifier.prototype.set_mode = function (mode) {
        if (this._flags) {
          this._flag_store.push(this._flags);
          this._previous_flags = this._flags;
        } else {
          this._previous_flags = this.create_flags(null, mode);
        }
        this._flags = this.create_flags(this._previous_flags, mode);
        this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
      };
      Beautifier.prototype.restore_mode = function () {
        if (this._flag_store.length > 0) {
          this._previous_flags = this._flags;
          this._flags = this._flag_store.pop();
          if (this._previous_flags.mode === MODE.Statement) {
            remove_redundant_indentation(this._output, this._previous_flags);
          }
          this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
        }
      };
      Beautifier.prototype.start_of_object_property = function () {
        return this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || reserved_array(this._flags.last_token, ["get", "set"]));
      };
      Beautifier.prototype.start_of_statement = function (current_token) {
        var start = false;
        start = start || reserved_array(this._flags.last_token, ["var", "let", "const"]) && current_token.type === TOKEN$2.WORD;
        start = start || reserved_word(this._flags.last_token, "do");
        start = start || !(this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement) && reserved_array(this._flags.last_token, newline_restricted_tokens) && !current_token.newlines;
        start = start || reserved_word(this._flags.last_token, "else") && !(reserved_word(current_token, "if") && !current_token.comments_before);
        start = start || this._flags.last_token.type === TOKEN$2.END_EXPR && (this._previous_flags.mode === MODE.ForInitializer || this._previous_flags.mode === MODE.Conditional);
        start = start || this._flags.last_token.type === TOKEN$2.WORD && this._flags.mode === MODE.BlockStatement && !this._flags.in_case && !(current_token.text === "--" || current_token.text === "++") && this._last_last_text !== "function" && current_token.type !== TOKEN$2.WORD && current_token.type !== TOKEN$2.RESERVED;
        start = start || this._flags.mode === MODE.ObjectLiteral && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || reserved_array(this._flags.last_token, ["get", "set"]));
        if (start) {
          this.set_mode(MODE.Statement);
          this.indent();
          this.handle_whitespace_and_comments(current_token, true);
          if (!this.start_of_object_property()) {
            this.allow_wrap_or_preserved_newline(current_token, reserved_array(current_token, ["do", "for", "if", "while"]));
          }
          return true;
        }
        return false;
      };
      Beautifier.prototype.handle_start_expr = function (current_token) {
        if (!this.start_of_statement(current_token)) {
          this.handle_whitespace_and_comments(current_token);
        }
        var next_mode = MODE.Expression;
        if (current_token.text === "[") {
          if (this._flags.last_token.type === TOKEN$2.WORD || this._flags.last_token.text === ")") {
            if (reserved_array(this._flags.last_token, line_starters$1)) {
              this._output.space_before_token = true;
            }
            this.print_token(current_token);
            this.set_mode(next_mode);
            this.indent();
            if (this._options.space_in_paren) {
              this._output.space_before_token = true;
            }
            return;
          }
          next_mode = MODE.ArrayLiteral;
          if (is_array(this._flags.mode)) {
            if (this._flags.last_token.text === "[" || this._flags.last_token.text === "," && (this._last_last_text === "]" || this._last_last_text === "}")) {
              if (!this._options.keep_array_indentation) {
                this.print_newline();
              }
            }
          }
          if (!in_array$1(this._flags.last_token.type, [TOKEN$2.START_EXPR, TOKEN$2.END_EXPR, TOKEN$2.WORD, TOKEN$2.OPERATOR])) {
            this._output.space_before_token = true;
          }
        } else {
          if (this._flags.last_token.type === TOKEN$2.RESERVED) {
            if (this._flags.last_token.text === "for") {
              this._output.space_before_token = this._options.space_before_conditional;
              next_mode = MODE.ForInitializer;
            } else if (in_array$1(this._flags.last_token.text, ["if", "while"])) {
              this._output.space_before_token = this._options.space_before_conditional;
              next_mode = MODE.Conditional;
            } else if (in_array$1(this._flags.last_word, ["await", "async"])) {
              this._output.space_before_token = true;
            } else if (this._flags.last_token.text === "import" && current_token.whitespace_before === "") {
              this._output.space_before_token = false;
            } else if (in_array$1(this._flags.last_token.text, line_starters$1) || this._flags.last_token.text === "catch") {
              this._output.space_before_token = true;
            }
          } else if (this._flags.last_token.type === TOKEN$2.EQUALS || this._flags.last_token.type === TOKEN$2.OPERATOR) {
            if (!this.start_of_object_property()) {
              this.allow_wrap_or_preserved_newline(current_token);
            }
          } else if (this._flags.last_token.type === TOKEN$2.WORD) {
            this._output.space_before_token = false;
            var peek_back_two = this._tokens.peek(-3);
            if (this._options.space_after_named_function && peek_back_two) {
              var peek_back_three = this._tokens.peek(-4);
              if (reserved_array(peek_back_two, ["async", "function"]) || peek_back_two.text === "*" && reserved_array(peek_back_three, ["async", "function"])) {
                this._output.space_before_token = true;
              } else if (this._flags.mode === MODE.ObjectLiteral) {
                if (peek_back_two.text === "{" || peek_back_two.text === "," || peek_back_two.text === "*" && (peek_back_three.text === "{" || peek_back_three.text === ",")) {
                  this._output.space_before_token = true;
                }
              }
            }
          } else {
            this.allow_wrap_or_preserved_newline(current_token);
          }
          if (this._flags.last_token.type === TOKEN$2.RESERVED && (this._flags.last_word === "function" || this._flags.last_word === "typeof") || this._flags.last_token.text === "*" && (in_array$1(this._last_last_text, ["function", "yield"]) || this._flags.mode === MODE.ObjectLiteral && in_array$1(this._last_last_text, ["{", ","]))) {
            this._output.space_before_token = this._options.space_after_anon_function;
          }
        }
        if (this._flags.last_token.text === ";" || this._flags.last_token.type === TOKEN$2.START_BLOCK) {
          this.print_newline();
        } else if (this._flags.last_token.type === TOKEN$2.END_EXPR || this._flags.last_token.type === TOKEN$2.START_EXPR || this._flags.last_token.type === TOKEN$2.END_BLOCK || this._flags.last_token.text === "." || this._flags.last_token.type === TOKEN$2.COMMA) {
          this.allow_wrap_or_preserved_newline(current_token, current_token.newlines);
        }
        this.print_token(current_token);
        this.set_mode(next_mode);
        if (this._options.space_in_paren) {
          this._output.space_before_token = true;
        }
        this.indent();
      };
      Beautifier.prototype.handle_end_expr = function (current_token) {
        while (this._flags.mode === MODE.Statement) {
          this.restore_mode();
        }
        this.handle_whitespace_and_comments(current_token);
        if (this._flags.multiline_frame) {
          this.allow_wrap_or_preserved_newline(current_token, current_token.text === "]" && is_array(this._flags.mode) && !this._options.keep_array_indentation);
        }
        if (this._options.space_in_paren) {
          if (this._flags.last_token.type === TOKEN$2.START_EXPR && !this._options.space_in_empty_paren) {
            this._output.trim();
            this._output.space_before_token = false;
          } else {
            this._output.space_before_token = true;
          }
        }
        this.deindent();
        this.print_token(current_token);
        this.restore_mode();
        remove_redundant_indentation(this._output, this._previous_flags);
        if (this._flags.do_while && this._previous_flags.mode === MODE.Conditional) {
          this._previous_flags.mode = MODE.Expression;
          this._flags.do_block = false;
          this._flags.do_while = false;
        }
      };
      Beautifier.prototype.handle_start_block = function (current_token) {
        this.handle_whitespace_and_comments(current_token);
        var next_token = this._tokens.peek();
        var second_token = this._tokens.peek(1);
        if (this._flags.last_word === "switch" && this._flags.last_token.type === TOKEN$2.END_EXPR) {
          this.set_mode(MODE.BlockStatement);
          this._flags.in_case_statement = true;
        } else if (this._flags.case_body) {
          this.set_mode(MODE.BlockStatement);
        } else if (second_token && (in_array$1(second_token.text, [":", ","]) && in_array$1(next_token.type, [TOKEN$2.STRING, TOKEN$2.WORD, TOKEN$2.RESERVED]) || in_array$1(next_token.text, ["get", "set", "..."]) && in_array$1(second_token.type, [TOKEN$2.WORD, TOKEN$2.RESERVED]))) {
          if (!in_array$1(this._last_last_text, ["class", "interface"])) {
            this.set_mode(MODE.ObjectLiteral);
          } else {
            this.set_mode(MODE.BlockStatement);
          }
        } else if (this._flags.last_token.type === TOKEN$2.OPERATOR && this._flags.last_token.text === "=>") {
          this.set_mode(MODE.BlockStatement);
        } else if (in_array$1(this._flags.last_token.type, [TOKEN$2.EQUALS, TOKEN$2.START_EXPR, TOKEN$2.COMMA, TOKEN$2.OPERATOR]) || reserved_array(this._flags.last_token, ["return", "throw", "import", "default"])) {
          this.set_mode(MODE.ObjectLiteral);
        } else {
          this.set_mode(MODE.BlockStatement);
        }
        var empty_braces = !next_token.comments_before && next_token.text === "}";
        var empty_anonymous_function = empty_braces && this._flags.last_word === "function" && this._flags.last_token.type === TOKEN$2.END_EXPR;
        if (this._options.brace_preserve_inline) {
          var index = 0;
          var check_token = null;
          this._flags.inline_frame = true;
          do {
            index += 1;
            check_token = this._tokens.peek(index - 1);
            if (check_token.newlines) {
              this._flags.inline_frame = false;
              break;
            }
          } while (check_token.type !== TOKEN$2.EOF && !(check_token.type === TOKEN$2.END_BLOCK && check_token.opened === current_token));
        }
        if ((this._options.brace_style === "expand" || this._options.brace_style === "none" && current_token.newlines) && !this._flags.inline_frame) {
          if (this._flags.last_token.type !== TOKEN$2.OPERATOR && (empty_anonymous_function || this._flags.last_token.type === TOKEN$2.EQUALS || reserved_array(this._flags.last_token, special_words) && this._flags.last_token.text !== "else")) {
            this._output.space_before_token = true;
          } else {
            this.print_newline(false, true);
          }
        } else {
          if (is_array(this._previous_flags.mode) && (this._flags.last_token.type === TOKEN$2.START_EXPR || this._flags.last_token.type === TOKEN$2.COMMA)) {
            if (this._flags.last_token.type === TOKEN$2.COMMA || this._options.space_in_paren) {
              this._output.space_before_token = true;
            }
            if (this._flags.last_token.type === TOKEN$2.COMMA || this._flags.last_token.type === TOKEN$2.START_EXPR && this._flags.inline_frame) {
              this.allow_wrap_or_preserved_newline(current_token);
              this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame;
              this._flags.multiline_frame = false;
            }
          }
          if (this._flags.last_token.type !== TOKEN$2.OPERATOR && this._flags.last_token.type !== TOKEN$2.START_EXPR) {
            if (this._flags.last_token.type === TOKEN$2.START_BLOCK && !this._flags.inline_frame) {
              this.print_newline();
            } else {
              this._output.space_before_token = true;
            }
          }
        }
        this.print_token(current_token);
        this.indent();
        if (!empty_braces && !(this._options.brace_preserve_inline && this._flags.inline_frame)) {
          this.print_newline();
        }
      };
      Beautifier.prototype.handle_end_block = function (current_token) {
        this.handle_whitespace_and_comments(current_token);
        while (this._flags.mode === MODE.Statement) {
          this.restore_mode();
        }
        var empty_braces = this._flags.last_token.type === TOKEN$2.START_BLOCK;
        if (this._flags.inline_frame && !empty_braces) {
          this._output.space_before_token = true;
        } else if (this._options.brace_style === "expand") {
          if (!empty_braces) {
            this.print_newline();
          }
        } else {
          if (!empty_braces) {
            if (is_array(this._flags.mode) && this._options.keep_array_indentation) {
              this._options.keep_array_indentation = false;
              this.print_newline();
              this._options.keep_array_indentation = true;
            } else {
              this.print_newline();
            }
          }
        }
        this.restore_mode();
        this.print_token(current_token);
      };
      Beautifier.prototype.handle_word = function (current_token) {
        if (current_token.type === TOKEN$2.RESERVED) {
          if (in_array$1(current_token.text, ["set", "get"]) && this._flags.mode !== MODE.ObjectLiteral) {
            current_token.type = TOKEN$2.WORD;
          } else if (current_token.text === "import" && this._tokens.peek().text === "(") {
            current_token.type = TOKEN$2.WORD;
          } else if (in_array$1(current_token.text, ["as", "from"]) && !this._flags.import_block) {
            current_token.type = TOKEN$2.WORD;
          } else if (this._flags.mode === MODE.ObjectLiteral) {
            var next_token = this._tokens.peek();
            if (next_token.text === ":") {
              current_token.type = TOKEN$2.WORD;
            }
          }
        }
        if (this.start_of_statement(current_token)) {
          if (reserved_array(this._flags.last_token, ["var", "let", "const"]) && current_token.type === TOKEN$2.WORD) {
            this._flags.declaration_statement = true;
          }
        } else if (current_token.newlines && !is_expression(this._flags.mode) && (this._flags.last_token.type !== TOKEN$2.OPERATOR || (this._flags.last_token.text === "--" || this._flags.last_token.text === "++")) && this._flags.last_token.type !== TOKEN$2.EQUALS && (this._options.preserve_newlines || !reserved_array(this._flags.last_token, ["var", "let", "const", "set", "get"]))) {
          this.handle_whitespace_and_comments(current_token);
          this.print_newline();
        } else {
          this.handle_whitespace_and_comments(current_token);
        }
        if (this._flags.do_block && !this._flags.do_while) {
          if (reserved_word(current_token, "while")) {
            this._output.space_before_token = true;
            this.print_token(current_token);
            this._output.space_before_token = true;
            this._flags.do_while = true;
            return;
          } else {
            this.print_newline();
            this._flags.do_block = false;
          }
        }
        if (this._flags.if_block) {
          if (!this._flags.else_block && reserved_word(current_token, "else")) {
            this._flags.else_block = true;
          } else {
            while (this._flags.mode === MODE.Statement) {
              this.restore_mode();
            }
            this._flags.if_block = false;
            this._flags.else_block = false;
          }
        }
        if (this._flags.in_case_statement && reserved_array(current_token, ["case", "default"])) {
          this.print_newline();
          if (this._flags.last_token.type !== TOKEN$2.END_BLOCK && (this._flags.case_body || this._options.jslint_happy)) {
            this.deindent();
          }
          this._flags.case_body = false;
          this.print_token(current_token);
          this._flags.in_case = true;
          return;
        }
        if (this._flags.last_token.type === TOKEN$2.COMMA || this._flags.last_token.type === TOKEN$2.START_EXPR || this._flags.last_token.type === TOKEN$2.EQUALS || this._flags.last_token.type === TOKEN$2.OPERATOR) {
          if (!this.start_of_object_property()) {
            this.allow_wrap_or_preserved_newline(current_token);
          }
        }
        if (reserved_word(current_token, "function")) {
          if (in_array$1(this._flags.last_token.text, ["}", ";"]) || this._output.just_added_newline() && !(in_array$1(this._flags.last_token.text, ["(", "[", "{", ":", "=", ","]) || this._flags.last_token.type === TOKEN$2.OPERATOR)) {
            if (!this._output.just_added_blankline() && !current_token.comments_before) {
              this.print_newline();
              this.print_newline(true);
            }
          }
          if (this._flags.last_token.type === TOKEN$2.RESERVED || this._flags.last_token.type === TOKEN$2.WORD) {
            if (reserved_array(this._flags.last_token, ["get", "set", "new", "export"]) || reserved_array(this._flags.last_token, newline_restricted_tokens)) {
              this._output.space_before_token = true;
            } else if (reserved_word(this._flags.last_token, "default") && this._last_last_text === "export") {
              this._output.space_before_token = true;
            } else if (this._flags.last_token.text === "declare") {
              this._output.space_before_token = true;
            } else {
              this.print_newline();
            }
          } else if (this._flags.last_token.type === TOKEN$2.OPERATOR || this._flags.last_token.text === "=") {
            this._output.space_before_token = true;
          } else if (!this._flags.multiline_frame && (is_expression(this._flags.mode) || is_array(this._flags.mode))) ; else {
            this.print_newline();
          }
          this.print_token(current_token);
          this._flags.last_word = current_token.text;
          return;
        }
        var prefix = "NONE";
        if (this._flags.last_token.type === TOKEN$2.END_BLOCK) {
          if (this._previous_flags.inline_frame) {
            prefix = "SPACE";
          } else if (!reserved_array(current_token, ["else", "catch", "finally", "from"])) {
            prefix = "NEWLINE";
          } else {
            if (this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && current_token.newlines) {
              prefix = "NEWLINE";
            } else {
              prefix = "SPACE";
              this._output.space_before_token = true;
            }
          }
        } else if (this._flags.last_token.type === TOKEN$2.SEMICOLON && this._flags.mode === MODE.BlockStatement) {
          prefix = "NEWLINE";
        } else if (this._flags.last_token.type === TOKEN$2.SEMICOLON && is_expression(this._flags.mode)) {
          prefix = "SPACE";
        } else if (this._flags.last_token.type === TOKEN$2.STRING) {
          prefix = "NEWLINE";
        } else if (this._flags.last_token.type === TOKEN$2.RESERVED || this._flags.last_token.type === TOKEN$2.WORD || this._flags.last_token.text === "*" && (in_array$1(this._last_last_text, ["function", "yield"]) || this._flags.mode === MODE.ObjectLiteral && in_array$1(this._last_last_text, ["{", ","]))) {
          prefix = "SPACE";
        } else if (this._flags.last_token.type === TOKEN$2.START_BLOCK) {
          if (this._flags.inline_frame) {
            prefix = "SPACE";
          } else {
            prefix = "NEWLINE";
          }
        } else if (this._flags.last_token.type === TOKEN$2.END_EXPR) {
          this._output.space_before_token = true;
          prefix = "NEWLINE";
        }
        if (reserved_array(current_token, line_starters$1) && this._flags.last_token.text !== ")") {
          if (this._flags.inline_frame || this._flags.last_token.text === "else" || this._flags.last_token.text === "export") {
            prefix = "SPACE";
          } else {
            prefix = "NEWLINE";
          }
        }
        if (reserved_array(current_token, ["else", "catch", "finally"])) {
          if ((!(this._flags.last_token.type === TOKEN$2.END_BLOCK && this._previous_flags.mode === MODE.BlockStatement) || this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && current_token.newlines) && !this._flags.inline_frame) {
            this.print_newline();
          } else {
            this._output.trim(true);
            var line = this._output.current_line;
            if (line.last() !== "}") {
              this.print_newline();
            }
            this._output.space_before_token = true;
          }
        } else if (prefix === "NEWLINE") {
          if (reserved_array(this._flags.last_token, special_words)) {
            this._output.space_before_token = true;
          } else if (this._flags.last_token.text === "declare" && reserved_array(current_token, ["var", "let", "const"])) {
            this._output.space_before_token = true;
          } else if (this._flags.last_token.type !== TOKEN$2.END_EXPR) {
            if ((this._flags.last_token.type !== TOKEN$2.START_EXPR || !reserved_array(current_token, ["var", "let", "const"])) && this._flags.last_token.text !== ":") {
              if (reserved_word(current_token, "if") && reserved_word(current_token.previous, "else")) {
                this._output.space_before_token = true;
              } else {
                this.print_newline();
              }
            }
          } else if (reserved_array(current_token, line_starters$1) && this._flags.last_token.text !== ")") {
            this.print_newline();
          }
        } else if (this._flags.multiline_frame && is_array(this._flags.mode) && this._flags.last_token.text === "," && this._last_last_text === "}") {
          this.print_newline();
        } else if (prefix === "SPACE") {
          this._output.space_before_token = true;
        }
        if (current_token.previous && (current_token.previous.type === TOKEN$2.WORD || current_token.previous.type === TOKEN$2.RESERVED)) {
          this._output.space_before_token = true;
        }
        this.print_token(current_token);
        this._flags.last_word = current_token.text;
        if (current_token.type === TOKEN$2.RESERVED) {
          if (current_token.text === "do") {
            this._flags.do_block = true;
          } else if (current_token.text === "if") {
            this._flags.if_block = true;
          } else if (current_token.text === "import") {
            this._flags.import_block = true;
          } else if (this._flags.import_block && reserved_word(current_token, "from")) {
            this._flags.import_block = false;
          }
        }
      };
      Beautifier.prototype.handle_semicolon = function (current_token) {
        if (this.start_of_statement(current_token)) {
          this._output.space_before_token = false;
        } else {
          this.handle_whitespace_and_comments(current_token);
        }
        var next_token = this._tokens.peek();
        while (this._flags.mode === MODE.Statement && !(this._flags.if_block && reserved_word(next_token, "else")) && !this._flags.do_block) {
          this.restore_mode();
        }
        if (this._flags.import_block) {
          this._flags.import_block = false;
        }
        this.print_token(current_token);
      };
      Beautifier.prototype.handle_string = function (current_token) {
        if (this.start_of_statement(current_token)) {
          this._output.space_before_token = true;
        } else {
          this.handle_whitespace_and_comments(current_token);
          if (this._flags.last_token.type === TOKEN$2.RESERVED || this._flags.last_token.type === TOKEN$2.WORD || this._flags.inline_frame) {
            this._output.space_before_token = true;
          } else if (this._flags.last_token.type === TOKEN$2.COMMA || this._flags.last_token.type === TOKEN$2.START_EXPR || this._flags.last_token.type === TOKEN$2.EQUALS || this._flags.last_token.type === TOKEN$2.OPERATOR) {
            if (!this.start_of_object_property()) {
              this.allow_wrap_or_preserved_newline(current_token);
            }
          } else {
            this.print_newline();
          }
        }
        this.print_token(current_token);
      };
      Beautifier.prototype.handle_equals = function (current_token) {
        if (this.start_of_statement(current_token)) ; else {
          this.handle_whitespace_and_comments(current_token);
        }
        if (this._flags.declaration_statement) {
          this._flags.declaration_assignment = true;
        }
        this._output.space_before_token = true;
        this.print_token(current_token);
        this._output.space_before_token = true;
      };
      Beautifier.prototype.handle_comma = function (current_token) {
        this.handle_whitespace_and_comments(current_token, true);
        this.print_token(current_token);
        this._output.space_before_token = true;
        if (this._flags.declaration_statement) {
          if (is_expression(this._flags.parent.mode)) {
            this._flags.declaration_assignment = false;
          }
          if (this._flags.declaration_assignment) {
            this._flags.declaration_assignment = false;
            this.print_newline(false, true);
          } else if (this._options.comma_first) {
            this.allow_wrap_or_preserved_newline(current_token);
          }
        } else if (this._flags.mode === MODE.ObjectLiteral || this._flags.mode === MODE.Statement && this._flags.parent.mode === MODE.ObjectLiteral) {
          if (this._flags.mode === MODE.Statement) {
            this.restore_mode();
          }
          if (!this._flags.inline_frame) {
            this.print_newline();
          }
        } else if (this._options.comma_first) {
          this.allow_wrap_or_preserved_newline(current_token);
        }
      };
      Beautifier.prototype.handle_operator = function (current_token) {
        var isGeneratorAsterisk = current_token.text === "*" && (reserved_array(this._flags.last_token, ["function", "yield"]) || in_array$1(this._flags.last_token.type, [TOKEN$2.START_BLOCK, TOKEN$2.COMMA, TOKEN$2.END_BLOCK, TOKEN$2.SEMICOLON]));
        var isUnary = in_array$1(current_token.text, ["-", "+"]) && (in_array$1(this._flags.last_token.type, [TOKEN$2.START_BLOCK, TOKEN$2.START_EXPR, TOKEN$2.EQUALS, TOKEN$2.OPERATOR]) || in_array$1(this._flags.last_token.text, line_starters$1) || this._flags.last_token.text === ",");
        if (this.start_of_statement(current_token)) ; else {
          var preserve_statement_flags = !isGeneratorAsterisk;
          this.handle_whitespace_and_comments(current_token, preserve_statement_flags);
        }
        if (reserved_array(this._flags.last_token, special_words)) {
          this._output.space_before_token = true;
          this.print_token(current_token);
          return;
        }
        if (current_token.text === "*" && this._flags.last_token.type === TOKEN$2.DOT) {
          this.print_token(current_token);
          return;
        }
        if (current_token.text === "::") {
          this.print_token(current_token);
          return;
        }
        if (this._flags.last_token.type === TOKEN$2.OPERATOR && in_array$1(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)) {
          this.allow_wrap_or_preserved_newline(current_token);
        }
        if (current_token.text === ":" && this._flags.in_case) {
          this.print_token(current_token);
          this._flags.in_case = false;
          this._flags.case_body = true;
          if (this._tokens.peek().type !== TOKEN$2.START_BLOCK) {
            this.indent();
            this.print_newline();
          } else {
            this._output.space_before_token = true;
          }
          return;
        }
        var space_before = true;
        var space_after = true;
        var in_ternary = false;
        if (current_token.text === ":") {
          if (this._flags.ternary_depth === 0) {
            space_before = false;
          } else {
            this._flags.ternary_depth -= 1;
            in_ternary = true;
          }
        } else if (current_token.text === "?") {
          this._flags.ternary_depth += 1;
        }
        if (!isUnary && !isGeneratorAsterisk && this._options.preserve_newlines && in_array$1(current_token.text, positionable_operators$1)) {
          var isColon = current_token.text === ":";
          var isTernaryColon = isColon && in_ternary;
          var isOtherColon = isColon && !in_ternary;
          switch (this._options.operator_position) {
            case OPERATOR_POSITION.before_newline:
              this._output.space_before_token = !isOtherColon;
              this.print_token(current_token);
              if (!isColon || isTernaryColon) {
                this.allow_wrap_or_preserved_newline(current_token);
              }
              this._output.space_before_token = true;
              return;
            case OPERATOR_POSITION.after_newline:
              this._output.space_before_token = true;
              if (!isColon || isTernaryColon) {
                if (this._tokens.peek().newlines) {
                  this.print_newline(false, true);
                } else {
                  this.allow_wrap_or_preserved_newline(current_token);
                }
              } else {
                this._output.space_before_token = false;
              }
              this.print_token(current_token);
              this._output.space_before_token = true;
              return;
            case OPERATOR_POSITION.preserve_newline:
              if (!isOtherColon) {
                this.allow_wrap_or_preserved_newline(current_token);
              }
              space_before = !(this._output.just_added_newline() || isOtherColon);
              this._output.space_before_token = space_before;
              this.print_token(current_token);
              this._output.space_before_token = true;
              return;
          }
        }
        if (isGeneratorAsterisk) {
          this.allow_wrap_or_preserved_newline(current_token);
          space_before = false;
          var next_token = this._tokens.peek();
          space_after = next_token && in_array$1(next_token.type, [TOKEN$2.WORD, TOKEN$2.RESERVED]);
        } else if (current_token.text === "...") {
          this.allow_wrap_or_preserved_newline(current_token);
          space_before = this._flags.last_token.type === TOKEN$2.START_BLOCK;
          space_after = false;
        } else if (in_array$1(current_token.text, ["--", "++", "!", "~"]) || isUnary) {
          if (this._flags.last_token.type === TOKEN$2.COMMA || this._flags.last_token.type === TOKEN$2.START_EXPR) {
            this.allow_wrap_or_preserved_newline(current_token);
          }
          space_before = false;
          space_after = false;
          if (current_token.newlines && (current_token.text === "--" || current_token.text === "++")) {
            this.print_newline(false, true);
          }
          if (this._flags.last_token.text === ";" && is_expression(this._flags.mode)) {
            space_before = true;
          }
          if (this._flags.last_token.type === TOKEN$2.RESERVED) {
            space_before = true;
          } else if (this._flags.last_token.type === TOKEN$2.END_EXPR) {
            space_before = !(this._flags.last_token.text === "]" && (current_token.text === "--" || current_token.text === "++"));
          } else if (this._flags.last_token.type === TOKEN$2.OPERATOR) {
            space_before = in_array$1(current_token.text, ["--", "-", "++", "+"]) && in_array$1(this._flags.last_token.text, ["--", "-", "++", "+"]);
            if (in_array$1(current_token.text, ["+", "-"]) && in_array$1(this._flags.last_token.text, ["--", "++"])) {
              space_after = true;
            }
          }
          if ((this._flags.mode === MODE.BlockStatement && !this._flags.inline_frame || this._flags.mode === MODE.Statement) && (this._flags.last_token.text === "{" || this._flags.last_token.text === ";")) {
            this.print_newline();
          }
        }
        this._output.space_before_token = this._output.space_before_token || space_before;
        this.print_token(current_token);
        this._output.space_before_token = space_after;
      };
      Beautifier.prototype.handle_block_comment = function (current_token, preserve_statement_flags) {
        if (this._output.raw) {
          this._output.add_raw_token(current_token);
          if (current_token.directives && current_token.directives.preserve === "end") {
            this._output.raw = this._options.test_output_raw;
          }
          return;
        }
        if (current_token.directives) {
          this.print_newline(false, preserve_statement_flags);
          this.print_token(current_token);
          if (current_token.directives.preserve === "start") {
            this._output.raw = true;
          }
          this.print_newline(false, true);
          return;
        }
        if (!acorn.newline.test(current_token.text) && !current_token.newlines) {
          this._output.space_before_token = true;
          this.print_token(current_token);
          this._output.space_before_token = true;
          return;
        } else {
          this.print_block_commment(current_token, preserve_statement_flags);
        }
      };
      Beautifier.prototype.print_block_commment = function (current_token, preserve_statement_flags) {
        var lines = split_linebreaks(current_token.text);
        var j;
        var javadoc = false;
        var starless = false;
        var lastIndent = current_token.whitespace_before;
        var lastIndentLength = lastIndent.length;
        this.print_newline(false, preserve_statement_flags);
        this.print_token_line_indentation(current_token);
        this._output.add_token(lines[0]);
        this.print_newline(false, preserve_statement_flags);
        if (lines.length > 1) {
          lines = lines.slice(1);
          javadoc = all_lines_start_with(lines, "*");
          starless = each_line_matches_indent(lines, lastIndent);
          if (javadoc) {
            this._flags.alignment = 1;
          }
          for (j = 0; j < lines.length; j++) {
            if (javadoc) {
              this.print_token_line_indentation(current_token);
              this._output.add_token(ltrim(lines[j]));
            } else if (starless && lines[j]) {
              this.print_token_line_indentation(current_token);
              this._output.add_token(lines[j].substring(lastIndentLength));
            } else {
              this._output.current_line.set_indent(-1);
              this._output.add_token(lines[j]);
            }
            this.print_newline(false, preserve_statement_flags);
          }
          this._flags.alignment = 0;
        }
      };
      Beautifier.prototype.handle_comment = function (current_token, preserve_statement_flags) {
        if (current_token.newlines) {
          this.print_newline(false, preserve_statement_flags);
        } else {
          this._output.trim(true);
        }
        this._output.space_before_token = true;
        this.print_token(current_token);
        this.print_newline(false, preserve_statement_flags);
      };
      Beautifier.prototype.handle_dot = function (current_token) {
        if (this.start_of_statement(current_token)) ; else {
          this.handle_whitespace_and_comments(current_token, true);
        }
        if (reserved_array(this._flags.last_token, special_words)) {
          this._output.space_before_token = false;
        } else {
          this.allow_wrap_or_preserved_newline(current_token, this._flags.last_token.text === ")" && this._options.break_chained_methods);
        }
        if (this._options.unindent_chained_methods && this._output.just_added_newline()) {
          this.deindent();
        }
        this.print_token(current_token);
      };
      Beautifier.prototype.handle_unknown = function (current_token, preserve_statement_flags) {
        this.print_token(current_token);
        if (current_token.text[current_token.text.length - 1] === "\n") {
          this.print_newline(false, preserve_statement_flags);
        }
      };
      Beautifier.prototype.handle_eof = function (current_token) {
        while (this._flags.mode === MODE.Statement) {
          this.restore_mode();
        }
        this.handle_whitespace_and_comments(current_token);
      };
      var Beautifier_1 = Beautifier;
      var beautifier = {
        Beautifier: Beautifier_1
      };
      var Beautifier$1 = beautifier.Beautifier, Options$3 = options$1.Options;
      function js_beautify(js_source_text, options) {
        var beautifier = new Beautifier$1(js_source_text, options);
        return beautifier.beautify();
      }
      var javascript = js_beautify;
      var defaultOptions = function () {
        return new Options$3();
      };
      javascript.defaultOptions = defaultOptions;
      var BaseOptions$1 = options.Options;
      function Options$4(options) {
        BaseOptions$1.call(this, options, "css");
        this.selector_separator_newline = this._get_boolean("selector_separator_newline", true);
        this.newline_between_rules = this._get_boolean("newline_between_rules", true);
        var space_around_selector_separator = this._get_boolean("space_around_selector_separator");
        this.space_around_combinator = this._get_boolean("space_around_combinator") || space_around_selector_separator;
      }
      Options$4.prototype = new BaseOptions$1();
      var Options_1$2 = Options$4;
      var options$2 = {
        Options: Options_1$2
      };
      var Options$5 = options$2.Options;
      var Output$2 = output.Output;
      var InputScanner$3 = inputscanner.InputScanner;
      var Directives$2 = directives.Directives;
      var directives_core$1 = new Directives$2(/\/\*/, /\*\//);
      var lineBreak = /\r\n|[\r\n]/;
      var allLineBreaks = /\r\n|[\r\n]/g;
      var whitespaceChar = /\s/;
      var whitespacePattern = /(?:\s|\n)+/g;
      var block_comment_pattern = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g;
      var comment_pattern = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
      function Beautifier$2(source_text, options) {
        this._source_text = source_text || "";
        this._options = new Options$5(options);
        this._ch = null;
        this._input = null;
        this.NESTED_AT_RULE = {
          "@page": true,
          "@font-face": true,
          "@keyframes": true,
          "@media": true,
          "@supports": true,
          "@document": true
        };
        this.CONDITIONAL_GROUP_RULE = {
          "@media": true,
          "@supports": true,
          "@document": true
        };
      }
      Beautifier$2.prototype.eatString = function (endChars) {
        var result = "";
        this._ch = this._input.next();
        while (this._ch) {
          result += this._ch;
          if (this._ch === "\\") {
            result += this._input.next();
          } else if (endChars.indexOf(this._ch) !== -1 || this._ch === "\n") {
            break;
          }
          this._ch = this._input.next();
        }
        return result;
      };
      Beautifier$2.prototype.eatWhitespace = function (allowAtLeastOneNewLine) {
        var result = whitespaceChar.test(this._input.peek());
        var isFirstNewLine = true;
        while (whitespaceChar.test(this._input.peek())) {
          this._ch = this._input.next();
          if (allowAtLeastOneNewLine && this._ch === "\n") {
            if (this._options.preserve_newlines || isFirstNewLine) {
              isFirstNewLine = false;
              this._output.add_new_line(true);
            }
          }
        }
        return result;
      };
      Beautifier$2.prototype.foundNestedPseudoClass = function () {
        var openParen = 0;
        var i = 1;
        var ch = this._input.peek(i);
        while (ch) {
          if (ch === "{") {
            return true;
          } else if (ch === "(") {
            openParen += 1;
          } else if (ch === ")") {
            if (openParen === 0) {
              return false;
            }
            openParen -= 1;
          } else if (ch === ";" || ch === "}") {
            return false;
          }
          i++;
          ch = this._input.peek(i);
        }
        return false;
      };
      Beautifier$2.prototype.print_string = function (output_string) {
        this._output.set_indent(this._indentLevel);
        this._output.non_breaking_space = true;
        this._output.add_token(output_string);
      };
      Beautifier$2.prototype.preserveSingleSpace = function (isAfterSpace) {
        if (isAfterSpace) {
          this._output.space_before_token = true;
        }
      };
      Beautifier$2.prototype.indent = function () {
        this._indentLevel++;
      };
      Beautifier$2.prototype.outdent = function () {
        if (this._indentLevel > 0) {
          this._indentLevel--;
        }
      };
      Beautifier$2.prototype.beautify = function () {
        if (this._options.disabled) {
          return this._source_text;
        }
        var source_text = this._source_text;
        var eol = this._options.eol;
        if (eol === "auto") {
          eol = "\n";
          if (source_text && lineBreak.test(source_text || "")) {
            eol = source_text.match(lineBreak)[0];
          }
        }
        source_text = source_text.replace(allLineBreaks, "\n");
        var baseIndentString = source_text.match(/^[\t ]*/)[0];
        this._output = new Output$2(this._options, baseIndentString);
        this._input = new InputScanner$3(source_text);
        this._indentLevel = 0;
        this._nestedLevel = 0;
        this._ch = null;
        var parenLevel = 0;
        var insideRule = false;
        var insidePropertyValue = false;
        var enteringConditionalGroup = false;
        var insideAtExtend = false;
        var insideAtImport = false;
        var topCharacter = this._ch;
        var whitespace;
        var isAfterSpace;
        var previous_ch;
        while (true) {
          whitespace = this._input.read(whitespacePattern);
          isAfterSpace = whitespace !== "";
          previous_ch = topCharacter;
          this._ch = this._input.next();
          if (this._ch === "\\" && this._input.hasNext()) {
            this._ch += this._input.next();
          }
          topCharacter = this._ch;
          if (!this._ch) {
            break;
          } else if (this._ch === "/" && this._input.peek() === "*") {
            this._output.add_new_line();
            this._input.back();
            var comment = this._input.read(block_comment_pattern);
            var directives = directives_core$1.get_directives(comment);
            if (directives && directives.ignore === "start") {
              comment += directives_core$1.readIgnored(this._input);
            }
            this.print_string(comment);
            this.eatWhitespace(true);
            this._output.add_new_line();
          } else if (this._ch === "/" && this._input.peek() === "/") {
            this._output.space_before_token = true;
            this._input.back();
            this.print_string(this._input.read(comment_pattern));
            this.eatWhitespace(true);
          } else if (this._ch === "@") {
            this.preserveSingleSpace(isAfterSpace);
            if (this._input.peek() === "{") {
              this.print_string(this._ch + this.eatString("}"));
            } else {
              this.print_string(this._ch);
              var variableOrRule = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
              if (variableOrRule.match(/[ :]$/)) {
                variableOrRule = this.eatString(": ").replace(/\s$/, "");
                this.print_string(variableOrRule);
                this._output.space_before_token = true;
              }
              variableOrRule = variableOrRule.replace(/\s$/, "");
              if (variableOrRule === "extend") {
                insideAtExtend = true;
              } else if (variableOrRule === "import") {
                insideAtImport = true;
              }
              if ((variableOrRule in this.NESTED_AT_RULE)) {
                this._nestedLevel += 1;
                if ((variableOrRule in this.CONDITIONAL_GROUP_RULE)) {
                  enteringConditionalGroup = true;
                }
              } else if (!insideRule && parenLevel === 0 && variableOrRule.indexOf(":") !== -1) {
                insidePropertyValue = true;
                this.indent();
              }
            }
          } else if (this._ch === "#" && this._input.peek() === "{") {
            this.preserveSingleSpace(isAfterSpace);
            this.print_string(this._ch + this.eatString("}"));
          } else if (this._ch === "{") {
            if (insidePropertyValue) {
              insidePropertyValue = false;
              this.outdent();
            }
            this.indent();
            this._output.space_before_token = true;
            this.print_string(this._ch);
            if (enteringConditionalGroup) {
              enteringConditionalGroup = false;
              insideRule = this._indentLevel > this._nestedLevel;
            } else {
              insideRule = this._indentLevel >= this._nestedLevel;
            }
            if (this._options.newline_between_rules && insideRule) {
              if (this._output.previous_line && this._output.previous_line.item(-1) !== "{") {
                this._output.ensure_empty_line_above("/", ",");
              }
            }
            this.eatWhitespace(true);
            this._output.add_new_line();
          } else if (this._ch === "}") {
            this.outdent();
            this._output.add_new_line();
            if (previous_ch === "{") {
              this._output.trim(true);
            }
            insideAtImport = false;
            insideAtExtend = false;
            if (insidePropertyValue) {
              this.outdent();
              insidePropertyValue = false;
            }
            this.print_string(this._ch);
            insideRule = false;
            if (this._nestedLevel) {
              this._nestedLevel--;
            }
            this.eatWhitespace(true);
            this._output.add_new_line();
            if (this._options.newline_between_rules && !this._output.just_added_blankline()) {
              if (this._input.peek() !== "}") {
                this._output.add_new_line(true);
              }
            }
          } else if (this._ch === ":") {
            if ((insideRule || enteringConditionalGroup) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !insideAtExtend && parenLevel === 0) {
              this.print_string(":");
              if (!insidePropertyValue) {
                insidePropertyValue = true;
                this._output.space_before_token = true;
                this.eatWhitespace(true);
                this.indent();
              }
            } else {
              if (this._input.lookBack(" ")) {
                this._output.space_before_token = true;
              }
              if (this._input.peek() === ":") {
                this._ch = this._input.next();
                this.print_string("::");
              } else {
                this.print_string(":");
              }
            }
          } else if (this._ch === "\"" || this._ch === "'") {
            this.preserveSingleSpace(isAfterSpace);
            this.print_string(this._ch + this.eatString(this._ch));
            this.eatWhitespace(true);
          } else if (this._ch === ";") {
            if (parenLevel === 0) {
              if (insidePropertyValue) {
                this.outdent();
                insidePropertyValue = false;
              }
              insideAtExtend = false;
              insideAtImport = false;
              this.print_string(this._ch);
              this.eatWhitespace(true);
              if (this._input.peek() !== "/") {
                this._output.add_new_line();
              }
            } else {
              this.print_string(this._ch);
              this.eatWhitespace(true);
              this._output.space_before_token = true;
            }
          } else if (this._ch === "(") {
            if (this._input.lookBack("url")) {
              this.print_string(this._ch);
              this.eatWhitespace();
              parenLevel++;
              this.indent();
              this._ch = this._input.next();
              if (this._ch === ")" || this._ch === "\"" || this._ch === "'") {
                this._input.back();
              } else if (this._ch) {
                this.print_string(this._ch + this.eatString(")"));
                if (parenLevel) {
                  parenLevel--;
                  this.outdent();
                }
              }
            } else {
              this.preserveSingleSpace(isAfterSpace);
              this.print_string(this._ch);
              this.eatWhitespace();
              parenLevel++;
              this.indent();
            }
          } else if (this._ch === ")") {
            if (parenLevel) {
              parenLevel--;
              this.outdent();
            }
            this.print_string(this._ch);
          } else if (this._ch === ",") {
            this.print_string(this._ch);
            this.eatWhitespace(true);
            if (this._options.selector_separator_newline && !insidePropertyValue && parenLevel === 0 && !insideAtImport) {
              this._output.add_new_line();
            } else {
              this._output.space_before_token = true;
            }
          } else if ((this._ch === ">" || this._ch === "+" || this._ch === "~") && !insidePropertyValue && parenLevel === 0) {
            if (this._options.space_around_combinator) {
              this._output.space_before_token = true;
              this.print_string(this._ch);
              this._output.space_before_token = true;
            } else {
              this.print_string(this._ch);
              this.eatWhitespace();
              if (this._ch && whitespaceChar.test(this._ch)) {
                this._ch = "";
              }
            }
          } else if (this._ch === "]") {
            this.print_string(this._ch);
          } else if (this._ch === "[") {
            this.preserveSingleSpace(isAfterSpace);
            this.print_string(this._ch);
          } else if (this._ch === "=") {
            this.eatWhitespace();
            this.print_string("=");
            if (whitespaceChar.test(this._ch)) {
              this._ch = "";
            }
          } else if (this._ch === "!" && !this._input.lookBack("\\")) {
            this.print_string(" ");
            this.print_string(this._ch);
          } else {
            this.preserveSingleSpace(isAfterSpace);
            this.print_string(this._ch);
          }
        }
        var sweetCode = this._output.get_code(eol);
        return sweetCode;
      };
      var Beautifier_1$1 = Beautifier$2;
      var beautifier$1 = {
        Beautifier: Beautifier_1$1
      };
      var Beautifier$3 = beautifier$1.Beautifier, Options$6 = options$2.Options;
      function css_beautify(source_text, options) {
        var beautifier = new Beautifier$3(source_text, options);
        return beautifier.beautify();
      }
      var css = css_beautify;
      var defaultOptions$1 = function () {
        return new Options$6();
      };
      css.defaultOptions = defaultOptions$1;
      var BaseOptions$2 = options.Options;
      function Options$7(options) {
        BaseOptions$2.call(this, options, "html");
        if (this.templating.length === 1 && this.templating[0] === "auto") {
          this.templating = ["django", "erb", "handlebars", "php"];
        }
        this.indent_inner_html = this._get_boolean("indent_inner_html");
        this.indent_body_inner_html = this._get_boolean("indent_body_inner_html", true);
        this.indent_head_inner_html = this._get_boolean("indent_head_inner_html", true);
        this.indent_handlebars = this._get_boolean("indent_handlebars", true);
        this.wrap_attributes = this._get_selection("wrap_attributes", ["auto", "force", "force-aligned", "force-expand-multiline", "aligned-multiple", "preserve", "preserve-aligned"]);
        this.wrap_attributes_indent_size = this._get_number("wrap_attributes_indent_size", this.indent_size);
        this.extra_liners = this._get_array("extra_liners", ["head", "body", "/html"]);
        this.inline = this._get_array("inline", ["a", "abbr", "area", "audio", "b", "bdi", "bdo", "br", "button", "canvas", "cite", "code", "data", "datalist", "del", "dfn", "em", "embed", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "map", "mark", "math", "meter", "noscript", "object", "output", "progress", "q", "ruby", "s", "samp", "select", "small", "span", "strong", "sub", "sup", "svg", "template", "textarea", "time", "u", "var", "video", "wbr", "text", "acronym", "big", "strike", "tt"]);
        this.void_elements = this._get_array("void_elements", ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr", "!doctype", "?xml", "basefont", "isindex"]);
        this.unformatted = this._get_array("unformatted", []);
        this.content_unformatted = this._get_array("content_unformatted", ["pre", "textarea"]);
        this.unformatted_content_delimiter = this._get_characters("unformatted_content_delimiter");
        this.indent_scripts = this._get_selection("indent_scripts", ["normal", "keep", "separate"]);
      }
      Options$7.prototype = new BaseOptions$2();
      var Options_1$3 = Options$7;
      var options$3 = {
        Options: Options_1$3
      };
      var BaseTokenizer$1 = tokenizer.Tokenizer;
      var BASETOKEN$1 = tokenizer.TOKEN;
      var Directives$3 = directives.Directives;
      var TemplatablePattern$2 = templatablepattern.TemplatablePattern;
      var Pattern$4 = pattern.Pattern;
      var TOKEN$3 = {
        TAG_OPEN: "TK_TAG_OPEN",
        TAG_CLOSE: "TK_TAG_CLOSE",
        ATTRIBUTE: "TK_ATTRIBUTE",
        EQUALS: "TK_EQUALS",
        VALUE: "TK_VALUE",
        COMMENT: "TK_COMMENT",
        TEXT: "TK_TEXT",
        UNKNOWN: "TK_UNKNOWN",
        START: BASETOKEN$1.START,
        RAW: BASETOKEN$1.RAW,
        EOF: BASETOKEN$1.EOF
      };
      var directives_core$2 = new Directives$3(/<\!--/, /-->/);
      var Tokenizer$3 = function (input_string, options) {
        BaseTokenizer$1.call(this, input_string, options);
        this._current_tag_name = "";
        var templatable_reader = new TemplatablePattern$2(this._input).read_options(this._options);
        var pattern_reader = new Pattern$4(this._input);
        this.__patterns = {
          word: templatable_reader.until(/[\n\r\t <]/),
          single_quote: templatable_reader.until_after(/'/),
          double_quote: templatable_reader.until_after(/"/),
          attribute: templatable_reader.until(/[\n\r\t =\/>]/),
          element_name: templatable_reader.until(/[\n\r\t >\/]/),
          handlebars_comment: pattern_reader.starting_with(/{{!--/).until_after(/--}}/),
          handlebars: pattern_reader.starting_with(/{{/).until_after(/}}/),
          handlebars_open: pattern_reader.until(/[\n\r\t }]/),
          handlebars_raw_close: pattern_reader.until(/}}/),
          comment: pattern_reader.starting_with(/<!--/).until_after(/-->/),
          cdata: pattern_reader.starting_with(/<!\[cdata\[/).until_after(/]]>/),
          conditional_comment: pattern_reader.starting_with(/<!\[/).until_after(/]>/),
          processing: pattern_reader.starting_with(/<\?/).until_after(/\?>/)
        };
        if (this._options.indent_handlebars) {
          this.__patterns.word = this.__patterns.word.exclude("handlebars");
        }
        this._unformatted_content_delimiter = null;
        if (this._options.unformatted_content_delimiter) {
          var literal_regexp = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
          this.__patterns.unformatted_content_delimiter = pattern_reader.matching(literal_regexp).until_after(literal_regexp);
        }
      };
      Tokenizer$3.prototype = new BaseTokenizer$1();
      Tokenizer$3.prototype._is_comment = function (current_token) {
        return false;
      };
      Tokenizer$3.prototype._is_opening = function (current_token) {
        return current_token.type === TOKEN$3.TAG_OPEN;
      };
      Tokenizer$3.prototype._is_closing = function (current_token, open_token) {
        return current_token.type === TOKEN$3.TAG_CLOSE && (open_token && ((current_token.text === ">" || current_token.text === "/>") && open_token.text[0] === "<" || current_token.text === "}}" && open_token.text[0] === "{" && open_token.text[1] === "{"));
      };
      Tokenizer$3.prototype._reset = function () {
        this._current_tag_name = "";
      };
      Tokenizer$3.prototype._get_next_token = function (previous_token, open_token) {
        var token = null;
        this._readWhitespace();
        var c = this._input.peek();
        if (c === null) {
          return this._create_token(TOKEN$3.EOF, "");
        }
        token = token || this._read_open_handlebars(c, open_token);
        token = token || this._read_attribute(c, previous_token, open_token);
        token = token || this._read_raw_content(c, previous_token, open_token);
        token = token || this._read_close(c, open_token);
        token = token || this._read_content_word(c);
        token = token || this._read_comment(c);
        token = token || this._read_open(c, open_token);
        token = token || this._create_token(TOKEN$3.UNKNOWN, this._input.next());
        return token;
      };
      Tokenizer$3.prototype._read_comment = function (c) {
        var token = null;
        var resulting_string = null;
        var directives = null;
        if (c === "<") {
          var peek1 = this._input.peek(1);
          if (c === "<" && (peek1 === "!" || peek1 === "?")) {
            resulting_string = this.__patterns.comment.read();
            if (resulting_string) {
              directives = directives_core$2.get_directives(resulting_string);
              if (directives && directives.ignore === "start") {
                resulting_string += directives_core$2.readIgnored(this._input);
              }
            } else {
              resulting_string = this.__patterns.cdata.read();
              resulting_string = resulting_string || this.__patterns.conditional_comment.read();
              resulting_string = resulting_string || this.__patterns.processing.read();
            }
          }
          if (resulting_string) {
            token = this._create_token(TOKEN$3.COMMENT, resulting_string);
            token.directives = directives;
          }
        }
        return token;
      };
      Tokenizer$3.prototype._read_open = function (c, open_token) {
        var resulting_string = null;
        var token = null;
        if (!open_token) {
          if (c === "<") {
            resulting_string = this._input.next();
            if (this._input.peek() === "/") {
              resulting_string += this._input.next();
            }
            resulting_string += this.__patterns.element_name.read();
            token = this._create_token(TOKEN$3.TAG_OPEN, resulting_string);
          }
        }
        return token;
      };
      Tokenizer$3.prototype._read_open_handlebars = function (c, open_token) {
        var resulting_string = null;
        var token = null;
        if (!open_token) {
          if (this._options.indent_handlebars && c === "{" && this._input.peek(1) === "{") {
            if (this._input.peek(2) === "!") {
              resulting_string = this.__patterns.handlebars_comment.read();
              resulting_string = resulting_string || this.__patterns.handlebars.read();
              token = this._create_token(TOKEN$3.COMMENT, resulting_string);
            } else {
              resulting_string = this.__patterns.handlebars_open.read();
              token = this._create_token(TOKEN$3.TAG_OPEN, resulting_string);
            }
          }
        }
        return token;
      };
      Tokenizer$3.prototype._read_close = function (c, open_token) {
        var resulting_string = null;
        var token = null;
        if (open_token) {
          if (open_token.text[0] === "<" && (c === ">" || c === "/" && this._input.peek(1) === ">")) {
            resulting_string = this._input.next();
            if (c === "/") {
              resulting_string += this._input.next();
            }
            token = this._create_token(TOKEN$3.TAG_CLOSE, resulting_string);
          } else if (open_token.text[0] === "{" && c === "}" && this._input.peek(1) === "}") {
            this._input.next();
            this._input.next();
            token = this._create_token(TOKEN$3.TAG_CLOSE, "}}");
          }
        }
        return token;
      };
      Tokenizer$3.prototype._read_attribute = function (c, previous_token, open_token) {
        var token = null;
        var resulting_string = "";
        if (open_token && open_token.text[0] === "<") {
          if (c === "=") {
            token = this._create_token(TOKEN$3.EQUALS, this._input.next());
          } else if (c === "\"" || c === "'") {
            var content = this._input.next();
            if (c === "\"") {
              content += this.__patterns.double_quote.read();
            } else {
              content += this.__patterns.single_quote.read();
            }
            token = this._create_token(TOKEN$3.VALUE, content);
          } else {
            resulting_string = this.__patterns.attribute.read();
            if (resulting_string) {
              if (previous_token.type === TOKEN$3.EQUALS) {
                token = this._create_token(TOKEN$3.VALUE, resulting_string);
              } else {
                token = this._create_token(TOKEN$3.ATTRIBUTE, resulting_string);
              }
            }
          }
        }
        return token;
      };
      Tokenizer$3.prototype._is_content_unformatted = function (tag_name) {
        return this._options.void_elements.indexOf(tag_name) === -1 && (this._options.content_unformatted.indexOf(tag_name) !== -1 || this._options.unformatted.indexOf(tag_name) !== -1);
      };
      Tokenizer$3.prototype._read_raw_content = function (c, previous_token, open_token) {
        var resulting_string = "";
        if (open_token && open_token.text[0] === "{") {
          resulting_string = this.__patterns.handlebars_raw_close.read();
        } else if (previous_token.type === TOKEN$3.TAG_CLOSE && previous_token.opened.text[0] === "<") {
          var tag_name = previous_token.opened.text.substr(1).toLowerCase();
          if (tag_name === "script" || tag_name === "style") {
            var token = this._read_comment(c);
            if (token) {
              token.type = TOKEN$3.TEXT;
              return token;
            }
            resulting_string = this._input.readUntil(new RegExp("</" + tag_name + "[\\n\\r\\t ]*?>", "ig"));
          } else if (this._is_content_unformatted(tag_name)) {
            resulting_string = this._input.readUntil(new RegExp("</" + tag_name + "[\\n\\r\\t ]*?>", "ig"));
          }
        }
        if (resulting_string) {
          return this._create_token(TOKEN$3.TEXT, resulting_string);
        }
        return null;
      };
      Tokenizer$3.prototype._read_content_word = function (c) {
        var resulting_string = "";
        if (this._options.unformatted_content_delimiter) {
          if (c === this._options.unformatted_content_delimiter[0]) {
            resulting_string = this.__patterns.unformatted_content_delimiter.read();
          }
        }
        if (!resulting_string) {
          resulting_string = this.__patterns.word.read();
        }
        if (resulting_string) {
          return this._create_token(TOKEN$3.TEXT, resulting_string);
        }
      };
      var Tokenizer_1$2 = Tokenizer$3;
      var TOKEN_1$2 = TOKEN$3;
      var tokenizer$2 = {
        Tokenizer: Tokenizer_1$2,
        TOKEN: TOKEN_1$2
      };
      var Options$8 = options$3.Options;
      var Output$3 = output.Output;
      var Tokenizer$4 = tokenizer$2.Tokenizer;
      var TOKEN$4 = tokenizer$2.TOKEN;
      var lineBreak$1 = /\r\n|[\r\n]/;
      var allLineBreaks$1 = /\r\n|[\r\n]/g;
      var Printer = function (options, base_indent_string) {
        this.indent_level = 0;
        this.alignment_size = 0;
        this.max_preserve_newlines = options.max_preserve_newlines;
        this.preserve_newlines = options.preserve_newlines;
        this._output = new Output$3(options, base_indent_string);
      };
      Printer.prototype.current_line_has_match = function (pattern) {
        return this._output.current_line.has_match(pattern);
      };
      Printer.prototype.set_space_before_token = function (value, non_breaking) {
        this._output.space_before_token = value;
        this._output.non_breaking_space = non_breaking;
      };
      Printer.prototype.set_wrap_point = function () {
        this._output.set_indent(this.indent_level, this.alignment_size);
        this._output.set_wrap_point();
      };
      Printer.prototype.add_raw_token = function (token) {
        this._output.add_raw_token(token);
      };
      Printer.prototype.print_preserved_newlines = function (raw_token) {
        var newlines = 0;
        if (raw_token.type !== TOKEN$4.TEXT && raw_token.previous.type !== TOKEN$4.TEXT) {
          newlines = raw_token.newlines ? 1 : 0;
        }
        if (this.preserve_newlines) {
          newlines = raw_token.newlines < this.max_preserve_newlines + 1 ? raw_token.newlines : this.max_preserve_newlines + 1;
        }
        for (var n = 0; n < newlines; n++) {
          this.print_newline(n > 0);
        }
        return newlines !== 0;
      };
      Printer.prototype.traverse_whitespace = function (raw_token) {
        if (raw_token.whitespace_before || raw_token.newlines) {
          if (!this.print_preserved_newlines(raw_token)) {
            this._output.space_before_token = true;
          }
          return true;
        }
        return false;
      };
      Printer.prototype.previous_token_wrapped = function () {
        return this._output.previous_token_wrapped;
      };
      Printer.prototype.print_newline = function (force) {
        this._output.add_new_line(force);
      };
      Printer.prototype.print_token = function (token) {
        if (token.text) {
          this._output.set_indent(this.indent_level, this.alignment_size);
          this._output.add_token(token.text);
        }
      };
      Printer.prototype.indent = function () {
        this.indent_level++;
      };
      Printer.prototype.get_full_indent = function (level) {
        level = this.indent_level + (level || 0);
        if (level < 1) {
          return "";
        }
        return this._output.get_indent_string(level);
      };
      var get_type_attribute = function (start_token) {
        var result = null;
        var raw_token = start_token.next;
        while (raw_token.type !== TOKEN$4.EOF && start_token.closed !== raw_token) {
          if (raw_token.type === TOKEN$4.ATTRIBUTE && raw_token.text === "type") {
            if (raw_token.next && raw_token.next.type === TOKEN$4.EQUALS && raw_token.next.next && raw_token.next.next.type === TOKEN$4.VALUE) {
              result = raw_token.next.next.text;
            }
            break;
          }
          raw_token = raw_token.next;
        }
        return result;
      };
      var get_custom_beautifier_name = function (tag_check, raw_token) {
        var typeAttribute = null;
        var result = null;
        if (!raw_token.closed) {
          return null;
        }
        if (tag_check === "script") {
          typeAttribute = "text/javascript";
        } else if (tag_check === "style") {
          typeAttribute = "text/css";
        }
        typeAttribute = get_type_attribute(raw_token) || typeAttribute;
        if (typeAttribute.search("text/css") > -1) {
          result = "css";
        } else if (typeAttribute.search(/(text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect)/) > -1) {
          result = "javascript";
        } else if (typeAttribute.search(/(text|application|dojo)\/(x-)?(html)/) > -1) {
          result = "html";
        } else if (typeAttribute.search(/test\/null/) > -1) {
          result = "null";
        }
        return result;
      };
      function in_array$2(what, arr) {
        return arr.indexOf(what) !== -1;
      }
      function TagFrame(parent, parser_token, indent_level) {
        this.parent = parent || null;
        this.tag = parser_token ? parser_token.tag_name : "";
        this.indent_level = indent_level || 0;
        this.parser_token = parser_token || null;
      }
      function TagStack(printer) {
        this._printer = printer;
        this._current_frame = null;
      }
      TagStack.prototype.get_parser_token = function () {
        return this._current_frame ? this._current_frame.parser_token : null;
      };
      TagStack.prototype.record_tag = function (parser_token) {
        var new_frame = new TagFrame(this._current_frame, parser_token, this._printer.indent_level);
        this._current_frame = new_frame;
      };
      TagStack.prototype._try_pop_frame = function (frame) {
        var parser_token = null;
        if (frame) {
          parser_token = frame.parser_token;
          this._printer.indent_level = frame.indent_level;
          this._current_frame = frame.parent;
        }
        return parser_token;
      };
      TagStack.prototype._get_frame = function (tag_list, stop_list) {
        var frame = this._current_frame;
        while (frame) {
          if (tag_list.indexOf(frame.tag) !== -1) {
            break;
          } else if (stop_list && stop_list.indexOf(frame.tag) !== -1) {
            frame = null;
            break;
          }
          frame = frame.parent;
        }
        return frame;
      };
      TagStack.prototype.try_pop = function (tag, stop_list) {
        var frame = this._get_frame([tag], stop_list);
        return this._try_pop_frame(frame);
      };
      TagStack.prototype.indent_to_tag = function (tag_list) {
        var frame = this._get_frame(tag_list);
        if (frame) {
          this._printer.indent_level = frame.indent_level;
        }
      };
      function Beautifier$4(source_text, options, js_beautify, css_beautify) {
        this._source_text = source_text || "";
        options = options || ({});
        this._js_beautify = js_beautify;
        this._css_beautify = css_beautify;
        this._tag_stack = null;
        var optionHtml = new Options$8(options, "html");
        this._options = optionHtml;
        this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, ("force").length) === "force";
        this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === "force-expand-multiline";
        this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === "force-aligned";
        this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === "aligned-multiple";
        this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, ("preserve").length) === "preserve";
        this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === "preserve-aligned";
      }
      Beautifier$4.prototype.beautify = function () {
        if (this._options.disabled) {
          return this._source_text;
        }
        var source_text = this._source_text;
        var eol = this._options.eol;
        if (this._options.eol === "auto") {
          eol = "\n";
          if (source_text && lineBreak$1.test(source_text)) {
            eol = source_text.match(lineBreak$1)[0];
          }
        }
        source_text = source_text.replace(allLineBreaks$1, "\n");
        var baseIndentString = source_text.match(/^[\t ]*/)[0];
        var last_token = {
          text: "",
          type: ""
        };
        var last_tag_token = new TagOpenParserToken();
        var printer = new Printer(this._options, baseIndentString);
        var tokens = new Tokenizer$4(source_text, this._options).tokenize();
        this._tag_stack = new TagStack(printer);
        var parser_token = null;
        var raw_token = tokens.next();
        while (raw_token.type !== TOKEN$4.EOF) {
          if (raw_token.type === TOKEN$4.TAG_OPEN || raw_token.type === TOKEN$4.COMMENT) {
            parser_token = this._handle_tag_open(printer, raw_token, last_tag_token, last_token);
            last_tag_token = parser_token;
          } else if (raw_token.type === TOKEN$4.ATTRIBUTE || raw_token.type === TOKEN$4.EQUALS || raw_token.type === TOKEN$4.VALUE || raw_token.type === TOKEN$4.TEXT && !last_tag_token.tag_complete) {
            parser_token = this._handle_inside_tag(printer, raw_token, last_tag_token, tokens);
          } else if (raw_token.type === TOKEN$4.TAG_CLOSE) {
            parser_token = this._handle_tag_close(printer, raw_token, last_tag_token);
          } else if (raw_token.type === TOKEN$4.TEXT) {
            parser_token = this._handle_text(printer, raw_token, last_tag_token);
          } else {
            printer.add_raw_token(raw_token);
          }
          last_token = parser_token;
          raw_token = tokens.next();
        }
        var sweet_code = printer._output.get_code(eol);
        return sweet_code;
      };
      Beautifier$4.prototype._handle_tag_close = function (printer, raw_token, last_tag_token) {
        var parser_token = {
          text: raw_token.text,
          type: raw_token.type
        };
        printer.alignment_size = 0;
        last_tag_token.tag_complete = true;
        printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== "", true);
        if (last_tag_token.is_unformatted) {
          printer.add_raw_token(raw_token);
        } else {
          if (last_tag_token.tag_start_char === "<") {
            printer.set_space_before_token(raw_token.text[0] === "/", true);
            if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.has_wrapped_attrs) {
              printer.print_newline(false);
            }
          }
          printer.print_token(raw_token);
        }
        if (last_tag_token.indent_content && !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
          printer.indent();
          last_tag_token.indent_content = false;
        }
        if (!last_tag_token.is_inline_element && !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
          printer.set_wrap_point();
        }
        return parser_token;
      };
      Beautifier$4.prototype._handle_inside_tag = function (printer, raw_token, last_tag_token, tokens) {
        var wrapped = last_tag_token.has_wrapped_attrs;
        var parser_token = {
          text: raw_token.text,
          type: raw_token.type
        };
        printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== "", true);
        if (last_tag_token.is_unformatted) {
          printer.add_raw_token(raw_token);
        } else if (last_tag_token.tag_start_char === "{" && raw_token.type === TOKEN$4.TEXT) {
          if (printer.print_preserved_newlines(raw_token)) {
            raw_token.newlines = 0;
            printer.add_raw_token(raw_token);
          } else {
            printer.print_token(raw_token);
          }
        } else {
          if (raw_token.type === TOKEN$4.ATTRIBUTE) {
            printer.set_space_before_token(true);
            last_tag_token.attr_count += 1;
          } else if (raw_token.type === TOKEN$4.EQUALS) {
            printer.set_space_before_token(false);
          } else if (raw_token.type === TOKEN$4.VALUE && raw_token.previous.type === TOKEN$4.EQUALS) {
            printer.set_space_before_token(false);
          }
          if (raw_token.type === TOKEN$4.ATTRIBUTE && last_tag_token.tag_start_char === "<") {
            if (this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) {
              printer.traverse_whitespace(raw_token);
              wrapped = wrapped || raw_token.newlines !== 0;
            }
            if (this._is_wrap_attributes_force) {
              var force_attr_wrap = last_tag_token.attr_count > 1;
              if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.attr_count === 1) {
                var is_only_attribute = true;
                var peek_index = 0;
                var peek_token;
                do {
                  peek_token = tokens.peek(peek_index);
                  if (peek_token.type === TOKEN$4.ATTRIBUTE) {
                    is_only_attribute = false;
                    break;
                  }
                  peek_index += 1;
                } while (peek_index < 4 && peek_token.type !== TOKEN$4.EOF && peek_token.type !== TOKEN$4.TAG_CLOSE);
                force_attr_wrap = !is_only_attribute;
              }
              if (force_attr_wrap) {
                printer.print_newline(false);
                wrapped = true;
              }
            }
          }
          printer.print_token(raw_token);
          wrapped = wrapped || printer.previous_token_wrapped();
          last_tag_token.has_wrapped_attrs = wrapped;
        }
        return parser_token;
      };
      Beautifier$4.prototype._handle_text = function (printer, raw_token, last_tag_token) {
        var parser_token = {
          text: raw_token.text,
          type: "TK_CONTENT"
        };
        if (last_tag_token.custom_beautifier_name) {
          this._print_custom_beatifier_text(printer, raw_token, last_tag_token);
        } else if (last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) {
          printer.add_raw_token(raw_token);
        } else {
          printer.traverse_whitespace(raw_token);
          printer.print_token(raw_token);
        }
        return parser_token;
      };
      Beautifier$4.prototype._print_custom_beatifier_text = function (printer, raw_token, last_tag_token) {
        var local = this;
        if (raw_token.text !== "") {
          var text = raw_token.text, _beautifier, script_indent_level = 1, pre = "", post = "";
          if (last_tag_token.custom_beautifier_name === "javascript" && typeof this._js_beautify === "function") {
            _beautifier = this._js_beautify;
          } else if (last_tag_token.custom_beautifier_name === "css" && typeof this._css_beautify === "function") {
            _beautifier = this._css_beautify;
          } else if (last_tag_token.custom_beautifier_name === "html") {
            _beautifier = function (html_source, options) {
              var beautifier = new Beautifier$4(html_source, options, local._js_beautify, local._css_beautify);
              return beautifier.beautify();
            };
          }
          if (this._options.indent_scripts === "keep") {
            script_indent_level = 0;
          } else if (this._options.indent_scripts === "separate") {
            script_indent_level = -printer.indent_level;
          }
          var indentation = printer.get_full_indent(script_indent_level);
          text = text.replace(/\n[ \t]*$/, "");
          if (last_tag_token.custom_beautifier_name !== "html" && text[0] === "<" && text.match(/^(<!--|<!\[CDATA\[)/)) {
            var matched = (/^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/).exec(text);
            if (!matched) {
              printer.add_raw_token(raw_token);
              return;
            }
            pre = indentation + matched[1] + "\n";
            text = matched[4];
            if (matched[5]) {
              post = indentation + matched[5];
            }
            text = text.replace(/\n[ \t]*$/, "");
            if (matched[2] || matched[3].indexOf("\n") !== -1) {
              matched = matched[3].match(/[ \t]+$/);
              if (matched) {
                raw_token.whitespace_before = matched[0];
              }
            }
          }
          if (text) {
            if (_beautifier) {
              var Child_options = function () {
                this.eol = "\n";
              };
              Child_options.prototype = this._options.raw_options;
              var child_options = new Child_options();
              text = _beautifier(indentation + text, child_options);
            } else {
              var white = raw_token.whitespace_before;
              if (white) {
                text = text.replace(new RegExp("\n(" + white + ")?", "g"), "\n");
              }
              text = indentation + text.replace(/\n/g, "\n" + indentation);
            }
          }
          if (pre) {
            if (!text) {
              text = pre + post;
            } else {
              text = pre + text + "\n" + post;
            }
          }
          printer.print_newline(false);
          if (text) {
            raw_token.text = text;
            raw_token.whitespace_before = "";
            raw_token.newlines = 0;
            printer.add_raw_token(raw_token);
            printer.print_newline(true);
          }
        }
      };
      Beautifier$4.prototype._handle_tag_open = function (printer, raw_token, last_tag_token, last_token) {
        var parser_token = this._get_tag_open_token(raw_token);
        if ((last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) && raw_token.type === TOKEN$4.TAG_OPEN && raw_token.text.indexOf("</") === 0) {
          printer.add_raw_token(raw_token);
        } else {
          printer.traverse_whitespace(raw_token);
          this._set_tag_position(printer, raw_token, parser_token, last_tag_token, last_token);
          if (!parser_token.is_inline_element) {
            printer.set_wrap_point();
          }
          printer.print_token(raw_token);
        }
        if (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) {
          parser_token.alignment_size = raw_token.text.length + 1;
        }
        if (!parser_token.tag_complete && !parser_token.is_unformatted) {
          printer.alignment_size = parser_token.alignment_size;
        }
        return parser_token;
      };
      var TagOpenParserToken = function (parent, raw_token) {
        this.parent = parent || null;
        this.text = "";
        this.type = "TK_TAG_OPEN";
        this.tag_name = "";
        this.is_inline_element = false;
        this.is_unformatted = false;
        this.is_content_unformatted = false;
        this.is_empty_element = false;
        this.is_start_tag = false;
        this.is_end_tag = false;
        this.indent_content = false;
        this.multiline_content = false;
        this.custom_beautifier_name = null;
        this.start_tag_token = null;
        this.attr_count = 0;
        this.has_wrapped_attrs = false;
        this.alignment_size = 0;
        this.tag_complete = false;
        this.tag_start_char = "";
        this.tag_check = "";
        if (!raw_token) {
          this.tag_complete = true;
        } else {
          var tag_check_match;
          this.tag_start_char = raw_token.text[0];
          this.text = raw_token.text;
          if (this.tag_start_char === "<") {
            tag_check_match = raw_token.text.match(/^<([^\s>]*)/);
            this.tag_check = tag_check_match ? tag_check_match[1] : "";
          } else {
            tag_check_match = raw_token.text.match(/^{{[#\^]?([^\s}]+)/);
            this.tag_check = tag_check_match ? tag_check_match[1] : "";
          }
          this.tag_check = this.tag_check.toLowerCase();
          if (raw_token.type === TOKEN$4.COMMENT) {
            this.tag_complete = true;
          }
          this.is_start_tag = this.tag_check.charAt(0) !== "/";
          this.tag_name = !this.is_start_tag ? this.tag_check.substr(1) : this.tag_check;
          this.is_end_tag = !this.is_start_tag || raw_token.closed && raw_token.closed.text === "/>";
          this.is_end_tag = this.is_end_tag || this.tag_start_char === "{" && (this.text.length < 3 || (/[^#\^]/).test(this.text.charAt(2)));
        }
      };
      Beautifier$4.prototype._get_tag_open_token = function (raw_token) {
        var parser_token = new TagOpenParserToken(this._tag_stack.get_parser_token(), raw_token);
        parser_token.alignment_size = this._options.wrap_attributes_indent_size;
        parser_token.is_end_tag = parser_token.is_end_tag || in_array$2(parser_token.tag_check, this._options.void_elements);
        parser_token.is_empty_element = parser_token.tag_complete || parser_token.is_start_tag && parser_token.is_end_tag;
        parser_token.is_unformatted = !parser_token.tag_complete && in_array$2(parser_token.tag_check, this._options.unformatted);
        parser_token.is_content_unformatted = !parser_token.is_empty_element && in_array$2(parser_token.tag_check, this._options.content_unformatted);
        parser_token.is_inline_element = in_array$2(parser_token.tag_name, this._options.inline) || parser_token.tag_start_char === "{";
        return parser_token;
      };
      Beautifier$4.prototype._set_tag_position = function (printer, raw_token, parser_token, last_tag_token, last_token) {
        if (!parser_token.is_empty_element) {
          if (parser_token.is_end_tag) {
            parser_token.start_tag_token = this._tag_stack.try_pop(parser_token.tag_name);
          } else {
            if (this._do_optional_end_element(parser_token)) {
              if (!parser_token.is_inline_element) {
                if (parser_token.parent) {
                  parser_token.parent.multiline_content = true;
                }
                printer.print_newline(false);
              }
            }
            this._tag_stack.record_tag(parser_token);
            if ((parser_token.tag_name === "script" || parser_token.tag_name === "style") && !(parser_token.is_unformatted || parser_token.is_content_unformatted)) {
              parser_token.custom_beautifier_name = get_custom_beautifier_name(parser_token.tag_check, raw_token);
            }
          }
        }
        if (in_array$2(parser_token.tag_check, this._options.extra_liners)) {
          printer.print_newline(false);
          if (!printer._output.just_added_blankline()) {
            printer.print_newline(true);
          }
        }
        if (parser_token.is_empty_element) {
          if (parser_token.tag_start_char === "{" && parser_token.tag_check === "else") {
            this._tag_stack.indent_to_tag(["if", "unless", "each"]);
            parser_token.indent_content = true;
            var foundIfOnCurrentLine = printer.current_line_has_match(/{{#if/);
            if (!foundIfOnCurrentLine) {
              printer.print_newline(false);
            }
          }
          if (parser_token.tag_name === "!--" && last_token.type === TOKEN$4.TAG_CLOSE && last_tag_token.is_end_tag && parser_token.text.indexOf("\n") === -1) ; else if (!parser_token.is_inline_element && !parser_token.is_unformatted) {
            printer.print_newline(false);
          }
        } else if (parser_token.is_unformatted || parser_token.is_content_unformatted) {
          if (!parser_token.is_inline_element && !parser_token.is_unformatted) {
            printer.print_newline(false);
          }
        } else if (parser_token.is_end_tag) {
          if (parser_token.start_tag_token && parser_token.start_tag_token.multiline_content || !(parser_token.is_inline_element || last_tag_token.is_inline_element || last_token.type === TOKEN$4.TAG_CLOSE && parser_token.start_tag_token === last_tag_token || last_token.type === "TK_CONTENT")) {
            printer.print_newline(false);
          }
        } else {
          parser_token.indent_content = !parser_token.custom_beautifier_name;
          if (parser_token.tag_start_char === "<") {
            if (parser_token.tag_name === "html") {
              parser_token.indent_content = this._options.indent_inner_html;
            } else if (parser_token.tag_name === "head") {
              parser_token.indent_content = this._options.indent_head_inner_html;
            } else if (parser_token.tag_name === "body") {
              parser_token.indent_content = this._options.indent_body_inner_html;
            }
          }
          if (!parser_token.is_inline_element && last_token.type !== "TK_CONTENT") {
            if (parser_token.parent) {
              parser_token.parent.multiline_content = true;
            }
            printer.print_newline(false);
          }
        }
      };
      Beautifier$4.prototype._do_optional_end_element = function (parser_token) {
        var result = null;
        if (parser_token.is_empty_element || !parser_token.is_start_tag || !parser_token.parent) {
          return;
        } else if (parser_token.tag_name === "body") {
          result = result || this._tag_stack.try_pop("head");
        } else if (parser_token.tag_name === "li") {
          result = result || this._tag_stack.try_pop("li", ["ol", "ul"]);
        } else if (parser_token.tag_name === "dd" || parser_token.tag_name === "dt") {
          result = result || this._tag_stack.try_pop("dt", ["dl"]);
          result = result || this._tag_stack.try_pop("dd", ["dl"]);
        } else if (parser_token.tag_name === "rp" || parser_token.tag_name === "rt") {
          result = result || this._tag_stack.try_pop("rt", ["ruby", "rtc"]);
          result = result || this._tag_stack.try_pop("rp", ["ruby", "rtc"]);
        } else if (parser_token.tag_name === "optgroup") {
          result = result || this._tag_stack.try_pop("optgroup", ["select"]);
        } else if (parser_token.tag_name === "option") {
          result = result || this._tag_stack.try_pop("option", ["select", "datalist", "optgroup"]);
        } else if (parser_token.tag_name === "colgroup") {
          result = result || this._tag_stack.try_pop("caption", ["table"]);
        } else if (parser_token.tag_name === "thead") {
          result = result || this._tag_stack.try_pop("caption", ["table"]);
          result = result || this._tag_stack.try_pop("colgroup", ["table"]);
        } else if (parser_token.tag_name === "tbody" || parser_token.tag_name === "tfoot") {
          result = result || this._tag_stack.try_pop("caption", ["table"]);
          result = result || this._tag_stack.try_pop("colgroup", ["table"]);
          result = result || this._tag_stack.try_pop("thead", ["table"]);
          result = result || this._tag_stack.try_pop("tbody", ["table"]);
        } else if (parser_token.tag_name === "tr") {
          result = result || this._tag_stack.try_pop("caption", ["table"]);
          result = result || this._tag_stack.try_pop("colgroup", ["table"]);
          result = result || this._tag_stack.try_pop("tr", ["table", "thead", "tbody", "tfoot"]);
        } else if (parser_token.tag_name === "th" || parser_token.tag_name === "td") {
          result = result || this._tag_stack.try_pop("td", ["table", "thead", "tbody", "tfoot", "tr"]);
          result = result || this._tag_stack.try_pop("th", ["table", "thead", "tbody", "tfoot", "tr"]);
        }
        parser_token.parent = this._tag_stack.get_parser_token();
        return result;
      };
      var Beautifier_1$2 = Beautifier$4;
      var beautifier$2 = {
        Beautifier: Beautifier_1$2
      };
      var Beautifier$5 = beautifier$2.Beautifier, Options$9 = options$3.Options;
      function style_html(html_source, options, js_beautify, css_beautify) {
        var beautifier = new Beautifier$5(html_source, options, js_beautify, css_beautify);
        return beautifier.beautify();
      }
      var html = style_html;
      var defaultOptions$2 = function () {
        return new Options$9();
      };
      html.defaultOptions = defaultOptions$2;
      function style_html$1(html_source, options, js, css$1) {
        js = js || javascript;
        css$1 = css$1 || css;
        return html(html_source, options, js, css$1);
      }
      style_html$1.defaultOptions = html.defaultOptions;
      var js = javascript;
      var css$1 = css;
      var html$1 = style_html$1;
      var src = {
        js: js,
        css: css$1,
        html: html$1
      };
      var js$1 = createCommonjsModule(function (module) {
        function get_beautify(js_beautify, css_beautify, html_beautify) {
          var beautify = function (src, config) {
            return js_beautify.js_beautify(src, config);
          };
          beautify.js = js_beautify.js_beautify;
          beautify.css = css_beautify.css_beautify;
          beautify.html = html_beautify.html_beautify;
          beautify.js_beautify = js_beautify.js_beautify;
          beautify.css_beautify = css_beautify.css_beautify;
          beautify.html_beautify = html_beautify.html_beautify;
          return beautify;
        }
        {
          (function (mod) {
            var beautifier = src;
            beautifier.js_beautify = beautifier.js;
            beautifier.css_beautify = beautifier.css;
            beautifier.html_beautify = beautifier.html;
            mod.exports = get_beautify(beautifier, beautifier, beautifier);
          })(module);
        }
      });
      var cache;
      var isWhitespace = function isWhitespace(str) {
        return typeof str === "string" && regex().test(str);
      };
      function regex() {
        return cache || (cache = new RegExp("^[\\s\t\n\u000b\f\r   ᠎             　  ﻿\"]+$"));
      }
      var isExtendable = function isExtendable(val) {
        return typeof val !== "undefined" && val !== null && (typeof val === "object" || typeof val === "function");
      };
      var extendShallow = function extend(o) {
        var arguments$1 = arguments;
        if (!isExtendable(o)) {
          o = {};
        }
        var len = arguments.length;
        for (var i = 1; i < len; i++) {
          var obj = arguments$1[i];
          if (isExtendable(obj)) {
            assign(o, obj);
          }
        }
        return o;
      };
      function assign(a, b) {
        for (var key in b) {
          if (hasOwn(b, key)) {
            a[key] = b[key];
          }
        }
      }
      function hasOwn(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }
      var isBuffer_1 = function (obj) {
        return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
      };
      function isBuffer(obj) {
        return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
      }
      function isSlowBuffer(obj) {
        return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isBuffer(obj.slice(0, 0));
      }
      var toString = Object.prototype.toString;
      var kindOf = function kindOf(val) {
        if (typeof val === "undefined") {
          return "undefined";
        }
        if (val === null) {
          return "null";
        }
        if (val === true || val === false || val instanceof Boolean) {
          return "boolean";
        }
        if (typeof val === "string" || val instanceof String) {
          return "string";
        }
        if (typeof val === "number" || val instanceof Number) {
          return "number";
        }
        if (typeof val === "function" || val instanceof Function) {
          return "function";
        }
        if (typeof Array.isArray !== "undefined" && Array.isArray(val)) {
          return "array";
        }
        if (val instanceof RegExp) {
          return "regexp";
        }
        if (val instanceof Date) {
          return "date";
        }
        var type = toString.call(val);
        if (type === "[object RegExp]") {
          return "regexp";
        }
        if (type === "[object Date]") {
          return "date";
        }
        if (type === "[object Arguments]") {
          return "arguments";
        }
        if (type === "[object Error]") {
          return "error";
        }
        if (isBuffer_1(val)) {
          return "buffer";
        }
        if (type === "[object Set]") {
          return "set";
        }
        if (type === "[object WeakSet]") {
          return "weakset";
        }
        if (type === "[object Map]") {
          return "map";
        }
        if (type === "[object WeakMap]") {
          return "weakmap";
        }
        if (type === "[object Symbol]") {
          return "symbol";
        }
        if (type === "[object Int8Array]") {
          return "int8array";
        }
        if (type === "[object Uint8Array]") {
          return "uint8array";
        }
        if (type === "[object Uint8ClampedArray]") {
          return "uint8clampedarray";
        }
        if (type === "[object Int16Array]") {
          return "int16array";
        }
        if (type === "[object Uint16Array]") {
          return "uint16array";
        }
        if (type === "[object Int32Array]") {
          return "int32array";
        }
        if (type === "[object Uint32Array]") {
          return "uint32array";
        }
        if (type === "[object Float32Array]") {
          return "float32array";
        }
        if (type === "[object Float64Array]") {
          return "float64array";
        }
        return "object";
      };
      var condenseNewlines = function (str, options) {
        var opts = extendShallow({}, options);
        var sep = opts.sep || "\n\n";
        var min = opts.min;
        var re;
        if (typeof min === "number" && min !== 2) {
          re = new RegExp("(\\r\\n|\\n|\\u2424) {" + min + ",}");
        }
        if (typeof re === "undefined") {
          re = opts.regex || /(\r\n|\n|\u2424){2,}/g;
        }
        if (opts.keepWhitespace !== true) {
          str = str.split("\n").map(function (line) {
            return isWhitespace(line) ? line.trim() : line;
          }).join("\n");
        }
        str = trailingNewline(str, opts);
        return str.replace(re, sep);
      };
      function trailingNewline(str, options) {
        var val = options.trailingNewline;
        if (val === false) {
          return str;
        }
        switch (kindOf(val)) {
          case "string":
            str = str.replace(/\s+$/, options.trailingNewline);
            break;
          case "function":
            str = options.trailingNewline(str);
            break;
          case "undefined":
          case "boolean":
          default:
            {
              str = str.replace(/\s+$/, "\n");
              break;
            }
        }
        return str;
      }
      var defaults = {
        unformatted: ["code", "pre", "em", "strong", "span"],
        indent_inner_html: true,
        indent_char: " ",
        indent_size: 2,
        sep: "\n"
      };
      var pretty = function pretty(str, options) {
        var opts = extendShallow({}, defaults, options);
        str = js$1.html(str, opts);
        if (opts.ocd === true) {
          if (opts.newlines) {
            opts.sep = opts.newlines;
          }
          return ocd(str, opts);
        }
        return str;
      };
      function ocd(str, options) {
        return condenseNewlines(str, options).replace(/^\s+/g, "").replace(/\s+$/g, "\n").replace(/(\s*<!--)/g, "\n$1").replace(/>(\s*)(?=<!--\s*\/)/g, "> ");
      }
      function getSelectorType(selector) {
        if (isDomSelector(selector)) {
          return DOM_SELECTOR;
        }
        if (isVueComponent(selector)) {
          return COMPONENT_SELECTOR;
        }
        if (isNameSelector(selector)) {
          return NAME_SELECTOR;
        }
        if (isRefSelector(selector)) {
          return REF_SELECTOR;
        }
        return INVALID_SELECTOR;
      }
      function getSelector(selector, methodName) {
        var type = getSelectorType(selector);
        if (type === INVALID_SELECTOR) {
          throwError("wrapper." + methodName + "() must be passed a valid CSS selector, Vue " + "constructor, or valid find option object");
        }
        return {
          type: type,
          value: selector
        };
      }
      var WrapperArray = function WrapperArray(wrappers) {
        var length = wrappers.length;
        Object.defineProperty(this, "wrappers", {
          get: function () {
            return wrappers;
          },
          set: function () {
            return throwError("wrapperArray.wrappers is read-only");
          }
        });
        Object.defineProperty(this, "length", {
          get: function () {
            return length;
          },
          set: function () {
            return throwError("wrapperArray.length is read-only");
          }
        });
      };
      WrapperArray.prototype.at = function at(index) {
        var normalizedIndex = index < 0 ? this.length + index : index;
        if (normalizedIndex > this.length - 1 || normalizedIndex < 0) {
          var error = "no item exists at " + index;
          error += index < 0 ? " (normalized to " + normalizedIndex + ")" : "";
          throwError(error);
        }
        return this.wrappers[normalizedIndex];
      };
      WrapperArray.prototype.attributes = function attributes() {
        this.throwErrorIfWrappersIsEmpty("attributes");
        throwError("attributes must be called on a single wrapper, use " + "at(i) to access a wrapper");
      };
      WrapperArray.prototype.classes = function classes() {
        this.throwErrorIfWrappersIsEmpty("classes");
        throwError("classes must be called on a single wrapper, use " + "at(i) to access a wrapper");
      };
      WrapperArray.prototype.contains = function contains(selector) {
        this.throwErrorIfWrappersIsEmpty("contains");
        return this.wrappers.every(function (wrapper) {
          return wrapper.contains(selector);
        });
      };
      WrapperArray.prototype.exists = function exists() {
        return this.length > 0 && this.wrappers.every(function (wrapper) {
          return wrapper.exists();
        });
      };
      WrapperArray.prototype.filter = function filter(predicate) {
        return new WrapperArray(this.wrappers.filter(predicate));
      };
      WrapperArray.prototype.emitted = function emitted() {
        this.throwErrorIfWrappersIsEmpty("emitted");
        throwError("emitted must be called on a single wrapper, use " + "at(i) to access a wrapper");
      };
      WrapperArray.prototype.emittedByOrder = function emittedByOrder() {
        this.throwErrorIfWrappersIsEmpty("emittedByOrder");
        throwError("emittedByOrder must be called on a single wrapper, " + "use at(i) to access a wrapper");
      };
      WrapperArray.prototype.findAll = function findAll() {
        this.throwErrorIfWrappersIsEmpty("findAll");
        throwError("findAll must be called on a single wrapper, use " + "at(i) to access a wrapper");
      };
      WrapperArray.prototype.find = function find() {
        this.throwErrorIfWrappersIsEmpty("find");
        throwError("find must be called on a single wrapper, use at(i) " + "to access a wrapper");
      };
      WrapperArray.prototype.html = function html() {
        this.throwErrorIfWrappersIsEmpty("html");
        throwError("html must be called on a single wrapper, use at(i) " + "to access a wrapper");
      };
      WrapperArray.prototype.is = function is(selector) {
        this.throwErrorIfWrappersIsEmpty("is");
        return this.wrappers.every(function (wrapper) {
          return wrapper.is(selector);
        });
      };
      WrapperArray.prototype.isEmpty = function isEmpty() {
        this.throwErrorIfWrappersIsEmpty("isEmpty");
        return this.wrappers.every(function (wrapper) {
          return wrapper.isEmpty();
        });
      };
      WrapperArray.prototype.isVisible = function isVisible() {
        this.throwErrorIfWrappersIsEmpty("isVisible");
        return this.wrappers.every(function (wrapper) {
          return wrapper.isVisible();
        });
      };
      WrapperArray.prototype.isVueInstance = function isVueInstance() {
        this.throwErrorIfWrappersIsEmpty("isVueInstance");
        return this.wrappers.every(function (wrapper) {
          return wrapper.isVueInstance();
        });
      };
      WrapperArray.prototype.name = function name() {
        this.throwErrorIfWrappersIsEmpty("name");
        throwError("name must be called on a single wrapper, use at(i) " + "to access a wrapper");
      };
      WrapperArray.prototype.overview = function overview() {
        this.throwErrorIfWrappersIsEmpty("overview()");
        throwError("overview() must be called on a single wrapper, use at(i) " + "to access a wrapper");
      };
      WrapperArray.prototype.props = function props() {
        this.throwErrorIfWrappersIsEmpty("props");
        throwError("props must be called on a single wrapper, use " + "at(i) to access a wrapper");
      };
      WrapperArray.prototype.text = function text() {
        this.throwErrorIfWrappersIsEmpty("text");
        throwError("text must be called on a single wrapper, use at(i) " + "to access a wrapper");
      };
      WrapperArray.prototype.throwErrorIfWrappersIsEmpty = function throwErrorIfWrappersIsEmpty(method) {
        if (this.wrappers.length === 0) {
          throwError(method + " cannot be called on 0 items");
        }
      };
      WrapperArray.prototype.setData = function setData(data) {
        this.throwErrorIfWrappersIsEmpty("setData");
        return Promise.all(this.wrappers.map(function (wrapper) {
          return wrapper.setData(data);
        }));
      };
      WrapperArray.prototype.setMethods = function setMethods(props) {
        this.throwErrorIfWrappersIsEmpty("setMethods");
        this.wrappers.forEach(function (wrapper) {
          return wrapper.setMethods(props);
        });
      };
      WrapperArray.prototype.setProps = function setProps(props) {
        this.throwErrorIfWrappersIsEmpty("setProps");
        return Promise.all(this.wrappers.map(function (wrapper) {
          return wrapper.setProps(props);
        }));
      };
      WrapperArray.prototype.setValue = function setValue(value) {
        this.throwErrorIfWrappersIsEmpty("setValue");
        return Promise.all(this.wrappers.map(function (wrapper) {
          return wrapper.setValue(value);
        }));
      };
      WrapperArray.prototype.setChecked = function setChecked(checked) {
        if (checked === void 0) checked = true;
        this.throwErrorIfWrappersIsEmpty("setChecked");
        return Promise.all(this.wrappers.map(function (wrapper) {
          return wrapper.setChecked(checked);
        }));
      };
      WrapperArray.prototype.setSelected = function setSelected() {
        this.throwErrorIfWrappersIsEmpty("setSelected");
        throwError("setSelected must be called on a single wrapper, " + "use at(i) to access a wrapper");
      };
      WrapperArray.prototype.trigger = function trigger(event, options) {
        this.throwErrorIfWrappersIsEmpty("trigger");
        return Promise.all(this.wrappers.map(function (wrapper) {
          return wrapper.trigger(event, options);
        }));
      };
      WrapperArray.prototype.destroy = function destroy() {
        this.throwErrorIfWrappersIsEmpty("destroy");
        this.wrappers.forEach(function (wrapper) {
          return wrapper.destroy();
        });
      };
      var buildSelectorString = function (selector) {
        if (getSelectorType(selector) === REF_SELECTOR) {
          return "ref=\"" + selector.value.ref + "\"";
        }
        if (typeof selector === "string") {
          return selector;
        }
        return "Component";
      };
      var ErrorWrapper = function ErrorWrapper(selector) {
        this.selector = selector;
      };
      ErrorWrapper.prototype.at = function at() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call at() on empty Wrapper");
      };
      ErrorWrapper.prototype.attributes = function attributes() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call attributes() on empty Wrapper");
      };
      ErrorWrapper.prototype.classes = function classes() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call classes() on empty Wrapper");
      };
      ErrorWrapper.prototype.contains = function contains() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call contains() on empty Wrapper");
      };
      ErrorWrapper.prototype.emitted = function emitted() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call emitted() on empty Wrapper");
      };
      ErrorWrapper.prototype.emittedByOrder = function emittedByOrder() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call emittedByOrder() on empty Wrapper");
      };
      ErrorWrapper.prototype.exists = function exists() {
        return false;
      };
      ErrorWrapper.prototype.filter = function filter() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call filter() on empty Wrapper");
      };
      ErrorWrapper.prototype.visible = function visible() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call visible() on empty Wrapper");
      };
      ErrorWrapper.prototype.hasAttribute = function hasAttribute() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call hasAttribute() on empty Wrapper");
      };
      ErrorWrapper.prototype.hasClass = function hasClass() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call hasClass() on empty Wrapper");
      };
      ErrorWrapper.prototype.hasProp = function hasProp() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call hasProp() on empty Wrapper");
      };
      ErrorWrapper.prototype.hasStyle = function hasStyle() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call hasStyle() on empty Wrapper");
      };
      ErrorWrapper.prototype.findAll = function findAll() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call findAll() on empty Wrapper");
      };
      ErrorWrapper.prototype.find = function find() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call find() on empty Wrapper");
      };
      ErrorWrapper.prototype.html = function html() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call html() on empty Wrapper");
      };
      ErrorWrapper.prototype.is = function is() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call is() on empty Wrapper");
      };
      ErrorWrapper.prototype.isEmpty = function isEmpty() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call isEmpty() on empty Wrapper");
      };
      ErrorWrapper.prototype.isVisible = function isVisible() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call isVisible() on empty Wrapper");
      };
      ErrorWrapper.prototype.isVueInstance = function isVueInstance() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call isVueInstance() on empty Wrapper");
      };
      ErrorWrapper.prototype.name = function name() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call name() on empty Wrapper");
      };
      ErrorWrapper.prototype.overview = function overview() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call overview() on empty Wrapper");
      };
      ErrorWrapper.prototype.props = function props() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call props() on empty Wrapper");
      };
      ErrorWrapper.prototype.text = function text() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call text() on empty Wrapper");
      };
      ErrorWrapper.prototype.setComputed = function setComputed() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call setComputed() on empty Wrapper");
      };
      ErrorWrapper.prototype.setData = function setData() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call setData() on empty Wrapper");
      };
      ErrorWrapper.prototype.setMethods = function setMethods() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call setMethods() on empty Wrapper");
      };
      ErrorWrapper.prototype.setProps = function setProps() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call setProps() on empty Wrapper");
      };
      ErrorWrapper.prototype.setValue = function setValue() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call setValue() on empty Wrapper");
      };
      ErrorWrapper.prototype.setChecked = function setChecked() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call setChecked() on empty Wrapper");
      };
      ErrorWrapper.prototype.setSelected = function setSelected() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call setSelected() on empty Wrapper");
      };
      ErrorWrapper.prototype.trigger = function trigger() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call trigger() on empty Wrapper");
      };
      ErrorWrapper.prototype.destroy = function destroy() {
        throwError("find did not return " + buildSelectorString(this.selector) + ", cannot call destroy() on empty Wrapper");
      };
      function isStyleVisible(element) {
        var ref = element.style;
        var display = ref.display;
        var visibility = ref.visibility;
        var opacity = ref.opacity;
        return display !== "none" && visibility !== "hidden" && visibility !== "collapse" && opacity !== "0" && opacity !== 0;
      }
      function isAttributeVisible(element, previousElement) {
        return !element.hasAttribute("hidden") && (element.nodeName === "DETAILS" && previousElement.nodeName !== "SUMMARY" ? element.hasAttribute("open") : true);
      }
      function isElementVisible(element, previousElement) {
        return element.nodeName !== "#comment" && isStyleVisible(element) && isAttributeVisible(element, previousElement) && (!element.parentElement || isElementVisible(element.parentElement, element));
      }
      function recursivelySetData(vm, target, data) {
        Object.keys(data).forEach(function (key) {
          var val = data[key];
          var targetVal = target[key];
          if (isPlainObject(val) && isPlainObject(targetVal) && Object.keys(val).length > 0) {
            recursivelySetData(vm, targetVal, val);
          } else {
            vm.$set(target, key, val);
          }
        });
      }
      var abort = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var afterprint = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var animationend = {
        eventInterface: "AnimationEvent",
        bubbles: true,
        cancelable: false
      };
      var animationiteration = {
        eventInterface: "AnimationEvent",
        bubbles: true,
        cancelable: false
      };
      var animationstart = {
        eventInterface: "AnimationEvent",
        bubbles: true,
        cancelable: false
      };
      var appinstalled = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var audioprocess = {
        eventInterface: "AudioProcessingEvent"
      };
      var audioend = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var audiostart = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var beforeprint = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var beforeunload = {
        eventInterface: "BeforeUnloadEvent",
        bubbles: false,
        cancelable: true
      };
      var beginEvent = {
        eventInterface: "TimeEvent",
        bubbles: false,
        cancelable: false
      };
      var blur = {
        eventInterface: "FocusEvent",
        bubbles: false,
        cancelable: false
      };
      var boundary = {
        eventInterface: "SpeechSynthesisEvent",
        bubbles: false,
        cancelable: false
      };
      var cached = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var canplay = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var canplaythrough = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var change = {
        eventInterface: "Event",
        bubbles: true,
        cancelable: false
      };
      var chargingchange = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var chargingtimechange = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var checking = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var click = {
        eventInterface: "MouseEvent",
        bubbles: true,
        cancelable: true
      };
      var close = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var complete = {
        eventInterface: "OfflineAudioCompletionEvent"
      };
      var compositionend = {
        eventInterface: "CompositionEvent",
        bubbles: true,
        cancelable: true
      };
      var compositionstart = {
        eventInterface: "CompositionEvent",
        bubbles: true,
        cancelable: true
      };
      var compositionupdate = {
        eventInterface: "CompositionEvent",
        bubbles: true,
        cancelable: false
      };
      var contextmenu = {
        eventInterface: "MouseEvent",
        bubbles: true,
        cancelable: true
      };
      var copy = {
        eventInterface: "ClipboardEvent"
      };
      var cut = {
        eventInterface: "ClipboardEvent",
        bubbles: true,
        cancelable: true
      };
      var dblclick = {
        eventInterface: "MouseEvent",
        bubbles: true,
        cancelable: true
      };
      var devicechange = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var devicelight = {
        eventInterface: "DeviceLightEvent",
        bubbles: false,
        cancelable: false
      };
      var devicemotion = {
        eventInterface: "DeviceMotionEvent",
        bubbles: false,
        cancelable: false
      };
      var deviceorientation = {
        eventInterface: "DeviceOrientationEvent",
        bubbles: false,
        cancelable: false
      };
      var deviceproximity = {
        eventInterface: "DeviceProximityEvent",
        bubbles: false,
        cancelable: false
      };
      var dischargingtimechange = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var DOMActivate = {
        eventInterface: "UIEvent",
        bubbles: true,
        cancelable: true
      };
      var DOMAttributeNameChanged = {
        eventInterface: "MutationNameEvent",
        bubbles: true,
        cancelable: true
      };
      var DOMAttrModified = {
        eventInterface: "MutationEvent",
        bubbles: true,
        cancelable: true
      };
      var DOMCharacterDataModified = {
        eventInterface: "MutationEvent",
        bubbles: true,
        cancelable: true
      };
      var DOMContentLoaded = {
        eventInterface: "Event",
        bubbles: true,
        cancelable: true
      };
      var DOMElementNameChanged = {
        eventInterface: "MutationNameEvent",
        bubbles: true,
        cancelable: true
      };
      var DOMFocusIn = {
        eventInterface: "FocusEvent",
        bubbles: true,
        cancelable: true
      };
      var DOMFocusOut = {
        eventInterface: "FocusEvent",
        bubbles: true,
        cancelable: true
      };
      var DOMNodeInserted = {
        eventInterface: "MutationEvent",
        bubbles: true,
        cancelable: true
      };
      var DOMNodeInsertedIntoDocument = {
        eventInterface: "MutationEvent",
        bubbles: true,
        cancelable: true
      };
      var DOMNodeRemoved = {
        eventInterface: "MutationEvent",
        bubbles: true,
        cancelable: true
      };
      var DOMNodeRemovedFromDocument = {
        eventInterface: "MutationEvent",
        bubbles: true,
        cancelable: true
      };
      var DOMSubtreeModified = {
        eventInterface: "MutationEvent"
      };
      var downloading = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var drag = {
        eventInterface: "DragEvent",
        bubbles: true,
        cancelable: true
      };
      var dragend = {
        eventInterface: "DragEvent",
        bubbles: true,
        cancelable: false
      };
      var dragenter = {
        eventInterface: "DragEvent",
        bubbles: true,
        cancelable: true
      };
      var dragleave = {
        eventInterface: "DragEvent",
        bubbles: true,
        cancelable: false
      };
      var dragover = {
        eventInterface: "DragEvent",
        bubbles: true,
        cancelable: true
      };
      var dragstart = {
        eventInterface: "DragEvent",
        bubbles: true,
        cancelable: true
      };
      var drop = {
        eventInterface: "DragEvent",
        bubbles: true,
        cancelable: true
      };
      var durationchange = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var emptied = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var end = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var ended = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var endEvent = {
        eventInterface: "TimeEvent",
        bubbles: false,
        cancelable: false
      };
      var error = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var focus = {
        eventInterface: "FocusEvent",
        bubbles: false,
        cancelable: false
      };
      var focusin = {
        eventInterface: "FocusEvent",
        bubbles: true,
        cancelable: false
      };
      var focusout = {
        eventInterface: "FocusEvent",
        bubbles: true,
        cancelable: false
      };
      var fullscreenchange = {
        eventInterface: "Event",
        bubbles: true,
        cancelable: false
      };
      var fullscreenerror = {
        eventInterface: "Event",
        bubbles: true,
        cancelable: false
      };
      var gamepadconnected = {
        eventInterface: "GamepadEvent",
        bubbles: false,
        cancelable: false
      };
      var gamepaddisconnected = {
        eventInterface: "GamepadEvent",
        bubbles: false,
        cancelable: false
      };
      var gotpointercapture = {
        eventInterface: "PointerEvent",
        bubbles: false,
        cancelable: false
      };
      var hashchange = {
        eventInterface: "HashChangeEvent",
        bubbles: true,
        cancelable: false
      };
      var lostpointercapture = {
        eventInterface: "PointerEvent",
        bubbles: false,
        cancelable: false
      };
      var input = {
        eventInterface: "Event",
        bubbles: true,
        cancelable: false
      };
      var invalid = {
        eventInterface: "Event",
        cancelable: true,
        bubbles: false
      };
      var keydown = {
        eventInterface: "KeyboardEvent",
        bubbles: true,
        cancelable: true
      };
      var keypress = {
        eventInterface: "KeyboardEvent",
        bubbles: true,
        cancelable: true
      };
      var keyup = {
        eventInterface: "KeyboardEvent",
        bubbles: true,
        cancelable: true
      };
      var languagechange = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var levelchange = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var load = {
        eventInterface: "UIEvent",
        bubbles: false,
        cancelable: false
      };
      var loadeddata = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var loadedmetadata = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var loadend = {
        eventInterface: "ProgressEvent",
        bubbles: false,
        cancelable: false
      };
      var loadstart = {
        eventInterface: "ProgressEvent",
        bubbles: false,
        cancelable: false
      };
      var mark = {
        eventInterface: "SpeechSynthesisEvent",
        bubbles: false,
        cancelable: false
      };
      var message = {
        eventInterface: "MessageEvent",
        bubbles: false,
        cancelable: false
      };
      var messageerror = {
        eventInterface: "MessageEvent",
        bubbles: false,
        cancelable: false
      };
      var mousedown = {
        eventInterface: "MouseEvent",
        bubbles: true,
        cancelable: true
      };
      var mouseenter = {
        eventInterface: "MouseEvent",
        bubbles: false,
        cancelable: false
      };
      var mouseleave = {
        eventInterface: "MouseEvent",
        bubbles: false,
        cancelable: false
      };
      var mousemove = {
        eventInterface: "MouseEvent",
        bubbles: true,
        cancelable: true
      };
      var mouseout = {
        eventInterface: "MouseEvent",
        bubbles: true,
        cancelable: true
      };
      var mouseover = {
        eventInterface: "MouseEvent",
        bubbles: true,
        cancelable: true
      };
      var mouseup = {
        eventInterface: "MouseEvent",
        bubbles: true,
        cancelable: true
      };
      var nomatch = {
        eventInterface: "SpeechRecognitionEvent",
        bubbles: false,
        cancelable: false
      };
      var notificationclick = {
        eventInterface: "NotificationEvent",
        bubbles: false,
        cancelable: false
      };
      var noupdate = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var obsolete = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var offline = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var online = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var open = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var orientationchange = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var pagehide = {
        eventInterface: "PageTransitionEvent",
        bubbles: false,
        cancelable: false
      };
      var pageshow = {
        eventInterface: "PageTransitionEvent",
        bubbles: false,
        cancelable: false
      };
      var paste = {
        eventInterface: "ClipboardEvent",
        bubbles: true,
        cancelable: true
      };
      var pause = {
        eventInterface: "SpeechSynthesisEvent",
        bubbles: false,
        cancelable: false
      };
      var pointercancel = {
        eventInterface: "PointerEvent",
        bubbles: true,
        cancelable: false
      };
      var pointerdown = {
        eventInterface: "PointerEvent",
        bubbles: true,
        cancelable: true
      };
      var pointerenter = {
        eventInterface: "PointerEvent",
        bubbles: false,
        cancelable: false
      };
      var pointerleave = {
        eventInterface: "PointerEvent",
        bubbles: false,
        cancelable: false
      };
      var pointerlockchange = {
        eventInterface: "Event",
        bubbles: true,
        cancelable: false
      };
      var pointerlockerror = {
        eventInterface: "Event",
        bubbles: true,
        cancelable: false
      };
      var pointermove = {
        eventInterface: "PointerEvent",
        bubbles: true,
        cancelable: true
      };
      var pointerout = {
        eventInterface: "PointerEvent",
        bubbles: true,
        cancelable: true
      };
      var pointerover = {
        eventInterface: "PointerEvent",
        bubbles: true,
        cancelable: true
      };
      var pointerup = {
        eventInterface: "PointerEvent",
        bubbles: true,
        cancelable: true
      };
      var play = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var playing = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var popstate = {
        eventInterface: "PopStateEvent",
        bubbles: true,
        cancelable: false
      };
      var progress = {
        eventInterface: "ProgressEvent",
        bubbles: false,
        cancelable: false
      };
      var push = {
        eventInterface: "PushEvent",
        bubbles: false,
        cancelable: false
      };
      var pushsubscriptionchange = {
        eventInterface: "PushEvent",
        bubbles: false,
        cancelable: false
      };
      var ratechange = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var readystatechange = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var repeatEvent = {
        eventInterface: "TimeEvent",
        bubbles: false,
        cancelable: false
      };
      var reset = {
        eventInterface: "Event",
        bubbles: true,
        cancelable: true
      };
      var resize = {
        eventInterface: "UIEvent",
        bubbles: false,
        cancelable: false
      };
      var resourcetimingbufferfull = {
        eventInterface: "Performance",
        bubbles: true,
        cancelable: true
      };
      var result = {
        eventInterface: "SpeechRecognitionEvent",
        bubbles: false,
        cancelable: false
      };
      var resume = {
        eventInterface: "SpeechSynthesisEvent",
        bubbles: false,
        cancelable: false
      };
      var scroll = {
        eventInterface: "UIEvent",
        bubbles: false,
        cancelable: false
      };
      var seeked = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var seeking = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var select = {
        eventInterface: "UIEvent",
        bubbles: true,
        cancelable: false
      };
      var selectstart = {
        eventInterface: "Event",
        bubbles: true,
        cancelable: true
      };
      var selectionchange = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var show = {
        eventInterface: "MouseEvent",
        bubbles: false,
        cancelable: false
      };
      var slotchange = {
        eventInterface: "Event",
        bubbles: true,
        cancelable: false
      };
      var soundend = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var soundstart = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var speechend = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var speechstart = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var stalled = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var start = {
        eventInterface: "SpeechSynthesisEvent",
        bubbles: false,
        cancelable: false
      };
      var storage = {
        eventInterface: "StorageEvent",
        bubbles: false,
        cancelable: false
      };
      var submit = {
        eventInterface: "Event",
        bubbles: true,
        cancelable: true
      };
      var success = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var suspend = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var SVGAbort = {
        eventInterface: "SVGEvent",
        bubbles: true,
        cancelable: false
      };
      var SVGError = {
        eventInterface: "SVGEvent",
        bubbles: true,
        cancelable: false
      };
      var SVGLoad = {
        eventInterface: "SVGEvent",
        bubbles: false,
        cancelable: false
      };
      var SVGResize = {
        eventInterface: "SVGEvent",
        bubbles: true,
        cancelable: false
      };
      var SVGScroll = {
        eventInterface: "SVGEvent",
        bubbles: true,
        cancelable: false
      };
      var SVGUnload = {
        eventInterface: "SVGEvent",
        bubbles: false,
        cancelable: false
      };
      var SVGZoom = {
        eventInterface: "SVGZoomEvent",
        bubbles: true,
        cancelable: false
      };
      var timeout = {
        eventInterface: "ProgressEvent",
        bubbles: false,
        cancelable: false
      };
      var timeupdate = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var touchcancel = {
        eventInterface: "TouchEvent",
        bubbles: true,
        cancelable: false
      };
      var touchend = {
        eventInterface: "TouchEvent",
        bubbles: true,
        cancelable: true
      };
      var touchmove = {
        eventInterface: "TouchEvent",
        bubbles: true,
        cancelable: true
      };
      var touchstart = {
        eventInterface: "TouchEvent",
        bubbles: true,
        cancelable: true
      };
      var transitionend = {
        eventInterface: "TransitionEvent",
        bubbles: true,
        cancelable: true
      };
      var unload = {
        eventInterface: "UIEvent",
        bubbles: false
      };
      var updateready = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var userproximity = {
        eventInterface: "UserProximityEvent",
        bubbles: false,
        cancelable: false
      };
      var voiceschanged = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var visibilitychange = {
        eventInterface: "Event",
        bubbles: true,
        cancelable: false
      };
      var volumechange = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var waiting = {
        eventInterface: "Event",
        bubbles: false,
        cancelable: false
      };
      var wheel = {
        eventInterface: "WheelEvent",
        bubbles: true,
        cancelable: true
      };
      var domEventTypes = {
        abort: abort,
        afterprint: afterprint,
        animationend: animationend,
        animationiteration: animationiteration,
        animationstart: animationstart,
        appinstalled: appinstalled,
        audioprocess: audioprocess,
        audioend: audioend,
        audiostart: audiostart,
        beforeprint: beforeprint,
        beforeunload: beforeunload,
        beginEvent: beginEvent,
        blur: blur,
        boundary: boundary,
        cached: cached,
        canplay: canplay,
        canplaythrough: canplaythrough,
        change: change,
        chargingchange: chargingchange,
        chargingtimechange: chargingtimechange,
        checking: checking,
        click: click,
        close: close,
        complete: complete,
        compositionend: compositionend,
        compositionstart: compositionstart,
        compositionupdate: compositionupdate,
        contextmenu: contextmenu,
        copy: copy,
        cut: cut,
        dblclick: dblclick,
        devicechange: devicechange,
        devicelight: devicelight,
        devicemotion: devicemotion,
        deviceorientation: deviceorientation,
        deviceproximity: deviceproximity,
        dischargingtimechange: dischargingtimechange,
        DOMActivate: DOMActivate,
        DOMAttributeNameChanged: DOMAttributeNameChanged,
        DOMAttrModified: DOMAttrModified,
        DOMCharacterDataModified: DOMCharacterDataModified,
        DOMContentLoaded: DOMContentLoaded,
        DOMElementNameChanged: DOMElementNameChanged,
        DOMFocusIn: DOMFocusIn,
        DOMFocusOut: DOMFocusOut,
        DOMNodeInserted: DOMNodeInserted,
        DOMNodeInsertedIntoDocument: DOMNodeInsertedIntoDocument,
        DOMNodeRemoved: DOMNodeRemoved,
        DOMNodeRemovedFromDocument: DOMNodeRemovedFromDocument,
        DOMSubtreeModified: DOMSubtreeModified,
        downloading: downloading,
        drag: drag,
        dragend: dragend,
        dragenter: dragenter,
        dragleave: dragleave,
        dragover: dragover,
        dragstart: dragstart,
        drop: drop,
        durationchange: durationchange,
        emptied: emptied,
        end: end,
        ended: ended,
        endEvent: endEvent,
        error: error,
        focus: focus,
        focusin: focusin,
        focusout: focusout,
        fullscreenchange: fullscreenchange,
        fullscreenerror: fullscreenerror,
        gamepadconnected: gamepadconnected,
        gamepaddisconnected: gamepaddisconnected,
        gotpointercapture: gotpointercapture,
        hashchange: hashchange,
        lostpointercapture: lostpointercapture,
        input: input,
        invalid: invalid,
        keydown: keydown,
        keypress: keypress,
        keyup: keyup,
        languagechange: languagechange,
        levelchange: levelchange,
        load: load,
        loadeddata: loadeddata,
        loadedmetadata: loadedmetadata,
        loadend: loadend,
        loadstart: loadstart,
        mark: mark,
        message: message,
        messageerror: messageerror,
        mousedown: mousedown,
        mouseenter: mouseenter,
        mouseleave: mouseleave,
        mousemove: mousemove,
        mouseout: mouseout,
        mouseover: mouseover,
        mouseup: mouseup,
        nomatch: nomatch,
        notificationclick: notificationclick,
        noupdate: noupdate,
        obsolete: obsolete,
        offline: offline,
        online: online,
        open: open,
        orientationchange: orientationchange,
        pagehide: pagehide,
        pageshow: pageshow,
        paste: paste,
        pause: pause,
        pointercancel: pointercancel,
        pointerdown: pointerdown,
        pointerenter: pointerenter,
        pointerleave: pointerleave,
        pointerlockchange: pointerlockchange,
        pointerlockerror: pointerlockerror,
        pointermove: pointermove,
        pointerout: pointerout,
        pointerover: pointerover,
        pointerup: pointerup,
        play: play,
        playing: playing,
        popstate: popstate,
        progress: progress,
        push: push,
        pushsubscriptionchange: pushsubscriptionchange,
        ratechange: ratechange,
        readystatechange: readystatechange,
        repeatEvent: repeatEvent,
        reset: reset,
        resize: resize,
        resourcetimingbufferfull: resourcetimingbufferfull,
        result: result,
        resume: resume,
        scroll: scroll,
        seeked: seeked,
        seeking: seeking,
        select: select,
        selectstart: selectstart,
        selectionchange: selectionchange,
        show: show,
        slotchange: slotchange,
        soundend: soundend,
        soundstart: soundstart,
        speechend: speechend,
        speechstart: speechstart,
        stalled: stalled,
        start: start,
        storage: storage,
        submit: submit,
        success: success,
        suspend: suspend,
        SVGAbort: SVGAbort,
        SVGError: SVGError,
        SVGLoad: SVGLoad,
        SVGResize: SVGResize,
        SVGScroll: SVGScroll,
        SVGUnload: SVGUnload,
        SVGZoom: SVGZoom,
        timeout: timeout,
        timeupdate: timeupdate,
        touchcancel: touchcancel,
        touchend: touchend,
        touchmove: touchmove,
        touchstart: touchstart,
        transitionend: transitionend,
        unload: unload,
        updateready: updateready,
        userproximity: userproximity,
        voiceschanged: voiceschanged,
        visibilitychange: visibilitychange,
        volumechange: volumechange,
        waiting: waiting,
        wheel: wheel
      };
      var domEventTypes$1 = Object.freeze({
        __proto__: null,
        abort: abort,
        afterprint: afterprint,
        animationend: animationend,
        animationiteration: animationiteration,
        animationstart: animationstart,
        appinstalled: appinstalled,
        audioprocess: audioprocess,
        audioend: audioend,
        audiostart: audiostart,
        beforeprint: beforeprint,
        beforeunload: beforeunload,
        beginEvent: beginEvent,
        blur: blur,
        boundary: boundary,
        cached: cached,
        canplay: canplay,
        canplaythrough: canplaythrough,
        change: change,
        chargingchange: chargingchange,
        chargingtimechange: chargingtimechange,
        checking: checking,
        click: click,
        close: close,
        complete: complete,
        compositionend: compositionend,
        compositionstart: compositionstart,
        compositionupdate: compositionupdate,
        contextmenu: contextmenu,
        copy: copy,
        cut: cut,
        dblclick: dblclick,
        devicechange: devicechange,
        devicelight: devicelight,
        devicemotion: devicemotion,
        deviceorientation: deviceorientation,
        deviceproximity: deviceproximity,
        dischargingtimechange: dischargingtimechange,
        DOMActivate: DOMActivate,
        DOMAttributeNameChanged: DOMAttributeNameChanged,
        DOMAttrModified: DOMAttrModified,
        DOMCharacterDataModified: DOMCharacterDataModified,
        DOMContentLoaded: DOMContentLoaded,
        DOMElementNameChanged: DOMElementNameChanged,
        DOMFocusIn: DOMFocusIn,
        DOMFocusOut: DOMFocusOut,
        DOMNodeInserted: DOMNodeInserted,
        DOMNodeInsertedIntoDocument: DOMNodeInsertedIntoDocument,
        DOMNodeRemoved: DOMNodeRemoved,
        DOMNodeRemovedFromDocument: DOMNodeRemovedFromDocument,
        DOMSubtreeModified: DOMSubtreeModified,
        downloading: downloading,
        drag: drag,
        dragend: dragend,
        dragenter: dragenter,
        dragleave: dragleave,
        dragover: dragover,
        dragstart: dragstart,
        drop: drop,
        durationchange: durationchange,
        emptied: emptied,
        end: end,
        ended: ended,
        endEvent: endEvent,
        error: error,
        focus: focus,
        focusin: focusin,
        focusout: focusout,
        fullscreenchange: fullscreenchange,
        fullscreenerror: fullscreenerror,
        gamepadconnected: gamepadconnected,
        gamepaddisconnected: gamepaddisconnected,
        gotpointercapture: gotpointercapture,
        hashchange: hashchange,
        lostpointercapture: lostpointercapture,
        input: input,
        invalid: invalid,
        keydown: keydown,
        keypress: keypress,
        keyup: keyup,
        languagechange: languagechange,
        levelchange: levelchange,
        load: load,
        loadeddata: loadeddata,
        loadedmetadata: loadedmetadata,
        loadend: loadend,
        loadstart: loadstart,
        mark: mark,
        message: message,
        messageerror: messageerror,
        mousedown: mousedown,
        mouseenter: mouseenter,
        mouseleave: mouseleave,
        mousemove: mousemove,
        mouseout: mouseout,
        mouseover: mouseover,
        mouseup: mouseup,
        nomatch: nomatch,
        notificationclick: notificationclick,
        noupdate: noupdate,
        obsolete: obsolete,
        offline: offline,
        online: online,
        open: open,
        orientationchange: orientationchange,
        pagehide: pagehide,
        pageshow: pageshow,
        paste: paste,
        pause: pause,
        pointercancel: pointercancel,
        pointerdown: pointerdown,
        pointerenter: pointerenter,
        pointerleave: pointerleave,
        pointerlockchange: pointerlockchange,
        pointerlockerror: pointerlockerror,
        pointermove: pointermove,
        pointerout: pointerout,
        pointerover: pointerover,
        pointerup: pointerup,
        play: play,
        playing: playing,
        popstate: popstate,
        progress: progress,
        push: push,
        pushsubscriptionchange: pushsubscriptionchange,
        ratechange: ratechange,
        readystatechange: readystatechange,
        repeatEvent: repeatEvent,
        reset: reset,
        resize: resize,
        resourcetimingbufferfull: resourcetimingbufferfull,
        result: result,
        resume: resume,
        scroll: scroll,
        seeked: seeked,
        seeking: seeking,
        select: select,
        selectstart: selectstart,
        selectionchange: selectionchange,
        show: show,
        slotchange: slotchange,
        soundend: soundend,
        soundstart: soundstart,
        speechend: speechend,
        speechstart: speechstart,
        stalled: stalled,
        start: start,
        storage: storage,
        submit: submit,
        success: success,
        suspend: suspend,
        SVGAbort: SVGAbort,
        SVGError: SVGError,
        SVGLoad: SVGLoad,
        SVGResize: SVGResize,
        SVGScroll: SVGScroll,
        SVGUnload: SVGUnload,
        SVGZoom: SVGZoom,
        timeout: timeout,
        timeupdate: timeupdate,
        touchcancel: touchcancel,
        touchend: touchend,
        touchmove: touchmove,
        touchstart: touchstart,
        transitionend: transitionend,
        unload: unload,
        updateready: updateready,
        userproximity: userproximity,
        voiceschanged: voiceschanged,
        visibilitychange: visibilitychange,
        volumechange: volumechange,
        waiting: waiting,
        wheel: wheel,
        "default": domEventTypes
      });
      var require$$0 = getCjsExportFromNamespace(domEventTypes$1);
      var domEventTypes$2 = require$$0;
      var defaultEventType = {
        eventInterface: "Event",
        cancelable: true,
        bubbles: true
      };
      var modifiers = {
        enter: 13,
        tab: 9,
        delete: 46,
        esc: 27,
        space: 32,
        up: 38,
        down: 40,
        left: 37,
        right: 39,
        end: 35,
        home: 36,
        backspace: 8,
        insert: 45,
        pageup: 33,
        pagedown: 34
      };
      var w3cKeys = {
        enter: "Enter",
        tab: "Tab",
        delete: "Delete",
        esc: "Esc",
        escape: "Escape",
        space: " ",
        up: "Up",
        left: "Left",
        right: "Right",
        down: "Down",
        end: "End",
        home: "Home",
        backspace: "Backspace",
        insert: "Insert",
        pageup: "PageUp",
        pagedown: "PageDown"
      };
      var codeToKeyNameMap = Object.entries(modifiers).reduce(function (acc, ref) {
        var obj;
        var key = ref[0];
        var value = ref[1];
        return Object.assign(acc, (obj = {}, obj[value] = w3cKeys[key], obj));
      }, {});
      function getOptions(eventParams) {
        var modifier = eventParams.modifier;
        var meta = eventParams.meta;
        var options = eventParams.options;
        var keyCode = modifiers[modifier] || options.keyCode || options.code;
        var key = codeToKeyNameMap[keyCode];
        return Object.assign({}, options, {
          bubbles: meta.bubbles,
          cancelable: meta.cancelable,
          keyCode: keyCode,
          code: keyCode,
          key: key || options.key
        });
      }
      function createEvent(eventParams) {
        var eventType = eventParams.eventType;
        var meta = eventParams.meta;
        if (meta === void 0) meta = {};
        var SupportedEventInterface = typeof window[meta.eventInterface] === "function" ? window[meta.eventInterface] : window.Event;
        var event = new SupportedEventInterface(eventType, getOptions(eventParams));
        return event;
      }
      function createOldEvent(eventParams) {
        var eventType = eventParams.eventType;
        var modifier = eventParams.modifier;
        var meta = eventParams.meta;
        var bubbles = meta.bubbles;
        var cancelable = meta.cancelable;
        var event = document.createEvent("Event");
        event.initEvent(eventType, bubbles, cancelable);
        event.keyCode = modifiers[modifier];
        return event;
      }
      function createDOMEvent(type, options) {
        var ref = type.split(".");
        var eventType = ref[0];
        var modifier = ref[1];
        var meta = domEventTypes$2[eventType] || defaultEventType;
        var eventParams = {
          eventType: eventType,
          modifier: modifier,
          meta: meta,
          options: options
        };
        var event = typeof window.Event === "function" ? createEvent(eventParams) : createOldEvent(eventParams);
        var eventPrototype = Object.getPrototypeOf(event);
        Object.keys(options || ({})).forEach(function (key) {
          var propertyDescriptor = Object.getOwnPropertyDescriptor(eventPrototype, key);
          var canSetProperty = !(propertyDescriptor && propertyDescriptor.setter === undefined);
          if (canSetProperty) {
            event[key] = options[key];
          }
        });
        return event;
      }
      var Wrapper = function Wrapper(node, options, isVueWrapper) {
        var vnode = node instanceof Element ? null : node;
        var element = node instanceof Element ? node : node.elm;
        if (!isVueWrapper) {
          Object.defineProperty(this, "rootNode", {
            get: function () {
              return vnode || element;
            },
            set: function () {
              return throwError("wrapper.rootNode is read-only");
            }
          });
          Object.defineProperty(this, "vnode", {
            get: function () {
              return vnode;
            },
            set: function () {
              return throwError("wrapper.vnode is read-only");
            }
          });
          Object.defineProperty(this, "element", {
            get: function () {
              return element;
            },
            set: function () {
              return throwError("wrapper.element is read-only");
            }
          });
          Object.defineProperty(this, "vm", {
            get: function () {
              return undefined;
            },
            set: function () {
              return throwError("wrapper.vm is read-only");
            }
          });
        }
        var frozenOptions = Object.freeze(options);
        Object.defineProperty(this, "options", {
          get: function () {
            return frozenOptions;
          },
          set: function () {
            return throwError("wrapper.options is read-only");
          }
        });
        if (this.vnode && (this.vnode[FUNCTIONAL_OPTIONS] || this.vnode.functionalContext)) {
          this.isFunctionalComponent = true;
        }
      };
      Wrapper.prototype.__warnIfDestroyed = function __warnIfDestroyed() {
        if (!this.exists()) {
          warn("Operations on destroyed component are discouraged");
        }
      };
      Wrapper.prototype.at = function at() {
        this.__warnIfDestroyed();
        throwError("at() must be called on a WrapperArray");
      };
      Wrapper.prototype.attributes = function attributes(key) {
        this.__warnIfDestroyed();
        var attributes = this.element.attributes;
        var attributeMap = {};
        for (var i = 0; i < attributes.length; i++) {
          var att = attributes.item(i);
          attributeMap[att.localName] = att.value;
        }
        return key ? attributeMap[key] : attributeMap;
      };
      Wrapper.prototype.classes = function classes(className) {
        var this$1 = this;
        this.__warnIfDestroyed();
        var classAttribute = this.element.getAttribute("class");
        var classes = classAttribute ? classAttribute.split(" ") : [];
        if (this.vm && this.vm.$style) {
          var cssModuleIdentifiers = Object.keys(this.vm.$style).reduce(function (acc, key) {
            var moduleIdent = this$1.vm.$style[key];
            if (moduleIdent) {
              acc[moduleIdent.split(" ")[0]] = key;
            }
            return acc;
          }, {});
          classes = classes.map(function (name) {
            return cssModuleIdentifiers[name] || name;
          });
        }
        return className ? !!(classes.indexOf(className) > -1) : classes;
      };
      Wrapper.prototype.contains = function contains(rawSelector) {
        warnDeprecated("contains", "Use `wrapper.find`, `wrapper.findComponent` or `wrapper.get` instead");
        this.__warnIfDestroyed();
        var selector = getSelector(rawSelector, "contains");
        var nodes = find(this.rootNode, this.vm, selector);
        return nodes.length > 0;
      };
      Wrapper.prototype.destroy = function destroy() {
        if (!this.vm && !this.isFunctionalComponent) {
          throwError("wrapper.destroy() can only be called on a Vue instance or " + "functional component.");
        }
        if (this.element.parentNode) {
          this.element.parentNode.removeChild(this.element);
        }
        if (this.vm) {
          this.vm.$destroy();
          throwIfInstancesThrew(this.vm);
        }
      };
      Wrapper.prototype.emitted = function emitted(event) {
        if (!this._emitted && !this.vm) {
          throwError("wrapper.emitted() can only be called on a Vue instance");
        }
        if (event) {
          return this._emitted[event];
        }
        return this._emitted;
      };
      Wrapper.prototype.emittedByOrder = function emittedByOrder() {
        warnDeprecated("emittedByOrder", "Use `wrapper.emitted` instead");
        if (!this._emittedByOrder && !this.vm) {
          throwError("wrapper.emittedByOrder() can only be called on a Vue instance");
        }
        return this._emittedByOrder;
      };
      Wrapper.prototype.exists = function exists() {
        if (this.vm) {
          return !!this.vm && !this.vm._isDestroyed;
        }
        return true;
      };
      Wrapper.prototype.filter = function filter() {
        throwError("filter() must be called on a WrapperArray");
      };
      Wrapper.prototype.get = function get(rawSelector) {
        this.__warnIfDestroyed();
        var found = this.find(rawSelector);
        if (found instanceof ErrorWrapper) {
          throw new Error("Unable to find " + rawSelector + " within: " + this.html());
        }
        return found;
      };
      Wrapper.prototype.getComponent = function getComponent(rawSelector) {
        this.__warnIfDestroyed();
        var found = this.findComponent(rawSelector);
        if (found instanceof ErrorWrapper) {
          throw new Error("Unable to get " + rawSelector + " within: " + this.html());
        }
        return found;
      };
      Wrapper.prototype.find = function find(rawSelector) {
        this.__warnIfDestroyed();
        var selector = getSelector(rawSelector, "find");
        if (selector.type !== DOM_SELECTOR) {
          warnDeprecated("finding components with `find` or `get`", "Use `findComponent` and `getComponent` instead");
        }
        return this.__find(rawSelector, selector);
      };
      Wrapper.prototype.findComponent = function findComponent(rawSelector) {
        this.__warnIfDestroyed();
        var selector = getSelector(rawSelector, "findComponent");
        if (!this.vm && !this.isFunctionalComponent) {
          throwError("You cannot chain findComponent off a DOM element. It can only be used on Vue Components.");
        }
        if (selector.type === DOM_SELECTOR) {
          throwError("findComponent requires a Vue constructor or valid find object. If you are searching for DOM nodes, use `find` instead");
        }
        return this.__find(rawSelector, selector);
      };
      Wrapper.prototype.__find = function __find(rawSelector, selector) {
        var node = find(this.rootNode, this.vm, selector)[0];
        if (!node) {
          return new ErrorWrapper(rawSelector);
        }
        var wrapper = createWrapper(node, this.options);
        wrapper.selector = rawSelector;
        return wrapper;
      };
      Wrapper.prototype.findAll = function findAll(rawSelector) {
        this.__warnIfDestroyed();
        var selector = getSelector(rawSelector, "findAll");
        if (selector.type !== DOM_SELECTOR) {
          warnDeprecated("finding components with `findAll`", "Use `findAllComponents` instead");
        }
        return this.__findAll(rawSelector, selector);
      };
      Wrapper.prototype.findAllComponents = function findAllComponents(rawSelector) {
        this.__warnIfDestroyed();
        var selector = getSelector(rawSelector, "findAll");
        if (!this.vm) {
          throwError("You cannot chain findAllComponents off a DOM element. It can only be used on Vue Components.");
        }
        if (selector.type === DOM_SELECTOR) {
          throwError("findAllComponents requires a Vue constructor or valid find object. If you are searching for DOM nodes, use `find` instead");
        }
        return this.__findAll(rawSelector, selector);
      };
      Wrapper.prototype.__findAll = function __findAll(rawSelector, selector) {
        var this$1 = this;
        var nodes = find(this.rootNode, this.vm, selector);
        var wrappers = nodes.map(function (node) {
          var wrapper = createWrapper(node, this$1.options);
          wrapper.selector = rawSelector;
          return wrapper;
        });
        var wrapperArray = new WrapperArray(wrappers);
        wrapperArray.selector = rawSelector;
        return wrapperArray;
      };
      Wrapper.prototype.html = function html() {
        this.__warnIfDestroyed();
        return pretty(this.element.outerHTML);
      };
      Wrapper.prototype.is = function is(rawSelector) {
        this.__warnIfDestroyed();
        var selector = getSelector(rawSelector, "is");
        if (selector.type === DOM_SELECTOR) {
          warnDeprecated("checking tag name with `is`", "Use `element.tagName` instead");
        }
        if (selector.type === REF_SELECTOR) {
          throwError("$ref selectors can not be used with wrapper.is()");
        }
        return matches(this.rootNode, selector);
      };
      Wrapper.prototype.isEmpty = function isEmpty() {
        warnDeprecated("isEmpty", "Consider a custom matcher such as those provided in jest-dom: https://github.com/testing-library/jest-dom#tobeempty. " + "When using with findComponent, access the DOM element with findComponent(Comp).element");
        this.__warnIfDestroyed();
        if (!this.vnode) {
          return this.element.innerHTML === "";
        }
        var nodes = [];
        var node = this.vnode;
        var i = 0;
        while (node) {
          if (node.child) {
            nodes.push(node.child._vnode);
          }
          node.children && node.children.forEach(function (n) {
            nodes.push(n);
          });
          node = nodes[i++];
        }
        return nodes.every(function (n) {
          return n.isComment || n.child;
        });
      };
      Wrapper.prototype.isVisible = function isVisible() {
        this.__warnIfDestroyed();
        return isElementVisible(this.element);
      };
      Wrapper.prototype.isVueInstance = function isVueInstance() {
        warnDeprecated("isVueInstance");
        this.__warnIfDestroyed();
        return !!this.vm;
      };
      Wrapper.prototype.name = function name() {
        warnDeprecated("name");
        this.__warnIfDestroyed();
        if (this.vm) {
          return this.vm.$options.name || this.vm.$options.extendOptions && this.vm.$options.extendOptions.name;
        }
        if (!this.vnode) {
          return this.element.tagName;
        }
        return this.vnode.tag;
      };
      Wrapper.prototype.overview = function overview() {
        var this$1 = this;
        warnDeprecated("overview");
        this.__warnIfDestroyed();
        if (!this.vm) {
          throwError("wrapper.overview() can only be called on a Vue instance");
        }
        var identation = 4;
        var formatJSON = function (json, replacer) {
          if (replacer === void 0) replacer = null;
          return JSON.stringify(json, replacer, identation).replace(/"/g, "");
        };
        var visibility = this.isVisible() ? "Visible" : "Not visible";
        var html = this.html() ? this.html().replace(/^(?!\s*$)/gm, (" ").repeat(identation)) + "\n" : "";
        var data = formatJSON(this.vm.$data);
        var computed = this.vm._computedWatchers ? formatJSON.apply(void 0, Object.keys(this.vm._computedWatchers).map(function (computedKey) {
          var obj;
          return (obj = {}, obj[computedKey] = this$1.vm[computedKey], obj);
        })) : this.vm.$options.computed ? formatJSON.apply(void 0, Object.entries(this.vm.$options.computed).map(function (ref) {
          var obj;
          var key = ref[0];
          var value = ref[1];
          return (obj = {}, obj[key] = value(), obj);
        })) : "{}";
        var emittedJSONReplacer = function (key, value) {
          return value instanceof Array ? value.map(function (calledWith, index) {
            var callParams = calledWith.map(function (param) {
              return typeof param === "object" ? JSON.stringify(param).replace(/"/g, "").replace(/,/g, ", ") : param;
            });
            return index + ": [ " + callParams.join(", ") + " ]";
          }) : value;
        };
        var emitted = formatJSON(this.emitted(), emittedJSONReplacer);
        console.log("\n" + "Wrapper (" + visibility + "):\n\n" + "Html:\n" + html + "\n" + "Data: " + data + "\n\n" + "Computed: " + computed + "\n\n" + "Emitted: " + emitted + "\n");
      };
      Wrapper.prototype.props = function props(key) {
        var this$1 = this;
        if (this.isFunctionalComponent) {
          throwError("wrapper.props() cannot be called on a mounted functional component.");
        }
        if (!this.vm) {
          throwError("wrapper.props() must be called on a Vue instance");
        }
        this.__warnIfDestroyed();
        var props = {};
        var keys = this.vm && this.vm.$options._propKeys;
        if (keys) {
          (keys || ({})).forEach(function (key) {
            if (this$1.vm) {
              props[key] = this$1.vm[key];
            }
          });
        }
        if (key) {
          return props[key];
        }
        return props;
      };
      Wrapper.prototype.setChecked = function setChecked(checked) {
        if (checked === void 0) checked = true;
        this.__warnIfDestroyed();
        if (typeof checked !== "boolean") {
          throwError("wrapper.setChecked() must be passed a boolean");
        }
        var tagName = this.element.tagName;
        var type = this.attributes().type;
        var event = getCheckedEvent();
        if (tagName === "INPUT" && type === "checkbox") {
          if (this.element.checked === checked) {
            return nextTick();
          }
          if (event !== "click" || isPhantomJS) {
            this.element.checked = checked;
          }
          return this.trigger(event);
        }
        if (tagName === "INPUT" && type === "radio") {
          if (!checked) {
            throwError("wrapper.setChecked() cannot be called with parameter false on a " + "<input type=\"radio\" /> element.");
          }
          if (this.element.checked === checked) {
            return nextTick();
          }
          if (event !== "click" || isPhantomJS) {
            this.element.selected = true;
          }
          return this.trigger(event);
        }
        throwError("wrapper.setChecked() cannot be called on this element");
        return nextTick();
      };
      Wrapper.prototype.setSelected = function setSelected() {
        this.__warnIfDestroyed();
        var tagName = this.element.tagName;
        if (tagName === "SELECT") {
          throwError("wrapper.setSelected() cannot be called on select. Call it on one of " + "its options");
        }
        if (tagName !== "OPTION") {
          throwError("wrapper.setSelected() cannot be called on this element");
        }
        if (this.element.selected) {
          return nextTick();
        }
        this.element.selected = true;
        var parentElement = this.element.parentElement;
        if (parentElement.tagName === "OPTGROUP") {
          parentElement = parentElement.parentElement;
        }
        return createWrapper(parentElement, this.options).trigger("change");
      };
      Wrapper.prototype.setData = function setData(data) {
        if (this.isFunctionalComponent) {
          throwError("wrapper.setData() cannot be called on a functional component");
        }
        if (!this.vm) {
          throwError("wrapper.setData() can only be called on a Vue instance");
        }
        this.__warnIfDestroyed();
        recursivelySetData(this.vm, this.vm, data);
        return nextTick();
      };
      Wrapper.prototype.setMethods = function setMethods(methods) {
        var this$1 = this;
        warnDeprecated("setMethods", "There is no clear migration path for setMethods - Vue does not support arbitrarily replacement of methods, nor should VTU. To stub a complex method extract it from the component and test it in isolation. Otherwise, the suggestion is to rethink those tests");
        if (!this.vm) {
          throwError("wrapper.setMethods() can only be called on a Vue instance");
        }
        this.__warnIfDestroyed();
        Object.keys(methods).forEach(function (key) {
          this$1.vm[key] = methods[key];
          this$1.vm.$options.methods[key] = methods[key];
        });
        if (this.vnode) {
          var context = this.vnode.context;
          if (context.$options.render) {
            context._update(context._render());
          }
        }
      };
      Wrapper.prototype.setProps = function setProps(data) {
        var this$1 = this;
        if (this.isFunctionalComponent) {
          throwError("wrapper.setProps() cannot be called on a functional component");
        }
        if (!this.vm) {
          throwError("wrapper.setProps() can only be called on a Vue instance");
        }
        if (!this.vm.$parent.$options.$_isWrapperParent) {
          throwError("wrapper.setProps() can only be called for top-level component");
        }
        this.__warnIfDestroyed();
        Object.keys(data).forEach(function (key) {
          if (typeof data[key] === "object" && data[key] !== null && data[key] === this$1.vm[key]) {
            throwError("wrapper.setProps() called with the same object of the existing " + key + " property. You must call wrapper.setProps() with a new " + "object to trigger reactivity");
          }
          if (VUE_VERSION <= 2.3 && (!this$1.vm || !this$1.vm.$options._propKeys || !this$1.vm.$options._propKeys.some(function (prop) {
            return prop === key;
          }))) {
            throwError("wrapper.setProps() called with " + key + " property which " + "is not defined on the component");
          }
          var parent = this$1.vm.$parent;
          parent.$set(parent.vueTestUtils_childProps, key, data[key]);
        });
        return nextTick();
      };
      Wrapper.prototype.setValue = function setValue(value) {
        var tagName = this.element.tagName;
        var type = this.attributes().type;
        this.__warnIfDestroyed();
        if (tagName === "OPTION") {
          throwError("wrapper.setValue() cannot be called on an <option> element. Use " + "wrapper.setSelected() instead");
        } else if (tagName === "INPUT" && type === "checkbox") {
          throwError("wrapper.setValue() cannot be called on a <input type=\"checkbox\" /> " + "element. Use wrapper.setChecked() instead");
        } else if (tagName === "INPUT" && type === "radio") {
          throwError("wrapper.setValue() cannot be called on a <input type=\"radio\" /> " + "element. Use wrapper.setChecked() instead");
        } else if (tagName === "SELECT") {
          if (Array.isArray(value)) {
            var options = this.element.options;
            for (var i = 0; i < options.length; i++) {
              var option = options[i];
              option.selected = value.indexOf(option.value) >= 0;
            }
          } else {
            this.element.value = value;
          }
          this.trigger("change");
          return nextTick();
        } else if (tagName === "INPUT" || tagName === "TEXTAREA") {
          this.element.value = value;
          this.trigger("input");
          if (this.element._vModifiers && this.element._vModifiers.lazy) {
            this.trigger("change");
          }
          return nextTick();
        }
        throwError("wrapper.setValue() cannot be called on this element");
        return nextTick();
      };
      Wrapper.prototype.text = function text() {
        this.__warnIfDestroyed();
        return this.element.textContent.trim();
      };
      Wrapper.prototype.__simulateTrigger = function __simulateTrigger(type, options) {
        var this$1 = this;
        var regularEventTrigger = function (type, options) {
          var event = createDOMEvent(type, options);
          return this$1.element.dispatchEvent(event);
        };
        var focusEventTrigger = function (type, options) {
          if (this$1.element instanceof HTMLElement) {
            return this$1.element.focus();
          }
          regularEventTrigger(type, options);
        };
        var triggerProcedureMap = {
          focus: focusEventTrigger,
          __default: regularEventTrigger
        };
        var triggerFn = triggerProcedureMap[type] || triggerProcedureMap.__default;
        return triggerFn(type, options);
      };
      Wrapper.prototype.trigger = function trigger(type, options) {
        if (options === void 0) options = {};
        this.__warnIfDestroyed();
        if (typeof type !== "string") {
          throwError("wrapper.trigger() must be passed a string");
        }
        if (options.target) {
          throwError("you cannot set the target value of an event. See the notes section " + "of the docs for more details—" + "https://vue-test-utils.vuejs.org/api/wrapper/trigger.html");
        }
        var supportedTags = ["BUTTON", "COMMAND", "FIELDSET", "KEYGEN", "OPTGROUP", "OPTION", "SELECT", "TEXTAREA", "INPUT"];
        var tagName = this.element.tagName;
        if (this.attributes().disabled && supportedTags.indexOf(tagName) > -1) {
          return nextTick();
        }
        this.__simulateTrigger(type, options);
        return nextTick();
      };
      var VueWrapper = (function (Wrapper) {
        function VueWrapper(vm, options) {
          var this$1 = this;
          Wrapper.call(this, vm._vnode, options, true);
          Object.defineProperty(this, "rootNode", {
            get: function () {
              return vm.$vnode || ({
                child: this$1.vm
              });
            },
            set: function () {
              return throwError("wrapper.vnode is read-only");
            }
          });
          Object.defineProperty(this, "vnode", {
            get: function () {
              return vm._vnode;
            },
            set: function () {
              return throwError("wrapper.vnode is read-only");
            }
          });
          Object.defineProperty(this, "element", {
            get: function () {
              return vm.$el;
            },
            set: function () {
              return throwError("wrapper.element is read-only");
            }
          });
          Object.defineProperty(this, "vm", {
            get: function () {
              return vm;
            },
            set: function () {
              return throwError("wrapper.vm is read-only");
            }
          });
          this.isFunctionalComponent = vm.$options._isFunctionalContainer;
          this._emitted = vm.__emitted;
          this._emittedByOrder = vm.__emittedByOrder;
        }
        if (Wrapper) VueWrapper.__proto__ = Wrapper;
        VueWrapper.prototype = Object.create(Wrapper && Wrapper.prototype);
        VueWrapper.prototype.constructor = VueWrapper;
        return VueWrapper;
      })(Wrapper);
      var isEnabled = false;
      var wrapperInstances = [];
      function resetAutoDestroyState() {
        isEnabled = false;
        wrapperInstances.length = 0;
      }
      function enableAutoDestroy(hook) {
        if (isEnabled) {
          throwError("enableAutoDestroy cannot be called more than once");
        }
        isEnabled = true;
        hook(function () {
          wrapperInstances.forEach(function (wrapper) {
            if (wrapper.vm || wrapper.isFunctionalComponent) {
              wrapper.destroy();
            }
          });
          wrapperInstances.length = 0;
        });
      }
      function trackInstance(wrapper) {
        if (!isEnabled) {
          return;
        }
        wrapperInstances.push(wrapper);
      }
      function createWrapper(node, options) {
        if (options === void 0) options = {};
        var componentInstance = node.child;
        if (componentInstance) {
          var wrapper$1 = new VueWrapper(componentInstance, options);
          trackInstance(wrapper$1);
          return wrapper$1;
        }
        var wrapper = node instanceof Vue__default["default"] ? new VueWrapper(node, options) : new Wrapper(node, options);
        trackInstance(wrapper);
        return wrapper;
      }
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      var _listCacheClear = listCacheClear;
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      var eq_1 = eq;
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq_1(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      var _assocIndexOf = assocIndexOf;
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key) {
        var data = this.__data__, index = _assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      var _listCacheDelete = listCacheDelete;
      function listCacheGet(key) {
        var data = this.__data__, index = _assocIndexOf(data, key);
        return index < 0 ? undefined : data[index][1];
      }
      var _listCacheGet = listCacheGet;
      function listCacheHas(key) {
        return _assocIndexOf(this.__data__, key) > -1;
      }
      var _listCacheHas = listCacheHas;
      function listCacheSet(key, value) {
        var data = this.__data__, index = _assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      var _listCacheSet = listCacheSet;
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = _listCacheClear;
      ListCache.prototype["delete"] = _listCacheDelete;
      ListCache.prototype.get = _listCacheGet;
      ListCache.prototype.has = _listCacheHas;
      ListCache.prototype.set = _listCacheSet;
      var _ListCache = ListCache;
      function stackClear() {
        this.__data__ = new _ListCache();
        this.size = 0;
      }
      var _stackClear = stackClear;
      function stackDelete(key) {
        var data = this.__data__, result = data["delete"](key);
        this.size = data.size;
        return result;
      }
      var _stackDelete = stackDelete;
      function stackGet(key) {
        return this.__data__.get(key);
      }
      var _stackGet = stackGet;
      function stackHas(key) {
        return this.__data__.has(key);
      }
      var _stackHas = stackHas;
      var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
      var _freeGlobal = freeGlobal;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = _freeGlobal || freeSelf || Function("return this")();
      var _root = root;
      var Symbol = _root.Symbol;
      var _Symbol = Symbol;
      var objectProto = Object.prototype;
      var hasOwnProperty$1 = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
      function getRawTag(value) {
        var isOwn = hasOwnProperty$1.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = undefined;
          var unmasked = true;
        } catch (e) {}
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      var _getRawTag = getRawTag;
      var objectProto$1 = Object.prototype;
      var nativeObjectToString$1 = objectProto$1.toString;
      function objectToString(value) {
        return nativeObjectToString$1.call(value);
      }
      var _objectToString = objectToString;
      var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
      var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
      function baseGetTag(value) {
        if (value == null) {
          return value === undefined ? undefinedTag : nullTag;
        }
        return symToStringTag$1 && (symToStringTag$1 in Object(value)) ? _getRawTag(value) : _objectToString(value);
      }
      var _baseGetTag = baseGetTag;
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      var isObject_1 = isObject;
      var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
      function isFunction(value) {
        if (!isObject_1(value)) {
          return false;
        }
        var tag = _baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      var isFunction_1 = isFunction;
      var coreJsData = _root["__core-js_shared__"];
      var _coreJsData = coreJsData;
      var maskSrcKey = (function () {
        var uid = (/[^.]+$/).exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      })();
      function isMasked(func) {
        return !!maskSrcKey && (maskSrcKey in func);
      }
      var _isMasked = isMasked;
      var funcProto = Function.prototype;
      var funcToString = funcProto.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {}
          try {
            return func + "";
          } catch (e$1) {}
        }
        return "";
      }
      var _toSource = toSource;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto$1 = Function.prototype, objectProto$2 = Object.prototype;
      var funcToString$1 = funcProto$1.toString;
      var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
      var reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      function baseIsNative(value) {
        if (!isObject_1(value) || _isMasked(value)) {
          return false;
        }
        var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
        return pattern.test(_toSource(value));
      }
      var _baseIsNative = baseIsNative;
      function getValue(object, key) {
        return object == null ? undefined : object[key];
      }
      var _getValue = getValue;
      function getNative(object, key) {
        var value = _getValue(object, key);
        return _baseIsNative(value) ? value : undefined;
      }
      var _getNative = getNative;
      var Map = _getNative(_root, "Map");
      var _Map = Map;
      var nativeCreate = _getNative(Object, "create");
      var _nativeCreate = nativeCreate;
      function hashClear() {
        this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
        this.size = 0;
      }
      var _hashClear = hashClear;
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      var _hashDelete = hashDelete;
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var objectProto$3 = Object.prototype;
      var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (_nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? undefined : result;
        }
        return hasOwnProperty$3.call(data, key) ? data[key] : undefined;
      }
      var _hashGet = hashGet;
      var objectProto$4 = Object.prototype;
      var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return _nativeCreate ? data[key] !== undefined : hasOwnProperty$4.call(data, key);
      }
      var _hashHas = hashHas;
      var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = _nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
        return this;
      }
      var _hashSet = hashSet;
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = _hashClear;
      Hash.prototype["delete"] = _hashDelete;
      Hash.prototype.get = _hashGet;
      Hash.prototype.has = _hashHas;
      Hash.prototype.set = _hashSet;
      var _Hash = Hash;
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new _Hash(),
          "map": new (_Map || _ListCache)(),
          "string": new _Hash()
        };
      }
      var _mapCacheClear = mapCacheClear;
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      var _isKeyable = isKeyable;
      function getMapData(map, key) {
        var data = map.__data__;
        return _isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      var _getMapData = getMapData;
      function mapCacheDelete(key) {
        var result = _getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      var _mapCacheDelete = mapCacheDelete;
      function mapCacheGet(key) {
        return _getMapData(this, key).get(key);
      }
      var _mapCacheGet = mapCacheGet;
      function mapCacheHas(key) {
        return _getMapData(this, key).has(key);
      }
      var _mapCacheHas = mapCacheHas;
      function mapCacheSet(key, value) {
        var data = _getMapData(this, key), size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      var _mapCacheSet = mapCacheSet;
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = _mapCacheClear;
      MapCache.prototype["delete"] = _mapCacheDelete;
      MapCache.prototype.get = _mapCacheGet;
      MapCache.prototype.has = _mapCacheHas;
      MapCache.prototype.set = _mapCacheSet;
      var _MapCache = MapCache;
      var LARGE_ARRAY_SIZE = 200;
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof _ListCache) {
          var pairs = data.__data__;
          if (!_Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new _MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      var _stackSet = stackSet;
      function Stack(entries) {
        var data = this.__data__ = new _ListCache(entries);
        this.size = data.size;
      }
      Stack.prototype.clear = _stackClear;
      Stack.prototype["delete"] = _stackDelete;
      Stack.prototype.get = _stackGet;
      Stack.prototype.has = _stackHas;
      Stack.prototype.set = _stackSet;
      var _Stack = Stack;
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      var _arrayEach = arrayEach;
      var defineProperty = (function () {
        try {
          var func = _getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {}
      })();
      var _defineProperty = defineProperty;
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && _defineProperty) {
          _defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      var _baseAssignValue = baseAssignValue;
      var objectProto$5 = Object.prototype;
      var hasOwnProperty$5 = objectProto$5.hasOwnProperty;
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty$5.call(object, key) && eq_1(objValue, value)) || value === undefined && !((key in object))) {
          _baseAssignValue(object, key, value);
        }
      }
      var _assignValue = assignValue;
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1, length = props.length;
        while (++index < length) {
          var key = props[index];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
          if (newValue === undefined) {
            newValue = source[key];
          }
          if (isNew) {
            _baseAssignValue(object, key, newValue);
          } else {
            _assignValue(object, key, newValue);
          }
        }
        return object;
      }
      var _copyObject = copyObject;
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      var _baseTimes = baseTimes;
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      var isObjectLike_1 = isObjectLike;
      var argsTag = "[object Arguments]";
      function baseIsArguments(value) {
        return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
      }
      var _baseIsArguments = baseIsArguments;
      var objectProto$6 = Object.prototype;
      var hasOwnProperty$6 = objectProto$6.hasOwnProperty;
      var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;
      var isArguments = _baseIsArguments((function () {
        return arguments;
      })()) ? _baseIsArguments : function (value) {
        return isObjectLike_1(value) && hasOwnProperty$6.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      var isArguments_1 = isArguments;
      var isArray = Array.isArray;
      var isArray_1 = isArray;
      function stubFalse() {
        return false;
      }
      var stubFalse_1 = stubFalse;
      var isBuffer_1$1 = createCommonjsModule(function (module, exports) {
        var freeExports = exports && !exports.nodeType && exports;
        var freeModule = freeExports && "object" == "object" && module && !module.nodeType && module;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        var Buffer = moduleExports ? _root.Buffer : undefined;
        var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
        var isBuffer = nativeIsBuffer || stubFalse_1;
        module.exports = isBuffer;
      });
      var MAX_SAFE_INTEGER = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      var _isIndex = isIndex;
      var MAX_SAFE_INTEGER$1 = 9007199254740991;
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
      }
      var isLength_1 = isLength;
      var argsTag$1 = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag$1 = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      function baseIsTypedArray(value) {
        return isObjectLike_1(value) && isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
      }
      var _baseIsTypedArray = baseIsTypedArray;
      function baseUnary(func) {
        return function (value) {
          return func(value);
        };
      }
      var _baseUnary = baseUnary;
      var _nodeUtil = createCommonjsModule(function (module, exports) {
        var freeExports = exports && !exports.nodeType && exports;
        var freeModule = freeExports && "object" == "object" && module && !module.nodeType && module;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        var freeProcess = moduleExports && _freeGlobal.process;
        var nodeUtil = (function () {
          try {
            var types = freeModule && freeModule.require && freeModule.require("util").types;
            if (types) {
              return types;
            }
            return freeProcess && freeProcess.binding && freeProcess.binding("util");
          } catch (e) {}
        })();
        module.exports = nodeUtil;
      });
      var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;
      var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
      var isTypedArray_1 = isTypedArray;
      var objectProto$7 = Object.prototype;
      var hasOwnProperty$7 = objectProto$7.hasOwnProperty;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray_1(value), isArg = !isArr && isArguments_1(value), isBuff = !isArr && !isArg && isBuffer_1$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray_1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? _baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty$7.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || _isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      var _arrayLikeKeys = arrayLikeKeys;
      var objectProto$8 = Object.prototype;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$8;
        return value === proto;
      }
      var _isPrototype = isPrototype;
      function overArg(func, transform) {
        return function (arg) {
          return func(transform(arg));
        };
      }
      var _overArg = overArg;
      var nativeKeys = _overArg(Object.keys, Object);
      var _nativeKeys = nativeKeys;
      var objectProto$9 = Object.prototype;
      var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
      function baseKeys(object) {
        if (!_isPrototype(object)) {
          return _nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty$8.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      var _baseKeys = baseKeys;
      function isArrayLike(value) {
        return value != null && isLength_1(value.length) && !isFunction_1(value);
      }
      var isArrayLike_1 = isArrayLike;
      function keys$1(object) {
        return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
      }
      var keys_1 = keys$1;
      function baseAssign(object, source) {
        return object && _copyObject(source, keys_1(source), object);
      }
      var _baseAssign = baseAssign;
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }
      var _nativeKeysIn = nativeKeysIn;
      var objectProto$a = Object.prototype;
      var hasOwnProperty$9 = objectProto$a.hasOwnProperty;
      function baseKeysIn(object) {
        if (!isObject_1(object)) {
          return _nativeKeysIn(object);
        }
        var isProto = _isPrototype(object), result = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty$9.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      var _baseKeysIn = baseKeysIn;
      function keysIn(object) {
        return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
      }
      var keysIn_1 = keysIn;
      function baseAssignIn(object, source) {
        return object && _copyObject(source, keysIn_1(source), object);
      }
      var _baseAssignIn = baseAssignIn;
      var _cloneBuffer = createCommonjsModule(function (module, exports) {
        var freeExports = exports && !exports.nodeType && exports;
        var freeModule = freeExports && "object" == "object" && module && !module.nodeType && module;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        var Buffer = moduleExports ? _root.Buffer : undefined, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result);
          return result;
        }
        module.exports = cloneBuffer;
      });
      function copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      var _copyArray = copyArray;
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      var _arrayFilter = arrayFilter;
      function stubArray() {
        return [];
      }
      var stubArray_1 = stubArray;
      var objectProto$b = Object.prototype;
      var propertyIsEnumerable$1 = objectProto$b.propertyIsEnumerable;
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbols = !nativeGetSymbols ? stubArray_1 : function (object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return _arrayFilter(nativeGetSymbols(object), function (symbol) {
          return propertyIsEnumerable$1.call(object, symbol);
        });
      };
      var _getSymbols = getSymbols;
      function copySymbols(source, object) {
        return _copyObject(source, _getSymbols(source), object);
      }
      var _copySymbols = copySymbols;
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      var _arrayPush = arrayPush;
      var getPrototype = _overArg(Object.getPrototypeOf, Object);
      var _getPrototype = getPrototype;
      var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
      var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function (object) {
        var result = [];
        while (object) {
          _arrayPush(result, _getSymbols(object));
          object = _getPrototype(object);
        }
        return result;
      };
      var _getSymbolsIn = getSymbolsIn;
      function copySymbolsIn(source, object) {
        return _copyObject(source, _getSymbolsIn(source), object);
      }
      var _copySymbolsIn = copySymbolsIn;
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
      }
      var _baseGetAllKeys = baseGetAllKeys;
      function getAllKeys(object) {
        return _baseGetAllKeys(object, keys_1, _getSymbols);
      }
      var _getAllKeys = getAllKeys;
      function getAllKeysIn(object) {
        return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
      }
      var _getAllKeysIn = getAllKeysIn;
      var DataView = _getNative(_root, "DataView");
      var _DataView = DataView;
      var Promise$1 = _getNative(_root, "Promise");
      var _Promise = Promise$1;
      var Set$1 = _getNative(_root, "Set");
      var _Set = Set$1;
      var WeakMap = _getNative(_root, "WeakMap");
      var _WeakMap = WeakMap;
      var mapTag$1 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$1 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
      var dataViewTag$1 = "[object DataView]";
      var dataViewCtorString = _toSource(_DataView), mapCtorString = _toSource(_Map), promiseCtorString = _toSource(_Promise), setCtorString = _toSource(_Set), weakMapCtorString = _toSource(_WeakMap);
      var getTag = _baseGetTag;
      if (_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$1 || _Map && getTag(new _Map()) != mapTag$1 || _Promise && getTag(_Promise.resolve()) != promiseTag || _Set && getTag(new _Set()) != setTag$1 || _WeakMap && getTag(new _WeakMap()) != weakMapTag$1) {
        getTag = function (value) {
          var result = _baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : undefined, ctorString = Ctor ? _toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag$1;
              case mapCtorString:
                return mapTag$1;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag$1;
              case weakMapCtorString:
                return weakMapTag$1;
            }
          }
          return result;
        };
      }
      var _getTag = getTag;
      var objectProto$c = Object.prototype;
      var hasOwnProperty$a = objectProto$c.hasOwnProperty;
      function initCloneArray(array) {
        var length = array.length, result = new array.constructor(length);
        if (length && typeof array[0] == "string" && hasOwnProperty$a.call(array, "index")) {
          result.index = array.index;
          result.input = array.input;
        }
        return result;
      }
      var _initCloneArray = initCloneArray;
      var Uint8Array = _root.Uint8Array;
      var _Uint8Array = Uint8Array;
      function cloneArrayBuffer(arrayBuffer) {
        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
        return result;
      }
      var _cloneArrayBuffer = cloneArrayBuffer;
      function cloneDataView(dataView, isDeep) {
        var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      var _cloneDataView = cloneDataView;
      var reFlags = /\w*$/;
      function cloneRegExp(regexp) {
        var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result.lastIndex = regexp.lastIndex;
        return result;
      }
      var _cloneRegExp = cloneRegExp;
      var symbolProto = _Symbol ? _Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
      function cloneSymbol(symbol) {
        return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
      }
      var _cloneSymbol = cloneSymbol;
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      var _cloneTypedArray = cloneTypedArray;
      var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag = "[object Symbol]";
      var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag$1:
            return _cloneArrayBuffer(object);
          case boolTag$1:
          case dateTag$1:
            return new Ctor(+object);
          case dataViewTag$2:
            return _cloneDataView(object, isDeep);
          case float32Tag$1:
          case float64Tag$1:
          case int8Tag$1:
          case int16Tag$1:
          case int32Tag$1:
          case uint8Tag$1:
          case uint8ClampedTag$1:
          case uint16Tag$1:
          case uint32Tag$1:
            return _cloneTypedArray(object, isDeep);
          case mapTag$2:
            return new Ctor();
          case numberTag$1:
          case stringTag$1:
            return new Ctor(object);
          case regexpTag$1:
            return _cloneRegExp(object);
          case setTag$2:
            return new Ctor();
          case symbolTag:
            return _cloneSymbol(object);
        }
      }
      var _initCloneByTag = initCloneByTag;
      var objectCreate = Object.create;
      var baseCreate = (function () {
        function object() {}
        return function (proto) {
          if (!isObject_1(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result = new object();
          object.prototype = undefined;
          return result;
        };
      })();
      var _baseCreate = baseCreate;
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !_isPrototype(object) ? _baseCreate(_getPrototype(object)) : {};
      }
      var _initCloneObject = initCloneObject;
      var mapTag$3 = "[object Map]";
      function baseIsMap(value) {
        return isObjectLike_1(value) && _getTag(value) == mapTag$3;
      }
      var _baseIsMap = baseIsMap;
      var nodeIsMap = _nodeUtil && _nodeUtil.isMap;
      var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;
      var isMap_1 = isMap;
      var setTag$3 = "[object Set]";
      function baseIsSet(value) {
        return isObjectLike_1(value) && _getTag(value) == setTag$3;
      }
      var _baseIsSet = baseIsSet;
      var nodeIsSet = _nodeUtil && _nodeUtil.isSet;
      var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;
      var isSet_1 = isSet;
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var argsTag$2 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", mapTag$4 = "[object Map]", numberTag$2 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$4 = "[object Set]", stringTag$2 = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag$2 = "[object WeakMap]";
      var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
      var cloneableTags = {};
      cloneableTags[argsTag$2] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] = cloneableTags[boolTag$2] = cloneableTags[dateTag$2] = cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] = cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] = cloneableTags[int32Tag$2] = cloneableTags[mapTag$4] = cloneableTags[numberTag$2] = cloneableTags[objectTag$2] = cloneableTags[regexpTag$2] = cloneableTags[setTag$4] = cloneableTags[stringTag$2] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] = cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
      cloneableTags[errorTag$1] = cloneableTags[funcTag$2] = cloneableTags[weakMapTag$2] = false;
      function baseClone(value, bitmask, customizer, key, object, stack) {
        var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
        if (customizer) {
          result = object ? customizer(value, key, object, stack) : customizer(value);
        }
        if (result !== undefined) {
          return result;
        }
        if (!isObject_1(value)) {
          return value;
        }
        var isArr = isArray_1(value);
        if (isArr) {
          result = _initCloneArray(value);
          if (!isDeep) {
            return _copyArray(value, result);
          }
        } else {
          var tag = _getTag(value), isFunc = tag == funcTag$2 || tag == genTag$1;
          if (isBuffer_1$1(value)) {
            return _cloneBuffer(value, isDeep);
          }
          if (tag == objectTag$2 || tag == argsTag$2 || isFunc && !object) {
            result = isFlat || isFunc ? {} : _initCloneObject(value);
            if (!isDeep) {
              return isFlat ? _copySymbolsIn(value, _baseAssignIn(result, value)) : _copySymbols(value, _baseAssign(result, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value : {};
            }
            result = _initCloneByTag(value, tag, isDeep);
          }
        }
        stack || (stack = new _Stack());
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result);
        if (isSet_1(value)) {
          value.forEach(function (subValue) {
            result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
          });
        } else if (isMap_1(value)) {
          value.forEach(function (subValue, key) {
            result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
          });
        }
        var keysFunc = isFull ? isFlat ? _getAllKeysIn : _getAllKeys : isFlat ? keysIn_1 : keys_1;
        var props = isArr ? undefined : keysFunc(value);
        _arrayEach(props || value, function (subValue, key) {
          if (props) {
            key = subValue;
            subValue = value[key];
          }
          _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
        return result;
      }
      var _baseClone = baseClone;
      var CLONE_DEEP_FLAG$1 = 1, CLONE_SYMBOLS_FLAG$1 = 4;
      function cloneDeep(value) {
        return _baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1);
      }
      var cloneDeep_1 = cloneDeep;
      function _createLocalVue(_Vue, config) {
        if (_Vue === void 0) _Vue = Vue__default["default"];
        if (config === void 0) config = {};
        var instance = _Vue.extend();
        Object.keys(_Vue).forEach(function (key) {
          if (!instance.hasOwnProperty(key)) {
            var original = _Vue[key];
            try {
              instance[key] = typeof original === "object" ? cloneDeep_1(original) : original;
            } catch (e) {
              instance[key] = original;
            }
          }
        });
        instance.config = cloneDeep_1(Vue__default["default"].config);
        instance.config.errorHandler = config.errorHandler;
        instance.config.optionMergeStrategies = Vue__default["default"].config.optionMergeStrategies;
        instance.options._base = instance;
        if (instance._installedPlugins && instance._installedPlugins.length) {
          instance._installedPlugins.length = 0;
        }
        var use = instance.use;
        instance.use = function (plugin) {
          var rest = [], len = arguments.length - 1;
          while (len-- > 0) rest[len] = arguments[len + 1];
          if (plugin.installed === true) {
            plugin.installed = false;
          }
          if (plugin.install && plugin.install.installed === true) {
            plugin.install.installed = false;
          }
          use.call.apply(use, [instance, plugin].concat(rest));
        };
        return instance;
      }
      function isValidSlot(slot) {
        return isVueComponent(slot) || typeof slot === "string";
      }
      function requiresTemplateCompiler(slot) {
        if (typeof slot === "string" && !vueTemplateCompiler.compileToFunctions) {
          throwError("vueTemplateCompiler is undefined, you must pass " + "precompiled components if vue-template-compiler is " + "undefined");
        }
      }
      function validateSlots(slots) {
        Object.keys(slots).forEach(function (key) {
          var slot = Array.isArray(slots[key]) ? slots[key] : [slots[key]];
          slot.forEach(function (slotValue) {
            if (!isValidSlot(slotValue)) {
              throwError("slots[key] must be a Component, string or an array " + "of Components");
            }
            requiresTemplateCompiler(slotValue);
          });
        });
      }
      function vueExtendUnsupportedOption(option) {
        return "options." + option + " is not supported for " + "components created with Vue.extend in Vue < 2.3. " + "You can set " + option + " to false to mount the component.";
      }
      var UNSUPPORTED_VERSION_OPTIONS = ["mocks", "stubs", "localVue"];
      function validateOptions(options, component) {
        if (options.attachTo && !isHTMLElement(options.attachTo) && !isDomSelector(options.attachTo)) {
          throwError("options.attachTo should be a valid HTMLElement or CSS selector string");
        }
        if (("attachToDocument" in options)) {
          warnDeprecated("options.attachToDocument is deprecated in favor of options.attachTo and will be removed in a future release");
        }
        if (options.parentComponent && !isPlainObject(options.parentComponent)) {
          throwError("options.parentComponent should be a valid Vue component options object");
        }
        if (!isFunctionalComponent(component) && options.context) {
          throwError("mount.context can only be used when mounting a functional component");
        }
        if (options.context && !isPlainObject(options.context)) {
          throwError("mount.context must be an object");
        }
        if (VUE_VERSION < 2.3 && isConstructor(component)) {
          UNSUPPORTED_VERSION_OPTIONS.forEach(function (option) {
            if (options[option]) {
              throwError(vueExtendUnsupportedOption(option));
            }
          });
        }
        if (options.slots) {
          compileTemplateForSlots(options.slots);
          validateSlots(options.slots);
        }
      }
      Vue__default["default"].config.productionTip = false;
      Vue__default["default"].config.devtools = false;
      function mount(component, options) {
        if (options === void 0) options = {};
        warnIfNoWindow();
        polyfill();
        addGlobalErrorHandler(Vue__default["default"]);
        var _Vue = _createLocalVue(options.localVue, options.localVue ? options.localVue.config : undefined);
        var mergedOptions = mergeOptions(options, config);
        validateOptions(mergedOptions, component);
        var parentVm = createInstance(component, mergedOptions, _Vue);
        var el = options.attachToDocument || options.attachTo instanceof HTMLBodyElement ? createElement() : options.attachTo;
        var vm = parentVm.$mount(el);
        component._Ctor = {};
        throwIfInstancesThrew(vm);
        var wrapperOptions = {
          attachedToDocument: !!el
        };
        var root = parentVm.$options._isFunctionalContainer ? vm._vnode : vm.$children[0];
        return createWrapper(root, wrapperOptions);
      }
      function shallowMount(component, options) {
        if (options === void 0) options = {};
        return mount(component, Object.assign({}, options, {
          shouldProxy: true
        }));
      }
      function createLocalVue(config) {
        if (config === void 0) config = {};
        return _createLocalVue(undefined, config);
      }
      var toTypes = [String, Object];
      var eventTypes = [String, Array];
      var RouterLinkStub = {
        name: "RouterLinkStub",
        props: {
          to: {
            type: toTypes,
            required: true
          },
          tag: {
            type: String,
            default: "a"
          },
          exact: Boolean,
          exactPath: Boolean,
          append: Boolean,
          replace: Boolean,
          activeClass: String,
          exactActiveClass: String,
          exactPathActiveClass: String,
          event: {
            type: eventTypes,
            default: "click"
          }
        },
        render: function render(h) {
          return h(this.tag, undefined, this.$slots.default);
        }
      };
      function shallow(component, options) {
        warn("shallow has been renamed to shallowMount. shallow " + "will be removed in 1.0.0, use shallowMount instead");
        return shallowMount(component, options);
      }
      exports.ErrorWrapper = ErrorWrapper;
      exports.RouterLinkStub = RouterLinkStub;
      exports.Wrapper = Wrapper;
      exports.WrapperArray = WrapperArray;
      exports.config = config;
      exports.createLocalVue = createLocalVue;
      exports.createWrapper = createWrapper;
      exports.enableAutoDestroy = enableAutoDestroy;
      exports.mount = mount;
      exports.resetAutoDestroyState = resetAutoDestroyState;
      exports.shallow = shallow;
      exports.shallowMount = shallowMount;
    }).call(this, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/@plastique/core/compileUtils/empty.ts"));
  },
  "./node_modules/setimmediate/setImmediate.js": function (module, exports, __webpack_require__) {
    (function (global, process) {
      (function (global, undefined) {
        "use strict";
        if (global.setImmediate) {
          return;
        }
        var nextHandle = 1;
        var tasksByHandle = {};
        var currentlyRunningATask = false;
        var doc = global.document;
        var registerImmediate;
        function setImmediate(callback) {
          if (typeof callback !== "function") {
            callback = new Function("" + callback);
          }
          var args = new Array(arguments.length - 1);
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
          }
          var task = {
            callback: callback,
            args: args
          };
          tasksByHandle[nextHandle] = task;
          registerImmediate(nextHandle);
          return nextHandle++;
        }
        function clearImmediate(handle) {
          delete tasksByHandle[handle];
        }
        function run(task) {
          var callback = task.callback;
          var args = task.args;
          switch (args.length) {
            case 0:
              callback();
              break;
            case 1:
              callback(args[0]);
              break;
            case 2:
              callback(args[0], args[1]);
              break;
            case 3:
              callback(args[0], args[1], args[2]);
              break;
            default:
              callback.apply(undefined, args);
              break;
          }
        }
        function runIfPresent(handle) {
          if (currentlyRunningATask) {
            setTimeout(runIfPresent, 0, handle);
          } else {
            var task = tasksByHandle[handle];
            if (task) {
              currentlyRunningATask = true;
              try {
                run(task);
              } finally {
                clearImmediate(handle);
                currentlyRunningATask = false;
              }
            }
          }
        }
        function installNextTickImplementation() {
          registerImmediate = function (handle) {
            process.nextTick(function () {
              runIfPresent(handle);
            });
          };
        }
        function canUsePostMessage() {
          if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
              postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
          }
        }
        function installPostMessageImplementation() {
          var messagePrefix = "setImmediate$" + Math.random() + "$";
          var onGlobalMessage = function (event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
              runIfPresent(+event.data.slice(messagePrefix.length));
            }
          };
          if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
          } else {
            global.attachEvent("onmessage", onGlobalMessage);
          }
          registerImmediate = function (handle) {
            global.postMessage(messagePrefix + handle, "*");
          };
        }
        function installMessageChannelImplementation() {
          var channel = new MessageChannel();
          channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
          };
          registerImmediate = function (handle) {
            channel.port2.postMessage(handle);
          };
        }
        function installReadyStateChangeImplementation() {
          var html = doc.documentElement;
          registerImmediate = function (handle) {
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
              runIfPresent(handle);
              script.onreadystatechange = null;
              html.removeChild(script);
              script = null;
            };
            html.appendChild(script);
          };
        }
        function installSetTimeoutImplementation() {
          registerImmediate = function (handle) {
            setTimeout(runIfPresent, 0, handle);
          };
        }
        var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
        attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
        if (({}).toString.call(global.process) === "[object process]") {
          installNextTickImplementation();
        } else if (canUsePostMessage()) {
          installPostMessageImplementation();
        } else if (global.MessageChannel) {
          installMessageChannelImplementation();
        } else if (doc && ("onreadystatechange" in doc.createElement("script"))) {
          installReadyStateChangeImplementation();
        } else {
          installSetTimeoutImplementation();
        }
        attachTo.setImmediate = setImmediate;
        attachTo.clearImmediate = clearImmediate;
      })(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
    }).call(this, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/@plastique/core/compileUtils/empty.ts"));
  },
  "./node_modules/timers-browserify/main.js": function (module, exports, __webpack_require__) {
    (function (global) {
      var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
      var apply = Function.prototype.apply;
      exports.setTimeout = function () {
        return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
      };
      exports.setInterval = function () {
        return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
      };
      exports.clearTimeout = exports.clearInterval = function (timeout) {
        if (timeout) {
          timeout.close();
        }
      };
      function Timeout(id, clearFn) {
        this._id = id;
        this._clearFn = clearFn;
      }
      Timeout.prototype.unref = Timeout.prototype.ref = function () {};
      Timeout.prototype.close = function () {
        this._clearFn.call(scope, this._id);
      };
      exports.enroll = function (item, msecs) {
        clearTimeout(item._idleTimeoutId);
        item._idleTimeout = msecs;
      };
      exports.unenroll = function (item) {
        clearTimeout(item._idleTimeoutId);
        item._idleTimeout = -1;
      };
      exports._unrefActive = exports.active = function (item) {
        clearTimeout(item._idleTimeoutId);
        var msecs = item._idleTimeout;
        if (msecs >= 0) {
          item._idleTimeoutId = setTimeout(function onTimeout() {
            if (item._onTimeout) item._onTimeout();
          }, msecs);
        }
      };
      __webpack_require__("./node_modules/setimmediate/setImmediate.js");
      exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
      exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
    }).call(this, __webpack_require__("./node_modules/webpack/buildin/global.js"));
  },
  "./node_modules/vue-template-compiler/browser.js": function (module, exports, __webpack_require__) {
    (function (global, setImmediate) {
      (function (global, factory) {
        true ? factory(exports) : undefined;
      })(this, function (exports) {
        "use strict";
        var splitRE = /\r?\n/g;
        var emptyRE = /^\s*$/;
        var needFixRE = /^(\r?\n)*[\t\s]/;
        var deIndent = function deindent(str) {
          if (!needFixRE.test(str)) {
            return str;
          }
          var lines = str.split(splitRE);
          var min = Infinity;
          var type, cur, c;
          for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (!emptyRE.test(line)) {
              if (!type) {
                c = line.charAt(0);
                if (c === " " || c === "\t") {
                  type = c;
                  cur = count(line, type);
                  if (cur < min) {
                    min = cur;
                  }
                } else {
                  return str;
                }
              } else {
                cur = count(line, type);
                if (cur < min) {
                  min = cur;
                }
              }
            }
          }
          return lines.map(function (line) {
            return line.slice(min);
          }).join("\n");
        };
        function count(line, type) {
          var i = 0;
          while (line.charAt(i) === type) {
            i++;
          }
          return i;
        }
        var emptyObject = Object.freeze({});
        function isUndef(v) {
          return v === undefined || v === null;
        }
        function isPrimitive(value) {
          return typeof value === "string" || typeof value === "number" || typeof value === "symbol" || typeof value === "boolean";
        }
        function isObject(obj) {
          return obj !== null && typeof obj === "object";
        }
        var _toString = Object.prototype.toString;
        function toRawType(value) {
          return _toString.call(value).slice(8, -1);
        }
        function isPlainObject(obj) {
          return _toString.call(obj) === "[object Object]";
        }
        function isValidArrayIndex(val) {
          var n = parseFloat(String(val));
          return n >= 0 && Math.floor(n) === n && isFinite(val);
        }
        function makeMap(str, expectsLowerCase) {
          var map = Object.create(null);
          var list = str.split(",");
          for (var i = 0; i < list.length; i++) {
            map[list[i]] = true;
          }
          return expectsLowerCase ? function (val) {
            return map[val.toLowerCase()];
          } : function (val) {
            return map[val];
          };
        }
        var isBuiltInTag = makeMap("slot,component", true);
        var isReservedAttribute = makeMap("key,ref,slot,slot-scope,is");
        function remove(arr, item) {
          if (arr.length) {
            var index = arr.indexOf(item);
            if (index > -1) {
              return arr.splice(index, 1);
            }
          }
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        function hasOwn(obj, key) {
          return hasOwnProperty.call(obj, key);
        }
        function cached(fn) {
          var cache = Object.create(null);
          return function cachedFn(str) {
            var hit = cache[str];
            return hit || (cache[str] = fn(str));
          };
        }
        var camelizeRE = /-(\w)/g;
        var camelize = cached(function (str) {
          return str.replace(camelizeRE, function (_, c) {
            return c ? c.toUpperCase() : "";
          });
        });
        var hyphenateRE = /\B([A-Z])/g;
        var hyphenate = cached(function (str) {
          return str.replace(hyphenateRE, "-$1").toLowerCase();
        });
        function polyfillBind(fn, ctx) {
          function boundFn(a) {
            var l = arguments.length;
            return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
          }
          boundFn._length = fn.length;
          return boundFn;
        }
        function nativeBind(fn, ctx) {
          return fn.bind(ctx);
        }
        var bind = Function.prototype.bind ? nativeBind : polyfillBind;
        function extend(to, _from) {
          for (var key in _from) {
            to[key] = _from[key];
          }
          return to;
        }
        function noop(a, b, c) {}
        var no = function (a, b, c) {
          return false;
        };
        var identity = function (_) {
          return _;
        };
        function genStaticKeys(modules) {
          return modules.reduce(function (keys, m) {
            return keys.concat(m.staticKeys || []);
          }, []).join(",");
        }
        var isUnaryTag = makeMap("area,base,br,col,embed,frame,hr,img,input,isindex,keygen," + "link,meta,param,source,track,wbr");
        var canBeLeftOpenTag = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source");
        var isNonPhrasingTag = makeMap("address,article,aside,base,blockquote,body,caption,col,colgroup,dd," + "details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form," + "h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta," + "optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead," + "title,tr,track");
        var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
        function def(obj, key, val, enumerable) {
          Object.defineProperty(obj, key, {
            value: val,
            enumerable: !!enumerable,
            writable: true,
            configurable: true
          });
        }
        var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
        var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
        var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + unicodeRegExp.source + "]*";
        var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
        var startTagOpen = new RegExp("^<" + qnameCapture);
        var startTagClose = /^\s*(\/?)>/;
        var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
        var doctype = /^<!DOCTYPE [^>]+>/i;
        var comment = /^<!\--/;
        var conditionalComment = /^<!\[/;
        var isPlainTextElement = makeMap("script,style,textarea", true);
        var reCache = {};
        var decodingMap = {
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": "\"",
          "&amp;": "&",
          "&#10;": "\n",
          "&#9;": "\t",
          "&#39;": "'"
        };
        var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
        var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;
        var isIgnoreNewlineTag = makeMap("pre,textarea", true);
        var shouldIgnoreFirstNewline = function (tag, html) {
          return tag && isIgnoreNewlineTag(tag) && html[0] === "\n";
        };
        function decodeAttr(value, shouldDecodeNewlines) {
          var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
          return value.replace(re, function (match) {
            return decodingMap[match];
          });
        }
        function parseHTML(html, options) {
          var stack = [];
          var expectHTML = options.expectHTML;
          var isUnaryTag$$1 = options.isUnaryTag || no;
          var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
          var index = 0;
          var last, lastTag;
          while (html) {
            last = html;
            if (!lastTag || !isPlainTextElement(lastTag)) {
              var textEnd = html.indexOf("<");
              if (textEnd === 0) {
                if (comment.test(html)) {
                  var commentEnd = html.indexOf("-->");
                  if (commentEnd >= 0) {
                    if (options.shouldKeepComment) {
                      options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
                    }
                    advance(commentEnd + 3);
                    continue;
                  }
                }
                if (conditionalComment.test(html)) {
                  var conditionalEnd = html.indexOf("]>");
                  if (conditionalEnd >= 0) {
                    advance(conditionalEnd + 2);
                    continue;
                  }
                }
                var doctypeMatch = html.match(doctype);
                if (doctypeMatch) {
                  advance(doctypeMatch[0].length);
                  continue;
                }
                var endTagMatch = html.match(endTag);
                if (endTagMatch) {
                  var curIndex = index;
                  advance(endTagMatch[0].length);
                  parseEndTag(endTagMatch[1], curIndex, index);
                  continue;
                }
                var startTagMatch = parseStartTag();
                if (startTagMatch) {
                  handleStartTag(startTagMatch);
                  if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
                    advance(1);
                  }
                  continue;
                }
              }
              var text = void 0, rest = void 0, next = void 0;
              if (textEnd >= 0) {
                rest = html.slice(textEnd);
                while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
                  next = rest.indexOf("<", 1);
                  if (next < 0) {
                    break;
                  }
                  textEnd += next;
                  rest = html.slice(textEnd);
                }
                text = html.substring(0, textEnd);
              }
              if (textEnd < 0) {
                text = html;
              }
              if (text) {
                advance(text.length);
              }
              if (options.chars && text) {
                options.chars(text, index - text.length, index);
              }
            } else {
              var endTagLength = 0;
              var stackedTag = lastTag.toLowerCase();
              var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp("([\\s\\S]*?)(</" + stackedTag + "[^>]*>)", "i"));
              var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
                endTagLength = endTag.length;
                if (!isPlainTextElement(stackedTag) && stackedTag !== "noscript") {
                  text = text.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1");
                }
                if (shouldIgnoreFirstNewline(stackedTag, text)) {
                  text = text.slice(1);
                }
                if (options.chars) {
                  options.chars(text);
                }
                return "";
              });
              index += html.length - rest$1.length;
              html = rest$1;
              parseEndTag(stackedTag, index - endTagLength, index);
            }
            if (html === last) {
              options.chars && options.chars(html);
              if (!stack.length && options.warn) {
                options.warn("Mal-formatted tag at end of template: \"" + html + "\"", {
                  start: index + html.length
                });
              }
              break;
            }
          }
          parseEndTag();
          function advance(n) {
            index += n;
            html = html.substring(n);
          }
          function parseStartTag() {
            var start = html.match(startTagOpen);
            if (start) {
              var match = {
                tagName: start[1],
                attrs: [],
                start: index
              };
              advance(start[0].length);
              var end, attr;
              while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
                attr.start = index;
                advance(attr[0].length);
                attr.end = index;
                match.attrs.push(attr);
              }
              if (end) {
                match.unarySlash = end[1];
                advance(end[0].length);
                match.end = index;
                return match;
              }
            }
          }
          function handleStartTag(match) {
            var tagName = match.tagName;
            var unarySlash = match.unarySlash;
            if (expectHTML) {
              if (lastTag === "p" && isNonPhrasingTag(tagName)) {
                parseEndTag(lastTag);
              }
              if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
                parseEndTag(tagName);
              }
            }
            var unary = isUnaryTag$$1(tagName) || !!unarySlash;
            var l = match.attrs.length;
            var attrs = new Array(l);
            for (var i = 0; i < l; i++) {
              var args = match.attrs[i];
              var value = args[3] || args[4] || args[5] || "";
              var shouldDecodeNewlines = tagName === "a" && args[1] === "href" ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
              attrs[i] = {
                name: args[1],
                value: decodeAttr(value, shouldDecodeNewlines)
              };
              if (options.outputSourceRange) {
                attrs[i].start = args.start + args[0].match(/^\s*/).length;
                attrs[i].end = args.end;
              }
            }
            if (!unary) {
              stack.push({
                tag: tagName,
                lowerCasedTag: tagName.toLowerCase(),
                attrs: attrs,
                start: match.start,
                end: match.end
              });
              lastTag = tagName;
            }
            if (options.start) {
              options.start(tagName, attrs, unary, match.start, match.end);
            }
          }
          function parseEndTag(tagName, start, end) {
            var pos, lowerCasedTagName;
            if (start == null) {
              start = index;
            }
            if (end == null) {
              end = index;
            }
            if (tagName) {
              lowerCasedTagName = tagName.toLowerCase();
              for (pos = stack.length - 1; pos >= 0; pos--) {
                if (stack[pos].lowerCasedTag === lowerCasedTagName) {
                  break;
                }
              }
            } else {
              pos = 0;
            }
            if (pos >= 0) {
              for (var i = stack.length - 1; i >= pos; i--) {
                if (i > pos || !tagName && options.warn) {
                  options.warn("tag <" + stack[i].tag + "> has no matching end tag.", {
                    start: stack[i].start,
                    end: stack[i].end
                  });
                }
                if (options.end) {
                  options.end(stack[i].tag, start, end);
                }
              }
              stack.length = pos;
              lastTag = pos && stack[pos - 1].tag;
            } else if (lowerCasedTagName === "br") {
              if (options.start) {
                options.start(tagName, [], true, start, end);
              }
            } else if (lowerCasedTagName === "p") {
              if (options.start) {
                options.start(tagName, [], false, start, end);
              }
              if (options.end) {
                options.end(tagName, start, end);
              }
            }
          }
        }
        var splitRE$1 = /\r?\n/g;
        var replaceRE = /./g;
        var isSpecialTag = makeMap("script,style,template", true);
        function parseComponent(content, options) {
          if (options === void 0) options = {};
          var sfc = {
            template: null,
            script: null,
            styles: [],
            customBlocks: [],
            errors: []
          };
          var depth = 0;
          var currentBlock = null;
          var warn = function (msg) {
            sfc.errors.push(msg);
          };
          if (options.outputSourceRange) {
            warn = function (msg, range) {
              var data = {
                msg: msg
              };
              if (range.start != null) {
                data.start = range.start;
              }
              if (range.end != null) {
                data.end = range.end;
              }
              sfc.errors.push(data);
            };
          }
          function start(tag, attrs, unary, start, end) {
            if (depth === 0) {
              currentBlock = {
                type: tag,
                content: "",
                start: end,
                attrs: attrs.reduce(function (cumulated, ref) {
                  var name = ref.name;
                  var value = ref.value;
                  cumulated[name] = value || true;
                  return cumulated;
                }, {})
              };
              if (isSpecialTag(tag)) {
                checkAttrs(currentBlock, attrs);
                if (tag === "style") {
                  sfc.styles.push(currentBlock);
                } else {
                  sfc[tag] = currentBlock;
                }
              } else {
                sfc.customBlocks.push(currentBlock);
              }
            }
            if (!unary) {
              depth++;
            }
          }
          function checkAttrs(block, attrs) {
            for (var i = 0; i < attrs.length; i++) {
              var attr = attrs[i];
              if (attr.name === "lang") {
                block.lang = attr.value;
              }
              if (attr.name === "scoped") {
                block.scoped = true;
              }
              if (attr.name === "module") {
                block.module = attr.value || true;
              }
              if (attr.name === "src") {
                block.src = attr.value;
              }
            }
          }
          function end(tag, start) {
            if (depth === 1 && currentBlock) {
              currentBlock.end = start;
              var text = content.slice(currentBlock.start, currentBlock.end);
              if (options.deindent !== false) {
                text = deIndent(text);
              }
              if (currentBlock.type !== "template" && options.pad) {
                text = padContent(currentBlock, options.pad) + text;
              }
              currentBlock.content = text;
              currentBlock = null;
            }
            depth--;
          }
          function padContent(block, pad) {
            if (pad === "space") {
              return content.slice(0, block.start).replace(replaceRE, " ");
            } else {
              var offset = content.slice(0, block.start).split(splitRE$1).length;
              var padChar = block.type === "script" && !block.lang ? "//\n" : "\n";
              return Array(offset).join(padChar);
            }
          }
          parseHTML(content, {
            warn: warn,
            start: start,
            end: end,
            outputSourceRange: options.outputSourceRange
          });
          return sfc;
        }
        var hasProto = ("__proto__" in ({}));
        var inBrowser = typeof window !== "undefined";
        var inWeex = typeof WXEnvironment !== "undefined" && !!WXEnvironment.platform;
        var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
        var UA = inBrowser && window.navigator.userAgent.toLowerCase();
        var isIE = UA && (/msie|trident/).test(UA);
        var isIE9 = UA && UA.indexOf("msie 9.0") > 0;
        var isEdge = UA && UA.indexOf("edge/") > 0;
        var isAndroid = UA && UA.indexOf("android") > 0 || weexPlatform === "android";
        var isIOS = UA && (/iphone|ipad|ipod|ios/).test(UA) || weexPlatform === "ios";
        var isChrome = UA && (/chrome\/\d+/).test(UA) && !isEdge;
        var isPhantomJS = UA && (/phantomjs/).test(UA);
        var isFF = UA && UA.match(/firefox\/(\d+)/);
        var nativeWatch = ({}).watch;
        if (inBrowser) {
          try {
            var opts = {};
            Object.defineProperty(opts, "passive", {
              get: function get() {}
            });
            window.addEventListener("test-passive", null, opts);
          } catch (e) {}
        }
        var _isServer;
        var isServerRendering = function () {
          if (_isServer === undefined) {
            if (!inBrowser && !inWeex && typeof global !== "undefined") {
              _isServer = global["process"] && global["process"].env.VUE_ENV === "server";
            } else {
              _isServer = false;
            }
          }
          return _isServer;
        };
        var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        function isNative(Ctor) {
          return typeof Ctor === "function" && (/native code/).test(Ctor.toString());
        }
        var hasSymbol = typeof Symbol !== "undefined" && isNative(Symbol) && typeof Reflect !== "undefined" && isNative(Reflect.ownKeys);
        var _Set;
        if (typeof Set !== "undefined" && isNative(Set)) {
          _Set = Set;
        } else {
          _Set = (function () {
            function Set() {
              this.set = Object.create(null);
            }
            Set.prototype.has = function has(key) {
              return this.set[key] === true;
            };
            Set.prototype.add = function add(key) {
              this.set[key] = true;
            };
            Set.prototype.clear = function clear() {
              this.set = Object.create(null);
            };
            return Set;
          })();
        }
        var ASSET_TYPES = ["component", "directive", "filter"];
        var LIFECYCLE_HOOKS = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"];
        var config = {
          optionMergeStrategies: Object.create(null),
          silent: false,
          productionTip: "development" !== "production",
          devtools: "development" !== "production",
          performance: false,
          errorHandler: null,
          warnHandler: null,
          ignoredElements: [],
          keyCodes: Object.create(null),
          isReservedTag: no,
          isReservedAttr: no,
          isUnknownElement: no,
          getTagNamespace: noop,
          parsePlatformTagName: identity,
          mustUseProp: no,
          async: true,
          _lifecycleHooks: LIFECYCLE_HOOKS
        };
        var warn = noop;
        var tip = noop;
        var generateComponentTrace = noop;
        var formatComponentName = noop;
        {
          var hasConsole = typeof console !== "undefined";
          var classifyRE = /(?:^|[-_])(\w)/g;
          var classify = function (str) {
            return str.replace(classifyRE, function (c) {
              return c.toUpperCase();
            }).replace(/[-_]/g, "");
          };
          warn = function (msg, vm) {
            var trace = vm ? generateComponentTrace(vm) : "";
            if (hasConsole && !config.silent) {
              console.error("[Vue warn]: " + msg + trace);
            }
          };
          tip = function (msg, vm) {
            if (hasConsole && !config.silent) {
              console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ""));
            }
          };
          formatComponentName = function (vm, includeFile) {
            if (vm.$root === vm) {
              return "<Root>";
            }
            var options = typeof vm === "function" && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
            var name = options.name || options._componentTag;
            var file = options.__file;
            if (!name && file) {
              var match = file.match(/([^/\\]+)\.vue$/);
              name = match && match[1];
            }
            return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : "");
          };
          var repeat = function (str, n) {
            var res = "";
            while (n) {
              if (n % 2 === 1) {
                res += str;
              }
              if (n > 1) {
                str += str;
              }
              n >>= 1;
            }
            return res;
          };
          generateComponentTrace = function (vm) {
            if (vm._isVue && vm.$parent) {
              var tree = [];
              var currentRecursiveSequence = 0;
              while (vm) {
                if (tree.length > 0) {
                  var last = tree[tree.length - 1];
                  if (last.constructor === vm.constructor) {
                    currentRecursiveSequence++;
                    vm = vm.$parent;
                    continue;
                  } else if (currentRecursiveSequence > 0) {
                    tree[tree.length - 1] = [last, currentRecursiveSequence];
                    currentRecursiveSequence = 0;
                  }
                }
                tree.push(vm);
                vm = vm.$parent;
              }
              return "\n\nfound in\n\n" + tree.map(function (vm, i) {
                return "" + (i === 0 ? "---> " : repeat(" ", 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
              }).join("\n");
            } else {
              return "\n\n(found in " + formatComponentName(vm) + ")";
            }
          };
        }
        var uid = 0;
        var Dep = function Dep() {
          this.id = uid++;
          this.subs = [];
        };
        Dep.prototype.addSub = function addSub(sub) {
          this.subs.push(sub);
        };
        Dep.prototype.removeSub = function removeSub(sub) {
          remove(this.subs, sub);
        };
        Dep.prototype.depend = function depend() {
          if (Dep.target) {
            Dep.target.addDep(this);
          }
        };
        Dep.prototype.notify = function notify() {
          var subs = this.subs.slice();
          for (var i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
          }
        };
        Dep.target = null;
        var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
          this.tag = tag;
          this.data = data;
          this.children = children;
          this.text = text;
          this.elm = elm;
          this.ns = undefined;
          this.context = context;
          this.fnContext = undefined;
          this.fnOptions = undefined;
          this.fnScopeId = undefined;
          this.key = data && data.key;
          this.componentOptions = componentOptions;
          this.componentInstance = undefined;
          this.parent = undefined;
          this.raw = false;
          this.isStatic = false;
          this.isRootInsert = true;
          this.isComment = false;
          this.isCloned = false;
          this.isOnce = false;
          this.asyncFactory = asyncFactory;
          this.asyncMeta = undefined;
          this.isAsyncPlaceholder = false;
        };
        var prototypeAccessors = {
          child: {
            configurable: true
          }
        };
        prototypeAccessors.child.get = function () {
          return this.componentInstance;
        };
        Object.defineProperties(VNode.prototype, prototypeAccessors);
        var arrayProto = Array.prototype;
        var arrayMethods = Object.create(arrayProto);
        var methodsToPatch = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
        methodsToPatch.forEach(function (method) {
          var original = arrayProto[method];
          def(arrayMethods, method, function mutator() {
            var args = [], len = arguments.length;
            while (len--) args[len] = arguments[len];
            var result = original.apply(this, args);
            var ob = this.__ob__;
            var inserted;
            switch (method) {
              case "push":
              case "unshift":
                inserted = args;
                break;
              case "splice":
                inserted = args.slice(2);
                break;
            }
            if (inserted) {
              ob.observeArray(inserted);
            }
            ob.dep.notify();
            return result;
          });
        });
        var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
        var shouldObserve = true;
        var Observer = function Observer(value) {
          this.value = value;
          this.dep = new Dep();
          this.vmCount = 0;
          def(value, "__ob__", this);
          if (Array.isArray(value)) {
            if (hasProto) {
              protoAugment(value, arrayMethods);
            } else {
              copyAugment(value, arrayMethods, arrayKeys);
            }
            this.observeArray(value);
          } else {
            this.walk(value);
          }
        };
        Observer.prototype.walk = function walk(obj) {
          var keys = Object.keys(obj);
          for (var i = 0; i < keys.length; i++) {
            defineReactive$$1(obj, keys[i]);
          }
        };
        Observer.prototype.observeArray = function observeArray(items) {
          for (var i = 0, l = items.length; i < l; i++) {
            observe(items[i]);
          }
        };
        function protoAugment(target, src) {
          target.__proto__ = src;
        }
        function copyAugment(target, src, keys) {
          for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i];
            def(target, key, src[key]);
          }
        }
        function observe(value, asRootData) {
          if (!isObject(value) || value instanceof VNode) {
            return;
          }
          var ob;
          if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
            ob = value.__ob__;
          } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
            ob = new Observer(value);
          }
          if (asRootData && ob) {
            ob.vmCount++;
          }
          return ob;
        }
        function defineReactive$$1(obj, key, val, customSetter, shallow) {
          var dep = new Dep();
          var property = Object.getOwnPropertyDescriptor(obj, key);
          if (property && property.configurable === false) {
            return;
          }
          var getter = property && property.get;
          var setter = property && property.set;
          if ((!getter || setter) && arguments.length === 2) {
            val = obj[key];
          }
          var childOb = !shallow && observe(val);
          Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: function reactiveGetter() {
              var value = getter ? getter.call(obj) : val;
              if (Dep.target) {
                dep.depend();
                if (childOb) {
                  childOb.dep.depend();
                  if (Array.isArray(value)) {
                    dependArray(value);
                  }
                }
              }
              return value;
            },
            set: function reactiveSetter(newVal) {
              var value = getter ? getter.call(obj) : val;
              if (newVal === value || newVal !== newVal && value !== value) {
                return;
              }
              if (customSetter) {
                customSetter();
              }
              if (getter && !setter) {
                return;
              }
              if (setter) {
                setter.call(obj, newVal);
              } else {
                val = newVal;
              }
              childOb = !shallow && observe(newVal);
              dep.notify();
            }
          });
        }
        function set(target, key, val) {
          if (isUndef(target) || isPrimitive(target)) {
            warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
          }
          if (Array.isArray(target) && isValidArrayIndex(key)) {
            target.length = Math.max(target.length, key);
            target.splice(key, 1, val);
            return val;
          }
          if ((key in target) && !((key in Object.prototype))) {
            target[key] = val;
            return val;
          }
          var ob = target.__ob__;
          if (target._isVue || ob && ob.vmCount) {
            warn("Avoid adding reactive properties to a Vue instance or its root $data " + "at runtime - declare it upfront in the data option.");
            return val;
          }
          if (!ob) {
            target[key] = val;
            return val;
          }
          defineReactive$$1(ob.value, key, val);
          ob.dep.notify();
          return val;
        }
        function dependArray(value) {
          for (var e = void 0, i = 0, l = value.length; i < l; i++) {
            e = value[i];
            e && e.__ob__ && e.__ob__.dep.depend();
            if (Array.isArray(e)) {
              dependArray(e);
            }
          }
        }
        var strats = config.optionMergeStrategies;
        {
          strats.el = strats.propsData = function (parent, child, vm, key) {
            if (!vm) {
              warn("option \"" + key + "\" can only be used during instance " + "creation with the `new` keyword.");
            }
            return defaultStrat(parent, child);
          };
        }
        function mergeData(to, from) {
          if (!from) {
            return to;
          }
          var key, toVal, fromVal;
          var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
          for (var i = 0; i < keys.length; i++) {
            key = keys[i];
            if (key === "__ob__") {
              continue;
            }
            toVal = to[key];
            fromVal = from[key];
            if (!hasOwn(to, key)) {
              set(to, key, fromVal);
            } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
              mergeData(toVal, fromVal);
            }
          }
          return to;
        }
        function mergeDataOrFn(parentVal, childVal, vm) {
          if (!vm) {
            if (!childVal) {
              return parentVal;
            }
            if (!parentVal) {
              return childVal;
            }
            return function mergedDataFn() {
              return mergeData(typeof childVal === "function" ? childVal.call(this, this) : childVal, typeof parentVal === "function" ? parentVal.call(this, this) : parentVal);
            };
          } else {
            return function mergedInstanceDataFn() {
              var instanceData = typeof childVal === "function" ? childVal.call(vm, vm) : childVal;
              var defaultData = typeof parentVal === "function" ? parentVal.call(vm, vm) : parentVal;
              if (instanceData) {
                return mergeData(instanceData, defaultData);
              } else {
                return defaultData;
              }
            };
          }
        }
        strats.data = function (parentVal, childVal, vm) {
          if (!vm) {
            if (childVal && typeof childVal !== "function") {
              warn("The \"data\" option should be a function " + "that returns a per-instance value in component " + "definitions.", vm);
              return parentVal;
            }
            return mergeDataOrFn(parentVal, childVal);
          }
          return mergeDataOrFn(parentVal, childVal, vm);
        };
        function mergeHook(parentVal, childVal) {
          var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
          return res ? dedupeHooks(res) : res;
        }
        function dedupeHooks(hooks) {
          var res = [];
          for (var i = 0; i < hooks.length; i++) {
            if (res.indexOf(hooks[i]) === -1) {
              res.push(hooks[i]);
            }
          }
          return res;
        }
        LIFECYCLE_HOOKS.forEach(function (hook) {
          strats[hook] = mergeHook;
        });
        function mergeAssets(parentVal, childVal, vm, key) {
          var res = Object.create(parentVal || null);
          if (childVal) {
            assertObjectType(key, childVal, vm);
            return extend(res, childVal);
          } else {
            return res;
          }
        }
        ASSET_TYPES.forEach(function (type) {
          strats[type + "s"] = mergeAssets;
        });
        strats.watch = function (parentVal, childVal, vm, key) {
          if (parentVal === nativeWatch) {
            parentVal = undefined;
          }
          if (childVal === nativeWatch) {
            childVal = undefined;
          }
          if (!childVal) {
            return Object.create(parentVal || null);
          }
          {
            assertObjectType(key, childVal, vm);
          }
          if (!parentVal) {
            return childVal;
          }
          var ret = {};
          extend(ret, parentVal);
          for (var key$1 in childVal) {
            var parent = ret[key$1];
            var child = childVal[key$1];
            if (parent && !Array.isArray(parent)) {
              parent = [parent];
            }
            ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
          }
          return ret;
        };
        strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
          if (childVal && "development" !== "production") {
            assertObjectType(key, childVal, vm);
          }
          if (!parentVal) {
            return childVal;
          }
          var ret = Object.create(null);
          extend(ret, parentVal);
          if (childVal) {
            extend(ret, childVal);
          }
          return ret;
        };
        strats.provide = mergeDataOrFn;
        var defaultStrat = function (parentVal, childVal) {
          return childVal === undefined ? parentVal : childVal;
        };
        function assertObjectType(name, value, vm) {
          if (!isPlainObject(value)) {
            warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
          }
        }
        var callbacks = [];
        function flushCallbacks() {
          var copies = callbacks.slice(0);
          callbacks.length = 0;
          for (var i = 0; i < copies.length; i++) {
            copies[i]();
          }
        }
        if (typeof Promise !== "undefined" && isNative(Promise)) ; else if (!isIE && typeof MutationObserver !== "undefined" && (isNative(MutationObserver) || MutationObserver.toString() === "[object MutationObserverConstructor]")) {
          var counter = 1;
          var observer = new MutationObserver(flushCallbacks);
          var textNode = document.createTextNode(String(counter));
          observer.observe(textNode, {
            characterData: true
          });
        } else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) ;
        var isReservedAttr = makeMap("style,class");
        var acceptValue = makeMap("input,textarea,option,select,progress");
        var mustUseProp = function (tag, type, attr) {
          return attr === "value" && acceptValue(tag) && type !== "button" || attr === "selected" && tag === "option" || attr === "checked" && tag === "input" || attr === "muted" && tag === "video";
        };
        var isEnumeratedAttr = makeMap("contenteditable,draggable,spellcheck");
        var isValidContentEditableValue = makeMap("events,caret,typing,plaintext-only");
        var isBooleanAttr = makeMap("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare," + "default,defaultchecked,defaultmuted,defaultselected,defer,disabled," + "enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple," + "muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly," + "required,reversed,scoped,seamless,selected,sortable,translate," + "truespeed,typemustmatch,visible");
        var isHTMLTag = makeMap("html,body,base,head,link,meta,style,title," + "address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section," + "div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul," + "a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby," + "s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video," + "embed,object,param,source,canvas,script,noscript,del,ins," + "caption,col,colgroup,table,thead,tbody,td,th,tr," + "button,datalist,fieldset,form,input,label,legend,meter,optgroup,option," + "output,progress,select,textarea," + "details,dialog,menu,menuitem,summary," + "content,element,shadow,template,blockquote,iframe,tfoot");
        var isSVG = makeMap("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face," + "foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern," + "polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", true);
        var isPreTag = function (tag) {
          return tag === "pre";
        };
        var isReservedTag = function (tag) {
          return isHTMLTag(tag) || isSVG(tag);
        };
        function getTagNamespace(tag) {
          if (isSVG(tag)) {
            return "svg";
          }
          if (tag === "math") {
            return "math";
          }
        }
        var isTextInputType = makeMap("text,number,password,search,email,tel,url");
        var validDivisionCharRE = /[\w).+\-_$\]]/;
        function parseFilters(exp) {
          var inSingle = false;
          var inDouble = false;
          var inTemplateString = false;
          var inRegex = false;
          var curly = 0;
          var square = 0;
          var paren = 0;
          var lastFilterIndex = 0;
          var c, prev, i, expression, filters;
          for (i = 0; i < exp.length; i++) {
            prev = c;
            c = exp.charCodeAt(i);
            if (inSingle) {
              if (c === 39 && prev !== 92) {
                inSingle = false;
              }
            } else if (inDouble) {
              if (c === 34 && prev !== 92) {
                inDouble = false;
              }
            } else if (inTemplateString) {
              if (c === 96 && prev !== 92) {
                inTemplateString = false;
              }
            } else if (inRegex) {
              if (c === 47 && prev !== 92) {
                inRegex = false;
              }
            } else if (c === 124 && exp.charCodeAt(i + 1) !== 124 && exp.charCodeAt(i - 1) !== 124 && !curly && !square && !paren) {
              if (expression === undefined) {
                lastFilterIndex = i + 1;
                expression = exp.slice(0, i).trim();
              } else {
                pushFilter();
              }
            } else {
              switch (c) {
                case 34:
                  inDouble = true;
                  break;
                case 39:
                  inSingle = true;
                  break;
                case 96:
                  inTemplateString = true;
                  break;
                case 40:
                  paren++;
                  break;
                case 41:
                  paren--;
                  break;
                case 91:
                  square++;
                  break;
                case 93:
                  square--;
                  break;
                case 123:
                  curly++;
                  break;
                case 125:
                  curly--;
                  break;
              }
              if (c === 47) {
                var j = i - 1;
                var p = void 0;
                for (; j >= 0; j--) {
                  p = exp.charAt(j);
                  if (p !== " ") {
                    break;
                  }
                }
                if (!p || !validDivisionCharRE.test(p)) {
                  inRegex = true;
                }
              }
            }
          }
          if (expression === undefined) {
            expression = exp.slice(0, i).trim();
          } else if (lastFilterIndex !== 0) {
            pushFilter();
          }
          function pushFilter() {
            (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
            lastFilterIndex = i + 1;
          }
          if (filters) {
            for (i = 0; i < filters.length; i++) {
              expression = wrapFilter(expression, filters[i]);
            }
          }
          return expression;
        }
        function wrapFilter(exp, filter) {
          var i = filter.indexOf("(");
          if (i < 0) {
            return "_f(\"" + filter + "\")(" + exp + ")";
          } else {
            var name = filter.slice(0, i);
            var args = filter.slice(i + 1);
            return "_f(\"" + name + "\")(" + exp + (args !== ")" ? "," + args : args);
          }
        }
        var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
        var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
        var buildRegex = cached(function (delimiters) {
          var open = delimiters[0].replace(regexEscapeRE, "\\$&");
          var close = delimiters[1].replace(regexEscapeRE, "\\$&");
          return new RegExp(open + "((?:.|\\n)+?)" + close, "g");
        });
        function parseText(text, delimiters) {
          var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
          if (!tagRE.test(text)) {
            return;
          }
          var tokens = [];
          var rawTokens = [];
          var lastIndex = tagRE.lastIndex = 0;
          var match, index, tokenValue;
          while (match = tagRE.exec(text)) {
            index = match.index;
            if (index > lastIndex) {
              rawTokens.push(tokenValue = text.slice(lastIndex, index));
              tokens.push(JSON.stringify(tokenValue));
            }
            var exp = parseFilters(match[1].trim());
            tokens.push("_s(" + exp + ")");
            rawTokens.push({
              "@binding": exp
            });
            lastIndex = index + match[0].length;
          }
          if (lastIndex < text.length) {
            rawTokens.push(tokenValue = text.slice(lastIndex));
            tokens.push(JSON.stringify(tokenValue));
          }
          return {
            expression: tokens.join("+"),
            tokens: rawTokens
          };
        }
        function baseWarn(msg, range) {
          console.error("[Vue compiler]: " + msg);
        }
        function pluckModuleFunction(modules, key) {
          return modules ? modules.map(function (m) {
            return m[key];
          }).filter(function (_) {
            return _;
          }) : [];
        }
        function addProp(el, name, value, range, dynamic) {
          (el.props || (el.props = [])).push(rangeSetItem({
            name: name,
            value: value,
            dynamic: dynamic
          }, range));
          el.plain = false;
        }
        function addAttr(el, name, value, range, dynamic) {
          var attrs = dynamic ? el.dynamicAttrs || (el.dynamicAttrs = []) : el.attrs || (el.attrs = []);
          attrs.push(rangeSetItem({
            name: name,
            value: value,
            dynamic: dynamic
          }, range));
          el.plain = false;
        }
        function addRawAttr(el, name, value, range) {
          el.attrsMap[name] = value;
          el.attrsList.push(rangeSetItem({
            name: name,
            value: value
          }, range));
        }
        function addDirective(el, name, rawName, value, arg, isDynamicArg, modifiers, range) {
          (el.directives || (el.directives = [])).push(rangeSetItem({
            name: name,
            rawName: rawName,
            value: value,
            arg: arg,
            isDynamicArg: isDynamicArg,
            modifiers: modifiers
          }, range));
          el.plain = false;
        }
        function prependModifierMarker(symbol, name, dynamic) {
          return dynamic ? "_p(" + name + ",\"" + symbol + "\")" : symbol + name;
        }
        function addHandler(el, name, value, modifiers, important, warn, range, dynamic) {
          modifiers = modifiers || emptyObject;
          if (warn && modifiers.prevent && modifiers.passive) {
            warn("passive and prevent can't be used together. " + "Passive handler can't prevent default event.", range);
          }
          if (modifiers.right) {
            if (dynamic) {
              name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
            } else if (name === "click") {
              name = "contextmenu";
              delete modifiers.right;
            }
          } else if (modifiers.middle) {
            if (dynamic) {
              name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
            } else if (name === "click") {
              name = "mouseup";
            }
          }
          if (modifiers.capture) {
            delete modifiers.capture;
            name = prependModifierMarker("!", name, dynamic);
          }
          if (modifiers.once) {
            delete modifiers.once;
            name = prependModifierMarker("~", name, dynamic);
          }
          if (modifiers.passive) {
            delete modifiers.passive;
            name = prependModifierMarker("&", name, dynamic);
          }
          var events;
          if (modifiers.native) {
            delete modifiers.native;
            events = el.nativeEvents || (el.nativeEvents = {});
          } else {
            events = el.events || (el.events = {});
          }
          var newHandler = rangeSetItem({
            value: value.trim(),
            dynamic: dynamic
          }, range);
          if (modifiers !== emptyObject) {
            newHandler.modifiers = modifiers;
          }
          var handlers = events[name];
          if (Array.isArray(handlers)) {
            important ? handlers.unshift(newHandler) : handlers.push(newHandler);
          } else if (handlers) {
            events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
          } else {
            events[name] = newHandler;
          }
          el.plain = false;
        }
        function getRawBindingAttr(el, name) {
          return el.rawAttrsMap[":" + name] || el.rawAttrsMap["v-bind:" + name] || el.rawAttrsMap[name];
        }
        function getBindingAttr(el, name, getStatic) {
          var dynamicValue = getAndRemoveAttr(el, ":" + name) || getAndRemoveAttr(el, "v-bind:" + name);
          if (dynamicValue != null) {
            return parseFilters(dynamicValue);
          } else if (getStatic !== false) {
            var staticValue = getAndRemoveAttr(el, name);
            if (staticValue != null) {
              return JSON.stringify(staticValue);
            }
          }
        }
        function getAndRemoveAttr(el, name, removeFromMap) {
          var val;
          if ((val = el.attrsMap[name]) != null) {
            var list = el.attrsList;
            for (var i = 0, l = list.length; i < l; i++) {
              if (list[i].name === name) {
                list.splice(i, 1);
                break;
              }
            }
          }
          if (removeFromMap) {
            delete el.attrsMap[name];
          }
          return val;
        }
        function getAndRemoveAttrByRegex(el, name) {
          var list = el.attrsList;
          for (var i = 0, l = list.length; i < l; i++) {
            var attr = list[i];
            if (name.test(attr.name)) {
              list.splice(i, 1);
              return attr;
            }
          }
        }
        function rangeSetItem(item, range) {
          if (range) {
            if (range.start != null) {
              item.start = range.start;
            }
            if (range.end != null) {
              item.end = range.end;
            }
          }
          return item;
        }
        function transformNode(el, options) {
          var warn = options.warn || baseWarn;
          var staticClass = getAndRemoveAttr(el, "class");
          if (staticClass) {
            var res = parseText(staticClass, options.delimiters);
            if (res) {
              warn("class=\"" + staticClass + "\": " + "Interpolation inside attributes has been removed. " + "Use v-bind or the colon shorthand instead. For example, " + "instead of <div class=\"{{ val }}\">, use <div :class=\"val\">.", el.rawAttrsMap["class"]);
            }
          }
          if (staticClass) {
            el.staticClass = JSON.stringify(staticClass);
          }
          var classBinding = getBindingAttr(el, "class", false);
          if (classBinding) {
            el.classBinding = classBinding;
          }
        }
        function genData(el) {
          var data = "";
          if (el.staticClass) {
            data += "staticClass:" + el.staticClass + ",";
          }
          if (el.classBinding) {
            data += "class:" + el.classBinding + ",";
          }
          return data;
        }
        var klass = {
          staticKeys: ["staticClass"],
          transformNode: transformNode,
          genData: genData
        };
        var parseStyleText = cached(function (cssText) {
          var res = {};
          var listDelimiter = /;(?![^(]*\))/g;
          var propertyDelimiter = /:(.+)/;
          cssText.split(listDelimiter).forEach(function (item) {
            if (item) {
              var tmp = item.split(propertyDelimiter);
              tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
            }
          });
          return res;
        });
        function transformNode$1(el, options) {
          var warn = options.warn || baseWarn;
          var staticStyle = getAndRemoveAttr(el, "style");
          if (staticStyle) {
            {
              var res = parseText(staticStyle, options.delimiters);
              if (res) {
                warn("style=\"" + staticStyle + "\": " + "Interpolation inside attributes has been removed. " + "Use v-bind or the colon shorthand instead. For example, " + "instead of <div style=\"{{ val }}\">, use <div :style=\"val\">.", el.rawAttrsMap["style"]);
              }
            }
            el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
          }
          var styleBinding = getBindingAttr(el, "style", false);
          if (styleBinding) {
            el.styleBinding = styleBinding;
          }
        }
        function genData$1(el) {
          var data = "";
          if (el.staticStyle) {
            data += "staticStyle:" + el.staticStyle + ",";
          }
          if (el.styleBinding) {
            data += "style:(" + el.styleBinding + "),";
          }
          return data;
        }
        var style = {
          staticKeys: ["staticStyle"],
          transformNode: transformNode$1,
          genData: genData$1
        };
        var commonjsGlobal = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
        function createCommonjsModule(fn, module) {
          return (module = {
            exports: {}
          }, fn(module, module.exports), module.exports);
        }
        var he = createCommonjsModule(function (module, exports) {
          (function (root) {
            var freeExports = exports;
            var freeModule = module && module.exports == freeExports && module;
            var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal;
            if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
              root = freeGlobal;
            }
            var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
            var regexAsciiWhitelist = /[\x01-\x7F]/g;
            var regexBmpWhitelist = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;
            var regexEncodeNonAscii = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g;
            var encodeMap = {
              "­": "shy",
              "‌": "zwnj",
              "‍": "zwj",
              "‎": "lrm",
              "⁣": "ic",
              "⁢": "it",
              "⁡": "af",
              "‏": "rlm",
              "​": "ZeroWidthSpace",
              "⁠": "NoBreak",
              "̑": "DownBreve",
              "⃛": "tdot",
              "⃜": "DotDot",
              "\t": "Tab",
              "\n": "NewLine",
              " ": "puncsp",
              " ": "MediumSpace",
              " ": "thinsp",
              " ": "hairsp",
              " ": "emsp13",
              " ": "ensp",
              " ": "emsp14",
              " ": "emsp",
              " ": "numsp",
              " ": "nbsp",
              "  ": "ThickSpace",
              "‾": "oline",
              "_": "lowbar",
              "‐": "dash",
              "–": "ndash",
              "—": "mdash",
              "―": "horbar",
              ",": "comma",
              ";": "semi",
              "⁏": "bsemi",
              ":": "colon",
              "⩴": "Colone",
              "!": "excl",
              "¡": "iexcl",
              "?": "quest",
              "¿": "iquest",
              ".": "period",
              "‥": "nldr",
              "…": "mldr",
              "·": "middot",
              "'": "apos",
              "‘": "lsquo",
              "’": "rsquo",
              "‚": "sbquo",
              "‹": "lsaquo",
              "›": "rsaquo",
              "\"": "quot",
              "“": "ldquo",
              "”": "rdquo",
              "„": "bdquo",
              "«": "laquo",
              "»": "raquo",
              "(": "lpar",
              ")": "rpar",
              "[": "lsqb",
              "]": "rsqb",
              "{": "lcub",
              "}": "rcub",
              "⌈": "lceil",
              "⌉": "rceil",
              "⌊": "lfloor",
              "⌋": "rfloor",
              "⦅": "lopar",
              "⦆": "ropar",
              "⦋": "lbrke",
              "⦌": "rbrke",
              "⦍": "lbrkslu",
              "⦎": "rbrksld",
              "⦏": "lbrksld",
              "⦐": "rbrkslu",
              "⦑": "langd",
              "⦒": "rangd",
              "⦓": "lparlt",
              "⦔": "rpargt",
              "⦕": "gtlPar",
              "⦖": "ltrPar",
              "⟦": "lobrk",
              "⟧": "robrk",
              "⟨": "lang",
              "⟩": "rang",
              "⟪": "Lang",
              "⟫": "Rang",
              "⟬": "loang",
              "⟭": "roang",
              "❲": "lbbrk",
              "❳": "rbbrk",
              "‖": "Vert",
              "§": "sect",
              "¶": "para",
              "@": "commat",
              "*": "ast",
              "/": "sol",
              "undefined": null,
              "&": "amp",
              "#": "num",
              "%": "percnt",
              "‰": "permil",
              "‱": "pertenk",
              "†": "dagger",
              "‡": "Dagger",
              "•": "bull",
              "⁃": "hybull",
              "′": "prime",
              "″": "Prime",
              "‴": "tprime",
              "⁗": "qprime",
              "‵": "bprime",
              "⁁": "caret",
              "`": "grave",
              "´": "acute",
              "˜": "tilde",
              "^": "Hat",
              "¯": "macr",
              "˘": "breve",
              "˙": "dot",
              "¨": "die",
              "˚": "ring",
              "˝": "dblac",
              "¸": "cedil",
              "˛": "ogon",
              "ˆ": "circ",
              "ˇ": "caron",
              "°": "deg",
              "©": "copy",
              "®": "reg",
              "℗": "copysr",
              "℘": "wp",
              "℞": "rx",
              "℧": "mho",
              "℩": "iiota",
              "←": "larr",
              "↚": "nlarr",
              "→": "rarr",
              "↛": "nrarr",
              "↑": "uarr",
              "↓": "darr",
              "↔": "harr",
              "↮": "nharr",
              "↕": "varr",
              "↖": "nwarr",
              "↗": "nearr",
              "↘": "searr",
              "↙": "swarr",
              "↝": "rarrw",
              "↝̸": "nrarrw",
              "↞": "Larr",
              "↟": "Uarr",
              "↠": "Rarr",
              "↡": "Darr",
              "↢": "larrtl",
              "↣": "rarrtl",
              "↤": "mapstoleft",
              "↥": "mapstoup",
              "↦": "map",
              "↧": "mapstodown",
              "↩": "larrhk",
              "↪": "rarrhk",
              "↫": "larrlp",
              "↬": "rarrlp",
              "↭": "harrw",
              "↰": "lsh",
              "↱": "rsh",
              "↲": "ldsh",
              "↳": "rdsh",
              "↵": "crarr",
              "↶": "cularr",
              "↷": "curarr",
              "↺": "olarr",
              "↻": "orarr",
              "↼": "lharu",
              "↽": "lhard",
              "↾": "uharr",
              "↿": "uharl",
              "⇀": "rharu",
              "⇁": "rhard",
              "⇂": "dharr",
              "⇃": "dharl",
              "⇄": "rlarr",
              "⇅": "udarr",
              "⇆": "lrarr",
              "⇇": "llarr",
              "⇈": "uuarr",
              "⇉": "rrarr",
              "⇊": "ddarr",
              "⇋": "lrhar",
              "⇌": "rlhar",
              "⇐": "lArr",
              "⇍": "nlArr",
              "⇑": "uArr",
              "⇒": "rArr",
              "⇏": "nrArr",
              "⇓": "dArr",
              "⇔": "iff",
              "⇎": "nhArr",
              "⇕": "vArr",
              "⇖": "nwArr",
              "⇗": "neArr",
              "⇘": "seArr",
              "⇙": "swArr",
              "⇚": "lAarr",
              "⇛": "rAarr",
              "⇝": "zigrarr",
              "⇤": "larrb",
              "⇥": "rarrb",
              "⇵": "duarr",
              "⇽": "loarr",
              "⇾": "roarr",
              "⇿": "hoarr",
              "∀": "forall",
              "∁": "comp",
              "∂": "part",
              "∂̸": "npart",
              "∃": "exist",
              "∄": "nexist",
              "∅": "empty",
              "∇": "Del",
              "∈": "in",
              "∉": "notin",
              "∋": "ni",
              "∌": "notni",
              "϶": "bepsi",
              "∏": "prod",
              "∐": "coprod",
              "∑": "sum",
              "+": "plus",
              "±": "pm",
              "÷": "div",
              "×": "times",
              "<": "lt",
              "≮": "nlt",
              "<⃒": "nvlt",
              "=": "equals",
              "≠": "ne",
              "=⃥": "bne",
              "⩵": "Equal",
              ">": "gt",
              "≯": "ngt",
              ">⃒": "nvgt",
              "¬": "not",
              "|": "vert",
              "¦": "brvbar",
              "−": "minus",
              "∓": "mp",
              "∔": "plusdo",
              "⁄": "frasl",
              "∖": "setmn",
              "∗": "lowast",
              "∘": "compfn",
              "√": "Sqrt",
              "∝": "prop",
              "∞": "infin",
              "∟": "angrt",
              "∠": "ang",
              "∠⃒": "nang",
              "∡": "angmsd",
              "∢": "angsph",
              "∣": "mid",
              "∤": "nmid",
              "∥": "par",
              "∦": "npar",
              "∧": "and",
              "∨": "or",
              "∩": "cap",
              "∩︀": "caps",
              "∪": "cup",
              "∪︀": "cups",
              "∫": "int",
              "∬": "Int",
              "∭": "tint",
              "⨌": "qint",
              "∮": "oint",
              "∯": "Conint",
              "∰": "Cconint",
              "∱": "cwint",
              "∲": "cwconint",
              "∳": "awconint",
              "∴": "there4",
              "∵": "becaus",
              "∶": "ratio",
              "∷": "Colon",
              "∸": "minusd",
              "∺": "mDDot",
              "∻": "homtht",
              "∼": "sim",
              "≁": "nsim",
              "∼⃒": "nvsim",
              "∽": "bsim",
              "∽̱": "race",
              "∾": "ac",
              "∾̳": "acE",
              "∿": "acd",
              "≀": "wr",
              "≂": "esim",
              "≂̸": "nesim",
              "≃": "sime",
              "≄": "nsime",
              "≅": "cong",
              "≇": "ncong",
              "≆": "simne",
              "≈": "ap",
              "≉": "nap",
              "≊": "ape",
              "≋": "apid",
              "≋̸": "napid",
              "≌": "bcong",
              "≍": "CupCap",
              "≭": "NotCupCap",
              "≍⃒": "nvap",
              "≎": "bump",
              "≎̸": "nbump",
              "≏": "bumpe",
              "≏̸": "nbumpe",
              "≐": "doteq",
              "≐̸": "nedot",
              "≑": "eDot",
              "≒": "efDot",
              "≓": "erDot",
              "≔": "colone",
              "≕": "ecolon",
              "≖": "ecir",
              "≗": "cire",
              "≙": "wedgeq",
              "≚": "veeeq",
              "≜": "trie",
              "≟": "equest",
              "≡": "equiv",
              "≢": "nequiv",
              "≡⃥": "bnequiv",
              "≤": "le",
              "≰": "nle",
              "≤⃒": "nvle",
              "≥": "ge",
              "≱": "nge",
              "≥⃒": "nvge",
              "≦": "lE",
              "≦̸": "nlE",
              "≧": "gE",
              "≧̸": "ngE",
              "≨︀": "lvnE",
              "≨": "lnE",
              "≩": "gnE",
              "≩︀": "gvnE",
              "≪": "ll",
              "≪̸": "nLtv",
              "≪⃒": "nLt",
              "≫": "gg",
              "≫̸": "nGtv",
              "≫⃒": "nGt",
              "≬": "twixt",
              "≲": "lsim",
              "≴": "nlsim",
              "≳": "gsim",
              "≵": "ngsim",
              "≶": "lg",
              "≸": "ntlg",
              "≷": "gl",
              "≹": "ntgl",
              "≺": "pr",
              "⊀": "npr",
              "≻": "sc",
              "⊁": "nsc",
              "≼": "prcue",
              "⋠": "nprcue",
              "≽": "sccue",
              "⋡": "nsccue",
              "≾": "prsim",
              "≿": "scsim",
              "≿̸": "NotSucceedsTilde",
              "⊂": "sub",
              "⊄": "nsub",
              "⊂⃒": "vnsub",
              "⊃": "sup",
              "⊅": "nsup",
              "⊃⃒": "vnsup",
              "⊆": "sube",
              "⊈": "nsube",
              "⊇": "supe",
              "⊉": "nsupe",
              "⊊︀": "vsubne",
              "⊊": "subne",
              "⊋︀": "vsupne",
              "⊋": "supne",
              "⊍": "cupdot",
              "⊎": "uplus",
              "⊏": "sqsub",
              "⊏̸": "NotSquareSubset",
              "⊐": "sqsup",
              "⊐̸": "NotSquareSuperset",
              "⊑": "sqsube",
              "⋢": "nsqsube",
              "⊒": "sqsupe",
              "⋣": "nsqsupe",
              "⊓": "sqcap",
              "⊓︀": "sqcaps",
              "⊔": "sqcup",
              "⊔︀": "sqcups",
              "⊕": "oplus",
              "⊖": "ominus",
              "⊗": "otimes",
              "⊘": "osol",
              "⊙": "odot",
              "⊚": "ocir",
              "⊛": "oast",
              "⊝": "odash",
              "⊞": "plusb",
              "⊟": "minusb",
              "⊠": "timesb",
              "⊡": "sdotb",
              "⊢": "vdash",
              "⊬": "nvdash",
              "⊣": "dashv",
              "⊤": "top",
              "⊥": "bot",
              "⊧": "models",
              "⊨": "vDash",
              "⊭": "nvDash",
              "⊩": "Vdash",
              "⊮": "nVdash",
              "⊪": "Vvdash",
              "⊫": "VDash",
              "⊯": "nVDash",
              "⊰": "prurel",
              "⊲": "vltri",
              "⋪": "nltri",
              "⊳": "vrtri",
              "⋫": "nrtri",
              "⊴": "ltrie",
              "⋬": "nltrie",
              "⊴⃒": "nvltrie",
              "⊵": "rtrie",
              "⋭": "nrtrie",
              "⊵⃒": "nvrtrie",
              "⊶": "origof",
              "⊷": "imof",
              "⊸": "mumap",
              "⊹": "hercon",
              "⊺": "intcal",
              "⊻": "veebar",
              "⊽": "barvee",
              "⊾": "angrtvb",
              "⊿": "lrtri",
              "⋀": "Wedge",
              "⋁": "Vee",
              "⋂": "xcap",
              "⋃": "xcup",
              "⋄": "diam",
              "⋅": "sdot",
              "⋆": "Star",
              "⋇": "divonx",
              "⋈": "bowtie",
              "⋉": "ltimes",
              "⋊": "rtimes",
              "⋋": "lthree",
              "⋌": "rthree",
              "⋍": "bsime",
              "⋎": "cuvee",
              "⋏": "cuwed",
              "⋐": "Sub",
              "⋑": "Sup",
              "⋒": "Cap",
              "⋓": "Cup",
              "⋔": "fork",
              "⋕": "epar",
              "⋖": "ltdot",
              "⋗": "gtdot",
              "⋘": "Ll",
              "⋘̸": "nLl",
              "⋙": "Gg",
              "⋙̸": "nGg",
              "⋚︀": "lesg",
              "⋚": "leg",
              "⋛": "gel",
              "⋛︀": "gesl",
              "⋞": "cuepr",
              "⋟": "cuesc",
              "⋦": "lnsim",
              "⋧": "gnsim",
              "⋨": "prnsim",
              "⋩": "scnsim",
              "⋮": "vellip",
              "⋯": "ctdot",
              "⋰": "utdot",
              "⋱": "dtdot",
              "⋲": "disin",
              "⋳": "isinsv",
              "⋴": "isins",
              "⋵": "isindot",
              "⋵̸": "notindot",
              "⋶": "notinvc",
              "⋷": "notinvb",
              "⋹": "isinE",
              "⋹̸": "notinE",
              "⋺": "nisd",
              "⋻": "xnis",
              "⋼": "nis",
              "⋽": "notnivc",
              "⋾": "notnivb",
              "⌅": "barwed",
              "⌆": "Barwed",
              "⌌": "drcrop",
              "⌍": "dlcrop",
              "⌎": "urcrop",
              "⌏": "ulcrop",
              "⌐": "bnot",
              "⌒": "profline",
              "⌓": "profsurf",
              "⌕": "telrec",
              "⌖": "target",
              "⌜": "ulcorn",
              "⌝": "urcorn",
              "⌞": "dlcorn",
              "⌟": "drcorn",
              "⌢": "frown",
              "⌣": "smile",
              "⌭": "cylcty",
              "⌮": "profalar",
              "⌶": "topbot",
              "⌽": "ovbar",
              "⌿": "solbar",
              "⍼": "angzarr",
              "⎰": "lmoust",
              "⎱": "rmoust",
              "⎴": "tbrk",
              "⎵": "bbrk",
              "⎶": "bbrktbrk",
              "⏜": "OverParenthesis",
              "⏝": "UnderParenthesis",
              "⏞": "OverBrace",
              "⏟": "UnderBrace",
              "⏢": "trpezium",
              "⏧": "elinters",
              "␣": "blank",
              "─": "boxh",
              "│": "boxv",
              "┌": "boxdr",
              "┐": "boxdl",
              "└": "boxur",
              "┘": "boxul",
              "├": "boxvr",
              "┤": "boxvl",
              "┬": "boxhd",
              "┴": "boxhu",
              "┼": "boxvh",
              "═": "boxH",
              "║": "boxV",
              "╒": "boxdR",
              "╓": "boxDr",
              "╔": "boxDR",
              "╕": "boxdL",
              "╖": "boxDl",
              "╗": "boxDL",
              "╘": "boxuR",
              "╙": "boxUr",
              "╚": "boxUR",
              "╛": "boxuL",
              "╜": "boxUl",
              "╝": "boxUL",
              "╞": "boxvR",
              "╟": "boxVr",
              "╠": "boxVR",
              "╡": "boxvL",
              "╢": "boxVl",
              "╣": "boxVL",
              "╤": "boxHd",
              "╥": "boxhD",
              "╦": "boxHD",
              "╧": "boxHu",
              "╨": "boxhU",
              "╩": "boxHU",
              "╪": "boxvH",
              "╫": "boxVh",
              "╬": "boxVH",
              "▀": "uhblk",
              "▄": "lhblk",
              "█": "block",
              "░": "blk14",
              "▒": "blk12",
              "▓": "blk34",
              "□": "squ",
              "▪": "squf",
              "▫": "EmptyVerySmallSquare",
              "▭": "rect",
              "▮": "marker",
              "▱": "fltns",
              "△": "xutri",
              "▴": "utrif",
              "▵": "utri",
              "▸": "rtrif",
              "▹": "rtri",
              "▽": "xdtri",
              "▾": "dtrif",
              "▿": "dtri",
              "◂": "ltrif",
              "◃": "ltri",
              "◊": "loz",
              "○": "cir",
              "◬": "tridot",
              "◯": "xcirc",
              "◸": "ultri",
              "◹": "urtri",
              "◺": "lltri",
              "◻": "EmptySmallSquare",
              "◼": "FilledSmallSquare",
              "★": "starf",
              "☆": "star",
              "☎": "phone",
              "♀": "female",
              "♂": "male",
              "♠": "spades",
              "♣": "clubs",
              "♥": "hearts",
              "♦": "diams",
              "♪": "sung",
              "✓": "check",
              "✗": "cross",
              "✠": "malt",
              "✶": "sext",
              "❘": "VerticalSeparator",
              "⟈": "bsolhsub",
              "⟉": "suphsol",
              "⟵": "xlarr",
              "⟶": "xrarr",
              "⟷": "xharr",
              "⟸": "xlArr",
              "⟹": "xrArr",
              "⟺": "xhArr",
              "⟼": "xmap",
              "⟿": "dzigrarr",
              "⤂": "nvlArr",
              "⤃": "nvrArr",
              "⤄": "nvHarr",
              "⤅": "Map",
              "⤌": "lbarr",
              "⤍": "rbarr",
              "⤎": "lBarr",
              "⤏": "rBarr",
              "⤐": "RBarr",
              "⤑": "DDotrahd",
              "⤒": "UpArrowBar",
              "⤓": "DownArrowBar",
              "⤖": "Rarrtl",
              "⤙": "latail",
              "⤚": "ratail",
              "⤛": "lAtail",
              "⤜": "rAtail",
              "⤝": "larrfs",
              "⤞": "rarrfs",
              "⤟": "larrbfs",
              "⤠": "rarrbfs",
              "⤣": "nwarhk",
              "⤤": "nearhk",
              "⤥": "searhk",
              "⤦": "swarhk",
              "⤧": "nwnear",
              "⤨": "toea",
              "⤩": "tosa",
              "⤪": "swnwar",
              "⤳": "rarrc",
              "⤳̸": "nrarrc",
              "⤵": "cudarrr",
              "⤶": "ldca",
              "⤷": "rdca",
              "⤸": "cudarrl",
              "⤹": "larrpl",
              "⤼": "curarrm",
              "⤽": "cularrp",
              "⥅": "rarrpl",
              "⥈": "harrcir",
              "⥉": "Uarrocir",
              "⥊": "lurdshar",
              "⥋": "ldrushar",
              "⥎": "LeftRightVector",
              "⥏": "RightUpDownVector",
              "⥐": "DownLeftRightVector",
              "⥑": "LeftUpDownVector",
              "⥒": "LeftVectorBar",
              "⥓": "RightVectorBar",
              "⥔": "RightUpVectorBar",
              "⥕": "RightDownVectorBar",
              "⥖": "DownLeftVectorBar",
              "⥗": "DownRightVectorBar",
              "⥘": "LeftUpVectorBar",
              "⥙": "LeftDownVectorBar",
              "⥚": "LeftTeeVector",
              "⥛": "RightTeeVector",
              "⥜": "RightUpTeeVector",
              "⥝": "RightDownTeeVector",
              "⥞": "DownLeftTeeVector",
              "⥟": "DownRightTeeVector",
              "⥠": "LeftUpTeeVector",
              "⥡": "LeftDownTeeVector",
              "⥢": "lHar",
              "⥣": "uHar",
              "⥤": "rHar",
              "⥥": "dHar",
              "⥦": "luruhar",
              "⥧": "ldrdhar",
              "⥨": "ruluhar",
              "⥩": "rdldhar",
              "⥪": "lharul",
              "⥫": "llhard",
              "⥬": "rharul",
              "⥭": "lrhard",
              "⥮": "udhar",
              "⥯": "duhar",
              "⥰": "RoundImplies",
              "⥱": "erarr",
              "⥲": "simrarr",
              "⥳": "larrsim",
              "⥴": "rarrsim",
              "⥵": "rarrap",
              "⥶": "ltlarr",
              "⥸": "gtrarr",
              "⥹": "subrarr",
              "⥻": "suplarr",
              "⥼": "lfisht",
              "⥽": "rfisht",
              "⥾": "ufisht",
              "⥿": "dfisht",
              "⦚": "vzigzag",
              "⦜": "vangrt",
              "⦝": "angrtvbd",
              "⦤": "ange",
              "⦥": "range",
              "⦦": "dwangle",
              "⦧": "uwangle",
              "⦨": "angmsdaa",
              "⦩": "angmsdab",
              "⦪": "angmsdac",
              "⦫": "angmsdad",
              "⦬": "angmsdae",
              "⦭": "angmsdaf",
              "⦮": "angmsdag",
              "⦯": "angmsdah",
              "⦰": "bemptyv",
              "⦱": "demptyv",
              "⦲": "cemptyv",
              "⦳": "raemptyv",
              "⦴": "laemptyv",
              "⦵": "ohbar",
              "⦶": "omid",
              "⦷": "opar",
              "⦹": "operp",
              "⦻": "olcross",
              "⦼": "odsold",
              "⦾": "olcir",
              "⦿": "ofcir",
              "⧀": "olt",
              "⧁": "ogt",
              "⧂": "cirscir",
              "⧃": "cirE",
              "⧄": "solb",
              "⧅": "bsolb",
              "⧉": "boxbox",
              "⧍": "trisb",
              "⧎": "rtriltri",
              "⧏": "LeftTriangleBar",
              "⧏̸": "NotLeftTriangleBar",
              "⧐": "RightTriangleBar",
              "⧐̸": "NotRightTriangleBar",
              "⧜": "iinfin",
              "⧝": "infintie",
              "⧞": "nvinfin",
              "⧣": "eparsl",
              "⧤": "smeparsl",
              "⧥": "eqvparsl",
              "⧫": "lozf",
              "⧴": "RuleDelayed",
              "⧶": "dsol",
              "⨀": "xodot",
              "⨁": "xoplus",
              "⨂": "xotime",
              "⨄": "xuplus",
              "⨆": "xsqcup",
              "⨍": "fpartint",
              "⨐": "cirfnint",
              "⨑": "awint",
              "⨒": "rppolint",
              "⨓": "scpolint",
              "⨔": "npolint",
              "⨕": "pointint",
              "⨖": "quatint",
              "⨗": "intlarhk",
              "⨢": "pluscir",
              "⨣": "plusacir",
              "⨤": "simplus",
              "⨥": "plusdu",
              "⨦": "plussim",
              "⨧": "plustwo",
              "⨩": "mcomma",
              "⨪": "minusdu",
              "⨭": "loplus",
              "⨮": "roplus",
              "⨯": "Cross",
              "⨰": "timesd",
              "⨱": "timesbar",
              "⨳": "smashp",
              "⨴": "lotimes",
              "⨵": "rotimes",
              "⨶": "otimesas",
              "⨷": "Otimes",
              "⨸": "odiv",
              "⨹": "triplus",
              "⨺": "triminus",
              "⨻": "tritime",
              "⨼": "iprod",
              "⨿": "amalg",
              "⩀": "capdot",
              "⩂": "ncup",
              "⩃": "ncap",
              "⩄": "capand",
              "⩅": "cupor",
              "⩆": "cupcap",
              "⩇": "capcup",
              "⩈": "cupbrcap",
              "⩉": "capbrcup",
              "⩊": "cupcup",
              "⩋": "capcap",
              "⩌": "ccups",
              "⩍": "ccaps",
              "⩐": "ccupssm",
              "⩓": "And",
              "⩔": "Or",
              "⩕": "andand",
              "⩖": "oror",
              "⩗": "orslope",
              "⩘": "andslope",
              "⩚": "andv",
              "⩛": "orv",
              "⩜": "andd",
              "⩝": "ord",
              "⩟": "wedbar",
              "⩦": "sdote",
              "⩪": "simdot",
              "⩭": "congdot",
              "⩭̸": "ncongdot",
              "⩮": "easter",
              "⩯": "apacir",
              "⩰": "apE",
              "⩰̸": "napE",
              "⩱": "eplus",
              "⩲": "pluse",
              "⩳": "Esim",
              "⩷": "eDDot",
              "⩸": "equivDD",
              "⩹": "ltcir",
              "⩺": "gtcir",
              "⩻": "ltquest",
              "⩼": "gtquest",
              "⩽": "les",
              "⩽̸": "nles",
              "⩾": "ges",
              "⩾̸": "nges",
              "⩿": "lesdot",
              "⪀": "gesdot",
              "⪁": "lesdoto",
              "⪂": "gesdoto",
              "⪃": "lesdotor",
              "⪄": "gesdotol",
              "⪅": "lap",
              "⪆": "gap",
              "⪇": "lne",
              "⪈": "gne",
              "⪉": "lnap",
              "⪊": "gnap",
              "⪋": "lEg",
              "⪌": "gEl",
              "⪍": "lsime",
              "⪎": "gsime",
              "⪏": "lsimg",
              "⪐": "gsiml",
              "⪑": "lgE",
              "⪒": "glE",
              "⪓": "lesges",
              "⪔": "gesles",
              "⪕": "els",
              "⪖": "egs",
              "⪗": "elsdot",
              "⪘": "egsdot",
              "⪙": "el",
              "⪚": "eg",
              "⪝": "siml",
              "⪞": "simg",
              "⪟": "simlE",
              "⪠": "simgE",
              "⪡": "LessLess",
              "⪡̸": "NotNestedLessLess",
              "⪢": "GreaterGreater",
              "⪢̸": "NotNestedGreaterGreater",
              "⪤": "glj",
              "⪥": "gla",
              "⪦": "ltcc",
              "⪧": "gtcc",
              "⪨": "lescc",
              "⪩": "gescc",
              "⪪": "smt",
              "⪫": "lat",
              "⪬": "smte",
              "⪬︀": "smtes",
              "⪭": "late",
              "⪭︀": "lates",
              "⪮": "bumpE",
              "⪯": "pre",
              "⪯̸": "npre",
              "⪰": "sce",
              "⪰̸": "nsce",
              "⪳": "prE",
              "⪴": "scE",
              "⪵": "prnE",
              "⪶": "scnE",
              "⪷": "prap",
              "⪸": "scap",
              "⪹": "prnap",
              "⪺": "scnap",
              "⪻": "Pr",
              "⪼": "Sc",
              "⪽": "subdot",
              "⪾": "supdot",
              "⪿": "subplus",
              "⫀": "supplus",
              "⫁": "submult",
              "⫂": "supmult",
              "⫃": "subedot",
              "⫄": "supedot",
              "⫅": "subE",
              "⫅̸": "nsubE",
              "⫆": "supE",
              "⫆̸": "nsupE",
              "⫇": "subsim",
              "⫈": "supsim",
              "⫋︀": "vsubnE",
              "⫋": "subnE",
              "⫌︀": "vsupnE",
              "⫌": "supnE",
              "⫏": "csub",
              "⫐": "csup",
              "⫑": "csube",
              "⫒": "csupe",
              "⫓": "subsup",
              "⫔": "supsub",
              "⫕": "subsub",
              "⫖": "supsup",
              "⫗": "suphsub",
              "⫘": "supdsub",
              "⫙": "forkv",
              "⫚": "topfork",
              "⫛": "mlcp",
              "⫤": "Dashv",
              "⫦": "Vdashl",
              "⫧": "Barv",
              "⫨": "vBar",
              "⫩": "vBarv",
              "⫫": "Vbar",
              "⫬": "Not",
              "⫭": "bNot",
              "⫮": "rnmid",
              "⫯": "cirmid",
              "⫰": "midcir",
              "⫱": "topcir",
              "⫲": "nhpar",
              "⫳": "parsim",
              "⫽": "parsl",
              "⫽⃥": "nparsl",
              "♭": "flat",
              "♮": "natur",
              "♯": "sharp",
              "¤": "curren",
              "¢": "cent",
              "$": "dollar",
              "£": "pound",
              "¥": "yen",
              "€": "euro",
              "¹": "sup1",
              "½": "half",
              "⅓": "frac13",
              "¼": "frac14",
              "⅕": "frac15",
              "⅙": "frac16",
              "⅛": "frac18",
              "²": "sup2",
              "⅔": "frac23",
              "⅖": "frac25",
              "³": "sup3",
              "¾": "frac34",
              "⅗": "frac35",
              "⅜": "frac38",
              "⅘": "frac45",
              "⅚": "frac56",
              "⅝": "frac58",
              "⅞": "frac78",
              "𝒶": "ascr",
              "𝕒": "aopf",
              "𝔞": "afr",
              "𝔸": "Aopf",
              "𝔄": "Afr",
              "𝒜": "Ascr",
              "ª": "ordf",
              "á": "aacute",
              "Á": "Aacute",
              "à": "agrave",
              "À": "Agrave",
              "ă": "abreve",
              "Ă": "Abreve",
              "â": "acirc",
              "Â": "Acirc",
              "å": "aring",
              "Å": "angst",
              "ä": "auml",
              "Ä": "Auml",
              "ã": "atilde",
              "Ã": "Atilde",
              "ą": "aogon",
              "Ą": "Aogon",
              "ā": "amacr",
              "Ā": "Amacr",
              "æ": "aelig",
              "Æ": "AElig",
              "𝒷": "bscr",
              "𝕓": "bopf",
              "𝔟": "bfr",
              "𝔹": "Bopf",
              "ℬ": "Bscr",
              "𝔅": "Bfr",
              "𝔠": "cfr",
              "𝒸": "cscr",
              "𝕔": "copf",
              "ℭ": "Cfr",
              "𝒞": "Cscr",
              "ℂ": "Copf",
              "ć": "cacute",
              "Ć": "Cacute",
              "ĉ": "ccirc",
              "Ĉ": "Ccirc",
              "č": "ccaron",
              "Č": "Ccaron",
              "ċ": "cdot",
              "Ċ": "Cdot",
              "ç": "ccedil",
              "Ç": "Ccedil",
              "℅": "incare",
              "𝔡": "dfr",
              "ⅆ": "dd",
              "𝕕": "dopf",
              "𝒹": "dscr",
              "𝒟": "Dscr",
              "𝔇": "Dfr",
              "ⅅ": "DD",
              "𝔻": "Dopf",
              "ď": "dcaron",
              "Ď": "Dcaron",
              "đ": "dstrok",
              "Đ": "Dstrok",
              "ð": "eth",
              "Ð": "ETH",
              "ⅇ": "ee",
              "ℯ": "escr",
              "𝔢": "efr",
              "𝕖": "eopf",
              "ℰ": "Escr",
              "𝔈": "Efr",
              "𝔼": "Eopf",
              "é": "eacute",
              "É": "Eacute",
              "è": "egrave",
              "È": "Egrave",
              "ê": "ecirc",
              "Ê": "Ecirc",
              "ě": "ecaron",
              "Ě": "Ecaron",
              "ë": "euml",
              "Ë": "Euml",
              "ė": "edot",
              "Ė": "Edot",
              "ę": "eogon",
              "Ę": "Eogon",
              "ē": "emacr",
              "Ē": "Emacr",
              "𝔣": "ffr",
              "𝕗": "fopf",
              "𝒻": "fscr",
              "𝔉": "Ffr",
              "𝔽": "Fopf",
              "ℱ": "Fscr",
              "ﬀ": "fflig",
              "ﬃ": "ffilig",
              "ﬄ": "ffllig",
              "ﬁ": "filig",
              "fj": "fjlig",
              "ﬂ": "fllig",
              "ƒ": "fnof",
              "ℊ": "gscr",
              "𝕘": "gopf",
              "𝔤": "gfr",
              "𝒢": "Gscr",
              "𝔾": "Gopf",
              "𝔊": "Gfr",
              "ǵ": "gacute",
              "ğ": "gbreve",
              "Ğ": "Gbreve",
              "ĝ": "gcirc",
              "Ĝ": "Gcirc",
              "ġ": "gdot",
              "Ġ": "Gdot",
              "Ģ": "Gcedil",
              "𝔥": "hfr",
              "ℎ": "planckh",
              "𝒽": "hscr",
              "𝕙": "hopf",
              "ℋ": "Hscr",
              "ℌ": "Hfr",
              "ℍ": "Hopf",
              "ĥ": "hcirc",
              "Ĥ": "Hcirc",
              "ℏ": "hbar",
              "ħ": "hstrok",
              "Ħ": "Hstrok",
              "𝕚": "iopf",
              "𝔦": "ifr",
              "𝒾": "iscr",
              "ⅈ": "ii",
              "𝕀": "Iopf",
              "ℐ": "Iscr",
              "ℑ": "Im",
              "í": "iacute",
              "Í": "Iacute",
              "ì": "igrave",
              "Ì": "Igrave",
              "î": "icirc",
              "Î": "Icirc",
              "ï": "iuml",
              "Ï": "Iuml",
              "ĩ": "itilde",
              "Ĩ": "Itilde",
              "İ": "Idot",
              "į": "iogon",
              "Į": "Iogon",
              "ī": "imacr",
              "Ī": "Imacr",
              "ĳ": "ijlig",
              "Ĳ": "IJlig",
              "ı": "imath",
              "𝒿": "jscr",
              "𝕛": "jopf",
              "𝔧": "jfr",
              "𝒥": "Jscr",
              "𝔍": "Jfr",
              "𝕁": "Jopf",
              "ĵ": "jcirc",
              "Ĵ": "Jcirc",
              "ȷ": "jmath",
              "𝕜": "kopf",
              "𝓀": "kscr",
              "𝔨": "kfr",
              "𝒦": "Kscr",
              "𝕂": "Kopf",
              "𝔎": "Kfr",
              "ķ": "kcedil",
              "Ķ": "Kcedil",
              "𝔩": "lfr",
              "𝓁": "lscr",
              "ℓ": "ell",
              "𝕝": "lopf",
              "ℒ": "Lscr",
              "𝔏": "Lfr",
              "𝕃": "Lopf",
              "ĺ": "lacute",
              "Ĺ": "Lacute",
              "ľ": "lcaron",
              "Ľ": "Lcaron",
              "ļ": "lcedil",
              "Ļ": "Lcedil",
              "ł": "lstrok",
              "Ł": "Lstrok",
              "ŀ": "lmidot",
              "Ŀ": "Lmidot",
              "𝔪": "mfr",
              "𝕞": "mopf",
              "𝓂": "mscr",
              "𝔐": "Mfr",
              "𝕄": "Mopf",
              "ℳ": "Mscr",
              "𝔫": "nfr",
              "𝕟": "nopf",
              "𝓃": "nscr",
              "ℕ": "Nopf",
              "𝒩": "Nscr",
              "𝔑": "Nfr",
              "ń": "nacute",
              "Ń": "Nacute",
              "ň": "ncaron",
              "Ň": "Ncaron",
              "ñ": "ntilde",
              "Ñ": "Ntilde",
              "ņ": "ncedil",
              "Ņ": "Ncedil",
              "№": "numero",
              "ŋ": "eng",
              "Ŋ": "ENG",
              "𝕠": "oopf",
              "𝔬": "ofr",
              "ℴ": "oscr",
              "𝒪": "Oscr",
              "𝔒": "Ofr",
              "𝕆": "Oopf",
              "º": "ordm",
              "ó": "oacute",
              "Ó": "Oacute",
              "ò": "ograve",
              "Ò": "Ograve",
              "ô": "ocirc",
              "Ô": "Ocirc",
              "ö": "ouml",
              "Ö": "Ouml",
              "ő": "odblac",
              "Ő": "Odblac",
              "õ": "otilde",
              "Õ": "Otilde",
              "ø": "oslash",
              "Ø": "Oslash",
              "ō": "omacr",
              "Ō": "Omacr",
              "œ": "oelig",
              "Œ": "OElig",
              "𝔭": "pfr",
              "𝓅": "pscr",
              "𝕡": "popf",
              "ℙ": "Popf",
              "𝔓": "Pfr",
              "𝒫": "Pscr",
              "𝕢": "qopf",
              "𝔮": "qfr",
              "𝓆": "qscr",
              "𝒬": "Qscr",
              "𝔔": "Qfr",
              "ℚ": "Qopf",
              "ĸ": "kgreen",
              "𝔯": "rfr",
              "𝕣": "ropf",
              "𝓇": "rscr",
              "ℛ": "Rscr",
              "ℜ": "Re",
              "ℝ": "Ropf",
              "ŕ": "racute",
              "Ŕ": "Racute",
              "ř": "rcaron",
              "Ř": "Rcaron",
              "ŗ": "rcedil",
              "Ŗ": "Rcedil",
              "𝕤": "sopf",
              "𝓈": "sscr",
              "𝔰": "sfr",
              "𝕊": "Sopf",
              "𝔖": "Sfr",
              "𝒮": "Sscr",
              "Ⓢ": "oS",
              "ś": "sacute",
              "Ś": "Sacute",
              "ŝ": "scirc",
              "Ŝ": "Scirc",
              "š": "scaron",
              "Š": "Scaron",
              "ş": "scedil",
              "Ş": "Scedil",
              "ß": "szlig",
              "𝔱": "tfr",
              "𝓉": "tscr",
              "𝕥": "topf",
              "𝒯": "Tscr",
              "𝔗": "Tfr",
              "𝕋": "Topf",
              "ť": "tcaron",
              "Ť": "Tcaron",
              "ţ": "tcedil",
              "Ţ": "Tcedil",
              "™": "trade",
              "ŧ": "tstrok",
              "Ŧ": "Tstrok",
              "𝓊": "uscr",
              "𝕦": "uopf",
              "𝔲": "ufr",
              "𝕌": "Uopf",
              "𝔘": "Ufr",
              "𝒰": "Uscr",
              "ú": "uacute",
              "Ú": "Uacute",
              "ù": "ugrave",
              "Ù": "Ugrave",
              "ŭ": "ubreve",
              "Ŭ": "Ubreve",
              "û": "ucirc",
              "Û": "Ucirc",
              "ů": "uring",
              "Ů": "Uring",
              "ü": "uuml",
              "Ü": "Uuml",
              "ű": "udblac",
              "Ű": "Udblac",
              "ũ": "utilde",
              "Ũ": "Utilde",
              "ų": "uogon",
              "Ų": "Uogon",
              "ū": "umacr",
              "Ū": "Umacr",
              "𝔳": "vfr",
              "𝕧": "vopf",
              "𝓋": "vscr",
              "𝔙": "Vfr",
              "𝕍": "Vopf",
              "𝒱": "Vscr",
              "𝕨": "wopf",
              "𝓌": "wscr",
              "𝔴": "wfr",
              "𝒲": "Wscr",
              "𝕎": "Wopf",
              "𝔚": "Wfr",
              "ŵ": "wcirc",
              "Ŵ": "Wcirc",
              "𝔵": "xfr",
              "𝓍": "xscr",
              "𝕩": "xopf",
              "𝕏": "Xopf",
              "𝔛": "Xfr",
              "𝒳": "Xscr",
              "𝔶": "yfr",
              "𝓎": "yscr",
              "𝕪": "yopf",
              "𝒴": "Yscr",
              "𝔜": "Yfr",
              "𝕐": "Yopf",
              "ý": "yacute",
              "Ý": "Yacute",
              "ŷ": "ycirc",
              "Ŷ": "Ycirc",
              "ÿ": "yuml",
              "Ÿ": "Yuml",
              "𝓏": "zscr",
              "𝔷": "zfr",
              "𝕫": "zopf",
              "ℨ": "Zfr",
              "ℤ": "Zopf",
              "𝒵": "Zscr",
              "ź": "zacute",
              "Ź": "Zacute",
              "ž": "zcaron",
              "Ž": "Zcaron",
              "ż": "zdot",
              "Ż": "Zdot",
              "Ƶ": "imped",
              "þ": "thorn",
              "Þ": "THORN",
              "ŉ": "napos",
              "α": "alpha",
              "Α": "Alpha",
              "β": "beta",
              "Β": "Beta",
              "γ": "gamma",
              "Γ": "Gamma",
              "δ": "delta",
              "Δ": "Delta",
              "ε": "epsi",
              "ϵ": "epsiv",
              "Ε": "Epsilon",
              "ϝ": "gammad",
              "Ϝ": "Gammad",
              "ζ": "zeta",
              "Ζ": "Zeta",
              "η": "eta",
              "Η": "Eta",
              "θ": "theta",
              "ϑ": "thetav",
              "Θ": "Theta",
              "ι": "iota",
              "Ι": "Iota",
              "κ": "kappa",
              "ϰ": "kappav",
              "Κ": "Kappa",
              "λ": "lambda",
              "Λ": "Lambda",
              "μ": "mu",
              "µ": "micro",
              "Μ": "Mu",
              "ν": "nu",
              "Ν": "Nu",
              "ξ": "xi",
              "Ξ": "Xi",
              "ο": "omicron",
              "Ο": "Omicron",
              "π": "pi",
              "ϖ": "piv",
              "Π": "Pi",
              "ρ": "rho",
              "ϱ": "rhov",
              "Ρ": "Rho",
              "σ": "sigma",
              "Σ": "Sigma",
              "ς": "sigmaf",
              "τ": "tau",
              "Τ": "Tau",
              "υ": "upsi",
              "Υ": "Upsilon",
              "ϒ": "Upsi",
              "φ": "phi",
              "ϕ": "phiv",
              "Φ": "Phi",
              "χ": "chi",
              "Χ": "Chi",
              "ψ": "psi",
              "Ψ": "Psi",
              "ω": "omega",
              "Ω": "ohm",
              "а": "acy",
              "А": "Acy",
              "б": "bcy",
              "Б": "Bcy",
              "в": "vcy",
              "В": "Vcy",
              "г": "gcy",
              "Г": "Gcy",
              "ѓ": "gjcy",
              "Ѓ": "GJcy",
              "д": "dcy",
              "Д": "Dcy",
              "ђ": "djcy",
              "Ђ": "DJcy",
              "е": "iecy",
              "Е": "IEcy",
              "ё": "iocy",
              "Ё": "IOcy",
              "є": "jukcy",
              "Є": "Jukcy",
              "ж": "zhcy",
              "Ж": "ZHcy",
              "з": "zcy",
              "З": "Zcy",
              "ѕ": "dscy",
              "Ѕ": "DScy",
              "и": "icy",
              "И": "Icy",
              "і": "iukcy",
              "І": "Iukcy",
              "ї": "yicy",
              "Ї": "YIcy",
              "й": "jcy",
              "Й": "Jcy",
              "ј": "jsercy",
              "Ј": "Jsercy",
              "к": "kcy",
              "К": "Kcy",
              "ќ": "kjcy",
              "Ќ": "KJcy",
              "л": "lcy",
              "Л": "Lcy",
              "љ": "ljcy",
              "Љ": "LJcy",
              "м": "mcy",
              "М": "Mcy",
              "н": "ncy",
              "Н": "Ncy",
              "њ": "njcy",
              "Њ": "NJcy",
              "о": "ocy",
              "О": "Ocy",
              "п": "pcy",
              "П": "Pcy",
              "р": "rcy",
              "Р": "Rcy",
              "с": "scy",
              "С": "Scy",
              "т": "tcy",
              "Т": "Tcy",
              "ћ": "tshcy",
              "Ћ": "TSHcy",
              "у": "ucy",
              "У": "Ucy",
              "ў": "ubrcy",
              "Ў": "Ubrcy",
              "ф": "fcy",
              "Ф": "Fcy",
              "х": "khcy",
              "Х": "KHcy",
              "ц": "tscy",
              "Ц": "TScy",
              "ч": "chcy",
              "Ч": "CHcy",
              "џ": "dzcy",
              "Џ": "DZcy",
              "ш": "shcy",
              "Ш": "SHcy",
              "щ": "shchcy",
              "Щ": "SHCHcy",
              "ъ": "hardcy",
              "Ъ": "HARDcy",
              "ы": "ycy",
              "Ы": "Ycy",
              "ь": "softcy",
              "Ь": "SOFTcy",
              "э": "ecy",
              "Э": "Ecy",
              "ю": "yucy",
              "Ю": "YUcy",
              "я": "yacy",
              "Я": "YAcy",
              "ℵ": "aleph",
              "ℶ": "beth",
              "ℷ": "gimel",
              "ℸ": "daleth"
            };
            var regexEscape = /["&'<>`]/g;
            var escapeMap = {
              "\"": "&quot;",
              "&": "&amp;",
              "'": "&#x27;",
              "<": "&lt;",
              ">": "&gt;",
              "`": "&#x60;"
            };
            var regexInvalidEntity = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/;
            var regexInvalidRawCodePoint = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
            var regexDecode = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g;
            var decodeMap = {
              "aacute": "á",
              "Aacute": "Á",
              "abreve": "ă",
              "Abreve": "Ă",
              "ac": "∾",
              "acd": "∿",
              "acE": "∾̳",
              "acirc": "â",
              "Acirc": "Â",
              "acute": "´",
              "acy": "а",
              "Acy": "А",
              "aelig": "æ",
              "AElig": "Æ",
              "af": "⁡",
              "afr": "𝔞",
              "Afr": "𝔄",
              "agrave": "à",
              "Agrave": "À",
              "alefsym": "ℵ",
              "aleph": "ℵ",
              "alpha": "α",
              "Alpha": "Α",
              "amacr": "ā",
              "Amacr": "Ā",
              "amalg": "⨿",
              "amp": "&",
              "AMP": "&",
              "and": "∧",
              "And": "⩓",
              "andand": "⩕",
              "andd": "⩜",
              "andslope": "⩘",
              "andv": "⩚",
              "ang": "∠",
              "ange": "⦤",
              "angle": "∠",
              "angmsd": "∡",
              "angmsdaa": "⦨",
              "angmsdab": "⦩",
              "angmsdac": "⦪",
              "angmsdad": "⦫",
              "angmsdae": "⦬",
              "angmsdaf": "⦭",
              "angmsdag": "⦮",
              "angmsdah": "⦯",
              "angrt": "∟",
              "angrtvb": "⊾",
              "angrtvbd": "⦝",
              "angsph": "∢",
              "angst": "Å",
              "angzarr": "⍼",
              "aogon": "ą",
              "Aogon": "Ą",
              "aopf": "𝕒",
              "Aopf": "𝔸",
              "ap": "≈",
              "apacir": "⩯",
              "ape": "≊",
              "apE": "⩰",
              "apid": "≋",
              "apos": "'",
              "ApplyFunction": "⁡",
              "approx": "≈",
              "approxeq": "≊",
              "aring": "å",
              "Aring": "Å",
              "ascr": "𝒶",
              "Ascr": "𝒜",
              "Assign": "≔",
              "ast": "*",
              "asymp": "≈",
              "asympeq": "≍",
              "atilde": "ã",
              "Atilde": "Ã",
              "auml": "ä",
              "Auml": "Ä",
              "awconint": "∳",
              "awint": "⨑",
              "backcong": "≌",
              "backepsilon": "϶",
              "backprime": "‵",
              "backsim": "∽",
              "backsimeq": "⋍",
              "Backslash": "∖",
              "Barv": "⫧",
              "barvee": "⊽",
              "barwed": "⌅",
              "Barwed": "⌆",
              "barwedge": "⌅",
              "bbrk": "⎵",
              "bbrktbrk": "⎶",
              "bcong": "≌",
              "bcy": "б",
              "Bcy": "Б",
              "bdquo": "„",
              "becaus": "∵",
              "because": "∵",
              "Because": "∵",
              "bemptyv": "⦰",
              "bepsi": "϶",
              "bernou": "ℬ",
              "Bernoullis": "ℬ",
              "beta": "β",
              "Beta": "Β",
              "beth": "ℶ",
              "between": "≬",
              "bfr": "𝔟",
              "Bfr": "𝔅",
              "bigcap": "⋂",
              "bigcirc": "◯",
              "bigcup": "⋃",
              "bigodot": "⨀",
              "bigoplus": "⨁",
              "bigotimes": "⨂",
              "bigsqcup": "⨆",
              "bigstar": "★",
              "bigtriangledown": "▽",
              "bigtriangleup": "△",
              "biguplus": "⨄",
              "bigvee": "⋁",
              "bigwedge": "⋀",
              "bkarow": "⤍",
              "blacklozenge": "⧫",
              "blacksquare": "▪",
              "blacktriangle": "▴",
              "blacktriangledown": "▾",
              "blacktriangleleft": "◂",
              "blacktriangleright": "▸",
              "blank": "␣",
              "blk12": "▒",
              "blk14": "░",
              "blk34": "▓",
              "block": "█",
              "bne": "=⃥",
              "bnequiv": "≡⃥",
              "bnot": "⌐",
              "bNot": "⫭",
              "bopf": "𝕓",
              "Bopf": "𝔹",
              "bot": "⊥",
              "bottom": "⊥",
              "bowtie": "⋈",
              "boxbox": "⧉",
              "boxdl": "┐",
              "boxdL": "╕",
              "boxDl": "╖",
              "boxDL": "╗",
              "boxdr": "┌",
              "boxdR": "╒",
              "boxDr": "╓",
              "boxDR": "╔",
              "boxh": "─",
              "boxH": "═",
              "boxhd": "┬",
              "boxhD": "╥",
              "boxHd": "╤",
              "boxHD": "╦",
              "boxhu": "┴",
              "boxhU": "╨",
              "boxHu": "╧",
              "boxHU": "╩",
              "boxminus": "⊟",
              "boxplus": "⊞",
              "boxtimes": "⊠",
              "boxul": "┘",
              "boxuL": "╛",
              "boxUl": "╜",
              "boxUL": "╝",
              "boxur": "└",
              "boxuR": "╘",
              "boxUr": "╙",
              "boxUR": "╚",
              "boxv": "│",
              "boxV": "║",
              "boxvh": "┼",
              "boxvH": "╪",
              "boxVh": "╫",
              "boxVH": "╬",
              "boxvl": "┤",
              "boxvL": "╡",
              "boxVl": "╢",
              "boxVL": "╣",
              "boxvr": "├",
              "boxvR": "╞",
              "boxVr": "╟",
              "boxVR": "╠",
              "bprime": "‵",
              "breve": "˘",
              "Breve": "˘",
              "brvbar": "¦",
              "bscr": "𝒷",
              "Bscr": "ℬ",
              "bsemi": "⁏",
              "bsim": "∽",
              "bsime": "⋍",
              "bsol": "\\",
              "bsolb": "⧅",
              "bsolhsub": "⟈",
              "bull": "•",
              "bullet": "•",
              "bump": "≎",
              "bumpe": "≏",
              "bumpE": "⪮",
              "bumpeq": "≏",
              "Bumpeq": "≎",
              "cacute": "ć",
              "Cacute": "Ć",
              "cap": "∩",
              "Cap": "⋒",
              "capand": "⩄",
              "capbrcup": "⩉",
              "capcap": "⩋",
              "capcup": "⩇",
              "capdot": "⩀",
              "CapitalDifferentialD": "ⅅ",
              "caps": "∩︀",
              "caret": "⁁",
              "caron": "ˇ",
              "Cayleys": "ℭ",
              "ccaps": "⩍",
              "ccaron": "č",
              "Ccaron": "Č",
              "ccedil": "ç",
              "Ccedil": "Ç",
              "ccirc": "ĉ",
              "Ccirc": "Ĉ",
              "Cconint": "∰",
              "ccups": "⩌",
              "ccupssm": "⩐",
              "cdot": "ċ",
              "Cdot": "Ċ",
              "cedil": "¸",
              "Cedilla": "¸",
              "cemptyv": "⦲",
              "cent": "¢",
              "centerdot": "·",
              "CenterDot": "·",
              "cfr": "𝔠",
              "Cfr": "ℭ",
              "chcy": "ч",
              "CHcy": "Ч",
              "check": "✓",
              "checkmark": "✓",
              "chi": "χ",
              "Chi": "Χ",
              "cir": "○",
              "circ": "ˆ",
              "circeq": "≗",
              "circlearrowleft": "↺",
              "circlearrowright": "↻",
              "circledast": "⊛",
              "circledcirc": "⊚",
              "circleddash": "⊝",
              "CircleDot": "⊙",
              "circledR": "®",
              "circledS": "Ⓢ",
              "CircleMinus": "⊖",
              "CirclePlus": "⊕",
              "CircleTimes": "⊗",
              "cire": "≗",
              "cirE": "⧃",
              "cirfnint": "⨐",
              "cirmid": "⫯",
              "cirscir": "⧂",
              "ClockwiseContourIntegral": "∲",
              "CloseCurlyDoubleQuote": "”",
              "CloseCurlyQuote": "’",
              "clubs": "♣",
              "clubsuit": "♣",
              "colon": ":",
              "Colon": "∷",
              "colone": "≔",
              "Colone": "⩴",
              "coloneq": "≔",
              "comma": ",",
              "commat": "@",
              "comp": "∁",
              "compfn": "∘",
              "complement": "∁",
              "complexes": "ℂ",
              "cong": "≅",
              "congdot": "⩭",
              "Congruent": "≡",
              "conint": "∮",
              "Conint": "∯",
              "ContourIntegral": "∮",
              "copf": "𝕔",
              "Copf": "ℂ",
              "coprod": "∐",
              "Coproduct": "∐",
              "copy": "©",
              "COPY": "©",
              "copysr": "℗",
              "CounterClockwiseContourIntegral": "∳",
              "crarr": "↵",
              "cross": "✗",
              "Cross": "⨯",
              "cscr": "𝒸",
              "Cscr": "𝒞",
              "csub": "⫏",
              "csube": "⫑",
              "csup": "⫐",
              "csupe": "⫒",
              "ctdot": "⋯",
              "cudarrl": "⤸",
              "cudarrr": "⤵",
              "cuepr": "⋞",
              "cuesc": "⋟",
              "cularr": "↶",
              "cularrp": "⤽",
              "cup": "∪",
              "Cup": "⋓",
              "cupbrcap": "⩈",
              "cupcap": "⩆",
              "CupCap": "≍",
              "cupcup": "⩊",
              "cupdot": "⊍",
              "cupor": "⩅",
              "cups": "∪︀",
              "curarr": "↷",
              "curarrm": "⤼",
              "curlyeqprec": "⋞",
              "curlyeqsucc": "⋟",
              "curlyvee": "⋎",
              "curlywedge": "⋏",
              "curren": "¤",
              "curvearrowleft": "↶",
              "curvearrowright": "↷",
              "cuvee": "⋎",
              "cuwed": "⋏",
              "cwconint": "∲",
              "cwint": "∱",
              "cylcty": "⌭",
              "dagger": "†",
              "Dagger": "‡",
              "daleth": "ℸ",
              "darr": "↓",
              "dArr": "⇓",
              "Darr": "↡",
              "dash": "‐",
              "dashv": "⊣",
              "Dashv": "⫤",
              "dbkarow": "⤏",
              "dblac": "˝",
              "dcaron": "ď",
              "Dcaron": "Ď",
              "dcy": "д",
              "Dcy": "Д",
              "dd": "ⅆ",
              "DD": "ⅅ",
              "ddagger": "‡",
              "ddarr": "⇊",
              "DDotrahd": "⤑",
              "ddotseq": "⩷",
              "deg": "°",
              "Del": "∇",
              "delta": "δ",
              "Delta": "Δ",
              "demptyv": "⦱",
              "dfisht": "⥿",
              "dfr": "𝔡",
              "Dfr": "𝔇",
              "dHar": "⥥",
              "dharl": "⇃",
              "dharr": "⇂",
              "DiacriticalAcute": "´",
              "DiacriticalDot": "˙",
              "DiacriticalDoubleAcute": "˝",
              "DiacriticalGrave": "`",
              "DiacriticalTilde": "˜",
              "diam": "⋄",
              "diamond": "⋄",
              "Diamond": "⋄",
              "diamondsuit": "♦",
              "diams": "♦",
              "die": "¨",
              "DifferentialD": "ⅆ",
              "digamma": "ϝ",
              "disin": "⋲",
              "div": "÷",
              "divide": "÷",
              "divideontimes": "⋇",
              "divonx": "⋇",
              "djcy": "ђ",
              "DJcy": "Ђ",
              "dlcorn": "⌞",
              "dlcrop": "⌍",
              "dollar": "$",
              "dopf": "𝕕",
              "Dopf": "𝔻",
              "dot": "˙",
              "Dot": "¨",
              "DotDot": "⃜",
              "doteq": "≐",
              "doteqdot": "≑",
              "DotEqual": "≐",
              "dotminus": "∸",
              "dotplus": "∔",
              "dotsquare": "⊡",
              "doublebarwedge": "⌆",
              "DoubleContourIntegral": "∯",
              "DoubleDot": "¨",
              "DoubleDownArrow": "⇓",
              "DoubleLeftArrow": "⇐",
              "DoubleLeftRightArrow": "⇔",
              "DoubleLeftTee": "⫤",
              "DoubleLongLeftArrow": "⟸",
              "DoubleLongLeftRightArrow": "⟺",
              "DoubleLongRightArrow": "⟹",
              "DoubleRightArrow": "⇒",
              "DoubleRightTee": "⊨",
              "DoubleUpArrow": "⇑",
              "DoubleUpDownArrow": "⇕",
              "DoubleVerticalBar": "∥",
              "downarrow": "↓",
              "Downarrow": "⇓",
              "DownArrow": "↓",
              "DownArrowBar": "⤓",
              "DownArrowUpArrow": "⇵",
              "DownBreve": "̑",
              "downdownarrows": "⇊",
              "downharpoonleft": "⇃",
              "downharpoonright": "⇂",
              "DownLeftRightVector": "⥐",
              "DownLeftTeeVector": "⥞",
              "DownLeftVector": "↽",
              "DownLeftVectorBar": "⥖",
              "DownRightTeeVector": "⥟",
              "DownRightVector": "⇁",
              "DownRightVectorBar": "⥗",
              "DownTee": "⊤",
              "DownTeeArrow": "↧",
              "drbkarow": "⤐",
              "drcorn": "⌟",
              "drcrop": "⌌",
              "dscr": "𝒹",
              "Dscr": "𝒟",
              "dscy": "ѕ",
              "DScy": "Ѕ",
              "dsol": "⧶",
              "dstrok": "đ",
              "Dstrok": "Đ",
              "dtdot": "⋱",
              "dtri": "▿",
              "dtrif": "▾",
              "duarr": "⇵",
              "duhar": "⥯",
              "dwangle": "⦦",
              "dzcy": "џ",
              "DZcy": "Џ",
              "dzigrarr": "⟿",
              "eacute": "é",
              "Eacute": "É",
              "easter": "⩮",
              "ecaron": "ě",
              "Ecaron": "Ě",
              "ecir": "≖",
              "ecirc": "ê",
              "Ecirc": "Ê",
              "ecolon": "≕",
              "ecy": "э",
              "Ecy": "Э",
              "eDDot": "⩷",
              "edot": "ė",
              "eDot": "≑",
              "Edot": "Ė",
              "ee": "ⅇ",
              "efDot": "≒",
              "efr": "𝔢",
              "Efr": "𝔈",
              "eg": "⪚",
              "egrave": "è",
              "Egrave": "È",
              "egs": "⪖",
              "egsdot": "⪘",
              "el": "⪙",
              "Element": "∈",
              "elinters": "⏧",
              "ell": "ℓ",
              "els": "⪕",
              "elsdot": "⪗",
              "emacr": "ē",
              "Emacr": "Ē",
              "empty": "∅",
              "emptyset": "∅",
              "EmptySmallSquare": "◻",
              "emptyv": "∅",
              "EmptyVerySmallSquare": "▫",
              "emsp": " ",
              "emsp13": " ",
              "emsp14": " ",
              "eng": "ŋ",
              "ENG": "Ŋ",
              "ensp": " ",
              "eogon": "ę",
              "Eogon": "Ę",
              "eopf": "𝕖",
              "Eopf": "𝔼",
              "epar": "⋕",
              "eparsl": "⧣",
              "eplus": "⩱",
              "epsi": "ε",
              "epsilon": "ε",
              "Epsilon": "Ε",
              "epsiv": "ϵ",
              "eqcirc": "≖",
              "eqcolon": "≕",
              "eqsim": "≂",
              "eqslantgtr": "⪖",
              "eqslantless": "⪕",
              "Equal": "⩵",
              "equals": "=",
              "EqualTilde": "≂",
              "equest": "≟",
              "Equilibrium": "⇌",
              "equiv": "≡",
              "equivDD": "⩸",
              "eqvparsl": "⧥",
              "erarr": "⥱",
              "erDot": "≓",
              "escr": "ℯ",
              "Escr": "ℰ",
              "esdot": "≐",
              "esim": "≂",
              "Esim": "⩳",
              "eta": "η",
              "Eta": "Η",
              "eth": "ð",
              "ETH": "Ð",
              "euml": "ë",
              "Euml": "Ë",
              "euro": "€",
              "excl": "!",
              "exist": "∃",
              "Exists": "∃",
              "expectation": "ℰ",
              "exponentiale": "ⅇ",
              "ExponentialE": "ⅇ",
              "fallingdotseq": "≒",
              "fcy": "ф",
              "Fcy": "Ф",
              "female": "♀",
              "ffilig": "ﬃ",
              "fflig": "ﬀ",
              "ffllig": "ﬄ",
              "ffr": "𝔣",
              "Ffr": "𝔉",
              "filig": "ﬁ",
              "FilledSmallSquare": "◼",
              "FilledVerySmallSquare": "▪",
              "fjlig": "fj",
              "flat": "♭",
              "fllig": "ﬂ",
              "fltns": "▱",
              "fnof": "ƒ",
              "fopf": "𝕗",
              "Fopf": "𝔽",
              "forall": "∀",
              "ForAll": "∀",
              "fork": "⋔",
              "forkv": "⫙",
              "Fouriertrf": "ℱ",
              "fpartint": "⨍",
              "frac12": "½",
              "frac13": "⅓",
              "frac14": "¼",
              "frac15": "⅕",
              "frac16": "⅙",
              "frac18": "⅛",
              "frac23": "⅔",
              "frac25": "⅖",
              "frac34": "¾",
              "frac35": "⅗",
              "frac38": "⅜",
              "frac45": "⅘",
              "frac56": "⅚",
              "frac58": "⅝",
              "frac78": "⅞",
              "frasl": "⁄",
              "frown": "⌢",
              "fscr": "𝒻",
              "Fscr": "ℱ",
              "gacute": "ǵ",
              "gamma": "γ",
              "Gamma": "Γ",
              "gammad": "ϝ",
              "Gammad": "Ϝ",
              "gap": "⪆",
              "gbreve": "ğ",
              "Gbreve": "Ğ",
              "Gcedil": "Ģ",
              "gcirc": "ĝ",
              "Gcirc": "Ĝ",
              "gcy": "г",
              "Gcy": "Г",
              "gdot": "ġ",
              "Gdot": "Ġ",
              "ge": "≥",
              "gE": "≧",
              "gel": "⋛",
              "gEl": "⪌",
              "geq": "≥",
              "geqq": "≧",
              "geqslant": "⩾",
              "ges": "⩾",
              "gescc": "⪩",
              "gesdot": "⪀",
              "gesdoto": "⪂",
              "gesdotol": "⪄",
              "gesl": "⋛︀",
              "gesles": "⪔",
              "gfr": "𝔤",
              "Gfr": "𝔊",
              "gg": "≫",
              "Gg": "⋙",
              "ggg": "⋙",
              "gimel": "ℷ",
              "gjcy": "ѓ",
              "GJcy": "Ѓ",
              "gl": "≷",
              "gla": "⪥",
              "glE": "⪒",
              "glj": "⪤",
              "gnap": "⪊",
              "gnapprox": "⪊",
              "gne": "⪈",
              "gnE": "≩",
              "gneq": "⪈",
              "gneqq": "≩",
              "gnsim": "⋧",
              "gopf": "𝕘",
              "Gopf": "𝔾",
              "grave": "`",
              "GreaterEqual": "≥",
              "GreaterEqualLess": "⋛",
              "GreaterFullEqual": "≧",
              "GreaterGreater": "⪢",
              "GreaterLess": "≷",
              "GreaterSlantEqual": "⩾",
              "GreaterTilde": "≳",
              "gscr": "ℊ",
              "Gscr": "𝒢",
              "gsim": "≳",
              "gsime": "⪎",
              "gsiml": "⪐",
              "gt": ">",
              "Gt": "≫",
              "GT": ">",
              "gtcc": "⪧",
              "gtcir": "⩺",
              "gtdot": "⋗",
              "gtlPar": "⦕",
              "gtquest": "⩼",
              "gtrapprox": "⪆",
              "gtrarr": "⥸",
              "gtrdot": "⋗",
              "gtreqless": "⋛",
              "gtreqqless": "⪌",
              "gtrless": "≷",
              "gtrsim": "≳",
              "gvertneqq": "≩︀",
              "gvnE": "≩︀",
              "Hacek": "ˇ",
              "hairsp": " ",
              "half": "½",
              "hamilt": "ℋ",
              "hardcy": "ъ",
              "HARDcy": "Ъ",
              "harr": "↔",
              "hArr": "⇔",
              "harrcir": "⥈",
              "harrw": "↭",
              "Hat": "^",
              "hbar": "ℏ",
              "hcirc": "ĥ",
              "Hcirc": "Ĥ",
              "hearts": "♥",
              "heartsuit": "♥",
              "hellip": "…",
              "hercon": "⊹",
              "hfr": "𝔥",
              "Hfr": "ℌ",
              "HilbertSpace": "ℋ",
              "hksearow": "⤥",
              "hkswarow": "⤦",
              "hoarr": "⇿",
              "homtht": "∻",
              "hookleftarrow": "↩",
              "hookrightarrow": "↪",
              "hopf": "𝕙",
              "Hopf": "ℍ",
              "horbar": "―",
              "HorizontalLine": "─",
              "hscr": "𝒽",
              "Hscr": "ℋ",
              "hslash": "ℏ",
              "hstrok": "ħ",
              "Hstrok": "Ħ",
              "HumpDownHump": "≎",
              "HumpEqual": "≏",
              "hybull": "⁃",
              "hyphen": "‐",
              "iacute": "í",
              "Iacute": "Í",
              "ic": "⁣",
              "icirc": "î",
              "Icirc": "Î",
              "icy": "и",
              "Icy": "И",
              "Idot": "İ",
              "iecy": "е",
              "IEcy": "Е",
              "iexcl": "¡",
              "iff": "⇔",
              "ifr": "𝔦",
              "Ifr": "ℑ",
              "igrave": "ì",
              "Igrave": "Ì",
              "ii": "ⅈ",
              "iiiint": "⨌",
              "iiint": "∭",
              "iinfin": "⧜",
              "iiota": "℩",
              "ijlig": "ĳ",
              "IJlig": "Ĳ",
              "Im": "ℑ",
              "imacr": "ī",
              "Imacr": "Ī",
              "image": "ℑ",
              "ImaginaryI": "ⅈ",
              "imagline": "ℐ",
              "imagpart": "ℑ",
              "imath": "ı",
              "imof": "⊷",
              "imped": "Ƶ",
              "Implies": "⇒",
              "in": "∈",
              "incare": "℅",
              "infin": "∞",
              "infintie": "⧝",
              "inodot": "ı",
              "int": "∫",
              "Int": "∬",
              "intcal": "⊺",
              "integers": "ℤ",
              "Integral": "∫",
              "intercal": "⊺",
              "Intersection": "⋂",
              "intlarhk": "⨗",
              "intprod": "⨼",
              "InvisibleComma": "⁣",
              "InvisibleTimes": "⁢",
              "iocy": "ё",
              "IOcy": "Ё",
              "iogon": "į",
              "Iogon": "Į",
              "iopf": "𝕚",
              "Iopf": "𝕀",
              "iota": "ι",
              "Iota": "Ι",
              "iprod": "⨼",
              "iquest": "¿",
              "iscr": "𝒾",
              "Iscr": "ℐ",
              "isin": "∈",
              "isindot": "⋵",
              "isinE": "⋹",
              "isins": "⋴",
              "isinsv": "⋳",
              "isinv": "∈",
              "it": "⁢",
              "itilde": "ĩ",
              "Itilde": "Ĩ",
              "iukcy": "і",
              "Iukcy": "І",
              "iuml": "ï",
              "Iuml": "Ï",
              "jcirc": "ĵ",
              "Jcirc": "Ĵ",
              "jcy": "й",
              "Jcy": "Й",
              "jfr": "𝔧",
              "Jfr": "𝔍",
              "jmath": "ȷ",
              "jopf": "𝕛",
              "Jopf": "𝕁",
              "jscr": "𝒿",
              "Jscr": "𝒥",
              "jsercy": "ј",
              "Jsercy": "Ј",
              "jukcy": "є",
              "Jukcy": "Є",
              "kappa": "κ",
              "Kappa": "Κ",
              "kappav": "ϰ",
              "kcedil": "ķ",
              "Kcedil": "Ķ",
              "kcy": "к",
              "Kcy": "К",
              "kfr": "𝔨",
              "Kfr": "𝔎",
              "kgreen": "ĸ",
              "khcy": "х",
              "KHcy": "Х",
              "kjcy": "ќ",
              "KJcy": "Ќ",
              "kopf": "𝕜",
              "Kopf": "𝕂",
              "kscr": "𝓀",
              "Kscr": "𝒦",
              "lAarr": "⇚",
              "lacute": "ĺ",
              "Lacute": "Ĺ",
              "laemptyv": "⦴",
              "lagran": "ℒ",
              "lambda": "λ",
              "Lambda": "Λ",
              "lang": "⟨",
              "Lang": "⟪",
              "langd": "⦑",
              "langle": "⟨",
              "lap": "⪅",
              "Laplacetrf": "ℒ",
              "laquo": "«",
              "larr": "←",
              "lArr": "⇐",
              "Larr": "↞",
              "larrb": "⇤",
              "larrbfs": "⤟",
              "larrfs": "⤝",
              "larrhk": "↩",
              "larrlp": "↫",
              "larrpl": "⤹",
              "larrsim": "⥳",
              "larrtl": "↢",
              "lat": "⪫",
              "latail": "⤙",
              "lAtail": "⤛",
              "late": "⪭",
              "lates": "⪭︀",
              "lbarr": "⤌",
              "lBarr": "⤎",
              "lbbrk": "❲",
              "lbrace": "{",
              "lbrack": "[",
              "lbrke": "⦋",
              "lbrksld": "⦏",
              "lbrkslu": "⦍",
              "lcaron": "ľ",
              "Lcaron": "Ľ",
              "lcedil": "ļ",
              "Lcedil": "Ļ",
              "lceil": "⌈",
              "lcub": "{",
              "lcy": "л",
              "Lcy": "Л",
              "ldca": "⤶",
              "ldquo": "“",
              "ldquor": "„",
              "ldrdhar": "⥧",
              "ldrushar": "⥋",
              "ldsh": "↲",
              "le": "≤",
              "lE": "≦",
              "LeftAngleBracket": "⟨",
              "leftarrow": "←",
              "Leftarrow": "⇐",
              "LeftArrow": "←",
              "LeftArrowBar": "⇤",
              "LeftArrowRightArrow": "⇆",
              "leftarrowtail": "↢",
              "LeftCeiling": "⌈",
              "LeftDoubleBracket": "⟦",
              "LeftDownTeeVector": "⥡",
              "LeftDownVector": "⇃",
              "LeftDownVectorBar": "⥙",
              "LeftFloor": "⌊",
              "leftharpoondown": "↽",
              "leftharpoonup": "↼",
              "leftleftarrows": "⇇",
              "leftrightarrow": "↔",
              "Leftrightarrow": "⇔",
              "LeftRightArrow": "↔",
              "leftrightarrows": "⇆",
              "leftrightharpoons": "⇋",
              "leftrightsquigarrow": "↭",
              "LeftRightVector": "⥎",
              "LeftTee": "⊣",
              "LeftTeeArrow": "↤",
              "LeftTeeVector": "⥚",
              "leftthreetimes": "⋋",
              "LeftTriangle": "⊲",
              "LeftTriangleBar": "⧏",
              "LeftTriangleEqual": "⊴",
              "LeftUpDownVector": "⥑",
              "LeftUpTeeVector": "⥠",
              "LeftUpVector": "↿",
              "LeftUpVectorBar": "⥘",
              "LeftVector": "↼",
              "LeftVectorBar": "⥒",
              "leg": "⋚",
              "lEg": "⪋",
              "leq": "≤",
              "leqq": "≦",
              "leqslant": "⩽",
              "les": "⩽",
              "lescc": "⪨",
              "lesdot": "⩿",
              "lesdoto": "⪁",
              "lesdotor": "⪃",
              "lesg": "⋚︀",
              "lesges": "⪓",
              "lessapprox": "⪅",
              "lessdot": "⋖",
              "lesseqgtr": "⋚",
              "lesseqqgtr": "⪋",
              "LessEqualGreater": "⋚",
              "LessFullEqual": "≦",
              "LessGreater": "≶",
              "lessgtr": "≶",
              "LessLess": "⪡",
              "lesssim": "≲",
              "LessSlantEqual": "⩽",
              "LessTilde": "≲",
              "lfisht": "⥼",
              "lfloor": "⌊",
              "lfr": "𝔩",
              "Lfr": "𝔏",
              "lg": "≶",
              "lgE": "⪑",
              "lHar": "⥢",
              "lhard": "↽",
              "lharu": "↼",
              "lharul": "⥪",
              "lhblk": "▄",
              "ljcy": "љ",
              "LJcy": "Љ",
              "ll": "≪",
              "Ll": "⋘",
              "llarr": "⇇",
              "llcorner": "⌞",
              "Lleftarrow": "⇚",
              "llhard": "⥫",
              "lltri": "◺",
              "lmidot": "ŀ",
              "Lmidot": "Ŀ",
              "lmoust": "⎰",
              "lmoustache": "⎰",
              "lnap": "⪉",
              "lnapprox": "⪉",
              "lne": "⪇",
              "lnE": "≨",
              "lneq": "⪇",
              "lneqq": "≨",
              "lnsim": "⋦",
              "loang": "⟬",
              "loarr": "⇽",
              "lobrk": "⟦",
              "longleftarrow": "⟵",
              "Longleftarrow": "⟸",
              "LongLeftArrow": "⟵",
              "longleftrightarrow": "⟷",
              "Longleftrightarrow": "⟺",
              "LongLeftRightArrow": "⟷",
              "longmapsto": "⟼",
              "longrightarrow": "⟶",
              "Longrightarrow": "⟹",
              "LongRightArrow": "⟶",
              "looparrowleft": "↫",
              "looparrowright": "↬",
              "lopar": "⦅",
              "lopf": "𝕝",
              "Lopf": "𝕃",
              "loplus": "⨭",
              "lotimes": "⨴",
              "lowast": "∗",
              "lowbar": "_",
              "LowerLeftArrow": "↙",
              "LowerRightArrow": "↘",
              "loz": "◊",
              "lozenge": "◊",
              "lozf": "⧫",
              "lpar": "(",
              "lparlt": "⦓",
              "lrarr": "⇆",
              "lrcorner": "⌟",
              "lrhar": "⇋",
              "lrhard": "⥭",
              "lrm": "‎",
              "lrtri": "⊿",
              "lsaquo": "‹",
              "lscr": "𝓁",
              "Lscr": "ℒ",
              "lsh": "↰",
              "Lsh": "↰",
              "lsim": "≲",
              "lsime": "⪍",
              "lsimg": "⪏",
              "lsqb": "[",
              "lsquo": "‘",
              "lsquor": "‚",
              "lstrok": "ł",
              "Lstrok": "Ł",
              "lt": "<",
              "Lt": "≪",
              "LT": "<",
              "ltcc": "⪦",
              "ltcir": "⩹",
              "ltdot": "⋖",
              "lthree": "⋋",
              "ltimes": "⋉",
              "ltlarr": "⥶",
              "ltquest": "⩻",
              "ltri": "◃",
              "ltrie": "⊴",
              "ltrif": "◂",
              "ltrPar": "⦖",
              "lurdshar": "⥊",
              "luruhar": "⥦",
              "lvertneqq": "≨︀",
              "lvnE": "≨︀",
              "macr": "¯",
              "male": "♂",
              "malt": "✠",
              "maltese": "✠",
              "map": "↦",
              "Map": "⤅",
              "mapsto": "↦",
              "mapstodown": "↧",
              "mapstoleft": "↤",
              "mapstoup": "↥",
              "marker": "▮",
              "mcomma": "⨩",
              "mcy": "м",
              "Mcy": "М",
              "mdash": "—",
              "mDDot": "∺",
              "measuredangle": "∡",
              "MediumSpace": " ",
              "Mellintrf": "ℳ",
              "mfr": "𝔪",
              "Mfr": "𝔐",
              "mho": "℧",
              "micro": "µ",
              "mid": "∣",
              "midast": "*",
              "midcir": "⫰",
              "middot": "·",
              "minus": "−",
              "minusb": "⊟",
              "minusd": "∸",
              "minusdu": "⨪",
              "MinusPlus": "∓",
              "mlcp": "⫛",
              "mldr": "…",
              "mnplus": "∓",
              "models": "⊧",
              "mopf": "𝕞",
              "Mopf": "𝕄",
              "mp": "∓",
              "mscr": "𝓂",
              "Mscr": "ℳ",
              "mstpos": "∾",
              "mu": "μ",
              "Mu": "Μ",
              "multimap": "⊸",
              "mumap": "⊸",
              "nabla": "∇",
              "nacute": "ń",
              "Nacute": "Ń",
              "nang": "∠⃒",
              "nap": "≉",
              "napE": "⩰̸",
              "napid": "≋̸",
              "napos": "ŉ",
              "napprox": "≉",
              "natur": "♮",
              "natural": "♮",
              "naturals": "ℕ",
              "nbsp": " ",
              "nbump": "≎̸",
              "nbumpe": "≏̸",
              "ncap": "⩃",
              "ncaron": "ň",
              "Ncaron": "Ň",
              "ncedil": "ņ",
              "Ncedil": "Ņ",
              "ncong": "≇",
              "ncongdot": "⩭̸",
              "ncup": "⩂",
              "ncy": "н",
              "Ncy": "Н",
              "ndash": "–",
              "ne": "≠",
              "nearhk": "⤤",
              "nearr": "↗",
              "neArr": "⇗",
              "nearrow": "↗",
              "nedot": "≐̸",
              "NegativeMediumSpace": "​",
              "NegativeThickSpace": "​",
              "NegativeThinSpace": "​",
              "NegativeVeryThinSpace": "​",
              "nequiv": "≢",
              "nesear": "⤨",
              "nesim": "≂̸",
              "NestedGreaterGreater": "≫",
              "NestedLessLess": "≪",
              "NewLine": "\n",
              "nexist": "∄",
              "nexists": "∄",
              "nfr": "𝔫",
              "Nfr": "𝔑",
              "nge": "≱",
              "ngE": "≧̸",
              "ngeq": "≱",
              "ngeqq": "≧̸",
              "ngeqslant": "⩾̸",
              "nges": "⩾̸",
              "nGg": "⋙̸",
              "ngsim": "≵",
              "ngt": "≯",
              "nGt": "≫⃒",
              "ngtr": "≯",
              "nGtv": "≫̸",
              "nharr": "↮",
              "nhArr": "⇎",
              "nhpar": "⫲",
              "ni": "∋",
              "nis": "⋼",
              "nisd": "⋺",
              "niv": "∋",
              "njcy": "њ",
              "NJcy": "Њ",
              "nlarr": "↚",
              "nlArr": "⇍",
              "nldr": "‥",
              "nle": "≰",
              "nlE": "≦̸",
              "nleftarrow": "↚",
              "nLeftarrow": "⇍",
              "nleftrightarrow": "↮",
              "nLeftrightarrow": "⇎",
              "nleq": "≰",
              "nleqq": "≦̸",
              "nleqslant": "⩽̸",
              "nles": "⩽̸",
              "nless": "≮",
              "nLl": "⋘̸",
              "nlsim": "≴",
              "nlt": "≮",
              "nLt": "≪⃒",
              "nltri": "⋪",
              "nltrie": "⋬",
              "nLtv": "≪̸",
              "nmid": "∤",
              "NoBreak": "⁠",
              "NonBreakingSpace": " ",
              "nopf": "𝕟",
              "Nopf": "ℕ",
              "not": "¬",
              "Not": "⫬",
              "NotCongruent": "≢",
              "NotCupCap": "≭",
              "NotDoubleVerticalBar": "∦",
              "NotElement": "∉",
              "NotEqual": "≠",
              "NotEqualTilde": "≂̸",
              "NotExists": "∄",
              "NotGreater": "≯",
              "NotGreaterEqual": "≱",
              "NotGreaterFullEqual": "≧̸",
              "NotGreaterGreater": "≫̸",
              "NotGreaterLess": "≹",
              "NotGreaterSlantEqual": "⩾̸",
              "NotGreaterTilde": "≵",
              "NotHumpDownHump": "≎̸",
              "NotHumpEqual": "≏̸",
              "notin": "∉",
              "notindot": "⋵̸",
              "notinE": "⋹̸",
              "notinva": "∉",
              "notinvb": "⋷",
              "notinvc": "⋶",
              "NotLeftTriangle": "⋪",
              "NotLeftTriangleBar": "⧏̸",
              "NotLeftTriangleEqual": "⋬",
              "NotLess": "≮",
              "NotLessEqual": "≰",
              "NotLessGreater": "≸",
              "NotLessLess": "≪̸",
              "NotLessSlantEqual": "⩽̸",
              "NotLessTilde": "≴",
              "NotNestedGreaterGreater": "⪢̸",
              "NotNestedLessLess": "⪡̸",
              "notni": "∌",
              "notniva": "∌",
              "notnivb": "⋾",
              "notnivc": "⋽",
              "NotPrecedes": "⊀",
              "NotPrecedesEqual": "⪯̸",
              "NotPrecedesSlantEqual": "⋠",
              "NotReverseElement": "∌",
              "NotRightTriangle": "⋫",
              "NotRightTriangleBar": "⧐̸",
              "NotRightTriangleEqual": "⋭",
              "NotSquareSubset": "⊏̸",
              "NotSquareSubsetEqual": "⋢",
              "NotSquareSuperset": "⊐̸",
              "NotSquareSupersetEqual": "⋣",
              "NotSubset": "⊂⃒",
              "NotSubsetEqual": "⊈",
              "NotSucceeds": "⊁",
              "NotSucceedsEqual": "⪰̸",
              "NotSucceedsSlantEqual": "⋡",
              "NotSucceedsTilde": "≿̸",
              "NotSuperset": "⊃⃒",
              "NotSupersetEqual": "⊉",
              "NotTilde": "≁",
              "NotTildeEqual": "≄",
              "NotTildeFullEqual": "≇",
              "NotTildeTilde": "≉",
              "NotVerticalBar": "∤",
              "npar": "∦",
              "nparallel": "∦",
              "nparsl": "⫽⃥",
              "npart": "∂̸",
              "npolint": "⨔",
              "npr": "⊀",
              "nprcue": "⋠",
              "npre": "⪯̸",
              "nprec": "⊀",
              "npreceq": "⪯̸",
              "nrarr": "↛",
              "nrArr": "⇏",
              "nrarrc": "⤳̸",
              "nrarrw": "↝̸",
              "nrightarrow": "↛",
              "nRightarrow": "⇏",
              "nrtri": "⋫",
              "nrtrie": "⋭",
              "nsc": "⊁",
              "nsccue": "⋡",
              "nsce": "⪰̸",
              "nscr": "𝓃",
              "Nscr": "𝒩",
              "nshortmid": "∤",
              "nshortparallel": "∦",
              "nsim": "≁",
              "nsime": "≄",
              "nsimeq": "≄",
              "nsmid": "∤",
              "nspar": "∦",
              "nsqsube": "⋢",
              "nsqsupe": "⋣",
              "nsub": "⊄",
              "nsube": "⊈",
              "nsubE": "⫅̸",
              "nsubset": "⊂⃒",
              "nsubseteq": "⊈",
              "nsubseteqq": "⫅̸",
              "nsucc": "⊁",
              "nsucceq": "⪰̸",
              "nsup": "⊅",
              "nsupe": "⊉",
              "nsupE": "⫆̸",
              "nsupset": "⊃⃒",
              "nsupseteq": "⊉",
              "nsupseteqq": "⫆̸",
              "ntgl": "≹",
              "ntilde": "ñ",
              "Ntilde": "Ñ",
              "ntlg": "≸",
              "ntriangleleft": "⋪",
              "ntrianglelefteq": "⋬",
              "ntriangleright": "⋫",
              "ntrianglerighteq": "⋭",
              "nu": "ν",
              "Nu": "Ν",
              "num": "#",
              "numero": "№",
              "numsp": " ",
              "nvap": "≍⃒",
              "nvdash": "⊬",
              "nvDash": "⊭",
              "nVdash": "⊮",
              "nVDash": "⊯",
              "nvge": "≥⃒",
              "nvgt": ">⃒",
              "nvHarr": "⤄",
              "nvinfin": "⧞",
              "nvlArr": "⤂",
              "nvle": "≤⃒",
              "nvlt": "<⃒",
              "nvltrie": "⊴⃒",
              "nvrArr": "⤃",
              "nvrtrie": "⊵⃒",
              "nvsim": "∼⃒",
              "nwarhk": "⤣",
              "nwarr": "↖",
              "nwArr": "⇖",
              "nwarrow": "↖",
              "nwnear": "⤧",
              "oacute": "ó",
              "Oacute": "Ó",
              "oast": "⊛",
              "ocir": "⊚",
              "ocirc": "ô",
              "Ocirc": "Ô",
              "ocy": "о",
              "Ocy": "О",
              "odash": "⊝",
              "odblac": "ő",
              "Odblac": "Ő",
              "odiv": "⨸",
              "odot": "⊙",
              "odsold": "⦼",
              "oelig": "œ",
              "OElig": "Œ",
              "ofcir": "⦿",
              "ofr": "𝔬",
              "Ofr": "𝔒",
              "ogon": "˛",
              "ograve": "ò",
              "Ograve": "Ò",
              "ogt": "⧁",
              "ohbar": "⦵",
              "ohm": "Ω",
              "oint": "∮",
              "olarr": "↺",
              "olcir": "⦾",
              "olcross": "⦻",
              "oline": "‾",
              "olt": "⧀",
              "omacr": "ō",
              "Omacr": "Ō",
              "omega": "ω",
              "Omega": "Ω",
              "omicron": "ο",
              "Omicron": "Ο",
              "omid": "⦶",
              "ominus": "⊖",
              "oopf": "𝕠",
              "Oopf": "𝕆",
              "opar": "⦷",
              "OpenCurlyDoubleQuote": "“",
              "OpenCurlyQuote": "‘",
              "operp": "⦹",
              "oplus": "⊕",
              "or": "∨",
              "Or": "⩔",
              "orarr": "↻",
              "ord": "⩝",
              "order": "ℴ",
              "orderof": "ℴ",
              "ordf": "ª",
              "ordm": "º",
              "origof": "⊶",
              "oror": "⩖",
              "orslope": "⩗",
              "orv": "⩛",
              "oS": "Ⓢ",
              "oscr": "ℴ",
              "Oscr": "𝒪",
              "oslash": "ø",
              "Oslash": "Ø",
              "osol": "⊘",
              "otilde": "õ",
              "Otilde": "Õ",
              "otimes": "⊗",
              "Otimes": "⨷",
              "otimesas": "⨶",
              "ouml": "ö",
              "Ouml": "Ö",
              "ovbar": "⌽",
              "OverBar": "‾",
              "OverBrace": "⏞",
              "OverBracket": "⎴",
              "OverParenthesis": "⏜",
              "par": "∥",
              "para": "¶",
              "parallel": "∥",
              "parsim": "⫳",
              "parsl": "⫽",
              "part": "∂",
              "PartialD": "∂",
              "pcy": "п",
              "Pcy": "П",
              "percnt": "%",
              "period": ".",
              "permil": "‰",
              "perp": "⊥",
              "pertenk": "‱",
              "pfr": "𝔭",
              "Pfr": "𝔓",
              "phi": "φ",
              "Phi": "Φ",
              "phiv": "ϕ",
              "phmmat": "ℳ",
              "phone": "☎",
              "pi": "π",
              "Pi": "Π",
              "pitchfork": "⋔",
              "piv": "ϖ",
              "planck": "ℏ",
              "planckh": "ℎ",
              "plankv": "ℏ",
              "plus": "+",
              "plusacir": "⨣",
              "plusb": "⊞",
              "pluscir": "⨢",
              "plusdo": "∔",
              "plusdu": "⨥",
              "pluse": "⩲",
              "PlusMinus": "±",
              "plusmn": "±",
              "plussim": "⨦",
              "plustwo": "⨧",
              "pm": "±",
              "Poincareplane": "ℌ",
              "pointint": "⨕",
              "popf": "𝕡",
              "Popf": "ℙ",
              "pound": "£",
              "pr": "≺",
              "Pr": "⪻",
              "prap": "⪷",
              "prcue": "≼",
              "pre": "⪯",
              "prE": "⪳",
              "prec": "≺",
              "precapprox": "⪷",
              "preccurlyeq": "≼",
              "Precedes": "≺",
              "PrecedesEqual": "⪯",
              "PrecedesSlantEqual": "≼",
              "PrecedesTilde": "≾",
              "preceq": "⪯",
              "precnapprox": "⪹",
              "precneqq": "⪵",
              "precnsim": "⋨",
              "precsim": "≾",
              "prime": "′",
              "Prime": "″",
              "primes": "ℙ",
              "prnap": "⪹",
              "prnE": "⪵",
              "prnsim": "⋨",
              "prod": "∏",
              "Product": "∏",
              "profalar": "⌮",
              "profline": "⌒",
              "profsurf": "⌓",
              "prop": "∝",
              "Proportion": "∷",
              "Proportional": "∝",
              "propto": "∝",
              "prsim": "≾",
              "prurel": "⊰",
              "pscr": "𝓅",
              "Pscr": "𝒫",
              "psi": "ψ",
              "Psi": "Ψ",
              "puncsp": " ",
              "qfr": "𝔮",
              "Qfr": "𝔔",
              "qint": "⨌",
              "qopf": "𝕢",
              "Qopf": "ℚ",
              "qprime": "⁗",
              "qscr": "𝓆",
              "Qscr": "𝒬",
              "quaternions": "ℍ",
              "quatint": "⨖",
              "quest": "?",
              "questeq": "≟",
              "quot": "\"",
              "QUOT": "\"",
              "rAarr": "⇛",
              "race": "∽̱",
              "racute": "ŕ",
              "Racute": "Ŕ",
              "radic": "√",
              "raemptyv": "⦳",
              "rang": "⟩",
              "Rang": "⟫",
              "rangd": "⦒",
              "range": "⦥",
              "rangle": "⟩",
              "raquo": "»",
              "rarr": "→",
              "rArr": "⇒",
              "Rarr": "↠",
              "rarrap": "⥵",
              "rarrb": "⇥",
              "rarrbfs": "⤠",
              "rarrc": "⤳",
              "rarrfs": "⤞",
              "rarrhk": "↪",
              "rarrlp": "↬",
              "rarrpl": "⥅",
              "rarrsim": "⥴",
              "rarrtl": "↣",
              "Rarrtl": "⤖",
              "rarrw": "↝",
              "ratail": "⤚",
              "rAtail": "⤜",
              "ratio": "∶",
              "rationals": "ℚ",
              "rbarr": "⤍",
              "rBarr": "⤏",
              "RBarr": "⤐",
              "rbbrk": "❳",
              "rbrace": "}",
              "rbrack": "]",
              "rbrke": "⦌",
              "rbrksld": "⦎",
              "rbrkslu": "⦐",
              "rcaron": "ř",
              "Rcaron": "Ř",
              "rcedil": "ŗ",
              "Rcedil": "Ŗ",
              "rceil": "⌉",
              "rcub": "}",
              "rcy": "р",
              "Rcy": "Р",
              "rdca": "⤷",
              "rdldhar": "⥩",
              "rdquo": "”",
              "rdquor": "”",
              "rdsh": "↳",
              "Re": "ℜ",
              "real": "ℜ",
              "realine": "ℛ",
              "realpart": "ℜ",
              "reals": "ℝ",
              "rect": "▭",
              "reg": "®",
              "REG": "®",
              "ReverseElement": "∋",
              "ReverseEquilibrium": "⇋",
              "ReverseUpEquilibrium": "⥯",
              "rfisht": "⥽",
              "rfloor": "⌋",
              "rfr": "𝔯",
              "Rfr": "ℜ",
              "rHar": "⥤",
              "rhard": "⇁",
              "rharu": "⇀",
              "rharul": "⥬",
              "rho": "ρ",
              "Rho": "Ρ",
              "rhov": "ϱ",
              "RightAngleBracket": "⟩",
              "rightarrow": "→",
              "Rightarrow": "⇒",
              "RightArrow": "→",
              "RightArrowBar": "⇥",
              "RightArrowLeftArrow": "⇄",
              "rightarrowtail": "↣",
              "RightCeiling": "⌉",
              "RightDoubleBracket": "⟧",
              "RightDownTeeVector": "⥝",
              "RightDownVector": "⇂",
              "RightDownVectorBar": "⥕",
              "RightFloor": "⌋",
              "rightharpoondown": "⇁",
              "rightharpoonup": "⇀",
              "rightleftarrows": "⇄",
              "rightleftharpoons": "⇌",
              "rightrightarrows": "⇉",
              "rightsquigarrow": "↝",
              "RightTee": "⊢",
              "RightTeeArrow": "↦",
              "RightTeeVector": "⥛",
              "rightthreetimes": "⋌",
              "RightTriangle": "⊳",
              "RightTriangleBar": "⧐",
              "RightTriangleEqual": "⊵",
              "RightUpDownVector": "⥏",
              "RightUpTeeVector": "⥜",
              "RightUpVector": "↾",
              "RightUpVectorBar": "⥔",
              "RightVector": "⇀",
              "RightVectorBar": "⥓",
              "ring": "˚",
              "risingdotseq": "≓",
              "rlarr": "⇄",
              "rlhar": "⇌",
              "rlm": "‏",
              "rmoust": "⎱",
              "rmoustache": "⎱",
              "rnmid": "⫮",
              "roang": "⟭",
              "roarr": "⇾",
              "robrk": "⟧",
              "ropar": "⦆",
              "ropf": "𝕣",
              "Ropf": "ℝ",
              "roplus": "⨮",
              "rotimes": "⨵",
              "RoundImplies": "⥰",
              "rpar": ")",
              "rpargt": "⦔",
              "rppolint": "⨒",
              "rrarr": "⇉",
              "Rrightarrow": "⇛",
              "rsaquo": "›",
              "rscr": "𝓇",
              "Rscr": "ℛ",
              "rsh": "↱",
              "Rsh": "↱",
              "rsqb": "]",
              "rsquo": "’",
              "rsquor": "’",
              "rthree": "⋌",
              "rtimes": "⋊",
              "rtri": "▹",
              "rtrie": "⊵",
              "rtrif": "▸",
              "rtriltri": "⧎",
              "RuleDelayed": "⧴",
              "ruluhar": "⥨",
              "rx": "℞",
              "sacute": "ś",
              "Sacute": "Ś",
              "sbquo": "‚",
              "sc": "≻",
              "Sc": "⪼",
              "scap": "⪸",
              "scaron": "š",
              "Scaron": "Š",
              "sccue": "≽",
              "sce": "⪰",
              "scE": "⪴",
              "scedil": "ş",
              "Scedil": "Ş",
              "scirc": "ŝ",
              "Scirc": "Ŝ",
              "scnap": "⪺",
              "scnE": "⪶",
              "scnsim": "⋩",
              "scpolint": "⨓",
              "scsim": "≿",
              "scy": "с",
              "Scy": "С",
              "sdot": "⋅",
              "sdotb": "⊡",
              "sdote": "⩦",
              "searhk": "⤥",
              "searr": "↘",
              "seArr": "⇘",
              "searrow": "↘",
              "sect": "§",
              "semi": ";",
              "seswar": "⤩",
              "setminus": "∖",
              "setmn": "∖",
              "sext": "✶",
              "sfr": "𝔰",
              "Sfr": "𝔖",
              "sfrown": "⌢",
              "sharp": "♯",
              "shchcy": "щ",
              "SHCHcy": "Щ",
              "shcy": "ш",
              "SHcy": "Ш",
              "ShortDownArrow": "↓",
              "ShortLeftArrow": "←",
              "shortmid": "∣",
              "shortparallel": "∥",
              "ShortRightArrow": "→",
              "ShortUpArrow": "↑",
              "shy": "­",
              "sigma": "σ",
              "Sigma": "Σ",
              "sigmaf": "ς",
              "sigmav": "ς",
              "sim": "∼",
              "simdot": "⩪",
              "sime": "≃",
              "simeq": "≃",
              "simg": "⪞",
              "simgE": "⪠",
              "siml": "⪝",
              "simlE": "⪟",
              "simne": "≆",
              "simplus": "⨤",
              "simrarr": "⥲",
              "slarr": "←",
              "SmallCircle": "∘",
              "smallsetminus": "∖",
              "smashp": "⨳",
              "smeparsl": "⧤",
              "smid": "∣",
              "smile": "⌣",
              "smt": "⪪",
              "smte": "⪬",
              "smtes": "⪬︀",
              "softcy": "ь",
              "SOFTcy": "Ь",
              "sol": "/",
              "solb": "⧄",
              "solbar": "⌿",
              "sopf": "𝕤",
              "Sopf": "𝕊",
              "spades": "♠",
              "spadesuit": "♠",
              "spar": "∥",
              "sqcap": "⊓",
              "sqcaps": "⊓︀",
              "sqcup": "⊔",
              "sqcups": "⊔︀",
              "Sqrt": "√",
              "sqsub": "⊏",
              "sqsube": "⊑",
              "sqsubset": "⊏",
              "sqsubseteq": "⊑",
              "sqsup": "⊐",
              "sqsupe": "⊒",
              "sqsupset": "⊐",
              "sqsupseteq": "⊒",
              "squ": "□",
              "square": "□",
              "Square": "□",
              "SquareIntersection": "⊓",
              "SquareSubset": "⊏",
              "SquareSubsetEqual": "⊑",
              "SquareSuperset": "⊐",
              "SquareSupersetEqual": "⊒",
              "SquareUnion": "⊔",
              "squarf": "▪",
              "squf": "▪",
              "srarr": "→",
              "sscr": "𝓈",
              "Sscr": "𝒮",
              "ssetmn": "∖",
              "ssmile": "⌣",
              "sstarf": "⋆",
              "star": "☆",
              "Star": "⋆",
              "starf": "★",
              "straightepsilon": "ϵ",
              "straightphi": "ϕ",
              "strns": "¯",
              "sub": "⊂",
              "Sub": "⋐",
              "subdot": "⪽",
              "sube": "⊆",
              "subE": "⫅",
              "subedot": "⫃",
              "submult": "⫁",
              "subne": "⊊",
              "subnE": "⫋",
              "subplus": "⪿",
              "subrarr": "⥹",
              "subset": "⊂",
              "Subset": "⋐",
              "subseteq": "⊆",
              "subseteqq": "⫅",
              "SubsetEqual": "⊆",
              "subsetneq": "⊊",
              "subsetneqq": "⫋",
              "subsim": "⫇",
              "subsub": "⫕",
              "subsup": "⫓",
              "succ": "≻",
              "succapprox": "⪸",
              "succcurlyeq": "≽",
              "Succeeds": "≻",
              "SucceedsEqual": "⪰",
              "SucceedsSlantEqual": "≽",
              "SucceedsTilde": "≿",
              "succeq": "⪰",
              "succnapprox": "⪺",
              "succneqq": "⪶",
              "succnsim": "⋩",
              "succsim": "≿",
              "SuchThat": "∋",
              "sum": "∑",
              "Sum": "∑",
              "sung": "♪",
              "sup": "⊃",
              "Sup": "⋑",
              "sup1": "¹",
              "sup2": "²",
              "sup3": "³",
              "supdot": "⪾",
              "supdsub": "⫘",
              "supe": "⊇",
              "supE": "⫆",
              "supedot": "⫄",
              "Superset": "⊃",
              "SupersetEqual": "⊇",
              "suphsol": "⟉",
              "suphsub": "⫗",
              "suplarr": "⥻",
              "supmult": "⫂",
              "supne": "⊋",
              "supnE": "⫌",
              "supplus": "⫀",
              "supset": "⊃",
              "Supset": "⋑",
              "supseteq": "⊇",
              "supseteqq": "⫆",
              "supsetneq": "⊋",
              "supsetneqq": "⫌",
              "supsim": "⫈",
              "supsub": "⫔",
              "supsup": "⫖",
              "swarhk": "⤦",
              "swarr": "↙",
              "swArr": "⇙",
              "swarrow": "↙",
              "swnwar": "⤪",
              "szlig": "ß",
              "Tab": "\t",
              "target": "⌖",
              "tau": "τ",
              "Tau": "Τ",
              "tbrk": "⎴",
              "tcaron": "ť",
              "Tcaron": "Ť",
              "tcedil": "ţ",
              "Tcedil": "Ţ",
              "tcy": "т",
              "Tcy": "Т",
              "tdot": "⃛",
              "telrec": "⌕",
              "tfr": "𝔱",
              "Tfr": "𝔗",
              "there4": "∴",
              "therefore": "∴",
              "Therefore": "∴",
              "theta": "θ",
              "Theta": "Θ",
              "thetasym": "ϑ",
              "thetav": "ϑ",
              "thickapprox": "≈",
              "thicksim": "∼",
              "ThickSpace": "  ",
              "thinsp": " ",
              "ThinSpace": " ",
              "thkap": "≈",
              "thksim": "∼",
              "thorn": "þ",
              "THORN": "Þ",
              "tilde": "˜",
              "Tilde": "∼",
              "TildeEqual": "≃",
              "TildeFullEqual": "≅",
              "TildeTilde": "≈",
              "times": "×",
              "timesb": "⊠",
              "timesbar": "⨱",
              "timesd": "⨰",
              "tint": "∭",
              "toea": "⤨",
              "top": "⊤",
              "topbot": "⌶",
              "topcir": "⫱",
              "topf": "𝕥",
              "Topf": "𝕋",
              "topfork": "⫚",
              "tosa": "⤩",
              "tprime": "‴",
              "trade": "™",
              "TRADE": "™",
              "triangle": "▵",
              "triangledown": "▿",
              "triangleleft": "◃",
              "trianglelefteq": "⊴",
              "triangleq": "≜",
              "triangleright": "▹",
              "trianglerighteq": "⊵",
              "tridot": "◬",
              "trie": "≜",
              "triminus": "⨺",
              "TripleDot": "⃛",
              "triplus": "⨹",
              "trisb": "⧍",
              "tritime": "⨻",
              "trpezium": "⏢",
              "tscr": "𝓉",
              "Tscr": "𝒯",
              "tscy": "ц",
              "TScy": "Ц",
              "tshcy": "ћ",
              "TSHcy": "Ћ",
              "tstrok": "ŧ",
              "Tstrok": "Ŧ",
              "twixt": "≬",
              "twoheadleftarrow": "↞",
              "twoheadrightarrow": "↠",
              "uacute": "ú",
              "Uacute": "Ú",
              "uarr": "↑",
              "uArr": "⇑",
              "Uarr": "↟",
              "Uarrocir": "⥉",
              "ubrcy": "ў",
              "Ubrcy": "Ў",
              "ubreve": "ŭ",
              "Ubreve": "Ŭ",
              "ucirc": "û",
              "Ucirc": "Û",
              "ucy": "у",
              "Ucy": "У",
              "udarr": "⇅",
              "udblac": "ű",
              "Udblac": "Ű",
              "udhar": "⥮",
              "ufisht": "⥾",
              "ufr": "𝔲",
              "Ufr": "𝔘",
              "ugrave": "ù",
              "Ugrave": "Ù",
              "uHar": "⥣",
              "uharl": "↿",
              "uharr": "↾",
              "uhblk": "▀",
              "ulcorn": "⌜",
              "ulcorner": "⌜",
              "ulcrop": "⌏",
              "ultri": "◸",
              "umacr": "ū",
              "Umacr": "Ū",
              "uml": "¨",
              "UnderBar": "_",
              "UnderBrace": "⏟",
              "UnderBracket": "⎵",
              "UnderParenthesis": "⏝",
              "Union": "⋃",
              "UnionPlus": "⊎",
              "uogon": "ų",
              "Uogon": "Ų",
              "uopf": "𝕦",
              "Uopf": "𝕌",
              "uparrow": "↑",
              "Uparrow": "⇑",
              "UpArrow": "↑",
              "UpArrowBar": "⤒",
              "UpArrowDownArrow": "⇅",
              "updownarrow": "↕",
              "Updownarrow": "⇕",
              "UpDownArrow": "↕",
              "UpEquilibrium": "⥮",
              "upharpoonleft": "↿",
              "upharpoonright": "↾",
              "uplus": "⊎",
              "UpperLeftArrow": "↖",
              "UpperRightArrow": "↗",
              "upsi": "υ",
              "Upsi": "ϒ",
              "upsih": "ϒ",
              "upsilon": "υ",
              "Upsilon": "Υ",
              "UpTee": "⊥",
              "UpTeeArrow": "↥",
              "upuparrows": "⇈",
              "urcorn": "⌝",
              "urcorner": "⌝",
              "urcrop": "⌎",
              "uring": "ů",
              "Uring": "Ů",
              "urtri": "◹",
              "uscr": "𝓊",
              "Uscr": "𝒰",
              "utdot": "⋰",
              "utilde": "ũ",
              "Utilde": "Ũ",
              "utri": "▵",
              "utrif": "▴",
              "uuarr": "⇈",
              "uuml": "ü",
              "Uuml": "Ü",
              "uwangle": "⦧",
              "vangrt": "⦜",
              "varepsilon": "ϵ",
              "varkappa": "ϰ",
              "varnothing": "∅",
              "varphi": "ϕ",
              "varpi": "ϖ",
              "varpropto": "∝",
              "varr": "↕",
              "vArr": "⇕",
              "varrho": "ϱ",
              "varsigma": "ς",
              "varsubsetneq": "⊊︀",
              "varsubsetneqq": "⫋︀",
              "varsupsetneq": "⊋︀",
              "varsupsetneqq": "⫌︀",
              "vartheta": "ϑ",
              "vartriangleleft": "⊲",
              "vartriangleright": "⊳",
              "vBar": "⫨",
              "Vbar": "⫫",
              "vBarv": "⫩",
              "vcy": "в",
              "Vcy": "В",
              "vdash": "⊢",
              "vDash": "⊨",
              "Vdash": "⊩",
              "VDash": "⊫",
              "Vdashl": "⫦",
              "vee": "∨",
              "Vee": "⋁",
              "veebar": "⊻",
              "veeeq": "≚",
              "vellip": "⋮",
              "verbar": "|",
              "Verbar": "‖",
              "vert": "|",
              "Vert": "‖",
              "VerticalBar": "∣",
              "VerticalLine": "|",
              "VerticalSeparator": "❘",
              "VerticalTilde": "≀",
              "VeryThinSpace": " ",
              "vfr": "𝔳",
              "Vfr": "𝔙",
              "vltri": "⊲",
              "vnsub": "⊂⃒",
              "vnsup": "⊃⃒",
              "vopf": "𝕧",
              "Vopf": "𝕍",
              "vprop": "∝",
              "vrtri": "⊳",
              "vscr": "𝓋",
              "Vscr": "𝒱",
              "vsubne": "⊊︀",
              "vsubnE": "⫋︀",
              "vsupne": "⊋︀",
              "vsupnE": "⫌︀",
              "Vvdash": "⊪",
              "vzigzag": "⦚",
              "wcirc": "ŵ",
              "Wcirc": "Ŵ",
              "wedbar": "⩟",
              "wedge": "∧",
              "Wedge": "⋀",
              "wedgeq": "≙",
              "weierp": "℘",
              "wfr": "𝔴",
              "Wfr": "𝔚",
              "wopf": "𝕨",
              "Wopf": "𝕎",
              "wp": "℘",
              "wr": "≀",
              "wreath": "≀",
              "wscr": "𝓌",
              "Wscr": "𝒲",
              "xcap": "⋂",
              "xcirc": "◯",
              "xcup": "⋃",
              "xdtri": "▽",
              "xfr": "𝔵",
              "Xfr": "𝔛",
              "xharr": "⟷",
              "xhArr": "⟺",
              "xi": "ξ",
              "Xi": "Ξ",
              "xlarr": "⟵",
              "xlArr": "⟸",
              "xmap": "⟼",
              "xnis": "⋻",
              "xodot": "⨀",
              "xopf": "𝕩",
              "Xopf": "𝕏",
              "xoplus": "⨁",
              "xotime": "⨂",
              "xrarr": "⟶",
              "xrArr": "⟹",
              "xscr": "𝓍",
              "Xscr": "𝒳",
              "xsqcup": "⨆",
              "xuplus": "⨄",
              "xutri": "△",
              "xvee": "⋁",
              "xwedge": "⋀",
              "yacute": "ý",
              "Yacute": "Ý",
              "yacy": "я",
              "YAcy": "Я",
              "ycirc": "ŷ",
              "Ycirc": "Ŷ",
              "ycy": "ы",
              "Ycy": "Ы",
              "yen": "¥",
              "yfr": "𝔶",
              "Yfr": "𝔜",
              "yicy": "ї",
              "YIcy": "Ї",
              "yopf": "𝕪",
              "Yopf": "𝕐",
              "yscr": "𝓎",
              "Yscr": "𝒴",
              "yucy": "ю",
              "YUcy": "Ю",
              "yuml": "ÿ",
              "Yuml": "Ÿ",
              "zacute": "ź",
              "Zacute": "Ź",
              "zcaron": "ž",
              "Zcaron": "Ž",
              "zcy": "з",
              "Zcy": "З",
              "zdot": "ż",
              "Zdot": "Ż",
              "zeetrf": "ℨ",
              "ZeroWidthSpace": "​",
              "zeta": "ζ",
              "Zeta": "Ζ",
              "zfr": "𝔷",
              "Zfr": "ℨ",
              "zhcy": "ж",
              "ZHcy": "Ж",
              "zigrarr": "⇝",
              "zopf": "𝕫",
              "Zopf": "ℤ",
              "zscr": "𝓏",
              "Zscr": "𝒵",
              "zwj": "‍",
              "zwnj": "‌"
            };
            var decodeMapLegacy = {
              "aacute": "á",
              "Aacute": "Á",
              "acirc": "â",
              "Acirc": "Â",
              "acute": "´",
              "aelig": "æ",
              "AElig": "Æ",
              "agrave": "à",
              "Agrave": "À",
              "amp": "&",
              "AMP": "&",
              "aring": "å",
              "Aring": "Å",
              "atilde": "ã",
              "Atilde": "Ã",
              "auml": "ä",
              "Auml": "Ä",
              "brvbar": "¦",
              "ccedil": "ç",
              "Ccedil": "Ç",
              "cedil": "¸",
              "cent": "¢",
              "copy": "©",
              "COPY": "©",
              "curren": "¤",
              "deg": "°",
              "divide": "÷",
              "eacute": "é",
              "Eacute": "É",
              "ecirc": "ê",
              "Ecirc": "Ê",
              "egrave": "è",
              "Egrave": "È",
              "eth": "ð",
              "ETH": "Ð",
              "euml": "ë",
              "Euml": "Ë",
              "frac12": "½",
              "frac14": "¼",
              "frac34": "¾",
              "gt": ">",
              "GT": ">",
              "iacute": "í",
              "Iacute": "Í",
              "icirc": "î",
              "Icirc": "Î",
              "iexcl": "¡",
              "igrave": "ì",
              "Igrave": "Ì",
              "iquest": "¿",
              "iuml": "ï",
              "Iuml": "Ï",
              "laquo": "«",
              "lt": "<",
              "LT": "<",
              "macr": "¯",
              "micro": "µ",
              "middot": "·",
              "nbsp": " ",
              "not": "¬",
              "ntilde": "ñ",
              "Ntilde": "Ñ",
              "oacute": "ó",
              "Oacute": "Ó",
              "ocirc": "ô",
              "Ocirc": "Ô",
              "ograve": "ò",
              "Ograve": "Ò",
              "ordf": "ª",
              "ordm": "º",
              "oslash": "ø",
              "Oslash": "Ø",
              "otilde": "õ",
              "Otilde": "Õ",
              "ouml": "ö",
              "Ouml": "Ö",
              "para": "¶",
              "plusmn": "±",
              "pound": "£",
              "quot": "\"",
              "QUOT": "\"",
              "raquo": "»",
              "reg": "®",
              "REG": "®",
              "sect": "§",
              "shy": "­",
              "sup1": "¹",
              "sup2": "²",
              "sup3": "³",
              "szlig": "ß",
              "thorn": "þ",
              "THORN": "Þ",
              "times": "×",
              "uacute": "ú",
              "Uacute": "Ú",
              "ucirc": "û",
              "Ucirc": "Û",
              "ugrave": "ù",
              "Ugrave": "Ù",
              "uml": "¨",
              "uuml": "ü",
              "Uuml": "Ü",
              "yacute": "ý",
              "Yacute": "Ý",
              "yen": "¥",
              "yuml": "ÿ"
            };
            var decodeMapNumeric = {
              "0": "�",
              "128": "€",
              "130": "‚",
              "131": "ƒ",
              "132": "„",
              "133": "…",
              "134": "†",
              "135": "‡",
              "136": "ˆ",
              "137": "‰",
              "138": "Š",
              "139": "‹",
              "140": "Œ",
              "142": "Ž",
              "145": "‘",
              "146": "’",
              "147": "“",
              "148": "”",
              "149": "•",
              "150": "–",
              "151": "—",
              "152": "˜",
              "153": "™",
              "154": "š",
              "155": "›",
              "156": "œ",
              "158": "ž",
              "159": "Ÿ"
            };
            var invalidReferenceCodePoints = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65000, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111];
            var stringFromCharCode = String.fromCharCode;
            var object = {};
            var hasOwnProperty = object.hasOwnProperty;
            var has = function (object, propertyName) {
              return hasOwnProperty.call(object, propertyName);
            };
            var contains = function (array, value) {
              var index = -1;
              var length = array.length;
              while (++index < length) {
                if (array[index] == value) {
                  return true;
                }
              }
              return false;
            };
            var merge = function (options, defaults) {
              if (!options) {
                return defaults;
              }
              var result = {};
              var key;
              for (key in defaults) {
                result[key] = has(options, key) ? options[key] : defaults[key];
              }
              return result;
            };
            var codePointToSymbol = function (codePoint, strict) {
              var output = "";
              if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
                if (strict) {
                  parseError("character reference outside the permissible Unicode range");
                }
                return "�";
              }
              if (has(decodeMapNumeric, codePoint)) {
                if (strict) {
                  parseError("disallowed character reference");
                }
                return decodeMapNumeric[codePoint];
              }
              if (strict && contains(invalidReferenceCodePoints, codePoint)) {
                parseError("disallowed character reference");
              }
              if (codePoint > 65535) {
                codePoint -= 65536;
                output += stringFromCharCode(codePoint >>> 10 & 1023 | 55296);
                codePoint = 56320 | codePoint & 1023;
              }
              output += stringFromCharCode(codePoint);
              return output;
            };
            var hexEscape = function (codePoint) {
              return "&#x" + codePoint.toString(16).toUpperCase() + ";";
            };
            var decEscape = function (codePoint) {
              return "&#" + codePoint + ";";
            };
            var parseError = function (message) {
              throw Error("Parse error: " + message);
            };
            var encode = function (string, options) {
              options = merge(options, encode.options);
              var strict = options.strict;
              if (strict && regexInvalidRawCodePoint.test(string)) {
                parseError("forbidden code point");
              }
              var encodeEverything = options.encodeEverything;
              var useNamedReferences = options.useNamedReferences;
              var allowUnsafeSymbols = options.allowUnsafeSymbols;
              var escapeCodePoint = options.decimal ? decEscape : hexEscape;
              var escapeBmpSymbol = function (symbol) {
                return escapeCodePoint(symbol.charCodeAt(0));
              };
              if (encodeEverything) {
                string = string.replace(regexAsciiWhitelist, function (symbol) {
                  if (useNamedReferences && has(encodeMap, symbol)) {
                    return "&" + encodeMap[symbol] + ";";
                  }
                  return escapeBmpSymbol(symbol);
                });
                if (useNamedReferences) {
                  string = string.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;");
                }
                if (useNamedReferences) {
                  string = string.replace(regexEncodeNonAscii, function (string) {
                    return "&" + encodeMap[string] + ";";
                  });
                }
              } else if (useNamedReferences) {
                if (!allowUnsafeSymbols) {
                  string = string.replace(regexEscape, function (string) {
                    return "&" + encodeMap[string] + ";";
                  });
                }
                string = string.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;");
                string = string.replace(regexEncodeNonAscii, function (string) {
                  return "&" + encodeMap[string] + ";";
                });
              } else if (!allowUnsafeSymbols) {
                string = string.replace(regexEscape, escapeBmpSymbol);
              }
              return string.replace(regexAstralSymbols, function ($0) {
                var high = $0.charCodeAt(0);
                var low = $0.charCodeAt(1);
                var codePoint = (high - 55296) * 1024 + low - 56320 + 65536;
                return escapeCodePoint(codePoint);
              }).replace(regexBmpWhitelist, escapeBmpSymbol);
            };
            encode.options = {
              "allowUnsafeSymbols": false,
              "encodeEverything": false,
              "strict": false,
              "useNamedReferences": false,
              "decimal": false
            };
            var decode = function (html, options) {
              options = merge(options, decode.options);
              var strict = options.strict;
              if (strict && regexInvalidEntity.test(html)) {
                parseError("malformed character reference");
              }
              return html.replace(regexDecode, function ($0, $1, $2, $3, $4, $5, $6, $7, $8) {
                var codePoint;
                var semicolon;
                var decDigits;
                var hexDigits;
                var reference;
                var next;
                if ($1) {
                  reference = $1;
                  return decodeMap[reference];
                }
                if ($2) {
                  reference = $2;
                  next = $3;
                  if (next && options.isAttributeValue) {
                    if (strict && next == "=") {
                      parseError("`&` did not start a character reference");
                    }
                    return $0;
                  } else {
                    if (strict) {
                      parseError("named character reference was not terminated by a semicolon");
                    }
                    return decodeMapLegacy[reference] + (next || "");
                  }
                }
                if ($4) {
                  decDigits = $4;
                  semicolon = $5;
                  if (strict && !semicolon) {
                    parseError("character reference was not terminated by a semicolon");
                  }
                  codePoint = parseInt(decDigits, 10);
                  return codePointToSymbol(codePoint, strict);
                }
                if ($6) {
                  hexDigits = $6;
                  semicolon = $7;
                  if (strict && !semicolon) {
                    parseError("character reference was not terminated by a semicolon");
                  }
                  codePoint = parseInt(hexDigits, 16);
                  return codePointToSymbol(codePoint, strict);
                }
                if (strict) {
                  parseError("named character reference was not terminated by a semicolon");
                }
                return $0;
              });
            };
            decode.options = {
              "isAttributeValue": false,
              "strict": false
            };
            var escape = function (string) {
              return string.replace(regexEscape, function ($0) {
                return escapeMap[$0];
              });
            };
            var he = {
              "version": "1.2.0",
              "encode": encode,
              "decode": decode,
              "escape": escape,
              "unescape": decode
            };
            if (freeExports && !freeExports.nodeType) {
              if (freeModule) {
                freeModule.exports = he;
              } else {
                for (var key in he) {
                  has(he, key) && (freeExports[key] = he[key]);
                }
              }
            } else {
              root.he = he;
            }
          })(commonjsGlobal);
        });
        function genComponentModel(el, value, modifiers) {
          var ref = modifiers || ({});
          var number = ref.number;
          var trim = ref.trim;
          var baseValueExpression = "$$v";
          var valueExpression = baseValueExpression;
          if (trim) {
            valueExpression = "(typeof " + baseValueExpression + " === 'string'" + "? " + baseValueExpression + ".trim()" + ": " + baseValueExpression + ")";
          }
          if (number) {
            valueExpression = "_n(" + valueExpression + ")";
          }
          var assignment = genAssignmentCode(value, valueExpression);
          el.model = {
            value: "(" + value + ")",
            expression: JSON.stringify(value),
            callback: "function (" + baseValueExpression + ") {" + assignment + "}"
          };
        }
        function genAssignmentCode(value, assignment) {
          var res = parseModel(value);
          if (res.key === null) {
            return value + "=" + assignment;
          } else {
            return "$set(" + res.exp + ", " + res.key + ", " + assignment + ")";
          }
        }
        var len, str, chr, index, expressionPos, expressionEndPos;
        function parseModel(val) {
          val = val.trim();
          len = val.length;
          if (val.indexOf("[") < 0 || val.lastIndexOf("]") < len - 1) {
            index = val.lastIndexOf(".");
            if (index > -1) {
              return {
                exp: val.slice(0, index),
                key: "\"" + val.slice(index + 1) + "\""
              };
            } else {
              return {
                exp: val,
                key: null
              };
            }
          }
          str = val;
          index = expressionPos = expressionEndPos = 0;
          while (!eof()) {
            chr = next();
            if (isStringStart(chr)) {
              parseString(chr);
            } else if (chr === 91) {
              parseBracket(chr);
            }
          }
          return {
            exp: val.slice(0, expressionPos),
            key: val.slice(expressionPos + 1, expressionEndPos)
          };
        }
        function next() {
          return str.charCodeAt(++index);
        }
        function eof() {
          return index >= len;
        }
        function isStringStart(chr) {
          return chr === 34 || chr === 39;
        }
        function parseBracket(chr) {
          var inBracket = 1;
          expressionPos = index;
          while (!eof()) {
            chr = next();
            if (isStringStart(chr)) {
              parseString(chr);
              continue;
            }
            if (chr === 91) {
              inBracket++;
            }
            if (chr === 93) {
              inBracket--;
            }
            if (inBracket === 0) {
              expressionEndPos = index;
              break;
            }
          }
        }
        function parseString(chr) {
          var stringQuote = chr;
          while (!eof()) {
            chr = next();
            if (chr === stringQuote) {
              break;
            }
          }
        }
        var onRE = /^@|^v-on:/;
        var dirRE = /^v-|^@|^:/;
        var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
        var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
        var stripParensRE = /^\(|\)$/g;
        var dynamicArgRE = /^\[.*\]$/;
        var argRE = /:(.*)$/;
        var bindRE = /^:|^\.|^v-bind:/;
        var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;
        var slotRE = /^v-slot(:|$)|^#/;
        var lineBreakRE = /[\r\n]/;
        var whitespaceRE = /\s+/g;
        var invalidAttributeRE = /[\s"'<>\/=]/;
        var decodeHTMLCached = cached(he.decode);
        var emptySlotScopeToken = "_empty_";
        var warn$1;
        var delimiters;
        var transforms;
        var preTransforms;
        var postTransforms;
        var platformIsPreTag;
        var platformMustUseProp;
        var platformGetTagNamespace;
        var maybeComponent;
        function createASTElement(tag, attrs, parent) {
          return {
            type: 1,
            tag: tag,
            attrsList: attrs,
            attrsMap: makeAttrsMap(attrs),
            rawAttrsMap: {},
            parent: parent,
            children: []
          };
        }
        function parse(template, options) {
          warn$1 = options.warn || baseWarn;
          platformIsPreTag = options.isPreTag || no;
          platformMustUseProp = options.mustUseProp || no;
          platformGetTagNamespace = options.getTagNamespace || no;
          var isReservedTag = options.isReservedTag || no;
          maybeComponent = function (el) {
            return !!el.component || !isReservedTag(el.tag);
          };
          transforms = pluckModuleFunction(options.modules, "transformNode");
          preTransforms = pluckModuleFunction(options.modules, "preTransformNode");
          postTransforms = pluckModuleFunction(options.modules, "postTransformNode");
          delimiters = options.delimiters;
          var stack = [];
          var preserveWhitespace = options.preserveWhitespace !== false;
          var whitespaceOption = options.whitespace;
          var root;
          var currentParent;
          var inVPre = false;
          var inPre = false;
          var warned = false;
          function warnOnce(msg, range) {
            if (!warned) {
              warned = true;
              warn$1(msg, range);
            }
          }
          function closeElement(element) {
            trimEndingWhitespace(element);
            if (!inVPre && !element.processed) {
              element = processElement(element, options);
            }
            if (!stack.length && element !== root) {
              if (root.if && (element.elseif || element.else)) {
                {
                  checkRootConstraints(element);
                }
                addIfCondition(root, {
                  exp: element.elseif,
                  block: element
                });
              } else {
                warnOnce("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.", {
                  start: element.start
                });
              }
            }
            if (currentParent && !element.forbidden) {
              if (element.elseif || element.else) {
                processIfConditions(element, currentParent);
              } else {
                if (element.slotScope) {
                  var name = element.slotTarget || "\"default\"";
                  (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
                }
                currentParent.children.push(element);
                element.parent = currentParent;
              }
            }
            element.children = element.children.filter(function (c) {
              return !c.slotScope;
            });
            trimEndingWhitespace(element);
            if (element.pre) {
              inVPre = false;
            }
            if (platformIsPreTag(element.tag)) {
              inPre = false;
            }
            for (var i = 0; i < postTransforms.length; i++) {
              postTransforms[i](element, options);
            }
          }
          function trimEndingWhitespace(el) {
            if (!inPre) {
              var lastNode;
              while ((lastNode = el.children[el.children.length - 1]) && lastNode.type === 3 && lastNode.text === " ") {
                el.children.pop();
              }
            }
          }
          function checkRootConstraints(el) {
            if (el.tag === "slot" || el.tag === "template") {
              warnOnce("Cannot use <" + el.tag + "> as component root element because it may " + "contain multiple nodes.", {
                start: el.start
              });
            }
            if (el.attrsMap.hasOwnProperty("v-for")) {
              warnOnce("Cannot use v-for on stateful component root element because " + "it renders multiple elements.", el.rawAttrsMap["v-for"]);
            }
          }
          parseHTML(template, {
            warn: warn$1,
            expectHTML: options.expectHTML,
            isUnaryTag: options.isUnaryTag,
            canBeLeftOpenTag: options.canBeLeftOpenTag,
            shouldDecodeNewlines: options.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
            shouldKeepComment: options.comments,
            outputSourceRange: options.outputSourceRange,
            start: function start(tag, attrs, unary, start$1, end) {
              var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);
              if (isIE && ns === "svg") {
                attrs = guardIESVGBug(attrs);
              }
              var element = createASTElement(tag, attrs, currentParent);
              if (ns) {
                element.ns = ns;
              }
              {
                if (options.outputSourceRange) {
                  element.start = start$1;
                  element.end = end;
                  element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
                    cumulated[attr.name] = attr;
                    return cumulated;
                  }, {});
                }
                attrs.forEach(function (attr) {
                  if (invalidAttributeRE.test(attr.name)) {
                    warn$1("Invalid dynamic argument expression: attribute names cannot contain " + "spaces, quotes, <, >, / or =.", {
                      start: attr.start + attr.name.indexOf("["),
                      end: attr.start + attr.name.length
                    });
                  }
                });
              }
              if (isForbiddenTag(element) && !isServerRendering()) {
                element.forbidden = true;
                warn$1("Templates should only be responsible for mapping the state to the " + "UI. Avoid placing tags with side-effects in your templates, such as " + "<" + tag + ">" + ", as they will not be parsed.", {
                  start: element.start
                });
              }
              for (var i = 0; i < preTransforms.length; i++) {
                element = preTransforms[i](element, options) || element;
              }
              if (!inVPre) {
                processPre(element);
                if (element.pre) {
                  inVPre = true;
                }
              }
              if (platformIsPreTag(element.tag)) {
                inPre = true;
              }
              if (inVPre) {
                processRawAttrs(element);
              } else if (!element.processed) {
                processFor(element);
                processIf(element);
                processOnce(element);
              }
              if (!root) {
                root = element;
                {
                  checkRootConstraints(root);
                }
              }
              if (!unary) {
                currentParent = element;
                stack.push(element);
              } else {
                closeElement(element);
              }
            },
            end: function end(tag, start, end$1) {
              var element = stack[stack.length - 1];
              stack.length -= 1;
              currentParent = stack[stack.length - 1];
              if (options.outputSourceRange) {
                element.end = end$1;
              }
              closeElement(element);
            },
            chars: function chars(text, start, end) {
              if (!currentParent) {
                {
                  if (text === template) {
                    warnOnce("Component template requires a root element, rather than just text.", {
                      start: start
                    });
                  } else if (text = text.trim()) {
                    warnOnce("text \"" + text + "\" outside root element will be ignored.", {
                      start: start
                    });
                  }
                }
                return;
              }
              if (isIE && currentParent.tag === "textarea" && currentParent.attrsMap.placeholder === text) {
                return;
              }
              var children = currentParent.children;
              if (inPre || text.trim()) {
                text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
              } else if (!children.length) {
                text = "";
              } else if (whitespaceOption) {
                if (whitespaceOption === "condense") {
                  text = lineBreakRE.test(text) ? "" : " ";
                } else {
                  text = " ";
                }
              } else {
                text = preserveWhitespace ? " " : "";
              }
              if (text) {
                if (!inPre && whitespaceOption === "condense") {
                  text = text.replace(whitespaceRE, " ");
                }
                var res;
                var child;
                if (!inVPre && text !== " " && (res = parseText(text, delimiters))) {
                  child = {
                    type: 2,
                    expression: res.expression,
                    tokens: res.tokens,
                    text: text
                  };
                } else if (text !== " " || !children.length || children[children.length - 1].text !== " ") {
                  child = {
                    type: 3,
                    text: text
                  };
                }
                if (child) {
                  if (options.outputSourceRange) {
                    child.start = start;
                    child.end = end;
                  }
                  children.push(child);
                }
              }
            },
            comment: function comment(text, start, end) {
              if (currentParent) {
                var child = {
                  type: 3,
                  text: text,
                  isComment: true
                };
                if (options.outputSourceRange) {
                  child.start = start;
                  child.end = end;
                }
                currentParent.children.push(child);
              }
            }
          });
          return root;
        }
        function processPre(el) {
          if (getAndRemoveAttr(el, "v-pre") != null) {
            el.pre = true;
          }
        }
        function processRawAttrs(el) {
          var list = el.attrsList;
          var len = list.length;
          if (len) {
            var attrs = el.attrs = new Array(len);
            for (var i = 0; i < len; i++) {
              attrs[i] = {
                name: list[i].name,
                value: JSON.stringify(list[i].value)
              };
              if (list[i].start != null) {
                attrs[i].start = list[i].start;
                attrs[i].end = list[i].end;
              }
            }
          } else if (!el.pre) {
            el.plain = true;
          }
        }
        function processElement(element, options) {
          processKey(element);
          element.plain = !element.key && !element.scopedSlots && !element.attrsList.length;
          processRef(element);
          processSlotContent(element);
          processSlotOutlet(element);
          processComponent(element);
          for (var i = 0; i < transforms.length; i++) {
            element = transforms[i](element, options) || element;
          }
          processAttrs(element);
          return element;
        }
        function processKey(el) {
          var exp = getBindingAttr(el, "key");
          if (exp) {
            {
              if (el.tag === "template") {
                warn$1("<template> cannot be keyed. Place the key on real elements instead.", getRawBindingAttr(el, "key"));
              }
              if (el.for) {
                var iterator = el.iterator2 || el.iterator1;
                var parent = el.parent;
                if (iterator && iterator === exp && parent && parent.tag === "transition-group") {
                  warn$1("Do not use v-for index as key on <transition-group> children, " + "this is the same as not using keys.", getRawBindingAttr(el, "key"), true);
                }
              }
            }
            el.key = exp;
          }
        }
        function processRef(el) {
          var ref = getBindingAttr(el, "ref");
          if (ref) {
            el.ref = ref;
            el.refInFor = checkInFor(el);
          }
        }
        function processFor(el) {
          var exp;
          if (exp = getAndRemoveAttr(el, "v-for")) {
            var res = parseFor(exp);
            if (res) {
              extend(el, res);
            } else {
              warn$1("Invalid v-for expression: " + exp, el.rawAttrsMap["v-for"]);
            }
          }
        }
        function parseFor(exp) {
          var inMatch = exp.match(forAliasRE);
          if (!inMatch) {
            return;
          }
          var res = {};
          res.for = inMatch[2].trim();
          var alias = inMatch[1].trim().replace(stripParensRE, "");
          var iteratorMatch = alias.match(forIteratorRE);
          if (iteratorMatch) {
            res.alias = alias.replace(forIteratorRE, "").trim();
            res.iterator1 = iteratorMatch[1].trim();
            if (iteratorMatch[2]) {
              res.iterator2 = iteratorMatch[2].trim();
            }
          } else {
            res.alias = alias;
          }
          return res;
        }
        function processIf(el) {
          var exp = getAndRemoveAttr(el, "v-if");
          if (exp) {
            el.if = exp;
            addIfCondition(el, {
              exp: exp,
              block: el
            });
          } else {
            if (getAndRemoveAttr(el, "v-else") != null) {
              el.else = true;
            }
            var elseif = getAndRemoveAttr(el, "v-else-if");
            if (elseif) {
              el.elseif = elseif;
            }
          }
        }
        function processIfConditions(el, parent) {
          var prev = findPrevElement(parent.children);
          if (prev && prev.if) {
            addIfCondition(prev, {
              exp: el.elseif,
              block: el
            });
          } else {
            warn$1("v-" + (el.elseif ? "else-if=\"" + el.elseif + "\"" : "else") + " " + "used on element <" + el.tag + "> without corresponding v-if.", el.rawAttrsMap[el.elseif ? "v-else-if" : "v-else"]);
          }
        }
        function findPrevElement(children) {
          var i = children.length;
          while (i--) {
            if (children[i].type === 1) {
              return children[i];
            } else {
              if (children[i].text !== " ") {
                warn$1("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.", children[i]);
              }
              children.pop();
            }
          }
        }
        function addIfCondition(el, condition) {
          if (!el.ifConditions) {
            el.ifConditions = [];
          }
          el.ifConditions.push(condition);
        }
        function processOnce(el) {
          var once$$1 = getAndRemoveAttr(el, "v-once");
          if (once$$1 != null) {
            el.once = true;
          }
        }
        function processSlotContent(el) {
          var slotScope;
          if (el.tag === "template") {
            slotScope = getAndRemoveAttr(el, "scope");
            if (slotScope) {
              warn$1("the \"scope\" attribute for scoped slots have been deprecated and " + "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " + "can also be used on plain elements in addition to <template> to " + "denote scoped slots.", el.rawAttrsMap["scope"], true);
            }
            el.slotScope = slotScope || getAndRemoveAttr(el, "slot-scope");
          } else if (slotScope = getAndRemoveAttr(el, "slot-scope")) {
            if (el.attrsMap["v-for"]) {
              warn$1("Ambiguous combined usage of slot-scope and v-for on <" + el.tag + "> " + "(v-for takes higher priority). Use a wrapper <template> for the " + "scoped slot to make it clearer.", el.rawAttrsMap["slot-scope"], true);
            }
            el.slotScope = slotScope;
          }
          var slotTarget = getBindingAttr(el, "slot");
          if (slotTarget) {
            el.slotTarget = slotTarget === "\"\"" ? "\"default\"" : slotTarget;
            el.slotTargetDynamic = !!(el.attrsMap[":slot"] || el.attrsMap["v-bind:slot"]);
            if (el.tag !== "template" && !el.slotScope) {
              addAttr(el, "slot", slotTarget, getRawBindingAttr(el, "slot"));
            }
          }
          {
            if (el.tag === "template") {
              var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
              if (slotBinding) {
                {
                  if (el.slotTarget || el.slotScope) {
                    warn$1("Unexpected mixed usage of different slot syntaxes.", el);
                  }
                  if (el.parent && !maybeComponent(el.parent)) {
                    warn$1("<template v-slot> can only appear at the root level inside " + "the receiving the component", el);
                  }
                }
                var ref = getSlotName(slotBinding);
                var name = ref.name;
                var dynamic = ref.dynamic;
                el.slotTarget = name;
                el.slotTargetDynamic = dynamic;
                el.slotScope = slotBinding.value || emptySlotScopeToken;
              }
            } else {
              var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
              if (slotBinding$1) {
                {
                  if (!maybeComponent(el)) {
                    warn$1("v-slot can only be used on components or <template>.", slotBinding$1);
                  }
                  if (el.slotScope || el.slotTarget) {
                    warn$1("Unexpected mixed usage of different slot syntaxes.", el);
                  }
                  if (el.scopedSlots) {
                    warn$1("To avoid scope ambiguity, the default slot should also use " + "<template> syntax when there are other named slots.", slotBinding$1);
                  }
                }
                var slots = el.scopedSlots || (el.scopedSlots = {});
                var ref$1 = getSlotName(slotBinding$1);
                var name$1 = ref$1.name;
                var dynamic$1 = ref$1.dynamic;
                var slotContainer = slots[name$1] = createASTElement("template", [], el);
                slotContainer.slotTarget = name$1;
                slotContainer.slotTargetDynamic = dynamic$1;
                slotContainer.children = el.children.filter(function (c) {
                  if (!c.slotScope) {
                    c.parent = slotContainer;
                    return true;
                  }
                });
                slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
                el.children = [];
                el.plain = false;
              }
            }
          }
        }
        function getSlotName(binding) {
          var name = binding.name.replace(slotRE, "");
          if (!name) {
            if (binding.name[0] !== "#") {
              name = "default";
            } else {
              warn$1("v-slot shorthand syntax requires a slot name.", binding);
            }
          }
          return dynamicArgRE.test(name) ? {
            name: name.slice(1, -1),
            dynamic: true
          } : {
            name: "\"" + name + "\"",
            dynamic: false
          };
        }
        function processSlotOutlet(el) {
          if (el.tag === "slot") {
            el.slotName = getBindingAttr(el, "name");
            if (el.key) {
              warn$1("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.", getRawBindingAttr(el, "key"));
            }
          }
        }
        function processComponent(el) {
          var binding;
          if (binding = getBindingAttr(el, "is")) {
            el.component = binding;
          }
          if (getAndRemoveAttr(el, "inline-template") != null) {
            el.inlineTemplate = true;
          }
        }
        function processAttrs(el) {
          var list = el.attrsList;
          var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
          for ((i = 0, l = list.length); i < l; i++) {
            name = rawName = list[i].name;
            value = list[i].value;
            if (dirRE.test(name)) {
              el.hasBindings = true;
              modifiers = parseModifiers(name.replace(dirRE, ""));
              if (modifiers) {
                name = name.replace(modifierRE, "");
              }
              if (bindRE.test(name)) {
                name = name.replace(bindRE, "");
                value = parseFilters(value);
                isDynamic = dynamicArgRE.test(name);
                if (isDynamic) {
                  name = name.slice(1, -1);
                }
                if (value.trim().length === 0) {
                  warn$1("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"");
                }
                if (modifiers) {
                  if (modifiers.prop && !isDynamic) {
                    name = camelize(name);
                    if (name === "innerHtml") {
                      name = "innerHTML";
                    }
                  }
                  if (modifiers.camel && !isDynamic) {
                    name = camelize(name);
                  }
                  if (modifiers.sync) {
                    syncGen = genAssignmentCode(value, "$event");
                    if (!isDynamic) {
                      addHandler(el, "update:" + camelize(name), syncGen, null, false, warn$1, list[i]);
                      if (hyphenate(name) !== camelize(name)) {
                        addHandler(el, "update:" + hyphenate(name), syncGen, null, false, warn$1, list[i]);
                      }
                    } else {
                      addHandler(el, "\"update:\"+(" + name + ")", syncGen, null, false, warn$1, list[i], true);
                    }
                  }
                }
                if (modifiers && modifiers.prop || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
                  addProp(el, name, value, list[i], isDynamic);
                } else {
                  addAttr(el, name, value, list[i], isDynamic);
                }
              } else if (onRE.test(name)) {
                name = name.replace(onRE, "");
                isDynamic = dynamicArgRE.test(name);
                if (isDynamic) {
                  name = name.slice(1, -1);
                }
                addHandler(el, name, value, modifiers, false, warn$1, list[i], isDynamic);
              } else {
                name = name.replace(dirRE, "");
                var argMatch = name.match(argRE);
                var arg = argMatch && argMatch[1];
                isDynamic = false;
                if (arg) {
                  name = name.slice(0, -(arg.length + 1));
                  if (dynamicArgRE.test(arg)) {
                    arg = arg.slice(1, -1);
                    isDynamic = true;
                  }
                }
                addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
                if (name === "model") {
                  checkForAliasModel(el, value);
                }
              }
            } else {
              {
                var res = parseText(value, delimiters);
                if (res) {
                  warn$1(name + "=\"" + value + "\": " + "Interpolation inside attributes has been removed. " + "Use v-bind or the colon shorthand instead. For example, " + "instead of <div id=\"{{ val }}\">, use <div :id=\"val\">.", list[i]);
                }
              }
              addAttr(el, name, JSON.stringify(value), list[i]);
              if (!el.component && name === "muted" && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
                addProp(el, name, "true", list[i]);
              }
            }
          }
        }
        function checkInFor(el) {
          var parent = el;
          while (parent) {
            if (parent.for !== undefined) {
              return true;
            }
            parent = parent.parent;
          }
          return false;
        }
        function parseModifiers(name) {
          var match = name.match(modifierRE);
          if (match) {
            var ret = {};
            match.forEach(function (m) {
              ret[m.slice(1)] = true;
            });
            return ret;
          }
        }
        function makeAttrsMap(attrs) {
          var map = {};
          for (var i = 0, l = attrs.length; i < l; i++) {
            if (map[attrs[i].name] && !isIE && !isEdge) {
              warn$1("duplicate attribute: " + attrs[i].name, attrs[i]);
            }
            map[attrs[i].name] = attrs[i].value;
          }
          return map;
        }
        function isTextTag(el) {
          return el.tag === "script" || el.tag === "style";
        }
        function isForbiddenTag(el) {
          return el.tag === "style" || el.tag === "script" && (!el.attrsMap.type || el.attrsMap.type === "text/javascript");
        }
        var ieNSBug = /^xmlns:NS\d+/;
        var ieNSPrefix = /^NS\d+:/;
        function guardIESVGBug(attrs) {
          var res = [];
          for (var i = 0; i < attrs.length; i++) {
            var attr = attrs[i];
            if (!ieNSBug.test(attr.name)) {
              attr.name = attr.name.replace(ieNSPrefix, "");
              res.push(attr);
            }
          }
          return res;
        }
        function checkForAliasModel(el, value) {
          var _el = el;
          while (_el) {
            if (_el.for && _el.alias === value) {
              warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.", el.rawAttrsMap["v-model"]);
            }
            _el = _el.parent;
          }
        }
        function preTransformNode(el, options) {
          if (el.tag === "input") {
            var map = el.attrsMap;
            if (!map["v-model"]) {
              return;
            }
            var typeBinding;
            if (map[":type"] || map["v-bind:type"]) {
              typeBinding = getBindingAttr(el, "type");
            }
            if (!map.type && !typeBinding && map["v-bind"]) {
              typeBinding = "(" + map["v-bind"] + ").type";
            }
            if (typeBinding) {
              var ifCondition = getAndRemoveAttr(el, "v-if", true);
              var ifConditionExtra = ifCondition ? "&&(" + ifCondition + ")" : "";
              var hasElse = getAndRemoveAttr(el, "v-else", true) != null;
              var elseIfCondition = getAndRemoveAttr(el, "v-else-if", true);
              var branch0 = cloneASTElement(el);
              processFor(branch0);
              addRawAttr(branch0, "type", "checkbox");
              processElement(branch0, options);
              branch0.processed = true;
              branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
              addIfCondition(branch0, {
                exp: branch0.if,
                block: branch0
              });
              var branch1 = cloneASTElement(el);
              getAndRemoveAttr(branch1, "v-for", true);
              addRawAttr(branch1, "type", "radio");
              processElement(branch1, options);
              addIfCondition(branch0, {
                exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
                block: branch1
              });
              var branch2 = cloneASTElement(el);
              getAndRemoveAttr(branch2, "v-for", true);
              addRawAttr(branch2, ":type", typeBinding);
              processElement(branch2, options);
              addIfCondition(branch0, {
                exp: ifCondition,
                block: branch2
              });
              if (hasElse) {
                branch0.else = true;
              } else if (elseIfCondition) {
                branch0.elseif = elseIfCondition;
              }
              return branch0;
            }
          }
        }
        function cloneASTElement(el) {
          return createASTElement(el.tag, el.attrsList.slice(), el.parent);
        }
        var model = {
          preTransformNode: preTransformNode
        };
        var modules = [klass, style, model];
        var warn$2;
        var RANGE_TOKEN = "__r";
        function model$1(el, dir, _warn) {
          warn$2 = _warn;
          var value = dir.value;
          var modifiers = dir.modifiers;
          var tag = el.tag;
          var type = el.attrsMap.type;
          {
            if (tag === "input" && type === "file") {
              warn$2("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.", el.rawAttrsMap["v-model"]);
            }
          }
          if (el.component) {
            genComponentModel(el, value, modifiers);
            return false;
          } else if (tag === "select") {
            genSelect(el, value, modifiers);
          } else if (tag === "input" && type === "checkbox") {
            genCheckboxModel(el, value, modifiers);
          } else if (tag === "input" && type === "radio") {
            genRadioModel(el, value, modifiers);
          } else if (tag === "input" || tag === "textarea") {
            genDefaultModel(el, value, modifiers);
          } else {
            genComponentModel(el, value, modifiers);
            return false;
          }
          return true;
        }
        function genCheckboxModel(el, value, modifiers) {
          var number = modifiers && modifiers.number;
          var valueBinding = getBindingAttr(el, "value") || "null";
          var trueValueBinding = getBindingAttr(el, "true-value") || "true";
          var falseValueBinding = getBindingAttr(el, "false-value") || "false";
          addProp(el, "checked", "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === "true" ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
          addHandler(el, "change", "var $$a=" + value + "," + "$$el=$event.target," + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + "if(Array.isArray($$a)){" + "var $$v=" + (number ? "_n(" + valueBinding + ")" : valueBinding) + "," + "$$i=_i($$a,$$v);" + "if($$el.checked){$$i<0&&(" + genAssignmentCode(value, "$$a.concat([$$v])") + ")}" + "else{$$i>-1&&(" + genAssignmentCode(value, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}" + "}else{" + genAssignmentCode(value, "$$c") + "}", null, true);
        }
        function genRadioModel(el, value, modifiers) {
          var number = modifiers && modifiers.number;
          var valueBinding = getBindingAttr(el, "value") || "null";
          valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
          addProp(el, "checked", "_q(" + value + "," + valueBinding + ")");
          addHandler(el, "change", genAssignmentCode(value, valueBinding), null, true);
        }
        function genSelect(el, value, modifiers) {
          var number = modifiers && modifiers.number;
          var selectedVal = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? "_n(val)" : "val") + "})";
          var assignment = "$event.target.multiple ? $$selectedVal : $$selectedVal[0]";
          var code = "var $$selectedVal = " + selectedVal + ";";
          code = code + " " + genAssignmentCode(value, assignment);
          addHandler(el, "change", code, null, true);
        }
        function genDefaultModel(el, value, modifiers) {
          var type = el.attrsMap.type;
          {
            var value$1 = el.attrsMap["v-bind:value"] || el.attrsMap[":value"];
            var typeBinding = el.attrsMap["v-bind:type"] || el.attrsMap[":type"];
            if (value$1 && !typeBinding) {
              var binding = el.attrsMap["v-bind:value"] ? "v-bind:value" : ":value";
              warn$2(binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " + "because the latter already expands to a value binding internally", el.rawAttrsMap[binding]);
            }
          }
          var ref = modifiers || ({});
          var lazy = ref.lazy;
          var number = ref.number;
          var trim = ref.trim;
          var needCompositionGuard = !lazy && type !== "range";
          var event = lazy ? "change" : type === "range" ? RANGE_TOKEN : "input";
          var valueExpression = "$event.target.value";
          if (trim) {
            valueExpression = "$event.target.value.trim()";
          }
          if (number) {
            valueExpression = "_n(" + valueExpression + ")";
          }
          var code = genAssignmentCode(value, valueExpression);
          if (needCompositionGuard) {
            code = "if($event.target.composing)return;" + code;
          }
          addProp(el, "value", "(" + value + ")");
          addHandler(el, event, code, null, true);
          if (trim || number) {
            addHandler(el, "blur", "$forceUpdate()");
          }
        }
        function text(el, dir) {
          if (dir.value) {
            addProp(el, "textContent", "_s(" + dir.value + ")", dir);
          }
        }
        function html(el, dir) {
          if (dir.value) {
            addProp(el, "innerHTML", "_s(" + dir.value + ")", dir);
          }
        }
        var directives = {
          model: model$1,
          text: text,
          html: html
        };
        var baseOptions = {
          expectHTML: true,
          modules: modules,
          directives: directives,
          isPreTag: isPreTag,
          isUnaryTag: isUnaryTag,
          mustUseProp: mustUseProp,
          canBeLeftOpenTag: canBeLeftOpenTag,
          isReservedTag: isReservedTag,
          getTagNamespace: getTagNamespace,
          staticKeys: genStaticKeys(modules)
        };
        var isStaticKey;
        var isPlatformReservedTag;
        var genStaticKeysCached = cached(genStaticKeys$1);
        function optimize(root, options) {
          if (!root) {
            return;
          }
          isStaticKey = genStaticKeysCached(options.staticKeys || "");
          isPlatformReservedTag = options.isReservedTag || no;
          markStatic(root);
          markStaticRoots(root, false);
        }
        function genStaticKeys$1(keys) {
          return makeMap("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (keys ? "," + keys : ""));
        }
        function markStatic(node) {
          node.static = isStatic(node);
          if (node.type === 1) {
            if (!isPlatformReservedTag(node.tag) && node.tag !== "slot" && node.attrsMap["inline-template"] == null) {
              return;
            }
            for (var i = 0, l = node.children.length; i < l; i++) {
              var child = node.children[i];
              markStatic(child);
              if (!child.static) {
                node.static = false;
              }
            }
            if (node.ifConditions) {
              for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
                var block = node.ifConditions[i$1].block;
                markStatic(block);
                if (!block.static) {
                  node.static = false;
                }
              }
            }
          }
        }
        function markStaticRoots(node, isInFor) {
          if (node.type === 1) {
            if (node.static || node.once) {
              node.staticInFor = isInFor;
            }
            if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
              node.staticRoot = true;
              return;
            } else {
              node.staticRoot = false;
            }
            if (node.children) {
              for (var i = 0, l = node.children.length; i < l; i++) {
                markStaticRoots(node.children[i], isInFor || !!node.for);
              }
            }
            if (node.ifConditions) {
              for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
                markStaticRoots(node.ifConditions[i$1].block, isInFor);
              }
            }
          }
        }
        function isStatic(node) {
          if (node.type === 2) {
            return false;
          }
          if (node.type === 3) {
            return true;
          }
          return !!(node.pre || !node.hasBindings && !node.if && !node.for && !isBuiltInTag(node.tag) && isPlatformReservedTag(node.tag) && !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
        }
        function isDirectChildOfTemplateFor(node) {
          while (node.parent) {
            node = node.parent;
            if (node.tag !== "template") {
              return false;
            }
            if (node.for) {
              return true;
            }
          }
          return false;
        }
        var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/;
        var fnInvokeRE = /\([^)]*?\);*$/;
        var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;
        var keyCodes = {
          esc: 27,
          tab: 9,
          enter: 13,
          space: 32,
          up: 38,
          left: 37,
          right: 39,
          down: 40,
          "delete": [8, 46]
        };
        var keyNames = {
          esc: ["Esc", "Escape"],
          tab: "Tab",
          enter: "Enter",
          space: [" ", "Spacebar"],
          up: ["Up", "ArrowUp"],
          left: ["Left", "ArrowLeft"],
          right: ["Right", "ArrowRight"],
          down: ["Down", "ArrowDown"],
          "delete": ["Backspace", "Delete", "Del"]
        };
        var genGuard = function (condition) {
          return "if(" + condition + ")return null;";
        };
        var modifierCode = {
          stop: "$event.stopPropagation();",
          prevent: "$event.preventDefault();",
          self: genGuard("$event.target !== $event.currentTarget"),
          ctrl: genGuard("!$event.ctrlKey"),
          shift: genGuard("!$event.shiftKey"),
          alt: genGuard("!$event.altKey"),
          meta: genGuard("!$event.metaKey"),
          left: genGuard("'button' in $event && $event.button !== 0"),
          middle: genGuard("'button' in $event && $event.button !== 1"),
          right: genGuard("'button' in $event && $event.button !== 2")
        };
        function genHandlers(events, isNative) {
          var prefix = isNative ? "nativeOn:" : "on:";
          var staticHandlers = "";
          var dynamicHandlers = "";
          for (var name in events) {
            var handlerCode = genHandler(events[name]);
            if (events[name] && events[name].dynamic) {
              dynamicHandlers += name + "," + handlerCode + ",";
            } else {
              staticHandlers += "\"" + name + "\":" + handlerCode + ",";
            }
          }
          staticHandlers = "{" + staticHandlers.slice(0, -1) + "}";
          if (dynamicHandlers) {
            return prefix + "_d(" + staticHandlers + ",[" + dynamicHandlers.slice(0, -1) + "])";
          } else {
            return prefix + staticHandlers;
          }
        }
        function genHandler(handler) {
          if (!handler) {
            return "function(){}";
          }
          if (Array.isArray(handler)) {
            return "[" + handler.map(function (handler) {
              return genHandler(handler);
            }).join(",") + "]";
          }
          var isMethodPath = simplePathRE.test(handler.value);
          var isFunctionExpression = fnExpRE.test(handler.value);
          var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ""));
          if (!handler.modifiers) {
            if (isMethodPath || isFunctionExpression) {
              return handler.value;
            }
            return "function($event){" + (isFunctionInvocation ? "return " + handler.value : handler.value) + "}";
          } else {
            var code = "";
            var genModifierCode = "";
            var keys = [];
            for (var key in handler.modifiers) {
              if (modifierCode[key]) {
                genModifierCode += modifierCode[key];
                if (keyCodes[key]) {
                  keys.push(key);
                }
              } else if (key === "exact") {
                var modifiers = handler.modifiers;
                genModifierCode += genGuard(["ctrl", "shift", "alt", "meta"].filter(function (keyModifier) {
                  return !modifiers[keyModifier];
                }).map(function (keyModifier) {
                  return "$event." + keyModifier + "Key";
                }).join("||"));
              } else {
                keys.push(key);
              }
            }
            if (keys.length) {
              code += genKeyFilter(keys);
            }
            if (genModifierCode) {
              code += genModifierCode;
            }
            var handlerCode = isMethodPath ? "return " + handler.value + "($event)" : isFunctionExpression ? "return (" + handler.value + ")($event)" : isFunctionInvocation ? "return " + handler.value : handler.value;
            return "function($event){" + code + handlerCode + "}";
          }
        }
        function genKeyFilter(keys) {
          return "if(!$event.type.indexOf('key')&&" + keys.map(genFilterCode).join("&&") + ")return null;";
        }
        function genFilterCode(key) {
          var keyVal = parseInt(key, 10);
          if (keyVal) {
            return "$event.keyCode!==" + keyVal;
          }
          var keyCode = keyCodes[key];
          var keyName = keyNames[key];
          return "_k($event.keyCode," + JSON.stringify(key) + "," + JSON.stringify(keyCode) + "," + "$event.key," + "" + JSON.stringify(keyName) + ")";
        }
        function on(el, dir) {
          if (dir.modifiers) {
            warn("v-on without argument does not support modifiers.");
          }
          el.wrapListeners = function (code) {
            return "_g(" + code + "," + dir.value + ")";
          };
        }
        function bind$1(el, dir) {
          el.wrapData = function (code) {
            return "_b(" + code + ",'" + el.tag + "'," + dir.value + "," + (dir.modifiers && dir.modifiers.prop ? "true" : "false") + (dir.modifiers && dir.modifiers.sync ? ",true" : "") + ")";
          };
        }
        var baseDirectives = {
          on: on,
          bind: bind$1,
          cloak: noop
        };
        var CodegenState = function CodegenState(options) {
          this.options = options;
          this.warn = options.warn || baseWarn;
          this.transforms = pluckModuleFunction(options.modules, "transformCode");
          this.dataGenFns = pluckModuleFunction(options.modules, "genData");
          this.directives = extend(extend({}, baseDirectives), options.directives);
          var isReservedTag = options.isReservedTag || no;
          this.maybeComponent = function (el) {
            return !!el.component || !isReservedTag(el.tag);
          };
          this.onceId = 0;
          this.staticRenderFns = [];
          this.pre = false;
        };
        function generate(ast, options) {
          var state = new CodegenState(options);
          var code = ast ? genElement(ast, state) : "_c(\"div\")";
          return {
            render: "with(this){return " + code + "}",
            staticRenderFns: state.staticRenderFns
          };
        }
        function genElement(el, state) {
          if (el.parent) {
            el.pre = el.pre || el.parent.pre;
          }
          if (el.staticRoot && !el.staticProcessed) {
            return genStatic(el, state);
          } else if (el.once && !el.onceProcessed) {
            return genOnce(el, state);
          } else if (el.for && !el.forProcessed) {
            return genFor(el, state);
          } else if (el.if && !el.ifProcessed) {
            return genIf(el, state);
          } else if (el.tag === "template" && !el.slotTarget && !state.pre) {
            return genChildren(el, state) || "void 0";
          } else if (el.tag === "slot") {
            return genSlot(el, state);
          } else {
            var code;
            if (el.component) {
              code = genComponent(el.component, el, state);
            } else {
              var data;
              if (!el.plain || el.pre && state.maybeComponent(el)) {
                data = genData$2(el, state);
              }
              var children = el.inlineTemplate ? null : genChildren(el, state, true);
              code = "_c('" + el.tag + "'" + (data ? "," + data : "") + (children ? "," + children : "") + ")";
            }
            for (var i = 0; i < state.transforms.length; i++) {
              code = state.transforms[i](el, code);
            }
            return code;
          }
        }
        function genStatic(el, state) {
          el.staticProcessed = true;
          var originalPreState = state.pre;
          if (el.pre) {
            state.pre = el.pre;
          }
          state.staticRenderFns.push("with(this){return " + genElement(el, state) + "}");
          state.pre = originalPreState;
          return "_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ",true" : "") + ")";
        }
        function genOnce(el, state) {
          el.onceProcessed = true;
          if (el.if && !el.ifProcessed) {
            return genIf(el, state);
          } else if (el.staticInFor) {
            var key = "";
            var parent = el.parent;
            while (parent) {
              if (parent.for) {
                key = parent.key;
                break;
              }
              parent = parent.parent;
            }
            if (!key) {
              state.warn("v-once can only be used inside v-for that is keyed. ", el.rawAttrsMap["v-once"]);
              return genElement(el, state);
            }
            return "_o(" + genElement(el, state) + "," + state.onceId++ + "," + key + ")";
          } else {
            return genStatic(el, state);
          }
        }
        function genIf(el, state, altGen, altEmpty) {
          el.ifProcessed = true;
          return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
        }
        function genIfConditions(conditions, state, altGen, altEmpty) {
          if (!conditions.length) {
            return altEmpty || "_e()";
          }
          var condition = conditions.shift();
          if (condition.exp) {
            return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions, state, altGen, altEmpty);
          } else {
            return "" + genTernaryExp(condition.block);
          }
          function genTernaryExp(el) {
            return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
          }
        }
        function genFor(el, state, altGen, altHelper) {
          var exp = el.for;
          var alias = el.alias;
          var iterator1 = el.iterator1 ? "," + el.iterator1 : "";
          var iterator2 = el.iterator2 ? "," + el.iterator2 : "";
          if (state.maybeComponent(el) && el.tag !== "slot" && el.tag !== "template" && !el.key) {
            state.warn("<" + el.tag + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", el.rawAttrsMap["v-for"], true);
          }
          el.forProcessed = true;
          return (altHelper || "_l") + "((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + (altGen || genElement)(el, state) + "})";
        }
        function genData$2(el, state) {
          var data = "{";
          var dirs = genDirectives(el, state);
          if (dirs) {
            data += dirs + ",";
          }
          if (el.key) {
            data += "key:" + el.key + ",";
          }
          if (el.ref) {
            data += "ref:" + el.ref + ",";
          }
          if (el.refInFor) {
            data += "refInFor:true,";
          }
          if (el.pre) {
            data += "pre:true,";
          }
          if (el.component) {
            data += "tag:\"" + el.tag + "\",";
          }
          for (var i = 0; i < state.dataGenFns.length; i++) {
            data += state.dataGenFns[i](el);
          }
          if (el.attrs) {
            data += "attrs:" + genProps(el.attrs) + ",";
          }
          if (el.props) {
            data += "domProps:" + genProps(el.props) + ",";
          }
          if (el.events) {
            data += genHandlers(el.events, false) + ",";
          }
          if (el.nativeEvents) {
            data += genHandlers(el.nativeEvents, true) + ",";
          }
          if (el.slotTarget && !el.slotScope) {
            data += "slot:" + el.slotTarget + ",";
          }
          if (el.scopedSlots) {
            data += genScopedSlots(el, el.scopedSlots, state) + ",";
          }
          if (el.model) {
            data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
          }
          if (el.inlineTemplate) {
            var inlineTemplate = genInlineTemplate(el, state);
            if (inlineTemplate) {
              data += inlineTemplate + ",";
            }
          }
          data = data.replace(/,$/, "") + "}";
          if (el.dynamicAttrs) {
            data = "_b(" + data + ",\"" + el.tag + "\"," + genProps(el.dynamicAttrs) + ")";
          }
          if (el.wrapData) {
            data = el.wrapData(data);
          }
          if (el.wrapListeners) {
            data = el.wrapListeners(data);
          }
          return data;
        }
        function genDirectives(el, state) {
          var dirs = el.directives;
          if (!dirs) {
            return;
          }
          var res = "directives:[";
          var hasRuntime = false;
          var i, l, dir, needRuntime;
          for ((i = 0, l = dirs.length); i < l; i++) {
            dir = dirs[i];
            needRuntime = true;
            var gen = state.directives[dir.name];
            if (gen) {
              needRuntime = !!gen(el, dir, state.warn);
            }
            if (needRuntime) {
              hasRuntime = true;
              res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : "") + (dir.arg ? ",arg:" + (dir.isDynamicArg ? dir.arg : "\"" + dir.arg + "\"") : "") + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : "") + "},";
            }
          }
          if (hasRuntime) {
            return res.slice(0, -1) + "]";
          }
        }
        function genInlineTemplate(el, state) {
          var ast = el.children[0];
          if (el.children.length !== 1 || ast.type !== 1) {
            state.warn("Inline-template components must have exactly one child element.", {
              start: el.start
            });
          }
          if (ast && ast.type === 1) {
            var inlineRenderFns = generate(ast, state.options);
            return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function (code) {
              return "function(){" + code + "}";
            }).join(",") + "]}";
          }
        }
        function genScopedSlots(el, slots, state) {
          var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
            var slot = slots[key];
            return slot.slotTargetDynamic || slot.if || slot.for || containsSlotChild(slot);
          });
          var needsKey = !!el.if;
          if (!needsForceUpdate) {
            var parent = el.parent;
            while (parent) {
              if (parent.slotScope && parent.slotScope !== emptySlotScopeToken || parent.for) {
                needsForceUpdate = true;
                break;
              }
              if (parent.if) {
                needsKey = true;
              }
              parent = parent.parent;
            }
          }
          var generatedSlots = Object.keys(slots).map(function (key) {
            return genScopedSlot(slots[key], state);
          }).join(",");
          return "scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? ",null,false," + hash(generatedSlots) : "") + ")";
        }
        function hash(str) {
          var hash = 5381;
          var i = str.length;
          while (i) {
            hash = hash * 33 ^ str.charCodeAt(--i);
          }
          return hash >>> 0;
        }
        function containsSlotChild(el) {
          if (el.type === 1) {
            if (el.tag === "slot") {
              return true;
            }
            return el.children.some(containsSlotChild);
          }
          return false;
        }
        function genScopedSlot(el, state) {
          var isLegacySyntax = el.attrsMap["slot-scope"];
          if (el.if && !el.ifProcessed && !isLegacySyntax) {
            return genIf(el, state, genScopedSlot, "null");
          }
          if (el.for && !el.forProcessed) {
            return genFor(el, state, genScopedSlot);
          }
          var slotScope = el.slotScope === emptySlotScopeToken ? "" : String(el.slotScope);
          var fn = "function(" + slotScope + "){" + "return " + (el.tag === "template" ? el.if && isLegacySyntax ? "(" + el.if + ")?" + (genChildren(el, state) || "undefined") + ":undefined" : genChildren(el, state) || "undefined" : genElement(el, state)) + "}";
          var reverseProxy = slotScope ? "" : ",proxy:true";
          return "{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}";
        }
        function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
          var children = el.children;
          if (children.length) {
            var el$1 = children[0];
            if (children.length === 1 && el$1.for && el$1.tag !== "template" && el$1.tag !== "slot") {
              var normalizationType = checkSkip ? state.maybeComponent(el$1) ? ",1" : ",0" : "";
              return "" + (altGenElement || genElement)(el$1, state) + normalizationType;
            }
            var normalizationType$1 = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
            var gen = altGenNode || genNode;
            return "[" + children.map(function (c) {
              return gen(c, state);
            }).join(",") + "]" + (normalizationType$1 ? "," + normalizationType$1 : "");
          }
        }
        function getNormalizationType(children, maybeComponent) {
          var res = 0;
          for (var i = 0; i < children.length; i++) {
            var el = children[i];
            if (el.type !== 1) {
              continue;
            }
            if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function (c) {
              return needsNormalization(c.block);
            })) {
              res = 2;
              break;
            }
            if (maybeComponent(el) || el.ifConditions && el.ifConditions.some(function (c) {
              return maybeComponent(c.block);
            })) {
              res = 1;
            }
          }
          return res;
        }
        function needsNormalization(el) {
          return el.for !== undefined || el.tag === "template" || el.tag === "slot";
        }
        function genNode(node, state) {
          if (node.type === 1) {
            return genElement(node, state);
          } else if (node.type === 3 && node.isComment) {
            return genComment(node);
          } else {
            return genText(node);
          }
        }
        function genText(text) {
          return "_v(" + (text.type === 2 ? text.expression : transformSpecialNewlines(JSON.stringify(text.text))) + ")";
        }
        function genComment(comment) {
          return "_e(" + JSON.stringify(comment.text) + ")";
        }
        function genSlot(el, state) {
          var slotName = el.slotName || "\"default\"";
          var children = genChildren(el, state);
          var res = "_t(" + slotName + (children ? "," + children : "");
          var attrs = el.attrs || el.dynamicAttrs ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) {
            return {
              name: camelize(attr.name),
              value: attr.value,
              dynamic: attr.dynamic
            };
          })) : null;
          var bind$$1 = el.attrsMap["v-bind"];
          if ((attrs || bind$$1) && !children) {
            res += ",null";
          }
          if (attrs) {
            res += "," + attrs;
          }
          if (bind$$1) {
            res += (attrs ? "" : ",null") + "," + bind$$1;
          }
          return res + ")";
        }
        function genComponent(componentName, el, state) {
          var children = el.inlineTemplate ? null : genChildren(el, state, true);
          return "_c(" + componentName + "," + genData$2(el, state) + (children ? "," + children : "") + ")";
        }
        function genProps(props) {
          var staticProps = "";
          var dynamicProps = "";
          for (var i = 0; i < props.length; i++) {
            var prop = props[i];
            var value = transformSpecialNewlines(prop.value);
            if (prop.dynamic) {
              dynamicProps += prop.name + "," + value + ",";
            } else {
              staticProps += "\"" + prop.name + "\":" + value + ",";
            }
          }
          staticProps = "{" + staticProps.slice(0, -1) + "}";
          if (dynamicProps) {
            return "_d(" + staticProps + ",[" + dynamicProps.slice(0, -1) + "])";
          } else {
            return staticProps;
          }
        }
        function transformSpecialNewlines(text) {
          return text.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
        }
        var prohibitedKeywordRE = new RegExp("\\b" + ("do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const," + "super,throw,while,yield,delete,export,import,return,switch,default," + "extends,finally,continue,debugger,function,arguments").split(",").join("\\b|\\b") + "\\b");
        var unaryOperatorsRE = new RegExp("\\b" + ("delete,typeof,void").split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
        var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
        function detectErrors(ast, warn) {
          if (ast) {
            checkNode(ast, warn);
          }
        }
        function checkNode(node, warn) {
          if (node.type === 1) {
            for (var name in node.attrsMap) {
              if (dirRE.test(name)) {
                var value = node.attrsMap[name];
                if (value) {
                  var range = node.rawAttrsMap[name];
                  if (name === "v-for") {
                    checkFor(node, "v-for=\"" + value + "\"", warn, range);
                  } else if (onRE.test(name)) {
                    checkEvent(value, name + "=\"" + value + "\"", warn, range);
                  } else {
                    checkExpression(value, name + "=\"" + value + "\"", warn, range);
                  }
                }
              }
            }
            if (node.children) {
              for (var i = 0; i < node.children.length; i++) {
                checkNode(node.children[i], warn);
              }
            }
          } else if (node.type === 2) {
            checkExpression(node.expression, node.text, warn, node);
          }
        }
        function checkEvent(exp, text, warn, range) {
          var stipped = exp.replace(stripStringRE, "");
          var keywordMatch = stipped.match(unaryOperatorsRE);
          if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== "$") {
            warn("avoid using JavaScript unary operator as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim(), range);
          }
          checkExpression(exp, text, warn, range);
        }
        function checkFor(node, text, warn, range) {
          checkExpression(node.for || "", text, warn, range);
          checkIdentifier(node.alias, "v-for alias", text, warn, range);
          checkIdentifier(node.iterator1, "v-for iterator", text, warn, range);
          checkIdentifier(node.iterator2, "v-for iterator", text, warn, range);
        }
        function checkIdentifier(ident, type, text, warn, range) {
          if (typeof ident === "string") {
            try {
              new Function("var " + ident + "=_");
            } catch (e) {
              warn("invalid " + type + " \"" + ident + "\" in expression: " + text.trim(), range);
            }
          }
        }
        function checkExpression(exp, text, warn, range) {
          try {
            new Function("return " + exp);
          } catch (e) {
            var keywordMatch = exp.replace(stripStringRE, "").match(prohibitedKeywordRE);
            if (keywordMatch) {
              warn("avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\"\n  Raw expression: " + text.trim(), range);
            } else {
              warn("invalid expression: " + e.message + " in\n\n" + "    " + exp + "\n\n" + "  Raw expression: " + text.trim() + "\n", range);
            }
          }
        }
        var range = 2;
        function generateCodeFrame(source, start, end) {
          if (start === void 0) start = 0;
          if (end === void 0) end = source.length;
          var lines = source.split(/\r?\n/);
          var count = 0;
          var res = [];
          for (var i = 0; i < lines.length; i++) {
            count += lines[i].length + 1;
            if (count >= start) {
              for (var j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length) {
                  continue;
                }
                res.push("" + (j + 1) + repeat$1(" ", 3 - String(j + 1).length) + "|  " + lines[j]);
                var lineLength = lines[j].length;
                if (j === i) {
                  var pad = start - (count - lineLength) + 1;
                  var length = end > count ? lineLength - pad : end - start;
                  res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
                } else if (j > i) {
                  if (end > count) {
                    var length$1 = Math.min(end - count, lineLength);
                    res.push("   |  " + repeat$1("^", length$1));
                  }
                  count += lineLength + 1;
                }
              }
              break;
            }
          }
          return res.join("\n");
        }
        function repeat$1(str, n) {
          var result = "";
          if (n > 0) {
            while (true) {
              if (n & 1) {
                result += str;
              }
              n >>>= 1;
              if (n <= 0) {
                break;
              }
              str += str;
            }
          }
          return result;
        }
        function createFunction(code, errors) {
          try {
            return new Function(code);
          } catch (err) {
            errors.push({
              err: err,
              code: code
            });
            return noop;
          }
        }
        function createCompileToFunctionFn(compile) {
          var cache = Object.create(null);
          return function compileToFunctions(template, options, vm) {
            options = extend({}, options);
            var warn$$1 = options.warn || warn;
            delete options.warn;
            {
              try {
                new Function("return 1");
              } catch (e) {
                if (e.toString().match(/unsafe-eval|CSP/)) {
                  warn$$1("It seems you are using the standalone build of Vue.js in an " + "environment with Content Security Policy that prohibits unsafe-eval. " + "The template compiler cannot work in this environment. Consider " + "relaxing the policy to allow unsafe-eval or pre-compiling your " + "templates into render functions.");
                }
              }
            }
            var key = options.delimiters ? String(options.delimiters) + template : template;
            if (cache[key]) {
              return cache[key];
            }
            var compiled = compile(template, options);
            {
              if (compiled.errors && compiled.errors.length) {
                if (options.outputSourceRange) {
                  compiled.errors.forEach(function (e) {
                    warn$$1("Error compiling template:\n\n" + e.msg + "\n\n" + generateCodeFrame(template, e.start, e.end), vm);
                  });
                } else {
                  warn$$1("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function (e) {
                    return "- " + e;
                  }).join("\n") + "\n", vm);
                }
              }
              if (compiled.tips && compiled.tips.length) {
                if (options.outputSourceRange) {
                  compiled.tips.forEach(function (e) {
                    return tip(e.msg, vm);
                  });
                } else {
                  compiled.tips.forEach(function (msg) {
                    return tip(msg, vm);
                  });
                }
              }
            }
            var res = {};
            var fnGenErrors = [];
            res.render = createFunction(compiled.render, fnGenErrors);
            res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
              return createFunction(code, fnGenErrors);
            });
            {
              if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
                warn$$1("Failed to generate render function:\n\n" + fnGenErrors.map(function (ref) {
                  var err = ref.err;
                  var code = ref.code;
                  return err.toString() + " in\n\n" + code + "\n";
                }).join("\n"), vm);
              }
            }
            return cache[key] = res;
          };
        }
        function createCompilerCreator(baseCompile) {
          return function createCompiler(baseOptions) {
            function compile(template, options) {
              var finalOptions = Object.create(baseOptions);
              var errors = [];
              var tips = [];
              var warn = function (msg, range, tip) {
                (tip ? tips : errors).push(msg);
              };
              if (options) {
                if (options.outputSourceRange) {
                  var leadingSpaceLength = template.match(/^\s*/)[0].length;
                  warn = function (msg, range, tip) {
                    var data = {
                      msg: msg
                    };
                    if (range) {
                      if (range.start != null) {
                        data.start = range.start + leadingSpaceLength;
                      }
                      if (range.end != null) {
                        data.end = range.end + leadingSpaceLength;
                      }
                    }
                    (tip ? tips : errors).push(data);
                  };
                }
                if (options.modules) {
                  finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
                }
                if (options.directives) {
                  finalOptions.directives = extend(Object.create(baseOptions.directives || null), options.directives);
                }
                for (var key in options) {
                  if (key !== "modules" && key !== "directives") {
                    finalOptions[key] = options[key];
                  }
                }
              }
              finalOptions.warn = warn;
              var compiled = baseCompile(template.trim(), finalOptions);
              {
                detectErrors(compiled.ast, warn);
              }
              compiled.errors = errors;
              compiled.tips = tips;
              return compiled;
            }
            return {
              compile: compile,
              compileToFunctions: createCompileToFunctionFn(compile)
            };
          };
        }
        var createCompiler = createCompilerCreator(function baseCompile(template, options) {
          var ast = parse(template.trim(), options);
          if (options.optimize !== false) {
            optimize(ast, options);
          }
          var code = generate(ast, options);
          return {
            ast: ast,
            render: code.render,
            staticRenderFns: code.staticRenderFns
          };
        });
        var ref = createCompiler(baseOptions);
        var compile = ref.compile;
        var compileToFunctions = ref.compileToFunctions;
        var isAttr = makeMap("accept,accept-charset,accesskey,action,align,alt,async,autocomplete," + "autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset," + "checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv," + "name,contenteditable,contextmenu,controls,coords,data,datetime,default," + "defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for," + "form,formaction,headers,height,hidden,high,href,hreflang,http-equiv," + "icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low," + "manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file," + "muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster," + "preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox," + "scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span," + "spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex," + "target,title,type,usemap,value,width,wrap");
        var isRenderableAttr = function (name) {
          return isAttr(name) || name.indexOf("data-") === 0 || name.indexOf("aria-") === 0;
        };
        var propsToAttrMap = {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv"
        };
        var ESC = {
          "<": "&lt;",
          ">": "&gt;",
          "\"": "&quot;",
          "&": "&amp;"
        };
        function escape(s) {
          return s.replace(/[<>"&]/g, escapeChar);
        }
        function escapeChar(a) {
          return ESC[a] || a;
        }
        var plainStringRE = /^"(?:[^"\\]|\\.)*"$|^'(?:[^'\\]|\\.)*'$/;
        function applyModelTransform(el, state) {
          if (el.directives) {
            for (var i = 0; i < el.directives.length; i++) {
              var dir = el.directives[i];
              if (dir.name === "model") {
                state.directives.model(el, dir, state.warn);
                if (el.tag === "textarea" && el.props) {
                  el.props = el.props.filter(function (p) {
                    return p.name !== "value";
                  });
                }
                break;
              }
            }
          }
        }
        function genAttrSegments(attrs) {
          return attrs.map(function (ref) {
            var name = ref.name;
            var value = ref.value;
            return genAttrSegment(name, value);
          });
        }
        function genDOMPropSegments(props, attrs) {
          var segments = [];
          props.forEach(function (ref) {
            var name = ref.name;
            var value = ref.value;
            name = propsToAttrMap[name] || name.toLowerCase();
            if (isRenderableAttr(name) && !(attrs && attrs.some(function (a) {
              return a.name === name;
            }))) {
              segments.push(genAttrSegment(name, value));
            }
          });
          return segments;
        }
        function genAttrSegment(name, value) {
          if (plainStringRE.test(value)) {
            value = value.replace(/^'|'$/g, "\"");
            if (isEnumeratedAttr(name) && value !== "\"false\"") {
              value = "\"true\"";
            }
            return {
              type: RAW,
              value: isBooleanAttr(name) ? " " + name + "=\"" + name + "\"" : value === "\"\"" ? " " + name : " " + name + "=\"" + JSON.parse(value) + "\""
            };
          } else {
            return {
              type: EXPRESSION,
              value: "_ssrAttr(" + JSON.stringify(name) + "," + value + ")"
            };
          }
        }
        function genClassSegments(staticClass, classBinding) {
          if (staticClass && !classBinding) {
            return [{
              type: RAW,
              value: " class=\"" + JSON.parse(staticClass) + "\""
            }];
          } else {
            return [{
              type: EXPRESSION,
              value: "_ssrClass(" + (staticClass || "null") + "," + (classBinding || "null") + ")"
            }];
          }
        }
        function genStyleSegments(staticStyle, parsedStaticStyle, styleBinding, vShowExpression) {
          if (staticStyle && !styleBinding && !vShowExpression) {
            return [{
              type: RAW,
              value: " style=" + JSON.stringify(staticStyle)
            }];
          } else {
            return [{
              type: EXPRESSION,
              value: "_ssrStyle(" + (parsedStaticStyle || "null") + "," + (styleBinding || "null") + ", " + (vShowExpression ? "{ display: (" + vShowExpression + ") ? '' : 'none' }" : "null") + ")"
            }];
          }
        }
        var optimizability = {
          FALSE: 0,
          FULL: 1,
          SELF: 2,
          CHILDREN: 3,
          PARTIAL: 4
        };
        var isPlatformReservedTag$1;
        function optimize$1(root, options) {
          if (!root) {
            return;
          }
          isPlatformReservedTag$1 = options.isReservedTag || no;
          walk(root, true);
        }
        function walk(node, isRoot) {
          if (isUnOptimizableTree(node)) {
            node.ssrOptimizability = optimizability.FALSE;
            return;
          }
          var selfUnoptimizable = isRoot || hasCustomDirective(node);
          var check = function (child) {
            if (child.ssrOptimizability !== optimizability.FULL) {
              node.ssrOptimizability = selfUnoptimizable ? optimizability.PARTIAL : optimizability.SELF;
            }
          };
          if (selfUnoptimizable) {
            node.ssrOptimizability = optimizability.CHILDREN;
          }
          if (node.type === 1) {
            for (var i = 0, l = node.children.length; i < l; i++) {
              var child = node.children[i];
              walk(child);
              check(child);
            }
            if (node.ifConditions) {
              for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
                var block = node.ifConditions[i$1].block;
                walk(block, isRoot);
                check(block);
              }
            }
            if (node.ssrOptimizability == null || !isRoot && (node.attrsMap["v-html"] || node.attrsMap["v-text"])) {
              node.ssrOptimizability = optimizability.FULL;
            } else {
              node.children = optimizeSiblings(node);
            }
          } else {
            node.ssrOptimizability = optimizability.FULL;
          }
        }
        function optimizeSiblings(el) {
          var children = el.children;
          var optimizedChildren = [];
          var currentOptimizableGroup = [];
          var pushGroup = function () {
            if (currentOptimizableGroup.length) {
              optimizedChildren.push({
                type: 1,
                parent: el,
                tag: "template",
                attrsList: [],
                attrsMap: {},
                rawAttrsMap: {},
                children: currentOptimizableGroup,
                ssrOptimizability: optimizability.FULL
              });
            }
            currentOptimizableGroup = [];
          };
          for (var i = 0; i < children.length; i++) {
            var c = children[i];
            if (c.ssrOptimizability === optimizability.FULL) {
              currentOptimizableGroup.push(c);
            } else {
              pushGroup();
              optimizedChildren.push(c);
            }
          }
          pushGroup();
          return optimizedChildren;
        }
        function isUnOptimizableTree(node) {
          if (node.type === 2 || node.type === 3) {
            return false;
          }
          return isBuiltInTag(node.tag) || !isPlatformReservedTag$1(node.tag) || !!node.component || isSelectWithModel(node);
        }
        var isBuiltInDir = makeMap("text,html,show,on,bind,model,pre,cloak,once");
        function hasCustomDirective(node) {
          return node.type === 1 && node.directives && node.directives.some(function (d) {
            return !isBuiltInDir(d.name);
          });
        }
        function isSelectWithModel(node) {
          return node.type === 1 && node.tag === "select" && node.directives != null && node.directives.some(function (d) {
            return d.name === "model";
          });
        }
        var RAW = 0;
        var INTERPOLATION = 1;
        var EXPRESSION = 2;
        function generate$1(ast, options) {
          var state = new CodegenState(options);
          var code = ast ? genSSRElement(ast, state) : "_c(\"div\")";
          return {
            render: "with(this){return " + code + "}",
            staticRenderFns: state.staticRenderFns
          };
        }
        function genSSRElement(el, state) {
          if (el.for && !el.forProcessed) {
            return genFor(el, state, genSSRElement);
          } else if (el.if && !el.ifProcessed) {
            return genIf(el, state, genSSRElement);
          } else if (el.tag === "template" && !el.slotTarget) {
            return el.ssrOptimizability === optimizability.FULL ? genChildrenAsStringNode(el, state) : genSSRChildren(el, state) || "void 0";
          }
          switch (el.ssrOptimizability) {
            case optimizability.FULL:
              return genStringElement(el, state);
            case optimizability.SELF:
              return genStringElementWithChildren(el, state);
            case optimizability.CHILDREN:
              return genNormalElement(el, state, true);
            case optimizability.PARTIAL:
              return genNormalElement(el, state, false);
            default:
              return genElement(el, state);
          }
        }
        function genNormalElement(el, state, stringifyChildren) {
          var data = el.plain ? undefined : genData$2(el, state);
          var children = stringifyChildren ? "[" + genChildrenAsStringNode(el, state) + "]" : genSSRChildren(el, state, true);
          return "_c('" + el.tag + "'" + (data ? "," + data : "") + (children ? "," + children : "") + ")";
        }
        function genSSRChildren(el, state, checkSkip) {
          return genChildren(el, state, checkSkip, genSSRElement, genSSRNode);
        }
        function genSSRNode(el, state) {
          return el.type === 1 ? genSSRElement(el, state) : genText(el);
        }
        function genChildrenAsStringNode(el, state) {
          return el.children.length ? "_ssrNode(" + flattenSegments(childrenToSegments(el, state)) + ")" : "";
        }
        function genStringElement(el, state) {
          return "_ssrNode(" + elementToString(el, state) + ")";
        }
        function genStringElementWithChildren(el, state) {
          var children = genSSRChildren(el, state, true);
          return "_ssrNode(" + flattenSegments(elementToOpenTagSegments(el, state)) + ",\"</" + el.tag + ">\"" + (children ? "," + children : "") + ")";
        }
        function elementToString(el, state) {
          return "(" + flattenSegments(elementToSegments(el, state)) + ")";
        }
        function elementToSegments(el, state) {
          if (el.for && !el.forProcessed) {
            el.forProcessed = true;
            return [{
              type: EXPRESSION,
              value: genFor(el, state, elementToString, "_ssrList")
            }];
          } else if (el.if && !el.ifProcessed) {
            el.ifProcessed = true;
            return [{
              type: EXPRESSION,
              value: genIf(el, state, elementToString, "\"<!---->\"")
            }];
          } else if (el.tag === "template") {
            return childrenToSegments(el, state);
          }
          var openSegments = elementToOpenTagSegments(el, state);
          var childrenSegments = childrenToSegments(el, state);
          var ref = state.options;
          var isUnaryTag = ref.isUnaryTag;
          var close = isUnaryTag && isUnaryTag(el.tag) ? [] : [{
            type: RAW,
            value: "</" + el.tag + ">"
          }];
          return openSegments.concat(childrenSegments, close);
        }
        function elementToOpenTagSegments(el, state) {
          applyModelTransform(el, state);
          var binding;
          var segments = [{
            type: RAW,
            value: "<" + el.tag
          }];
          if (el.attrs) {
            segments.push.apply(segments, genAttrSegments(el.attrs));
          }
          if (el.props) {
            segments.push.apply(segments, genDOMPropSegments(el.props, el.attrs));
          }
          if (binding = el.attrsMap["v-bind"]) {
            segments.push({
              type: EXPRESSION,
              value: "_ssrAttrs(" + binding + ")"
            });
          }
          if (binding = el.attrsMap["v-bind.prop"]) {
            segments.push({
              type: EXPRESSION,
              value: "_ssrDOMProps(" + binding + ")"
            });
          }
          if (el.staticClass || el.classBinding) {
            segments.push.apply(segments, genClassSegments(el.staticClass, el.classBinding));
          }
          if (el.staticStyle || el.styleBinding || el.attrsMap["v-show"]) {
            segments.push.apply(segments, genStyleSegments(el.attrsMap.style, el.staticStyle, el.styleBinding, el.attrsMap["v-show"]));
          }
          if (state.options.scopeId) {
            segments.push({
              type: RAW,
              value: " " + state.options.scopeId
            });
          }
          segments.push({
            type: RAW,
            value: ">"
          });
          return segments;
        }
        function childrenToSegments(el, state) {
          var binding;
          if (binding = el.attrsMap["v-html"]) {
            return [{
              type: EXPRESSION,
              value: "_s(" + binding + ")"
            }];
          }
          if (binding = el.attrsMap["v-text"]) {
            return [{
              type: INTERPOLATION,
              value: "_s(" + binding + ")"
            }];
          }
          if (el.tag === "textarea" && (binding = el.attrsMap["v-model"])) {
            return [{
              type: INTERPOLATION,
              value: "_s(" + binding + ")"
            }];
          }
          return el.children ? nodesToSegments(el.children, state) : [];
        }
        function nodesToSegments(children, state) {
          var segments = [];
          for (var i = 0; i < children.length; i++) {
            var c = children[i];
            if (c.type === 1) {
              segments.push.apply(segments, elementToSegments(c, state));
            } else if (c.type === 2) {
              segments.push({
                type: INTERPOLATION,
                value: c.expression
              });
            } else if (c.type === 3) {
              var text = escape(c.text);
              if (c.isComment) {
                text = "<!--" + text + "-->";
              }
              segments.push({
                type: RAW,
                value: text
              });
            }
          }
          return segments;
        }
        function flattenSegments(segments) {
          var mergedSegments = [];
          var textBuffer = "";
          var pushBuffer = function () {
            if (textBuffer) {
              mergedSegments.push(JSON.stringify(textBuffer));
              textBuffer = "";
            }
          };
          for (var i = 0; i < segments.length; i++) {
            var s = segments[i];
            if (s.type === RAW) {
              textBuffer += s.value;
            } else if (s.type === INTERPOLATION) {
              pushBuffer();
              mergedSegments.push("_ssrEscape(" + s.value + ")");
            } else if (s.type === EXPRESSION) {
              pushBuffer();
              mergedSegments.push("(" + s.value + ")");
            }
          }
          pushBuffer();
          return mergedSegments.join("+");
        }
        var createCompiler$1 = createCompilerCreator(function baseCompile(template, options) {
          var ast = parse(template.trim(), options);
          optimize$1(ast, options);
          var code = generate$1(ast, options);
          return {
            ast: ast,
            render: code.render,
            staticRenderFns: code.staticRenderFns
          };
        });
        var ref$1 = createCompiler$1(baseOptions);
        var compile$1 = ref$1.compile;
        var compileToFunctions$1 = ref$1.compileToFunctions;
        exports.parseComponent = parseComponent;
        exports.compile = compile;
        exports.compileToFunctions = compileToFunctions;
        exports.ssrCompile = compile$1;
        exports.ssrCompileToFunctions = compileToFunctions$1;
        exports.generateCodeFrame = generateCodeFrame;
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
      });
    }).call(this, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/timers-browserify/main.js").setImmediate);
  },
  "./node_modules/webpack/buildin/global.js": function (module, exports) {
    var g;
    g = (function () {
      return this;
    })();
    try {
      g = g || new Function("return this")();
    } catch (e) {
      if (typeof window === "object") g = window;
    }
    module.exports = g;
  },
  "./test/test.ts": function (module, exports, __webpack_require__) {
    function $vue_templ(){return {r:function(_$, css$){let $pr=this.p||{},$cc=this.$cc,$cs=this.$cs,_c=this._c,_q=this._q,_k=this._k,_u=this._u,_e=this._e,_l=this._l,_t=this._t.bind(this),_s=this._s,_v=this._v,_m=this._m.bind(this);with(this.m){return _c('div',{staticClass:"Page",class:(css$ != null? css$: ""),attrs:{"data-cn":"A"}},[_v("\n    1\n")])}},s:[]}};;
    (function () {
      "use strict";
      eval("(function (__extends, __decorate) {\n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });" +
          "\n  var App_1 = __webpack_require__(\"./node_modules/@plastique/core/base/App.ts\");" +
          "\n  var DropdownOption_1 = __webpack_require__(\"./dropdown/DropdownOption.ts\");" +
          "\n  var Dropdown_1 = __webpack_require__(\"./dropdown/Dropdown.ts\");" +
          "\n  var test_utils_1 = __webpack_require__(\"./node_modules/@vue/test-utils/dist/vue-test-utils.js\");" +
          "\n  var A = (function (_super) {" +
          "\n    __extends(A, _super);" +
          "\n    function A(elem) {" +
          "\n      var _this = this;" +
          "\n      _super.initComponent(\"A\", \"{\\\"w\\\":{},\\\"ep\\\":[],\\\"ah\\\":null,\\\"dh\\\":null}\", _this, $vue_templ);" +
          "\n      _this = _super.call(this) || this;" +
          "\n      var dropdown = new Dropdown_1.default([new DropdownOption_1.default(1, \"1\"), new DropdownOption_1.default(2, \"2\")]);" +
          "\n      var dm = mount({data(){return {m: dropdown}}, template: \"<component :is=\\\"m.app$.cn\\\" v-bind:m=\\\"m\\\"></component>\"}, {localVue: Vue}); " +
          "\n      dropdown.openOptions(); " +
          "\n      Vue.nextTick(() => {console.log(dm.html())}); " +
          "\n      return _this;" +
          "\n  }" +
          "\n  A.$beans = [];" +
          "\n  A.$ = (window[\"A\"] = A, \"{\\\"name\\\":\\\"A\\\",\\\"beans\\\":[{}]}\");" +
          "\n  __decorate([], A, \"$beans\", void 0);" +
          "\n  __decorate([], A, \"$\", void 0);" +
          "\n  return A;" +
          "\n  })(App_1.default);" +
          "\n  new A(null); " +
          "\n  exports.default = A;" +
          "\n}).call(this, __webpack_require__(\"./node_modules/@plastique/core/compileUtils/extends.ts\"), __webpack_require__(\"./node_modules/@plastique/core/compileUtils/decorate.ts\"));\n//# sourceURL=webpack:////home/bondarenko/IdeaProjects/plastique-components/test/test.ts?");
    })();
  }
});
