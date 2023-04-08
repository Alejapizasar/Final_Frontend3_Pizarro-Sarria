
import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Context/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { context } = useContext(ContextGlobal)
  const { data } = context


const deleteFav = () => {
  localStorage.clear();
  window.location.reload();
}

  return (
    <>
    <div>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {data.map((dentist) => {
          return (
          <Card 
          key={dentist.id} 
          name={dentist.name} 
          id={dentist.id} 
          username={dentist.username}/>
          )
        })}
      </div>
      <button onClick={deleteFav} className="favButton">Delete all favorites</button>
    </div>
    </>
  );
};

export default Favs;