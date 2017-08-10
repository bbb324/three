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

eval("(function() {\n  var scene = new THREE.Scene();\n  var canvas = document.getElementById('canvas')\n  var camera = function() {\n    let view_angle = 45,\n      aspect = window.innerWidth / window.innerHeight,\n      near = 0.1,\n      far = 1000;\n    return (new THREE.PerspectiveCamera(\n      view_angle,\n      aspect,\n      near,\n      far\n    ));\n  };\n  this.camera = new camera();\n  this.camera.position.set(-30, 40, 30);\n  this.camera.lookAt(scene.position);\n  var renderer = new THREE.WebGLRenderer({canvas: canvas});\n  renderer.setClearColor(new THREE.Color(0xEEEEEE));\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  renderer.shadowMapEnabled = true; //能够显示阴影，但是对应的物体也要设置 castShadow = true\n  document.body.appendChild(renderer.domElement);\n  // show x,y axes 显示坐标轴\n  var axes = new THREE.AxisHelper(20);\n  //scene.fog = new THREE.Fog('red', 0.01, 200);\n  scene.add(axes);\n\n  //设置背景 需要从网络加载，本地加载会报跨域的错误\n  THREE.ImageUtils.crossOrigin = '';\n  var img = 'http://bpic.588ku.com/back_pic/03/92/40/4957e29f80d8a4a.jpg!ww650';\n  var grass = THREE.ImageUtils.loadTexture(img);\n\n\n  //设置地面\n  var plane = function() {\n    this.planeGeo = new THREE.PlaneGeometry(60, 30);  //长，宽\n    this.planeMat = new THREE.MeshLambertMaterial({  map: grass });\n    this.plane = new THREE.Mesh(this.planeGeo, this.planeMat);\n    this.plane.receiveShadow = true;\n    this.plane.rotation.x = -0.5 * Math.PI;\n    this.plane.position.set(15, 0, 0); // x,y,z\n    return this.plane;\n  };\n  //设置地面角度方便查看\n  this.ground = new plane();\n  scene.add(this.ground);\n\n  // 画个方块\n  var cubic = function() {\n    this.geometry = new THREE.BoxGeometry(4, 4, 4);\n    this.material = new THREE.MeshLambertMaterial({\n      color: 0xff0000\n    });\n    this.cube = new THREE.Mesh(this.geometry, this.material);\n    this.cube.position.set(-1, 4, 0);\n    this.cube.castShadow = true;\n    return this.cube;\n  };\n  this.cubic = new cubic();\n  scene.add(this.cubic);\n  // define line\n  var line = function() {\n    var lineStyle = new THREE.LineBasicMaterial({\n      color: 'red'\n    });\n    var line_geometry = new THREE.Geometry();\n    line_geometry.vertices.push(new THREE.Vector3(-10, 0, 0));\n    line_geometry.vertices.push(new THREE.Vector3(0, 10, 0));\n    line_geometry.vertices.push(new THREE.Vector3(10, 0, 0));\n    return new THREE.Line(line_geometry, lineStyle);\n  };\n  //画个球\n  var sphere = function() {\n    var obj = new THREE.SphereGeometry(4, 20, 20);\n    var meterial = new THREE.MeshBasicMaterial({ color: 0x999999, wireframe: true });\n    this.sp = new THREE.Mesh(obj, meterial);\n    this.sp.position.set(30, 10, 0);\n    return this.sp;\n  };\n  this.sphere = new sphere();\n  scene.add(this.sphere);\n  //照射光线\n  var spotLight = function() {\n    this.light = new THREE.SpotLight(0xffffff);\n    this.light.position.set(-40, 60, -10); //设置照射角度\n    this.light.castShadow = true;\n    return this.light;\n  };\n  this.spotLight = new spotLight();\n  scene.add(this.spotLight);\n  //环境光\n  var ambientLight = new THREE.AmbientLight(0x0c0c0c);\n  scene.add(ambientLight);\n\n\n  var controls = new function() {\n    this.rotationSpeed = 0.02;\n    this.bouncingSpeed = 0.03;\n    this.width = 0.2;\n  };\n\n  /* 可以通过 GUI 界面控制*/\n  var gui = new dat.GUI();\n  gui.add(controls, 'rotationSpeed', 0, 0.5);\n  gui.add(controls, 'width', 0, 0.5);\n  gui.add(controls, 'bouncingSpeed', 0, 0.5);\n\n  var step = 0;\n  var animate = function() {\n    requestAnimationFrame(animate);\n    this.cubic.rotation.x += controls.rotationSpeed;\n    this.cubic.rotation.y += controls.rotationSpeed;\n    this.cubic.rotation.z += controls.rotationSpeed;\n    // bounce the sphere up and down\n    step += 0.05;\n    this.sphere.position.x = 20 + (10 * (Math.cos(step)));\n    this.sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)));\n    this.sphere.position.x = controls.width;\n    renderer.render(scene, this.camera);\n  };\n\n  animate();\n\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tYWluLmpzP2ZiMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGVBQWU7QUFDekQ7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BELG1EQUFtRCxjQUFjO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsbUNBQW1DO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICB2YXIgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKVxuICB2YXIgY2FtZXJhID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHZpZXdfYW5nbGUgPSA0NSxcbiAgICAgIGFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgbmVhciA9IDAuMSxcbiAgICAgIGZhciA9IDEwMDA7XG4gICAgcmV0dXJuIChuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXG4gICAgICB2aWV3X2FuZ2xlLFxuICAgICAgYXNwZWN0LFxuICAgICAgbmVhcixcbiAgICAgIGZhclxuICAgICkpO1xuICB9O1xuICB0aGlzLmNhbWVyYSA9IG5ldyBjYW1lcmEoKTtcbiAgdGhpcy5jYW1lcmEucG9zaXRpb24uc2V0KC0zMCwgNDAsIDMwKTtcbiAgdGhpcy5jYW1lcmEubG9va0F0KHNjZW5lLnBvc2l0aW9uKTtcbiAgdmFyIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe2NhbnZhczogY2FudmFzfSk7XG4gIHJlbmRlcmVyLnNldENsZWFyQ29sb3IobmV3IFRIUkVFLkNvbG9yKDB4RUVFRUVFKSk7XG4gIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIHJlbmRlcmVyLnNoYWRvd01hcEVuYWJsZWQgPSB0cnVlOyAvL+iDveWkn+aYvuekuumYtOW9se+8jOS9huaYr+WvueW6lOeahOeJqeS9k+S5n+imgeiuvue9riBjYXN0U2hhZG93ID0gdHJ1ZVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAvLyBzaG93IHgseSBheGVzIOaYvuekuuWdkOagh+i9tFxuICB2YXIgYXhlcyA9IG5ldyBUSFJFRS5BeGlzSGVscGVyKDIwKTtcbiAgLy9zY2VuZS5mb2cgPSBuZXcgVEhSRUUuRm9nKCdyZWQnLCAwLjAxLCAyMDApO1xuICBzY2VuZS5hZGQoYXhlcyk7XG5cbiAgLy/orr7nva7og4zmma8g6ZyA6KaB5LuO572R57uc5Yqg6L2977yM5pys5Zyw5Yqg6L295Lya5oql6Leo5Z+f55qE6ZSZ6K+vXG4gIFRIUkVFLkltYWdlVXRpbHMuY3Jvc3NPcmlnaW4gPSAnJztcbiAgdmFyIGltZyA9ICdodHRwOi8vYnBpYy41ODhrdS5jb20vYmFja19waWMvMDMvOTIvNDAvNDk1N2UyOWY4MGQ4YTRhLmpwZyF3dzY1MCc7XG4gIHZhciBncmFzcyA9IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUoaW1nKTtcblxuXG4gIC8v6K6+572u5Zyw6Z2iXG4gIHZhciBwbGFuZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucGxhbmVHZW8gPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSg2MCwgMzApOyAgLy/plb/vvIzlrr1cbiAgICB0aGlzLnBsYW5lTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyAgbWFwOiBncmFzcyB9KTtcbiAgICB0aGlzLnBsYW5lID0gbmV3IFRIUkVFLk1lc2godGhpcy5wbGFuZUdlbywgdGhpcy5wbGFuZU1hdCk7XG4gICAgdGhpcy5wbGFuZS5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcbiAgICB0aGlzLnBsYW5lLnJvdGF0aW9uLnggPSAtMC41ICogTWF0aC5QSTtcbiAgICB0aGlzLnBsYW5lLnBvc2l0aW9uLnNldCgxNSwgMCwgMCk7IC8vIHgseSx6XG4gICAgcmV0dXJuIHRoaXMucGxhbmU7XG4gIH07XG4gIC8v6K6+572u5Zyw6Z2i6KeS5bqm5pa55L6/5p+l55yLXG4gIHRoaXMuZ3JvdW5kID0gbmV3IHBsYW5lKCk7XG4gIHNjZW5lLmFkZCh0aGlzLmdyb3VuZCk7XG5cbiAgLy8g55S75Liq5pa55Z2XXG4gIHZhciBjdWJpYyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNCwgNCwgNCk7XG4gICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiAweGZmMDAwMFxuICAgIH0pO1xuICAgIHRoaXMuY3ViZSA9IG5ldyBUSFJFRS5NZXNoKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xuICAgIHRoaXMuY3ViZS5wb3NpdGlvbi5zZXQoLTEsIDQsIDApO1xuICAgIHRoaXMuY3ViZS5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5jdWJlO1xuICB9O1xuICB0aGlzLmN1YmljID0gbmV3IGN1YmljKCk7XG4gIHNjZW5lLmFkZCh0aGlzLmN1YmljKTtcbiAgLy8gZGVmaW5lIGxpbmVcbiAgdmFyIGxpbmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGluZVN0eWxlID0gbmV3IFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiAncmVkJ1xuICAgIH0pO1xuICAgIHZhciBsaW5lX2dlb21ldHJ5ID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG4gICAgbGluZV9nZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKC0xMCwgMCwgMCkpO1xuICAgIGxpbmVfZ2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygwLCAxMCwgMCkpO1xuICAgIGxpbmVfZ2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygxMCwgMCwgMCkpO1xuICAgIHJldHVybiBuZXcgVEhSRUUuTGluZShsaW5lX2dlb21ldHJ5LCBsaW5lU3R5bGUpO1xuICB9O1xuICAvL+eUu+S4queQg1xuICB2YXIgc3BoZXJlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9iaiA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSg0LCAyMCwgMjApO1xuICAgIHZhciBtZXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweDk5OTk5OSwgd2lyZWZyYW1lOiB0cnVlIH0pO1xuICAgIHRoaXMuc3AgPSBuZXcgVEhSRUUuTWVzaChvYmosIG1ldGVyaWFsKTtcbiAgICB0aGlzLnNwLnBvc2l0aW9uLnNldCgzMCwgMTAsIDApO1xuICAgIHJldHVybiB0aGlzLnNwO1xuICB9O1xuICB0aGlzLnNwaGVyZSA9IG5ldyBzcGhlcmUoKTtcbiAgc2NlbmUuYWRkKHRoaXMuc3BoZXJlKTtcbiAgLy/nhaflsITlhYnnur9cbiAgdmFyIHNwb3RMaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuU3BvdExpZ2h0KDB4ZmZmZmZmKTtcbiAgICB0aGlzLmxpZ2h0LnBvc2l0aW9uLnNldCgtNDAsIDYwLCAtMTApOyAvL+iuvue9rueFp+WwhOinkuW6plxuICAgIHRoaXMubGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMubGlnaHQ7XG4gIH07XG4gIHRoaXMuc3BvdExpZ2h0ID0gbmV3IHNwb3RMaWdodCgpO1xuICBzY2VuZS5hZGQodGhpcy5zcG90TGlnaHQpO1xuICAvL+eOr+Wig+WFiVxuICB2YXIgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweDBjMGMwYyk7XG4gIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xuXG5cbiAgdmFyIGNvbnRyb2xzID0gbmV3IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucm90YXRpb25TcGVlZCA9IDAuMDI7XG4gICAgdGhpcy5ib3VuY2luZ1NwZWVkID0gMC4wMztcbiAgICB0aGlzLndpZHRoID0gMC4yO1xuICB9O1xuXG4gIC8qIOWPr+S7pemAmui/hyBHVUkg55WM6Z2i5o6n5Yi2Ki9cbiAgdmFyIGd1aSA9IG5ldyBkYXQuR1VJKCk7XG4gIGd1aS5hZGQoY29udHJvbHMsICdyb3RhdGlvblNwZWVkJywgMCwgMC41KTtcbiAgZ3VpLmFkZChjb250cm9scywgJ3dpZHRoJywgMCwgMC41KTtcbiAgZ3VpLmFkZChjb250cm9scywgJ2JvdW5jaW5nU3BlZWQnLCAwLCAwLjUpO1xuXG4gIHZhciBzdGVwID0gMDtcbiAgdmFyIGFuaW1hdGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgdGhpcy5jdWJpYy5yb3RhdGlvbi54ICs9IGNvbnRyb2xzLnJvdGF0aW9uU3BlZWQ7XG4gICAgdGhpcy5jdWJpYy5yb3RhdGlvbi55ICs9IGNvbnRyb2xzLnJvdGF0aW9uU3BlZWQ7XG4gICAgdGhpcy5jdWJpYy5yb3RhdGlvbi56ICs9IGNvbnRyb2xzLnJvdGF0aW9uU3BlZWQ7XG4gICAgLy8gYm91bmNlIHRoZSBzcGhlcmUgdXAgYW5kIGRvd25cbiAgICBzdGVwICs9IDAuMDU7XG4gICAgdGhpcy5zcGhlcmUucG9zaXRpb24ueCA9IDIwICsgKDEwICogKE1hdGguY29zKHN0ZXApKSk7XG4gICAgdGhpcy5zcGhlcmUucG9zaXRpb24ueSA9IDIgKyAoMTAgKiBNYXRoLmFicyhNYXRoLnNpbihzdGVwKSkpO1xuICAgIHRoaXMuc3BoZXJlLnBvc2l0aW9uLnggPSBjb250cm9scy53aWR0aDtcbiAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgfTtcblxuICBhbmltYXRlKCk7XG5cbn0pKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);