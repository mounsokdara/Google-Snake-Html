# Snake (mobile) – split project

No base64 anywhere: every image, sound, script and stylesheet is a real file.
Serve the folder over HTTP (GitHub Pages, `python3 -m http.server`, any web host) and open `index.html`.
Opening it by double-click (file://) is not supported: browsers block the game's fetch/XHR of local files.

| Folder    | Contents |
|-----------|----------|
| `assets/` | Images, SVG and audio (real files) |
| `js/`     | `loader.js`, `device-detect.js`, `apply-mode.js`, `start.js`, Google inline scripts, `asset-manifest.js` (original URL -> file), and `game/` (game bundles) |
| `css/`    | `mobile.css`, Google inline styles, and `game/` (game stylesheets) |
| `markup/` | Page markup, written into the page in its original position |

Mobile joystick is **off by default**; the toggle button turns it on.
