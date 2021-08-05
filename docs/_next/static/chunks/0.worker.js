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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@next/react-refresh-utils/loader.js!./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js?!./workers/emruby-irb.worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@next/react-refresh-utils/loader.js!./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js?!./workers/emruby-irb.worker.ts":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@next/react-refresh-utils/loader.js!./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js??ref--4-1!./workers/emruby-irb.worker.ts ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__[\"default\"] = ({});\nvar root = \"\" + \"/\";\nvar buffer;\nself.addEventListener(\"message\", function (msg) {\n  var shared = msg.data;\n  buffer = new Int32Array(shared);\n});\nvar i = 0;\n\nvar mystdin = function mystdin() {\n  self.postMessage([\"input\"]);\n  Atomics.wait(buffer, i, -1);\n  var key = Atomics.load(buffer, i);\n  Atomics.store(buffer, i, -1);\n  i = (i + 1) % 1024;\n  return key;\n};\n\nself.Module = {\n  locateFile: function locateFile(path) {\n    return root + path;\n  },\n  postRun: [function () {\n    return self.postMessage([\"terminated\"]);\n  }],\n  thisProgram: \"ruby\",\n  arguments: [\"-I/\", \"-I/lib\", \"-I/.ext/common\", \"emruby-irb.rb\"],\n  stdin: mystdin,\n  stdout: function stdout(key) {\n    return self.postMessage([\"output\", key]);\n  },\n  stderr: function stderr(key) {\n    return self.postMessage([\"output\", key]);\n  },\n  setStatus: function setStatus(msg) {\n    return self.postMessage([\"status\", msg]);\n  }\n};\nimportScripts(root + \"fs.js\");\nimportScripts(root + \"ruby.js\");\n;\n\nvar _a, _b; // Legacy CSS implementations will `eval` browser code in a Node.js context\n// to extract CSS. For backwards compatibility, we need to check we're in a\n// browser context before continuing.\n\n\nif (typeof self !== 'undefined' && // AMP / No-JS mode does not inject these helpers:\n'$RefreshHelpers$' in self) {\n  var currentExports = module.__proto__.exports;\n  var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null; // This cannot happen in MainTemplate because the exports mismatch between\n  // templating and execution.\n\n  self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i); // A module can be accepted automatically based on its exports, e.g. when\n  // it is a Refresh Boundary.\n\n  if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n    // Save the previous exports on update so we can compare the boundary\n    // signatures.\n    module.hot.dispose(function (data) {\n      data.prevExports = currentExports;\n    }); // Unconditionally accept an update to this module, we'll check if it's\n    // still a Refresh Boundary later.\n\n    module.hot.accept(); // This field is set when the previous version of this module was a\n    // Refresh Boundary, letting us know we need to check for invalidation or\n    // enqueue an update.\n\n    if (prevExports !== null) {\n      // A boundary can become ineligible if its exports are incompatible\n      // with the previous exports.\n      //\n      // For example, if you add/remove/change exports, we'll want to\n      // re-execute the importing modules, and force those components to\n      // re-render. Similarly, if you convert a class component to a\n      // function, we want to invalidate the boundary.\n      if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n        module.hot.invalidate();\n      } else {\n        self.$RefreshHelpers$.scheduleUpdate();\n      }\n    }\n  } else {\n    // Since we just executed the code for the module, it's possible that the\n    // new exports made it ineligible for being a boundary.\n    // We only care about the case when we were _previously_ a boundary,\n    // because we already accepted this update (accidental side effect).\n    var isNoLongerABoundary = prevExports !== null;\n\n    if (isNoLongerABoundary) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd29ya2Vycy9lbXJ1YnktaXJiLndvcmtlci50cz8wN2UwIl0sIm5hbWVzIjpbInJvb3QiLCJwcm9jZXNzIiwic2VsZiIsInNoYXJlZCIsIm1zZyIsImJ1ZmZlciIsImkiLCJteXN0ZGluIiwiQXRvbWljcyIsImtleSIsImxvY2F0ZUZpbGUiLCJwb3N0UnVuIiwidGhpc1Byb2dyYW0iLCJhcmd1bWVudHMiLCJzdGRpbiIsInN0ZG91dCIsInN0ZGVyciIsInNldFN0YXR1cyIsImltcG9ydFNjcmlwdHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFZQSxJQUFNQSxJQUFJLEdBQUdDLEtBQWI7QUFFQTtBQUVBQyxJQUFJLENBQUpBLDRCQUFpQyxlQUFTO0FBQ3hDLE1BQU1DLE1BQU0sR0FBR0MsR0FBRyxDQUFsQjtBQUNBQyxRQUFNLEdBQUcsZUFBVEEsTUFBUyxDQUFUQTtBQUZGSDtBQUtBLElBQUlJLENBQUMsR0FBTDs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCTCxNQUFJLENBQUpBLFlBQWlCLENBQWpCQSxPQUFpQixDQUFqQkE7QUFDQU0sU0FBTyxDQUFQQSxnQkFBd0IsQ0FBeEJBO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRCxPQUFPLENBQVBBLGFBQVosQ0FBWUEsQ0FBWjtBQUNBQSxTQUFPLENBQVBBLGlCQUF5QixDQUF6QkE7QUFDQUYsR0FBQyxHQUFHLENBQUNBLENBQUMsR0FBRixLQUFKQTtBQUNBO0FBTkY7O0FBU0FKLElBQUksQ0FBSkEsU0FBYztBQUNaUSxZQUFVLEVBQUU7QUFBQSxXQUFVVixJQUFJLEdBQWQ7QUFEQTtBQUVaVyxTQUFPLEVBQUUsQ0FBQztBQUFBLFdBQU1ULElBQUksQ0FBSkEsWUFBaUIsQ0FBdkIsWUFBdUIsQ0FBakJBLENBQU47QUFGRSxHQUVILENBRkc7QUFHWlUsYUFBVyxFQUhDO0FBSVpDLFdBQVMsRUFBRSxvQ0FKQyxlQUlELENBSkM7QUFLWkMsT0FBSyxFQUxPO0FBTVpDLFFBQU0sRUFBRTtBQUFBLFdBQVNiLElBQUksQ0FBSkEsWUFBaUIsV0FBMUIsR0FBMEIsQ0FBakJBLENBQVQ7QUFOSTtBQU9aYyxRQUFNLEVBQUU7QUFBQSxXQUFTZCxJQUFJLENBQUpBLFlBQWlCLFdBQTFCLEdBQTBCLENBQWpCQSxDQUFUO0FBUEk7QUFRWmUsV0FBUyxFQUFFO0FBQUEsV0FBaUJmLElBQUksQ0FBSkEsWUFBaUIsV0FBbEMsR0FBa0MsQ0FBakJBLENBQWpCO0FBQUE7QUFSQyxDQUFkQTtBQVdBZ0IsYUFBYSxDQUFDbEIsSUFBSSxHQUFsQmtCLE9BQWEsQ0FBYkE7QUFDQUEsYUFBYSxDQUFDbEIsSUFBSSxHQUFsQmtCLFNBQWEsQ0FBYkEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG5leHQvcmVhY3QtcmVmcmVzaC11dGlscy9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWJhYmVsLWxvYWRlci5qcz8hLi93b3JrZXJzL2VtcnVieS1pcmIud29ya2VyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge307XG5cbmludGVyZmFjZSBNeUVtc2NyaXB0ZW5Nb2R1bGUgZXh0ZW5kcyBFbXNjcmlwdGVuTW9kdWxlIHtcbiAgdGhpc1Byb2dyYW06IHN0cmluZztcbiAgc3RkaW46ICgpID0+IG51bWJlciB8IG51bGw7XG4gIHN0ZG91dDogKGtleTogbnVtYmVyIHwgbnVsbCkgPT4gdm9pZDtcbiAgc3RkZXJyOiAoa2V5OiBudW1iZXIgfCBudWxsKSA9PiB2b2lkO1xuICBzZXRTdGF0dXM6IChtc2c6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZGVjbGFyZSBjb25zdCBzZWxmOiB7IE1vZHVsZTogUGFydGlhbDxNeUVtc2NyaXB0ZW5Nb2R1bGU+IH0gJiB0eXBlb2YgZ2xvYmFsVGhpcztcblxuY29uc3Qgcm9vdCA9IHByb2Nlc3MuZW52LkJBU0VfUEFUSCArIFwiL1wiO1xuXG5sZXQgYnVmZmVyOiBJbnQzMkFycmF5O1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChtc2cpID0+IHtcbiAgY29uc3Qgc2hhcmVkID0gbXNnLmRhdGE7XG4gIGJ1ZmZlciA9IG5ldyBJbnQzMkFycmF5KHNoYXJlZCk7XG59KTtcblxubGV0IGkgPSAwO1xuY29uc3QgbXlzdGRpbiA9ICgpID0+IHtcbiAgc2VsZi5wb3N0TWVzc2FnZShbXCJpbnB1dFwiXSk7XG4gIEF0b21pY3Mud2FpdChidWZmZXIsIGksIC0xKTtcbiAgY29uc3Qga2V5ID0gQXRvbWljcy5sb2FkKGJ1ZmZlciwgaSk7XG4gIEF0b21pY3Muc3RvcmUoYnVmZmVyLCBpLCAtMSk7XG4gIGkgPSAoaSArIDEpICUgMTAyNDtcbiAgcmV0dXJuIGtleTtcbn07XG5cbnNlbGYuTW9kdWxlID0ge1xuICBsb2NhdGVGaWxlOiAocGF0aCkgPT4gcm9vdCArIHBhdGgsXG4gIHBvc3RSdW46IFsoKSA9PiBzZWxmLnBvc3RNZXNzYWdlKFtcInRlcm1pbmF0ZWRcIl0pXSxcbiAgdGhpc1Byb2dyYW06IFwicnVieVwiLFxuICBhcmd1bWVudHM6IFtcIi1JL1wiLCBcIi1JL2xpYlwiLCBcIi1JLy5leHQvY29tbW9uXCIsIFwiZW1ydWJ5LWlyYi5yYlwiXSxcbiAgc3RkaW46IG15c3RkaW4sXG4gIHN0ZG91dDogKGtleSkgPT4gc2VsZi5wb3N0TWVzc2FnZShbXCJvdXRwdXRcIiwga2V5XSksXG4gIHN0ZGVycjogKGtleSkgPT4gc2VsZi5wb3N0TWVzc2FnZShbXCJvdXRwdXRcIiwga2V5XSksXG4gIHNldFN0YXR1czogKG1zZzogc3RyaW5nKSA9PiBzZWxmLnBvc3RNZXNzYWdlKFtcInN0YXR1c1wiLCBtc2ddKSxcbn07XG5cbmltcG9ydFNjcmlwdHMocm9vdCArIFwiZnMuanNcIik7XG5pbXBvcnRTY3JpcHRzKHJvb3QgKyBcInJ1YnkuanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@next/react-refresh-utils/loader.js!./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js?!./workers/emruby-irb.worker.ts\n");

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