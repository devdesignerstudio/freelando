import { Card } from "./components/Card/Card"
import { Styles } from "./components/GlobalStyles/Styles"
import { Theme } from "./components/Theme/Theme"

function App() {
  return (
    <Theme>
      <Styles />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </Theme>
  )
}

export default App
