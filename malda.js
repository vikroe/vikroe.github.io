function playSound(name){
    document.getElementById(name).play();
}

var path_to_file = "https://vikroe.github.io/MaldaSounds/";
var files = ["hehe.mp3","kchr.mp3","mrrrre.mp3","woof.mp3"];



for (var i = 0; i < files.length; i++){
    var audio = document.createElement("audio");
    audio.setAttribute("id", "audio"+String(i));
    audio.setAttribute("src", path_to_file+files[i]);

    console.log(audio);

    var button = document.createElement("button");
    button.setAttribute("onclick", "document.getElementById(\"audio" + i + "\").play();");
    button.innerHTML = "Do Something " + String(i);

    var body = document.getElementById("buttons");
    body.appendChild(audio);
    body.appendChild(button);
}

