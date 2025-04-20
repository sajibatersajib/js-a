// js start here
// No:1
function showDate(){
    document.getElementById('sd').innerHTML = Date();
}
// No:2
function showText(){
    document.getElementById('tt').innerHTML = ('Hellow sajibater sajib')
}
// No:3
function changeText(){
    document.getElementById('ct').innerHTML = ('Hellow sajibater sajib')
}
// No:4
function bulbOn(){
    document.getElementById('b_img').src = "img/bulbon.gif";
}
function bulbOff(){
    document.getElementById('b_img').src = "img/bulboff.gif";
}
// No:5
function changeColor(){
    document.getElementById('cc').style.backgroundColor="yellow";
}
// No:6
function textColor(){
    document.getElementById('tc').style.color="red";
}
// No:7
function fontSize(){
    document.getElementById('fs').style.fontSize="36px";
}
// No:8
function showText1(){
    document.getElementById('SoHi').style.display="block";
}
function hideText(){
    document.getElementById('SoHi').style.display="none";
}
// No:9
function chngText(){
    document.getElementById('inht').innerText =('Hi i am sajibater sajib')
}
// No:10
// No:11
// No:12
function hrNumber(){
    var data = document.getElementsByTagName('hr');
    alert(data.length);
}
// No:13
function h3Number(){
    var data = document.getElementsByTagName('h3');
    alert(data.length);
}
// No:14
function btnNumber(){
    var data = document.getElementsByClassName('btn');
    alert(data.length);
}
// No:15
function cName(){
    document.getElementsByClassName('h4')[1].innerHTML="Hellow world";
}
// No: 16
function qrySelector(){
    const nodeList = document.querySelectorAll(".qry");
    for (let i = 0; i < nodeList.length; i++){
        nodeList[i].style.backgroundColor = "orange";
    }
}
// No:17
function showResult1(){
    let a, b, c;
        a = 5;
        b = 6;
        c = a + b;
    document.getElementById("SR1").innerHTML = c;
}
// No:18
function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello Dolly!";
    document.getElementById("demo2").innerHTML = "How are you?";
}
// No:19
function varOutput(){
    var varoutput1 = "Welcome";
    document.getElementById('ot').innerHTML= varoutput1;
}
// No:20
function varOutput1(){
    var varoutput1 = "Welcome";
    document.getElementById('otr').innerHTML= varoutput1.repeat(5);
}
// No:21
function aOp(){
    var number1 = 10;
    var number2 = 10;
    var result= number1 * number2;
    document.getElementById('re').innerHTML = result;
}
// No:22
function aOp1(){
    let number1 = 100;
    let number2 = 10;
    let result= number1 / number2;
    document.getElementById('re1').innerHTML = result;
}
// No:23
function aOp2(){
    let number1, number2, result
    number1 = 85;
    number2 = 10;
    result= number1 / number2;
    document.getElementById('re2').innerHTML = result; 
}
// No:24
function aOp3(){
    let number1, number2;
    number1 = 90;
    number2 = 10;
    number1 += number2;
    document.getElementById('re3').innerHTML = number1; 
}
// No:25
function aOp4(){
    let number1, number2;
    number1 = 100;
    number2 = 20;
    number1 /= number2;
    document.getElementById('re4').innerHTML = number1; 
}
// No:26
function showArray(){
    const fruits = ["Mango", "Banana", "Grapes", "True", "50"];
    document.getElementById("arr").innerHTML = fruits; 
}
// No:27
function showArray1(){
    const fruits = ["Mango", "Banana", "Grapes", "True", "50"];
    document.getElementById("arr1").innerHTML = fruits[1]; 
}
// No:28
function showArray2(){
    const fruits = ["Mango", "Banana", "Grapes", "True", "50"];
    document.getElementById("arr2").innerHTML = fruits[4]; 
}
// No:29
function showArray3(){
    const fruits = ["Mango", "Banana", "Grapes", "True", "50"];
    fruits[0]= "Jackfriut"
    document.getElementById("arr3").innerHTML = fruits; 
}
// No:30
function showArray4(){
    const person = {firstName: "Sajib", lastName: "Hossain", age:25};
    document.getElementById("arr4").innerHTML = person.firstName; 
}