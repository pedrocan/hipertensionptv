import React from "react"
import logo from "../images/logo-verde-hptv.svg"
export default () => (
 
  <>
       <div className="top">
        <header className="cabecera-izq">
            <img src={logo} alt="logo"></img>
        </header>
     
        <div className="cabecera-dcha direccion">
            <p className="cabecera-titulo">Direccion</p>
            <p>C/Benito Corbal nº 28</p>          
            <p className="cabecera-titulo">Horario</p>
            <p>Martes y Viernes</p>
        </div>
        <div className="cabecera-dcha contacto">
            <p className="cabecera-titulo">Contacto</p> 
            <p>Telf: 986 84 47 11</p>
            <p>Email: hipertensionpontevedra@gmail.com</p>
        </div>
      </div>
</>
  
  )


