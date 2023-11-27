import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TextInput } from 'react-native-paper';
type TextFieldProps = {
    text: string,
    leadingIcon: string,
    trailingIcon: string,
    placeholder: string,
    label: string,
    outlinedColor: string
    onChange: (value: string) => void
}
function CostumeTextField({ props }: { props: TextFieldProps }) {
    return (

        <TextInput
            className="w-full"
            value={props.text} onChange={(value) => { props.onChange("") }}
            label={props.label} mode="outlined"
            placeholder={props.placeholder}
            right={
                <TextInput.Icon icon={props.leadingIcon} />
            }
            left={<TextInput.Icon icon={props.trailingIcon} />}
            outlineColor={props.outlinedColor.length == 0 ? "#555" : props.outlinedColor}
            activeOutlineColor={props.outlinedColor.length == 0 ? "#555" : props.outlinedColor}
            style={{ backgroundColor: "#fff" }} />

    );
}

export default CostumeTextField;