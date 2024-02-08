import { Appearance } from "react-native"
//#90EE90
//#51CFCF
interface Color {
    main: string,
    secondary: string,
    tertiary: string,
    text: string,
    redColor:string,
    bg:string
}
const main = "#023020"
const darkColorScheme:Color = {
    main,
    secondary: "#EE964F",
    tertiary: "#ffffff",
    text: "#fff",
    redColor:"#FF0000",
    bg:"#000"
}
const lightColorScheme:Color = {
    main,
    secondary: "#EE964F",
    tertiary: "#ffffff",
    text: "#000",
    redColor:"#FF0000",
    bg:"#fff"
}
const scheme = Appearance.getColorScheme()
const colorScheme = scheme=="light"?lightColorScheme:darkColorScheme
export {colorScheme}