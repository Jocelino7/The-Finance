import { StyleSheet, View } from "react-native";
import CostumeTextField from "../../components/TextField.tsx/CostumeTextField";
import Button from "../../components/buttons/Button";
import localStrings from "../../../../utils/localization";
import { colorScheme } from "../../../../utils/color";
import SelectDropdown from "react-native-select-dropdown";
import globaStyle, { iconSize } from "../../style/global";
import Icon from "react-native-vector-icons/MaterialIcons";
import DropDownButton from "../../components/buttons/DropdownButton";
import SelectIconRow from "../../components/others/SelectIconRow";

function Spends() {
    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    return (
        <View style={style.main}>
            <CostumeTextField props={{
                text: "",
                leadingIcon: "",
                trailingIcon: "",
                placeholder: "0",
                label: "",
                mode: "outlined",
                editable: undefined,
                fontSize: 25,
                textColor: colorScheme.main,
                onChange: function (value: string): void {
                    throw new Error("Function not implemented.");
                },
                onPress: () => { }
            }} />

            <SelectDropdown
                dropdownOverlayColor="transparent"
                buttonStyle={globaStyle.selectPicker}
                data={countries}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
                renderDropdownIcon={() => <Icon name="keyboard-arrow-down" size={30} />}
                search={true}
                renderCustomizedRowChild={(item, index) => <SelectIconRow props={{
                    icon: "email",
                    text: item
                }}


                />}
                renderCustomizedButtonChild={(item, index) => <DropDownButton props={{
                    leftIcon: "account-balance",
                    rightIcon: "email",
                    text: item,
                    placeholder:localStrings.placeholder.sourcePlacehoder
                }} />}
                renderSearchInputLeftIcon={() => <Icon name="search" size={iconSize} />}
            />

            <SelectDropdown
                dropdownOverlayColor="transparent"
                buttonStyle={globaStyle.selectPicker}
                data={countries}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
                renderDropdownIcon={() => <Icon name="keyboard-arrow-down" size={30} />}
                search={true}
                renderCustomizedRowChild={(item, index) => <SelectIconRow props={{
                    icon: "email",
                    text: item
                }}


                />}
                renderCustomizedButtonChild={(item, index) => <DropDownButton props={{
                    leftIcon: "",
                    rightIcon: "email",
                    text: item,
                    placeholder:localStrings.placeholder.categoryPlaceholder
                }} />}
                renderSearchInputLeftIcon={() => <Icon name="search" size={iconSize} />}
            />

            <CostumeTextField props={{
                text: "",
                leadingIcon: "calendar-month",
                trailingIcon: "",
                placeholder: "",
                label: localStrings.date,
                mode: undefined,
                editable: undefined,
                onChange: function (value: string): void {
                    throw new Error("Function not implemented.");
                },
                onPress: () => { }
            }} />
            <CostumeTextField props={{
                text: "",
                leadingIcon: "schedule",
                trailingIcon: "",
                placeholder: "",
                label: localStrings.time,
                mode: undefined,
                editable: undefined,
                onChange: function (value: string): void {
                    throw new Error("Function not implemented.");
                },
                onPress: () => { }
            }} />
            <CostumeTextField props={{
                text: "",
                leadingIcon: "info",
                trailingIcon: "",
                placeholder: "",
                label: localStrings.description,
                mode: undefined,
                editable: undefined,
                onChange: function (value: string): void {
                    throw new Error("Function not implemented.");
                },
                onPress: () => { }
            }} />
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

export default Spends;