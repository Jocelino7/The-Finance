import { SourceFundType, Transaction, User } from "../../dtos/dtos";

export interface TransationRepository {
    getTransaction(uuid:string):Promise<Transaction>
    getTransactions(userUuid:string):Promise<Transaction[]>
    getTransactionsFromSourceFund(sourceFund:SourceFundType):Promise<Transaction[]>
    getAllTransactionFromMonth(month:string):Promise<Transaction[]>
    deleteTransaction(userUuid:string):Promise<boolean>
    addTransaction(transaction:Transaction):Promise<boolean>
    updateTransaction(uuid:string,transaction:Transaction):boolean,
    search(value:string,user:User):Promise<Transaction[]>
}