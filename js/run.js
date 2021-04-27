
//alert("please answer the question !");

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
    }


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

    }


let lovetechnolgy = prompt('do i like technology use (y,yes,no,n)').toLowerCase();
 
    if (lovetechnolgy ==='y' || lovetechnolgy === 'yes') {
        alert(lovetechnolgy + '  correct answer')
        //console.log('great choice ')

    } else if (lovetechnolgy === 'no ' || lovetechnolgy === 'n') {
        alert('why')
        //console.log('why');

    }



let learncode = prompt('do i like  to learn code use (y,yes,no,n)').toUpperCase();

    if (learncode ==='Y' || learncode ==='YES') {

        alert(learncode + ' correct answer ')
        

    } else if (learncode === 'N' || learncode ==='NO') {
        alert("fine");

       // console.log('can i change your mind');

    }



let lenovolap = prompt('do i use lenovo laptop use (y,n,yes.no)').toLowerCase();

    if (lenovolap == 'y' || lenovolap == 'yes' && lenovolap !== 'n' || lenovolap !== 'no') {
        alert(lenovolap + ' correct answer')
        //console.log(lenovolap);


    }
    else {
        alert("fine");

        //console.log('are you sure ');
    }


let myold = prompt(' did I complete  25 years?  \' use (y,yes,no,n)');

    if ( myold =='y' || myold =='yes'&&myold !=='n' || myold !== 'no'  ) {
        
        alert('correct answer')
        //console.log(usegit)
    }

    else  {
        alert("fine");

        //console.log(myold);
        

    }

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
}


alert(username +' thank you for your time ');
console.log(username);