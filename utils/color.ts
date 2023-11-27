import { Appearance } from "react-native"

interface Color {
    main: string,
    secondary: string,
    tertiary: string,
    text: string,
    redColor:string,
    bg:string
}
const darkColorScheme:Color = {
    main: "#EE964F",
    secondary: "#51CFCF",
    tertiary: "#ffffff",
    text: "#000000",
    redColor:"#FF0000",
    bg:"#fff"
}
const lightColorScheme:Color = {
    main: "#EE964F",
    secondary: "#51CFCF",
    tertiary: "#ffffff",
    text: "#000000",
    redColor:"#FF0000",
    bg:"#fff"
}
const scheme = Appearance.getColorScheme()
const colorScheme = scheme=="light"?lightColorScheme : darkColorScheme
export {colorScheme}