
$(document).ready(function(){

    $("#left-btn").click(function(e) {
        e.stopPropagation();
        img = document.getElementById("frame");
        frameNum = parseInt(img.getAttribute("data").slice(1));

        // TODO: make this less hacky
        if (frameNum == 0) {
            newFrameNum = 14;
            console.log("here")
        } else {
            newFrameNum = frameNum - 1;
            console.log("nope")
        }

        img.src = "images/frame" + newFrameNum + ".jpg";
        img.setAttribute("data", "f" + newFrameNum);
    });

    $("#right-btn").click(function(e) {
        e.stopPropagation();
        img = document.getElementById("frame");
        frameNum = parseInt(img.getAttribute("data").slice(1));
        newFrameNum = (frameNum + 1) % 15;
        console.log(newFrameNum);
        img.src = "images/frame" + newFrameNum + ".jpg";
        img.setAttribute("data", "f" + newFrameNum);
    });
    
    $(".project").click(function() {
        details = $(this).find(".more-details");
        details.toggle();
        bgcolor = details.is(":visible") ? "#eee" : "#fff";
        $(this).css("background-color", bgcolor);
    });


});

