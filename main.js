$(document).ready(function () {

    var sidebar = $('.sidebar');
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

    $("a[action=link1]").on("click", function (e) {
        e.preventDefault();
        if (sidebar.css("left") === '0px') {
            $('.sidebar').animate({
                'left': '-260px'
            });
        }
        $.ajax({
            url: "p1.php",
            success: function (result) {
                $("#body").html(result);
            }
        });
    });

    $("a[action=link2]").click(function (e) {
        e.preventDefault();
        if (sidebar.css("left") === '0px') {
            $('.sidebar').animate({
                'left': '-260px'
            });
        }
        $.ajax({
            url: "p2.php",
            success: function (result) {
                $("#body").html(result);
            }
        });
    });

    $("a[action=link3]").click(function (e) {
        e.preventDefault();
        if (sidebar.css("left") === '0px') {
            $('.sidebar').animate({
                'left': '-260px'
            });
        }
        $.ajax({
            url: "p3.php",
            success: function (result) {
                $("#body").html(result);
            }
        });
    });
});