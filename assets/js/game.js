var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //ask player to FIGHT or SKIP
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

        //subtract the value of 'playerattack' from the value of 'enemyhealth and use that result to update teh value in the 'enemyhealth' variable
        enemyHealth = enemyHealth - playerAttack;

        //log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "); 
        

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + "has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left. ");
        }

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
    }

    //if player chooses to skip
    else if(promptFight ==="skip" || promptFight ==="SKIP") {
        window.alert(playerName + " has chosen to skip the fight!");
        
        //confirm if player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!"); 
            //subtract money from playerMoney for skipping
            playermoney = playerMoney - 2; 
        }

        //if no (false), ask question again by running fight() again
        else {
            fight();
        }
    } 
    
    else{
        window.alert("You need to choose a valid option. Try again!");
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