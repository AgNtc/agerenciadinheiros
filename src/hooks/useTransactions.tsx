import { createContext, useContext, useEffect, useState} from 'react';
import { api } from '../services/api'; 
import { CreateTransaction, GetTransaction, TransactionContextData, TransactionProviderProps } from '../utils/types'


export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider({children}: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<GetTransaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);
  

  async function createTransaction(Createtransaction: CreateTransaction) {
    const response = await api.post("/transactions", {
      ...Createtransaction,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }    

  return (
    <TransactionsContext.Provider
      value={{ transactions, createTransaction}}
    >
        {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions (){
  const context = useContext(TransactionsContext);

  return context
}