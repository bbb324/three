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
    renderer.setClearColor(new THREE.Color(0xEEEEEE));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true; //能够显示阴影，但是对应的物体也要设置 castShadow = true
    document.body.appendChild(renderer.domElement);

    // show x,y axes
    var axes = new THREE.AxisHelper(20);
    scene.add(axes);

    //设置地面
    var plane = function() {
        this.planeGeo = new THREE.PlaneGeometry(60, 20);
        this.planeMat = new THREE.MeshLambertMaterial({ color: 0xcccccc });
        this.plane = new THREE.Mesh(this.planeGeo, this.planeMat);
        this.plane.receiveShadow = true;
        this.plane.rotation.x = -0.5 * Math.PI;
        this.plane.position.set(15, 0, 0);
        return this.plane;
    }
    //设置地面角度方便查看
    this.ground = new plane();
    scene.add(this.ground);


    // 画个方块
    var cubic = function() {
        this.geometry = new THREE.BoxGeometry(4, 4, 4);
        this.material = new THREE.MeshLambertMaterial({
            color: 0xff0000
        });
        this.cube = new THREE.Mesh(this.geometry, this.material);
        this.cube.position.set(-1, 4, 0);
        this.cube.castShadow = true;
        return this.cube;
    }
    this.cubic = new cubic();
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
        var obj = new THREE.SphereGeometry(4, 20, 20);
        var meterial = new THREE.MeshBasicMaterial({ color: 0x999999, wireframe: true });
        this.sp = new THREE.Mesh(obj, meterial);
        this.sp.position.set(30, 10, 0);
        return this.sp;
    }
    this.sphere = new sphere();
    scene.add(this.sphere);

    //照射光线
    var spotLight = function() {
        this.light = new THREE.SpotLight(0xffffff);
        this.light.position.set(-40, 60, -10); //设置照射角度
        this.light.castShadow = true;
        return this.light;
    }
    this.spotLight = new spotLight();
    scene.add(this.spotLight);

    //环境光
    var ambientLight = new THREE.AmbientLight(0x0c0c0c);
    scene.add(ambientLight);

    var step = 0;
    var animate = function() {
        requestAnimationFrame(animate);
        this.cubic.rotation.x += 0.02;
        this.cubic.rotation.y += 0.02;
        this.cubic.rotation.z += 0.02;
        // bounce the sphere up and down
        step += 0.05;
        this.sphere.position.x = 20 + (10 * (Math.cos(step)));
        this.sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)));
        renderer.render(scene, this.camera);
    };

    animate();

})();