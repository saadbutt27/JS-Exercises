let guests = ["John", "Patricia", "Marilynn"];

let i = 0; 
for (let i in guests) {
    console.log("Hello " + guests[i] + ", it would be delightful to have dinner with you, please come.");
}

guests.unshift("Ronald");
guests[guests.length/2] = "Harry";
guests.push("Hermoine");

console.log("\nAfter adding three more guests");
for (let i in guests) {
    console.log("Hello " + guests[i] + ", it would be delightful to have dinner with you, please come.");
}

console.log("\nYou can only invite two people for dinner");

for (let i=0; i<guests.length; i++) {
    if (i > 1) {
        console.log(guests.pop() + " sorry, because we can't invite you to dinner.");
        i=0;
    }
}
console.log("Invited Guests");
for (let i in guests) {
    console.log("Hello " + guests[i] + ", it would be delightful to have dinner with you, please come.");
}

guests.pop();
guests.pop();
console.log(guests);


