import React from 'react';
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';

class Scene extends React.Component {
  componentDidMount() {
    let container = this.mount;
    let w = container.offsetWidth;
    let h = container.offsetHeight;

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(15, w / h, 1, 1000);
    camera.position.z = 20;

    let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.innerWidth, container.innerHeight);
    renderer.setClearColor(0x000000, 0);

    renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight);
    this.mount.appendChild(renderer.domElement);

    let hemiLight = new THREE.HemisphereLight('#FFFFFF', '#FFFFFF', 0.5);

    hemiLight.position.set(0, 0, 10);

    scene.add(hemiLight);

    // Create cone1
    this.coneGroup = new THREE.Group();
    let geometry = new THREE.ConeGeometry(2, 2.5, 4);
    let material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    let cone = new THREE.Mesh(geometry, material);
    this.coneGroup.add(cone);

    // Create cone1 edges
    let edges = new THREE.EdgesGeometry(geometry);
    let line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff, lineWidth: 2 }));
    this.coneGroup.add(line);
    this.coneGroup.position.y = 0.3;
    this.coneGroup.scale.x = 0;
    this.coneGroup.scale.y = 0;
    this.coneGroup.scale.z = 0;
    scene.add(this.coneGroup);

    // Create cone2
    this.cone1Group = new THREE.Group();
    let geometryc1 = new THREE.ConeGeometry(1.5, 2, 3);
    let materialc1 = new THREE.MeshBasicMaterial({ color: 0x000000 });
    let cone1 = new THREE.Mesh(geometryc1, materialc1);
    this.cone1Group.add(cone1);
    // Create cone1 edges
    let edgesc1 = new THREE.EdgesGeometry(geometryc1);
    let linec1 = new THREE.LineSegments(edgesc1, new THREE.LineBasicMaterial({ color: 0xffffff, lineWidth: 2 }));
    this.cone1Group.add(linec1);
    this.cone1Group.position.y = -1;
    this.cone1Group.scale.x = 0;
    this.cone1Group.scale.y = 0;
    this.cone1Group.scale.z = 0;
    scene.add(this.cone1Group);

    // Create one 2 Cube
    this.cubeGroup2 = new THREE.Group();
    let geometry2 = new THREE.BoxGeometry(2, 2, 2);
    let material2 = new THREE.MeshToonMaterial({ color: 0x000000 });
    let cube2 = new THREE.Mesh(geometry2, material2);
    this.cubeGroup2.add(cube2);
    let edges2 = new THREE.EdgesGeometry(geometry2);
    let line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0xffffff, lineWidth: 2 }));
    this.cubeGroup2.add(line2);
    this.cubeGroup2.position.y = 1;
    this.cubeGroup2.scale.x = 0;
    this.cubeGroup2.scale.y = 0;
    this.cubeGroup2.scale.z = 0;
    scene.add(this.cubeGroup2);

    // Create one 2 Cube
    this.cubeGroup3 = new THREE.Group();
    let geometry3 = new THREE.BoxGeometry(1.1, 1.1, 1.1);
    let material3 = new THREE.MeshToonMaterial({ color: 0x000000 });
    let cube3 = new THREE.Mesh(geometry3, material3);
    this.cubeGroup3.add(cube3);
    let edges3 = new THREE.EdgesGeometry(geometry3);
    let line3 = new THREE.LineSegments(edges3, new THREE.LineBasicMaterial({ color: 0xffffff, lineWidth: 2 }));
    this.cubeGroup3.add(line3);
    this.cubeGroup3.position.y = -1;
    this.cubeGroup3.scale.x = 0;
    this.cubeGroup3.scale.y = 0;
    this.cubeGroup3.scale.z = 0;
    scene.add(this.cubeGroup3);

    this.cubeGroup4 = new THREE.Group();
    let geometry4 = new THREE.BoxGeometry(0.9, 0.9, 0.9);
    let material4 = new THREE.MeshToonMaterial({ color: 0x000000 });
    let cube4 = new THREE.Mesh(geometry4, material4);
    this.cubeGroup4.add(cube4);
    let edges4 = new THREE.EdgesGeometry(geometry4);
    let line4 = new THREE.LineSegments(edges4, new THREE.LineBasicMaterial({ color: 0xffffff, lineWidth: 2 }));
    this.cubeGroup4.add(line4);
    this.cubeGroup4.position.y = -1.1;
    this.cubeGroup4.scale.x = 0;
    this.cubeGroup4.scale.y = 0;
    this.cubeGroup4.scale.z = 0;
    scene.add(this.cubeGroup4);

    // Create cone2
    this.cone3 = new THREE.Group();
    let geometryc3 = new THREE.ConeGeometry(2, 3, 3);
    let materialc3 = new THREE.MeshBasicMaterial({ color: 0x000000 });
    let cone3 = new THREE.Mesh(geometryc3, materialc3);
    this.cone3.add(cone3);
    // Create cone1 edges
    let edgesc3 = new THREE.EdgesGeometry(geometryc3);
    let linec3 = new THREE.LineSegments(edgesc3, new THREE.LineBasicMaterial({ color: 0xffffff, lineWidth: 2 }));
    this.cone3.add(linec3);
    this.cone3.position.y = 0.8;
    this.cone3.scale.x = 0;
    this.cone3.scale.y = 0;
    this.cone3.scale.z = 0;
    scene.add(this.cone3);

    let animate = () => {
      requestAnimationFrame(animate);
      this.coneGroup.rotation.x += .01;
      this.coneGroup.rotation.y += .01;
      this.coneGroup.rotation.z += .02;

      this.cone1Group.rotation.x += .012;
      this.cone1Group.rotation.y -= .015;
      this.cone1Group.rotation.z += .021;

      this.cubeGroup2.rotation.x -= .021;
      this.cubeGroup2.rotation.y -= .012;
      this.cubeGroup2.rotation.z += .014;

      this.cubeGroup3.rotation.x -= .021;
      this.cubeGroup3.rotation.y -= .029;
      this.cubeGroup3.rotation.z += .019;

      this.cubeGroup4.rotation.x += .023;
      this.cubeGroup4.rotation.y -= .021;
      this.cubeGroup4.rotation.z -= .014;

      this.cone3.rotation.x -= .013;
      this.cone3.rotation.y += .021;
      this.cone3.rotation.z -= .014;

      TWEEN.update();

      renderer.render(scene, camera);
    };

    setTimeout(() => {
      this.buildUp =
        new TWEEN.Tween({
          x: -10,
          scale: 0,
        }).to({
          x: 0,
          scale: 1,
        }, 4000).easing(TWEEN.Easing.Sinusoidal.In).onUpdate(({ x, scale }) => {
          this.coneGroup.scale.x = scale;
          this.coneGroup.scale.y = scale;
          this.coneGroup.scale.z = scale;
          this.coneGroup.position.x = x;
        }).onComplete(() => {
          //Loop it forever
          this.buildDown.start();
        }).start();
    },1500);

    this.buildDown =
      new TWEEN.Tween({
        x: 0,
        scale: 1,
      }).to({
        x: 10,
        scale: 0,
      }, 4000).easing(TWEEN.Easing.Sinusoidal.Out).onUpdate(({ x, scale }) => {
        this.coneGroup.scale.x = scale;
        this.coneGroup.scale.y = scale;
        this.coneGroup.scale.z = scale;
        this.coneGroup.position.x = x;
      }).onComplete(() => {
        //Loop it forever
        this.buildUp.start();
      });

    // First Tween
    setTimeout(() => {
      this.moveRightAndGrow = new TWEEN.Tween({
        x: -10,
        scale: 0,
      }).to({
        x: 0,
        scale: 0.9,
      }, 4000).easing(TWEEN.Easing.Sinusoidal.In).onUpdate(({ x, scale }) => {
        this.cubeGroup2.position.x = x;
        this.cubeGroup2.scale.x = scale;
        this.cubeGroup2.scale.y = scale;
        this.cubeGroup2.scale.z = scale;
      }).onComplete(() => {
        this.moveRightAndVanish.start();
      }).start();
    }, 0);

    this.moveRightAndVanish = new TWEEN.Tween({
      x: 0,
      scale: 0.9,
    }).to({
      x: 10,
      scale: 0,
    }, 4000).easing(TWEEN.Easing.Sinusoidal.Out).onUpdate(({ x, scale }) => {
      this.cubeGroup2.position.x = x;
      this.cubeGroup2.scale.x = scale;
      this.cubeGroup2.scale.y = scale;
      this.cubeGroup2.scale.z = scale;
    }).onComplete(() => {
      this.moveRightAndGrow.start();
    });

    // Second tween
    setTimeout(() => {
      this.moveRightAndGrow4 = new TWEEN.Tween({
        x: -10,
        scale: 0,
      }).to({
        x: 0,
        scale: 1,
      }, 4000).easing(TWEEN.Easing.Sinusoidal.In).onUpdate(({ x, scale }) => {
        this.cubeGroup4.position.x = x;
        this.cubeGroup4.scale.x = scale;
        this.cubeGroup4.scale.y = scale;
        this.cubeGroup4.scale.z = scale;
      }).onComplete(() => {
        this.moveRightAndVanish4.start();
      }).start();
    }, 4500);

    this.moveRightAndVanish4 = new TWEEN.Tween({
      x: 0,
      scale: 1,
    }).to({
      x: 10,
      scale: 0,
    }, 4000).easing(TWEEN.Easing.Sinusoidal.Out).onUpdate(({ x, scale }) => {
      this.cubeGroup4.position.x = x;
      this.cubeGroup4.scale.x = scale;
      this.cubeGroup4.scale.y = scale;
      this.cubeGroup4.scale.z = scale;
    }).onComplete(() => {
      this.moveRightAndGrow4.start();
    });

    // 2.5 tween
    setTimeout(() => {
      this.moveRightAndGrow5 = new TWEEN.Tween({
        x: -10,
        scale: 0,
      }).to({
        x: 0,
        scale: 0.9,
      }, 4000).easing(TWEEN.Easing.Sinusoidal.In).onUpdate(({ x, scale }) => {
        this.cone3.position.x = x;
        this.cone3.scale.x = scale;
        this.cone3.scale.y = scale;
        this.cone3.scale.z = scale;
      }).onComplete(() => {
        this.moveRightAndVanish5.start();
      }).start();
    }, 2500);

    this.moveRightAndVanish5 = new TWEEN.Tween({
      x: 0,
      scale: 0.9,
    }).to({
      x: 10,
      scale: 0,
    }, 4000).easing(TWEEN.Easing.Sinusoidal.Out).onUpdate(({ x, scale }) => {
      this.cone3.position.x = x;
      this.cone3.scale.x = scale;
      this.cone3.scale.y = scale;
      this.cone3.scale.z = scale;
    }).onComplete(() => {
      this.moveRightAndGrow5.start();
    });

    // 3rd Tween
    setTimeout(() => {
      this.moveRightAndGrow2 = new TWEEN.Tween({
        x: -10,
        scale: 0,
      }).to({
        x: 0,
        scale: 1,
      }, 4000).easing(TWEEN.Easing.Sinusoidal.In).onUpdate(({ x, scale }) => {
        this.cone1Group.position.x = x;
        this.cone1Group.scale.x = scale;
        this.cone1Group.scale.y = scale;
        this.cone1Group.scale.z = scale;
      }).onComplete(() => {
        this.moveRightAndVanish2.start();
      }).start();
    }, 2000);

    this.moveRightAndVanish2 = new TWEEN.Tween({
      x: 0,
      scale: 1,
    }).to({
      x: 10,
      scale: 0,
    }, 4000).easing(TWEEN.Easing.Sinusoidal.Out).onUpdate(({ x, scale }) => {
      this.cone1Group.position.x = x;
      this.cone1Group.scale.x = scale;
      this.cone1Group.scale.y = scale;
      this.cone1Group.scale.z = scale;
    }).onComplete(() => {
      this.moveRightAndGrow2.start();
    });

    // 4th tween
    setTimeout(() => {
      this.moveRightAndGrow3 = new TWEEN.Tween({
        x: -10,
        scale: 0,
      }).to({
        x: 0,
        scale: 1,
      }, 4000).easing(TWEEN.Easing.Sinusoidal.In).onUpdate(({ x, scale }) => {
        this.cubeGroup3.position.x = x;
        this.cubeGroup3.scale.x = scale;
        this.cubeGroup3.scale.y = scale;
        this.cubeGroup3.scale.z = scale;
      }).onComplete(() => {
        this.moveRightAndVanish3.start();
      }).start();
    }, 2800);

    this.moveRightAndVanish3 = new TWEEN.Tween({
      x: 0,
      scale: 1,
    }).to({
      x: 10,
      scale: 0,
    }, 4000).easing(TWEEN.Easing.Sinusoidal.Out).onUpdate(({ x, scale }) => {
      this.cubeGroup3.position.x = x;
      this.cubeGroup3.scale.x = scale;
      this.cubeGroup3.scale.y = scale;
      this.cubeGroup3.scale.z = scale;
    }).onComplete(() => {
      this.moveRightAndGrow3.start();
    });

    animate();
  }

  render() {
    return (
      <div ref={ref => (this.mount = ref)} style={{ width: `200px`, height: `50px` }}></div>
    );
  }
}

export default Scene;
