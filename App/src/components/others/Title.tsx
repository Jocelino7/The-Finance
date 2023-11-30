import { Pressable, View } from "react-native";
import { Text } from "react-native-paper";
import { colorScheme } from "../../../../utils/color";
type TitleProps = {
    textButton: string,
    title: string,
    onTextButtonPress: Function,
}
function Title({ props }: { props: TitleProps }) {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10,width:"100%" }}>
            <Text variant="titleMedium" style={{ marginTop: 10,color:colorScheme.text }}>
                {props.title}
            </Text>
            <Pressable android_ripple={{ color: "#ccc" }} onPress={() => props.onTextButtonPress()}>
                <Text style={{color:colorScheme.text}}>
                    {props.textButton}
                </Text>
            </Pressable>

        </View>
    );
}

export default Title;