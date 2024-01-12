const canvas = document.querySelector('.canvas');
const context = canvas.getContext("2d");
let ball = { frame: 0 };
let frameCount;
const currentFrame = (index) => `./mlsc/${(index + 1).toString()}.jpg`;
const imgs = [];

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    frameCount = window.innerWidth <= 768 ? 28 : 41;

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        imgs.push(img);
        img.onload = render;
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(ball, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
            scrub: true,
            pin: 'canvas',
            end: '500%',
            markers: false
        },
        onUpdate: render,
    });

    gsap.to(ball, {
        frame: frameCount - 1,
        duration: 2, // Adjust the duration (speed) as needed
        onUpdate: render
    });

    window.addEventListener('resize', handleResize);
}

function handleResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
}

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    const scaleWidth = canvas.width / imgs[Math.round(ball.frame)].width;
    const scaleHeight = canvas.height / imgs[Math.round(ball.frame)].height;

    let scale = Math.min(scaleWidth, scaleHeight);

    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        scale = Math.max(scaleWidth, scaleHeight);
    }

    const centerX = (canvas.width - imgs[Math.round(ball.frame)].width * scale) / 2 +10;
    const centerY = (canvas.height - imgs[Math.round(ball.frame)].height * scale) / 2;

    context.drawImage(imgs[Math.round(ball.frame)], centerX, centerY, imgs[Math.round(ball.frame)].width * scale, imgs[Math.round(ball.frame)].height * scale);
}

init();
