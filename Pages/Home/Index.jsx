
import { useRef } from "react"

import api from "../../Services/api"

import { Button, Container, ContainerInputs, Form, Input, InputLabel, Title, TopBackground } from "./styles"

import UserImage from '../../src/assets/users.png'

function Home() {
  const inputName = useRef()
  const inputAge= useRef()
  const inputEmail= useRef()

  async function registerNewUser(){
    const data = await api.post('/usuarios', {
      name: inputName.current.value,
      age: parseInt( inputAge.current.value),
      email: inputEmail.current.value
    })

    console.log(data)

  }

  return (

    <Container>

      <TopBackground>
        <img src={UserImage} alt="" />
      </TopBackground>

      <Form>
        <Title>Cadastro de Usuários</Title>

        <ContainerInputs>

          <div>
            <InputLabel>Nome<span> *</span></InputLabel>
            <Input type="text" placeholder="Nome do Usuário" ref={inputName} />
          </div>


          <div>
            <InputLabel>Idade<span> *</span></InputLabel>
            <Input type="number" placeholder="Idade" ref={inputAge} />
          </div>

        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>E-mail<span> *</span></InputLabel>
          <Input type="email" placeholder="E-mail do Usuário" ref={inputEmail}/>
        </div>



        <Button type="button" onClick={registerNewUser}>Cadastrar Usuário</Button>


      </Form>

    </Container>

  )
}

export default Home
