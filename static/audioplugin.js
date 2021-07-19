function audio_skip(to) {
    let parts = to.split(":");
    let time = 0;
    if (parts.length === 2) {
        time = parseInt(parts[0])*60 + parseInt(parts[1]);
    } else if (parts.length === 3) {
        time = (parseInt(parts[0])*60 + parseInt(parts[1]))*60 + parseInt(parts[2]);
    } else {
        throw "Unknown Timestamp";
    }
    console.log(time);
    var audio = document.getElementById("transcript_audio");
    audio.currentTime = time;
    audio.play(); 
}
