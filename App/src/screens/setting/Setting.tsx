import { Pressable, StyleSheet, View } from "react-native";
import { colorScheme } from "../../../../utils/color";
import { Divider, Text } from "react-native-paper";

type SettingItemProp = {
    name: string,
    value: string,
    onPress: Function
}
function SettingItem({ props }: { props: SettingItemProp }) {
    return (
    <Pressable style={style.settingItemContainer} android_ripple={{ color: "#ccc" }} onPress={() => props.onPress()}>
        <Text variant="titleSmall">
            {props.name}
        </Text>
        <Text>
            {props.value}
        </Text>
    </Pressable>)

}
function Setting() {
    return (
        <View style={style.main}>
            <View style={style.titleContainer}>
                <Text variant="titleLarge">
                    Setting
                </Text>
                <Divider/>
            </View>
            <View style={style.settingContainer}>
                <SettingItem props={{
                    name: "Língua",
                    value: "Português",
                    onPress: () => { }
                }} />
                 <SettingItem props={{
                    name: "Moeda",
                    value: "Português",
                    onPress: () => { }
                }} />
                 <SettingItem props={{
                    name: "Notificação",
                    value: "sim",
                    onPress: () => { }
                }} />
            </View>

        </View>
    );
}
const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colorScheme.bg,
        padding: 10
    },
    settingContainer: {
        padding:10,
        borderRadius: 10,
        backgroundColor: colorScheme.bg,
        gap: 10,
         elevation:2,
        minHeight:300
    },
    settingItemContainer: {
        gap: 3,
        padding: 10,
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: colorScheme.bg,
        elevation: 2,
        borderRadius: 10
    },
    titleContainer:{
        padding:10,
        gap:15

    }
})

export default Setting;