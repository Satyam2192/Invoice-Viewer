import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        invoices: [],
        products: [],
        customers: [],
        totalAmount: 0,
        error: null,
        isLoading: false
    },
    reducers: {
        setInvoiceData: (state, action) => {
            const { invoices, products, customers, totalAmount } = action.payload;
            
            // Update invoices
            state.invoices = invoices || [];
            
            // Update products - merge or add new products
            const existingProducts = [...state.products];
            products.forEach(newProduct => {
                const existingIndex = existingProducts.findIndex(
                    p => p.name === newProduct.name
                );
                if (existingIndex !== -1) {
                    // Merge existing product with new data
                    existingProducts[existingIndex] = {
                        ...existingProducts[existingIndex],
                        ...newProduct
                    };
                } else {
                    existingProducts.push(newProduct);
                }
            });
            state.products = existingProducts;
            
            // Update customers - merge or add new customers
            const existingCustomers = [...state.customers];
            customers.forEach(newCustomer => {
                const existingIndex = existingCustomers.findIndex(
                    c => c.name === newCustomer.name
                );
                if (existingIndex !== -1) {
                    // Merge existing customer with new data
                    existingCustomers[existingIndex] = {
                        ...existingCustomers[existingIndex],
                        ...newCustomer
                    };
                } else {
                    existingCustomers.push(newCustomer);
                }
            });
            state.customers = existingCustomers;
            
            // Update total amount
            state.totalAmount += totalAmount || 0;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        resetData: (state) => {
            state.invoices = [];
            state.products = [];
            state.customers = [];
            state.totalAmount = 0;
            state.error = null;
        }
    }
});

export const { 
    setInvoiceData, 
    setError, 
    setLoading, 
    resetData 
} = dataSlice.actions;

export default dataSlice.reducer;