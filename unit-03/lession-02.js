// promise

let  p = new Promise((resolve, reject) => {
  // call api
  // hay xu ly cac tac vu bat dong bo o day ???
  if(1+1 == 3){
    resolve({
      cod: 200,
      mess: 'ok'
    })
  } else {
    reject({
      cod: 500,
      mess: 'fail'
    })
  }
});

// nhan ket qua tu promise
// .then : nhan ket qua tu resolve tra ve
// .catch: nhan ket qua tu reject tra ve
p.then(data => console.log(data)) // thanh cong
  .catch(err => console.log(err)); // that bai