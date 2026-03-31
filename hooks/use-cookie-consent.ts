"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "nutri-cookie-consent";

export type ConsentLevel = "all" | "functional" | "necessary" | null;

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentLevel>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setConsent(parsed.consent as ConsentLevel);
      } catch {
        setConsent(null);
      }
    }
    setIsLoaded(true);
  }, []);

  const acceptAll = useCallback(() => {
    const value = { consent: "all", timestamp: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    setConsent("all");
  }, []);

  const acceptNecessary = useCallback(() => {
    const value = { consent: "necessary", timestamp: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    setConsent("necessary");
  }, []);

  const savePreferences = useCallback((level: ConsentLevel) => {
    const value = { consent: level, timestamp: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    setConsent(level);
  }, []);

  const showBanner = isLoaded && consent === null;

  return { consent, showBanner, acceptAll, acceptNecessary, savePreferences, isLoaded };
}
