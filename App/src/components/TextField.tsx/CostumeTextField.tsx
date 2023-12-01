import { Text, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colorScheme } from '../../../../utils/color';
import { NativeSyntheticEvent, Pressable, TextInputChangeEventData, View } from "react-native";
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
    error?: boolean,
    secureTextEntry?: boolean,
    errorMessage?: string,
    onChange: (value: string) => void,
    onPress: Function
}
function CostumeTextField({ props }: { props: TextFieldProps }) {
    return (
        <Pressable style={{ gap: 5, width: "100%" }} onPress={() => props.onPress()}>
            <TextInput
                onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => props.onChange(e.nativeEvent.text)}
                style={{ width: "100%", backgroundColor: colorScheme.bg, elevation: 3, fontSize: props.fontSize, color: props.textColor, height: props.multiline ? 100 : undefined }}
                value={props.text}
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
                error={props.error}
                secureTextEntry={props.secureTextEntry}
            />
            {
                props.error &&
                <Text variant="bodySmall" style={{ color: colorScheme.redColor }}>
                    {props.errorMessage}
                </Text>
            }


        </Pressable>


    );
}

export default CostumeTextField;