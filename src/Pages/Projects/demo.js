import React, { useState } from 'react'

export default function Demo() {
    const categories = ["mern", "react", "tailwind", "firebase"];
  const [filteredCategories, setFilteredCategories] = useState([]);

  const filterCategories = (filterCriteria) => {
    const filtered = categories.filter(category =>
      category.includes(filterCriteria)
    );
    setFilteredCategories(filtered);
  };
  return (
    <div>
      <h1>Categories</h1>
      <button onClick={() => filterCategories("react")}>React</button>
      <button onClick={() => filterCategories("firebase")}>Firebase</button>

      <h2>Filtered Categories:</h2>
      <ul>
        {filteredCategories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}
