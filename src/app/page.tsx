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
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl">
          Themes crafted by OXFURY DESIGNS
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Free HyperOS themes designed by OXFURY DESIGNS with a focus on clean visuals, unique details, and everyday usability.
        </p>
      </div>

      <div className="mb-8 border-b border-gray-200 dark:border-gray-800">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      <ThemeGrid themes={filteredThemes} />
    </div>
  );
}
