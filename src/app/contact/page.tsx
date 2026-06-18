"use client";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-center text-gray-600 mb-10">
        Have a question or feedback? We&apos;d love to hear from you.
      </p>

      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-md border border-sky-300 px-4 py-2 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-md border border-sky-300 px-4 py-2 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-md border border-sky-300 px-4 py-2 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-12 text-center text-gray-600 text-sm space-y-1">
        <p>Email: hello@streetwearco.com</p>
        <p>Phone: (555) 123-4567</p>
      </div>
    </section>
  );
}
