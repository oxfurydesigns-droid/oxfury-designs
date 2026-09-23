"use client";

import { useState } from "react";
import Navigation, { Tab, TABS } from "@/components/Navigation";
import ThemeGrid from "@/components/ThemeGrid";
import { themes } from "@/data/themes";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);

  // Filter themes based on the active tab
  const filteredThemes = themes.filter((theme) => theme.category === activeTab);

  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
      {/* Hero Section */}
      <div className="mb-10 max-w-3xl">
        <h1 className="text-sm font-semibold tracking-widest text-gray-500 dark:text-gray-400 mb-3">
          OX×MS DESIGNS
        </h1>
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl lg:text-6xl text-balance">
          HyperOS themes, redesigned.
        </h2>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-400">
          Original HyperOS themes, custom interfaces, and detailed system designs.
        </p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-100 dark:border-[#1a1b1e] pb-4 gap-4">
        <h3 className="text-sm font-bold tracking-wider text-gray-900 dark:text-gray-100 uppercase">
          Featured Themes
        </h3>
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      <ThemeGrid themes={filteredThemes} />
    </div>
  );
}
