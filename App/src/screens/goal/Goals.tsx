import { View } from "react-native";
import GoalCard from "../../components/card/GoalCard";
import { Divider, Text } from "react-native-paper";
import localStrings from "../../../../utils/localization";
import IconButton from "../../components/buttons/IconButton";
import { colorScheme } from "../../../../utils/color";

function Goals() {
    return (
        <View style={{
            gap: 20,
            padding: 10,
            flex: 1,
        }}>
            <View style={{ width: "100%", gap: 10 }}>
                <Text variant="titleLarge">
                    {localStrings.goals}
                </Text>
                <Divider />
            </View>
            <GoalCard goal={{
                balance: 0,
                iconName: "flag-circle",
                name: "Buy a star",
                progress: "80%",
                background: "green",
                code: "AOA"
            }} />

            <GoalCard goal={{
                balance: -300,
                iconName: "flag-circle",
                name: "Buy a star",
                progress: "80%",
                background: "green",
                code: "AOA"
            }} />

            <GoalCard goal={{
                balance: 250,
                iconName: "flag-circle",
                name: "Buy a star",
                progress: "80%",
                background: "green",
                code: "AOA"
            }} />

            <GoalCard goal={{
                balance: 100,
                iconName: "flag-circle",
                name: "Buy a star",
                progress: "80%",
                background: "green",
                code: "AOA"
            }} />

            <GoalCard goal={{
                balance: 0,
                iconName: "flag-circle",
                name: "Buy a star",
                progress: "80%",
                background: "green",
                code: "AOA"
            }} />
            <IconButton props={{
                icon: "add",
                floating:true,
                onPress: () => { },
                backgroundColor: colorScheme.secondary,
              
            }} />
        </View>
    );
}

export default Goals;