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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _getPromise = __webpack_require__(1);
	
	var _getPromise2 = _interopRequireDefault(_getPromise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by Nomad_Mystic on 8/18/2016.
	 */
	
	// requires main css files and webpack bundles up the css for client
	__webpack_require__(2);
	
	// console.log('testing');
	console.log('Location: ' + window.location.href);
	
	// getting utilities
	
	
	// Getting initial template of ten people from the API
	// this is the path to the express route
	(0, _getPromise2.default)('/').then(function (response) {
	    console.log(response);
	}, function (err) {
	    console.log(err);
	});
	
	// if I need jQuery
	$(function () {
	    $('body').css('background', 'red');
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by Nomad_Mystic on 8/19/2016.
	 */
	
	var getPromise = function getPromise(url) {
	    return new Promise(function (resolve, reject) {
	
	        var req = new XMLHttpRequest();
	        req.open('GET', url, true);
	
	        req.onLoad = function (res) {
	            // this will send if it has any status code
	            if (res.statusCode === 200) {
	                resolve(req.response);
	                console.log(req.response);
	            } else {
	                reject(Error(req.statusText));
	            }
	        };
	
	        req.onError = function (err) {
	            console.log(err);
	            reject(Error(req.statusText));
	        };
	        req.send();
	    });
	};
	
	exports.default = getPromise;

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map