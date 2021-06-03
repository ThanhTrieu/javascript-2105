// tim hieu doi tuong number - kieu du lieu
// so duong lon nhat trong js
console.log(Number.MAX_VALUE);
// so duong nho nhat
console.log(Number.MIN_VALUE);

// ep ve so nguyen 
let number = '12345';
console.log(typeof number);
number = Number.parseInt(number);
console.log(typeof number);

let pi = 3.14;
if(Number.isInteger(pi)) {
  // kiem tra xem phai so nguyen ko
  console.log('OK');
} else {
  console.log('NO');
}

// kiem tra xem co phai number string
let myAge = '20';
// let isNaN = function(value) { let n = parseInt(value); return n !== n; };
if(!isNaN(myAge)){
  console.log('Yes');
} else {
  console.log('Fail');
}

/* String - chuoi trong JS */
// nam trong '' hoac "" hoac `` ==> coi no la string => kieu du lieu chinh la string
let myString = `Dang hoc JS \n chuan bi hoc reactjs`; // \n : xuong dong
console.log(typeof myString);
console.log(myString);
// neu dung cu phap : `` thi co the su dung bien trong chuoi va co the tu xuong trong chuoi

let age = 20;
let str = `nam nay toi ${age} tuoi
          la sinh vien nam 2`;
console.log(str);
// kiem tra do dai cua chuoi
console.log(str.length);

let test = 'abc efg';
// in ki tu nam trong chuoi dua vao vi tri cua no (vi tri bat dau tu 0)
console.log(test.charAt(2));

let str1 = 'Hi';
str1[0] = 'h'; 
console.log(str1[0]);
// khi co mot phuong thuc nao lam viec voi string : cac phuong thuc do khong the tac dong thay doi truc tiep chuoi ban dau do - ma no luon tao 1 chuoi moi so voi chuoi ban dau

let str2 = 'lop hoc reactjs'; // Immutability data
let str3 = str2.toUpperCase(); // tao ra chuoi moi va khong lam anh huong chuoi ban dau

console.log(str2, str3);

// Symbol js - tao ra cac gia tri khong bao giong nhau
let id1 = Symbol('id123');
let id2 = Symbol('id');
// id1 va id2 la 2 gia tri khac nhau hoan toan
if(id1 === id2){
  console.log('A');
}
// lay ra gia tri ma mh truyen vao Symbol
console.log(id1.description);
console.log(id1, id2); //  Symbol('id123') ||  Symbol('id');
