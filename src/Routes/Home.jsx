import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentist, setDentist]= useState ([])

  const getDentists = async()=>{
      const data = await fetch ("https://jsonplaceholder.typicode.com/users")
      .then ((response) =>{
        console.log(response)
        return response.json()
      })
      setDentist(data)
  }

  useEffect(()=>{
    getDentists()
  }, [])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
      {/*{dentist.map((dentist =>{return(<p>{dentist.name}</p>)}))}=>probando la data*/}
      
      </div>
    </main>
  )
}

export default Home