
import { Pressable, StyleSheet, Text } from "react-native";
import { colorScheme } from "../../../../utils/color";

function Button({
    text, onPress
}: {
    text: string, onPress: Function
}) {
    return (
        <Pressable onPress={() => onPress()} style={style.button} android_ripple={{ color: "#ccc" }}>
            <Text className="text-white font-bold">
                {text}
            </Text>
        </Pressable>
    );
}
const style = StyleSheet.create({
    button: {
        width: 200,
        backgroundColor: colorScheme.main,
        borderRadius: 20,
        padding: 15,
         justifyContent: "center",
        alignItems: "center"
    }
})

export default Button;