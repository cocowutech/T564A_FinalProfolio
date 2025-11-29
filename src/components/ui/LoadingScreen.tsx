import { useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";

interface LoadingScreenProps {
  setIsLoading: (isLoading: boolean) => void;
  assetsReady?: boolean;
}

const LoadingScreen = ({
  setIsLoading,
  assetsReady = false,
}: LoadingScreenProps) => {
  const { progress, item, loaded, total } = useProgress();
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (assetsReady && progress === 100) {
      const timer = setTimeout(() => {
        setOpacity(0);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [assetsReady, progress]);

  const handleTransitionEnd = () => {
    if (opacity === 0) {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 w-full h-full flex flex-col items-center justify-center bg-black z-50"
      style={{
        opacity,
        transition: "opacity 1.5s ease-in-out",
        pointerEvents: opacity === 0 ? "none" : "auto",
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className="flex flex-col items-center mb-8">
        {/* Avatar logo */}
        <div className="relative mb-4 w-16 h-16 rounded-full overflow-hidden border border-white/20 shadow-lg">
          <img
            src="/coco.png"
            alt="Coco logo"
            className="w-full h-full object-cover"
            style={{ animation: "fadePulse 1.8s ease-in-out infinite" }}
          />
        </div>
        <h1 className="text-white text-3xl font-bold">CocoWu Vibe Coding</h1>
      </div>

      <style>{`
        @keyframes fadePulse {
          0%, 100% { opacity: 0.45; transform: scale(0.98); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-4 flex flex-col items-center text-white">
        <div className="text-lg font-medium mb-2">
          {Math.round(progress)}% loaded
        </div>
        {item && (
          <div className="text-xs text-gray-400 max-w-xs text-center truncate">
            Loading: {item}
          </div>
        )}
        <div className="text-xs text-gray-500 mt-1">
          {loaded}/{total} assets loaded
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
