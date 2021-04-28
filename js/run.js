
//alert("please answer the question !");
'use strict'
function Usersnames(){
let username = prompt("Enter you'r name ").toUpperCase();

alert(username + " welcome ");



let myname = prompt('is my name Adham (y,yes,no,n)').toLowerCase();

switch (myname) {
    case 'y':
        alert(myname + ' yes for sure ');
        //console.log("nice one");
        break;

    case 'yes':
        alert(myname + ' yes for sure ');
        //  console.log("not right ");
        break;

    case 'n':
        alert(myname + 'no no');
        break;

    case 'no':
        alert(myname + 'no no');
        //console.log("fine");
        break;


    default:
        alert('no')
        //console.log("it's ok ");
        break;
}}
Usersnames();

function day (){
let startday = prompt('did I study in al husin use (y,yes,no,n)');


switch (startday) {
    case 'y':
        alert('correct answer')
        //console.log('thank you')
        break;
    case 'yes':
        alert('correct answer')
        //console.log('thank you')
        break;
    case 'no':
        alert("fine");

        //console.log('no')
        break;
    case 'n':
        alert("fine");
        //console.log('no')
        break;
    default:
        console.log("it's 2016");

}}
day ();

function tecnology(){

let lovetechnolgy = prompt('do i like technology use (y,yes,no,n)').toLowerCase();

if (lovetechnolgy === 'y' || lovetechnolgy === 'yes') {
    alert(lovetechnolgy + '  correct answer')
    //console.log('great choice ')

} else if (lovetechnolgy === 'no ' || lovetechnolgy === 'n') {
    alert('why')
    //console.log('why');

}} 
tecnology();

function learn(){
let learncode = prompt('do i like  to learn code use (y,yes,no,n)').toUpperCase();

if (learncode === 'Y' || learncode === 'YES') {

    alert(learncode + ' correct answer ')


} else if (learncode === 'N' || learncode === 'NO') {
    alert("fine");

    // console.log('can i change your mind');

}}

learn();

function lenovo(){

let lenovolap = prompt('do i use lenovo laptop use (y,n,yes.no)').toLowerCase();

if (lenovolap == 'y' || lenovolap == 'yes' && lenovolap !== 'n' || lenovolap !== 'no') {
    alert(lenovolap + ' correct answer')
    //console.log(lenovolap);


}
else {
    alert("fine");

    //console.log('are you sure ');
}}
lenovo();

function old (){

let myold = prompt(' did I complete  25 years?  \' use (y,yes,no,n)');

if (myold == 'y' || myold == 'yes' && myold !== 'n' || myold !== 'no') {

    alert('correct answer')
    //console.log(usegit)
}

else {
    alert("fine");

    //console.log(myold);


}}
old ();

function askHelp(){
let help = prompt('do i need any help  in CSS \'use just (y,yes,no,n)').toUpperCase();
switch (help) {
    case 'Y':

        alert('correct answer');

        //console.log("nice one");
        break;

    case 'N':
        alert(help + 'no no no');
        //console.log("not right ");
        break;

    case 'YES':
        alert('correct answer');
        //console.log("nice one");
        break;

    case 'NO':
        alert(help + 'no no');
        //console.log("fine");
        break;

    default:
        console.log("it's ok ");
        break;
}}
askHelp();

function guessNum(){
let myNumber = ['10','5','20','14'];

for (let enterNumber = 1; enterNumber <= 4; enterNumber++) {
    let numper = parseInt(prompt('pleas guess my number ?'));
    if (myNumber === numper) {
        alert('correct ');
    }

    else if (numper > myNumber) {
        alert('too high')
    } else if (numper < myNumber) {
        alert('too low')
    }
}}
guessNum();

alert('the correct answar is 10')

function color(){
let colors = ['red ', 'black', 'green'];
let flag = false;

for (let attempt = 1; attempt <= 6; attempt++) {
    let useranswer = prompt("enter my ");
    for (let index = 0; index < colors.length; index++) {
        
        if (useranswer === colors) {
            alert('correct');
            flag = true;
            break;
        }
    }
    if (flag === true) {
        break;
    }

}}
color();

alert(username + ' thank you for your time ');
//console.log(username);