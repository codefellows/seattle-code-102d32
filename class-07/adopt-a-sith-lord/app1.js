// console.log('Hello World from the JS file!');

// let userName = 'Roger';
// console.log(userName);

function askUserQuestion(){
    let userNameInside = prompt('Please Enter your Name!');

    // console.log(userNameInside);
    //             'Welcome ' + 'Roger'
    if(userNameInside == 'Roger'){
        document.write('Welcome Dark Lord ' + userNameInside)
    } else {
        document.write('Welcome ' + userNameInside)
    }
    return userNameInside;
    // return 'Roger'
}

let userNameOutside = askUserQuestion();
console.log(userNameOutside);

