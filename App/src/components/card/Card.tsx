import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import LinearGradient from 'react-native-linear-gradient'
import { colorScheme } from "../../../../utils/color";


type CardProps = {
    name: string;
    balance: number;
    code: string;
    background: string;
    sourceFunName: string;
    lastDigits: string;
    expirationDate: string;
};

function Card({ card }: { card: CardProps }) {

    return (
        <LinearGradient
            colors={[colorScheme.main,"#fff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.7, y: 0.5 }}
            style={[style.main, { backgroundColor: card.background, }]}>

            <View style={style.header}>
                <Text style={{...style.headerText, color:card.balance>0?"green":"red"}}>
                    {`${card.balance} ${card.code}`}
                </Text>
            </View>

            <View style={style.body}>
                <Text style={style.text}>{card.sourceFunName}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={style.text}>{".... .... .... "}</Text>
                    <Text style={style.text}>{card.lastDigits}</Text>
                </View>
            </View>

            <View style={style.footer}>

                <Text variant="headlineSmall" style={style.text}>{card.name}</Text>

                <Text style={{...style.text}}>{card.expirationDate}</Text>
            </View>
        </LinearGradient>


    );
}
const style = StyleSheet.create({
    main: {
        flexDirection: "column",
        padding: 15,
        borderRadius: 8,
        height: 200,
        elevation: 3,
        width: "100%"
    },
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        padding: 8,
    },
    headerText: {
        color: "#333",
        fontWeight: "bold",
        fontSize: 18,
    },
    body: {
        flex: 1,
        flexDirection: "column",
    },
    text: {
        color: "#333",
        fontWeight: "bold",
        fontSize: 16,
    },
    footer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
})

export default Card;
