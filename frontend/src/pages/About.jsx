import { useSeo } from '../hooks/useSeo';

export default function About() {
  useSeo({
    title: 'About PetPal | Dog Sitter in Kitengela',
    description: 'Learn about PetPal and our trusted pet sitting services. Experienced and caring pet minder in Kitengela.',
  });

  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-teal-700 mb-4">About Me</h2>
      <p className="text-gray-700">
        Hi! I’m a passionate pet lover based in Kitengela. I’ve been dog sitting and minding pets for over 5 years...
      </p>
    </section>
  );
}
