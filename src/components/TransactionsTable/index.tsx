import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

    interface {
        id: number;
        title: string;
        amount: number;
        type: string;
        category: string;
        createdAt: string;
    }   

export function TransactionsTable(){
    const [transactions, setTransactions] = useState([])
  
    useEffect(()=>{
        api.get('/transactions')
        .then(response => setTransactions(response.data))
    }, []);

    return (
      <Container>
        <table>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr>
                <td>{transaction.title}</td>
                <td className="deposit">{transaction.amount}</td>
                <td>{transaction.value}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    );
}