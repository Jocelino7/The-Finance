import { Fields, TransactionType } from "../../../../utils/enum"

export type Transaction = {
    uuid:string,
    user:User,
    transactionDate:TransactionDate,
    transactionType:TransactionType,
    sourceFund:SourceFund,
    icon:string
    amount:number,
    createdAt:Date,
    updatedAt?:Date
}
export type SourceFund ={
    uuid:string,
    user:User,
    name:string,
    color:string,
    createdAt:Date,
    updatedAt?:Date,
    goal?:Goal
}
export type Category = {
    uuid:string,
    user?:User,
    name:string,
    icon:string,
    color:string
}
export type Goal = {
    uuid:string,
    user:User,
    name:string,
    description:string,
    finalBalance:number,
    createdAt?:Date
}
export type User = {
    uuid:string,
    email:string,
    firstName:string,
    lastName:string,
    phoroUrl:string
}
export type UserCredential={
    email:string,
    firstName?:string,
    lastName?:string,
    password:string,
    repeatPassword?:string
}
export type TransactionDate ={
    month:number,
    day:number,
    year:number
}
export type Validation = {
    errorMessage:string,
    field:Fields
}