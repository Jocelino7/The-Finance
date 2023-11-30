import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import localStrings from "../../../../../utils/localization";
import CostumeTextField from "../../../components/TextField.tsx/CostumeTextField";
import Button from "../../../components/buttons/Button";
import { colorScheme } from "../../../../../utils/color";

function Signup() {
    return (
        <View style={style.main}>
            <Text variant="headlineLarge">
                {localStrings.signup}
            </Text>
            <CostumeTextField props={{
                text: "",
                leadingIcon: "person",
                trailingIcon: "",
                placeholder: localStrings.firstName,
                label: localStrings.firstName,
                outlinedColor: "",
                editable:undefined,
                onPress:()=>{},
                onChange: function (value: string): void {
                    throw new Error("Function not implemented.");
                }
            }} />
            <CostumeTextField props={{
                text: "",
                leadingIcon: "person",
                trailingIcon: "",
                placeholder: localStrings.lastName,
                label: localStrings.lastName,
                outlinedColor: "",
                editable:undefined,
                onPress:()=>{},
                onChange: function (value: string): void {
                    throw new Error("Function not implemented.");
                }
            }} />
            <CostumeTextField props={{
                text: "",
                leadingIcon: "email",
                trailingIcon: "",
                placeholder: localStrings.email,
                label: localStrings.email,
                outlinedColor: "",
                editable:undefined,
                onPress:()=>{},
                onChange: function (value: string): void {
                    throw new Error("Function not implemented.");
                }
            }} />
            <CostumeTextField props={{
                text: "",
                leadingIcon: "lock",
                trailingIcon: "",
                placeholder: localStrings.password,
                label: localStrings.password,
                outlinedColor: "",
                editable:undefined,
                onPress:()=>{},
                onChange: function (value: string): void {
                    throw new Error("Function not implemented.");
                }
            }} />
            <CostumeTextField props={{
                text: "",
                leadingIcon: "lock",
                trailingIcon: "",
                placeholder: localStrings.repearPassword,
                label: localStrings.repearPassword,
                outlinedColor: "",
                editable:undefined,
                onPress:()=>{},
                onChange: function (value: string): void {
                    throw new Error("Function not implemented.");
                }
            }} />
            <Button text={localStrings.submit} onPress={() => { }} />
            <Text>{localStrings.haveAnAccount} <Text style={{color:colorScheme.main}}>{localStrings.login}</Text></Text>

        </View>
    );
}
const style = StyleSheet.create({
    main:{
        flex:1,
        gap:20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colorScheme.bg

    }
})

export default Signup;