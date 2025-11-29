import React from "react";
import { BookOpen } from "lucide-react";
import Controls from "./Controls";
import TourControls from "./TourControls";
import { useAnimation } from "../../contexts/AnimationContext";
import LoadingScreen from "./LoadingScreen";
import TitleScreen from "./TitleOverlay";

interface LoadingScreenWrapperProps {
  assetsReady: boolean;
  onComplete: () => void;
}

const LoadingScreenWrapper: React.FC<LoadingScreenWrapperProps> = ({
  assetsReady,
  onComplete,
}) => {
  const setIsLoading = (isLoading: boolean) => {
    if (!isLoading) {
      onComplete();
    }
  };

  return (
    <LoadingScreen setIsLoading={setIsLoading} assetsReady={assetsReady} />
  );
};

const UIElements: React.FC = () => {
  const {
    currentScreen,
    assetsReady,
    handleLoadingComplete,
    handleTitleFading,
    handleTitleComplete,
  } = useAnimation();

  return (
    <>
      {/* Black screen when loading */}
      {currentScreen === "loading" && (
        <div className="fixed inset-0 bg-black z-20" />
      )}

      {/* Loading screen */}
      {currentScreen === "loading" && (
        <LoadingScreenWrapper
          assetsReady={assetsReady}
          onComplete={handleLoadingComplete}
        />
      )}

      {/* Title screen - with blurred scene in background */}
      {currentScreen === "title" && (
        <TitleScreen
          onFading={handleTitleFading}
          onComplete={handleTitleComplete}
        />
      )}

      {/* UI controls (visible only in scene mode) */}
      {currentScreen === "scene" && (
        <>
          <div
            className="absolute top-0 left-0 p-4 text-white z-40"
            style={{
              animation: "fadeIn 1s ease-out forwards",
            }}
          >
            <h1 className="text-xl font-bold">Coco Wu</h1>
            <p className="text-sm text-gray-400">EDU T564A</p>
            <a
              href="https://docs.google.com/presentation/d/1w0BYf4W40y_YLMA4hQmUxj_SxzJ9B-6O_ap5yy8edYo/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 mt-2 text-sm hover:text-gray-300 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Design Journal
            </a>
          </div>

          <Controls
            style={{
              animation: "fadeIn 1s ease-out forwards",
            }}
          />

          <TourControls
            style={{
              animation: "fadeIn 1s ease-out forwards",
            }}
          />
        </>
      )}
    </>
  );
};

export default UIElements;
