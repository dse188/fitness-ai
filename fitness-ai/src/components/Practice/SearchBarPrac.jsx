import React, { useState, useEffect } from 'react'
import { searchExerciseName } from '../../services/api'

function SearchBarPrac() {

    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchExercises = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const results = await searchExerciseName(searchTerm);
                setData(results);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        // Add a small delay to avoid making too many API calls while typing
        const debounceTimer = setTimeout(() => {
            if (searchTerm.trim() !== '') {
                fetchExercises();
            } else {
                setData([]); // Clear results when search is empty
            }
        }, 300);

        return () => clearTimeout(debounceTimer);
    }, [searchTerm]);
    
  return (
    <div>
        <div>
            <input
                type="text"
                placeholder='Search for exercise...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            />
            {isLoading && <div>Loading...</div>}
            {error && <div className='error'>{error}</div>}
            <div className='search-result'>
                {data.map((exercise, index) => (
                    <div key={index}>
                        {exercise.name} - {exercise.type} ({exercise.muscle})
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default SearchBarPrac