import { useState, useCallback, useEffect } from 'react';
import { api } from '../lib/axios';
import { Transaction } from '../types/transaction';

export function useFetchTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    });
    setTransactions(response.data);
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return {
    transactions,
    fetchTransactions,
    setTransactions
  };
}
