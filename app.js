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
const playerTotalNum = $('#player-total')
const compTotalNum = $('#computer-total')
const openRules = $('#open-rules')
const modal = $('#modal')
const closeRules = $('#close-rules')
const headerImage = $('#header-image')

let compNumOne = 0
let compNumTwo = 0
let playerNumOne = 0
let playerNumTwo = 0
let playerTotal = 0
let compTotal = 0
let newPlayerNum = 0
let newCompNum = 0

function updateTotals(){
    playerTotalNum.children[1].innerText = playerTotal
    compTotalNum.children[1].innerText = compTotal
}

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
    clearPlayerNewNum()
    clearCompNewNum()
    showHitStand()
    headerImage.src = "./images/piratesblackjack.png"
    resMsg.children[0].innerText = `Let's Play A Game...`
    // computer recieves 1 Number
    compNumOne = Math.floor(Math.random() * 10) +2
    compCardOne.innerText = compNumOne
    compTotal = compNumOne
    // player recieves 2 numbers
    playerNumOne = Math.floor(Math.random() * 10) +2
    playerCardOne.innerText = playerNumOne
    playerNumTwo = Math.floor(Math.random() * 10) +1
    playerCardTwo.innerText = playerNumTwo
    // players 2 numbers added
    playerTotal = playerNumOne + playerNumTwo
    // player has choice to hit or stand
    updateTotals()
}

function hit(event) {  
    newPlayerNum = Math.floor(Math.random() * 10) +1
    playerTotal = playerTotal + newPlayerNum
    showPlayerNewNum()
    updateTotals()
    // bust on hit over 21
    if (playerTotal >= 22){
        stats.losses++
        resMsg.children[0].innerText = 'You Lose!'
        updateScoreboard()
        showPlay()
        headerImage.src = "./images/piratesblackjacklose.png"
    }
}

function stand(event) {
    // on stand computer recieves second number
    compNumTwo = Math.floor(Math.random() * 10) +1
    compCardTwo.innerText = compNumTwo
    compTotal = compNumOne + compNumTwo
    // if number < 16, hit
    while(compTotal<=16){
        newCompNum = Math.floor(Math.random() * 10) +1
        compTotal = compTotal + newCompNum
        showCompNewNum()
    }
    // win or lose or computer bust 
    if (compTotal >= 22){
        stats.wins++
        resMsg.children[0].innerText = 'You Win!'
        headerImage.src = "./images/piratesblackjackwin.png"
    } else if (playerTotal === compTotal){
        stats.ties++
        resMsg.children[0].innerText = 'Tie Game!'
        headerImage.src = "./images/piratesblackjacktie.png"
    } else if(playerTotal < compTotal){
        stats.losses++
        resMsg.children[0].innerText = 'You Lose!'
        headerImage.src = "./images/piratesblackjacklose.png"
    } else{
        stats.wins++
        resMsg.children[0].innerText = 'You Win!'
        headerImage.src = "./images/piratesblackjackwin.png"
    }
    // update win logs
    updateScoreboard()
    showPlay()
    updateTotals()
    }   
const openModal = () => {
  modal.style.display = 'block';
}
const closeModal = () => {
    modal.style.display = 'none'
}

playBtn.addEventListener('click', play)
standBtn.addEventListener('click', stand)
hitBtn.addEventListener('click', hit)

openRules.addEventListener('click', openModal)

closeRules.addEventListener('click', closeModal)