import { View } from "react-native";
import ActionSheet, { SheetProps } from "react-native-actions-sheet";
import { Text } from "react-native-paper";
function Sheet(props: SheetProps) {
    return (
        <ActionSheet id={props.sheetId}>
            <View>
                <Text>Hello World</Text>
            </View>
        </ActionSheet>
    );
}

export default Sheet;