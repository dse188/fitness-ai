import React, { useState, useEffect } from 'react'
import { searchExerciseName } from '../../services/api'
import { FaSearch } from 'react-icons/fa';

function SearchBarExercise({ onExerciseSelect }) {

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
    
    const handleClick = (exercise) => {
        onExerciseSelect(exercise);
        setData([]); // Clear search result after selection
        setSearchTerm(''); // Clear search input
    };

    const handleKeyDown = (e) => {
        if(e.key === 'Enter' && searchTerm.trim() !== '') {
            onExerciseSelect({
                name: searchTerm.trim(),
                muscle: 'custom',
                type: 'custom'
            });
            setSearchTerm(''); // Clear search result after selection
            setData([]); // Clear search input
        }
    };


    return (
    <div>
        <div>
            <input 
                className='search-bar bg-zinc-100 w-full border rounded-md p-1 pl-4 pr-4 placeholder:text-gray-700
                focus:outline-none  focus:bg-blue-500'
                type="text"
                placeholder='Search for exercise...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                onKeyDown={handleKeyDown}
            />
            {isLoading && <div>Loading...</div>}
            {error && <div className='error'>{error}</div>}
            {data.length > 0 && (
                <div className='search-result bg-white  rounded-md grid grid-cols-2 '>
                    {/* limits the width of the search result to half the container */}
                    <div className='shadow-md max-h-60 overflow-auto'>
                        <h4 className='text-gray-500 text-xs font-semibold pt-2 pl-4 pr-4 '>Exercises</h4>
                        {data.map((exercise, index) => (
                        <div 
                            key={index} 
                            className='individual-result p-2 hover:bg-blue-400 pl-4 text-sm rounded-md'
                            onClick={() => handleClick(exercise)}
                        >
                            {exercise.name}
                            <br/><span className='text-gray-500 text-xs'>{exercise.muscle}</span>
                        </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </div>
    );
}

export default SearchBarExercise