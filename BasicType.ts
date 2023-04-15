var domain : string = "kaihatsu.com";
let email = "lanhdt3.com";
let isBoolean : boolean = true;
let decimal : number = 10;
let hexa : number = 0xf00d;
let binary : number = 0b01;
let octal : number = 0o755;
let username : string = 'tranlanh';
// có hai cách khai báo
// 1. dặt dấu ngoặc vuông sau kiểu dữ liệu:
let array1 : string[] = ['Monday','Tuesday','Wedsday','Friday'];
// 2. Sử dụng từ khóa Array<type> để khai báo
let array2 : Array<string> = ['Monday','Tuesday','Wedsday','Friday'];
// Kiểu dữ liệu Tuple: một mảng đã xác định số phần tử và kiểu dữ liệu của mỗi phần tử
let students : [string, number] = ['Lanh',30];
// Enum: kiểu dữ liệu đặc biệt dùng để tạo ra một nhóm tên tương ứng với các giá trị
// là những con số mà ta thiết lập cho nó, cách này sẽ dễ dàng giúp ta nhớ tên hơn
enum Fruits {Orange=12, Banana=7, Mango=6, Apple=10};
let a : Fruits = Fruits.Orange;
alert(a);
// ⇒ Để thiết lập giá trị cho từng phần tử thì ta gán trực tiếp cho chúng bằng dấu =
// Kiểu dữ liệu Any: cho phép bạn gán giá trị với kiểu dữ liệu bất kỳ, 
// điều này giúp giải quyết rắc rối ở một số trường hợp, ví dụ ta cần lấy dữ liệu từ người dùng
// hoặc môt thư viện khác thì ta ko biết giá trị trả veed sữ ở kiểu dữ liệu ntn
let notSure : any = 4; // kiểu number
notSure = "Thay thế bằng kiểu String";
notSure = false;
// Ngoài các kiểu dữ liệu đơn giản thì Any còn kết hợp được với các kiểu phức tạp
let list : any[] = [1,true,'free'];
// kiểu void: là một kiểu dữ liệu với giá trị là null, trong TS thì có thêm giá trị là undefined
function showMessage() : void {
    alert("Success");
}
let unusable : void = undefined;
// khai báo biến với từ khóa var
var domain1 = 'cosmomedical.com.vn';
var author = 'Tran Thị Lành';
var series = new Array();
// sử dụng từ khóa var đồng nghĩa với việc bạn khai báo trong phạm vi global, có thể sử dụng bên trong và ngoài hàm
function showDomain(){
    alert(domain1);
}
showDomain();
function showDomain2(){
    var domain2 = 'abc.com';
}
showDomain2();
// khi sử dụng từ khóa let để khai báo biến thì biến đó chỉ hoạt động trong khối của nó( block-scoped)
let a1 = 20;
let b = 30;
let c = a1 + b;
alert(c);
// khai báo biến với từ khóa const
// có thể gán cho mọi kieur dữ liệu
const info = {
    name : "Trần Thị Lành",
    domain : "cosmomedical.com.vn"
}
console.log(info);
// lệnh if else
var score = 4;
if (score < 5) {
    alert("Failed");
}
else{
    alert("Passed")
}
var book = "Math";
var msg = ""
switch (book) {
    case "English":
        msg = "Sách có giá là $12"; 
        break;
    case "Math" :
        msg = "Sách có giá là $22";
        break;
    case "Commerce":
        msg = "Sách có giá là $125";
        break;
    case "History" :
        msg = "Sách có giá là $12.99";
        break;
    default :
    msg = "Không tìm thấy mệnh giá";
    break;

}
alert(msg);
// vòng lặp for in: hay còn gọi là iterates, tức là sau mỗi vòng lặp nó sẽ nhớ là đang lặp tới phần tử nào
// giá trị của mỗi lần lặp là index chứ ko phải là value
var obj = {a:1, b:2, c:3};
for (var prop in obj) {
    this.val += prop + "=" + obj[prop] + "\n";
}
// vòng lặp for
for (var j = 0; j < 10 ; j++) {
    document.write(j + "");
}
// vòng lặp do while sẽ luôn luôn lặp ít nhất một lần
var k = 10;
while(k <= 10) {
    console.log(k);
    k++;
}
var d = 10;
do {
    console.log(d);
    d++;
} while (d <= 10);
// vòng lặp for of: trả về value
let numbers = [1,2,3,4,5,6,7,8,9,10];
var s =""
var o = 0;
for (let num of numbers) {
    s = s + "\n Array value is - " + num;
}
alert(s);

