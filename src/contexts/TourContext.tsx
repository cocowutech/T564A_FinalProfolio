// src/contexts/TourContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface TourContextType {
  isTourStarted: boolean;
  currentFrameIndex: number;
  setCurrentFrameIndex: (index: number) => void;
  totalFrames: number;
  startTour: (initialIndex?: number) => void;
  nextFrame: () => void;
  previousFrame: () => void;
  quitTour: () => void;
  showDetails: (index: number) => void;
  detailRequestId: number;
}

const TourContext = createContext<TourContextType | undefined>(undefined);

interface TourProviderProps {
  children: ReactNode;
  totalFrames: number;
}

export const TourProvider: React.FC<TourProviderProps> = ({
  children,
  totalFrames,
}) => {
  const [isTourStarted, setIsTourStarted] = useState(false);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(-1);
  const [detailRequestId, setDetailRequestId] = useState(0);

  // Tour control functions
  const startTour = (initialIndex = 0) => {
    setIsTourStarted(true);
    setCurrentFrameIndex(initialIndex);
  };

  const nextFrame = () => {
    if (currentFrameIndex < totalFrames - 1) {
      setCurrentFrameIndex((prev) => prev + 1);
    }
  };

  const previousFrame = () => {
    if (currentFrameIndex > 0) {
      setCurrentFrameIndex((prev) => prev - 1);
    }
  };

  const quitTour = () => {
    setIsTourStarted(false);
    setCurrentFrameIndex(-1);
  };

  const showDetails = (index: number) => {
    setIsTourStarted(true);
    setCurrentFrameIndex(index);
    setDetailRequestId((prev) => prev + 1);
  };

  const value = {
    isTourStarted,
    currentFrameIndex,
    setCurrentFrameIndex,
    totalFrames,
    startTour,
    nextFrame,
    previousFrame,
    quitTour,
    showDetails,
    detailRequestId,
  };

  return <TourContext.Provider value={value}>{children}</TourContext.Provider>;
};

// Custom hook to use the tour context
export const useTour = (): TourContextType => {
  const context = useContext(TourContext);
  if (context === undefined) {
    throw new Error("useTour must be used within a TourProvider");
  }
  return context;
};
