import { SourceFund } from "../../dtos/dtos"

export interface SoureFundRepository {
    getSourceFund(uuid:string):Promise<SourceFund>
    getSourceFunds(userUuid:string):Promise<SourceFund[]>
    deleteSourceFund(userUuid:string):Promise<boolean>
    addSourceFund(transaction:SourceFund):Promise<boolean>
    updateSourceFund(uuid:string,sourceFund:SourceFund):boolean
}