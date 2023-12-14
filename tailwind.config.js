/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('https://wallpaperaccess.com/full/1799795.jpg')",
        "button-texture":
          "url('https://images2.alphacoders.com/742/thumbbig-742320.webp')",
        "hero-second":
          "url('https://e1.pxfuel.com/desktop-wallpaper/97/503/desktop-wallpaper-animated-backgrounds-with-musical-notes-music-notes-flowing-music-notes-background.jpg')",
        "footer-texture": "url('https://wallpaperaccess.com/full/1275092.jpg')",
        "music-texture": "url('https://wallpaperaccess.com/full/1799713.jpg')",
        "trailer-texture":
          "url('https://c4.wallpaperflare.com/wallpaper/94/797/206/kimi-no-na-wa-makoto-shinkai-starry-night-comet-wallpaper-preview.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
