import React from "react";

export default function App() {
  /* desentructuramos el array asi result queda mas facil */
  /* y no result[0] */
  /* la func , es una funcion para cambiar el result */
  /* por ejemplo setIsImportant */
  const [result, setIsImportant] = React.useState(
    "Si"
  ); /* React.useState es donde se llama la funcion */

  function handleClick() {
    /* funcion que maneja el click */
    if (result === "No") {
      /* si el estado es no */
      setIsImportant("Si"); /* lo ponemos en si */
    } else {
      /* de lo contrario */
      setIsImportant("No"); /* lo ponemos en no */
    }
  }
  console.log(result);
  return (
    <div className="state">
      <h1 className="state--title">Es importante aprender Is state?</h1>
      <div className="state--value" onClick={handleClick}>
        <h1>{result}</h1>
      </div>
    </div>
  );
}
