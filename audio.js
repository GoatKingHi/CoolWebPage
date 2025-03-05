let audio = document.getElementById("myAudio");
audio.autoplay = false; // Ensure autoplay is disabled
audio.load(); // Reload the audio to apply changes

function enableSound() {
    console.log("Hey");
    document.body.style.backgroundImage = "url(Frikadelle.gif)";

    document.getElementById("myAudio").play();
    document.getElementById("button").style.display = "none";
}