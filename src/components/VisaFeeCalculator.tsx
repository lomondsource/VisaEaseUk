import React, { useState } from 'react';
import { visaFees } from '../data/visaFees';
import { PoundSterling, Calculator } from 'lucide-react';

function VisaFeeCalculator() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [dependants, setDependants] = useState(0);

  const selectedCategoryFees = visaFees.find(c => c.category === selectedCategory);
  const selectedFee = selectedCategoryFees?.fees.find(f => f.type === selectedType);

  const calculateTotalFee = () => {
    if (!selectedFee) return 0;
    return selectedFee.newFee * (dependants + 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <Calculator className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold">Visa Fee Calculator</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Visa Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedType('');
            }}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select category</option>
            {visaFees.map(category => (
              <option key={category.category} value={category.category}>
                {category.category}
              </option>
            ))}
          </select>
        </div>

        {selectedCategory && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Visa Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select type</option>
              {selectedCategoryFees?.fees.map(fee => (
                <option key={fee.type} value={fee.type}>
                  {fee.type}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedType && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Dependants
            </label>
            <input
              type="number"
              min="0"
              value={dependants}
              onChange={(e) => setDependants(parseInt(e.target.value) || 0)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        )}

        {selectedFee && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600">Base Fee</p>
                <p className="text-lg font-semibold">£{selectedFee.newFee}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Fee</p>
                <p className="text-lg font-semibold text-blue-600">
                  £{calculateTotalFee()}
                </p>
              </div>
            </div>
            {selectedFee.notes && (
              <p className="text-sm text-gray-600 mt-2">
                Note: {selectedFee.notes}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default VisaFeeCalculator;