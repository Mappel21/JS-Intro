var total = prompt('How many km are left to go?');

// Your code below:
function testNum(a){
if (a > 100){
    return "We still have a bit of driving left to go";
}
 else if (a > 50 && a <= 100){
     return "We'll be there in 5 minutes";
 }
 else{
     return "I'm parking. I'll see you right now";
 }
}
console.log (testNum(total))