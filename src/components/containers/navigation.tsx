import SearchBar from "../ui/search";
import Sort from "../ui/sort";
import '../../index.css';
import { useEffect, useRef, useState } from "react";

type NavigationProps = {
    selected: string;
    onSelect: (region: string) => void;
};

function Navigation({ selected, onSelect }: NavigationProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);
    const [offsetTop, setOffsetTop] = useState(0);

    useEffect(() => {
        if (navRef.current) {
            setOffsetTop(navRef.current.offsetTop);
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY >= offsetTop);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [offsetTop]);

    return (
        <div ref={navRef} className={`navigation ${isScrolled ? "scrolled" : ""}`}>
            <SearchBar />
            <Sort selected={selected} onSelect={onSelect} />
        </div>
    );
}

export default Navigation;
