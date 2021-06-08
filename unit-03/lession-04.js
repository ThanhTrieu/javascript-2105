// class js

class A {
  // dinh nghia thuoc tinh
  // khong dung tu khoa : let - var - const
  myName = 'Van Teo';
  myAge = 20;
  myEmail;
  myAddress;

  // phuong thuc chay dau tien khi khoi tao object cho class
  constructor(email, address) {
    this.myEmail = email;
    this.myAddress = address;
  }

  // dinh nghia phuong thuc
  // khong can khai bao tu khoa function
  getName() {
    return this.myName;
  }

  // arrow function
  getAge = (str = '') => {
    return `${str} ${this.myAge}`;
  }

  getMoney() {
    return 1000;
  }
}

class B extends A {
  // class B ke thua Class A
  // override lai phuong thuc

  getMoney(){
    return 2000;
  }

  showMoney = () => {
    // goi vao phuong thuc da bi override
    // muon goi lai phuong thuc cua class cha
    // keyword super
    return super.getMoney();
  }

  static getColor() {
    return 'red';
  }
}

// tao object thuoc class A de truy cap vao cac thuoc tinh hay phuong thuc
let a = new A('test@gmail.com', 'Ha Noi');
let name = a.myName;
//console.log(name);
// phuong thuc
//console.log(a.getName());
//console.log(a.getAge('tuoi cua toi la '));
//
//console.log(a.myEmail, a.myAddress);

// khoi tao doi tuong class B
let b = new B('admin@gmail.com', 'Ha Tay');
// getColor : phuong thuc static khong can doi tuong cua class, ma dung truc tiep class truy cap
console.log(B.getColor());

// su dung cac thuoc tinh hay phuong thuc cua class neu dc phep
console.log(b.myEmail);
console.log(b.showMoney()); // 1000 ?? 2000

// Dom va event js
// tim hieu ve reactjs
