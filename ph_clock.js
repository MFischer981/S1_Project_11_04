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

var clockID = setInterval(countdown(), 1000);

var minsLeft = 0;
var secsLeft = 15;
var timeLeft = 60;

function countdown() {
    minsString = Math.floor(timeLeft / 60);
    secsString = timeLeft - (60 * minsLeft);
    addLeadingZero(minsString);
    addLeadingZero(secsString);
    document.getElementById("minutes").textContent = minsString;
    document.getElementById("seconds").textContent = secsString;
    checkTimer();
    timeLeft--;
}

function stopClock() {
    document.getElementById('TimeHead').insertAdjacentHTML('beforeend', "< br / > (Order Expired),");
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