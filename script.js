// ═══════════════════════════════════════════════════════════════
//  HOMEPAGE QUESTIONS - DEBUG
// ═══════════════════════════════════════════════════════════════

console.log('=== DEBUG START ===');
console.log('noBtn:', document.getElementById('no-btn'));
console.log('yesBtn:', document.getElementById('yes-btn'));
console.log('valentineModal:', document.getElementById('image-modal'));
console.log('modalImage:', document.getElementById('modal-image'));
console.log('confettiCanvas:', document.getElementById('confetti-canvas'));
console.log('=== DEBUG END ===');

// ========== MUSIC PLAYER ==========
const backgroundMusic = document.getElementById('background-music');
const musicToggle = document.getElementById('music-toggle');
const playIcon = document.querySelector('.play-icon');

let isMusicPlaying = false;

// Try to autoplay when page loads
window.addEventListener('load', () => {
    attemptAutoplay();
});

function attemptAutoplay() {
    const playPromise = backgroundMusic.play();
    
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                // Autoplay started successfully
                isMusicPlaying = true;
                updateMusicIcon();
            })
            .catch((error) => {
                // Autoplay was prevented (browser policy)
                console.log('Autoplay prevented. User interaction required.');
                isMusicPlaying = false;
                updateMusicIcon();
            });
    }
}

// Toggle music on/off
musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        isMusicPlaying = false;
    } else {
        backgroundMusic.play();
        isMusicPlaying = true;
    }
    updateMusicIcon();
});

function updateMusicIcon() {
    if (isMusicPlaying) {
        playIcon.textContent = '🔊';
    } else {
        playIcon.textContent = '🔇';
    }
}

// Start music on first user interaction (fallback for autoplay block)
let hasInteracted = false;

function startMusicOnInteraction() {
    if (!hasInteracted && !isMusicPlaying) {
        attemptAutoplay();
        hasInteracted = true;
    }
}

document.addEventListener('click', startMusicOnInteraction, { once: true });
document.addEventListener('keydown', startMusicOnInteraction, { once: true });

