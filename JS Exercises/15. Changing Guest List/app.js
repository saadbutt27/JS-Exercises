let guests = ["John", "Patricia", "Marilynn"];
let noGuest;

for (let i in guests) {
    if (i == 1) {
        noGuest = guests[i];
        guests[i] = "Thomas";    
    }
    console.log("Hello " + guests[i] + ", it would be delightful to have dinner with you, please come."); 
}

console.log(noGuest + " did'nt come for dinner.");