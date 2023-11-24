import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
type GoalCardType = {
    balance: number,
    iconName: string,
    name: string,
    progress: string,
    background:string,
    code:string
}
function GoalCard({ goal }: { goal: GoalCardType }) {
    return (
        <View className="flex-row gap-2 items-center gap-4 p-4 bg-tertiary rounded" style={{ elevation: 5 }}>
            <View className="rounded-full w-8" style={{ backgroundColor: goal.background }}>
                <Icon name={goal.iconName} size={30} />
            </View>

            <View className="flex-1">
                <View className="flex-row justify-between">
                    <Text className="font-bold text-text">
                        {goal.name}
                    </Text>
                    <Text className="font-bold text-text">
                        {goal.progress}
                    </Text>
                </View>
                <Text className="text-text" style={{
                    color: goal.balance > 0 ? "green" : "#FF0000"
                }}>
                    {`${goal.balance} ${goal.code}`}
                </Text>
            </View>
        </View>
    );
}

export default GoalCard;