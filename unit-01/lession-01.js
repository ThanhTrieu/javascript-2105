console.log('Hello World');

let myName = 'Van Teo';
// let : keyword de khai bao bien
// myName: ten bien
// 'Van Teo': gia tri gan cho bien;

// nhu the nao goi la bien hop le:
// 1 : khong trung voi tu khoa trong lap trinh
// 2: khong bat dau bang so

// quy uoc dat ten bien hay ten ham (phuong thuc)
// chu cai dau tien cua tu dau tien viet thuong - cac chu cai dau tien cua cac tu tiep theo viet hoa
// myAge; goToSchool;

// tu khoa let khai bao bien:
let myAge = 20; // so
// let myAge = 30; // khong dc phep dinh lai bien da ton tai
// myAge = 30; // gan lai gia tri khac cho bien - dc phep
myAge = 'ba muoi'; // chuoi
console.log(myAge);

// cac kieu du lieu co ban !
// 1 - number
let myNumber = 10;
// xem kieu du lieu
console.log(typeof myNumber);

// 2 - string
let myEmail = 'test@gmail.com';
console.log(typeof(myEmail));

// 3 - boolean
let checking = true; // false
console.log(typeof checking);
// cu phap comment tren 1 dong
/*
  comment
  tren
  nhieu
  dong
*/

// khai bao hang so
const PI = 3.14;
// PI = 3.15; // Assignment to constant variable
console.log(PI);

let myAddress; //undefined - vi chua gan gia tri
console.log(typeof myAddress);

let myMoney = null; // object
console.log(typeof myMoney);

let n1 = 10; // number
let n2 = '10bbb'; // string : "number string - trong chuoi chi chua so"
let n3 = n1-n2; 
// trong js + : noi chuoi (ghep chuoi) trong string
console.log(n3, typeof n3);

let money = 1000; // toan cuc : khong nam trong ham - chang co cap ngoac nhon bao lay

if(true){
  let money = 2000;
  if(money < 3000){
    let money = 3000;
    console.log(money); // ??? 30000
  }
  console.log(money); /// ??? 2000
}

console.log(money); /// ??? 20000
// tu khoa let : pham vi hoat dong (scope)
// pham vi hoat dong cu bien bang tu khoa let thi phu thuoc vao
// cap ngoac nhon bao lay no gan nhat


let m1 = 100;
if(m1 > 200){
  /// kiem tra bieu thuc nam trong menh de if dung hay sai ???
  // neu bieu thuc la dung, thuc thi lenh ben trong menh de if 
  // neu la sai thi ko thuc thi
  // lam gi o day ???
} else {
  // lam gi o day
}

// dieu kien re nhanh
if( m1 > 200) {
  ///
} else if(m1 > 300) {
  //
} else if ( m1 === 100) {
  //
} else if(m1 < 200) {
  //
} else {
  ///
}

/*
switch ( dk ) {
  case giatri1:
    ///
    break;
  case giatri2:
    ///
    break;
  default:
    //
    break;
}
*/

// ko nen de roi vao vong lap vo han !
for(let i = 1; i <= 10; i++){
  if( i % 2 === 0){
    console.log(i);
  }
}

let k = 10;
// kiem tra dieu kien truoc khi thuc thi vong lap
// 0 - n
while( k < 50) {
  console.log(k);
  k++;
}

let j = 1;
// it nhat luon luon thuc thi 1 vong lap
// 1 - n
do {
  console.log(j);
  j++;
} while( j < 10);