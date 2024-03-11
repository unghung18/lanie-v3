import React, { useState, useEffect } from 'react';

export const useDebouncedSearch = (searchFunction, delay) => {
    const [input, setInput] = useState('');
    const [debouncedInput, setDebouncedInput] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedInput(input);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [input, delay]);

    useEffect(() => {
        searchFunction(debouncedInput);
    }, [debouncedInput, searchFunction]);

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    return {
        input,
        handleInputChange,
    };
};