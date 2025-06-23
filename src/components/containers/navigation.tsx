import SearchBar from "../ui/search";
import Sort from "../ui/sort";
import '../../index.css'

function Navigation() {
    return (
        <div className="navigation">
            <SearchBar />
            <Sort />
        </div>
    )
}

export default Navigation;