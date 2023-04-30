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