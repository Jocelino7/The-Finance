import { Pressable, StyleSheet, View } from "react-native";
import { colorScheme } from "../../../../utils/color";
import CostumeTextField from "../../components/TextField.tsx/CostumeTextField";
import localStrings from "../../../../utils/localization";
import Button from "../../components/buttons/Button";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Divider } from "react-native-paper";


function Transfer() {
    return (
        <View style={style.main}>
            <CostumeTextField props={{
                text: "",
                leadingIcon: "",
                trailingIcon: "",
                placeholder: "0",
                label: "",
                outlinedColor: "",
                mode: "outlined",
                editable: undefined,
                fontSize: 25,
                textColor: colorScheme.main,
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
                label: localStrings.from,
                outlinedColor: "",
                mode: undefined,
                editable: false,
                onChange: function (value: string): void {
                    throw new Error("Function not implemented.");
                },
                onPress: () => { }
            }} />

            <CostumeTextField props={{
                text: "",
                leadingIcon: "account-balance",
                trailingIcon: "chevron-right",
                placeholder: "",
                label: localStrings.to,
                outlinedColor: "",
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
        gap: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colorScheme.bg

    }
})

export default Transfer;