import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const createArray = length => [...Array(length)];



export default function StarRating({ totalStars = 5 }) {
    const Star = ({ selected = false, onSelect = f => f }) => (
        <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
    );

    const [selectedStars, setSelectedStars] = useState(0);
    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star 
                key={i}
                selected={selectedStars > i}
                onSelect={() => setSelectedStars(i + 1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    )
}