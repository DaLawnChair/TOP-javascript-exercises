const repeatString = function(repeatString,count) 
{
    if(count<0)
    {
        return 'ERROR';
    }
    let sentence="";
    for(let i=0;i<count;i++)
    {
        sentence+=repeatString;
    }
    return sentence;
};

// Do not edit below this line
module.exports = repeatString;
