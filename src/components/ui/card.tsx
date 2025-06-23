import "../../index.css"

type CountryData = {
    name: string;
    population: number;
    region: string;
    capital: string;
    flags: string[];
};

const Card = ({ Country }: { Country: CountryData }) => {
    return (
        <a className="card">
            <section>
                <img src={Country.flags[0]} alt={Country.name} />
                <h4>{Country.name}</h4>
                <p><strong>Population: </strong>{Country.capital}</p>
                <p><strong>Region: </strong>{Country.region}</p>
                <p><strong>Capital: </strong>{Country.capital}</p>
            </section>
        </a>
    )
}

export default Card;