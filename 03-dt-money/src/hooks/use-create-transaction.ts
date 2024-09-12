import { useCallback } from 'react';
import { api } from '../lib/axios';
import { CreateTransactionInput, Transaction } from '../types/transaction';

export function useCreateTransaction(setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>) {
  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, price, category, type } = data;

      const response = await api.post('transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      });

      setTransactions((prevTransactions) => [response.data, ...prevTransactions]);
    },
    [setTransactions],
  );

  return {
    createTransaction,
  };
}
