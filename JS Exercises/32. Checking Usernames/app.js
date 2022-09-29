let current_users = ["eric", "shawn", "lilly", "mark", "RYAN"];
let new_users = ["elizabeth", "shawn", "MARK", "william", "ryan"];
let flag = false;
for (let i=0; i<new_users.length; i++) {
    for (let j=0; j<current_users.length; j++) {
        if (new_users[i].toLocaleLowerCase() == current_users[j].toLocaleLowerCase()) {
            flag = true;
            break;
        } else {
            flag = false;
            // console.log("username " +new_users[i]+ " is available");
        }
    } if (flag) {
        console.log(new_users[i] + " is not available, you have to enter a new username");
    } else {
        console.log("Username  " +new_users[i]+ " is available");
    }
}