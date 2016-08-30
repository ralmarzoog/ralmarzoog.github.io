
$(document).ready(function(){
    $(".project").click(function() {
        details = $(this).find(".more-details");
        details.toggle();
        bgcolor = details.is(":visible") ? "#eee" : "#fff";
        $(this).css("background-color", bgcolor);
    });
});


