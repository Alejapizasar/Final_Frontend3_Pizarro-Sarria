import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { ContextGlobal } from "../Context/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { context, dispatch } = useContext(ContextGlobal)
  const { theme } = context

  const changeTheme = () => {
    dispatch({ type: "TOGGLE_THEME" })
  }


  return (
  <div className={theme}>
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to ="/">Home</Link>
      <Link to ="/favorites">Favs</Link>
      <Link to ="/contact">Contact</Link>
      <button  onClick={changeTheme}>Theme 🌓 </button>
    </nav>
  </div>
  )
}

export default Navbar

