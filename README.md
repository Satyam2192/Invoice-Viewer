I'll help you create an updated README.md that reflects the current implementation and features of the Invoice Viewer application. Here's a comprehensive README:

```markdown
# Invoice Viewer 📄✨

## Overview
Invoice Viewer is an advanced React-based web application that automates invoice data extraction and management. It supports multiple file formats (PDF, Excel, Images) and uses AI-powered extraction to seamlessly process and organize invoice information.

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
git clone https://github.com/your-username/invoice-viewer.git
cd invoice-viewer
```

2. Install dependencies
```bash
# Frontend
cd Invoice-Viewer
npm install

# Backend
cd ../Invoice-Viewer-Backend
npm install
```

3. Set Up Environment Variables
- Create `.env` in the backend directory
- Add your Google AI API key:
```
API_KEY=your_google_generative_ai_api_key
```

4. Run the Application
```bash
# Start Backend (Port 5000)
cd Invoice-Viewer-Backend
npm start

# Start Frontend (Port 3000/5173)
cd ../Invoice-Viewer
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