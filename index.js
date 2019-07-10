let x = 50
let y = 65
if (x>y){
    console.log(x);
}
else if (x<y){
    console.log(y);
}

// the other way to do this is
let number = max(50,65);
console.log(number);
function max (a, b){
    if (a>b) return a;
    else return b;
}

//the other way to do this is with the Ternary Operator
let anotherNumber = max (50,65);
console.log(anotherNumber);
function max(a,b){
    return (a>b) ? a : b;
}

let width = 1000
let height = 100
console.log ('isLandscape');
function isLandscape(width, height){
    return (width>height);
}

