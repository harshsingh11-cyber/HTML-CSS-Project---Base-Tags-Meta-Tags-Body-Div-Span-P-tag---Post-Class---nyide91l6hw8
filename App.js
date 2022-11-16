
var img1 = document.getElementById('img-1');
var img2 = document.getElementById('img-2');
var img3 = document.getElementById('img-3');
var img4 = document.getElementById('img-4');

var img5 = document.getElementById('img-5');
var xyz = document.getElementById('xyz');

let arr = [
    "img/C-3.webp",
    "img/C-4.jpg",
    "img/C-5.png",
    "img/C-6.png",
    "img/C-7.jpg"];
let arr1 = [
    "img/E-1.jpg",
    "img/E-6.webp",
    "img/E-10.jpg",
    "img/E-9.webp",
    "img/E-8.jpg",
    "img/E-7.webp",
    "img/E-3.jpg",
    "img/E-4.webp",];
let arr2 = [
    "img/B-1.webp",
    "img/B-2.webp",
    "img/B-3.jpg",
    "img/B-4.jpg",
    "img/B-5.jpg",
    "img/B-6.jpg"];
let arr3 = [
    "img/N-1.jpg",
    "img/L-1.jpg",
    "img/L-2.webp",
    "img/L-3.jpg",
    "img/L-4.jpg",
    "img/L-5.webp",
    "img/L-6.jpg",
    ];


let arr4;
img1.addEventListener('click', function () {
    arr4 = arr;
    document.getElementById("hh").innerHTML = " 1. Harry - Potter..";
});
img2.addEventListener('click', function () {
    arr4 = arr1;
    document.getElementById("hh").innerHTML = " 2. Toy - Stories..";
});
img3.addEventListener('click', function () {
    arr4 = arr2;
    document.getElementById("hh").innerHTML = " 3. Bike - Riders.. ";
});
img4.addEventListener('click', function () {
    arr4 = arr3;
    document.getElementById("hh").innerHTML = " 4. Wallpapers....";
});


let i = 0;
function controller() {
    if (i == arr4.length) {
        i = 0;
    }
    img5.style.backgroundImage = `url("` + arr4[i] + `")`
    img5.style.backgroundSize = "cover";
    xyz.style.backgroundImage = `url("img/sc-4.jpg")`;
    document.getElementById("hh").style.color ="white";
    // xyz.style.backgroundSize = "cover";
    i++;

}
function controll() {
    if (i <= 0) {
        i = arr4.length - 1;
    }
    img5.style.backgroundImage = `url("` + arr4[i] + `")`
    img5.style.backgroundSize = "cover";
    xyz.style.backgroundImage = `url("img/sc-4.jpg")`;
    document.getElementById("hh").style.color ="white";
    i--;
}
