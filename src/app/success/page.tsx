import Link from "next/link";

export default function SuccessPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <div className="text-6xl mb-6">✅</div>
      <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-gray-600 mb-8">
        Thank you for your order. You&apos;ll receive a confirmation email
        shortly.
      </p>
      <Link
        href="/"
        className="inline-block rounded-md bg-sky-600 px-8 py-3 text-sm font-semibold text-white hover:bg-sky-700 transition"
      >
        Back to Home
      </Link>
    </section>
  );
}
