import React from 'react';
import { useSelector } from 'react-redux';

function CustomersTab() {
  const customers = useSelector((state) => state.data.customers);

  return (
    <div className="p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Customer Database</h2>
        </div>
        {customers.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No customer data available. Upload an invoice to populate the database.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <tr>
                  {[
                    'Name', 
                    'Phone Number', 
                    'Total Purchase Amount'
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
                {customers.map((customer, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-gray-200 hover:bg-gray-100 transition-colors"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="font-medium">{customer.name || 'N/A'}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <span className="bg-blue-200 text-blue-600 py-1 px-3 rounded-full text-xs">
                        {customer.phoneNumber || 'N/A'}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="font-bold text-green-600">
                        ₹{customer.totalPurchaseAmount ? customer.totalPurchaseAmount.toFixed(2) : 'N/A'}
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

export default CustomersTab;