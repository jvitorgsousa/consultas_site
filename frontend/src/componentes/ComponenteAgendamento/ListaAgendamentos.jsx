function ListaAgendamentos({ consulta, onConsultaClick, onDeleteConsultaClick }) {
  return (
    <div>
      {consulta.map(item => (
        <div
          key={item.id}
          style={{ textDecoration: item.isCompleted ? "line-through" : "none" }}
        >
          <h2>{item.title}</h2>

          <p> 
            A consulta marcada para o dia:{item.data}, as {item.hora} no periodo da {item.periodo}.
          </p>
          <p>--------</p>
          <p>Descrição informada: {item.description}</p>

          <button onClick={() => onConsultaClick(item.id)}>
            {item.isCompleted ? "Desmarcar" : "Concluir"}
          </button>
          <button onClick={() => onDeleteConsultaClick(item.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}

export default ListaAgendamentos