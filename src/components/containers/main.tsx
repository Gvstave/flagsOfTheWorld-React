import Card from "../ui/card";
import "../../index.css";
import type { CountryData } from "../../utils/countryData";

type MainProps = {
    countries: CountryData[];
};

const Main = ({ countries }: MainProps) => {
    return (
        <section className="main">
            {countries.length > 0 ? (
                countries.map((item, id) => <Card key={id} Country={item} />)
            ) : (
                <p className="not-found">No countries found ⚠</p>
            )}
        </section>

    );
};

export default Main;
