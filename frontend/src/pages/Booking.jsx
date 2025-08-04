// src/pages/Booking.jsx
import { useForm } from 'react-hook-form';
import { useSeo } from '../hooks/useSeo';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Booking() {
  useSeo({
    title: 'Book a Pet Sitter | PetPal Kitengela',
    description: 'Book dog sitting or pet minding services online. Quick and easy form for bookings in Kitengela.',
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const [submitting, setSubmitting] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onSubmit = async (formData) => {
    if (!startDate || !endDate) {
      alert('Please select both start and end dates.');
      return;
    }

    const data = {
      ...formData,
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
    };

    setSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/mdkdlvwp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        reset();
        setStartDate(null);
        setEndDate(null);
      } else {
        alert('There was an error submitting the form. Try again later.');
      }
    } catch (err) {
      alert('Network error. Please try again.', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="p-8 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-teal-700 mb-6">Book Reliable Pet Sitting Services in Kitengela</h2>

      {isSubmitSuccessful ? (
        <p className="text-green-600 text-lg font-medium">Booking submitted! We’ll get in touch soon.</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded shadow">
          {/* Name */}
          <input
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Your Name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}

          {/* Contact */}
          <input
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Contact (Phone or Email)"
            {...register('contact', {
              required: 'Contact info is required',
              validate: (value) =>
                /^[\d+\-\s()]{7,15}$/.test(value) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                'Enter a valid phone number or email',
            })}
          />
          {errors.contact && <p className="text-red-600 text-sm">{errors.contact.message}</p>}

          {/* Pet Type */}
          <input
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Pet Type (Dog, Cat, etc.)"
            {...register('pet', { required: 'Pet type is required' })}
          />
          {errors.pet && <p className="text-red-600 text-sm">{errors.pet.message}</p>}

          {/* Start Date Picker */}
          <div>
            <label className="block text-sm font-medium mb-1">Start Date</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full border border-gray-300 p-2 rounded"
              placeholderText="Select start date"
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
              required
            />
          </div>

          {/* End Date Picker */}
          <div>
            <label className="block text-sm font-medium mb-1">End Date</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="w-full border border-gray-300 p-2 rounded"
              placeholderText="Select end date"
              dateFormat="yyyy-MM-dd"
              minDate={startDate || new Date()}
              required
            />
          </div>

          {/* Message */}
          <textarea
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Anything else we should know?"
            {...register('message')}
            rows={4}
          />

          <button
            type="submit"
            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 disabled:opacity-60"
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit Booking'}
          </button>
        </form>
      )}
    </section>
  );
}
