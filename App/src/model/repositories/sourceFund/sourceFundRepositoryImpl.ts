import { SourceFund } from "../../dtos/dtos";
import { SourceFundRepository } from "./sourceFundRepository";

class SourceFundRepositoryImpl implements SourceFundRepository{
    
    getSourceFund(uuid: string): Promise<SourceFund> {
        throw new Error("Method not implemented.");
    }
    getSourceFunds(userUuid: string): Promise<SourceFund[]> {
        throw new Error("Method not implemented.");
    }
    deleteSourceFund(userUuid: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    addSourceFund(transaction: SourceFund): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    updateSourceFund(uuid: string, sourceFund: SourceFund): boolean {
        throw new Error("Method not implemented.");
    }

}