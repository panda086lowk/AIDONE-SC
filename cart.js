const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");
const counts = document.querySelectorAll(".count");
const itemPrice = 2300;
const shipping = 500;
function updateTotal(){
  let totalItems = 0;

  counts.forEach(count => {
    totalItems += Number(count.textContent);
  });
  const price = totalItems * itemPrice;
  document.getElementById("price").textContent = price;
  document.getElementById("total").textContent = price + shipping;
}
plusButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    counts[index].textContent++;
    updateTotal();
  });
});
minusButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    let current = Number(counts[index].textContent);
    if(current > 0){
      counts[index].textContent--;
      updateTotal();
    }
  });
});
