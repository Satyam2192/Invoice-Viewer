import React from 'react';

function InvoiceDetails({ invoiceData }) {
  if (!invoiceData || typeof invoiceData !== 'object') {
    return <div className="text-red-500">Invalid invoice data</div>;
  }

  if (invoiceData.error) {
    return <div className="text-red-500">{invoiceData.error}</div>;
  }

  const { customer_details, products, total_amount } = invoiceData;

  if (!customer_details || !Array.isArray(products) || total_amount === undefined) {
    return <div className="text-red-500">Incomplete invoice data</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Invoice Details</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Customer Details</h3>
        <p className="text-gray-600">{customer_details.name || 'N/A'}</p>
        <p className="whitespace-pre-line text-gray-600">{customer_details.address || 'N/A'}</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Products</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">Description</th>
                <th scope="col" className="px-6 py-3 text-right">Quantity</th>
                <th scope="col" className="px-6 py-3 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-6 py-4">{product.description || 'N/A'}</td>
                  <td className="px-6 py-4 text-right">{product.quantity || 'N/A'}</td>
                  <td className="px-6 py-4 text-right">
                    ₹{typeof product.total === 'number' ? product.total.toFixed(2) : product.total || 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="text-xl font-semibold text-gray-800">
        Total Amount: ₹{typeof total_amount === 'number' ? total_amount.toFixed(2) : total_amount}
      </div>
    </div>
  );
}

export default InvoiceDetails;