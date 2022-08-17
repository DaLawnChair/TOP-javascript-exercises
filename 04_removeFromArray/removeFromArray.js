const removeFromArray = function(original) 
{
    let copy=original;
    const args = Array.from(arguments);
    
    for(let i=1;i<args.length;i++)
    {
        for(let j=0;j<copy.length;j++)
        {
            if(copy[j]===(args[i]))
            {
                copy.splice(j,1);
                break;
            }
        }
    
    }
    return copy;
};

// Do not edit below this line
module.exports = removeFromArray;
