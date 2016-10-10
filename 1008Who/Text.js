/**
 * Created by Administrator on 2016/10/9 0009.
 */
window.ucai = window.ucai || {};

(function () {


    /**
     * @class Text
     * @extends Shape
     * @param {CanvasRenderingContext2D} context
     * @param str
     * @constructor
     */
    function Text(context, str) {
        ucai.Shape.call(this, context);

        this._string = str;
        this._fontSize =20;

        this._textWidth = 0;
        if (context && str) {
            //获取文字的长度
            this._textWidth = context.measureText(str).width;
        }
    }

    var p = Text.prototype = new ucai.Shape();


    p.onDraw = function () {
        //this._fontSize是文字的高度，文字绘制是的起始点是从文字的左下角向右上角绘制
        this.context.fillText(this._string, 0, this._fontSize);
    };

    Object.defineProperties(p, {
        string: {
            set: function (value) {
                this._string = value;
            },
            get: function () {
                return this._string;
            }
        },
        textWidth: {
            get: function () {
                return this._textWidth;
            }
        }
    });

    p.hitTestPoint = function (pointX, pointY) {
        return pointX > this.x &&
            pointY > this.y &&
            pointX < this.x + this.textWidth &&
            pointY < this.y + this._fontSize;
    };

    ucai.Text = Text;
})();