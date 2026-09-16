import { getDishes } from "../api/dishes";
import { useFetch } from "../hooks/useFetch";
import DishCard from "./DishCard";

export default function Menu() {
  const { data: dishes, isLoading, error } = useFetch(getDishes);

  // Feature 12: Loading States
  if (isLoading) {
    return (
      <div className="text-center py-12 text-gray-500 font-medium">
        Loading menu...
      </div>
    );
  }

  // Feature 14: Error Handling
  if (error) {
    return (
      <div className="text-center py-12 text-red-500 font-medium">
        Error: {error}
      </div>
    );
  }

  // Feature 13: Empty States
  if (!dishes || dishes.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 font-medium">
        No dishes available at the moment.
      </div>
    );
  }

  // Feature 1: Browse Menu
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Our Menu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
}
