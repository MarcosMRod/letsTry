import React from 'react'
import styled from 'styled-components'

interface IButton {
    action: () => void
}
const Button = styled.button`
    outline: none;
    background: orange;
    color: "#222";
    border: none;
    padding: 10px;
    border-radius: 10px;
    align-self: flex-end;
    font-weight:bolder;

`
export const BuyButton:React.FC<IButton> = ({action}) => {
  return (
    <Button onClick={()=>action()}>Buy</Button>
  )
}