
import { Button, Container, ContainerInputs, Form, Input, InputLabel, Title, TopBackground } from "./styles"

function Home() {

  return (

    <Container>

      <TopBackground>
        <img src="" alt="" />
      </TopBackground>

      <Form>
        <Title>Cadastro de Usuários</Title>

        <ContainerInputs>
          <div>
            <div>
              <InputLabel>Nome <span>*</span></InputLabel>
              <Input type="text" placeholder="Nome do Usuário" />
            </div>

            <div>
            <InputLabel>Idade <span>*</span></InputLabel>
            <Input type="number" placeholder="Idade" />
            </div>
          </div>

          <div>
          <InputLabel>E-mail <span>*</span></InputLabel>
          <Input type="email" placeholder="E-mail do Usuário" />
          </div>

        </ContainerInputs>

        <Button>Cadastrar Usuário</Button>


      </Form>

    </Container>

  )
}

export default Home
