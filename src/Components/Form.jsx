import React,  { useState} from "react";
import CardForm from "./CardForm";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [send, setSend] = useState(false);
  const [errorSelect, setErrorSelect] = useState("");

  
  const onChangeUserName = (event) =>{
    setUserName(event.target.value);
  };
  const onChangeUserLastName = (event) =>{
    setUserLastName(event.target.value);
  };
  const onChangeUserMail = (event) =>{
    setUserMail(event.target.value);
  };


  const handleSubmit = (event) =>{
    event.preventDefault();

    const validUserName = userName.trim();
    if(validUserName.length < 3){
      setErrorSelect("Por favor chequea que la información sea correcta, Nombre debe tener mas de 3 caracteres");
      return;
    }

    const validUserLastName = userLastName.trim();
    if(validUserLastName.length <= 6){
      setErrorSelect("Por favor chequea que la información sea correcta, Apellido debe tener minimo 6 caracteres");
      return;
    }

    const validMail = userMail.trim();
    const regexMail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;    
    if(validMail.length <= 6){
      setErrorSelect("Por favor chequea que la información sea correcta, debes ingresar una cuenta de correo electronico");
      return;
    } else if (!regexMail.test(validMail)) {
      setErrorSelect("Por favor chequea que la información sea correcta, debes ingresar una cuenta de correo electronico valida");
      return;
    }
    
    setSend(true);
    setErrorSelect("");
  };

  return (
    <div className="formCard">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name:' value={userName} onChange={onChangeUserName} />
        <input type="text" placeholder='Last Name:' value={userLastName} onChange={onChangeUserLastName} />
        <input type="mail" placeholder='Email:' value={userMail} onChange={onChangeUserMail} />
        <input type="submit" value="Submit" />
      </form>

    <div className='error'>{errorSelect}</div>

      {send ? <CardForm userName={userName} userLastName={userLastName} userMail={userMail}/>: "" }

    </div>
  );
};

export default Form;
