import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import InvoicesTab from './components/InvoicesTab.jsx';
import ProductsTab from './components/ProductsTab.jsx';
import CustomersTab from './components/CustomersTab.jsx';
import InvoiceUploader from './components/InvoiceUploader.jsx';

function App() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [invoiceData, setInvoiceData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="relative py-3 sm:max-w-7xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Invoice Manager</h1>
          <InvoiceUploader
            setInvoiceData={setInvoiceData}
            setError={setError}
            setIsLoading={setIsLoading}
          />
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {isLoading && <p className="text-blue-500 mt-4">Processing...</p>}
          <Tabs value={activeTab} onChange={handleTabChange} centered>
            <Tab label="Invoices" />
            <Tab label="Products" />
            <Tab label="Customers" />
          </Tabs>
          {activeTab === 0 && <InvoicesTab />}
          {activeTab === 1 && <ProductsTab />}
          {activeTab === 2 && <CustomersTab />}
        </div>
      </div>
    </div>
  );
}

export default App;
