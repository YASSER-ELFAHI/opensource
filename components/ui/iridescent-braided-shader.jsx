"use client";

import React, { useEffect, useRef } from "react";

export default function ShaderAnimation() {
  const containerRef = useRef(null);
  const sceneRef = useRef({
    camera: null,
    scene: null,
    renderer: null,
    uniforms: null,
    animationId: null,
    onWindowResize: null,
  });

  useEffect(() => {
    let isMounted = true;

    const initThreeJS = () => {
      if (!containerRef.current || !window.THREE) return;

      const THREE = window.THREE;
      const container = containerRef.current;

      // Clear any existing content
      container.innerHTML = "";

      // Camera
      const camera = new THREE.Camera();
      camera.position.z = 1;

      // Scene
      const scene = new THREE.Scene();

      // Geometry
      const geometry = new THREE.PlaneBufferGeometry(2, 2);

      // Uniforms
      const uniforms = {
        time: { type: "f", value: 1.0 },
        resolution: { type: "v2", value: new THREE.Vector2() },
      };

      // Vertex shader
      const vertexShader = `
        void main() {
          gl_Position = vec4( position, 1.0 );
        }
      `;

      // Fragment shader
      const fragmentShader = `
        #define PI 3.14159265359

        precision highp float;
        uniform vec2 resolution;
        uniform float time;
        
        vec3 getIridescence(float x) {
            vec3 dark = vec3(0.01, 0.01, 0.015);
            vec3 gold = vec3(1.0, 0.4, 0.1);
            vec3 cyan = vec3(0.6, 0.9, 1.0);
            vec3 blue = vec3(0.1, 0.3, 1.0);

            vec3 c = dark;
            c = mix(c, gold, smoothstep(0.0, 0.3, x));
            c = mix(c, cyan, smoothstep(0.3, 0.6, x));
            c = mix(c, blue, smoothstep(0.6, 0.8, x));
            c = mix(c, dark, smoothstep(0.8, 1.0, x));
            return c;
        }

        float getHeight(vec2 p) {
            float t = time * 0.4;
            vec2 center = vec2(0.0, -1.2); 
            vec2 d = p - center;
            float radius = length(d);
            float angle = atan(d.y, d.x);
            vec2 mappedP = vec2(angle * 3.5, radius * 3.5);
            mappedP.x -= t * 0.3;
            mappedP.x += sin(mappedP.y * 2.0 + t) * 0.4;
            mappedP.y += sin(mappedP.x * 1.5 - t * 0.8) * 0.3;
            float w1 = mappedP.y * 6.0 + mappedP.x * 3.0;
            float w2 = mappedP.y * 6.0 - mappedP.x * 3.0;
            return min(sin(w1), sin(w2));
        }

        vec3 getNormal(vec2 p) {
            vec2 e = vec2(0.005, 0.0);
            float h = getHeight(p);
            float dx = getHeight(p + e.xy) - h;
            float dy = getHeight(p + e.yx) - h;
            return normalize(vec3(-dx, -dy, 0.2)); 
        }

        void main(void) {
          vec2 uv = gl_FragCoord.xy / resolution.xy;
          vec2 p = uv * 2.0 - 1.0;
          p.x *= resolution.x / resolution.y;
          
          vec3 n = getNormal(p);
          
          vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0));
          vec3 lightDir = normalize(vec3(-0.5, 0.7, 0.6));
          vec3 halfVector = normalize(viewDir + lightDir);
          
          float NdotH = max(0.0, dot(n, halfVector));
          float spec = pow(NdotH, 8.0); 
          
          vec3 color = getIridescence(spec) * 2.2;
          
          float h = getHeight(p);
          float ao = smoothstep(-1.0, 1.0, h);
          color *= mix(0.05, 1.0, ao);
          
          vec3 lightDir2 = normalize(vec3(0.6, -0.4, 0.3));
          float NdotH2 = max(0.0, dot(n, normalize(viewDir + lightDir2)));
          color += vec3(0.05, 0.15, 0.3) * pow(NdotH2, 3.0) * ao;
          
          float vignette = length(uv * 2.0 - 1.0);
          color *= smoothstep(2.2, 0.4, vignette);

          color = smoothstep(0.0, 1.0, color);

          gl_FragColor = vec4(color, 1.0);
        }
      `;

      // Material and mesh
      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // Renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio || 1);
      container.appendChild(renderer.domElement);

      // Resize handler
      const onWindowResize = () => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        renderer.setSize(rect.width, rect.height);
        uniforms.resolution.value.x = renderer.domElement.width;
        uniforms.resolution.value.y = renderer.domElement.height;
      };

      onWindowResize();
      window.addEventListener("resize", onWindowResize, false);

      // Animation loop
      const animate = () => {
        if (!isMounted) return;
        sceneRef.current.animationId = requestAnimationFrame(animate);
        uniforms.time.value += 0.05;
        renderer.render(scene, camera);
      };

      animate();

      // Save refs for cleanup
      sceneRef.current = {
        camera,
        scene,
        renderer,
        uniforms,
        animationId: sceneRef.current.animationId,
        onWindowResize,
      };
    };

    // Load Three.js dynamically if needed
    if (window.THREE) {
      initThreeJS();
    } else {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/89/three.min.js";
      script.onload = () => {
        if (isMounted) {
          initThreeJS();
        }
      };
      document.head.appendChild(script);
    }

    return () => {
      isMounted = false;
      if (sceneRef.current.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }
      if (sceneRef.current.onWindowResize) {
        window.removeEventListener("resize", sceneRef.current.onWindowResize);
      }
      if (sceneRef.current.renderer) {
        sceneRef.current.renderer.dispose();
        // remove canvas element if present
        const canvas = containerRef.current?.querySelector("canvas");
        if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100%", position: "absolute", inset: 0, background: "black" }} />;
}
