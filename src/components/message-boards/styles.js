import styled from 'styled-components';
import {DesignImg} from '../../assets';


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
    background : url(${DesignImg});
    width : 350px;
    color : #CBCBFF;
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
    font-size : 50px;
    line-height : 30px;
    font-family : Inter;
    font-style : normal;
    font-weight : 600;
    color : #FFC700;
`
export const Text = styled.p`
    color : #CBCBFF;
    font-family : Inter;
    font-style : normal;
    font-weight : normal;
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
export const StyledLabel = styled.label`
font-family : Inter;
font-style : normal;
width : 161px;
font-weight : 500;
font-size : 20px;
line-height : 30px;
color : #EE8D94;

`
export const StyledInput = styled.input`
    border : 2px solid #EE8D94;
    border-radius : 5px;
    background : inherit;
    color : #fff;
    padding-left : 5px;
`
export const StyledButton = styled.button`
    height : 50px;
    background : #853594;
    color : #fff;
    display : flex;
    justify-content : center;
    align-items : center;
    border : none;
    margin : 30px 0;
    font-family : Inter;
    font-style : normal;
    font-weight : 500;
    font-size : 20px;
    border-radius: 5px;
`