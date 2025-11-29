import React, { useState, useEffect } from "react";

interface TitleScreenProps {
  onFading?: () => void;
  onComplete?: () => void;
}

const TitleScreen: React.FC<TitleScreenProps> = ({ onFading, onComplete }) => {
  const [animationState, setAnimationState] = useState<
    "initial" | "visible" | "fading"
  >("initial");
  const [displayedText, setDisplayedText] = useState("");
  const fullText =
    "❤️ A heartfelt thank you to Professor Karen and the incredible TFs — this course changed how I think about AI and creativity.";

  useEffect(() => {
    const appearTimer = setTimeout(() => {
      setAnimationState("visible");
    }, 300);

    const fadeOutTimer = setTimeout(() => {
      setAnimationState("fading");
      if (onFading) onFading();
    }, 6000);

    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 7000);

    return () => {
      clearTimeout(appearTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (animationState !== "visible") return;

    let currentIndex = 0;
    const typewriterTimer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typewriterTimer);
      }
    }, 40);

    return () => clearInterval(typewriterTimer);
  }, [animationState]);

  return (
    <div
      className="fixed inset-0 w-full h-full flex items-center justify-center z-40 pointer-events-none"
      style={{
        opacity: animationState === "fading" ? 0 : 1,
        transition: "opacity 1s ease-out",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="flex flex-col items-center">
        <div className="overflow-hidden">
          <h1
            className="text-white text-5xl md:text-7xl font-light tracking-wider text-center px-4"
            style={{
              transform:
                animationState === "initial"
                  ? "translateY(100%)"
                  : animationState === "fading"
                  ? "translateY(100%)"
                  : "translateY(0)",
              opacity:
                animationState === "initial" || animationState === "fading"
                  ? 0
                  : 1,
              transition:
                "transform 1.2s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s ease-out",
              textShadow: "0 2px 10px rgba(0,0,0,0.8)",
            }}
          >
            Coco Wu's Vibe Coding Portfolio
          </h1>
        </div>
        {/* Typewriter thank you message */}
        <div
          className="mt-8 px-4 max-w-2xl"
          style={{
            opacity: animationState === "visible" ? 1 : 0,
            transition: "opacity 0.5s ease-out",
          }}
        >
          <p
            className="text-white/90 text-xl md:text-2xl font-light text-center"
            style={{
              textShadow: "0 2px 8px rgba(0,0,0,0.6)",
              minHeight: "3em",
            }}
          >
            {displayedText}
            <span
              className="inline-block w-0.5 h-5 md:h-6 bg-white/80 ml-1 align-middle"
              style={{
                animation: "blink 1s step-end infinite",
              }}
            />
          </p>
        </div>
      </div>
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default TitleScreen;
