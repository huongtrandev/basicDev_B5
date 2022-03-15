let banKinh;
const PI = 3.14;

banKinh = prompt('Nhập vào bán kính ');
let r = parseInt(banKinh);
let C = 2 * r * PI;
document.write('Chu vi hình tròn bằng ' + C);
document.write('<br/>');

let S = r * r * PI;
document.write('Diện tích hình tròn là ' + S);