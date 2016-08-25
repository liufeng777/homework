/**
 * Created by Administrator on 2016/8/24 0024.
 */
(function () {
	var container=document.querySelector(".container");
	var planesR=[];
	var planesL=[]; 
	var balls=[];  
	setInterval(function () { 	
	    var plane=new Plane();     
        container.appendChild(plane.htmlNodeR);
		container.appendChild(plane.htmlNodeL);		
		
        plane.htmlNodeR.style.background=plane.backgroundValue(); 
		plane.htmlNodeL.style.background=plane.backgroundValue();
		
		planesR.push(plane.htmlNodeR);
		planesL.push(plane.htmlNodeL);		
    },1500);
	
	document.onkeydown=function(){	
		var plane=new Plane();  	
		container.appendChild(plane.htmlNodeB);
		balls.push(plane.htmlNodeB);
		}
	
	setInterval(function(){
		var speed=Math.random()*50;
		for(var i=0;i<planesR.length;i++){
			planesR[i].style.left=parseFloat(planesR[i].style.left)-speed+"px";
			planesL[i].style.left=parseFloat(planesL[i].style.left)+speed+"px";	
			
		 };
		 for(var j=0;j<balls.length;j++) {
			balls[j].style.top=parseFloat(balls[j].style.top)-30+"px";
		
		 }
	},115);

//setInterval(function(){
//		Plane.createPlaneR();
//		Plane.createPlaneL();
//		},1500);
//	document.onkeydown=function(){
//		Plane.createPlaneB();
//		};
//	
//	
//    setInterval(function () {
//		for(var i=0;i<20;i++){
//			Plane.movePlaneR();		 
//		    Plane.movePlaneL();
//            Plane.movePlaneB();
//			}
//		
//    },115);
	
	
	
})();