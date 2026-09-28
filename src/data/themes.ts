export interface ThemeStoreLinks {
  hyperOS3?: string;
  hyperOS12?: string;
}

export interface MtzLinks {
  hyperOS3?: string;
  hyperOS12?: string;
}

export interface CurrentThemeDownloads {
  themeStore?: ThemeStoreLinks;
  mtz?: MtzLinks;
  backup?: string;
  telegram?: string;
}

export interface PreviousThemeDownloads {
  mtz?: MtzLinks | string;
  backup?: string;
  telegram?: string;
}

export interface ThemeVersion {
  version: string;
  releaseDate: string;
  changelog: string[];
  downloads?: CurrentThemeDownloads; // Used for current version
}

export interface PreviousThemeVersion {
  version: string;
  releaseDate: string;
  changelog: string[];
  downloads?: PreviousThemeDownloads;
  features?: string[];
  screenshots?: string[];
}

export interface Theme {
  id: string;
  slug: string;
  name: string;
  thumbnail: string;
  mainPreview: string;
  description: string;
  features: string[];
  compatibility: string[];
  releaseDate: string;
  screenshots: string[];
  currentVersion: ThemeVersion;
  previousVersions: PreviousThemeVersion[];
  category: string;
  popularity: number;
  archived?: boolean;
}

const oxG5Base: Theme = {
  id: "ox-g5",
  slug: "ox-g5",
  name: "OX G5",
  description: "OX G5 is a HyperOS theme built around a red and white style. The main focus is the custom icon pack, with 6,000+ icons using red gradients and a frosted background. The same style is carried through the home screen widgets, control center, and lock screen, so everything feels like part of the same theme.\n\nThe lock screen includes several customization options, including different wallpapers, clock fonts and colors, depth effects, gravity effects, shortcut buttons, and an interactive notification capsule. The control center has also been redesigned with an 8-tile layout and a semi-transparent bluish background for low-spec devices instead of the usual solid gray look.",
  features: [
    "6,000+ custom icons with red gradient and frosted backgrounds",
    "Matching clock and weather widgets",
    "Red-and-white design carried across the system UI",
    "Redesigned 8-tile control center",
    "Semi-transparent bluish control center for low-spec devices",
    "Multiple lock screen wallpapers with depth and gravity effects",
    "Custom lock screen clock fonts and colors",
    "Four lock screen shortcut buttons",
    "Interactive notification capsule",
    "Lock screen options for Gravity Sensor, Shuffled Icons and Depth Effect"
  ],
  compatibility: ["HyperOS 1", "HyperOS 2", "HyperOS 3"],
  releaseDate: "2026-09-28",
  thumbnail: "/themes/ox-g5-preview.png",
  mainPreview: "/themes/ox-g5-preview.png",
  screenshots: [
    "/themes/ox-g5/screenshots/1.png",
    "/themes/ox-g5/screenshots/2.png",
    "/themes/ox-g5/screenshots/3.png",
    "/themes/ox-g5/screenshots/4.png",
    "/themes/ox-g5/screenshots/5.png",
    "/themes/ox-g5/screenshots/6.png",
    "/themes/ox-g5/screenshots/7.png",
    "/themes/ox-g5/screenshots/8.png"
  ],
  currentVersion: {
    version: "2",
    releaseDate: "2026-09-28",
    changelog: ["Version 2 release"],
    downloads: {
      themeStore: {
        hyperOS3: "theme://zhuti.xiaomi.com/detail/e01391df-55dc-4d32-87ad-85eb30396ebc",
        hyperOS12: "theme://zhuti.xiaomi.com/detail/e01391df-55dc-4d32-87ad-85eb30396ebc"
      },
      mtz: {
        hyperOS3: "https://filespay.org/tos6ooht09aw",
        hyperOS12: "https://filespay.org/ai73bbcs9wti"
      },
      backup: "https://filespay.us/lyn7ukz4q0gv"
    }
  },
  previousVersions: [
    {
      version: "1",
      releaseDate: "2024-09-15",
      changelog: ["Initial release"],
      features: [], // Left empty for correct features to be supplied later if needed
      screenshots: [
        "/themes/ox-g5/versions/v1/screenshot-01.png",
        "/themes/ox-g5/versions/v1/screenshot-02.png",
        "/themes/ox-g5/versions/v1/screenshot-03.png",
        "/themes/ox-g5/versions/v1/screenshot-04.png",
        "/themes/ox-g5/versions/v1/screenshot-05.png",
        "/themes/ox-g5/versions/v1/screenshot-06.png",
        "/themes/ox-g5/versions/v1/screenshot-07.png",
        "/themes/ox-g5/versions/v1/screenshot-08.png"
      ],
      downloads: {
        // MTZ URL to be supplied later
        mtz: undefined
      }
    }
  ],
  category: "Latest Themes",
  popularity: 100,
};

