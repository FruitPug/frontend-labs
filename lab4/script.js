const element3 = document.getElementById("element3");

element3.addEventListener("click", function () {
    element3.classList.toggle("color-changed");
});


const element4 = document.querySelector(".element4");

element4.addEventListener("click", function () {
    element4.classList.toggle("color-changed");
});


const imageContainer = document.getElementById("imageContainer");

const imageUrl =
    "https://static-cdn4-2.vigbo.tech/u53328/79565/blog/5151904/5000564/65418897/1000-eb6171dc1410453b1632183c1f7093e1.jpeg";

const imageAlt = "Вигляд міста Києва";
const defaultWidth = 600;

document.getElementById("addImage").addEventListener("click", function () {
    if (!document.getElementById("cityImage")) {
        const link = document.createElement("a");
        link.href = "https://kyivcity.gov.ua/";
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        const image = document.createElement("img");
        image.id = "cityImage";
        image.src = imageUrl;
        image.alt = imageAlt;
        image.style.width = defaultWidth + "px";

        link.appendChild(image);
        imageContainer.appendChild(link);
    }
});

document.getElementById("increaseImage").addEventListener("click", function () {
    const image = document.getElementById("cityImage");

    if (image) {
        const currentWidth = image.getBoundingClientRect().width;
        image.style.width = (currentWidth + 50) + "px";
        image.style.maxWidth = "none";
    }
});

document.getElementById("decreaseImage").addEventListener("click", function () {
    const image = document.getElementById("cityImage");

    if (image) {
        const currentWidth = image.getBoundingClientRect().width;
        const newWidth = Math.max(50, currentWidth - 50);

        image.style.width = newWidth + "px";
        image.style.maxWidth = "100%";
    }
});

document.getElementById("deleteImage").addEventListener("click", function () {
    const image = document.getElementById("cityImage");

    if (image) {
        image.remove();
    }
});