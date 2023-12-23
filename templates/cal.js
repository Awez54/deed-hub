<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Land Buying Cost Calculator - Karnataka</title>
</head>
<body>
  <h1>Land Buying Cost Calculator - Karnataka</h1>
  <form id="cost-form">
    <label for="property-value">Property Value (in lakhs):</label>
    <input type="number" id="property-value" required>
    <label for="location">Location:</label>
    <select id="location">
      <option value="bangalore">Bangalore</option>
      <option value="other">Other City</option>
    </select>
    <label for="land-type">Land Type:</label>
    <select id="land-type">
      <option value="residential">Residential</option>
      <option value="non-residential">Non-Residential</option>
    </select>
    <button type="button" onclick="calculateCost()">Calculate Cost</button>
  </form>
  <div id="cost-results"></div>
  <script>
    function calculateCost() {
      // Get user input values
      const propertyValue = document.getElementById("property-value").value;
      const location = document.getElementById("location").value;
      const landType = document.getElementById("land-type").value;

      // Define constants and rates based on user selections
      const registrationFee = 0.01; // 1% of property value
      let stampDutyRate;
      if (location === "bangalore" || landType === "non-residential") {
        stampDutyRate = 0.0575; // 5.75% for Bangalore or non-residential
      } else {
        stampDutyRate = 0.035; // 3.5% for other cities and residential
      }

      // Calculate cost components
      const stampDuty = propertyValue * stampDutyRate;
      const registrationCost = propertyValue * registrationFee;

      // Display cost results
      const costResults = document.getElementById("cost-results");
      costResults.innerHTML = ""; // Clear previous results
      costResults.innerHTML += `<p>Estimated Stamp Duty: Rs. ${stampDuty.toFixed(2)}</p>`;
      costResults.innerHTML += `<p>Estimated Registration Fee: Rs. ${registrationCost.toFixed(2)}</p>`;
    }
  </script>
</body>
</html>
