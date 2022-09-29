let ordNums = [1,2,3,4,5,6,7,8,9];

for (let i=0; i<ordNums.length; i++) {
    if (ordNums[i] == 1) {console.log(ordNums[i]+"st");}
    else if (ordNums[i] == 2) {console.log(ordNums[i]+"nd");}
    else if (ordNums[i] == 3) {console.log(ordNums[i]+"rd");}
    else {
        console.log(ordNums[i]+"th");
    }
}