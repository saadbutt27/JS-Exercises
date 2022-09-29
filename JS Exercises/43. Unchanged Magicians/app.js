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
let gr8Magicians = [...magicians];
make_great(gr8Magicians);
show_magicians(magicians);
show_magicians(gr8Magicians);