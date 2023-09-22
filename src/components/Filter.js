import { useSearchParams } from "react-router-dom";
import React, { useState } from "react"; // Import useState from React

function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [age, setAge] = useState(searchParams.get('age')); // Use state to manage age
    const city = searchParams.get('city');

    console.warn(age);

    const setAgeQueryParam = (newAge) => {
        setSearchParams({ ...searchParams, age: newAge });
        setAge(newAge); // Update the age state
    };

    const handleInputChange = (e) => {
        const newAge = e.target.value;
        setAge(newAge); // Update the age state as the user types
    };

    return (
        <div>
            <h1>FILTER PAGE</h1>
            <h3>Age is {age}</h3>
            <h3>City is {city}</h3>
            <input
                type="text"
                value={age || ''}
                onChange={handleInputChange}
            />
            <button onClick={() => setAgeQueryParam(age)}>Set Age</button>
        </div>
    );
}

export default Filter;
