import { Image, StyleSheet, View } from "react-native";
import { colorScheme } from "../../../../utils/color";
import { Text } from "react-native-paper";

type UserBarProps = {
    firstName:string
    lastName:string,
    photoUrl:string
}
function UserBar({userProps}:{userProps:UserBarProps}) {
    return ( 
        <View style={style.main}>
            <Image source={{uri:"https://via.placeholder.com/600/92c952"}} className="rounded-full" width={60} height={60}/>
            <View>
                <Text style={style.text}>
                    {"Hello,"}
                </Text>
                <Text variant="headlineSmall" style={style.text}>
                    {userProps.firstName}
                </Text>
                
            </View>
        </View>
     );
}
const style = StyleSheet.create({
    main:{
        background:colorScheme.bg,
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        gap:10,
        elevation:1,
        padding:10
    },
    text:{
        color:colorScheme.text
    }

})

export default UserBar;