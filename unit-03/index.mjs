import { getDataCorona } from './services/api-v2.mjs';

function* showData() {
  const data = yield getDataCorona();
  console.log(data);
}

//showData().next().value;
// showData();

function* makeId() {
  let id = 0;
  while(true) {
    // return tra ket qua
    yield id++;
  }
}
let id = makeId(); // khong phai thuc thi vong lap vo han
console.log(id.next().value); // 0
console.log(id.next().value); // 1
console.log(id.next().value); // 2
console.log(id.next().value); // 3