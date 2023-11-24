import { Text, View } from "react-native";
type BalanceProps = {
    spends:number,
    income:number,
    code:string
}
function Balance({balance}:{balance:BalanceProps}) {
    return ( 
        <View className="flex-row items-center gap-4 justify-between rounded-xl p-3 bg-tertiary" style={{elevation:2,width:"100%"}}>
            <Amount props={{text:"Income",amount:balance.income,color:"green",code:balance.code}}/>
            <View className="bg-main" style={{width:1, height:100}}></View>
            <Amount props={{text:"Spends",amount:balance.spends,color:"red",code:balance.code}}/>
        </View>
     );
}
type AmountProp = {
    text:string,
    amount:number,
    code:string,
    color:string
}
function Amount({props}:{props:AmountProp}) {
    return (  
        <View className="flex-col gap-2 p-2">
            <Text className="text-text text-lg">
                {props.text}
            </Text>
            <Text className="text-text font-bold text-sm" style={{color:props.color}}>
                {`${props.amount} ${props.code}`}
            </Text>
        </View>
    );
}

export default Balance;