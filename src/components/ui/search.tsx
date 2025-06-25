import "../../index.css";

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search for a country..."  autoFocus={true} />
        </div>
    )
}

export default SearchBar;