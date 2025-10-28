function planTrip() {
  const destination = document.getElementById('destination').value.trim();
  const resultBox = document.getElementById('result');

  if (destination === "") {
    alert("Please enter a destination!");
    return;
  }

  // Simulated AI Response (can connect to real API later)
  const plans = {
    morning: "Visit local landmarks and enjoy breakfast at a local café.",
    afternoon: "Explore cultural sites or museums.",
    evening: "Have dinner with a view and enjoy the city lights.",
    bestTime: "Best time to visit: March to May for pleasant weather.",
    budget: "Approximate budget: $500 - $800 for 3 days."
  };

  resultBox.innerHTML = `
    <h3>AI Trip Plan for ${destination}</h3>
    <p><strong>🕓 Best Time:</strong> ${plans.bestTime}</p>
    <p><strong>🌅 Morning:</strong> ${plans.morning}</p>
    <p><strong>🏞️ Afternoon:</strong> ${plans.afternoon}</p>
    <p><strong>🌃 Evening:</strong> ${plans.evening}</p>
    <p><strong>💰 Budget:</strong> ${plans.budget}</p>
  `;
  resultBox.style.display = "block";
}
