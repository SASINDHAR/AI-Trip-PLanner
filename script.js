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
        const data = await response.json();

        resultBox.innerHTML = `<h3>🌆 Trip Plan for ${destination}</h3><pre>${data.plan}</pre>`;
    } catch (error) {
        console.error(error);
        resultBox.innerHTML = "Error generating AI plan. Try again.";
    }

    loading.style.display = "none";
    resultBox.style.display = "block";
}
