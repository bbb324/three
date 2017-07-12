/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("(function() {\n  var scene = new THREE.Scene();\n  var camera = function() {\n    let view_angle = 30,\n        aspect = window.innerWidth / window.innerHeight,\n        near = 1,\n        far = 1000;\n    return (new THREE.PerspectiveCamera(\n        view_angle,\n        aspect,\n        near,\n        far\n      ));\n  }\n  this.camera = new camera();\n  this.camera.position.set(0,0,5);\n  \n\n  var renderer = new THREE.WebGLRenderer();\n  //renderer.setClearColor('red');\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  document.body.appendChild(renderer.domElement);\n\n\n  // define cubic\n  var cubic = function() {\n    this.geometry = new THREE.BoxGeometry(1, 1, 1);\n    this.material = new THREE.MeshBasicMaterial({\n      color: 0x00ff00\n    });\n    return new THREE.Mesh(this.geometry, this.material);\n  }\n  this.cubic = new cubic();\n\n  // define line\n  var line = function() {\n    var lineStyle = new THREE.LineBasicMaterial({\n      color: 'red'\n    });\n    var line_geometry = new THREE.Geometry();\n    line_geometry.vertices.push(new THREE.Vector3(-10, 0, 0));\n    line_geometry.vertices.push(new THREE.Vector3(0, 10, 0));\n    line_geometry.vertices.push(new THREE.Vector3(10, 0, 0));\n    return new THREE.Line(line_geometry, lineStyle);\n  }\n  \n  //scene.add(new line());\n  scene.add(this.cubic);\n\n  \n\n  var animate = function() {\n    requestAnimationFrame(animate);\n     this.cubic.rotation.x+=0.2;\n\n   \n    renderer.render(scene, this.camera);\n  };\n\n  animate();\n})();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tYWluLmpzP2ZiMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgdmFyIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gIHZhciBjYW1lcmEgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgdmlld19hbmdsZSA9IDMwLFxuICAgICAgICBhc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgbmVhciA9IDEsXG4gICAgICAgIGZhciA9IDEwMDA7XG4gICAgcmV0dXJuIChuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXG4gICAgICAgIHZpZXdfYW5nbGUsXG4gICAgICAgIGFzcGVjdCxcbiAgICAgICAgbmVhcixcbiAgICAgICAgZmFyXG4gICAgICApKTtcbiAgfVxuICB0aGlzLmNhbWVyYSA9IG5ldyBjYW1lcmEoKTtcbiAgdGhpcy5jYW1lcmEucG9zaXRpb24uc2V0KDAsMCw1KTtcbiAgXG5cbiAgdmFyIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcbiAgLy9yZW5kZXJlci5zZXRDbGVhckNvbG9yKCdyZWQnKTtcbiAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcblxuXG4gIC8vIGRlZmluZSBjdWJpY1xuICB2YXIgY3ViaWMgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpO1xuICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IDB4MDBmZjAwXG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xuICB9XG4gIHRoaXMuY3ViaWMgPSBuZXcgY3ViaWMoKTtcblxuICAvLyBkZWZpbmUgbGluZVxuICB2YXIgbGluZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsaW5lU3R5bGUgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6ICdyZWQnXG4gICAgfSk7XG4gICAgdmFyIGxpbmVfZ2VvbWV0cnkgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcbiAgICBsaW5lX2dlb21ldHJ5LnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoLTEwLCAwLCAwKSk7XG4gICAgbGluZV9nZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEwLCAwKSk7XG4gICAgbGluZV9nZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKDEwLCAwLCAwKSk7XG4gICAgcmV0dXJuIG5ldyBUSFJFRS5MaW5lKGxpbmVfZ2VvbWV0cnksIGxpbmVTdHlsZSk7XG4gIH1cbiAgXG4gIC8vc2NlbmUuYWRkKG5ldyBsaW5lKCkpO1xuICBzY2VuZS5hZGQodGhpcy5jdWJpYyk7XG5cbiAgXG5cbiAgdmFyIGFuaW1hdGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgIHRoaXMuY3ViaWMucm90YXRpb24ueCs9MC4yO1xuXG4gICBcbiAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgfTtcblxuICBhbmltYXRlKCk7XG59KSgpO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);