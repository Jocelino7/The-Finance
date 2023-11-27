import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
type SourceFundCardType = {
    balance: number,
    name: string,
    code:string
}
function SourceFund({ props }: { props: SourceFundCardType }) {
    return (
        <View className="flex-row gap-2 items-center gap-4 p-4 bg-tertiary rounded" style={{ elevation: 5 }}>
            <View className="rounded-full w-12 h-12 bg-secondary flex-row justify-center items-center">
                <Icon name="account-balance" size={30} color={"#fff"} />
            </View>

            <View className="flex-1">
                <View className="flex-row justify-between">
                    <Text className="font-bold text-text">
                        {props.name}
                    </Text>
                    <Text className="text-text" style={{
                    color: props.balance > 0 ? "green" : "#FF0000"
                }}>
                    {`${props.balance} ${props.code}`}
                </Text>
                </View>
               
            </View>
        </View>
    );
}

export default SourceFund;