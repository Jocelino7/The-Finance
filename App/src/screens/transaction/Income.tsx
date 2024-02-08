import { StyleSheet, View } from "react-native";
import CostumeTextField from "../../components/TextField.tsx/CostumeTextField";
import Button from "../../components/buttons/Button";
import localStrings from "../../../../utils/localization";
import { colorScheme } from "../../../../utils/color";
import useTransactionStore from "./transactionStore/transactionStore";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/MaterialIcons";
import globaStyle, { iconSize } from "../../style/global";
import SelectIconRow from "../../components/others/SelectIconRow";
import DropDownButton from "../../components/buttons/DropdownButton";
import { defaultCategories, defaultSourceFund } from "../../defaults/defaults";
import { useState } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useDatePicker } from "../../costumeHooks/useDatePicker";

function Income() {
    const categories = defaultCategories
    const sourceFunds = defaultSourceFund
    const { time, setCalendarDate,setCalendarTime, setDatePicker, setTimePicker, showDatePicker, showTimePicker, date } = useDatePicker()
    const [selectedCategoryText, setSelectedCategoryText] = useState<string | undefined>()
    const [selectedSourceFund, setSelectedSourceFund] = useState<string | undefined>()

    const store = useTransactionStore()
    return (
        <View style={style.main}>
            <CostumeTextField props={{
                text: store.amount,
                leadingIcon: "",
                trailingIcon: "",
                placeholder: "0",
                label: "",
                mode: "outlined",
                editable: false,
                fontSize: 25,
                textColor: colorScheme.main,
                error: true,
                errorMessage: "Error Message",
                onChange: function (value: string): void {
                    throw new Error("Function not implemented.");
                },
                onPress: () => { store.setKeyboardVisibility(!store.showKeyboard) },
            }}

            />
            {/*sourceFund select-picker*/}
            <SelectDropdown
                dropdownOverlayColor="transparent"
                buttonStyle={globaStyle.selectPicker}
                data={sourceFunds}
                onSelect={(selectedItem, index) => {
                    setSelectedSourceFund(sourceFunds[index].name)

                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem.name
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item.name
                }}
                renderDropdownIcon={() => <Icon name="keyboard-arrow-down" size={30} />}
                search={true}
                renderCustomizedRowChild={(item, index) => <SelectIconRow props={{
                    icon: sourceFunds[index].icon,
                    text: sourceFunds[index].name,
                    color: colorScheme.main
                }}
                />}
                renderCustomizedButtonChild={() => <DropDownButton props={{
                    leftIcon: "account-balance",
                    rightIcon: "email",
                    text: selectedSourceFund,
                    placeholder: localStrings.placeholder.sourcePlacehoder
                }}
                />}
                renderSearchInputLeftIcon={() => <Icon name="search" size={iconSize} />}
            />
            {/*category select-picker*/}
            <SelectDropdown
                dropdownOverlayColor="transparent"
                buttonStyle={globaStyle.selectPicker}
                data={categories}
                onSelect={(selectedItem, index) => {
                    console.log("called")
                    console.log(categories[index].name)
                    setSelectedCategoryText(categories[index].name)

                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem.name
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item.name
                }}
                renderDropdownIcon={() => <Icon name="keyboard-arrow-down" size={30} />}
                search={true}
                renderCustomizedRowChild={(item, index) => <SelectIconRow props={{
                    icon: categories[index].icon,
                    text: categories[index].name,
                    color: categories[index].color
                }}


                />}
                renderCustomizedButtonChild={() => <DropDownButton props={{
                    leftIcon: "category",
                    rightIcon: "email",
                    text: selectedCategoryText,
                    placeholder: localStrings.placeholder.categoryPlaceholder
                }} />}
                renderSearchInputLeftIcon={() => <Icon name="search" size={iconSize} />}
            />



            <CostumeTextField props={{
                text: time,
                leadingIcon: "calendar-month",
                trailingIcon: "",
                placeholder: "",
                label: localStrings.date,
                mode: undefined,
                editable: false,
                onChange: function (value: string): void {
                    throw new Error("Function not implemented.");
                },
                onPress: () => { setDatePicker(true) }
            }} />
            <CostumeTextField props={{
                text: date,
                leadingIcon: "schedule",
                trailingIcon: "",
                placeholder: "",
                mode: undefined,
                editable: false,
                onChange: function (value: string): void {
                    throw new Error("Function not implemented.");
                },
                onPress: () => { setTimePicker(true) }
            }} />

            <CostumeTextField props={{
                text: store.description,
                leadingIcon: "info",
                trailingIcon: "",
                placeholder: "",
                label: localStrings.description,
                mode: undefined,
                editable: undefined,
                onChange: store.onDescriptionChange,
                onPress: () => { }
            }} />
            {showDatePicker && <RNDateTimePicker mode="date" minimumDate={new Date(2022, 5, 5)} value={new Date()} onChange={setCalendarDate} />}
            {showTimePicker && <RNDateTimePicker mode="time" minimumDate={new Date(2022, 5, 5)} value={new Date()} onChange={setCalendarTime} />}
            <Button text={localStrings.submit} onPress={() => { }} />

        </View>
    );
}
const style = StyleSheet.create({
    iconButton: {
        width: 50,
        height: 50,
        padding: 10,
        backgroundColor: colorScheme.main,
        borderRadius: 50
    },
    main: {
        flex: 1,
        gap: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colorScheme.bg

    }
})

export default Income;