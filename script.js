async function planTrip() {
    const destination = document.getElementById('destination').value.trim();
    const days = parseInt(document.getElementById('days').value.trim());
    const resultBox = document.getElementById('result');
    const loading = document.getElementById('loading');

    if (!destination || isNaN(days) || days <= 0) {
        alert("Please enter valid destination and days!");
        return;
    }

    resultBox.style.display = "none";
    loading.style.display = "block";

    try {
        const response = await fetch(`/.netlify/functions/aiTrip?destination=${destination}&days=${days}`);
        if (!response.ok) throw new Error("Network response not ok");
        const data = await response.json();

        if (!data.plan) throw new Error("AI did not generate a plan");

        // Format the itinerary for readability
        const formattedPlan = data.plan.split('\n').map(line => {
            if (line.toLowerCase().includes('day')) return `<h4>${line}</h4>`;
            return `<p>${line}</p>`;
        }).join('');

        resultBox.innerHTML = `<h3>🌆 Trip Plan for ${destination}</h3>${formattedPlan}`;
    } catch (error) {
        console.error(error);
        resultBox.innerHTML = `<p style="color:#ffcccb;">⚠️ Oops! Something went wrong: ${error.message}</p>`;
    }

    loading.style.display = "none";
    resultBox.style.display = "block";
}
