// src/pages/Home.js

import CardData from "./CardData";
import ShopSearch from "./ShopSearch";

 

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Shop Registration Checker
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-gray-500 sm:mt-4">
              Verify if a shop is registered in our database
            </p>
          </div>
          
          <CardData/>
        </div>
      </div>
    </div>
  );
};

export default Home;