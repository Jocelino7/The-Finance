import LocalizedStrings from "react-native-localization"
import localStrings, { LocalString } from "./localization"
import { DateProvider, DateType } from "../App/src/model/dtos/dtos"
import { DateCalculation } from "./enum"


function convertIntToMonth(month: number): string {
    //if is not int
    if (month.toString().length > 1)
        throw new Error(`Expected int but received ${month}`)
    if (month < 0)
        throw new Error(`Ilegall argument expect positive number`)
    if (month > 12)
        throw new Error("Illegal argument, expected number between 1-12")
    const strings = localStrings.month
    const months = [strings.jan, strings.feb, strings.mar, strings.apr, strings.ma, strings.jun, strings.jul, strings.aug, strings.sept, strings.oct, strings.nov, strings.dec]
    return months[month - 1]
}
function calculateWeek(day: number) {
    if (!isInt(day))
        throw new Error("day argument should be integer")
    if (day >= 1 && day <= 7)
        return 1
    if (day >= 8 && day <= 14)
        return 2
    if (day >= 15 && day <= 21)
        return 3
    else return 4
}

function calculateDay(date: DateType): string | undefined {
    const currentData = new Date()
    const currentYear = currentData.getFullYear()
    const currentDay = currentData.getDay()
    const currentMonth = currentData.getMonth()
    if (date.day == currentDay && date.month == currentMonth && date.year == currentYear)
        return "Today"
    if ((currentDay - date.day == 1) && date.month == currentMonth && date.year == currentYear)
        return "Yesterday"
    else `${date.day}/${date.month}/${date.year}`
}

function isFutureDate(date: DateType): boolean {
    const currentData = new Date()
    const currentYear = currentData.getFullYear()
    const currentDay = currentData.getDay()
    const currentMonth = currentData.getMonth()

    if (date.year > currentYear)
        return true
    if (date.month > currentMonth)
        return true
    if (date.day > currentDay)
        return true
    return false
}
function provideDate() {
    const currentData = new Date()
    const currentYear = currentData.getFullYear()
    const currentDay = currentData.getDay()
    const currentMonth = currentData.getMonth()


}

function isInt(num: number) {
    const parseNum = num.toString()
    return parseNum.length == 0
}
