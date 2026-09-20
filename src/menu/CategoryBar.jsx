import { useSearchParams } from "react-router-dom";

const CATEGORIES = ["All", "Ethiopian", "Pizza", "Burgers", "Drinks"];

export default function CategoryBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "All";

  const handleCategoryClick = (category) => {
    if (category === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    // Update the URL without reloading the page
    setSearchParams(searchParams);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-4 py-2 rounded-full font-medium transition-colors ${
            currentCategory === category
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
