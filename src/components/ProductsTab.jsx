import React from 'react';
import { useSelector } from 'react-redux';

function ProductsTab() {
  const products = useSelector((state) => state.data.products);

  return (
    <div className="p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Products Inventory</h2>
        </div>
        {products.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No products found. Upload an invoice to populate the inventory.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <tr>
                  {[
                    'Name', 
                    'Quantity', 
                    'Unit Price', 
                    'Tax', 
                    'Price with Tax', 
                    'Discount'
                  ].map((header) => (
                    <th 
                      key={header} 
                      className="py-3 px-6 text-left font-semibold"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {products.map((product, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-gray-200 hover:bg-gray-100 transition-colors"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="font-medium">{product.name || 'N/A'}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <span className="bg-blue-200 text-blue-600 py-1 px-3 rounded-full text-xs">
                        {product.quantity || 'N/A'}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <span>₹{product.unitPrice ? product.unitPrice.toFixed(2) : 'N/A'}</span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                        {product.tax ? `₹${product.tax.toFixed(2)}` : 'N/A'}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="font-bold text-blue-600">
                        ₹{product.priceWithTax ? product.priceWithTax.toFixed(2) : 'N/A'}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className={`
                        py-1 px-3 rounded-full text-xs 
                        ${product.discount && product.discount !== 'N/A' 
                          ? 'bg-yellow-200 text-yellow-600' 
                          : 'text-gray-500'
                        }
                      `}>
                        {product.discount || 'N/A'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsTab;