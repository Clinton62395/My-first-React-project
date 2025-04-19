import { Link } from "react-router-dom"
function Mynavbar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact-us'>Contact Us</Link>
        </nav>
    )
}
export default Mynavbar;