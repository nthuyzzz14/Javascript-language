let tenBien = "ma thanh thuy";
var bien = "toi la nguoi dep trai nhat the gioi";
var age = 17;
if (age < 18) {
  console.warn(" em chua 18");
}

console.log(age);
confirm("xac nhan do tuoi");
prompt("ma thanh thuy co dep trai khong ?");
setInterval(function () {
  console.log("Ma thaht huy đpoe trai");
}, 2000);

let tong = 0;
for (let i = 0; i < 5; i++) {
  if (i % 2 == 0) {
    tong += i;
  }
}
console.log("tong so chan = ", +tong);
