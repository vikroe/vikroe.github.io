function playSound(name){
    document.getElementById(name).play();
}

var path_to_file = "https://vikroe.github.io/MaldaSounds/";
var files = ["hehe","kchr","mrrrre","woof"];



for (var i = 0; i < files.length; i++){
    var audio = document.createElement("audio");
    audio.setAttribute("id", "audio"+String(i));
    audio.setAttribute("src", path_to_file+files[i]+".mp3");

    console.log(audio);

    var button = document.createElement("button");
    button.setAttribute("onclick", "document.getElementById(\"audio" + i + "\").play();");
    button.innerHTML = files[i];

    var body = document.getElementById("buttons");
    body.appendChild(audio);
    body.appendChild(button);
}

