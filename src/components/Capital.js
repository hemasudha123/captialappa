import React, { useState } from 'react';

const capitals = [
    {
        id: 'NEW_DELHI',
        capitalDisplayText: 'New Delhi',
        country: 'India',
    },
    {
        id: 'LONDON',
        capitalDisplayText: 'London',
        country: 'United Kingdom',
    },
    {
        id: 'PARIS',
        capitalDisplayText: 'Paris',
        country: 'France',
    },
    {
        id: 'KATHMANDU',
        capitalDisplayText: 'Kathmandu',
        country: 'Nepal',
    },
    {
        id: 'HELSINKI',
        capitalDisplayText: 'Helsinki',
        country: 'Finland',
    },
];
export default function Capitals() {
    const [selectedCapital, setSelectedCapital] = useState(capitals[0]);



    const handleChange = (e) => {
        const selectedCapitalId = e.target.value;
        const selectedCapitalObj = capitals.find((capital) => capital.id === selectedCapitalId);
        setSelectedCapital(selectedCapitalObj);
    };

    return (
        <div className='capital-container'>
            <div className='capital-parent'>
                <h1>Countries and Capitals</h1>
                <select onChange={handleChange} value={selectedCapital.id}>
                    {capitals.map((eachCapital) => (
                        <option key={eachCapital.id} value={eachCapital.id}>
                            {eachCapital.capitalDisplayText}
                        </option>
                    ))}
                </select>
                <span>{selectedCapital.country} is the capital of {selectedCapital.country}.</span>
            </div>
        </div>
    );
}
