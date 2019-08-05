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
    $('.site-header').affix({
        offset: {
            top: $(".site-header").outerHeight()
        }
    })
    // go top 
    $(".gotop").click(function() {
        return $("body,html").animate({ scrollTop: 0 }, 800), !1
    });
    $(document).scroll(function() {
        $(document).scrollTop() > 0 ? $("#gotop").fadeIn() : $("#gotop").hide()
    });

    // masonry layout
    // $('.cluster-wrap').masonry({
    //     // options
    //     columnWidth: '.cluster-sizer',
    //     gutter: '.gutter-sizer',
    //     itemSelector: '.cluster',
    //     percentPosition: true,
    //     transitionDuration: '0.2s'
    // });
    var $grid = $('.page-index .grid-wrap').imagesLoaded(function() {
        // init Masonry after all images have loaded
        $grid.masonry({
            // options
            columnWidth: '.item-sizer',
            gutter: '.gutter-sizer',
            itemSelector: '.grid-item',
            percentPosition: true,
            transitionDuration: '0.2s'
        });
    });
    var $grid1 = $('.page-cluster .grid-wrap').imagesLoaded(function() {
        // init Masonry after all images have loaded
        $grid1.masonry({
            // options
            columnWidth: '.item-sizer',
            gutter: '.gutter-sizer',
            itemSelector: '.grid-item',
            percentPosition: true,
            transitionDuration: '0.2s'
        });
    });
    var $grid2 = $('.page-detail .grid-wrap').imagesLoaded(function() {
        // init Masonry after all images have loaded
        $grid2.masonry({
            // options
            columnWidth: '.item-sizer',
            gutter: '.gutter-sizer',
            itemSelector: '.grid-item',
            percentPosition: true,
            transitionDuration: '0.2s'
        });
    });
});