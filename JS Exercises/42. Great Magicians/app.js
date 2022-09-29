let magicians = ["Harry Porter", "Hermoine Granger", "Ronald Wesley"];

function show_magicians(magicians) {
    for (let i in magicians) {
        console.log(magicians[i]);
    }
}

function make_great(magicians) {
    for (let i in magicians) {
        magicians[i] = "The Great " + magicians[i]; 
    }
    return magicians;
}
make_great(magicians);
show_magicians(magicians);