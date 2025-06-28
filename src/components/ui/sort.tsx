import { Filter } from "lucide-react";
import { useState } from "react";
import "../../index.css";

type SortProps = {
    selected: string;
    onSelect: (region: string) => void;
};

function Sort({ onSelect }: SortProps) {
    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        setShowContent((prev) => !prev);
    };

    const regions = ["all", "Africa", "Europe", "Asia", "Americas", "Oceania", "Polar", "Antarctica"];

    return (
        <section className="sort">
            <Filter onClick={toggleContent} className="sort-button" />
            {showContent && (
                <div>
                    <ul>
                        {regions.map((region) => (
                            <li key={region} onClick={() => {
                                onSelect(region)
                                toggleContent()
                            }}>
                                {region}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
}

export default Sort;
