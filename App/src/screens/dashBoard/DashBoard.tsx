import { Pressable, ScrollView, StyleSheet } from "react-native";
import { View } from "react-native";
import UserBar from "../../components/bar/UserBar";
import Card from "../../components/card/Card";
import { colorScheme } from "../../../../utils/color";
import { Divider, Text } from "react-native-paper";
import localStrings from "../../../../utils/localization";
import TransactionCard from "../../components/card/TransactionCard";
import Title from "../../components/others/Title";
import GoalCard from "../../components/card/GoalCard";
import SourceFund from "../../components/card/SourceFundCard";
import IconButton from "../../components/buttons/IconButton";
import { BarcChartComponent, LineChartComponent, PieChartComponent, ProgressRingChartComponent } from "../../components/chart/Chart";
import PagerView from "react-native-pager-view";
import React, { useState } from "react";
import PagerIndicator from "../../components/others/PageIndicator";


function DashBoard() {
    const [currentPage, setCurrentPage] = useState(0)
    return (
        <View style={{ flex: 1, padding: 10, backgroundColor: colorScheme.bg }}>
            <UserBar userProps={{
                firstName: "Jocelino",
                lastName: "Fernandes",
                photoUrl: ""
            }} />
            <ScrollView style={style.main}>


                <Card card={{
                    name: "Jocelino Fernandes",
                    balance: 0,
                    code: "AOA",
                    background: colorScheme.secondary,
                    sourceFunName: "Main",
                    lastDigits: "244",
                    expirationDate: "12/27"
                }} />
                <View style={{ gap: 5, alignItems: "center" }}>
                    <Title props={{
                        textButton: localStrings.seeMore,
                        title: localStrings.monthlyChart,
                        onTextButtonPress: () => { }
                    }} />
                    <PagerView
                        pageMargin={10}
                        initialPage={0}
                        style={{ height: 250, width: "100%" }}
                        collapsable={false}
                        orientation="horizontal"
                        onPageScroll={(e) => { setCurrentPage(e.nativeEvent.position) }}
                    >
                        <View key="1">
                            <LineChartComponent />
                        </View>
                        <View key="2">
                            <ProgressRingChartComponent />

                        </View>
                        <View key="3">
                            <BarcChartComponent />
                        </View>
                        <View key="4">
                            <PieChartComponent />
                        </View>
                    </PagerView>
                    <PagerIndicator props={{
                        max: 3,
                        currentPage: currentPage
                    }} />
                </View>

                <View style={{ gap: 10, marginTop: 20 }}>
                    <Title props={{
                        textButton: localStrings.seeMore,
                        title: localStrings.transactions,
                        onTextButtonPress: () => { }
                    }} />

                    <TransactionCard transaction={{
                        amount: 100,
                        iconName: "restaurant",
                        category: "Alimentação",
                        description: "Nova transação",
                        date: "12/12/23",
                        transactionColor: "yellow",
                        background: "green",
                        code: "AOA"
                    }} backgroundColor={colorScheme.bg} />
                    <TransactionCard transaction={{
                        amount: 100,
                        iconName: "restaurant",
                        category: "Alimentação",
                        description: "Nova transação",
                        date: "12/12/23",
                        transactionColor: "yellow",
                        background: "yellow",
                        code: "AOA"
                    }} backgroundColor={colorScheme.bg} />
                    <TransactionCard transaction={{
                        amount: 100,
                        iconName: "restaurant",
                        category: "Alimentação",
                        description: "Nova transação",
                        date: "12/12/23",
                        transactionColor: "yellow",
                        background: "red",
                        code: "AOA"
                    }} backgroundColor={colorScheme.bg} />
                </View>
                <View style={{ gap: 10, marginTop: 20 }}>
                    <Title props={{
                        textButton: localStrings.seeMore,
                        title: localStrings.goals,
                        onTextButtonPress: () => { }
                    }} />

                    <GoalCard goal={{
                        balance: 100,
                        iconName: "sports-esports",
                        name: "Comprar PS5",
                        progress: "5%",
                        background: "green",
                        code: "AOA"
                    }} />
                    <Divider />
                    <GoalCard goal={{
                        balance: 100,
                        iconName: "sports-esports",
                        name: "Comprar PS5",
                        progress: "5%",
                        background: "green",
                        code: "AOA"
                    }} />
                    <Divider />
                    <GoalCard goal={{
                        balance: 100,
                        iconName: "sports-esports",
                        name: "Comprar PS5",
                        progress: "5%",
                        background: "green",
                        code: "AOA"
                    }} />
                    <Divider />
                </View>
                <View style={{ gap: 10, marginTop: 20 }}>
                    <Title props={{
                        textButton: localStrings.seeMore,
                        title: "Bank Accounts",
                        onTextButtonPress: () => { }
                    }} />
                    <SourceFund props={{
                        balance: 100,
                        name: "BAI",
                        code: "AOA",

                    }}
                        backgroundColor={colorScheme.bg}
                    />
                    <Divider />
                    <SourceFund props={{
                        balance: 100,
                        name: "Standard Bank",
                        code: "AOA"
                    }}
                        backgroundColor={colorScheme.bg} />
                    <Divider />
                    <SourceFund props={{
                        balance: 100,
                        name: "BFA",
                        code: "AOA"
                    }}
                        backgroundColor={colorScheme.bg} />
                    <Divider />
                </View>

            </ScrollView>
        </View>
    );
}
const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colorScheme.bg
    }
})

export default DashBoard;