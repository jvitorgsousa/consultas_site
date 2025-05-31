function Input({ tipoInput = "text", textoInput, value, onChange, name, className, ...props }) {
    return (
        <input 
            type={tipoInput} 
            placeholder={textoInput} 
            value={value}
            onChange={onChange}
            name={name}
            className={className}
            {...props}
        />
    );
}

export default Input;