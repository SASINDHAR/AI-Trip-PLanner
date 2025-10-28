function planTrip() {
  const destination = document.getElementById('destination').value.trim();
  const days = parseInt(document.getElementById('days').value.trim());
  const resultBox = document.getElementById('result');

  if (!destination || isNaN(days) || days <= 0) {
    alert("Please enter a valid destination and number of days!");
    return;
  }

  // Simple AI-like logic (can later connect to real APIs)
  const hotels = [
    "Grand Plaza Hotel",
    "Sunrise Resort & Spa",
    "Urban Nest Boutique",
    "Royal Comfort Inn",
    "Skyline View Suites"
  ];

  const activities = [
    "Visit local attractions and museums.",
    "Try authentic local food.",
    "Take a city walking tour or local market visit.",
    "Relax at a park or beach nearby.",
    "Enjoy nightlife or cultural shows."
  ];

  const chosenHotel = hotels[Math.floor(Math.random() * hotels.length)];
  let itinerary = "";

  for (let i = 1; i <= days; i++) {
    const act = activities[Math.floor(Math.random() * activities.length)];
    itinerary += `<p><strong>Day ${i}:</strong> ${act}</p>`;
  }

  const budget = 200 + days * 80; // rough estimate

  const bestTime = [
    "March to May – pleasant weather and fewer crowds.",
    "October to December – great festive vibes.",
    "June to August – budget-friendly off-season."
  ];

  const randomBestTime = bestTime[Math.floor(Math.random() * bestTime.length)];

  resultBox.innerHTML = `
    <h3>🌆 Trip Plan for ${destination}</h3>
    <p><strong>🕓 Duration:</strong> ${days} days</p>
    <p><strong>🏨 Recommended Hotel:</strong> ${chosenHotel}</p>
    <p><strong>🗓️ Best Time to Visit:</strong> ${randomBestTime}</p>
    <h4>📅 Itinerary:</h4>
    ${itinerary}
    <p><strong>💰 Estimated Budget:</strong> ~$${budget}</p>
  `;

  resultBox.style.display = "block";
}
