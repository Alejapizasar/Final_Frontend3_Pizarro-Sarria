import React, { useContext } from "react";
import Form from '../Components/Form';
import { ContextGlobal } from "../Context/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const { context } = useContext(ContextGlobal)
  const { theme } = context

  return (
    <div className={theme} >
      <h2 className="formContact">Want to know more?</h2>
      <p className="formContact">Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact