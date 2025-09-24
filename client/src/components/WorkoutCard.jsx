import React from 'react';
import Button from './Button';

const WorkoutCard = ({ image, duration, title, description, onStart }) => {
  return (
    <div className="bg-white dark:bg-gray-800/20 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-center gap-6">
      <img alt={title} className="w-full md:w-48 h-48 md:h-auto object-cover rounded-lg" src={image} />
      <div className="flex-1">
        <span className="inline-block bg-primary/20 text-primary-dark font-semibold px-3 py-1 rounded-full text-sm mb-2">
          {duration}
        </span>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <Button 
        onClick={onStart}
        className="w-full md:w-auto shadow-md transform hover:scale-105"
      >
        Start Workout
      </Button>
    </div>
  );
};

export default WorkoutCard;