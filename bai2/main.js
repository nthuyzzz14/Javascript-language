let a = 2;
let b = 3;
let tong2so = a + b;
let kq = a < b && b > 0;

console.log(kq);

if (tong2so) {
  console.log("Thuy dep trai");
} else {
  console.log("cute");
}
let thuydeptrai = "ma thanh thuy dep trai so mot the gioi cute hehehe !";
let string = "truong dai hoc cntt quyet thang cntt";

console.log(string.lastindexOf("cntt"));

// do dai chuoi
console.log(thuydeptrai.length);

// vi tri trong chuoi
console.log(thuydeptrai.indexOf("XYZ"));

// CUT STRING
console.log(string.slice(-4, -1));
REPLACE;
let iam = "ma thanh thuy dep trai yen trach city";
console.log(iam.replace("ma thanh thuy", "MTT"));

let ltou = "ma thanh thuy hihihi";
let utol = "MA THANH THUY HEHHEHEHHEHHE";

console.log("Chuyen tu thuong to hoa: ", ltou.toUpperCase());

console.log("Chuyen chu hoa to chu thuong: ", utol.toLowerCase());

// trim
let thuy = "     ma thanh thuy la nguoi dep trai so mot he mat troi       ";

console.log(thuy.trim().length);

// split
let subject = "HDH,OOP,NN3";

console.log(subject.split(","));

// get a character by index
let index = "yen trach city phu luong thai nguyen";
console.log(index[19]);
