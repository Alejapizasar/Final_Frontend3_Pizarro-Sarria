import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Context/global.context";


const Card = ({ name, username, id }) => {

  const { context, dispatch } = useContext(ContextGlobal)
  const { data, theme } = context


  const addFav = (dentistName, dentistUserName, dentistid)=>{
    // Aqui iria la logica para agregar la Card en el localStorage

    if (data.filter(dentist => dentist.id === dentistid).length > 0) {
      dispatch({ type: "FAVORITES", payload: data.filter(dentist => dentist.id !== dentistid)})
      return
    }

    const update = data.length === 0 ?  [{name: dentistName, username: dentistUserName, id: dentistid}] : 
    [...data, {name: dentistName, username: dentistUserName, id: dentistid}]
    dispatch({ type: "FAVORITES", payload: update})
  }


  return (
    <div className={theme === "light" ? "card" : "card-dark"}>
    <Link to={'detail/' + id}>
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <div>
          <img className ="cardImg" src="./images/doctor.jpg" alt='doctor-images'/>
          <div>
          <h2>{name}</h2>
          <h4>{username}</h4>
          </div>
        </div>
        </Link>
        <button onClick= {() => addFav(name, username, id)} className="favButton"> Add Fav⭐</button>
    </div>
  );
};

export default Card;