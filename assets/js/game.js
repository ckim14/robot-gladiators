var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

//subtract the value of 'playerattack' from the value of 'enemyhealth and use that result to update teh value in the 'enemyhealth' variable
enemyHealth = enemyHealth - playerAttack;

//log a resulting message to the console so we know that it worked.
playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "; 

//subtract the value of 'enemyattack' from teh value of 'playerhealth' and use that result to update the value in the 'playerhealth' variable
playerHealth = playerHealth - enemyAttack;

//log a resulting message to the console so we know that it worked.
console.log(
    enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining.");

//check player's health
if (playerHealth <=0) {
    window.alert(playerName + " has died! ");
}    
else {
    window.alert(playerName + " still has " + playerHealth + " health left. ");
}

//check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + "has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left. ");
}

// check to see if the valueof the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
}

if (playerHealth === 0) {
    console.log("This will not run.");
}

else {
    console.log("This will run instead");
}}

fight ();