import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colorScheme } from "../../../../utils/color";
type GoalCardType = {
    balance: number,
    iconName: string,
    name: string,
    progress: string,
    background: string,
    code: string
}
function GoalCard({ goal }: { goal: GoalCardType }) {
    return (
        <Pressable style={style.main} android_ripple={{color:"#ccc"}}>
            <View style={[style.icon, { backgroundColor: goal.background }]}>
                <Icon name={goal.iconName} size={30} color="#fff" />
            </View>

            <View style={{ flex: 1 }}>
                <View style={style.container}>
                    <Text style={style.text}>
                        {goal.name}
                    </Text>
                    <Text style={style.text}>
                        {goal.progress}
                    </Text>
                </View>
                <Text style={{
                    color: goal.balance > 0 ? "green" : "#FF0000"
                }}>
                    {`${goal.balance} ${goal.code}`}
                </Text>
            </View>
        </Pressable>
    );
}
const style = StyleSheet.create({
    main: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        padding: 10,
        backgroundColor: colorScheme.bg,
        borderRadius: 10,
      
    },
    icon: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text: {
        color: colorScheme.text,
    }

})

export default GoalCard;