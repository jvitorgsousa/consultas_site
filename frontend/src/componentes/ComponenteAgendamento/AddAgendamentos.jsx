import Input from "../Input";
import Botao from "../Botao";
import { Search } from "lucide-react";
import { useState } from "react";

function AddAgendamentos({ AddConsulta }) {
  const [title, setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [hora, setHora] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [data, setData] = useState("");

  return (
    <div>
      <Input
        textoInput="Nome ou especialidade"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        textoInput="Horario:"
        value={hora}
        onChange={(event) => setHora(event.target.value)}
      />
      <Input
        textoInput="Periodo:"
        value={periodo}
        onChange={(event) => setPeriodo(event.target.value)}
      />
      <Input
        textoInput="Data"
        value={data}
        onChange={(event) => setData(event.target.value)}
      />
      <Input
        textoInput="Descrição:"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <Botao
        Icone={Search}
        onClick={() => {
          if (!title || !hora || !periodo || !data ||!description) {
            return alert("Invalido.");
          }
          AddConsulta(title, hora, periodo, data ,description);
          setTitle("");
          setData("");
          setHora("");
          setPeriodo("");
          setDescription("");
        }}
      />
    </div>
  );
}

export default AddAgendamentos;

