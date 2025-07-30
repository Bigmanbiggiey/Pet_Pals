// src/pages/Testimonials.jsx
import { useSeo } from '../hooks/useSeo';
export default function Testimonials() {
  useSeo({
    title: 'Testimonials | PetPal Kitengela',
    description: 'See reviews from happy clients who’ve trusted PetPal for dog sitting and pet care services.',
  });

  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-teal-700 mb-6">Happy Clients</h2>
      <blockquote className="bg-gray-100 p-6 rounded shadow mb-4">
        <p>"Our puppy loves him! We always feel at ease knowing he’s taking care of our pets." — Sarah K.</p>
      </blockquote>
      <blockquote className="bg-gray-100 p-6 rounded shadow">
        <p>"Reliable, kind, and professional. Highly recommended!" — James M.</p>
      </blockquote>
    </section>
  );
}
