import { Link } from "react-router-dom";
import animalPrint from "../assets/leopard-pattern.png";
import bratzGif from "../assets/princess-sticker.gif";
import fashionPrincess from "../assets/fashion-princess.gif";

export default function Navbar() {
  return (
    <nav
      className="bg-pink-600 text-white p-4"
      style={{
        backgroundColor: "#db2777",
        backgroundImage: `url(${animalPrint})`,
        backgroundSize: "300px",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">

        <div className="flex items-center gap-2">

 <div className="flex items-center">
  <img
    src={fashionPrincess}
    alt="Fashion Princess"
    className="w-64 h-16 object-contain"
  />
</div>

  <img
    src={bratzGif}
    alt="Sparkly Bratz"
    className="w-25 h-25 object-contain"
  />
</div>

        <div className="flex gap-6 font-bold">
          <Link to="/" className="hover:text-pink-300">
            Dashboard
          </Link>

          <Link to="/cart" className="hover:text-pink-300">
            Cart
          </Link>

          <Link to="/checkout" className="hover:text-pink-300">
            Checkout
          </Link>
        </div>
      </div>
    </nav>
  );
}