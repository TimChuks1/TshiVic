// this is the new and the cart blinking
function blink(element, interval) {
    setInterval(() => {
        element.style.visibility = (element.style.visibility === 'hidden')
        ? "visible" : "hidden";
    }, interval);
}
blink(document.getElementById("new"), 1000);
blink(document.getElementById("cart"), 1500);


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
