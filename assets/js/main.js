// ANIMATIONS

// Adjust Navbar Styling on Scroll
$(document).on("scroll", () => {
    if ($(document).scrollTop() > 0) {
        $(".navbar").addClass("navbar-scrolled");
    } else {
        $(".navbar").removeClass("navbar-scrolled");
    }
})