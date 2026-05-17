// Scroll Animation
document.addEventListener("scroll", (event) => {
    const headerNavElement = document.getElementsByClassName("header__nav")[0];
    const headerTitleElement = document.getElementsByClassName("header__title")[0];
    const headerLinkElements = document.getElementsByClassName("header__link");

    if (window.scrollY > 80) {
        headerNavElement.classList.add("header__nav--active");
        headerTitleElement.classList.add("header__title--active");
        for (let e of headerLinkElements) {
            e.classList.add("header__link--active");
        }
    } else {
        headerNavElement.classList.remove("header__nav--active");
        headerTitleElement.classList.remove("header__title--active");
        for (let e of headerLinkElements) {
            e.classList.remove("header__link--active");
        }
    }
});

// Video Control
const videoElement = document.getElementById("video-restaurant");

const playButton = document.getElementById("video-control-play");
const pauseButton = document.getElementById("video-control-pause");
const unmuteButton = document.getElementById("video-control-unmute");
const muteButton = document.getElementById("video-control-mute");

playButton.addEventListener("click", () => {
    videoElement.play();
});

pauseButton.addEventListener("click", () => {
    videoElement.pause();
});

unmuteButton.addEventListener("click", () => {
    videoElement.muted = false;
});

muteButton.addEventListener("click", () => {
    videoElement.muted = true;
});
