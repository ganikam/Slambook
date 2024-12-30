import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    area: '',
    school: '',
    favoriteHero: '',
    favoriteColor: '',
    favoritePlace: '',
    describeMe: '',
  });

  const heroes = ['Vikram', 'Suriya', 'Vijay'];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Dynamically resize the "Describe Me" textarea
    if (name === 'describeMe') {
      e.target.style.height = 'auto'; // Reset the height
      e.target.style.height = `${e.target.scrollHeight}px`; // Adjust based on content
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries((prev) => [...prev, formData]);
    setFormData({
      name: '',
      dob: '',
      area: '',
      school: '',
      favoriteHero: '',
      favoriteColor: '',
      favoritePlace: '',
      describeMe: '',
    }); // Clear the form
  };

  return (
    <div className="App">
      <h1>Slam Book</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>DOB</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <label>Area</label>
        <input
          type="text"
          name="area"
          placeholder="Your Area"
          value={formData.area}
          onChange={handleChange}
          required
        />

        <label>School</label>
        <input
          type="text"
          name="school"
          placeholder="Your School"
          value={formData.school}
          onChange={handleChange}
          required
        />

        <label>Favorite Hero</label>
        <div className="radio-group">
          {heroes.map((hero) => (
            <div key={hero} className="radio-item">
              <input
                type="radio"
                name="favoriteHero"
                value={hero}
                checked={formData.favoriteHero === hero}
                onChange={handleChange}
              />
              <label>{hero}</label>
            </div>
          ))}
        </div>


        <label>Colour</label>
        <input
          type="text"
          name="favoriteColor"
          placeholder="Favorite Color"
          value={formData.favoriteColor}
          onChange={handleChange}
          required
        />

        <label>Favorite Place</label>
        <input
          type="text"
          name="favoritePlace"
          placeholder="Favorite Place We Went Together"
          value={formData.favoritePlace}
          onChange={handleChange}
          required
        />

        <label>Describe Me</label>
        <textarea
          name="describeMe"
          placeholder="Describe Me"
          value={formData.describeMe}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Entry</button>
      </form>

      <div className="entries">
        {entries.map((entry, index) => (
          <div key={index} className="entry">
            <h2>Entry</h2>
            <p><strong>Name:</strong> {entry.name}</p>
            <p><strong>DOB:</strong> {entry.dob}</p>
            <p><strong>Area:</strong> {entry.area}</p>
            <p><strong>School:</strong> {entry.school}</p>
            <p><strong>Favorite Hero:</strong> {entry.favoriteHero}</p>
            <p><strong>Colour:</strong> {entry.favoriteColor}</p>
            <p><strong>Favorite Place:</strong> {entry.favoritePlace}</p>
            <p><strong>Describe Me:</strong> {entry.describeMe}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
