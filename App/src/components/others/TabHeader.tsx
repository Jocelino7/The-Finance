import { Pressable, View, ViewStyle } from "react-native"
import { Divider, Text } from "react-native-paper"

type TabHeaderItemProps = {
    text: string,
    active: boolean,
    activeColor: string,
    onPress:Function

}
function TabHeaderItem({ props }: { props: TabHeaderItemProps }) {
    return (
        <Pressable style={{ flex: 1, gap: 10}} android_ripple={{ color: "#ccc", }} onPress={()=>props.onPress()}>
            <Text variant="titleSmall" style={{ opacity: props.active ? 1 : 0.5,alignSelf:"center",color:props.active?props.activeColor:"#333"  }}>
                {props.text}
            </Text>
            
            <Divider style={{ backgroundColor: props.active ? props.activeColor : "#333",height:1  }} />

        </Pressable>
    )
}
type TabHeaderProps = {
    routes: { title: string, key: string }[],
    index: number,
    setIndex:(index:number)=>void,
    style?: ViewStyle,
    activeColor:string
}
function TabHeader({ props }: { props: TabHeaderProps }) {
    return (
        <View style={{ flexDirection: "row", ...props.style, }}>
            {
                props.routes.map((item, index) => (
                    <TabHeaderItem key={item.key} props={{
                        text: item.title,
                        active: props.index == index,
                        activeColor: props.activeColor,
                        onPress:()=>{props.setIndex(index)}

                    }} />
                ))
            }


        </View>
    )
}
export {TabHeader}