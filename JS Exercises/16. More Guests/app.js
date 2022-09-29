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