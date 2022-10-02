import { Link } from "react-router-dom"


function Footer() {
    return (
        <footer>
            <p>Get To Know Us</p>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/">Search</Link></li>
                <li><Link to="/">Privacy Policy</Link></li>
                <li><Link to="/">Refund Policy</Link></li>
                <li><Link to="/">Earn Money Online</Link></li>
                <li><Link to="/">QuickBuyers</Link></li>
            </ul>
        </footer>
    )
}

export default Footer