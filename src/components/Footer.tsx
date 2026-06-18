import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-sky-300">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">StreetWear Co.</h3>
          <p className="text-sm">
            Premium sports &amp; casual clothing for everyday style.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/products" className="hover:text-white transition">Products</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Follow Us</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition">Twitter</a></li>
            <li><a href="#" className="hover:text-white transition">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sky-800 py-6 text-center text-xs">
        &copy; {new Date().getFullYear()} StreetWear Co. All rights reserved.
      </div>
    </footer>
  );
}
