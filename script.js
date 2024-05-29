const randomColor = function () {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const body = document.querySelector("body");
let intervalId;
function Start() {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    body.style.backgroundColor = randomColor();
  }
}

function Stop() {
    clearInterval(intervalId);
    intervalId = null;
}

function Clear (){
    body.style.backgroundColor = 'white';
    clearInterval(intervalId);
}
