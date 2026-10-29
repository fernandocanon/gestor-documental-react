import { useState } from "react";

function App() {

  const [documento, setDocumento] = useState("");
  const [documentos, setDocumentos] = useState([]);

  const agregarDocumento = () => {

    if (documento.trim() === "") return;

    setDocumentos([...documentos, documento]);

    setDocumento("");
  };

  const eliminarDocumento = (indice) => {

    const nuevaLista = documentos.filter(
      (_, index) => index !== indice
    );

    setDocumentos(nuevaLista);
  };

  return (
    <div className="Card-body">
      <h1>Gestor Documental</h1>

      <input
        type="text"
        placeholder="Nombre del documento"
        value={documento}
        onChange={(e) => setDocumento(e.target.value)}
      />

      <button onClick={agregarDocumento}>
        Agregar
      </button>
      <ul>
        
        {documentos.map((doc, index) => (
          <li key={index}>
            {doc}
            <button
              onClick={() => eliminarDocumento(index)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <h5 className="mb-3">
  Total documentos: {documentos.length}
</h5>
    </div>
  );
}

export default App;