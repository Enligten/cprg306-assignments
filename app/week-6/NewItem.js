"use client";

import { useState } from "react";

const categories = [
  "produce",
  "dairy",
  "bakery",
  "meat",
  "frozen foods",
  "canned goods",
  "dry goods",
  "beverages",
  "snacks",
  "household",
  "other",
];

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(e) {
    e.preventDefault();

    const item = {
      id: crypto.randomUUID(),
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-4 rounded-md max-w-md mx-auto space-y-3"
    >
      <div>
        <label
          htmlFor="item-name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Item Name
        </label>
        <input
          id="item-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Item name"
          className="mt-1 w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>

      <div className="flex gap-2">
        <div className="w-1/3">
          <label
            htmlFor="item-quantity"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Quantity
          </label>
          <input
            id="item-quantity"
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="mt-1 w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div className="w-2/3">
          <label
            htmlFor="item-category"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Category
          </label>
          <select
            id="item-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        +
      </button>
    </form>
  );
}
