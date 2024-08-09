# Invoice Viewer

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API](#api)


## Description

Invoice Viewer is a React-based web application that allows users to upload PDF invoices and view extracted details. It uses a server-side API to process the invoices and extract relevant information, providing a user-friendly interface for reviewing invoice data.

## Features

- **PDF invoice upload:** Easily upload invoices using drag-and-drop or file selection.
- **Automatic extraction of invoice details:**  Leverages [mention your OCR/extraction library here, e.g., Google Vision API] for accurate data extraction.
- **Clear display of key information:**  Presents customer information, product details, and total amount in an organized format.
- **Responsive design:**  Built with Tailwind CSS for a seamless experience across different screen sizes.
- **Robust error handling and data validation:** Ensures accuracy and provides helpful feedback to the user.

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later): [https://nodejs.org/](https://nodejs.org/)
- npm (v6.0.0 or later): Usually comes bundled with Node.js.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/invoice-viewer.git
   cd invoice-viewer ```
2. **Install dependencies (both client and server):**
 ```bash
  cd client
  npm install
  cd ../server
  npm install 
 ```
3. Set up environment variables:
- Create a .env file in the server directory.
- Add the following variables, replacing placeholders with your actual values:
```bash
PORT=5000
GOOGLE_AI_API_KEY=your_google_ai_api_key
```
### Usage
- Start the server:
```bash
cd server
npm start
```
- Open your browser and navigate to http://localhost:5173.
- Upload a PDF invoice.
- Click "Extract Details" to process the invoice.
- Review the extracted invoice details.

## API

The application uses a server-side API for processing invoices:

- Endpoint: `http://localhost:5000/process-invoice`
- Method: POST
- Payload: FormData containing the PDF file
- Response: JSON object with extracted invoice details or error information
