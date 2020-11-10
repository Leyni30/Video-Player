const play = document.getElementById('play');
const stop = document.getElementById('stop');
const video = document.getElementById('video');
const timestamp = document.querySelector('.timestamp');
const progress = document.getElementById('progress');


function toggleVideoStatus() {
    if (video.paused) {
        play.querySelector('i.fa').classList.remove('fa-play');
        play.querySelector('i.fa').classList.add('fa-pause');
        video.play();
    } else {
        play.querySelector('i.fa').classList.remove('fa-pause');
        play.querySelector('i.fa').classList.add('fa-play');
        video.pause();
    }
}

function stopVideo() {
    video.pause();
    video.currentTime = 0;
    play.querySelector('i.fa').classList.remove('fa-pause');
    play.querySelector('i.fa').classList.add('fa-play');

}

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    //Get mins
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }

    //Get seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;

}

function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// Event Listeners
video.addEventListener('click', toggleVideoStatus);
play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
video.addEventListener('ended', stopVideo);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('change', setVideoProgress);


// video.addEventListener('pause', updatePlayIcon);
// video.addEventListener('play', updatePlayIcon);