// Array declare- When variable value is more than one-

var kidsAge = [10,5,8,9,4];
console.log(kidsAge[3]);

// by declareing a variable

var sumaAge = kidsAge[3];
console.log(sumaAge);

// chnage a value in array

// var kidsAge [1] = 15;
// console.log(kidsAge);
var position = kidsAge.indexOf(10);
console.log(position);
console.log(kidsAge);

// add at last position 
kidsAge.push(20);
console.log(kidsAge);

// remove from last position 
kidsAge.pop();
console.log(kidsAge);

// remove from first position 
kidsAge.shift();
console.log(kidsAge);

// add at first position 
kidsAge.unshift(20);
console.log(kidsAge);

// javascript slice

var part = kidsAge.slice(3);
console.log(part);

// while loop: run until a condition is fullfilled
var number = 0;
while (number<15){   
    console.log(number);
      number++;
   }
// for loop : 3 rules- declare variable, make a condition, i++;

for( var i =0; i<20; i++){
    console.log(i);

}

// for loop for identify value of an array

var arr = [20 , 25 , 26 , 30 , 35 ];
for(var i =0; i< arr.length; i++){
    var element = arr[i];
    console.log(element);
}

// switch : it is used for more than one condition . break is mendatory 

number =1000;
switch (number){
    case 1000:
    console.log('I am 1000');
    break;
    case 100:
    console.log('I am 100')
    break;
    case 50:
    case 40:

    console.log('I am 50 or 40')
    break;
    default:
    console.log('I dont know');
    
}
// function is different from loop. function can be called numerous time where it is required and show the result.
function okk(){
    console.log('');
}
//  advance function

function doubleIt(number){
    var result = number*2;
    console.log(result);
}
// example-

function doubleIt(number){
    var result = number*2;
    return result;  
}
var first = doubleIt(10);
var second = doubleIt(20);
var total = first + second;
console.log(first, second, total);

function add(num1, num2){
    var result = num1 + num2;
    return result;
}
var sum = add(30, 50);
console.log(sum);

// object module -11
// rules of declare

var student1 = {id:122, reg:4537, phone:24544657};
var student2 = {id:123, reg:4538, phone:56456837};
// find any property of an object
//In 3 ways it can be identified

1
var idNo = student1.id;
console.log(idNo);
2
var idNo = student1["id"];
console.log(idNo);
3
findId ="id";
var idNo = student1[findId];
console.log(idNo);

// to change a property of object(in 3 ways)

student1.id = 125;
console.log(student1.id);

student1["id"] = 126;
console.log(student1.id);

var changeId = "id";
student1["id"] = 127;
console.log(student1.id);

// to add new property

student1.name = "Rina";
console.log(student1);


