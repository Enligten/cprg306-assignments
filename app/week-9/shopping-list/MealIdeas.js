"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const results = await fetchMealIdeas(ingredient);
    setMeals(results);
  }

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md">
      <h2 className="text-xl font-bold mb-3">
        Meal Ideas for: <span className="text-blue-600">{ingredient}</span>
      </h2>
      {meals.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          {ingredient ? "No meal ideas found." : "Select an item from the list to see meal ideas."}
        </p>
      ) : (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="flex items-center gap-3 p-2 rounded-md border border-gray-100 dark:border-gray-700"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                width={48}
                height={48}
                className="rounded-md object-cover"
              />
              <span>{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
