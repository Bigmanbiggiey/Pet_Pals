// src/components/FeaturedProducts.jsx
// Updated
import React from "react";
import { Link } from "react-router-dom";

// Import product images (place them inside src/assets/ or a similar folder)
import dogFoodImg from "../assets/dogfood.jpg";
import leashImg from "../assets/leash.jpg";
import feedingBowlImg from "../assets/bowl.jpg";
import sensoryToyImg from "../assets/toys.jpg";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Premium Dog Food",
      description: "Nutritious, vet-approved food for your dog’s health.",
      image: dogFoodImg,
    },
    {
      id: 2,
      name: "Durable Dog Leash",
      description: "Strong and comfortable leash for daily walks.",
      image: leashImg,
    },
    {
      id: 3,
      name: "Feeding Bowl",
      description: "Easy-to-clean, non-slip bowl for mealtime.",
      image: feedingBowlImg,
    },
    {
      id: 4,
      name: "Play Toys",
      description: "Engaging toy to keep your dog active and happy.",
      image: sensoryToyImg,
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600 mt-2 text-sm">
                {product.description}
              </p>
              <a 
                href="tel:+254794895297"
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
                Inquire
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
