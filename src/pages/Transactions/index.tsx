import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionContainer, TransactionsTable } from "./styles";

interface Transaction {
    id: number;
    description: string;
    price: number;
    type: "income" | "outcome";
    category: string;
    createdAt: string;
}

export function Transactions() {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function loadTransactions() {
    try {
        const response = await fetch("http://localhost:3333/transactions");
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
        loadTransactions();
        console.log(transactions);
    }, []);

    return (
        <div>
            <Header />
            <Summary />

            <TransactionContainer>
                <SearchForm />
            <TransactionsTable>
                <tbody>
                    {transactions.map(transaction => {
                    return ( 
                    <tr key={transaction.id}>
                        <td width='50%'>{transaction.description}</td>
                        <td><PriceHighlight variant={transaction.type}>R$ {transaction.price}</PriceHighlight></td>
                        <td>{transaction.category}</td>
                        <td>{transaction.createdAt}</td>
                    </tr>)
                })}
                </tbody>
            </TransactionsTable>
            </TransactionContainer>
        </div>
    )
    
}