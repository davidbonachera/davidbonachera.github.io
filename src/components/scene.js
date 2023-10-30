import React from 'react';
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';

class Scene extends React.Component {
    componentDidMount() {
        this.initScene();
        this.addLights();
        this.addShapes();
        this.addSphere();  // Adding the sphere
        this.addTweens();
        this.animate();

        // Register visibility change listeners
        document.addEventListener('visibilitychange', this.handleVisibilityChange);
    }

    componentWillUnmount() {
        // Unregister visibility change listeners
        document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    }

    addSphere() {
        const basicBlack = new THREE.MeshBasicMaterial({color: 0x000000});
        const edgesWhite = 0xffffff;

        this.sphereGroup = this.createShapeGroup(new THREE.SphereGeometry(1, 4, 6), basicBlack, edgesWhite, 1.1);
    }

    handleVisibilityChange = () => {
        if (document.hidden) {
            this.stopAnimations();
        } else {
            this.restartAnimations();
        }
    }

    stopAnimations() {
        // Stop all active tweens
        TWEEN.removeAll();
    }

    restartAnimations() {
        // Re-setup and start the animations from the beginning
        this.addTweens();
    }

    initScene() {
        const container = this.mount;
        const w = container.offsetWidth;
        const h = container.offsetHeight;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(15, w / h, 1, 1000);
        this.camera.position.z = 20;

        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(w, h);
        this.renderer.setClearColor(0x000000, 0);
        container.appendChild(this.renderer.domElement);
    }

    addLights() {
        const hemiLight = new THREE.HemisphereLight('#FFFFFF', '#FFFFFF', 0.5);
        hemiLight.position.set(0, 0, 10);
        this.scene.add(hemiLight);
    }

    createShapeGroup(geometry, material, edgesColor, positionY) {
        const group = new THREE.Group();
        const mesh = new THREE.Mesh(geometry, material);
        const edges = new THREE.EdgesGeometry(geometry);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: edgesColor, lineWidth: 2}));

        group.add(mesh, line);
        group.position.y = positionY;
        group.scale.set(0, 0, 0);
        this.scene.add(group);

        return group;
    }

    addShapes() {
        const basicBlack = new THREE.MeshBasicMaterial({color: 0x000000});
        const edgesWhite = 0xffffff;

        this.coneGroup = this.createShapeGroup(new THREE.ConeGeometry(2, 2.5, 4), basicBlack, edgesWhite, 0.3);
        this.cone1Group = this.createShapeGroup(new THREE.ConeGeometry(1.5, 2, 3), basicBlack, edgesWhite, -1);
        this.cubeGroup2 = this.createShapeGroup(new THREE.BoxGeometry(2, 2, 2), new THREE.MeshToonMaterial({color: 0x000000}), edgesWhite, 1);
        this.cubeGroup3 = this.createShapeGroup(new THREE.BoxGeometry(1.1, 1.1, 1.1), new THREE.MeshToonMaterial({color: 0x000000}), edgesWhite, -1);
        this.cubeGroup4 = this.createShapeGroup(new THREE.BoxGeometry(0.9, 0.9, 0.9), new THREE.MeshToonMaterial({color: 0x000000}), edgesWhite, -1.1);
        this.cone3 = this.createShapeGroup(new THREE.ConeGeometry(2, 3, 3), basicBlack, edgesWhite, 0.8);
    }

    createTween(group, delay) {
        const moveRightAndGrow = new TWEEN.Tween({x: -10, scale: 0})
            .to({x: 0, scale: 1}, 4000)
            .easing(TWEEN.Easing.Sinusoidal.In)
            .onUpdate(({x, scale}) => {
                group.position.x = x;
                group.scale.set(scale, scale, scale);
            })
            .onComplete(() => moveRightAndVanish.start());

        const moveRightAndVanish = new TWEEN.Tween({x: 0, scale: 1})
            .to({x: 10, scale: 0}, 4000)
            .easing(TWEEN.Easing.Sinusoidal.Out)
            .onUpdate(({x, scale}) => {
                group.position.x = x;
                group.scale.set(scale, scale, scale);
            })
            .onComplete(() => moveRightAndGrow.start());

        setTimeout(() => moveRightAndGrow.start(), delay);
    }

    addTweens() {
        this.createTween(this.coneGroup, 1500);
        this.createTween(this.cubeGroup2, 0);
        this.createTween(this.cubeGroup4, 4500);
        this.createTween(this.cone3, 2500);
        this.createTween(this.sphereGroup, 3500);
        this.createTween(this.cone1Group, 2000);
        this.createTween(this.cubeGroup3, 2800);
    }

    animate() {
        const animateScene = () => {
            requestAnimationFrame(animateScene);
            // Update rotations for each shape group
            // ... (similar to the provided code)

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


            this.sphereGroup.rotation.x += .01;
            this.sphereGroup.rotation.y += .02;
            this.sphereGroup.rotation.z += .02;

            TWEEN.update();
            this.renderer.render(this.scene, this.camera);
        };

        animateScene();
    }

    render() {
        return <div ref={ref => (this.mount = ref)} style={{width: `200px`, height: `50px`}}></div>;
    }
}

export default Scene;
