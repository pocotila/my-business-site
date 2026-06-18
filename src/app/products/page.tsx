import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">All Products</h1>
      <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
        Browse our collection of sports and casual wear. Click any item to add
        it to your cart.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
