
//alert("please answer the question !");

let username = prompt("Enter you'r name ").toUpperCase();

alert('welcome' + '' + username);


let myname = prompt('whats my name').toLowerCase();
switch (myname) {
    case 'adham':
        alert(myname + '' + 'correct answer');
        console.log("nice one");
        break;

    case 'ali':
        alert(myname + 'no no no');
        console.log("not right ");
        break;

    case 'omar':
        alert(myname + 'no no');
        console.log("fine");
        break;

    default:
        alert('no')
        console.log("it's ok ");
        break;
}


let startday = prompt('which year I started studying in al husin ');
switch (startday) {
    case '2016':
        alert(startday + 'correct answer')
        console.log('thank you')
        break;
    case '2020':
        console.log('read agian \ -4 hints ')
        break;

    default:
        console.log("it's 2016");

}

let lovetechnolgy = prompt('do you like technology use (y,yes,no,n)').toLowerCase();

if (lovetechnolgy == 'y' || lovetechnolgy == 'yes') {
    alert(lovetechnolgy + '' + 'correct answer')
    console.log('great choice ')

} else if (lovetechnolgy == 'no ' || lovetechnolgy == 'n') {
    console.log('why');

}


let learncode = prompt('do want to learn code use (y,yes,no,n)').toUpperCase();

if (lovetechnolgy == 'Y' || lovetechnolgy == 'YES') {

    alert(lovetechnolgy + '' + 'correct answer ')
    console.log('great start now  ')

} else if (lovetechnolgy == 'N' || lovetechnolgy == 'NO') {
    console.log('can i change your mind');

}


let lenovolap = prompt('do you use lenovo laptop use (y,n,yes.no)').toLowerCase();
if (lenovolap == 'y' || lenovolap == 'yes' && lenovolap !== 'n' || lenovolap !== 'no') {
    alert(learncode + '' + 'correct answer')
    console.log(lenovolap);


}
else {
    console.log('are you sure ');
}

let usegit = prompt('did you try to use githup \' use (y,yes,no,n)');
if (usegit !== 'n' || usegit !== no && usegit == 'y' || usegit == 'yes') {
    console.log(usegit);
}

else {

    alert(usegit + 'correct answer')
    console.log(usegit)

}

let help = prompt('do you need any help \'use just (y,yes,no,n)').toUpperCase();
switch (help) {
    case 'Y':

        alert(help + '' + 'correct answer');

        console.log("nice one");
        break;

    case 'N':
        alert(help + 'no no no');
        console.log("not right ");
        break;

    case 'YES':
        alert(help + '' + 'correct answer');
        console.log("nice one");
        break;

    case 'NO':
        alert(help + 'no no');
        console.log("fine");
        break;

    default:
        console.log("it's ok ");
        break;
}
alert(username);
console.log(username);