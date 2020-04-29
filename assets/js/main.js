// ANIMATIONS

// Adjust Navbar Styling on Scroll
$(document).on("scroll", () => {
    if ($(document).scrollTop() > 0) {
        $(".navbar").addClass("navbar-scrolled");
    } else {
        $(".navbar").removeClass("navbar-scrolled");
    }
})


// Loader
window.onload = (event) => {
    $(".page-loader").fadeOut(1000);
    $(".page").fadeIn(1000);
    $(".photo-section").html(galleryContent)
    $(".snazzy-map").html(`<iframe src="https://snazzymaps.com/embed/170028"></iframe>`);
};