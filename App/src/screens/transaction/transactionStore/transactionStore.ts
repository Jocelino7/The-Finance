import { create } from "zustand";
import { TransactionStoreType } from "./transactionStoreType";
import { CategoryType, DateType, SourceFundType, Validation } from "../../../model/dtos/dtos";
import { TransactionType } from "../../../../../utils/enum";

const useTransactionStore = create<TransactionStoreType>((set,get)=>({
    amount:"",
    category:undefined,
    date:undefined,
    time:undefined,
    description:"",
    validation:undefined,
    source:undefined,
    sender:undefined,
    beneficiary:undefined,
    showKeyboard:true,
    setCategory:(Category:CategoryType)=>{

    },
    setDescription:(description:string)=>{

    },
    setSource:(source:SourceFundType)=>{

    },
    setDate:(date:DateType)=>{

    },
    setTime:(time:string)=>{

    },
    setValidation:(validation:Validation)=>{

    },
    addTransaction:(transaction:TransactionType)=>{

    },
    onAmountChange:(value:string)=> {
        const oldAmount = get().amount
        set({amount:oldAmount+value})
    },
    onDescriptionChange:(value:string)=>{
        set({description:value})

    },
    cleanAmount:()=>{
        set({amount:""})

    },
    deleteAmount:()=>{
        const amount = get().amount
        if(amount.length==0)
            return
        set({amount:amount.substring(0,amount.length-1)})
    },
    setKeyboardVisibility:(show:boolean)=>{
        set({showKeyboard:show})
    }


}))
export default useTransactionStore