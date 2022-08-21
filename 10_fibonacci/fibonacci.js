const fibonacci = function(stopAt) {
    if(stopAt < 0)
    {
        return "OOPS";
    }

    let num1 = 1;
    let num2 = 1;
    for(let i =2;i<stopAt;i++)
    {
        if(i%2==0)
        {
            num1 = num1+num2; //2
        }
        else
        {
            num2 = num2 + num1;
        }
    }
    return (num1>num2) ? num1 : num2;
};

// Do not edit below this line
module.exports = fibonacci;
