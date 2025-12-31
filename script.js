// Glass bauble ornaments - positions aligned with tree sections
const baubles = [
  // Bottom section (tree at y:440-620) - ornaments at y:540-610
  { x: 100, y: 590, size: 24, color: "#e63946", delay: 2.6 },
  { x: 180, y: 610, size: 20, color: "#ffd700", delay: 2.7 },
  { x: 300, y: 620, size: 26, color: "#4cc9f0", delay: 2.8 },
  { x: 420, y: 605, size: 22, color: "#e63946", delay: 2.9 },
  { x: 500, y: 580, size: 24, color: "#9d4edd", delay: 3.0 },
  { x: 240, y: 570, size: 18, color: "#ffd700", delay: 3.1 },
  { x: 360, y: 580, size: 20, color: "#4cc9f0", delay: 3.2 },

  // Middle section (tree at y:290-440) - ornaments at y:380-430
  { x: 150, y: 430, size: 22, color: "#e63946", delay: 2.3 },
  { x: 240, y: 450, size: 20, color: "#9d4edd", delay: 2.4 },
  { x: 340, y: 445, size: 24, color: "#ffd700", delay: 2.5 },
  { x: 440, y: 420, size: 20, color: "#4cc9f0", delay: 2.6 },
  { x: 200, y: 400, size: 18, color: "#ffd700", delay: 2.7 },

  // Top section (tree at y:130-290) - ornaments at y:210-270
  { x: 220, y: 250, size: 18, color: "#e63946", delay: 2.0 },
  { x: 300, y: 270, size: 16, color: "#4cc9f0", delay: 2.1 },
  { x: 380, y: 240, size: 18, color: "#9d4edd", delay: 2.2 },
  { x: 270, y: 290, size: 16, color: "#ffd700", delay: 2.3 },
];

// Fairy lights - aligned with tree sections
const lights = [
  // Bottom garland (y: 550-600)
  { x: 120, y: 560, color: "#ff6b6b", delay: 3.3, glow: true },
  { x: 170, y: 580, color: "#feca57", delay: 3.35, glow: false },
  { x: 220, y: 595, color: "#48dbfb", delay: 3.4, glow: true },
  { x: 270, y: 605, color: "#ff6b6b", delay: 3.45, glow: false },
  { x: 320, y: 608, color: "#1dd1a1", delay: 3.5, glow: true },
  { x: 370, y: 600, color: "#feca57", delay: 3.55, glow: false },
  { x: 420, y: 590, color: "#48dbfb", delay: 3.6, glow: true },
  { x: 470, y: 570, color: "#ff6b6b", delay: 3.65, glow: false },

  // Middle garland (y: 390-430)
  { x: 160, y: 395, color: "#1dd1a1", delay: 3.0, glow: true },
  { x: 210, y: 415, color: "#ff6b6b", delay: 3.05, glow: false },
  { x: 260, y: 430, color: "#feca57", delay: 3.1, glow: true },
  { x: 310, y: 435, color: "#48dbfb", delay: 3.15, glow: false },
  { x: 360, y: 428, color: "#1dd1a1", delay: 3.2, glow: true },
  { x: 410, y: 415, color: "#ff6b6b", delay: 3.25, glow: false },
  { x: 450, y: 395, color: "#feca57", delay: 3.3, glow: true },

  // Top garland (y: 220-260)
  { x: 225, y: 225, color: "#48dbfb", delay: 2.7, glow: true },
  { x: 265, y: 245, color: "#ff6b6b", delay: 2.75, glow: false },
  { x: 305, y: 255, color: "#1dd1a1", delay: 2.8, glow: true },
  { x: 345, y: 248, color: "#feca57", delay: 2.85, glow: false },
  { x: 380, y: 230, color: "#48dbfb", delay: 2.9, glow: true },
];

// Garland positions - aligned with tree sections
const garlands = [
  { x: 110, y: 565, width: 380, delay: 3.2, rotation: 6 },
  { x: 150, y: 400, width: 310, delay: 2.9, rotation: 5 },
  { x: 210, y: 230, width: 190, delay: 2.6, rotation: 4 },
];

