import Link from "next/link";

export default function CancelledPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <div className="text-6xl mb-6">❌</div>
      <h1 className="text-4xl font-bold mb-4">Payment Cancelled</h1>
      <p className="text-gray-600 mb-8">
        Your order was not completed. No charges were made.
      </p>
      <Link
        href="/cart"
        className="inline-block rounded-md bg-gray-900 px-8 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
      >
        Back to Cart
      </Link>
    </section>
  );
}
