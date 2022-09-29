function sandwichItem (...items) {
    console.log("Sandwich ordered should be with " );
    for (let i in items) {
        console.log(items[i]);
    }
}

sandwichItem("sauce", "crunch", "kabab");
sandwichItem("kabab");
sandwichItem("sauce","mayo", "crunch", "pepper", "kabab");