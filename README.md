# The Photobooth Project

The Photobooth Project is a fully client-side image capture and processing application designed to **protect user privacy**. All captured images, filters, and generated outputs are processed entirely in-browser on the user’s device. **No third-party servers are involved**, and all temporary data is cleared automatically when the session ends.

<img src="https://api.microlink.io/?url=https://the-photobooth-project.vercel.app&screenshot=true&meta=false&embed=screenshot.url&type=jpeg&overlay.browser=light&overlay.background=linear-gradient%28315deg%2C%20%23610033%200%25%2C%20%23df3e4c%2050%25%2C%20%23dc949e%20100%25%29" />

---

## Features

- Client-side image processing only (no data leaves your device)
- Webcam capture and file upload support
- Real-time CSS-based filters
- Customizable photo strips (background color, footer text, layout)
- 1–4 image strip generation
- GIF generation from captured images
- Session gallery in memory (cleared on page refresh or exit)
- Export as PNG or GIF, or print directly from the device
- All generated content is **copyright-free** for user use
- Cross-browser support on modern browsers

---

## Technology Stack

- **Framework:** Next.js
- **UI:** ShadCN
- **Styling:** Tailwind CSS
- **Image Generation:** html-to-image
- **GIF Generation:** gifshot
- **Filters:** CSS filters using **[CSSGram by Una](https://una.github.io/CSSgram/)**

---

## Prerequisites

- **Node.js:** v24.12.0+
- **Package Manager:** pnpm
- **Browser:** Modern browser with Canvas API support
  - Note: Camera permissions may need to be enabled differently depending on the browser being used.

---

## Installation

```bash
git clone [REPOSITORY_URL]
cd the-photobooth-project
pnpm install
pnpm run dev
```

Application runs at:
`http://localhost:3000`

### Commands

```bash
pnpm run dev      # Run development server
pnpm run build    # Build for production
pnpm run start    # Start production server
pnpm run lint     # Run linter
```

---

## Usage

1. Open the application
2. Select input method: webcam or upload an image
3. Apply filters in real-time
4. Capture 1–4 images
5. Customize strip layout, background color, and footer text
6. Generate a PNG, GIF, or print directly
7. Session gallery allows previewing images, stored **only in memory**

---

## How It Works

- The `<video>` feed or uploaded image is rendered into a **hidden node element**, styled and filtered the same way as the preview element.
- Filters are applied to both the preview and hidden node via CSS classes
- `html-to-image` captures the hidden node as a **PNG blob URL**.
- Images are compiled into strips or GIFs entirely in-browser.
- Blob URLs are revoked after use to ensure no data persistence.
- All processing happens **locally**—nothing is sent to external servers.

---

## Browser Compatibility

**Supported:**
Chrome, Edge, Firefox, Safari, modern mobile browsers

**Caution:**
Legacy browsers or those without **Canvas API or modern JS support** may not function correctly.

---

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## Attributions

This project uses copyright-free materials. See the [ATTRIBUTIONS](ATTRIBUTIONS.md) file for detailed credits.
