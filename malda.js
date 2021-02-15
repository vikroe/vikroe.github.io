var path_to_file = "https://vikroe.github.io/MaldaSounds/";
var files = ["hehe.mp3","kchr.mp3","mrrrre.mp3","woof.mp3"];
var audioList = new Array(4);

for (var i = 0; i < files.length; i++){
    
    audioList[i] = new Audio(path_to_file+files[i]);

    var button = document.createElement("button");
    button.innerHTML = "Do Something " + String(i);

    var body = document.getElementById("buttons");
    body.appendChild(button);

    button.addEventListener("click", function() {audioList[i].play()});

}
