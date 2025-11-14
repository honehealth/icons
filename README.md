# @honehealth/icons

This package contains the SVG icons used across Hone Health's applications. The icons are processed and converted into React components using `svgr` and `svgo`.

## Requirements for Adding New Icons

### 1. **SVG File Requirements**

- Add all new icons as SVG files in the `src/icons` directory.
- Ensure SVG files:
  - Use `fill="#0E0B20"` or `fill="#161919"` or `fill="#202020"` for paths or shapes requiring customizable colors. These values will be replaced with `currentColor` during the build process for dynamic color support.
  - Avoid hardcoding other `fill` values unless necessary.
  - Are optimized for size and performance (e.g., no unnecessary metadata or attributes).

### 2. **File Naming**

- Name SVG files using **kebab-case** (e.g., `icon-2.svg`, `user-profile.svg`).
- During the build process, `svgr` converts file names to **PascalCase** for the generated React components:
  - Example:
    - `icon-2.svg` → `Icon2.js`
    - `user-profile.svg` → `UserProfile.js`
- Avoid spaces or special characters in file names.
