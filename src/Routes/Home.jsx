import React, { useEffect, useState, useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from "../Context/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentist, setDentist]= useState ([])
  const { context} = useContext(ContextGlobal)
  const {theme } = context

  const getDentists = async()=>{
      const data = await fetch ("https://jsonplaceholder.typicode.com/users")
      .then ((response) =>{
        {/*console.log(response)*/}
        return response.json()
      })
      setDentist(data)
  }
  useEffect(()=>{
    getDentists()
  }, [])

  return (
    <main className= {theme}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
          {dentist.map((dentist =>{
            return(<Card 
              key ={dentist.id} 
              name={dentist.name} 
              username ={dentist.username} 
              id={dentist.id}/>)}
          ))}
      </div>
    </main>
  )
}

export default Home