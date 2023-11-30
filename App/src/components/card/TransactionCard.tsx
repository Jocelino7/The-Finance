import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

type TransactionCardProps = {
    amount: number;
    iconName: string;
    category: string;
    description: string;
    date: string;
    transactionColor: string;
    background: string;
    code: string;
};



function TransactionCard({ transaction, backgroundColor }: { transaction: TransactionCardProps, backgroundColor: string }) {
    return (

        <Pressable style={{ ...style.main, backgroundColor: backgroundColor }} android_ripple={{color:"#ccc"}}>

            <View style={{ ...style.iconContainer, backgroundColor: transaction.background }}>
                <Icon name={transaction.iconName} size={20} color="#fff" />
            </View>

            <View style={style.categoryDateContainer}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <Text style={style.categoryDateText}>{transaction.category}</Text>
                        <Text style={{ ...style.amountText, }}>
                            {transaction.description}
                        </Text>

                    </View>

                    <View>
                        <Text style={style.categoryDateText}>{transaction.date}</Text>
                        <Text style={{ ...style.amountText, color: transaction.amount > 0 ? "green" : "#FF0000" }}>
                            {`${transaction.amount} ${transaction.code}`}
                        </Text>

                    </View>

                </View>

            </View>
        </Pressable>
    );
}
const style = StyleSheet.create({
    main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        borderRadius: 8,
        marginBottom: 8,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    categoryDateContainer: {
        flex: 1,
        marginLeft: 16,
    },
    categoryDateText: {
        color: "#000", // Change this to your desired text color
    },
    amountText: {
        marginTop: 4,
    },
});
export default TransactionCard;
