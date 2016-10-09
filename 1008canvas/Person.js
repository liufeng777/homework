/**
 * Created by Administrator on 2016/10/8 0008.
 */
window.ucai=window.ucai||{};

(function () {
   
    function Person(){        
    }
    
    

     Object.defineProperties(Person.prototype, {
        x: {
            set: function (value) {
                this._x = value;
            },
            get: function () {
                return this._x;
            }
        },
        y: {
            set: function (value) {
                this._y = value;
            },
            get: function () {
                return this._y;
            }
        },
        color: {
             set: function (value) {
                 this._color= value;
             },
             get: function () {
                 return this._color;
             }
         }
    });

    Person.prototype.render = function (context) {   

        context.save();
        context.translate(this.x, this.y);        
        this.onDraw(context);
        context.restore();
    };
    Person.prototype.onDraw = function (context) {

    };

    ucai.Person=Person;
})();