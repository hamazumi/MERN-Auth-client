import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav>  
            <Link to="/">
                Home
            </Link>

        {/* Only sees if user is logged in */}

            <Link to="/profile">
                Profile
            </Link>

            <Link to="/">
                <span onClick={props.handleLogout}>Logout!</span>
            </Link>

            {/* If user is logged out */}

            <Link to="/login">
                Login
            </Link>

            <Link to="/register">
                Register
            </Link>
        </nav>
    )
}