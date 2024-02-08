import { StyleSheet, View } from "react-native";
import { colorScheme } from "../../../../utils/color";
import Icon  from "react-native-vector-icons/MaterialIcons";
import { Text } from "react-native-paper";

type IconRowProps = {
    icon:string,
    text:string,
    color?:string,
}
function SelectIconRow({props}:{props:IconRowProps}) {
    return ( 
        <View style={style.iconRow} >
            <Icon name={props.icon} size={40} color={props.color&&props.color}/>
            <Text>{props.text}</Text>
        </View>
     );
}
const style = StyleSheet.create({
    iconRow:{
        borderRadius:10,
        flexDirection:"row",
        gap:10,
        backgroundColor:colorScheme.bg,
        alignItems:"center"
    },
    text:{
        color:colorScheme.text

    }
})

export default SelectIconRow;