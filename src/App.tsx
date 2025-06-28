import { useState } from "react";
import Header from "./components/containers/header";
import Navigation from "./components/containers/navigation";
import Main from "./components/containers/main";
import filterByRegion from "./utils/filterByRegion";
import { countries } from "./assets/data";
import './App.css';

function App() {
    const [selectedRegion, setSelectedRegion] = useState("all");

    const filteredCountries =
        selectedRegion === "all"
            ? countries
            : filterByRegion(selectedRegion);

    return (
        <div className="App">
            <Header />
            <Navigation selected={selectedRegion} onSelect={setSelectedRegion} />
            <Main countries={filteredCountries} />
        </div>
    );
}

export default App;
