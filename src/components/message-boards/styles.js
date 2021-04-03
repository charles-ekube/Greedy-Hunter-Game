import styled from 'styled-components'


export const Container = styled.section`
    background : purple;
    height : 100vh;
    width : 100%;
    align-items : center;
    justify-content : center;
    display : flex;
    grid-template-columns : repeat(3, 1fr);
    `

export const Design = styled.aside`
    background : #ccc;
    opacity : 0.4;
    width : 300px;
    height : 500px;
`
export const Content = styled.div`
    background : inherit; 
    width : 500px;
    height : 500px;
    display : flex;
    flex-direction : column;
    align-items : center
`
export const Title = styled.h2`
    font-size : 30px;
    line-height : 24px;
    color : #fff;
`
export const Text = styled.p`
    color : #fff;
    font-size : 16px;
    line-height : 30px;
    text-align : center;
`
export const StyledForm = styled.form`
    display : flex;
    flex-direction : column;
`
export const InputContainer = styled.div`
    display: flex;
    width : 200px;
    
`
