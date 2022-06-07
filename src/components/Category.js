import React from 'react'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


function Category() {
  return (
    <List>
      <SLink to='/food/Italian'>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to='/food/American'>
        <FaHamburger  />
        <h4>American</h4>
      </SLink>
      <SLink to='/food/Thai'>
      <FaPizzaSlice />
        <h4>Thai</h4>
      </SLink>
      <SLink to='/food/Chinese'>
      <FaHamburger />
        <h4>Chinese</h4>
      </SLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: #fff;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }

    h4 {
      color: #fff;
    }
  }
`

export default Category