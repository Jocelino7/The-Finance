import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Category } from "../../model/dtos/dtos";
import { colorScheme } from "../../../../utils/color";
function CategoryCard({ category }: { category: Category }) {
    return (
        <View style={style.main}>
            <View style={[style.icon, { backgroundColor: category.color }]}>
                <Icon name={category.icon} size={30} />
            </View>
            <Text style={style.text}>
                {category.name}
            </Text>

        </View>
    );
}
const style = StyleSheet.create({
    main: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        padding: 15,
        width:"100%",
        backgroundColor: colorScheme.bg,
        elevation:1,
      
    },
    text: {
        fontWeight: "bold",
        color: colorScheme.text
    },
    icon: {
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent:"center",
        alignItems:"center"
    }

})

export default CategoryCard;