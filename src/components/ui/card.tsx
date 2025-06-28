import "../../index.css"
import type { CountryData } from "../../utils/countryData";


const Card = ({ Country }: { Country: CountryData }) => {
    return (
        <a className="card">
            <section>
                <img src={Country.flags.svg} alt={Country.name} />
                <h4>{Country.name}</h4>
                <p><strong>Population: </strong>{Country.capital}</p>
                <p><strong>Region: </strong>{Country.region}</p>
                <p><strong>Capital: </strong>{Country.capital}</p>
            </section>
        </a>
    )
}

export default Card;