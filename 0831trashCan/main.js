/**
 * Created by Administrator on 2016/8/31 0031.
 */
$(function () {
   $("#trash1").draggable({
       scope:"group1",
       revert:"invalid",
   });
    $("#trashCan3").droppable({
        scope:"group1",

        drop:function () {
            alert("成功");
            $("div").remove("#trash1");
        }
    })

    $("#trash2").draggable({
        scope:"group2",
        revert:"invalid",
    });
    $("#trashCan1").droppable({
        scope:"group2",

        drop:function () {
            alert("成功");
            $("div").remove("#trash2");
        }
    })
    
    $("#trash3").draggable({
        scope:"group3",
        revert:"invalid",
    });
    $("#trashCan2").droppable({
        scope:"group3",
        drop:function () {
            alert("成功");
            $("div").remove("#trash3");
        }
    })
});