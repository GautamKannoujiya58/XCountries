import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
function DisplayCountries() {
  const [countryData, setCountryData] = useState([]);
  const [error, setError] = useState(null);
  const fetchData = () => {
    fetch(`https://xcountries-backend.azurewebsites.net/l`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status:${res.status}`);
        }

        return res.json();
      })
      .then((data) => setCountryData(data))
      .catch((error) => {
        console.log("Error >>>", error.message);
        setError(error.message);
        // throw error;
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  // console.log("CountryData >>>", countryData);
  console.log("ERRRRRRRR >>>>>>", error);
  return (
    <>
      {!error ? (
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
      ) : (
        <h3>{error}</h3>
      )}
    </>
  );
}
export default DisplayCountries;
