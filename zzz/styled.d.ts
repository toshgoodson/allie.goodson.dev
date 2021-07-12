// import original module declarations
import 'styled-components'
import { Theme } from '../src/interfaces/Theme'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}