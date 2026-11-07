# Snake (mobile) – readable project layout

No base64 anywhere: every image, sound, script and stylesheet is a real file.
Serve the folder over HTTP (GitHub Pages, `python3 -m http.server`, any web host) and open `index.html`.
Opening it by double-click (file://) is not supported: browsers block the game's fetch/XHR of local files.

| Folder | Contents |
|--------|----------|
| `js/` | Our scripts: `loader.js`, `device-detect.js`, `apply-mode.js`, `start.js`, `asset-manifest.js` (original URL -> file) |
| `js/game/` | `snake-game.js` – the Snake game itself |
| `js/google/` | Google page framework: `core-framework.js`, `shared-modules.js`, `sharing.js`, `feature-flags.js`, `error-handler.js`, `retry-backoff.js`, `silk-support.js`, `botguard.js`, `chunk-types.json` |
| `js/inline/` | Google's inline page scripts: `google-page-settings.js`, `google-experiment-ids.js`, `browser-utilities.js`, ... |
| `css/` | `mobile.css` (ours), `inline/` (page + game UI styles), `google/` (design tokens, spacing) |
| `assets/` | `audio/`, `apples-and-graphics/`, `trophies/`, `colors-and-themes/`, `counts-and-keys/`, `sizes/`, `speeds-and-endings/`, `common/`, `ui/`, `icons/`, `pixel/`, `real/` |
| `markup/` | Page markup written into the page at its original position: `game-controls.js`, `game-modes-menu.js`, `share-dialog.js` |

Mobile joystick is **off by default**; the toggle button turns it on.

Code style: all JS/CSS is formatted multi-line. In Google's files the *local* variables and
parameters were renamed to lowercase names derived from how they are used (original names were
lost when Google minified the code); property names and global names are unchanged on purpose.
