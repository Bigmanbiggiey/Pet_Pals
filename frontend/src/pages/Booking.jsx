// src/pages/Booking.jsx
import { useState } from 'react';
import { useSeo } from '../hooks/useSeo';

export default function Booking() {
  useSeo({
    title: 'Book a Pet Sitter | PetPal Kitengela',
    description: 'Book dog sitting or pet minding services online. Quick and easy form for bookings in Kitengela.',
  });

  const [form, setForm] = useState({ name: '', pet: '', dates: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted! We'll get in touch soon.");
    setForm({ name: '', pet: '', dates: '', message: '' });
  };

  return (
    <section className="p-8 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-teal-700 mb-6">Book a Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <input
          className="w-full border border-gray-300 p-2 rounded"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border border-gray-300 p-2 rounded"
          name="pet"
          placeholder="Pet Type (Dog, Cat, etc.)"
          value={form.pet}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border border-gray-300 p-2 rounded"
          name="dates"
          placeholder="Preferred Dates"
          value={form.dates}
          onChange={handleChange}
          required
        />
        <textarea
          className="w-full border border-gray-300 p-2 rounded"
          name="message"
          placeholder="Anything else we should know?"
          value={form.message}
          onChange={handleChange}
        />
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700" type="submit">
          Submit Booking
        </button>
      </form>
    </section>
  );
}
