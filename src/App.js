import "./App.css";
import DataEntrys from "./components/DataEntrys";
import Poc from "./components/Poc";

console.log("Atividade de Reposição da 2ª Aula Interativa");
console.log("Matheus Alexandre de Souza");
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Proof Of Concept de AntD - Matheus Cometti
      </header>
      <body className="Body">
        <Poc></Poc>
        <DataEntrys></DataEntrys>
      </body>
    </div>
  );
}

export default App;
