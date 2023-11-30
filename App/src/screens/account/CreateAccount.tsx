import { StyleSheet, View } from "react-native";
import { Divider, Text } from "react-native-paper";
import CostumeTextField from "../../components/TextField.tsx/CostumeTextField";
import localStrings from "../../../../utils/localization";
import Button from "../../components/buttons/Button";
import { colorScheme } from "../../../../utils/color";

function CreateAccount() {
    return ( 
        <View style={style.main}>
        <View style={{width:"100%",gap:10}}>
            <Text variant="headlineLarge">
                {localStrings.createGoal}
            </Text>
            <Divider />
        </View>

        <CostumeTextField props={{
            text: "",
            placeholder: "name",
            outlinedColor: "",
            editable: undefined,
            onPress: () => { },
            onChange: function (value: string): void {
                throw new Error("Function not implemented.");
            }
        }} />

        <CostumeTextField props={{
            text: "",
            leadingIcon: "info",
            trailingIcon: "",
            placeholder: localStrings.name,
            label: localStrings.name,
            outlinedColor: "",
            editable: undefined,
            onPress: () => { },
            onChange: function (value: string): void {
                throw new Error("Function not implemented.");
            }
        }} />

        <Button text={localStrings.submit} onPress={() => { }} />
        
    </View>
);
}
const style = StyleSheet.create({
main: {
    flex: 1,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorScheme.bg,
    paddingHorizontal: 10

}
})
     

export default CreateAccount;