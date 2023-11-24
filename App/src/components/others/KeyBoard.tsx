import { Button, Pressable, Text, View } from "react-native";

function KeyBoard() {
    return (
        <View className="absolute bottom-0  left-0 right-0 z-20 bg-white flex-col flex-wrap  rounded-tl-xl rounded-tr-xl justify-center items-center" style={{ elevation: 3 }}>
            <View className="flex-row justify-center w-full">
                <KeyBoardButton text="1" />
                <KeyBoardButton text="2" />
                <KeyBoardButton text="3" />

            </View>
            <View className="flex-row justify-center w-full">

                <KeyBoardButton text="4" />
                <KeyBoardButton text="5" />
                <KeyBoardButton text="6" />

            </View>
            <View className="flex-row justify-center w-full">
                <KeyBoardButton text="7" />
                <KeyBoardButton text="8" />
                <KeyBoardButton text="9" />

            </View>
            <View className="flex-row justify-center w-full">
                <KeyBoardButton text="," />
                <KeyBoardButton text="X" />
                <KeyBoardButton text="C" />
            </View>
            <View className="flex-row justify-center w-full">
                <KeyBoardButton text="V" />
            </View>



        </View>
    );
}
function KeyBoardButton({ text }: { text: string }) {
    return (
        <Pressable className=" m-2 ml-3 mr-3 w-16 h-16 bg-secondary flex-row justify-center items-center p-3 rounded-full" android_ripple={{
            color: "#ccc"
        }}>
            <Text className="font-bold text-lg text-white">
                {text}
            </Text>
        </Pressable>
    );
}


export default KeyBoard;