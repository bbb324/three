(function() {
  var scene = new THREE.Scene();
  var camera = function() {
    let view_angle = 30,
        aspect = window.innerWidth / window.innerHeight,
        near = 1,
        far = 1000;
    return (new THREE.PerspectiveCamera(
        view_angle,
        aspect,
        near,
        far
      ));
  }
  this.camera = new camera();
  this.camera.position.set(0,0,5);
  

  var renderer = new THREE.WebGLRenderer();
  //renderer.setClearColor('red');
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);


  // define cubic
  var cubic = function() {
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({
      color: 0x00ff00
    });
    return new THREE.Mesh(this.geometry, this.material);
  }
  this.cubic = new cubic();

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
  
  //scene.add(new line());
  scene.add(this.cubic);

  

  var animate = function() {
    requestAnimationFrame(animate);
     this.cubic.rotation.x+=0.2;

   
    renderer.render(scene, this.camera);
  };

  animate();
})();

