import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm p-4">
        <nav className="flex gap-4 max-w-4xl mx-auto font-semibold">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <Link to="/menu" className="text-blue-600 hover:underline">
            Menu
          </Link>
          <Link to="/cart" className="text-blue-600 hover:underline">
            Cart
          </Link>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-4 mt-4">
        <Outlet />
      </main>
    </div>
  );
}
