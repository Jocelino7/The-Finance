import { CategoryTypeEnum, Fields, TransactionType } from "../../../../utils/enum"

export type Transaction = {
    uuid:string,
    user:User,
    transactionDate:TransactionDate,
    transactionType:TransactionType,
    sourceFund:SourceFundType,
    category:CategoryType,
    amount:number,
    week:number
    createdAt:Date,
    updatedAt?:Date
}
export type SourceFundType ={
    uuid:string,
    user?:User,
    name:string,
    icon:string,
    createdAt?:Date,
    updatedAt?:Date,
    goal?:GoalType
}
export type CategoryType = {
    uuid:string,
    type:CategoryTypeEnum,
    user?:User,
    name:string,
    icon:string,
    color:string
}
export type GoalType = {
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
export type DateType = {
    day:number,
    month:number,
    year:number
}
export type DateProvider = {
    currentDay:number,
    currentMonth:number,
    currentYear:number
}