const oxClay: Theme = {
  id: "ox-clay",
  slug: "ox-clay",
  name: "OX CLAY",
  description: "OX CLAY brings a soft clay-inspired visual style to HyperOS, combining dimensional icons with a clean glassmorphism interface, dynamic lockscreen elements, and customizable system panels.\n\nOX CLAY is a clay-inspired HyperOS theme built around soft dimensional icons, translucent glass surfaces, and a clean, minimal visual language. The theme features redesigned clay-style app icons, a large-tile Control Center with frosted glass effects, and a dynamic lockscreen with oversized typography and customizable layouts. It also includes customizable clock, calendar, weather, and Dynamic Capsule elements, with options for adjusting the lockscreen appearance and behavior. The overall design combines soft 3D textures with transparent, blurred panels for a cohesive modern interface.",
  features: [
    "Clay-style 3D app icons",
    "12 large-tile Control Center with glass effect",
    "Dynamic lockscreen with translucent glass panels",
    "Customizable lockscreen clock and layout",
    "Customizable Dynamic Capsule",
    "Customizable calendar and weather panels",
    "Multiple lockscreen customization options",
    "Soft 3D visual elements with frosted-glass effects"
  ],
  compatibility: ["HyperOS 3", "HyperOS 1 & 2 (Coming soon)"],
  releaseDate: "2026-09-23",
  thumbnail: "/themes/ox-clay-preview.png",
  mainPreview: "/themes/ox-clay-preview.png",
  screenshots: [
    "/themes/ox-clay/screenshots/screenshot-01.png",
    "/themes/ox-clay/screenshots/screenshot-02.png",
    "/themes/ox-clay/screenshots/screenshot-03.png",
    "/themes/ox-clay/screenshots/screenshot-04.png",
    "/themes/ox-clay/screenshots/screenshot-05.png",
    "/themes/ox-clay/screenshots/screenshot-06.png",
    "/themes/ox-clay/screenshots/screenshot-07.png",
    "/themes/ox-clay/screenshots/screenshot-08.png"
  ],
  currentVersion: {
    version: "1",
    releaseDate: "2026-09-23",
    changelog: ["Initial release"],
    downloads: {
      themeStore: {
        hyperOS3: "theme://zhuti.xiaomi.com/detail/b190f4f4-ec97-457d-8354-3a43c33fcd75"
      },
      mtz: {
        hyperOS3: "https://filespay.top/qiekcp8ri66v",
        hyperOS12: "https://filespay.top/y6y9uq7almoi"
      },
      backup: "https://filespay.top/9amihevl2zh9"
    }
  },
  previousVersions: [],
  category: "Latest Themes",
  popularity: 100,
};

