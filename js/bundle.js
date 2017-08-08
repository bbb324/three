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

eval("(function() {\n  var scene = new THREE.Scene();\n  var camera = function() {\n    let view_angle = 45,\n      aspect = window.innerWidth / window.innerHeight,\n      near = 0.1,\n      far = 1000;\n    return (new THREE.PerspectiveCamera(\n      view_angle,\n      aspect,\n      near,\n      far\n    ));\n  };\n  this.camera = new camera();\n  this.camera.position.set(-30, 40, 30);\n  this.camera.lookAt(scene.position);\n  var renderer = new THREE.WebGLRenderer();\n  renderer.setClearColor(new THREE.Color(0xEEEEEE));\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  renderer.shadowMapEnabled = true; //能够显示阴影，但是对应的物体也要设置 castShadow = true\n  document.body.appendChild(renderer.domElement);\n  // show x,y axes\n  var axes = new THREE.AxisHelper(20);\n  scene.add(axes);\n  //设置地面\n  var plane = function() {\n    this.planeGeo = new THREE.PlaneGeometry(60, 30);  //长，宽\n    this.planeMat = new THREE.MeshLambertMaterial({ color: 0xcccccc });\n    this.plane = new THREE.Mesh(this.planeGeo, this.planeMat);\n    this.plane.receiveShadow = true;\n    this.plane.rotation.x = -0.5 * Math.PI;\n    this.plane.position.set(15, 0, 0); // x,y,z\n    return this.plane;\n  };\n  //设置地面角度方便查看\n  this.ground = new plane();\n  scene.add(this.ground);\n\n  // 画个方块\n  var cubic = function() {\n    this.geometry = new THREE.BoxGeometry(4, 4, 4);\n    this.material = new THREE.MeshLambertMaterial({\n      color: 0xff0000\n    });\n    this.cube = new THREE.Mesh(this.geometry, this.material);\n    this.cube.position.set(-1, 4, 0);\n    this.cube.castShadow = true;\n    return this.cube;\n  };\n  this.cubic = new cubic();\n  scene.add(this.cubic);\n  // define line\n  var line = function() {\n    var lineStyle = new THREE.LineBasicMaterial({\n      color: 'red'\n    });\n    var line_geometry = new THREE.Geometry();\n    line_geometry.vertices.push(new THREE.Vector3(-10, 0, 0));\n    line_geometry.vertices.push(new THREE.Vector3(0, 10, 0));\n    line_geometry.vertices.push(new THREE.Vector3(10, 0, 0));\n    return new THREE.Line(line_geometry, lineStyle);\n  };\n  //画个球\n  var sphere = function() {\n    var obj = new THREE.SphereGeometry(4, 20, 20);\n    var meterial = new THREE.MeshBasicMaterial({ color: 0x999999, wireframe: true });\n    this.sp = new THREE.Mesh(obj, meterial);\n    this.sp.position.set(30, 10, 0);\n    return this.sp;\n  };\n  this.sphere = new sphere();\n  scene.add(this.sphere);\n  //照射光线\n  var spotLight = function() {\n    this.light = new THREE.SpotLight(0xffffff);\n    this.light.position.set(-40, 60, -10); //设置照射角度\n    this.light.castShadow = true;\n    return this.light;\n  };\n  this.spotLight = new spotLight();\n  scene.add(this.spotLight);\n  //环境光\n  var ambientLight = new THREE.AmbientLight(0x0c0c0c);\n  scene.add(ambientLight);\n\n\n  var controls = new function() {\n    this.rotationSpeed = 0.02;\n    this.bouncingSpeed = 0.03;\n    this.width = 0.2;\n  };\n\n  /* 可以通过 GUI 界面控制*/\n  var gui = new dat.GUI();\n  gui.add(controls, 'rotationSpeed', 0, 0.5);\n  gui.add(controls, 'width', 0, 0.5);\n  gui.add(controls, 'bouncingSpeed', 0, 0.5);\n\n  var step = 0;\n  var animate = function() {\n    requestAnimationFrame(animate);\n    this.cubic.rotation.x += controls.rotationSpeed;\n    this.cubic.rotation.y += controls.rotationSpeed;\n    this.cubic.rotation.z += controls.rotationSpeed;\n    // bounce the sphere up and down\n    step += 0.05;\n    this.sphere.position.x = 20 + (10 * (Math.cos(step)));\n    this.sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)));\n    this.sphere.position.x = controls.width;\n    renderer.render(scene, this.camera);\n  };\n\n  animate();\n\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tYWluLmpzP2ZiMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQsbURBQW1ELGtCQUFrQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELG1DQUFtQztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgdmFyIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gIHZhciBjYW1lcmEgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgdmlld19hbmdsZSA9IDQ1LFxuICAgICAgYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICBuZWFyID0gMC4xLFxuICAgICAgZmFyID0gMTAwMDtcbiAgICByZXR1cm4gKG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcbiAgICAgIHZpZXdfYW5nbGUsXG4gICAgICBhc3BlY3QsXG4gICAgICBuZWFyLFxuICAgICAgZmFyXG4gICAgKSk7XG4gIH07XG4gIHRoaXMuY2FtZXJhID0gbmV3IGNhbWVyYSgpO1xuICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoLTMwLCA0MCwgMzApO1xuICB0aGlzLmNhbWVyYS5sb29rQXQoc2NlbmUucG9zaXRpb24pO1xuICB2YXIgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xuICByZW5kZXJlci5zZXRDbGVhckNvbG9yKG5ldyBUSFJFRS5Db2xvcigweEVFRUVFRSkpO1xuICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICByZW5kZXJlci5zaGFkb3dNYXBFbmFibGVkID0gdHJ1ZTsgLy/og73lpJ/mmL7npLrpmLTlvbHvvIzkvYbmmK/lr7nlupTnmoTniankvZPkuZ/opoHorr7nva4gY2FzdFNoYWRvdyA9IHRydWVcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcbiAgLy8gc2hvdyB4LHkgYXhlc1xuICB2YXIgYXhlcyA9IG5ldyBUSFJFRS5BeGlzSGVscGVyKDIwKTtcbiAgc2NlbmUuYWRkKGF4ZXMpO1xuICAvL+iuvue9ruWcsOmdolxuICB2YXIgcGxhbmUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnBsYW5lR2VvID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoNjAsIDMwKTsgIC8v6ZW/77yM5a69XG4gICAgdGhpcy5wbGFuZU1hdCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHsgY29sb3I6IDB4Y2NjY2NjIH0pO1xuICAgIHRoaXMucGxhbmUgPSBuZXcgVEhSRUUuTWVzaCh0aGlzLnBsYW5lR2VvLCB0aGlzLnBsYW5lTWF0KTtcbiAgICB0aGlzLnBsYW5lLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuICAgIHRoaXMucGxhbmUucm90YXRpb24ueCA9IC0wLjUgKiBNYXRoLlBJO1xuICAgIHRoaXMucGxhbmUucG9zaXRpb24uc2V0KDE1LCAwLCAwKTsgLy8geCx5LHpcbiAgICByZXR1cm4gdGhpcy5wbGFuZTtcbiAgfTtcbiAgLy/orr7nva7lnLDpnaLop5Lluqbmlrnkvr/mn6XnnItcbiAgdGhpcy5ncm91bmQgPSBuZXcgcGxhbmUoKTtcbiAgc2NlbmUuYWRkKHRoaXMuZ3JvdW5kKTtcblxuICAvLyDnlLvkuKrmlrnlnZdcbiAgdmFyIGN1YmljID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg0LCA0LCA0KTtcbiAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IDB4ZmYwMDAwXG4gICAgfSk7XG4gICAgdGhpcy5jdWJlID0gbmV3IFRIUkVFLk1lc2godGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XG4gICAgdGhpcy5jdWJlLnBvc2l0aW9uLnNldCgtMSwgNCwgMCk7XG4gICAgdGhpcy5jdWJlLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLmN1YmU7XG4gIH07XG4gIHRoaXMuY3ViaWMgPSBuZXcgY3ViaWMoKTtcbiAgc2NlbmUuYWRkKHRoaXMuY3ViaWMpO1xuICAvLyBkZWZpbmUgbGluZVxuICB2YXIgbGluZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsaW5lU3R5bGUgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6ICdyZWQnXG4gICAgfSk7XG4gICAgdmFyIGxpbmVfZ2VvbWV0cnkgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcbiAgICBsaW5lX2dlb21ldHJ5LnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoLTEwLCAwLCAwKSk7XG4gICAgbGluZV9nZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEwLCAwKSk7XG4gICAgbGluZV9nZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKDEwLCAwLCAwKSk7XG4gICAgcmV0dXJuIG5ldyBUSFJFRS5MaW5lKGxpbmVfZ2VvbWV0cnksIGxpbmVTdHlsZSk7XG4gIH07XG4gIC8v55S75Liq55CDXG4gIHZhciBzcGhlcmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgb2JqID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDQsIDIwLCAyMCk7XG4gICAgdmFyIG1ldGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4OTk5OTk5LCB3aXJlZnJhbWU6IHRydWUgfSk7XG4gICAgdGhpcy5zcCA9IG5ldyBUSFJFRS5NZXNoKG9iaiwgbWV0ZXJpYWwpO1xuICAgIHRoaXMuc3AucG9zaXRpb24uc2V0KDMwLCAxMCwgMCk7XG4gICAgcmV0dXJuIHRoaXMuc3A7XG4gIH07XG4gIHRoaXMuc3BoZXJlID0gbmV3IHNwaGVyZSgpO1xuICBzY2VuZS5hZGQodGhpcy5zcGhlcmUpO1xuICAvL+eFp+WwhOWFiee6v1xuICB2YXIgc3BvdExpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5saWdodCA9IG5ldyBUSFJFRS5TcG90TGlnaHQoMHhmZmZmZmYpO1xuICAgIHRoaXMubGlnaHQucG9zaXRpb24uc2V0KC00MCwgNjAsIC0xMCk7IC8v6K6+572u54Wn5bCE6KeS5bqmXG4gICAgdGhpcy5saWdodC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5saWdodDtcbiAgfTtcbiAgdGhpcy5zcG90TGlnaHQgPSBuZXcgc3BvdExpZ2h0KCk7XG4gIHNjZW5lLmFkZCh0aGlzLnNwb3RMaWdodCk7XG4gIC8v546v5aKD5YWJXG4gIHZhciBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4MGMwYzBjKTtcbiAgc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XG5cblxuICB2YXIgY29udHJvbHMgPSBuZXcgZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yb3RhdGlvblNwZWVkID0gMC4wMjtcbiAgICB0aGlzLmJvdW5jaW5nU3BlZWQgPSAwLjAzO1xuICAgIHRoaXMud2lkdGggPSAwLjI7XG4gIH07XG5cbiAgLyog5Y+v5Lul6YCa6L+HIEdVSSDnlYzpnaLmjqfliLYqL1xuICB2YXIgZ3VpID0gbmV3IGRhdC5HVUkoKTtcbiAgZ3VpLmFkZChjb250cm9scywgJ3JvdGF0aW9uU3BlZWQnLCAwLCAwLjUpO1xuICBndWkuYWRkKGNvbnRyb2xzLCAnd2lkdGgnLCAwLCAwLjUpO1xuICBndWkuYWRkKGNvbnRyb2xzLCAnYm91bmNpbmdTcGVlZCcsIDAsIDAuNSk7XG5cbiAgdmFyIHN0ZXAgPSAwO1xuICB2YXIgYW5pbWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICB0aGlzLmN1YmljLnJvdGF0aW9uLnggKz0gY29udHJvbHMucm90YXRpb25TcGVlZDtcbiAgICB0aGlzLmN1YmljLnJvdGF0aW9uLnkgKz0gY29udHJvbHMucm90YXRpb25TcGVlZDtcbiAgICB0aGlzLmN1YmljLnJvdGF0aW9uLnogKz0gY29udHJvbHMucm90YXRpb25TcGVlZDtcbiAgICAvLyBib3VuY2UgdGhlIHNwaGVyZSB1cCBhbmQgZG93blxuICAgIHN0ZXAgKz0gMC4wNTtcbiAgICB0aGlzLnNwaGVyZS5wb3NpdGlvbi54ID0gMjAgKyAoMTAgKiAoTWF0aC5jb3Moc3RlcCkpKTtcbiAgICB0aGlzLnNwaGVyZS5wb3NpdGlvbi55ID0gMiArICgxMCAqIE1hdGguYWJzKE1hdGguc2luKHN0ZXApKSk7XG4gICAgdGhpcy5zcGhlcmUucG9zaXRpb24ueCA9IGNvbnRyb2xzLndpZHRoO1xuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgdGhpcy5jYW1lcmEpO1xuICB9O1xuXG4gIGFuaW1hdGUoKTtcblxufSkoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);