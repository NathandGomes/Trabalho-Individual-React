import {Route,Routes} from 'react-router-dom';
import { HomePage } from '../Pages/Home/home';
import { AlterarTema } from '../Pages/Questao 1/alterartema';
import { Questao2 } from '../Pages/Questao 2/questao2';
import { Questao3 } from '../Pages/Questao 3/questao3';

export function Rotas() {  

    return (
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/alterartema" element={<AlterarTema />} />
            <Route path="/questao2" element={<Questao2 />} /> 
            <Route path="/questao3" element={<Questao3 />} /> 
        </Routes>
    )
   
}