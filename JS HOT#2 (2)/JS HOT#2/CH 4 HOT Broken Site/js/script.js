function calcTotal() {
  let itemTotal = 0;
  let tax = 0;
  let totalWithTax = 0;

  let items = document.querySelectorAll('input[type="checkbox"]');
  let cells = document.getElementsByTagName("td");

  for (let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      itemTotal += parseFloat(items[i].value);
    }
  }
  tax = itemTotal * 0.1;
  totalWithTax = itemTotal + tax;
  cells[1].innerHTML = itemTotal.toFixed(2);
  cells[3].innerHTML = tax.toFixed(2);
  cells[5].innerHTML = "$" + totalWithTax.toFixed(2);
}

// add event listener to Submit button
document.getElementById("sButton").addEventListener("click", function (evt)
{
  evt.preventDefault();
  calcTotal();
});

function clearAll() {
  // Get all the checkboxes
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Uncheck all the checkboxes
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });

  calcTotal();

  // Reset the total values in the table cells
  let cells = document.getElementsByTagName("td");
  cells[1].innerHTML = "0.00";  // Reset item total
  cells[3].innerHTML = "0.00";  // Reset tax
  cells[5].innerHTML = "$0.00"; // Reset total with tax
}


// Add an event listener to the "Clear" button
document.getElementById("cButton").addEventListener("click", function (evt) {
  evt.preventDefault();
  clearAll();
});