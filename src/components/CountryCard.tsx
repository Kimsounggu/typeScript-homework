import React from "react";
import { Country } from "../types/country";

interface CountryCard {
  country: Country;
  handleSelectCountry: (Country: Country) => void;
}

const CountryCard: React.FC<CountryCard> = ({
  country,
  handleSelectCountry,
}) => {
  return (
    <div onClick={() => handleSelectCountry(country)}>
      <img
        src={country.flags.svg}
        style={{
          width: "80px",
          height: "50px",
        }}
      />
      <h3>{country.name.common}</h3>
    </div>
  );
};

export default CountryCard;
