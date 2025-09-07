import express from "express";
import fetch from "node-fetch";
//import cors from "cors";

const app = express();


// app.get("/api/weather", async(req, res) => {
//     try {
//         const response = await fetch("https://api.weather.gov/gridpoints/OKX/35,35/forecast");
//         const raw = await response.text();
//         console.log("Raw IMD response:", raw);
//         const data = await response.json();

//         //transforming data into simpler structure 
//         const forecast = data?.weather?.forecast?.map(day => ({
//             date: day.date,
//             maxTemp: day.max_temp,
//             minTemp: day.min_temp,
//             description: day.description
//         }));

//         res.json({city: "Udaipur", forecast});
//     } catch(err) {
//         console.error("Backend error:", err);
//         res.status(500).json({error: err.message});
//     }
// });

app.get("/api/weather", async(req, res) => {
    try {
        const response = await fetch("https://api.weather.gov/gridpoints/OKX/35,35/forecast");
        if(!response.ok){
            throw new Error(`Weather API returned status ${response.status}`);
        }

        const data = await response.json();

        //Transforming data into front-end friendly environment 

        const forecast = (data?.properties?.periods || [])
            .slice(0, 5)
            .map(period => ({
                name: period.name,
                temperature: period.temperature,
                temperatureUnit: period.temperatureUnit,
                shortForecast: period.shortForecast,
                detailedForecast: period.detailedForecast
        }));

        res.json({city: "Udaipur", forecast});
    } catch(err) {
        console.error("Backend Error:", err.message);
        res.status(500).json({error: "Failed to fetch Weather data"});
    }
})

app.listen(5000, () => console.log("Server running on port 5000"));