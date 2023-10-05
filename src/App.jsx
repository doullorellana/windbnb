import { useEffect, useState } from "react";
import Countrytext from "./components/CountryText";
import Card from "./components/Card";
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

  const handleSubmit = (e) => {
    e.preventDefault()
    const search = e.target[0].value.toLowerCase();
    const filtrado = data.filter(obj => 
        obj.city.toLowerCase().includes(search));
    //console.log(filtrado);
    setFiltered(filtrado);
  }

  // Puedes ver la variable data en consola.
  console.log(data);
  return (
    <>
      <div className="container">

        <form class="row g-3" className="searchForm" onSubmit={handleSubmit}>
          <div class="col-auto">
            <input type="text" className="inputSearch" class="form-control" name="" id="" placeholder="Search city"/>
          </div>
          <div class="col-auto">
            <button type="submit" className="buttonSearch" class="btn btn-primary mb-3">Buscar</button>
          </div>
        </form>

        <Countrytext title="Finlandia"/>

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
    </>
  );
}

export default App;
