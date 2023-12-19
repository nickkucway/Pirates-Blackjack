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

let compNumOne = 0
let compNumTwo = 0
let playerNumOne = 0
let playerNumTwo = 0
let playerTotal = 0
let compTotal = 0


function play(event){
    console.clear()
    // computer recieves 1 Number
    compNumOne = Math.floor(Math.random() * 10) +1
    console.log(`comp first number : ${compNumOne}`)
    // player recieves 2 numbers
    playerNumOne = Math.floor(Math.random() * 10) +1
    console.log(`Player first number : ${playerNumOne}`)

    playerNumTwo = Math.floor(Math.random() * 10) +1
    console.log(`Player second number : ${playerNumTwo}`)

    // players 2 numbers added
    playerTotal = playerNumOne + playerNumTwo
    console.log(`Player total number : ${playerTotal}`)
    // player has choice to hit or stand
    
    hitBtn.addEventListener('click', ()=> {
        let newPlayerNum = Math.floor(Math.random() * 10) +1
        console.log(`you drew a ${newPlayerNum}`)
        playerTotal = playerTotal + newPlayerNum
        console.log(`your total is now ${playerTotal}`)
        // bust on hit over 20
        if (playerTotal >= 21){
            console.log('Computer Wins')
        return
        }
    }
    )
    standBtn.addEventListener('click', ()=> {
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
            console.log('Player Wins')
        }
        else if (playerTotal === compTotal){
            console.log('TIE')
        }
        else if(playerTotal < compTotal){
            console.log('Computer Wins')
        } else{
            console.log('Player Wins')
        }
        }
    )  
    // update win logs
}

playBtn.addEventListener('click', play)
