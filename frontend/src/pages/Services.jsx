// src/pages/Services.jsx
import { useSeo } from "../hooks/useSeo";
export default function Services() {
  useSeo({
    title: 'Services | PetPal - Dog Sitting, Walking & More',
    description: 'Explore reliable dog sitting, dog walking, cat care and more services available in Nairobi and its environs..'
  });

  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-teal-700 mb-6">Services</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <li className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold">Dog Sitting</h3>
          <p>Daily or overnight in-home care for dogs.</p>
        </li>
        <li className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold">Dog Walking</h3>
          <p>30–60 minute walks tailored to your dog’s energy level.</p>
        </li>
        <li className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold">Cat Care</h3>
          <p>Feeding, playtime, and litter box cleaning.</p>
        </li>
        <li className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold">Pet Check-ins</h3>
          <p>Quick drop-ins for food, meds, and companionship.</p>
        </li>
      </ul>
    </section>
  );
}
