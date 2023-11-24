import { SourceFund, Transaction, User } from "../../dtos/dtos";
import { TransationRepository } from "./transactionRepository";

class TransactionRepositoryImpl implements TransationRepository {
    constructor(){

    }
    search(value: string, user: User): Promise<Transaction[]> {
        throw new Error("Method not implemented.");
    }
    getAllTransactionFromMonth(month: string): Promise<Transaction[]> {
        throw new Error("Method not implemented.");
    }
    getTransactionsFromSourceFund(sourceFund: SourceFund): Promise<Transaction[]> {
        throw new Error("Method not implemented.");
    }
    getTransaction(uuid: string): Promise<Transaction> {
        throw new Error("Method not implemented.");
    }
    getTransactions(userUuid: string): Promise<Transaction[]> {
        throw new Error("Method not implemented.");
    }
    deleteTransaction(userUuid: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    addTransaction(transaction: Transaction): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    updateTransaction(uuid: string, transaction: Transaction): boolean {
        throw new Error("Method not implemented.");
    }
}