import { StyleSheet, View } from "react-native"
import { range } from "../../../../utils/range"

type PagerIndicatorProps = {
    max: number,
    currentPage: number
}
function PagerIndicator({ props }: { props: PagerIndicatorProps }) {
    const page = range(0, props.max)
    return (
        <View style={style.pagerIndicatorContainer}>
            {
                page.map((page) => {
                    return (
                        <View key={page} style={{ padding: 3, width: 3, height: 3, backgroundColor: page == props.currentPage ? "#000" : "#ccc", borderRadius: 3 }}>

                        </View>
                    )
                })
            }

        </View>
    )
}
const style = StyleSheet.create({
    header: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    pagerView: {
        width: "100%",
        height: 250
    },
    pagerIndicatorContainer: {
        flexDirection: "row",
        gap: 3
    }
})
export default PagerIndicator