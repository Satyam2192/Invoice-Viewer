import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setInvoiceData, setError, setLoading } from '../redux/slices/dataSlice';

function InvoiceUploader() {
  const [file, setFile] = useState(null);
  const [localLoading, setLocalLoading] = useState(false);
  const dispatch = useDispatch();

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'https://your-production-backend.com';

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
      const allowedExtensions = ['pdf', 'xlsx', 'xls', 'jpg', 'png'];
      
      if (!allowedExtensions.includes(fileExtension)) {
        dispatch(setError('Unsupported file type. Please upload PDF, Excel, or Image files.'));
        return;
      }

      setFile(selectedFile);
      dispatch(setError(null));
    }
  };

  const handleExtract = async () => {
    if (!file) {
      dispatch(setError('Please select a file first.'));
      return;
    }

    setLocalLoading(true);
    dispatch(setLoading(true));
    dispatch(setError(null));

    const formData = new FormData();
    formData.append('invoice', file);

    try {
      const response = await fetch(`${BACKEND_URL}/process-invoice`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      const data = await response.json();

      if (data.error) {
        dispatch(setError(data.error));
      } else {
        // Dispatch the extracted data to Redux store
        dispatch(setInvoiceData(data));
      }
    } catch (error) {
      dispatch(setError(`Failed to process the invoice: ${error.message}`));
    } finally {
      setLocalLoading(false);
      dispatch(setLoading(false));
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
            <p className="text-xs text-gray-500">PDF, Excel, Images (MAX. 10MB)</p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept=".pdf,.xlsx,.xls,.jpg,.png"
            disabled={localLoading}
          />
        </label>
      </div>
      {file && <p className="mt-2 text-sm text-gray-500">{file.name}</p>}
      <button
        onClick={handleExtract}
        disabled={localLoading || !file}
        className={`mt-4 w-full bg-gradient-to-r from-cyan-400 to-light-blue-500 hover:from-cyan-500 hover:to-light-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 relative ${localLoading ? 'cursor-not-allowed opacity-70' : ''}`}
      >
        {localLoading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            <span>Extracting...</span>
          </div>
        ) : (
          'Extract Details'
        )}
      </button>
    </div>
  );
}

export default InvoiceUploader;