// ═══════════════════════════════════════════════════════════════
//  ▸ MEDIA ITEMS — swap src/label to use your own files
//    type: 'image' | 'video'
//    src:  path or URL to your file
//    label: caption shown on polaroid & in modal
// ═══════════════════════════════════════════════════════════════
const MEDIA_ITEMS = [
  {
    id: 1,
    type: 'image',
    thumbnail: 'asset/thumbnails/chocolate.png',   //durian choco
    src: 'asset/full-asset/durian-choco.jpeg',
    label: 'Happy Valentine\'s Day! 💝'
  },
  {
    id: 2,
    type: 'image',
    thumbnail: 'asset/thumbnails/concert.png',   //concert
    src: 'asset/full-asset/concert.png',
    label: '海へ'
  },
  {
    id: 3,
    type: 'video',
    thumbnail: 'asset/thumbnails/unicorn-cake.png',    // audrey birthday
    src: 'asset/full-asset/audrey-birthday-50mb.mp4',
    label: 'unicorn cake 🎂'
  },
  {
    id: 4,
    type: 'image',
    thumbnail: 'asset/thumbnails/hotpot.png',    //  hotpot
    src: 'asset/full-asset/hotpot.jpeg',
    label: 'i want momo paradise on my birthdays!'
  },
  {
    id: 5,
    type: 'image',
    thumbnail: 'asset/thumbnails/matcha-cake.png',    // matcha cake
    src: 'asset/full-asset/macbook.png',
    label: 'the day we went looking for candles for this man baby'
  },
  {
    id: 6,
    type: 'image',
    thumbnail: 'asset/thumbnails/animal-farm.png',    //   animal farm
    src: 'asset/full-asset/animal-farm.jpeg',
    label: 'its an animal farm'
  },
  {
    id: 7,
    type: 'image',
    thumbnail: 'asset/thumbnails/komibara.png',    // Komibara hometown
    src: 'asset/full-asset/komibara-born.png',
    label: 'the day komi was born to rule the house'
  },
  {
    id: 8,
    type: 'image',
    thumbnail: 'asset/thumbnails/doraemon.png',    // Doraemon
    src: 'asset/full-asset/doraemon.jpeg',
    label: 'doraemon ice cream'
  },
  {
    id: 9,
    type: 'image',
    thumbnail: 'asset/thumbnails/pool.png',    //   pool
    src: 'asset/full-asset/pool.png',
    label: 'the park 2'
  },
  {
    id: 10,
    type: 'video',
    thumbnail: 'asset/thumbnails/rock1.png',    // climbing
    src: 'asset/full-asset/rock1.mp4',
    label: 'wall hugging for 5 mins'
  },
  {
    id: 11,
    type: 'image',
    thumbnail: 'asset/thumbnails/monitor-lizard.png',    //  Monitor Lizard
    src: 'asset/full-asset/monitor-lizard.jpeg',
    label: 'i love going to the park with you <3'
  },
  {
    id: 12,
    type: 'video',
    thumbnail: 'asset/thumbnails/mountain-goat.png',    //  mountain goat failed
    src: 'asset/full-asset/mountain-goat.mp4',
    label: 'mountain goat failed'
  },
  {
    id: 13,
    type: 'image',
    thumbnail: 'asset/thumbnails/movie.png',    //   movie at antler
    src: 'asset/full-asset/movie-banana.png',
    label: 'naughty banana is awake'
  },
  {
    id: 14,
    type: 'video',
    thumbnail: 'asset/thumbnails/liver.png',    //  liver
    src: 'asset/full-asset/raw-beef.mp4',
    label: 'raw liver ewww'
  },
  {
    id: 15,
    type: 'image',
    thumbnail: 'asset/thumbnails/train.png',    // first time on the train
    src: 'asset/full-asset/train.png',
    label: 'i like it on the train'
  },
  {
    id: 16,
    type: 'image',
    thumbnail: 'asset/thumbnails/unicorn.png',    //  Unicorn imposter
    src: 'asset/full-asset/unicorn.jpeg',
    label: 'im a UNICORN 🦄'
  },
  {
    id: 17,
    type: 'image',
    thumbnail: 'asset/thumbnails/lotus.png',    //  lotus
    src: 'asset/full-asset/lotus.png',
    label: 'david eaten by lotus'
  },
  {
    id: 18,
    type: 'video',
    thumbnail: 'asset/thumbnails/macbook.png',    //   macbook unboxing
    src: 'asset/full-asset/mac-50mb.mp4',
    label: 'unboxing ASMR'
  },
  {
    id: 19,
    type: 'image',
    thumbnail: 'asset/thumbnails/fireworks.png',    //  fireworks
    src: 'asset/full-asset/fireworks.png',
    label: 'where\'s my 2026 new year kiss?'
  },
  {
    id: 20,
    type: 'image',
    thumbnail: 'asset/thumbnails/plane.png',    // plane
    src: 'asset/full-asset/flying.png',
    label: 'last kiss at the airport'
  },
  {
    id: 21,
    type: 'image',
    thumbnail: 'asset/thumbnails/twin-tower.png',    //  twin tower
    src: 'asset/full-asset/twin-tower.png',
    label: 'tsuin tower'
  },
  {
    id: 22,
    type: 'video',
    thumbnail: 'asset/thumbnails/david-birthday.png',    //  David birthday
    src: 'asset/full-asset/david-birthday-50mb.mp4',
    label: 'burnt cheesecake and burnt hand'
  },
];

// ═══════════════════════════════════════════════════════════════
//  SHAPE POOL
// ═══════════════════════════════════════════════════════════════
const SHAPES = ['polaroid', 'circle', 'film', 'torn', 'taped'];

// ═══════════════════════════════════════════════════════════════
//  UTILITY
// ═══════════════════════════════════════════════════════════════
const rand  = (min, max) => Math.random() * (max - min) + min;
const canvas = document.getElementById('canvas');

// ═══════════════════════════════════════════════════════════════
//  OBJECT STATE
// ═══════════════════════════════════════════════════════════════
const objects = [];

