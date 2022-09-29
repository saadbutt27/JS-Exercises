let carObj = (manuName, modelName, otherArgs = null) => {
    const obj = {
        manuName : manuName,
        modelName : modelName,
    }

    for (let i in otherArgs) {
        obj[i] = otherArgs[i];
    }
    
    return obj;
}

console.log(carObj("toyota", "car-123"));
console.log(carObj("honda", "h-2008", {color: "blue", feature: "auto-geared"}));