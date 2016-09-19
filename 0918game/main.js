/**
 * Created by Administrator on 2016/9/18 0018.
 */
(function () {
    var myCanvas=document.querySelector("#myCanvas");
    var context=myCanvas.getContext("2d");
    var len=0;
    var scoreNum=0;
    var playing=false;

    function rect(s) {
        context.beginPath();
        context.rect(s,300,50,200);
        context.fillStyle="#000";
        context.fill();
        context.closePath();
    }
    function square(s) {
        context.beginPath();
        context.rect(s,280,20,20);
        context.fillStyle="#ff0000";
        context.fill();
        context.closePath();
    }
    function board() {
        if(!playing){
            playing = true;
            document.onkeydown = function (event) {
                if (event.keyCode == 32) {
                    len++;
                    context.beginPath();
                    context.lineWidth = 2;
                    context.moveTo(70, 300);
                    context.lineTo(70, 300 - len);
                    context.strokeStyle = "yellow";
                    context.stroke();
                    context.closePath();
                    document.onkeyup = function () {
                        context.clearRect(68, 300 - len, 4, len);
                        context.beginPath();
                        context.lineWidth = 2;
                        context.moveTo(70, 300);
                        context.lineTo(70 + len, 300);
                        context.strokeStyle = "yellow";
                        context.stroke();
                        if (len > 30 && len <60) {
                            context.clearRect(49, 280, 20, 20);
                            var i = 0;
                            var id = setInterval(function () {
                                square(50 + i);
                                context.clearRect(50, 280, i, 20);
                                i++;
                                if (i >= len+20) {
                                    clearInterval(id);
                                    playing=false;
                                    //context.clearRect(68,300,len,1);
                                }
                            }, 50);
                            scoreNum++;
                            context.clearRect(250, 0, 100, 100);
                            context.beginPath();
                            context.font = "40px 微软雅黑";
                            context.fillStyle = "#fff";
                            context.fillText(scoreNum + "", 250, 50);
                            context.closePath();

                        } else {
                            alert("GAME OVER!");
                        }
                    }
                }

            }
        }
    }

function score() {
    context.clearRect(250, 0, 100, 100);
    context.beginPath();
    context.font = "40px 微软雅黑";
    context.fillStyle = "#fff";
    context.fillText("0", 250, 50);
    context.closePath();
}
    score();
    rect(20);
    rect(100);
    square(50);
    board();

})();