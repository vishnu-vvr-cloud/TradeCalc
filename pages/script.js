function calculateAndRedirect() {
  let investment = parseFloat(document.getElementById("investment").value);
  let currentPrice = parseFloat(document.getElementById("currentPrice").value);
  let profit = parseFloat(document.getElementById("profit").value);
  if (!investment || !currentPrice || !profit) {
    window.location.href = "pages/page3.html";
    return;
  }
  let targetPrice = ((investment + profit) / investment) * currentPrice;
  window.location.href = `pages/page2.html?targetPrice=${targetPrice.toFixed(
    8
  )}&profit=${profit.toFixed(2)}`;
}

function calculateCompound() {
  const amountInput = document.querySelector(".damount").value;
  const targetInput = document.querySelector(".dtarget").value;
  const returnInput = document.querySelector(".dreturn").value;

  const principal = parseFloat(amountInput);
  const target = parseFloat(targetInput);
  const rate = parseFloat(returnInput);

  if (
    isNaN(principal) ||
    isNaN(target) ||
    isNaN(rate) ||
    principal <= 0 ||
    target <= 0 ||
    rate <= 0
  ) {
    alert("❌ Invalid input values");
    return;
  }

  let dailyRate = rate / 100;
  let amount = principal;
  let days = 0;

  while (amount < target) {
    amount *= 1 + dailyRate;
    days++;
  }

  // Prepare values to send to result.html
  const targetPrice = target.toFixed(2);
  const profit = (amount - principal).toFixed(2);

  // Redirect to result.html with query parameters
  window.location.href = `result.html?targetPrice=${encodeURIComponent(
    targetPrice
  )}&profit=${encodeURIComponent(profit)}&days=${days}`;
}
