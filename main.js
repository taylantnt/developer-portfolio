// ── Project Data ──
const projects = {
  saray: {
    category: 'RESTAURANT WEBSITE',
    title: 'Saray',
    url: 'https://sarayy.netlify.app',
    link: 'https://sarayy.netlify.app',
    desc: 'A bilingual (JP / EN / TR) website for the largest Turkish restaurant chain in Tokyo. Built with a custom CMS for menu management, multilingual content, and online reservation integration. Features rich food imagery and warm typography to bring the Istanbul dining experience to Tokyo.',
    tags: ['CMS', 'Multilingual', 'Reservations', 'UI/UX'],
    screenshots: [
      'https://res.cloudinary.com/drnh8zy84/image/upload/q_auto/f_auto/v1776538160/saray-dev.png',
      'https://res.cloudinary.com/drnh8zy84/image/upload/q_auto/f_auto/v1776538160/sarayy-3.png',
      'https://res.cloudinary.com/drnh8zy84/image/upload/q_auto/f_auto/v1776538160/sarayy-2.png',
      'https://res.cloudinary.com/drnh8zy84/image/upload/q_auto/f_auto/v1776538160/sarayy.png'
    ]
  },
  circle: {
    category: 'COMMUNITY PLATFORM',
    title: 'Circle Tokyo',
    url: 'tokyocircle.jp',
    link: 'https://tokyocircle.jp/',
    desc: 'A full community platform for one of Tokyo\'s largest photowalk meetup groups. The centerpiece is a custom backend where members upload photos from their own devices. Images are stored securely and only go live after admin approval through a private login dashboard. Automatic syncing with meetup events page for full autonomous operation.',
    tags: ['Backend', 'Admin Dashboard', 'Cloud Storage', 'Community'],
    screenshots: [
      'https://res.cloudinary.com/drnh8zy84/image/upload/q_auto/f_auto/v1776538245/circle-dev.png',
      'https://res.cloudinary.com/drnh8zy84/image/upload/q_auto/f_auto/v1776538245/circle-2.png',
      'https://res.cloudinary.com/drnh8zy84/image/upload/q_auto/f_auto/v1776538245/circle-3.png',
      'https://res.cloudinary.com/drnh8zy84/image/upload/q_auto/f_auto/v1776538245/circle.png'
    ]
  },
  taylan: {
    category: 'PERSONAL PORTFOLIO',
    title: 'Taylan Topuz',
    url: 'taylantopuz.com',
    link: 'https://www.taylantopuz.com',
    desc: 'My own photography and videography portfolio — designed and built from scratch. Features a full-screen video masthead served via CDN, an EN / JP language toggle, a custom booking flow, and a handcrafted gallery. Warm, human, and distinctly personal.',
    tags: ['Custom Build', 'Bilingual', 'Video CDN', 'Booking Flow'],
    screenshots: [
      'https://res.cloudinary.com/drnh8zy84/image/upload/q_auto/f_auto/v1776538245/taylantopuz-dev.png',
      'https://res.cloudinary.com/drnh8zy84/image/upload/q_auto/f_auto/v1776538245/taylantopuz-dev.png',
      'https://res.cloudinary.com/drnh8zy84/image/upload/q_auto/f_auto/v1776538245/taylantopuz-dev.png',
      'https://res.cloudinary.com/drnh8zy84/image/upload/q_auto/f_auto/v1776538245/taylantopuz-dev.png'
    ]
  },
  simsek: {
    category: 'PHOTOGRAPHY PORTFOLIO',
    title: 'simseksua.com',
    url: 'simseksua.com',
    link: 'https://simseksua.com',
    desc: 'A minimalist portfolio for Tokyo-based photographer Simsek Sua Tortu. Full-bleed imagery with a near-invisible UI — the photography speaks for itself. Built for performance with lazy-loading via CDN and butter-smooth transitions.',
    tags: ['Photography', 'Minimalist', 'Performance', 'Gallery'],
    screenshots: [
      'https://res.cloudinary.com/drnh8zy84/image/upload/q_auto/f_auto/v1776538245/simseksua-dev.png',
      'https://res.cloudinary.com/drnh8zy84/image/upload/q_auto/f_auto/v1776538245/simseksua-dev.png',
      'https://res.cloudinary.com/drnh8zy84/image/upload/q_auto/f_auto/v1776538245/simseksua-dev.png',
      'https://res.cloudinary.com/drnh8zy84/image/upload/q_auto/f_auto/v1776538245/simseksua-dev.png'
    ]
  },
  ertug: {
    category: 'ARTIST PORTFOLIO',
    title: 'Ertug Sayin',
    url: 'ertugsayin.com',
    link: 'https://ertugsayin.netlify.app',
    desc: 'Portfolio site for photographer and artist Ertug Sayin. Designed with a bold editorial tone — high-contrast layouts, asymmetric grids, and dramatic typography that mirrors the artist\'s visual identity. Includes an integrated contact and booking system.',
    tags: ['Fine Art', 'Editorial', 'Booking', 'Photography'],
    screenshots: [
      'https://res.cloudinary.com/drnh8zy84/image/upload/q_auto/f_auto/v1776538245/ertugsayin-dev.png',
      'https://res.cloudinary.com/drnh8zy84/image/upload/q_auto/f_auto/v1776538245/ertugsayin-dev.png',
      'https://res.cloudinary.com/drnh8zy84/image/upload/q_auto/f_auto/v1776538245/ertugsayin-dev.png',
      'https://res.cloudinary.com/drnh8zy84/image/upload/q_auto/f_auto/v1776538245/ertugsayin-dev.png'
    ]
  }
};

