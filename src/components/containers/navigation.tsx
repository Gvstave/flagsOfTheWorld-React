import SearchBar from "../ui/search";
import Sort from "../ui/sort";
import '../../index.css';
import { useEffect, useRef, useState } from "react";

function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);
    const [offsetTop, setOffsetTop] = useState(0);

    useEffect(() => {
        if (navRef.current) {
            setOffsetTop(navRef.current.offsetTop);
        }

        const handleScroll = () => {
            if (window.scrollY >= offsetTop) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [offsetTop]);

    return (
        <div ref={navRef} className={`navigation ${isScrolled ? "scrolled" : ""}`}>
            <SearchBar />
            <Sort />
        </div>
    );
}

export default Navigation;
