const reverseString = function(original) 
{
    let copy="";
    for(let copyCount = original.length-1;copyCount>=0;copyCount--)
    {
        copy += original[copyCount];
    }
    return copy;
};

// Do not edit below this line
module.exports = reverseString;
