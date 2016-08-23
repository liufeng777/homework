/**
 * Created by Administrator on 2016/8/23 0023.
 */
window.ucai=window.ucai||{};
(function () {
    function Ball() {
        this.htmlNode=document.createElement("div");
        this.htmlNode.className="ball";
        this.htmlNode.style.top=Math.random()*700+"px";
        this.htmlNode.style.left=Math.random()*screen.availWidth+"px";
        this.htmlNode.style.backgroundColor="#"+Math.floor(Math.random()*1000000);
    }
    Ball.prototype.getNode=function () {
        return this.htmlNode;
    }
    Ball.prototype.ballFlight=function () {
        var speedX=(Math.random()-0.5)*10;
        var speedY=(Math.random()-0.5)*10;
        var self=this;
        setInterval(function(){
            self.htmlNode.style.left= parseFloat(self.htmlNode.style.left)+speedX+"px";
            self.htmlNode.style.top= parseFloat(self.htmlNode.style.top)+speedY+"px";

        },10);
    }

    ucai.Ball=Ball;
})();