const sumAll = function(a,b) {
    //Psuedocode
    //Get two integers where a is the starting value and b is the ending value of the numbers to be summed up
    //Try to do a loop where a is assigned to i and b+1 will be the length of the loop
    // Add i=+i and return it as sum

    let sum = 0;
    if(a<0 || b< 0){
        return 'ERROR';
    }
    else if(Array.isArray(b))
    {
        return 'ERROR';
    }
    else if(typeof b === 'string')
    {
        return 'ERROR';
    }
    else{
        if(a>b){
            let c = a;
            a = b;
            b =c;    
        }
        for(i=a; i<=b;i++){
            sum = sum+i;
        }
        return sum;
    }
    
        
};

// Do not edit below this line
module.exports = sumAll;
