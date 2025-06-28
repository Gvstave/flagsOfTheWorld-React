import type { CountryDataStructure } from "./CountryDataStructure";
import { countries } from "../assets/data";

const simplifiedCountries: CountryDataStructure[] = countries.map(country => ({
  name: country.name,
  population: country.population,
  region: country.region,
  capital: country.capital ?? "No capital city",
  flags: [country.flags.svg]
}));

export default simplifiedCountries