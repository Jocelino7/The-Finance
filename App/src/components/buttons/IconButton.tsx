import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type IconButtonProps = {
    icon: string,
    onPress: Function,
    backgroundColor: string,
    floating?: boolean
}
function IconButton({ props }: { props: IconButtonProps }) {
    const floatingStyle: "absolute" | "relative" | undefined = props.floating ?
        "absolute"
        :
        "relative"
    return (
        <Pressable android_ripple={{color:"#fff"}} style={{ ...style.iconContainer, position: floatingStyle, backgroundColor:props.backgroundColor}}>
            <Icon name={props.icon} size={30} color="#fff"/>
        </Pressable>
    );
}
const style = StyleSheet.create({
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        bottom: 10,
        right: 10,
        zIndex:10,
        position:"absolute",
        elevation:10
    }
})

export default IconButton;