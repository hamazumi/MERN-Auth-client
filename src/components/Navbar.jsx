import { Link } from 'react-router-dom'

export default function Navbar(props) {

    //if user is logged in 
    const loggedIn = (
        <>
            <Link to="/profile">
                    Profile
            </Link>

            <Link to="/">
                <span onClick={props.handleLogout}>Logout!</span>
            </Link>
        </>
    )

    //if user is logged out
    const loggedOut = (
        <>
            <Link to="/login">
                Login
            </Link>

            <Link to="/register">
                Register
            </Link>
        </>
    )
    return (
        <nav>  
            <Link to="/">
                Home
            </Link>

            {props.currentUser ? loggedIn : loggedOut}

       </nav>
    )
}