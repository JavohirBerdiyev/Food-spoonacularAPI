import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

function Food() {

  const [cuisine,setCuisine] = useState([]);
  let params = useLocation();
  let localStorage =params.pathname.split("/").at(-1)

  useEffect(() => {
    getFood(localStorage);
  }, [localStorage]);


  const getFood = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=73815a697bb74a00a2f009b934595910&cuisine=${name}`
      );
    const data = await api.json();

    setCuisine(data.results);

    console.log(data.results);
  }


  return (
    <Grid>
      { cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={'/recipe/' + item.id }>
              <img src={item.image} alt={item.title} />
              <h4> { item.title } </h4>
            </Link>
          </Card>
        )
      }) }
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`

export default Food