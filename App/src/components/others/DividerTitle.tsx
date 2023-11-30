import {  View } from "react-native";
import { Divider, Text } from "react-native-paper";

function DividerTitle({text}:{text:string}) {
    return (
        <View style={{ width: "100%", gap: 10 }}>
            <Text variant="titleLarge">
                {text}
            </Text>
            <Divider />
        </View>
    );
}

export default DividerTitle;