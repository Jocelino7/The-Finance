import { Image, Text, View } from "react-native";

type UserBarProps = {
    firstName:string
    lastName:string,
    photoUrl:string
}
function UserBar({userProps}:{userProps:UserBarProps}) {
    return ( 
        <View className="bg-bg w-full flex-row items-center gap-4">
            <Image source={{uri:"https://via.placeholder.com/600/92c952"}} className="rounded-full" width={60} height={60}/>
            <View>
                <Text className="text-text">
                    {"Hello,"}
                </Text>
                <Text className="text-text text-lg">
                    {userProps.firstName}
                </Text>
                
            </View>
        </View>
     );
}

export default UserBar;