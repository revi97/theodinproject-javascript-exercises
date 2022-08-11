const removeFromArray = function(...args) {
    const arr = args[0];
    const array = new Array();
    arr.forEach((values) =>  //Should not forget the braces to be added properly here for the function
    {
        if(!args.includes(values)) 
        {
//If the there are any arguments passed in the function, we will check if those are not present in the array.
//If they are not present then we will be pushing that value to the new array.
            array.push(values);
        }
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
