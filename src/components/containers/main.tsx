import "../../index.css";
import { simplifiedCountries } from "../../assets/data";
import Card from "../ui/card";

const Main = () => {
    return (
        <section className="main">
            {
                simplifiedCountries.map((item, id) => (
                    <Card key={id} Country={item} />
                ))
            }
        </section>
    )
}

export default Main;