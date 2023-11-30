import { Animated, Pressable, ScrollView, StyleSheet, View, ViewStyle, useWindowDimensions } from "react-native";
import { Divider, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { BarcChartComponent, LineChartComponent, PieChartComponent, ProgressRingChartComponent } from "../../components/chart/Chart";
import PagerView from 'react-native-pager-view';
import { range } from "../../../../utils/range";
import React, { useState } from "react";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import IncomeReport from "./IncomeReport";
import SpendReport from "./SpendReport";
import { colorScheme } from "../../../../utils/color";
import PagerIndicator from "../../components/others/PageIndicator";
import { TabHeader } from "../../components/others/TabHeader";

type PaginationProp = {
    onLeftButtonPress: Function,
    onRightButtonPress: Function,
    color: string,
}
function Pagination({ props }: { props: PaginationProp }) {
    return (
        <View style={style.header}>
            <Pressable android_ripple={{ color: "#ccc" }}>
                <Icon name="chevron-left" size={30} />
            </Pressable>
            <Pressable android_ripple={{ color: "#ccc" }}>
                <Icon name="chevron-right" size={30} />
            </Pressable>
        </View>
    )
}
type HeaderType = {
    month: string,
    balance: string
}
function Header({ props }: { props: HeaderType }) {
    return (
        <View style={style.header}>
            <Text variant="titleLarge">
                {props.month}
            </Text>
            <Text variant="titleMedium">
                {props.balance}
            </Text>

        </View>
    )
}

function ReportComponent() {
    const [currentPage, setCurrentPage] = useState(0)
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
        <View style={{ padding: 10, flex: 1, gap: 10 }}>
            <Pagination props={{
                onLeftButtonPress: () => { },
                onRightButtonPress: () => { },
                color: ""
            }} />
            <Header props={{
                month: "December",
                balance: "100 AOA"
            }} />
            <View style={{ gap: 5, alignItems: "center" }}>
                <PagerView
                    pageMargin={10}
                    initialPage={0}
                    style={style.pagerView}
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
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={() => <TabHeader props={{
                    routes,
                    index,
                    style: {},
                    setIndex:setIndex,
                    activeColor:colorScheme.main
                }} />}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width, }}
            />




        </View>
    );
}
const style = StyleSheet.create({
    header: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    pagerView: {
        width: "100%",
        height: 250
    },
    pagerIndicatorContainer: {
        flexDirection: "row",
        gap: 3
    }
})

export default ReportComponent;