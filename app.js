/*  CONFIG  */

const cvs = document.querySelector('canvas');
const ctx = cvs.getContext('2d');

cvs.width = window.innerWidth;
cvs.height =  window.innerHeight;

const sizeElement = document.querySelector('#size');
const lineWidthStep = 1;
let isPressed = false;
let lastPosition = {
    x: -1,
    y: -1,
};

ctx.lineWidth = 12;

const keyData = {
    '1': ['color', 'red'],
    '2': ['color', 'blue'],
    '3': ['color', 'yellow'],
    '4': ['color', 'purple'],
    '5': ['color', 'orange'],
    '6': ['color', 'green'],
    '`': ['color', '#000'],
    '0': ['color', '#000'],
    'w': ['color', '#fff'],

    '=': ['size', 'increase'],
    '-': ['size', 'decrease'],

    'c': ['other', 'clear'],
}


/*  APP  */

document.addEventListener('mousedown', (event) => {
    // да, нажали
    isPressed = true;
    lastPosition.x = event.clientX;
    lastPosition.y = event.clientY;
});
document.addEventListener('mouseup', () => {
    // да, отжали
    isPressed = false;
});
document.addEventListener('mousemove', (event) => {
    // если не нажали то ниче
    if(!isPressed) {
        return;
    }

    ctx.beginPath();
        ctx.lineWidth;
        ctx.moveTo(lastPosition.x, lastPosition.y);
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
        ctx.arc(event.clientX, event.clientY, ctx.lineWidth/2, 0, 3.14*2);
        ctx.fill();
    ctx.closePath();

    lastPosition.x = event.clientX;
    lastPosition.y = event.clientY;
});

document.addEventListener('keydown', (event) => {
    const currentKey = event.key.toLowerCase();

    const currentEventData = keyData[currentKey];

    if (currentEventData[0] === 'color') {
        ctx.fillStyle = currentEventData[1];
        ctx.strokeStyle = currentEventData[1];
    }
    if (currentEventData[0] === 'size') {
        ctx.lineWidth += (currentKey === '-' ? (-lineWidthStep) : lineWidthStep);
    }
    if (currentEventData[0] === 'other') {
        if (currentEventData[1] === 'clear') {
            ctx.clearRect(0,0,cvs.width,cvs.height);
        }
    }
});

// git init
// git remote add origin ссылка-на-гитхаб

// git add .
// git commit -m "created"
// git push --set-upstream origin main