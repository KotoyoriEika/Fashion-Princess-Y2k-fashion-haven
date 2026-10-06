import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import whitevector from "../../assets/whitevectorbloom.jpg";

export default function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    toggleSelect,
    selectedItems,
  } = useCart();

  const navigate = useNavigate();

  const total = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
          className="p-6 md:p-10 rounded-3xl shadow-lg"
          style={{
            backgroundColor: "#ec008c",
            backgroundImage: `url(${whitevector})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

      {/*Judul*/}
      <h1 className="text-3xl baddiez-font font-bold mb-8 text-pink-600">
        Shopping Cart
      </h1>

      {/* EMPTY CART */}
      {cart.length === 0 ? (
        <p className="text-gray-600">
          Your cart is currently empty.
        </p>
      ) : (
        <>
          {/* CART ITEMS */}
          <div className="space-y-6">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row
                           items-center gap-5
                           border-b border-pink-100
                           pb-6"
              >

                {/* CHECKBOX */}
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => toggleSelect(item.id)}
                  className="w-5 h-5 accent-pink-600"
                />

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-contain
                             bg-pink-600 rounded-2xl p-2"/>
                

                {/* INFO */}
                <div className="flex-1 text-center md:text-left">

                  {/* PRODUCT NAME */}
                  <h2 className="font-bold text-lg text-pink-600">
                    {item.name}
                  </h2>

                  {/* PRICE */}
                  <p className="text-pink-600 font-semibold">
                    Rp {item.price.toLocaleString("id-ID")}
                  </p>

                  {/* STOCK */}
                  <p className="text-sm text-pink-600 mt-1">
                    Stock: {item.stock}
                  </p>

                  {/* QUANTITY */}
                  <div
                    className="flex items-center
                               justify-center md:justify-start
                               gap-3 mt-3"
                  >

                    {/* DECREASE */}
                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="w-8 h-8 rounded-full
                                 bg-gray-200 font-bold
                                 hover:bg-gray-300"
                    >
                      -
                    </button>

                    {/* QUANTITY NUMBER */}
                    <span
                      className="font-bold min-w-7.5
                                 text-center text-pink-600">
                      {item.quantity}
                    </span>

                    {/* INCREASE */}
                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      disabled={item.quantity >= item.stock}
                      className="w-8 h-8 rounded-full
                                 bg-pink-600 text-white
                                 font-bold
                                 hover:bg-pink-700
                                 disabled:opacity-40"
                    >
                      +
                    </button>

                  </div>

                  {/* DELETE */}
                  <button
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    className="text-red-500 text-sm
                               font-semibold mt-3
                               hover:text-red-700"
                  >
                    Delete
                  </button>

                </div>

                {/* ITEM SUBTOTAL */}
                <div className="font-bold text-pink-600">
                  Rp{" "}
                  {(
                    item.price * item.quantity
                  ).toLocaleString("id-ID")}
                </div>

              </div>
            ))}

          </div>

          {/* CHECKOUT SUMMARY */}
          <div
            className="mt-10 border-t-2
                       border-pink-100 pt-6"
          >

            {/* SELECTED ITEMS */}
            <div
              className="flex justify-between
                         items-center mb-4"
            >
              <span className="text-lg font-semibold text-gray-700">
                Selected Items:
              </span>

              <span className="font-bold text-pink-600">
                {selectedItems.length}
              </span>
            </div>

            {/* TOTAL */}
            <div
              className="flex justify-between
                         items-center mb-6"
            >
              <span className="text-xl font-bold text-gray-900">
                Total:
              </span>

              <span className="text-2xl font-black text-pink-600">
                Rp {total.toLocaleString("id-ID")}
              </span>
            </div>

            {/* CHECKOUT BUTTON */}
            <button
              onClick={() => navigate("/checkout")}
              disabled={selectedItems.length === 0}
              className="w-full py-4 rounded-full
                         bg-pink-600 text-white
                         font-bold text-lg
                         hover:bg-pink-700
                         disabled:bg-gray-300
                         disabled:cursor-not-allowed
                         transition"
            >
              Checkout
            </button>

          </div>
        </>
      )}

    </div>
  );
}