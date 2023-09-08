import { useLocalStorage } from "usehooks-ts"
import { darkTheme } from "../../styles/themes/darkTheme"
import { lightTheme } from "../../styles/themes/lightTheme"

import Moon from "./moon"
import Sun from "./sun"

export const lightSwitcher = () => {
  const [theme, setTheme] = useLocalStorage('theme', darkTheme)

  return (
    theme.name === 'darkmode' ?
      <span onClick={() => setTheme(lightTheme)}> <Sun /></span>
      :
      <span onClick={() => setTheme(darkTheme)}> <Moon /></span>
  )
}