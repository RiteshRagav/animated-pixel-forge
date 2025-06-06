
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
              mode: "connect",
            },
            resize: {
              enable: true,
            },
          },
          modes: {
            push: {
              quantity: 2,
            },
            connect: {
              distance: 80,
              links: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          color: {
            value: ["#3b82f6", "#8b5cf6", "#06b6d4"],
          },
          links: {
            color: {
              value: "#3b82f6",
            },
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              width: 1920,
              height: 1080,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
