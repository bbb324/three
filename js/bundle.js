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

eval("(function() {\n  var scene = new THREE.Scene();\n  var camera = function() {\n    let view_angle = 45,\n      aspect = window.innerWidth / window.innerHeight,\n      near = 0.1,\n      far = 1000;\n    return (new THREE.PerspectiveCamera(\n      view_angle,\n      aspect,\n      near,\n      far\n    ));\n  };\n  this.camera = new camera();\n  this.camera.position.set(-30, 40, 30);\n  this.camera.lookAt(scene.position);\n  var renderer = new THREE.WebGLRenderer();\n  renderer.setClearColor(new THREE.Color(0xEEEEEE));\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  renderer.shadowMapEnabled = true; //能够显示阴影，但是对应的物体也要设置 castShadow = true\n  document.body.appendChild(renderer.domElement);\n  // show x,y axes\n  var axes = new THREE.AxisHelper(20);\n  scene.add(axes);\n  //设置地面\n  var plane = function() {\n    this.planeGeo = new THREE.PlaneGeometry(60, 20);\n    this.planeMat = new THREE.MeshLambertMaterial({ color: 0xcccccc });\n    this.plane = new THREE.Mesh(this.planeGeo, this.planeMat);\n    this.plane.receiveShadow = true;\n    this.plane.rotation.x = -0.5 * Math.PI;\n    this.plane.position.set(15, 0, 0);\n    return this.plane;\n  };\n  //设置地面角度方便查看\n  this.ground = new plane();\n  scene.add(this.ground);\n\n  // 画个方块\n  var cubic = function() {\n    this.geometry = new THREE.BoxGeometry(4, 4, 4);\n    this.material = new THREE.MeshLambertMaterial({\n      color: 0xff0000\n    });\n    this.cube = new THREE.Mesh(this.geometry, this.material);\n    this.cube.position.set(-1, 4, 0);\n    this.cube.castShadow = true;\n    return this.cube;\n  };\n  this.cubic = new cubic();\n  scene.add(this.cubic);\n  // define line\n  var line = function() {\n    var lineStyle = new THREE.LineBasicMaterial({\n      color: 'red'\n    });\n    var line_geometry = new THREE.Geometry();\n    line_geometry.vertices.push(new THREE.Vector3(-10, 0, 0));\n    line_geometry.vertices.push(new THREE.Vector3(0, 10, 0));\n    line_geometry.vertices.push(new THREE.Vector3(10, 0, 0));\n    return new THREE.Line(line_geometry, lineStyle);\n  };\n  //画个球\n  var sphere = function() {\n    var obj = new THREE.SphereGeometry(4, 20, 20);\n    var meterial = new THREE.MeshBasicMaterial({ color: 0x999999, wireframe: true });\n    this.sp = new THREE.Mesh(obj, meterial);\n    this.sp.position.set(30, 10, 0);\n    return this.sp;\n  };\n  this.sphere = new sphere();\n  scene.add(this.sphere);\n  //照射光线\n  var spotLight = function() {\n    this.light = new THREE.SpotLight(0xffffff);\n    this.light.position.set(-40, 60, -10); //设置照射角度\n    this.light.castShadow = true;\n    return this.light;\n  };\n  this.spotLight = new spotLight();\n  scene.add(this.spotLight);\n  //环境光\n  var ambientLight = new THREE.AmbientLight(0x0c0c0c);\n  scene.add(ambientLight);\n\n\n  var controls = new function() {\n    this.rotationSpeed = 0.02;\n    this.bouncingSpeed = 0.03;\n  };\n\n  var gui = new dat.GUI();\n  gui.add(controls, 'rotationSpeed', 0, 0.5);\n  gui.add(controls, 'bouncingSpeed', 0, 0.5);\n\n  var step = 0;\n  var animate = function() {\n    requestAnimationFrame(animate);\n    this.cubic.rotation.x += controls.rotationSpeed;\n    this.cubic.rotation.y += controls.rotationSpeed;\n    this.cubic.rotation.z += controls.rotationSpeed;\n    // bounce the sphere up and down\n    step += 0.05;\n    this.sphere.position.x = 20 + (10 * (Math.cos(step)));\n    this.sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)));\n    renderer.render(scene, this.camera);\n  };\n\n  animate();\n\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tYWluLmpzP2ZiMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxrQkFBa0I7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsbUNBQW1DO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgdmFyIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gIHZhciBjYW1lcmEgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgdmlld19hbmdsZSA9IDQ1LFxuICAgICAgYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICBuZWFyID0gMC4xLFxuICAgICAgZmFyID0gMTAwMDtcbiAgICByZXR1cm4gKG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcbiAgICAgIHZpZXdfYW5nbGUsXG4gICAgICBhc3BlY3QsXG4gICAgICBuZWFyLFxuICAgICAgZmFyXG4gICAgKSk7XG4gIH07XG4gIHRoaXMuY2FtZXJhID0gbmV3IGNhbWVyYSgpO1xuICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoLTMwLCA0MCwgMzApO1xuICB0aGlzLmNhbWVyYS5sb29rQXQoc2NlbmUucG9zaXRpb24pO1xuICB2YXIgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xuICByZW5kZXJlci5zZXRDbGVhckNvbG9yKG5ldyBUSFJFRS5Db2xvcigweEVFRUVFRSkpO1xuICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICByZW5kZXJlci5zaGFkb3dNYXBFbmFibGVkID0gdHJ1ZTsgLy/og73lpJ/mmL7npLrpmLTlvbHvvIzkvYbmmK/lr7nlupTnmoTniankvZPkuZ/opoHorr7nva4gY2FzdFNoYWRvdyA9IHRydWVcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcbiAgLy8gc2hvdyB4LHkgYXhlc1xuICB2YXIgYXhlcyA9IG5ldyBUSFJFRS5BeGlzSGVscGVyKDIwKTtcbiAgc2NlbmUuYWRkKGF4ZXMpO1xuICAvL+iuvue9ruWcsOmdolxuICB2YXIgcGxhbmUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnBsYW5lR2VvID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoNjAsIDIwKTtcbiAgICB0aGlzLnBsYW5lTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBjb2xvcjogMHhjY2NjY2MgfSk7XG4gICAgdGhpcy5wbGFuZSA9IG5ldyBUSFJFRS5NZXNoKHRoaXMucGxhbmVHZW8sIHRoaXMucGxhbmVNYXQpO1xuICAgIHRoaXMucGxhbmUucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG4gICAgdGhpcy5wbGFuZS5yb3RhdGlvbi54ID0gLTAuNSAqIE1hdGguUEk7XG4gICAgdGhpcy5wbGFuZS5wb3NpdGlvbi5zZXQoMTUsIDAsIDApO1xuICAgIHJldHVybiB0aGlzLnBsYW5lO1xuICB9O1xuICAvL+iuvue9ruWcsOmdouinkuW6puaWueS+v+afpeeci1xuICB0aGlzLmdyb3VuZCA9IG5ldyBwbGFuZSgpO1xuICBzY2VuZS5hZGQodGhpcy5ncm91bmQpO1xuXG4gIC8vIOeUu+S4quaWueWdl1xuICB2YXIgY3ViaWMgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDQsIDQsIDQpO1xuICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogMHhmZjAwMDBcbiAgICB9KTtcbiAgICB0aGlzLmN1YmUgPSBuZXcgVEhSRUUuTWVzaCh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcbiAgICB0aGlzLmN1YmUucG9zaXRpb24uc2V0KC0xLCA0LCAwKTtcbiAgICB0aGlzLmN1YmUuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuY3ViZTtcbiAgfTtcbiAgdGhpcy5jdWJpYyA9IG5ldyBjdWJpYygpO1xuICBzY2VuZS5hZGQodGhpcy5jdWJpYyk7XG4gIC8vIGRlZmluZSBsaW5lXG4gIHZhciBsaW5lID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxpbmVTdHlsZSA9IG5ldyBUSFJFRS5MaW5lQmFzaWNNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogJ3JlZCdcbiAgICB9KTtcbiAgICB2YXIgbGluZV9nZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuICAgIGxpbmVfZ2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygtMTAsIDAsIDApKTtcbiAgICBsaW5lX2dlb21ldHJ5LnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoMCwgMTAsIDApKTtcbiAgICBsaW5lX2dlb21ldHJ5LnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoMTAsIDAsIDApKTtcbiAgICByZXR1cm4gbmV3IFRIUkVFLkxpbmUobGluZV9nZW9tZXRyeSwgbGluZVN0eWxlKTtcbiAgfTtcbiAgLy/nlLvkuKrnkINcbiAgdmFyIHNwaGVyZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvYmogPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoNCwgMjAsIDIwKTtcbiAgICB2YXIgbWV0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHg5OTk5OTksIHdpcmVmcmFtZTogdHJ1ZSB9KTtcbiAgICB0aGlzLnNwID0gbmV3IFRIUkVFLk1lc2gob2JqLCBtZXRlcmlhbCk7XG4gICAgdGhpcy5zcC5wb3NpdGlvbi5zZXQoMzAsIDEwLCAwKTtcbiAgICByZXR1cm4gdGhpcy5zcDtcbiAgfTtcbiAgdGhpcy5zcGhlcmUgPSBuZXcgc3BoZXJlKCk7XG4gIHNjZW5lLmFkZCh0aGlzLnNwaGVyZSk7XG4gIC8v54Wn5bCE5YWJ57q/XG4gIHZhciBzcG90TGlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmxpZ2h0ID0gbmV3IFRIUkVFLlNwb3RMaWdodCgweGZmZmZmZik7XG4gICAgdGhpcy5saWdodC5wb3NpdGlvbi5zZXQoLTQwLCA2MCwgLTEwKTsgLy/orr7nva7nhaflsITop5LluqZcbiAgICB0aGlzLmxpZ2h0LmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLmxpZ2h0O1xuICB9O1xuICB0aGlzLnNwb3RMaWdodCA9IG5ldyBzcG90TGlnaHQoKTtcbiAgc2NlbmUuYWRkKHRoaXMuc3BvdExpZ2h0KTtcbiAgLy/njq/looPlhYlcbiAgdmFyIGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHgwYzBjMGMpO1xuICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcblxuXG4gIHZhciBjb250cm9scyA9IG5ldyBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJvdGF0aW9uU3BlZWQgPSAwLjAyO1xuICAgIHRoaXMuYm91bmNpbmdTcGVlZCA9IDAuMDM7XG4gIH07XG5cbiAgdmFyIGd1aSA9IG5ldyBkYXQuR1VJKCk7XG4gIGd1aS5hZGQoY29udHJvbHMsICdyb3RhdGlvblNwZWVkJywgMCwgMC41KTtcbiAgZ3VpLmFkZChjb250cm9scywgJ2JvdW5jaW5nU3BlZWQnLCAwLCAwLjUpO1xuXG4gIHZhciBzdGVwID0gMDtcbiAgdmFyIGFuaW1hdGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgdGhpcy5jdWJpYy5yb3RhdGlvbi54ICs9IGNvbnRyb2xzLnJvdGF0aW9uU3BlZWQ7XG4gICAgdGhpcy5jdWJpYy5yb3RhdGlvbi55ICs9IGNvbnRyb2xzLnJvdGF0aW9uU3BlZWQ7XG4gICAgdGhpcy5jdWJpYy5yb3RhdGlvbi56ICs9IGNvbnRyb2xzLnJvdGF0aW9uU3BlZWQ7XG4gICAgLy8gYm91bmNlIHRoZSBzcGhlcmUgdXAgYW5kIGRvd25cbiAgICBzdGVwICs9IDAuMDU7XG4gICAgdGhpcy5zcGhlcmUucG9zaXRpb24ueCA9IDIwICsgKDEwICogKE1hdGguY29zKHN0ZXApKSk7XG4gICAgdGhpcy5zcGhlcmUucG9zaXRpb24ueSA9IDIgKyAoMTAgKiBNYXRoLmFicyhNYXRoLnNpbihzdGVwKSkpO1xuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgdGhpcy5jYW1lcmEpO1xuICB9O1xuXG4gIGFuaW1hdGUoKTtcblxufSkoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);