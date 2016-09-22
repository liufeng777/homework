/**
 * Created by Administrator on 2016/9/21 0021.
 */
(function () {
    var liArr=document.getElementsByTagName("li");

    var div1=document.querySelector(".div1");
    var div2=document.querySelector(".div2");
    var div3=document.querySelector(".div3");
    var div4=document.querySelector(".div4");
    var div5=document.querySelector(".div5");
    var div6=document.querySelector(".div6");
    var div7=document.querySelector(".div7");
    var div8=document.querySelector(".div8");
    var div9=document.querySelector(".div9");
    var div0=document.querySelector(".div00");
    var div11=document.querySelector(".div001");
    var div12=document.querySelector(".div02");
    var div13=document.querySelector(".div03");
    var div14=document.querySelector(".div04");
    var div15=document.querySelector(".div05");
    var div16=document.querySelector(".div06");

     function turnover(i) {
       div1.style.transform="rotateX("+(-i*90)+"deg)";
       div2.style.transform="rotateX("+(-i*90)+"deg)";
       div3.style.transform="rotateX("+(-i*90)+"deg)";
        div4.style.transform="rotateX("+(-i*90)+"deg)";
        div5.style.transform="rotateX("+(-i*90)+"deg)";
        div6.style.transform="rotateX("+(-i*90)+"deg)";
        div7.style.transform="rotateX("+(-i*90)+"deg)";
        div8.style.transform="rotateX("+(-i*90)+"deg)";
        div9.style.transform="rotateX("+(-i*90)+"deg)";
        div0.style.transform="rotateX("+(-i*90)+"deg)";
        div11.style.transform="rotateX("+(-i*90)+"deg)";
        div12.style.transform="rotateX("+(-i*90)+"deg)";
        div13.style.transform="rotateX("+(-i*90)+"deg)";
        div14.style.transform="rotateX("+(-i*90)+"deg)";
        div15.style.transform="rotateX("+(-i*90)+"deg)";
        div16.style.transform="rotateX("+(-i*90)+"deg)";
        

    }


    liArr[0].onclick=function(){
        turnover(0);
    };
    liArr[1].onclick=function(){
        turnover(1);
    };
    liArr[2].onclick=function(){
        turnover(2);
    };
    liArr[3].onclick=function(){
        turnover(3);
    };

})();