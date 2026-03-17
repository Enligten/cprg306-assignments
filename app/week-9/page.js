"use client";

import { useState } from "react";
import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [error, setError] = useState(null);

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Week 9 Shopping List</h1>

      {error && (
        <p className="text-red-500 mb-4">{error}</p>
      )}

      {user ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg">
            Welcome, {user.displayName} ({user.email})
          </p>
          <Link
            href="/week-9/shopping-list"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Go to Shopping List
          </Link>
          <button
            onClick={handleSignOut}
            className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          onClick={handleSignIn}
          className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900 flex items-center gap-2"
        >
          Sign in with GitHub
        </button>
      )}
    </main>
  );
}