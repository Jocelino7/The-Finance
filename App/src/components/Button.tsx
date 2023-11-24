
import { Pressable, Text } from "react-native";

function Button({
    text,onPress
}:{
    text:string, onPress:Function
}) {
    return (  
        <Pressable onPress={()=>onPress()} className="w-40 bg-main rounded p-2 flex justify-center items-center" android_ripple={{color:"#ccc"}}>
            <Text className="text-white font-bold">
                {text}
            </Text>
        </Pressable>
    );
}

export default Button;