// ── Custom Cursor ──
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
  item.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
});

// ── SVG Elements & GSAP ──
const svgEl = document.getElementById('scene');
const head = document.getElementById('head');
const leftEyeShell = document.getElementById('left-eye');
const rightEyeShell = document.getElementById('right-eye');
const leftEye = document.getElementById('left-eye-group');
const rightEye = document.getElementById('right-eye-group');
const mouth = document.getElementById('mouth');
const tvVideo = document.getElementById('tv-video');
const tvVideoContainer = document.getElementById('tv-video-container');
const tvScreenTrack = document.getElementById('tv-screen-track');
const laptop = document.getElementById('laptop');
const coffeeCup = document.getElementById('coffee-cup-group');
const leftArm = document.getElementById('left-arm');
const rightArm = document.getElementById('right-arm');

// ── Safari Video Placement Sync ──
function syncVideoPosition() {
  if (!tvScreenTrack || !tvVideoContainer || !svgEl) return;
  
  // Get SVG tracking rect dimensions
  const rect = tvScreenTrack.getBoundingClientRect();
  const sceneRect = svgEl.getBoundingClientRect();
  
  // Position the container absolute over the SVG
  tvVideoContainer.style.display = 'block';
  tvVideoContainer.style.left = `${rect.left - sceneRect.left}px`;
  tvVideoContainer.style.top = `${rect.top - sceneRect.top}px`;
  tvVideoContainer.style.width = `${rect.width}px`;
  tvVideoContainer.style.height = `${rect.height}px`;
}

let coffeeInitialX = 1060;
let coffeeInitialY = 760;

// Initial sync + window resize
window.addEventListener('load', () => {
  syncVideoPosition();
  if (coffeeCup) {
    const transform = coffeeCup.getAttribute('transform');
    if (transform) {
      const match = transform.match(/translate\(([^,]+),\s*([^)]+)\)/);
      if (match) {
        coffeeInitialX = parseFloat(match[1]);
        coffeeInitialY = parseFloat(match[2]);
      }
    }
  }
});
window.addEventListener('resize', syncVideoPosition);

const MAX_EYE_MOVE = 8;
const MAX_HEAD_MOVE = 15;
const MAX_HEAD_ROTATE = 8;

function screenToSVG(sx, sy) {
  const r = svgEl.getBoundingClientRect();
  const vb = svgEl.viewBox.baseVal;
  return {
    x: (sx - r.left) * (vb.width / r.width),
    y: (sy - r.top) * (vb.height / r.height)
  };
}

let isManualSipping = false;

window.manualSipCoffee = function() {
  if (isManualSipping) return;
  if (sipTimeline && sipTimeline.isActive()) return;

  if (isIdle) stopIdle();

  isManualSipping = true;
  sipCoffee(true);
};

