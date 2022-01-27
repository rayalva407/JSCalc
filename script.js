displayValue = document.querySelector("#display");
displayContent = document.querySelector("display-text")
buttons = document.querySelector("#buttons")

buttons.addEventListener("click", (e) => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log(e.target.nodeName)
})