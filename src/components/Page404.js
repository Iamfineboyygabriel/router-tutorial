import { Link } from "react-router-dom";


export default function Page404(){
    return(
        <div>
            <h1>PAGE NOT FOUND</h1>
            <p>This url doesn't exist in this application</p>
            <Link to="/">Go to home page</Link>
        </div>
    );
};
