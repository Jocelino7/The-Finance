import { StyleSheet, View } from "react-native";
import { colorScheme } from "../../../../utils/color";
import localStrings from "../../../../utils/localization";
import CategoryCard from "../../components/card/CategoryCard";
import IconButton from "../../components/buttons/IconButton";
import DividerTitle from "../../components/others/DividerTitle";

function Category() {
    return (
        <View style={style.main}>
            <DividerTitle text={localStrings.category}/>
            <View style={{ gap: 10 }}>
                <CategoryCard category={{
                    uuid: "",
                    user: undefined,
                    name: "Alimentação",
                    icon: "label",
                    color: "green"
                }} />
                <CategoryCard category={{
                    uuid: "",
                    user: undefined,
                    name: "Alimentação",
                    icon: "label",
                    color: "yellow"
                }} />
                <CategoryCard category={{
                    uuid: "",
                    user: undefined,
                    name: "Alimentação",
                    icon: "label",
                    color: "violet"
                }} />
                <CategoryCard category={{
                    uuid: "",
                    user: undefined,
                    name: "Alimentação",
                    icon: "label",
                    color: "orange"
                }} />
                <CategoryCard category={{
                    uuid: "",
                    user: undefined,
                    name: "Alimentação",
                    icon: "label",
                    color: "white"
                }} />
                <CategoryCard category={{
                    uuid: "",
                    user: undefined,
                    name: "Alimentação",
                    icon: "label",
                    color: "red"
                }} />
                <CategoryCard category={{
                    uuid: "",
                    user: undefined,
                    name: "Alimentação",
                    icon: "label",
                    color: "red"
                }} />
                <CategoryCard category={{
                    uuid: "",
                    user: undefined,
                    name: "Alimentação",
                    icon: "label",
                    color: "red"
                }} />
                <CategoryCard category={{
                    uuid: "",
                    user: undefined,
                    name: "Alimentação",
                    icon: "label",
                    color: "red"
                }} />
                <CategoryCard category={{
                    uuid: "",
                    user: undefined,
                    name: "Alimentação",
                    icon: "label",
                    color: "red"
                }} />
               
            </View>
            <IconButton props={{
                    icon: "add",
                    floating: true,
                    onPress: () => { },
                    backgroundColor: colorScheme.secondary,

                }} />


        </View>
    );
}
const style = StyleSheet.create({
    main: {
        padding: 10,
        backgroundColor:colorScheme.bg
    },
    divider: {
        fontWeight: "bold"

    },
    container: {
        paddingVertical: 10,
        gap: 5
    }

})

export default Category;