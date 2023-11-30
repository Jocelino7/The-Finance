import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import localStrings from "../../../../../utils/localization";
import CostumeTextField from "../../../components/TextField.tsx/CostumeTextField";
import Button from "../../../components/buttons/Button";
import { colorScheme } from "../../../../../utils/color";

function Login() {
    return (
        <View style={style.main}>
            <Text variant="headlineLarge">
                {localStrings.login}
            </Text>
          
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
         
            <Button text={localStrings.submit} onPress={() => { }} />
            <Text>{localStrings.dontHaveAnAccount} <Text style={{color:colorScheme.main}}>{localStrings.signup}</Text></Text>

        </View>
    );
}
const style = StyleSheet.create({
    main:{
        flex:1,
        gap:20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colorScheme.bg,
        paddingHorizontal:10

    }
})

export default Login;