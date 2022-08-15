let greeting = 'Hello. My name is John';
//let ans1 = greeting.charAt(8);
let ans1 = greeting.charAt(greeting.length-14)
document.getElementById("no1").innerHTML = ans1;

let str1 = 'The morning is upon us.';
//let ans2 = str1.slice(12, 22);
let ans2 = str1.slice(-11,-1);
document.getElementById('no2').innerHTML = ans2;

let str2 = 'Hello';
let str3 = 'World';
//let ans3 = str2.concat(str3);
let ans3 = str2.concat(" ", str3);
document.getElementById('no3').innerHTML = ans3;