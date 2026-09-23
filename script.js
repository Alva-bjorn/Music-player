let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");


let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let track_index = 0;
let isPlaying = false;
let curr_track = document.createElement('audio');

let track_list = [
    {
        name: "Bad Boy",
        artist: "Cascada",
        image: "assets/Rectangle 20.png",
        path: "music/Nightcore-BadBoy.mp3"
    },
    {
        name: "Caramelldansen",
        artist: "",
        image: "assets/Rectangle 21.png",
        path: "music/Caramelldansen.mp3"
    },
    {
        name: "All I Ever Wanted Is You",
        artist: "",
        image: "assets/Rectangle 22.png",
        path: "music/AllIEverWanted.mp3"
    },
     {
        name: "Bring Me To Life",
        artist: "",
        image: "assets/Rectangle 23.png",
        path: "music/BringMeToLife.mp3"
    },
     {
        name: "Can You Feel My Heart",
        artist: "",
        image: "assets/Rectangle 24.png",
        path: "music/Can-You-Feel-My-Heart.mp3"
    },
    {
        name: "Dam Dadi Doo",
        artist: "",
        image: "assets/Rectangle 25.png",
        path: "music/DamDadiDoo.mp3"
    },
     {
        name: "Dark Horse",
        artist: "",
        image: "assets/Rectangle 13.png",
        path: "music/Darkhorse.mp3"
    },
    {
        name: "Demon Mode",
        artist: "",
        image: "assets/Rectangle 14.png",
        path: "music/DemonMode.mp3"
    },
    {
        name: "Dream On",
        artist: "",
        image: "assets/Rectangle 15.png",
        path: "music/Dream-On.mp3"
    },
    {
        name: "Everytime We Touch",
        artist: "",
        image: "assets/Rectangle 26.png",
        path: "music/EverytimeWeTouch.mp3"
    },
    {
        name: "God Is A Girl",
        artist: "",
        image: "assets/Rectangle 17.png",
        path: "music/GodIsaGirl.mp3"
    },
    {
        name: "Hewwo Kitty!",
        artist: "",
        image: "assets/Rectangle 29.png",
        path: "music/HEWWO-KITTY!.mp3"
    },
    {
        name: "I Was Made For Loving You",
        artist: "",
        image: "assets/Rectangle 7.png",
        path: "music/IWasMadeForLovinYou.mp3"
    },
    {
        name: "My Lifes A Party",
        artist: "",
        image: "assets/Rectangle 16.png",
        path: "music/MyLife'sAParty.mp3"
    },
     {
        name: "Pika Girl",
        artist: "",
        image: "assets/Rectangle 18.png",
        path: "music/PikaGirl.mp3"
    },
    {
        name: "Rockefeller Street",
        artist: "",
        image: "assets/Rectangle 28.png",
        path: "music/RockefellerStreet.mp3"
    },
    {
        name: "Stamp On The Ground",
        artist: "",
        image: "assets/Rectangle 30.png",
        path: "music/StampontheGround.mp3"
    },
    {
        name: "Take It Off",
        artist: "",
        image: "assets/Rectangle 27.png",
        path: "music/TakeItOff.mp3"
    }
];


function loadTrack(track_index){
    curr_track.src = track_list[track_index].path;
    curr_track.load();

    track_art.style.backgroundImage = "url('" + track_list[track_index].image + "')";
     track_name.textContent = track_list[track_index].name;
   
}

loadTrack(track_index);

function playpauseTrack(){
    if (!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack() {
    curr_track.play();
    isPlaying = true;
    playpause_btn.style.backgroundImage = "url('assets/Component 4.png'";
}

function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    playpause_btn.style.backgroundImage = "url('assets/Component 2.png'";

}

function nextTrack(){
    if (track_index < track_list.length - 1) track_index += 1;
    else track_index = 0;
    loadTrack(track_index);
    playTrack();
}

function prevTrack(){
    if (track_index > 0) track_index -= 1;
    else track_index = track_list.length - 1;
    loadTrack(track_index);
    playTrack();
}
curr_track.addEventListener("ended", nextTrack);
