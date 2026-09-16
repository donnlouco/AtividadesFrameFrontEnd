import { use } from "react";
import { useState, useEffect } from "react";

function Cronometro(){
    const [segundos, setSegundos] = useState(0);
    const [ativo, setAtivo] = useState(false)

    useEffect(() => {
        let intervalo = null;

        if(ativo){
            intervalo = setInterval(() => {
            setSegundos((valor) => valor + 1)
        }, 1000);
    }

        return () => clearInterval(intervalo)
    },[ativo])

    const alternarCronometro = () => setAtivo((prev) => !prev)

    const zerarCronometro = () =>{
        setAtivo(false);
        setSegundos(0);
    }

    const minutos = Math.floor(segundos / 60);
    const segRestantes = segundos % 60;

    return(
        <div>
            <h2>CRONOMETRO</h2>
            <p>
                {String(minutos).padStart(2, '0')}:{String(segRestantes).padStart(2, '0')}
            </p>
            <button onClick={alternarCronometro}>
                {ativo ? "Pausar" : "Iniciar"}
            </button>

            <button onClick={zerarCronometro}>Zerar</button>
        </div>
    )
}

export default Cronometro