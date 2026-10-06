import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import animalPrint from "../assets/leopard-pattern.png";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-black-100">
      <Navbar />

      <div className="container mx-auto p-4">
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 p-3 rounded-full border-2 border-pink-300 bg-linear-to-b from-pink-100 to-pink-200 text-pink-900 placeholder-pink-400 shadow-[inset_0_3px_8px_rgba(190,24,93,0.25)] focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <select className="p-2 border rounded border-pink-300 bg-pink-100 text-pink-900">
            <option>All Categories</option>
            <option>tops</option>
            <option>Bottoms</option>
            <option>Accessories</option>
          </select>
        </div>

        <main>
          <Outlet />
        </main>
      </div>
    
      <footer className="bg-pink-600 text-center p-4 mt-8"
        style={{
          backgroundColor: "#db2777",
          backgroundImage: `url(${animalPrint})`,
          backgroundSize: "250px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}>
        <p className="text-white">© 2026 MyShop. All rights reserved.</p>
      </footer>
    </div>
    
  );
}