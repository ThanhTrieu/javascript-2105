//callback js

function hocBai(callback) {
  // thuc thi 1 hanh dong nao do dua vao thoi gian quy dinh
  // chi thuc thi hah dong do mot lan
  // 3000 = 3s

  setTimeout(function(){
    console.log('Hoc bai');
    // hoc bai xong roi thi moi di ngu

    if(typeof callback === 'function'){
      // kiem tra xem callback co phai function hay ko???
      callback();
    }
    
  }, 0);
}

function diNgu() {
  console.log('Di ngu thoi');
}

function myCallBack() {
  diNgu();
}

hocBai(myCallBack);
// diNgu();



