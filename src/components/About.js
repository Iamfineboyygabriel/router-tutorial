import { Link } from "react-router-dom";
function About() {
    return(
<div>
    <h1> About PAGE</h1>
    <p>This is the About component.</p>
    <Link to="/">Go to home page</Link>
    <li><Link to="/user/tunde">Tunde</Link></li>
            <li><Link to="/user/rafiu">Rafiu</Link></li>
            <li><Link to="/user/akintola">Akintola</Link></li>
    </div>
    );
};

export default About;
