import { useLocalStorage } from "usehooks-ts"
import { darkTheme } from "./darkTheme"
import { lightTheme } from "./lightTheme"
import Moon from "./moon"
import Sun from "./sun"

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage('theme', darkTheme)

  return (
    theme.name === 'darkmode' ?
      <span onClick={() => setTheme(lightTheme)}> <Sun /></span>
      :
      <span onClick={() => setTheme(darkTheme)}> <Moon /></span>
  )
}