// ── Eye & Head Tracking ──
document.addEventListener('mousemove', e => {
  if (isManualSipping) {
    resetIdleTimer();
    return;
  }

  const svgPos = screenToSVG(e.clientX, e.clientY);
  
  // Center of the character's head is roughly at x: 800, y: 480
  const cx = 800;
  const cy = 480;
  
  const dx = svgPos.x - cx;
  const dy = svgPos.y - cy;
  
  // Normalize based on screen width
  const nx = dx / (svgEl.viewBox.baseVal.width / 2);
  const ny = dy / (svgEl.viewBox.baseVal.height / 2);

  // Move Eyes
  gsap.to([leftEye, rightEye], {
    x: nx * MAX_EYE_MOVE,
    y: ny * MAX_EYE_MOVE,
    duration: 0.2,
    ease: 'power2.out'
  });

  // Move & Rotate Head
  gsap.to(head, {
    x: nx * MAX_HEAD_MOVE,
    y: ny * MAX_HEAD_MOVE,
    rotation: nx * MAX_HEAD_ROTATE,
    transformOrigin: "center bottom",
    duration: 0.4,
    ease: 'power2.out'
  });

  resetIdleTimer();
});

// ── Frame Hover (Look directly at frame & animate) ──
document.querySelectorAll('.project-item').forEach(frame => {
  const hoverGlow = frame.querySelector('.hover-glow');
  
  frame.addEventListener('mouseenter', () => {
    // Bring the hovered frame to the front among other frames
    if (frame.parentNode) {
      frame.parentNode.appendChild(frame);
    }
    
    const r = frame.getBoundingClientRect();
    const c = screenToSVG(r.left + r.width / 2, r.top + r.height / 2);
    
    const cx = 800, cy = 480;
    const nx = (c.x - cx) / (svgEl.viewBox.baseVal.width / 2);
    const ny = (c.y - cy) / (svgEl.viewBox.baseVal.height / 2);

    gsap.to([leftEye, rightEye], { x: nx * MAX_EYE_MOVE, y: ny * MAX_EYE_MOVE, duration: 0.3 });
    gsap.to(head, { x: nx * MAX_HEAD_MOVE, y: ny * MAX_HEAD_MOVE, rotation: nx * MAX_HEAD_ROTATE, duration: 0.4 });
    
    // Light up effect and scale up
    if(hoverGlow) gsap.to(hoverGlow, { opacity: 1, duration: 0.2 });
    gsap.to(frame, { scale: 1.15, transformOrigin: "center center", duration: 0.4, ease: "back.out(1.5)" });
  });
  
  frame.addEventListener('mouseleave', () => {
    if(hoverGlow) gsap.to(hoverGlow, { opacity: 0, duration: 0.3 });
    gsap.to(frame, { scale: 1, duration: 0.4, ease: "power2.out" });
  });
});

// ── Natural Blink Animation ──
function blinkEyes() {
  const tl = gsap.timeline();
  tl.to([leftEyeShell, rightEyeShell], {
    scaleY: 0.08,
    transformOrigin: 'center center',
    duration: 0.08,
    ease: 'power2.in'
  });
  tl.to([leftEyeShell, rightEyeShell], {
    scaleY: 1,
    duration: 0.11,
    ease: 'power2.out'
  });
}

function scheduleNextBlink() {
  const nextBlinkMs = 2200 + Math.random() * 4200;
  setTimeout(() => {
    blinkEyes();
    if (Math.random() > 0.78) {
      gsap.delayedCall(0.14, blinkEyes); // occasional double-blink
    }
    scheduleNextBlink();
  }, nextBlinkMs);
}

// ── Keep TV Video Playing ──
function tryPlayTvVideo() {
  if (!tvVideo) return;
  const playPromise = tvVideo.play();
  if (playPromise && typeof playPromise.catch === 'function') {
    playPromise.catch(() => {});
  }
}

tryPlayTvVideo();
document.addEventListener('pointerdown', tryPlayTvVideo, { once: true });

// ── Idle Typing & Sipping Animation ──
let idleTimer = null;
let isIdle = false;
let typingLoop = null;
let phraseIndex = 0;
let sipTimeline = null;
let typingTimeout = null;
let typingAnim = null; // Store GSAP animation for typing
let smileTimer = null;

const phrases = [
  "const vibes = 'cozy';",
  "designing the future...",
  "git push origin main",
  "// adjusting padding",
  "npm run dev",
  "building experiences",
  "console.log('hello world');",
  "sipping coffee...",
  "Click pages to see details.",
  "Look around the room for easter eggs!",
  "Writing bug-free code...",
  "Hmm, how does this work again?"
];

const mouthPaths = {
  straight: "M -12 50 Q 0 58 12 50",
  smile: "M -12 50 Q 0 65 12 50",
  open: "M -6 52 Q 0 66 6 52"
};

