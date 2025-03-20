import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <p>Quick Links:</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blue">Blue</Link></li>
                <li><Link to="/red">Red</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </footer>
    );
}

export default Footer;