const oxG4: Theme = {
  id: "ox-g4",
  slug: "ox-g4",
  name: "OX G4",
  description: "OX G4 is a glass-style HyperOS theme built around a liquid glass look across the lock screen, home screen, widgets, and Control Center.\n\nThe lock screen is the main highlight, featuring a large liquid glass clock with a transparent and glossy appearance. The wallpaper can also be customized with different visual effects, and the theme includes four wallpaper options. Notifications use a stacked glass-style layout, with additional lock screen widgets and customizable elements.\n\nThe home screen includes a detailed glass-style clock and weather widget that displays time, weather, and forecast information in a clean layout. The icons use a glossy glass appearance that matches the overall design.\n\nThe Control Center has been redesigned with 8 large tiles and translucent glass elements, along with different color accents for active controls.",
  features: [
    "Liquid glass lock screen clock",
    "Glossy and transparent clock design",
    "Four built-in lock screen wallpaper options",
    "Customizable wallpaper effects",
    "Stacked glass-style notifications",
    "Customizable lock screen elements and widgets",
    "Detailed clock and weather home screen widget",
    "Weather and forecast information in the widget",
    "Glossy glass-style app icons",
    "Redesigned 8-tile Control Center",
    "Translucent glass-style Control Center",
    "Color accents for active controls",
    "Matching glass design across the system UI"
  ],
  compatibility: ["HyperOS 1", "HyperOS 2", "HyperOS 3"],
  releaseDate: "2026-09-04",
  thumbnail: "/themes/ox-g4-preview.png",
  mainPreview: "/themes/ox-g4-preview.png",
  screenshots: [
    "/themes/ox-g4/screenshots/1.png",
    "/themes/ox-g4/screenshots/2.png",
    "/themes/ox-g4/screenshots/3.png",
    "/themes/ox-g4/screenshots/4.png",
    "/themes/ox-g4/screenshots/5.png",
    "/themes/ox-g4/screenshots/6.png",
    "/themes/ox-g4/screenshots/7.png"
  ],
  currentVersion: {
    version: "1",
    releaseDate: "2026-09-04",
    changelog: ["Initial release"],
    downloads: {
      themeStore: {
        hyperOS3: "theme://zhuti.xiaomi.com/detail/81d368a5-c405-462e-ac82-943ab985514e",
        hyperOS12: "theme://zhuti.xiaomi.com/detail/debd297d-126c-48f9-a943-d0918175a6ab"
      },
      mtz: {
        hyperOS3: "https://filespay.org/ddfvbf2d7b2j",
        hyperOS12: "https://filespay.org/ddfvbf2d7b2j"
      },
      backup: "https://filespay.uk/gjrmv9uav74n",
      telegram: "https://t.me/englishthemesoxfury"
    }
  },
  previousVersions: [],
  category: "Latest Themes",
  popularity: 100,
};

const oxM1: Theme = {
  id: "ox-m1",
  slug: "ox-m1",
  name: "OX M1",
  description: "OX M1 is a clean, glass-style HyperOS theme with the lock screen as its main feature. It focuses on a large clock, translucent UI elements, multiple customization options, and a minimal overall design.\n\nThe lock screen includes multiple clock styles, different date formats, color options, different widgets, and 12 wallpapers to choose from. It also supports depth effects and a gravity sensor for a more interactive lock screen experience. The wallpaper selection panel and customization controls are integrated into the same glass-style interface.\n\nThe control center follows the same design with translucent glass panels, rounded controls, and a clean layout. The home screen uses a large clock and matching system elements to keep the overall appearance consistent.\n\nThe icon pack uses rounded-square icons with a clean shape and multiple color styles that match the theme's minimal interface.",
  features: [
    "Custom lock screen with a large clock design",
    "Multiple lock screen clock styles",
    "Different date and date-format options",
    "Multiple lock screen widgets",
    "12 built-in wallpapers to choose from",
    "Custom lock screen color options",
    "Depth effect support",
    "Gravity sensor support for the lock screen",
    "Glass-style lock screen interface with translucent panels",
    "Built-in wallpaper selection panel",
    "Custom lock screen controls and interactive elements",
    "Glass-style redesigned Control Center",
    "Clean and minimal Control Center layout",
    "Large clock design for the home screen",
    "Rounded-square custom icon design",
    "Multiple icon color styles",
    "Consistent glass and translucent design across the system UI"
  ],
  compatibility: ["HyperOS 1", "HyperOS 2", "HyperOS 3"],
  releaseDate: "2026-09-14",
  thumbnail: "/themes/ox-m1-preview.png",
  mainPreview: "/themes/ox-m1-preview.png",
  screenshots: [
    "/themes/ox-m1/screenshots/1.png",
    "/themes/ox-m1/screenshots/2.png",
    "/themes/ox-m1/screenshots/3.png",
    "/themes/ox-m1/screenshots/4.png",
    "/themes/ox-m1/screenshots/5.png",
    "/themes/ox-m1/screenshots/6.png",
    "/themes/ox-m1/screenshots/7.png",
    "/themes/ox-m1/screenshots/8.png"
  ],
  currentVersion: {
    version: "1",
    releaseDate: "2026-09-14",
    changelog: ["Initial release"],
    downloads: {
      themeStore: {
        hyperOS3: "theme://zhuti.xiaomi.com/detail/4806f90e-a659-48a0-a0d6-4172192b4137",
        hyperOS12: "theme://zhuti.xiaomi.com/detail/0e6aefc3-08e1-47d9-8be0-bd879ed00764"
      },
      mtz: {
        hyperOS3: "https://filespay.uk/86clcl2gikmu",
        hyperOS12: "https://filespay.uk/j3nra1ftcep8"
      },
      backup: "https://filespay.uk/mgpq9av2wmy9",
      telegram: "https://t.me/englishthemesoxfury"
    }
  },
  previousVersions: [],
  category: "Latest Themes",
  popularity: 100,
};

