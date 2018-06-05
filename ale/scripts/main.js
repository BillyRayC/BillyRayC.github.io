var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://yt3.ggpht.com/a-/AJLlDp2o-LSitAwthRiO7E5aiCmpN9MjFrnBdCCepA=s900-mo-c-c0xffffffff-rj-k-no') {
      myImage.setAttribute ('src','https://scontent-iad3-1.cdninstagram.com/vp/e485a1044ea45cbb7255730e74256fde/5BA1A4A0/t51.2885-19/s150x150/18889282_1760856560871312_5937559052815958016_a.jpg');
    } else {
      myImage.setAttribute ('src','https://yt3.ggpht.com/a-/AJLlDp2o-LSitAwthRiO7E5aiCmpN9MjFrnBdCCepA=s900-mo-c-c0xffffffff-rj-k-no');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('p5');
function setUserName() {
  var myName = prompt('Quien es marico?');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName + ' es marico';
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Nadie es marico';
}myButton.onclick = function() {
  setUserName();
}
