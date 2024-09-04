import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
function DisplayCountries() {
  const [countryData, setCountryData] = useState([]);
  const fetchData = () => {
    fetch(`https://xcountries-backend.azurewebsites.net/all`)
      .then((res) => res.json())
      .then((data) => setCountryData(data))
      .catch((error) => console.log("Error >>>", error));
  };
  useEffect(() => {
    fetchData();
  }, []);

  // console.log("CountryData >>>", countryData);
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {countryData.map((country) => (
          <CountryCard
            key={country.abbr}
            flag={country.flag}
            name={country.name}
            abbr={country.abbr}
          />
        ))}
      </div>
    </>
  );
}
export default DisplayCountries;
