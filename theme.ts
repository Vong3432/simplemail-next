// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react"
import { colorTheme } from "./themes/color"
import { fontTheme } from "./themes/font"

// 2. Add your color mode config
const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({
    config,
    styles: {
        global: {
            body: {
                bg: "#F5F7F8"
            }
        }
    },
    ...fontTheme,
    ...colorTheme,
})

export default theme