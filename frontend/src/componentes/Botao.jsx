function Botao({ textoBotao, Icone, onClick, className, ...props }) {
    return (
        <button onClick={onClick} className={className} {...props}>
            {Icone && <Icone />}
            {textoBotao}
        </button>
    );
}

export default Botao;