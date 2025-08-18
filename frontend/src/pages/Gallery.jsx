// src/pages/Gallery.jsx
import { useSeo } from '../hooks/useSeo';

import photo1 from '../assets/1.jpg';
import photo2 from '../assets/2.jpg';
import photo3 from '../assets/7.jpg';
import photo4 from '../assets/4.jpg';
import photo5 from '../assets/5.jpg';
import photo6 from '../assets/6.jpg';
import photo7 from '../assets/10.jpg';
import photo8 from '../assets/9.jpg';
import photo9 from '../assets/8.jpg';
import photo10 from '../assets/12.jpg';
import photo11 from '../assets/13.jpg';
import photo12 from '../assets/11.jpg';

export default function Gallery() {
  useSeo({
    title: 'Gallery | PetPal in Action',
    description: 'Check out photos of pets we’ve cared for. Happy dogs and cats in loving hands!',
  });

  const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-teal-700 mb-6 text-center">Pet Moments</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {photos.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Pet ${idx + 1}`}
            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-200 w-full h-48 object-cover"
          />
        ))}
      </div>
    </section>
  );
}