// Images for glowing gifts - using the three images in the images folder
const giftImages = [
  "images/Screenshot 2025-12-31 192351.png",
  "images/Screenshot 2025-12-31 192431.png",
  "images/Screenshot 2025-12-31 192449.png",
];

// Love messages and surprises for non-glowing gifts
const giftMessages = [
  "💕 Wishing you a year filled with love, laughter, and endless happiness! May 2026 bring all your dreams to life! 🌟",
  "🎉 May this New Year bring you joy that never fades, friends that never leave, and success in everything you do! ✨",
  "❤️ You are loved more than you know! Here's to a wonderful year ahead filled with beautiful moments! 🌹",
  "🌟 Cheers to new beginnings, fresh starts, and amazing adventures waiting for you in 2026! 🥂",
  "💫 May your heart be light, your troubles be few, and your blessings be many in the coming year! 🎊",
];

let glowingGiftIndex = 0;
let nonGlowingGiftIndex = 0;

// Get scale factor based on screen size
function getScaleFactor() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Landscape mode on small screens
  if (height < 500 && width > height) {
    return 0.5;
  }

  if (width <= 350) return 0.55;
  if (width <= 400) return 0.6;
  if (width <= 576) return 0.7;
  if (width <= 768) return 0.85;
  if (width <= 1024) return 0.9;
  return 1;
}

// Check if mobile
function isMobile() {
  return window.innerWidth <= 576;
}

function adjustBrightness(color, percent) {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;
  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
}

function lightenColor(color, percent) {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, (num >> 16) + amt);
  const G = Math.min(255, ((num >> 8) & 0x00ff) + amt);
  const B = Math.min(255, (num & 0x0000ff) + amt);
  return "#" + ((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1);
}

// Create snowflakes - Gentle falling
function createSnowflakes() {
  const snowflakeCount = 60;
  const snowflakes = ["❄", "❅", "❆", "✧", "·", "•"];

  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.textContent =
      snowflakes[Math.floor(Math.random() * snowflakes.length)];
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.fontSize = Math.random() * 10 + 8 + "px";
    snowflake.style.opacity = Math.random() * 0.4 + 0.3;
    snowflake.style.animationDuration = Math.random() * 10 + 15 + "s";
    snowflake.style.animationDelay = Math.random() * 10 + "s";
    document.body.appendChild(snowflake);
  }
}

// Create floating hearts
function createFloatingHearts() {
  const heartCount = 20;
  const hearts = ["♥", "♡", "❤", "💕"];
  const colors = [
    "#ff6b6b",
    "#ff8fa3",
    "#ffb3c1",
    "#c9184a",
    "#ff4d6d",
    "#ffccd5",
  ];

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 12 + 10 + "px";
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.opacity = Math.random() * 0.3 + 0.3;
    heart.style.animationDuration = Math.random() * 15 + 20 + "s";
    heart.style.animationDelay = Math.random() * 15 + "s";
    document.body.appendChild(heart);
  }
}

// Image modal functions
function openImageModal(imageUrl) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = imageUrl;
  modal.classList.add("active");
}

function closeImageModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.remove("active");
}

