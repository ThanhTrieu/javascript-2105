// Array js
// trong js ko co kieu du lieu array - ma kieu du lieu cu no la object
// ban chat array : dung de luu tru du lieu theo mot cach sap xep co trat tu

// full syntax
let arrNumber = new Array(1,2,3,4,5,7,8,'mot', 'hai', 'ba');
// cac phan tu nam trong mang ko bat buoc phai giong nhau ve kieu du lieu
// short syntax
let arrNumber2 = [1,2,3,4,5,6,7,8,9];
// mang nhieu chieu
let arrNumber3 = [1,2,3,4,[-1,-2,-3],6,7,8,9];
let arrNumber4 = new Array(1,2,3,4,Array(-1,-2,-3),7,8,'mot', 'hai', 'ba');

// 2 khai niem :
// + key (chi so) : phan tu nam trong mang, luon bat dau tu 0
// + value: gia tri cua pha tu nam trong mang

// cach truy cap vao mot phan tu trong mang
// nameArray[key_chiso];
console.log(arrNumber2[5]);

// kiem tra so luong phan tu nam trong mang
console.log(arrNumber4.length);

// duyet qua tat cac cac phan tu nam trong mang

let myArrNumber = [1,2,3,4,5,6,7,8,9]; // 9 : 0 - 8
for (let i = 0; i < myArrNumber.length; i++) {
  // hien thi
  console.log(myArrNumber[i]);
}

// forEach
myArrNumber.forEach(function(item, key, array){
  // item : value
  // key: chi so (tham so tuy chon)
  // array: chinh la mang ban (tham so tuy chon)
  console.log(`value: ${item} - key : ${key}`);
});


// for ...of
// duyet nhanh qua gia tri cua mang ma ko can quan tam key
for(let i of myArrNumber){
  console.log(i); // i chinh la value : khong phai la key trong mang
}

// bo sung phan tu vao mang
let numbers = [];
numbers[0] = 1;
numbers[1] = 10;
console.log(numbers);

let numbers2 = [1,2,3,4,5,8,9,10,12,15];
// lay ra phan tu dau tien ma chia het cho 3
// dung  for
let n = null;
/*
for(let i = 0; i< numbers2.length; i++) {
  if(numbers2[i] % 3 === 0){
    n = numbers2[i];
    // tim thay thoat luon ko duyet nua
    break;
  }
}
*/
//console.log(n);
n = numbers2.find( item => item % 3 === 0);
console.log(n);

let numbers3 = [1,2,3,4,5,8,9,10,12,15];
// tra ve mang chua tat ca cac phan tu la so chan;
// 1 tu viet theo for
let res = [];
for (let i = 0; i < numbers3.length; i++) {
  if(numbers3[i] % 2 === 0){
    res.push(numbers3[i]);
  }
}
//console.log(res);
let kq = numbers3.filter( item => item % 2 === 0);
console.log(kq);

let students = [
  {id: 1, name: 'Van A'},
  {id: 2, name: 'Van B'}
];

let viewData = `
  <ul>
    ${students.map((item, key) => (`
      <li key=${key}> ${item.id} - ${item.name}</li>
    `) )}
  </ul>
`;
console.log(viewData);

let numbers4 = [1,2,3,4,5,8,9,10,12,15];
// tinh tong tat ca cac so le
let sum = 0;
for(let i = 0; i < numbers4.length; i++){
  if(numbers4[i] % 2 !== 0){
    sum += numbers4[i];
  }
}
//console.log(sum);
let s = numbers4.filter( item => item % 2 !==0).reduce((val, item) => val + item);
console.log(s);

let numbers5 = [1,2,3,4,5,8,9,10,12,15];
// tinh tong cac so chinh phuong trong mang

let kiemTraSoCP = n => {
  let res = Math.sqrt(n);
  if(Number.isInteger(res)){
    return true;
  }
  return false;
}
//kiemTraSoCP : callback
let data = numbers5.filter(kiemTraSoCP).reduce((val, item) => val + item);
console.log(data);