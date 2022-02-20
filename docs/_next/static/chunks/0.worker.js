/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/
/******/ 		        var hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 		        var cleanup = hasRefresh
/******/ 		          ? self.$RefreshInterceptModuleExecution$(moduleId)
/******/ 		          : function() {};
/******/ 		        try {
/******/ 		        
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		        } finally {
/******/ 		          cleanup();
/******/ 		        }
/******/ 		        
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@next/react-refresh-utils/loader.js!./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js?!./workers/emruby-irb-reline.worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@next/react-refresh-utils/loader.js!./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js?!./workers/emruby-irb-reline.worker.ts":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@next/react-refresh-utils/loader.js!./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js??ref--4-1!./workers/emruby-irb-reline.worker.ts ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__[\"default\"] = ({});\nvar root = \"\" + \"/\";\nconsole.log(root);\nimportScripts(root + \"workerTools.js\");\n\nonmessage = function onmessage(msg) {\n  self.Module = {\n    locateFile: function locateFile(path) {\n      return root + path;\n    },\n    postRun: [function () {\n      return self.postMessage({\n        type: \"terminated\"\n      });\n    }],\n    thisProgram: \"ruby\",\n    arguments: [\"-I/\", \"-I/lib\", \"-I/.ext/common\", \"emruby-irb.rb\"],\n    setStatus: function setStatus(msg) {\n      return self.postMessage({\n        type: \"status\",\n        message: msg\n      });\n    }\n  };\n  importScripts(root + \"fs.js\");\n  importScripts(root + \"ruby.js\");\n  var _ref = self,\n      emscriptenHack = _ref.emscriptenHack,\n      TtyClient = _ref.TtyClient;\n  emscriptenHack(new TtyClient(msg.data));\n};\n\n;\n\nvar _a, _b; // Legacy CSS implementations will `eval` browser code in a Node.js context\n// to extract CSS. For backwards compatibility, we need to check we're in a\n// browser context before continuing.\n\n\nif (typeof self !== 'undefined' && // AMP / No-JS mode does not inject these helpers:\n'$RefreshHelpers$' in self) {\n  var currentExports = module.__proto__.exports;\n  var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null; // This cannot happen in MainTemplate because the exports mismatch between\n  // templating and execution.\n\n  self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i); // A module can be accepted automatically based on its exports, e.g. when\n  // it is a Refresh Boundary.\n\n  if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n    // Save the previous exports on update so we can compare the boundary\n    // signatures.\n    module.hot.dispose(function (data) {\n      data.prevExports = currentExports;\n    }); // Unconditionally accept an update to this module, we'll check if it's\n    // still a Refresh Boundary later.\n\n    module.hot.accept(); // This field is set when the previous version of this module was a\n    // Refresh Boundary, letting us know we need to check for invalidation or\n    // enqueue an update.\n\n    if (prevExports !== null) {\n      // A boundary can become ineligible if its exports are incompatible\n      // with the previous exports.\n      //\n      // For example, if you add/remove/change exports, we'll want to\n      // re-execute the importing modules, and force those components to\n      // re-render. Similarly, if you convert a class component to a\n      // function, we want to invalidate the boundary.\n      if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n        module.hot.invalidate();\n      } else {\n        self.$RefreshHelpers$.scheduleUpdate();\n      }\n    }\n  } else {\n    // Since we just executed the code for the module, it's possible that the\n    // new exports made it ineligible for being a boundary.\n    // We only care about the case when we were _previously_ a boundary,\n    // because we already accepted this update (accidental side effect).\n    var isNoLongerABoundary = prevExports !== null;\n\n    if (isNoLongerABoundary) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd29ya2Vycy9lbXJ1YnktaXJiLXJlbGluZS53b3JrZXIudHM/ZmEwMiJdLCJuYW1lcyI6WyJyb290IiwicHJvY2VzcyIsImNvbnNvbGUiLCJpbXBvcnRTY3JpcHRzIiwib25tZXNzYWdlIiwic2VsZiIsImxvY2F0ZUZpbGUiLCJwb3N0UnVuIiwidHlwZSIsInRoaXNQcm9ncmFtIiwiYXJndW1lbnRzIiwic2V0U3RhdHVzIiwibWVzc2FnZSIsIm1zZyIsImVtc2NyaXB0ZW5IYWNrIiwiVHR5Q2xpZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBWUEsSUFBTUEsSUFBSSxHQUFHQyxLQUFiO0FBRUFDLE9BQU8sQ0FBUEE7QUFDQUMsYUFBYSxDQUFDSCxJQUFJLEdBQWxCRyxnQkFBYSxDQUFiQTs7QUFFQUMsU0FBUyxHQUFHLHdCQUFTO0FBQ25CQyxNQUFJLENBQUpBLFNBQWM7QUFDWkMsY0FBVSxFQUFFO0FBQUEsYUFBVU4sSUFBSSxHQUFkO0FBREE7QUFFWk8sV0FBTyxFQUFFLENBQUM7QUFBQSxhQUFNLElBQUksQ0FBSixZQUFpQjtBQUFFQyxZQUFJLEVBQUU7QUFBUixPQUFqQixDQUFOO0FBRkUsS0FFSCxDQUZHO0FBR1pDLGVBQVcsRUFIQztBQUlaQyxhQUFTLEVBQUUsb0NBSkMsZUFJRCxDQUpDO0FBS1pDLGFBQVMsRUFBRTtBQUFBLGFBQ1QsSUFBSSxDQUFKLFlBQWlCO0FBQUVILFlBQUksRUFBTjtBQUFrQkksZUFBTyxFQUFFQztBQUEzQixPQUFqQixDQURTO0FBQUE7QUFMQyxHQUFkUjtBQVNBRixlQUFhLENBQUNILElBQUksR0FBbEJHLE9BQWEsQ0FBYkE7QUFDQUEsZUFBYSxDQUFDSCxJQUFJLEdBQWxCRyxTQUFhLENBQWJBO0FBWG1CO0FBQUEsTUFhWFcsY0FiVztBQUFBLE1BYUtDLFNBYkw7QUFjbkJELGdCQUFjLENBQUMsY0FBY0QsR0FBRyxDQUFoQ0MsSUFBZSxDQUFELENBQWRBO0FBZEZWIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BuZXh0L3JlYWN0LXJlZnJlc2gtdXRpbHMvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1iYWJlbC1sb2FkZXIuanM/IS4vd29ya2Vycy9lbXJ1YnktaXJiLXJlbGluZS53b3JrZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7fTtcblxuaW50ZXJmYWNlIE15RW1zY3JpcHRlbk1vZHVsZSBleHRlbmRzIEVtc2NyaXB0ZW5Nb2R1bGUge1xuICB0aGlzUHJvZ3JhbTogc3RyaW5nO1xuICBzdGRpbjogKCkgPT4gbnVtYmVyIHwgbnVsbDtcbiAgc3Rkb3V0OiAoa2V5OiBudW1iZXIgfCBudWxsKSA9PiB2b2lkO1xuICBzdGRlcnI6IChrZXk6IG51bWJlciB8IG51bGwpID0+IHZvaWQ7XG4gIHNldFN0YXR1czogKG1zZzogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5kZWNsYXJlIGNvbnN0IHNlbGY6IHsgTW9kdWxlOiBQYXJ0aWFsPE15RW1zY3JpcHRlbk1vZHVsZT4gfSAmIHR5cGVvZiBnbG9iYWxUaGlzO1xuXG5jb25zdCByb290ID0gcHJvY2Vzcy5lbnYuQkFTRV9QQVRIICsgXCIvXCI7XG5cbmNvbnNvbGUubG9nKHJvb3QpO1xuaW1wb3J0U2NyaXB0cyhyb290ICsgXCJ3b3JrZXJUb29scy5qc1wiKTtcblxub25tZXNzYWdlID0gKG1zZykgPT4ge1xuICBzZWxmLk1vZHVsZSA9IHtcbiAgICBsb2NhdGVGaWxlOiAocGF0aCkgPT4gcm9vdCArIHBhdGgsXG4gICAgcG9zdFJ1bjogWygpID0+IHNlbGYucG9zdE1lc3NhZ2UoeyB0eXBlOiBcInRlcm1pbmF0ZWRcIiB9KV0sXG4gICAgdGhpc1Byb2dyYW06IFwicnVieVwiLFxuICAgIGFyZ3VtZW50czogW1wiLUkvXCIsIFwiLUkvbGliXCIsIFwiLUkvLmV4dC9jb21tb25cIiwgXCJlbXJ1YnktaXJiLnJiXCJdLFxuICAgIHNldFN0YXR1czogKG1zZzogc3RyaW5nKSA9PlxuICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7IHR5cGU6IFwic3RhdHVzXCIsIG1lc3NhZ2U6IG1zZyB9KSxcbiAgfTtcblxuICBpbXBvcnRTY3JpcHRzKHJvb3QgKyBcImZzLmpzXCIpO1xuICBpbXBvcnRTY3JpcHRzKHJvb3QgKyBcInJ1YnkuanNcIik7XG5cbiAgY29uc3QgeyBlbXNjcmlwdGVuSGFjaywgVHR5Q2xpZW50IH0gPSBzZWxmIGFzIGFueTtcbiAgZW1zY3JpcHRlbkhhY2sobmV3IFR0eUNsaWVudChtc2cuZGF0YSkpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@next/react-refresh-utils/loader.js!./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js?!./workers/emruby-irb-reline.worker.ts\n");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzPzgyYjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/harmony-module.js\n");

/***/ })

/******/ });