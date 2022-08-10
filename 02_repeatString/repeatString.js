const repeatString = function(a, times){
    if(times<0){
        return 'ERROR';
    }
    else if(times === 0 ){
        return '';
    }
    else{
        return a.repeat(times);
    }
  
    
};

// Do not edit below this line
module.exports = repeatString;
