import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useState } from "react";

export function useDatePicker() {
    const [time, setTime] = useState<string|undefined>(new Date(0).toLocaleDateString())
    const [date, setDate] = useState<string|undefined>(new Date(0).toLocaleTimeString())
    const [showDatePicker,setShowDatePicker] = useState(false)
    const [showTimePicker,setShowTimePicker] = useState(false)
    const setCalendarDate = (event: DateTimePickerEvent, date: Date|undefined) => {
        setDate(date?.toLocaleString)
        setShowDatePicker(false)
    };
    const setCalendarTime =(event: DateTimePickerEvent, date: Date|undefined) => {
        setTime(date?.getTime.toString())
        setShowTimePicker(false)
    };
    const setTimePicker = (state:boolean)=>{
        setShowTimePicker(state)
    }
    const setDatePicker =(state:boolean) =>{
        setShowDatePicker(state)
    }
    return {
        time,
        date,
        showDatePicker,
        showTimePicker,
        setCalendarDate,
        setCalendarTime,
        setDatePicker,
        setTimePicker
    }

}