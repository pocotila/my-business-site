export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Our Story</h1>
      <div className="prose prose-lg mx-auto text-gray-700 space-y-6">
        <p>
          StreetWear Co. was founded with a simple mission: create premium
          clothing that moves with you — from the gym to the street and
          everywhere in between.
        </p>
        <p>
          We believe style shouldn&apos;t compromise comfort, and comfort
          shouldn&apos;t compromise performance. Every piece in our collection is
          crafted with high-quality materials designed to last.
        </p>
        <p>
          Based in the heart of the city, our small team works with trusted
          manufacturers to bring you responsibly-made apparel that you can feel
          good about wearing.
        </p>
        <h2 className="text-2xl font-bold mt-10">What We Stand For</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Quality First</strong> — Premium fabrics and construction
          </li>
          <li>
            <strong>Sustainable Practices</strong> — Eco-friendly materials
            where possible
          </li>
          <li>
            <strong>Inclusive Sizing</strong> — Made for every body
          </li>
          <li>
            <strong>Fair Pricing</strong> — No middlemen markup
          </li>
        </ul>
      </div>
    </section>
  );
}
