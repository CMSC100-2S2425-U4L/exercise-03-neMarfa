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
    for(let i = (passcode.length - 1); i >= 0; i--){

    }
}

function storePassword(name, passcode1, passcode2){
    if(!validatePassword(passcode1, passcode2)){
        console.log("Password does not match password specifications");
        return false;
    }
    console.log("valid");
}

storePassword("John", "Pass1234", "Pass1234")