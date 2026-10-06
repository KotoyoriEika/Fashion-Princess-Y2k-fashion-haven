import { Link } from "react-router-dom";
import blackGlitter from "../../assets/blackglitters.jpg";
import butterflyGif from "../../assets/butterfly-glitter.gif";
import product1 from "../../assets/coach-tabbys-wedge-shoes.jpg";
import product2 from "../../assets/jeans.jpg";
import product3 from "../../assets/pink-babydoll-top.jpg";
import product4 from "../../assets/pink-zebra-pattern-sunglasses.jpg";
import product5 from "../../assets/Skull-vectorbloom-top.jpg";
import product6 from "../../assets/vectorbloom-foldover.jpg";

export default function Dashboard() {
  const products = [
    {
      id: 1,
      name: "Coach Tabby Wedge Shoes",
      description: "Stylish wedge shoes from Coach.",
      price: 3500000,
      image: product1,
    },
    {
      id: 2,
      name: "Capri jeans",
      description: "Capri jeans for hot girl summer",
      price: 450000,
      image: product2,
    },
    {
      id: 3,
      name: "Pink Babydoll top",
      description: "Perfect for cutesy outfits",
      price: 250000,
      image: product3,
    },
    {
      id: 4,
      name: "Pink Zebra Pattern Sunglasses",
      description: "Protect your eyes from the heat",
      price: 75000,
      image: product4,
    },
    {
      id: 5,
      name: "Skull Vectorbloom Top",
      description: "Wanna look cool and fresh?",
      price: 450000,
      image: product5,
    },
    {
      id: 6,
      name: "Vectorbloom Foldover Pants",
      description: "For a stylish leisure pants",
      price: 150000,
      image: product6,
    },
  ];

  return (
    <div
      className="p-6 md:p-10 rounded-3xl shadow-lg"
      style={{
        backgroundColor: "#ec008c",
        backgroundImage: `url(${blackGlitter})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <div className="flex items-center justify-center gap-4 mb-6">
          <img
            src={butterflyGif}
            alt="butterflies"
            className="w-20 h-20 object-contain"
          />

          <h1 className="text-3xl baddiez-font text-white">
            Products
          </h1>

          <img
            src={butterflyGif}
            alt="butterflies"
            className="w-20 h-20 object-contain"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-pink-300 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-bold mb-2 text-white">
                  {product.name}
                </h2>

                <p className="text-black mb-2">
                  {product.description}
                </p>

                <p className="font-bold text-pink-700 mb-4">
                  Rp {product.price.toLocaleString("id-ID")}
                </p>

                <Link
                  to={`/product/${product.id}`}
                  className="text-pink-600 font-semibold hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}