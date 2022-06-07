import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

function Search() {

  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input)
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch />
      <input
      onChange={(e) => setInput(e.target.value)}
      type="text"
      value={input}
      />

      <button>Click Button</button>
    </FormStyle>
  )
}

const FormStyle = styled.form`
  display: block;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`

export default Search