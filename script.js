document.addEventListener("scroll", (event) => {
    const headerNavElement = document.getElementsByClassName("header__nav")[0];
    const headerTitleElement = document.getElementsByClassName("header__title")[0];
    
    if (window.scrollY > 80) {
        headerNavElement.classList.add("header__nav--active");
        headerTitleElement.classList.add("header__title--active");
    } else {
        headerNavElement.classList.remove("header__nav--active");
        headerTitleElement.classList.remove("header__title--active");
    }
});
