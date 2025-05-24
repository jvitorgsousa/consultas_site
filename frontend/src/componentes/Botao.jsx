function Botao({ textoBotao, Icone, onClick }) {
    return (
        <div>
            <button onClick={onClick}>
                {Icone && <Icone />}
                {textoBotao}
            </button>
        </div>
    )
}
export default Botao;