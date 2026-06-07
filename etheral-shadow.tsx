'use client';

import React from 'react';

export function Component() {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* MOVING GRADIENT BACKGROUND */}
      <div className="absolute inset-0 animate-gradient bg-[linear-gradient(270deg,#0f172a,#1e3a8a,#9333ea,#0f172a)] bg-[length:600%_600%]" />

      {/* BLUR LAYER */}
      <div className="absolute inset-0 backdrop-blur-3xl" />

      {/* TEXT */}
      

      {/* CUSTOM ANIMATION */}
      <style jsx>{`
        .animate-gradient {
          animation: gradientMove 8s ease infinite;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}