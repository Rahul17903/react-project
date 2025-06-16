import React, { useEffect, useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    if (!inputValue.trim()) return;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputValue}&client_id=LwdZ10Qt8FxCXuzidq0gk2N19z_3Q8k4AnTBlTqs_5c`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      const imageUrls = json.results.map(photo => photo.urls.small);

      // Append new images if it's not page 1
      setImages(prev => (page === 1 ? imageUrls : [...prev, ...imageUrls]));
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  // Run getData when 'page' changes (e.g., Show More clicked)
  useEffect(() => {
    if (page > 1) {
      getData();
    }
  }, [page]);

  const handleSearch = () => {
    setPage(1);         // Reset to first page
    setImages([]);      // Clear old results
    getData();          // Fetch new results
  };

  const showMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className='w-full'>
      <div className='flex flex-row fixed top-10 left-[40%] z-10'>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          className='p-2 rounded-s-lg outline-none text-lg'
          placeholder="Search images"
        />
        <button 
          onClick={handleSearch} 
          className='bg-blue-500 text-white px-4 rounded-r-lg'
        >
          Search
        </button>
      </div>

      <div className='flex flex-row flex-wrap gap-4 justify-center mt-24'>
        {images.map((url, index) => (
          <img 
            key={index}
            src={url}
            alt={`search result ${index}`}
            className='w-[250px] h-[250px] object-cover rounded shadow-md'
          />
        ))}
      </div>

      {/* Show More Button if images are found */}
      {images.length > 0 && (
        <button 
          onClick={showMore} 
          className="m-auto flex justify-center mt-10 mb-5 px-6 py-2 bg-green-600 text-white rounded-lg"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default App;
