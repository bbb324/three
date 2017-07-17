(function() {
  var scene = new THREE.Scene();
  var camera = function() {
    let view_angle = 45,
        aspect = window.innerWidth / window.innerHeight,
        near = 0.1,
        far = 1000;
    return (new THREE.PerspectiveCamera(
        view_angle,
        aspect,
        near,
        far
      ));
  }
  this.camera = new camera();
  this.camera.position.set(-30, 40, 30);
  this.camera.lookAt(scene.position);
  

  var renderer = new THREE.WebGLRenderer();
  //renderer.setClearColor('red');
   renderer.setClearColor(new THREE.Color(0xEEEEEE));
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // show x,y axes
  var axes = new THREE.AxisHelper(20);
  scene.add(axes);

  //设置地面
  var plane = function() {
    this.planeGeo = new THREE.PlaneGeometry(60, 20);
    this.planeMat = new THREE.MeshBasicMaterial({color: 0xcccccc});
    return new THREE.Mesh(this.planeGeo, this.planeMat);
  }
  //设置地面角度方便查看
  this.plane = new plane();
  this.plane.rotation.x = -0.5*Math.PI;
  this.plane.position.x = 15;
  this.plane.position.y = 0;
  this.plane.position.z = 0;
  scene.add(this.plane);


  // 画个方块
  var cubic = function() {
    this.geometry = new THREE.BoxGeometry(10, 10, 10);
    this.material = new THREE.MeshLambertMaterial({
      color: 0xF3FFE2,
      wireframe: true
    });
    return new THREE.Mesh(this.geometry, this.material);
  }

  this.cubic = new cubic();
  this.cubic.position.y = 5;
  scene.add(this.cubic);

  // define line
  var line = function() {
    var lineStyle = new THREE.LineBasicMaterial({
      color: 'red'
    });
    var line_geometry = new THREE.Geometry();
    line_geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
    line_geometry.vertices.push(new THREE.Vector3(0, 10, 0));
    line_geometry.vertices.push(new THREE.Vector3(10, 0, 0));
    return new THREE.Line(line_geometry, lineStyle);
  }

  //画个球
  var sphere = function() {
    var obj = new THREE.SphereGeometry(4,20,20);
    var meterial = new THREE.MeshBasicMaterial({ color: 0x999999, wireframe:true } );
    return new THREE.Mesh(obj, meterial);
  }
  
  this.sphere = new sphere();
  this.sphere.position.x = 30;
  this.sphere.position.y = 10;
  scene.add(this.sphere);
  

  var animate = function() {
    requestAnimationFrame(animate);
    /*this.sphere.rotation.x+=0.02;
    this.sphere.rotation.y+=0.02;*/
    
    renderer.render(scene, this.camera);
  };

  animate();

})();











