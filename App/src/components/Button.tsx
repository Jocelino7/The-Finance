
import { Pressable, Text, View } from "react-native";

function Button({
    text,onPress
}:{
    text:string, onPress:Function
}) {
    return (  
        <Pressable onPress={()=>onPress()} className="mt-3 bg-primary">
            <Text className="mt-3">
                {text}
            </Text>
        </Pressable>
    );
}

export default Button;