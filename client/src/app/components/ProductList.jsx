'use client';

import { useState } from 'react';
import { allProducts } from '../../data';





function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Extract unique categories from allProducts
 const categories = [...new Set(allProducts.filter(product => product.category !== 'General').map(product => product.category))];

  // Filter products based on selected category and country (Bangladesh)
  const filteredProducts = selectedCategory
    ? allProducts.filter(product => product.category === selectedCategory && product.country === 'Bangladesh')
    : allProducts.filter(product => product.country === 'Bangladesh');

  return (


    <div className='flex justify-center items-center flex-wrap flex-col mt-5'>


      {/* Categories */}
      <div className="flex space-x-4 mb-4 justify-center items-center flex-wrap">

            {/* All products button */}
            <button
            className={`mb-4 border border-green-500 px-3 md:px-4 py-1 md:py-2 rounded-xl ${selectedCategory === null ? 'bg-green-500 text-white' : 'bg-transparent text-green-500'}`}
            onClick={() => setSelectedCategory(null)}
            >
            সকল পণ্য
            </button>


            {/* Category buttons */}
            {categories.map(category => (
            <button
                key={category}
                className={`font-medium mb-4 border border-green-500 px-3 md:px-4 py-1 md:py-2 rounded-xl ${selectedCategory === category ? 'bg-green-500 text-white' : 'bg-transparent text-green-500'}`}
                onClick={() => setSelectedCategory(category)}
            >
                {category}
            </button>
            ))}


      </div>
      



      {/* Products list based on category 😉 */}

      <div>
        <h2 className="text-green-800 font-semibold mb-2 text-2xl">Products of Bangladesh</h2>
        <ul className="list-outside list-none">
          {filteredProducts.map(product => (
            <li key={product.id} className="text-gray-600" style={{ backgroundImage: 'url(/checkmark.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'left center', paddingLeft: '2rem' }}>
              {product.name}
            </li>
          ))}
        </ul>
      </div>



    </div>
  );
}

export default ProductList;
