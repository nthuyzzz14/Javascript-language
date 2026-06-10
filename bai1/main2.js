// number
let a = 2;
let b = 2.3;
let c = 1;
console.log(a);
// String
let string = "ma thanh thuy cute";
let chuoi = "yen trach la so mot";
console.log(string);
// Boolean

let isSuccess = true;
console.log(isSuccess);
// undifine
let giatrichuaxd;
console.log(giatrichuaxd);

//null
let isNull = null;
console.log(isNull);

//bigint
let bigint = 67823647823648726378;
console.log(bigint);

//symbol
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2);

//function
let noithatto = function () {
  alert("thuy dep trai so mot the gioi hehhe");
};

noithatto();

// object
let mySelf = {
  name: "Ma Thanh Thuy",
  age: 19,
  address: "Yen Trach",
  University: "Truong dai hoc cong nghe thong tin",
};

//modify thuoc tinh

console.log(University);

// Array
let Animal = [(a1 = "Cho"), (a2 = "Meo"), (a3 = "Ga")];
// them phan tu vao cuoi mang
Animal.push("Chim");
// xoa phan tu cuoi mang '
console.log(Animal);

// kiem tra kieu du lieu cua cac bien tao lap
console.log(typeof Animal);
