const stats = {
    wins: 0,
    ties: 0,
    losses: 0
}
function $(cssSelector) {
    return document.querySelector(cssSelector)
}

const wins = $('#wins')
const ties = $('#ties')
const losses = $('#losses')
const playBtn = $('#play')
const hitBtn = $('#hit')
const standBtn = $('#stand')
const resMsg = $('#result-message')
const playerCardOne = $('#playerCardOne')
const playerCardTwo = $('#playerCardTwo')
const compCardOne = $('#compCardOne')
const compCardTwo = $('#compCardTwo')
const playBtnBlock = $('#play-button')
const hitStandBtnBlock = $('#hit-stand-buttons')
const extraPlayerNumbers = $('#extra-player-numbers')
const extraCompNumbers = $('#extra-computer-numbers')


let compNumOne = 0
let compNumTwo = 0
let playerNumOne = 0
let playerNumTwo = 0
let playerTotal = 0
let compTotal = 0
let newPlayerNum = 0
let newCompNum = 0

function updateScoreboard(){
    wins.children[1].innerText = stats.wins
    ties.children[1].innerText = stats.ties
    losses.children[1].innerText = stats.losses
}
function showPlay(){
    hitStandBtnBlock.style.display = 'none'
    playBtnBlock.style.display = 'block'
}
function showHitStand(){
    hitStandBtnBlock.style.display = 'block'
    playBtnBlock.style.display = 'none'
}

function showPlayerNewNum() {
    const ul = document.getElementById('extra-player-numbers');
    const li = document.createElement("li");
    li.innerText = newPlayerNum;
    ul.appendChild(li);
}

function showCompNewNum() {
    const ul = document.getElementById('extra-computer-numbers');
    const li = document.createElement("li");
    li.innerText = newCompNum;
    ul.appendChild(li);
}

function clearPlayerNewNum(){
    const ul = document.getElementById('extra-player-numbers');
    ul.replaceChildren()
}
function clearCompNewNum(){
    const ul = document.getElementById('extra-computer-numbers');
    ul.replaceChildren()
    compCardTwo.innerText = `?`

}

function play(event){
    console.clear()
    clearPlayerNewNum()
    clearCompNewNum()
    showHitStand()
    resMsg.children[0].innerText = `Let's Play A Game...`
    // computer recieves 1 Number
    compNumOne = Math.floor(Math.random() * 10) +1
    compCardOne.innerText = compNumOne
    // player recieves 2 numbers
    playerNumOne = Math.floor(Math.random() * 10) +1
    playerCardOne.innerText = playerNumOne
    playerNumTwo = Math.floor(Math.random() * 10) +1
    playerCardTwo.innerText = playerNumTwo
    // players 2 numbers added
    playerTotal = playerNumOne + playerNumTwo
    console.log(`Player total number : ${playerTotal}`)
    // player has choice to hit or stand
}

function hit(event) {  
    newPlayerNum = Math.floor(Math.random() * 10) +1
    playerTotal = playerTotal + newPlayerNum
    console.log(`your total is now ${playerTotal}`)
    showPlayerNewNum()
    // bust on hit over 20
    if (playerTotal >= 21){
        stats.losses++
        resMsg.children[0].innerText = 'You Lose!'
        updateScoreboard()
        showPlay()
    }
}

function stand(event) {
    // on stand computer recieves second number
    compNumTwo = Math.floor(Math.random() * 10) +1
    compCardTwo.innerText = compNumTwo
    compTotal = compNumOne + compNumTwo
    console.log(`Computers second number : ${compNumTwo}`)
    console.log(`Computers total number : ${compTotal}`)
    // if number < 15, hit
    while(compTotal<=15){
        newCompNum = Math.floor(Math.random() * 10) +1
        compTotal = compTotal + newCompNum
        console.log(`Computer drew a : ${newCompNum}`)
        showCompNewNum()
        console.log(`Computers total number : ${compTotal}`)  
    }
    // win or lose or computer bust 
    if (compTotal >= 21){
        stats.wins++
        resMsg.children[0].innerText = 'You Win!'
    }
    else if (playerTotal === compTotal){
        stats.ties++
        resMsg.children[0].innerText = 'Tie Game!'
    }
    else if(playerTotal < compTotal){
        stats.losses++
        resMsg.children[0].innerText = 'You Lose!'
    } else{
        stats.wins++
        resMsg.children[0].innerText = 'You Win!'
    }
    // update win logs
    updateScoreboard()
    showPlay()
    }   

playBtn.addEventListener('click', play)
standBtn.addEventListener('click', stand)
hitBtn.addEventListener('click', hit)