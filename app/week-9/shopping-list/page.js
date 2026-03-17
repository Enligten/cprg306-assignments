"use client";

import { useState } from "react";
import Link from "next/link";
import itemsData from "./items.json";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas";
import { useUserAuth } from "../../contexts/AuthContext";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  if (!user) {
    return (
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center justify-center p-4">
        <p className="text-lg mb-4">You must be logged in to view this page.</p>
        <Link
          href="/week-9"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Go to Login
        </Link>
      </main>
    );
  }

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(item) {
    const cleanName = item.name
      .split(",")[0]
      .trim()
      .replace(/\p{Emoji}/gu, "")
      .trim();
    setSelectedItemName(cleanName);
  }

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List + Meal Ideas</h1>
      <div className="flex gap-6">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}