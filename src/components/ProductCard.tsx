"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group rounded-xl border border-sky-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64 bg-sky-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-white/90 text-xs font-medium px-2 py-1 rounded">
          {product.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addItem(product)}
            className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
