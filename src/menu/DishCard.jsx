import { Link } from "react-router-dom";

export default function DishCard({ dish }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
      <img
        src={dish.image}
        alt={dish.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{dish.name}</h3>
          {/* Feature 26: Formatted Currency (ETB) */}
          <span className="font-semibold text-blue-600">{dish.price} ETB</span>
        </div>
        <p className="text-sm text-gray-600 mb-4 flex-grow">
          {dish.description}
        </p>
        <Link
          to={`/menu/${dish.id}`}
          className="w-full text-center bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
