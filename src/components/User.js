import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function User() {
    const params = useParams();
    const name = params.name; // Access 'name' property directly

    return (
        <div>
            <h1>This is {name}'s page</h1>
            <li><Link to="/about">Go to about page</Link></li>           
        </div>
    );
}

export default User;
