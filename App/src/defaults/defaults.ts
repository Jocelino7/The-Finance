import { CategoryTypeEnum } from "../../../utils/enum";
import localStrings from "../../../utils/localization";
import SourceFund from "../components/card/SourceFundCard";
import { CategoryType, SourceFundType } from "../model/dtos/dtos";

const 
defaultCategories:CategoryType[] = [
    {
        uuid:"food",
        type:CategoryTypeEnum.Spends,
        name:localStrings.defaultCategories.food,
        icon:"fastfood",
        color:"#FF0000"
    },
    {
        uuid:"trip",
        type:CategoryTypeEnum.Spends,
        name:localStrings.defaultCategories.trip,
        icon:"flight",
        color:"#FFFF00"
    },
    {
        uuid:"business",
        type:CategoryTypeEnum.Incomes,
        name:localStrings.defaultCategories.business,
        icon:"payments",
        color:"#008000"
    },
    {
        uuid:"leisure",
        type:CategoryTypeEnum.Spends,
        name:localStrings.defaultCategories.leisure,
        icon:"surfing",
        color:"#0000FF"
    },
    {
        uuid:"wage",
        type:CategoryTypeEnum.Incomes,
        name:localStrings.defaultCategories.wage,
        icon:"paid",
        color:"#800080"
    },
    {
        uuid:"shopping",
        type:CategoryTypeEnum.Spends,
        name:localStrings.defaultCategories.shopping,
        icon:"shopping-bag",
        color:"#FFC0CB"
    },
    {
        uuid:"taxes",
        type:CategoryTypeEnum.Spends,
        name:localStrings.defaultCategories.taxes,
        icon:"attach-money",
        color:"#FFA500"
    },
    {
        uuid:"transport",
        type:CategoryTypeEnum.Spends,
        name:localStrings.defaultCategories.transport,
        icon:"train",
        color:"#A52A2A"
    },
    {
        uuid:"health-care",
        type:CategoryTypeEnum.Spends,
        name:localStrings.defaultCategories.healthCare,
        icon:"health-and-safety",
        color:"#023020"
    },
  
    {
        uuid:"education",
        type:CategoryTypeEnum.Incomes,
        name:localStrings.defaultCategories.education,
        icon:"school",
        color:"#CCCC00"
    },
    {
        uuid:"loan",
        type:CategoryTypeEnum.Incomes,
        name:localStrings.defaultCategories.loan,
        icon:"real-estate-agent",
        color:"#990000"
    },
    
    {
        uuid:"charity",
        type:CategoryTypeEnum.Spends,
        name:localStrings.defaultCategories.charity,
        icon:"favorite",
        color:"#004000"
    },
    {
        uuid:"pension",
        type:CategoryTypeEnum.Spends,
        name:localStrings.defaultCategories.pension,
        icon:"payments",
        color:"#000066"
    },
    {
        uuid:"personal-cares",
        type:CategoryTypeEnum.Spends,
        name:localStrings.defaultCategories.personalCares,
        icon:"self-care",
        color:"#4B0082"
    },
    {
        uuid:"rent",
        type:CategoryTypeEnum.Spends,
        name:localStrings.defaultCategories.rent,
        icon:"bedroom-parent",
        color:"#A52A2A"
    },
    {
        uuid:"debts",
        type:CategoryTypeEnum.Spends,
        name:localStrings.defaultCategories.debts,
        icon:"remove",
        color:"#990000"
    },
    {
        uuid:"sales",
        type:CategoryTypeEnum.Incomes,
        name:localStrings.defaultCategories.sales,
        icon:"sell",
        color:"#004000"
    },
    {
        uuid:"insurance",
        type:CategoryTypeEnum.Spends,
        name:localStrings.defaultCategories.insurance,
        icon:"security",
        color:"#FF8C00"
    },

]
const defaultSourceFund:SourceFundType[]=[
    {
        uuid:"wallet",
        name:localStrings.wallet,
        icon:"wallet"
        
    }

]
export {defaultCategories,defaultSourceFund}