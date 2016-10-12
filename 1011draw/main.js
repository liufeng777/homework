/**
 * Created by Administrator on 2016/9/13 0013.
 */
(function () {
    var canvas=document.querySelector("#myCanvas");
    var context=canvas.getContext("2d");
    var btn=document.querySelector("#btn");
    canvas.onmousedown=function (event) {
        context.moveTo(event.pageX-canvas.offsetLeft,event.pageY-canvas.offsetTop);
        canvas.onmousemove=function (event) {
            context.lineTo(event.pageX-canvas.offsetLeft,event.pageY-canvas.offsetTop);
            context.strokeStyle="#000";
            context.lineWidth=5;
            context.stroke();
            canvas.onmouseup=function () {
                canvas.onmousemove=" ";
            }
        }
    };
    btn.onclick=function () {
        var image=new Image();
        var imgAsDataURL = canvas.toDataURL("image/png");
        localStorage.setItem("img",imgAsDataURL);
         //window.open(imgAsDataURL );
    };

   window.onload=function () {
       var canvas=document.querySelector("#myCanvas");
       var context=canvas.getContext("2d");
       var pic=new Image();
       pic.src=localStorage.getItem('img');
      context.drawImage(pic,0,0);

   };
   
})();