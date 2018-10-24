$( function () {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 550) {
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }
        for (var i = 0; i < $(".content").length; i++) {
            if ($(window).scrollTop() >= $(".content").eq(i).offset().top) {
                $("header a").removeClass("active");
                $("header a[href='#" + $(".content").eq(i).attr("id") + "']").addClass("active");
                $(".content span").eq(i).addClass("hide");
            } else {
                $("header a[href='#" + $(".content").eq(i).attr("id") + "']").removeClass("active");
                $(".content span").eq(i).removeClass("hide");
            }
        }
        //alert($(".content").eq(0).attr("id"));
    });

    function goToByScroll(id) {
        $('html,body').animate({
            scrollTop: $(id).offset().top
        }, 500);
    }
    
    $("header > a, #menu-left > a, #menu-right > a").on('click', function(e) {
        e.preventDefault();
        goToByScroll($(this).attr("href"));
    });
});