import React from 'react'
import {useHistory} from 'react-router-dom';
import { Character } from '../../assets'
import { Container, Content, Design, InputContainer, StyledButton, StyledForm, StyledInput, StyledLabel, Text, Title } from './styles'



export const WelcomeBoard = (props) => {


    const history = useHistory();
   const handleStart = (e) =>  {
        e.preventDefault();

        let selectedNumber =  document.getElementsByName('selectedGrid');
        let gridLayout = selectedNumber[0].value
        history.push({
            pathname : '/gamepage',
            state : {
                selectedGridLayout : gridLayout,
            }
        })
        console.log(gridLayout);
   } 
    return (
        <Container>
            <Design/>
                <Content>
                    <img src={Character} alt='avatar' width='150px' height='150px'/>
                    <Title>Greedy Hunter</Title>
                    <Text>
                        The aim is to eat all the food in record time <br/>
                        Configure your game grid below
                    </Text>
                    <StyledForm>
                        <InputContainer>
                            <StyledLabel>Game grid</StyledLabel>
                            <StyledInput 
                                type='number' 
                                name='selectedGrid' 
                                min='5' 
                                max='12'
                            />
                        </InputContainer>
                       
                        <StyledButton onClick={handleStart}>Start Game</StyledButton>
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
