fetchServicesData();
fetchSectors();
fetchLanguages();

$('.popup').hide();

$('.popup').on("click", function () {
    $(this).fadeOut();
});
$('.popup .box').on("click", function (event) {
    event.stopPropagation();
});

$(window).on('scroll', navUpdate);

$("section:has(.title), div:has(.title)").mouseenter(function () {
    $(this).find(".title").addClass("mouse-entered");
});

$("section:has(.title), div:has(.title)").mouseleave(function () {
    $(this).find(".title").removeClass("mouse-entered");
});

$(window).on('scroll', function () {
    let scroll = $(window).scrollTop(),
        windowHeight = $(window).height();

    $('section').each(function () {
        let section = $(this),
            sectionName = section.attr('id'),
            navLink = $(`.nav-link[href="#${sectionName}"]`),
            top = section.offset().top,
            bottom = top + section.outerHeight();

        if (scroll + (windowHeight / 2) >= top && scroll + (windowHeight / 2) <= bottom) {
            navLink.addClass('active');
        } else {
            navLink.removeClass('active');
        }

    });
});