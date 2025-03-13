function addZero() {
  document
    .querySelectorAll(".price")
    .forEach((node) => (node.innerHTML = 200 + ",00"));
}

addZero();

const button = document.getElementById("printer");

button.addEventListener("click", function () {
  let toPrint = document.getElementById("prices");
  html2pdf(toPrint);
});
