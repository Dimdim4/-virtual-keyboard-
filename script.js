document.body.onload = addElement;
var my_div = newDiv = null;

  function addElement() {

    var newDiv = document.createElement("div");
        newDiv.innerHTML = "<h1>RSS Виртуальная клавиатура</h1>";
    var newDiv1 = document.createElement("div");
        newDiv1.innerHTML = "<textarea></textarea>";
    var newDiv2 = document.createElement("div");
        newDiv2.innerHTML = "<div>525</div>";

    my_div = document.getElementById("org_div1");
    document.body.insertBefore(newDiv, my_div);
    document.body.insertBefore(newDiv1, my_div);
    document.body.insertBefore(newDiv2, my_div);

    newDiv.classList.add('title');
    newDiv2.classList.add('keyboad');
    
  }

  let keyboard = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, "Tab", 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 17, 18, 37, 38, 40, 39];

// document.onkeydown = function (event) {
//   // console.log(event);
//   keyboard.push(event.keyCode)
//   console.log(keyboard);
// }

function init() {

  let out = '';
  for (let i = 0; i < keyboard.length; i++) {
    if (i == 14){
      out += '<div class= "clearfix"></div>';
    }
    if (i == 28){
      out += '<div class= "clearfix"></div>';
    }
    if (i == 41){
      out += '<div class= "clearfix"></div>';
    }
    out += '<div class = "k-key" data="' + keyboard[i] +'">' +String.fromCharCode(keyboard[i])+'</div>';
  }
  document.querySelector('#keyboard').innerHTML = out;

}

init();

document.onkeydown = function (event) {
  console.log(event.code);
  console.log(event.keyCode);
  document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
    element.classList.remove('active');
  });
  document.querySelector('#keyboard .k-key[data="' + event.keyCode + '"]').classList.add('active');
}

document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
  element.onclick = function (event) {
    document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
      element.classList.remove('active');
    });
    let code = this.getAttribute('data');
    this.classList.add('active');
    console.log(code);
  }
});
