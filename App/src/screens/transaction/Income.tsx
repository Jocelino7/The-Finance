import { Alert, StyleSheet, View } from "react-native";
import CostumeTextField from "../../components/TextField.tsx/CostumeTextField";
import Button from "../../components/buttons/Button";
import localStrings from "../../../../utils/localization";
import { colorScheme } from "../../../../utils/color";
import useTransactionStore from "./transactionStore/transactionStore";

function Income() {
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
                fontSize:25,
                textColor:colorScheme.main,
                error:true,
                errorMessage:"Error Message",
                onChange: function (value: string): void {
                    throw new Error("Function not implemented.");
                },
                onPress: () => {store.setKeyboardVisibility(!store.showKeyboard)},
            }} 
        
             />

            <CostumeTextField props={{
                text: "",
                leadingIcon: "account-balance",
                trailingIcon: "",
                placeholder: "",
                label: localStrings.source,
                mode: undefined,
                editable: false,
                onChange: function (value: string): void {
                    throw new Error("Function not implemented.");
                },
                onPress: () => { }
            }} />

            <CostumeTextField props={{
                text: "",
                leadingIcon: "label",
                trailingIcon: "chevron-right",
                placeholder: "",
                label: localStrings.category,
                mode: undefined,
                editable: undefined,
                onChange: function (value: string): void {
                    throw new Error("Function not implemented.");
                },
                onPress: () => { }
            }} />

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
            <Button text={localStrings.submit} onPress={() => { }} />
        
        </View>
    );
}
const style = StyleSheet.create({
    iconButton: {
        width: 50,
        height: 50,
        padding: 10,
        backgroundColor:colorScheme.main,
        borderRadius:50
    },
    main: {
        flex: 1, 
        gap: 15,
        alignItems:"center" ,
        justifyContent:"center",
        backgroundColor:colorScheme.bg

    }
})

export default Income;