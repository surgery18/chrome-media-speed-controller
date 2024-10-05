# Media Speed Controller

**Media Speed Controller** is a Chrome extension that allows you to control the playback speed of media (video and audio) on the current tab. Perfect for platforms like Plex that lack built-in speed controls, this extension lets you watch your favorite content at your preferred speed with ease.

## Features

- **Predefined Speed Options:**
  - 1x
  - 1.25x
  - 1.5x
  - 1.75x
  - 2x
- **Custom Speed Input:**
  - Enter any speed value to set a custom playback rate.

## Installation

### 1. Download the Extension Files

Ensure you have the following files in a single folder (e.g., `MediaSpeedController`):

- `manifest.json`
- `popup.html`
- `popup.js`
- `icon.png`

### 2. Load the Extension in Chrome

1. **Open Google Chrome.**

2. **Navigate to the Extensions Page:**

   - Type `chrome://extensions/` in the address bar and press **Enter**.

3. **Enable Developer Mode:**

   - Toggle the **Developer mode** switch in the top right corner.

4. **Load the Unpacked Extension:**

   - Click on the **Load unpacked** button.
   - A file dialog will appear. Select the folder containing your extension files (e.g., `MediaSpeedController`).

5. **Verify Installation:**

   - The extension should now appear in your list of installed extensions with its icon next to the address bar.

## Usage

1. **Navigate to a Media Page:**

   - Go to any website that plays video or audio content (e.g., Plex, YouTube).

2. **Open the Extension Popup:**

   - Click on the **Media Speed Controller** extension icon in the Chrome toolbar.

3. **Adjust the Playback Speed:**

   - Click on any of the predefined speed buttons (1x, 1.25x, 1.5x, 1.75x, 2x) to set the playback rate.
   - To set a custom speed:
     - Enter the desired speed value in the **Custom speed** input box.
     - Click on the **Set Custom Speed** button.

**Example:** To watch a video at 2x speed on Plex:

- Open the video on Plex.
- Click on the **Media Speed Controller** extension icon.
- Click the **2x** button.

## Permissions

The extension requires the following permissions:

- **activeTab:** To access the current active tab where media is playing.
- **scripting:** To execute scripts on the current tab to adjust playback speed.

## Troubleshooting

- **Buttons Not Working:**

  - Ensure the extension is properly loaded and enabled.
  - Reload the extension by clicking the **Refresh** icon on the `chrome://extensions/` page.
  - Ensure the media element (video/audio) is present on the page.

- **Custom Speed Input Not Working:**

  - Make sure to enter a valid number greater than 0.
  - If invalid input is entered, an alert will prompt you to enter a valid number.

- **Playback Speed Not Changing:**
  - Some websites use custom media players that may override playback rate settings.
  - Try refreshing the page after setting the speed.

## Customization

You can customize the extension by modifying the CSS and HTML:

- **Styling:**

  - Adjust the `popup.html` file to change the appearance of buttons and input fields.

- **Icons:**
  - Replace the default icon with your own by placing an `icon.png` file in the extension folder and ensuring the `manifest.json` points to it correctly.

## Contributing

Contributions are welcome! If you have suggestions for improvements or encounter any issues, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Disclaimer

This extension is for personal use. Be mindful of the terms of service of websites you use it with, and ensure you are not violating any policies by modifying playback speeds.

---
