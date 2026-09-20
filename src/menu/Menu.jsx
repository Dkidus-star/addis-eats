import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getDishes } from "../api/dishes";
import { useFetch } from "../hooks/useFetch";
import DishCard from "./DishCard";
import CategoryBar from "./CategoryBar";

export default function Menu() {
  const { data: dishes, isLoading, error } = useFetch(getDishes);
  const [searchParams] = useSearchParams();

  // Local state for the live search input
  const [searchQuery, setSearchQuery] = useState("");

  // Read the category from the URL
  const categoryFilter = searchParams.get("category");

  if (isLoading)
    return (
      <div className="text-center py-12 text-gray-500 font-medium">
        Loading menu...
      </div>
    );
  if (error)
    return (
      <div className="text-center py-12 text-red-500 font-medium">
        Error: {error}
      </div>
    );
  if (!dishes || dishes.length === 0)
    return (
      <div className="text-center py-12 text-gray-500 font-medium">
        No dishes available.
      </div>
    );

  // Filter by category and search query instantly
  const filteredDishes = dishes.filter((dish) => {
    const matchesCategory = !categoryFilter || dish.category === categoryFilter;
    const matchesSearch =
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Our Menu</h1>

      {/* Live Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search dishes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <CategoryBar />

      {/* Render Filtered Results */}
      {filteredDishes.length === 0 ? (
        <div className="text-center py-12 text-gray-500 font-medium">
          No dishes match your criteria.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      )}
    </div>
  );
}
