import { useParams } from "react-router-dom";
import products from "../../Product-data/products-data";
import { useCart } from "../../context/CartContext";
import pinkGlitter from "../../assets/pinkglitter2.jpg";

export default function ProductDetail() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="bg-black p-6 rounded-2xl shadow">
        <h1 className="text-2xl font-bold text-pink-600">
          Product Not Found
        </h1>

        <p className="text-black mt-2">
          Sorry, the product you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div
      className="p-6 md:p-10 rounded-3xl shadow-lg"
      style={{
        backgroundColor: "#ec008c",
        backgroundImage: `url(${pinkGlitter})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="flex justify-center items-start">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-112.5 object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* DETAIL */}
        <div>
          <p className="text-sm font-bold text-white uppercase tracking-widest mb-2">
            {product.specifications.Category}
          </p>

          <h1 className="text-4xl font-black text-white mb-4">
            {product.name}
          </h1>

          <p className="text-3xl font-bold text-black mb-6">
            Rp {product.price.toLocaleString("id-ID")}
          </p>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-white mb-2">
              Description
            </h2>

            <p className="text-black font-bold leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-3">
              Specifications
            </h2>

            <div className="space-y-2">
              {Object.entries(product.specifications).map(
                ([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between border-b border-white py-2"
                  >
                    <span className="font-semibold text-white">
                      {key}
                    </span>

                    <span className="text-white">
                      {value}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="w-full md:w-auto px-8 py-4 rounded-full
                       bg-black text-white font-bold
                       shadow-lg hover:bg-gray-800
                       hover:scale-105 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}