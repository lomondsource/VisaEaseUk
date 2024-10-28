import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import VisaCard from '../components/VisaCard';
import VisaFilter from '../components/VisaFilter';
import { visaTypes } from '../data/visaTypes';
import { VisaType } from '../types/visa';

function VisaTypes() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredVisas = visaTypes.filter((visa) => {
    const matchesCategory = selectedCategory === 'all' || visa.category === selectedCategory;
    const matchesSearch = visa.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         visa.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleVisaClick = (visa: VisaType) => {
    if (visa.category === 'business') {
      navigate(`/visa-types/business/${visa.id}`);
    } else {
      // Handle other visa types as needed
      console.log('Selected visa:', visa);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">UK Visa Types</h1>
        <p className="text-gray-600 mb-6">
          Explore our comprehensive range of UK visas and find the right one for your needs.
        </p>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search visa types..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <VisaFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Visa Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVisas.map((visa) => (
            <VisaCard
              key={visa.id}
              visa={visa}
              onClick={handleVisaClick}
            />
          ))}
        </div>

        {filteredVisas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No visa types found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default VisaTypes;