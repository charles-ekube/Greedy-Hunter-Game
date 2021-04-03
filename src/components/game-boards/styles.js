import styled from 'styled-components';


export const Container = styled.section`
    background: #fff;
    width : 700px;
    border-radius : 10px;
`

export const GridLayout = styled.section`
    border : 2px solid purple;
    display : grid;
    grid-template-columns : repeat(10, 1fr);
    grid-template-rows : repeat(10, 1fr);
 ` 
export const Boxes = styled.div`
    border : 1px solid purple;
    height : 20px;
    width : 20px;
    background : inherit;
    
`
