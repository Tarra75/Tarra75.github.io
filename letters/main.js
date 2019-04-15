$(document).ready(function(){
    $(window).scroll(function() {
        var scrollOffset = $(window).scrollTop();
        console.log(scrollOffset);

        if (scrollOffset >= 306 && scrollOffset <= 350) {
            $('.a-middle').addClass('active');
            $('.k-cap2').addClass('active');
            $('.l-top').addClass('active');
        } else if (scrollOffset >= 360 && scrollOffset <= 400) {
            $('.r-left').addClass('active');
            $('.o-cap1').addClass('active');
        } else if (scrollOffset >= 410 && scrollOffset <= 450) {
            $('.a-top').addClass('active');
        } else if (scrollOffset >= 460 && scrollOffset <= 500) {
            $('.mcap1').addClass('active');
        } else if (scrollOffset >= 510 && scrollOffset <= 540) {
            $('.k-cap1').addClass('active');
        } else if (scrollOffset >= 540 && scrollOffset <= 590) {
            $('.r-right').addClass('active');
            $('.l-bottom').addClass('active')
        } else if (scrollOffset >= 600 && scrollOffset <= 640) {
            $('.mcap3').addClass('active');
        } else if (scrollOffset >= 650 && scrollOffset <= 700) {
            $('.mcap4').addClass('active');
            $('.o-cap2').addClass('active');
        } else if (scrollOffset >= 710 && scrollOffset <= 760) {
            $('.a-left').addClass('active');
            $('.k-cap3').addClass('active');
        } else if (scrollOffset >= 640 && scrollOffset <= 695) {
            $('.a-middle').addClass('active');
            $('.a-top').addClass('active');
            $('.a-left').addClass('active');
            $('.l-bottom').addClass('active');
            $('.l-top').addClass('active');
            $('.r-left').addClass('active');
            $('.r-round').addClass('active');
            $('.r-right').addClass('active');
            $('.mcap1').addClass('active');
            $('.mcap2').addClass('active');
            $('.mcap3').addClass('active');
            $('.mcap4').addClass('active');
            $('.c-cap').addClass('active');
            $('.o-cap1').addClass('active');
            $('.o-cap2').addClass('active');
            $('.k-cap1').addClass('active');
            $('.k-cap2').addClass('active');
            $('.k-cap3').addClass('active');
        }
        
    });
});