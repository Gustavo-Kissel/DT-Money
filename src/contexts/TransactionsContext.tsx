import {ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios';

interface Transaction {
    id: number;
    description: string;
    price: number;
    type: "income" | "outcome";
    category: string;
    createdAt: string;
}

interface TransactionContextType {
    transactions: Transaction[]
    fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);


export function TransactionsProvider({children}:TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

async function fetchTransactions(query?: string) {
    const response = api.get('transactions', {params: {q: query}})
        const data = await response;
        setTransactions(data);
}
useEffect(() => {
    fetchTransactions();
}, []);

    
    return (
    <TransactionsContext.Provider 
    value={{ transactions,
    fetchTransactions }}>
        {children}
    </TransactionsContext.Provider>
    )
        
}
