import { Text, View } from "react-native";

type CardProps = {
    name: string,
    balance: number,
    code: string,
    background: string,
    sourceFunName: string,
    lastDigits: string,
    expirationDate: string
}
function Card({ card }: { card: CardProps }) {
    const cardTText = "text-white font-bold"
    return (
        <View className="flex flex-col p-2 rounded-xl gap-8" style={{ backgroundColor: card.background }}>
            <View className="flex items-end p-2">
                <Text className={`${cardTText} text-lg`}>
                    {`${card.balance} ${card.code}`}
                </Text>
            </View>
            <View className="flex-col">
                <Text className={`${cardTText} text-lg`}>{card.sourceFunName}</Text>
                <Text className={`${cardTText} text-lg`}>
                    {card.name}
                </Text>
            </View>
            <View className="flex-row justify-between">
                <View className="flex-row items-center">
                    <Text className={`${cardTText}`}>{".... .... .... "}</Text>
                    <Text className={`${cardTText}`}>{card.lastDigits}</Text>
                </View>

                <Text className={cardTText}>
                    {card.expirationDate}
                </Text>
            </View>


        </View>
    );
}

export default Card;