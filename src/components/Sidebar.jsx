import { Link } from "react-router-dom";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div
      className={`${
        sidebarOpen ? "block" : "hidden"
      } md:block w-64 bg-pink-600 text-white shadow-md`}
    >
      {/* SIDEBAR TITLE */}
      <div className="p-4 font-bold text-xl border-b border-pink-400">
        My Admin
      </div>

      {/* NAVIGATION */}
      <nav className="flex flex-col p-4 space-y-2">
        <Link
          to="/admin/dashboard"
          className="p-3 rounded-lg font-semibold
                     hover:bg-pink-700
                     transition"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/about"
          className="p-3 rounded-lg font-semibold
                     hover:bg-pink-700
                     transition"
        >
          About
        </Link>
      </nav>
    </div>
  );
}