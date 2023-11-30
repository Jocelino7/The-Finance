import { View } from "react-native";
import TransactionCard from "../../components/card/TransactionCard";
import { range } from "../../../../utils/range";
import React from "react";
import { Divider } from "react-native-paper";

function SpendReport() {
    return (
        <View style={{ flex: 1, padding: 10 }}>
            {
                range(0, 7).map((item) => (
                    <View key={item}>
                        <TransactionCard transaction={{
                            amount: 100,
                            iconName: "star",
                            category: "category",
                            description: "Description",
                            date: "12/12/23",
                            transactionColor: "grenn",
                            background: "green",
                            code: "AOA"
                        }} backgroundColor={"#fff"} />
                        <Divider />
                    </View>


                ))
            }


        </View>
    );
}

export default React.memo(SpendReport);