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
const resMsg = $('#result-messgae')
const playerCardOne = $('#playerCardOne')
const playerCardTwo = $('#playerCardTwo')
const compCardOne = $('#compCardOne')
const compCardTwo = $('#compCardTwo')


let compNumOne = 0
let compNumTwo = 0
let playerNumOne = 0
let playerNumTwo = 0
let playerTotal = 0
let compTotal = 0

function updateScoreboard(){
    wins.children[1].innerText = stats.wins
    ties.children[1].innerText = stats.ties
    losses.children[1].innerText = stats.losses
}

function play(event){
    console.clear()
    // computer recieves 1 Number
    compNumOne = Math.floor(Math.random() * 10) +1
    compCardOne.children[0].innerText = compNumOne
    // player recieves 2 numbers
    playerNumOne = Math.floor(Math.random() * 10) +1
    playerCardOne.children[0].innerText = playerNumOne
    playerNumTwo = Math.floor(Math.random() * 10) +1
    playerCardTwo.children[0].innerText = playerNumTwo
    // players 2 numbers added
    playerTotal = playerNumOne + playerNumTwo
    console.log(`Player total number : ${playerTotal}`)
    // player has choice to hit or stand
}

function hit(event) {
    let newPlayerNum = 0
    newPlayerNum = Math.floor(Math.random() * 10) +1
    console.log(`you drew a ${newPlayerNum}`)
    playerTotal = playerTotal + newPlayerNum
    console.log(`your total is now ${playerTotal}`)
    // bust on hit over 20
    if (playerTotal >= 21){
        stats.losses++
        console.log('Computer Wins')
        updateScoreboard()
    }
}

function stand(event) {
    // on stand computer recieves second number
    compNumTwo = Math.floor(Math.random() * 10) +1
    compTotal = compNumOne + compNumTwo
    console.log(`Computers second number : ${compNumTwo}`)
    console.log(`Computers total number : ${compTotal}`)
    // if number < 15, hit
    while(compTotal<=15){
        let newCompNum = Math.floor(Math.random() * 10) +1
        compTotal = compTotal + newCompNum
        console.log(`Computer drew a : ${newCompNum}`)
        console.log(`Computers total number : ${compTotal}`)  
    }
    // win or lose or computer bust 
    if (compTotal >= 21){
        stats.wins++
        console.log('Player Wins')
    }
    else if (playerTotal === compTotal){
        stats.ties++
        console.log('TIE')
    }
    else if(playerTotal < compTotal){
        stats.losses++
        console.log('Computer Wins')
    } else{
        stats.wins++
        console.log('Player Wins')
    }
    updateScoreboard()
    }
     
    // update win logs


playBtn.addEventListener('click', play)
standBtn.addEventListener('click', stand)
hitBtn.addEventListener('click', hit)