// Setup modal event listeners
function setupModalListeners() {
  const modal = document.getElementById("imageModal");
  const closeBtn = document.getElementById("closeModal");

  closeBtn.addEventListener("click", closeImageModal);

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeImageModal();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeImageModal();
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const scale = getScaleFactor();
  const mobile = isMobile();

  // Setup modal listeners
  setupModalListeners();

  // Create garlands first (behind other decorations) - only on larger screens
  if (!mobile) {
    garlands.forEach((g) => {
      const garland = document.createElement("div");
      garland.className = "garland";
      garland.style.left = g.x * scale + "px";
      garland.style.top = g.y * scale + "px";
      garland.style.width = g.width * scale + "px";
      garland.style.transform = `rotate(${g.rotation}deg)`;
      garland.style.animationDelay = g.delay + "s";
      container.appendChild(garland);
    });
  }

  // Create glass baubles - show on mobile too with reduced count
  const baublesToShow = mobile
    ? baubles.filter((b, i) => i % 2 === 0)
    : baubles;
  baublesToShow.forEach((b) => {
    const ornament = document.createElement("div");
    ornament.className = "ornament";
    ornament.style.left = b.x * scale + "px";
    ornament.style.top = b.y * scale + "px";
    ornament.style.width = b.size * scale + "px";
    ornament.style.height = b.size * scale + "px";
    ornament.style.background = `radial-gradient(circle at 30% 25%, 
      ${lightenColor(b.color, 60)} 0%, 
      ${lightenColor(b.color, 20)} 20%, 
      ${b.color} 60%, 
      ${adjustBrightness(b.color, -30)} 100%)`;
    ornament.style.animationDelay = b.delay + "s";
    ornament.style.boxShadow = `
      0 4px 12px rgba(0, 0, 0, 0.25),
      inset 0 -8px 20px ${adjustBrightness(b.color, -40)},
      inset 0 8px 15px ${lightenColor(b.color, 40)}`;
    container.appendChild(ornament);
  });

  // Create fairy lights - show on mobile too with reduced count
  const lightsToShow = mobile ? lights.filter((l, i) => i % 2 === 0) : lights;
  lightsToShow.forEach((l) => {
    const light = document.createElement("div");
    light.className = l.glow ? "light glow" : "light";
    light.style.left = l.x * scale + "px";
    light.style.top = l.y * scale + "px";
    light.style.background = `radial-gradient(circle at 50% 30%, 
      ${lightenColor(l.color, 50)} 0%, 
      ${l.color} 50%, 
      ${adjustBrightness(l.color, -20)} 100%)`;
    light.style.animationDelay = l.delay + "s";
    light.style.color = l.color;
    container.appendChild(light);
  });

  // Create gift boxes under the tree
  createGiftBoxes(container);

  // Create snowflakes and hearts after tree assembles
  setTimeout(createSnowflakes, 3000);
  setTimeout(createFloatingHearts, 3500);
});

// Gift box data
const gifts = [
  // Large gifts on the sides
  {
    x: 70,
    y: 640,
    width: 95,
    height: 75,
    boxColor: "#c0392b",
    ribbonColor: "#7cb342",
    delay: 2.8,
    glow: true,
  },
  {
    x: 450,
    y: 645,
    width: 88,
    height: 68,
    boxColor: "#27ae60",
    ribbonColor: "#e53935",
    delay: 2.9,
    glow: false,
  },

  // Medium gifts
  {
    x: 165,
    y: 660,
    width: 75,
    height: 60,
    boxColor: "#f39c12",
    ribbonColor: "#8e24aa",
    delay: 3.0,
    glow: false,
  },
  {
    x: 370,
    y: 655,
    width: 80,
    height: 65,
    boxColor: "#9b59b6",
    ribbonColor: "#ffb300",
    delay: 3.1,
    glow: true,
  },

  // Small gifts in front
  {
    x: 235,
    y: 680,
    width: 60,
    height: 48,
    boxColor: "#27ae60",
    ribbonColor: "#d32f2f",
    delay: 3.2,
    glow: false,
  },
  {
    x: 305,
    y: 675,
    width: 65,
    height: 52,
    boxColor: "#e74c3c",
    ribbonColor: "#43a047",
    delay: 3.3,
    glow: true,
  },

  // Tiny accent gifts
  {
    x: 130,
    y: 690,
    width: 48,
    height: 38,
    boxColor: "#f1c40f",
    ribbonColor: "#1e88e5",
    delay: 3.4,
    glow: false,
  },
  {
    x: 415,
    y: 685,
    width: 55,
    height: 44,
    boxColor: "#3498db",
    ribbonColor: "#fb8c00",
    delay: 3.5,
    glow: false,
  },
];

