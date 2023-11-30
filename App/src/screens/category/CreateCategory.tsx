import { ScrollView, StyleSheet, View } from "react-native";
import { colorScheme } from "../../../../utils/color";
import localStrings from "../../../../utils/localization";
import CostumeTextField from "../../components/TextField.tsx/CostumeTextField";
import { Text } from "react-native-paper";
import Button from "../../components/buttons/Button";
import MyColorPickerComponent from "../../components/others/ColorPicker";
import { useState } from "react";
import DividerTitle from "../../components/others/DividerTitle";

function CreateCategory() {
    const [currentColor, setCurrentColor] = useState("#000")
    return (
        <ScrollView style={{ flex: 1, padding: 10 }} >
            <View style={style.main}>
                <DividerTitle text={localStrings.category} />
                <CostumeTextField props={{
                    text: "",
                    placeholder: "0",
                    outlinedColor: "",
                    editable: true,
                    mode: "outlined",
                    onPress: () => { },
                    onChange: function (value: string): void {
                        throw new Error("Function not implemented.");
                    }
                }} />
                <CostumeTextField props={{
                    text: "",
                    placeholder: "Icone",
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
                <CostumeTextField props={{
                    text: "",
                    placeholder: localStrings.description,
                    outlinedColor: "",
                    editable: undefined,
                    mode: "outlined",
                    multiline: true,
                    onPress: () => { },
                    onChange: function (value: string): void {
                        throw new Error("Function not implemented.");
                    }
                }} />

                <View style={style.colorPreviewContainer}>
                    <Text variant="titleMedium">
                        {localStrings.selectColor}
                    </Text>
                    <View style={{ ...style.colorPreview, backgroundColor: currentColor }}>

                    </View>

                </View>

                <MyColorPickerComponent props={{
                    currentColor: "#000",
                    setCurrentColor: setCurrentColor
                }} />

                <Button text={localStrings.submit} onPress={() => { }} />

            </View>

        </ScrollView>
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
    },
    colorPreview: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    colorPreviewContainer: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        width: "100%"
    }
})

export default CreateCategory;