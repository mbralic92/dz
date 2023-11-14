import "./App.css";

import IspisPodataka from "./Components/IspisPodataka";

function App() {
  const user = [];

  return (
    <div className="App">
      <IspisPodataka user={user} />
    </div>
  );
}

export default App;
