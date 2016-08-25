/**
 * Created by Administrator on 2016/8/24 0024.
 */

(function(){
    function Plane() {		
        this._htmlNodeR=document.createElement("div");
        this._htmlNodeR.className="plane";
		this._y=10;
        this._xR=550;
        this._htmlNodeR.style.left=this._xR+"px";
		
		this._htmlNodeL=document.createElement("div");
        this._htmlNodeL.className="plane";
        this._xL=-69;
        this._htmlNodeL.style.left=this._xL+"px";
        this._speed=Math.random()*50;
		
		this._ball=document.createElement("div");
		this._ball.className="ball";
		this._yB=353;
		this._xB=265;
		this._ball.style.top=this._yB+"px";
    };	
	Object.defineProperty(Plane.prototype,"htmlNodeR",{
        get:function () {
            return this._htmlNodeR;
			
        }
    });
	Object.defineProperty(Plane.prototype,"htmlNodeL",{
        get:function () {
            return this._htmlNodeL;
			
        }
    });
	Object.defineProperty(Plane.prototype,"htmlNodeB",{
        get:function () {
            return this._ball;			
        }
    });
  
	
    Plane.prototype.backgroundValue=function () {
        var arr=["url(images/plane0001.png)","url(images/plane0002.png)","url(images/plane0003.png)","url(images/plane0004.png)","url(images/plane0005.png)"];
        var x=Math.floor(Math.random()*10);
        switch (x){
            case 0:
                return arr[0];
                break;
            case 1:
                return arr[1];
                break;
            case 2:
                return arr[2];
                break;
            case 3:
                return arr[3];
                break;
            default:
                return arr[4];
        }
    };
	
	
	
	
	// Plane.prototype.move= function () {
//        this._xR-=this._speedX;
//        this._xL+=this._speedX;      
//		this._yB-=30;
//		if(this._xR==this._xB&&this._yR==this._yB){
//			  Plane.removePlaneR(this);
//			};
//		if(this._xL==this._xB&&this._yL==this._yB){
//			 Plane.removePlaneL(this);
//			};
//		this._htmlNodeL.style.left=this._xL+"px";
//		this._htmlNodeR.style.left=this._xR+"px";
//		this._ball.style.top=this._tB+"px";
//        
//    }; 	
//	Plane.__planesR=[];
//	Plane.__planesL=[];
//	Plane.__balls=[];
//	
//	
//
//    Plane.createPlaneR = function () {
//        var planeR=new Plane();  
//        document.querySelector(".container").appendChild(planeR.getHtmlNodeR());
//        Plane.__planesR.push(planeR);
//        return planeR;
//    };
//	Plane.createPlaneL= function () {
//        var planeL=new Plane();  
//       document.querySelector(".container").appendChild(planeL.getHtmlNodeL());
//        Plane.__planesL.push(planeL);
//        return planeL;
//    };
//	 Plane.createPlaneB = function () {
//        var planeB=new Plane();  
//        document.querySelector(".container").appendChild(planeB.getHtmlNodeB());
//        Plane.__balls.push(planeB);
//        return planeB;
//    };
//    
   Plane.removePlaneR = function (planeR) {
       planeR.htmlNodeR.parentNode.removeChild(planeR.htmlNodeR);  
      
    };
  Plane.removePlaneL = function (planeL) {
       planeL.htmlNodeL.parentNode.removeChild(planeL.htmlNodeL);  
      
    };
//    
//  Plane.movePlaneR = function () {
//        for(var i = 0;i<20;i++){
//           Plane.__planesR[i].move();
//        }
//    };
//  Plane.movePlaneL = function () {
//        for(var i=0;i<20;i++){
//            Plane.__planesL[i].move();
//        }
//    };
//  Plane.movePlaneB = function () {
//        for(var i=0;i<20;i++){
//          Plane.__balls[i].move();
//        }
//    };
 
   window.Plane=Plane;
})();