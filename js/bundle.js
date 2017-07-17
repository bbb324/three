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

eval("(function() {\n  var scene = new THREE.Scene();\n  var camera = function() {\n    let view_angle = 45,\n        aspect = window.innerWidth / window.innerHeight,\n        near = 0.1,\n        far = 1000;\n    return (new THREE.PerspectiveCamera(\n        view_angle,\n        aspect,\n        near,\n        far\n      ));\n  }\n  this.camera = new camera();\n  this.camera.position.set(-30, 40, 30);\n  this.camera.lookAt(scene.position);\n  \n\n  var renderer = new THREE.WebGLRenderer();\n  //renderer.setClearColor('red');\n   renderer.setClearColor(new THREE.Color(0xEEEEEE));\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  document.body.appendChild(renderer.domElement);\n\n  // show x,y axes\n  var axes = new THREE.AxisHelper(20);\n  scene.add(axes);\n\n  //设置地面\n  var plane = function() {\n    this.planeGeo = new THREE.PlaneGeometry(60, 20);\n    this.planeMat = new THREE.MeshBasicMaterial({color: 0xcccccc});\n    return new THREE.Mesh(this.planeGeo, this.planeMat);\n  }\n  //设置地面角度方便查看\n  this.plane = new plane();\n  this.plane.rotation.x = -0.5*Math.PI;\n  this.plane.position.x = 15;\n  this.plane.position.y = 0;\n  this.plane.position.z = 0;\n  scene.add(this.plane);\n\n\n  // 画个方块\n  var cubic = function() {\n    this.geometry = new THREE.BoxGeometry(10, 10, 10);\n    this.material = new THREE.MeshLambertMaterial({\n      color: 0xF3FFE2,\n      wireframe: true\n    });\n    return new THREE.Mesh(this.geometry, this.material);\n  }\n\n  this.cubic = new cubic();\n  this.cubic.position.y = 5;\n  scene.add(this.cubic);\n\n  // define line\n  var line = function() {\n    var lineStyle = new THREE.LineBasicMaterial({\n      color: 'red'\n    });\n    var line_geometry = new THREE.Geometry();\n    line_geometry.vertices.push(new THREE.Vector3(-10, 0, 0));\n    line_geometry.vertices.push(new THREE.Vector3(0, 10, 0));\n    line_geometry.vertices.push(new THREE.Vector3(10, 0, 0));\n    return new THREE.Line(line_geometry, lineStyle);\n  }\n\n  //画个球\n  var sphere = function() {\n    var obj = new THREE.SphereGeometry(4,20,20);\n    var meterial = new THREE.MeshBasicMaterial({ color: 0x999999, wireframe:true } );\n    return new THREE.Mesh(obj, meterial);\n  }\n  \n  this.sphere = new sphere();\n  this.sphere.position.x = 30;\n  this.sphere.position.y = 10;\n  scene.add(this.sphere);\n  \n\n  var animate = function() {\n    requestAnimationFrame(animate);\n    /*this.sphere.rotation.x+=0.02;\n    this.sphere.rotation.y+=0.02;*/\n    \n    renderer.render(scene, this.camera);\n  };\n\n  animate();\n\n})();\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tYWluLmpzP2ZiMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGdCQUFnQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGtDQUFrQztBQUNsRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICB2YXIgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgdmFyIGNhbWVyYSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCB2aWV3X2FuZ2xlID0gNDUsXG4gICAgICAgIGFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICBuZWFyID0gMC4xLFxuICAgICAgICBmYXIgPSAxMDAwO1xuICAgIHJldHVybiAobmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxuICAgICAgICB2aWV3X2FuZ2xlLFxuICAgICAgICBhc3BlY3QsXG4gICAgICAgIG5lYXIsXG4gICAgICAgIGZhclxuICAgICAgKSk7XG4gIH1cbiAgdGhpcy5jYW1lcmEgPSBuZXcgY2FtZXJhKCk7XG4gIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldCgtMzAsIDQwLCAzMCk7XG4gIHRoaXMuY2FtZXJhLmxvb2tBdChzY2VuZS5wb3NpdGlvbik7XG4gIFxuXG4gIHZhciByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XG4gIC8vcmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigncmVkJyk7XG4gICByZW5kZXJlci5zZXRDbGVhckNvbG9yKG5ldyBUSFJFRS5Db2xvcigweEVFRUVFRSkpO1xuICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gIC8vIHNob3cgeCx5IGF4ZXNcbiAgdmFyIGF4ZXMgPSBuZXcgVEhSRUUuQXhpc0hlbHBlcigyMCk7XG4gIHNjZW5lLmFkZChheGVzKTtcblxuICAvL+iuvue9ruWcsOmdolxuICB2YXIgcGxhbmUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnBsYW5lR2VvID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoNjAsIDIwKTtcbiAgICB0aGlzLnBsYW5lTWF0ID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtjb2xvcjogMHhjY2NjY2N9KTtcbiAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2godGhpcy5wbGFuZUdlbywgdGhpcy5wbGFuZU1hdCk7XG4gIH1cbiAgLy/orr7nva7lnLDpnaLop5Lluqbmlrnkvr/mn6XnnItcbiAgdGhpcy5wbGFuZSA9IG5ldyBwbGFuZSgpO1xuICB0aGlzLnBsYW5lLnJvdGF0aW9uLnggPSAtMC41Kk1hdGguUEk7XG4gIHRoaXMucGxhbmUucG9zaXRpb24ueCA9IDE1O1xuICB0aGlzLnBsYW5lLnBvc2l0aW9uLnkgPSAwO1xuICB0aGlzLnBsYW5lLnBvc2l0aW9uLnogPSAwO1xuICBzY2VuZS5hZGQodGhpcy5wbGFuZSk7XG5cblxuICAvLyDnlLvkuKrmlrnlnZdcbiAgdmFyIGN1YmljID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxMCwgMTAsIDEwKTtcbiAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IDB4RjNGRkUyLFxuICAgICAgd2lyZWZyYW1lOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xuICB9XG5cbiAgdGhpcy5jdWJpYyA9IG5ldyBjdWJpYygpO1xuICB0aGlzLmN1YmljLnBvc2l0aW9uLnkgPSA1O1xuICBzY2VuZS5hZGQodGhpcy5jdWJpYyk7XG5cbiAgLy8gZGVmaW5lIGxpbmVcbiAgdmFyIGxpbmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGluZVN0eWxlID0gbmV3IFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiAncmVkJ1xuICAgIH0pO1xuICAgIHZhciBsaW5lX2dlb21ldHJ5ID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG4gICAgbGluZV9nZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKC0xMCwgMCwgMCkpO1xuICAgIGxpbmVfZ2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygwLCAxMCwgMCkpO1xuICAgIGxpbmVfZ2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygxMCwgMCwgMCkpO1xuICAgIHJldHVybiBuZXcgVEhSRUUuTGluZShsaW5lX2dlb21ldHJ5LCBsaW5lU3R5bGUpO1xuICB9XG5cbiAgLy/nlLvkuKrnkINcbiAgdmFyIHNwaGVyZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvYmogPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoNCwyMCwyMCk7XG4gICAgdmFyIG1ldGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4OTk5OTk5LCB3aXJlZnJhbWU6dHJ1ZSB9ICk7XG4gICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoKG9iaiwgbWV0ZXJpYWwpO1xuICB9XG4gIFxuICB0aGlzLnNwaGVyZSA9IG5ldyBzcGhlcmUoKTtcbiAgdGhpcy5zcGhlcmUucG9zaXRpb24ueCA9IDMwO1xuICB0aGlzLnNwaGVyZS5wb3NpdGlvbi55ID0gMTA7XG4gIHNjZW5lLmFkZCh0aGlzLnNwaGVyZSk7XG4gIFxuXG4gIHZhciBhbmltYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgIC8qdGhpcy5zcGhlcmUucm90YXRpb24ueCs9MC4wMjtcbiAgICB0aGlzLnNwaGVyZS5yb3RhdGlvbi55Kz0wLjAyOyovXG4gICAgXG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCB0aGlzLmNhbWVyYSk7XG4gIH07XG5cbiAgYW5pbWF0ZSgpO1xuXG59KSgpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);