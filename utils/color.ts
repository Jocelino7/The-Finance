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
    main: "#51CFCF",
    secondary: "#EE964F",
    tertiary: "#ffffff",
    text: "#fff",
    redColor:"#FF0000",
    bg:"#000"
}
const lightColorScheme:Color = {
    main: "#51CFCF",
    secondary: "#EE964F",
    tertiary: "#ffffff",
    text: "#000",
    redColor:"#FF0000",
    bg:"#fff"
}
const scheme = Appearance.getColorScheme()
const colorScheme = scheme=="light"?lightColorScheme : darkColorScheme
export {colorScheme}