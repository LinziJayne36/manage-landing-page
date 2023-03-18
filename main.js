const hbIcon = document.querySelector("#hb-icon");
const hbIconClose = document.querySelector("#hb-icon-close");
const overlayElem = document.querySelector("#overlay");
hbIcon.addEventListener("click", (e) => {
    //TODO: code what happens when mob menu btn is clicked --OPEN MENU--
    console.log("menu btn pressed");
    hbIcon.classList.replace("show", "hide");
    hbIconClose.classList.replace("hide", "show");
    overlayElem.classList.replace("hide", "show");
    overlayElem.classList.add("overlay");
});

hbIconClose.addEventListener("click", (e) => {
    //TODO: code what happens when x btn is clicked --CLOSE MENU--
    console.log("close menu btn pressed");
    hbIconClose.classList.replace("show", "hide");
    hbIcon.classList.replace("hide", "show");
    overlayElem.classList.replace("show", "hide");
    overlayElem.classList.remove("overlay");
});

const slider = new A11YSlider(document.querySelector(".slider"), {
    slidesToShow: 1,
    arrows: false, // arrows enabled 767px and down
    dots: true,

    responsive: {
        768: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
        },
        940: {
            slidesToShow: 2,
            disable: false, // slider disabled 960px to 1279px
        },
        1330: {
            disable: false,
            slidesToShow: 3,
            dots: true, // dots enabled 1280px and up
        },
        1340: {
            slidesToShow: 3,
            dots: false,
        },
    },
});
