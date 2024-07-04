import React from 'react'

/*  <Prop numero = {5}/> manda un number*/
/*  <Prop numero = 5/> manda un string*/
/* export const Props = ({numero}) => { para recibirlo como number*/
/* export const Props = (numero) => { par recibirlo como string*/

export const Props = ({numero}) => {
    
  return (
    <>
        <h1>Vamos a trabajar con las props</h1>
        <p>{numero + 5}</p>
    </>
  )
}
