# bunyan-lens-ext README

The bunyan-lens-ext provides a bunyan log viewer for Lens. Inspiration came from
the [lens-mutli-pod-logs](https://github.com/andrea-falco/lens-multi-pod-logs) extension.

## Features

This plugin adds a menu item to the Pods menu in Lens.  When clicked, it will open a new terminal with the bunyan log viewer.

## Requirements

Install bunyan globally:

```bash
npm install -g bunyan
```

## Installation Instructions

Start the Lens is running, and follow these simple steps:

1. Go to Extensions view (Menu -> File -> Extensions)
2. Enter the name of this extension, `@jdinsel-xealth/bunyan-lens-ext`
3. Click on the Install button
4. Make sure the extension is enabled (Lens → Extensions)

You may or may not need to refresh (or re-open) Lens for the plugin to render
the menu item. This may be necessary if Lens is already open on the Pods workload.

## Known Issues

On initial install, the bunyan log viewer may not appear in the menu. If this
occurs, refresh Lens and it should appear.

## Release Notes

Enjoy!

### 0.0.1

Initial release of the bunyan-lens-ext contains minimal functionality and allows
for the viewing of Logs through the use of the `bunyan` command line tool.
