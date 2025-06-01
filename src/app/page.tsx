'use client'

import React from 'react'

export default function Home(): React.JSX.Element {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Glowing Blobs Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-600 rounded-full filter blur-3xl opacity-70 mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-60 mix-blend-screen animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-orange-500 rounded-full filter blur-3xl opacity-50 mix-blend-screen animate-blob animation-delay-6000"></div>
      </div>

      {/* Grainy Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"
        }}
      ></div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-4xl mx-auto">
        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight font-[family-name:var(--font-geist-sans)]">
          Kieda Jhinn<span className="text-pink-400">.</span>
        </h1>
        
        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-pink-300 font-light tracking-wide max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-geist-sans)] mb-8">
          Crafting seamless digital experiences from concept to deployment
        </p>
        
        {/* Decorative line */}
        <div className="w-16 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 mx-auto opacity-80 rounded-full mb-6"></div>
        
        {/* Role */}
        <p className="text-pink-200/90 text-base font-[family-name:var(--font-geist-mono)] tracking-wider uppercase">
          Full Stack Developer
        </p>
      </div>
      
      {/* Bottom vignette */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"
      ></div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  );
}
