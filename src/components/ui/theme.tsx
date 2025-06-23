import "../../index.css"
import { useState } from "react";
import { Sun, Moon } from "lucide-react";

const Theme: React.FC = () => {

    const [isDark, setIsDark] = useState(false);

    const setLight = () => {
        setIsDark(false)
    }

    const setDark = () => {
        setIsDark(true)
    }

    return (
        <div className="theme-holder">
            {
                isDark ? (
                    <button type="button" onClick={setLight}>
                        <Moon className="moon" />
                    </button>
                ) : (
                    <button type="button" onClick={setDark}>
                        <Sun className="sun" />
                    </button>
                )
            }
        </div>
    )
}

export default Theme;