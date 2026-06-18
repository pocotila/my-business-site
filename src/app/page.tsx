import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-600 to-sky-400 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            StreetWear Co.
          </h1>
          <p className="mt-6 text-lg text-sky-100 max-w-2xl mx-auto">
            Premium sports &amp; casual clothing designed for your everyday
            style. Comfort meets performance.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/products"
              className="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-orange-600 transition"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block rounded-md bg-orange-500 px-8 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-sky-50 py-16">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
          <div>
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="font-semibold text-lg">Free Shipping</h3>
            <p className="text-gray-600 mt-2">On orders over $75</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="font-semibold text-lg">Easy Returns</h3>
            <p className="text-gray-600 mt-2">30-day return policy</p>
          </div>
          <div>
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="font-semibold text-lg">Premium Quality</h3>
            <p className="text-gray-600 mt-2">Built to last</p>
          </div>
        </div>
      </section>
    </>
  );
}
