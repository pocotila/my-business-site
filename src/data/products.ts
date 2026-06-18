export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "classic-tee",
    name: "Classic Performance Tee",
    description:
      "Breathable, moisture-wicking cotton-blend tee. Perfect for workouts or casual wear.",
    price: 34.99,
    image: "/products/tee.svg",
    category: "Tops",
  },
  {
    id: "joggers",
    name: "Urban Joggers",
    description:
      "Slim-fit joggers with stretch fabric and zippered pockets. Street-ready comfort.",
    price: 64.99,
    image: "/products/joggers.svg",
    category: "Bottoms",
  },
  {
    id: "hoodie",
    name: "Oversized Hoodie",
    description:
      "Heavyweight fleece hoodie with a relaxed fit. The ultimate layering piece.",
    price: 79.99,
    image: "/products/hoodie.svg",
    category: "Tops",
  },
  {
    id: "shorts",
    name: "Training Shorts",
    description:
      "Lightweight, quick-dry shorts with built-in liner. Made for movement.",
    price: 44.99,
    image: "/products/shorts.svg",
    category: "Bottoms",
  },
  {
    id: "windbreaker",
    name: "Tech Windbreaker",
    description:
      "Water-resistant, packable windbreaker with reflective details. Rain or shine.",
    price: 89.99,
    image: "/products/windbreaker.svg",
    category: "Outerwear",
  },
  {
    id: "cap",
    name: "StreetWear Snapback",
    description:
      "Structured snapback cap with embroidered logo. One size fits all.",
    price: 29.99,
    image: "/products/cap.svg",
    category: "Accessories",
  },
];
