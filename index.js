function validatePassword(firstPassword, secondPassword){
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var numbers = "0123456789"
    var counter = 0;

    if(firstPassword != secondPassword) return false;

    if(firstPassword < 8) return false

    for(let i = 0; i < firstPassword.length; i++){
        if(alphabet.includes(firstPassword[i])){
            counter++;
        }
    }

    if(counter == 0) return false;
    counter = 0;

    for(let i = 0; i < firstPassword.length; i++){
        if(alphabet.toUpperCase().includes(firstPassword[i])){
            counter++;
        }
    }

    if(counter == 0) return false;
    counter = 0;

    for(let i = 0; i < firstPassword.length; i++){
        if(numbers.includes(firstPassword[i])){
            counter++;
        }
    }

    if(counter == 0) return false;
    counter = 0;

    return true;
}

function reversePasscode(passcode){
    var newPasscode = ''
    for(let i = (passcode.length - 1); i >= 0; i--){
        newPasscode = newPasscode+passcode[i];
    }
    return newPasscode;
}

function storePassword(name, passcode1, passcode2){
    var newPasscode = '';
    if(!validatePassword(passcode1, passcode2))
        newPasscode = passcode1;
    else 
        newPasscode = reversePasscode(passcode1);
    
    var profile ={
        name:name,
        newPassword: newPasscode,
    }

    return profile;
}

console.log(storePassword("John", "Pass123", "Pass12345"))