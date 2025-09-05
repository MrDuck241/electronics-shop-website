import "./Header.css"
import { useEffect } from "react";

const Header = () => {

    useEffect(() => {
        console.log("Priviet");
    }, [])

    return (
        <header>
            <span>hello 123</span>
        </header>
    )
}

export default Header;