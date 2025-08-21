// src/pages/Contact.jsx
// <p className="mb-2">📞 Phone: <a href="tel:+254793654269" className="text-teal-600 underline">+254794895297</a></p>
import { useSeo } from '../hooks/useSeo';

export default function Contact() {
  useSeo({
    title: 'Contact PetPal | Dog Sitting in Nairobi',
    description: 'Call, WhatsApp, or email PetPal to book your pet care services in Kitengela.',
  });

  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-teal-700 mb-6">Reach out to us</h2>
      <p className="mb-4">📍 Based in Nairobi, Kenya</p>
      <p className="mb-2">📞 Phone: <a href="tel:+254793654269" className="text-teal-600 underline">+254794895297</a></p>
      <p className="mb-2">📞 Phone: <a href="tel:+254712195158" className="text-teal-600 underline">+254712195158</a></p>
      <p className="mb-2">📧 Email: <a href="mailto:petsitter@email.com" className="text-teal-600 underline">kamwerujeremym@gmail.com</a></p>
      <p className="mb-2">💬 WhatsApp: <a href="https://wa.me/254794895297" target="_blank" className="text-teal-600 underline">Chat Now</a></p>
      <iframe
        className="w-full h-64 mt-4 rounded shadow"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d127641.27911661429!2d36.900044799999996!3d-1.3008895999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1753816347264!5m2!1sen!2ske" 
        width="600" 
        height="450" 
        allowfullscreen="" 
        referrerpolicy="no-referrer-when-downgrade"
        loading="lazy"
        title="Map"
      ></iframe>
    </section>
  );
}
