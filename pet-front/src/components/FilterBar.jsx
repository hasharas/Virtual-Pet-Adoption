import React from 'react';

const moods = ['All', 'happy', 'sad', 'excited'];

//filter bar component
const FilterBar = ({ onFilterChange, activeFilter }) => {
      return (
            <div className="flex flex-wrap justify-center mb-4">
                  {moods.map((mood) => (
                        <button
                              key={mood}
                              className={`${activeFilter === mood || (mood === 'All' && (!activeFilter || activeFilter === 'All'))
                                    ? 'bg-green-500'
                                    : 'bg-blue-500'
                                    } text-white font-bold py-2 px-4 rounded m-2 transition duration-300 ease-in-out transform hover:scale-105`}
                              onClick={() => onFilterChange(mood)}
                        >
                              {mood.charAt(0).toUpperCase() + mood.slice(1)}
                        </button>
                  ))}
            </div>
      );
};

export default FilterBar;
