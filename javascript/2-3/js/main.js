// main.js
//box要素とbtn要素を取得
let box = document.getElementById('box');
let btn = document.getElementById('btn');
//ボタンがクリックされたら
btn.onclick = function() {
    box.style.backgroundColor = 'red';
};
//ボタンがクリックされたら
btn.onclick = function() {
    alert('ボタンが押されました');
};