const oxM2: Theme = {
  id: "ox-m2",
  slug: "ox-m2",
  name: "OX M2",
  description: "OX M2 is a glass-style HyperOS theme focused on customization, especially the lock screen and home screen. It uses rounded elements, translucent panels, large clocks, customizable widgets, and colorful system icons.\n\nThe lock screen has multiple built-in wallpapers and several customization options. You can change the clock style, date format, colors, widgets, wallpaper effects, and other lock screen settings. It also supports depth effects, gravity effects, wallpaper blur, dark overlay, and other visual options.\n\nThe home screen uses rounded circular icons with different color styles and a large collection of customizable clock and information widgets. The main glass-style widget has multiple faces and can display different types of information.\n\nThe Control Center has been redesigned with an 8-tile layout and translucent controls, while keeping the same clean style as the rest of the theme.",
  features: [
    "Customizable lock screen with multiple built-in wallpapers",
    "18 built-in wallpapers to choose from",
    "Multiple lock screen wallpaper effects",
    "Depth-of-field effect",
    "Gravity wallpaper effect",
    "Wallpaper blur option",
    "Wallpaper darkening and dark overlay controls",
    "8 different clock styles",
    "Fully customizable lock screen clock",
    "Adjustable clock height and opacity",
    "Multiple clock color options",
    "Multiple date formats and date styles",
    "Adjustable date opacity and color",
    "Multiple customizable lock screen widgets",
    "Customizable widget position",
    "Large collection of widget styles",
    "Glass-style home screen widgets",
    "Multiple widget faces and layouts",
    "Small built-in games and additional interactive elements",
    "Rounded circular custom icons",
    "Multiple icon color styles",
    "Redesigned Control Center with 8 large tiles",
    "Translucent and glass-style Control Center",
    "Matching visual style across the lock screen, home screen, widgets, and system UI"
  ],
  compatibility: ["HyperOS 1", "HyperOS 2", "HyperOS 3"],
  releaseDate: "2026-09-11",
  thumbnail: "/themes/ox-m2-preview.png",
  mainPreview: "/themes/ox-m2-preview.png",
  screenshots: [
    "/themes/ox-m2/screenshots/1.png",
    "/themes/ox-m2/screenshots/2.png",
    "/themes/ox-m2/screenshots/3.png",
    "/themes/ox-m2/screenshots/4.png",
    "/themes/ox-m2/screenshots/5.png",
    "/themes/ox-m2/screenshots/6.png",
    "/themes/ox-m2/screenshots/7.png",
    "/themes/ox-m2/screenshots/8.png",
    "/themes/ox-m2/screenshots/9.png"
  ],
  currentVersion: {
    version: "1",
    releaseDate: "2026-09-11",
    changelog: ["Initial release"],
    downloads: {
      themeStore: {
        hyperOS3: "theme://zhuti.xiaomi.com/detail/bbbb789f-b3ce-45bb-bae9-1b7319755dbe",
        hyperOS12: "theme://zhuti.xiaomi.com/detail/5a34098c-508e-4c6b-80e4-78defd92b25d"
      },
      mtz: {
        hyperOS3: "https://filespay.vip/zse2f29ttnwf",
        hyperOS12: "https://filespay.vip/0zbuoyut4wp7"
      },
      backup: "https://filespay.vip/xwzvgf88hqg6",
      telegram: "https://t.me/englishthemesoxfury"
    }
  },
  previousVersions: [],
  category: "Latest Themes",
  popularity: 100,
};

// Real data for OXFURY DESIGNS themes
export const themes: Theme[] = [
  oxG5Base,
  oxClay,
  oxG4,
  oxM1,
  oxM2
];

export function getThemeBySlug(slug: string): Theme | undefined {
  return themes.find((theme) => theme.slug === slug);
}

export function getThemesByCategory(category: string): Theme[] {
  return themes;
}

export const latestThemeId = themes
  .filter((t) => !t.archived)
  .sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())[0]?.id;
