// Create an Array of at least 3 losing messages
var losing = ['Too bad, so sad!', 'Better luck next time!', 'So close yet so far!']
// Create variables to count wins and losses
var winCount = 0
var lossCount = 0
// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var message = document.getElementById('message')
var wins = document.getElementById('wins')
var losses = document.getElementById('losses')
// target all .box elements and attach a click event listener to each one using a loop
var boxes = document.getElementsByClassName('box')
for (var i = 0; i < boxes.length; i++) {
    var boxElement = boxes[i];
    // within each click event...
    // determine which box was clicked with 'this.textContent' or event.target.textContent
    // convert that value to a Number and store it to a variable
    boxElement.onclick = function(event) {
        var boxNum = Number(event.target.textContent)
        // create a random number between 1-3 and store it to a variable
        // This number will represent the winning box
        var winNum = Math.floor(Math.random() * 3) + 1
        // determine if the box clicked is equal to the random number
        // if the numbers match, display a winning message by changing the text content of the div#message element
        // if the numbers match, increment wins and display the win count in div#wins
        if (boxNum === winNum) {
            message.textContent = 'Winner Winner Chicken Dinner!'
            winCount = winCount + 1
        }
        // if the numbers don't match, change the div#message element's text to a random losing message from the array above
        // if the numbers don't match, increment losses and display the loss count in div#losses
        else {
            message.textContent = losing[Math.floor(Math.random()*losing.length)];
            lossCount = lossCount + 1
        }
        wins.textContent = "Wins: " + winCount
        losses.textContent = "Losses: " + lossCount
    }
    
}








