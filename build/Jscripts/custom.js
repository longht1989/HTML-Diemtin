/* ====================================
   Onload functions
   ==================================== */

$(function() {
    //lazy load images
    $('.story__thumb img[src$=".gif"]').parents('.story').addClass('story--gif');
    var myLazyLoad = new LazyLoad({
        elements_selector: ".story__thumb img , .lazyload"
    });
    // affix navigator
    $('.site-header__content').affix({
        offset: {
            top: $(".site-header__content").outerHeight()
        }
    })
    // go top 
    $(".gotop").click(function() {
        return $("body,html").animate({ scrollTop: 0 }, 800), !1
    });
    $(document).scroll(function() {
        $(document).scrollTop() > 0 ? $("#gotop").fadeIn() : $("#gotop").hide()
    });
});