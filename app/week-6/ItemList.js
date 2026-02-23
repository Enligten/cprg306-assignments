"use client";

import { useState } from "react";
import Item from "./Item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sorted = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  const buttonBase = "px-3 py-1 rounded-md text-sm font-medium";
  const activeStyle = "bg-blue-600 text-white";
  const inactiveStyle = "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200";

  if (sortBy === "grouped") {
    const groups = sorted.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {});

    const sortedCategories = Object.keys(groups).sort();

    return (
      <div className="space-y-2">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setSortBy("name")}
            className={`${buttonBase} ${sortBy === "name" ? activeStyle : inactiveStyle}`}
          >
            Sort by Name
          </button>
          <button
            onClick={() => setSortBy("category")}
            className={`${buttonBase} ${sortBy === "category" ? activeStyle : inactiveStyle}`}
          >
            Sort by Category
          </button>
          <button
            onClick={() => setSortBy("grouped")}
            className={`${buttonBase} ${sortBy === "grouped" ? activeStyle : inactiveStyle}`}
          >
            Group by Category
          </button>
        </div>

        {sortedCategories.map((category) => (
          <div key={category}>
            <h2 className="font-bold capitalize mt-4 mb-1">{category}</h2>
            <ul className="space-y-2">
              {groups[category]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`${buttonBase} ${sortBy === "name" ? activeStyle : inactiveStyle}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`${buttonBase} ${sortBy === "category" ? activeStyle : inactiveStyle}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("grouped")}
          className={`${buttonBase} ${sortBy === "grouped" ? activeStyle : inactiveStyle}`}
        >
          Group by Category
        </button>
      </div>

      <ul className="space-y-3">
        {sorted.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
