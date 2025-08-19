"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function GlobalLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Delay removing the loader to allow fade out animation
      setTimeout(() => setLoading(false), 500);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center z-50 transition-all duration-500 ${
          fadeOut ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-10 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>

        {/* Main loader content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo container with rotating border */}
          <div className="relative mb-8">
            <div
              className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-white via-purple-200 to-white bg-clip-border animate-spin"
              style={{ padding: "4px" }}
            >
              <div className="rounded-full bg-white h-full w-full"></div>
            </div>
            <div className="relative p-4 bg-white rounded-full shadow-2xl transform animate-bounce">
              <Image
                src="/InstallLogo.jpg"
                alt="Loading..."
                width={120}
                height={120}
                priority
                className="rounded-full"
              />
            </div>
          </div>

          {/* Loading text with typing effect */}
          <div className="text-white text-xl font-semibold mb-4 animate-pulse">
            Loading<span className="animate-ping">...</span>
          </div>

          {/* Progress bar */}
          <div className="w-64 h-1 bg-white bg-opacity-30 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full shadow-lg animate-pulse"
              style={{
                animation: "progressLoad 1.3s ease-out forwards",
              }}
            />
          </div>

          {/* Subtitle */}
          <p className="text-white text-sm opacity-80 mt-4 animate-fade-in">
            Preparing your experience...
          </p>
        </div>

        {/* Custom keyframe animations */}
        <style jsx>{`
          @keyframes progressLoad {
            0% {
              width: 0%;
            }
            50% {
              width: 70%;
            }
            100% {
              width: 100%;
            }
          }

          @keyframes fade-in {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 0.8;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 0.8s ease-out 0.5s both;
          }
        `}</style>
      </div>
    );
  }

  return <>{children}</>;
}
