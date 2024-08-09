import React, { useState } from 'react';

function InvoiceUploader({ setInvoiceData, setError, setIsLoading }) {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleExtract = async () => {
        if (!file) {
          setError('Please select a file first');
          return;
        }
    
        setIsLoading(true);
        const formData = new FormData();
        formData.append('invoice', file);
    
        try {
          const response = await fetch('https://invoice-viewer-backend-2.onrender.com/process-invoice', {
            method: 'POST',
            body: formData,
          });
          const data = await response.json();
          if (data.error) {
            setError(data.error);
          } else {
            setInvoiceData(data);
            setError(null);
          }
        } catch (error) {
          console.error('Error uploading file:', error);
          setError('Failed to process the invoice. Please try again.');
        } finally {
          setIsLoading(false);
        }
      };

    return (
        <div className="mb-8">
            <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500">PDF (MAX. 10MB)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} accept=".pdf" />
                </label>
            </div>
            {file && <p className="mt-2 text-sm text-gray-500">{file.name}</p>}
            <button
                onClick={handleExtract}
                className="mt-4 w-full bg-gradient-to-r from-cyan-400 to-light-blue-500 hover:from-cyan-500 hover:to-light-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
                Extract Details
            </button>
        </div>
    );
}

export default InvoiceUploader;