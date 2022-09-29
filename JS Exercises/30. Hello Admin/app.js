let usernames = ["admin", "eric", "shawn", "lilly", "mark", "ryan"];

for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "admin") {
        console.log("Hello " + usernames[i] + ", would you like to see status report?");
    } else {
        console.log("Hello " + usernames[i] + " thank you for logging in again");
    }
}