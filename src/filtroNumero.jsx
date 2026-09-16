import { useState, useEffect } from "react";

function FiltroNumero(){
    const [numeros, setNumeros] = useState([]);
    const [numerosValidos, setNumerosValidos] = useState('')


    useEffect(() => {
        const numerosAleatorios = Array.from({length: 10}, () => Math.floor(Math.random() * 100) + 1);
        setNumeros(numerosAleatorios)
    },[])

    const numerosFiltrados = numeros.filter((num) => {
        if(numerosValidos === '') return true;
        return num > Number(numerosValidos)
    });

    return(
        <div>
            <input type="number" placeholder="Filtrar numero maior que..."
            value={numerosValidos}
            onChange={(e) => setNumerosValidos(e.target.value)}
            />
            <ul>
                {numerosFiltrados.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
        </div>
    )
}


export default FiltroNumero