// dinh nghia function

// goi ham ra su dung
// anh co the goi bat cu ham Function Declarations
// khong the goi cac ham function expression o day vi no chua dc dinh nghia

// if(kiemTraChanLe(11)){
//   console.log('so chan');
// } else {
//   console.log('so le');
// }

// let result = sumNumber(1, 4);// tham so thuc - tham so that
// console.log(result);

// 1 - Function Declarations
function sumNumber(a, b = 2) {
  // a, b tham so hinh thuc
  // body function
  return a + b;
  // tu khoa return : tra ket qua ve cho ham va thoat khoi ham luon
}
// su dung ham : goi ham do ra su dung - truyen tham so neu co
/*
let result = sumNumber(1, 4);// tham so thuc - tham so that
console.log(result);
*/

// 2 - function expression
let kiemTraChanLe = function(n) {
  if(n % 2 === 0){
    return true;
  }
  return false;
}
/*
// su dung ham
if(kiemTraChanLe(11)){
  console.log('so chan');
} else {
  console.log('so le');
}
*/

// viet ham kiem tra 1 so nguyen to ???
// 1' suy nghi
// la so chia het cho 1 va chinh no
// so am va so 1 ko phai
// chi kiem tra tu so 2 tro di
// kiem tra tu so 2 cho den can bac hai cua so can kiem tra
// vd: 101 ??
// kiem tra tu 2 cho den can bac hai cua 101

// 3- arrow function
//let hello = () => 'hi you'; // return luon: short syntax

let hello = () => {
  return 'hi you'; // full syntax
} 

let sum = (a,b) => a + b;

let check = n => n % 2 === 0;

console.log(check(12));

// viet ham : tinh tong cac so nguyen to tu 1-100;
// viet ham kiem tra so nguyen to
function kiemTraSNT(n) {
  if(n <= 1){
    return false;
  }
  if(n === 2){
    return true;
  }
  for(let i = 2; i<= Math.sqrt(n); i++){
    if(n % i === 0){
      return false;
    }
  }
  return true;
}

function tinhTong(n,m) {
  let sum = 0;
  for(let i = n; i <= m; i++) {
    if(kiemTraSNT(i)){
      sum += i; // sum = sum + i;
    }
  }
  return sum;
}
console.log(tinhTong(1,100));

let myAge = '';
// 0 == false == '' ve mat gia tri
// 1 == true;
if(myAge === false){
  console.log('A');
} else {
  console.log('B');
}

// kieu du lieu
// khai bao bien + hieu tu khoa let + const
// cac menh de dieu kien
// function
// cat giao dien html/css : psd
// to chuc project nhu anh lam
