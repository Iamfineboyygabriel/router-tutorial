import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <div className="nav">
            <li><NavLink style={({isActive})=>{return {color: isActive ? `gold`: ''}}} to="/">Home</NavLink></li>
            <li><NavLink style={({isActive})=>{return {color: isActive ? `gold`: ''}}}to="/about">About</NavLink></li>           
             <li><NavLink style={({isActive})=>{return {color: isActive ? `gold`: ''}}} to="/contact">Contact</NavLink></li>
             <li><NavLink style={({isActive})=>{return {color: isActive ? `gold`: ''}}} to="/contact">Filter</NavLink></li>
        </div>
    );
};

export default NavBar;