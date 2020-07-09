//JavaScript Document
$(document).ready(function() {
$(".btn-group > .btn").click(function(){
    $(".btn-group > .btn").removeClass("active");
    $(this).addClass("active");
});
});

