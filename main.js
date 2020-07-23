$(document).ready(function () {
    // view and close sidebar
    $('.bar_icon').on("click", function () {
        $('.sidebar').animate({
            'left': '0'
        });
    });
    $('.close_sidebar').on("click", function () {
        $('.sidebar').animate({
            'left': '-260px'
        });
    });

    // action="link1"
    $("a[action=link1]").click(function (e) {
        e.preventDefault();
        $.ajax({
            url: "p1.php",
            success: function (result) {
                $("#body").html(result);
            }
        });
    });

    $("a[action=link2]").click(function (e) {
        e.preventDefault();
        $.ajax({
            url: "p2.php",
            success: function (result) {
                $("#body").html(result);
            }
        });
    });

    $("a[action=link3]").click(function (e) {
        e.preventDefault();
        $.ajax({
            url: "p3.php",
            success: function (result) {
                $("#body").html(result);
            }
        });
    });
});