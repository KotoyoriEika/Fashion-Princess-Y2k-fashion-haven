import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import animalPrint from "../assets/leopard-pattern.png";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-black">

      {/* SIDEBAR */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex-1 flex flex-col min-w-0">

        {/* TOP BAR - MOBILE */}
        <div
          className="md:hidden text-white shadow p-4 flex justify-between items-center"
          style={{
            backgroundColor: "#db2777",
            backgroundImage: `url(${animalPrint})`,
            backgroundSize: "250px",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
          }}
        >
          <h1 className="font-bold">
            My Admin
          </h1>

          <button
            className="p-2 border border-white rounded"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
        </div>

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-6 bg-black">
          <Outlet />
        </main>

        {/* FOOTER */}
        <footer
          className="p-4 text-center text-white text-sm"
          style={{
            backgroundColor: "#db2777",
            backgroundImage: `url(${animalPrint})`,
            backgroundSize: "250px",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
          }}
        >
          © 2025 My Admin App — v1.0.0
        </footer>

      </div>
    </div>
  );
}