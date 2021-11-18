
function askUserQuestion(){
    let userNameInside = prompt('Please Enter your Name!');
    if(userNameInside == 'Roger'){
        document.write('Welcome Dark Lord ' + userNameInside)
    } else {
        document.write('Welcome ' + userNameInside)
    }
}

function secretMessage(){
    let userAnswer = prompt('Do you want to see a secret message? (yes or no)')
    if(userAnswer.toUpperCase() == "YES"){
        document.write('The Dark side is stronger!!')
    }
    console.log(userAnswer);
}

function anotherPictureQuestion(){
    let anotherPicuture = prompt('Do you want to see another SW Pic?');
    let picURL = "https://starwarsblog.starwars.com/wp-content/uploads/2017/03/darth-vader-1-cover-header.jpg"
    if(anotherPicuture.toLowerCase() == "yes"){
        document.write('<img src="' + picURL + '">')
    }
}

// Create a user guessing game
// get an input from the user
// loop of some kind for input validtion
// conditions for the loop
// range of the answer
// correct answer

function guessingGame(){
    let userAnswer = prompt('Please Enter a Number 1-100');
    let correctAnswer = 34; // may come back and get a random number
    let attemps = 8;

    for(let i = 1; i < attemps; i++){
        while(userAnswer < 1 || userAnswer > 100){
            userAnswer = prompt('Please Try Again! A number 1-100');
        }
        if(userAnswer == correctAnswer){
            alert('DING DING DING. You got it right!');
            document.write("Game Winner");
            break;
        } else if (userAnswer > correctAnswer){
            userAnswer = prompt('Sorry. To high. Please Try Again! A number 1-100');
        } else if (userAnswer < correctAnswer){
            userAnswer = prompt('Sorry. To low. Please Try Again! A number 1-100');
        }
        if(i == 7){
            alert('The correct answer was ' + correctAnswer);
            document.write("Game Loser");
        }
    }
}
