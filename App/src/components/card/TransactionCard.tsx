import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
type TransactionCardProps = {
    amount: number,
    iconName: string,
    category: string,
    description: string,
    date: string,
    transactionColor: string,
    background: string,
    code: string
}
function TransactionCard({ transaction }: { transaction: TransactionCardProps }) {
    return (
        <View className="flex-row gap-2 items-center gap-4 p-4 bg-tertiary rounded" style={{ elevation: 5 }}>
            <View className="rounded-full w-8" style={{ backgroundColor: transaction.background }}>
                <Icon name={transaction.iconName} size={30} />
            </View>

            <View className="flex-1">
                <View className="flex-row justify-between">
                    <Text className="font-bold text-text">
                        {transaction.category}
                    </Text>
                    <Text className="font-bold text-text">
                        {transaction.date}
                    </Text>
                </View>
                <Text className="text-text" style={{
                    color: transaction.amount > 0 ? "green" : "#FF0000"
                }}>
                    {`${transaction.amount} ${transaction.code}`}
                </Text>
            </View>
        </View>
    );
}

export default TransactionCard;