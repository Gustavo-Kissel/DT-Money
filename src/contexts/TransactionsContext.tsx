import {ReactNode, createContext, useEffect, useState } from 'react'

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
    const url = new URL("http://localhost:3333/transactions")
    if(query){
        url.searchParams.append('q', query)
    }
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTransactions(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
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