function startIdle() {
  if (isIdle || isManualSipping) return;
  isIdle = true;
  
  // Show thought bubble
  gsap.to('#thought-bubble', { opacity: 1, duration: 0.5, ease: 'back.out(1.5)' });
  
  // Eyes look down at the laptop
  gsap.to([leftEye, rightEye], { x: 0, y: MAX_EYE_MOVE, duration: 0.4, ease: "power2.out" });
  gsap.to(head, { x: 0, y: 10, rotation: 0, duration: 0.5, ease: "power2.out" });
  
  // Occasional smile when idle
  scheduleSmile();
  
  showPhrase();
}

function scheduleSmile() {
  if (!isIdle) return;
  const nextSmileMs = 3000 + Math.random() * 5000;
  smileTimer = setTimeout(() => {
    if (isIdle && document.getElementById('thought-text').textContent !== "sipping coffee...") {
      gsap.to(mouth, { attr: { d: mouthPaths.smile }, duration: 0.3 });
      setTimeout(() => {
        if (isIdle) gsap.to(mouth, { attr: { d: mouthPaths.straight }, duration: 0.3 });
      }, 1500);
    }
    scheduleSmile();
  }, nextSmileMs);
}

function showPhrase() {
  const p = phrases[phraseIndex];
  phraseIndex = (phraseIndex + 1) % phrases.length;
  
  if (p === "sipping coffee...") {
    document.getElementById('thought-text').textContent = "";
    gsap.to(mouth, { attr: { d: mouthPaths.straight }, duration: 0.2 });
    sipCoffee();
    // Schedule next phrase after sip finishes (sip takes ~3s)
    typingLoop = setTimeout(showPhrase, 4000);
    return;
  }
  
  const textEl = document.getElementById('thought-text');
  textEl.textContent = "";
  
  let i = 0;
  
  // Normal typing mouth is straight
  gsap.to(mouth, { attr: { d: mouthPaths.straight }, duration: 0.2 });
  
  // Occasionally do a surprise :O face while coding
  if (Math.random() > 0.6) {
    setTimeout(() => {
      if (isIdle) {
        gsap.to(mouth, { attr: { d: mouthPaths.open }, duration: 0.2 });
        setTimeout(() => {
          if (isIdle) gsap.to(mouth, { attr: { d: mouthPaths.straight }, duration: 0.3 });
        }, 1200 + Math.random() * 1000); // Hold surprise for a bit
      }
    }, 500 + Math.random() * 1500); // Trigger surprise mid-typing
  }
  
  // Start arm typing animation
  if (typingAnim) typingAnim.kill();
  typingAnim = gsap.to([leftArm, rightArm], {
    y: () => gsap.utils.random(-8, 8),
    x: () => gsap.utils.random(-8, 8),
    duration: 0.1,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
  });

  function typeChar() {
    if (i < p.length && isIdle) {
      textEl.textContent += p.charAt(i);
      i++;
      typingTimeout = setTimeout(typeChar, 80 + Math.random() * 50);
    } else {
      // Stop typing animation when done or interrupted
      if (typingAnim) typingAnim.kill();
      gsap.to([leftArm, rightArm], { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
      
      // Close mouth back to normal when done typing
      if (isIdle) {
        gsap.to(mouth, { attr: { d: mouthPaths.straight }, duration: 0.3 });
        // Wait 3.5 seconds before showing the next phrase
        typingLoop = setTimeout(showPhrase, 3500);
      }
    }
  }
  
  typeChar();
}

function sipCoffee(isManual = false) {
  if (sipTimeline) {
    sipTimeline.kill();
  }

  if (coffeeCup && laptop && coffeeCup.parentNode === laptop.parentNode) {
    coffeeCup.parentNode.insertBefore(coffeeCup, laptop);
  }

  sipTimeline = gsap.timeline();

  // Reach with a natural arm arc and lift cup toward mouth
  sipTimeline.to('#right-arm', {
    rotation: -24,
    y: -8,
    transformOrigin: '80px 120px',
    duration: 0.45,
    ease: 'power2.out'
  }, 0);
  sipTimeline.to('#coffee-cup-group', {
    x: 890,
    y: 560,
    rotation: -16,
    duration: 0.72,
    ease: 'power2.inOut'
  }, 0.04);
  sipTimeline.to(head, {
    rotation: 4,
    y: 6,
    duration: 0.34,
    ease: 'power2.out'
  }, 0.34);

  // Tiny hold for sip
  sipTimeline.to({}, { duration: 0.52 });

  // Return cup and body posture smoothly
  sipTimeline.to('#coffee-cup-group', {
    x: coffeeInitialX,
    y: coffeeInitialY,
    rotation: 0,
    duration: 0.78,
    ease: 'power2.inOut'
  });
  sipTimeline.to('#right-arm', {
    rotation: 0,
    y: 0,
    duration: 0.58,
    ease: 'power2.inOut'
  }, '-=0.64');
  sipTimeline.to(head, {
    rotation: 0,
    y: 0,
    duration: 0.4,
    ease: 'power2.inOut'
  }, '-=0.56');

  sipTimeline.call(() => {
    if (!coffeeCup || !laptop || coffeeCup.parentNode !== laptop.parentNode) return;
    if (laptop.nextSibling) {
      laptop.parentNode.insertBefore(coffeeCup, laptop.nextSibling);
    } else {
      laptop.parentNode.appendChild(coffeeCup);
    }
    if (isManual) {
      isManualSipping = false;
    }
  });
}

function stopIdle() {
  if (isManualSipping) return; // DON'T stop idle or kill tweens if we're manually sipping
  if (!isIdle) return;
  isIdle = false;
  clearTimeout(typingLoop);
  clearTimeout(typingTimeout);
  clearTimeout(smileTimer);
  if (typingAnim) typingAnim.kill();
  
  // Close mouth
  gsap.to(mouth, { attr: { d: mouthPaths.straight }, duration: 0.2 });
  
  // Hide thought bubble & stop hands
  gsap.to('#thought-bubble', { opacity: 0, duration: 0.3 });
  gsap.killTweensOf('#left-arm');
  gsap.killTweensOf('#right-arm');
  gsap.killTweensOf('#coffee-cup-group');
  if (sipTimeline) {
    sipTimeline.kill();
    sipTimeline = null;
  }

  if (coffeeCup && laptop && coffeeCup.parentNode === laptop.parentNode) {
    if (laptop.nextSibling) {
      laptop.parentNode.insertBefore(coffeeCup, laptop.nextSibling);
    } else {
      laptop.parentNode.appendChild(coffeeCup);
    }
  }
  
  // Reset positions just in case interrupted during sip
  gsap.to('#left-arm', { y: 0, x: 0, rotation: 0, duration: 0.2 });
  gsap.to('#right-arm', { y: 0, x: 0, rotation: 0, duration: 0.2 });
  gsap.to('#coffee-cup-group', { x: coffeeInitialX, y: coffeeInitialY, rotation: 0, duration: 0.5 });
  gsap.to(head, { rotation: 0, y: 0, duration: 0.2 });
}

function resetIdleTimer() {
  stopIdle();
  clearTimeout(idleTimer);
  idleTimer = setTimeout(startIdle, 4000);
}

// Initialize idle
resetIdleTimer();
scheduleNextBlink();

// ── Overlay Logic ──
let isOpening = false;

function resetPanels() {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
}

window.openProject = function(key) {
  if (isOpening) return;
  isOpening = true;

  stopIdle();
  clearTimeout(idleTimer);

  // Character looks down at the desk/keyboard when overlay opens
  gsap.to([leftEye, rightEye], { x: 0, y: MAX_EYE_MOVE, duration: 0.3 });
  gsap.to(head, { x: 0, y: 10, rotation: 0, duration: 0.4 });

  resetPanels();
  const proj = projects[key];
  const overlay = document.getElementById('overlay');
  const panel = document.getElementById('project-panel');
  const typingPhase = document.getElementById('typing-phase');
  const projContent = document.getElementById('project-content');

  typingPhase.style.display = 'flex';
  projContent.style.display = 'none';
  panel.classList.add('active');
  overlay.classList.add('active');

  setTimeout(() => {
    typingPhase.style.display = 'none';
    projContent.style.display = 'block';

    document.getElementById('proj-category').textContent = proj.category;
    document.getElementById('proj-title').textContent = proj.title;
    document.getElementById('proj-url').textContent = '↗ ' + proj.url;
    document.getElementById('proj-desc').textContent = proj.desc;
    document.getElementById('proj-link').href = proj.link;

    const gallery = document.getElementById('proj-gallery');
    const mainScreenshot = document.getElementById('proj-main-screenshot');
    const thumbnailsContainer = document.getElementById('proj-thumbnails');

    if (proj.screenshots && proj.screenshots.length > 0) {
      gallery.style.display = 'flex';
      
      // Set the first screenshot as the main image
      mainScreenshot.src = proj.screenshots[0];
      
      // Generate thumbnails
      thumbnailsContainer.innerHTML = proj.screenshots.map((src, index) => `
        <img src="${src}" alt="Thumbnail ${index + 1}" 
             class="gallery-thumbnail"
             data-index="${index}"
             style="width:100%; aspect-ratio:16/9; object-fit:cover; border-radius:4px; cursor:pointer; opacity: ${index === 0 ? '1' : '0.6'}; transition: opacity 0.2s ease; border: 1px solid ${index === 0 ? '#E8A870' : 'transparent'}; box-sizing: border-box;"
             onclick="changeMainScreenshot('${src}', this)">
      `).join('');
    } else {
      gallery.style.display = 'none';
    }

    document.getElementById('proj-tags').innerHTML = proj.tags.map(t => `<span class="proj-tag">${t}</span>`).join('');

    isOpening = false;
  }, 1200);
};

window.openWork = function() {
  if (isOpening) return;
  isOpening = true;

  stopIdle();
  clearTimeout(idleTimer);

  gsap.to([leftEye, rightEye], { x: 0, y: MAX_EYE_MOVE, duration: 0.3 });
  gsap.to(head, { x: 0, y: 10, rotation: 0, duration: 0.4 });

  resetPanels();
  const overlay = document.getElementById('overlay');
  const panel = document.getElementById('work-panel');
  const typingPhase = document.getElementById('work-typing-phase');
  const content = document.getElementById('work-content');

  typingPhase.style.display = 'flex';
  content.style.display = 'none';
  panel.classList.add('active');
  overlay.classList.add('active');

  setTimeout(() => {
    typingPhase.style.display = 'none';
    content.style.display = 'block';
    isOpening = false;
  }, 800);
};

window.openAbout = function() {
  if (isOpening) return;
  isOpening = true;

  stopIdle();
  clearTimeout(idleTimer);

  gsap.to([leftEye, rightEye], { x: 0, y: MAX_EYE_MOVE, duration: 0.3 });
  gsap.to(head, { x: 0, y: 10, rotation: 0, duration: 0.4 });

  resetPanels();
  const overlay = document.getElementById('overlay');
  const panel = document.getElementById('about-panel');
  const typingPhase = document.getElementById('about-typing-phase');
  const content = document.getElementById('about-content');

  typingPhase.style.display = 'flex';
  content.style.display = 'none';
  panel.classList.add('active');
  overlay.classList.add('active');

  setTimeout(() => {
    typingPhase.style.display = 'none';
    content.style.display = 'block';
    isOpening = false;
  }, 800);
};

window.openContact = function() {
  if (isOpening) return;
  isOpening = true;

  stopIdle();
  clearTimeout(idleTimer);

  gsap.to([leftEye, rightEye], { x: 0, y: MAX_EYE_MOVE, duration: 0.3 });
  gsap.to(head, { x: 0, y: 10, rotation: 0, duration: 0.4 });

  resetPanels();
  const overlay = document.getElementById('overlay');
  const panel = document.getElementById('contact-panel');
  const typingPhase = document.getElementById('contact-typing-phase');
  const content = document.getElementById('contact-content');

  typingPhase.style.display = 'flex';
  content.style.display = 'none';
  panel.classList.add('active');
  overlay.classList.add('active');

  setTimeout(() => {
    typingPhase.style.display = 'none';
    content.style.display = 'block';
    isOpening = false;
  }, 800);
};

window.closeOverlay = function() {
  document.getElementById('overlay').classList.remove('active');
  setTimeout(() => {
    resetPanels();
  }, 400); // wait for fade out
  resetIdleTimer();
};

// Make changeMainScreenshot globally available
window.changeMainScreenshot = function(src, thumbnailElement) {
  const mainScreenshot = document.getElementById('proj-main-screenshot');
  const allThumbnails = document.querySelectorAll('.gallery-thumbnail');
  
  // Fade out main image
  mainScreenshot.style.opacity = '0.5';
  
  setTimeout(() => {
    // Update source
    mainScreenshot.src = src;
    
    // Fade back in
    mainScreenshot.style.opacity = '1';
    
    // Update thumbnail styles
    allThumbnails.forEach(thumb => {
      thumb.style.opacity = '0.6';
      thumb.style.border = '1px solid transparent';
    });
    
    // Highlight active thumbnail
    if (thumbnailElement) {
      thumbnailElement.style.opacity = '1';
      thumbnailElement.style.border = '1px solid #E8A870';
    }
  }, 150); // Short delay for smooth transition
};

document.getElementById('overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('overlay')) closeOverlay();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeOverlay();
});
