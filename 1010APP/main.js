/**
 * Created by Administrator on 2016/9/27 0027.
 */
(function () {
    var banner=document.querySelector(".main_banner");
    var ul=document.getElementsByClassName("banner_img")[0];
    var btns=document.getElementsByClassName("banner_btns")[0].getElementsByTagName("li");
    
    var page=0;
    var time;
    var time1;
    function bannerM(banner,ul,btns,changeTime,bWidth) {
        move();
        time=setInterval(move,changeTime);
        function move() {
            ul.style.transition = "all 1s linear";
            ul.style.left = page * (-bWidth) + "px";
            page++;

            if (page > btns.length) {
                ul.style.transition = "all 1s linear";
                ul.style.left = "0";
                page = 0;
                time1 = setTimeout(function () {
                    ul.style.transition = "all 1s linear";
                }, 10)
            }

            for (var i = 0; i < btns.length; i++) {
                btns[i].index = i;
                btns[i].onmouseover = function () {
                    page = this.index;
                    ul.style.left = page * (-bWidth) + "px";
                    this.style.backgroundColor = "rgba(" + 0 + "," + 0 + "," + 255 + "," + 0.5 + ")";
                };
                btns[i].onmouseout = function () {
                    index = this.index;
                    ul.style.transition = "all 1s linear";
                    this.style.backgroundColor = "#fff";
                };

            }
            banner.onmouseover = function () {
                clearInterval(time);
                clearInterval(time1);

            };
            banner.onmouseout = function () {
                time = setInterval(move, changeTime);
            };
        }
    }
    bannerM(banner,ul,btns,2000,375);  
    
    
})();

