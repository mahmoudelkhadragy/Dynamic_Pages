$("#p1").click(function () {
    $.ajax({
        url: "p1.php", success: function (result) {
            $("#body").html(result);
        }
    });
});

$("#p2").click(function () {
    $.ajax({
        url: "p2.php", success: function (result) {
            $("#body").html(result);
        }
    });
});