Exercise One
function min(a, b){
if (a < b) return a;
else return b;
}
// Your code here.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

Exercise Two
function isEven(num){
	if (num == 0) return true;
    else if (num == 1) return false;
    else if (num < 0) return isEven(num + 2);
    else return isEven(num - 2);
}

// Your code here.

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-3));
// → ??

Exercise Three
function countChar(string, character) {
	let count = 0;
	for (let i = 0; i < string.length; i++){
    if (string[i] == character) {
        count += 1;
    	}
	}
return count;
}

function countBs(string) {
	return countChar(string, "B");
}

// Your code here.

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

// I did look at the answer for the last exercise because it was bothering me to leave it unfinished.
