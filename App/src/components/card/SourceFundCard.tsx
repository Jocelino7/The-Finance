import { Text, View, StyleSheet, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colorScheme } from "../../../../utils/color";

type SourceFundCardType = {
  balance: number;
  name: string;
  code: string;
};



function SourceFund({ props, backgroundColor }: { props: SourceFundCardType,backgroundColor?:string }) {
  return (
    <Pressable style={{ ...style.main, backgroundColor: backgroundColor?backgroundColor:"#fff" }} android_ripple={{color:"#ccc"}}>
      <View style={style.iconContainer}>
        <Icon name="account-balance" size={30} color="#fff" />
      </View>

      <View style={style.textContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={style.nameText}>{props.name}</Text>
          <Text style={{ ...style.balanceText, color: props.balance > 0 ? "green" : "#FF0000" }}>
            {`${props.balance} ${props.code}`}
          </Text>
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
      backgroundColor:colorScheme.bg
    },
    iconContainer: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: colorScheme.main, 
      justifyContent: "center",
      alignItems: "center",
    },
    textContainer: {
      flex: 1,
      marginLeft: 16,
    },
    nameText: {
      color: colorScheme.text, // Change this to your desired text color
    },
    balanceText: {
      color: "#FF0000",
      marginTop: 4,
    },
  });
export default SourceFund;
