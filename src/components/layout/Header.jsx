import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> Go to HOME page</Link>
                    </li>
                    <li>
                        <Link to="/services"> Go to SERVICES page</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
