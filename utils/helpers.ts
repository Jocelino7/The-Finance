import LocalizedStrings from "react-native-localization"
import localStrings, { LocalString } from "./localization"


function convertIntToMonth(month:number):string{
    //if is not int
    if(month.toString().length>1)
        throw new Error(`Expected int but received ${month}`)
    if(month<0)
        throw new Error(`Ilegall argument expect positive number`)
    if(month>12)
        throw new Error("Illegal argument, expected number between 1-12")
    const strings = localStrings.month
    const months = [strings.jan,strings.feb,strings.mar,strings.apr,strings.ma,strings.jun,strings.jul,strings.aug,strings.sept,strings.oct,strings.nov,strings.dec]
    return months[month-1]
}
