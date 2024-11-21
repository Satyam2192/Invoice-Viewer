# Invoice Viewer 📄✨

## Overview
Invoice Viewer is an advanced React-based web application that automates invoice data extraction and management. It supports multiple file formats (PDF, Excel, Images) and uses AI-powered extraction to seamlessly process and organize invoice information.

- Live URL - https://invoice-viewer-zeta.vercel.app/
- Backend - https://github.com/Satyam2192/Invoice-Viewer-Backend

## 🌟 Features

### Intelligent Data Extraction
- **Multi-Format Support:** 
  - PDF invoices
  - Image files (JPG, PNG)
  - Excel spreadsheets (XLSX, XLS)
- **AI-Powered Extraction:** Utilizes Google's Generative AI for intelligent data parsing
- **Robust Error Handling:** Comprehensive error management for various file types

### Dynamic Data Management
- **Three-Tab Interface:**
  1. **Invoices Tab:** 
     - Serial Number
     - Customer Name
     - Product Name
     - Quantity
     - Tax
     - Total Amount
     - Date

  2. **Products Tab:** 
     - Name
     - Quantity
     - Unit Price
     - Tax
     - Price with Tax
     - Optional Discount

  3. **Customers Tab:**
     - Name
     - Phone Number
     - Total Purchase Amount

### State Management
- **Redux Integration:** Centralized state management
- **Real-time Updates:** Instantaneous synchronization across tabs
- **Consistent Data Handling:** Ensures data integrity and instant reflections of changes

### User Experience
- **Drag and Drop Upload**
- **Loading Indicators**
- **Error Notifications**
- **Responsive Design**

## 🛠 Tech Stack
- **Frontend:** 
  - React
  - Redux
  - Tailwind CSS
  - Material-UI
- **Backend:** 
  - Node.js
  - Express.js
- **AI Integration:** 
  - Google Generative AI
- **OCR:** 
  - Tesseract.js
- **File Processing:**
  - PDF-parse
  - XLSX

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- npm (v6+)

### Installation

1. Clone the repository
```bash
git https://github.com/Satyam2192/Invoice-Viewer.git
cd invoice-viewer
```

2. Install dependencies
```bash
npm install
```

4. Run the Application
```bash
npm run dev
```

## 📤 File Upload Support
- PDF Invoices
- Image Files (JPG, PNG)
- Excel Files (XLSX, XLS)

## 🔍 How It Works
1. Upload a file via drag-and-drop or file selection
2. Click "Extract Details"
3. AI processes the document
4. Data populates Invoices, Products, and Customers tabs

## 🧪 Test Cases Covered
- Invoice PDFs
- Invoice Images
- Excel Files
- Mixed File Type Uploads

## 🔒 Error Handling
- Unsupported file format detection
- Extraction error notifications
- Graceful fallback mechanisms

## 📄 License
This project is licensed under the MIT License.

## 📞 Contact
For support or inquiries, please open an issue on GitHub Or Contact me here satyam21092@gmail.com
```
