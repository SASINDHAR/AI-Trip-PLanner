const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const { destination, days } = event.queryStringParameters;

    // Your Gemini API key (safe here, not exposed to users)
    const API_KEY = process.env.GEMINI_KEY;

    const prompt = `
    Plan a ${days}-day trip to ${destination}.
    Include:
    - Best time to visit
    - Recommended hotels (3 options)
    - Daily itinerary
    - Local food
    - Estimated total budget
    Make it clear and easy to read.
    `;

    try {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${AIzaSyDbRljDdvbVblQKF8BKgogWemwTMID_ogs}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await res.json();
        const plan = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No plan generated.";

        return {
            statusCode: 200,
            body: JSON.stringify({ plan })
        };
    } catch (err) {
        console.error(err);
        return { statusCode: 500, body: "Error generating plan." };
    }
};
