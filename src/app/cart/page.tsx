"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Failed to start checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-600 mb-8">Your cart is empty.</p>
        <Link
          href="/products"
          className="inline-block rounded-md bg-gray-900 px-8 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
        >
          Browse Products
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">Your Cart</h1>

      <div className="divide-y divide-gray-200">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 py-6">
            <div className="relative h-20 w-20 flex-shrink-0 rounded-md bg-gray-100 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold truncate">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="h-8 w-8 rounded border text-lg hover:bg-gray-100"
              >
                −
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="h-8 w-8 rounded border text-lg hover:bg-gray-100"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-6">
        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="mt-6 w-full rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Redirecting to Stripe..." : "Checkout with Stripe"}
        </button>
      </div>
    </section>
  );
}
