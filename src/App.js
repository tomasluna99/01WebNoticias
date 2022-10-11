import Formulario from "./components/Formulario";
import ListaNoticias from "./components/ListaNoticias";
import Titulo from "./components/Titulo"
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

function App() {
   const [noticias, setNoticias] = useState([]);


  //aqui seleccionamos el ciclo de vida montaje
  useEffect(()=>{
   consultarAPI();
  },[])


  const consultarAPI = async()=>{
    //usamos fetch con funcion asincronica
    //utilizamos try catch
    try{
      const respuesta = await fetch("https://newsdata.io/api/1/news?apikey=pub_1194917cb6234758575287c9a2bd1e16ecbd9&country=ar&language=es");
      const dato = await respuesta.json();
      setNoticias(dato.results);
    }catch(error){
     //cartel de error
     Swal.fire({
      icon: "error",
                title: "Oops...",
                text: "Error en el servidor",
                footer: "Intenta entrar en unos minutos",
     });

  };
   }
  return (
    <>
    
    
    <Titulo></Titulo>
    <Formulario></Formulario>
    <ListaNoticias nuevo={noticias} />
    </>
  );
}

export default App; 
