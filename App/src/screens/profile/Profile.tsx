import { Image, StyleSheet, View } from "react-native";
import CostumeTextField from "../../components/TextField.tsx/CostumeTextField";
import Button from "../../components/buttons/Button";
import { Divider, Text } from "react-native-paper";

function Profile() {
    return (
        <View style={style.main}>
            <Text variant="titleLarge">
                Profile
            </Text>
            <Divider />
            <View style={style.body} >
                <Image source={{ uri: "https://via.placeholder.com/600/92c952" }} width={100} height={100} style={{ borderRadius: 80 }} />
                <CostumeTextField props={{
                    text: "",
                    leadingIcon: "person",
                    trailingIcon: undefined,
                    placeholder: "First Name",
                    label: undefined,
                    outlinedColor: undefined,
                    multiline: undefined,
                    mode: undefined,
                    editable: undefined,
                    fontSize: undefined,
                    textColor: undefined,
                    onChange: function (value: string): void {
                        throw new Error("Function not implemented.");
                    },
                    onPress: () => { }
                }} />
                <CostumeTextField props={{
                    text: "",
                    leadingIcon: "Last Name",
                    trailingIcon: undefined,
                    placeholder: "First Name",
                    label: undefined,
                    outlinedColor: undefined,
                    multiline: undefined,
                    mode: undefined,
                    editable: undefined,
                    fontSize: undefined,
                    textColor: undefined,
                    onChange: function (value: string): void {
                        throw new Error("Function not implemented.");
                    },
                    onPress: () => { }
                }} />
                <CostumeTextField props={{
                    text: "",
                    leadingIcon: "email",
                    trailingIcon: undefined,
                    placeholder: "name",
                    label: undefined,
                    outlinedColor: undefined,
                    multiline: undefined,
                    mode: undefined,
                    editable: undefined,
                    fontSize: undefined,
                    textColor: undefined,
                    onChange: function (value: string): void {
                        throw new Error("Function not implemented.");
                    },
                    onPress: () => { }
                }} />
                <Button text={"Alterar"} onPress={() => { }} />

            </View>


        </View>
    );
}
const style = StyleSheet.create({
    main: {
        flex: 1,
        gap: 20,
        padding: 10,
    },
    body:{
        gap:20,
        justifyContent:"center",
        alignItems:"center",
        flex:1

    }
})

export default Profile;