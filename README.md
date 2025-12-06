# Quick-Font-Scaller

An Obsidian plugin that allows you to quickly adjust the font size of the application interface and editor using commands.

## Features

* **Increase Font Size:** incrementally make the text larger.
* **Decrease Font Size:** incrementally make the text smaller.
* **Reset Font Size:** immediately return the font size to the default setting.
* **Status Bar Indicator:** shows the current zoom level or font size adjustment.

## Installation

### Manual Installation

1.  Download the latest release from the [Releases](https://github.com/DuckTapeKiller/Quick-Font-Scaller/releases) page.
2.  Extract the `main.js`, `manifest.json`, and `styles.css` files.
3.  Create a folder named `quick-font-scaller` in your vault's plugin directory:
    `<VaultFolder>/.obsidian/plugins/quick-font-scaller/`
4.  Move the extracted files into this folder.
5.  Reload Obsidian and enable the plugin in settings.

### From Community Plugins (Pending)

*Once this plugin is accepted into the official registry:*

1.  Open **Settings** > **Community Plugins**.
2.  Search for **Quick-Font-Scaller**.
3.  Click **Install** and **Enable**.

## Usage

You can control the font size using the Command Palette:

1.  Press `Ctrl + P` (or `Cmd + P` on macOS) to open the Command Palette.
2.  Type **Quick-Font-Scaller**.
3.  Select one of the following commands:
    * `Quick-Font-Scaller: Increase font size`
    * `Quick-Font-Scaller: Decrease font size`
    * `Quick-Font-Scaller: Reset font size`

### Hotkeys

To make this faster, assign hotkeys to these commands:

1.  Go to **Settings** > **Hotkeys**.
2.  Search for "Quick-Font-Scaller".
3.  Assign keys (e.g., `Ctrl + +` for increase, `Ctrl + -` for decrease).

## Development

1.  Clone the repository:
    ```bash
    git clone [https://github.com/DuckTapeKiller/Quick-Font-Scaller](https://github.com/DuckTapeKiller/Quick-Font-Scaller)
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start development mode:
    ```bash
    npm run dev
    ```

## Licence

MIT
