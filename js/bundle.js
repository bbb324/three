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

eval("(function() {\n\n    var scene = new THREE.Scene();\n    var camera = function() {\n        let view_angle = 45,\n            aspect = window.innerWidth / window.innerHeight,\n            near = 0.1,\n            far = 1000;\n        return (new THREE.PerspectiveCamera(\n            view_angle,\n            aspect,\n            near,\n            far\n        ));\n    }\n    this.camera = new camera();\n    this.camera.position.set(-30, 40, 30);\n    this.camera.lookAt(scene.position);\n\n\n    var renderer = new THREE.WebGLRenderer();\n    renderer.setClearColor(new THREE.Color(0xEEEEEE));\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.shadowMapEnabled = true; //能够显示阴影，但是对应的物体也要设置 castShadow = true\n    document.body.appendChild(renderer.domElement);\n\n    // show x,y axes\n    var axes = new THREE.AxisHelper(20);\n    scene.add(axes);\n\n    //设置地面\n    var plane = function() {\n        this.planeGeo = new THREE.PlaneGeometry(60, 20);\n        this.planeMat = new THREE.MeshLambertMaterial({ color: 0xcccccc });\n        this.plane = new THREE.Mesh(this.planeGeo, this.planeMat);\n        this.plane.receiveShadow = true;\n        this.plane.rotation.x = -0.5 * Math.PI;\n        this.plane.position.set(15, 0, 0);\n        return this.plane;\n    }\n    //设置地面角度方便查看\n    this.ground = new plane();\n    scene.add(this.ground);\n\n\n    // 画个方块\n    var cubic = function() {\n        this.geometry = new THREE.BoxGeometry(4, 4, 4);\n        this.material = new THREE.MeshLambertMaterial({\n            color: 0xff0000\n        });\n        this.cube = new THREE.Mesh(this.geometry, this.material);\n        this.cube.position.set(-1, 4, 0);\n        this.cube.castShadow = true;\n        return this.cube;\n    }\n    this.cubic = new cubic();\n    scene.add(this.cubic);\n\n    // define line\n    var line = function() {\n        var lineStyle = new THREE.LineBasicMaterial({\n            color: 'red'\n        });\n        var line_geometry = new THREE.Geometry();\n        line_geometry.vertices.push(new THREE.Vector3(-10, 0, 0));\n        line_geometry.vertices.push(new THREE.Vector3(0, 10, 0));\n        line_geometry.vertices.push(new THREE.Vector3(10, 0, 0));\n        return new THREE.Line(line_geometry, lineStyle);\n    }\n\n    //画个球\n    var sphere = function() {\n        var obj = new THREE.SphereGeometry(4, 20, 20);\n        var meterial = new THREE.MeshBasicMaterial({ color: 0x999999, wireframe: true });\n        this.sp = new THREE.Mesh(obj, meterial);\n        this.sp.position.set(30, 10, 0);\n        return this.sp;\n    }\n    this.sphere = new sphere();\n    scene.add(this.sphere);\n\n    //照射光线\n    var spotLight = function() {\n        this.light = new THREE.SpotLight(0xffffff);\n        this.light.position.set(-40, 60, -10); //设置照射角度\n        this.light.castShadow = true;\n        return this.light;\n    }\n    this.spotLight = new spotLight();\n    scene.add(this.spotLight);\n\n    //环境光\n    var ambientLight = new THREE.AmbientLight(0x0c0c0c);\n    scene.add(ambientLight);\n\n    var step = 0;\n    var animate = function() {\n        requestAnimationFrame(animate);\n        this.cubic.rotation.x += 0.02;\n        this.cubic.rotation.y += 0.02;\n        this.cubic.rotation.z += 0.02;\n        // bounce the sphere up and down\n        step += 0.05;\n        this.sphere.position.x = 20 + (10 * (Math.cos(step)));\n        this.sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)));\n        renderer.render(scene, this.camera);\n    };\n\n    animate();\n\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tYWluLmpzP2ZiMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGtCQUFrQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxtQ0FBbUM7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgdmFyIGNhbWVyYSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgdmlld19hbmdsZSA9IDQ1LFxuICAgICAgICAgICAgYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICBuZWFyID0gMC4xLFxuICAgICAgICAgICAgZmFyID0gMTAwMDtcbiAgICAgICAgcmV0dXJuIChuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXG4gICAgICAgICAgICB2aWV3X2FuZ2xlLFxuICAgICAgICAgICAgYXNwZWN0LFxuICAgICAgICAgICAgbmVhcixcbiAgICAgICAgICAgIGZhclxuICAgICAgICApKTtcbiAgICB9XG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgY2FtZXJhKCk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24uc2V0KC0zMCwgNDAsIDMwKTtcbiAgICB0aGlzLmNhbWVyYS5sb29rQXQoc2NlbmUucG9zaXRpb24pO1xuXG5cbiAgICB2YXIgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IobmV3IFRIUkVFLkNvbG9yKDB4RUVFRUVFKSk7XG4gICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICByZW5kZXJlci5zaGFkb3dNYXBFbmFibGVkID0gdHJ1ZTsgLy/og73lpJ/mmL7npLrpmLTlvbHvvIzkvYbmmK/lr7nlupTnmoTniankvZPkuZ/opoHorr7nva4gY2FzdFNoYWRvdyA9IHRydWVcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gICAgLy8gc2hvdyB4LHkgYXhlc1xuICAgIHZhciBheGVzID0gbmV3IFRIUkVFLkF4aXNIZWxwZXIoMjApO1xuICAgIHNjZW5lLmFkZChheGVzKTtcblxuICAgIC8v6K6+572u5Zyw6Z2iXG4gICAgdmFyIHBsYW5lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMucGxhbmVHZW8gPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSg2MCwgMjApO1xuICAgICAgICB0aGlzLnBsYW5lTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBjb2xvcjogMHhjY2NjY2MgfSk7XG4gICAgICAgIHRoaXMucGxhbmUgPSBuZXcgVEhSRUUuTWVzaCh0aGlzLnBsYW5lR2VvLCB0aGlzLnBsYW5lTWF0KTtcbiAgICAgICAgdGhpcy5wbGFuZS5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wbGFuZS5yb3RhdGlvbi54ID0gLTAuNSAqIE1hdGguUEk7XG4gICAgICAgIHRoaXMucGxhbmUucG9zaXRpb24uc2V0KDE1LCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhbmU7XG4gICAgfVxuICAgIC8v6K6+572u5Zyw6Z2i6KeS5bqm5pa55L6/5p+l55yLXG4gICAgdGhpcy5ncm91bmQgPSBuZXcgcGxhbmUoKTtcbiAgICBzY2VuZS5hZGQodGhpcy5ncm91bmQpO1xuXG5cbiAgICAvLyDnlLvkuKrmlrnlnZdcbiAgICB2YXIgY3ViaWMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg0LCA0LCA0KTtcbiAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtcbiAgICAgICAgICAgIGNvbG9yOiAweGZmMDAwMFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jdWJlID0gbmV3IFRIUkVFLk1lc2godGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XG4gICAgICAgIHRoaXMuY3ViZS5wb3NpdGlvbi5zZXQoLTEsIDQsIDApO1xuICAgICAgICB0aGlzLmN1YmUuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLmN1YmU7XG4gICAgfVxuICAgIHRoaXMuY3ViaWMgPSBuZXcgY3ViaWMoKTtcbiAgICBzY2VuZS5hZGQodGhpcy5jdWJpYyk7XG5cbiAgICAvLyBkZWZpbmUgbGluZVxuICAgIHZhciBsaW5lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsaW5lU3R5bGUgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoe1xuICAgICAgICAgICAgY29sb3I6ICdyZWQnXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbGluZV9nZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuICAgICAgICBsaW5lX2dlb21ldHJ5LnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoLTEwLCAwLCAwKSk7XG4gICAgICAgIGxpbmVfZ2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygwLCAxMCwgMCkpO1xuICAgICAgICBsaW5lX2dlb21ldHJ5LnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoMTAsIDAsIDApKTtcbiAgICAgICAgcmV0dXJuIG5ldyBUSFJFRS5MaW5lKGxpbmVfZ2VvbWV0cnksIGxpbmVTdHlsZSk7XG4gICAgfVxuXG4gICAgLy/nlLvkuKrnkINcbiAgICB2YXIgc3BoZXJlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvYmogPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoNCwgMjAsIDIwKTtcbiAgICAgICAgdmFyIG1ldGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4OTk5OTk5LCB3aXJlZnJhbWU6IHRydWUgfSk7XG4gICAgICAgIHRoaXMuc3AgPSBuZXcgVEhSRUUuTWVzaChvYmosIG1ldGVyaWFsKTtcbiAgICAgICAgdGhpcy5zcC5wb3NpdGlvbi5zZXQoMzAsIDEwLCAwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3A7XG4gICAgfVxuICAgIHRoaXMuc3BoZXJlID0gbmV3IHNwaGVyZSgpO1xuICAgIHNjZW5lLmFkZCh0aGlzLnNwaGVyZSk7XG5cbiAgICAvL+eFp+WwhOWFiee6v1xuICAgIHZhciBzcG90TGlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5saWdodCA9IG5ldyBUSFJFRS5TcG90TGlnaHQoMHhmZmZmZmYpO1xuICAgICAgICB0aGlzLmxpZ2h0LnBvc2l0aW9uLnNldCgtNDAsIDYwLCAtMTApOyAvL+iuvue9rueFp+WwhOinkuW6plxuICAgICAgICB0aGlzLmxpZ2h0LmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy5saWdodDtcbiAgICB9XG4gICAgdGhpcy5zcG90TGlnaHQgPSBuZXcgc3BvdExpZ2h0KCk7XG4gICAgc2NlbmUuYWRkKHRoaXMuc3BvdExpZ2h0KTtcblxuICAgIC8v546v5aKD5YWJXG4gICAgdmFyIGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHgwYzBjMGMpO1xuICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xuXG4gICAgdmFyIHN0ZXAgPSAwO1xuICAgIHZhciBhbmltYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgdGhpcy5jdWJpYy5yb3RhdGlvbi54ICs9IDAuMDI7XG4gICAgICAgIHRoaXMuY3ViaWMucm90YXRpb24ueSArPSAwLjAyO1xuICAgICAgICB0aGlzLmN1YmljLnJvdGF0aW9uLnogKz0gMC4wMjtcbiAgICAgICAgLy8gYm91bmNlIHRoZSBzcGhlcmUgdXAgYW5kIGRvd25cbiAgICAgICAgc3RlcCArPSAwLjA1O1xuICAgICAgICB0aGlzLnNwaGVyZS5wb3NpdGlvbi54ID0gMjAgKyAoMTAgKiAoTWF0aC5jb3Moc3RlcCkpKTtcbiAgICAgICAgdGhpcy5zcGhlcmUucG9zaXRpb24ueSA9IDIgKyAoMTAgKiBNYXRoLmFicyhNYXRoLnNpbihzdGVwKSkpO1xuICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgICB9O1xuXG4gICAgYW5pbWF0ZSgpO1xuXG59KSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);