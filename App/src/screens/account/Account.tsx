import { StyleSheet, View } from "react-native";
import { colorScheme } from "../../../../utils/color";
import { Divider, Text } from "react-native-paper";
import SourceFund from "../../components/card/SourceFundCard";
import IconButton from "../../components/buttons/IconButton";

function Accounts({navigation}:{navigation:any}) {
    return (
        <View style={style.main}>
            <View style={style.header}>
                <Text variant="titleLarge">
                    Contas
                </Text>
                <Divider />

            </View>

            <View style={style.accountContainer}>
                <SourceFund props={{
                    balance: 0,
                    name: "Bai",
                    code: "AOA"
                }}
                backgroundColor={colorScheme.bg} />
                <Divider />
                <SourceFund props={{
                    balance: 0,
                    name: "Bai",
                    code: "AOA"
                }}
                backgroundColor={colorScheme.bg} />
                <Divider />
                <SourceFund props={{
                    balance: 0,
                    name: "Bai",
                    code: "AOA"
                }} 
                backgroundColor={colorScheme.bg}/>
                <Divider />
                <SourceFund props={{
                    balance: 0,
                    name: "Bai",
                    code: "AOA"
                }}
                backgroundColor={colorScheme.bg} />
                <Divider />
            </View>
            <IconButton props={{
                icon: "add",
                onPress: () => {},
                backgroundColor: colorScheme.main,
                floating: true
            }} />

        </View>
    );
}
const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colorScheme.bg,
        padding: 10
    },
    accountContainer: {
        gap: 20
    },
    header: {
        padding: 10,
        gap: 15
    }
})

export default Accounts;