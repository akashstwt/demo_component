"use client";

import React from "react";
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        direction="left"
        speed="normal"
      />
    </div>
  );
}

export default InfiniteMovingCardsDemo;
