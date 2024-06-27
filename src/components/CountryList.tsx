import { Country } from "../types/country";
import { getCountries } from "../api/countries";
import React from "react";
import CountryCard from "./CountryCard";

const CountryListL: React.FC = () => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = React.useState<Country[]>(
    []
  );

  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countriesData: Country[] = await getCountries();
        setCountries(countriesData);
      } catch (error) {
        alert(error);
      }
    };
    fetchCountries();
  }, []);

  const handleSelectCountry = (country: Country): void => {
    if (
      !selectedCountries.find(
        (selectedCountry: Country) =>
          selectedCountry.name.common === country.name.common
      )
    ) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      setSelectedCountries(
        selectedCountries.filter(
          (selectedCountry: Country) =>
            selectedCountry.name.common !== country.name.common
        )
      );
    }
  };

  return (
    <div>
      <h3
        style={{
          textAlign: "center",
        }}
      >
        Favorite Countries
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
        }}
      >
        {selectedCountries.map((country: Country) => {
          return (
            <div
              key={country.name.common}
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "10px",
              }}
              onClick={() => handleSelectCountry(country)}
            >
              <CountryCard
                country={country}
                handleSelectCountry={handleSelectCountry}
              />
            </div>
          );
        })}
      </div>
      <h4
        style={{
          textAlign: "center",
        }}
      >
        Countries
      </h4>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
        }}
      >
        {countries.map((country: Country) => {
          return (
            <div
              key={country.name.common}
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                borderRadius: "4px",
                fontSize: "10px",
              }}
              onClick={() => handleSelectCountry(country)}
            >
              <CountryCard
                country={country}
                handleSelectCountry={handleSelectCountry}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountryListL;
