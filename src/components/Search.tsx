import React, { useState } from 'react';

interface SearchProps {
  onSearch: (location: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleSearch = () => {
    onSearch(location);
  };

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={handleInputChange}
        className="border rounded-l px-4 py-2"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
