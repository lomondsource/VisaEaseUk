import React from 'react';

interface VisaFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

function VisaFilter({ selectedCategory, onCategoryChange }: VisaFilterProps) {
  const categories = [
    { id: 'all', label: 'All Visas' },
    { id: 'work', label: 'Work' },
    { id: 'study', label: 'Study' },
    { id: 'family', label: 'Family' },
    { id: 'business', label: 'Business' },
    { id: 'tourist', label: 'Tourist' },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition
            ${selectedCategory === category.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}

export default VisaFilter;