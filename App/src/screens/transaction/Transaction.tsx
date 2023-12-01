import { View, useWindowDimensions } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import { TabHeader } from "../../components/others/TabHeader";
import { useState } from "react";
import Income from "./Income";
import Transfer from "./Transfer";
import { colorScheme } from "../../../../utils/color";
import Spends from "./Spends";
import KeyBoard from "../../components/others/KeyBoard";
import useTransactionStore from "./transactionStore/transactionStore";

function Transaction() {
    const [index, setIndex] = useState(0)
    const layout = useWindowDimensions()
    const renderScene = SceneMap({
        incomes: Income,
        spends: Spends,
        transfer: Transfer,

    });
    const [routes] = useState([
        { key: 'incomes', title: 'Incomes' },
        { key: 'transfer', title: 'Transfer' },
        { key: 'spends', title: 'Spends' },
    ]);
    const store = useTransactionStore()
    return (
        <View style={{ flex: 1, backgroundColor: colorScheme.bg }}>
            <View style={{ flex: 1, padding: 10 }}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    renderTabBar={() => <TabHeader props={{
                        routes,
                        index,
                        style: {
                            padding: 15
                        },
                        setIndex: setIndex,
                        activeColor: colorScheme.main
                    }} />}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width, }}
                />

            </View>
            {
                store.showKeyboard && <KeyBoard props={{
                    onButtonPress: store.onAmountChange,
                    onDeleteButtonPress: store.deleteAmount,
                    onDone: () => { },
                    onClear: store.cleanAmount
                }} />

            }


        </View>
    );
}

export default Transaction;