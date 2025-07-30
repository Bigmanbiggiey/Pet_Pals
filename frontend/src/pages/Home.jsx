import { useSeo } from '../hooks/useSeo';

export default function Home() {
  useSeo({
    title: 'PetPal | Trusted Dog Sitter in Kitengela',
    description: 'Professional and loving dog sitting and pet care services in Kitengela and Nairobi. Book today!',
  });

  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-teal-700">Welcome to PetPal</h1>
      <p className="mt-4 text-gray-700">Your trusted dog sitter and pet minder in Kitengela.</p>
    </div>
  );
}
