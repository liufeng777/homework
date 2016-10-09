/**
 * Created by Administrator on 2016/10/8 0008.
 */
window.ucai=window.ucai||{};
(function () {
    function Rect(width,height) {
       this._width=width;
       this._height=height;
    }

    Rect.prototype=new ucai.Person();

    Rect.prototype.onDraw=function (context) {
        context.fillRect(100,200,this._width,this._height);
    };
    ucai.Rect=Rect;
})();