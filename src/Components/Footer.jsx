import React, { useContext }from 'react'
import { ContextGlobal } from "../Context/global.context";

const Footer = () => {

  const {context} = useContext(ContextGlobal)
  const {theme} = context

  return (
    <footer className= {theme}>
        <p>Powered by Maria Alejandra Pizarro  and </p>
        <img src='./images/DH.png' alt='DH-logo' />
    </footer>
  )
}

export default Footer
