/**
 * Created by Administrator on 2016/8/22 0022.
 */
(function () {
    var div1=document.querySelector(".div1");
    var div2=document.querySelector(".div2");
    var div11=document.querySelector(".div11");
    var div22=document.querySelector(".div22");


    div1.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        div11.style.display = "block";
        div11.style.left = event.pageX + "px";
        div11.style.top = event.pageY + "px";
    });
    div2.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        div22.style.display = "block";
        div22.style.left = event.pageX + "px";
        div22.style.top = event.pageY-200+ "px";
    });

    function remove1(father,son){
        document.addEventListener("contextmenu",function(event){
            if(event.pageX>father.offsetWidth||event.pageY>father.offsetHeight){
                son.style.display="none";
            }
        })
    }
    function remove2(father,son){
        document.addEventListener("contextmenu",function(event){
            if(event.pageX>father.offsetWidth||event.pageY>father.offsetHeight+200||event.pageY<father.offsetHeight){
                son.style.display="none";
            }
        })
    }
    remove1(div1,div11);
    remove2(div2,div22);

})();