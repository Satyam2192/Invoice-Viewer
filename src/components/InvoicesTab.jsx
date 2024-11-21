import React from 'react';
import { useSelector } from 'react-redux';

function InvoicesTab() {
  const invoices = useSelector((state) => state.data.invoices);

  return (
    <div className="p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Invoices Overview</h2>
        </div>
        {invoices.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No invoices available. Upload an invoice to get started.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <tr>
                  {[
                    'Serial Number', 
                    'Customer Name', 
                    'Product Name', 
                    'Quantity', 
                    'Tax', 
                    'Total Amount', 
                    'Date'
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
                {invoices.map((invoice, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-gray-200 hover:bg-gray-100 transition-colors"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="font-medium">{invoice.serialNumber || 'N/A'}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span>{invoice.customerName || 'N/A'}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span>{invoice.productName || 'N/A'}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span>{invoice.quantity || 'N/A'}</span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                        {invoice.tax ? `₹${invoice.tax.toFixed(2)}` : 'N/A'}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="font-bold text-blue-600">
                        ₹{invoice.totalAmount ? invoice.totalAmount.toFixed(2) : 'N/A'}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span>{invoice.date || 'N/A'}</span>
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

export default InvoicesTab;