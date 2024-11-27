let yes = document.getElementById("yes");
let no = document.getElementById("no");
let egaa = document.getElementById("egaa");

no.addEventListener("mouseover", hover);

function hover() {
  const i = Math.floor(Math.random() * 500) + 1;
  const j = Math.floor(Math.random() * 500) + 1;
  const y = Math.floor(Math.random() * 500) + 1;
  const  k = Math.floor(Math.random() * 500) + 1;

  no.style.left = i + "px";
  no.style.right = j + "px";
  no.style.top = y + "px";
  no.style.bottom = k + "px";
}
yes.addEventListener("click", () => [(egaa.textContent = "egaa jigarixar")]);
