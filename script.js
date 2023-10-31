// ===================№1==================
// function checkDot (dot) {
//     if (dot.includes(".") || dot.includes("com")) {
//         return ` this text have a dot or com`
//     } else {
//         return "this text have not a dot or com"
//     }
// }
//
// console.log(checkDot("diana."))

// ==================№2===================

// function myFunction(str) {
//     if (str.trimStart().length%2===0 && str.length<=8 && str.length>=4) {
//         return длина четная и длина строки ${str} не больше 8 и не меньше 4
//     }
//     else {
//         return 'error'
//     }
// }
// console.log(myFunction('Codify'));
// console.log(myFunction('Codifyy'));

//===================№3==================

// function checkIndex(arr) {
//     return arr.map((item,idx) => {
//         if (idx % 2 ===0) {
//             return 'E'
//         } else {
//          return item
//         }
//     })
// }
// console.log(checkIndex(['a', 'h', 'i', 't', 'e','g']))

//==================№4==================

// function checkPassword(psw1, psw2) {
//     if (psw1.trimStart()===psw2.trimStart()) {
//         return 'пароли совпадают'
//     }
//     else {
//         return 'не совпадают'
//     }
// }
// console.log(checkPassword('password', 'password'));

//==================№5==================

// function myFunction(arr) {
//     return arr.map(item=> item.length)
// }
// console.log(myFunction(['lorem', 'ipsum', 'dolor', 'sit']));

// =================№6==================

// function checkIndex(arr) {
//       return arr.map((el, idx ) => idx + 1)
// }
// console.log(checkIndex(['lorem', 'ipsum', 'dolor']))

//=================№7===================

// function myFunction(arr) {
//     return   arr.map((item,idx)=>{
//         if (idx%2===0){
//             return item.slice(0,1).toUpperCase()+item.slice(1)
//         } else{
//             return item
//         }
//     })
// }
// console.log(myFunction(['lorem', 'ipsum', 'dolor']));

//=================№8===================

// let text = ['lorem', 'ipsum', 'dolor']
//
// console.log(text.map(text => text.toUpperCase()))


// ================№9===================
//function myFunction(arr) {
//      return arr.join('-');
// }
// console.log(myFunction(['lorem', 'ipsum', 'dolor', 'sit']));

// ===============№10===================
// function myFunction(arr) {
//     return arr.join('/');
// }
// console.log(myFunction(['lorem', 'ipsum', 'dolor', 'sit']));

// ==============№11================
// function myFunction(arr) {
//     return arr.join(' ');
// }
// console.log(myFunction(['lorem', 'ipsum', 'dolor', 'sit']));

//================№12===================
// function checkOdd(arr) {
//     return  arr.filter((el, idx ) => idx % 2)
// }
// console.log(checkOdd(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))

//================№13==================
//  function checkOdd(arr) {
//     return  arr.filter((el, idx ) => idx % 2 === 0)
//  }
//  console.log(checkOdd(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))

//================№14==================


//================№15==================

// function myFunction(arr) {
//     return arr.filter((el)=>{
//         if (typeof el==="string") {
//             return delete el
//         }
//         else {
//             return arr
//         }
//     })
// }
// console.log(myFunction([123,33,444,'22',55,66,77,88,99,]));
