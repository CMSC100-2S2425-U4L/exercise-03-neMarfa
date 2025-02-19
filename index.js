
// function checks whether or not the password is valid
function validatePassword(firstPassword, secondPassword){
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var numbers = "0123456789"
    var counter = 0;

    // checks if they are the same password
    if(firstPassword != secondPassword) return false;

    // checks if the length is greater than or equal to 8
    if(firstPassword < 8) return false

    // checks if there is atleast one lowercase letter
    for(let i = 0; i < firstPassword.length; i++){
        if(alphabet.includes(firstPassword[i])){
            counter++;
        }
    }

    if(counter == 0) return false;
    counter = 0;
    //

    // checks if there is atleast one uppercase letter
    for(let i = 0; i < firstPassword.length; i++){
        if(alphabet.toUpperCase().includes(firstPassword[i])){
            counter++;
        }
    }

    if(counter == 0) return false;
    counter = 0;
    //

    // checks if there is atleast one number
    for(let i = 0; i < firstPassword.length; i++){
        if(numbers.includes(firstPassword[i])){
            counter++;
        }
    }

    if(counter == 0) return false;
    counter = 0;
    //

    // if all conditions are satisfied it returns true
    return true;
}

// function reverses a valid password
function reversePasscode(passcode){
    var newPasscode = ''
    // traverses original password in reverse order and concatenates those to a new string
    for(let i = (passcode.length - 1); i >= 0; i--){
        newPasscode = newPasscode+passcode[i];
    }
    return newPasscode;
}

// responsible for storing password in an object
function storePassword(name, passcode1, passcode2){
    var newPasscode = '';

    // case when password is invalid
    if(!validatePassword(passcode1, passcode2))
        newPasscode = passcode1;
    // case when password is valid
    else 
        newPasscode = reversePasscode(passcode1);
    
    // note that the if statements only affect the password's value
    var profile ={
        name:name,
        newPassword: newPasscode,
    }

    return profile;
}

console.log(storePassword("John", "Pass123", "Pass12345"))