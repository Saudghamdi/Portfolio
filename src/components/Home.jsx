import React, { useEffect, useRef } from 'react';
import { HiArrowDown } from 'react-icons/hi';
import * as THREE from 'three';
import { Link } from 'react-scroll';

const ComputerSetup3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.set(0, 3, 8);
    camera.lookAt(0, 1, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(500, 500);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create code texture for monitor screen
    const createCodeTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 768;
      const ctx = canvas.getContext('2d');

      // Dark background matching your portfolio
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Code lines
      const codeLines = [
        'import React from "react";',
        '',
        'const App = () => {',
        '  const [count, setCount] = useState(0);',
        '',
        '  return (',
        '    <div className="container">',
        '      <h1>Hello World!</h1>',
        '      <p>Count: {count}</p>',
        '      <button onClick={() => setCount(count + 1)}>',
        '        Increment',
        '      </button>',
        '    </div>',
        '  );',
        '};',
        '',
        'export default App;'
      ];

      ctx.font = '24px "Courier New", monospace';
      let y = 60;

      codeLines.forEach((line) => {
        if (line.trim().startsWith('import') || line.trim().startsWith('export')) {
          ctx.fillStyle = '#a855f7';
        } else if (line.includes('const') || line.includes('return')) {
          ctx.fillStyle = '#60a5fa';
        } else if (line.includes('useState') || line.includes('setCount')) {
          ctx.fillStyle = '#818cf8';
        } else if (line.includes('<') || line.includes('>')) {
          ctx.fillStyle = '#3b82f6';
        } else if (line.includes('"') || line.includes("'")) {
          ctx.fillStyle = '#93c5fd';
        } else {
          ctx.fillStyle = '#d4d4d4';
        }
        ctx.fillText(line, 40, y);
        y += 40;
      });

      return new THREE.CanvasTexture(canvas);
    };

    const codeTexture = createCodeTexture();

    // Computer group
    const computer = new THREE.Group();

    // Desk
    const desk = new THREE.Mesh(
      new THREE.BoxGeometry(6, 0.1, 3),
      new THREE.MeshStandardMaterial({ 
        color: 0x5c4033, 
        roughness: 0.8,
        metalness: 0.1 
      })
    );
    desk.position.y = 0;
    computer.add(desk);

    // Monitor stand base
    const standBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.3, 0.05, 32),
      new THREE.MeshStandardMaterial({ 
        color: 0x1a1a2e, 
        metalness: 0.8, 
        roughness: 0.2,
        emissive: 0x3b82f6,
        emissiveIntensity: 0.1
      })
    );
    standBase.position.set(0, 0.1, 0);
    computer.add(standBase);

    // Monitor stand pole
    const standPole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.08, 1.2, 16),
      new THREE.MeshStandardMaterial({ 
        color: 0x1a1a2e, 
        metalness: 0.8, 
        roughness: 0.2,
        emissive: 0x3b82f6,
        emissiveIntensity: 0.05
      })
    );
    standPole.position.set(0, 0.7, 0);
    computer.add(standPole);

    // Monitor back
    const monitorBack = new THREE.Mesh(
      new THREE.BoxGeometry(2.8, 1.8, 0.15),
      new THREE.MeshStandardMaterial({ 
        color: 0x0f0f1e, 
        roughness: 0.3, 
        metalness: 0.5,
        emissive: 0x6366f1,
        emissiveIntensity: 0.05
      })
    );
    monitorBack.position.set(0, 1.4, -0.08);
    computer.add(monitorBack);

    // Monitor screen
    const screen = new THREE.Mesh(
      new THREE.BoxGeometry(2.6, 1.6, 0.05),
      new THREE.MeshStandardMaterial({ 
        map: codeTexture,
        emissive: 0x1e3a8a,
        emissiveIntensity: 0.2
      })
    );
    screen.position.set(0, 1.4, 0.05);
    computer.add(screen);

    // Screen glow
    const screenGlow = new THREE.Mesh(
      new THREE.BoxGeometry(2.65, 1.65, 0.06),
      new THREE.MeshBasicMaterial({ 
        color: 0x60a5fa,
        transparent: true,
        opacity: 0.15
      })
    );
    screenGlow.position.set(0, 1.4, 0.06);
    computer.add(screenGlow);

    // Keyboard
    const keyboard = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 0.08, 0.5),
      new THREE.MeshStandardMaterial({ 
        color: 0x1a1a2e, 
        roughness: 0.7,
        metalness: 0.3,
        emissive: 0x3b82f6,
        emissiveIntensity: 0.05
      })
    );
    keyboard.position.set(0, 0.09, 1);
    keyboard.rotation.x = -0.1;
    computer.add(keyboard);

    // Keyboard keys
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 14; col++) {
        const keyColor = row % 2 === 0 ? 0x0f0f1e : 0x1a1a2e;
        const key = new THREE.Mesh(
          new THREE.BoxGeometry(0.08, 0.03, 0.08),
          new THREE.MeshStandardMaterial({ 
            color: keyColor,
            emissive: 0x60a5fa,
            emissiveIntensity: 0.02
          })
        );
        key.position.set(
          -0.65 + col * 0.1,
          0.13,
          0.85 + row * 0.1
        );
        computer.add(key);
      }
    }

    // Mouse
    const mouse = new THREE.Mesh(
      new THREE.BoxGeometry(0.15, 0.08, 0.25),
      new THREE.MeshStandardMaterial({ 
        color: 0x1a1a2e, 
        roughness: 0.6,
        metalness: 0.4,
        emissive: 0xa855f7,
        emissiveIntensity: 0.1
      })
    );
    mouse.position.set(1.2, 0.09, 1);
    computer.add(mouse);

    // Coffee cup
    const cupBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.1, 0.25, 16),
      new THREE.MeshStandardMaterial({ 
        color: 0x3b82f6, 
        roughness: 0.4,
        metalness: 0.2,
        emissive: 0x6366f1,
        emissiveIntensity: 0.2
      })
    );
    cupBody.position.set(-1.8, 0.18, 0.5);
    computer.add(cupBody);

    const cupHandle = new THREE.Mesh(
      new THREE.TorusGeometry(0.08, 0.02, 8, 16, Math.PI),
      new THREE.MeshStandardMaterial({ 
        color: 0x3b82f6, 
        roughness: 0.4,
        metalness: 0.2
      })
    );
    cupHandle.position.set(-1.68, 0.18, 0.5);
    cupHandle.rotation.y = Math.PI / 2;
    computer.add(cupHandle);

    scene.add(computer);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1);
    mainLight.position.set(5, 10, 5);
    scene.add(mainLight);

    const blueLight = new THREE.PointLight(0x60a5fa, 2, 10);
    blueLight.position.set(0, 1.4, 1);
    scene.add(blueLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 1.5, 8);
    purpleLight.position.set(2, 2, 2);
    scene.add(purpleLight);

    const backLight = new THREE.PointLight(0x6366f1, 1, 8);
    backLight.position.set(-2, 1, -2);
    scene.add(backLight);

    // Stars background
    const starsGeo = new THREE.BufferGeometry();
    const starVertices = [];
    for (let i = 0; i < 400; i++) {
      starVertices.push((Math.random() - 0.5) * 50);
      starVertices.push((Math.random() - 0.5) * 50);
      starVertices.push((Math.random() - 0.5) * 50);
    }
    starsGeo.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const starsMat = new THREE.PointsMaterial({ 
      color: 0xffffff, 
      size: 0.08,
      transparent: true,
      opacity: 0.8
    });
    const stars = new THREE.Points(starsGeo, starsMat);
    scene.add(stars);

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      computer.rotation.y = Math.sin(time * 0.2) * 0.2;

      screenGlow.material.opacity = 0.12 + Math.sin(time * 2) * 0.03;
      screenGlow.material.color.setHex(
        Math.sin(time) > 0 ? 0x60a5fa : 0xa855f7
      );

      blueLight.intensity = 2 + Math.sin(time) * 0.5;
      purpleLight.intensity = 1.5 + Math.cos(time * 1.5) * 0.3;

      stars.rotation.y += 0.0003;
      stars.rotation.x += 0.0001;

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      const size = Math.min(window.innerWidth * 0.45, 500);
      renderer.setSize(size, size);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      codeTexture.dispose();
      computer.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (child.material.map) child.material.map.dispose();
          child.material.dispose();
        }
      });
      stars.geometry.dispose();
      stars.material.dispose();
    };
  }, []);

  return (
    <div name="home" className="w-full min-h-screen flex justify-center items-center bg-black py-20">
      <div className="max-w-[1400px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col justify-center order-2 md:order-1">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4">Saud Al-ghamdi</h1>
          <h2 className="text-3xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 py-2">
           IT Graduate 
          </h2>
          <p className="text-gray-400 max-w-[700px] py-6 text-lg">
            Recent graduate with experience in Python, JavaScript and web development. Passionate about creating modern and dynamic websites.
          </p>
          
         <Link to="projects" smooth={true} duration={500}>
        <button className="group relative bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white border border-slate-700 hover:border-blue-500 px-8 py-4 my-4 inline-flex items-center rounded-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 overflow-hidden w-fit">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/20 group-hover:to-pink-600/20 transition-all duration-500"></div>
          <span className="relative z-10 font-semibold">View Projects</span>
          <HiArrowDown className="relative z-10 ml-3 group-hover:translate-y-2 transition-transform duration-300"/>
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
        </button>
      </Link>
    </div>

        {/* 3D Computer */}
        <div className="flex justify-center items-center order-1 md:order-2">
          <canvas ref={canvasRef} className="max-w-full" />
        </div>

      </div>
    </div>
  );
};

export default ComputerSetup3D;