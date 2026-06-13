const API_KEY = "1e8b2ca13c4d406aad11ac6f39c2d00d";

const btn = document.getElementById("searchBtn");

btn.addEventListener("click", async () => {
    const city = document.getElementById("cityInput").value;

    try {
        const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("city").textContent = data.name;
        document.getElementById("temp").textContent = data.main.temp;
        document.getElementById("humidity").textContent = data.main.humidity;
        document.getElementById("wind").textContent = data.wind.speed;

        document.getElementById("error").textContent = "";

    } catch (error) {
        document.getElementById("error").textContent = error.message;
    }
});
