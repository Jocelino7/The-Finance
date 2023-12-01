import { Pressable, StyleSheet, View } from "react-native";
import { colorScheme } from "../../../../utils/color";
import { Text } from "react-native-paper";
type KeyBoardProps ={
    onButtonPress:(value:string)=>void,
    onDeleteButtonPress:()=>void,
    onDone:()=>void,
    onClear:()=>void
}
function KeyBoard({props}:{props:KeyBoardProps}) {
    return (
        <View style={style.main}>
            <View style={style.buttonContainer}>
                <KeyBoardButton text="1"  onPress={()=>props.onButtonPress("1")}/>
                <KeyBoardButton text="2" onPress={()=>props.onButtonPress("2")} />
                <KeyBoardButton text="3" onPress={()=>props.onButtonPress("3")} />
            

            </View>
            <View style={style.buttonContainer}>
                <KeyBoardButton text="4" onPress={()=>props.onButtonPress("4")} />
                <KeyBoardButton text="5" onPress={()=>props.onButtonPress("5")} />
                <KeyBoardButton text="6" onPress={()=>props.onButtonPress("6")} />
            </View>
            <View style={style.buttonContainer}>
                <KeyBoardButton text="7" onPress={()=>props.onButtonPress("7")} />
                <KeyBoardButton text="8" onPress={()=>props.onButtonPress("8")} />
                <KeyBoardButton text="9" onPress={()=>props.onButtonPress("9")} />
            </View>
            <View style={style.buttonContainer}>
                <KeyBoardButton text="," onPress={()=>props.onButtonPress(",")}/>
                <KeyBoardButton text="X" onPress={()=>props.onDeleteButtonPress()} />
                <KeyBoardButton text="C"  onPress={()=>props.onClear()}/>
            </View>
            <KeyBoardButton text="v" onPress={()=>props.onDone()} />






        </View>
    );
}

function KeyBoardButton({ text,onPress }: { text: string,onPress:Function }) {
    return (
        <Pressable style={style.keyBoardButton} onPress={()=>onPress()} android_ripple={{
            color: "#ccc"
        }}>
            <Text variant="titleMedium" style={style.buttonText}>
                {text}
            </Text>
        </Pressable>
    );
}

const style = StyleSheet.create({
    main: {
        backgroundColor: colorScheme.bg,
        position: "absolute",
        bottom: 0,
        zIndex: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
        width: "100%",
        padding:10,
        elevation: 3,
    },
    buttonContainer: {
        gap:50,
        flexDirection:"row",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    keyBoardButton: {
        elevation: 10,
        width: 50,
        height: 50,
        borderRadius: 150,
        backgroundColor: colorScheme.main,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
    },
    buttonText: {
        fontWeight: "bold",
        color: colorScheme.tertiary
    }
})


export default KeyBoard;