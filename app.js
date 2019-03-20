console.log(
  "If you're reading this check me out on Linkedin(click the word 'Cost Splitter')"
);

function submitFunction(event) {
  event.preventDefault();
  const billValue = document.getElementById('bill').value;
  const totalAmountOfPeople = document.getElementById('people').value;
  const totalCostEach = document.getElementById('totalCostEach');
  const billSplit = billValue / totalAmountOfPeople;
  return (totalCostEach.innerHTML = billSplit.toFixed(2));
}
