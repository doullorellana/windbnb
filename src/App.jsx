import { useEffect, useState } from "react";
import Countrytext from "./components/CountryText";
import Card from "./components/Card";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState(null);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
      setFiltered(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);

const filterData = (text) => {
  return data.filter((element) => 
      element.city.toLowerCase().includes(text.toLowerCase())
  );
};

const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target[0].value.toLowerCase();
    const filtrado = filterData(search);
    //console.log(filtrado);
    setFiltered(filtrado);
  }

  // Puedes ver la variable data en consola.
  console.log(data);
  return (
    <>
      <div className="container">

        <Nav fnHandleSubmit = {handleSubmit}/>

        <Countrytext title="Finlandia"/>

        <div className="grid-container">

          {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
          {filtered === null 
              ? "Es null"
              : filtered.map((el, i) => {
                  return (
                    <> 
                      <Card elemento={el} item={i}/>
                    </>
                  )})}
        </div>
      </div>
    </>
  );
}

export default App;
