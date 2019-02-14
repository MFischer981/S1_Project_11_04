/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: 
   Date:  

   Filename:   ph_clock.js     

*/

/* ------------------------------------------------- */

// Set the variable clockID to the value of a setInteral that triggers the countdown function every 1000 secs.
var clockID = setInterval('countdown()', 1000);

// Assign values to variable of minsLeft, secsLeft and timeLeft
var minsLeft = 30;
var secsLeft = 0;
var timeLeft = minsLeft * 60 + secsLeft;

// Countdown function
function countdown() {
    // Rounds mins to whole number
    minsLeft = Math.floor(timeLeft / 60);
    // Calculates seconds based on minutes left.
    secsLeft = timeLeft - 60 * minsLeft;
    // Adds leading zeroes using leading zero fuction below.
    var minsString = addLeadingZero(minsLeft);
    var secsString = addLeadingZero(secsLeft);
    // Write values to textContent in HTML document by using their IDs.
    document.getElementById("minutes").textContent = minsString;
    document.getElementById("seconds").textContent = secsString;
    // Trigeger check timer function.
    checkTimer();
    // Decrement the timeLeft variable by 1.
    timeLeft--;
}

// When the timer runs out display text in the adjacent HTML before the end of the parent.
function stopClock() {
    document.getElementById('TimeHead').insertAdjacentHTML('beforeend', "<br> (Order Expired),");
    clearInterval();
}

/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */
function checkTimer() {
    if (timeLeft === 0) stopClock();
}

/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
    var numStr = (num < 10) ? ("0" + num) : "" + num;
    return numStr;
}