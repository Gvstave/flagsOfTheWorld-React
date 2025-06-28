import type { CountryData } from "./countryData";
import { countries } from "../assets/data";

const filterByRegion = (selectedRegion: string): CountryData[] => {
    return countries.filter(
        (country) => country.region.toLowerCase() === selectedRegion.toLowerCase()
    );
};

export default filterByRegion;
