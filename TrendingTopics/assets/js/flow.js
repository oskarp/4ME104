$(document).ready(function() {
    var images = Array();
    var currentImage;
    $("ul.images > img").each(function(i) {
        images.push($(this).attr("src").replace(".jpg", "_b.jpg"));
    });

    // Couldn't get window.resize to trigger the function -_-
    $("#trend").css({
        position:'absolute',
        left: ($(window).width() - $("#trend").outerWidth())/2,
        top: ($(window).height() - $("#trend").outerHeight())/2
    });		

    // Changing images on click
    $("img").click(function() {
        var img = $(this).attr("src");
        // A very ugly hack to get the bigger image from flickr
        img = img.replace(".jpg", "_b.jpg");
        $("#bgdiv").css("background", "url("+img+") no-repeat center center fixed");    
    });

    // Center the trend on resize
    $(window).resize(function(){
        $("#trend").css({
            position:'absolute',
            left: ($(window).width() - $("#trend").outerWidth())/2,
            top: ($(window).height() - $("#trend").outerHeight())/2
        });
    });
    
    // To initially run the function, npt sure why this isn't working tho.. :3
    $(window).resize();
    
    // Changing the background every 10 seconds
    setInterval(function() {
        // Make sure that there is actually images in the array
        if(images != undefined) {            
            $("#bgdivruse").css("background", "url("+currentImage+") no-repeat center center fixed"); 
            currentImage = images.shift();
            images.push(currentImage);
            $("#bgdiv").hide();       
            $("#bgdiv").css("background", "url("+currentImage+") no-repeat center center fixed");
            $("#bgdiv").fadeIn("slow");
        }
    }, 10000);
    
    // Caching to make the images look nice and not load mid-animation
    var hidden = $('body').append('<div id="img-cache" style="display:none/>').children('#img-cache'); 
    $.each(images, function (i, val) {
      $('<img/>').attr('src', val).appendTo(hidden);
    });
});