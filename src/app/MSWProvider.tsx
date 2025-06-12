"use client";

import { useEffect } from "react";

export function MSWProvider() {
  useEffect(() => {
    import("../mocks/browser").then(({ worker }) => {
      worker.start();
    });
  }, []);

  return null;
}
