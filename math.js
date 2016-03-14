var Math={
    add:function(x,y)
    {
        if(typeof(x)==="number" && typeof(y)==="number")
            return x+y;
         else 
         {
             console.log("arguments passed are not of type number");
         }
    },
    sub:function(x,y)
    {
        if(arguments.length!==2)
        {
            console.log("Math.Sub function expects two arguments")
            return;
        }
        else if(typeof(x)==="number" && typeof(y)==="number")
        {
            return x-y;
        }
        else
        {
            console.log("arguments passed are not of type number");
        }
    },
    multiply:function(x,y)
    {
        if(arguments.length!==2)
        {
            console.log("Math.multiply function expects two arguments")
            return;
        }
        else if(typeof(x)==="number" && typeof(y)==="number")
        {
            return x*y;
        }
        else
        {
            console.log("arguments passed are not of type number");
        }
    },
    divide:function(x,y)
    {
        if(arguments.length!==2)
        {
            console.log("Math.Sub function expects two arguments")
            return;
        }
        else if(typeof(x)==="number" && typeof(y)==="number")
        {
            return x/y;
        }
        else
        {
            console.log("arguments passed are not of type number");
        }
    },
    square:function(x)
    {
        if(arguments.length!==1)
        {
            console.log("Math.square function expects one argument")
            return;
        }
        else if(typeof(x)==="number")
        {
            return x*x;
        }
        else
        {
            console.log("arguments passed are not of type number");
        }
    },
    gcd:function(x,y)
    {
        if(arguments.length!==2)
        {
            console.log("Math.gcd function expects two arguments")
            return;
        }
        else if(typeof(x)==="number" && typeof(y)==="number")
        {
            gcd(x,y);
        }
        else
        {
            console.log("arguments passed are not of type number");
        }
    },
    log:function(value,base)
    {
        if(arguments.length!==2)
        {
            console.log("Math.log function expects two arguments")
            return;
        }
        else if(typeof(x)==="number" && typeof(y)==="number")
        {
            
        }
        else
        {
            console.log("arguments passed are not of type number");
        }
    }
}