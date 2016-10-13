/**
 * Created by Administrator on 2016/8/23 0023.
 */
(function () {
    var container=document.querySelector(".container")
    for(var i=0;i<100;i++){
        var ball=new ucai.Ball();
        container.appendChild(ball.getNode());
        ball.ballFlight();
    }
})();