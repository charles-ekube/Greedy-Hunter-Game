import React from 'react'
import { Character } from '../../assets'
import { Container, Content, Design, StyledForm, Text, Title } from './styles'



export const WelcomeBoard = () => {
    return (
        <Container>
            <Design/>
                <Content>
                    <img src={Character} alt='avatar' width='100px' height='100px'/>
                    <Title>Greedy Hunter</Title>
                    <Text>
                        The aim is to eat all the food in record time <br/>
                        Configure your game grid below
                    </Text>
                    <StyledForm>
                        
                        <label>Game grid</label>
                        <input type='number' name='number' min='5' max='12'/>
                        <button>Start Game</button>
                    </StyledForm>
                </Content>
            <Design/> 
        </Container>
    )
}
export const GameOverBoard = () => {
    return (
        <h1>hello</h1>
    )
}
export const BravoBoard = () => {
    return (
        <h1>hello</h1>
    )
}
