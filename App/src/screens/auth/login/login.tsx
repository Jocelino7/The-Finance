import { View } from "react-native";
import { Text } from "react-native-paper";
import localStrings from "../../../../../utils/localization";
import CostumeTextField from "../../../components/TextField.tsx/CostumeTextField";
import Button from "../../../components/Button";

function Login() {
    return (
        <View className="flex-1 gap-2 flex-col justify-center items-center">
            <Text variant="displayLarge">
                {localStrings.login}
            </Text>
            <CostumeTextField props={{
                text: "",
                leadingIcon: "person",
                trailingIcon: "",
                placeholder: localStrings.firstName,
                label: localStrings.firstName,
                outlinedColor: "",
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
                onChange: function (value: string): void {
                    throw new Error("Function not implemented.");
                }
            }} />
            <Button text={localStrings.submit} onPress={() => { }} />

        </View>
    );
}

export default Login;