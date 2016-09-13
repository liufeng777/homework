/**
 * Created by Administrator on 2016/9/12 0012.
 */
$(function () {
$("#red,#green,#blue").on("input",function () {
    $("#redNum").val($("#red").val());
    $("#greenNum").val($("#green").val());
    $("#blueNum").val($("#blue").val());

    var red=$('#redNum').val();
    var green=$('#greenNum').val();
    var blue=$('#blueNum').val();

    $("body").css("backgroundColor","rgb("+red+","+green+","+blue+")");

});

});