(function() {
  var scene = new THREE.Scene();


  var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000);


  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);


  // define cubic
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
  });

  // define line
  var lineStyle = new THREE.LineBasicMaterial({
    color: 'red'
  });

  var line_geometry = new THREE.Geometry();
  line_geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
  line_geometry.vertices.push(new THREE.Vector3(0, 10, 0));
  line_geometry.vertices.push(new THREE.Vector3(10, 0, 0));

  var line = new THREE.Line(line_geometry, lineStyle);
  scene.add(line);


  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.set(0, 0, 5);

  var animate = function() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.2;
    cube.rotation.y += 0.1;

    renderer.render(scene, camera);
  };

  animate();
})();