function createObject(item, index) {
  const shape = SHAPES[index % SHAPES.length];

  // ── Build DOM ────────────────────────────────────────────────
  const el = document.createElement('div');
  el.className = `floaty`;  // common styles for all -> shape-${shape}`;  // shape-specific styles
  el.style.position = 'absolute';

  // media wrap
  const wrap = document.createElement('div');
  wrap.className = 'media-wrap';

  if (item.type === 'image') {
    const img = document.createElement('img');
    img.src = item.thumbnail; // show thumbnail on canvas
    img.alt = item.label;
    img.draggable = false;
    wrap.appendChild(img);
  } else {
    const vid = document.createElement('img'); // video means show video, change to img
    vid.src = item.thumbnail; // show thumbnail on canvas (if it's src means video)
    vid.muted = true;
    vid.loop = true;
    vid.playsInline = true;
    vid.draggable = false;
    wrap.appendChild(vid);
    // play badge
    const badge = document.createElement('div');
    badge.className = 'video-badge';
    badge.textContent = '▶';
    wrap.style.position = 'relative';
    wrap.appendChild(badge);
  }
  el.appendChild(wrap);

  // caption for polaroid / taped
  if (shape === 'polaroid') {
    const cap = document.createElement('span');
    cap.className = 'caption';
    cap.textContent = item.label;
    el.appendChild(cap);
  }

  canvas.appendChild(el);

  // ── Physics State ────────────────────────────────────────────
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const obj = {
    el,
    item,
    shape,
    x: rand(60, vw - 250),
    y: rand(60, vh - 250),
    rot: rand(-12, 12),
    dragging: false,
    dragOffX: 0,
    dragOffY: 0,
    dragStartX: 0,
    dragStartY: 0,
  };

  el.style.transform = `translate(${obj.x}px, ${obj.y}px) rotate(${obj.rot}deg)`;
  el.style.zIndex = index + 10;

  // ── Drag Events ──────────────────────────────────────────────
  el.addEventListener('mousedown',  e => startDrag(e, obj, false));
  el.addEventListener('touchstart', e => startDrag(e, obj, true), { passive: true });

  objects.push(obj);
}

// ═══════════════════════════════════════════════════════════════
//  DRAG LOGIC
// ═══════════════════════════════════════════════════════════════
let activeObj = null;

function getXY(e, touch) {
  return touch
    ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
    : { x: e.clientX, y: e.clientY };
}

function startDrag(e, obj, touch) {
  const { x, y } = getXY(e, touch);
  obj.dragging  = true;
  obj.dragOffX  = x - obj.x;
  obj.dragOffY  = y - obj.y;
  obj.dragStartX = x;
  obj.dragStartY = y;
  obj.el.classList.add('grabbed');
  obj.el.style.zIndex = 1000;
  activeObj = obj;
}

document.addEventListener('mousemove', e => moveDrag(e, false));
document.addEventListener('touchmove', e => moveDrag(e, true), { passive: true });

function moveDrag(e, touch) {
  if (!activeObj || !activeObj.dragging) return;
  const { x, y } = getXY(e, touch);
  activeObj.x = x - activeObj.dragOffX;
  activeObj.y = y - activeObj.dragOffY;
  activeObj.el.style.transform =
    `translate(${activeObj.x}px, ${activeObj.y}px) rotate(${activeObj.rot}deg)`;
}

document.addEventListener('mouseup',   e => endDrag(e, false));
document.addEventListener('touchend',  e => endDrag(e, true));

function endDrag(e, touch) {
  if (!activeObj) return;
  const obj = activeObj;
  activeObj = null;
  obj.dragging = false;
  obj.el.classList.remove('grabbed');

  // detect click vs drag
  let endX, endY;
  if (touch) {
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;
  } else {
    endX = e.clientX; endY = e.clientY;
  }
  const dist = Math.hypot(endX - obj.dragStartX, endY - obj.dragStartY);
  if (dist < 8) openFloatyModal(obj.item);

  // restore float z-index after a beat
  setTimeout(() => { obj.el.style.zIndex = 10; }, 300);
}

// ═══════════════════════════════════════════════════════════════
//  MODAL
// ═══════════════════════════════════════════════════════════════
const floatyModal        = document.getElementById('modal');
const floatyModalContent = document.getElementById('modal-content');
const floatyModalLabel   = document.getElementById('modal-label');
const floatyModalClose   = document.getElementById('modal-close');

function openFloatyModal(item) {
  floatyModalContent.innerHTML = '';
  if (item.type === 'image') {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.label;
    floatyModalContent.appendChild(img);
  } else {
    const vid = document.createElement('video');
    vid.src = item.src;
    vid.controls = true;
    vid.autoplay = true;
    vid.style.maxWidth = '80vw';
    vid.style.maxHeight = '75vh';
    floatyModalContent.appendChild(vid);
  }
  floatyModalLabel.textContent = '— ' + item.label + ' —';
  floatyModal.classList.add('open');
}

function closeFloatyModal() {
  floatyModal.classList.remove('open');
  // stop video on close
  const vid = floatyModalContent.querySelector('video');
  if (vid) { vid.pause(); vid.src = ''; }
  setTimeout(() => { floatyModalContent.innerHTML = ''; }, 300);
}

floatyModalClose.addEventListener('click', closeFloatyModal);
floatyModal.addEventListener('click', e => { if (e.target === floatyModal) closeFloatyModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeFloatyModal(); });

