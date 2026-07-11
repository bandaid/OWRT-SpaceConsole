# OWRT Space Console 0.22.19

OWRT Space Console is an OpenWrt writable overlay storage inspection interface with a tabbed Space Tree workflow.

## Release

| Field | Value |
| --- | --- |
| Version | `0.22.19` |
| License | Apache-2.0 |
| Router page | `/www/owrt-space.html` |
| CGI route | `/www/cgi-bin/owrt-space` |
| Data route | `/www/cgi-bin/owrt-space-data` |

## Screenshots

These screenshots are embedded in the README with image markup. They are generated from this package. The Ink high contrast images use separate Ink high contrast files. The Steel desk images use separate Steel desk files.

### GitHub Pages, Steel desk

<img src="assets/screenshots/verified-github-pages-steel-desk-home.png" alt="GitHub Pages home in Steel desk theme" width="920">

### GitHub Pages, Ink high contrast

<img src="assets/screenshots/verified-github-pages-ink-high-contrast-home.png" alt="GitHub Pages home in Ink high contrast theme" width="920">

### Router app, Steel desk Overview

<img src="assets/screenshots/verified-router-steel-desk-overview.png" alt="Router app Overview in Steel desk theme" width="920">

### Router app, Ink high contrast Overview

<img src="assets/screenshots/verified-router-ink-high-contrast-overview.png" alt="Router app Overview in Ink high contrast theme" width="920">

### Router app, Steel desk Filesystems

<img src="assets/screenshots/verified-router-steel-desk-filesystems.png" alt="Router app Filesystems in Steel desk theme" width="920">

### Router app, Ink high contrast Filesystems

<img src="assets/screenshots/verified-router-ink-high-contrast-filesystems.png" alt="Router app Filesystems in Ink high contrast theme" width="920">

## Screenshot verification

`docs/SCREENSHOT_SHA256SUMS.txt` lists each screenshot hash. `docs/SCREENSHOT_PAIR_AUDIT.txt` records that the Steel desk and Ink high contrast screenshot pairs are not the same image.

## Install

```sh
sh install_owrt_space_console_0_22_19_FULL_REPLACE_APP.sh
```

Open after install:

```text
https://openwrt-ip-address/owrt-space.html
```

Live refresh route:

```text
https://openwrt-ip-address/cgi-bin/owrt-space?refresh=1
```

## GitHub Pages themes

The GitHub Pages index exposes only two themes:

- Steel desk
- Ink high contrast

## License

Apache-2.0. See `LICENSE`.
