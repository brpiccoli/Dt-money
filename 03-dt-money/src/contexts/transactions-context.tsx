import { ReactNode } from 'react';
import { createContext } from 'use-context-selector';
import { CreateTransactionInput, Transaction } from '../types/transaction';
import { useCreateTransaction } from '../hooks/use-create-transaction';
import { useFetchTransactions } from '../hooks/use-fetch-transaction';

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const { transactions, setTransactions, fetchTransactions } = useFetchTransactions();
  const { createTransaction } = useCreateTransaction(setTransactions); 

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
