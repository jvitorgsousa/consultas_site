function Input({ tipoInput = "text", textoInput, value, onChange }) {
    return (
        <div>
            <input 
                type={tipoInput} 
                placeholder={textoInput} 
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Input;