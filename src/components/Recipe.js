import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components';

function Recipe() {
  let loctaion = useLocation();
  const [detals, setDetals] = useState(null);

  const fetchDetails = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/${loctaion.pathname.split("/").at(-1)}/information?apiKey=2d0afc1a637643af8f0c77f28780e2b1`)

    const data = await api.json();

    setDetals(data);
  }
  let params = loctaion.pathname.split("/").at(-1);

  useEffect(() => {
    fetchDetails(params);
  }, [params]);


  return (
    <DetalWrapper>
      {detals !== null  ?  <div>
        <h2>{detals.title}</h2>
        <img src={detals.image} alt="" />
      </div> : <h1>Loading...</h1>}


    </DetalWrapper>
  )
}

const DetalWrapper  = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`

export default Recipe