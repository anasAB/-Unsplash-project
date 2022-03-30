import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Photo from './photo';
import SearchBar from './searchBar';

const App = () => {

  const [query, setQuery] = useState<string | number>("random")
  const [images, setImages] = useState<object[]>([])

  const API_KEY = 'jezfftrc4DGVp-WekQPUyWEpoufdUx5pUXE1PdhfNtM'
  const onSearchSubmit = async (query:string | number) => {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query },
      headers: {
        Authorization: `Client-ID ${API_KEY}`
      }
    })
    setImages(response.data.results)
  }

  useEffect(() => {
    onSearchSubmit(query)
  }, [query])

  return (
    <div className="App">
      <SearchBar query={query} setQuery={setQuery} />

      <div className='card-list'>
        {images.map((image: any) =>
          <div key={image.id}>
            <Photo imageUrl={image.urls.raw} imagealt={image.alt_description} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;