import { Col, Container, Row } from "react-grid-system"
import { Card } from "./components/Card/Card"
import { Styles } from "./components/GlobalStyles/Styles"
import { TextField } from "./components/TextField/TextField"
import { Theme } from "./components/Theme/Theme"
import { Typography } from "./components/Typography/Typography"
import { Button } from "./components/Button/Button"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { Link } from "./components/Link/Link"
import { FreelandoLogo } from "./components/Icons/FreelandoLogo"
import { WhatsAppIcon } from "./components/Icons/WhatsAppIcon"
import { TwitterIcon } from "./components/Icons/TwitterIcon"
import { TwitchIcon } from "./components/Icons/TwitchIcon"
import { InstagramIcon } from "./components/Icons/InstagramIcon"
import { InlineList } from "./components/InlineList/InlineList"
import { InlineListItem } from "./components/InlineList/InlineListItem"

function App() {
  return (
    <Theme>
      <Styles />
      <Header>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo />
            </Col>
            <Col style={{ textAlign: "right" }}>
              <Link>Login</Link>
            </Col>
          </Row>
        </Container>
      </Header>

      <Container style={{ margin: "80px 0" }}>
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Typography variant="h1" component="h1">
                Freelando
              </Typography>
              <Typography variant="body" component="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os
                melhores freelancers. Em seguida, você poderá dar mais detalhes
                sobre suas demandas e sobre sua forma de trabalho.
              </Typography>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <TextField title="Nome Completo" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <TextField title="UF" />
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <TextField title="Cidade" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <TextField title="E-mail" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <TextField title="Senha" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <TextField title="Repita a senha" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Button variant="secondary">Anterior</Button>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: "right" }}>
                    <Button>Próximo</Button>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo height={40} width={176} />
              <Typography variant="legenda" component="legenda">
                Desenvolvido por Alura. Projeto fictício sem fins comerciais.
              </Typography>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <Typography variant="legenda" component="legenda">
                Acesse nossas redes:
              </Typography>
              <InlineList>
                <InlineListItem>
                  <a href="/" aria-label="Link para o WhatsApp">
                    <WhatsAppIcon />
                  </a>
                </InlineListItem>
                <InlineListItem>
                  <a href="/" aria-label="Link para a Twitch">
                    <TwitchIcon />
                  </a>
                </InlineListItem>
                <InlineListItem>
                  <a href="/" aria-label="Link para a Instagram">
                    <InstagramIcon />
                  </a>
                </InlineListItem>
                <InlineListItem>
                  <a href="/" aria-label="Link para a Twitter">
                    <TwitterIcon />
                  </a>
                </InlineListItem>
              </InlineList>
            </Col>
          </Row>
        </Container>
      </Footer>
    </Theme>
  )
}

export default App
