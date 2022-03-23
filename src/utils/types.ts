import { ReactNode } from "react";

export interface GetTransaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}


export interface TransactionProviderProps {
  children: ReactNode;
}

export interface ModalProps {
  isOpen: boolean;
  onHandleCloseModal: () => void;
}

export interface HeaderProps {
  onHandleOpenModal: () => void;
}

//pega todos e tira alguns
export type CreateTransaction = Omit <GetTransaction, 'id' | 'createdAt'>

//faz a mesma coisa mais permite que voce escolha quais itens
// export type CreateTransaction = Pick <GetTransaction, 'title' | 'amount' | 'type' | 'category'>

export interface TransactionContextData {
  transactions: GetTransaction[];
  createTransaction: (transaction: CreateTransaction) => Promise <void>;
}
