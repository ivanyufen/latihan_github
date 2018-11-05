
//v 1.2
var func = (x,y) => {
    if(y == 1){
        return x;
    }
    else{
        return x = x* func(x, y-1);
    }
}

console.log(func(5,2))