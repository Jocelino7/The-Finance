import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colorScheme } from "../../../../utils/color";
type DropDownButtonProps = {
    leftIcon: string,
    rightIcon: string,
    text?: string,
    placeholder?: string
}
function DropDownButton({ props }: { props: DropDownButtonProps }) {
    const iconSize = 30
    return (
        <View style={style.dropdownButton}>
            <Icon name={props.leftIcon} size={iconSize} color={colorScheme.main} />
            <Text>{props.text ? props.text : props.placeholder && props.placeholder}</Text>
        </View>

    );
}
const style = StyleSheet.create({
    dropdownButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    }
})

export default DropDownButton;