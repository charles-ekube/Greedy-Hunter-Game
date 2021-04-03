import React from 'react'
import Footer from '../../widgets/Footer'
import Header from '../../widgets/Header'
import { Container, GridLayout } from './styles'
 



const Card = () => {
    
    const number = 10*10;
    let rows = []
    for (let i = 0; i < number; i++ ) {
        rows.push(<li style={{border: '1px solid purple', width:'67.6px', height:'40px', listStyle : 'none'}} key={i}></li>)
    }


    return (
        <Container>
            <Header/>
              <GridLayout>
                    {rows}
              </GridLayout>
            <Footer/>
        </Container>
    )
}

export default Card
