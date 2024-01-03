import React from "react";
import { gql, useQuery } from "@apollo/client";
import "./countryList.css";

// Define the GraphQL query using the gql template tag imported form apollo/client
// Requesting data for 'countries' from the GraphQL API
// Specifying the fields to retrieve for each country (code, name, capital,... etc..)

// This GraphQL query retrieves information about countries, including their code, name, capital,
//emoji (flag), currency, and the languages spoken in each country.
const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      capital
      emoji
      currency
      languages {
        name
      }
    }
  }
`;

const Countries = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="country-container">
      <h1 className="title">List of Countries</h1>
      <div className="country-list">
        {data.countries.map((country) => (
          <div key={country.code} className="country-card">
            <h2 className="country-name">
              {country.name}{" "}
              <span className="country-flag">{country.emoji}</span>
            </h2>
            <p>
              <strong>Capital:</strong> {country.capital}
            </p>
            <p>
              <strong>Currency:</strong> {country.currency}
            </p>
            <p>
              <strong>Languages:</strong>{" "}
              {country.languages.map((lang) => lang.name).join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Countries;
