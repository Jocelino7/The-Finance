import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colorScheme } from '../../../../utils/color';
type TextFieldProps = {
    text: string,
    leadingIcon?: string,
    trailingIcon?: string,
    placeholder: string,
    label?: string,
    outlinedColor?: string,
    multiline?: boolean,
    mode?: "flat" | "outlined" | undefined,
    editable?: boolean,
    fontSize?: number,
    textColor?: string,
    onChange: (value: string) => void,
    onPress: Function
}
function CostumeTextField({ props }: { props: TextFieldProps }) {
    return (

        <TextInput
            onPressIn={() => props.onPress()}
            style={{ width: "100%", backgroundColor: colorScheme.bg, elevation: 3, fontSize: props.fontSize, color: props.textColor, height: props.multiline ? 100 : undefined }}
            value={props.text} onChange={(value) => { props.onChange("") }}
            label={props.label}
            mode={props.mode == null ? "outlined" : props.mode}
            editable={props.editable == null ? true : false}
            placeholder={props.placeholder}
            right={
                props.trailingIcon && <TextInput.Icon icon={() => <Icon name={props.trailingIcon!} size={30} color={colorScheme.main} />} />
            }
            left={props.leadingIcon && <TextInput.Icon icon={() => <Icon name={props.leadingIcon!} size={30} color={colorScheme.main} />} />}
            activeUnderlineColor={props.outlinedColor ? colorScheme.text : props.outlinedColor}
            textColor={props.textColor ? props.textColor : colorScheme.text}
            placeholderTextColor={props.textColor ? props.textColor : colorScheme.text}
            multiline={props.multiline}


        />

    );
}

export default CostumeTextField;