import "./App.css";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    temp: 12,
    location: "New york",
  });

  const search = (evt) => {
    if (evt.key === "Enter") {
      (async () => {
        await setWeather({
          temp: Math.floor(Math.random() * 50) + 1,
          location: query,
        });
      })(setQuery(""));
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let year = d.getYear();

    return `${day} ${d.getDate()} ${month} ${year}`;
  };

  return (
    <div className={`app ${weather.temp > 20 && "warm"}`}>
      <main>
        <div className="search-box">
          <input
            placeholder="Search..."
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-bar"
            onKeyPress={search}
          />
        </div>
        <div className="location-box">
          <div className="location">{weather.location}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">{weather.temp}°c</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
