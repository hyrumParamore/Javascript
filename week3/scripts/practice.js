const nums = [1,2,3,4,5];

function double(number) {
    console.log(number * 2);
    return number * 2;
}

nums.forEach(double);

// Or 
// const nums = [1,2,3,4,5];
// nums.forEach((number) => number * 2);
// It does the same thing as everything above
