import { useParams, Link, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { getDishById } from "../api/dishes";
import { useFetch } from "../hooks/useFetch";
import { useCartStore } from "../cart/cartStore";

export default function Dish() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);

  // Wrap the fetch call in useCallback so useFetch doesn't re-trigger infinitely
  const fetchDish = useCallback(() => getDishById(id), [id]);
  const { data: dish, isLoading, error } = useFetch(fetchDish);

  if (isLoading)
    return <div className="text-center py-12">Loading details...</div>;
  if (error)
    return <div className="text-center py-12 text-red-500">{error}</div>;
  if (!dish) return null;

  const handleAddToCart = () => {
    addItem(dish);
    navigate("/cart"); // Send them to the cart after adding
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden border">
      <img
        src={dish.image}
        alt={dish.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-3xl font-bold text-gray-900">{dish.name}</h1>
          <span className="text-xl font-semibold text-blue-600">
            {dish.price} ETB
          </span>
        </div>

        <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
          {dish.category}
        </div>

        <p className="text-gray-700 mb-8 leading-relaxed text-lg">
          {dish.description}
        </p>

        <div className="flex gap-4">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
          <Link
            className="flex-1 text-center bg-gray-100 text-gray-800 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            to="/menu"
          >
            Back to Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
