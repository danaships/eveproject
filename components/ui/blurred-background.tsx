"use client";

import { SpaceBackground } from "./space-background";

export function BlurredBackground() {
  return (
    <>
      <div className="fixed inset-0 bg-background/80 backdrop-blur-[2px]" />
      <SpaceBackground />
    </>
  );
}