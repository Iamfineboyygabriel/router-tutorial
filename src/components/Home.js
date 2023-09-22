import { Link, useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    const navigateTopage=(url)=>{
            navigate(url)
        
    }
    return(
<div className="bdy">
    <h1> HOME PAGE</h1>
    <p>This is the Home component. </p>
    <p>we are learning react router</p>
    <Link to="/about">Go to about page</Link>
    <br />
    <button onClick={()=>navigateTopage('/about')}>Go to About Page</button>
    <br />
    <button onClick={()=>navigateTopage('/filter')}>Go to Filter Page</button>
</div>
    );
};

export default Home;
