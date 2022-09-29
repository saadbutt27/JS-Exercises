//1
let myFvrtPlaces = ["Saudia Arab", "USA", "Turkey", "UK", "Aberswyth"];
// 2
console.log("Places I'd like to visit");
for (let i in myFvrtPlaces) {
    console.log(myFvrtPlaces[i]);
}
//3
let myFvrtPlaces2 = [...myFvrtPlaces];
myFvrtPlaces2.sort();
console.log("\nSorted in Alphabetical Order");
for (let i in myFvrtPlaces2) {
    console.log(myFvrtPlaces2[i]);
}
// 4
console.log("\nOriginal Array");
for (let i in myFvrtPlaces) {
    console.log(myFvrtPlaces[i]);
}
//5
myFvrtPlaces2.reverse();
console.log("\nSorted in Reverse Alphabetical Order");
for (let i in myFvrtPlaces2) {
    console.log(myFvrtPlaces2[i]);
}
//6
console.log("\nOriginal Array");
for (let i in myFvrtPlaces) {
    console.log(myFvrtPlaces[i]);
}
//7
console.log("\nReversed Original Array");
myFvrtPlaces.reverse();
for (let i in myFvrtPlaces) {
    console.log(myFvrtPlaces[i]);
}
//8
myFvrtPlaces.reverse();
console.log("\nOriginal Array Reversed Again in normal");
for (let i in myFvrtPlaces) {
    console.log(myFvrtPlaces[i]);
}
// 9
myFvrtPlaces.sort();
console.log("\nSorted Original Array in Alphabetical Order");
for (let i in myFvrtPlaces) {
    console.log(myFvrtPlaces[i]);
}
// 10
myFvrtPlaces.reverse();
console.log("\nSorted Original Array in Reverse Alphabetical Order");
for (let i in myFvrtPlaces) {
    console.log(myFvrtPlaces[i]);
}