// ═══════════════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════════════
MEDIA_ITEMS.forEach((item, i) => createObject(item, i));

// ═══════════════════════════════════════════════════════════════
//  HOMEPAGE QUESTIONS
// ═══════════════════════════════════════════════════════════════

const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const valentineModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const confettiCanvas = document.getElementById('confetti-canvas');
const ctx = confettiCanvas.getContext('2d');


// Set canvas size
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

// Image sequence for "Yes" button
const images = [
    'asset/full-asset/shiba-letter1.png',  
    'asset/full-asset/letter-to-david.png'   
];
let currentImageIndex = 0;

// ═══════════════════════════════════════════════════════════════
// ========== NO BUTTON EVASION ==========
// ═══════════════════════════════════════════════════════════════

let isEvading = false;

noBtn.addEventListener('mousemove', (e) => {
    if (isEvading) return;
    
    const btnRect = noBtn.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;
    
    const distance = Math.sqrt(
        Math.pow(e.clientX - btnCenterX, 2) + 
        Math.pow(e.clientY - btnCenterY, 2)
    );
    
    // If mouse is within 100px of button center, move it
    if (distance < 100) {
        moveNoButton();
    }
});

noBtn.addEventListener('mouseenter', () => {
    moveNoButton();
});

function moveNoButton() {
    isEvading = true;
    
    const maxX = window.innerWidth - noBtn.offsetWidth - 40;
    const maxY = window.innerHeight - noBtn.offsetHeight - 40;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transform = 'none';
    
    setTimeout(() => {
        isEvading = false;
    }, 300);
}

// ═══════════════════════════════════════════════════════════════
// ========== YES BUTTON SEQUENCE ==========
// ═══════════════════════════════════════════════════════════════
yesBtn.addEventListener('click', () => {
    currentImageIndex = 0;
    showValentineImage();
    startConfetti();
});

function showValentineImage() {
    modalImage.src = images[currentImageIndex];
    valentineModal.classList.add('active');
}

modalImage.addEventListener('click', () => {
    currentImageIndex++;
    
    if (currentImageIndex < images.length) {
        // Show next image
        modalImage.src = images[currentImageIndex];
    } else {
        // Close modal after last image
        valentineModal.classList.remove('active');
        currentImageIndex = 0;
    }
});

// Close modal if clicking outside image
valentineModal.addEventListener('click', (e) => {
    if (e.target === valentineModal) {
        valentineModal.classList.remove('active');
        currentImageIndex = 0;
    }
});

// ═══════════════════════════════════════════════════════════════
// ========== CONFETTI ANIMATION 
// ========== EMOJI CONFETTI ANIMATION 
// ═══════════════════════════════════════════════════════════════

let confettiParticles = [];

class EmojiConfetti {
    constructor() {
        this.x = Math.random() * confettiCanvas.width;
        this.y = -50;
        this.size = Math.random() * 30 + 20; // Emoji size
        this.speedY = Math.random() * 3 + 2;
        this.speedX = Math.random() * 2 - 1;
        this.emoji = this.randomEmoji();
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 10 - 5;
        this.opacity = 1;
    }
    
    randomEmoji() {
        const loveEmojis = [
            '❤️', '💕', '💖', '💗', '💓', '💞', '💝', 
            '💘', '💙', '💚', '💛', '🧡', '💜', '🖤',
            '💌', '💋', '💐', '🌹', '🌺', '🌷'
        ];
        return loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
    }
    
    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
        
        // Fade out near bottom
        if (this.y > confettiCanvas.height - 100) {
            this.opacity -= 0.02;
        }
        
        if (this.y > confettiCanvas.height || this.opacity <= 0) {
            return false;
        }
        return true;
    }
    
    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.font = `${this.size}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.emoji, 0, 0);
        ctx.restore();
    }
}

function startConfetti() {
    // Create initial burst
    for (let i = 0; i < 100; i++) {
        confettiParticles.push(new EmojiConfetti());
    }
    
    // Add continuous confetti for 3 seconds
    const confettiInterval = setInterval(() => {
        for (let i = 0; i < 5; i++) {
            confettiParticles.push(new EmojiConfetti());
        }
    }, 100);
    
    setTimeout(() => {
        clearInterval(confettiInterval);
    }, 3000);
    
    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    
    confettiParticles = confettiParticles.filter(particle => {
        const alive = particle.update();
        particle.draw();
        return alive;
    });
    
    if (confettiParticles.length > 0) {
        requestAnimationFrame(animateConfetti);
    }
}

// Handle window resize
window.addEventListener('resize', () => {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
});


