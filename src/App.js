import { Card } from "./components/Card/Card"
import { Styles } from "./components/GlobalStyles/Styles"
import { Header } from "./components/Header/Header"
import { Theme } from "./components/Theme/Theme"

function App() {
  return (
    <Theme>
      <Header />
      <Styles />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </Theme>
  )
}

export default App
