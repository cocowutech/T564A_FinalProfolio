import { useState, useEffect } from "react";
import { portfolioItems, PortfolioItem } from "./config/portfolioConfig";
import SwipeableContainer from "./components/ui/SwipeableContainer";
import { TourProvider, useTour } from "./contexts/TourContext";
import { AnimationProvider } from "./contexts/AnimationContext";
import Scene from "./components/Scene";
import UIElements from "./components/ui/UIElements";
import DetailPanel from "./components/ui/DetailPanel";

// Inner component that can access TourContext
const AppContent = () => {
  const { currentFrameIndex, detailRequestId } = useTour();
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // Auto-open panel when frame changes (from any source: click, arrow keys, swipe)
  useEffect(() => {
    if (currentFrameIndex >= 0 && currentFrameIndex < portfolioItems.length) {
      setSelectedItem(portfolioItems[currentFrameIndex]);
      setIsPanelOpen(true);
    } else {
      setIsPanelOpen(false);
      setSelectedItem(null);
    }
  }, [currentFrameIndex, detailRequestId]);

  const handleClosePanel = () => {
    setIsPanelOpen(false);
  };

  return (
    <>
      <SwipeableContainer>
        <Scene images={portfolioItems} />
        <UIElements />
      </SwipeableContainer>
      <DetailPanel
        item={selectedItem}
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
      />
    </>
  );
};

function App() {
  return (
    <div className="relative w-full h-screen">
      <AnimationProvider>
        <TourProvider totalFrames={portfolioItems.length}>
          <AppContent />
        </TourProvider>
      </AnimationProvider>
    </div>
  );
}

export default App;
