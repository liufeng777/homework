/**
 * Created by Administrator on 2016/10/12 0012.
 */
(function () {

    var target = document.querySelector("#target");
    var audio=document.querySelector("audio");

    target.addEventListener("dragover", function (e) {
        e.preventDefault();

    });

    target.addEventListener("drop", function (e) {
        e.preventDefault();
        var files = e.dataTransfer.files;
        var reader;

        if (files && files.length) {
             for(var i=0;i<files.length;i++){
                var file = files[i];

             switch (file.type) {
                // case "text/plain":
                //     reader = new FileReader();
                //     reader.onload = function () {
                //         target.innerHTML = reader.result;
                //     };
                //     reader.readAsText(file);
                //     break;
                // case "image/jpeg":
                //     reader = new FileReader();
                //     reader.onload = function () {
                //         target.innerHTML = "<img src='" + reader.result + "'>";
                //     };
                //     reader.readAsDataURL(file);
                //     break;

                case "audio/mp3":
                    reader = new FileReader();
                    reader.onload = function () {
                        // target.appendChild() = "<audio  controls='controls' src='" + reader.result + "'></audio>";
                    };
                    reader.readAsDataURL(file);

                    var div=document.createElement("div");
                    div.innerHTML=file.name;
                    div.className="div";
                    target.appendChild(div);

                    div.onclick=function () {
                       audio.src=reader.result;
                    };

                    break;
                default:
                    console.log(file);
                    break;
            }


        }
        }
    });

})();