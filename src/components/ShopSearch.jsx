// src/components/ShopSearch.js
import { useState } from 'react';

const ShopSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    setError(null);
    
    try {
      // This would be replaced with your actual API call
      const response = await fetch(`/api/shops?name=${encodeURIComponent(searchTerm)}`);
      const data = await response.json();
      
      if (response.ok) {
        setSearchResults(data);
      } else {
        setError(data.message || 'Error searching for shop');
      }
    } catch (err) {
      setError('Failed to connect to server');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Search for Registered Shops</h2>
      
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter shop name or registration number"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {error && (
        <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-md">
          {error}
        </div>
      )}

      {searchResults && (
        <div className="border border-gray-200 rounded-md overflow-hidden">
          {searchResults.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {searchResults.map((shop) => (
                <div key={shop.registrationNumber} className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{shop.name}</h3>
                  <p className="text-gray-600">
                    <span className="font-medium">Registration #:</span> {shop.registrationNumber}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Address:</span> {shop.address}
                  </p>
                  <p className="text-green-600 font-medium mt-2">Registered</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-600">
              <p>No registered shops found with that name/number.</p>
              <p>This shop may not be registered.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ShopSearch;