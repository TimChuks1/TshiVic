// this is the new and the cart blinking
function blink(element, interval) {
    setInterval(() => {
        element.style.visibility = (element.style.visibility === 'hidden')
        ? "visible" : "hidden";
    }, interval);
}
blink(document.getElementById("new"), 1000);
blink(document.getElementById("cart"), 1500);

// effect on the sliding of the footwear boxes
const container = document.getElementById("footWearbox1");
let scrollAmount = 0;
const speed = 0.5;

function scrollImages() {
    scrollAmount += speed;
    container.style.transform = `translateX(${scrollAmount}px)`;

    const firstImage = container.children[0];
    const imageWidth = firstImage.clientWidth;

    if (scrollAmount >= imageWidth) {
        container.appendChild(firstImage);
        scrollAmount -= imageWidth;
    }
    requestAnimationFrame(scrollImages);
}
scrollImages();


// effect on the large Tshivic text on the image
const text = "Tshi.vic Footwears";
const speeding = 200;
const eraseSpeeding = 100;
const delayBeforeErase = 5000;
const delayBeforeTyping = 5000;

let index = 0;
let isDeleting = false;
const typingElement = document.getElementById("Tshivic-text");

function typeEffect() {
    if (!isDeleting){
        typingElement.textContent = text.substring(0, index++);
    } else {
        typingElement.textContent = text.substring(0, index--);
    }

    if (index > text.length) {
        setTimeout(() =>{
            isDeleting = true;
            typeEffect();
        }, delayBeforeErase);
    }else if (index === 0 && isDeleting) {
        typingElement.textContent = "";

        setTimeout(() => {
            isDeleting = false;
            typeEffect();
        }, delayBeforeTyping);
    } else {
        setTimeout(typeEffect, isDeleting ? eraseSpeeding : speeding);
    }
}
    typeEffect();