//Q1

// let num=10000;
//  if(num%10 == 0) {
//     console.log("Good");
//  }
//  else {
//     console.log("Bad");
//  }

//Q2

// let name = prompt("please enter your name ");
// let age = prompt("please enter your age ");

// alert (`${name} is ${age}year old .`);

//Q3
// let quarter=4;
// switch(quarter) {
//    case 1:
//     console.log("january,february,March") ;
//     break;
//     case 2:
//     console.log("April,May,June") ;
//     break;
//     case 3:
//     console.log("july,August,Septembar") ;
//     break;
//     case 4:
//     console.log("October,Novembar,Decembar") ;
//     break;
//     default:
//     console.log("NoT");
// }


// 

let url="https://catfact.ninja/fact";

async function getFacts() {
    let res= await fetch(url);
    let data=await res.json();
    console.log(data.fact);
}