import React from "react";
import Footer from "../../widgets/Footer";
import Header from "../../widgets/Header";
import { Container, GridLayout } from "./styles";
import { useLocation } from "react-router-dom";

const Card = () => {
//   const foodz = ([showFood, setShowFood] = React.useState(true));

  const { state } = useLocation();
  React.useEffect(() => {
    console.log(state);
  });
  const number = state.selectedGridLayout * state.selectedGridLayout;
  

  let food = []
  for (let i = 0 ; i <= number ; i--) {
        food.push(
            <span style={{border:'1px solid red', width: "5px", margin:'1px', borderRadius:'50%'}} key={i}></span>
        )
  }
  let rows = [];
  for (let i = 0; i < number; i++) {
    rows.push(
      <li
        style={{
          border: "1px solid purple",
          width: "67.6px",
          height: "40px",
          listStyle: "none",
          display:'flex',
          alignItems:'center',
          justifyContent:' center'
        }}
        key={i}
      >
        {food}  
      </li>
    );
  }


  return (
    <Container>
      <Header />
      <GridLayout>
        {rows}
        {food}
      </GridLayout>
      <Footer />
    </Container>
  );
};

export default Card;
