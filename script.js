let aboutState = 1;

setInterval(() => {
  onclicknext();
}, 5000);

function onclickprev() {
  if (aboutState === 1) {
    aboutState = 3;
  } else {
    aboutState = aboutState - 1;
  }
  handleAboutState();
}
function onclicknext() {
  if (aboutState === 3) {
    aboutState = 1;
  } else {
    aboutState = aboutState + 1;
  }
  handleAboutState();
}

function handleAboutState() {
  switch (aboutState) {
    case 1:
      document.getElementById("slide-1").classList.add("active");
      document.getElementById("slide-2").classList.remove("active");
      document.getElementById("slide-3").classList.remove("active");
      break;
    case 2:
      document.getElementById("slide-1").classList.remove("active");
      document.getElementById("slide-2").classList.add("active");
      document.getElementById("slide-3").classList.remove("active");
      break;
    case 3:
      document.getElementById("slide-1").classList.remove("active");
      document.getElementById("slide-2").classList.remove("active");
      document.getElementById("slide-3").classList.add("active");
      break;

    default:
      break;
  }
}

window.onload = function () {};
