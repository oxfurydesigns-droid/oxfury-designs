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
}

export interface PreviousThemeDownloads {
  mtz?: string;
  backup?: string;
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
}

const oxG5Base: Theme = {
  id: "ox-g5",
  slug: "ox-g5",
  name: "OX G5",
  description: "OX G5 is a custom HyperOS theme by OXFURY DESIGNS featuring a clean glass-inspired interface with a distinctive red-and-white visual style. It includes custom icons, widgets, lockscreen elements, and system UI styling designed to create a consistent visual experience across HyperOS.",
  features: [
    "Custom red-and-white icon design",
    "Glass-inspired visual interface",
    "Custom clock and weather widgets",
    "Custom lockscreen and system UI elements",
    "Redesigned app icons with a consistent visual style",
    "Custom widget and typography styling",
    "Designed for HyperOS 1, HyperOS 2 and HyperOS 3"
  ],
  compatibility: ["HyperOS 1", "HyperOS 2", "HyperOS 3"],
  releaseDate: "2024-10-01",
  thumbnail: "/themes/ox-g5-preview.png",
  mainPreview: "/themes/ox-g5-preview.png",
  screenshots: [
    "/themes/ox-g5/screenshots/screenshot-01.png",
    "/themes/ox-g5/screenshots/screenshot-02.png",
    "/themes/ox-g5/screenshots/screenshot-03.png",
    "/themes/ox-g5/screenshots/screenshot-04.png",
    "/themes/ox-g5/screenshots/screenshot-05.png",
    "/themes/ox-g5/screenshots/screenshot-06.png",
    "/themes/ox-g5/screenshots/screenshot-07.png",
    "/themes/ox-g5/screenshots/screenshot-08.png"
  ],
  currentVersion: {
    version: "1.0.0",
    releaseDate: "2024-10-01",
    changelog: ["Initial release"],
    downloads: {
      themeStore: {
        hyperOS3: "https://zhuti.xiaomi.com/detail/3aca30fe-3904-4edb-888f-ccce6fe7fc5c",
        hyperOS12: "https://zhuti.xiaomi.com/detail/b190f4f4-ec97-457d-8354-3a43c33fcd75"
      },
      mtz: {
        hyperOS3: "https://filespay.uk/0r3nqofj7xax",
        hyperOS12: "https://filespay.uk/ij8l9mgh1hhr"
      },
      backup: "https://filespay.uk/211gvxgkporm"
    }
  },
  previousVersions: [
    {
      version: "0.9.0",
      releaseDate: "2024-09-15",
      changelog: ["Initial release"],
      downloads: {
        // mtz and backup left empty/null until provided
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

// Real data for OXFURY DESIGNS themes
export const themes: Theme[] = [
  oxG5Base,
  oxClay
];

export function getThemeBySlug(slug: string): Theme | undefined {
  return themes.find((theme) => theme.slug === slug);
}

export function getThemesByCategory(category: string): Theme[] {
  return themes;
}
