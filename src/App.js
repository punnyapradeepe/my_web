import React, { useState } from 'react';
import './App.css';

function App() {
  const [director, setDirector] = useState('');
  const [movie, setMovie] = useState('');
  const [moviesList, setMoviesList] = useState([]);

  const handleDirectorChange = (event) => {
    setDirector(event.target.value);
  };

  const handleMovieChange = (event) => {
    setMovie(event.target.value);
  };

  const handleAddMovie = () => {
    if (movie.trim() !== '' && director.trim() !== '') {
      setMoviesList([...moviesList, { director: director, movie: movie }]);
      setMovie('');
      setDirector('');
    }
  };

  const handleRemoveMovie = (index) => {
    const updatedList = moviesList.filter((item, idx) => idx !== index);
    setMoviesList(updatedList);
  };

  return (
    <div className="app-container">
      <h1 className="page-heading">Directors and Movies</h1>
      <table className="movie-table">
        <thead>
          <tr>
            <th>Director</th>
            <th>Movie</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td><input
              type="text"
              value={director}
              onChange={handleDirectorChange}
              placeholder="Enter director name"
            /></td>
            <td><input
              type="text"
              value={movie}
              onChange={handleMovieChange}
              placeholder="Enter movie title"
            /></td>
            <td><button className="add-button" onClick={handleAddMovie}>Add</button></td>
          </tr>
        </thead>
        <tbody>
          {moviesList.map((item, index) => (
            <tr key={index}>
              <td>{item.director}</td>
              <td>{item.movie}</td>
              <td>
                <button className="remove-button" onClick={() => handleRemoveMovie(index)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
