
import React from 'react';
import Particles from '@tsparticles/react';

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 z-0"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: {
              enable: true,
            },
          },
          modes: {
            push: {
              quantity: 3,
            },
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.8,
              },
            },
          },
        },
        particles: {
          color: {
            value: ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b"],
          },
          links: {
            color: {
              value: "#3b82f6",
            },
            distance: 180,
            enable: true,
            opacity: 0.3,
            width: 1.5,
            triangles: {
              enable: true,
              opacity: 0.05,
            },
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 1.5,
            straight: false,
            attract: {
              enable: true,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
          },
          number: {
            density: {
              enable: true,
              width: 1920,
              height: 1080,
            },
            value: 120,
          },
          opacity: {
            value: { min: 0.3, max: 0.8 },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 6 },
            animation: {
              enable: true,
              speed: 3,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
