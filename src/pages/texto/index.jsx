import './index.css'
import { useState } from 'react'
import Caberalho from '../componentes/caberalho'

export default function Texto(){
    const [titulo, setTitulo] = useState('Digite alguma coisa')
    const [titulo2, setTitulo2] = useState('Digite alguma coisa e e')
    const [pretexto, setPretexto] = useState('')
    const[cor,setCOR] = useState('#129448ff')

    return(
        <div className='page-texto' style={{ backgroundColor: `${cor}` }}>
             <Caberalho/>
            <section className="inputs">
                <h2>{titulo}</h2>
                <input 
                type="text" 
                onChange={(e) => setTitulo(e.target.value)}
                />
            </section>
            <section className="inputs">
                <h2>{titulo2}</h2>
                <input 
                type="text" 
                onChange={(e) => setPretexto(e.target.value)}
                />
                <button onClick={() => setTitulo2(pretexto)}>enviar</button>
            </section>

            <section className="inputs">
                <h2>EScOLHA UMA COR NEGUINHO</h2>

                <input type="color" onChange={(e) => setCOR(e.target.value)}/>

        


            </section>
        </div>
    )
}