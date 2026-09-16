import { useState, useEffect } from "react";

function Formulario(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const eValido = email.includes('@') && senha.length > 6;

    return(
        <form onSubmit={(e) => e.preventDefault()}>
            <div>
                <input type="email" placeholder="E-mail" value={email} 
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <input type="password" placeholder="Senha"  value={senha}
                onChange={(e) => setSenha(e.target.value)}/>
            </div>
            <button type="submit" disabled={!eValido} > Entrar</button>
        </form>
    )
}

export default Formulario