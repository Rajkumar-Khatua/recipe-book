import React, { useState } from 'react';

const dummyMeals = [
  { id: 1, name: 'Breakfast Burrito', type: 'Breakfast' },
  { id: 2, name: 'Chicken Alfredo', type: 'Dinner' },
  { id: 3, name: 'Avocado Toast', type: 'Breakfast' },
  { id: 4, name: 'Vegetarian Pizza', type: 'Dinner' },
  { id: 5, name: 'Spinach Salad', type: 'Lunch' },
  // Add more dummy meals as needed
];

const MealListing = () => {
  const [filter, setFilter] = useState('All'); // Default filter is 'All'

  const filteredMeals = filter === 'All' ? dummyMeals : dummyMeals.filter(meal => meal.type === filter);

  return (
    <div>
      <h2>Meal List</h2>
      <div>
        <label>Filter by Type:</label>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
      </div>
      <ul>
        {filteredMeals.map(meal => (
          <li key={meal.id}>
            {meal.name} - {meal.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealListing;
