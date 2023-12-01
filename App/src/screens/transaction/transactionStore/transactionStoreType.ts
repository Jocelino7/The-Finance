import { CategoryType, DateType, SourceFundType, Validation } from "../../../model/dtos/dtos";
import { TransactionType } from "../../../../../utils/enum";
export type TransactionStoreType = {
    amount:string,
    source?:SourceFundType,
    category?:CategoryType,
    date?:DateType,
    time?:string,
    description:string,
    sender?:SourceFundType,
    beneficiary?:SourceFundType,
    validation?:Validation,
    showKeyboard:boolean,
    onAmountChange:(value:string)=>void,
    onDescriptionChange:(value:string)=>void
    setSource:(source:SourceFundType)=>void,
    setCategory:(category:CategoryType)=>void,
    setDate:(date:DateType)=>void,
    setTime:(time:string)=>void,
    setDescription:(description:string)=>void,
    setValidation:(Validation:Validation)=>void,
    addTransaction:(transaction:TransactionType)=>void,
    cleanAmount:()=>void,
    deleteAmount:()=>void,
    setKeyboardVisibility:(show:boolean)=>void
}