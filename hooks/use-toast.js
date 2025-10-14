"use client";

import * as React from "react";
import { toast as sonnerToast } from "sonner";

/**
 * This hook wraps the Sonner toast API
 * to keep your `useToast` and `toast()` usage compatible
 * with your existing Contact form and components.
 */

export function useToast() {
  const toast = (options) => {
    // supports both string and object
    if (typeof options === "string") {
      sonnerToast(options);
    } else {
      const { title, description, variant } = options;
      const type =
        variant === "destructive"
          ? "error"
          : variant === "success"
          ? "success"
          : "info";

      sonnerToast[type](
        title || "Notification",
        {
          description: description || "",
          duration: 4000,
        }
      );
    }
  };

  const dismiss = sonnerToast.dismiss;

  return { toast, dismiss };
}

// ✅ optional — export a ready-to-use toast function
export const toast = (options) => {
  if (typeof options === "string") {
    return sonnerToast(options);
  }

  const { title, description, variant } = options;
  const type =
    variant === "destructive"
      ? "error"
      : variant === "success"
      ? "success"
      : "info";

  return sonnerToast[type](
    title || "Notification",
    {
      description: description || "",
      duration: 4000,
    }
  );
};


export { Toaster } from "@/components/ui/sonner";
