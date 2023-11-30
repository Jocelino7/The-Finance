import { StyleSheet, View } from "react-native";
import CostumeTextField from "../../components/TextField.tsx/CostumeTextField";
import Button from "../../components/buttons/Button";
import localStrings from "../../../../utils/localization";
import { colorScheme } from "../../../../utils/color";

function Spends() {
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
                fontSize:25,
                textColor:colorScheme.main,
                onChange: function (value: string): void {
                    throw new Error("Function not implemented.");
                },
                onPress: () => { }
            }} />

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
        backgroundColor:colorScheme.main,
        borderRadius:50
    },
    main: {
        flex: 1, 
        gap: 25,
        alignItems:"center" ,
        justifyContent:"center",
        backgroundColor:colorScheme.bg

    }
})

export default Spends;