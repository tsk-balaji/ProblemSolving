//Day 1  Tryout.

// Calculate the difference between two integers.

function diffBtwTwoInt(A, B) {
    // Check if both A and B are numbers
    if (!(+A === A && +B === B)) {
        return "Please Provide a Valid Number";
    } else {
        
        if (A > B) {
            console.log(A - B);
        } else {
            console.log(B - A);
        }
    }
}
// Check if a number is even or odd.

function checkOddOrEven(A){
    if (+A !== A ) {
        return "Please Provide a Valid Number";
    }
    else if (A===0) console.log("It's a Zero")
    else{
        if(A%2 ===0){
            console.log("It's an Even")
        } else {
            console.log("It's an Odd Number")
        }
}
}
// Calculate the perimeter of a rectangle.

function perimeterOfRect(len, wid){
    if (+len !== len || +wid !== wid || len === 0 || wid === 0 ){
        "Please Enter A Valid Interger"
    }
    else {
        console.log(2*(len+wid));
    }
}
// Find the largest of four numbers.


function largestNum(num1, num2, num3, num4) {
    let largestNumber = num1; 
    if (num2 > largestNumber) largestNumber = num2;
    if (num3 > largestNumber) largestNumber = num3;
    if (num4 > largestNumber) largestNumber = num4;

    console.log(largestNumber);
}


// Calculate the average of three numbers.

function averageOfThree (A,B,C) {
    if (+A !== A || +B !== B || +C !== C) return "Please Provide a Valid Integer "
    
    console.log((A+B+C)/3);
}

averageOfThree(3,4,5)

// Identify if a number is divisible by both 3 and 5.

function divByThreeAndFive (A) {
    if (+A !== A) return "Please Provide a Valid Integer"
    if(A%3 === 0 && A%5 === 0 ){
        console.log("The number is divisible by both 3 and 5")
    }
}

// Count the number of vowels in a string.
// Determine if a character is an uppercase letter.
// Print the reverse of a string.
// Find the square of a number.
