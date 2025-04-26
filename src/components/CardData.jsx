import React, { useState } from 'react';

const CardData = () => {
  // Sample shop data
  const [shops, setShops] = useState([
    {
      id: 1,
      shopName: "Tech Gadgets Plus",
      registrationNum: "REG-2023-001",
      address: "123 Main Street, Tech City, TC 10001",
      category: "Electronics"
    },
    {
      id: 2,
      shopName: "Fashion Fiesta",
      registrationNum: "REG-2023-002",
      address: "456 Style Avenue, Fashion District, FD 20002",
      category: "Clothing"
    },
    {
      id: 3,
      shopName: "Gourmet Delights",
      registrationNum: "REG-2023-003",
      address: "789 Food Street, Culinary Town, CT 30003",
      category: "Food"
    },
    {
      id: 4,
      shopName: "Book Haven",
      registrationNum: "REG-2023-004",
      address: "101 Book Lane, Literature City, LC 40004",
      category: "Books"
    },
    {
      id: 5,
      shopName: "Home Essentials",
      registrationNum: "REG-2023-005",
      address: "202 Furniture Road, Comfort Town, CM 50005",
      category: "Home Goods"
    },
    {
      id: 6,
      shopName: "Sports World",
      registrationNum: "REG-2023-006",
      address: "303 Athletic Boulevard, Fitness City, FC 60006",
      category: "Sports"
    },
    {
      id: 7,
      shopName: "Beauty Spot",
      registrationNum: "REG-2023-007",
      address: "404 Glamour Street, Cosmetics Town, CS 70007",
      category: "Beauty"
    },
    {
      id: 8,
      shopName: "Toy Kingdom",
      registrationNum: "REG-2023-008",
      address: "505 Play Road, Kids City, KC 80008",
      category: "Toys"
    },
    {
      id: 9,
      shopName: "Pet Paradise",
      registrationNum: "REG-2023-009",
      address: "606 Animal Avenue, Pet Town, PT 90009",
      category: "Pets"
    },
    {
      id: 10,
      shopName: "Health First Pharmacy",
      registrationNum: "REG-2023-010",
      address: "707 Wellness Lane, Medical City, MC 10010",
      category: "Health"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Filter shops based on search term
  const filteredShops = shops.filter(shop =>
    shop.shopName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shop.registrationNum.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shop.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shop.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
       
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search shops by name, registration, address, or category..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Shops Grid */}
        {filteredShops.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShops.map(shop => (
              <div key={shop.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{shop.shopName}</h2>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-start">
                      <span className="font-medium mr-2">Reg No:</span>
                      <span>{shop.registrationNum}</span>
                    </p>
                    <p className="flex items-start">
                      <span className="font-medium mr-2">Address:</span>
                      <span>{shop.address}</span>
                    </p>
                    <p className="flex items-start">
                      <span className="font-medium mr-2">Category:</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {shop.category}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No shops found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardData;