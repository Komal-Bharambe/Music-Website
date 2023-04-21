console.log("welcome");
// Intialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
// let songItems = Array.from(document.getElementByClassName('songItem'));

let songs = [
    {songName: "Beautiful pieno",filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Emotional Trailer",filePath: "songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "Smooth",filePath: "songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "The Inspiration",filePath: "songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "Happy",filePath: "songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "Motivational",filePath: "songs/6.mp3", coverPath:"covers/6.jpg"},
]

// songItems.forEach((element,i)=>{
  //  console.log(element,i);
   // element.getElementByTagName("img")[0].src = songs[i].coverPath;
    //element.getElementByClassName("songName")[0].innerText = songs[i].songName;
//})
// audioElement.placovers
//handle play/pause clicks
masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Event
audioElement.addEventListener('timeupdate', () =>{
    console.log('timeupdate');

    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click', (e) =>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src  = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.className.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () =>{
    if(songIndex >= 6){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src  = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.className.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () =>{
    if(songIndex <= 0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src  = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.className.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
