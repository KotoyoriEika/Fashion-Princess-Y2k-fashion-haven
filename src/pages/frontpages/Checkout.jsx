import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import pinkGlitter from "../../assets/pinkglitter2.jpg";

export default function Checkout() {
  const {
    selectedItems,
    removeSelectedItems,
  } = useCart();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "Cash on Delivery",
  });

  const total = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedItems.length === 0) {
      alert("Please select at least one product.");
      navigate("/cart");
      return;
    }

    if (
      !formData.name ||
      !formData.phone ||
      !formData.address
    ) {
      alert("Please complete your shipping information.");
      return;
    }

    // Hapus barang yang sudah di-checkout
    removeSelectedItems();

    alert("Order placed successfully!");

    // Kembali ke dashboard
    navigate("/");
  };

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

      <h1 className="text-3xl baddiez-font font-black text-black mb-8">
        Checkout
      </h1>

      {selectedItems.length === 0 ? (
        <div className="bg-white rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            No items selected
          </h2>

          <p className="text-gray-600 mb-6">
            Please select products from your cart first.
          </p>

          <button
            onClick={() => navigate("/cart")}
            className="px-6 py-3 rounded-full
                       bg-black text-white font-bold
                       hover:bg-gray-800"
          >
            Back to Cart
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT - SHIPPING FORM */}
          <div className="bg-white rounded-3xl p-6 md:p-8">

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Shipping Information
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME */}
              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full p-3 rounded-xl
                             border-2 border-pink-200
                             focus:outline-none
                             focus:border-pink-600"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="08xxxxxxxxxx"
                  className="w-full p-3 rounded-xl
                             border-2 border-pink-200
                             focus:outline-none
                             focus:border-pink-600"
                />
              </div>

              {/* ADDRESS */}
              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Shipping Address
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your complete address"
                  rows="4"
                  className="w-full p-3 rounded-xl
                             border-2 border-pink-200
                             focus:outline-none
                             focus:border-pink-600"
                />
              </div>

              {/* PAYMENT */}
              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Payment Method
                </label>

                <select
                  name="payment"
                  value={formData.payment}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl
                             border-2 border-pink-200
                             focus:outline-none
                             focus:border-pink-600"
                >
                  <option value="Cash on Delivery">
                    Cash on Delivery
                  </option>

                  <option value="Bank Transfer">
                    Bank Transfer
                  </option>

                  <option value="E-Wallet">
                    E-Wallet
                  </option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full
                           bg-black text-white
                           font-bold text-lg
                           hover:bg-gray-800
                           hover:scale-[1.02]
                           transition"
              >
                Place Order
              </button>

            </form>
          </div>

          {/* RIGHT - ORDER SUMMARY */}
          <div className="bg-white rounded-3xl p-6 md:p-8">

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Order Summary
            </h2>

            <div className="space-y-5">

              {selectedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4
                             border-b border-pink-100
                             pb-4"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20
                               object-contain
                               bg-pink-100
                               rounded-xl p-2"
                  />

                  <div className="flex-1">

                    <h3 className="font-bold text-gray-900">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>

                    <p className="text-pink-600 font-semibold">
                      Rp{" "}
                      {(
                        item.price * item.quantity
                      ).toLocaleString("id-ID")}
                    </p>

                  </div>

                </div>
              ))}

            </div>

            {/* TOTAL */}
            <div className="border-t-2 border-pink-100 mt-6 pt-6">

              <div className="flex justify-between mb-3">
                <span className="text-gray-600">
                  Items
                </span>

                <span className="font-semibold">
                  {selectedItems.length}
                </span>
              </div>

              <div className="flex justify-between">

                <span className="text-xl font-bold">
                  Total
                </span>

                <span className="text-2xl font-black text-pink-600">
                  Rp {total.toLocaleString("id-ID")}
                </span>

              </div>

            </div>

          </div>

        </div>
      )}
    </div>
  );
}