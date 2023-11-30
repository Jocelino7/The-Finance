import { StyleSheet, View, useWindowDimensions } from "react-native";
import Card from "../../components/card/Card";
import { useState } from "react";
import SpendReport from "../report/SpendReport";
import { SceneMap, TabView } from "react-native-tab-view";
import IncomeReport from "../report/IncomeReport";
import { TabHeader } from "../../components/others/TabHeader";
import { colorScheme } from "../../../../utils/color";


function AccountDetail() {
    const [index, setIndex] = useState(0)
    const layout = useWindowDimensions()
    const renderScene = SceneMap({
        incomes: IncomeReport,
        spends: SpendReport,
    });
    const [routes] = useState([
        { key: 'incomes', title: 'Incomes' },
        { key: 'spends', title: 'Spends' },
    ]);
    return (
        <View style={style.main}>
            <Card card={{
                name: "Jocelino Fernandes",
                balance: 200,
                code: "AOA",
                background: "",
                sourceFunName: "BAI",
                lastDigits: "345",
                expirationDate: "23/27"
            }} />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={() => <TabHeader props={{
                    routes,
                    index,
                    style: {},
                    setIndex: setIndex,
                    activeColor: colorScheme.secondary
                }} />}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width, }}
            />

        </View>
    );
}
const style = StyleSheet.create({
    main: {
        flex: 1,
        padding: 10,
        gap:30
    }
})

export default AccountDetail;