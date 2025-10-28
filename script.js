// 🔑 Replace this with your Gemini API key
const API_KEY = "AIzaSyDbRljDdvbVblQKF8BKgogWemwTMID_ogs"; 

async function planTrip() {
  const destination = document.getElementById('destination').value.trim();
  const days = parseInt(document.getElementById('days').value.trim());
  const resultBox = document.getElementById('result');
  const loading = document.getElementById('loading');

  if (!destination || isNaN(days) || days <= 0) {
    alert("Please enter a valid destination and number of days!");
    return;
  }

  resultBox.style.display = "none";
  loading.style.display = "block";

  // ✨ Create the prompt for AI
  const prompt = `
  Plan a ${days}-day trip to ${destination}.
  Include:
  - Best time to visit
  - Recommended hotels (3 options)
  - Daily itinerary
  - Local food to try
  - Estimated total budget
  Make it short, clean, and easy to read.
  `;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();
    const aiText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "AI could not generate the plan. Try again later.";

    resultBox.innerHTML = `<h3>🌆 Trip Plan for ${destination}</h3><pre>${aiText}</pre>`;
  } catch (error) {
    console.error(error);
    resultBox.innerHTML = "Error connecting to AI. Check your API key or internet.";
  }

  loading.style.display = "none";
  resultBox.style.display = "block";
}
