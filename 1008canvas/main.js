/**
 * Created by Administrator on 2016/10/8 0008.
 */
(function () {
    var canvas;
    var context;
    var rect;
    function createCanvas() {
        canvas=document.createElement("canvas");
        canvas.width=1200;
        canvas.height=800;
        document.body.appendChild(canvas);
        context=canvas.getContext("2d");
    }
    
    function title(){
        context.font="40px 微软雅黑";
        context.fillStyle="#000";
        context.fillText("你是人还是猪？",160,100);
    }

    function personRect() {
        rect=new ucai.Rect(100,50);
        rect.color="#ff0000";
        canvas.onmousemove=function (event) {
            rect.x=event.pageX;
            rect.y=event.pageY;

        };
        rect.render(context);

        context.font="30px 微软雅黑";
        context.fillStyle="#fff";
        context.fillText("我是人",100,235);
    }

    function pigRect() {
        context.fillStyle="#00ff00";
        context.fillRect(300,200,100,50);
        context.font="30px 微软雅黑";
        context.fillStyle="#fff";
        context.fillText("我是猪",300,235);
    }
    
    function init() {
        createCanvas();
        title();
        personRect();
        pigRect();
    }
    init();
})();