import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

const axiosInstance = axios.create({
  baseURL: "https://parseapi.back4app.com/classes/",
  timeout: 10000,
  headers: {
    "X-Parse-Application-Id": "8yGwyLsxDGXkYuyM257VjGRcsCX7ZFOkGj1ereGu",
    "X-Parse-REST-API-Key": "Ob2qmu0PoxNb0ljxMOKsyyEHMCcRbsaZYoy3nDCX",
  },
});

function App() {
  const [tarefas, setTarefas] = useState([]);
  useEffect(() => {
    console.log("inicio");
    axiosInstance.get("Tarefa/").then((response) => {
      console.log("response.data.results", response.data.results);
      setTarefas(response.data.results);
    });
    console.log("fim");
  }, []);
  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <ol>
        {tarefas.map((tarefa) => (
          <li key={tarefa.objectId}>
            {tarefa.descricao} {tarefa.feita ? "FEITA" : "A FAZER"}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