function createGiftBoxes(container) {
  glowingGiftIndex = 0;
  const mobile = isMobile();
  const scale = getScaleFactor();

  // Mobile gift positions (centered, fewer gifts)
  const mobileGifts = [
    {
      xPercent: 15,
      width: 50,
      height: 40,
      boxColor: "#c0392b",
      ribbonColor: "#7cb342",
      delay: 2.8,
      glow: true,
    },
    {
      xPercent: 70,
      width: 45,
      height: 36,
      boxColor: "#27ae60",
      ribbonColor: "#e53935",
      delay: 2.9,
      glow: false,
    },
    {
      xPercent: 35,
      width: 42,
      height: 34,
      boxColor: "#9b59b6",
      ribbonColor: "#ffb300",
      delay: 3.0,
      glow: true,
    },
    {
      xPercent: 55,
      width: 40,
      height: 32,
      boxColor: "#e74c3c",
      ribbonColor: "#43a047",
      delay: 3.1,
      glow: true,
    },
    {
      xPercent: 25,
      width: 35,
      height: 28,
      boxColor: "#f39c12",
      ribbonColor: "#8e24aa",
      delay: 3.2,
      glow: false,
    },
  ];

  const giftsToRender = mobile ? mobileGifts : gifts;

  giftsToRender.forEach((g) => {
    const gift = document.createElement("div");
    gift.className = g.glow ? "gift glow" : "gift";

    if (mobile) {
      // Use percentage-based positioning for mobile
      gift.style.left = g.xPercent + "%";
      gift.style.width = g.width + "px";
      gift.style.height = g.height + "px";
    } else {
      gift.style.left = g.x * scale + "px";
      gift.style.top = g.y * scale + "px";
      gift.style.width = g.width * scale + "px";
      gift.style.height = g.height * scale + "px";
    }
    gift.style.background = `linear-gradient(180deg, 
      ${lightenColor(g.boxColor, 20)} 0%, 
      ${g.boxColor} 30%, 
      ${adjustBrightness(g.boxColor, -20)} 100%)`;
    gift.style.animationDelay = g.delay + "s";
    gift.style.boxShadow = `0 5px 15px rgba(0, 0, 0, 0.2)`;

    // Add click handler for glowing gifts
    if (g.glow && glowingGiftIndex < giftImages.length) {
      const imageIndex = glowingGiftIndex;
      gift.addEventListener("click", function () {
        openImageModal(giftImages[imageIndex]);
      });
      glowingGiftIndex++;
    }

    // Vertical ribbon
    const ribbonV = document.createElement("div");
    ribbonV.className = "ribbon-v";
    ribbonV.style.background = `linear-gradient(90deg, 
      ${adjustBrightness(g.ribbonColor, -20)} 0%, 
      ${g.ribbonColor} 50%, 
      ${adjustBrightness(g.ribbonColor, -20)} 100%)`;
    gift.appendChild(ribbonV);

    // Horizontal ribbon
    const ribbonH = document.createElement("div");
    ribbonH.className = "ribbon-h";
    ribbonH.style.background = `linear-gradient(180deg, 
      ${adjustBrightness(g.ribbonColor, -10)} 0%, 
      ${g.ribbonColor} 50%, 
      ${adjustBrightness(g.ribbonColor, -20)} 100%)`;
    gift.appendChild(ribbonH);

    // Bow
    const bow = document.createElement("div");
    bow.className = "bow";

    // Create bow loops as actual elements instead of pseudo-elements
    const loopLeft = document.createElement("div");
    loopLeft.className = "bow-loop bow-loop-left";
    loopLeft.style.background = `linear-gradient(135deg, 
      ${lightenColor(g.ribbonColor, 30)} 0%, 
      ${g.ribbonColor} 50%, 
      ${adjustBrightness(g.ribbonColor, -30)} 100%)`;
    bow.appendChild(loopLeft);

    const loopRight = document.createElement("div");
    loopRight.className = "bow-loop bow-loop-right";
    loopRight.style.background = `linear-gradient(135deg, 
      ${lightenColor(g.ribbonColor, 30)} 0%, 
      ${g.ribbonColor} 50%, 
      ${adjustBrightness(g.ribbonColor, -30)} 100%)`;
    bow.appendChild(loopRight);

    gift.appendChild(bow);

    // Bow center knot
    const bowCenter = document.createElement("div");
    bowCenter.className = "bow-center";
    bowCenter.style.background = `radial-gradient(circle at 30% 30%, 
      ${lightenColor(g.ribbonColor, 20)} 0%, 
      ${g.ribbonColor} 50%, 
      ${adjustBrightness(g.ribbonColor, -30)} 100%)`;
    bow.appendChild(bowCenter);

    container.appendChild(gift);
  });
}
