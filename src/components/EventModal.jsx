import React from 'react';

const EventModal = ({ event, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-lg md:max-w-3xl p-6 md:p-8 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 font-bold px-3 py-1 bg-red-500 text-white rounded dark:text-gray-300 hover:bg-red-600"
        >
          X
        </button>
        <img
          src={event.imgUrl}
          alt={event.title}
          className="w-full h-48 md:h-64 object-cover rounded-lg mb-4"
        />
        <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">
          {event.title}
        </h2>
        <div className="flex flex-wrap justify-between mb-4">
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Category:</strong> {event.category}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Rating:</strong> {event.rating}
          </p>
        </div>
        <div className="flex flex-wrap justify-between mb-4">
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Location:</strong> {event.location}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Date:</strong> {event.date}
          </p>
        </div>
        <p className="text-gray-800 dark:text-gray-100 font-semibold mb-2">
          <strong>Price:</strong> {event.price}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          <strong>Description:</strong> {event.description}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          <strong>Speakers:</strong> {event.speakers}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          <strong>Format:</strong> {event.format}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          <strong>Duration:</strong> {event.duration}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          <strong>Target Audience:</strong> {event.target_audience}
        </p>
        <ol className="text-gray-600 dark:text-gray-300 mb-4 list-decimal">
          <strong>Features:</strong>
          <div className='px-4'>
          {event.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
          </div>
        </ol>
        <button className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-lg w-full hover:bg-blue-700 transition-colors duration-300">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default EventModal;
