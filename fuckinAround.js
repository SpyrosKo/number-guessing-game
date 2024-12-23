// let playerHealth;
// let playerAttack;

// // let monsters = {
// //     crow: { name: "Crow", health: 8, attack: 3 },
// //     ghost: { name: "Ghost", health: 8, attack: 4 }
// // }
// let monsters = {
//     crow: { name: "Crow", health: 8, attack: 3 },
//     ghost: { name: "Ghost", health: 8, attack: 4 }
// };

// // Get the keys (names of the monsters)
// let monsterKeys = Object.keys(monsters);

// console.log(monsterKeys); // Output: [ "crow", "ghost" ]


// let randomIndex = Math.floor(Math.random() * monsterKeys.length);

// console.log(randomIndex); // Output: A random number like 0 or 1


// let selectedMonsterKey = monsterKeys[randomIndex];

// console.log(selectedMonsterKey); // Output: "crow" or "ghost"



// Get a list of monster keys (e.g., "crow", "ghost")
// let monsterKeys = Object.keys(monsters);

// // Pick a random monster
// let randomIndex = Math.floor(Math.random() * monsterKeys.length);
// let selectedMonsterKey = monsterKeys[randomIndex];
// let selectedMonster = monsters[selectedMonsterKey];

// console.log(`A wild ${selectedMonster.name} appears!`);

// Ask the player their name
// let playerName = prompt(`What should I call you?`);
// console.log(`welcome ${playerName}, to the Unamed lands!`)

// // Player picks class
// let playerClass = prompt(`Please pick your class:

//     1) Paladin
//     2) Wizard
//     3) Archer`
// );

// // Add sats to each class
// while (true) {
//     if (playerClass === "1") {
//         console.log("You are a warrior!");
//         playerHealth = 10;
//         playerAttack = 5;
//         break;
//     } else if (playerClass === "2") {
//         console.log("You are a wizard!");
//         playerHealth = 8;
//         playerAttack = 2;
//         break;
//     } else if (playerClass === "3") {
//         console.log("You are an archer!");
//         playerHealth = 8;
//         playerAttack = 3;
//         break;
//     }
// }
// console.log(`Health: ${playerHealth}, Attack ${playerAttack}`);

// // Step 1: Define the battle function
// function battle(player, monster) {
//     console.log(`A wild ${monster.name} appears!`);

//     while (player.health > 0 && monster.health > 0) {
//         // Player attacks
//         console.log(`You attack the ${monster.name} for ${player.attack} damage!`);
//         monster.health -= player.attack;

//         // Check if the monster is defeated
//         if (monster.health <= 0) {
//             console.log(`You defeated the ${monster.name}!`);
//             break;
//         }

//         // Monster attacks
//         console.log(`The ${monster.name} attacks you for ${monster.attack} damage!`);
//         player.health -= monster.attack;

//         // Check if the player is defeated
//         if (player.health <= 0) {
//             console.log(`The ${monster.name} defeated you!`);
//             break;
//         }

//         // Display health
//         console.log(`Your Health: ${player.health}, ${monster.name} Health: ${monster.health}`);
//     }
// }

// // Step 2: Test the battle function
// let player = { health: 10, attack: 5 }; // Example player stats
// let monster = { name: "Crow", health: 8, attack: 3 }; // Example monster stats

// battle(player, monster);



// Number Guessing game
// I want to make a program that the user trys to guess a number, and the computer gets a random number and returns the number and then the random number is checked against the players number. 

let randomNumber = Math.floor((Math.random() * 5) + 1); // Random number is generated
let playerNumberGuess = 0;
let attempts = 0;
let guessLimit = 3; // Player has 3 chances
let bestScore = Infinity;


// Start the loop

while (playerNumberGuess !== randomNumber) {

    // Guess limit check
    if (attempts >= guessLimit) {
        console.log(`Sorry, you've reached your limit, game over.`);
        break;
    }

    playerNumberGuess = Number(prompt(`Pick a number between 1 and 6.`));
    attempts++; // Increments timer after each guess

    if (playerNumberGuess === randomNumber) {
        console.log(`You are correct! The number was ${randomNumber}`);
        if (bestScore > attempts) {
            console.log(`Leaderboard: ${bestScore}`)
        }
    } else if (playerNumberGuess < randomNumber) {
        console.log((`Your guess was too low!`));
    } else if (playerNumberGuess > randomNumber) {
        console.log((`Your guess was too high!`));
    } else {
        console.log(`That is not a valid number. Please try again.`);
    }

    // Tells player how close they are to the number.
    if (Math.abs(playerNumberGuess - randomNumber === 1)) {
        console.log(`${playerNumberGuess} is very close!`);
    }

    // Display the total number of attempts
    console.log(`You guessed ${attempts} attempts!`);


}