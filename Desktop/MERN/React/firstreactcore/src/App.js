import ComponenteDojo from "./Componentes/ComponenteDojo/ComponenteDojo";


const App =() => {
  return (
    <div className="App">
      <h1>Hola Dojo!</h1>
      <h2>Cosas que tengo que hacer:</h2>
      <ComponenteDojo tarea1="Aprender React" tarea2="Escalar el Monte Everest" tarea3="Correr una maraton"tarea4="Alimentar al perro"/>
    </div>
  );
}

export default App;
