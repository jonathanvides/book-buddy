import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav className="navbar">
            <Link to="/books">Home</Link>
            <Link to="/account">Account</Link>
            <Link to="/reservations">Reservations</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </nav>
    )
}

export default Nav