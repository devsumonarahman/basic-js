// convert inch to feet

var inch = 156; 
console.log(inch);
var feet = inch/12;
console.log(feet);

// using function 

function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}


var rinaHeight = inchToFeet(150);
console.log(rinaHeight);

// to decrease the character of a property 

var name = "javed";
if (name.length>4){
    name = 'juvu'
}
console.log(name);


// counting leapyear


// const isLeapYear = year => new Date(year, 1, 29).getMonth() === 1;
// isLeapYear(2019); // false
// isLeapYear(2020); // true
// */

// function isLeapYear(year){
    
//     var reminder1 = year % 4;
//      var reminder2 = year % 100;
//     var reminder3 = year % 400;
//     if(reminder1 == 0) && ( reminder2 != 0 ){
       
//         return reminder1;
//     }
//     else if(0 == reminder3){
//          return reminder1;
//     }
//     else{
       
//         return false;
//     }


// }
// var year = isLeapYear(2025) ;
// console.log(year);   


// factorial 
var factorial = 1;
for( var i = 1; i<10 ; i++){
    factorial= factorial*i;
    console.log(i,factorial);
}

// factorial by function 

function factorialOfNumber(number){

    var factorial = 1;
for( var i = 1; i<10 ; i++){
    factorial= factorial*i;
    }
    return factorial;
}
var result = factorialOfNumber(20);
console.log(result);
 // factorial by while loop

// function factWhile(n){
//     var i= 1;
//     var factorial = 1;
//     while(i<=n){
//         factorial = factorial * i;
//         i++;
       
//     }
//       return factorial;
   

// }
// var result = factWhile(155);
// console.log(result);

// // recursive factorial
// var factorial = 1;
// for( var i = 10; i>=1 ; i--){
//     factorial= factorial*i;
//     }
//     console.log(factorial);



//     var i =10;
//     var factorial = 1;
//     while(i>=1){
//         factorial = factorial * i;
//         i--;
//     }
//     console.log(factorial);
// // another way of count factorial

 


// // fibonacci in iterative way 

// var fibo = [0,1];
// for (i=2 ; i<10 ;i++){
//     fibo[i] = fibo[i-1]+ fibo [i-2];
//     console.log(fibo);

// }

// function fact(n){
//        if (n == 0){
//         return factorial;

//     }
//     else{
//        return n * factorial(n-1);
//     }
// }
//      var result = fact(30);
//     console.log(result);

// fibonacci recursive

function fibonacci(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    else{
        return fibonacci(n-1)+ fibonacci(n-2);
    }
}   
// here we find the 20th no number
var result = fibonacci(20);
console.log(result);

// fibonacci series recursive

function fibonacci(n){
    if (n == 0){
        return [0];

    }
    else if (n == 1){
        return [0,1];

    }
    else{
        var fibo = fibonacci (n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;


    }
}
var result = fibonacci(20);
console.log(result);

// prime number
var n = 18;
for(i=2; i<n-1 ;i++){
    if (n % i ==0){
        console.log('not a prime number ');
        break;
    }


}

// prime number by function

function findPrime(n){
    for( i = 2; i <n-1;i++){
        if ( n % i == 0){
            return 'not a prime number'
        }
        else{
            return 'a prime number'
        }
    }
}

var result = findPrime(231);
console.log(result);




