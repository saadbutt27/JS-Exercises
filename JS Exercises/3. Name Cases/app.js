let name = "eric paRkEr";

let toTitleCase = (name) => {
    let nameStr = "";
    for (let i=0; i<name.length; i++) {
        if (i==0){
            nameStr += name[0].toUpperCase();
        } else if (name[i] == " ") {
            nameStr += " ";
            nameStr += name[i+1].toUpperCase();
            i++;
        } else {
            nameStr += name[i].toLowerCase();
        }
    }
    return nameStr;
}

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(toTitleCase(name));
