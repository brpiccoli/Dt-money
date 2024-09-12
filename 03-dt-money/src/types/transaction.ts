import { ReactNode } from "react";

export type TransactionAccumulator = {
    income: number;
    outcome: number;
    total: number;
}

export interface Transaction {
    id: number
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    createdAt: string
}

export interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

export interface TransactionContextType {
    transactions: Transaction[]
    fetchTransactions: (query?: string) => Promise<void>
    createTransaction: (data: CreateTransactionInput) => Promise<void>
}

export interface TransactionsProviderProps {
    children: ReactNode
}

export interface CreateTransactionInput {
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome';
  }