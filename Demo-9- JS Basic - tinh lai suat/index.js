let C = 50;
let year;
const interest = 6.9 / 100;

year = prompt('Nhập vào số năm ');
let n = parseInt(year);
let P = C + C * interest * n;

document.write('Tiền gốc lãi là ' + P);