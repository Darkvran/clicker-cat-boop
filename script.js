let noseList = ["src/nose2.png", "src/nose3.png", "src/nose4.png", "src/nose5.png", "src/nose6.png", "src/nose7.png","src/nose8.png"]
let score = document.querySelector('.scoreValue').innerHTML = 0;
let level = 1;
let noseIndex = 0;
const clickButton = document.querySelector('.gameButton');
const upgradeButton = document.querySelector('.upgrade')
const levelAudio = new Audio('src/levelUp.mp3');
let meowAudio = new Audio('src/meow.mp3');

clickButton.addEventListener("click", (event) =>{
    meowAudio.pause();
    meowAudio.currentTime = 0.25;
    meowAudio.play();
    score += level;
    document.querySelector('.scoreValue').innerHTML = score;
});

upgradeButton.addEventListener("click", (event) =>{
    if(score >= level * 100 && level !== 8){
    levelAudio.play();
    level++;
    score = 0;
    document.querySelector('.scoreValue').innerHTML = score;
    clickButton.src = noseList[noseIndex];
    noseIndex++;
    }
});
