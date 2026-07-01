// Greet a user by name
function greet(name){
    return "Hello, " + name + "!";
}

// Say goodbye to user by name
function farewell(name){
    return "Bye-bye, " + name + ", until next time.";
}

// Takes in an age, and determines if a person of that age could legally drink
function canDrink(age){
    return age >= 21;
}

// Agree with a user that their favorite thing is your favorite thing too
function appease(favorite){
    return "I love " + favorite + "too! What a coincidence!";
}

// Determine if a user is your senior, junior, or the same age as me
function ourAgeDiff(age){
    if(age === 22){
        return "We're the same age!";
    } else if(age < 22){
        return "You're my junior then!";
    } else if (age > 22){
        return "In that case, you're my senior!";
    } else {
        return "How old did you say you are again?";
    }
}